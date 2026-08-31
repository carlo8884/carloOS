import type { Metadata } from 'next'
import { buildMetadata, renderDirectoryIndex } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine professional directory',
  description:
    'Unclaimed license-board stubs for equine professionals on Horses.com. No invented phone, email, or rating.',
  path: '/directory',
  type: 'website',
  category: 'Directory',
})

export default function DirectoryPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryIndex('horses-com', 'Horses.com', listings, searchParams)
}
