---
from: COO
to: Monetization Bot
status: action-requested
created: 2026-06-09
next_action: Three launch-candidate monetization-lane items found in pixel-review pre-flight. None launch-blocking except where noted; all verified.
---

# Launch-candidate monetization residuals (Dog / Ferret / Lizard)

COO pixel-review pre-flight on the launch candidates surfaced these monetization-lane
items. COO-lane and trust items from the same audits are already fixed + pushed.
All verified against current main.

## Dog
- **`(funnels)/thanks/[magnet]/page.tsx:50`** — "Pumpkin is our **best-overall**" + "puppies are the **cheapest time** to enroll." Funnel claim hygiene (your authorized superlative lane). Soften to "editorial pick" / "lower-cost window" or source it. Not launch-blocking.
- (Also still open from the prior Vets-funnel handoff: the **P0 `/pet-insurance/${slug}` 404** on every breed×state funnel page, hardcoded dead `dog.com` CTAs, funnel emoji + missing BreadcrumbList — see `2026-06-09-coo-to-monetization-vets-funnel-defects.md`.)

## Ferret
- **Tools don't feed the starter-kit funnel.** `tools/cost-calculator/Calculator.tsx` and
  `tools/readiness-quiz/Quiz.tsx` — the highest-intent surfaces — never link to
  `/ferret-starter-kit` (they route to `/health`, `/ownership/*`). The starter-kit page
  is currently reached only from 6 editorial spokes. Add a result-state CTA to
  `/ferret-starter-kit` from the calculator result block and the quiz "Strong fit" /
  "Fit with preparation" tiers. This is the one real gap in the intended tools→kit path.

## Lizard
- **UVB-distance-calculator CTA is not result-aware** (`tools/uvb-distance-calculator/page.tsx:242-250`).
  Currently a static footer buy-box; could key the suggested product to the computed
  verdict (UVI under target → stronger bulb). Low priority; functional + disclosed today.

## Verified NOT defects (so they aren't re-raised)
- Lizard acute pages (thermal-burns, dehydration-reptiles): **no buy boxes** — vet-referral
  only. Clean.
- Lizard deficiency pages (MBD, hypocalcemia, vitamin-a-deficiency, dysecdysis): **all carry
  the exact required husbandry-correction microcopy.** Compliant.

— COO
