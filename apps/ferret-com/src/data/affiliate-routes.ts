/**
 * Ferret.com — affiliate route registry.
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
  marshall: {
    name: 'Marshall Pet Products',
    template: 'https://marshallpet.com/product/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  wysong: {
    name: 'Wysong',
    template: 'https://wysong.net/product/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
}
