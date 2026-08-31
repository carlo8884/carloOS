import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { SiteId } from '@carloOS/config'
import {
  findListing,
  paginateDirectory,
  type DirectoryListing,
} from '@carloOS/config/directory'
import { buildMetadata } from './SEOHead'
import { DirectoryDetail, DirectoryHub } from './DirectoryHub'

export const DIRECTORY_NOUN: Record<string, { title: string; noun: string; description: string }> = {
  'dog-com': {
    title: 'Dog professional directory',
    noun: 'licensed dog professionals',
    description:
      'Unclaimed license-board stubs for dog trainers and related professionals on Dog.com. No invented phone, email, or rating.',
  },
  'fish-com': {
    title: 'Aquarium professional directory',
    noun: 'licensed aquarium professionals',
    description:
      'Unclaimed license-board stubs for aquarium and aquatic professionals on Fish.com. No invented phone, email, or rating.',
  },
  'horses-com': {
    title: 'Equine professional directory',
    noun: 'licensed equine professionals',
    description:
      'Unclaimed license-board stubs for equine professionals on Horses.com. No invented phone, email, or rating.',
  },
  'vets-co': {
    title: 'Veterinary license directory',
    noun: 'licensed veterinarians',
    description:
      'Unclaimed state-board stubs for veterinarians on Vets.co. No invented phone, email, or rating.',
  },
  'ferret-com': {
    title: 'Exotic-mammal professional directory',
    noun: 'licensed exotic-mammal professionals',
    description:
      'Unclaimed license-board stubs for exotic-mammal professionals on Ferret.com. No invented phone, email, or rating.',
  },
}

export function directoryIndexMetadata(siteId: SiteId): Metadata {
  const copy = DIRECTORY_NOUN[siteId]
  return buildMetadata({
    siteId,
    title: copy.title,
    description: copy.description,
    path: '/directory',
    type: 'website',
    category: 'Directory',
  })
}

export function directoryDetailMetadata(siteId: SiteId, listing: DirectoryListing | undefined): Metadata {
  const copy = DIRECTORY_NOUN[siteId]
  if (!listing) {
    return buildMetadata({
      siteId,
      title: `${copy.title} — listing`,
      description: copy.description,
      path: '/directory',
      type: 'website',
      noIndex: true,
    })
  }
  const place = [listing.city, listing.state].filter(Boolean).join(', ')
  return buildMetadata({
    siteId,
    title: `${listing.display_name}${place ? ` — ${place}` : ''} | ${copy.title}`,
    description: `Unclaimed license stub for ${listing.display_name}${place ? ` in ${place}` : ''}. License ${listing.license_number}.`,
    path: `/directory/${listing.slug}`,
    type: 'website',
    category: 'Directory',
  })
}

export function renderDirectoryIndex(
  siteId: SiteId,
  siteName: string,
  listings: DirectoryListing[],
  searchParams: { q?: string; page?: string },
) {
  const copy = DIRECTORY_NOUN[siteId]
  const page = paginateDirectory(listings, searchParams.q || '', Number(searchParams.page) || 1)
  return (
    <>
      <header className="px-container-sm sm:px-container pt-12 pb-2 max-w-5xl mx-auto">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Directory</p>
        <h1 className="font-display font-bold text-brand-dark tracking-tight m-0" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
          {copy.title}
        </h1>
      </header>
      <DirectoryHub siteName={siteName} noun={copy.noun} page={page} />
    </>
  )
}

export function renderDirectoryDetail(
  siteId: SiteId,
  siteName: string,
  listings: DirectoryListing[],
  slug: string,
) {
  const listing = findListing(listings, slug)
  if (!listing) notFound()
  return <DirectoryDetail siteName={siteName} listing={listing} />
}
