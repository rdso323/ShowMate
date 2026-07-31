import { catalog, getShow } from "../shared/catalog";
import { likedShowIds } from "../shared/matching";
import type { RoomState, Show } from "../shared/types";
import type { Env } from "./env";

interface EmbeddingResponse {
  data: number[][];
}

interface TextResponse {
  response?: string;
}

export async function ensureCatalogVectors(env: Env, shows: Show[]): Promise<void> {
  if (!shows.length || !env.AI || !env.SHOW_VECTORS) return;
  const version = `catalog-v3:${shows.map((show) => show.id).sort().join(",")}`.slice(0, 200);
  if (await env.CACHE.get(`vectors:${version}`)) return;
  const response = await env.AI.run("@cf/baai/bge-base-en-v1.5", {
    text: shows.map(showText),
  }) as EmbeddingResponse;
  await env.SHOW_VECTORS.upsert(shows.map((show, index) => ({
    id: show.id,
    values: response.data[index],
    metadata: { platform: show.platform, title: show.title, mediaType: show.mediaType },
  })));
  await env.CACHE.put(`vectors:${version}`, "ready", { expirationTtl: 86400 });
}

export async function similarShowIds(env: Env, show: Show): Promise<string[]> {
  if (!env.AI || !env.SHOW_VECTORS) return [];
  const cacheKey = `similar:v3:${show.id}`;
  const cached = await env.CACHE.get<string[]>(cacheKey, "json");
  if (cached) return cached;
  const response = await env.AI.run("@cf/baai/bge-base-en-v1.5", { text: [showText(show)] }) as EmbeddingResponse;
  const result = await env.SHOW_VECTORS.query(response.data[0], { topK: 12, returnMetadata: "indexed" });
  const ids = result.matches.map((match) => match.id).filter((id) => id !== show.id);
  await env.CACHE.put(cacheKey, JSON.stringify(ids), { expirationTtl: 3600 });
  return ids;
}

export async function matchReason(env: Env, show: Show, memberCount: number): Promise<string> {
  const cacheKey = `match-reason:v3:${show.id}:${memberCount}`;
  const cached = await env.CACHE.get(cacheKey);
  if (cached) return cached;
  const audience = memberCount > 2 ? `a group of ${memberCount}` : "a couple";
  const kind = show.mediaType === "movie" ? "movie" : "show";
  const fallback = memberCount > 2
    ? `The whole group chose ${show.title}, so tonight's watch is settled.`
    : `You both chose ${show.title}, so tonight's decision is officially settled.`;
  if (!env.AI) return fallback;
  const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    prompt: `Write one playful sentence, under 24 words, explaining why ${audience} should watch ${show.title}, a ${show.genres.join(" and ")} ${kind}. Return only the sentence.`,
    max_tokens: 64,
  }) as TextResponse;
  const reason = result.response?.trim() || fallback;
  await env.CACHE.put(cacheKey, reason, { expirationTtl: 86400 });
  return reason;
}

export async function compromisePick(env: Env, state: RoomState, shows: Show[]): Promise<{ showId: string; reason: string }> {
  const byId = new Map(shows.map((show) => [show.id, show]));
  const liked = likedShowIds(state);
  const candidates = (liked.length ? liked : state.deck)
    .map((id) => byId.get(id) ?? getShow(id))
    .filter((show): show is Show => Boolean(show));
  const prompt = `Choose one title that best bridges a group's tastes. Return strict JSON with showId and a playful reason under 24 words. You may only choose from: ${candidates.map((show) => `${show.id} (${show.genres.join(", ")})`).join("; ")}.`;

  try {
    if (!env.AI) return fallbackPick(candidates);
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", { prompt, max_tokens: 120 }) as TextResponse;
    const parsed = parseAiJson(result.response ?? "");
    if (candidates.some((show) => show.id === parsed.showId) && parsed.reason) return parsed;
  } catch {
    return fallbackPick(candidates);
  }

  return fallbackPick(candidates);
}

function showText(show: Show): string {
  return `${show.title}. ${show.mediaType}. ${show.genres.join(", ")}. ${show.synopsis} ${show.runtime} minutes.`;
}

function parseAiJson(value: string): { showId: string; reason: string } {
  const match = value.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Workers AI did not return JSON");
  return JSON.parse(match[0]) as { showId: string; reason: string };
}

function fallbackPick(candidates: Show[]): { showId: string; reason: string } {
  const show = [...candidates].sort((a, b) => b.popularity - a.popularity)[0] ?? catalog[0];
  return { showId: show.id, reason: `${show.title} is the crowd-pleasing bridge across the room's watchlists.` };
}
