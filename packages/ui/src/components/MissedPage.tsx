import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { missedPage } from '../data/missed-page'
import { HubSearch } from './HubSearch'
import { TrackPage404 } from './TrackPage404'

/**
 * Plain recovery for a missing URL or an empty search. Hub search filters
 * the three guides. The calculator stays visible when the filter hides them.
 */
export function MissedPage({
  siteId,
  kind,
  query = '',
}: {
  siteId: SiteId
  kind: 'missing' | 'search'
  query?: string
}) {
  const page = missedPage(siteId)
  if (!page) return null

  const trimmed = query.trim()
  const listId = kind === 'missing' ? 'missed-guides' : 'empty-search-guides'
  const heading =
    kind === 'missing'
      ? 'Page not found'
      : trimmed
        ? `No results for “${trimmed}”`
        : 'Search'
  const lead =
    kind === 'missing'
      ? 'This page does not exist or may have moved. Search these guides, or open the calculator.'
      : 'Nothing matched that search. These guides and the calculator are a place to start.'

  return (
    <div className="min-h-[70vh] px-container-sm sm:px-container py-16">
      <div className="max-w-xl mx-auto">
        {kind === 'missing' ? <TrackPage404 /> : null}
        {kind === 'missing' ? (
          <p
            className="font-display font-black text-brand-dark leading-none mb-2"
            style={{ fontSize: 'clamp(64px, 10vw, 96px)', opacity: 0.08 }}
            aria-hidden="true"
          >
            404
          </p>
        ) : null}
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-3">{heading}</h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-8">{lead}</p>
        <HubSearch
          listId={listId}
          total={page.guides.length}
          noun={page.noun}
          initialQuery={kind === 'search' ? trimmed : ''}
        />
        <ul id={listId} className="list-none m-0 p-0 flex flex-col gap-3 mb-8">
          {page.guides.map((guide) => (
            <li key={guide.href} data-hub-item data-title={guide.title} data-topic={guide.topic}>
              <Link
                href={guide.href}
                className="block rounded border border-brand-border px-4 py-3 no-underline hover:border-brand-primary"
              >
                <span className="block text-sm font-semibold text-brand-dark">{guide.title}</span>
                <span className="block text-sm text-brand-text-light mt-1">{guide.topic}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="font-display font-bold text-brand-dark text-lg mb-3">Calculator</h2>
        <Link
          href={page.calculator.href}
          className="block rounded border border-brand-border px-4 py-3 no-underline hover:border-brand-primary mb-6"
        >
          <span className="block text-sm font-semibold text-brand-dark">{page.calculator.title}</span>
          <span className="block text-sm text-brand-text-light mt-1">{page.calculator.topic}</span>
        </Link>
        <Link href={page.hub.href} className="text-sm font-semibold text-brand-primary no-underline hover:underline">
          All {page.hub.title.toLowerCase()}
        </Link>
      </div>
    </div>
  )
}
