---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1549 is on main.
---

# Vets ER journey — setting chooser → when-to-go + existing carrier hop

Trust floor after #1549. Five earning sites only. No kitchen-kit hops.

## What shipped

| Page | Next step | Existing `/go` hop |
|---|---|---|
| `/tools/er-vs-clinic` | `/guides/when-to-go-to-the-vet` | `soft+pet+carrier?s=tools-er-vs-clinic` |

Empty “ER vs clinic cheat sheet” husk removed. Shop dump stays below. `/inquire` is still the quiet noindex buyer screen — this page does not link it.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret (vets `/api/inquire` 503); `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret. Do not set from this session.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs; stronger tool → guide link |
| **GEO Impact** | S — setting then watch/same-day/ER list is extractable |
| **Monetization Impact** | S — existing tagged carrier hop now sits on the next-step strip |
| **Build Effort** | S — one page + integrity pins |
| **Priority Level** | P1 CX money-path after #1549 |
