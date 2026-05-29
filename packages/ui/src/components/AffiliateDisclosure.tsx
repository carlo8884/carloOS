/**
 * CarloOS AffiliateDisclosure — FTC-compliant disclosure banner.
 *
 * The Footer renders the long-form portfolio-wide disclosure. This component
 * is for in-page placement on monetized landing pages (e.g. the pet-insurance
 * breed pages) where FTC guidance requires the disclosure to appear above
 * the first affiliate link, not buried in the footer.
 *
 * Two variants:
 *   - banner: full-width banner at the top of the article body
 *   - inline: tight inline note placed near a CTA
 */

export type AffiliateDisclosureVariant = 'banner' | 'inline'

interface AffiliateDisclosureProps {
  variant?: AffiliateDisclosureVariant
  /** Optional context word — e.g. 'pet insurance', 'DNA test'. */
  category?: string
}

export function AffiliateDisclosure({
  variant = 'banner',
  category,
}: AffiliateDisclosureProps) {
  const subject = category ? `${category} carriers` : 'companies'
  const body =
    `Dog.com is reader-supported. When you buy through links on this page we may earn a commission ` +
    `from the ${subject} we recommend. This does not influence our editorial picks — recommendations ` +
    `are based on documented policy specs, not commission rates.`

  if (variant === 'inline') {
    return (
      <p className="text-xs text-brand-text-light italic m-0">
        <strong className="not-italic">Affiliate disclosure:</strong> {body}
      </p>
    )
  }

  return (
    <div
      role="note"
      aria-label="Affiliate disclosure"
      className="bg-brand-surface border border-brand-border rounded-lg px-5 py-3 mb-6"
    >
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
        Affiliate Disclosure
      </div>
      <p className="text-xs text-brand-text-mid leading-relaxed m-0">{body}</p>
    </div>
  )
}
