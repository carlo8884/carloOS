import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

describe('EmailCapture never says Subscribe', () => {
  it('keeps the default CTA and loading label off Subscribe', () => {
    const src = readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), 'EmailCapture.tsx'),
      'utf8',
    )
    assert.equal(/['"`]Subscribe/.test(src), false)
    assert.equal(src.includes('Subscribing'), false)
    assert.equal(src.includes('Send the notes'), true)
    assert.equal(src.includes('Sending…'), true)
  })

  it('pauses email-magnet delivery on the five earning sites', () => {
    const src = readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), 'EmailCapture.tsx'),
      'utf8',
    )
    assert.equal(src.includes("'dog-com'"), true)
    assert.equal(src.includes("'fish-com'"), true)
    assert.equal(src.includes("'horses-com'"), true)
    assert.equal(src.includes("'vets-co'"), true)
    assert.equal(src.includes("'ferret-com'"), true)
    assert.equal(src.includes('On this page — not emailed'), true)
    assert.equal(src.includes('Email delivery is not live'), true)
    assert.equal(src.includes('Save a copy'), true)
    assert.equal(src.includes("data-magnet=\"on-page\""), true)
  })
})
