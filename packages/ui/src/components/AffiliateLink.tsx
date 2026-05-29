/**
 * CarloOS AffiliateLink — universal outbound CTA for affiliate vendors.
 *
 * Powers Architect S1 (Universal Comparison Engine) — every comparison
 * row, product grid, and "buy now" CTA across the portfolio resolves its
 * outbound URL through this component so we get:
 *   - Consistent tracking tags / sub-IDs per vendor
 *   - Centralized FTC compliance (rel attribute, sponsored marker)
 *   - One place to swap vendors when affiliate programs change
 *
 * SKUs:
 *   - amazon         → Amazon ASIN (10-char alphanumeric, e.g. B000FFI2L8)
 *                       OR a descriptive search string (falls back to /s?k=...)
 *   - chewy          → product URL path (must start with "/") or search params
 *                       starting with "/s?..."
 *   - bulkreefsupply → BRS product slug starting with "/products/..."
 *                       OR a descriptive search string
 *   - liveaquaria    → LiveAquaria product slug (no leading slash needed)
 *   - marinedepot    → product slug (legacy support; many redirects to BRS)
 */

import type { ReactNode } from 'react'

export type AffiliateVendor =
  | 'amazon'
  | 'chewy'
  | 'bulkreefsupply'
  | 'liveaquaria'
  | 'marinedepot'

interface AffiliateLinkProps {
  vendor: AffiliateVendor
  /** Vendor-specific product identifier — see header docstring for format. */
  sku: string
  /** Visible link text or child node(s). */
  children: ReactNode
  /**
   * Optional pass-through for sub-ID / campaign tag. Used to attribute
   * sales to specific landing pages (e.g. "species-german-blue-ram").
   */
  subId?: string
  /** Override styling. Default is a brand-primary button. */
  className?: string
  /** Render as a compact text link instead of a button. */
  variant?: 'button' | 'link'
}

const AMAZON_ASIN = /^[A-Z0-9]{10}$/

/**
 * Resolve the outbound URL for a vendor + SKU combination.
 * Exported separately so server components and sitemaps can reuse it.
 */
export function resolveAffiliateUrl(
  vendor: AffiliateVendor,
  sku: string,
  subId?: string,
): string {
  switch (vendor) {
    case 'amazon': {
      const tag = 'carloOS-20'
      if (AMAZON_ASIN.test(sku)) {
        const params = subId ? `?tag=${tag}&ascsubtag=${encodeURIComponent(subId)}` : `?tag=${tag}`
        return `https://www.amazon.com/dp/${sku}${params}`
      }
      // Treat as search term
      const params = new URLSearchParams({ k: sku, tag })
      if (subId) params.set('ascsubtag', subId)
      return `https://www.amazon.com/s?${params.toString()}`
    }

    case 'chewy': {
      // Chewy uses Impact Radius — we send through a tracked subdomain in
      // production. For now, fall back to a tagged direct URL.
      const utm = `utm_source=carloOS&utm_medium=affiliate${subId ? `&utm_campaign=${encodeURIComponent(subId)}` : ''}`
      if (sku.startsWith('/')) {
        return `https://www.chewy.com${sku}${sku.includes('?') ? '&' : '?'}${utm}`
      }
      return `https://www.chewy.com/s?query=${encodeURIComponent(sku)}&${utm}`
    }

    case 'bulkreefsupply': {
      const utm = `utm_source=carloOS&utm_medium=affiliate${subId ? `&utm_campaign=${encodeURIComponent(subId)}` : ''}`
      if (sku.startsWith('/')) {
        return `https://www.bulkreefsupply.com${sku}?${utm}`
      }
      return `https://www.bulkreefsupply.com/search?q=${encodeURIComponent(sku)}&${utm}`
    }

    case 'liveaquaria': {
      const utm = `utm_source=carloOS&utm_medium=affiliate${subId ? `&utm_campaign=${encodeURIComponent(subId)}` : ''}`
      // LiveAquaria uses a search page for arbitrary terms
      if (sku.startsWith('/')) {
        return `https://www.liveaquaria.com${sku}?${utm}`
      }
      return `https://www.liveaquaria.com/search?q=${encodeURIComponent(sku)}&${utm}`
    }

    case 'marinedepot': {
      // Marine Depot now redirects to Bulk Reef Supply for most products.
      const utm = `utm_source=carloOS&utm_medium=affiliate${subId ? `&utm_campaign=${encodeURIComponent(subId)}` : ''}`
      return `https://www.marinedepot.com/search?q=${encodeURIComponent(sku)}&${utm}`
    }

    default: {
      const exhaustive: never = vendor
      return exhaustive
    }
  }
}

const VENDOR_LABEL: Record<AffiliateVendor, string> = {
  amazon: 'Amazon',
  chewy: 'Chewy',
  bulkreefsupply: 'Bulk Reef Supply',
  liveaquaria: 'LiveAquaria',
  marinedepot: 'Marine Depot',
}

export function AffiliateLink({
  vendor,
  sku,
  children,
  subId,
  className,
  variant = 'button',
}: AffiliateLinkProps) {
  const href = resolveAffiliateUrl(vendor, sku, subId)

  const base =
    variant === 'button'
      ? 'inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-white text-xs font-bold rounded-md no-underline hover:bg-brand-primary-light transition-colors'
      : 'text-brand-primary text-sm font-semibold no-underline hover:underline'

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className ?? base}
      data-affiliate-vendor={vendor}
      data-affiliate-sub-id={subId}
    >
      {children}
      <span className="sr-only"> (affiliate link to {VENDOR_LABEL[vendor]})</span>
    </a>
  )
}

export function getVendorLabel(vendor: AffiliateVendor): string {
  return VENDOR_LABEL[vendor]
}
