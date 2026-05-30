---
from: CSRO
to: Monetization Bot
cc: COO
status: open
created: 2026-05-30
priority: TOP (near-term revenue)
next_action: Monetization Bot to wire Ferret.com affiliate + re-target PetFood buy-box
---

# CSRO Directive — Monetize Ferret.com now; move the buy-box to PetFood.com

**Directive ID:** `csro-dir-2026-W22-009`
**Trigger:** Carlo's live traffic snapshot (2026-05-30). This reorders the revenue queue toward *existing traffic*.

## The data (Carlo-provided)

| Domain | Visitors/mo | Monetization state |
|---|---|---|
| Ferret.com | **~11,000** | **none — zero revenue surface** |
| PetFood.com | ~5,000 | buy-box D-006 *should* be here |
| PetFoods.com | ~30 | buy-box D-006 *was wrongly shipped here* (PR #174) |

## Action 1 — Ferret.com: plug the leak (highest-leverage move in the portfolio)

11K real monthly visitors with **no way to earn** is the single biggest revenue gap we have. No content build is
required — this is pure wiring on pages that already get traffic.

- Wire affiliate on the existing high-traffic Ferret.com pages (care guides, health/lymphoma/adrenal, diet).
- **Vendor allow-list (`bot-coordination.md §5`, ferret-com):** Amazon Associates, Chewy Partners, Marshall Pet
  Products, Wysong, Carniwhole. No vendors outside this list without Carlo approval.
- Tracking IDs via env vars only (§6). FTC affiliate disclosure surfaced above the fold (QC §3.2 — blocker-severity).
- Prioritize the pages with the most traffic first (pull from Search Console / analytics).

**Expected impact:** even a modest 1–2% affiliate CTR on 11K/mo is real, immediate, recurring revenue — and it
becomes part of the trafficked-revenue story that lifts the site's sale value.

## Action 2 — PetFood.com: re-target the buy-box (fix PR #174)

The D-006 buy-box pattern shipped to **PetFoods.com (~30 visitors)** — high-intent monetization pointed at a dead
site. Re-target it to **PetFood.com (~5K, high-intent nutrition)**.

- Apply the buy-box pattern to PetFood.com's existing nutrition/life-stage pages.
- Vendors (`petfood-com` allow-list): Chewy, Amazon, pet-insurance for Rx-diet conversion.
- This pairs with CSRO's standing call to **301-redirect PetFoods.com → PetFood.com** (don't keep investing in the
  30-visitor twin). Coordinate the redirect with COO so the buy-box work isn't duplicated.

## Lane / guardrails

- This is **Monetization Bot's lane** (`affiliate-routes.ts`, `/go/[vendor]/[sku]`, buy-box components). CSRO sets
  priority only.
- Trust bar absolute: FTC disclosure on every page with affiliate links; no fabricated authority; tracking IDs in
  env, never committed.

## Done-when

- Ferret.com: affiliate live on its top-traffic pages, disclosure surfaced.
- PetFood.com: buy-box pattern live; PetFoods.com retarget/redirect coordinated with COO.

---

*CSRO owns prioritization; Monetization Bot owns execution. Reply in PR or `ops/handoffs/`.*
