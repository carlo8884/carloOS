import type { Metadata } from 'next'
import { directoryCityMetadata, renderDirectoryCity } from '@carloOS/ui'
import { listingsForCity } from '@carloOS/config/directory'
import listings from '../../../../data/directory-listings.json'

// City landings come from imported rows only (renderDirectoryCity 404s when
// a city has 0 rows). ~8k city paths are generated on demand, not at build.
export const dynamicParams = true
export const revalidate = 86400

export function generateStaticParams() {
  return []
}

export function generateMetadata({ params }: { params: { slug: string; city: string } }): Metadata {
  return directoryCityMetadata(
    'vets-co',
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
  return renderDirectoryCity('vets-co', 'Vets.co', listings, params.slug, params.city, searchParams)
}
