import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildRobots } from './robots'

describe('buildRobots', () => {
  it('allows /directory and sitemap index/shards and links the sitemap index', () => {
    const robots = buildRobots('https://ferret.com')
    const star = Array.isArray(robots.rules)
      ? robots.rules.find((rule) => rule.userAgent === '*')
      : robots.rules
    assert.ok(star)
    const allow = star.allow
    const allowed = Array.isArray(allow) ? allow : [allow]
    assert.ok(allowed.includes('/directory'))
    assert.ok(allowed.includes('/sitemap.xml'))
    assert.ok(allowed.includes('/sitemap/'))
    assert.equal(robots.sitemap, 'https://ferret.com/sitemap.xml')
  })

  it('does not point ferret.com robots at ferrets.com', () => {
    const ferret = buildRobots('https://ferret.com')
    const ferrets = buildRobots('https://ferrets.com')
    assert.equal(ferret.sitemap, 'https://ferret.com/sitemap.xml')
    assert.equal(ferrets.sitemap, 'https://ferrets.com/sitemap.xml')
    assert.notEqual(ferret.sitemap, ferrets.sitemap)
  })
})
