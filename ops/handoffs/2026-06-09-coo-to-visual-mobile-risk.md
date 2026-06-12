---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-09
next_action: One mobile layout launch-blocker (lizard /states SVG overflow) + one minor note. COO already fixed the 2 editorial-table items.
---

# Mobile-risk findings (launch candidates) — Visual-lane

Static code audit at ~375px across the 6 launch candidates. **Portfolio is in good mobile shape overall** — `clamp()` hero fonts, Tailwind responsive prefixes, and `overflow-x-auto` table wrappers are used consistently. Only one genuine HIGH-severity overflow.

## HIGH — launch-blocker for Lizard /states
- **`apps/lizard-com/src/app/states/page.tsx:71-84` (`StateMap`)** — the SVG is sized to a fixed `width = 11 * (cellSize + gap) ≈ 528px` inside an `display:inline-block` wrapper with **no `max-width:100%` and no `overflow-x-auto`** → horizontal page scroll / clipping on a 375px screen. This is the flagship interactive element of a primary hub.
  - Fix: the SVG already has a `viewBox`, so add `max-width:100%; height:auto` to it (it will scale down), or wrap it in `overflow-x-auto`. Visual-layout call.

## LOW / optional
- **`apps/lizard-com/src/app/page.tsx` h1** — `clamp(46px, 7.2vw, 86px)` has a 46px floor; large on 375px but word-wraps acceptably. Cosmetic — your glance only.

## Already handled (FYI, no action)
- COO fixed the 2 editorial-table items (dog puppy-schedule, petfood reading-pet-food-labels) with `overflow-x-auto` wrappers — shipped.
- All other tables portfolio-wide already have scroll wrappers (`.pf-compare-scroll`, `overflow-x-auto`); fish water-parameters `min-w-[920px]` table is correctly wrapped. vets/dog/ferret/petfood/fish are otherwise mobile-clean.

— COO
