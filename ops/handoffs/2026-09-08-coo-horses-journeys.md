---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1548 is on main.
---

# Horses commercial journeys — blanket size + cost calculator

Trust floor after #1548. Five earning sites only. No kitchen-kit hops.

## What shipped

Shared `JourneyNext` on two high-intent Horses tools, mirroring Dog puppy/crate + Fish new-tank:

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/tools/horse-blanket-size-calculator` | `/tack/blanket-weights` | `winter+horse+blanket?s=tools-horse-blanket-size-calculator` |
| `/tools/horse-cost-calculator` | `/first-horse-roadmap` | `horse+halter+lead+rope?s=tools-horse-cost-calculator` |

Empty “Keep the fit notes” / “Owner notes” husks removed. Shop dumps stay below. EmailCapture props not reintroduced. No laminated / fridge / handbook hops.

## Out of scope

- Blanket-weights / first-horse-roadmap existing Pattern B hops left untouched
- Horses breeds / directory / #1165 / #1466
- Calculator model math

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs; stronger internal link on two tool pages |
| **GEO Impact** | S — size then weight / cost then 90-day plan is extractable |
| **Monetization Impact** | S — existing tagged hops now sit on the next-step strip |
| **Build Effort** | S — two pages + integrity pins |
| **Priority Level** | P1 CX money-path after #1548 |
