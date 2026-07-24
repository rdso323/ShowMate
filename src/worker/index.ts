import { routePartykitRequest } from "partyserver";
import { getShow } from "../shared/catalog";
import { posterSourceUrl } from "../shared/posters";
import { getCatalog } from "./catalog-store";
import type { Env } from "./env";
import { syncCatalogFromTmdb } from "./tmdb-sync";
export { ShowMateRoom } from "./room";
export { PostMatchWorkflow } from "./workflow";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const partyResponse = await routePartykitRequest(request, env);
    if (partyResponse) return partyResponse;

    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        integrations: ["Workers", "Durable Objects", "Workers AI", "D1", "KV", "Vectorize", "Workflows", "Analytics Engine", "PartyServer", "Cron Triggers"],
      });
    }
    if (url.pathname === "/api/room-code") return Response.json({ code: roomCode() });
    if (url.pathname === "/api/catalog") return Response.json(await getCatalog(env));
    if (url.pathname === "/api/catalog/sync" && request.method === "POST") {
      const token = env.CATALOG_SYNC_TOKEN;
      if (token && request.headers.get("authorization") !== `Bearer ${token}`) {
        return new Response("Unauthorized", { status: 401 });
      }
      const result = await syncCatalogFromTmdb(env);
      return Response.json(result, { status: result.skipped ? 503 : 200 });
    }
    if (url.pathname.startsWith("/api/posters/")) return posterResponse(url, env, ctx);
    return env.ASSETS.fetch(request);
  },

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(syncCatalogFromTmdb(env).then((result) => {
      env.METRICS?.writeDataPoint({
        blobs: ["catalog_sync", result.skipped ? "skipped" : "ok", result.reason ?? ""],
        doubles: [result.upserted],
        indexes: ["catalog"],
      });
    }).catch((error) => {
      env.METRICS?.writeDataPoint({
        blobs: ["catalog_sync", "error", error instanceof Error ? error.message : "unknown"],
        doubles: [0],
        indexes: ["catalog"],
      });
    }));
  },
} satisfies ExportedHandler<Env>;

async function posterResponse(url: URL, env: Env, ctx: ExecutionContext): Promise<Response> {
  const showId = url.pathname.slice("/api/posters/".length);
  if (!/^[a-z0-9-]+$/.test(showId)) return new Response("Poster not found", { status: 404 });

  const shows = await getCatalog(env);
  const show = shows.find((entry) => entry.id === showId) ?? getShow(showId);
  if (!show?.posterUrl) return new Response("Poster not found", { status: 404 });

  const size = url.searchParams.get("size") === "thumbnail" ? "thumbnail" : "full";
  const cacheKey = `poster:v3:${show.id}:${size}`;
  const cached = await env.CACHE.get(cacheKey, "arrayBuffer");
  if (cached) return imageResponse(cached, "KV");

  const sourceUrl = posterSourceUrl(show, size);
  const upstream = await fetch(sourceUrl, {
    headers: {
      "User-Agent": "ShowMate/1.0 (+https://showmate.workers.dev)",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!upstream.ok) {
    // Fall back to the raw stored URL once before failing.
    if (sourceUrl !== show.posterUrl) {
      const retry = await fetch(show.posterUrl, {
        headers: {
          "User-Agent": "ShowMate/1.0 (+https://showmate.workers.dev)",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      });
      if (retry.ok) {
        const image = await retry.arrayBuffer();
        ctx.waitUntil(env.CACHE.put(cacheKey, image));
        return imageResponse(image, "UPSTREAM-FALLBACK", retry.headers.get("Content-Type") ?? "image/jpeg");
      }
    }
    return new Response("Poster unavailable", { status: 502 });
  }

  const image = await upstream.arrayBuffer();
  ctx.waitUntil(env.CACHE.put(cacheKey, image));
  return imageResponse(image, "UPSTREAM", upstream.headers.get("Content-Type") ?? "image/jpeg");
}

function imageResponse(image: ArrayBuffer, source: string, contentType = "image/jpeg"): Response {
  return new Response(image, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": contentType,
      "Cross-Origin-Resource-Policy": "same-origin",
      "X-Content-Type-Options": "nosniff",
      "X-ShowMate-Poster": source,
    },
  });
}

function roomCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => alphabet[byte % alphabet.length]).join("");
}
