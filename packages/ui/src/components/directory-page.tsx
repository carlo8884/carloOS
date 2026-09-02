import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSiteConfig, type SiteId } from '@carloOS/config'
import {
  cityDisplayName,
  cityLocalBusinessListJsonLd,
  cityPlaceJsonLd,
  directoryCityPath,
  directoryListingTitle,
  directoryPlaceTitle,
  directoryStatePath,
  findListing,
  listingsForCity,
  listingsForState,
  paginateDirectory,
  stateDisplayName,
  type DirectoryListing,
} from '@carloOS/config/directory'
import { buildMetadata, SchemaScript } from './SEOHead'
import { DirectoryDetail, DirectoryHub } from './DirectoryHub'

export const DIRECTORY_NOUN: Record<
  string,
  {
    title: string
    noun: string
    seoNoun: string
    seoNounPlural: string
    description: string
    schemaTypes: string[]
  }
> = {
  'dog-com': {
    title: 'Dog professional directory',
    noun: 'licensed dog professionals',
    seoNoun: 'dog trainer',
    seoNounPlural: 'Dog trainers',
    description:
      'Unclaimed license-board stubs for dog trainers and related professionals on Dog.com. No invented phone, email, or rating.',
    schemaTypes: ['LocalBusiness'],
  },
  'fish-com': {
    title: 'Aquarium professional directory',
    noun: 'licensed aquarium professionals',
    seoNoun: 'aquarium pro',
    seoNounPlural: 'Aquarium professionals',
    description:
      'Unclaimed license-board stubs for aquarium and aquatic professionals on Fish.com. No invented phone, email, or rating.',
    schemaTypes: ['LocalBusiness'],
  },
  'horses-com': {
    title: 'Equine professional directory',
    noun: 'licensed equine professionals',
    seoNoun: 'equine pro',
    seoNounPlural: 'Equine professionals',
    description:
      'Unclaimed license-board stubs for equine professionals on Horses.com. No invented phone, email, or rating.',
    schemaTypes: ['LocalBusiness'],
  },
  'vets-co': {
    title: 'Veterinary license directory',
    noun: 'licensed veterinarians',
    seoNoun: 'vet',
    seoNounPlural: 'Vets',
    description:
      'Unclaimed state-board stubs for veterinarians on Vets.co. No invented phone, email, or rating.',
    schemaTypes: ['VeterinaryCare', 'LocalBusiness'],
  },
  'ferret-com': {
    title: 'Exotic-mammal professional directory',
    noun: 'licensed exotic-mammal professionals',
    seoNoun: 'exotic-mammal pro',
    seoNounPlural: 'Exotic-mammal professionals',
    description:
      'Unclaimed license-board stubs for exotic-mammal professionals on Ferret.com. No invented phone, email, or rating.',
    schemaTypes: ['LocalBusiness'],
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
    title: directoryListingTitle(listing, copy.seoNoun),
    description: `Unclaimed license stub for ${listing.display_name}${place ? ` in ${place}` : ''}. License ${listing.license_number}.`.slice(0, 160),
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
      <DirectoryHub siteName={siteName} noun={copy.noun} page={page} allListings={listings} />
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
  const copy = DIRECTORY_NOUN[siteId]
  const siteUrl = getSiteConfig(siteId).theme.siteUrl.replace(/\/$/, '')
  return (
    <DirectoryDetail
      siteName={siteName}
      listing={listing}
      siteUrl={siteUrl}
      schemaTypes={copy.schemaTypes}
      seoNoun={copy.seoNoun}
    />
  )
}

export function directoryStateMetadata(
  siteId: SiteId,
  stateSlug: string,
  listings: DirectoryListing[],
): Metadata {
  const copy = DIRECTORY_NOUN[siteId]
  const name = stateDisplayName(stateSlug)
  return buildMetadata({
    siteId,
    title: directoryPlaceTitle(copy.seoNounPlural, stateSlug),
    description: `${listings.length} unclaimed license-board stubs in ${name}. No invented phone, email, or rating.`.slice(0, 160),
    path: directoryStatePath(stateSlug),
    type: 'website',
    category: 'Directory',
  })
}

export function directoryCityMetadata(
  siteId: SiteId,
  stateSlug: string,
  city: string,
  listings: DirectoryListing[],
): Metadata {
  const copy = DIRECTORY_NOUN[siteId]
  const stateName = stateDisplayName(stateSlug)
  const cityName = cityDisplayName(city)
  return buildMetadata({
    siteId,
    title: directoryPlaceTitle(copy.seoNounPlural, stateSlug, city),
    description: `${listings.length} unclaimed ${copy.noun} stubs in ${cityName}, ${stateName}. No invented phone, email, or rating.`.slice(0, 160),
    path: directoryCityPath(stateSlug, city),
    type: 'website',
    category: 'Directory',
  })
}

export function directorySlugMetadata(
  siteId: SiteId,
  listings: DirectoryListing[],
  slug: string,
): Metadata {
  const stateRows = listingsForState(listings, slug)
  if (stateRows.length > 0) return directoryStateMetadata(siteId, slug, stateRows)
  return directoryDetailMetadata(siteId, findListing(listings, slug))
}

export function renderDirectorySlug(
  siteId: SiteId,
  siteName: string,
  listings: DirectoryListing[],
  slug: string,
  searchParams: { q?: string; page?: string },
) {
  const stateRows = listingsForState(listings, slug)
  if (stateRows.length > 0) {
    return renderDirectoryPlace(siteId, siteName, slug, undefined, stateRows, searchParams)
  }
  return renderDirectoryDetail(siteId, siteName, listings, slug)
}

export function renderDirectoryCity(
  siteId: SiteId,
  siteName: string,
  listings: DirectoryListing[],
  stateSlug: string,
  city: string,
  searchParams: { q?: string; page?: string },
) {
  const cityRows = listingsForCity(listings, stateSlug, city)
  if (cityRows.length === 0) notFound()
  return renderDirectoryPlace(siteId, siteName, stateSlug, city, cityRows, searchParams)
}

function renderDirectoryPlace(
  siteId: SiteId,
  siteName: string,
  stateSlug: string,
  city: string | undefined,
  listings: DirectoryListing[],
  searchParams: { q?: string; page?: string },
) {
  const copy = DIRECTORY_NOUN[siteId]
  const stateName = stateDisplayName(stateSlug)
  const cityName = city ? cityDisplayName(city) : ''
  const heading = directoryPlaceTitle(copy.seoNounPlural, stateSlug, city)
  const page = paginateDirectory(listings, searchParams.q || '', Number(searchParams.page) || 1)
  const siteUrl = getSiteConfig(siteId).theme.siteUrl.replace(/\/$/, '')
  const placePath = city ? directoryCityPath(stateSlug, city) : directoryStatePath(stateSlug)
  const pageUrl = `${siteUrl}${placePath}`
  const schemas: Record<string, unknown>[] = [
    cityLocalBusinessListJsonLd(
      page.listings,
      pageUrl,
      heading,
      siteUrl,
      copy.schemaTypes,
      listings.length,
    ),
  ]
  if (city) schemas.unshift(cityPlaceJsonLd(city, stateSlug, pageUrl))
  return (
    <>
      <SchemaScript schema={schemas} />
      <header className="px-container-sm sm:px-container pt-12 pb-2 max-w-5xl mx-auto">
        <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
          Directory · {stateName}
          {cityName ? ` · ${cityName}` : ''}
        </p>
        <h1 className="font-display font-bold text-brand-dark tracking-tight m-0" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
          {heading}
        </h1>
      </header>
      <DirectoryHub
        siteName={siteName}
        noun={copy.noun}
        page={page}
        placePath={placePath}
        allListings={listings}
      />
    </>
  )
}
