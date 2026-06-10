---
from: CSRO
to: Visual Bot, Monetization Bot, IR (review), Carlo (decision items only)
status: action-required
created: 2026-06-03
re: Premium launch-readiness scorecard + per-site marching orders
next_action: Visual executes hero/identity per D13 ($0 stock-now); Monetization executes buy-box/disclosure sweep; IR signs off per site
---

# Premium Launch Scorecard + Marching Orders

CSRO read after the 2026-06-02/03 COO build waves. **Substance is launch-grade; the two open gates
are Visual identity and Monetization wiring.** This brief is the execution spec for both lanes.

## Legend
Substance = content depth, hub→spoke graph, schema/GEO, tools, trust, indexing (COO-owned, DONE).
Visual = distinct per-site hero/photography/first-screen identity (Visual-owned, OPEN).
Mon = every commercial CTA via `/go`, FTC disclosure above monetized surfaces, safe buy-boxes (Monetization-owned, OPEN/PARTIAL).

## Cohort scorecard (launch wave order, D16)

| # | Site | Substance | Visual | Monetization | Notes |
|---|---|---|---|---|---|
| 1 | **Ferret.com** | ✅ glossary, food-evaluator + cost-calculator, 21 health spokes, clean graph | ⚠️ real-ferret hero needed (no AI animals) | ⚠️ comfort-supply buy-box per D14 microcopy ONLY when added; finish ferret monetization | D14: bless comfort-supplies w/ exact disclaimer; NO meds |
| 2 | **PetFood.com** | ✅ glossary, cost + portion calculators, brands/ingredients/diets clusters | ⚠️ ingredient/brand hero identity | ⚠️ affiliate buy-boxes on brand/review pages via `/go`; disclosure above | — |
| 3 | **Vets.co** | ✅ glossary, insurance estimator, insurance/health/specialists clusters | ⚠️ clinical-authority hero | ⚠️ `/telehealth` inline FTC disclosure above the 3 `/go` CTAs; soften vendor superlatives | N4/N6 |
| 4 | **Fish.com** | ✅ glossary, 6 calculators, species/water-parameters clusters | ⚠️ aquarium hero/photography | ⚠️ equipment-review affiliate via `/go` | — |
| 5 | **Dog.com** (flagship, last+most polish) | ✅ glossary, calorie + age calculators, breeds/health/nutrition/compare clusters | ⚠️ flagship hero is top priority — offer-backed | ⚠️ Skimlinks live; finish CTA→`/go` coverage; disclosures above | Most polish per D16 |

## Equestrian pair (production, acquisition targets — not in first DNS wave)
| Site | Substance | Visual | Mon |
|---|---|---|---|
| Horses.com | ✅ /racing 11-article cluster + equestrian glossary + BCS calc | ⚠️ hybrid hero (authority + /racing entry, D1) | ⚠️ tack/gear affiliate via `/go` |
| Saddle.com | ✅ tack glossary + tree-size estimator + discipline hubs | ⚠️ luxury hero identity | ⚠️ saddle/tack affiliate via `/go` |

## VISUAL — marching orders (per D13: stock-now via `scripts/sync-images.mjs` on Carlo's Mac, $0; commission later only with spend approval; do NOT launch on weak imagery)
Per site, in cohort order, deliver:
1. **Distinct hero** on homepage + each top hub — real photography, no AI-generated humans/animals, no templated stock look. Per-site differentiation (Dog ≠ Fish ≠ Ferret; Horses ≠ Saddle per D4).
2. **ogImage** per site for share/AI-surface cards.
3. **Make the embedded homepage tool read as the hero product** (composition/framing), not a dropped-in widget — every cohort site now has calculators worth featuring.
4. Spec: `ops/csro/premium-first-screen-standard.md` (D5).
Focus order: **Dog → Fish → Ferret → PetFood → Vets** (flagship first for offer-backing).

## MONETIZATION — marching orders
1. **Zero affiliate-route leakage:** every commercial CTA routes through `/go/[vendor]/[sku]`. Sweep all 5 cohort sites + Horses/Saddle.
2. **FTC disclosure above every monetized surface** (start: Vets `/telehealth`, Dog reviews, PetFood brand pages).
3. **Clinical/medicated buy-box safety:** Ferret comfort-supplies allowed per D14 with the exact microcopy ("Comfort supplies do not treat adrenal disease, insulinoma, or other medical conditions. Work with an exotic-pet veterinarian for diagnosis and treatment."), disclosure near CTA, NO meds/prescription-adjacent/disease-treatment claims/dosing.
4. Soften vendor superlatives ("most comprehensive") on telehealth + pet-insurance funnels.

## IR — review gate
Per cohort site, confirm no Tier-1 trust/valuation risk after Visual + Mon land. Ferret comfort-supply framing already blessed-with-conditions (D14).

## The single highest-leverage move
**Dog.com flagship visual hero** (offer-backed, most strategic, D16 "most polish"). It moves the
needle on "feels like a premium asset" more than any other single action. Visual: start here.

## What is NOT blocking (so nobody re-opens it)
COO substance is done cohort-wide: glossaries (7 sites), calculators (all cohort + lizard/horses),
schema/breadcrumbs/ItemList/DefinedTermSet, zero orphans, clean hub→spoke, indexing hygiene,
cross-portfolio graph, trust-bar. Re-gate against the §8a bar only when a Visual/Mon PR lands.
