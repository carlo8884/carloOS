/**
 * Fish.com — affiliate route registry.
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
  petco: {
    name: 'Petco',
    template: 'https://petco.com/shop/en/petcostore/product/{sku}?cid=PLACEHOLDER',
    requiresSku: true,
  },
  'petsmart': {
    name: 'PetSmart',
    template: 'https://petsmart.com/fish/{sku}.html?source=PLACEHOLDER',
    requiresSku: true,
  },
  // ─── Pre-approved per policy §5 (fish-com list: Amazon, Chewy,
  // MarineDepot, PetCo). Added 2026-05-30 for email sequences. ───
  marinedepot: {
    name: 'Marine Depot',
    template: 'https://marinedepot.com/?ref=PLACEHOLDER&sku={sku}',
    requiresSku: false,
  },
}
