# ShowMate

ShowMate helps a group decide what to watch together. Create a room, invite up to 10 people, filter movies and TV by platform, and swipe independently. When everyone likes the same title, the room gets a real-time match celebration; if the deck runs out, an AI-assisted fallback recommendation keeps the decision moving.

**Live demo (hackathon freeze):** https://showmate.rohand97.workers.dev

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

The app ships with a large seeded catalog so local and hackathon demos work without secrets. To refresh trending movies/TV from TMDB:

1. Create a free TMDB API key.
2. Set the Worker secret: `npx wrangler secret put TMDB_API_KEY --config wrangler.preview.jsonc`
3. Optionally set `CATALOG_SYNC_TOKEN` and call `POST /api/catalog/sync` with `Authorization: Bearer <token>`.
4. Cron runs daily at 10:00 UTC when the Worker is deployed with triggers enabled.

## Verification

```sh
npm run check
npm test
npm run build
npm audit --audit-level=high
```

## Deployment safety

The hackathon/public site must stay frozen unless you intentionally update it.

| Command | Worker name | Effect |
| --- | --- | --- |
| `npm run dev:local` | local only | Does **not** change any Cloudflare deployment |
| `npm run deploy:preview` | `showmate-preview` | Separate preview URL on the personal account; does **not** overwrite `showmate` |
| `npm run deploy:individual` | `showmate` (personal account) | Updates the personal-account Worker named `showmate` |
| `npm run deploy:public` | `showmate` (public/demo account) | Updates the live demo at showmate.rohand97.workers.dev |

**Do not run `deploy:public` until you are ready to change the official demo.**

Branch deploys are not automatic from GitHub. Preview URLs are created by deploying a differently named Worker (`showmate-preview`), not by deploying over `main`'s Worker.

## Repository workflow

- `main` is the frozen hackathon snapshot.
- `personal-work` is the personal development branch.
- Feature work should land through PRs into `personal-work`.
- Deploy only when you intentionally want to update a specific Cloudflare target.
