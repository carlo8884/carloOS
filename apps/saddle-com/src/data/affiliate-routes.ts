/**
 * Saddle.com — affiliate route registry.
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
  smartpak: {
    name: 'SmartPak',
    template: 'https://smartpakequine.com/pt/{sku}?cm_mmc=PLACEHOLDER',
    requiresSku: true,
  },
  dover: {
    name: 'Dover Saddlery',
    template: 'https://doversaddlery.com/{sku}/p/?ref=PLACEHOLDER',
    requiresSku: true,
  },
  ridingwarehouse: {
    name: 'Riding Warehouse',
    template: 'https://ridingwarehouse.com/{sku}.html?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
}
