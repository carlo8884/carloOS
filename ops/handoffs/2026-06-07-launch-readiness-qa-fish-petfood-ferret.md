---
from: coo
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo: review per-site punch-list; COO/Visual/Monetization fix open items before DNS."
---

# Launch-Readiness QA Punch-List — Fish.com · PetFood.com · Ferret.com

Polish-list sites 3–5, audited against the §8a launch-quality bar. **Read-only audit — no app code changed.**

## How to read this

- **PASS** = meets the bar, no action needed.
- **RISK** = passes CI but has a launch-polish gap an acquirer/AI-crawler would notice.
- **FAIL** = fails the bar; must fix before DNS.
- CI baseline (run 2026-06-07 on `origin/main`): `trust-guard`, `metadata-policy`, `link-check` are **all green across all 10 sites**. These three sites are all `enforce: true` in metadata-policy and strict-mode in link-check, so their green is real (not advisory).
- **Method notes:** "orphan" counts come from a static href scanner. It cannot see spoke links built via `href={`/hub/${slug}`}` mapped arrays — which all three hubs use — so the only true 0-inbound pages are intentional `redirect()` stubs (verified individually). Imagery gaps come from diffing referenced `manifestKey=` values against `packages/ui/src/data/image-manifest.json`; a referenced key absent from the manifest renders a low-opacity paw-glyph placeholder (`packages/ui/src/components/StockImage.tsx`).

---

## FISH.COM

101 static routes. Hubs: `/species`, `/setup`, `/water-parameters`, `/equipment`, `/reviews`, `/health`, `/tools`. Money surfaces: 7 `/reviews/best-*` pages + `/equipment/[slug]`.

| Criterion | Status | Evidence | Fix owner |
|---|---|---|---|
| 1. Trust / metadata / link posture | PASS | `trust-guard`/`metadata-policy`/`link-check` all green (strict). No fabricated-credential bylines — pages use "Fish.com Editorial" / "Editorial team" (e.g. `species/celestial-pearl-danio/page.tsx:29`). | — |
| 2. Thin / duplicate pages | RISK | ~14 "lite" species pages at 3–5 body paragraphs (~330–450 words) vs cornerstone betta (18 ¶ / 8 sections): `species/celestial-pearl-danio` (3 ¶), `dwarf-puffer` (3 ¶), `bristlenose-pleco`, `bronze-corydoras`, `endlers-livebearer`, `panda-corydoras`, `rainbow-fish`, `sparkling-gourami` (4 ¶ each), plus amano-shrimp/boesemani/ember-tetra/harlequin-rasbora/pearl-gourami/zebra-danio (5 ¶). **`celestial-pearl-danio` over-claims** — metadata says "Complete care guide" but body covers only dimorphism/water/breeding (no diet, tank mates, lifespan, disease). Duplicates correctly handled via redirect stubs (`/water`→`/water-parameters`, `/calculators`→`/tools`, `species/discus-guide`→`/species/discus`, etc.). | COO |
| 3. Home → hub → spoke integrity | PASS | All 7 hubs in nav config + homepage. Hubs render spokes via mapped arrays with SchemaScript ItemList (e.g. `water-parameters/page.tsx` schema-rich). | — |
| 4. Orphan pages | PASS | Static scan flagged 5 ≤1-inbound; all 5 are intentional `redirect()` stubs (`/calculators`, `/water`, `species/{discus,kuhli-loach,otocinclus}-guide`). Zero true orphans. | — |
| 5. Broken links / breadcrumbs / schema | PASS | `link-check` strict-green. Review + equipment money pages emit Article + Product + BreadcrumbList JSON-LD via `SchemaScript` (e.g. `reviews/best-aquarium-filters/page.tsx:14,32,39`). | — |
| 6. Commercial readiness | PASS (1 RISK) | All commercial CTAs route via `/go/<vendor>/<sku>` — zero raw external commerce hrefs. All referenced vendors (`amazon`, `amazon-brand`, `chewy-brand`, `marinedepot`) are registered in `affiliate-routes.ts` (no dead /go → no 404 CTAs). `AffiliateDisclosure` rendered above first CTA on money + monetized species pages. **RISK:** `buildProductSchema` on review pages uses `ratingValue: 9.4, reviewCount: 1` (`reviews/best-aquarium-filters/page.tsx:32`) — a single-review rating signal is weak/borderline for Product schema; AI surfaces and Google may discount or flag it. Monetization to confirm rating-source policy. | Monetization |
| 7. Tools / calculators work | PASS | All 6 tools are `'use client'` with `useState`/`useMemo` input→output wiring (volume, CO2, heater-wattage, stocking, water-change, cycling-estimator). | — |
| 8. Tier-1 trust / valuation risk | PASS | None found. Clinical/medication language (`health/medicating-aquarium-fish`) is reference-framed, no first-person hands-on claims. | — |
| **Imagery (Visual flag)** | RISK | 3 referenced manifestKeys missing → paw placeholders: `fish-com:glossary-hero`, `fish-com:tools-hero`, `fish-com:water-parameters-hero`. Plus 6 keys are **curated/no-photographer** (render "Source: Unsplash" not full credit): `category-{health,setup,species,reviews}`, `species-goldfish`, `species-neon-tetra`. | Visual |

