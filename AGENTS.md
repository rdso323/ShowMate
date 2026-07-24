# ShowMate

ShowMate is a single Cloudflare Worker (`src/worker/index.ts`) that serves both an HTTP API and a Vite + React 19 SPA. Two-person rooms swipe on a shared show catalog; mutual likes trigger a real-time match over WebSockets (Durable Objects via PartyServer). See `README.md` for the full architecture and commands.

## Cursor Cloud specific instructions

- Local dev profile is `wrangler.local.jsonc` (used by `npm run dev:local`). It serves on `http://localhost:8787`.
- Non-obvious gotcha: `npm run dev:local` runs `wrangler dev` only and does NOT build the frontend, but the `ASSETS` binding serves the SPA from `./dist`. You must run `npm run build` (`vite build`) first, otherwise the UI will not load. Re-run `npm run build` after client changes; the worker itself hot-reloads.
- Apply local D1 migrations before first run with `npm run db:migrate:local`. Local D1/KV/Durable Object state lives under `.wrangler/state/` (gitignored). Wrangler prompts auto-default to "yes" in this non-interactive environment.
- No Cloudflare account/auth is needed for local dev. `wrangler.local.jsonc` intentionally omits the `AI` (Workers AI) and `SHOW_VECTORS` (Vectorize) bindings; the worker degrades gracefully to deterministic fallback copy/recommendations, so matching, swiping, and real-time all work without them.
- To exercise a two-person room, open `http://localhost:8787` in two independent sessions (e.g. a normal window and an incognito window). Both must Like the same title to trigger the match celebration.
- Verification commands (from `README.md`): `npm run check` (tsc), `npm test` (vitest), `npm run build` (vite). Do not run the `deploy:*` scripts unless intentionally updating a live deployment.
