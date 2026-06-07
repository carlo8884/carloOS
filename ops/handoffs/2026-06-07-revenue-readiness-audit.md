---
from: coo
to: csro
status: review
created: 2026-06-07
next_action: "CSRO: approve revenue-priority order; COO executes conversion-readiness fixes; Monetization Bot executes the wiring brief below."
---

# Revenue-Readiness Audit — 5 Polish Sites (Dog / Fish / Ferret / PetFood / Vets)

**Scope:** READ-ONLY audit of commercial-intent surfaces across the 5 polish-list sites. North-star = money. "Revenue-readiness" here = *is each money surface BUILT to rank + convert the moment DNS flips* (DNS/traffic not yet live). Findings are split into **COO-lane** (traffic/conversion-readiness: internal linking, schema, lead-capture placement, freshness) vs **Monetization-lane handoff** (affiliate-routes, `/go` wiring, buy-boxes, funnels, email sequences).

**Trust-bar note:** Every recommendation respects QC §1. Vets.co's "we do not sell insurance / take no enrollment commissions" editorial stance on the `/insurance/*` hub is a deliberate trust posture and is the monetization moat (citation authority → traffic → the *review/funnel* surfaces convert). Nothing below asks any site to fake credentials, accept paid reviews, strip FTC disclosure, or route a commercial CTA around `/go`.

## Portfolio-wide health (verified this pass)

- **Zero affiliate-route leakage.** Grep for raw `amazon|chewy|smartpak|dover|petco|petsmart` links bypassing `/go/` returns **0 hits across all 5 sites**. Every commercial CTA already routes through `/go/[vendor]/[sku]`. This is the single biggest thing that is *already right*.
- **EmailCapture is broadly deployed** (dog 145 / ferret 102 / petfood 100 / fish 93 / vets 81 files) including on every tool/calculator checked. Lead-magnet *placement* is strong; the gap is lead-magnet *differentiation by intent* (generic vs. money-topic-specific), noted per site.
- **AffiliateDisclosure sits ABOVE the buy-box on every monetized page checked** (dog reviews, fish reviews, ferret kibble, petfood brand evals). `QuickPicks` above the disclosure uses `#` jump-anchors, not affiliate CTAs — so it is NOT a disclosure-placement violation.
- **BuyBox component is barely adopted** — only petfood-com uses it (3 brand-eval pages). Dog/fish/ferret/vets use `ReviewCard` + `QuickPicks` for buy-boxes instead. Both route via `/go`; this is a consistency note, not a leak.

---

## Dog.com — strongest-built commercial site

18 `best-X` review pages, `compare/`, 2 calculators, **two** monetized funnels (`pet-insurance` + `dna-testing`). Reviews carry Product/Review/ItemList schema (via `combineSchemas(...allSchemas...)`), inline disclosure, `/go` CTAs, sidebar EmailCapture. Health hub links into commercial: 22 of 41 health pages reference insurance. This is the reference standard for the portfolio.

| Money surface (path) | Buy-intent | Traffic potential | Monetization present? | Gap | Owning lane | Priority |
|---|---|---|---|---|---|---|
| `/reviews/best-dry-dog-food` (+17 best-X) | High | Broad | Yes — `/go`, schema, disclosure, EmailCapture | Already well-built. Refresh "2025" titles → "2025/2026" for freshness | COO | P2 |
| `/reviews/best-pet-insurance` | High | Broad | Yes — `/go` Trupanion/etc. | Highest-LTV review; ensure every health/breed page funnels here (22/41 today) | COO | P1 |
| `/(funnels)/pet-insurance` (+quiz, breeds, carrier) | High | Broad | Yes — funnel + `/go` | Verify quiz → `/go` carrier handoff is wired end-to-end | Monetization | P1 |
| `/(funnels)/dna-testing` (+breeds, test) | High | Med | Yes | Second funnel; confirm `/go` vendor routes resolve (Embark/Wisdom) | Monetization | P2 |
| `/compare/[slug]` | Med-High | Med | EmailCapture present | Confirm compare pages carry `/go` CTAs, not just email | Monetization | P2 |
| `/tools/dog-calorie-calculator`, `/dog-age-calculator` | Med (lead) | Broad | EmailCapture only (`go=0`) | Add contextual `/go` product nudge (food/supplement) post-result | Monetization | P2 |
| `/reviews` (hub) | n/a (router) | — | Links to all best-X incl. insurance | Good. Keep insurance pinned in "Treatments & Products" | COO | P3 |

