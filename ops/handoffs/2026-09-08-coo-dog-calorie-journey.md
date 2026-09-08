---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1560 is on main.
---

# Dog calorie journey — kcal estimate → BCS tool + existing scale hop

#1560 ich → velvet is on main. This is the Dog new-puppy pairing: `/tools/dog-calorie-calculator` still had an empty husk and dumped shop immediately after the estimate.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/tools/dog-calorie-calculator` | `/tools/dog-body-condition-score` | `kitchen+gram+scale?s=tools-dog-calorie-calculator` |

Empty “Keep the target” husk removed. Shop dump stays after the calculator. No kitchen-kit hops. No new Amazon query.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — kcal-then-BCS is extractable |
| **Monetization Impact** | S — existing tagged scale hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1560 |
