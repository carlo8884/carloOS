'use client'

import type { ReactNode } from 'react'
import { AffiliateDisclosure } from '@carloOS/ui'

interface ResultCTAProps {
  /** Short heading describing the next step, matched to the calculated result. */
  heading: string
  /** One line of context explaining why this next step follows from the result. */
  blurb: ReactNode
  /**
   * Amazon search words, or an existing plus-form slug
   * (`python+water+changer`). Spaces and plus signs are separators.
   * Each token is encoded and rejoined with `+` so the hop matches the
   * locked ShopCtas queries (`%20` and `%2B` would not).
   */
  query: string
  /** Button text. */
  cta: string
  /** Source slug for click attribution, e.g. 'tools-heater-wattage'. */
  source: string
  /** On-site guide that matches this result. Omitted when the page has no guide yet. */
  guideHref?: string
  guideLabel?: string
}

/** Plus-form amazon-brand slug. Spaces and plus signs stay separators. */
export function amazonBrandSlug(query: string): string {
  return query
    .trim()
    .split(/[\s+]+/)
    .filter(Boolean)
    .map((token) => encodeURIComponent(token))
    .join('+')
}

/**
 * Result-based, intent-matched next-step CTA for Fish.com tools.
 *
 * Renders ONE tasteful product path AFTER a calculator produces a result.
 * Always paired with a subtle inline affiliate disclosure immediately above
 * the affiliate link (16 CFR Part 255 "clear and conspicuous"). Routes through
 * the existing /go/amazon-brand click-tracker — no new routes, no affiliate IDs
 * inline. Not a math input; purely a downstream suggestion.
 */
export function ResultCTA({ heading, blurb, query, cta, source, guideHref, guideLabel }: ResultCTAProps) {
  const href = `/go/amazon-brand/${amazonBrandSlug(query)}?s=${encodeURIComponent(source)}`
  return (
    <div className="mt-3 rounded-lg border border-brand-border bg-brand-surface p-5">
      <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark mb-1">
        Next step
      </p>
      <p className="font-display text-base font-semibold text-brand-dark leading-snug">
        {heading}
      </p>
      <p className="mt-1 text-sm text-brand-text-mid leading-relaxed">{blurb}</p>
      {guideHref && guideLabel ? (
        <p className="mt-2 text-sm">
          <a href={guideHref} className="inline-block max-w-full whitespace-normal text-left font-semibold text-brand-primary underline underline-offset-2">{guideLabel} →</a>
        </p>
      ) : null}
      <AffiliateDisclosure variant="inline" className="my-3" />
      <a
        href={href}
        rel="sponsored noopener"
        className="inline-block max-w-full whitespace-normal text-left rounded bg-brand-dark px-4 py-2.5 text-sm font-bold text-white no-underline hover:opacity-90"
      >
        {cta} &rarr;
      </a>
    </div>
  )
}
