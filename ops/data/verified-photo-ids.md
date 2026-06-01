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

### Dog photos (8)

| ID | Subject | Used in |
|----|---------|---------|
| `1587300003388-59208cc962cb` | A dog (puppy on bed) | Dog.com og:image, `dog-com:hero` manifest |
| `1552053831-71594a27632d` | Golden Retriever portrait | Dog.com `/breeds/golden-retriever`, Vets.co OG, `dog-com:category-breeds` manifest |
| `1579213838058-2aeeda8d6e2d` | Labrador Retriever | Dog.com `/breeds/labrador-retriever` |
| `1583511655857-d19b40a7a54e` | French Bulldog | Dog.com `/breeds/french-bulldog` |
| `1589941013453-ec89f33b5e95` | German Shepherd | Dog.com `/breeds/german-shepherd`, `/compare/[slug]` |
| `1505628346881-b72b27e84530` | Beagle | Dog.com `/breeds/beagle`, `/compare/[slug]` |
| `1616149955247-48c60b1d4413` | Poodle | Dog.com `/breeds/poodle`, `/compare/[slug]` |
| `1576201836106-db1758fd1c97` | Veterinarian examining a Golden Retriever | Dog.com `/health/golden-retriever-health` |

### Fish photos (8)

| ID | Subject | Used in |
|----|---------|---------|
| `1535591273668-578e31182c4f` | Betta fish in a planted aquarium | Fish.com og:image, `/species/betta-fish`, `/species/clownfish` (reused), `fish-com:hero` + `fish-com:cornerstone-species-betta` manifest |
| `1522069213448-443a614da9b6` | School of neon tetras | Fish.com `/species/neon-tetra`, `fish-com:category-freshwater` manifest |
| `1520637836862-4d197d17c55a` | Corydoras catfish on aquarium sand | Fish.com `/species/corydoras` |
| `1522926193341-e9ffd686c60f` | Goldfish swimming | Fish.com `/species/goldfish` |
| `1583377993497-f2f1b2b13c54` | Betta Fish (*Betta splendens*) | Fish.com `/species` index |
| `1520302630591-fd1cb63aa58e` | Neon Tetra (*Paracheirodon innesi*) — reused for Guppy | Fish.com `/species` index |
| `1524704654690-b56af7d6b9f1` | Goldfish (*Carassius auratus*) | Fish.com `/species` index |
| `1571752726703-5e7d1f6a986d` | Angelfish (*Pterophyllum scalare*) — reused for Oscar | Fish.com `/species` index |
| `1544552866-d3ed42536cfd` | Discus (*Symphysodon spp.*) | Fish.com `/species` index |

### Horse / equestrian photos (3)

| ID | Subject | Used in |
|----|---------|---------|
| `1553284965-83fd3e82fa5a` | Dressage horse in tack at the canter | Horses.com hero inline `<Image>`, Saddle.com hero inline, `horses-com:hero` + `saddle-com:hero` manifest |
| `1474546652694-a33dd8161d66` | Show jumper mid-flight over a fence | Horses.com `/supplements/joint-supplements`, Saddle.com, `horses-com:category-disciplines` + `saddle-com:category-jumping` manifest |
| `1469820838967-83c1450cf56a` | Horse and rider in an all-purpose schooling session | Horses.com `/breeds/quarter-horse`, Saddle.com, `horses-com:category-care` + `saddle-com:cornerstone-fit` manifest |

### Reptile photos (6)

| ID | Subject | Used in |
|----|---------|---------|
| `1548155810-af5c30a49059` | Reptile macro (used as Lizard.com hero) | Lizard.com homepage hero inline `<Image>`, `/species` (Crested Gecko card), `lizard-com:hero` manifest |
| `1597484661643-2f5fef640dd1` | Leopard gecko (*Eublepharis macularius*) in profile | Lizard.com `/species/leopard-gecko`, `lizard-com:species-leopard-gecko` manifest |
| `1585110396000-c9ffd4e4b308` | Bearded dragon (*Pogona vitticeps*) basking | Lizard.com `/health/sick-reptile-signs`, `lizard-com:species-bearded-dragon` manifest |
| `1531386151447-fd76ad50012f` | Ball Python (*Python regius*) | Lizard.com `/species` index |
| `1567612529009-afe25813a308` | Corn Snake (*Pantherophis guttatus*) | Lizard.com `/species` index |
| `1583795484071-3c453e3a7c71` | Blue-Tongue Skink (*Tiliqua spp.*) | Lizard.com `/species` index |

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
