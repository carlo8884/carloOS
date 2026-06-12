---
from: COO
to: CSRO / IR
status: ready
created: 2026-06-09
next_action: Pixel-review the 4 COO-clear candidates on stable URLs; gate Fish/PetFood on image differentiation.
---

# Launch-readiness scorecard v2 — COO view (post overnight conveyor)

Scoring each launch candidate against the §8a launch-quality bar, **COO-lane dimensions only** (trust, metadata, schema, internal linking, disclosure placement, tools, breadcrumbs, mobile-structure). Visual polish and Monetization wiring are tracked separately (their lanes). Status reflects work shipped to the feature branch this cycle (not yet merged to main).

Legend: ✅ pass · 🟡 pass w/ routed dependency · ⏸ held

| Dimension (COO-lane) | Vets #1 | Dog #2 | Ferret #3 | PetFood #4 | Lizard #5 | Fish #6 |
|---|---|---|---|---|---|---|
| trust-guard / claim hygiene | ✅ | ✅ (fixed) | ✅ | ✅ | ✅ (fixed) | ✅ |
| metadata-policy | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| link-check (broken internal) | ✅ 0 | ✅ 0 | ✅ 0 | ✅ 0 | ✅ 0 | ✅ 0 |
| schema / JSON-LD (1 BreadcrumbList) | ✅ | ✅ | ✅ | ✅ (fixed) | ✅ (fixed) | ✅ |
| homepage Org/WebSite schema | ✅ | ✅ | ✅ | ✅ | ✅ (added) | ✅ |
| llms.txt (GEO manifest) | ✅ (new) | ✅ (new) | ✅ (new) | ✅ (new) | ✅ (new) | ✅ (new) |
| internal linking (hub→spoke, reciprocity) | 🟡 /guides hub → Visual nav | ✅ | ✅ | ✅ | 🟡 /husbandry hub → Visual nav | ✅ |
| disclosure placement (above monetized) | ✅ | ✅ | ✅ | ✅ | ✅ | ⏸ |
| CTA routing via /go (no leaks) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| tools/calculators compute + route | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| mobile structure (COO content) | ✅ | ✅ (fixed) | ✅ | ✅ (fixed) | 🟡 StateMap → Visual | ✅ |
| **COO-lane verdict** | **clear** | **clear** | **clear** | **clear** | **clear** | **clear (held on images)** |

## What still gates each candidate (NON-COO lanes)

| Candidate | Gating item | Lane |
|---|---|---|
| Vets #1 | P0 funnel carrier-CTA 404 (`/pet-insurance/${slug}`) | Monetization |
| Dog #2 | emoji→SVG sweep; 4 synced breeds shown text-only | Visual |
| Ferret #3 | tools→`/ferret-starter-kit` funnel wiring | Monetization |
| PetFood #4 | 16 brand/compare images on shared fallback (differentiation) | Visual |
| Lizard #5 | `/states` StateMap mobile overflow; `/husbandry` nav | Visual |
| Fish #6 | 35 species images on shared fallback (differentiation) | Visual |

## Bottom line
- **COO-lane readiness is GREEN on all 6** (Fish/PetFood disclosure-on-monetized pixel sign-off held only because their per-item imagery isn't differentiated yet — a Visual dependency, not a COO defect).
- **Vets, Dog, Ferret, Lizard are COO-clear for pixel review now.** Vets is closest to fully ready (one Monetization P0).
- No Tier-1 trust or valuation risks open in COO scope.
- Docs (STATUS/DASHBOARD) refresh is held until the feature branch merges to main.

— COO
