import type { Metadata } from 'next'
import { buildMetadata, MissedPage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog guide search',
  description:
    'When a Dog.com search has no match, start with body condition, spay timing, vital signs, or the daily food calculator.',
  path: '/search',
  noIndex: true,
})

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string | string[] }
}) {
  return <MissedPage siteId="dog-com" kind="search" query={firstQuery(searchParams?.q)} />
}

function firstQuery(q: string | string[] | undefined): string {
  if (Array.isArray(q)) return q[0] ?? ''
  return q ?? ''
}
