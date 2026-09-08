---
from: coo
to: carlo
status: open
created: 2026-09-08
next_action: Merge-when-green; then Carlo-only env asks below
---

# CX verify #6 — resource / inquire / hops / analytics

Trust floor includes #1540–#1546. Five earning sites only. No kitchen-kit hops.

## Verified OK (live)

| Check | Result |
|---|---|
| Dog puppy / crate journeys | #1546 live on `dog-com-three`. Next-step strips + crate `/go` hop |
| Fish new-tank journey | #1546 live on `carlo-os-fish-com`. Cycle next-step + master-kit `/go` |
| Resource magnets | Puppy, crate, stocking rules, triage card, first-year schedule all download real `.txt` |
| Home Start-here strips | Dog / fish / horses / vets / ferret link real tools — no email required |
| Affiliate hops | 302 to Amazon search with `tag=boltonpets20-20ls` (not a bare homepage redirect) |
| Visitor copy | No FormSubmit / “email not live” essays on inquire or magnets |

## Code-side fix in this PR

Shop hops and magnet saves now fire GA4 `affiliate_click` / `resource_save` when `gtag` exists. No-op on vets/ferret until a measurement ID is set. `/go` already logs `affiliate_click` server-side.

## Failed / Carlo-only

| Blocker | Where | Ask |
|---|---|---|
| FormSubmit 502 | dog / fish / horses `/api/inquire` (inbox is set) | Kit / FormSubmit / replacement inbox — quiet `/inquire` path stays |
| `INQUIRE_EMAIL` unset | vets-co + ferret-com `/api/inquire` → 503 | Set the same inbox env or accept those two stay dark |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` unset | vets-co + ferret-com (no gtag in HTML) | Set GA4 or confirm they should stay unmeasured |
| `/api/analytics` stub 503 | dog-com (and twins) | Not required for hops; `/go` + GA4 are the live surfaces. Supabase later |

Do **not** set these from this session (spend / vendor). No DNS.

## Score

| Field | Note |
|---|---|
| **SEO Impact** | XS — no new URLs |
| **GEO Impact** | XS — magnets already on-page |
| **Monetization Impact** | S — hops already tagged; events make journey clicks visible in GA4 |
| **Build Effort** | XS — ShopCtas + OnPageMagnet + pins |
| **Priority Level** | P0 verify slice |
