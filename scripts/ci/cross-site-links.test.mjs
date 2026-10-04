import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { foreignRelativeLinks, violations } from './cross-site-links.mjs'

const routes = {
  'dog-com': new Set(['/reviews/best-dog-crates', '/reviews']),
  'fish-com': new Set(['/reviews', '/reviews/best-aquarium-filters']),
  'horses-com': new Set(['/reviews']),
  'vets-co': new Set(['/reviews', '/reviews/best-pet-insurance']),
  'ferret-com': new Set(['/reviews']),
}

describe('foreign relative links', () => {
  it('flags a dog crate path used as a relative link on the other sites', () => {
    for (const site of ['fish-com', 'horses-com', 'vets-co', 'ferret-com']) {
      const bad = foreignRelativeLinks(site, ['/reviews/best-dog-crates', '/reviews'], routes)
      assert.deepEqual(bad, [{ path: '/reviews/best-dog-crates', owner: 'dog-com' }])
    }
  })

  it('allows the same path on dog.com and ignores unknown paths', () => {
    assert.deepEqual(
      foreignRelativeLinks('dog-com', ['/reviews/best-dog-crates', '/tools/not-a-page'], routes),
      [],
    )
  })

  it('the earning sites have no relative link to another site\'s page', () => {
    assert.deepEqual(violations(), [])
  })
})
