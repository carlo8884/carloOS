import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { reportText, zeroResultRows } from './zero-result-search-report.mjs'

test('rows keep real queries and sort by count', () => {
  const rows = zeroResultRows([
    { site: 'dog-com', query: ' kennel ', count: 2 },
    { site: 'fish-com', query: 'sump', count: 9 },
    { site: 'dog-com', query: 'x', count: 4 },
    { query: '', count: 3 },
    { site: 'horses-com', query: 'headcollar', count: 2 },
  ])
  assert.deepEqual(rows, [
    { site: 'fish-com', query: 'sump', count: 9 },
    { site: 'dog-com', query: 'kennel', count: 2 },
    { site: 'horses-com', query: 'headcollar', count: 2 },
  ])
})

test('the note stands in until an analytics export exists', () => {
  const note = reportText([], null)
  assert.match(note, /No analytics export yet/)
  assert.match(note, /site_search_no_results/)
  const listed = reportText([{ site: 'vets-co', query: 'deductible', count: 3 }], 'export.json')
  assert.match(listed, /vets-co 3 deductible/)
})

test('the weekly workflow runs the report and does not fail the build', () => {
  const script = readFileSync(new URL('./zero-result-search-report.mjs', import.meta.url), 'utf8')
  const yml = readFileSync(new URL('../../.github/workflows/zero-result-search.yml', import.meta.url), 'utf8')
  assert.equal(/process\.exit\(1\)/.test(script), false)
  assert.match(yml, /cron:/)
  assert.match(yml, /zero-result-search-report\.mjs/)
})
