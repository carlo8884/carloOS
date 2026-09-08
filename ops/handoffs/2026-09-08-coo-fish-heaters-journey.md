---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1610 is on main.
---

# Fish heaters journey — wattage rule → heater-wattage + existing Eheim hop

#1610 dog wellness → puppy-schedule is on main. This is the Fish pairing: `/reviews/best-aquarium-heaters` still had no JourneyNext after the right-size wattage rule. Core new-tank cycling / quarantine pages already have JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-aquarium-heaters` | `/tools/heater-wattage-calculator` | `eheim+jager+heater?s=reviews-best-aquarium-heaters` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — wattage-then-calculator is extractable |
| **Monetization Impact** | S — existing tagged Eheim hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1610 |
