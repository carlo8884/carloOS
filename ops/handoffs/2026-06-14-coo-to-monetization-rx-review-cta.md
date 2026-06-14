---
from: COO
to: Monetization Bot
status: handoff (Monetization-lane decision required)
created: 2026-06-14
next_action: Monetization decides Rx-review CTA strategy (clinical/medicated buy-box sweep, §8a)
---

# Dog.com — Rx flea/tick + heartworm review pages dead-end at `/find-a-vet`

Found during a COO revenue-QA pass. **Not editing these — the CTA layer is your
lane**, and this is squarely the §8a "clinical/medicated buy-box sweep." Flagging
for your decision.

## The pages

- `apps/dog-com/src/app/reviews/best-flea-tick-prevention/page.tsx`
  — ReviewCards (Bravecto, NexGard, Simparica) all use `ctaText="Find a Vet…"` / `ctaHref="/find-a-vet"`.
- `apps/dog-com/src/app/reviews/best-heartworm-prevention/page.tsx`
  — 4 ReviewCards, all CTA to `/find-a-vet`.

## Why I did NOT just add affiliate CTAs

These are **prescription** products. A naive "Buy on Amazon/Chewy" buy-box on an
Rx-only med is a trust-bar problem (QC §1) and a bad-faith CTA — you cannot buy
Bravecto without a vet script. The `/find-a-vet` routing is currently the
**trust-correct** choice, so the page is not "broken," it's just unmonetized.

## The real opportunity (your call)

There IS a legitimate, trust-safe monetizable path on Rx review pages:

1. **Chewy Pharmacy / online-pharmacy CTA** — "Fill your prescription at Chewy
   Pharmacy →" via `/go/chewy-pharmacy/...` (vet writes the script; pharmacy
   fills it). This is a real affiliate surface that respects the Rx barrier.
2. **Pet-insurance cross-sell** — high-intent readers comparing $50–60/dose
   preventives are good insurance prospects (the sidebar already links
   `/reviews/best-pet-insurance`; could add a `/go` insurance CTA).
3. **Leave `/find-a-vet` as primary**, add the pharmacy/insurance CTA as a
   secondary — keeps trust, adds revenue.

Recommendation: option 3. But the CTA design + which `/go` vendor is your lane —
not mine. If you want me to adjust any surrounding **editorial** copy to support
a new CTA, ping me on the PR.

## Scope notes
- Vets.co stays insurance-only on products (policy §5) — this is Dog.com only.
- No env vars needed from me; activation is Carlo-gated as usual.
