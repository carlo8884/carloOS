/**
 * CarloOS AffiliateDisclosure — FTC-compliant disclosure block.
 *
 * Renders an explicit, plain-language disclosure that affiliate/referral
 * compensation may be received and that rankings are editorial. Per FTC
 * .com Disclosures guidance the notice must be:
 *   - Clear and conspicuous
 *   - Near the relevant content
 *   - Not buried in fine print
 *
 * Wrap any page that contains AffiliateLink components with this.
 */

import type { ReactNode } from 'react'

interface AffiliateDisclosureProps {
  /** Variant — 'banner' floats at top of an article, 'inline' sits in-flow. */
  variant?: 'banner' | 'inline'
  /** Custom disclosure copy (defaults to FTC-standard text). */
  children?: ReactNode
}

const DEFAULT_COPY = `Disclosure: We earn referral fees when readers connect with lenders through our platform. Rankings are editorial and independent of compensation. This is informational content only — not legal, tax, or financial advice. Loan approval, terms, and rates are determined by each lender at their discretion.`

export function AffiliateDisclosure({
  variant = 'banner',
  children,
}: AffiliateDisclosureProps) {
  const copy = children ?? DEFAULT_COPY

  if (variant === 'inline') {
    return (
      <aside
        role="note"
        aria-label="Affiliate disclosure"
        className="my-6 border-l-4 border-brand-primary/60 bg-brand-primary-pale/50 px-4 py-3 text-xs leading-relaxed text-brand-text-mid"
      >
        <strong className="font-semibold text-brand-text-dark">Disclosure: </strong>
        {copy}
      </aside>
    )
  }

  return (
    <div
      role="note"
      aria-label="Affiliate disclosure"
      className="border-b border-brand-border bg-brand-surface px-container sm:px-container-sm py-3"
    >
      <p className="mx-auto max-w-3xl text-2xs leading-relaxed text-brand-text-mid">
        <strong className="font-semibold text-brand-text-dark">Disclosure: </strong>
        {copy}
      </p>
    </div>
  )
}
