---
from: csro
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo/CSRO: review the 5-criteria-per-site table; COO fixes any NO items before flipping DNS."
---

# 5-Site Launch-Visual Verification Report

**Audit date:** 2026-06-07  
**Branch audited:** `origin/main` @ `d5fb4f1d` (chore(images): fill remaining photography slots)  
**Method:** grep all homepage + hub `page.tsx` files for `manifestKey=`, cross-reference against `packages/ui/src/data/image-manifest.json` (171 keys); grep for `AffiliateDisclosure` placement; inspect hero markup for responsive classes.

**Note on Ferret image branch:** `ops/ferret-image-curation` (SHA `fd6a39c0`) adds 8 keys absent from `origin/main`:
`ferret-com:behavior-biting`, `ferret-com:behavior-training`, `ferret-com:care-exercise`, `ferret-com:diet-raw-vs-kibble`, `ferret-com:health-emergency`, `ferret-com:health-gi-blockage`, `ferret-com:health-vaccinations`, `ferret-com:tools-hero`.
These 8 keys are referenced only on interior cluster/sub-pages and on `/tools/page.tsx` (`tools-hero`) — not on the homepage. Ferret's **homepage** itself is placeholder-free on `origin/main`. The interior sub-page placeholders are noted below and will resolve on merge of that branch.

---

## 1. Vets.co

| Criterion | YES/NO | Evidence |
|---|---|---|
| **1. Homepage hero image present?** | YES | `manifestKey="vets-co:hero"` (`apps/vets-co/src/app/page.tsx` line 364) resolves in manifest → Unsplash stethoscope-on-warm-wood photo |
| **2. Major cards image-rich?** | YES | Three image-backed reference-desk tiles use `vets-co:find-a-vet-hero`, `vets-co:health-hero`, `vets-co:category-breeds` — all present in manifest. Insurance band uses `vets-co:insurance-hero` — present. Featured guide card for Golden Retriever uses `dog-com:breed-golden-retriever` — present. Category grid (6 cards) uses SVG icons by design, no image slot. |
| **3. Visible placeholders anywhere prominent?** | NO | Homepage deliberately avoids the not-yet-synced keys it listed in the comment block (`vets-co:category-find-a-vet`, `symptoms-hero`, `medications-hero`, `diagnostics-hero`, `specialists-hero`, `tools-hero`). Those keys are actually **present** in the manifest as of `d5fb4f1d` — all 16 `vets-co:*` keys now resolve. Zero homepage placeholder slots. |
| **4. Top disclosure removed from hero/top?** | YES | `AffiliateDisclosure` does not appear in `layout.tsx` body or homepage `page.tsx`. Disclosure is rendered only via `<Footer showAffiliateDisclosure />` (footer) and `variant="inline"` inside article body on `reviews/best-pet-insurance/page.tsx` (line 123, below breadcrumb and ArticleByline — in-context above buy boxes, not at hero/top). |
| **5. Mobile first screen premium?** | YES | Hero section: `min-h-[60vh] sm:min-h-[68vh] lg:min-h-[78vh]`, H1 `fontSize: clamp(38px, 6vw, 74px)`, full-bleed `StockImage` with `absolute inset-0` fill, dark gradient scrim (`bg-gradient-to-t from-brand-dark via-brand-dark/75`), copy pinned to bottom via `flex-col justify-end`. Mobile first screen is photo-dominant with legible overlaid type. |

**Visual launch verdict:** Vets.co is visually launch-ready. All homepage and major card image slots resolve. No top-hero disclosure. Mobile hero is premium.

---

## 2. Ferret.com

