import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { labelsForSku, searchHopLabelProblems } from './search-hop-label.mjs'

test('the mismatched searches do not use product-page wording', () => {
  const problems = searchHopLabelProblems()
  assert.deepEqual(problems, [])
})

test('a Shop label on the next line is the hop label, and a different hop is not', () => {
  const lines = [
    'amazonHref="/go/amazon-brand/wire+dog+crate?s=tools"',
    'amazonLabel="Browse wire crates on Amazon →"',
    '</ShopCtas>',
    'amazonHref="/go/amazon-brand/cosequin+ds+maximum+strength?s=reviews"',
    'amazonLabel="Search Amazon for Cosequin DS"',
  ]
  assert.deepEqual(labelsForSku(lines, 3), ['amazonLabel="Search Amazon for Cosequin DS"'])
  assert.equal(labelsForSku(lines, 0).some((line) => line.includes('Browse wire')), true)
})

test('the QC workflow runs the search-hop label guard', () => {
  const yml = readFileSync(new URL('../../.github/workflows/qc.yml', import.meta.url), 'utf8')
  assert.match(yml, /node scripts\/ci\/search-hop-label\.mjs/)
})
