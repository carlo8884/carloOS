import type { Metadata } from 'next'
import { directoryCityMetadata, renderDirectoryCity } from '@carloOS/ui'
import { directoryCityParams, listingsForCity } from '@carloOS/config/directory'
import listings from '../../../../data/directory-listings.json'

export function generateStaticParams() {
  return directoryCityParams(listings)
}

export function generateMetadata({ params }: { params: { slug: string; city: string } }): Metadata {
  return directoryCityMetadata(
    'fish-com',
    params.slug,
    params.city,
    listingsForCity(listings, params.slug, params.city),
  )
}

export default function DirectoryCityPage({
  params,
  searchParams,
}: {
  params: { slug: string; city: string }
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectoryCity('fish-com', 'Fish.com', listings, params.slug, params.city, searchParams)
}
