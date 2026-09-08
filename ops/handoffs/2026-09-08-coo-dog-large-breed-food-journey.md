---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1617 is on main.
---

# Dog large-breed food journey — puppy vs adult formula → puppy-nutrition + existing Royal Canin hop

#1617 fish CO2 → cycling estimator is on main. This is the Dog pairing: `/reviews/best-large-breed-dog-food` still had no JourneyNext after the puppy vs adult formula rule. Puppy-food review already journeys to the same nutrition guide.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-large-breed-dog-food` | `/nutrition/puppy-nutrition` | `royal+canin+large+adult?s=reviews-best-large-breed-dog-food` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — puppy-bag-then-adult-switch is extractable |
| **Monetization Impact** | S — existing tagged Royal Canin Large Adult hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1617 |
