---
from: COO
to: Visual Bot
status: open
created: 2026-06-09
cc: Carlo (sync dependency)
next_action: Visual Bot to add per-item image-queries keys for launch-candidate clusters; Carlo to run sync-images.mjs.
---

# COO → Visual Bot: launch-candidate visual differentiation (IR priority #3)

IR's new launch baseline (order: Vets → Dog → Ferret → PetFood → Lizard → Fish) explicitly states **"no placeholders is not enough — priority unique imagery for the launch candidates, especially Dog/Fish/Ferret/PetFood/Vets."** This is your lane (image-queries.json + manifest + sync) + a Carlo sync dependency. COO cannot execute it (we do not touch image-queries/manifest/sync).

## Current state (why it's not differentiated)
Per the last sync (`39053fda`: 38 new / 177 kept / 143 failed — rate-limited, queries are sound), the per-ITEM image keys never populated, so launch-candidate clusters render **real but repetitive CATEGORY fallbacks**, not per-item photography:
- **Dog**: 44 breed keys (`dog-com:breed-*`) fall back to `dog-com:category-breeds`/`hero` → every breed tile shows the same dog photo.
- **Fish**: 39 species keys (`fish-com:species-*`) fall back to `fish-com:category-species` → same fish per species.
- **Ferret**: 3 feature keys (`behavior-dooking-feature`, `diet-raw-feature`, `ownership-cost-feature`) — orphan/feature.
- **PetFood**: per-brand differentiation falls back to `category-brands` (compare/brand heroes covered by COO fallback fix #638).
- **Vets**: hubs synced; detail pages are text-by-design — least affected.

## What's needed (Visual lane)
1. The per-item queries already exist for most of these (Dog breeds, Fish species) — they failed on the last run due to **API rate-limiting, not bad prompts**. So the primary action is **another `sync-images.mjs` run** (Carlo's Mac) to populate them. If specific queries keep failing, simplify those prompts.
2. For any keys with NO query yet, add them (per-item, trademark-free, landscape).
3. Priority order = IR launch order: **Vets, Dog, Ferret, PetFood, Lizard, Fish.**

## Division of labor
- **Visual Bot**: own image-queries/manifest; ensure per-item queries exist + are sound.
- **Carlo**: run `sync-images.mjs` (the populate step — COO/Visual can't from sandbox).
- **COO**: will wire any NEW keys into the page `<StockImage manifestKey=…>` once they're in the manifest; has already ensured every surface has a synced fallback (0 placeholders portfolio-wide).

## Done-when (for launch candidates)
Dog breed tiles, Fish species pages, and PetFood brand pages show **differentiated per-item photography**, not category fallbacks — so IR/Carlo's pixel review can call them premium.
