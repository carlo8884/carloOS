/**
 * CarloOS AffiliateLink — outbound monetization link.
 *
 * - Resolves a vendor key + optional target into a tracked URL via
 *   the central affiliate-vendors registry.
 * - Renders rel="sponsored nofollow noopener" and target="_blank"
 *   for FTC + SEO compliance.
 * - Emits a `cta_click` GA4 event when clicked, tagged with vendor +
 *   source path (read from window.location at click time).
 * - Accepts arbitrary children so the link can wrap a button, a card,
 *   or plain text.
 */

'use client'

import type { ReactNode } from 'react'
import { useCallback } from 'react'
import { AFFILIATE_VENDORS, type Vendor } from './affiliate-vendors'

interface AffiliateLinkProps {
  vendor: Vendor
  /** Optional path/ASIN/slug forwarded to the vendor's buildUrl. */
  target?: string
  /** Override the auto-built URL entirely (use for one-off destinations). */
  href?: string
  /** Editorial label for analytics (e.g. "homepage-hero", "lender-card"). */
  source?: string
  className?: string
  children: ReactNode
  /** Treated as click "label" in GA4 — defaults to children-as-string. */
  eventLabel?: string
}

export function AffiliateLink({
  vendor,
  target,
  href,
  source,
  className,
  children,
  eventLabel,
}: AffiliateLinkProps) {
  const entry = AFFILIATE_VENDORS[vendor]
  const resolvedHref = href ?? entry?.buildUrl(target) ?? '#'

  const onClick = useCallback(() => {
    if (typeof window === 'undefined') return
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
    if (typeof gtag === 'function') {
      gtag('event', 'affiliate_click', {
        vendor,
        source: source ?? window.location.pathname,
        label: eventLabel ?? (typeof children === 'string' ? children : vendor),
        category: entry?.category ?? 'general',
      })
    }
  }, [vendor, source, eventLabel, children, entry])

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="sponsored nofollow noopener"
      data-affiliate-vendor={vendor}
      data-affiliate-category={entry?.category}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
