import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')

test('earning-site header search submits to /search and stays out of the bar below 1280px', () => {
  const src = readFileSync(join(ROOT, 'packages/ui/src/components/Nav.tsx'), 'utf8')
  assert.match(src, /isEarningSiteId\(siteId\)/)
  assert.match(src, /id="nav-search-desktop"/)
  assert.match(src, /id="nav-search-mobile"/)
  assert.match(src, /action="\/search"/)
  assert.match(src, /name="q"/)
  assert.match(src, /hidden xl:block/)
  assert.doesNotMatch(src, /SearchBar/)
  assert.match(src, /htmlFor=\{id\}/)
  assert.match(src, /onEscape=\{closeMenu\}/)
  assert.match(src, /event\.key !== 'Escape'/)
  const results = readFileSync(join(ROOT, 'packages/ui/src/components/SiteSearch.tsx'), 'utf8')
  assert.match(results, /id="search-result-count"/)
  assert.match(results, /role="status"/)
  assert.match(results, /aria-live="polite"/)
  const missed = readFileSync(join(ROOT, 'packages/ui/src/components/MissedPage.tsx'), 'utf8')
  assert.match(missed, /kind === 'search' \? 'status'/)
})
