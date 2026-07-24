import { catalog as seedCatalog } from "../shared/catalog";
import type { Show } from "../shared/types";
import type { Env } from "./env";

const CATALOG_CACHE_KEY = "catalog:v4";

export async function getCatalog(env: Env): Promise<Show[]> {
  const cached = await env.CACHE.get<Show[]>(CATALOG_CACHE_KEY, "json");
  if (cached?.length) return cached;
  try {
    const result = await env.DB.prepare(
      `SELECT id, title, year, platform, media_type AS mediaType, genres, runtime, rating, synopsis,
              popularity, accent, poster_url AS posterUrl, watch_url AS watchUrl
       FROM shows ORDER BY popularity DESC, title ASC`,
    ).all<Record<string, unknown>>();
    const shows = result.results.map(rowToShow);
    if (shows.length) {
      await env.CACHE.put(CATALOG_CACHE_KEY, JSON.stringify(shows), { expirationTtl: 3600 });
      return shows;
    }
  } catch {
    // Local or pre-migration environments fall back to the seeded catalog module.
  }
  return seedCatalog;
}

export async function upsertCatalog(env: Env, shows: Show[]): Promise<number> {
  if (!shows.length) return 0;
  const statements = shows.map((show) =>
    env.DB.prepare(
      `INSERT OR REPLACE INTO shows
        (id, title, year, platform, media_type, genres, runtime, rating, synopsis, popularity, accent, poster_url, watch_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      show.id,
      show.title,
      show.year,
      show.platform,
      show.mediaType,
      JSON.stringify(show.genres),
      show.runtime,
      show.rating,
      show.synopsis,
      show.popularity,
      show.accent,
      show.posterUrl,
      show.watchUrl,
    ));
  await env.DB.batch(statements);
  await env.CACHE.delete(CATALOG_CACHE_KEY);
  return shows.length;
}

function rowToShow(row: Record<string, unknown>): Show {
  return {
    id: String(row.id),
    title: String(row.title),
    year: Number(row.year),
    platform: row.platform as Show["platform"],
    mediaType: (row.mediaType as Show["mediaType"]) || "tv",
    genres: JSON.parse(String(row.genres)),
    runtime: Number(row.runtime),
    rating: Number(row.rating),
    synopsis: String(row.synopsis),
    popularity: Number(row.popularity),
    accent: String(row.accent),
    posterUrl: String(row.posterUrl),
    watchUrl: String(row.watchUrl),
  };
}
