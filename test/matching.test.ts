import { describe, expect, it } from "vitest";
import { adaptDeck, applySwipe, createInitialDeck } from "../src/shared/matching";
import type { RoomState } from "../src/shared/types";

function room(): RoomState {
  return {
    code: "ABCDE",
    status: "swiping",
    members: [
      { id: "member_a", name: "Alex", connected: true },
      { id: "member_b", name: "Sam", connected: true },
    ],
    platforms: ["netflix"],
    durations: ["standard"],
    deck: ["stranger-things", "wednesday", "bridgerton", "beef"],
    swipes: { member_a: {}, member_b: {} },
    createdAt: "2026-07-22T00:00:00.000Z",
  };
}

describe("two-person matching", () => {
  it("matches only after both people like the same show", () => {
    const firstLike = applySwipe(room(), "member_a", "wednesday", "like");
    expect(firstLike.status).toBe("swiping");

    const match = applySwipe(firstLike, "member_b", "wednesday", "like");
    expect(match.status).toBe("matched");
    expect(match.matchedShowId).toBe("wednesday");
  });

  it("does not match when either person passes", () => {
    const liked = applySwipe(room(), "member_a", "wednesday", "like");
    const passed = applySwipe(liked, "member_b", "wednesday", "pass");
    expect(passed.status).toBe("swiping");
    expect(passed.matchedShowId).toBeUndefined();
  });

  it("ignores swipes from people outside the room", () => {
    expect(applySwipe(room(), "intruder", "wednesday", "like")).toEqual(room());
  });
});

describe("catalog and adaptation", () => {
  it("starts with popular eligible shows", () => {
    const deck = createInitialDeck(["prime"], ["quick"]);
    expect(deck).toEqual(["fleabag"]);
  });

  it("keeps exposed shows available to both people and promotes liked genres", () => {
    const state = room();
    state.swipes.member_a.wednesday = "like";
    const adapted = adaptDeck(state);
    expect(adapted[0]).toBe("wednesday");
    expect(adapted.indexOf("beef")).toBeLessThan(adapted.indexOf("bridgerton"));
    expect(adapted).toHaveLength(state.deck.length);
  });

  it("uses Vectorize similarity to influence unseen titles", () => {
    const state = room();
    state.swipes.member_a.wednesday = "like";
    const adapted = adaptDeck(state, ["bridgerton"]);
    expect(adapted[1]).toBe("bridgerton");
  });
});
