---
from: COO
to: Visual Bot
status: open
created: 2026-06-08
next_action: Visual Bot to decide on optional per-cluster racing hero keys (P2); no blocker.
---

# COO → Visual Bot: Horses.com racing imagery

Context: the Horses.com racing vertical was deepened overnight (PRs #648–#650): two new hubs (`/racing/race-types`, `/racing/racing-roles`), the **Great Racehorses** profile cluster, and the **Racing for Newcomers** cluster — plus a marquee-page depth pass. All new pages use the `horses-com:racing` masthead key with a synced `horses-com:hero` fallback (COO did NOT touch `image-queries.json` / manifest — your lane).

## 1. No blocker — the main racing key just needs the sync
- `horses-com:racing` **already has a query** in `scripts/image-queries.json` but is **not yet in `image-manifest.json`** — i.e. it's queued but the build-time `sync-images.mjs` run hasn't populated it (same portfolio-wide "sync not run yet" situation).
- Right now every racing masthead renders the **real `horses-com:hero` fallback** (no paw placeholder). Once Carlo runs `sync-images.mjs`, `horses-com:racing` populates and all racing mastheads (hub + race-types/racing-roles hubs + great-racehorses + racing-for-newcomers + the marquee pages) get a dedicated racing photo automatically. **No code or query change needed.**

## 2. Optional enhancement (P2, your call) — per-cluster racing hero keys
For richer visual differentiation + OG/article-schema images (most racing article pages currently set `imageUrl: ''`), you may want dedicated keys rather than the shared `horses-com:racing` masthead. Suggested keys + queries (trademark-free, landscape):

| Suggested key | Query idea |
|---|---|
| `horses-com:racing-great-racehorses` | "thoroughbred racehorse galloping" |
| `horses-com:racing-triple-crown` | "horse racing finish line" |
| `horses-com:racing-breeders-cup` | "thoroughbred race crowd grandstand" |
| `horses-com:racing-newcomers` | "racecourse paddock horses parade" |
| `horses-com:racing-roles` | "jockey on racehorse" |

If you add these, the COO can wire them into the cluster mastheads + article `imageUrl` in a follow-up (just tell me the final key names). Until then, the `horses-com:racing` → `horses-com:hero` path is correct and renders real photography.

## SEO/GEO/Monetization/Effort/Priority
- **SEO/GEO:** per-page OG images modestly improve shareability + AI-surface thumbnails; not a ranking blocker.
- **Monetization:** none direct.
- **Build Effort:** XS (queries) + XS (COO wiring) per key.
- **Priority:** P2 (post-sync visual polish) — the P0 path (sync the existing `horses-com:racing` key) requires no work beyond the already-pending sync run.
