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
})