**Must-fix before DNS (Fish):**
1. Fix `celestial-pearl-danio` metadata over-claim — either expand body to a real complete guide (add diet, tank mates, lifespan, common problems) or downgrade the title/description from "Complete care guide." (COO)
2. Sync the 3 missing hub-hero images (`tools-hero`, `water-parameters-hero`, `glossary-hero`) so two tool/authority hubs aren't showing paw placeholders. (Visual)
3. Confirm `reviewCount: 1` Product-schema rating signal is acceptable, or remove `ratingValue`/`reviewCount` from single-review Products to avoid a structured-data penalty. (Monetization)

**Nice-to-have (Fish):**
- Bring the ~14 lite species pages up to a consistent depth floor (they monetize but read thin next to betta). (COO)
- Replace the 6 curated/no-photographer images with full-attribution synced photos. (Visual)

**Verdict: NEAR-READY.** CI-clean, fully monetized, all tools work, schema strong. Blocked only by one over-claiming thin page, 3 placeholder hub heroes, and a Product-schema rating call.

---

## PETFOOD.COM

103 static routes. Hubs: `/compare`, `/brands`, `/conditions`, `/diets`, `/ingredients`, `/nutrition`, `/feeding`, `/supplements`, `/life-stage`, `/guides`, `/myths`, `/species`, `/tools`. Money surfaces: brand evaluations + compare pages + cost calculator.

| Criterion | Status | Evidence | Fix owner |
|---|---|---|---|
| 1. Trust / metadata / link posture | PASS | All three gates green (strict). Bylines editorial-only; clinical diet pages (`diets/kidney-disease-diets`, `ingredients/grain-free-dcm-risk`) are reference-framed, no first-person claims. | — |
| 2. Thin / duplicate pages | PASS | Thinnest non-hub content pages are still substantive; the low word-proxy hits are all hubs (link-dense by design) and legal boilerplate. No duplicate-route issues. | — |
| 3. Home → hub → spoke integrity | PASS | All 13 hubs in nav + homepage; hubs render mapped spoke arrays with ItemList schema (e.g. `compare/page.tsx`, `brands/page.tsx` schema-rich). | — |
| 4. Orphan pages | PASS | Static scan flagged 1 zero-inbound (`/methodology` — intentional `redirect()` → `/guides/methodology`). The 17 "1-inbound" hits are hub-linked spokes the static scanner under-counts (hubs use `${slug}` interpolation); confirmed reachable. Zero true orphans. | — |
| 5. Broken links / breadcrumbs / schema | PASS | `link-check` strict-green. Brand evals carry FAQ + Breadcrumb schema via `combineSchemas`/`ArticleLayout` (e.g. `brands/blue-buffalo-evaluation/page.tsx:44,111`). Cost calculator emits SoftwareApplication + breadcrumb (`tools/food-cost-calculator/page.tsx`). | — |
| 6. Commercial readiness | PASS | CTAs via `/go` only; all referenced vendors (`amazon`, `amazon-brand`, `chewy`, `chewy-brand`, `farmers-dog`, `ollie`) registered → no dead CTAs. `BuyBox` + `AffiliateDisclosure` present and disclosure above buy-box on brand evals (`brands/blue-buffalo-evaluation/page.tsx:161` disclosure → `:162` BuyBox). | — |
| 7. Tools / calculators work | PASS | `portion-calculator` is client+stateful. `food-cost-calculator` delegates to `components/visual/FoodCostCalculator.tsx` — verified `'use client'`, `useState`/`useMemo`, live inputs (cups/day, bag size, price) → per-day/month/year + compare mode. Both work. | — |
| 8. Tier-1 trust / valuation risk | PASS | None. DCM/grain-free and prescription-diet pages handle medical nuance with citations, not advice-as-fact. | — |
| **Imagery (Visual flag)** | RISK | 5 referenced manifestKeys missing → paw placeholders, all **hub heroes**: `petfood-com:feeding-hero`, `guides-hero`, `myths-hero`, `supplements-hero`, `tools-hero`. Plus 2 curated/no-photographer: `brands-hero`, `ingredients-hero`. This is the worst hub-hero placeholder coverage of the three sites. | Visual |

