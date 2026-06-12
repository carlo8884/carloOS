---
from: COO
to: Monetization Bot
status: proposed
created: 2026-06-12
next_action: Monetization wires the P0 leaks listed below, then clears the P1 unmonetized pages in priority order.
base_commit: 19cec0e2b42828cc385d653be33c6203afa97677
---

# Monetization-Readiness Audit — Portfolio-Wide
## COO → Monetization handoff · 2026-06-12

**Scope:** All 10 production apps, launch cohort (Dog, Fish, Ferret, PetFood, Vets) prioritized.
**Method:** Grep/Glob on all `apps/*/src/app/**/*.tsx` for: `ctaHref=`, `href=.*https://`, `/go/`, `AffiliateDisclosure`, `affiliate-routes.ts`, `ReviewCard`, `BuyBox`. Lane constraint: audit only — zero code changes made.
**Trust-guard:** `node scripts/ci/trust-guard.mjs` passes clean (1,331 files, 0 hits) after audit.

---

## Executive Summary

| Category | Total findings | Blocker | High | Medium |
|---|---|---|---|---|
| Affiliate-route leaks (direct outbound bypass) | 8 sites · ~11 surfaces | 1 | 3 | 4 |
| Missing FTC disclosure above monetized surface | 0 confirmed gaps | — | — | — |
| High-intent pages with NO monetization | 30+ pages | — | 3 | several |
| Clinical/medicated buy-box compliance risk | 0 (all editorial=true) | — | — | — |

**The good news:** The core review infrastructure is sound. All `ReviewCard` CTAs on the flagship sites route correctly through `/go/`. Flea/tick, heartworm, clinical products are correctly marked `editorial=true` with `/find-a-vet` CTAs — compliant with QC §1.5.b. No clinical buy-box compliance violations found.

**The gaps:** (1) `saddle-com/brands/[slug]` sends 8 brand CTAs directly to manufacturer `.com` websites instead of `/go/`. (2) Three ferret-com review pages (`best-ferret-cage`, `best-ferret-litter`, `best-ferret-harness`) are marked `editorial` with CTAs pointing to internal anchors — effectively unmonetized buying-guide pages. (3) ~30 high-intent pages across the launch cohort have content with purchase intent and zero affiliate path.

---

## 1. Affiliate-Route Leaks

### 1.1 Saddle.com — `brands/[slug]` CTA fallback (HIGH · 8 surfaces)

**File:** `apps/saddle-com/src/app/brands/[slug]/page.tsx:307`

**Code:**
```tsx
ctaHref={brand.relatedReviewSlug ? `/reviews/${brand.relatedReviewSlug}` : brand.brandUrl}
```

When a brand has no `relatedReviewSlug`, the CTA `"Find a {Brand} dealer →"` links directly to the brand's `.com` website (raw `https://...`). This bypasses the `/go/` click-tracker entirely and loses all affiliate attribution.

**Affected brands** (8 of 10 in `apps/saddle-com/src/data/saddle-brands.ts`):

| Brand | brandUrl (direct leak) | Has /go/ path? |
|---|---|---|
| Bates | `https://www.batessaddles.com` | via `/go/amazon-brand/bates...` would work |
| Wintec | `https://www.wintec.net.au` | via `/go/amazon-brand/wintec...` would work |
| County | `https://www.countysaddlery.com` | no US retailer CTA |
| Custom Saddlery | `https://www.customsaddlery.com` | no US retailer CTA |
| Antares | `https://www.antaressellier.com` | no US retailer CTA |
| Billy Cook | `https://www.billycooksaddlery.com` | via `/go/amazon-brand/billy+cook...` would work |
| Circle Y | `https://www.circley.com` | via `/go/amazon-brand/circle+y...` would work |
| Reinsman | `https://www.reinsman.com` | via `/go/amazon-brand/reinsman...` would work |

Only `stubben` and `pessoa` have `relatedReviewSlug` set (routing to internal review pages).

