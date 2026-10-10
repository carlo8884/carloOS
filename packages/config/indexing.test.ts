import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isPreviewHost, isSiteIndexable, robotsTagForHost, shouldIndexHost } from './indexing.ts'

const off = { SITE_INDEXABLE: '' }
const legacyTrue = { SITE_INDEXABLE: 'true' }
const vetsOnly = { SITE_INDEXABLE: 'vets.co' }

describe('shouldIndexHost', () => {
  it('stays noindex until SITE_INDEXABLE names that apex', () => {
    assert.equal(shouldIndexHost('dog.com', off), false)
    assert.equal(shouldIndexHost('www.dog.com', off), false)
    assert.equal(shouldIndexHost('vets.co', off), false)
    assert.equal(robotsTagForHost('vets.co', off), 'noindex, nofollow')
  })

  it('does not treat SITE_INDEXABLE=true as a launch of every site', () => {
    assert.equal(isSiteIndexable(legacyTrue), false)
    for (const host of ['dog.com', 'fish.com', 'horses.com', 'vets.co', 'ferret.com', 'www.dog.com']) {
      assert.equal(shouldIndexHost(host, legacyTrue), false, host)
      assert.equal(robotsTagForHost(host, legacyTrue), 'noindex, nofollow', host)
    }
  })

  it('indexes only the named apex, including www of that apex', () => {
    assert.equal(shouldIndexHost('vets.co', vetsOnly), true)
    assert.equal(shouldIndexHost('www.vets.co', vetsOnly), true)
    assert.equal(robotsTagForHost('vets.co', vetsOnly), null)
    assert.equal(shouldIndexHost('horses.com', { SITE_INDEXABLE: 'horses.com' }), true)
    assert.equal(shouldIndexHost('ferret.com', { SITE_INDEXABLE: 'ferret.com' }), true)
    assert.equal(shouldIndexHost('www.ferret.com', { SITE_INDEXABLE: 'ferret.com' }), true)
  })

  it('keeps Dog.com and Fish.com noindex when another site flips', () => {
    for (const flag of ['vets.co', 'horses.com', 'ferret.com', 'horses.com,ferret.com']) {
      const env = { SITE_INDEXABLE: flag }
      assert.equal(shouldIndexHost('dog.com', env), false, flag)
      assert.equal(shouldIndexHost('www.dog.com', env), false, flag)
      assert.equal(shouldIndexHost('fish.com', env), false, flag)
      assert.equal(shouldIndexHost('www.fish.com', env), false, flag)
      assert.equal(robotsTagForHost('dog.com', env), 'noindex, nofollow', flag)
      assert.equal(robotsTagForHost('fish.com', env), 'noindex, nofollow', flag)
    }
    assert.equal(shouldIndexHost('horses.com', vetsOnly), false)
    assert.equal(shouldIndexHost('ferret.com', vetsOnly), false)
  })

  it('keeps preview and vercel.app hosts noindex even when the apex is named', () => {
    for (const host of [
      'dog-com-three.vercel.app',
      'carlo-os-vets-co.vercel.app',
      'dog-com-git-cursor-indexing-switch-6ba7-team.vercel.app',
      'localhost:3000',
      '127.0.0.1:3000',
      '',
    ]) {
      assert.equal(isPreviewHost(host), true, host)
      assert.equal(shouldIndexHost(host, vetsOnly), false, host)
      assert.equal(robotsTagForHost(host, vetsOnly), 'noindex, nofollow', host)
    }
  })

  it('does not treat a lookalike host as vercel.app, and does not index it unless named', () => {
    assert.equal(isPreviewHost('notvercel.app'), false)
    assert.equal(shouldIndexHost('notvercel.app', vetsOnly), false)
    assert.equal(shouldIndexHost('notvercel.app', { SITE_INDEXABLE: 'notvercel.app' }), true)
  })

  it('reads process.env.SITE_INDEXABLE when no env object is passed', () => {
    const prev = process.env.SITE_INDEXABLE
    try {
      delete process.env.SITE_INDEXABLE
      assert.equal(isSiteIndexable(), false)
      assert.equal(shouldIndexHost('dog.com'), false)
      assert.equal(robotsTagForHost('dog.com'), 'noindex, nofollow')
      process.env.SITE_INDEXABLE = 'true'
      assert.equal(isSiteIndexable(), false)
      assert.equal(shouldIndexHost('dog.com'), false)
      assert.equal(shouldIndexHost('fish.com'), false)
      process.env.SITE_INDEXABLE = 'vets.co'
      assert.equal(isSiteIndexable(), true)
      assert.equal(shouldIndexHost('vets.co'), true)
      assert.equal(shouldIndexHost('www.vets.co'), true)
      assert.equal(robotsTagForHost('vets.co'), null)
      assert.equal(shouldIndexHost('dog.com'), false)
      assert.equal(shouldIndexHost('fish.com'), false)
      assert.equal(robotsTagForHost('dog.com'), 'noindex, nofollow')
      assert.equal(robotsTagForHost('fish.com'), 'noindex, nofollow')
      assert.equal(shouldIndexHost('127.0.0.1:3840'), false)
      assert.equal(shouldIndexHost('carlo-os-vets-co.vercel.app'), false)
    } finally {
      if (prev === undefined) delete process.env.SITE_INDEXABLE
      else process.env.SITE_INDEXABLE = prev
    }
  })
})
