import type { Metadata } from 'next'
import { directoryDetailMetadata, renderDirectoryDetail } from '@carloOS/ui'
import { findListing } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

export const dynamic = 'force-dynamic'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return directoryDetailMetadata('vets-co', findListing(listings, params.slug))
}

export default function DirectoryDetailPage({ params }: { params: { slug: string } }) {
  return renderDirectoryDetail('vets-co', 'Vets.co', listings, params.slug)
}
