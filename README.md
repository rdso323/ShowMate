# ShowMate

ShowMate helps a group decide what to watch together. Create a room, invite up to 10 people, filter movies and TV by platform, and swipe independently. When everyone likes the same title, the room gets a real-time match celebration; if the deck runs out, an AI-assisted fallback recommendation keeps the decision moving.

**Live demo:** https://showmate.rohand97.workers.dev

**Hackathon snapshot:** branch [`hackathon-freeze`](https://github.com/rdso323/ShowMate/tree/hackathon-freeze) preserves the exact state submitted for judging.

## Features

- Group rooms (2–10 people) with short shareable codes
- Real-time room presence, swipes, and matches over WebSockets
- Shared platform, media-type (movies / TV / both), and duration filters
- Mobile-first swipe deck with Like and Pass controls
- Poster thumbnails and full-resolution covers with preloading
- Match celebration, cover art, audio feedback, and a continue-swiping option
- Host-only vote analytics (who liked or passed each title)
- AI-generated match pitch and no-match compromise recommendation
- Semantic title similarity for adaptive recommendations
- Seeded catalog of 100+ titles, with optional daily TMDB sync for trending titles
- Persisted match history and post-match workflow processing

## Cloudflare architecture

| Service | Role in ShowMate |
| --- | --- |
| Workers + Static Assets | Serves the React application and HTTP API |
| Durable Objects + PartyServer | Keeps each room authoritative and synchronizes WebSockets |
| Workers AI | Generates match copy, fallback recommendations, and title embeddings |
| D1 | Stores the title catalog, room members, and match history |
| KV | Caches catalog data, AI responses, semantic results, and poster data |
| Vectorize | Finds titles similar to liked shows for deck adaptation |
| Workflows | Persists post-match work with durable steps |
| Cron Triggers | Optionally refreshes trending catalog data from TMDB daily |
| Analytics Engine | Records room, swipe, match, and catalog-sync events |

## Local development

### Requirements

- Node.js 20 or newer
- npm
- Wrangler 4

### Install and run

```sh
npm install
npm run db:migrate:local
npm run build
npm run dev:local
```

Open http://localhost:8787 in multiple browser contexts to test a group room.

The local profile uses local Durable Objects, D1, KV, Workflows, Analytics Engine, and static assets. Workers AI and Vectorize require Cloudflare authentication, so local development uses the app's resilient fallback behavior for those paths.

### Optional TMDB catalog sync

The app ships with a large seeded catalog so demos work without secrets. To refresh trending movies/TV from TMDB:

1. Create a free TMDB API key.
2. Set the Worker secret: `npx wrangler secret put TMDB_API_KEY --config wrangler.public.jsonc`
3. Optionally set `CATALOG_SYNC_TOKEN` and call `POST /api/catalog/sync` with `Authorization: Bearer <token>`.
4. Cron runs daily at 10:00 UTC when the Worker is deployed with triggers enabled.

## Verification

```sh
npm run check
npm test
npm run build
npm audit --audit-level=high
```

## Deployment (Workers Builds / Git)

Preferred path: connect the `showmate` Worker to this GitHub repo so pushes deploy automatically — no local `wrangler deploy` required.

### One-time Cloudflare dashboard setup

1. Open [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages) on the **public/demo** account (the one serving `showmate.rohand97.workers.dev`).
2. Select the **`showmate`** Worker → **Settings** → **Builds** → **Connect**.
3. Authorize GitHub and choose **`rdso323/ShowMate`**.
4. Use these build settings:

| Setting | Value |
| --- | --- |
| Git production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npm run deploy:ci` |
| Non-production branch deploy command | `npm run deploy:ci:preview` |
| Root directory | `/` (default) |

5. Save, then push (or retry a build) so the first Git deploy runs.
6. After the first successful Git deploy of the expanded catalog, apply D1 migrations once from a machine with account access:

```sh
npm run db:migrate:public
```

Worker name in the dashboard must remain `showmate` to match `wrangler.public.jsonc`.

### Manual deploy targets (optional)

| Command | Worker | Effect |
| --- | --- | --- |
| `npm run deploy` / `deploy:public` | `showmate` (public account) | Live demo |
| `npm run deploy:preview` | `showmate-preview` | Personal-account preview |
| `npm run deploy:individual` | `showmate` (personal account) | Personal-account Worker |
| `npm run dev:local` | local only | No Cloudflare changes |

## Repository workflow

- `hackathon-freeze` — immutable snapshot of the hackathon submission.
- `main` — active development; Workers Builds should deploy this branch to production.
- Feature work lands through PRs into `main`.
