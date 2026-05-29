/**
 * CarloOS — Affiliate Vendor Registry
 *
 * Single source of truth for outbound affiliate URL construction.
 * Each vendor specifies:
 *   - canonical name (display)
 *   - category (pet | finance | hard-money | ...)
 *   - buildUrl(target?) — receives an optional path/sku/lender slug and returns
 *     a fully-formed tracked URL.
 *
 * The link itself is rendered by <AffiliateLink>. UTM/source defaults are
 * applied here so the calling code never has to know vendor-specific params.
 *
 * NOTE — tags are placeholders, sourced from server-side env vars at runtime
 * through process.env. Never expose real tags in code.
 */

export type AffiliateCategory =
  | 'pet'
  | 'aquatic'
  | 'equestrian'
  | 'reptile'
  | 'insurance'
  | 'general'
  | 'hard-money'

export type Vendor =
  // Existing programs (placeholder pet vendors — extend as needed)
  | 'amazon'
  | 'chewy'
  | 'trupanion'
  | 'healthy-paws'
  | 'vetster'
  // S11 — Hard money lender marketplace
  | 'kiavi'
  | 'rcncapital'
  | 'limaone'
  | 'anchorloans'
  | 'groundfloor'
  | 'crosscountry'
  | 'jetlending'
  | 'civicfinancial'

export interface VendorEntry {
  name: string
  category: AffiliateCategory
  /** Build an outbound URL. `target` is an optional product slug, ASIN, or path. */
  buildUrl: (target?: string) => string
  /** Human-readable trust signal (e.g. licensing note). */
  note?: string
}

// ── Env helpers ────────────────────────────────────────────────────────────────
// Server-rendered, so env vars are read at request time.

const tag = (k: string, fallback = 'carloOS'): string =>
  (typeof process !== 'undefined' && process.env?.[k]) || fallback

const utmBase = (source: string, vendorKey: string): string => {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: 'affiliate',
    utm_campaign: vendorKey,
  })
  return params.toString()
}

const withQuery = (url: string, query: string): string =>
  url.includes('?') ? `${url}&${query}` : `${url}?${query}`

// ── Registry ──────────────────────────────────────────────────────────────────

export const AFFILIATE_VENDORS: Record<Vendor, VendorEntry> = {
  amazon: {
    name: 'Amazon',
    category: 'pet',
    buildUrl: (asinOrQuery) => {
      const t = tag('AFF_AMAZON_TAG', 'carloOS-20')
      if (!asinOrQuery) return `https://www.amazon.com/?tag=${t}`
      if (/^[A-Z0-9]{10}$/.test(asinOrQuery)) {
        return `https://www.amazon.com/dp/${asinOrQuery}?tag=${t}`
      }
      return `https://www.amazon.com/s?k=${encodeURIComponent(asinOrQuery)}&tag=${t}`
    },
  },
  chewy: {
    name: 'Chewy',
    category: 'pet',
    buildUrl: (path = '/') =>
      withQuery(`https://www.chewy.com${path.startsWith('/') ? path : `/${path}`}`, utmBase('hardmoneyloans', 'chewy')),
  },
  trupanion: {
    name: 'Trupanion',
    category: 'insurance',
    buildUrl: () => withQuery('https://trupanion.com/get-quote', utmBase('carloOS', 'trupanion')),
  },
  'healthy-paws': {
    name: 'Healthy Paws',
    category: 'insurance',
    buildUrl: () => withQuery('https://www.healthypawspetinsurance.com/', utmBase('carloOS', 'healthy-paws')),
  },
  vetster: {
    name: 'Vetster',
    category: 'insurance',
    buildUrl: () => withQuery('https://vetster.com/', utmBase('carloOS', 'vetster')),
  },

  // ── S11 — Hard Money Lender Vendors ─────────────────────────────────────────

  kiavi: {
    name: 'Kiavi',
    category: 'hard-money',
    note: 'Licensed in 32+ states; DSCR + bridge specialist for SFR investors.',
    buildUrl: (lenderPath = '/apply') => {
      const ref = tag('AFF_KIAVI_TAG')
      return withQuery(
        `https://www.kiavi.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'kiavi')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  rcncapital: {
    name: 'RCN Capital',
    category: 'hard-money',
    note: 'Nationwide hard money for fix-and-flip, new construction, and rentals.',
    buildUrl: (lenderPath = '/apply') => {
      const ref = tag('AFF_RCN_TAG')
      return withQuery(
        `https://www.rcncapital.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'rcncapital')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  limaone: {
    name: 'Lima One Capital',
    category: 'hard-money',
    note: 'Full-suite investor lender: FixNFlip, NewConstruction, Rental30.',
    buildUrl: (lenderPath = '/apply-now/') => {
      const ref = tag('AFF_LIMAONE_TAG')
      return withQuery(
        `https://www.limaone.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'limaone')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  anchorloans: {
    name: 'Anchor Loans',
    category: 'hard-money',
    note: 'One of the longest-tenured fix-and-flip lenders in the US.',
    buildUrl: (lenderPath = '/get-started') => {
      const ref = tag('AFF_ANCHOR_TAG')
      return withQuery(
        `https://www.anchorloans.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'anchorloans')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  groundfloor: {
    name: 'Groundfloor',
    category: 'hard-money',
    note: 'Specializes in residential 1-4 unit fix-and-flip loans.',
    buildUrl: (lenderPath = '/borrow') => {
      const ref = tag('AFF_GROUNDFLOOR_TAG')
      return withQuery(
        `https://www.groundfloor.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'groundfloor')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  crosscountry: {
    name: 'CrossCountry Mortgage',
    category: 'hard-money',
    note: 'Conventional + investor-focused non-QM and bridge products.',
    buildUrl: (lenderPath = '/loan-options/') => {
      const ref = tag('AFF_CROSSCOUNTRY_TAG')
      return withQuery(
        `https://crosscountrymortgage.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'crosscountry')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  jetlending: {
    name: 'Jet Lending',
    category: 'hard-money',
    note: 'Texas-focused fix-and-flip with expanded multi-state coverage.',
    buildUrl: (lenderPath = '/apply') => {
      const ref = tag('AFF_JETLENDING_TAG')
      return withQuery(
        `https://jetlending.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'jetlending')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
  civicfinancial: {
    name: 'Civic Financial Services',
    category: 'hard-money',
    note: 'PacWest-acquired; bridge, ground-up, and DSCR for non-owner.',
    buildUrl: (lenderPath = '/apply-now/') => {
      const ref = tag('AFF_CIVIC_TAG')
      return withQuery(
        `https://www.civicfs.com${lenderPath.startsWith('/') ? lenderPath : `/${lenderPath}`}`,
        `${utmBase('hardmoneyloans', 'civicfinancial')}&ref=${encodeURIComponent(ref)}`,
      )
    },
  },
}

/** Convenience: list vendors filtered by category. */
export function listVendorsByCategory(category: AffiliateCategory): Array<Vendor> {
  return (Object.keys(AFFILIATE_VENDORS) as Vendor[]).filter(
    (v) => AFFILIATE_VENDORS[v].category === category,
  )
}
