/**
 * CarloOS AffiliateLink — outbound CTA with affiliate-program tracking.
 *
 * Renders an <a> with `rel="sponsored noopener noreferrer"`, target="_blank",
 * and data-* attributes that the GA4 event listener picks up to attribute
 * the outbound click to a specific affiliate program / product.
 *
 * Matches the existing ReviewCard data-program/data-product pattern so a
 * single analytics listener can track both surfaces.
 *
 * Architect S6 — monetization. Used by:
 *   - apps/dog-com/src/app/pet-insurance/breeds/[breed]/page.tsx
 *   - any new page needing an outbound affiliate CTA without a full ReviewCard.
 */

import type { ReactNode } from 'react'

export type AffiliateLinkVariant = 'primary' | 'secondary' | 'inline'

interface AffiliateLinkProps {
  href: string
  /** Affiliate program slug — e.g. 'trupanion', 'pumpkin-pet'. */
  program: string
  /** Product identifier within the program — e.g. 'dog-insurance'. */
  product?: string
  /** Source surface for analytics — e.g. 'breed-page-golden-retriever'. */
  source?: string
  variant?: AffiliateLinkVariant
  className?: string
  children: ReactNode
}

const VARIANT_STYLES: Record<AffiliateLinkVariant, string> = {
  primary:
    'inline-block bg-brand-primary text-white font-semibold px-6 py-3 rounded-md no-underline hover:bg-brand-primary-dark transition-colors',
  secondary:
    'inline-block bg-brand-surface border border-brand-border text-brand-dark font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-border/40 transition-colors',
  inline:
    'text-brand-primary font-semibold no-underline hover:underline',
}

export function AffiliateLink({
  href,
  program,
  product,
  source,
  variant = 'primary',
  className,
  children,
}: AffiliateLinkProps) {
  const styles = className ?? VARIANT_STYLES[variant]
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      data-affiliate="true"
      data-program={program}
      data-product={product}
      data-source={source}
      className={styles}
    >
      {children}
    </a>
  )
}
