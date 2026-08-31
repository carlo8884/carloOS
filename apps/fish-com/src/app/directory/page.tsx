import type { Metadata } from 'next'
import { buildMetadata, renderDirectoryIndex } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium professional directory',
  description:
    'Unclaimed license-board stubs for aquarium professionals on Fish.com. No invented phone, email, or rating.',
  path: '/directory',
  type: 'website',
  category: 'Directory',
})

export default function DirectoryPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryIndex('fish-com', 'Fish.com', listings, searchParams)
}
