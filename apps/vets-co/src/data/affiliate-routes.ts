/**
 * Vets.co — affiliate route registry.
 *
 * Vets.co is editorial-only on PRODUCTS. The only affiliate relationships
 * permitted are pet insurance networks. The click handler intentionally
 * does NOT register Amazon/Chewy/pet-store vendors here — any such request
 * will 404. See /disclosure for the full policy and
 * `ops/policies/bot-coordination.md` §5 (vets-co row: INSURANCE ONLY).
 *
 * Tracking IDs are PLACEHOLDER values today. The handler substitutes
 * `PLACEHOLDER` with `process.env.AFF_<VENDOR>_TAG` at request time (per
 * policy §6, rule 3). If the env var is unset, the redirect still works;
 * only the attribution tag is missing. See
 * `ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md`
 * for the application checklist and env-var swap list.
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  // ─── Pet insurance only (vets-co policy §5: INSURANCE ONLY) ───
  trupanion: {
    // Network: Impact. Carlo-approved per policy §5 (vets-co insurance only).
    name: 'Trupanion (Pet Insurance)',
    template: 'https://trupanion.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'healthy-paws': {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Healthy Paws (Pet Insurance)',
    template: 'https://healthypawspetinsurance.com/?affid=PLACEHOLDER&pid={sku}',
    requiresSku: false,
  },
  embrace: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Embrace (Pet Insurance)',
    template: 'https://embracepetinsurance.com/?source=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  lemonade: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Lemonade Pet (Pet Insurance)',
    template: 'https://lemonade.com/pet?affid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  pumpkin: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Pumpkin Pet Insurance',
    template: 'https://pumpkin.care/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  manypets: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'ManyPets (Pet Insurance)',
    template: 'https://manypets.com/us/?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  fetch: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Fetch by The Dodo (Pet Insurance)',
    template: 'https://fetchpet.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  spot: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Spot Pet Insurance',
    template: 'https://spotpetins.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  'pets-best': {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Pets Best (Pet Insurance)',
    template: 'https://petsbest.com/?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  aspca: {
    // Network: Direct (ASPCA / Crum & Forster). Carlo-approved per policy §5.
    name: 'ASPCA Pet Insurance',
    template: 'https://aspcapetinsurance.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  figo: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Figo Pet Insurance',
    template: 'https://figopetinsurance.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── Catch-all aggregator (pre-existing) ───
  impact: {
    name: 'Pet Insurance Network (Impact Radius)',
    template: 'https://impact.com/campaign-direct?advid=PLACEHOLDER&offerid={sku}',
    requiresSku: true,
  },

  // ─── Brand-search variants (D-013 — portfolio-wide leak fix) ─────────────
  'amazon-brand': {
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
    requiresSku: true,
  },
  'chewy-brand': {
    name: 'Chewy',
    template: 'https://chewy.com/s?query={sku}&utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },

}
