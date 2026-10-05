import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { searchCategory } from '../../../../scripts/build-search-index.mjs'
import { rankSearch, searchApiBody, type SearchEntry } from './site-search.ts'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../../../..')

test('hub category follows guides, reviews, comparisons, and tools', () => {
  assert.equal(searchCategory('/reviews/fi-vs-tractive-guide', ['/guides']), 'comparisons')
  assert.equal(searchCategory('/reviews/best-dog-harnesses', ['/guides']), 'reviews')
  assert.equal(searchCategory('/tools/dog-food-amount-calculator', ['/guides']), 'tools')
  assert.equal(searchCategory('/setup/aquarium-cycling-guide', ['/setup']), 'guides')
  assert.equal(searchCategory('/care/cage-setup', ['/care']), 'guides')
  assert.equal(searchCategory('/breeds/akita', ['/guides']), null)
})

test('a title match ranks above a description-only match', () => {
  const entries: SearchEntry[] = [
    { path: '/reviews/bowls', title: 'Slow feeder bowls', description: 'A bowl', category: 'reviews' },
    { path: '/guides/other', title: 'Something else', description: 'slow feeder mentioned here', category: 'guides' },
  ]
  const hits = rankSearch(entries, 'slow feeder')
  assert.equal(hits[0]?.path, '/reviews/bowls')
  assert.equal(hits[0]?.type, 'review')
  assert.equal(hits.length, 2)
})

test('a typed word outranks its synonym, and kennel still finds crates', () => {
  const entries: SearchEntry[] = [
    { path: '/reviews/kennel', title: 'Kennel', description: 'a kennel', category: 'reviews' },
    { path: '/reviews/best-dog-crates', title: 'Dog crates', description: 'wire crate', category: 'reviews' },
  ]
  const hits = rankSearch(entries, 'kennel')
  assert.equal(hits[0]?.path, '/reviews/kennel')
  assert.equal(hits[1]?.path, '/reviews/best-dog-crates')
  const dog = JSON.parse(readFileSync(join(ROOT, 'apps/dog-com/src/data/search-index.json'), 'utf8'))
  assert.equal(rankSearch(dog.entries, 'kennel').length > 0, true)
  const horses = JSON.parse(readFileSync(join(ROOT, 'apps/horses-com/src/data/search-index.json'), 'utf8'))
  assert.equal(rankSearch(horses.entries, 'headcollar').some((hit) => hit.path.includes('halter')), true)
})

test('queries shorter than two characters match nothing', () => {
  const entries: SearchEntry[] = [{ path: '/tools/food', title: 'Food grams', description: 'daily', category: 'tools' }]
  assert.equal(rankSearch(entries, 'f').length, 0)
  assert.equal(rankSearch(entries, '  ').length, 0)
})

test('the api returns the full count and a limited list', () => {
  const entries: SearchEntry[] = Array.from({ length: 5 }, (_, i) => ({
    path: `/tools/item-${i}`,
    title: `Food item ${i}`,
    description: 'daily food',
    category: 'tools',
  }))
  const body = searchApiBody(entries, 'http://localhost/api/search?q=food&limit=2')
  assert.equal(body.count, 5)
  assert.equal(body.results.length, 2)
  assert.equal('score' in body.results[0], false)
})

test('committed indexes match the pages and include the known hubs', () => {
  execFileSync(process.execPath, ['scripts/build-search-index.mjs', '--check'], { cwd: ROOT })
  const expect: Record<string, [string, string]> = {
    'dog-com': ['/reviews/fi-vs-tractive-guide', 'comparisons'],
    'fish-com': ['/setup/aquarium-cycling-guide', 'guides'],
    'horses-com': ['/tools/horse-water-calculator', 'tools'],
    'vets-co': ['/guides/cost-of-veterinary-care', 'guides'],
    'ferret-com': ['/care/cage-setup', 'guides'],
  }
  for (const [site, [path, category]] of Object.entries(expect)) {
    const index = JSON.parse(readFileSync(join(ROOT, 'apps', site, 'src/data/search-index.json'), 'utf8'))
    const entry = index.entries.find((row: SearchEntry) => row.path === path)
    assert.equal(entry?.category, category, `${site} ${path}`)
    assert.equal(index.entries.some((row: SearchEntry) => row.path === '/search'), false)
  }
  const track = readFileSync(join(ROOT, 'packages/ui/src/components/TrackSiteSearch.tsx'), 'utf8')
  assert.match(track, /trackEvent\('site_search'/)
  assert.match(track, /site_search_no_results/)
  assert.match(track, /resultCount === 0/)
  assert.match(track, /search_term/)
  assert.match(track, /result_count/)
})