**Biggest lever:** `best-pet-insurance` + the `pet-insurance` funnel — high AOV-per-lead, broad volume, already built. Pure conversion-density play (more info→funnel links).

---

## Fish.com — deepest tool/review surface; weak info→commercial linking

8 `best-X` reviews (schema + `/go` + disclosure), 7 calculators (all with EmailCapture), `equipment/[slug]` commercial pages (`/go`), 12 `setup/` guides. 65 files reference `/go` — highest in the portfolio. The build quality is high; the **funnel from informational setup guides into the reviews is thin**.

| Money surface (path) | Buy-intent | Traffic potential | Monetization present? | Gap | Owning lane | Priority |
|---|---|---|---|---|---|---|
| `/reviews/best-aquarium-heaters` (+7 best-X) | High | Broad | Yes — `/go`, schema, disclosure | Well-built. Freshness pass on titles | COO | P2 |
| `/equipment/[slug]` | High | Med | Yes — `/go` (2 CTAs) | Confirm every equipment slug maps to a live `/go` SKU | Monetization | P2 |
| `/tools/*` (7 calculators) | Med (lead) | Broad | EmailCapture present | Post-result `/go` nudge (heater calc → best-heaters review/`/go`) | Monetization | P2 |
| `/setup/planted-tank-setup` (+11 guides) | Med | Broad | Only 1 review cross-link | **Info→commercial funnel broken** — setup guides barely link to the matching `best-X` review | COO | **P1** |
| `/equipment` (hub) | Med | — | `/go=0` on hub | Hub is navigational; ensure it links every `best-X` review | COO | P2 |
| `/calculators` + `/tools` (dup hubs) | n/a | — | — | Two index pages for tools — confirm not duplicate/competing; canonicalize | COO | P2 |

**Biggest lever:** wire the 12 `setup/` guides (broad informational traffic) into the 8 `best-X` reviews — fish has the volume surface and the money surface but a weak bridge between them.

---

## Ferret.com — niche but tightly monetized; no `best-X` review hub

No `reviews/` or `compare/` dir. Commercial surfaces are `diet/best-ferret-kibble` (full ReviewCard + `/go` + disclosure), the `(funnels)/ferret-starter-kit` (AffiliateDisclosure + per-item `/go`), and 3 tools (cost-calculator, food-evaluator, readiness-quiz). `/go` referenced across diet/care/health (25 files). For a niche site this is well-monetized; the gap is *surface count*, not wiring quality.

