import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isPreviewHost, isSiteIndexable, robotsTagForHost, shouldIndexHost } from './indexing.ts'

const off = { SITE_INDEXABLE: '' }
const on = { SITE_INDEXABLE: 'true' }

describe('shouldIndexHost', () => {
  it('stays noindex until SITE_INDEXABLE=true', () => {
    assert.equal(shouldIndexHost('dog.com', off), false)
    assert.equal(shouldIndexHost('www.dog.com', off), false)
    assert.equal(robotsTagForHost('vets.co', off), 'noindex, nofollow')
  })

  it('indexes the apex only after the switch is on', () => {
    assert.equal(shouldIndexHost('dog.com', on), true)
    assert.equal(shouldIndexHost('vets.co', on), true)
    assert.equal(shouldIndexHost('fish.com', on), true)
    assert.equal(shouldIndexHost('horses.com', on), true)
    assert.equal(shouldIndexHost('ferret.com', on), true)
    assert.equal(robotsTagForHost('dog.com', on), null)
  })

  it('keeps preview and vercel.app hosts noindex even when the switch is on', () => {
    for (const host of [
      'dog-com-three.vercel.app',
      'dog-com-git-cursor-indexing-switch-6ba7-team.vercel.app',
      'localhost:3000',
      '127.0.0.1:3000',
      '',
    ]) {
      assert.equal(isPreviewHost(host), true, host)
      assert.equal(shouldIndexHost(host, on), false, host)
      assert.equal(robotsTagForHost(host, on), 'noindex, nofollow', host)
    }
  })

  it('does not treat a lookalike host as vercel.app', () => {
    assert.equal(isPreviewHost('notvercel.app'), false)
    assert.equal(shouldIndexHost('notvercel.app', on), true)
  })

  it('reads process.env.SITE_INDEXABLE when no env object is passed', () => {
    const prev = process.env.SITE_INDEXABLE
    try {
      delete process.env.SITE_INDEXABLE
      assert.equal(isSiteIndexable(), false)
      assert.equal(shouldIndexHost('dog.com'), false)
      assert.equal(robotsTagForHost('dog.com'), 'noindex, nofollow')
      process.env.SITE_INDEXABLE = 'true'
      assert.equal(isSiteIndexable(), true)
      assert.equal(shouldIndexHost('dog.com'), true)
      assert.equal(robotsTagForHost('dog.com'), null)
      assert.equal(shouldIndexHost('127.0.0.1:3840'), false)
    } finally {
      if (prev === undefined) delete process.env.SITE_INDEXABLE
      else process.env.SITE_INDEXABLE = prev
    }
  })
})
