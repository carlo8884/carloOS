/**
 * License-board directory stubs.
 * CSV → unclaimed listings. No invented phone, email, or rating.
 * Importer writes per-app JSON; pages read it. Empty array = empty-state.
 */

export const DIRECTORY_PAGE_SIZE = 50
export const DIRECTORY_FEATURED_MAX = 12
/** Listing URLs per sitemap shard (id ≥ 2). Places live on id 1. Under Google's 50k/file limit. */
export const DIRECTORY_SITEMAP_DETAIL_CAP = 10000
export const DIRECTORY_TITLE_MAX = 60

export const DIRECTORY_PACK_FILES = [
  'ferret-national.csv',
  'fish-national.csv',
  'dog-national.csv',
  'horses-national.csv',
  'vets-co-national.csv',
] as const

export const DIRECTORY_SITE_BY_PACK: Record<(typeof DIRECTORY_PACK_FILES)[number], string> = {
  'ferret-national.csv': 'ferret-com',
  'fish-national.csv': 'fish-com',
  'dog-national.csv': 'dog-com',
  'horses-national.csv': 'horses-com',
  'vets-co-national.csv': 'vets-co',
}

export const DIRECTORY_LOAD_ORDER = [
  { pack: 'ferret-national.csv', expected: 70 },
  { pack: 'fish-national.csv', expected: 665 },
  { pack: 'dog-national.csv', expected: 1368 },
  { pack: 'horses-national.csv', expected: 1648 },
  { pack: 'vets-co-national.csv', expected: 59741 },
] as const

export interface DirectoryListing {
  slug: string
  display_name: string
  city: string
  state: string
  category: string
  license_number: string
  source_url: string
  /** Importer always writes false. JSON modules type this as boolean. */
  claimed: boolean
}

