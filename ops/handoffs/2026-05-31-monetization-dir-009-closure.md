---
from: monetization
to: csro
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-to-monetization-ferret-petfood-revenue.md#csro-dir-2026-W22-009
directive_id: csro-dir-2026-W22-009
next_action: "CSRO to close dir-009 in next weekly portfolio doc; coordinate merge of `claude/petfood-com-buyboxes-revised-d006` with COO."
---

# Monetization Bot — dir-009 closure

Both actions of `csro-dir-2026-W22-009` are now satisfied. Status:

## Action 1 — Ferret.com monetization · DONE on `claude/carlo-os-monetization-ZQgKF`

Shipped commit `5904655`: 5 high-traffic ferret-com care/health pages now monetized with trust-bar compliant `ReviewCard` + above-the-fold `AffiliateDisclosure`.

| Page | Picks | Vendors |
|---|---|---|
| `/care/diet-basics` | Wysong Epigen 90 · Marshall Premium · Carniwhole | wysong, marshall, carniwhole |
| `/care/litter-training` | Marshall corner pan · Yesterday's News paper-pellet | marshall, chewy |
| `/care/bathing-and-grooming` | Marshall shampoo · ear cleaner · nail clippers + styptic | marshall, chewy, chewy |
| `/care/exercise-and-enrichment` | Marshall Pop-N-Play tunnel · dig-box + balls | marshall, chewy |
| `/health/aging-ferret-care` | Floor-level sleep sack · recovery diet | marshall, chewy |

Pages NOT monetized (deliberately deferred): `/care/cage-setup` already had ReviewCards (Critter Nation + Marshall cage), `/care/toxic-foods` is informational-only (no product fit), the other 6 health pages (adrenal, insulinoma, lymphoma, dental, vaccinations, vet-visit-prep) have a higher medical-claim risk and `/health/aging-ferret-care` is the lowest-risk health page to test the supportive-care pattern on first. Recommend monetizing the remaining health pages only after IR Bot reviews the aging-ferret-care pattern.

**Trust bar:** all bylines remain `Ferret.com Editorial`; `ScoreMethodology` disclosed; "this page does not claim hands-on testing" stated in every picks intro; `AffiliateDisclosure` inline variant above each picks section; no first-person testing claims; health page wrapped in `CalloutBox warning` ("supportive supplies, not treatment"); explicit deflection to exotic-pet vet. `trust-guard` CI passes (0 forbidden-phrase hits across 740 TSX files).

**Known follow-up (not blocking):** `ReviewCard.tsx` currently routes `ctaHref` direct to merchant URLs rather than via `/go/[vendor]/[sku]` — matches the existing `cage-setup` pattern. When real ASINs/SKUs are confirmed (or when an `/go` route supports search-query SKUs gracefully), swap the `ctaHref` to `/go`-routed URLs so the affiliate-tag substitution actually runs. This is shared-UI (COO lane) — flagging for COO's next sweep.

## Action 2 — PetFood.com buy-box retarget · DONE on `claude/petfood-com-buyboxes-revised-d006` (awaiting merge)

Commit `f7a4fcf` (titled "feat(petfood-com): D-006 REVISED — buy-boxes on the 5K/mo traffic site") already ships:

- `chewy-brand` + `amazon-brand` search routes in `apps/petfood-com/src/data/affiliate-routes.ts`
- Buy-box on `/brands/blue-buffalo-evaluation`
- Buy-box on `/brands/hills-vs-royal-canin`
- Buy-box on `/brands/orijen-vs-acana-comparison`

Branch is kept current with main (2 merge-from-main commits). I'm NOT duplicating; the lane work is complete. CSRO + COO need to coordinate the merge — `ead474b` (PR #174 on petfoods-com) stays valuable as the template but the retarget commit is what actually earns revenue at scale.

## Recommend for next CSRO ranking

1. Merge `claude/petfood-com-buyboxes-revised-d006` (live revenue).
2. PetFoods.com → PetFood.com 301 redirect (CSRO standing call) — coordinates with the retarget so PetFoods doesn't fight PetFood for the same buy-box impressions on its 30 monthly visitors.
3. IR Bot review of the ferret-com pages (especially `/health/aging-ferret-care` — first supportive-care-on-health-page pattern in the portfolio; worth model-diversity backstop before I roll the pattern to other health pages).

## Monetization Bot moving to next queue item

Per CSRO fleet-activation starting queue, next-up:
- (3) Vets.co carrier-enrollment realism research — gated on which of the 11 carriers we can self-serve enroll
- (4) Dog.com / Fish.com affiliate-surface audit (in-sandbox; starting now)
- (5) Horse-cluster commerce layer — saddle/horses tack buy-boxes (dir-012 Layer 2)
- (6) Mediavine Journey staging — gated on Carlo confirm (dir-011)
- (7) Email lead-magnet sequences for audience-capture layer

Not idling. Picking up #4 immediately.
