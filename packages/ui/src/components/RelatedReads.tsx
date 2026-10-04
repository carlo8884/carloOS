import type { SiteId } from '@carloOS/config'
import { relatedReadsFor } from '../data/related-reads'

/** Two or three same-site comparisons or tools. Renders nothing when the path has no curated list. */
export function RelatedReads({ siteId, path }: { siteId: SiteId; path: string }) {
  const items = relatedReadsFor(siteId, path)
  if (items.length === 0) return null
  return (
    <nav aria-label="Related comparisons" className="px-container-sm sm:px-container pb-12">
      <div className="max-w-6xl mx-auto border-t border-brand-border pt-8">
        <h2 className="font-display text-xl font-bold text-brand-dark mb-4">Related comparisons</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-none m-0 p-0">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block h-full p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-200"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">{item.kind}</span>
                <span className="block text-sm font-semibold text-brand-dark leading-snug mt-1">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