**Fix needed (Monetization lane):** Replace the `brand.brandUrl` fallback with a `/go/amazon-brand/{brand.name}` search route so all brands get tracked. Brands sold exclusively through US retailers (Bates, Wintec, Billy Cook, Circle Y, Reinsman) are available on Amazon and the `amazon-brand` route exists in `saddle-com`'s `affiliate-routes.ts`. County/Custom Saddlery/Antares are European luxury brands — a "find a dealer" CTA with no retailer route is acceptable only if it is NOT styled as a commercial buy button with `rel="sponsored"`.

**Severity:** HIGH — the brands page is a high-intent purchase-path page (users just browsed the brand spec, now want to buy).

---

### 1.2 Saddle.com brands data — `citations[]` array contains merchant URLs (INFO)

**File:** `apps/saddle-com/src/data/saddle-brands.ts` lines 129-130, 187, 243, 299

The `citations` array on several brand objects lists `doversaddlery.com` and `smartpakequine.com` as citation sources. These are data fields used only for source attribution in footnotes — they are not rendered as clickable purchase links. **No leak — confirmed INFO only.**

---

### 1.3 PetFoods.com — `brands.ts` data field (INFO)

**File:** `apps/petfoods-com/src/data/brands.ts:623, :811`

`sourcesUrl` fields contain `wysong.net` and `chewy.com/b/american-journey` — these are source citation fields, not rendered buy CTAs. **No leak — confirmed INFO only.**

---

### 1.4 Ferret.com — 3 review pages with editorial-only CTAs (HIGH · in context)

**Files:**
- `apps/ferret-com/src/app/reviews/best-ferret-cage/page.tsx:299, 323, 347`
- `apps/ferret-com/src/app/reviews/best-ferret-litter/page.tsx:283, 308, 333`
- `apps/ferret-com/src/app/reviews/best-ferret-harness/page.tsx:284, 309, 334`

All `ReviewCard` CTAs on these three pages are marked `editorial=true` with `ctaHref` pointing to the same-page anchor (`/reviews/best-ferret-cage#picks` etc.) — effectively "see picks above" circular links. No affiliate route is called; no revenue is earned. The comment blocks literally say `{/* MONETIZATION: buy-box slot */}` indicating these are intentional placeholders awaiting wiring.

These are buying-guide pages (cage, litter, harness = the three core ferret setup products every owner must buy). The products named are all physical, non-clinical supplies permitted under QC §1.5.b. Vendors `amazon-brand`, `chewy-brand`, and `marshall` are registered in `ferret-com/src/data/affiliate-routes.ts`.

**Fix needed (Monetization lane):** Wire `ctaHref` to `/go/amazon-brand/{product+query}` or `/go/chewy-brand/{product+query}` or `/go/marshall/{sku}` and remove `editorial` flag. Add inline `AffiliateDisclosure variant="inline"` above first ReviewCard (currently absent from all three pages).

**Severity:** HIGH — these are the three highest-purchase-intent pages on Ferret.com.

---

### 1.5 Horses.com direct external links (INFO/resolved context)

Earlier history (dir-019) flagged direct CTAs. Audit confirms all horses-com `ReviewCard` and guide CTAs now route correctly through `/go/smartpak/`, `/go/dover/`, `/go/schneider/`, `/go/ridingwarehouse/`, `/go/amazon-brand/`. The schema `url:` field references in `buildProductSchema()` use `smartpakequine.com` and `doversaddlery.com` — these are JSON-LD metadata fields only, not rendered outbound links. **No live leak. Confirmed clean.**

---

### 1.6 Vets.co — Telehealth page `ctaHref="/go/askvet/telehealth"` route (MEDIUM)

**File:** `apps/vets-co/src/app/telehealth/page.tsx:71`

The CTA routes to `/go/askvet/telehealth`. The `askvet` vendor IS registered in `vets-co/src/data/affiliate-routes.ts` (added 2026-06-01). **Not a leak.** However, AskVet became Ask.Vet / Chewy Connect — verify the `AFF_ASKVET_TAG` env var resolves to a live affiliate link before launch.

**Severity:** MEDIUM — flag for env-var activation.

---

## 2. FTC Disclosure Coverage

**Portfolio-wide result: No confirmed blocker gaps.**

All 10 sites have `<Footer siteId="..." showAffiliateDisclosure />` in `layout.tsx` (sitewide footer baseline).

