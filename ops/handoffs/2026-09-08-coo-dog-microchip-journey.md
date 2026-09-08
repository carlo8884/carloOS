---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1607 is on main.
---

# Dog microchip journey — registration rule → new-puppy checklist + existing engraved-ID hop

#1607 fish test-kits → water-parameters is on main. This is the Dog pairing: `/guides/dog-microchipping` still had no JourneyNext after the registration rule. Core new-puppy crate / checklist pages already have JourneyNext.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/guides/dog-microchipping` | `/tools/new-puppy-checklist` | `engraved+dog+collar+id+tags?s=guides-dog-microchipping` |

Shop dump stays after JourneyNext. No kitchen-kit hops. No new Amazon query. No named Rx.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — register-then-pack-the-ID-list is extractable |
| **Monetization Impact** | S — existing tagged engraved-ID hop now sits on the next-step strip |
| **Build Effort** | XS — one destination page + integrity pin |
| **Priority Level** | P1 deepen after #1607 |
