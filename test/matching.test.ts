import { describe, expect, it } from "vitest";
import { catalog } from "../src/shared/catalog";
import { adaptDeck, applySwipe, continueAfterResult, createInitialDeck, findMutualLike, publicRoomState } from "../src/shared/matching";
import type { RoomState } from "../src/shared/types";

function room(overrides: Partial<RoomState> = {}): RoomState {
  return {
    code: "ABCDE",
    status: "swiping",
    members: [
      { id: "member_a", name: "Alex", connected: true },
      { id: "member_b", name: "Sam", connected: true },
    ],
    platforms: ["netflix"],
    mediaTypes: ["tv"],
    durations: ["standard"],
    deck: ["stranger-things", "wednesday", "bridgerton", "beef"],
    swipes: { member_a: {}, member_b: {} },
    createdAt: "2026-07-22T00:00:00.000Z",
    ...overrides,
  };
}

describe("group matching", () => {
  it("matches only after every member likes the same title", () => {
    const three = room({
      members: [
        { id: "member_a", name: "Alex", connected: true },
        { id: "member_b", name: "Sam", connected: true },
        { id: "member_c", name: "Riley", connected: true },
      ],
      swipes: { member_a: {}, member_b: {}, member_c: {} },
    });

    const first = applySwipe(three, "member_a", "wednesday", "like");
    const second = applySwipe(first, "member_b", "wednesday", "like");
    expect(second.status).toBe("swiping");
    expect(findMutualLike(second, "wednesday")).toBe(false);

    const match = applySwipe(second, "member_c", "wednesday", "like");
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

  it("keeps prior swipes and returns the group to the deck after a match", () => {
    const firstLike = applySwipe(room(), "member_a", "wednesday", "like");
    const match = applySwipe(firstLike, "member_b", "wednesday", "like");
    const resumed = continueAfterResult({ ...match, recommendation: { showId: "wednesday", reason: "A match", kind: "match" } });

    expect(resumed.status).toBe("swiping");
    expect(resumed.swipes).toEqual(match.swipes);
    expect(resumed.matchedShowId).toBeUndefined();
    expect(resumed.recommendation).toBeUndefined();
  });

  it("hides other members' votes from non-hosts", () => {
    const state = applySwipe(applySwipe(room(), "member_a", "wednesday", "like"), "member_b", "beef", "pass");
    const forGuest = publicRoomState(state, "member_b");
    expect(forGuest.swipes).toEqual({ member_b: { beef: "pass" } });
    expect(publicRoomState(state, "member_a").swipes.member_b.beef).toBe("pass");
  });
});

describe("catalog and adaptation", () => {
  it("starts with popular eligible titles across media types", () => {
    const tvDeck = createInitialDeck(catalog, ["prime"], ["quick"], ["tv"]);
    expect(tvDeck.length).toBeGreaterThan(0);
    expect(tvDeck.every((id) => catalog.find((show) => show.id === id)?.mediaType === "tv")).toBe(true);

    const movieDeck = createInitialDeck(catalog, ["netflix"], ["epic"], ["movie"]);
    expect(movieDeck.length).toBeGreaterThan(0);
    expect(movieDeck.every((id) => catalog.find((show) => show.id === id)?.mediaType === "movie")).toBe(true);
  });

  it("keeps exposed titles locked and promotes liked genres from the wider pool", () => {
    const state = room();
    state.swipes.member_a.wednesday = "like";
    const adapted = adaptDeck(state, catalog);
    expect(adapted[0]).toBe("wednesday");
    expect(adapted).toContain("bridgerton");
    expect(adapted).toContain("beef");
  });

  it("uses Vectorize similarity to influence unseen titles", () => {
    const state = room();
    state.swipes.member_a.wednesday = "like";
    const adapted = adaptDeck(state, catalog, ["bridgerton"]);
    expect(adapted[0]).toBe("wednesday");
    expect(adapted[1]).toBe("bridgerton");
  });

  it("seeds a much larger catalog than the original sixteen titles", () => {
    expect(catalog.length).toBeGreaterThan(100);
    expect(catalog.some((show) => show.mediaType === "movie")).toBe(true);
    expect(catalog.some((show) => show.mediaType === "tv")).toBe(true);
  });
});
