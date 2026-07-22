import { catalog, durationBucket } from "./catalog";
import type { DurationBucket, Platform, RoomState, Show, SwipeChoice } from "./types";

export function createInitialDeck(platforms: Platform[], durations: DurationBucket[]): string[] {
  return catalog
    .filter((show) => platforms.includes(show.platform) && durations.includes(durationBucket(show.runtime)))
    .sort((a, b) => b.popularity - a.popularity)
    .map((show) => show.id);
}

export function findMutualLike(state: RoomState, showId: string): boolean {
  return state.members.length === 2 && state.members.every((member) => state.swipes[member.id]?.[showId] === "like");
}

export function applySwipe(state: RoomState, memberId: string, showId: string, choice: SwipeChoice): RoomState {
  if (state.status !== "swiping" || !state.members.some((member) => member.id === memberId) || !state.deck.includes(showId)) return state;

  const next: RoomState = {
    ...state,
    swipes: {
      ...state.swipes,
      [memberId]: { ...state.swipes[memberId], [showId]: choice },
    },
  };

  if (choice === "like" && findMutualLike(next, showId)) {
    return { ...next, status: "matched", matchedShowId: showId };
  }

  return next;
}

export function adaptDeck(state: RoomState, vectorMatches: string[] = []): string[] {
  const seen = new Set(Object.values(state.swipes).flatMap((swipes) => Object.keys(swipes)));
  const likedIds = Object.values(state.swipes).flatMap((swipes) =>
    Object.entries(swipes).filter(([, choice]) => choice === "like").map(([id]) => id),
  );
  const likedGenres = new Set(likedIds.flatMap((id) => catalog.find((show) => show.id === id)?.genres ?? []));
  const vectorRank = new Map(vectorMatches.map((id, index) => [id, vectorMatches.length - index]));
  const locked = state.deck.filter((id) => seen.has(id));
  const untouched = state.deck.filter((id) => !seen.has(id)).sort((a, b) => {
    const showA = catalog.find((show) => show.id === a);
    const showB = catalog.find((show) => show.id === b);
    if (!showA || !showB) return 0;
    return adaptiveRank(showB, likedGenres, vectorRank) - adaptiveRank(showA, likedGenres, vectorRank);
  });

  return [...locked, ...untouched];
}

function adaptiveRank(show: Show, likedGenres: Set<string>, vectorRank: Map<string, number>): number {
  const genreAffinity = show.genres.filter((genre) => likedGenres.has(genre)).length * 30;
  return show.popularity + genreAffinity + (vectorRank.get(show.id) ?? 0) * 40;
}

export function continueAfterResult(state: RoomState): RoomState {
  if (state.status !== "matched" && state.status !== "recommended") return state;
  return { ...state, status: "swiping", matchedShowId: undefined, recommendation: undefined };
}

export function likedShowIds(state: RoomState): string[] {
  return [...new Set(Object.values(state.swipes).flatMap((swipes) =>
    Object.entries(swipes).filter(([, choice]) => choice === "like").map(([id]) => id),
  ))];
}
