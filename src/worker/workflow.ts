import { WorkflowEntrypoint, type WorkflowEvent, type WorkflowStep } from "cloudflare:workers";
import type { Env } from "./env";

export interface PostMatchParams {
  roomCode: string;
  showId: string;
  memberNames: string[];
  kind: "match" | "fallback";
  reason: string;
}

export class PostMatchWorkflow extends WorkflowEntrypoint<Env, PostMatchParams> {
  async run(event: Readonly<WorkflowEvent<PostMatchParams>>, step: WorkflowStep): Promise<void> {
    const params = event.payload;
    await step.do("persist result", async () => {
      await this.env.DB.prepare(
        "INSERT INTO matches (room_code, show_id, member_names, kind, reason, matched_at) VALUES (?, ?, ?, ?, ?, datetime('now'))",
      ).bind(params.roomCode, params.showId, JSON.stringify(params.memberNames), params.kind, params.reason).run();
    });
    await step.do("record analytics", async () => {
      this.env.METRICS.writeDataPoint({
        blobs: ["match_completed", params.roomCode, params.showId, params.kind],
        doubles: [params.memberNames.length],
        indexes: [params.roomCode],
      });
    });
  }
}
