import { routePartykitRequest } from "partyserver";
import { catalog } from "../shared/catalog";
import type { Show } from "../shared/types";
import type { Env } from "./env";
export { ShowMateRoom } from "./room";
export { PostMatchWorkflow } from "./workflow";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
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
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

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
