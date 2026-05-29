/**
 * Lizard.com — affiliate route registry.
 *
 * Vendor URL templates used by the /go/[vendor]/[sku] click-tracking handler.
 * Tracking IDs are PLACEHOLDER values today and will be populated once the
 * corresponding affiliate accounts are approved.
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  amazon: {
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
  chewy: {
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  bigappleherp: {
    name: 'Big Apple Herpetological',
    template: 'https://bigappleherp.com/product/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  joshsfrogs: {
    name: "Josh's Frogs",
    template: 'https://joshsfrogs.com/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  reptilesupply: {
    name: 'Reptile Supply Co',
    template: 'https://reptilesupply.com/products/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
}
