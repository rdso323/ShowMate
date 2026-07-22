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

export async function ensureCatalogVectors(env: Env, showIds: string[]): Promise<void> {
  const version = "catalog-v1";
  if (await env.CACHE.get(`vectors:${version}`)) return;
  const shows = showIds.map(getShow).filter((show): show is Show => Boolean(show));
  const response = await env.AI.run("@cf/baai/bge-base-en-v1.5", {
    text: shows.map(showText),
  }) as EmbeddingResponse;
  await env.SHOW_VECTORS.upsert(shows.map((show, index) => ({
    id: show.id,
    values: response.data[index],
    metadata: { platform: show.platform, title: show.title },
  })));
  await env.CACHE.put(`vectors:${version}`, "ready", { expirationTtl: 86400 });
}

export async function similarShowIds(env: Env, showId: string): Promise<string[]> {
  const cacheKey = `similar:${showId}`;
  const cached = await env.CACHE.get<string[]>(cacheKey, "json");
  if (cached) return cached;
  const show = getShow(showId);
  if (!show) return [];
  const response = await env.AI.run("@cf/baai/bge-base-en-v1.5", { text: [showText(show)] }) as EmbeddingResponse;
  const result = await env.SHOW_VECTORS.query(response.data[0], { topK: 8, returnMetadata: "indexed" });
  const ids = result.matches.map((match) => match.id).filter((id) => id !== showId);
  await env.CACHE.put(cacheKey, JSON.stringify(ids), { expirationTtl: 3600 });
  return ids;
}

export async function matchReason(env: Env, showId: string): Promise<string> {
  const cacheKey = `match-reason:${showId}`;
  const cached = await env.CACHE.get(cacheKey);
  if (cached) return cached;
  const show = getShow(showId);
  if (!show) return "You both picked it. That is all the proof you need.";
  const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    prompt: `Write one playful sentence, under 24 words, explaining why a couple should watch ${show.title}, a ${show.genres.join(" and ")} show. Return only the sentence.`,
    max_tokens: 64,
  }) as TextResponse;
  const reason = result.response?.trim() || `You both chose ${show.title}, so tonight's decision is officially settled.`;
  await env.CACHE.put(cacheKey, reason, { expirationTtl: 86400 });
  return reason;
}

export async function compromisePick(env: Env, state: RoomState): Promise<{ showId: string; reason: string }> {
  const liked = likedShowIds(state);
  const candidates = (liked.length ? liked : state.deck).map(getShow).filter((show): show is Show => Boolean(show));
  const prompt = `Choose one show that best bridges two people's tastes. Return strict JSON with showId and a playful reason under 24 words. You may only choose from: ${candidates.map((show) => `${show.id} (${show.genres.join(", ")})`).join("; ")}.`;

  try {
    const result = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", { prompt, max_tokens: 120 }) as TextResponse;
    const parsed = parseAiJson(result.response ?? "");
    if (candidates.some((show) => show.id === parsed.showId) && parsed.reason) return parsed;
  } catch {
    return fallbackPick(candidates);
  }

  return fallbackPick(candidates);
}

function showText(show: Show): string {
  return `${show.title}. ${show.genres.join(", ")}. ${show.synopsis} ${show.runtime} minute episodes.`;
}

function parseAiJson(value: string): { showId: string; reason: string } {
  const match = value.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Workers AI did not return JSON");
  return JSON.parse(match[0]) as { showId: string; reason: string };
}

function fallbackPick(candidates: Show[]): { showId: string; reason: string } {
  const show = [...candidates].sort((a, b) => b.popularity - a.popularity)[0] ?? catalog[0];
  return { showId: show.id, reason: `${show.title} is the crowd-pleasing bridge between both of your watchlists.` };
}
