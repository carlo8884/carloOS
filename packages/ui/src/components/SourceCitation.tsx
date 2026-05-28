/**
 * CarloOS SourceCitation — inline source attribution for editorial claims.
 *
 * Two variants:
 *  - inline : superscript-style marker that links to a source listing at
 *             the bottom of the page. Hover reveals the source name.
 *  - block  : full source line for end-of-section citation listings
 *             (Author/Org · Year · Journal/URL).
 *
 * Surfaces citations more prominently than plain <a>, supporting the
 * citation-linking work being done across the health pages.
 */

import type { CSSProperties } from 'react'

export interface SourceCitationProps {
  /** Source name — e.g. "WSAVA Vaccination Guidelines" */
  source: string
  /** Optional URL. When present the citation is rendered as an anchor. */
  url?: string
  /** Optional publication year */
  year?: number
  /** Optional reference label/number for the inline variant */
  label?: string | number
  /** Visual variant */
  variant?: 'inline' | 'block'
}

export function SourceCitation({
  source,
  url,
  year,
  label,
  variant = 'inline',
}: SourceCitationProps) {
  if (variant === 'inline') {
    const display = label ?? source
    const title = year ? `${source} (${year})` : source
    const supStyle: CSSProperties = {
      fontSize: '0.65em',
      lineHeight: 0,
      verticalAlign: 'super',
    }

    const inner = (
      <sup
        style={supStyle}
        className="ml-0.5 font-bold text-brand-primary no-underline hover:underline"
        title={title}
      >
        [{display}]
      </sup>
    )

    if (url) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="no-underline"
          aria-label={`Source: ${title}`}
        >
          {inner}
        </a>
      )
    }
    return inner
  }

  // block variant — full source line
  const text = year ? `${source} (${year})` : source
  return (
    <div className="text-xs text-brand-text-light leading-relaxed py-2 border-t border-brand-border first:border-t-0">
      <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mr-2">
        Source
      </span>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-brand-text-mid hover:text-brand-primary"
        >
          {text}
        </a>
      ) : (
        <span className="text-brand-text-mid">{text}</span>
      )}
    </div>
  )
}
