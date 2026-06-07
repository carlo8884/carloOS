---
from: csro
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo/CSRO: approve the per-site 'one PR this week'; COO ships content/linking items, Monetization ships /go-wiring items."
---

# Page-Level Revenue-Readiness Audit — 5 Launch Sites

Scope: Vets.co, Ferret.com, PetFood.com, Dog.com, Fish.com (audited on `origin/main`, read-only). This is a **money-path** audit, not a generic monetization pass. For each site: the 5 pages most likely to earn the first dollar, the exact revenue action on each, whether the CTA sits at the decision moment, whether tracking is genuinely wired (routes through `/go/[vendor]/[sku]?s=<source>` and the vendor exists in that app's `affiliate-routes.ts`), and whether disclosure is compliant-but-tasteful.

## How money actually flows in this repo (shared mechanics)

- **Canonical money path:** a commercial CTA must point at `/go/<vendor>/<sku>?s=<source>`. The `/go` route looks the vendor up in **that app's** `src/data/affiliate-routes.ts` and 302s to a template with the tracking ID swapped in. A vendor NOT in `affiliate-routes.ts` returns **404** (`apps/<site>/src/app/go/[vendor]/[sku]/route.ts`).
- **`ReviewCard.ctaHref` is a raw href** — it does NOT auto-wrap in `/go`. The caller must pass a `/go/...` string. So "tracking wired" = the literal `ctaHref` string starts with `/go/`.
- **Tracking IDs are env-gated** (`AFF_<VENDOR>_TAG`). In the current deferred-launch state these are unset, so links redirect but carry no attribution tag yet. That's a launch-day env task, not a code gap — every page below is scored on *code wiring*, which is what we control now.
- **`EmailCapture` renders nothing** unless `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` (`packages/ui/src/components/EmailCapture.tsx:51`). Every "lead capture" below is wired in code with a `source`, but dormant until that env flag flips. Also a launch-day toggle.
- **`AffiliateDisclosure variant="inline"`** is a compact above-content strip (not a clunky top banner) — tasteful by default across all 5 sites.

The recurring portfolio-wide leak: **high-intent tools/calculators capture email but have NO `/go/` buy CTA at the decision moment.** A user finishes a calc with explicit purchase intent ("I need a 150W heater", "Trupanion is my match", "this kibble scores 'avoid'") and there is no affiliate button right there — only an internal link or a dormant email box.

---

## Vets.co

Money engine = pet insurance (highest LTV-per-visitor in the portfolio: a single insurance lead is worth more than dozens of Amazon clicks). The review + hub are wired; the tool and the breed funnel leak.

| # | Page | Revenue action | CTA at decision moment | Tracking wired | Disclosure ok |
|---|---|---|---|---|---|
| 1 | `reviews/best-pet-insurance/page.tsx` | Trupanion/Healthy Paws/Embrace "Get a Quote →" → `/go/trupanion/home?s=reviews-best-pet-insurance` (etc.) | Partial — disclosure+intro above fold, but the 3 quote buttons sit inside ReviewCards below the fold | YES (`ctaHref="/go/trupanion/home?s=..."`, L153/170/187) | YES — inline, L123 |
| 2 | `(funnels)/pet-insurance/page.tsx` | 5-carrier table, each "Get quote →" → `/go/<vendor>/home?s=vets-co-insurance-hub-<slug>` | NO — top hero CTA goes to `dog.com/pet-insurance/quiz` (offsite); carrier quote buttons are mid-page | YES (L123) | YES — inline, L55 |
| 3 | `(funnels)/pet-insurance/breeds/[breed]/page.tsx` | Breed-targeted top pick → should go to `/go/<carrier>/home` | **NO + BROKEN** — primary CTA points to `/pet-insurance/${recommended.slug}` (L114), a route that **does not exist** (no `[slug]`/`[carrier]` under the vets funnel). Highest-intent CTA on the page dead-ends | **NO** — internal link to a missing page, never reaches `/go` | YES — inline, L98 |
| 4 | `tools/insurance-reimbursement-estimator/page.tsx` | After computing net out-of-pocket, send to a carrier quote | **NO** — tool ends in `EmailCapture` (source=`insurance-estimator`, L157) with **zero `/go/` CTA**. Peak-intent moment wasted | NO affiliate path at all (email only, dormant) | n/a (no monetized surface) — but that's the problem |
| 5 | `telehealth/page.tsx` | Vetster "Book a Consultation →" → `/go/vetster/telehealth` | Partial — ReviewCard buttons mid-page | **PARTIAL** — Vetster OK (`/go/vetster/telehealth`, L40); but second card uses `/go/askvet/telehealth` and **`askvet` is not in `vets-co/src/data/affiliate-routes.ts`** → 404 | YES — inline, L34 |

**First realistic revenue source:** `reviews/best-pet-insurance` → Trupanion/Healthy Paws insurance lead via `/go/trupanion/home`. Insurance pays the highest per-lead bounty in the portfolio, and this page is fully wired. First dollar lands here once traffic + the carrier affiliate accounts are live.

**One PR to ship this week (lane-tagged COO + Monetization):** Fix the breed-funnel dead-end and wire the estimator. (a) COO: in `(funnels)/pet-insurance/breeds/[breed]/page.tsx` repoint the "See {carrier} details →" CTA from the non-existent `/pet-insurance/${slug}` to a real destination — either `/go/${recommended.vendor}/home?s=vets-insurance-breed-${breed}` (Monetization-wire) or the existing `/reviews/best-pet-insurance#${slug}` anchor. (b) Monetization: add a "Get a [topPick] quote →" `/go/<vendor>/home?s=insurance-estimator` button on the estimator result, and register `askvet` in `affiliate-routes.ts` (or swap telehealth card #2 to `vetster`/`pawp`). This converts the two highest-intent insurance surfaces that currently leak 100% of clicks.

---

## Ferret.com

The cleanest-wired site in the cohort. The starter-kit funnel and the kibble review are model implementations; only the two tools leak.

| # | Page | Revenue action | CTA at decision moment | Tracking wired | Disclosure ok |
|---|---|---|---|---|---|
| 1 | `(funnels)/ferret-starter-kit/page.tsx` | Per-item "Check Price →" → `/go/${vendor}/${sku}?s=starter-kit-${cat}` across cage/food/bedding categories | YES — buy buttons are the page's spine, repeated per item | YES (L131); vendors `marshall`/`wysong`/`carniwhole`/`chewy`/`amazon` all in `affiliate-routes.ts` | YES — inline, L69 |
| 2 | `diet/best-ferret-kibble/page.tsx` | "Check Price →" on Wysong/Marshall/CarniWhole → `/go/wysong/epigen-90?s=diet-best-ferret-kibble` (etc.) | Partial — ReviewCard buttons below intro, disclosure above | YES (L182/207/231) | YES — inline, L153 |
| 3 | `diet/transitioning-foods/page.tsx` | Topper buy-box → `/go/chewy-brand/meat+based+food+topper...?s=diet-transitioning-foods` | Partial — mid-article ReviewCard | YES (L230) | YES — inline, L203 |
| 4 | `tools/food-evaluator/page.tsx` | After kibble verdict ("appropriate/marginal/avoid"), send to a buy CTA for a qualifying food | **NO** — ends in `EmailCapture` (L146) + internal link to `/diet/best-ferret-kibble` (L159); no `/go/` at the verdict | NO affiliate path (email only, dormant) | n/a — that's the gap |
| 5 | `tools/cost-calculator/page.tsx` | After lifetime-cost estimate, surface starter-kit + insurance CTAs | **NO** — ends in `EmailCapture` (L134); no `/go/` and no starter-kit/insurance cross-sell | NO affiliate path (email only) | n/a — that's the gap |

**First realistic revenue source:** `(funnels)/ferret-starter-kit` → Amazon/Chewy/Marshall click via `/go/...`. A new ferret owner buying a $200–400 first-year kit is the highest-converting intent on the site, and every item is wired. First dollar = a `boltonpets20-20` Amazon tag firing off a starter-kit "Check Price".

**One PR to ship this week (lane-tagged Monetization):** Add a results-CTA block to `tools/food-evaluator` and `tools/cost-calculator`. On the food-evaluator verdict, render "Shop a qualifying ferret food →" → `/go/chewy-brand/<query>?s=food-evaluator` (and a Wysong/Marshall option). On the cost-calculator result, add the existing starter-kit pattern: "Build your starter kit →" (internal to the funnel) + "Compare exotic-pet insurance →" (`vets.co/pet-insurance`). These are the only two unmonetized high-intent surfaces on an otherwise pristine site.

---

## PetFood.com

Brand evaluations and supplements are wired (Chewy/Amazon `/go`). The big gap: **7 of 9 `compare/` pages have NO buy path at all** — they're pure editorial, and comparison pages are exactly where purchase decisions happen.

| # | Page | Revenue action | CTA at decision moment | Tracking wired | Disclosure ok |
|---|---|---|---|---|---|
| 1 | `brands/hills-vs-royal-canin/page.tsx` | BuyBox: Hill's + Royal Canin OTC lines → `/go/chewy-brand/...` & `/go/amazon-brand/...?s=hills-vs-rc` | Partial — BuyBox is mid-article, disclosure directly above it (L173) | YES (L182–190) | YES — inline directly above BuyBox, L173 |
| 2 | `compare/fresh-vs-kibble/page.tsx` | Farmer's Dog / Ollie fresh-food → `/go/farmers-dog/...` & `/go/ollie/...?s=compare-fresh-vs-kibble` | Partial — ReviewCards mid-page | YES (L150/173) | YES — inline, L128 |
| 3 | `brands/blue-buffalo-evaluation/page.tsx` | "Search on Chewy/Amazon" → `/go/chewy-brand/Blue%20Buffalo?s=eval-blue-buffalo` | Partial — buy block below evaluation | YES (L170/171) | YES — inline |
| 4 | `supplements/glucosamine-and-joint-support/page.tsx` | Joint-supplement buy CTA → `/go/...` | Partial — mid-article | YES (one of 4 wired supplements pages) | YES — inline |
| 5 | `compare/prescription-vs-otc-diets/page.tsx` | High-intent Rx-vs-OTC decision → OTC pick to `/go`, Rx to vet (editorial) | **NO** — `EmailCapture` only (L100), **no `/go/`**. Same gap on `raw-vs-cooked`, `grain-free-vs-grain-inclusive`, `wet-vs-dry-food`, `home-cooked-vs-commercial`, `kibble-vs-canned-for-cats`, `breed-specific-diets` | **NO** — 7 of 9 compare pages have zero affiliate CTA | Disclosure present on some, but no monetized surface to disclose |

**First realistic revenue source:** `brands/hills-vs-royal-canin` (or `compare/fresh-vs-kibble`) → Chewy/Amazon click via `/go/chewy-brand/...`. High commercial-intent brand comparison, fully wired with a BuyBox. First dollar = a Chewy/Amazon commission on a bag of Science Diet or a Farmer's Dog fresh-food trial.

**One PR to ship this week (lane-tagged Monetization):** Add a "Where to buy" BuyBox (reuse the `hills-vs-royal-canin` `BuyBox` pattern, disclosure-above) to the 7 unmonetized `compare/` pages — at minimum the OTC winner of each comparison → `/go/chewy-brand/<brand>?s=compare-<slug>` (route Rx/prescription picks to a vet/pharmacy per QC §1.5.b, not a buy-box). These are the site's highest-intent pages and currently earn $0 by construction.

---

## Dog.com

Flagship, most complete money architecture in the portfolio — quiz-driven insurance funnel with `/go` at the result, fully-wired reviews, correct editorial routing for medicated products. Few gaps.

| # | Page | Revenue action | CTA at decision moment | Tracking wired | Disclosure ok |
|---|---|---|---|---|---|
| 1 | `(funnels)/pet-insurance/quiz/quiz-client.tsx` | Quiz match → "Get a {carrier} quote →" → `/go/${result.top.vendor}/home?s=pet-insurance-quiz-result` | **YES** — `/go` CTA is the result-screen primary button (L249), right at the decision moment. Best-wired surface in the cohort | YES (L249) | YES (hub disclosure) |
| 2 | `(funnels)/pet-insurance/page.tsx` | 9-carrier hub table + per-carrier picks → `/go/<vendor>/home?s=pet-insurance-hub-*` | Partial — table mid-page; hero pushes the quiz | YES (L163/203/220/237/254) | YES — inline, L59 |
| 3 | `reviews/best-pet-insurance/page.tsx` | Trupanion/Healthy Paws/Embrace/Figo → `/go/<vendor>/reviews-best-pet-insurance?s=...` | Partial — ReviewCard buttons below fold | YES (L118/145/168/191) | YES — inline |
| 4 | `reviews/best-dog-gps-tracker/page.tsx` | Fi / Whistle / Tractive → `/go/amazon-brand/fi+series+3...?s=reviews-best-dog-gps-tracker` (high-AOV electronics) | Partial — ReviewCard buttons | YES (L42/53/64) | YES — inline |
| 5 | `(funnels)/dna-testing/page.tsx` | Embark / Wisdom Panel / Basepaws → `/go/<vendor>/home?s=dna-testing-hub-*` (high-AOV, ~$100–200 kits) | Partial — picks mid-page | YES (L139/267/273/279) | YES — inline, L46 |

Note: `reviews/best-heartworm-prevention` and `best-flea-tick-prevention` correctly route `ctaHref="/find-a-vet"` (editorial, NOT monetized) per QC §1.5.b — this is correct, not a leak. `reviews/[slug]` and `compare/[slug]` are `notFound()` stubs (no programmatic content — not a leak).

**First realistic revenue source:** `(funnels)/pet-insurance/quiz` → insurance lead via `/go/<vendor>/home?s=pet-insurance-quiz-result`. Highest-LTV path in the portfolio, with the single best-placed CTA (right on the quiz result). First dollar most likely lands here.

**One PR to ship this week (lane-tagged Monetization):** Add a lightweight "sticky" or repeated mid-content CTA on the high-traffic reviews (`best-dog-gps-tracker`, `best-dog-crates`, `best-dry-dog-food`) so the buy button isn't only below the fold inside the last ReviewCard — surface the winner's `/go` button once near the top intro as well. Dog.com's wiring is done; this is a placement optimization on already-tracked links, the cheapest revenue lift on the site.

---

## Fish.com

All 7 product reviews are cleanly wired to `/go/amazon-brand/...`. The gap is identical to the others: the **calculators don't sell** — and Fish has the most literal product-intent calculators in the portfolio (heater wattage → buy a heater; stocking → buy a filter).

| # | Page | Revenue action | CTA at decision moment | Tracking wired | Disclosure ok |
|---|---|---|---|---|---|
| 1 | `reviews/best-aquarium-filters/page.tsx` | AquaClear/etc. → `/go/amazon-brand/aquaclear+70+filter?s=reviews-best-aquarium-filters` | Partial — ReviewCard buttons below intro | YES (L93) | YES — inline, L69 |
| 2 | `reviews/best-canister-filters/page.tsx` | Fluval 307 → `/go/amazon-brand/fluval+307+canister+filter?s=...` (high-AOV, $100–250) | Partial — ReviewCard | YES (L42) | YES — inline, L34 |
| 3 | `reviews/best-aquarium-heaters/page.tsx` | Eheim Jager → `/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters` | Partial — ReviewCard | YES (L104) | YES — inline, L79 |
| 4 | `reviews/best-water-test-kits/page.tsx` | API Master Kit → `/go/amazon-brand/api+freshwater+master+test+kit?s=...` (high-repeat-purchase consumable) | Partial — ReviewCard | YES (L41) | YES — inline, L33 |
| 5 | `tools/heater-wattage-calculator/page.tsx` | Computes exact wattage → should sell the matching heater | **NO** — ends in RelatedLinks + `EmailCapture`; **no `/go/` CTA**. Same for `tools/stocking-calculator` (links to filter reviews internally, no buy) and the other 5 tools | **NO** affiliate path on any tool | n/a — that's the gap |

**First realistic revenue source:** `reviews/best-aquarium-filters` (or `best-canister-filters` for higher AOV) → Amazon click via `/go/amazon-brand/...`. Aquarium hardware is well-defined, high-AOV, and these reviews are fully wired. First dollar = an Amazon commission on a canister filter or heater.

**One PR to ship this week (lane-tagged Monetization + COO):** Wire the calculators to the reviews they obviously feed. On `tools/heater-wattage-calculator`, after the wattage result render "Shop heaters at this wattage →" → `/go/amazon-brand/eheim+jager+<W>w?s=heater-wattage-calculator` (or at minimum a prominent button to `/reviews/best-aquarium-heaters` — COO internal-link). Same on `stocking-calculator` → `best-aquarium-filters`. This is the single most underexploited intent surface on the site: users arrive with an exact spec need and leave with no buy path.

---

## Portfolio "first-dollar order"

Ranked by which single page/path most plausibly earns the literal first dollar once traffic + affiliate accounts are live (high-LTV insurance and high-AOV hardware first; pages that are already fully code-wired ahead of pages that aren't):

1. **Dog.com — `(funnels)/pet-insurance/quiz`** → insurance lead (`/go/<vendor>/home?s=pet-insurance-quiz-result`). Highest LTV-per-lead + best-placed CTA in the portfolio (button on the quiz result).
2. **Vets.co — `reviews/best-pet-insurance`** → Trupanion/Healthy Paws lead. Same high-LTV vertical, fully wired, clinical-authority traffic converts well.
3. **Ferret.com — `(funnels)/ferret-starter-kit`** → Amazon/Chewy/Marshall click. New-owner $200–400 basket, every item wired, low competition.
4. **PetFood.com — `brands/hills-vs-royal-canin` / `compare/fresh-vs-kibble`** → Chewy/Amazon + Farmer's Dog. High commercial intent, BuyBox in place.
5. **Fish.com — `reviews/best-canister-filters` / `best-aquarium-heaters`** → Amazon, high-AOV hardware, all 7 reviews wired.

## 5 highest-ROI PRs across the cohort (in ship order)

1. **[COO + Monetization] Vets.co — fix the broken breed-funnel CTA + wire the reimbursement estimator.** The breed funnel's highest-intent CTA points to a non-existent `/pet-insurance/${slug}` route (100% leak); the estimator ends with no quote button. Both feed the portfolio's #2 first-dollar path. Also register/replace the `askvet` telehealth vendor (currently 404s).
2. **[Monetization] PetFood.com — add a "Where to buy" BuyBox to the 7 unmonetized `compare/` pages.** Reuse the `hills-vs-royal-canin` BuyBox pattern; route OTC winners to `/go/chewy-brand/...`, Rx picks to a vet. Turns 7 highest-intent pages from $0 to monetized.
3. **[Monetization + COO] Fish.com — wire heater-wattage + stocking calculators to their matching reviews/products.** Literal spec-to-product intent currently dead-ends. Highest underexploited surface on the site.
4. **[Monetization] Ferret.com — add results-CTAs to `food-evaluator` and `cost-calculator`.** The only two unmonetized surfaces on an otherwise pristine site; both are peak-intent.
5. **[Monetization] Dog.com — surface the winner's `/go` buy button near the top of the high-traffic reviews** (`best-dog-gps-tracker`, `best-dog-crates`, `best-dry-dog-food`), not only below the fold in the last ReviewCard. Cheapest lift — placement only, links already tracked.

**Cross-cutting theme:** every site's `reviews/`, `brands/`, and dedicated `(funnels)/` are well-wired with `/go/[vendor]/[sku]?s=<source>` and tasteful inline disclosures. The systematic leak is **tools/calculators and editorial `compare/` pages that capture purchase intent but provide no buy path.** Closing that single gap class is the highest-ROI revenue work in the cohort and spans 4 of the 5 sites. (Reminder: `AFF_*_TAG` env vars and `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED` are still unset — both are launch-day env toggles, not code gaps, and gate when these wired paths actually start earning.)
