/**
 * Horses.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (horses-com row — SmartPak,
 * Dover, Schneider, Riding Warehouse, Greenhawk, Adams Horse Supply, Amazon
 * + architect S17 Markel / Great American equine insurance lead gen).
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  smartpak: {
    // Network: ShareASale. Carlo-approved per policy §5 (equestrian).
    name: 'SmartPak',
    template: 'https://smartpakequine.com/pt/{sku}?cm_mmc=PLACEHOLDER',
    requiresSku: true,
  },
  dover: {
    // Network: ShareASale. Carlo-approved per policy §5 (equestrian).
    name: 'Dover Saddlery',
    template: 'https://doversaddlery.com/{sku}/p/?ref=PLACEHOLDER',
    requiresSku: true,
  },
  schneider: {
    // Network: ShareASale or Direct. Carlo-approved per policy §5.
    name: 'Schneiders Saddlery',
    template: 'https://sstack.com/{sku}.html?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  ridingwarehouse: {
    // Network: CJ Affiliate. Carlo-approved per policy §5.
    name: 'Riding Warehouse',
    template: 'https://ridingwarehouse.com/{sku}.html?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  greenhawk: {
    // Network: Awin or CJ. Carlo-approved per policy §5.
    name: 'Greenhawk',
    template: 'https://greenhawk.com/products/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
  // ─── Round-1 wiring 2026-05-30 (architect §5 equine list + S17) ───
  'adams-horse': {
    // Network: Direct (or ShareASale — verify on application). Carlo-approved
    // per policy §5 (architect §5 equine list).
    name: 'Adams Horse Supply',
    template: 'https://adamshorsesupply.com/products/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  markel: {
    // Network: Awin or direct insurance lead network. Carlo-approved per
    // policy §5 + architect S17 (equine insurance lead gen).
    name: 'Markel Equine Insurance',
    template: 'https://markel.com/insurance/equine?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'great-american': {
    // Network: Direct insurance lead network. Carlo-approved per policy §5
    // + architect S17 (equine insurance lead gen).
    name: 'Great American Equine Insurance',
    template: 'https://greatamericaninsurancegroup.com/equine?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── Brand-search variants (dir-019 — untracked-link sweep 2026-05-31) ───
  // Fallback route for ReviewCards that target a brand/category with no
  // direct affiliate program. The `{sku}` slot carries the URL-encoded
  // search query. Mirrors saddle-com / fish-com / lizard-com / dog-com.
  // NOTE: also added in PR #265; if both land, duplicate at rebase time
  // resolves cleanly (identical content).
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
