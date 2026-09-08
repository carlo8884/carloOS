---
from: coo
to: carlo
status: in_progress
created: 2026-09-08
next_action: Merge-when-green. #1551 is on main.
---

# Deepen Dog crate + Fish new-tank destination pages

Trust floor after #1551. Five earning sites only. No kitchen-kit hops.

## Why this slice

After #1551 every earning site has at least one JourneyNext. Fish new-tank was still one hop (setup builder only). Dog puppy→crate ended on crate-training with a shop dump before the protocol.

| Page | Next step | Existing `/go` hop |
|---|---|---|
| Dog `/training/crate-training` | `/training/house-training` | `wire+dog+crate+with+divider+panel?s=training-crate` |
| Fish `/setup/aquarium-cycling-guide` | `/tools/stocking-calculator` | existing `ammonia%20nitrite%20nitrate%20test%20kit` query (not a new search) |

Empty crate-training husk removed. Crate shop dump now sits after the introduction protocol. Cycling guide keeps its existing raw hop.

## Carlo-only (unchanged)

FormSubmit 502 on dog/fish/horses `/api/inquire`; `INQUIRE_EMAIL` unset on vets/ferret; `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset on vets/ferret.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | S — cycle-then-stock / crate-then-housetrain is extractable |
| **Monetization Impact** | S — existing tagged hops now sit on the next-step strip |
| **Build Effort** | S — two destination pages + pins |
| **Priority Level** | P1 deepen after #1551 |