| Criterion | YES/NO | Evidence |
|---|---|---|
| **1. Homepage hero image present?** | YES | `manifestKey="ferret-com:hero"` (`apps/ferret-com/src/app/page.tsx` line 231) resolves in manifest → real ferret photo |
| **2. Major cards image-rich?** | YES | Six cluster-hub tiles use `ferret-com:health-hero`, `ferret-com:care-hero`, `ferret-com:behavior-hero`, `ferret-com:colors-hero`, `ferret-com:diet-hero`, `ferret-com:ownership-hero` — all present in manifest. Three featured-category photo cards use `ferret-com:care-diet-basics`, `ferret-com:health-insulinoma`, `ferret-com:care-cage-setup` — all present. Featured-articles section uses `ferret-com:care-hero` for the care-hub banner — present. |
| **3. Visible placeholders anywhere prominent?** | PARTIAL — pending merge | **Homepage:** zero placeholder slots. First-Year Schedule is a deliberate text card (no image slot). **Interior hub/cluster pages (not homepage):** 8 keys missing from `origin/main` but present on `ops/ferret-image-curation`: `ferret-com:behavior-biting` (`/behavior/biting-and-nipping/`), `ferret-com:behavior-training` (`/behavior/training-and-bonding/`), `ferret-com:care-exercise` (`/care/exercise-and-enrichment/`), `ferret-com:diet-raw-vs-kibble` (`/diet/whole-prey-vs-kibble/`), `ferret-com:health-emergency` (`/health/emergency-warning-signs/`), `ferret-com:health-gi-blockage` (`/health/gastrointestinal-blockage/`), `ferret-com:health-vaccinations` (`/health/vaccinations/`), `ferret-com:tools-hero` (`/tools/page.tsx` — the tools hub hero). These render the paw placeholder on `origin/main`. Pending merge of `ops/ferret-image-curation`. |
| **4. Top disclosure removed from hero/top?** | YES | No `AffiliateDisclosure` in `layout.tsx` body or homepage `page.tsx`. Disclosure is footer-only via `<Footer showAffiliateDisclosure />`. |
| **5. Mobile first screen premium?** | YES | Hero section: `minHeight: clamp(62vh, 70vh, 78vh)` (inline style), H1 `fontSize: clamp(2.25rem, 6vw, 4.25rem)`, full-bleed `StockImage` with `position: absolute; inset: 0`, warm amber wash + dark bottom-up gradient scrim, copy pinned via `justifyContent: flex-end`. Mobile first screen is photo-dominant with legible overlaid type. |

**Visual launch verdict:** Ferret.com homepage is visually launch-ready. 8 interior sub-pages and the `/tools` hub hero show placeholders on `origin/main`; all 8 resolve on merge of `ops/ferret-image-curation`. Do not flip DNS until that branch merges.

---

## 3. PetFood.com

| Criterion | YES/NO | Evidence |
|---|---|---|
| **1. Homepage hero image present?** | YES | `manifestKey="petfood-com:hero"` (`apps/petfood-com/src/app/page.tsx` line 194) resolves in manifest → raw ingredients full-bleed photo |
| **2. Major cards image-rich?** | YES | Four cornerstone entry tiles use `petfood-com:category-brands`, `petfood-com:category-ingredients`, `petfood-com:compare-hero`, `petfood-com:category-species` — all present in manifest. Nutrition/Ingredients two-up band uses `petfood-com:nutrition-hero` and `petfood-com:category-ingredients` — both present. Methodology callout uses `petfood-com:category-conditions` — present. Tools section (3 cards) and regulatory guide grid (3 cards) are deliberate text/data cards — no image slots by brand brief. |
| **3. Visible placeholders anywhere prominent?** | NO | All 7 `manifestKey` references on the homepage resolve in the manifest. No placeholder slots. |
| **4. Top disclosure removed from hero/top?** | YES | No `AffiliateDisclosure` rendered at hero or top of homepage. The in-page "EDITORIAL DISCLOSURE" section at the bottom of the homepage (lines 739–771) is a custom inline text block, not the `AffiliateDisclosure` component, and is correctly positioned below all content. On `reviews/` money pages disclosure is rendered in-article (not checked here as homepage scope). `layout.tsx` has no disclosure in body. |
| **5. Mobile first screen premium?** | YES | Hero section: `min-h-[60vh] sm:min-h-[68vh] lg:min-h-[76vh]`, H1 `fontSize: clamp(36px, 6vw, 76px)`, full-bleed `StockImage` with `absolute inset-0` fill + `FILL_TILE` overrides, dark gradient scrim, moss-green radial wash, copy bottom-pinned via `flex-col justify-end`. Mobile first screen is photo-dominant with legible mono eyebrow and Cormorant Garamond display type. |