**Must-fix before DNS (PetFood):**
1. Sync the 5 missing hub-hero images (`feeding-hero`, `guides-hero`, `myths-hero`, `supplements-hero`, `tools-hero`) — five top-level hubs currently render paw placeholders, which reads as half-built. (Visual)

**Nice-to-have (PetFood):**
- Replace the 2 curated/no-photographer hub images (`brands-hero`, `ingredients-hero`) with full-attribution synced photos. (Visual)

**Verdict: READY pending imagery.** This is the cleanest of the three on structure, content, schema, and monetization — every gate passes and no content/trust gaps found. The only blocker is 5 placeholder hub heroes (a Visual-lane fix, not a COO/content fix).

---

## FERRET.COM

109 static routes. Hubs: `/health`, `/care`, `/behavior`, `/colors`, `/diet`, `/ownership`, `/tools` + standalone `/find-an-exotic-vet`, `/first-year-schedule`. Money surface: `(funnels)/ferret-starter-kit` (Monetization-lane).

| Criterion | Status | Evidence | Fix owner |
|---|---|---|---|
| 1. Trust / metadata / link posture | PASS | All three gates green (strict). Clinical health cluster (insulinoma, adrenal, lymphoma) is citation-framed (Quesenberry/Carpenter exotic-mammal literature referenced); no fabricated DVM bylines. | — |
| 2. Thin / duplicate pages | PASS | No thin prose articles. Low word-proxy hits are structured-data pages by design (`ownership/ferret-glossary`, `ownership/ferret-supplies-checklist`, `tools/cost-calculator`) + legal boilerplate. Molt-article duplicate handled via redirect (`care/seasonal-coat-and-shedding`→`care/seasonal-shedding`). | — |
| 3. Home → hub → spoke integrity | PASS | All hubs in nav + homepage (1,439-line homepage links every cluster). Health hub renders spokes via `HEALTH_CARDS.map(... href={`/health/${card.slug}`})` with ItemList schema (`health/page.tsx:177,295`). | — |
| 4. Orphan pages | PASS | Static scan flagged 2 zero-inbound: `(funnels)/ferret-starter-kit` (funnel — reached via in-content CTAs, expected) and `/legal/affiliate-disclosure` (footer-linked; scanner missed). The 6 "1-inbound" hits (`lymphoma`, `readiness-quiz`, `ferret-vocabulary-for-beginners`, etc.) are hub/glossary-linked spokes — confirmed reachable (e.g. lymphoma is in `health/page.tsx` HEALTH_CARDS). Zero true orphans. | — |
| 5. Broken links / breadcrumbs / schema | PASS | `link-check` strict-green. Health articles use `ArticleLayout` (auto BreadcrumbList JSON-LD). Starter-kit funnel emits schema via `SchemaScript` + breadcrumb (`ferret-starter-kit/page.tsx:23,35,49`). | — |
| 6. Commercial readiness | PASS | Starter-kit funnel: `AffiliateDisclosure` at `:69` is above the buy items (`/go/${item.vendor}/...` at `:131`); `EmailCapture` lead capture at `:166`. All funnel vendors (`amazon-brand`, `carniwhole`, `chewy-brand`, `marshall`, `wysong`) registered → no dead CTAs. Supportive-products box on senior-ferret page carries explicit "does not treat clinical conditions" disclaimer (`health/aging-ferret-care/page.tsx:571`). Funnel file is Monetization-lane — not modified here. | Monetization |
| 7. Tools / calculators work | PASS | `cost-calculator` + `readiness-quiz` are client+stateful. `food-evaluator` delegates to `components/visual/FerretFoodEvaluator.tsx` — verified `'use client'`, `useState`, real scoring logic (first-ingredient + protein/fat thresholds → 0–10 verdict). All 3 work. | — |
| 8. Tier-1 trust / valuation risk | PASS | None. Strongest clinical-handling of the three; supportive-product framing on senior/health pages explicitly disclaims treatment claims. | — |
| **Imagery (Visual flag)** | RISK | 11 referenced manifestKeys missing → paw placeholders (highest count of the three): `behavior-biting`, `behavior-training`, `care-exercise`, `diet-raw-vs-kibble`, `find-vet-hero`, `first-year-hero`, `health-emergency`, `health-gi-blockage`, `health-vaccinations`, `glossary-hero`, `tools-hero`. Note: 25 ferret keys ARE synced (most of any site) and 0 are curated/no-photographer — so the gap is depth, not attribution. | Visual |

