/**
 * CarloOS Affiliate Configuration
 * Central registry for all affiliate programs across all 5 sites.
 *
 * Usage in ReviewCard:
 *   ctaAffiliateProgram="amazon"
 *   ctaAffiliateProduct="api-master-test-kit"
 *   ctaHref="https://amazon.com/s?k=api+master+test+kit"
 *
 * Affiliate links are added/tracked via the affiliateHref() helper below.
 */

export interface AffiliateProgram {
  name: string
  tag: string // Your affiliate/tracking tag
  baseUrl?: string
  commission: string // Rough commission range for reference
}

// ── Active affiliate programs ─────────────────────────────────────────────────
// Fill in your actual tags before going live.
// These are placeholders — get real tags from each program's dashboard.

export const AFFILIATE_PROGRAMS: Record<string, AffiliateProgram> = {
  amazon: {
    name: 'Amazon Associates',
    tag: 'carloOS-20', // Your Amazon Associates tag
    commission: '1–10% depending on category',
  },
  chewy: {
    name: 'Chewy Affiliate',
    tag: 'carloOS',
    baseUrl: 'https://chewy.com',
    commission: '4–10%',
  },
  trupanion: {
    name: 'Trupanion',
    tag: 'carloOS',
    commission: 'CPA flat rate',
  },
  'healthy-paws': {
    name: 'Healthy Paws',
    tag: 'carloOS',
    commission: 'CPA flat rate',
  },
  vetster: {
    name: 'Vetster',
    tag: 'carloOS',
    commission: 'CPA per consultation',
  },
  askvet: {
    name: 'AskVet',
    tag: 'carloOS',
    commission: 'CPA per signup',
  },
  sharesale: {
    name: 'ShareASale (saddle brands)',
    tag: 'carloOS',
    commission: '5–8%',
  },
}

// ── Amazon affiliate link builder ─────────────────────────────────────────────
export function amazonLink(asin: string): string {
  const tag = AFFILIATE_PROGRAMS.amazon.tag
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`
}

// ── Amazon search link builder ────────────────────────────────────────────────
export function amazonSearchLink(query: string): string {
  const tag = AFFILIATE_PROGRAMS.amazon.tag
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`
}

// ── Chewy affiliate link builder ──────────────────────────────────────────────
export function chewyLink(path: string): string {
  // Chewy affiliate parameters — update with actual sub-id from Impact dashboard
  return `https://www.chewy.com${path}?utm_source=carloOS&utm_medium=affiliate`
}

// ── Disclosure text (used in ReviewCard and footer) ───────────────────────────
export const AFFILIATE_DISCLOSURE = `This page contains affiliate links. If you purchase through our links, we earn a commission at no additional cost to you. Our editorial rankings are independent of affiliate relationships — see our Editorial Standards.`

export const AFFILIATE_DISCLOSURE_SHORT = `Contains affiliate links. Rankings are editorial.`

// ── Site-specific affiliate program priorities ─────────────────────────────────
export const SITE_PROGRAMS = {
  'dog-com': ['amazon', 'chewy', 'trupanion', 'healthy-paws'],
  'vets-co': ['trupanion', 'healthy-paws', 'vetster', 'askvet'],
  'fish-com': ['amazon', 'chewy'],
  'saddle-com': ['sharesale', 'amazon'],
  'lizard-com': ['amazon'],
} as const
