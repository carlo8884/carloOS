/**
 * PetFood.com — affiliate route registry.
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
 * Editorial position (per /disclosure): we do not accept paid placements
 * from brands. The vendors below are retailers we send purchase clicks to.
 *
 * Per-site approved-vendor scope: see policy §5 (petfood-com row — Chewy,
 * Amazon, pet insurance for Rx-diet conversion + roadmap-added DTC food).
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  chewy: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
  trupanion: {
    // Network: Impact. Carlo-approved per policy §5 (Rx-diet pathway).
    name: 'Trupanion (Pet Insurance — prescription-diet pathway)',
    template: 'https://trupanion.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'healthy-paws': {
    // Network: Impact. Carlo-approved per policy §5 (Rx-diet pathway).
    name: 'Healthy Paws (Pet Insurance — prescription-diet pathway)',
    template: 'https://healthypawspetinsurance.com/?affid=PLACEHOLDER&pid={sku}',
    requiresSku: false,
  },
  // ─── Round-1 wiring 2026-05-30 (architect §5 DTC food + Rx-diet) ───
  lemonade: {
    // Network: Impact. Carlo-approved per policy §5 (Rx-diet pathway).
    name: 'Lemonade Pet (Pet Insurance — prescription-diet pathway)',
    template: 'https://lemonade.com/pet?affid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  ollie: {
    // Network: Impact. Carlo-approved per policy §5 (architect §5 DTC food).
    name: 'Ollie (Fresh Dog Food)',
    template: 'https://myollie.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  'spot-tango': {
    // Network: Impact. Carlo-approved per policy §5 (architect §5 DTC food).
    name: 'Spot & Tango',
    template: 'https://spotandtango.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  'farmers-dog': {
    // Network: Skimlinks (architect §5 — Farmer's Dog routed via Skimlinks).
    // Carlo-approved per policy §5 (architect §5 DTC food).
    name: "The Farmer's Dog",
    template: 'https://thefarmersdog.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },

  // ─── Brand-search variants (added 2026-05-30 per D-006 REVISED) ─────────
  // Used by /brands/* editorial evaluation pages to send purchase intent
  // to the retailer's brand search. Reader picks the specific product on
  // the retailer; we earn the affiliate commission on whatever they buy.
  // Editorially honest: we're not endorsing a specific SKU, we're surfacing
  // the brand on the retailer.
  'chewy-brand': {
    name: 'Chewy',
    template: 'https://chewy.com/s?query={sku}&utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  'amazon-brand': {
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
    requiresSku: true,
  },
}