Per-page `AffiliateDisclosure variant="inline"` is present above the first affiliate CTA on:
- All dog-com review pages ✓
- All fish-com species + health + review pages ✓
- All ferret-com care/diet/health/behavior pages ✓
- All horses-com review + tack + supplement + guide pages ✓
- All vets-co insurance + telehealth pages ✓
- All petfood-com supplement + compare + brand-eval pages ✓
- All lizard-com review + setup + species pages ✓
- All saddle-com review + guide pages ✓

**One exception — petfoods-com footer:**
`apps/petfoods-com/src/app/layout.tsx:68`: `showAffiliateDisclosure={false}`. The `BuyBox` component used on `brands/[slug]` passes a `disclosure=` prop inline, which satisfies FTC. However if any future petfoods-com page adds a bare affiliate link without using `BuyBox`, there would be no footer backup. Flag for Monetization awareness.

**Three ferret-com review pages (cage/litter/harness):** No `AffiliateDisclosure` because they have no live affiliate CTAs yet. When Monetization wires the buy-boxes (see §1.4), add `AffiliateDisclosure variant="inline"` above the first ReviewCard per QC §3.2.

---

## 3. High-Intent Pages With No Monetization

### Priority: Launch Cohort First

#### 3A. PetFood.com — Review pages have AffiliateDisclosure but no buy-boxes (HIGH)

Three top-tier review pages carry `AffiliateDisclosure` components but have zero `ctaHref` or `BuyBox` — pure editorial with no monetized CTA:

| Page | File | Commercial signal |
|---|---|---|
| Best Senior Dog Food | `apps/petfood-com/src/app/reviews/best-senior-dog-food/page.tsx` | High-intent buyer page |
| Best Puppy Food | `apps/petfood-com/src/app/reviews/best-puppy-food/page.tsx` | High-intent buyer page |
| Best Cat Food | `apps/petfood-com/src/app/reviews/best-cat-food/page.tsx` | High-intent buyer page |

All three have `AffiliateDisclosure` imported but no affiliate links. These recommend specific foods by name (Royal Canin, Purina Pro Plan, Hills Science Diet) without giving the reader a buy path. Chewy and Amazon routes exist in petfood-com's `affiliate-routes.ts`.

**Fix needed:** Add `ctaHref="/go/chewy-brand/{product}?s=..."` to named product recommendations.

#### 3B. PetFood.com — Compare pages without buy-boxes (MEDIUM · 7 pages)

| Page | File |
|---|---|
| Kibble vs Canned for Cats | `apps/petfood-com/src/app/compare/kibble-vs-canned-for-cats/page.tsx` |
| Wet vs Dry Food | `apps/petfood-com/src/app/compare/wet-vs-dry-food/page.tsx` |
| Raw vs Cooked Diets | `apps/petfood-com/src/app/compare/raw-vs-cooked-diets/page.tsx` |
| Breed-Specific Diets | `apps/petfood-com/src/app/compare/breed-specific-diets/page.tsx` |
| Prescription vs OTC Diets | `apps/petfood-com/src/app/compare/prescription-vs-otc-diets/page.tsx` |
| Grain-Free vs Grain-Inclusive | `apps/petfood-com/src/app/compare/grain-free-vs-grain-inclusive/page.tsx` |
| Home-Cooked vs Commercial | `apps/petfood-com/src/app/compare/home-cooked-vs-commercial/page.tsx` |

Note: `prescription-vs-otc-diets` — a single editorial buy-box recommending a commercial OTC option (not a prescription product) would be appropriate. Do NOT add a prescription-diet buy-box per QC §1.5.b.

#### 3C. Vets.co — Insurance questions pages lack insurance CTAs (MEDIUM · 8 pages)

The 8 `/insurance/questions/*` pages each have `AffiliateDisclosure` but zero `/go/` CTAs:

