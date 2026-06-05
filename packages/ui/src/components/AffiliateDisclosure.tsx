'use client'

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
import type { ReactNode } from 'react'
import type { SiteId } from '@carloOS/config'
import { AffiliateDisclosureContext } from './AffiliateLink'

export type AffiliateDisclosureVariant = 'inline' | 'footer' | 'page' | 'banner'

export interface AffiliateDisclosureProps {
  variant: AffiliateDisclosureVariant
  /** Optional — defaults to no-op for variants that don't need it. */
  siteId?: SiteId
  /** Optional override for the disclosure URL — defaults to /disclosure */
  href?: string
  /** Optional extra className for container */
  className?: string
  /**
   * Children wrap pattern: used by the 'banner' variant to render an
   * inline disclosure banner above page content in a single component.
   */
  children?: ReactNode
}

export function AffiliateDisclosure({
  variant,
  siteId: _siteId,
  href = '/disclosure',
  className,
  children,
}: AffiliateDisclosureProps) {
  if (variant === 'banner') {
    return (
      <AffiliateDisclosureContext.Provider value={{ disclosed: true }}>
        <aside
          role="note"
          aria-label="Affiliate disclosure"
          data-affiliate-disclosure="banner"
          className={[
            'px-container-sm sm:px-container py-2.5 bg-brand-primary-pale/60 border-b border-brand-border',
            'text-2xs leading-relaxed text-brand-text-mid',
            className ?? '',
          ].join(' ')}
        >
          <strong className="font-bold uppercase tracking-eyebrow text-brand-primary-dark mr-2">
            Disclosure
          </strong>
          Some links on this page are affiliate links — we may earn a commission at no extra cost to you. We never accept payment for favorable reviews.{' '}
          <Link href={href} className="font-semibold text-brand-primary hover:underline no-underline">
            Read more →
          </Link>
        </aside>
        {children}
      </AffiliateDisclosureContext.Provider>
    )
  }
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
    // Single subtle one-liner (Carlo phone review 2026-06-05): the sitewide
    // footer disclosure is intentionally ONE short muted line, not a
    // multi-sentence block. Copy stays generic so every site renders the same
    // unobtrusive line. The detailed policy lives on the /disclosure page.
    return (
      <p
        data-affiliate-disclosure="footer"
        className={[
          'mt-8 pt-6 border-t border-white/10 text-2xs text-white/45 leading-relaxed max-w-3xl',
          className ?? '',
        ].join(' ')}
      >
        Reader-supported &mdash; we may earn a commission from qualifying
        purchases.{' '}
        <Link
          href={href}
          className="text-white/70 hover:text-white hover:underline no-underline font-medium"
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
