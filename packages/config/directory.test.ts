import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  parseDirectoryCsv,
  paginateDirectory,
  listingsForState,
  listingsForCity,
  directoryPlaces,
  directorySitemapIds,
  directorySitemapEntries,
  buildSitemapIndexXml,
  directorySlugParams,
  directoryCityParams,
  directoryPlaceTitle,
  directoryListingTitle,
  directoryListingH1,
  directoryCityPath,
  directoryListingPath,
  listingLocalBusinessJsonLd,
  cityPlaceJsonLd,
  directoryClaimPrefill,
  findListing,
  normalizeStateSlug,
  DIRECTORY_PAGE_SIZE,
  DIRECTORY_FEATURED_MAX,
  DIRECTORY_SITEMAP_DETAIL_CAP,
} from './directory'

const HEADER = 'display_name,city,state,category,license_number,source_url,claimed'

describe('parseDirectoryCsv', () => {
  it('requires source_url and license_number', () => {
    const csv = `${HEADER}\nAcme Vet,Austin,TX,vet,,https://example.com/a,false\nBeta Vet,Austin,TX,vet,TX-1,,false`
    const { listings, skipped } = parseDirectoryCsv(csv)
    assert.equal(listings.length, 0)
    assert.equal(skipped, 2)
  })

  it('forces claimed=false and dedupes license+state then name+city+state', () => {
    const csv = [
      HEADER,
      'Acme Vet,Austin,TX,vet,TX-1,https://example.com/a,true',
      'Acme Vet Duplicate,Dallas,TX,vet,TX-1,https://example.com/b,true',
      'Acme Vet,Austin,TX,vet,TX-9,https://example.com/c,true',
    ].join('\n')
    const { listings, skipped } = parseDirectoryCsv(csv)
    assert.equal(listings.length, 1)
    assert.equal(listings[0].claimed, false)
    assert.equal(listings[0].license_number, 'TX-1')
    assert.equal(skipped, 2)
  })

  it('suffixes colliding slugs without inventing rows', () => {
    const csv = [
      HEADER,
      'Acme Vet,Austin,TX,vet,TX-1,https://example.com/a,false',
      'Acme-Vet,Austin,TX,vet,TX_1,https://example.com/b,false',
    ].join('\n')
    const { listings, skipped } = parseDirectoryCsv(csv)
    assert.equal(skipped, 0)
    assert.equal(listings.length, 2)
    assert.equal(listings[0].slug, 'acme-vet-austin-tx-tx-1')
    assert.equal(listings[1].slug, 'acme-vet-austin-tx-tx-1-2')
  })

  it('does not invent phone email or rating', () => {
    const csv = `${HEADER}\nAcme Vet,Austin,TX,vet,TX-1,https://example.com/a,false`
    const { listings } = parseDirectoryCsv(csv)
    assert.deepEqual(Object.keys(listings[0]).sort(), [
      'category',
      'city',
      'claimed',
      'display_name',
      'license_number',
      'slug',
      'source_url',
      'state',
    ])
  })
})

describe('paginateDirectory', () => {
  it('pages 50 and features at most 12', () => {
    const listings = Array.from({ length: 80 }, (_, i) => ({
      slug: `n-${i}`,
      display_name: `Name ${i}`,
      city: 'Austin',
      state: 'TX',
      category: 'vet',
      license_number: `TX-${i}`,
      source_url: `https://example.com/${i}`,
      claimed: false as const,
    }))
    const page = paginateDirectory(listings, '', 1)
    assert.equal(page.listings.length, DIRECTORY_PAGE_SIZE)
    assert.equal(page.featured.length, DIRECTORY_FEATURED_MAX)
    assert.equal(page.totalPages, 2)
  })
})

