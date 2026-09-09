---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1627 is on main.
---

# Dog temperature journey — go-now thresholds → emergency triage + existing thermometer hop

#1627 fish pond-guide → pond-volume is on main. This is the Dog pairing in the new-puppy / first-aid family: `/guides/how-to-take-dogs-temperature` still jumped from the 104.5 / 106 °F thresholds into the shop kit. First-aid already journeys here; emergency triage is the next step when the number is out of range.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/guides/how-to-take-dogs-temperature` | `/tools/is-this-a-dog-emergency` | `digital+rectal+thermometer+pet?s=guides-how-to-take-dogs-temperature` |

Shop dump stays after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — 104.5 / 106 °F thresholds are extractable |
| **Monetization Impact** | S — existing tagged thermometer hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1627 |
