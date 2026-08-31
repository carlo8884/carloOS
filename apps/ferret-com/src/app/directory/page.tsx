import type { Metadata } from 'next'
import { buildMetadata, renderDirectoryIndex } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Exotic-mammal professional directory',
  description:
    'Unclaimed license-board stubs for exotic-mammal professionals on Ferret.com. No invented phone, email, or rating.',
  path: '/directory',
  type: 'website',
  category: 'Directory',
})

export default function DirectoryPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryIndex('ferret-com', 'Ferret.com', listings, searchParams)
}
