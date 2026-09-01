import type { Metadata } from 'next'
import { directorySlugMetadata, renderDirectorySlug } from '@carloOS/ui'
import { directoryPlaces } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

// 59,741 listing slugs would blow one generateStaticParams pass. Prerender
// imported state hubs only; listing stubs resolve on demand (dynamicParams).
export const dynamicParams = true
export const revalidate = 86400

export function generateStaticParams() {
  return directoryPlaces(listings).states.map((state) => ({ slug: state.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return directorySlugMetadata('vets-co', listings, params.slug)
}

export default function DirectorySlugPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectorySlug('vets-co', 'Vets.co', listings, params.slug, searchParams)
}
