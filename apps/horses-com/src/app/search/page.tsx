import type { Metadata } from 'next'
import { buildMetadata, rankSearch, SiteSearch, type SearchEntry } from '@carloOS/ui'
import index from '../../data/search-index.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse guide search',
  description:
    'Search Horses.com guides, reviews, comparisons, and tools. A search with no match starts with saddle fit, dental care, or the daily feed calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  const query = firstQuery(searchParams?.q)
  const hits = rankSearch(index.entries as SearchEntry[], query)
  return <SiteSearch siteId="horses-com" query={query} results={hits.slice(0, 20)} total={hits.length} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
