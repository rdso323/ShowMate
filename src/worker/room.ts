import { Server, type Connection } from "partyserver";
import { createInitialDeck, adaptDeck, applySwipe, continueAfterResult } from "../shared/matching";
import type { ClientMessage, RoomState, ServerMessage } from "../shared/types";
import { compromisePick, ensureCatalogVectors, matchReason, similarShowIds } from "./recommendations";
import type { Env } from "./env";

interface ConnectionState {
  memberId?: string;
}

export class ShowMateRoom extends Server<Env> {
  static options = { hibernate: true };
  private room!: RoomState;

  async onStart(): Promise<void> {
    this.room = await this.ctx.storage.get<RoomState>("room") ?? {
      code: this.name.toUpperCase(),
      status: "lobby",
      members: [],
      platforms: ["netflix", "prime", "disney", "max"],
      durations: ["quick", "standard", "epic"],
      deck: [],
      swipes: {},
      createdAt: new Date().toISOString(),
    };
  }

  onConnect(connection: Connection<ConnectionState>): void {
    this.send(connection, { type: "state", state: this.room });
  }

  async onMessage(connection: Connection<ConnectionState>, value: string | ArrayBuffer | ArrayBufferView): Promise<void> {
    if (typeof value !== "string") return;
    let message: ClientMessage;
    try {
      message = JSON.parse(value) as ClientMessage;
    } catch {
      this.send(connection, { type: "error", message: "That message was not valid." });
      return;
    }

    try {
      await this.handleMessage(connection, message);
    } catch {
      this.send(connection, { type: "error", message: "Something went wrong. Please try that again." });
    }
  }

  async onClose(connection: Connection<ConnectionState>): Promise<void> {
    const memberId = connection.state?.memberId;
    if (!memberId) return;
    const hasAnotherConnection = [...this.getConnections<ConnectionState>()].some((candidate) => candidate.id !== connection.id && candidate.state?.memberId === memberId);
    if (!hasAnotherConnection) {
      this.room = { ...this.room, members: this.room.members.map((member) => member.id === memberId ? { ...member, connected: false } : member) };
      await this.persistAndBroadcast();
    }
  }

  private async handleMessage(connection: Connection<ConnectionState>, message: ClientMessage): Promise<void> {
    if (message.type === "join") {
      await this.join(connection, message.memberId, message.name);
      return;
    }
    if (!this.room.members.some((member) => member.id === message.memberId)) throw new Error("Unknown member");

    if (message.type === "configure") {
      if (this.room.status !== "lobby" || this.room.members[0]?.id !== message.memberId) return;
      this.room = { ...this.room, platforms: message.platforms, durations: message.durations };
    }

    if (message.type === "start") {
      if (this.room.status !== "lobby" || this.room.members.length !== 2 || this.room.members[0]?.id !== message.memberId) return;
      const deck = createInitialDeck(this.room.platforms, this.room.durations);
      if (!deck.length) throw new Error("No eligible shows");
      this.room = { ...this.room, deck, status: "swiping" };
      this.ctx.waitUntil(ensureCatalogVectors(this.env, deck).catch(() => undefined));
      this.metric("session_started");
    }

    if (message.type === "swipe") {
      const previousStatus = this.room.status;
      this.room = applySwipe(this.room, message.memberId, message.showId, message.choice);
      this.metric("swipe", message.choice);
      if (message.choice === "like" && this.room.status === "swiping") {
        const vectorMatches = await similarShowIds(this.env, message.showId).catch(() => []);
        this.room = { ...this.room, deck: adaptDeck(this.room, vectorMatches) };
      }
      if (previousStatus === "swiping" && this.room.status === "matched" && this.room.matchedShowId) {
        const showId = this.room.matchedShowId;
        const reason = await matchReason(this.env, showId).catch(() => "You both chose it. Tonight's watch is settled.");
        this.room = { ...this.room, recommendation: { showId, reason, kind: "match" } };
        await this.startWorkflow(showId, reason, "match");
      }
    }

    if (message.type === "pick-for-us" && this.room.status === "swiping") {
      const pick = await compromisePick(this.env, this.room);
      this.room = { ...this.room, status: "recommended", recommendation: { ...pick, kind: "fallback" } };
      await this.startWorkflow(pick.showId, pick.reason, "fallback");
    }

    if (message.type === "continue") {
      this.room = continueAfterResult(this.room);
      this.metric("swiping_resumed");
    }

    await this.persistAndBroadcast();
  }

  private async join(connection: Connection<ConnectionState>, memberId: string, rawName: string): Promise<void> {
    const name = rawName.trim().slice(0, 24);
    if (!name || !/^[a-zA-Z0-9_-]{6,64}$/.test(memberId)) throw new Error("Invalid member");
    const existing = this.room.members.find((member) => member.id === memberId);
    if (!existing && this.room.members.length >= 2) {
      this.send(connection, { type: "error", message: "This room already has two people." });
      return;
    }
    connection.setState({ memberId });
    const members = existing
      ? this.room.members.map((member) => member.id === memberId ? { ...member, name, connected: true } : member)
      : [...this.room.members, { id: memberId, name, connected: true }];
    this.room = { ...this.room, members, swipes: { ...this.room.swipes, [memberId]: this.room.swipes[memberId] ?? {} } };
    this.ctx.waitUntil(this.env.DB.prepare(
      "INSERT OR REPLACE INTO room_members (room_code, member_id, display_name, joined_at) VALUES (?, ?, ?, datetime('now'))",
    ).bind(this.room.code, memberId, name).run().then(() => undefined).catch(() => undefined));
    this.metric("member_joined");
    await this.persistAndBroadcast();
  }

  private async startWorkflow(showId: string, reason: string, kind: "match" | "fallback"): Promise<void> {
    await this.env.POST_MATCH_WORKFLOW.create({
      id: `${this.room.code}-${Date.now()}`,
      params: { roomCode: this.room.code, showId, memberNames: this.room.members.map((member) => member.name), kind, reason },
    }).catch(() => undefined);
  }

  private metric(event: string, detail = ""): void {
    this.env.METRICS.writeDataPoint({ blobs: [event, detail], indexes: [this.room.code] });
  }

  private async persistAndBroadcast(): Promise<void> {
    await this.ctx.storage.put("room", this.room);
    this.broadcast(JSON.stringify({ type: "state", state: this.room } satisfies ServerMessage));
  }

  private send(connection: Connection, message: ServerMessage): void {
    connection.send(JSON.stringify(message));
  }
}
