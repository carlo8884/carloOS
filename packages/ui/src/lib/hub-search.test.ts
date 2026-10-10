import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { hubQueryMatches } from './hub-search.ts'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')

test('empty query keeps every card', () => {
  assert.equal(hubQueryMatches('', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('   ', 'Best Dog Crates', 'Housing'), true)
})

test('matches title or topic, and requires every word', () => {
  assert.equal(hubQueryMatches('crate', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('housing', 'Best Dog Crates', 'Housing'), true)
  assert.equal(hubQueryMatches('winter blanket', 'Best Winter Horse Blankets', 'Turnout'), true)
  assert.equal(hubQueryMatches('winter saddle', 'Best Winter Horse Blankets', 'Turnout'), false)
})

test('ignores letter case', () => {
  assert.equal(hubQueryMatches('TRUPANION', 'Trupanion vs Healthy Paws', 'Insurance'), true)
})

test('smoke tests target the hub search, not the header field', () => {
  const hub = readFileSync(join(ROOT, 'packages/ui/src/components/HubSearch.tsx'), 'utf8')
  const nav = readFileSync(join(ROOT, 'packages/ui/src/components/Nav.tsx'), 'utf8')
  assert.match(hub, /data-testid="hub-search"/)
  assert.doesNotMatch(nav, /data-testid="hub-search"/)
  for (const spec of ['e2e/hub-groups.spec.ts', 'e2e/security-headers.spec.ts']) {
    const src = readFileSync(join(ROOT, spec), 'utf8')
    assert.match(src, /getByTestId\('hub-search'\)/)
    assert.doesNotMatch(src, /form\[role="search"\] input/)
  }
})
