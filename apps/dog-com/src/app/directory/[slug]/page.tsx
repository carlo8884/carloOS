import type { Metadata } from 'next'
import { directorySlugMetadata, renderDirectorySlug } from '@carloOS/ui'
import { directorySlugParams } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

export function generateStaticParams() {
  return directorySlugParams(listings)
}

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
