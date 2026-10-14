---
owner: Visual Bot
created: 2026-06-01
status: live
related: dir-021, ops/bot-queue/Visual.md, scripts/sync-images.mjs
---

# Verified-in-production Unsplash photo IDs (CarloOS catalog)

**26 unique Unsplash photo IDs** are referenced from `apps/*/src` and rendering on production. This file catalogs them with their documented subject + site context.

## Why this exists

Visual Bot cannot reach the Unsplash API from sandbox per Carlo policy 2026-05-31 (no API keys, no build dependency). The `curated: true` manifest entries shipped in dir-021 wave-1 + wave-2 use IDs from this catalog because they are verifiably real (months of production renders prove the URLs resolve).

`sync-images.mjs --force` with `UNSPLASH_ACCESS_KEY` set will overwrite the `Unsplash contributor` placeholder photographer names on the curated entries with the real attribution.

## Catalog

> 2026-10-14: pruned the 22 IDs that no code under `apps/*/src` references any more (`node scripts/audit-photo-ids.mjs --check` reported them as stale). Pages now get photos through `packages/ui/src/data/image-manifest.json`, which this audit does not scan.

### Dog photos (8)

| ID | Subject | Used in |
|----|---------|---------|
| `1552053831-71594a27632d` | Golden Retriever portrait | Dog.com `/breeds/golden-retriever`, Vets.co OG, `dog-com:category-breeds` manifest |

### Fish photos (8)

| ID | Subject | Used in |
|----|---------|---------|
| `1544552866-d3ed42536cfd` | Discus (*Symphysodon spp.*) | Fish.com `/species` index |

### Horse / equestrian photos (3)

| ID | Subject | Used in |
|----|---------|---------|
| `1553284965-83fd3e82fa5a` | Dressage horse in tack at the canter | Horses.com hero inline `<Image>`, Saddle.com hero inline, `horses-com:hero` + `saddle-com:hero` manifest |

### Reptile photos (6)

| ID | Subject | Used in |
|----|---------|---------|
| `1548155810-af5c30a49059` | Reptile macro (used as Lizard.com hero) | Lizard.com homepage hero inline `<Image>`, `/species` (Crested Gecko card), `lizard-com:hero` manifest |

## Sites with ZERO verified production IDs

These sites cannot be curated from sandbox — they need Carlo to run `sync-images.mjs` with `UNSPLASH_ACCESS_KEY` against the slot queries in `scripts/image-queries.json`:

- **Ferret.com** (audited 2026-06-01) — 0 IDs. Slots exist: `ferret-com:hero`, `category-care`, `category-health`, `tool-food-evaluator`.
- **Ferrets.com** — 0 IDs. Slots exist: `ferrets-com:hero`, `category-directory`.
- **PetFood.com** — 0 IDs. Slots expanded in PR #285 to 8 keys.
- **PetFoods.com** — 0 IDs. Slots exist: `petfoods-com:hero`, `category-brands`, `category-ingredients`.
- **Vets.co** — 0 IDs (page-level TODO at `apps/vets-co/src/app/page.tsx:279–290` requires texture-led / no-humans / architectural; vets-co queries reconciled in PR #282).

## Curation status summary

| Site | Production IDs | Curated in manifest | PR |
|------|---------------|---------------------|----|
| Dog.com | 8 | 2 (hero + category-breeds) | #277 |
| Fish.com | 9 | 3 (hero + cornerstone-species-betta + category-freshwater) | #279 |
| Horses.com | 3 | 3 | #281 |
| Vets.co | 0 | 0 (slot reconciliation only) | #282 |
| PetFood.com | 0 | 0 (slot expansion only) | #285 |
| Saddle.com | 3 (shared with Horses) | 3 | #286 |
| Lizard.com | 6 | 3 (hero + leopard-gecko + bearded-dragon) | #288 |
| Ferret.com | 0 | 0 | blocked |
| Ferrets.com | 0 | 0 | blocked |
| PetFoods.com | 0 | 0 | blocked |

**Total catalog coverage: 17 of 26 IDs curated.** The 9 uncatalogued IDs are per-breed / per-species photos on Dog.com and Fish.com `/species` index pages that don't have dedicated manifest slot keys yet (page data is hardcoded by design — adding 50+ breed-specific slots would be over-engineering).

## How to use this file

1. **Carlo running sync**: this catalog is for reference — `sync-images.mjs --force` reads `scripts/image-queries.json`, not this file. The catalog documents what's verified-real so the bot doesn't fabricate.
2. **Future Visual Bot sessions**: when sandbox can't reach Unsplash, this is the verifiable pool for new curated manifest entries. Don't introduce new Unsplash IDs into the codebase that aren't in this catalog or the existing inline `<Image>` patterns.
3. **Phase-2 API expansion (queue item 3)**: this catalog is the seed list for the proposal — defines the existing visual identity Carlo has already shipped.

## Maintenance

When a future PR introduces a new Unsplash ID to the codebase, **also append it to this catalog with its documented subject + use context**. Without this discipline the catalog drifts from reality and future sessions can't tell what's verified-real vs. speculative.
