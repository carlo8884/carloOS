import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseDirectoryCsv, paginateDirectory, DIRECTORY_PAGE_SIZE, DIRECTORY_FEATURED_MAX } from './directory'

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
