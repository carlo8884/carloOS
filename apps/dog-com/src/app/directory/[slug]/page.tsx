import type { Metadata } from 'next'
import { directorySlugMetadata, renderDirectorySlug } from '@carloOS/ui'
import listings from '../../../data/directory-listings.json'

export const dynamic = 'force-dynamic'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return directorySlugMetadata('dog-com', listings, params.slug)
}

export default function DirectorySlugPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectorySlug('dog-com', 'Dog.com', listings, params.slug, searchParams)
}