**Must-fix before DNS (Ferret):**
1. Sync the 3 high-traffic/authority missing hero images — `find-vet-hero` (`/find-an-exotic-vet`), `first-year-hero` (`/first-year-schedule`), and `tools-hero` (`/tools` hub) — these are standalone authority/conversion surfaces showing paw placeholders. (Visual)
2. Sync the 3 missing health-article images (`health-emergency`, `health-gi-blockage`, `health-vaccinations`) — emergency/clinical pages with placeholder imagery undercut the clinical-authority positioning. (Visual)

**Nice-to-have (Ferret):**
- Sync remaining 5 missing in-article images (`behavior-biting`, `behavior-training`, `care-exercise`, `diet-raw-vs-kibble`, `glossary-hero`). (Visual)

**Verdict: READY pending imagery.** Best clinical-trust handling and deepest content of the three; CI-clean, funnel correctly disclosed + lead-captured + routed via `/go`, all tools work. Only blocker is the imagery backlog (11 placeholders) — entirely Visual-lane.

---

## Cross-site summary

| | Fish.com | PetFood.com | Ferret.com |
|---|---|---|---|
| CI gates (strict) | green | green | green |
| True orphans | 0 | 0 | 0 |
| Thin-content risk | **yes (~14 lite species + 1 over-claim)** | no | no |
| Dead /go CTAs | 0 | 0 | 0 |
| Disclosure above monetized surface | yes | yes | yes |
| Tools working | 6/6 | 2/2 | 3/3 |
| Schema on money/authority pages | yes | yes | yes |
| Missing hero images (paw placeholders) | 3 | 5 | 11 |
| Tier-1 trust/valuation risk | none | none | none |
| **Per-site verdict** | **NEAR-READY** | **READY pending imagery** | **READY pending imagery** |

**Top-line:** No Tier-1 trust or valuation risk on any of the three. Zero affiliate leakage, zero dead CTAs, all tools functional, schema and breadcrumbs solid. The two cross-cutting blockers are **(a) imagery** — 19 unsynced hero/article images rendering paw placeholders portfolio-wide across these three sites (entirely Visual-lane), and **(b) Fish's thin/over-claiming content** — one metadata over-claim to fix now (COO) plus a lite-species depth-floor nice-to-have. PetFood and Ferret are content/structure-complete; flip-ready the moment Visual clears their image backlog.
