import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { missedPage } from '../data/missed-page'
import { BelowFoldPhoto } from './BelowFoldPhoto'
import { TrackPage404 } from './TrackPage404'

/**
 * Plain recovery for a missing URL or an empty search. The five buying
 * pages stay on the page. The search box submits to /search and does not
 * hide those links.
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
      ? 'This page does not exist or may have moved. These buying pages are a place to start, or open the calculator.'
      : 'Nothing matched that search. These buying pages and the calculator are a place to start.'

  return (
    <div className="min-h-[70vh] px-container-sm sm:px-container py-16">
      <div className="max-w-xl mx-auto">
        {kind === 'missing' ? <TrackPage404 /> : null}
        {kind === 'missing' ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 220 96"
            className="mb-2 block text-brand-dark"
            style={{ height: 'clamp(64px, 10vw, 96px)', width: 'auto' }}
          >
            <text
              x="0"
              y="84"
              fill="currentColor"
              fillOpacity="0.08"
              className="font-display"
              style={{ fontSize: 96, fontWeight: 900 }}
            >
              404
            </text>
          </svg>
        ) : null}
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-3">{heading}</h1>
        <p
          className="text-base text-brand-text-light leading-relaxed mb-8"
          role={kind === 'search' ? 'status' : undefined}
          aria-live={kind === 'search' ? 'polite' : undefined}
          aria-atomic={kind === 'search' ? 'true' : undefined}
        >
          {lead}
        </p>
        <form action="/search" method="get" role="search" className="mb-8">
          <label htmlFor="missed-search-q" className="block text-sm font-semibold text-brand-dark mb-2">
            Search guides, reviews, and tools
          </label>
          <div className="flex gap-2">
            <input
              id="missed-search-q"
              name="q"
              type="search"
              defaultValue={kind === 'search' ? trimmed : ''}
              className="w-full min-h-11 border border-brand-border rounded-md px-3 py-2 text-base text-brand-dark bg-brand-white"
            />
            <button
              type="submit"
              className="min-h-11 shrink-0 px-4 rounded-md bg-brand-primary text-brand-white text-sm font-semibold border-0 cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>
        <ul id={listId} className="list-none m-0 p-0 flex flex-col gap-3 mb-8">
          {page.guides.map((guide) => (
            <li key={guide.href}>
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
        <BelowFoldPhoto siteId={siteId} />
      </div>
    </div>
  )
}
