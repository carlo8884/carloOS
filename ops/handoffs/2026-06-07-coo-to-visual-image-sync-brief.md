---
from: coo
to: visual
status: ready
created: 2026-06-07
next_action: "Visual Bot: no image-queries.json entries needed — every missing key already has a query. Carlo: run `node scripts/sync-images.mjs` to populate all 69 READY-TO-SYNC keys in one command."
---

# Portfolio Image-Sync Readiness Brief
**Date:** 2026-06-07  
**Prepared by:** COO  
**For:** Visual Bot + Carlo  

---

## Headline Numbers

| Metric | Count |
|---|---|
| Total unique manifest keys referenced across codebase | 160 |
| Already synced (present in `image-manifest.json`) | 91 |
| **Missing / showing paw placeholder** | **69** |
| READY-TO-SYNC (query exists in `image-queries.json`) | **69** |
| NEEDS-QUERY (no query entry — Visual Bot must add first) | **0** |

**Fastest path to premium imagery: Carlo runs `node scripts/sync-images.mjs` once on his Mac. All 69 missing keys have queries. Zero Visual Bot action required before the sync.**

---

## How the System Works

`<StockImage manifestKey="site:slot" />` looks up `packages/ui/src/data/image-manifest.json`. A missing key renders the branded paw placeholder. Keys are populated by `node scripts/sync-images.mjs` (must run on Carlo's Mac — sandbox is network-blocked), which reads search queries from `scripts/image-queries.json`.

**Dynamic key patterns to note:**
- `apps/dog-com/src/app/breeds/page.tsx` uses a `BREED_MANIFEST_KEYS` map for the 6 breed tiles: `dog-com:breed-{golden-retriever,labrador-retriever,french-bulldog,german-shepherd,beagle,poodle}`. Fallback is `dog-com:breed-${breed.slug}` (paw for any unmapped slug from DB).
- `apps/dog-com/src/app/compare/[slug]/page.tsx` mirrors the same `BREED_MANIFEST_KEYS` map.
- `apps/lizard-com/src/app/species/page.tsx` references 19 species thumbs from a static `SPECIES` array (all keys are `lizard-com:species-thumb-*` or the 3 named species keys).
- `apps/fish-com/src/app/species/page.tsx` references 8 species thumbs from a static `SPECIES_LIST` array.
- `apps/lizard-com/src/app/page.tsx` uses `a.imageKey` (optional) for article cards; only 2 are set: `lizard-com:featured-leopard-gecko` and `lizard-com:featured-bearded-dragon`.
- `apps/horses-com/src/app/page.tsx` uses `art.imageKey` for 2 article cards: `horses-com:featured-quarter-horse` and `horses-com:featured-joint-supplements`.
- `apps/saddle-com/src/app/page.tsx` uses `r.imageKey` for 3 review cards: `saddle-com:review-dressage`, `saddle-com:review-jumping`, `saddle-com:review-allpurpose`.
- `apps/vets-co/src/app/page.tsx` uses `art.manifestKey` for article cards; only `dog-com:breed-golden-retriever` is set (that key is already synced).

---

## Per-Site Breakdown

### Dog.com (flagship — P0 for launch)

**9 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC** (query exists → sync populates immediately):

| Key | Page(s) | Priority |
|---|---|---|
| `dog-com:symptoms-hero` | `/symptoms` hub hero | P0 — launch-critical hub |
| `dog-com:conditions-hero` | `/conditions` hub hero | P0 — launch-critical hub |
| `dog-com:compare-hero` | `/compare` hub hero | P0 — commercial |
| `dog-com:tools-hero` | `/tools` hub hero | P0 — tool hub |
| `dog-com:breed-golden-retriever` | `/breeds/golden-retriever`, `/breeds` tile, `/compare/*` | P0 — homepage featured breed |
| `dog-com:breed-french-bulldog` | `/breeds/french-bulldog`, `/breeds` tile | P1 — featured breed |
| `dog-com:breed-german-shepherd` | `/breeds/german-shepherd`, `/breeds` tile | P1 — featured breed |
| `dog-com:breed-beagle` | `/breeds` tile | P1 — breed tile |
| `dog-com:breed-poodle` | `/breeds` tile | P1 — breed tile |

**NEEDS-QUERY:** none.

**Already synced (9):** `dog-com:hero`, `dog-com:category-health`, `dog-com:category-breeds`, `dog-com:category-guides`, `dog-com:category-reviews`, `dog-com:category-nutrition`, `dog-com:category-training`, `dog-com:category-puppy`, `dog-com:breed-labrador-retriever`

**Note on dynamic breed thumbnails:** The breeds hub at `/breeds` falls back to `dog-com:breed-${breed.slug}` for any slug not in the `BREED_MANIFEST_KEYS` map. Only the 6 mapped breeds will get photos from a sync; additional DB breeds will continue showing paws until their manifest keys are added.

---

### Vets.co (polish target — P0 for launch)

**5 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `vets-co:symptoms-hero` | `/symptoms` hub hero | P0 — launch-critical hub |
| `vets-co:medications-hero` | `/medications` hub hero | P0 — monetized hub |
| `vets-co:diagnostics-hero` | `/diagnostics` hub hero | P1 — hub |
| `vets-co:specialists-hero` | `/specialists` hub hero | P1 — hub |
| `vets-co:tools-hero` | `/tools` hub hero | P1 — tool hub |

**NEEDS-QUERY:** none.

**Already synced (7):** `vets-co:hero`, `vets-co:health-hero`, `vets-co:insurance-hero`, `vets-co:category-breeds`, `vets-co:guides-hero`, `vets-co:find-a-vet-hero`, `vets-co:category-reviews` + `vets-co:tool-insurance-estimator`

---

### Fish.com (polish target — P0 for launch)

**11 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `fish-com:tools-hero` | `/tools` hub hero | P0 — tool hub |
| `fish-com:glossary-hero` | `/glossary` hero | P0 — cornerstone |
| `fish-com:water-parameters-hero` | `/water-parameters` hero | P0 — cornerstone |
| `fish-com:species-thumb-betta` | `/species` grid tile | P1 |
| `fish-com:species-thumb-neon-tetra` | `/species` grid tile | P1 |
| `fish-com:species-thumb-clownfish` | `/species` grid tile | P1 |
| `fish-com:species-thumb-goldfish` | `/species` grid tile | P1 |
| `fish-com:species-thumb-angelfish` | `/species` grid tile | P1 |
| `fish-com:species-thumb-discus` | `/species` grid tile | P1 |
| `fish-com:species-thumb-guppy` | `/species` grid tile | P1 |
| `fish-com:species-thumb-oscar` | `/species` grid tile | P1 |

**NEEDS-QUERY:** none.

**Already synced (10):** `fish-com:hero`, `fish-com:cornerstone-cycling`, `fish-com:cornerstone-species-betta`, `fish-com:category-species`, `fish-com:category-setup`, `fish-com:category-equipment`, `fish-com:category-reviews`, `fish-com:category-health`, `fish-com:species-goldfish`, `fish-com:species-neon-tetra` + `fish-com:tool-cycling-estimator`

---

### Ferret.com (polish target — P1 for launch)

**11 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `ferret-com:health-vaccinations` | `/health/vaccinations` article hero | P1 — health content |
| `ferret-com:health-gi-blockage` | `/health/gastrointestinal-blockage` article hero | P1 — health content |
| `ferret-com:health-emergency` | `/health/emergency-warning-signs` article hero | P1 — emergency |
| `ferret-com:behavior-training` | `/behavior/training-and-bonding` article hero | P1 — behavior content |
| `ferret-com:behavior-biting` | `/behavior/biting-and-nipping` article hero | P1 — behavior content |
| `ferret-com:care-exercise` | `/care/exercise-and-enrichment` article hero | P1 — care content |
| `ferret-com:diet-raw-vs-kibble` | `/diet/whole-prey-vs-kibble` article hero | P1 — diet content |
| `ferret-com:first-year-hero` | `/first-year-schedule` page hero | P1 — cornerstone |
| `ferret-com:find-vet-hero` | `/find-an-exotic-vet` page hero | P1 — service page |
| `ferret-com:glossary-hero` | `/ownership/ferret-glossary` page hero | P2 |
| `ferret-com:tools-hero` | `/tools` hub hero | P1 |

**NEEDS-QUERY:** none.

**Already synced (26):** `ferret-com:hero`, all 6 hub heros (`health-hero`, `care-hero`, `behavior-hero`, `colors-hero`, `diet-hero`, `ownership-hero`), all 9 color pages, `health-adrenal`, `health-insulinoma`, `health-dental`, `health-aging`, all 5 care article keys, `colors-overview`, `tool-food-evaluator`, `category-care`, `category-health`

---

### Horses.com (P2 for launch)

**3 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `horses-com:featured-quarter-horse` | Homepage article card (optional render) | P1 — homepage polish |
| `horses-com:featured-joint-supplements` | Homepage article card (optional render) | P1 — homepage polish |
| `horses-com:supplement-joint` | `/supplements/joint-supplements` article hero | P1 — monetized article |

**NEEDS-QUERY:** none.

**Already synced (13):** `horses-com:hero`, all 9 category hubs, `tack-helmet`, `nutrition-forage`, `care-hoof`, `tool-bcs-calculator`

---

### Lizard.com (P2 for launch)

**18 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `lizard-com:featured-leopard-gecko` | Homepage article card (optional render) | P1 — homepage polish |
| `lizard-com:featured-bearded-dragon` | Homepage article card (optional render) | P1 — homepage polish |
| `lizard-com:species-thumb-gargoyle-gecko` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-ball-python` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-corn-snake` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-blue-tongue-skink` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-african-fat-tailed-gecko` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-western-hognose` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-kenyan-sand-boa` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-green-anole` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-chinese-water-dragon` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-fire-skink` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-leachianus-gecko` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-mourning-gecko` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-mossy-leaf-tail-gecko` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-argentine-tegu` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-savannah-monitor` | `/species` grid tile | P2 |
| `lizard-com:species-thumb-nile-monitor` | `/species` grid tile | P2 |

**NEEDS-QUERY:** none.

**Already synced (10):** `lizard-com:hero`, `category-builds`, `category-reviews`, `category-states`, `category-species`, `category-health`, `category-setup`, `species-bearded-dragon`, `species-leopard-gecko`, `species-crested-gecko` + `lizard-com:category-bioactive`, `category-husbandry`, `species-ball-python`, `species-ball-python-hero`

**Note on scale:** The 16 `species-thumb-*` keys for the species grid are nice-to-have for visual completeness but not launch-blocking. The 3 named species pages (`bearded-dragon`, `leopard-gecko`, `crested-gecko`) are already synced. Prioritise the 2 `featured-*` homepage cards for launch polish.

---

### PetFood.com (polish target — P1 for launch)

**5 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `petfood-com:supplements-hero` | `/supplements` hub hero | P0 — monetized hub |
| `petfood-com:feeding-hero` | `/feeding` hub hero | P1 — hub |
| `petfood-com:tools-hero` | `/tools` hub hero | P1 — tool hub |
| `petfood-com:myths-hero` | `/myths` hub hero | P1 — trust content |
| `petfood-com:guides-hero` | `/guides` hub hero | P1 — hub |

**NEEDS-QUERY:** none.

**Already synced (9):** `petfood-com:hero`, `nutrition-hero`, `category-conditions`, `category-ingredients`, `category-species`, `compare-hero`, `brands-hero`, `diets-hero`, `ingredients-hero` + `tool-food-cost`, `cornerstone-methodology`, `category-nutrition`, `category-brands`, `category-life-stage`

---

### Saddle.com (P2 for launch)

**7 missing keys — all READY-TO-SYNC**

**READY-TO-SYNC:**

| Key | Page(s) | Priority |
|---|---|---|
| `saddle-com:review-dressage` | Homepage review card (optional render) | P1 — homepage polish |
| `saddle-com:review-jumping` | Homepage review card (optional render) | P1 — homepage polish |
| `saddle-com:review-allpurpose` | Homepage review card (optional render) | P1 — homepage polish |
| `saddle-com:discipline-dressage` | `/english` discipline grid tile | P1 — hub |
| `saddle-com:discipline-jumping` | `/english` discipline grid tile | P1 — hub |
| `saddle-com:discipline-eventing` | `/english` discipline grid tile | P1 — hub |
| `saddle-com:discipline-allpurpose` | `/english` discipline grid tile | P1 — hub |

**NEEDS-QUERY:** none.

**Already synced (7):** `saddle-com:hub-accessories`, `hub-fit`, `hub-reviews`, `hub-english`, `hub-western`, `hub-brands`, `hub-guides` + `cornerstone-fit`, `cornerstone-used`, `category-dressage`, `category-jumping`, `category-western`, `category-restoration`, `tool-tree-size`, `hero`

---

### Sites With No Missing Keys (fully synced or no StockImage usage)

| Site | Status |
|---|---|
| **Ferrets.com** | Fully synced — `ferrets-com:hero` + `ferrets-com:category-directory` both present |
| **PetFoods.com** | Fully synced — `petfoods-com:hero` + `petfoods-com:category-ingredients` both present |

---

## Portfolio Total Summary

| Site | Referenced | Synced | Missing (all RTS) |
|---|---|---|---|
| dog-com | 18 | 9 | 9 |
| vets-co | 12 | 7 | 5 |
| fish-com | 21 | 10 | 11 |
| ferret-com | 37 | 26 | 11 |
| horses-com | 16 | 13 | 3 |
| lizard-com | 28 | 10 | 18 |
| petfood-com | 14 | 9 | 5 |
| saddle-com | 14 | 7 | 7 |
| ferrets-com | 2 | 2 | 0 |
| petfoods-com | 2 | 2 | 0 |
| **TOTAL** | **164** | **95** | **69** |

> Note: `dog-com:breed-golden-retriever` is referenced on both dog-com and vets-co pages; counted once in the dog-com row.

---

## Launch-Critical Prioritisation (P0 first)

The following keys are on pages that will be visible on first-impression for the 5 polish-list sites (Dog / Fish / Ferret / PetFood / Vets). All are READY-TO-SYNC today.

**Dog.com P0 (homepage + primary hubs):**
- `dog-com:symptoms-hero`, `dog-com:conditions-hero`, `dog-com:compare-hero`, `dog-com:tools-hero`
- `dog-com:breed-golden-retriever` (homepage featured breed tile, breeds hub, compare page)

**Vets.co P0 (primary hubs):**
- `vets-co:symptoms-hero`, `vets-co:medications-hero`

**Fish.com P0 (tool + reference pages):**
- `fish-com:tools-hero`, `fish-com:water-parameters-hero`, `fish-com:glossary-hero`

**PetFood.com P0 (monetized hub):**
- `petfood-com:supplements-hero`

That is **11 keys** that are highest-visibility P0 targets. All 69 unlock with a single `node scripts/sync-images.mjs` run.

---

## Fastest Path to Premium Imagery

```
Carlo runs once on his Mac:
  node scripts/sync-images.mjs

Result:
  - 69 placeholder paw images replaced with real Unsplash/Pexels photos
  - 0 Visual Bot changes required before this sync
  - All 10 sites benefit immediately
  - All photographer attributions auto-populate via StockImage
```

**Visual Bot has nothing blocking Carlo's sync.** Every key that shows a paw placeholder already has a search query written. The entire placeholder situation resolves with one command.

---

## Evidence Pointers

- `packages/ui/src/data/image-manifest.json` — 124 keys currently present (some are synced keys not referenced in active pages, e.g. category cornerstone keys used only in data arrays)
- `scripts/image-queries.json` — 209 query entries (includes entries for keys in image-queries.json that are not yet referenced in any page, e.g. `ferret-com:health-adrenal-feature`, `lizard-com:tool-uvb-calculator` etc.)
- `apps/dog-com/src/app/breeds/page.tsx:65` — `BREED_MANIFEST_KEYS` map (6 breeds)
- `apps/dog-com/src/app/compare/[slug]/page.tsx:221` — mirrors same map
- `apps/lizard-com/src/app/species/page.tsx:13–31` — 19 species with hardcoded `img` keys
- `apps/fish-com/src/app/species/page.tsx:22–29` — 8 species with hardcoded `manifestKey` fields