| Money surface (path) | Buy-intent | Traffic potential | Monetization present? | Gap | Owning lane | Priority |
|---|---|---|---|---|---|---|
| `/(funnels)/ferret-starter-kit` | High | Niche | Yes — per-item `/go`, disclosure, EmailCapture | Best ferret money page. Ensure all care/setup pages funnel here | COO | P1 |
| `/diet/best-ferret-kibble` | High | Niche | Yes — ReviewCard `/go` (Wysong/Marshall) | Well-built. Cross-link from all diet/* pages | COO | P2 |
| `/tools/cost-calculator` (+food-evaluator, readiness-quiz) | Med (lead) | Niche | EmailCapture (`source=tools-cost-calculator`) | Cost calc → starter-kit funnel CTA after result | Monetization | P2 |
| `/care/cage-setup`, `/care/*` | Med | Niche | `/go` present | Confirm cage-setup `/go` SKUs (enclosure = high AOV) are live | Monetization | P2 |
| (none) `best-X` review hub | High | Niche | **Absent** | No `/reviews` cluster. Niche AOV is real (cages, supplements) — but §8a says wire existing first | Monetization | P3 |

**Biggest lever:** the `ferret-starter-kit` funnel — high-AOV bundle (cage + accessories), already built and disclosed. Drive every care/setup page into it.

---

## PetFood.com — broken info→commercial funnel; no review hub

10 `compare/` pages, brand evals under `brands/` (BuyBox + disclosure + `/go`), supplement pages with `/go`, 2 tools. **No `reviews/` dir.** Money lives in `compare/` + `brands/`. The critical defect: the large informational surface (`conditions/`, `ingredients/`, `nutrition/`) does **not** link into the commercial `compare/`/`brands/` pages.

| Money surface (path) | Buy-intent | Traffic potential | Monetization present? | Gap | Owning lane | Priority |
|---|---|---|---|---|---|---|
| `/brands/hills-vs-royal-canin` (+evals) | High | Broad | Yes — BuyBox + `/go` + disclosure | Best petfood money page. Few inbound info links | COO | P1 |
| `/compare/wet-vs-dry-food` (+9) | Med-High | Broad | Mixed — only 2 of 10 compare pages reference `/go` | **8 of 10 compare pages have no `/go` CTA** — unmonetized commercial intent | Monetization | **P1** |
| `/conditions/*` (info) | Med | Broad | **0 links to /compare or /brands** | Info→commercial funnel is dead. Add condition→diet→brand links | COO | **P1** |
| `/compare` (hub) | Med | — | `/brands+/go = 0` on hub | Hub doesn't surface the monetized brand evals | COO | P2 |
| `/tools/portion-calculator`, `/food-cost-calculator` | Med (lead) | Broad | EmailCapture only (`go=0`) | Post-result `/go` to a brand eval or compare | Monetization | P2 |
| `/supplements/*` | High | Med | `/go` present (4 pages) | Good. Cross-link from `conditions/` (joint→glucosamine) | COO | P2 |

**Biggest lever:** monetize the 8 unmonetized `compare/` pages AND build the `conditions→compare→brands` internal-link funnel — petfood has broad search volume and a money surface, but the two are disconnected.

---

## Vets.co — highest LTV-per-lead; schema gap on the money page

The pet-insurance vertical is the highest revenue-per-lead surface in the portfolio ($15–50+/qualified lead). Built: `/reviews/best-pet-insurance` (`/go` Trupanion/Healthy Paws/Embrace + disclosure + EmailCapture), `(funnels)/pet-insurance` (+states, breeds, breed×state), `/insurance/*` 9-page editorial hub, `insurance-reimbursement-estimator` tool. Two issues: a **schema gap** on the money page and the **insurance hub root not linking to the monetized review/funnel**.

| Money surface (path) | Buy-intent | Traffic potential | Monetization present? | Gap | Owning lane | Priority |
|---|---|---|---|---|---|---|
| `/reviews/best-pet-insurance` | High | Broad | Yes — `/go`, disclosure, EmailCapture | **No ItemList/Product/Review schema** (only Article+Breadcrumb) — dog/fish reviews have it; this is the highest-LTV page and weakest on GEO | COO | **P0** |
| `/(funnels)/pet-insurance` (+states, breeds, breed×state) | High | Broad | Yes — funnel + `/go` | Programmatic breed×state funnel is the LTV engine; confirm `/go` carrier routing end-to-end | Monetization | **P0** |
| `/insurance/` (hub root) | Med | Broad | EmailCapture; **no link to review or funnel** | 8 spoke pages link to `/reviews/best-pet-insurance`; the hub root (top GEO surface) does **not**. Highest-traffic insurance entry leaks out | COO | **P0** |
| `/insurance/{how-it-works, when-to-enroll, ...}` (8 spokes) | Med | Broad | Spokes carry `/go` quote CTAs + review link | Good. Keep "editorial, we don't sell" framing (trust moat) | COO | P2 |
| `/tools/insurance-reimbursement-estimator` | High (lead) | Broad | EmailCapture (`source=insurance-estimator`) | High-intent tool — add a funnel/review CTA after the estimate | Monetization | P1 |
| `/medications`, `/diagnostics`, `/specialists` | Low-Med | Med | Editorial (no commercial) | Correct — clinical authority pages stay editorial (moat) | COO | P3 |

**Biggest lever:** vets-co pet-insurance is *the* portfolio revenue lever (LTV-per-lead dwarfs affiliate clicks elsewhere). It is built but under-optimized: fix the schema gap (P0 GEO), wire the hub root into the funnel (P0 conversion), and the breed×state programmatic funnel becomes a citation-fed lead machine the moment DNS flips.

---

## Top 10 portfolio revenue levers (ranked: intent × traffic × AOV/LTV)

1. **[COO] Vets.co `/reviews/best-pet-insurance` — add ItemList/Product/Review schema.** Highest LTV-per-lead page in the portfolio is the weakest on GEO/AI-citation. P0.
2. **[COO] Vets.co `/insurance/` hub root → link to the monetized review + funnel.** The top insurance entry surface currently dead-ends into editorial spokes; 8 spokes already link out, the hub doesn't. P0.
3. **[Monetization] Vets.co `(funnels)/pet-insurance` breed×state — verify `/go` carrier routing end-to-end.** The programmatic LTV engine; a broken `/go` hop = total lead loss. P0.
4. **[Monetization] PetFood `/compare/*` — monetize the 8 of 10 compare pages with no `/go` CTA.** Broad-volume commercial intent currently unmonetized. P1.
5. **[COO] PetFood `conditions→compare→brands` internal-link funnel.** `conditions/*` has 0 links to commercial surfaces — broad info traffic never reaches the money pages. P1.
6. **[COO] Fish.com `setup/*` (12 guides) → `reviews/best-X` cross-links.** Deep informational surface barely bridges to 8 well-built review money pages. P1.
7. **[COO] Dog.com — funnel more health/breed pages into `best-pet-insurance` + `pet-insurance` funnel.** 22/41 health pages link insurance today; push toward full coverage. High-AOV, already built. P1.
8. **[COO] Ferret.com — drive all care/setup/diet pages into `(funnels)/ferret-starter-kit`.** High-AOV niche bundle, fully built; needs inbound link density. P1.
9. **[Monetization] Tool→commercial nudges across all 5 sites.** Every calculator has EmailCapture but `go=0` (dog/petfood/fish tools): add a post-result `/go` product CTA where intent is high. P2.
10. **[COO] Freshness pass on all `best-X 2025` review titles → 2025/2026.** Cheap ranking + AI-freshness signal across dog (18) + fish (8) review pages. P2.

---

## COO→Monetization brief

Prioritized wiring worklist for Monetization Bot, ordered by revenue impact. All within Monetization lane (`affiliate-routes.ts`, `/go` routes, buy-box affiliate wiring, funnel CTAs, email sequences). COO will NOT touch these.

1. **P0 — Vets.co pet-insurance funnel `/go` integrity.** Trace `(funnels)/pet-insurance` → quiz/breed/state → carrier `/go/[vendor]/[sku]` for Trupanion/Healthy Paws/Embrace. Confirm every carrier route resolves and carries the source param. This is the portfolio's top LTV path — any dead hop is pure lost revenue.
2. **P1 — PetFood `/compare/*` monetization sweep.** 8 of 10 compare pages have no `/go` CTA (only `freeze-dried-and-dehydrated` and `fresh-vs-kibble` do). Add a disclosed buy-box / `/go` CTA to: `wet-vs-dry-food`, `raw-vs-cooked-diets`, `grain-free-vs-grain-inclusive`, `prescription-vs-otc-diets`, `kibble-vs-canned-for-cats`, `breed-specific-diets`, `home-cooked-vs-commercial`. Disclosure above each.
3. **P1 — Vets.co `insurance-reimbursement-estimator` post-result CTA.** Add a funnel/review CTA after the estimate output (highest-intent moment on the site). Lead capture exists; commercial handoff doesn't.
4. **P2 — Tool→commercial `/go` nudges (cross-site).** Add a contextual `/go` CTA after the result on: dog `dog-calorie-calculator` (food/supplement), petfood `portion-calculator`/`food-cost-calculator` (brand eval), fish `heater-wattage-calculator`/`co2-calculator` (matching `best-X` `/go`), ferret `cost-calculator` (starter-kit). All currently `go=0`.
5. **P2 — Dog `dna-testing` + `compare/[slug]` `/go` verification.** Confirm dna-testing vendor routes (Embark/Wisdom) and that compare pages carry `/go` CTAs, not just EmailCapture.
6. **P2 — Fish `equipment/[slug]` SKU coverage.** Confirm every equipment slug maps to a live `/go` SKU.
7. **P3 — Ferret high-AOV SKU check.** Verify cage-setup / enclosure `/go` SKUs resolve (highest-AOV ferret items).
8. **Email sequences (Monetization lane):** EmailCapture placement is strong portfolio-wide; the captures exist but sequences are inactive (per CLAUDE.md §13). Wire the insurance-estimator and starter-kit captures to their respective sequences when sequences activate.

---

## COO conversion-readiness worklist

COO-lane fixes (internal linking to money pages, schema, lead-capture placement, freshness), ordered by impact. All within COO lane (`page.tsx` content, internal links, schema, RelatedLinks arrays). No affiliate-route or `/go` edits.

1. **P0 — Vets.co `/reviews/best-pet-insurance`: add ItemList + Product/Review schema** to match dog/fish review pages. Highest-LTV page, weakest GEO. Single highest-ROI COO action.
2. **P0 — Vets.co `/insurance/page.tsx` (hub root): add prominent links** to `/reviews/best-pet-insurance` and `(funnels)/pet-insurance`, preserving the "editorial, we don't sell" framing. The hub is the top entry surface and currently dead-ends.
3. **P1 — PetFood `conditions→compare→brands` linking.** Add commercial cross-links from `conditions/*` (and `ingredients/*`, `nutrition/*`) into the matching `/compare` and `/brands` pages. Currently 0 links from `conditions/*` to commercial surfaces.
4. **P1 — Fish `setup/*` → `reviews/best-X` cross-links.** Each of the 12 setup guides should link to its matching review (planted-tank → best-planted-tank-fertilizers/lighting/CO2; cycling → best-water-test-kits; etc.).
5. **P1 — Dog: extend health/breed → insurance funnel coverage** from 22/41 toward full coverage; add `best-pet-insurance` / `pet-insurance` funnel RelatedLinks to remaining health + breed pages.
6. **P1 — Ferret: link all care/setup/diet pages into `ferret-starter-kit` funnel** and `diet/best-ferret-kibble`. Boost inbound density on the two money surfaces.
7. **P2 — PetFood `/compare` + `/brands` hub pages: surface the monetized brand evals.** The compare hub has 0 links to `/brands`/`/go`; the brand evals are the money pages and deserve hub prominence.
8. **P2 — Fish: resolve the `/calculators` vs `/tools` dual-hub.** Two tool index pages — confirm not duplicate/competing for the same query; canonicalize to one.
9. **P2 — Lead-magnet differentiation by intent.** EmailCapture is everywhere but generic; on money pages use a money-topic-specific magnet (insurance checklist, food-comparison sheet, starter-kit list) rather than a generic newsletter prompt. Placement is done; messaging isn't.
10. **P2 — Freshness pass:** retitle `best-X 2025` review headlines/metadata → current-year on dog (18) + fish (8) review pages. Cheap ranking + AI-freshness signal.

---

## Bottom line

**Closest to revenue:** Dog.com — it is the reference build (18 schema-rich reviews, two funnels, disclosed `/go` throughout, decent info→commercial linking) and needs only conversion-density and freshness polish. **Biggest single lever:** Vets.co pet-insurance — highest LTV-per-lead in the portfolio, already built end-to-end, but bottlenecked by a P0 schema gap on the money page and a hub root that doesn't link into its own funnel; fixing both turns the breed×state programmatic funnel into a citation-fed lead machine the moment DNS flips.
