---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1608 is on main.
---

# Fish filters journey — type rule → filter-GPH + existing AquaClear hop

#1608 dog microchip → new-puppy checklist is on main. This is the Fish pairing: `/reviews/best-aquarium-filters` still had no JourneyNext after the HOB / canister / sponge type rule. Core new-tank cycling / quarantine pages already have JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-aquarium-filters` | `/tools/filter-gph-calculator` | `aquaclear+70+filter?s=reviews-best-aquarium-filters` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — type-then-GPH-size is extractable |
| **Monetization Impact** | S — existing tagged AquaClear hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1608 |
