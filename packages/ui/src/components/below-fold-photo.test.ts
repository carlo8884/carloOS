import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { displaySize } from '../lib/display-size.ts'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')

const SITES = [
  ['dog-com', 'dog-com:category-reviews'],
  ['fish-com', 'fish-com:category-reviews'],
  ['horses-com', 'horses-com:category-reviews'],
  ['vets-co', 'vets-co:category-reviews'],
  ['ferret-com', 'ferret-com:care-hero'],
]

test('display size keeps the ratio and caps the width attribute at 1200', () => {
  assert.deepEqual(displaySize(5910, 3940), { width: 1200, height: 800 })
  assert.deepEqual(displaySize(4499, 2999), { width: 1200, height: 800 })
  assert.deepEqual(displaySize(800, 600), { width: 800, height: 600 })
})

test('below-fold photos use an existing manifest key and explicit lazy dimensions', () => {
  const photo = readFileSync(join(ROOT, 'packages/ui/src/components/BelowFoldPhoto.tsx'), 'utf8')
  const card = readFileSync(join(ROOT, 'packages/ui/src/components/ImageCard.tsx'), 'utf8')
  const stock = readFileSync(join(ROOT, 'packages/ui/src/components/StockImage.tsx'), 'utf8')
  const manifest = JSON.parse(readFileSync(join(ROOT, 'packages/ui/src/data/image-manifest.json'), 'utf8'))

  for (const [, key] of SITES) {
    assert.match(photo, new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
    assert.equal(typeof manifest[key].width, 'number')
    assert.equal(typeof manifest[key].height, 'number')
    assert.ok(manifest[key].photographer || manifest[key].sourceUrl)
  }
  assert.match(photo, /belowFold/)
  assert.doesNotMatch(photo, /<StockImage[^>]*priority/)
  assert.match(stock, /belowFold \? false : priority/)
  assert.match(stock, /displaySize\(entry\.width, entry\.height\)/)
  assert.match(card, /width=\{width\}/)
  assert.match(card, /height=\{height\}/)
  assert.match(card, /loading=\{priority \? 'eager' : 'lazy'\}/)
  assert.match(card, /640px/)
})

test('gift guides, the missed page, and search results place the photo after the copy', () => {
  const missed = readFileSync(join(ROOT, 'packages/ui/src/components/MissedPage.tsx'), 'utf8')
  const search = readFileSync(join(ROOT, 'packages/ui/src/components/SiteSearch.tsx'), 'utf8')
  assert.ok(missed.indexOf('All {page.hub.title.toLowerCase()}') < missed.indexOf('<BelowFoldPhoto'))
  assert.ok(search.indexOf('</ul>') < search.indexOf('<BelowFoldPhoto'))
  for (const [site] of SITES) {
    const page = readFileSync(
      join(ROOT, 'apps', site, 'src/app/reviews/november-december-gift-guide/page.tsx'),
      'utf8',
    )
    assert.ok(page.indexOf('<FAQAccordion') < page.indexOf(`<BelowFoldPhoto siteId="${site}"`))
    assert.doesNotMatch(page, /<BelowFoldPhoto[^>]*priority/)
  }
})
