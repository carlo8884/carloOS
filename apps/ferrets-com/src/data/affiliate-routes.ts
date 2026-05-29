/**
 * Ferrets.com — affiliate route registry.
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
 * Per-site approved-vendor scope: see policy §5 (ferrets-com row —
 * Adopt-a-Pet referrals — ethical funnel, no commission — plus Marshall,
 * Wysong). Brief adds Amazon + Chewy for ferret-care content monetization
 * parity with ferret-com (architect S7 directory pattern).
 */

export interface AffiliateRoute {
  name: string
  template: string
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  'adopt-a-pet': {
    // Network: Direct (ethical funnel, no commission per policy §5
    // ferrets-com row — "not affiliate, ethical funnel"). Tracked for
    // attribution only.
    name: 'Adopt-a-Pet',
    template: 'https://adoptapet.com/s/ferrets?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
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
  // ─── Round-1 wiring 2026-05-30 (parity with ferret-com per brief
  // Step 2 ferrets-com row: Amazon, Chewy, Marshall, Wysong, Adopt-a-Pet) ───
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5 (general
    // ferret care goods; brief ferrets-com row adds Amazon).
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER-20',
    requiresSku: true,
  },
  chewy: {
    // Network: Impact. Carlo-approved per policy §5 (general ferret care
    // goods; brief ferrets-com row adds Chewy).
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
}
