/**
 * AffiliateDisclosure — FTC-compliant affiliate disclosure component.
 *
 * Every page that renders <AffiliateLink> MUST render this somewhere up
 * the React tree (preferably above the fold). Sets the
 * AffiliateDisclosureContext flag that AffiliateLink reads.
 *
 * Built per Architect Directive 2 / Constraint §6 (non-negotiable FTC).
 */

'use client'

import type { ReactNode } from 'react'
import { AffiliateDisclosureContext } from './AffiliateLink'

interface AffiliateDisclosureProps {
  /**
   * Variant: 'inline' renders a single line. 'banner' renders a
   * styled box. 'collapsed' renders a small chip with hover/click
   * expansion.
   */
  variant?: 'inline' | 'banner' | 'collapsed'

  /**
   * Optional override text. The default text is FTC-compliant out of
   * the box for the CarloOS portfolio.
   */
  text?: string

  /** Children render inside the disclosure provider's tree. */
  children: ReactNode

  /** Optional class override. */
  className?: string
}

const DEFAULT_TEXT =
  'This page contains affiliate links. We may earn a commission when ' +
  'you buy through links on this page, at no extra cost to you. Our ' +
  'editorial recommendations are independent — we never rank products ' +
  'based on commission rates. See our editorial standards.'

export function AffiliateDisclosure({
  variant = 'banner',
  text = DEFAULT_TEXT,
  children,
  className,
}: AffiliateDisclosureProps) {
  const baseClasses =
    variant === 'banner'
      ? 'mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900'
      : variant === 'inline'
        ? 'text-xs text-stone-600 italic'
        : 'inline-block rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700'

  return (
    <AffiliateDisclosureContext.Provider value={{ disclosed: true }}>
      <div
        role="note"
        aria-label="Affiliate disclosure"
        className={className ?? baseClasses}
      >
        <strong className="font-semibold">Disclosure:</strong> {text}
      </div>
      {children}
    </AffiliateDisclosureContext.Provider>
  )
}
