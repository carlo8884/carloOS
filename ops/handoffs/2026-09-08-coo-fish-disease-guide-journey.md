---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1563 is on main.
---

# Fish disease-guide journey — hospital tank → quarantine setup + existing hop

#1563 BCS → ideal-weight is on main. This is the Fish new-tank pairing: `/health/fish-disease-guide` still had an empty husk and dumped shop after the hospital-tank answer.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/health/fish-disease-guide` | `/setup/quarantine-tank-guide` | `aquarium+quarantine+hospital+tank+net?s=health-disease-guide` |

Empty “Keep the hospital-tank plan” husk removed. Shop dump stays after JourneyNext. No medication hop. No kitchen-kit hops. No new Amazon query.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — test-then-isolate-then-QT is extractable |
| **Monetization Impact** | S — existing tagged hospital-tank hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1563 |
