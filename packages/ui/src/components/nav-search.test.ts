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
})
