/**
 * License-board directory stubs.
 * CSV → unclaimed listings. No invented phone, email, or rating.
 * Importer writes per-app JSON; pages read it. Empty array = empty-state.
 */

export const DIRECTORY_PAGE_SIZE = 50
export const DIRECTORY_FEATURED_MAX = 12
export const DIRECTORY_SITEMAP_DETAIL_CAP = 1000

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
  { pack: 'fish-national.csv', expected: 178 },
  { pack: 'dog-national.csv', expected: 306 },
  { pack: 'horses-national.csv', expected: 1648 },
  { pack: 'vets-co-national.csv', expected: 46796 },
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
    while ([...byLicense.values()].some((existing) => existing.slug === slug)) {
      slug = `${listing.slug}-${n}`
      n += 1
    }
    listing.slug = slug

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

export function directorySitemapEntries(
  siteUrl: string,
  listings: DirectoryListing[],
  now = new Date(),
): Array<{ url: string; lastModified: Date; changeFrequency: 'weekly'; priority: number }> {
  const origin = siteUrl.replace(/\/$/, '')
  // Index URL is committed as a literal in each sitemap.ts (sitemap-drift).
  // Places come from imported rows only. Details capped at 1k.
  const places = directoryPlaces(listings)
  const placeEntries = [
    ...places.states.map((state) => ({
      url: `${origin}/directory/${state.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.55,
    })),
    ...places.cities.map((city) => ({
      url: `${origin}/directory/${city.stateSlug}/${city.citySlug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ]
  const details = listings.slice(0, DIRECTORY_SITEMAP_DETAIL_CAP).map((row) => ({
    url: `${origin}/directory/${row.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.4,
  }))
  return [...placeEntries, ...details]
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