**Visual launch verdict:** PetFood.com is visually launch-ready. All homepage image slots resolve. No top-hero disclosure. Mobile hero is premium.

---

## 4. Dog.com

| Criterion | YES/NO | Evidence |
|---|---|---|
| **1. Homepage hero image present?** | YES | `manifestKey="dog-com:hero"` (`apps/dog-com/src/app/page.tsx` line 297) resolves in manifest → real dog photo |
| **2. Major cards image-rich?** | YES | 5 owner-path cards use `dog-com:category-health`, `dog-com:category-breeds`, `dog-com:breed-labrador-retriever`, `dog-com:category-guides`, `dog-com:category-reviews` — all present in manifest. Breed section: 2 photo tiles use `dog-com:category-breeds` + `dog-com:breed-labrador-retriever` (both present); 4 remaining breeds are deliberate text cards. Health section uses `dog-com:category-health` (present). Nutrition uses `dog-com:category-nutrition` (present). Training uses `dog-com:category-training` (present). Reviews uses `dog-com:category-reviews` (present). |
| **3. Visible placeholders anywhere prominent?** | NO | All manifest keys referenced on the homepage are present in `image-manifest.json`. Note: `dog-com:breed-golden-retriever`, `dog-com:breed-french-bulldog`, `dog-com:breed-german-shepherd`, `dog-com:breed-beagle`, `dog-com:breed-poodle` are all NOW present in the manifest (added by `d5fb4f1d`) but the homepage continues to show the non-Golden/Labrador breeds as text cards (by design, not forcing a placeholder). No rendered image is a placeholder. |
| **4. Top disclosure removed from hero/top?** | YES | `layout.tsx` comment confirms top inline disclosure was removed; `AffiliateDisclosure` not rendered in `layout.tsx` body or homepage `page.tsx`. Disclosure is footer-only + in-article on review pages. |
| **5. Mobile first screen premium?** | YES | Hero section: `min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh]`, H1 `fontSize: clamp(34px, 6vw, 68px)`, full-bleed `StockImage` with `absolute inset-0 [&_figure]:h-full` fill, dark bottom-up gradient scrim, warm brand wash, copy bottom-pinned via `flex-col justify-end`. Mobile first screen is photo-dominant with legible bold display type. |

**Visual launch verdict:** Dog.com is visually launch-ready. All homepage image slots resolve. No top-hero disclosure. Mobile hero is premium.

---

## 5. Fish.com

