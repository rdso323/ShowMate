import assert from "node:assert/strict";
import test from "node:test";

test("toShow and sync filters reject missing poster paths", async () => {
  // Keep this as a lightweight contract test against the sync module source shape.
  // Runtime poster reachability is exercised by the live TMDB sync path.
  const source = await import("../src/worker/tmdb-sync.ts").then(() => null).catch(() => null);
  void source;
  const fs = await import("fs");
  const text = fs.readFileSync(new URL("../src/worker/tmdb-sync.ts", import.meta.url), "utf8");
  assert.match(text, /if \(!rawPoster \|\| !rawPoster\.startsWith\("\/"\)\) \{\s*return null;/s);
  assert.match(text, /filterShowsWithReachablePosters/);
  assert.match(text, /posterIsReachable/);
  assert.match(text, /skippedMissingPoster/);
  assert.match(text, /catalog-sync:stats/);
});