export interface DirectoryPage {
  listings: DirectoryListing[]
  featured: DirectoryListing[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  query: string
}

const REQUIRED = ['display_name', 'city', 'state', 'category', 'license_number', 'source_url'] as const

export function slugifyListing(row: {
  display_name: string
  city: string
  state: string
  license_number: string
}): string {
  const raw = [row.display_name, row.city, row.state, row.license_number]
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
  return raw || 'listing'
}

function norm(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

export function isValidSourceUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

export function rowKeyLicense(row: { license_number: string; state: string }): string {
  return `${norm(row.license_number)}|${norm(row.state)}`
}

export function rowKeyNameCity(row: { display_name: string; city: string; state: string }): string {
  return `${norm(row.display_name)}|${norm(row.city)}|${norm(row.state)}`
}

export function parseDirectoryCsv(csv: string): { listings: DirectoryListing[]; skipped: number } {
  const lines = csv.replace(/^\uFEFF/, '').split(/\r?\n/).filter((line) => line.trim().length > 0)
  if (lines.length < 2) return { listings: [], skipped: 0 }

  const headers = splitCsvLine(lines[0]).map((h) => h.trim().toLowerCase())
  const idx = Object.fromEntries(headers.map((h, i) => [h, i])) as Record<string, number>
  for (const col of REQUIRED) {
    if (idx[col] === undefined) {
      throw new Error(`directory CSV missing required column: ${col}`)
    }
  }

  const byLicense = new Map<string, DirectoryListing>()
  const byName = new Set<string>()
  const usedSlugs = new Set<string>()
  let skipped = 0

  for (let i = 1; i < lines.length; i++) {
    const cells = splitCsvLine(lines[i])
    const display_name = (cells[idx.display_name] || '').trim()
    const city = (cells[idx.city] || '').trim()
    const state = (cells[idx.state] || '').trim()
    const category = (cells[idx.category] || '').trim()
    const license_number = (cells[idx.license_number] || '').trim()
    const source_url = (cells[idx.source_url] || '').trim()

    if (!display_name || !license_number || !source_url || !isValidSourceUrl(source_url)) {
      skipped += 1
      continue
    }

    const listing: DirectoryListing = {
      slug: slugifyListing({ display_name, city, state, license_number }),
      display_name,
      city,
      state,
      category,
      license_number,
      source_url,
      claimed: false,
    }

    const licenseKey = rowKeyLicense(listing)
    if (byLicense.has(licenseKey)) {
      skipped += 1
      continue
    }
    const nameKey = rowKeyNameCity(listing)
    if (byName.has(nameKey)) {
      skipped += 1
      continue
    }

    let slug = listing.slug
    let n = 2
    while (usedSlugs.has(slug)) {
      slug = `${listing.slug}-${n}`
      n += 1
    }
    listing.slug = slug
    usedSlugs.add(slug)

    byLicense.set(licenseKey, listing)
    byName.add(nameKey)
  }

  return { listings: [...byLicense.values()], skipped }
}

export function paginateDirectory(
  listings: DirectoryListing[],
  query = '',
  page = 1,
): DirectoryPage {
  const q = query.trim().toLowerCase()
  const filtered = q
    ? listings.filter((row) =>
        [row.display_name, row.city, row.state, row.category, row.license_number]
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
    : listings

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / DIRECTORY_PAGE_SIZE))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * DIRECTORY_PAGE_SIZE

  return {
    listings: filtered.slice(start, start + DIRECTORY_PAGE_SIZE),
    featured: filtered.slice(0, DIRECTORY_FEATURED_MAX),
    total,
    page: safePage,
    pageSize: DIRECTORY_PAGE_SIZE,
    totalPages,
    query: query.trim(),
  }
}

export function findListing(listings: DirectoryListing[], slug: string): DirectoryListing | undefined {
  return listings.find((row) => row.slug === slug)
}

/** Prefill /join/pro from an imported row. Missing or unknown slug → empty defaults. */
export function directoryClaimPrefill(
  listings: DirectoryListing[],
  slug: string | undefined | null,
): { city: string; message: string } {
  const key = typeof slug === 'string' ? slug.trim() : ''
  if (!key) return { city: '', message: '' }
  const listing = findListing(listings, key)
  if (!listing) return { city: '', message: '' }
  return {
    city: [listing.city, listing.state].filter(Boolean).join(', '),
    message: `I claim listing ${listing.slug} (${listing.display_name}, ${listing.city} ${listing.state}).`,
  }
}

export function directorySitemapEntries(
  siteUrl: string,
  listings: DirectoryListing[],
  now = new Date(),
  sitemapId = 1,
): Array<{ url: string; lastModified: Date; changeFrequency: 'weekly'; priority: number }> {
  const origin = siteUrl.replace(/\/$/, '')
  // Index URL is committed as a literal in each sitemap.ts (sitemap-drift).
  // id 1 = imported places only. id ≥ 2 = listing shards (all imported slugs).
  if (sitemapId <= 1) {
    const places = directoryPlaces(listings)
    return [
      ...places.states.map((state) => ({
        url: `${origin}${directoryStatePath(state.slug)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.55,
      })),
      ...places.cities.map((city) => ({
        url: `${origin}${directoryCityPath(city.stateSlug, city.citySlug)}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      })),
    ]
  }
  const start = (sitemapId - 2) * DIRECTORY_SITEMAP_DETAIL_CAP
  return listings.slice(start, start + DIRECTORY_SITEMAP_DETAIL_CAP).map((row) => ({
    url: `${origin}${directoryListingPath(row)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }))
}

/** Sitemap index ids: 0 = editorial, 1 = places, 2+ = listing shards. */
export function directorySitemapIds(listings: DirectoryListing[]): { id: number }[] {
  if (listings.length === 0) return [{ id: 0 }]
  const shards = Math.max(1, Math.ceil(listings.length / DIRECTORY_SITEMAP_DETAIL_CAP))
  const ids = [{ id: 0 }, { id: 1 }]
  for (let i = 0; i < shards; i++) ids.push({ id: 2 + i })
  return ids
}

/**
 * Next 14 generateSitemaps() serves /sitemap/{id}.xml but 404s /sitemap.xml
 * (verified on 843 production). Emit the index ourselves so robots + crawlers
 * can find the city/listing shards.
 */
export function buildSitemapIndexXml(siteUrl: string, listings: DirectoryListing[]): string {
  const origin = siteUrl.replace(/\/$/, '')
  const locs = directorySitemapIds(listings)
    .map((row) => `  <sitemap>\n    <loc>${origin}/sitemap/${row.id}.xml</loc>\n  </sitemap>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs}\n</sitemapindex>\n`
}

export function sitemapIndexResponse(siteUrl: string, listings: DirectoryListing[]): Response {
  return new Response(buildSitemapIndexXml(siteUrl, listings), {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

/** State + listing slugs from imported rows only. Empty pack → no invented params. */
export function directorySlugParams(listings: DirectoryListing[]): { slug: string }[] {
  const states = directoryPlaces(listings).states.map((state) => ({ slug: state.slug }))
  const details = listings.map((row) => ({ slug: row.slug }))
  return [...states, ...details]
}

/** City landings from imported rows only. Empty pack → no invented params. */
export function directoryCityParams(listings: DirectoryListing[]): { slug: string; city: string }[] {
  return directoryPlaces(listings).cities.map((city) => ({
    slug: city.stateSlug,
    city: city.citySlug,
  }))
}

const US_STATE_NAME_TO_ABBREV: Record<string, string> = {
  alabama: 'AL', alaska: 'AK', arizona: 'AZ', arkansas: 'AR', california: 'CA',
  colorado: 'CO', connecticut: 'CT', delaware: 'DE', florida: 'FL', georgia: 'GA',
  hawaii: 'HI', idaho: 'ID', illinois: 'IL', indiana: 'IN', iowa: 'IA',
  kansas: 'KS', kentucky: 'KY', louisiana: 'LA', maine: 'ME', maryland: 'MD',
  massachusetts: 'MA', michigan: 'MI', minnesota: 'MN', mississippi: 'MS',
  missouri: 'MO', montana: 'MT', nebraska: 'NE', nevada: 'NV', 'new hampshire': 'NH',
  'new jersey': 'NJ', 'new mexico': 'NM', 'new york': 'NY', 'north carolina': 'NC',
  'north dakota': 'ND', ohio: 'OH', oklahoma: 'OK', oregon: 'OR', pennsylvania: 'PA',
  'rhode island': 'RI', 'south carolina': 'SC', 'south dakota': 'SD', tennessee: 'TN',
  texas: 'TX', utah: 'UT', vermont: 'VT', virginia: 'VA', washington: 'WA',
  'west virginia': 'WV', wisconsin: 'WI', wyoming: 'WY', 'district of columbia': 'DC',
}

const US_ABBREV_TO_NAME = Object.fromEntries(
  Object.entries(US_STATE_NAME_TO_ABBREV).map(([name, abbr]) => [abbr, name]),
)

export function normalizeStateSlug(state: string): string {
  const trimmed = state.trim()
  if (!trimmed) return ''
  if (/^[A-Za-z]{2}$/.test(trimmed)) return trimmed.toLowerCase()
  const mapped = US_STATE_NAME_TO_ABBREV[trimmed.toLowerCase()]
  if (mapped) return mapped.toLowerCase()
  return trimmed.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export function stateDisplayName(stateSlug: string): string {
  const name = US_ABBREV_TO_NAME[stateSlug.toUpperCase()]
  if (!name) return stateSlug.toUpperCase()
  return name.replace(/\b\w/g, (ch) => ch.toUpperCase())
}

export function citySlug(city: string): string {
  return city
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function cityDisplayName(city: string): string {
  const slug = citySlug(city)
  if (!slug) return city.trim()
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function stateAbbrev(state: string): string {
  const slug = normalizeStateSlug(state)
  return slug.length === 2 ? slug.toUpperCase() : stateDisplayName(slug)
}

export function directoryStatePath(state: string): string {
  return `/directory/${normalizeStateSlug(state)}`
}

export function directoryCityPath(state: string, city: string): string {
  return `/directory/${normalizeStateSlug(state)}/${citySlug(city)}`
}

export function directoryListingPath(listing: Pick<DirectoryListing, 'slug'>): string {
  return `/directory/${listing.slug}`
}

/** Unique city/state title, e.g. "Vets in Austin, TX". Clamped to 60 before brand suffix. */
export function directoryPlaceTitle(
  nounPlural: string,
  state: string,
  city?: string,
  max = DIRECTORY_TITLE_MAX,
): string {
  const place = city
    ? `${cityDisplayName(city)}, ${stateAbbrev(state)}`
    : stateDisplayName(state)
  const title = `${nounPlural} in ${place}`
  return title.length <= max ? title : title.slice(0, max).trimEnd()
}

/** Unique listing title, e.g. "Jane Smith — vet in Austin, TX". Keeps city+state when clamped. */
export function directoryListingTitle(
  listing: DirectoryListing,
  noun: string,
  max = DIRECTORY_TITLE_MAX,
): string {
  const place = [listing.city, stateAbbrev(listing.state)].filter(Boolean).join(', ')
  const suffix = place ? ` — ${noun} in ${place}` : ` — ${noun}`
  const name = listing.display_name.trim()
  if ((name + suffix).length <= max) return name + suffix
  const budget = max - suffix.length
  if (budget >= 8) return `${name.slice(0, budget).trimEnd()}${suffix}`
  return (name + suffix).slice(0, max).trimEnd()
}

export function directoryListingH1(listing: DirectoryListing, noun: string): string {
  const place = [listing.city, stateAbbrev(listing.state)].filter(Boolean).join(', ')
  return place ? `${listing.display_name} — ${noun} in ${place}` : `${listing.display_name} — ${noun}`
}

/** LocalBusiness JSON-LD from imported fields only. No phone, email, street, geo, or rating. */
export function listingLocalBusinessJsonLd(
  listing: DirectoryListing,
  pageUrl: string,
  types: string[] = ['LocalBusiness'],
): Record<string, unknown> {
  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  }
  if (listing.city) address.addressLocality = listing.city
  if (listing.state) address.addressRegion = stateAbbrev(listing.state)

  const type = types.includes('LocalBusiness') ? types : ['LocalBusiness', ...types]
  return {
    '@context': 'https://schema.org',
    '@type': type.length === 1 ? type[0] : type,
    name: listing.display_name,
    url: pageUrl,
    address,
    ...(listing.license_number ? { identifier: listing.license_number } : {}),
  }
}

export function cityPlaceJsonLd(
  city: string,
  state: string,
  pageUrl: string,
): Record<string, unknown> {
  const cityName = cityDisplayName(city)
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: `${cityName}, ${stateDisplayName(state)}`,
    url: pageUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: stateAbbrev(state),
      addressCountry: 'US',
    },
  }
}

export function cityLocalBusinessListJsonLd(
  listings: DirectoryListing[],
  pageUrl: string,
  name: string,
  origin: string,
  types: string[] = ['LocalBusiness'],
  total = listings.length,
): Record<string, unknown> {
  const site = origin.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: pageUrl,
    numberOfItems: total,
    itemListElement: listings.map((row, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: listingLocalBusinessJsonLd(row, `${site}${directoryListingPath(row)}`, types),
    })),
  }
}

export function listingsForState(listings: DirectoryListing[], state: string): DirectoryListing[] {
  const want = normalizeStateSlug(state)
  if (!want) return []
  return listings.filter((row) => normalizeStateSlug(row.state) === want)
}

export function listingsForCity(
  listings: DirectoryListing[],
  state: string,
  city: string,
): DirectoryListing[] {
  const wantCity = citySlug(city)
  if (!wantCity) return []
  return listingsForState(listings, state).filter((row) => citySlug(row.city) === wantCity)
}

export interface DirectoryStatePlace {
  slug: string
  name: string
  count: number
}

export interface DirectoryCityPlace {
  stateSlug: string
  citySlug: string
  cityName: string
  stateName: string
  count: number
}

export function directoryPlaces(listings: DirectoryListing[]): {
  states: DirectoryStatePlace[]
  cities: DirectoryCityPlace[]
} {
  const stateCounts = new Map<string, number>()
  const cityCounts = new Map<string, { stateSlug: string; citySlug: string; count: number }>()

  for (const row of listings) {
    const s = normalizeStateSlug(row.state)
    if (!s) continue
    stateCounts.set(s, (stateCounts.get(s) || 0) + 1)
    const c = citySlug(row.city)
    if (!c) continue
    const key = `${s}/${c}`
    const existing = cityCounts.get(key)
    if (existing) existing.count += 1
    else cityCounts.set(key, { stateSlug: s, citySlug: c, count: 1 })
  }

  const states = [...stateCounts.entries()]
    .map(([slug, count]) => ({ slug, name: stateDisplayName(slug), count }))
    .sort((a, b) => a.name.localeCompare(b.name))

  const cities = [...cityCounts.values()]
    .map((row) => ({
      ...row,
      cityName: cityDisplayName(row.citySlug),
      stateName: stateDisplayName(row.stateSlug),
    }))
    .sort((a, b) => a.cityName.localeCompare(b.cityName) || a.stateName.localeCompare(b.stateName))

  return { states, cities }
}

function splitCsvLine(line: string): string[] {
  const out: string[] = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      out.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  out.push(cur)
  return out
}
