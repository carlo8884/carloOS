/**
 * Fish.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (fish-com row — Amazon,
 * Chewy, MarineDepot, PetCo + roadmap-added Bulk Reef Supply, LiveAquaria,
 * PetSmart).
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
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
  chewy: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  petco: {
    // Network: CJ Affiliate. Carlo-approved per policy §5.
    name: 'Petco',
    template: 'https://petco.com/shop/en/petcostore/product/{sku}?cid=PLACEHOLDER',
    requiresSku: true,
  },
  'petsmart': {
    // Network: CJ Affiliate. Carlo-approved per policy §5
    // (generalist retailer for fish supplies).
    name: 'PetSmart',
    template: 'https://petsmart.com/fish/{sku}.html?source=PLACEHOLDER',
    requiresSku: true,
  },
  // ─── Pre-approved per policy §5 (fish-com list: Amazon, Chewy,
  // MarineDepot, PetCo). Added 2026-05-30 for email sequences. ───
  marinedepot: {
    // Network: Direct or ShareASale. Carlo-approved per policy §5.
    name: 'Marine Depot',
    template: 'https://marinedepot.com/?ref=PLACEHOLDER&sku={sku}',
    requiresSku: false,
  },
  // ─── Round-1 wiring 2026-05-30 (architect §5 aquarium list) ───
  'bulk-reef-supply': {
    // Network: ShareASale. Carlo-approved per policy §5
    // (architect §5 aquarium list).
    name: 'Bulk Reef Supply',
    template: 'https://bulkreefsupply.com/{sku}.html?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  liveaquaria: {
    // Network: ShareASale. Carlo-approved per policy §5
    // (architect §5 aquarium list).
    name: 'LiveAquaria',
    template: 'https://liveaquaria.com/product/prod_display.cfm?pcatid={sku}&afftrack=PLACEHOLDER',
    requiresSku: true,
  },
}
