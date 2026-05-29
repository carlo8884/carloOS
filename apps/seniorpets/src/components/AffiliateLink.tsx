/**
 * AffiliateLink — local SeniorPets affiliate routing component.
 *
 * Routes product / Rx links through the configured affiliate program with
 * proper rel attributes for FTC + SEO hygiene. Vendor map:
 *
 *   chewyrx       → chewy.com/rx (senior-pet pharmacy is the main funnel)
 *   chewy         → chewy.com/<path>
 *   amazon        → amazon.com/dp/<asin> or search
 *   petwellbeing  → petwellbeing.com/<path>
 *   nuvet         → nuvet.com/<path>
 *   trupanion     → trupanion via referral path
 *   petsbest      → petsbest via referral path
 *   embrace       → embracepetinsurance.com via referral path
 *   spot          → spotpet.com via referral path
 *   pumpkin       → pumpkin.care via referral path
 *
 * Every page that mounts an AffiliateLink MUST also include an
 * <AffiliateDisclosure> banner per FTC 16 CFR Part 255.
 *
 * Kept local to apps/seniorpets/src/components/ per the work-order
 * constraint "Do NOT modify shared packages except adding the new
 * seniorpets SiteId in @carloOS/config".
 */

import type { ReactNode } from 'react'

// ── Local affiliate program registry ─────────────────────────────────────
// Mirror of carloOS-wide tags. Replace with real tags before launch.
// Each value can be overridden by an environment variable for per-deploy keys.

const AFFILIATE_TAGS = {
  amazon: process.env.NEXT_PUBLIC_AMAZON_TAG ?? 'carloOS-20',
  chewy: process.env.NEXT_PUBLIC_CHEWY_TAG ?? 'carloOS',
  chewyrx: process.env.NEXT_PUBLIC_CHEWY_RX_TAG ?? 'carloOS',
  petwellbeing: process.env.NEXT_PUBLIC_PETWELLBEING_TAG ?? 'carloOS',
  nuvet: process.env.NEXT_PUBLIC_NUVET_TAG ?? 'carloOS',
  trupanion: process.env.NEXT_PUBLIC_TRUPANION_TAG ?? 'carloOS',
  petsbest: process.env.NEXT_PUBLIC_PETSBEST_TAG ?? 'carloOS',
  embrace: process.env.NEXT_PUBLIC_EMBRACE_TAG ?? 'carloOS',
  spot: process.env.NEXT_PUBLIC_SPOT_TAG ?? 'carloOS',
  pumpkin: process.env.NEXT_PUBLIC_PUMPKIN_TAG ?? 'carloOS',
} as const

export type AffiliateVendor = keyof typeof AFFILIATE_TAGS

export interface AffiliateLinkProps {
  vendor: AffiliateVendor
  /** Vendor product path (e.g. "/rx/adequan") */
  path?: string
  /** Amazon ASIN — convenience alias for vendor=amazon */
  asin?: string
  /** Amazon search query — convenience alias for vendor=amazon search */
  search?: string
  /** Override the visible URL (insurance partners with branded landing pages) */
  href?: string
  /** Source tag — appended as utm_content for finer attribution */
  source?: string
  /** Link text/children */
  children: ReactNode
  /** Render as inline link, button, or card */
  variant?: 'inline' | 'button' | 'card'
  className?: string
}

function appendSource(url: string, source?: string): string {
  if (!source) return url
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}utm_content=${encodeURIComponent(source)}`
}

function buildHref(props: AffiliateLinkProps): string {
  const { vendor, path, asin, search, href, source } = props
  if (href) return appendSource(href, source)

  const tag = AFFILIATE_TAGS[vendor]

  switch (vendor) {
    case 'amazon':
      if (asin) return appendSource(`https://www.amazon.com/dp/${asin}?tag=${tag}`, source)
      if (search) return appendSource(`https://www.amazon.com/s?k=${encodeURIComponent(search)}&tag=${tag}`, source)
      return appendSource(`https://www.amazon.com${path ?? ''}?tag=${tag}`, source)

    case 'chewyrx':
      return appendSource(
        `https://www.chewy.com${path ?? '/rx'}?utm_source=carloOS&utm_medium=affiliate&utm_campaign=seniorpets-rx&utm_id=${tag}`,
        source,
      )

    case 'chewy':
      return appendSource(
        `https://www.chewy.com${path ?? '/'}?utm_source=carloOS&utm_medium=affiliate&utm_campaign=seniorpets&utm_id=${tag}`,
        source,
      )

    case 'petwellbeing':
      return appendSource(`https://petwellbeing.com${path ?? '/'}?ref=${tag}`, source)

    case 'nuvet':
      return appendSource(`https://www.nuvet.com${path ?? '/'}?ref=${tag}`, source)

    case 'trupanion':
      return appendSource(
        `https://trupanion.com/?ref=${tag}${path ? `&p=${encodeURIComponent(path)}` : ''}`,
        source,
      )

    case 'petsbest':
      return appendSource(
        `https://www.petsbest.com/?ref=${tag}${path ? `&p=${encodeURIComponent(path)}` : ''}`,
        source,
      )

    case 'embrace':
      return appendSource(
        `https://www.embracepetinsurance.com/?ref=${tag}${path ? `&p=${encodeURIComponent(path)}` : ''}`,
        source,
      )

    case 'spot':
      return appendSource(
        `https://www.spotpet.com/?ref=${tag}${path ? `&p=${encodeURIComponent(path)}` : ''}`,
        source,
      )

    case 'pumpkin':
      return appendSource(
        `https://www.pumpkin.care/?ref=${tag}${path ? `&p=${encodeURIComponent(path)}` : ''}`,
        source,
      )

    default:
      return href ?? '#'
  }
}

export function AffiliateLink(props: AffiliateLinkProps) {
  const href = buildHref(props)
  const { variant = 'inline', className = '', children, vendor } = props

  const base =
    variant === 'button'
      ? 'inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-brand-white text-sm font-bold rounded-md no-underline hover:bg-brand-primary-light transition-colors'
      : variant === 'card'
      ? 'block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all'
      : 'text-brand-primary hover:underline font-medium'

  return (
    <a
      href={href}
      rel="sponsored noopener noreferrer"
      target="_blank"
      data-affiliate-vendor={vendor}
      className={`${base} ${className}`.trim()}
    >
      {children}
    </a>
  )
}
