import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { cutoffDate, stalePriceLines } from './stale-price-report.mjs'

test('the cutoff is 45 days before the given day', () => {
  assert.equal(cutoffDate(new Date('2026-10-05T12:00:00Z'), 45), '2026-08-21')
  assert.equal(cutoffDate(new Date('2026-10-05T12:00:00Z'), 30), '2026-09-05')
})

test('a price line older than the cutoff is listed and a newer band is not', () => {
  const blame = [
    'abc1234 (carlo 2026-05-25 10) price="$149 + $9.99/mo"',
    'def5678 (carlo 2026-10-04 12) price="$140–160 + $8–12/mo"',
    'abc1234 (carlo 2026-05-25 14) // $149 is a comment',
  ].join('\n')
  const rows = stalePriceLines(blame, '2026-08-21')
  assert.equal(rows.length, 1)
  assert.equal(rows[0].date, '2026-05-25')
  assert.match(rows[0].code, /\$149/)
})

test('the workflow job is report-only and the script exits 0', () => {
  const script = readFileSync(new URL('./stale-price-report.mjs', import.meta.url), 'utf8')
  const yml = readFileSync(new URL('../../.github/workflows/qc.yml', import.meta.url), 'utf8')
  assert.match(script, /process\.exit\(0\)/)
  assert.equal(/process\.exit\(1\)/.test(script), false)
  assert.match(yml, /Prices older than 45 days \(report-only\)/)
  assert.match(yml, /node scripts\/ci\/stale-price-report\.mjs/)
})
