import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { wwwApexRedirect } from './apex-redirect.ts'
import { robotsTagForHost } from './indexing.ts'

describe('wwwApexRedirect', () => {
  it('308 targets for the three launch www hosts, including the query', () => {
    assert.equal(
      wwwApexRedirect('www.vets.co', '/health/emergency-signs', '?q=1'),
      'https://vets.co/health/emergency-signs?q=1',
    )
    assert.equal(wwwApexRedirect('www.horses.com:443', '/'), 'https://horses.com/')
    assert.equal(
      wwwApexRedirect('WWW.FERRET.COM', '/tools/cost-calculator', 's=1'),
      'https://ferret.com/tools/cost-calculator?s=1',
    )
  })

  it('does not redirect Dog, Fish, apex hosts, or previews', () => {
    for (const host of [
      'dog.com',
      'www.dog.com',
      'fish.com',
      'www.fish.com',
      'vets.co',
      'horses.com',
      'ferret.com',
      'carlo-os-vets-co.vercel.app',
      'www.carlo-os-vets-co.vercel.app',
      'localhost:3000',
    ]) {
      assert.equal(wwwApexRedirect(host, '/'), null, host)
    }
  })

  it('keeps previews, Dog, and Fish noindex when a launch apex is named', () => {
    for (const flag of ['vets.co', 'horses.com', 'ferret.com']) {
      const env = { SITE_INDEXABLE: flag }
      assert.equal(robotsTagForHost('dog.com', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('www.dog.com', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('fish.com', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('www.fish.com', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('carlo-os-vets-co.vercel.app', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('horses-com.vercel.app', env), 'noindex, nofollow')
      assert.equal(robotsTagForHost('ferret-com.vercel.app', env), 'noindex, nofollow')
    }
  })
})
