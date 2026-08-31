import type { Metadata } from 'next'
import { directoryCityMetadata, renderDirectoryCity } from '@carloOS/ui'
import { listingsForCity } from '@carloOS/config/directory'
import listings from '../../../../data/directory-listings.json'

export const dynamic = 'force-dynamic'

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
