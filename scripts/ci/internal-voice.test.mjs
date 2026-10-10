import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'
import { selfCheck, scanSource } from './internal-voice.mjs'

test('bad samples fail and real kit names pass', () => {
  const errors = selfCheck()
  assert.deepEqual(errors, [])
})

test('comments do not count as customer copy', () => {
  const src = '{/* already live on the other page, #1168, TL;DR */}\n<p>Pack a first-aid kit.</p>'
  assert.equal(scanSource(src).length, 0)
})

test('the qc workflow requires this guard', () => {
  const yml = readFileSync(new URL('../../.github/workflows/qc.yml', import.meta.url), 'utf8')
  assert.match(yml, /internal-voice/)
  assert.match(yml, /node scripts\/ci\/internal-voice\.mjs/)
})
