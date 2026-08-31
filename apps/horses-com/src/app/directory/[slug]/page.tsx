import type { Metadata } from 'next'
import { directoryDetailMetadata, renderDirectoryDetail } from '@carloOS/ui'
import { findListing } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

export const dynamic = 'force-dynamic'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return directoryDetailMetadata('horses-com', findListing(listings, params.slug))
}

export default function DirectoryDetailPage({ params }: { params: { slug: string } }) {
  return renderDirectoryDetail('horses-com', 'Horses.com', listings, params.slug)
}
