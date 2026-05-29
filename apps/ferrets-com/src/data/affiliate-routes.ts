/**
 * Ferrets.com — affiliate route registry.
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
  'adopt-a-pet': {
    name: 'Adopt-a-Pet',
    template: 'https://adoptapet.com/s/ferrets?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
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