| Page | File |
|---|---|
| Is pet insurance worth it? | `apps/vets-co/src/app/insurance/questions/is-pet-insurance-worth-it/page.tsx` |
| How much does it cost? | `apps/vets-co/src/app/insurance/questions/how-much-does-pet-insurance-cost/page.tsx` |
| When should I get it? | `apps/vets-co/src/app/insurance/questions/when-should-i-get-pet-insurance/page.tsx` |
| Does it cover dental? | `apps/vets-co/src/app/insurance/questions/does-pet-insurance-cover-dental/page.tsx` |
| Does it cover vaccines? | `apps/vets-co/src/app/insurance/questions/does-pet-insurance-cover-vaccines/page.tsx` |
| Multi-pet discounts | `apps/vets-co/src/app/insurance/questions/multi-pet-discounts/page.tsx` |
| Pre-existing conditions | `apps/vets-co/src/app/insurance/questions/does-pet-insurance-cover-pre-existing-conditions/page.tsx` |
| Claims process | `apps/vets-co/src/app/insurance/questions/how-does-the-claims-process-work/page.tsx` |

Each page already links internally to the review and calculator. Adding 1-2 `ReviewCard` CTAs to insurance providers via `/go/trupanion/`, `/go/healthy-paws/`, etc. would convert high-intent readers. The `AffiliateDisclosure` is already in place.

#### 3D. Horses.com — 9 nutrition pages with zero monetization (MEDIUM)

| Page | File | Suggested path |
|---|---|---|
| Feeding the Hard Keeper | `apps/horses-com/src/app/nutrition/feeding-the-hard-keeper/page.tsx` | `/go/amazon-brand/weight+gain+supplement+horse` |
| Grain and Concentrates | `apps/horses-com/src/app/nutrition/grain-and-concentrates/page.tsx` | `/go/smartpak/...` |
| Feeding the Performance Horse | `apps/horses-com/src/app/nutrition/feeding-the-performance-horse/page.tsx` | `/go/smartpak/...` |
| Feeding the Easy Keeper | `apps/horses-com/src/app/nutrition/feeding-the-easy-keeper/page.tsx` | `/go/amazon-brand/low+starch+equine+diet` |
| Feeding Senior Horses | `apps/horses-com/src/app/nutrition/feeding-senior-horses/page.tsx` | `/go/amazon-brand/senior+horse+feed` |
| Hay Types | `apps/horses-com/src/app/nutrition/hay-types/page.tsx` | low priority |
| Forage Basics | `apps/horses-com/src/app/nutrition/forage-basics/page.tsx` | low priority |
| Water Requirements | `apps/horses-com/src/app/nutrition/water-requirements/page.tsx` | trough heater → `/go/amazon-brand/...` |
| Beet Pulp | `apps/horses-com/src/app/nutrition/beet-pulp/page.tsx` | `/go/amazon-brand/equine+beet+pulp` |

Toxic plants page: correctly has no buy-box (pure safety content — do not add one).

#### 3E. Dog.com — Training cluster (LOW · informational, low purchase intent)

The 13 `/training/*` pages have no buy-boxes. Most are purely behavioral — adding product CTAs would feel forced. **One exception:** `crate-training/page.tsx` already links to `/reviews/best-dog-crates` in prose — a brief ReviewCard at the end pointing to top crate picks would be natural. Low priority.

---

## 4. Clinical/Medicated Buy-Box Compliance Scan

**Portfolio-wide result: 0 compliance violations found.**

All clinical and prescription-adjacent products are correctly handled:

| Site | Product | Handling | Status |
|---|---|---|---|
| dog-com | Bravecto, NexGard (flea/tick) | `editorial=true`, CTA → `/find-a-vet` | ✓ Compliant |
| dog-com | Heartgard, Interceptor, Simparica Trio, ProHeart 12 | `editorial=true`, CTA → `/find-a-vet` | ✓ Compliant |
| dog-com | CBD products (best-joint-supplements:163) | `editorial=true`, CTA → `/find-a-vet` | ✓ Compliant |
| fish-com | Aquarium medications (velvet, ich, fin-rot, medicating) | Hospital-tank equipment only via `/go/`; no medication buy-boxes | ✓ Compliant |
| horses-com | GastroGard, omeprazole, sucralfate, misoprostol (equine-ulcers) | Informational only, no CTA on any medication | ✓ Compliant |
| ferret-com | Adrenal disease page | One fleece sleep-sack CTA (non-clinical comfort item) via `/go/chewy-brand/` | ✓ Compliant |

No chlorhexidine, antiseptic, or prescription-pharmacy buy-boxes found on any site. Chewy Pharmacy routes exist in `dog-com/affiliate-routes.ts` but are not instantiated on any page. Clean.

