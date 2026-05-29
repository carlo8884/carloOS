/**
 * Lizard.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (lizard-com row — Amazon,
 * Chewy, JoshsFrogs, BigAppleHerp, ReptileSupply).
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
  chewy: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  bigappleherp: {
    // Network: ShareASale. Carlo-approved per policy §5 (reptile specialty).
    name: 'Big Apple Herpetological',
    template: 'https://bigappleherp.com/product/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  joshsfrogs: {
    // Network: ShareASale. Carlo-approved per policy §5 (reptile / amphibian
    // specialty).
    name: "Josh's Frogs",
    template: 'https://joshsfrogs.com/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  reptilesupply: {
    // Network: ShareASale or Direct. Carlo-approved per policy §5
    // (reptile specialty).
    name: 'Reptile Supply Co',
    template: 'https://reptilesupply.com/products/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
}
