/**
 * Ferret.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (ferret-com row — Amazon,
 * Chewy, Marshall Pet Products, Wysong, Carniwhole).
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
  marshall: {
    // Network: ShareASale or Direct. Carlo-approved per policy §5.
    name: 'Marshall Pet Products',
    template: 'https://marshallpet.com/product/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  wysong: {
    // Network: Direct. Carlo-approved per policy §5.
    name: 'Wysong',
    template: 'https://wysong.net/product/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  // ─── Round-1 wiring 2026-05-30 (policy §5 ferret-com row addition) ───
  carniwhole: {
    // Network: Direct. Carlo-approved per policy §5 (ferret-com row —
    // Carniwhole is named alongside Marshall + Wysong).
    name: 'Carniwhole',
    template: 'https://carniwhole.com/products/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },

  // ─── Brand-search variants (2026-05-31) ─────────────────────────────────
  // Use these when the CTA targets a search results page (no specific SKU)
  // rather than a single product detail page. The `{sku}` slot carries the
  // search query (URL-encoded by the route handler). Mirrors the existing
  // amazon-brand / chewy-brand routes on dog-com, fish-com, saddle-com,
  // horses-com, and vets-co — enables /go-routed affiliate tag substitution
  // for the ferret-com care-page ReviewCards added 2026-05-31.
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
