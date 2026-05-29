/**
 * AffiliateDisclosure — FTC-compliant affiliate disclosure banner.
 *
 * Per FTC 16 CFR Part 255 (the "Endorsement Guides"), any page that
 * contains affiliate links must clearly and conspicuously disclose the
 * material connection. SeniorPetPharmacy uses this component on every
 * condition, medication, insurance, and homepage view.
 *
 * Variants:
 *   banner   — full-width near top of page (default for condition pages)
 *   inline   — short text disclosure inside an article (paired with a CTA)
 *   compact  — small disclosure under a single product card
 */

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'inline' | 'compact'
  className?: string
}

export function AffiliateDisclosure({
  variant = 'banner',
  className = '',
}: AffiliateDisclosureProps) {
  if (variant === 'compact') {
    return (
      <p
        className={`text-2xs text-brand-text-light leading-relaxed ${className}`.trim()}
        role="note"
        aria-label="Affiliate disclosure"
      >
        Affiliate link — we may earn a commission at no extra cost to you.
      </p>
    )
  }

  if (variant === 'inline') {
    return (
      <p
        className={`text-xs text-brand-text-light italic border-l-2 border-brand-border pl-3 my-4 ${className}`.trim()}
        role="note"
        aria-label="Affiliate disclosure"
      >
        Some links on this page are affiliate links. If you purchase through
        them, SeniorPetPharmacy may earn a commission — at no extra cost to
        you. Editorial choices are independent of affiliate relationships.
      </p>
    )
  }

  // banner (default)
  return (
    <aside
      role="note"
      aria-label="Affiliate disclosure"
      className={`bg-brand-primary-pale border border-brand-border rounded-md px-4 py-3 mb-6 ${className}`.trim()}
    >
      <p className="text-xs text-brand-text-mid leading-relaxed">
        <strong className="text-brand-text-dark">Disclosure:</strong> This page
        contains affiliate links to Chewy Pharmacy, Amazon, and pet-insurance
        partners. If you purchase through these links, SeniorPetPharmacy may
        earn a commission at no additional cost to you. Editorial
        recommendations are independent of affiliate relationships, and the
        content on this page is not a substitute for the advice of a licensed
        veterinarian.
      </p>
    </aside>
  )
}
