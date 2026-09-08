---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1609 is on main.
---

# Dog wellness journey — visit-frequency rule → puppy schedule + existing fecal-kit hop

#1609 fish filters → filter-GPH is on main. This is the Dog pairing: `/guides/dog-wellness-exam` still had no JourneyNext after the AAHA visit-frequency rule. Core new-puppy crate / checklist pages already have JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/guides/dog-wellness-exam` | `/training/puppy-schedule` | `fecal+sample+collection+kit?s=guides-dog-wellness-exam` |

Shop dump stays after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — frequency-then-daily-schedule is extractable |
| **Monetization Impact** | S — existing tagged fecal-kit hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1609 |
