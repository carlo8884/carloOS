/**
 * CarloOS ArticleSourcesList — end-of-article numbered references block.
 *
 * Renders a clean, accessible numbered list of sources at the bottom of
 * editorial articles. Designed to pair with the inline SourceCitation
 * component (variant="inline") — inline markers point to numbered entries
 * rendered by this component.
 *
 * Visual idiom matches SourceCitation block variant: muted small text,
 * top border separator, brand token classes throughout. Accessible via
 * aria-label on the wrapping <section>.
 *
 * Usage:
 *   <ArticleSourcesList
 *     sources={[
 *       { label: 'ACVIM Consensus Guidelines', url: 'https://...', publisher: 'ACVIM' },
 *       { label: 'EPIC Trial -- Pimobendan in MMVD', publisher: 'J Vet Intern Med' },
 *     ]}
 *   />
 *
 * Spec: ops/handoffs/2026-06-05-visual-coo-editorial-system-spec.md s0 + s2.5
 */

export interface ArticleSource {
  /** Human-readable citation label -- e.g. "WSAVA Vaccination Guidelines 2022" */
  label: string
  /**
   * Primary-source URL. When present the label is wrapped in an anchor
   * (target=_blank rel="noopener noreferrer nofollow").
   * Must point at the actual primary source, not a press release or secondary
   * summarizer (QC-STANDARDS.md s1 + spec s9 rule 5).
   */
  url?: string
  /** Publisher / journal / organisation short name -- e.g. "AAHA", "Merck Vet Manual" */
  publisher?: string
}

export interface ArticleSourcesListProps {
  /** Ordered list of sources. Rendered in the order supplied. */
  sources: ArticleSource[]
  /**
   * Section heading. Defaults to "Sources".
   * Override with "References" or "Further Reading" when appropriate.
   */
  title?: string
}

export function ArticleSourcesList({
  sources,
  title = 'Sources',
}: ArticleSourcesListProps) {
  if (!sources || sources.length === 0) return null

  return (
    <section
      aria-label={title}
      className="mt-10 pt-6 border-t border-brand-border"
    >
      {/* Section eyebrow -- matches SourceCitation block "SOURCE" badge idiom */}
      <h2 className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-4">
        {title}
      </h2>

      <ol className="list-none m-0 p-0 space-y-2">
        {sources.map((source, index) => (
          <li
            key={index}
            className="flex gap-3 text-xs text-brand-text-light leading-relaxed py-1.5 border-b border-brand-border last:border-b-0"
          >
            {/* Number badge */}
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-2xs font-bold text-brand-text-light mt-0.5"
              aria-hidden="true"
            >
              {index + 1}
            </span>

            {/* Citation content */}
            <span className="flex-1">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-brand-text-mid hover:text-brand-primary underline-offset-2 hover:underline"
                >
                  {source.label}
                </a>
              ) : (
                <span className="text-brand-text-mid">{source.label}</span>
              )}
              {source.publisher && (
                <span className="ml-2 text-brand-text-light">
                  &mdash; {source.publisher}
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
