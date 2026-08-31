/**
 * CarloOS ReviewCard — product/service review card component.
 * Used on comparison pages (best pet insurance, best dog food, saddle reviews, etc.)
 *
 * Supports: score badge, spec grid, pros/cons, affiliate CTA, winner highlight.
 */

import type { ReactNode } from 'react'

interface Spec {
  label: string
  value: string
  highlight?: 'good' | 'warn' | 'bad'
}

interface ReviewCardProps {
  /** "Best Overall", "Best Value", etc. */
  badge?: string
  badgeEmoji?: string
  name: string
  subtitle?: string

  /** Score out of 10 */
  score: number

  description: ReactNode

  specs?: Spec[]
  pros?: string[]
  cons?: string[]

  priceLabel?: string
  price?: string
  priceNote?: string

  ctaText?: string
  ctaHref?: string
  ctaAffiliateProgram?: string
  ctaAffiliateProduct?: string

  /** Editorial/non-commercial CTA (e.g. clinical product → /find-a-vet). Suppresses the
   *  affiliate commission note, sponsored rel, and affiliate data-attrs. Use for QC §1.5.b
   *  clinical/medicated products that must NOT present as monetized buy-boxes. */
  editorial?: boolean

  /** Highlights the card with primary color top border */
  winner?: boolean

  /** Anchor ID for jump links */
  id?: string
}

export function ReviewCard({
  badge,
  badgeEmoji,
  name,
  subtitle,
  score,
  description,
  specs,
  pros,
  cons,
  priceLabel = 'Price Range',
  price,
  priceNote,
  ctaText = 'Check Price →',
  ctaHref,
  ctaAffiliateProgram,
  ctaAffiliateProduct,
  editorial,
  winner = false,
  id,
}: ReviewCardProps) {
  const href = ctaHref && ctaHref !== '#' ? ctaHref : undefined
  return (
    <div
      id={id}
      data-review-card={winner ? 'winner' : 'standard'}
      className={[
        'bg-brand-white border border-brand-border rounded-lg p-8 mb-6',
        'transition-shadow duration-200 hover:shadow-card-hover',
        winner ? 'border-t-[3px] border-t-brand-primary' : '',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-5 mb-5">
        <div className="flex-1 min-w-0">
          {badge && (
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              {badgeEmoji} {badge}
            </div>
          )}
          <h3 className="font-display text-2xl font-black text-brand-dark tracking-tight mb-1">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs text-brand-text-light mt-1">{subtitle}</p>
          )}
        </div>

        {/* Score */}
        <div className="text-center bg-brand-surface rounded-lg px-4 py-3 flex-shrink-0">
          <span className="font-display text-4xl font-bold text-brand-primary leading-none block">
            {score.toFixed(1)}
          </span>
          <span className="text-2xs text-brand-text-light mt-1 block">Editor Score</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-base text-brand-text-mid leading-relaxed mb-5">
        {description}
      </div>

      {/* Specs grid */}
      {specs && specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {specs.map((spec, i) => (
            <div key={i} className="bg-brand-surface rounded px-3 py-2.5">
              <div className="text-2xs font-bold tracking-wider uppercase text-brand-text-light mb-1">
                {spec.label}
              </div>
              <div className={[
                'text-xs font-bold',
                spec.highlight === 'good' ? 'text-brand-success' : '',
                spec.highlight === 'warn' ? 'text-brand-warning' : '',
                spec.highlight === 'bad' ? 'text-brand-danger' : '',
                !spec.highlight ? 'text-brand-dark' : '',
              ].join(' ')}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pros / Cons */}
      {(pros || cons) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {pros && pros.length > 0 && (
            <div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-success mb-2">
                Strengths
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                {pros.map((p, i) => (
                  <li key={i} className="text-xs text-brand-text-mid flex gap-2">
                    <span className="text-brand-success font-bold flex-shrink-0">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cons && cons.length > 0 && (
            <div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
                Weaknesses
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                {cons.map((c, i) => (
                  <li key={i} className="text-xs text-brand-text-mid flex gap-2">
                    <span className="text-brand-danger font-bold flex-shrink-0">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Footer: price + CTA */}
      {(price || href) && (
        <div className="flex items-end justify-between pt-5 border-t border-brand-border mt-2 gap-4 flex-wrap">
          {price && (
            <div>
              <div className="text-2xs uppercase tracking-wide text-brand-text-light mb-1">
                {priceLabel}
              </div>
              <div className="font-display text-xl font-bold text-brand-dark">{price}</div>
              {priceNote && (
                <div className="text-2xs text-brand-text-light mt-1">{priceNote}</div>
              )}
            </div>
          )}

          {href && (
            <a
              href={href}
              className="inline-flex items-center bg-brand-primary text-brand-white text-sm font-bold px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200 flex-shrink-0 whitespace-nowrap"
              data-program={editorial ? undefined : ctaAffiliateProgram}
              data-product={editorial ? undefined : ctaAffiliateProduct}
              rel={editorial ? undefined : 'nofollow sponsored'}
              target={editorial ? undefined : '_blank'}
            >
              {ctaText}
            </a>
          )}
        </div>
      )}

      {/* Affiliate note — suppressed for editorial (non-commercial) CTAs, e.g. clinical products */}
      {href && !editorial && (
        <p className="text-2xs text-brand-text-light mt-2">
          We earn a commission if you purchase — no extra cost to you.
        </p>
      )}
    </div>
  )
}

// ─── Review Page Quick Picks ──────────────────────────────────────────────────

interface QuickPickItem {
  label: string
  emoji?: string
  name: string
  subtitle?: string
  href: string
}

interface QuickPicksProps {
  items: QuickPickItem[]
  title?: string
}

export function QuickPicks({ items, title = 'Jump to Your Pick' }: QuickPicksProps) {
  return (
    <div className="bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-5">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
        {title}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block bg-brand-white border border-brand-border rounded-lg p-3.5 no-underline hover:border-brand-primary transition-colors duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              {item.emoji} {item.label}
            </div>
            <div className="text-sm font-bold text-brand-dark mb-0.5">{item.name}</div>
            {item.subtitle && (
              <div className="text-xs text-brand-text-light">{item.subtitle}</div>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
