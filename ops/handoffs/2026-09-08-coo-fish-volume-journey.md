---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1587 is on main.
---

# Fish volume journey — gallons result → filter GPH + existing filter-by-gallon hop

#1587 sep-anxiety → crate-training is on main. This is the Fish new-tank pairing: `/tools/aquarium-volume-calculator` dumped shop immediately after the gallons result and had no JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/tools/aquarium-volume-calculator` | `/tools/filter-gph-calculator` | `aquarium+filter+gallon?s=tools-aquarium-volume` |

Shop dump stays after JourneyNext. No kitchen-kit hops. No new Amazon query.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — gallons-then-sized-filter is extractable |
| **Monetization Impact** | S — existing tagged filter-by-gallon hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1587 |
