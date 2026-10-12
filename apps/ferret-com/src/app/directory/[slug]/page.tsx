import type { Metadata } from 'next'
import { buildMetadata, directorySlugMetadata, renderDirectorySlug } from '@carloOS/ui'
import { directorySlugParams, findListing, listingsForState, stateAbbrev, type DirectoryListing } from '@carloOS/config/directory'
import listings from '../../../data/directory-listings.json'

// searchParams.q/page — must not stay ISR (vets city 500: static-to-dynamic).
export const dynamic = 'force-dynamic'

export function generateStaticParams() {
  return directorySlugParams(listings)
}

/** Room before " | Ferret.com" so the rendered title stays within 70 characters. */
const TITLE_BUDGET = 57

/** Longest form that fits, cutting only at a word boundary. */
function listingTitleBase(row: DirectoryListing): string {
  const name = row.display_name.trim()
  const st = row.state ? stateAbbrev(row.state) : ''
  const place = [row.city, st].filter(Boolean).join(', ')
  const options = [
    place ? `${name} — exotic-mammal pro in ${place}` : `${name} — exotic-mammal pro`,
    place ? `${name} — ${place}` : name,
    st ? `${name}, ${st}` : name,
    name,
  ]
  const fit = options.find((t) => t.length <= TITLE_BUDGET)
  if (fit) return fit
  const tail = st ? `…, ${st}` : '…'
  const cut = name.slice(0, TITLE_BUDGET - tail.length)
  const space = cut.lastIndexOf(' ')
  return `${(space > 8 ? cut.slice(0, space) : cut).replace(/[\s&,—-]+$/, '')}${tail}`
}

/** Unique per listing: a repeated base gets the license number's last digits. */
const TITLES: Map<string, string> = (() => {
  const rows = listings as DirectoryListing[]
  const count = new Map<string, number>()
  for (const r of rows) count.set(listingTitleBase(r), (count.get(listingTitleBase(r)) ?? 0) + 1)
  const out = new Map<string, string>()
  for (const r of rows) {
    const base = listingTitleBase(r)
    if ((count.get(base) ?? 0) < 2) { out.set(r.slug, base); continue }
    const tag = ` #${String(r.license_number ?? r.slug).replace(/\W/g, '').slice(-4)}`
    out.set(r.slug, base.length + tag.length <= TITLE_BUDGET ? base + tag : base.slice(0, TITLE_BUDGET - tag.length).trimEnd() + tag)
  }
  return out
})()

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const listing = listingsForState(listings, params.slug).length === 0 ? findListing(listings, params.slug) : undefined
  if (!listing) return directorySlugMetadata('ferret-com', listings, params.slug)
  const place = [listing.city, listing.state].filter(Boolean).join(', ')
  return buildMetadata({
    siteId: 'ferret-com',
    title: TITLES.get(listing.slug) ?? listingTitleBase(listing),
    description: `Unclaimed license stub for ${listing.display_name}${place ? ` in ${place}` : ''}. License ${listing.license_number}.`.slice(0, 160),
    path: `/directory/${listing.slug}`,
    type: 'website',
    category: 'Directory',
  })
}

export default function DirectorySlugPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { q?: string; page?: string }
}) {
  return renderDirectorySlug('ferret-com', 'Ferret.com', listings, params.slug, searchParams)
}
