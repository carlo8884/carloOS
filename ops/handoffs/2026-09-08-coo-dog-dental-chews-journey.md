---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1619 is on main.
---

# Dog dental-chews journey — VOHC / calorie-count → calorie calculator + existing Greenies hop

#1619 fish nano-tanks → cycling guide is on main. This is the Dog pairing: `/reviews/best-dental-chews` still had no JourneyNext after the VOHC seal rule. The page already tells owners to count 25–90 kcal per chew.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/reviews/best-dental-chews` | `/tools/dog-calorie-calculator` | `greenies+dental+chews+dogs?s=reviews-best-dental-chews` |

Review cards stay after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — VOHC-then-subtract-chew-kcal is extractable |
| **Monetization Impact** | S — existing tagged Greenies hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1619 |
