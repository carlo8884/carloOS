/**
 * Dog.com — affiliate route registry.
 *
 * Vendor URL templates used by the /go/[vendor]/[sku] click-tracking handler.
 *
 * The tracking IDs are PLACEHOLDER values today. They will be populated once
 * the corresponding affiliate accounts are approved. The click handler still
 * works with PLACEHOLDER — the redirect lands on the destination, the tag
 * just hasn't been activated yet.
 */

export interface AffiliateRoute {
  /** Human-readable vendor name */
  name: string
  /** URL template — `{sku}` is replaced with the route param */
  template: string
  /** Whether the vendor requires a non-empty SKU to redirect */
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
  trupanion: {
    name: 'Trupanion (Pet Insurance)',
    template: 'https://trupanion.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'healthy-paws': {
    name: 'Healthy Paws (Pet Insurance)',
    template: 'https://healthypawspetinsurance.com/?affid=PLACEHOLDER&pid={sku}',
    requiresSku: false,
  },
  impact: {
    name: 'Pet Insurance Network (Impact Radius)',
    template: 'https://impact.com/campaign-direct?advid=PLACEHOLDER&offerid={sku}',
    requiresSku: true,
  },
  awin: {
    name: 'Pet Insurance Network (Awin)',
    template: 'https://www.awin1.com/cread.php?awinmid=PLACEHOLDER&awinaffid=PLACEHOLDER&p={sku}',
    requiresSku: true,
  },
}
