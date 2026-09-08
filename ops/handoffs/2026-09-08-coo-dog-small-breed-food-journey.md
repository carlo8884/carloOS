---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1621 is on main.
---

# Dog small-breed food journey — calorie-density → calorie calculator + existing Royal Canin Small Adult hop

#1621 fish canister-filters → filter-GPH is on main. This is the Dog pairing: `/reviews/best-dog-food-small-breed` still had no JourneyNext after the calorie-density / small-mouth kibble rule. Large-breed food already journeys to puppy-nutrition; this spoke needs daily energy before the bag.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-dog-food-small-breed` | `/tools/dog-calorie-calculator` | `royal+canin+small+adult?s=reviews-best-dog-food-small-breed` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — density-then-daily-kcal is extractable |
| **Monetization Impact** | S — existing tagged Royal Canin Small Adult hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1621 |
