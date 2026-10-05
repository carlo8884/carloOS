import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { MISSED_PAGES } from './missed-page.ts'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'] as const

test('each earning site offers three real guides, a hub, and a calculator', () => {
  for (const site of SITES) {
    const page = MISSED_PAGES[site]
    assert.ok(page, site)
    assert.equal(page.guides.length, 3)
    const hrefs = [page.hub.href, page.calculator.href, ...page.guides.map((guide) => guide.href)]
    for (const href of hrefs) {
      assert.equal(href.includes('dog-age-calculator'), false, href)
      const file = join(ROOT, 'apps', site, 'src/app', href.slice(1), 'page.tsx')
      assert.equal(existsSync(file), true, `${site} ${href}`)
    }
  }
})

test('404 view tracking stays on the missing page', () => {
  const src = readFileSync(join(ROOT, 'packages/ui/src/components/MissedPage.tsx'), 'utf8')
  assert.match(src, /kind === 'missing' \? <TrackPage404/)
  assert.match(readFileSync(join(ROOT, 'packages/ui/src/components/TrackPage404.tsx'), 'utf8'), /page_404/)
  const results = readFileSync(join(ROOT, 'packages/ui/src/components/SiteSearch.tsx'), 'utf8')
  assert.match(results, /kind="search"/)
  assert.equal(results.includes('page_404'), false)
  for (const site of SITES) {
    const search = readFileSync(join(ROOT, 'apps', site, 'src/app/search/page.tsx'), 'utf8')
    assert.match(search, /SiteSearch/)
    assert.equal(search.includes('page_404'), false)
    assert.match(search, /noIndex: true/)
  }
})
