---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1596 is on main.
---

# Dog health-hub journey — urgency table → emergency triage + existing first-aid kit hop

#1596 saltwater-setup → quarantine is on main. This is the Dog pairing: `/health` still had an empty husk and no JourneyNext after the urgency-tier table. Core new-puppy/crate pages already have JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/health` | `/tools/is-this-a-dog-emergency` | `pet+first+aid+kit?s=health-hub` |

Empty “Keep the health-library order” husk removed. Shop dump stays after the library grid. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — tier-then-emergency-sign-list is extractable |
| **Monetization Impact** | S — existing tagged first-aid kit hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1596 |
