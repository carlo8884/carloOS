import type { Metadata } from 'next'
import { buildMetadata, MissedPage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse guide search',
  description:
    'When a Horses.com search has no match, start with saddle fit, dental care, vaccines, or the daily feed calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  return <MissedPage siteId="horses-com" kind="search" query={firstQuery(searchParams?.q)} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
