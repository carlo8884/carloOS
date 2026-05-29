/**
 * CarloOS AffiliateDisclosure — FTC-compliant affiliate disclosure component.
 *
 * Required by FTC 16 CFR Part 255 ("Endorsements") to be placed *above*
 * affiliate links — not in the footer. Three variants for different page
 * positions:
 *   - banner   : full-width strip at the top of a landing page
 *   - inline   : short notice placed directly above a product grid
 *   - footnote : compact footer notice for short articles
 *
 * Single source of truth for the disclosure text — never inline the FTC
 * wording in page code, always use this component.
 */

import { AFFILIATE_DISCLOSURE, AFFILIATE_DISCLOSURE_SHORT } from '@carloOS/config'

type DisclosureVariant = 'banner' | 'inline' | 'footnote'

interface AffiliateDisclosureProps {
  variant?: DisclosureVariant
  /**
   * Optional custom intro line (e.g. "Some links below may earn us a
   * commission."). The full FTC disclosure is appended automatically.
   */
  intro?: string
  className?: string
}

export function AffiliateDisclosure({
  variant = 'banner',
  intro,
  className,
}: AffiliateDisclosureProps) {
  if (variant === 'banner') {
    return (
      <div
        role="note"
        aria-label="Affiliate disclosure"
        className={
          className ??
          'bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-2.5'
        }
      >
        <p className="text-2xs text-brand-text-mid leading-relaxed max-w-3xl">
          <strong className="font-bold">Disclosure: </strong>
          {intro ? `${intro} ` : ''}
          {AFFILIATE_DISCLOSURE}
        </p>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <p
        role="note"
        aria-label="Affiliate disclosure"
        className={
          className ??
          'text-2xs text-brand-text-light italic mb-3 leading-relaxed'
        }
      >
        {intro ? `${intro} ` : ''}
        {AFFILIATE_DISCLOSURE_SHORT}
      </p>
    )
  }

  return (
    <p
      role="note"
      aria-label="Affiliate disclosure"
      className={
        className ??
        'text-2xs text-brand-text-light leading-relaxed border-t border-brand-border pt-3 mt-6'
      }
    >
      <strong>FTC Disclosure: </strong>
      {AFFILIATE_DISCLOSURE}
    </p>
  )
}
