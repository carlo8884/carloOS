'use client'

import type { ReactNode } from 'react'
import { AffiliateDisclosure } from '@carloOS/ui'

interface ResultCTAProps {
  /** Short heading describing the next step, matched to the calculated result. */
  heading: string
  /** One line of context explaining why this next step follows from the result. */
  blurb: ReactNode
  /** Amazon search query (already human-readable — encoded internally). */
  query: string
  /** Button text. */
  cta: string
  /** Source slug for click attribution, e.g. 'tools-heater-wattage'. */
  source: string
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
export function ResultCTA({ heading, blurb, query, cta, source }: ResultCTAProps) {
  const href = `/go/amazon-brand/${encodeURIComponent(query)}?s=${encodeURIComponent(source)}`
  return (
    <div className="mt-3 rounded-lg border border-brand-border bg-brand-surface p-5">
      <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark mb-1">
        Next step
      </p>
      <p className="font-display text-base font-semibold text-brand-dark leading-snug">
        {heading}
      </p>
      <p className="mt-1 text-sm text-brand-text-mid leading-relaxed">{blurb}</p>
      <AffiliateDisclosure variant="inline" className="my-3" />
      <a
        href={href}
        rel="sponsored noopener"
        className="inline-block rounded bg-brand-dark px-4 py-2.5 text-sm font-bold text-white no-underline hover:opacity-90"
      >
        {cta} &rarr;
      </a>
    </div>
  )
}
