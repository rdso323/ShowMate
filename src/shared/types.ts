export const PLATFORMS = ["netflix", "prime", "disney", "max"] as const;
export type Platform = (typeof PLATFORMS)[number];

export const DURATION_BUCKETS = ["quick", "standard", "epic"] as const;
export type DurationBucket = (typeof DURATION_BUCKETS)[number];
export type SwipeChoice = "like" | "pass";

export interface Show {
  id: string;
  title: string;
  year: number;
  platform: Platform;
  genres: string[];
  runtime: number;
  rating: number;
  synopsis: string;
  popularity: number;
  accent: string;
  watchUrl: string;
}

export interface Member {
  id: string;
  name: string;
  connected: boolean;
}

export interface Recommendation {
  showId: string;
  reason: string;
  kind: "match" | "fallback";
}

export interface RoomState {
  code: string;
  status: "lobby" | "swiping" | "matched" | "recommended";
  members: Member[];
  platforms: Platform[];
  durations: DurationBucket[];
  deck: string[];
  swipes: Record<string, Record<string, SwipeChoice>>;
  matchedShowId?: string;
  recommendation?: Recommendation;
  createdAt: string;
}

export type ClientMessage =
  | { type: "join"; memberId: string; name: string }
  | { type: "configure"; memberId: string; platforms: Platform[]; durations: DurationBucket[] }
  | { type: "start"; memberId: string }
  | { type: "swipe"; memberId: string; showId: string; choice: SwipeChoice }
  | { type: "pick-for-us"; memberId: string };

export type ServerMessage =
  | { type: "state"; state: RoomState }
  | { type: "error"; message: string }
  | { type: "deck-updated"; showIds: string[] };

export const PLATFORM_LABELS: Record<Platform, string> = {
  netflix: "Netflix",
  prime: "Prime Video",
  disney: "Disney+",
  max: "Max",
};

export const DURATION_LABELS: Record<DurationBucket, string> = {
  quick: "Under 30 min",
  standard: "30–60 min",
  epic: "60+ min",
};
