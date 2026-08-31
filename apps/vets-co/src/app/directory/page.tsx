import type { Metadata } from 'next'
import { buildMetadata, renderDirectoryIndex } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Veterinary license directory',
  description:
    'Unclaimed state-board stubs for veterinarians on Vets.co. No invented phone, email, or rating.',
  path: '/directory',
  type: 'website',
  category: 'Directory',
})

export default function DirectoryPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryIndex('vets-co', 'Vets.co', listings, searchParams)
}
