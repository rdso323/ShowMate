import { durationBucket } from "./catalog";
import {
  INITIAL_DECK_SIZE,
  type DurationBucket,
  type MediaType,
  type Platform,
  type RoomState,
  type Show,
  type SwipeChoice,
} from "./types";

export function eligibleShows(
  shows: readonly Show[],
  platforms: Platform[],
  durations: DurationBucket[],
  mediaTypes: MediaType[],
): Show[] {
  return shows.filter((show) =>
    platforms.includes(show.platform)
    && mediaTypes.includes(show.mediaType)
    && durations.includes(durationBucket(show.runtime)));
}

export function createInitialDeck(
  shows: readonly Show[],
  platforms: Platform[],
  durations: DurationBucket[],
  mediaTypes: MediaType[],
  limit = INITIAL_DECK_SIZE,
): string[] {
  return eligibleShows(shows, platforms, durations, mediaTypes)
    .sort((a, b) => b.popularity - a.popularity || b.rating - a.rating)
    .slice(0, limit)
    .map((show) => show.id);
}

export function findMutualLike(state: RoomState, showId: string): boolean {
  return state.members.length >= 2
    && state.members.every((member) => state.swipes[member.id]?.[showId] === "like");
}

export function applySwipe(state: RoomState, memberId: string, showId: string, choice: SwipeChoice): RoomState {
  if (state.status !== "swiping" || !state.members.some((member) => member.id === memberId) || !state.deck.includes(showId)) {
    return state;
  }

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

export function adaptDeck(
  state: RoomState,
  shows: readonly Show[],
  vectorMatches: string[] = [],
  limit = INITIAL_DECK_SIZE,
): string[] {
  const seen = new Set(Object.values(state.swipes).flatMap((swipes) => Object.keys(swipes)));
  const likedIds = Object.values(state.swipes).flatMap((swipes) =>
    Object.entries(swipes).filter(([, choice]) => choice === "like").map(([id]) => id),
  );
  const groupLiked = new Set(
    state.deck.filter((showId) =>
      state.members.some((member) => state.swipes[member.id]?.[showId] === "like")),
  );
  const likedGenres = new Set(likedIds.flatMap((id) => shows.find((show) => show.id === id)?.genres ?? []));
  const vectorRank = new Map(vectorMatches.map((id, index) => [id, vectorMatches.length - index]));
  const rank = (show: Show) => adaptiveRank(show, likedGenres, vectorRank, groupLiked);

  const locked = state.deck.filter((id) => seen.has(id));
  const untouchedExisting = state.deck
    .filter((id) => !seen.has(id))
    .map((id) => shows.find((show) => show.id === id))
    .filter((show): show is Show => Boolean(show))
    .sort((a, b) => rank(b) - rank(a))
    .map((show) => show.id);
  const existingSet = new Set([...locked, ...untouchedExisting]);
  const injected = eligibleShows(shows, state.platforms, state.durations, state.mediaTypes)
    .filter((show) => !existingSet.has(show.id))
    .sort((a, b) => rank(b) - rank(a))
    .map((show) => show.id);

  const untouched = [...untouchedExisting, ...injected].slice(0, Math.max(limit - locked.length, 0));
  return [...locked, ...untouched];
}

function adaptiveRank(
  show: Show,
  likedGenres: Set<string>,
  vectorRank: Map<string, number>,
  groupLiked: Set<string>,
): number {
  const genreAffinity = show.genres.filter((genre) => likedGenres.has(genre)).length * 28;
  const groupBoost = groupLiked.has(show.id) ? 12 : 0;
  return show.popularity + genreAffinity + groupBoost + (vectorRank.get(show.id) ?? 0) * 40;
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

export function publicRoomState(state: RoomState, memberId: string): RoomState {
  const isHost = state.members[0]?.id === memberId;
  if (isHost) return state;
  return {
    ...state,
    swipes: { [memberId]: state.swipes[memberId] ?? {} },
  };
}

export function removeMember(state: RoomState, targetId: string): RoomState {
  if (!state.members.some((member) => member.id === targetId)) return state;
  if (state.members[0]?.id === targetId) return state;

  const { [targetId]: _removed, ...swipes } = state.swipes;
  return {
    ...state,
    members: state.members.filter((member) => member.id !== targetId),
    swipes,
  };
}
