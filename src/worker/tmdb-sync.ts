import type { MediaType, Platform, Show } from "../shared/types";
import { upsertCatalog } from "./catalog-store";
import type { Env } from "./env";

const TMDB_BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

/** TMDB watch-provider IDs (US) for the platforms ShowMate supports. */
const PROVIDER_IDS: Record<Platform, number> = {
  netflix: 8,
  prime: 9,
  disney: 337,
  max: 1899,
};

const WATCH_URLS: Record<Platform, string> = {
  netflix: "https://www.netflix.com/",
  prime: "https://www.primevideo.com/",
  disney: "https://www.disneyplus.com/",
  max: "https://www.max.com/",
};

const ACCENTS = [
  "#df4c42", "#7065a8", "#d58aa5", "#d6653d", "#dcae46", "#415269", "#b93631", "#bd594f",
  "#667877", "#3d775d", "#d9774a", "#4f8fd3", "#59624a", "#4d9f99", "#bd3b6d", "#8b3c32",
];

interface TmdbListItem {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  popularity?: number;
  genre_ids?: number[];
}

interface TmdbDetails {
  runtime?: number;
  episode_run_time?: number[];
  genres?: Array<{ name: string }>;
}

const GENRE_NAMES: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary",
  18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-fi", 10770: "TV Movie", 53: "Thriller",
  10752: "War", 37: "Western", 10759: "Action", 10762: "Kids", 10763: "News", 10764: "Reality",
  10765: "Sci-fi", 10766: "Soap", 10767: "Talk", 10768: "War",
};

export async function syncCatalogFromTmdb(env: Env): Promise<{ upserted: number; skipped: boolean; reason?: string }> {
  const apiKey = env.TMDB_API_KEY;
  if (!apiKey) return { upserted: 0, skipped: true, reason: "TMDB_API_KEY is not configured" };

  const collected = new Map<string, Show>();

  for (const mediaType of ["tv", "movie"] as const) {
    const trending = await tmdbList(apiKey, `/trending/${mediaType}/day`);
    mergeShows(collected, trending.map((item, index) => toShow(item, mediaType, inferPlatform(item), 100 - index, true)));

    for (const platform of Object.keys(PROVIDER_IDS) as Platform[]) {
      const discoverPath = mediaType === "movie" ? "/discover/movie" : "/discover/tv";
      const query = new URLSearchParams({
        with_watch_providers: String(PROVIDER_IDS[platform]),
        watch_region: "US",
        sort_by: "popularity.desc",
        "vote_count.gte": "40",
      });
      const discovered = await tmdbList(apiKey, `${discoverPath}?${query}`);
      mergeShows(collected, discovered.slice(0, 40).map((item, index) =>
        toShow(item, mediaType, platform, 92 - Math.floor(index / 2), false)));
    }
  }

  const shows = [...collected.values()];
  // Enrich a capped slice so the daily cron stays within Worker time limits.
  const withRuntime = await enrichRuntimes(apiKey, shows.slice(0, 80));
  const remainder = shows.slice(80);
  const upserted = await upsertCatalog(env, [...withRuntime, ...remainder]);
  await env.CACHE.put("catalog-sync:last", new Date().toISOString(), { expirationTtl: 60 * 60 * 24 * 14 });
  return { upserted, skipped: false };
}

async function tmdbList(apiKey: string, path: string): Promise<TmdbListItem[]> {
  const url = path.startsWith("http") ? path : `${TMDB_BASE}${path}`;
  const separator = url.includes("?") ? "&" : "?";
  const response = await fetch(`${url}${separator}api_key=${apiKey}`);
  if (!response.ok) throw new Error(`TMDB ${path} failed with ${response.status}`);
  const body = await response.json() as { results?: TmdbListItem[] };
  return body.results ?? [];
}

async function enrichRuntimes(apiKey: string, shows: Show[]): Promise<Show[]> {
  const enriched: Show[] = [];
  for (const show of shows) {
    const tmdbId = show.id.match(/-m?(\d+)$/)?.[1] ?? show.id.match(/(\d+)$/)?.[1];
    if (!tmdbId) {
      enriched.push(show);
      continue;
    }
    try {
      const path = show.mediaType === "movie" ? `/movie/${tmdbId}` : `/tv/${tmdbId}`;
      const response = await fetch(`${TMDB_BASE}${path}?api_key=${apiKey}`);
      if (!response.ok) {
        enriched.push(show);
        continue;
      }
      const details = await response.json() as TmdbDetails;
      const runtime = show.mediaType === "movie"
        ? Number(details.runtime || show.runtime)
        : Number(details.episode_run_time?.[0] || show.runtime);
      const genres = details.genres?.map((genre) => genre.name).slice(0, 3);
      enriched.push({
        ...show,
        runtime: runtime || show.runtime,
        genres: genres?.length ? genres : show.genres,
      });
    } catch {
      enriched.push(show);
    }
  }
  return enriched;
}

function toShow(
  item: TmdbListItem,
  mediaType: MediaType,
  platform: Platform,
  popularity: number,
  trending: boolean,
): Show | undefined {
  const title = (item.title || item.name || "").trim();
  const posterPath = item.poster_path;
  if (!title || !posterPath || !item.overview) return undefined;
  const year = Number(((item.release_date || item.first_air_date || "2024").slice(0, 4)));
  const id = `${slugify(title)}-${mediaType === "movie" ? "m" : "t"}${item.id}`;
  return {
    id,
    title,
    year: Number.isFinite(year) ? year : 2024,
    platform,
    mediaType,
    genres: (item.genre_ids ?? []).map((id) => GENRE_NAMES[id]).filter(Boolean).slice(0, 3) || ["Drama"],
    runtime: mediaType === "movie" ? 110 : 45,
    rating: Math.round((item.vote_average || 7) * 10) / 10,
    synopsis: item.overview.slice(0, 190),
    popularity: Math.max(55, Math.min(99, Math.round(popularity + (trending ? 2 : 0)))),
    accent: accentFor(id),
    posterUrl: `${IMAGE_BASE}${posterPath}`,
    watchUrl: WATCH_URLS[platform],
  };
}

function inferPlatform(item: TmdbListItem): Platform {
  const hash = [...(item.title || item.name || "")].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return (Object.keys(PROVIDER_IDS) as Platform[])[hash % 4];
}

function mergeShows(target: Map<string, Show>, incoming: Array<Show | undefined>): void {
  for (const show of incoming) {
    if (!show) continue;
    const existing = target.get(show.id);
    if (!existing || show.popularity >= existing.popularity) target.set(show.id, show);
  }
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "title";
}

function accentFor(id: string): string {
  let hash = 0;
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return ACCENTS[hash % ACCENTS.length];
}
