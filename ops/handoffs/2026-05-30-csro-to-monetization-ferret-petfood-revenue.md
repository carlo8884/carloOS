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

11K real monthly visitors with **no way to earn** is the single biggest revenue gap we have. **CSRO mapped the app
2026-05-30 — the affiliate plumbing already exists; this is application, not construction:**

**Already built (verified):**
- `apps/ferret-com/src/data/affiliate-routes.ts` — all 5 allow-list vendors wired (Amazon, Chewy, Marshall,
  Wysong, Carniwhole), PLACEHOLDER tracking templates.
- `apps/ferret-com/src/app/go/[vendor]/[sku]/route.ts` — click-tracker live (env-var substitution at runtime).
- `packages/ui/src/components/ReviewCard.tsx` + `AffiliateDisclosure.tsx` — ready to drop in.
- Already applied on `/care/cage-setup` (2 ReviewCards) and the `/ferret-starter-kit` funnel.

**The gap (the leak):** the high-traffic editorial pages carry **zero** monetization. The traffic is on the care +
health clusters:
- Care: `/care/diet-basics`, `/care/cage-setup` (partial), `/care/litter-training`, `/care/bathing-and-grooming`,
  `/care/exercise-and-enrichment`, `/care/toxic-foods`
- Health: `/health/adrenal-disease`, `/health/insulinoma`, `/health/lymphoma`, `/health/dental-disease`,
  `/health/vaccinations`, `/health/aging-ferret-care`, `/health/vet-visit-prep`

**The job (fast — pure application):**
1. Pull the actual top-traffic Ferret pages from analytics (start with the highest, not all 14 at once).
2. On each, add contextually-honest product recommendations via the existing **ReviewCard** with
   `ctaAffiliateProgram` (amazon/chewy/marshall/wysong/carniwhole) → routes through the existing `/go` handler.
   Examples that fit the content: diet-basics → ferret kibble (Wysong/Marshall/Carniwhole); cage-setup →
   cages/bedding (Amazon/Chewy); litter-training → litter/pans; health pages → supportive-care supplies only
   (NOT treatment claims — see guardrails).
3. Ensure `AffiliateDisclosure` is surfaced above the fold on every page that gains affiliate links.

**Config fix (small, COO lane):** `ferret-com` in `packages/config/index.ts` still has placeholder nav
(`[{Home}]`) and `marshall/wysong/carniwhole` aren't reflected in the `affiliates` flags (only amazon/chewy true).
Not blocking the buy-boxes, but worth aligning when convenient.

**Guardrail specific to health pages (QC §1/§3.3):** health/disease pages may link *supportive-care* products
(e.g. high-calorie recovery supplement, soft bedding) but must **not** imply a product treats/cures the condition,
and must not give individualized medical advice. Keep treatment framing on "see your exotic vet."

**Expected impact:** even 1–2% affiliate CTR on 11K/mo is real, recurring revenue with ~zero build cost — and it
becomes part of the trafficked-revenue story that lifts the site's eventual sale value.

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
