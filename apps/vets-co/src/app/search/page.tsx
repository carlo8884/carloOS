import type { Metadata } from 'next'
import { buildMetadata, MissedPage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vet care search',
  description:
    'When a Vets.co search has no match, start with care costs, paying for care, emergency fees, or the cat food calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  return <MissedPage siteId="vets-co" kind="search" query={firstQuery(searchParams?.q)} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
