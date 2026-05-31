/**
 * CarloOS AffiliateDisclosure — FTC-compliant affiliate disclosure component.
 *
 * Renders one of three variants:
 *   - 'inline'  : compact above-the-fold banner for any page that contains
 *                 affiliate links. Designed to live just above the first
 *                 affiliate CTA (16 CFR Part 255 "clear and conspicuous").
 *   - 'footer'  : shorter copy used by the shared Footer component on every
 *                 page across the site (defense-in-depth disclosure).
 *   - 'page'    : longer paragraph for use on /disclosure pages themselves
 *                 or other long-form legal pages.
 *
 * Always links to `/disclosure` on the current site.
 *
 * Per QC §1: copy is identical across sites — we never accept payment for
 * favorable reviews. Per-site nuance (which affiliate programs we
 * participate in) lives on the /disclosure page, not in this banner.
 */

import Link from 'next/link'
import type { SiteId } from '@carloOS/config'

export type AffiliateDisclosureVariant = 'inline' | 'footer' | 'page'

export interface AffiliateDisclosureProps {
  variant: AffiliateDisclosureVariant
  siteId: SiteId
  /** Optional override for the disclosure URL — defaults to /disclosure */
  href?: string
  /** Optional extra className for container */
  className?: string
}

export function AffiliateDisclosure({
  variant,
  siteId: _siteId,
  href = '/disclosure',
  className,
}: AffiliateDisclosureProps) {
  if (variant === 'inline') {
    return (
      <aside
        role="note"
        aria-label="Affiliate disclosure"
        data-affiliate-disclosure="inline"
        className={[
          'my-4 px-4 py-3 border-l-4 border-brand-primary bg-brand-primary-pale/40 rounded-r',
          'text-xs leading-relaxed text-brand-text-dark',
          className ?? '',
        ].join(' ')}
      >
        <strong className="font-bold uppercase tracking-eyebrow text-2xs text-brand-primary-dark mr-2">
          Disclosure
        </strong>
        Some links on this page are affiliate links. We earn a commission if
        you click and buy, at no cost to you. We never accept payment for
        favorable reviews.{' '}
        <Link
          href={href}
          className="font-semibold text-brand-primary hover:underline no-underline"
        >
          Read our full disclosure &rarr;
        </Link>
      </aside>
    )
  }

  if (variant === 'footer') {
    return (
      <p
        data-affiliate-disclosure="footer"
        className={[
          'mt-8 pt-6 border-t border-white/10 text-xs text-white/65 leading-relaxed max-w-3xl',
          className ?? '',
        ].join(' ')}
      >
        Reader-supported. Affiliate links may earn a commission. We never
        accept payment for favorable reviews.{' '}
        <Link
          href={href}
          className="text-white hover:underline no-underline font-medium"
        >
          Disclosure &rarr;
        </Link>
      </p>
    )
  }

  // variant === 'page'
  return (
    <p
      data-affiliate-disclosure="page"
      className={[
        'text-sm text-brand-text-mid leading-relaxed',
        className ?? '',
      ].join(' ')}
    >
      Some links on this page are affiliate links. We earn a commission if
      you click and buy, at no cost to you. We never accept payment for
      favorable reviews, and our editorial rankings are decided before any
      affiliate link is ever added. For the full version of this policy,
      including the specific programs we participate in, see our{' '}
      <Link
        href={href}
        className="text-brand-primary hover:underline no-underline font-medium"
      >
        full disclosure
      </Link>
      .
    </p>
  )
}