---

## Prioritized Task List for Monetization Lane

### P0 — Fix Before Launch

| # | Task | Site | File(s) | Effort |
|---|---|---|---|---|
| P0-1 | Fix `brands/[slug]` CTA fallback: replace `brand.brandUrl` with `/go/amazon-brand/{brand.name}` for Bates/Wintec/Billy Cook/Circle Y/Reinsman; suppress CTA for County/Custom Saddlery/Antares | saddle-com | `apps/saddle-com/src/app/brands/[slug]/page.tsx:307` | XS |
| P0-2 | Wire ferret-com best-ferret-cage ReviewCards: remove `editorial`, set `ctaHref` to `/go/amazon-brand/{cage+search}` or `/go/marshall/{sku}`, add `AffiliateDisclosure variant="inline"` above first card | ferret-com | `apps/ferret-com/src/app/reviews/best-ferret-cage/page.tsx:299,323,347` | XS |
| P0-3 | Wire ferret-com best-ferret-litter ReviewCards: route to `/go/chewy-brand/{litter+query}`, add disclosure | ferret-com | `apps/ferret-com/src/app/reviews/best-ferret-litter/page.tsx:283,308,333` | XS |
| P0-4 | Wire ferret-com best-ferret-harness ReviewCards: route to `/go/marshall/{harness-sku}` or `/go/amazon-brand/`, add disclosure | ferret-com | `apps/ferret-com/src/app/reviews/best-ferret-harness/page.tsx:284,309,334` | XS |

### P1 — This Week

| # | Task | Site | File(s) | Effort |
|---|---|---|---|---|
| P1-1 | Add buy-box CTAs to petfood-com review pages (best-senior-dog-food, best-puppy-food, best-cat-food) | petfood-com | 3 review files | S |
| P1-2 | Add 1-2 insurance `ReviewCard` CTAs to top 3 vets-co questions pages | vets-co | is-pet-insurance-worth-it, how-much-does-it-cost, when-should-I-get-it | S |
| P1-3 | Add buy-boxes to horses-com feeding-the-hard-keeper, feeding-the-performance-horse, feeding-senior-horses | horses-com | 3 nutrition files | S |

### P2 — This Month

| # | Task | Site | Effort |
|---|---|---|---|
| P2-1 | Add buy-boxes to remaining horses-com nutrition pages | horses-com | S |
| P2-2 | Wire remaining 5 vets-co insurance/questions pages with 1-2 insurance CTAs each | vets-co | S |
| P2-3 | Add buy-boxes to petfood-com compare pages (kibble-vs-canned, wet-vs-dry, grain-free-vs-grain-inclusive, home-cooked-vs-commercial) | petfood-com | M |
| P2-4 | Add single buy-box at end of dog-com crate-training page | dog-com | XS |
| P2-5 | Verify `AFF_ASKVET_TAG` env var resolves to live affiliate link before vets-co launch | vets-co | XS |

### P3 — Backlog

| # | Task | Site |
|---|---|---|
| P3-1 | Restore `showAffiliateDisclosure={true}` on petfoods-com Footer as defense-in-depth | petfoods-com |
| P3-2 | petfood-com remaining compare pages (raw-vs-cooked, breed-specific, prescription-vs-otc) | petfood-com |
| P3-3 | dog-com training cluster: assess training-tool CTAs on appropriate pages | dog-com |

---

## Cross-Reference: Already Confirmed Resolved (Do Not Re-Raise)

Per prior Monetization handoffs (dir-019, dir-015, 2026-05-31 round-1 wiring, 2026-06-09 launch-candidate residuals):
- Horses.com direct CTAs — fully wired via `/go/smartpak/`, `/go/dover/`, `/go/schneider/`, `/go/ridingwarehouse/`
- Ferret.com care/diet/behavior/health pages — wired round-1
- Fish.com species + health pages — wired and disclosed
- Dog.com review pages — wired
- Vets.co insurance hub pages — wired

---

*Audit run: 2026-06-12 · Auditor: COO · Base commit: `19cec0e2b42828cc385d653be33c6203afa97677` · Trust-guard: PASS (1,331 files, 0 hits)*
