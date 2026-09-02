import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildMetadata } from './SEOHead'

describe('buildMetadata directory contract', () => {
  it('canonical and og match the unique city/listing title, not the homepage', () => {
    const city = buildMetadata({
      siteId: 'dog-com',
      title: 'Dog trainers in Avondale, AZ',
      description: '1 unclaimed licensed dog professionals stubs in Avondale, Arizona.',
      path: '/directory/az/avondale',
      type: 'website',
      category: 'Directory',
    })
    assert.equal(city.alternates?.canonical, 'https://dog.com/directory/az/avondale')
    assert.notEqual(city.alternates?.canonical, 'https://dog.com')
    assert.notEqual(city.alternates?.canonical, 'https://dog.com/')
    assert.equal(city.openGraph?.title, city.title)
    assert.equal(city.openGraph?.description, city.description)
    assert.equal(city.openGraph?.url, city.alternates?.canonical)

    const listing = buildMetadata({
      siteId: 'ferret-com',
      title: 'Ferret Dreams Rescue & Adoption — exotic-mammal pro in Denver, CO',
      description: 'Unclaimed license stub for Ferret Dreams Rescue & Adoption in Denver, CO.',
      path: '/directory/ferret-dreams-rescue-adoption-denver-co-611555041',
      type: 'website',
      category: 'Directory',
    })
    assert.equal(
      listing.alternates?.canonical,
      'https://ferret.com/directory/ferret-dreams-rescue-adoption-denver-co-611555041',
    )
    assert.equal(listing.openGraph?.title, listing.title)
    assert.equal(listing.openGraph?.description, listing.description)
    assert.ok(!String(listing.alternates?.canonical).includes('ferrets.com'))
  })
})
