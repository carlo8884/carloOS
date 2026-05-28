/**
 * CarloOS ArticleByline — editorial byline + published/updated dates.
 *
 * Renders attribution for an article: site editorial team, published date,
 * and (optionally) a last-updated date and a "Reviewed by" line. The
 * reviewedBy field MUST be a real editorial role — never a fabricated DVM
 * or other credential. The trust-guard CI enforces this.
 *
 * Schema note: this component pairs with the existing buildArticleSchema()
 * which already wires `author`, `datePublished`, and `dateModified` into
 * the page-level JSON-LD. ArticleByline is the user-visible counterpart.
 */

import type { CSSProperties } from 'react'

export interface ArticleBylineProps {
  /** Editorial team / site brand — e.g. "Dog.com Editorial" */
  siteName: string
  /** ISO string or Date — when the article was first published */
  publishedAt: Date | string
  /** ISO string or Date — when the article was last updated */
  updatedAt?: Date | string
  /** Reviewed-by role. NEVER fabricate credentials — see QC-STANDARDS.md */
  reviewedBy?: string
}

function formatDate(value: Date | string): string {
  const d = value instanceof Date ? value : new Date(value)
  if (isNaN(d.getTime())) return String(value)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function toIso(value: Date | string): string {
  const d = value instanceof Date ? value : new Date(value)
  if (isNaN(d.getTime())) return ''
  return d.toISOString()
}

export function ArticleByline({
  siteName,
  publishedAt,
  updatedAt,
  reviewedBy,
}: ArticleBylineProps) {
  const ruleStyle: CSSProperties = {
    borderTop: '1px solid var(--brand-border)',
    borderBottom: '1px solid var(--brand-border)',
  }

  return (
    <div
      className="my-6 py-4 flex flex-wrap items-center gap-x-6 gap-y-2"
      style={ruleStyle}
    >
      <div className="flex items-baseline gap-2">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
          By
        </span>
        <span className="text-sm font-semibold text-brand-text-dark">
          {siteName}
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
          Published
        </span>
        <time
          dateTime={toIso(publishedAt)}
          className="text-xs text-brand-text-mid"
        >
          {formatDate(publishedAt)}
        </time>
      </div>

      {updatedAt && (
        <div className="flex items-baseline gap-2">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
            Updated
          </span>
          <time
            dateTime={toIso(updatedAt)}
            className="text-xs text-brand-text-mid"
          >
            {formatDate(updatedAt)}
          </time>
        </div>
      )}

      {reviewedBy && (
        <div className="flex items-baseline gap-2">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
            Reviewed by
          </span>
          <span className="text-xs text-brand-text-mid">{reviewedBy}</span>
        </div>
      )}
    </div>
  )
}