describe('directory places', () => {
  const listings = [
    {
      slug: 'acme-austin-tx-1',
      display_name: 'Acme Vet',
      city: 'Austin',
      state: 'TX',
      category: 'vet',
      license_number: 'TX-1',
      source_url: 'https://example.com/1',
      claimed: false as const,
    },
    {
      slug: 'beta-dallas-texas-2',
      display_name: 'Beta Vet',
      city: 'Dallas',
      state: 'Texas',
      category: 'vet',
      license_number: 'TX-2',
      source_url: 'https://example.com/2',
      claimed: false as const,
    },
    {
      slug: 'gamma-albany-ny-3',
      display_name: 'Gamma Vet',
      city: 'Albany',
      state: 'NY',
      category: 'vet',
      license_number: 'NY-3',
      source_url: 'https://example.com/3',
      claimed: false as const,
    },
  ]

  it('normalizes full state names to two-letter slugs', () => {
    assert.equal(normalizeStateSlug('Texas'), 'tx')
    assert.equal(normalizeStateSlug('TX'), 'tx')
  })

  it('builds state and city landings from imported rows only', () => {
    assert.equal(listingsForState(listings, 'tx').length, 2)
    assert.equal(listingsForCity(listings, 'tx', 'austin').length, 1)
    assert.equal(listingsForState(listings, 'or').length, 0)

    const places = directoryPlaces(listings)
    assert.deepEqual(places.states.map((s) => s.slug).sort(), ['ny', 'tx'])
    assert.equal(places.cities.some((c) => c.stateSlug === 'tx' && c.citySlug === 'austin'), true)

    assert.deepEqual(directorySitemapIds([]), [{ id: 0 }])
    assert.deepEqual(directorySitemapIds(listings), [{ id: 0 }, { id: 1 }, { id: 2 }])
    assert.deepEqual(directorySlugParams([]), [])
    assert.deepEqual(directoryCityParams([]), [])

    const slugs = directorySlugParams(listings).map((p) => p.slug).sort()
    assert.deepEqual(slugs, [
      'acme-austin-tx-1',
      'beta-dallas-texas-2',
      'gamma-albany-ny-3',
      'ny',
      'tx',
    ])
    assert.deepEqual(
      directoryCityParams(listings).sort((a, b) => a.city.localeCompare(b.city)),
      [
        { slug: 'ny', city: 'albany' },
        { slug: 'tx', city: 'austin' },
        { slug: 'tx', city: 'dallas' },
      ],
    )
  })
})

