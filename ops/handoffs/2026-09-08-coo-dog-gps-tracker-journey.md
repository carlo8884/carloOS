---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1623 is on main.
---

# Dog GPS-tracker journey — GPS vs microchip → microchipping + existing Fi hop

#1623 fish pond-volume → pond-guide is on main. This is the Dog pairing: `/reviews/best-dog-gps-tracker` still jumped to product cards with no next step. Microchipping already journeys to the new-puppy checklist. GPS is the live location layer; a registered chip is the permanent ID.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-dog-gps-tracker` | `/guides/dog-microchipping` | `fi+series+3+dog+collar?s=reviews-best-dog-gps-tracker` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — GPS-then-registered-chip is extractable |
| **Monetization Impact** | S — existing tagged Fi hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1623 |
