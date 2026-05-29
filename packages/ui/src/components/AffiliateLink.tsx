'use client'

/**
 * CarloOS AffiliateLink — single-source-of-truth outbound CTA for monetization routes.
 *
 * Wraps an <a> with affiliate tracking, GA4 event, rel=sponsored nofollow noopener,
 * and optional sub-id for attribution. Used by AskTheVet result page, ReviewCards,
 * and any other monetization route across the portfolio.
 *
 * Programs available: amazon, chewy, vetster, dutch, lemonade, pumpkin, manypets,
 * trupanion, healthy-paws, sharesale, askvet, directory.
 *
 * Usage:
 *   <AffiliateLink program="lemonade" href="https://lemonade.com/pet?ref=carloOS"
 *     subId="askthevet:triage-insurance">
 *     Compare Lemonade Pet Insurance →
 *   </AffiliateLink>
 */

import type { ReactNode } from 'react'

export type AffiliateProgram =
  | 'amazon'
  | 'chewy'
  | 'vetster'
  | 'dutch'
  | 'lemonade'
  | 'pumpkin'
  | 'manypets'
  | 'trupanion'
  | 'healthy-paws'
  | 'sharesale'
  | 'askvet'
  | 'directory'

interface AffiliateLinkProps {
  program: AffiliateProgram
  href: string
  children: ReactNode
  /** Sub-id for attribution: site:placement, e.g. "askthevet:triage-insurance" */
  subId?: string
  className?: string
  /** Visual style preset */
  variant?: 'button' | 'link' | 'card'
  /** Optional small badge text shown above the CTA (e.g. "Telehealth") */
  badge?: string
}

const DEFAULT_BTN =
  'inline-flex items-center justify-center px-5 py-3 rounded-md bg-brand-primary text-brand-white text-sm font-semibold hover:bg-brand-primary-light transition-colors no-underline'
const DEFAULT_CARD =
  'block p-5 rounded-lg border border-brand-border hover:border-brand-primary hover:shadow-md transition-all bg-brand-white no-underline text-brand-text-dark'
const DEFAULT_LINK = 'text-brand-primary underline hover:no-underline'

export function AffiliateLink({
  program,
  href,
  children,
  subId,
  className,
  variant = 'button',
  badge,
}: AffiliateLinkProps) {
  // Append sub-id if provided so the affiliate dashboard can attribute clicks.
  const finalHref = subId
    ? `${href}${href.includes('?') ? '&' : '?'}subid=${encodeURIComponent(subId)}`
    : href

  const baseClass =
    variant === 'card' ? DEFAULT_CARD : variant === 'link' ? DEFAULT_LINK : DEFAULT_BTN
  const finalClass = className ?? baseClass

  function handleClick() {
    if (typeof window === 'undefined') return
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (w.gtag) {
      w.gtag('event', 'affiliate_click', {
        program,
        sub_id: subId ?? '',
        outbound: true,
      })
    }
  }

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      data-affiliate={program}
      data-subid={subId ?? ''}
      onClick={handleClick}
      className={finalClass}
    >
      {badge && (
        <span className="block text-xs font-medium uppercase tracking-wide text-brand-text-light mb-1">
          {badge}
        </span>
      )}
      {children}
    </a>
  )
}

// ─── AffiliateDisclosure — FTC-compliant disclosure block ─────────────────────

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'inline' | 'footnote'
}

export function AffiliateDisclosure({ variant = 'inline' }: AffiliateDisclosureProps) {
  const text =
    'This page contains affiliate links. If you click and purchase, we may earn a commission at no extra cost to you. This never influences our triage guidance. See our Editorial Standards.'

  if (variant === 'banner') {
    return (
      <div className="w-full bg-brand-primary-pale border-b border-brand-border text-brand-text-mid text-xs py-2 px-4 text-center">
        {text}
      </div>
    )
  }

  if (variant === 'footnote') {
    return (
      <p className="text-xs text-brand-text-light italic mt-4">{text}</p>
    )
  }

  return (
    <div className="rounded-md border border-brand-border bg-brand-surface px-4 py-3 text-xs text-brand-text-mid">
      {text}
    </div>
  )
}
