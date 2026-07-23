# ShowMate

ShowMate helps two people decide what to watch together. Create a room, invite a partner, filter the shared catalog, and swipe independently. When both people like the same title, the room gets a real-time match celebration; if the deck runs out, an AI-assisted fallback recommendation keeps the decision moving.

**Live demo:** https://showmate.rohand97.workers.dev

## Features

- Two-person rooms with short shareable codes
- Real-time room presence, swipes, and matches over WebSockets
- Shared platform and episode-duration filters
- Mobile-first swipe deck with Like and Pass controls
- Poster thumbnails and full-resolution covers with preloading
- Match celebration, cover art, audio feedback, and a continue-swiping option
- AI-generated match pitch and no-match compromise recommendation
- Semantic title similarity for adaptive recommendations
- Persisted match history and post-match workflow processing

## Cloudflare architecture

| Service | Role in ShowMate |
| --- | --- |
| Workers + Static Assets | Serves the React application and HTTP API |
| Durable Objects + PartyServer | Keeps each two-person room authoritative and synchronizes WebSockets |
| Workers AI | Generates match copy, fallback recommendations, and title embeddings |
| D1 | Stores the seeded title catalog, room members, and match history |
| KV | Caches catalog data, AI responses, semantic results, and poster data |
| Vectorize | Finds titles similar to liked shows for deck adaptation |
| Workflows | Persists post-match work with durable steps |
| Analytics Engine | Records room, swipe, and match events |

## Local development

### Requirements

- Node.js 20 or newer
- npm
- Wrangler 4

### Install and run

```sh
npm install
npm run db:migrate:local
npm run dev:local
```

Open http://localhost:8787 in two separate browser contexts, such as a normal window and an incognito window, to test a two-person room.

The local profile uses local Durable Objects, D1, KV, Workflows, Analytics Engine, and static assets. Workers AI and Vectorize require Cloudflare authentication, so local development uses the app's resilient fallback behavior for those paths.

## Verification

```sh
npm run check
npm test
npm run build
npm audit --audit-level=high
```

## Deployment

The public deployment uses `wrangler.public.jsonc` and is intentionally separate from the local and prior account configurations.

```sh
npm run db:migrate:public
npm run deploy:public
```

The public Worker is deployed manually through Wrangler. A GitHub push does not update the public URL unless Workers Builds or another CI/CD integration is explicitly configured.

## Repository workflow

- `main` is the frozen hackathon snapshot.
- `personal-work` is the personal development branch.
- Make future changes on `personal-work` and push them to the personal GitHub repository.
- Deploy only when you intentionally want to update the public demo.
