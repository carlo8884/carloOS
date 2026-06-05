/**
 * CarloOS EditorialStandardsSignal — article-footer "living publication" trust strip.
 *
 * A small, muted, bordered strip rendered at the end of editorial articles
 * (above the related-links footer) to surface the publication's identity and
 * editorial process to readers, acquirers, and AI crawlers. Matches the
 * "article-level editorial signal" requirement from the editorial-system spec
 * (ops/handoffs/2026-06-05-visual-coo-editorial-system-spec.md §5).
 *
 * Trust-bar contract (QC-STANDARDS.md §1):
 *   - siteName MUST be "{SiteName} Editorial" — never a personal name or credential.
 *   - Default copy uses "researched from cited sources" — no fabricated DVM/expert claims.
 *   - standardsHref links to /editorial-standards (per-site binding page).
 *   - updatedAt shows real content freshness — do not supply a future date.
 *
 * Idiom notes:
 *   - Uses brand CSS custom properties (--brand-border, --brand-text-light,
 *     --brand-text-mid, --brand-primary, --brand-surface) consistent with
 *     ArticleByline, SourceCitation, and ArticleSourcesList.
 *   - Text is strictly ASCII (no curly quotes, no em-dashes in JSX props).
 *   - Accessible: wraps in <aside> with aria-label so screen readers can skip.
 *
 * Usage:
 *   <EditorialStandardsSignal
 *     siteName="Dog.com Editorial"
 *     updatedAt="2025-05-01"
 *   />
 *
 *   <EditorialStandardsSignal
 *     siteName="Vets.co Editorial"
 *     updatedAt="2026-03-15"
 *     standardsHref="/editorial-standards"
 *   />
 *
 * Spec: ops/handoffs/2026-06-05-visual-coo-editorial-system-spec.md §0 + §5
 */

import type { CSSProperties } from 'react'

export interface EditorialStandardsSignalProps {
  /**
   * Editorial team / site brand — e.g. "Dog.com Editorial".
   * MUST be "{SiteName} Editorial" — never a personal name or credential.
   * See QC-STANDARDS.md §1 and spec §9 rule 1.
   */
  siteName: string
  /**
   * ISO date string or human-readable date of the last substantive edit.
   * When supplied, the strip renders "updated {date}".
   * Omit on brand-new pages where no update has occurred yet.
   */
  updatedAt?: string
  /**
   * Path to the per-site editorial standards page.
   * Defaults to '/editorial-standards' (all 10 sites have this page).
   */
  standardsHref?: string
}

/** Format an ISO date or loose date string into a readable "Month YYYY" form. */
function formatUpdatedDate(value: string): string {
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

/** ISO-safe dateTime attribute for <time>. */
function toIsoDate(value: string): string {
  const d = new Date(value)
  if (isNaN(d.getTime())) return ''
  return d.toISOString().slice(0, 10)
}

export function EditorialStandardsSignal({
  siteName,
  updatedAt,
  standardsHref = '/editorial-standards',
}: EditorialStandardsSignalProps) {
  const stripStyle: CSSProperties = {
    borderTop: '1px solid var(--brand-border)',
    borderBottom: '1px solid var(--brand-border)',
    backgroundColor: 'var(--brand-surface)',
  }

  const linkStyle: CSSProperties = {
    color: 'var(--brand-primary)',
    textDecoration: 'none',
  }

  return (
    <aside
      aria-label="Editorial standards"
      className="my-8 px-4 py-3 rounded-sm flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-brand-text-light leading-relaxed"
      style={stripStyle}
    >
      {/* Publication identity */}
      <span className="font-semibold text-brand-text-mid">{siteName}</span>

      {/* Separator dot */}
      <span aria-hidden="true" className="text-brand-text-light select-none">
        &middot;
      </span>

      {/* Process statement + standards link */}
      <span>
        researched from cited sources &mdash; see our{' '}
        <a
          href={standardsHref}
          style={linkStyle}
          className="hover:underline underline-offset-2 font-medium"
        >
          editorial standards
        </a>
      </span>

      {/* Updated date — rendered only when supplied */}
      {updatedAt && (
        <>
          <span aria-hidden="true" className="text-brand-text-light select-none">
            &middot;
          </span>
          <span>
            updated{' '}
            <time dateTime={toIsoDate(updatedAt)} className="text-brand-text-mid">
              {formatUpdatedDate(updatedAt)}
            </time>
          </span>
        </>
      )}
    </aside>
  )
}
