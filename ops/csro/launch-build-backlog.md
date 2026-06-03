# CarloOS Launch-Build Backlog (CSRO execution queue)

**Owner:** CSRO/COO. **Created:** 2026-06-03.
**Purpose:** the standing, ranked work queue the fleet pulls from so it never idles. Carlo's
directive: *the only reason to stop is a fully finished product.* This is the concrete companion to
the strategic `opportunity-queue.md` — that file holds the framework and reserve; this file holds the
**next executable build tasks**, top-ranked first.

**Governing rules (carried from opportunity-queue.md):**
- Capacity target is large (grows toward 1000) but **every item is real** — no filler. If an item
  doesn't raise asset value, traffic, revenue, trust, or launch quality, it doesn't belong.
- Each item: **site · lane · type · value thesis · done-when**.
- Rank by launch impact × revenue/asset value × trust × execution speed.
- COO executes COO-lane items now; Visual/Monetization/IR items are queued for those actors.
- Every shipped item: trust-guard + metadata-policy + link-check green, narrow PR, merge-on-green,
  then check the next box.
- Cohort order (D16 launch wave): **Ferret → PetFood → Vets → Fish → Dog** (Dog last, most polish).

---

## STATUS KEY
`[ ]` queued · `[~]` in progress · `[x]` shipped · `[blocked:LANE]` waiting on another actor

---

## TRACK A — Launch-cohort authority assets (COO lane, executing now)

Each launch site should carry, at minimum: a complete cluster graph (done), a glossary
(DefinedTermSet GEO magnet), 2+ working tools/calculators, and an authority hub per major topic.
Items below are the gaps found by inspection, ranked.

### Ferret.com (launch #1)
Already deep: `/ownership` carries cost-of-owning, ferret-legality-by-state, adoption-vs-buying, and a
ferret-glossary; `/health` has 21 spokes; `/tools` had food-evaluator. Net-new gap was an interactive tool.
- [x] Lifetime Cost Calculator (`/tools/cost-calculator`) — setup + yearly + lifetime, scaled by ferret count; illness-fund prompt; cross-links the existing `/ownership/cost-of-owning-a-ferret` article. **PR #446.**
- [ ] "Is a ferret right for me?" readiness checklist tool (`/tools/readiness-quiz`) — scored lifestyle/legality/time/cost fit. *High-intent top-of-funnel; the one remaining tool gap.*
- [~] Verify `/care` covers ferret-proofing (blockage-prevention); only build if a real gap. *Inspect before building.*
- Note: legality + adoption-vs-buy already exist as editorial pages — NOT gaps (corrected after inspection).

### PetFood.com (launch #2)
- [x] Glossary / label-term DefinedTermSet (`/glossary`) — ~31 AAFCO / label / ingredient / nutrient / diet-type terms; DefinedTermSet JSON-LD; linked from `/nutrition`; cross-links the food-cost calculator + ingredients. **PR #447.**
- [ ] Ingredient-quality explainer hub completeness pass — verify the brand/ingredient cluster has a hub→spoke graph. *Inspect.*
- [ ] Dog vs cat food fundamentals comparison hub — only if a genuine gap. *Inspect.*

### Vets.co (launch #3)
- [ ] Symptom-to-specialty router reference (`/find-a-vet` already exists on dog; vets.co equivalent) — when to see which DACVIM/DACVS specialty. *Verify gap first.*
- [ ] Pet-insurance terminology glossary (DefinedTermSet) to pair with the insurance-reimbursement estimator. *GEO magnet + tool synergy.*

### Fish.com (launch #4)
- [ ] Aquarium glossary DefinedTermSet (`/glossary`) — cycling, nitrogen cycle, GH/KH, dKH, brackish, etc. *Pairs with the 6 calculators.*
- [ ] Stocking-by-species reference completeness pass.

### Dog.com (launch #5, last + most polish)
- [ ] Dog-owner glossary / vet-term DefinedTermSet — pairs with breed + health clusters.
- [ ] Verify breed × health programmatic matrix has no thin outputs before launch.

---

## TRACK B — Horses.com Racing Intelligence (Tier A, D12) — COMPLETE
- [x] `/racing` hub + 6 discipline/reference spokes (D8, #433)
- [x] Triple Crown hub (#443)
- [x] Breeders' Cup hub + Racing Glossary DefinedTermSet (#444)
- [x] Jump Racing + The People of Racing (#445)
- [x] Hub copy refreshed to full 11-article scope (#445)
- Cluster is whole at 11 articles; further racing pages would be marginal. **Tier B/C data product: HOLD per D12.**

---

## TRACK C — Cross-cohort quality invariants (COO lane; re-run on every new page)
- [x] Tools/calculators compute QA (12 verified, 0 defects)
- [x] Indexing hygiene (robots + sitemap + AI crawlers) clean
- [x] Hub→spoke completeness (#440) + data-aware orphan sweep (zero orphans)
- [ ] Re-run trust-guard / metadata-policy / link-check before each PR (standing)
- [ ] After each new tool: add to its site's tools-hub ItemList + sitemap (standing)

---

## TRACK D — Blocked / other-lane (queued, not COO-executable)
- [blocked:VISUAL] Premium heroes / ogImage / first-screen on the 5 launch sites (N1–N3; D5 standard; D3 stock-now $0).
- [blocked:MONETIZATION] Disclosure + clinical buy-box sweep; Ferret comfort-supply with D14 microcopy when a buy-box is added (N4–N6).
- [blocked:IR] Per-launch-site Tier-1 trust/valuation sign-off.
- [blocked:CARLO] DNS cutover (deferred until launch-imminent); any spend/vendor/data-access decision; D12 Tier-B data product.

---

## Reporting
- COO works top-down through Track A, shipping narrow PRs merge-on-green, checking boxes here.
- Reserve deepens as inspection surfaces real gaps (never padded).
- Carlo sees only the top of Track A + anything in Track D needing his decision.
