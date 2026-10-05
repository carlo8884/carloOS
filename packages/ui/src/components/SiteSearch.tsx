import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import type { RankedSearchHit } from '../lib/site-search'
import { BelowFoldPhoto } from './BelowFoldPhoto'
import { MissedPage } from './MissedPage'
import { TrackSiteSearch } from './TrackSiteSearch'

const TYPE_LABEL: Record<RankedSearchHit['type'], string> = {
  guide: 'Guide',
  review: 'Review',
  comparison: 'Comparison',
  tool: 'Tool',
}

/**
 * Ranked results for /search. A query with no matches keeps the guide
 * and calculator recovery. The GA4 event carries the query and the count.
 */
export function SiteSearch({
  siteId,
  query,
  results,
  total,
}: {
  siteId: SiteId
  query: string
  results: readonly RankedSearchHit[]
  total: number
}) {
  const trimmed = query.trim()
  if (trimmed.length < 2 || total === 0) {
    return (
      <>
        {trimmed.length >= 2 ? <TrackSiteSearch query={trimmed} resultCount={0} /> : null}
        <MissedPage siteId={siteId} kind="search" query={trimmed} />
      </>
    )
  }

  const shown = results.length
  return (
    <div className="min-h-[70vh] px-container-sm sm:px-container py-16">
      <div className="max-w-xl mx-auto">
        <TrackSiteSearch query={trimmed} resultCount={total} />
        <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-3">
          Results for “{trimmed}”
        </h1>
        <p className="text-base text-brand-text-light leading-relaxed mb-6">
          {total === 1 ? '1 page' : `${total} pages`}
          {shown < total ? `, showing ${shown}` : ''}
        </p>
        <form action="/search" method="get" role="search" className="mb-8">
          <label htmlFor="site-search-q" className="block text-sm font-semibold text-brand-dark mb-2">
            Search guides, reviews, and tools
          </label>
          <div className="flex gap-2">
            <input
              id="site-search-q"
              name="q"
              type="search"
              defaultValue={trimmed}
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
        <ul className="list-none m-0 p-0 flex flex-col gap-3">
          {results.map((hit) => (
            <li key={hit.path}>
              <Link
                href={hit.path}
                className="block rounded border border-brand-border px-4 py-3 no-underline hover:border-brand-primary"
              >
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand-text-light">
                  {TYPE_LABEL[hit.type]}
                </span>
                <span className="block text-sm font-semibold text-brand-dark mt-1">{hit.title}</span>
                {hit.excerpt ? (
                  <span className="block text-sm text-brand-text-light mt-1">{hit.excerpt}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <BelowFoldPhoto siteId={siteId} />
      </div>
    </div>
  )
}
