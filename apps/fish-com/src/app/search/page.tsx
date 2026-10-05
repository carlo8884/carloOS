import type { Metadata } from 'next'
import { buildMetadata, MissedPage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish setup search',
  description:
    'When a Fish.com search has no match, start with cycling, water chemistry, planted tanks, or the stocking calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  return <MissedPage siteId="fish-com" kind="search" query={firstQuery(searchParams?.q)} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
