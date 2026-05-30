/**
 * PetSupplies.com affiliate route registry.
 *
 * Monetization bot populates this with approved vendors per
 * MONETIZATION-ARCHITECT.md §5.6.  Tracking IDs are PLACEHOLDER until
 * the corresponding affiliate accounts are approved.
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {}
