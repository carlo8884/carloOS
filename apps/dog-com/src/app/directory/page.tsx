import type { Metadata } from 'next'
import { buildMetadata, renderDirectoryIndex } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog professional directory',
  description:
    'Unclaimed license-board stubs for dog professionals on Dog.com. No invented phone, email, or rating.',
  path: '/directory',
  type: 'website',
  category: 'Directory',
})

export default function DirectoryPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryIndex('dog-com', 'Dog.com', listings, searchParams)
}
