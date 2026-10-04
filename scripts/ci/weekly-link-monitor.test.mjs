import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import {
  citationUrlsFromSource,
  classifyStatus,
  goHrefsFromSource,
  renderReport,
} from './weekly-link-monitor-lib.mjs'

test('go hrefs and outbound citations are collected without own-site or asset hosts', () => {
  const src = `
    <a href="/go/amazon-brand/midwest+icrate?s=reviews-best-dog-crates">shop</a>
    <a href="/go/trupanion/home">quote</a>
    <a href="https://dog.com/reviews/best-dog-crates">self</a>
    <a href="https://avma.org/resources/pet-owners">AVMA</a>
    url: 'https://images.unsplash.com/photo-1'
    'https://schema.org'
    const note = \`https://example.com/docs\`
    const self = \`https://dog.com\${g.href}\`
  `
  assert.deepEqual(goHrefsFromSource(src), [
    '/go/amazon-brand/midwest+icrate',
    '/go/trupanion/home',
  ])
  assert.deepEqual(citationUrlsFromSource(src), [
    'https://avma.org/resources/pet-owners',
    'https://example.com/docs',
  ])
})

test('404 and connection errors fail; bot walls do not', () => {
  assert.equal(classifyStatus(200, ''), 'ok')
  assert.equal(classifyStatus(301, ''), 'ok')
  assert.equal(classifyStatus(404, ''), 'fail')
  assert.equal(classifyStatus(410, ''), 'fail')
  assert.equal(classifyStatus(500, ''), 'fail')
  assert.equal(classifyStatus(0, 'TimeoutError'), 'fail')
  assert.equal(classifyStatus(403, ''), 'blocked')
  assert.equal(classifyStatus(503, ''), 'blocked')
})

test('the report lists failures and does not mention anyone', () => {
  const body = renderReport({
    checkedAt: '2026-10-04T22:00Z',
    checked: 2,
    failures: [{ url: 'https://example.com/gone', detail: 'HTTP 404', where: 'apps/dog-com/src/app/reviews/page.tsx' }],
    blocked: [],
  })
  assert.match(body, /FAIL=1/)
  assert.match(body, /https:\/\/example.com\/gone/)
  assert.equal(/(^|\s)@/.test(body), false)
  const clean = renderReport({ checkedAt: '2026-10-04T22:00Z', checked: 1, failures: [], blocked: [] })
  assert.match(clean, /FAIL=0/)
  assert.match(clean, /## Failures\nnone/)
})

test('the workflow files one issue and cannot assign or request review', () => {
  const yml = readFileSync(new URL('../../.github/workflows/link-monitor.yml', import.meta.url), 'utf8')
  const stripped = yml.replace(/uses: actions\/[A-Za-z0-9-]+@v\d+/g, 'uses: action')
  assert.match(yml, /cron:/)
  assert.match(yml, /issues: write/)
  assert.equal(/assignees|reviewers|pull-requests:/.test(yml), false)
  assert.equal(/@/.test(stripped), false)
})
