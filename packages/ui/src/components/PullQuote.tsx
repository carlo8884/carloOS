/**
 * CarloOS PullQuote — editorial callout for key sentences within articles.
 *
 * Three variants:
 *  - lead    : large display-font italic with decorative quotation mark;
 *              for hero / chapter-opening quotes.
 *  - inline  : medium serif italic with left brand-color rule;
 *              breaks article flow without dominating it.
 *  - sidebar : compact boxed quote intended for sidebar slots.
 *
 * Site-agnostic — themes via CSS variables (--brand-primary, --brand-dark,
 * --brand-border, --brand-text-mid). Uses font-display utility class for the
 * site's serif/display family.
 */

import type { CSSProperties } from 'react'

export interface PullQuoteProps {
  /** The quoted text (plain string for accessibility + semantic correctness) */
  quote: string
  /** Optional attribution shown in small caps below the quote */
  attribution?: string
  /** Optional URL — emitted as the <blockquote cite=""> attribute */
  cite?: string
  /** Visual variant */
  variant?: 'lead' | 'inline' | 'sidebar'
}

export function PullQuote({
  quote,
  attribution,
  cite,
  variant = 'inline',
}: PullQuoteProps) {
  if (variant === 'lead') {
    return (
      <figure className="my-10 max-w-3xl mx-auto text-center">
        <span
          aria-hidden="true"
          className="block font-display text-brand-primary leading-none mb-2 select-none"
          style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
        >
          &ldquo;
        </span>
        <blockquote
          cite={cite}
          className="m-0 font-display italic text-brand-dark leading-tight tracking-tight"
          style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
        >
          {quote}
        </blockquote>
        {attribution && (
          <figcaption className="mt-5 text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
            — {attribution}
          </figcaption>
        )}
      </figure>
    )
  }

  if (variant === 'sidebar') {
    return (
      <figure className="my-6 p-4 bg-brand-surface border border-brand-border rounded-lg">
        <blockquote
          cite={cite}
          className="m-0 font-display italic text-sm leading-relaxed text-brand-text-dark"
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        {attribution && (
          <figcaption className="mt-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
            {attribution}
          </figcaption>
        )}
      </figure>
    )
  }

  // inline (default)
  const borderStyle: CSSProperties = {
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'var(--brand-primary)',
  }
  return (
    <figure className="my-8 pl-6 py-2" style={borderStyle}>
      <blockquote
        cite={cite}
        className="m-0 font-display italic text-xl md:text-2xl leading-snug text-brand-dark"
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
          — {attribution}
        </figcaption>
      )}
    </figure>
  )
}
