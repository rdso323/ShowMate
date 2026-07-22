import { routePartykitRequest } from "partyserver";
import { catalog, getShow } from "../shared/catalog";
import type { Show } from "../shared/types";
import type { Env } from "./env";
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
        integrations: ["Workers", "Durable Objects", "Workers AI", "D1", "KV", "Vectorize", "Workflows", "Analytics Engine", "PartyServer"],
      });
    }
    if (url.pathname === "/api/room-code") return Response.json({ code: roomCode() });
    if (url.pathname === "/api/catalog") return Response.json(await getCatalog(env));
    if (url.pathname.startsWith("/api/posters/")) return posterResponse(url, env, ctx);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function posterResponse(url: URL, env: Env, ctx: ExecutionContext): Promise<Response> {
  const showId = url.pathname.slice("/api/posters/".length);
  const show = /^[a-z0-9-]+$/.test(showId) ? getShow(showId) : undefined;
  if (!show) return new Response("Poster not found", { status: 404 });

  const size = url.searchParams.get("size") === "thumbnail" ? "thumbnail" : "full";
  const cacheKey = `poster:v1:${show.id}:${size}`;
  const cached = await env.CACHE.get(cacheKey, "arrayBuffer");
  if (cached) return imageResponse(cached, "KV");

  const sourceUrl = size === "thumbnail"
    ? show.posterUrl.replace("/original_untouched/", "/medium_portrait/")
    : show.posterUrl;
  const upstream = await fetch(sourceUrl);
  if (!upstream.ok) return new Response("Poster unavailable", { status: 502 });

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

async function getCatalog(env: Env): Promise<Show[]> {
  const cached = await env.CACHE.get<Show[]>("catalog:v2", "json");
  if (cached) return cached;
  try {
    const result = await env.DB.prepare("SELECT id, title, year, platform, genres, runtime, rating, synopsis, popularity, accent, poster_url AS posterUrl, watch_url AS watchUrl FROM shows ORDER BY popularity DESC").all<Record<string, unknown>>();
    const shows = result.results.map((row) => ({ ...row, genres: JSON.parse(String(row.genres)) })) as unknown as Show[];
    await env.CACHE.put("catalog:v2", JSON.stringify(shows), { expirationTtl: 3600 });
    return shows;
  } catch {
    return catalog;
  }
}

function roomCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  return [...bytes].map((byte) => alphabet[byte % alphabet.length]).join("");
}
