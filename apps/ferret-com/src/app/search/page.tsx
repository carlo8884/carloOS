import type { Metadata } from 'next'
import { buildMetadata, MissedPage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret care search',
  description:
    'When a Ferret.com search has no match, start with diet, cage setup, enrichment, or the cage size calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  return <MissedPage siteId="ferret-com" kind="search" query={firstQuery(searchParams?.q)} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
