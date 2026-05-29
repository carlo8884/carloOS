/**
 * PetFoods.com — affiliate route registry.
 *
 * Vendor URL templates used by the /go/[vendor]/[sku] click-tracking handler.
 *
 * Tracking IDs are PLACEHOLDER values today. The handler substitutes
 * `PLACEHOLDER` with `process.env.AFF_<VENDOR>_TAG` at request time (per
 * `ops/policies/bot-coordination.md` §6, rule 3). If the env var is unset,
 * the redirect still works; only the attribution tag is missing. See
 * `ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md`
 * for the application checklist and env-var swap list.
 *
 * Editorial position (per /disclosure): we do not accept paid placements
 * from brands. The vendors below are retailers we send purchase clicks to.
 *
 * Per-site approved-vendor scope: see policy §5 (petfoods-com row — Chewy,
 * Amazon). Narrow vendor set is intentional — petfoods-com is the catalog /
 * database face; PetFood.com is the consumer-facing editorial face. Adding
 * vendors here risks cannibalizing PetFood.com (architect roadmap §1.6).
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  chewy: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
}
