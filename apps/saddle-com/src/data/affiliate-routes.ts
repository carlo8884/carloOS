/**
 * Saddle.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (saddle-com row — SmartPak,
 * Dover, Riding Warehouse, Schneider, Greenhawk, State Line Tack, Big Dee's
 * Tack, Amazon).
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
  ridingwarehouse: {
    // Network: CJ Affiliate. Carlo-approved per policy §5 (equestrian).
    name: 'Riding Warehouse',
    template: 'https://ridingwarehouse.com/{sku}.html?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5 (equestrian
    // catch-all).
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
  // ─── Round-1 wiring 2026-05-30 (architect §5 equine list) ───
  schneider: {
    // Network: ShareASale or Direct. Carlo-approved per policy §5
    // (architect §5 equine list).
    name: 'Schneiders Saddlery',
    template: 'https://sstack.com/{sku}.html?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  greenhawk: {
    // Network: Awin or CJ (verify on application). Carlo-approved per policy
    // §5 (architect §5 equine list).
    name: 'Greenhawk',
    template: 'https://greenhawk.com/products/{sku}?ref=PLACEHOLDER',
    requiresSku: true,
  },
  statelinetack: {
    // Network: CJ Affiliate. Carlo-approved per policy §5
    // (architect §5 equine list).
    name: 'State Line Tack',
    template: 'https://statelinetack.com/item/{sku}?cjevent=PLACEHOLDER',
    requiresSku: true,
  },
  bigdees: {
    // Network: ShareASale or Direct. Carlo-approved per policy §5
    // (architect §5 equine list).
    name: "Big Dee's Tack",
    template: 'https://bigdweb.com/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
}