describe('directory local SEO', () => {
  const austin = {
    slug: 'acme-austin-tx-1',
    display_name: 'Acme Vet',
    city: 'Austin',
    state: 'TX',
    category: 'vet',
    license_number: 'TX-1',
    source_url: 'https://example.com/1',
    claimed: false as const,
  }
  const dallas = {
    ...austin,
    slug: 'beta-dallas-tx-2',
    display_name: 'Beta Vet',
    city: 'Dallas',
    license_number: 'TX-2',
  }

  it('city and listing canonical paths are not the homepage', () => {
    assert.equal(directoryCityPath('az', 'avondale'), '/directory/az/avondale')
    assert.equal(
      directoryListingPath({ slug: 'american-canine-training-avondale-az-1996003534' }),
      '/directory/american-canine-training-avondale-az-1996003534',
    )
    assert.notEqual(directoryCityPath('co', 'denver'), '/')
    assert.notEqual(directoryListingPath(austin), '/')
  })

  it('gives each city a unique title and H1 phrase', () => {
    const austinTitle = directoryPlaceTitle('Vets', 'tx', 'austin')
    const dallasTitle = directoryPlaceTitle('Vets', 'tx', 'dallas')
    assert.equal(austinTitle, 'Vets in Austin, TX')
    assert.equal(dallasTitle, 'Vets in Dallas, TX')
    assert.notEqual(austinTitle, dallasTitle)
    assert.notEqual(directoryListingTitle(austin, 'vet'), directoryListingTitle(dallas, 'vet'))
    assert.ok(directoryListingH1(austin, 'vet').includes('Austin'))
  })

  it('emits LocalBusiness without invented phone email or rating', () => {
    const schema = listingLocalBusinessJsonLd(austin, 'https://vets.co/directory/acme-austin-tx-1', [
      'VeterinaryCare',
      'LocalBusiness',
    ])
    assert.deepEqual(schema['@type'], ['VeterinaryCare', 'LocalBusiness'])
    assert.equal(schema.name, 'Acme Vet')
    assert.equal((schema.address as { addressLocality: string }).addressLocality, 'Austin')
    assert.equal(schema.telephone, undefined)
    assert.equal(schema.email, undefined)
    assert.equal(schema.aggregateRating, undefined)
    const place = cityPlaceJsonLd('austin', 'tx', 'https://vets.co/directory/tx/austin')
    assert.equal(place['@type'], 'Place')
  })

  it('sitemaps include city URLs and listing slugs past the old 1k cap', () => {
    const many = Array.from({ length: DIRECTORY_SITEMAP_DETAIL_CAP + 3 }, (_, i) => ({
      slug: `n-${i}`,
      display_name: `Name ${i}`,
      city: i % 2 === 0 ? 'Austin' : 'Dallas',
      state: 'TX',
      category: 'vet',
      license_number: `TX-${i}`,
      source_url: `https://example.com/${i}`,
      claimed: false as const,
    }))
    const ids = directorySitemapIds(many).map((row) => row.id)
    assert.deepEqual(ids, [0, 1, 2, 3])

    const places = directorySitemapEntries('https://vets.co', many, new Date('2026-09-02'), 1)
    assert.ok(places.some((row) => row.url === 'https://vets.co/directory/tx/austin'))
    assert.equal(places.some((row) => row.url.includes('/directory/n-')), false)

    const firstShard = directorySitemapEntries('https://vets.co', many, new Date('2026-09-02'), 2)
    const overflow = directorySitemapEntries('https://vets.co', many, new Date('2026-09-02'), 3)
    assert.equal(firstShard.length, DIRECTORY_SITEMAP_DETAIL_CAP)
    assert.equal(overflow.length, 3)
    assert.equal(overflow[0].url, `https://vets.co/directory/n-${DIRECTORY_SITEMAP_DETAIL_CAP}`)

    const index = buildSitemapIndexXml('https://vets.co', many)
    assert.ok(index.includes('<sitemapindex'))
    assert.ok(index.includes('https://vets.co/sitemap/0.xml'))
    assert.ok(index.includes('https://vets.co/sitemap/1.xml'))
    assert.ok(index.includes('https://vets.co/sitemap/3.xml'))
    assert.equal(index.includes('https://vets.co/'), true)
  })
})

describe('directoryClaimPrefill', () => {
  const berkeley = {
    slug: 'birgit-hafermann-dog-training-berkeley-ca-bl-016813',
    display_name: 'BIRGIT HAFERMANN DOG TRAINING',
    city: 'Berkeley',
    state: 'CA',
    category: 'dog trainer',
    license_number: 'BL-016813',
    source_url: 'https://example.com/bl',
    claimed: false as const,
  }

  it('prefills city and claim message from an imported row', () => {
    const prefill = directoryClaimPrefill([berkeley], berkeley.slug)
    assert.equal(prefill.city, 'Berkeley, CA')
    assert.equal(
      prefill.message,
      'I claim listing birgit-hafermann-dog-training-berkeley-ca-bl-016813 (BIRGIT HAFERMANN DOG TRAINING, Berkeley CA).',
    )
    assert.equal(findListing([berkeley], berkeley.slug)?.slug, berkeley.slug)
  })

  it('returns empty defaults when slug is missing or unknown', () => {
    assert.deepEqual(directoryClaimPrefill([berkeley], undefined), { city: '', message: '' })
    assert.deepEqual(directoryClaimPrefill([berkeley], ''), { city: '', message: '' })
    assert.deepEqual(directoryClaimPrefill([berkeley], 'not-a-real-listing'), { city: '', message: '' })
  })
})