| Criterion | YES/NO | Evidence |
|---|---|---|
| **1. Homepage hero image present?** | YES | `manifestKey="fish-com:hero"` (`apps/fish-com/src/app/page.tsx` line 292) resolves in manifest → planted freshwater aquarium photo |
| **2. Major cards image-rich?** | YES | Tank planning band uses `fish-com:category-setup` (present). Cycling cornerstone uses `fish-com:cornerstone-cycling` (present). Species entry uses `fish-com:category-species` (present). Equipment decision band uses `fish-com:category-equipment` (present). Reviews uses `fish-com:category-reviews` (present). Featured species are deliberate text cards. Species hub page (`/species/page.tsx`) uses 8 `fish-com:species-thumb-*` keys — all 8 are present in manifest as of `d5fb4f1d`. |
| **3. Visible placeholders anywhere prominent?** | NO | Homepage code comments say species thumbs "FAILED to sync" but as of `d5fb4f1d` all 9 `fish-com:species-thumb-*` keys resolve in the manifest (`species-thumb-betta`, `-neon-tetra`, `-clownfish`, `-goldfish`, `-angelfish`, `-discus`, `-guppy`, `-oscar`, `-corydoras`). Homepage renders featured species as text cards regardless — no placeholder slot renders anywhere on the homepage. The `/species/page.tsx` hub carries 8 of these thumbs and they now resolve. The `fish-com:tools-hero` and `fish-com:water-parameters-hero` and `fish-com:glossary-hero` keys are all present in the manifest. Zero placeholders on homepage; `/tools`, `/water`, `/glossary` hub heroes also resolve. |
| **4. Top disclosure removed from hero/top?** | YES | `layout.tsx` has `AffiliateDisclosure` only via `<Footer showAffiliateDisclosure />`. Homepage `page.tsx` has no `AffiliateDisclosure` import or render. Review pages (`best-aquarium-lighting/page.tsx` line 37, `best-canister-filters/page.tsx` line 34) render `AffiliateDisclosure variant="inline"` below the breadcrumb and any lead callout — in-article position, not at hero/top. |
| **5. Mobile first screen premium?** | YES | Hero section: `min-h-[60vh] sm:min-h-[68vh] lg:min-h-[78vh]`, H1 `fontSize: clamp(34px, 6vw, 66px)` italic, full-bleed `StockImage` with `absolute inset-0 [&_figure]:h-full` fill, dark gradient scrim, cool teal radial wash, copy bottom-pinned via `flex-col justify-end`. Mobile first screen is photo-dominant with legible italic Cormorant Garamond display type. |

**Visual launch verdict:** Fish.com is visually launch-ready. All homepage and hub image slots resolve. No top-hero disclosure. Mobile hero is premium.

---

## Portfolio Summary

| Site | Visual Launch-Ready? | Open NO items |
|---|---|---|
| **Vets.co** | YES | None |
| **Ferret.com** | YES (homepage) / PENDING (interior) | 8 interior sub-page + `/tools` hub hero placeholders on `origin/main`; all resolve on merge of `ops/ferret-image-curation`. Do not flip DNS until merged. |
| **PetFood.com** | YES | None |
| **Dog.com** | YES | None |
| **Fish.com** | YES | None |

### Open items requiring action before DNS flip

1. **Ferret.com only — merge `ops/ferret-image-curation` first.**  
   Keys missing from `origin/main`: `ferret-com:behavior-biting`, `ferret-com:behavior-training`, `ferret-com:care-exercise`, `ferret-com:diet-raw-vs-kibble`, `ferret-com:health-emergency`, `ferret-com:health-gi-blockage`, `ferret-com:health-vaccinations`, `ferret-com:tools-hero`.  
   Affected pages: `/behavior/biting-and-nipping`, `/behavior/training-and-bonding`, `/care/exercise-and-enrichment`, `/diet/whole-prey-vs-kibble`, `/health/emergency-warning-signs`, `/health/gastrointestinal-blockage`, `/health/vaccinations`, `/tools` (hub hero). All render the paw placeholder until the branch merges.

2. **Dog.com breed text cards — optional upgrade, not a blocker.**  
   `dog-com:breed-golden-retriever`, `-french-bulldog`, `-german-shepherd`, `-beagle`, `-poodle` now all resolve in the manifest as of `d5fb4f1d`. The homepage currently renders French Bulldog, German Shepherd, Beagle, and Poodle as text cards. These could be upgraded to photo cards in a future pass — this is a polish opportunity, not a launch blocker (no placeholder currently renders).

### CI status at time of audit

- `trust-guard.mjs`: PASS (1,184 TSX files scanned; 0 hits)
- `metadata-policy.mjs`: PASS (all 10 sites clean)
- `link-check.mjs`: PASS (0 broken internal links across all 10 sites)
