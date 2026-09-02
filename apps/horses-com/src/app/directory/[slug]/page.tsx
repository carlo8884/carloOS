import type { Metadata } from 'next'
import { directorySlugMetadata, renderDirectorySlug } from '@carloOS/ui'
import { directorySlugParams } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

// searchParams.q/page — must not stay ISR (vets city 500: static-to-dynamic).
export const dynamic = 'force-dynamic'

export function generateStaticParams() {
  return directorySlugParams(listings)
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return directorySlugMetadata('horses-com', listings, params.slug)
}

export default function DirectorySlugPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectorySlug('horses-com', 'Horses.com', listings, params.slug, searchParams)
}
