/**
 * Vets.co — affiliate route registry.
 *
 * Vets.co is editorial-only on PRODUCTS. The only affiliate relationships
 * permitted are pet insurance networks. The click handler intentionally
 * does NOT register Amazon/Chewy/pet-store vendors here — any such request
 * will 404. See /disclosure for the full policy.
 *
 * Tracking IDs are PLACEHOLDER values today and will be populated once the
 * corresponding affiliate accounts are approved.
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
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
  embrace: {
    name: 'Embrace (Pet Insurance)',
    template: 'https://embracepetinsurance.com/?source=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  lemonade: {
    name: 'Lemonade Pet (Pet Insurance)',
    template: 'https://lemonade.com/pet?affid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  impact: {
    name: 'Pet Insurance Network (Impact Radius)',
    template: 'https://impact.com/campaign-direct?advid=PLACEHOLDER&offerid={sku}',
    requiresSku: true,
  },
}
