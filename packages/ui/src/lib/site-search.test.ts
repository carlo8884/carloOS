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

test('a short disease name does not match inside a longer word', () => {
  const entries: SearchEntry[] = [
    { path: '/reviews/api-vs-salifert-guide', title: 'API Master Kit vs Salifert', description: 'Which water test to buy', category: 'comparisons' },
    { path: '/tools/fish-disease-symptom-checker', title: 'Fish Disease Symptom Checker', description: 'Signs that match ich, velvet, and fin rot', category: 'tools' },
    { path: '/tools/filter-gph-calculator', title: 'Filter GPH', description: 'cichlid or reef turnover', category: 'tools' },
  ]
  const hits = rankSearch(entries, 'ich')
  assert.deepEqual(hits.map((hit) => hit.path), ['/tools/fish-disease-symptom-checker'])
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
  const first: Record<string, [string, string][]> = {
    'dog-com': [
      ['crate size', '/tools/dog-crate-size-calculator'],
      ['how much to feed puppy', '/tools/dog-food-amount-calculator'],
      ['dog crates', '/reviews/best-dog-crates'],
      ['gps tracker', '/reviews/best-dog-gps-tracker'],
      ['joint supplements', '/reviews/best-joint-supplements'],
      ['slow feeder', '/reviews/best-slow-feeder-bowls'],
      ['harness size', '/tools/harness-collar-size'],
      ['puppy food', '/reviews/best-dog-food-for-puppies'],
      ['krate size', '/tools/dog-crate-size-calculator'],
      ['kennel', '/reviews/best-dog-crates'],
    ],
    'fish-com': [
      ['betta tank mates', '/species/betta-fish-tank-mates'],
      ['heater wattage', '/tools/heater-wattage-calculator'],
      ['filter gph', '/tools/filter-gph-calculator'],
      ['aquarium cycling', '/tools/aquarium-cycling-estimator'],
      ['stocking calculator', '/tools/stocking-calculator'],
      ['water change', '/tools/water-change-calculator'],
      ['nano tank', '/setup/nano-tank-setup'],
      ['fish disease', '/tools/fish-disease-symptom-checker'],
      ['filters', '/reviews/best-aquarium-filters'],
      ['cyceling', '/setup/aquarium-cycling-guide'],
    ],
    'horses-com': [
      ['horse weight', '/tools/horse-weight-calculator'],
      ['blanket size', '/tools/horse-blanket-size-calculator'],
      ['how much hay', '/tools/horse-feed-calculator'],
      ['horse water', '/tools/horse-water-calculator'],
      ['winter blanket', '/reviews/best-winter-horse-blankets'],
      ['halter', '/reviews/nylon-vs-breakaway-halter-guide'],
      ['blankets', '/reviews/best-winter-horse-blankets'],
      ['horse wieght', '/tools/horse-weight-calculator'],
      ['feed calculator', '/tools/horse-feed-calculator'],
      ['colic', '/health/colic'],
    ],
    'vets-co': [
      ['is my pet an emergency', '/tools/is-this-a-cat-emergency'],
      ['emergency vet cost', '/guides/emergency-vet-costs'],
      ['pet insurance', '/tools/insurance-finder'],
      ['cat calories', '/tools/cat-calorie-calculator'],
      ['insurance worth it', '/tools/pet-insurance-worth-it-calculator'],
      ['vet costs', '/guides/cost-of-veterinary-care'],
      ['emergancy', '/tools/is-this-a-cat-emergency'],
      ['reimbursement', '/tools/insurance-reimbursement-estimator'],
      ['vaccines', '/health/dog-vaccinations-guide'],
      ['heartworm', '/health/heartworm-in-dogs'],
    ],
    'ferret-com': [
      ['ferret cage', '/reviews/best-ferret-cage'],
      ['cage size', '/tools/cage-size-calculator'],
      ['ferret food', '/tools/food-evaluator'],
      ['litter', '/reviews/best-ferret-litter'],
      ['harness', '/reviews/best-ferret-harness'],
      ['cages', '/reviews/best-ferret-cage'],
      ['ferret kage', '/reviews/best-ferret-cage'],
      ['diet', '/care/diet-basics'],
      ['adrenal', '/health/adrenal-disease'],
      ['kibble', '/diet/whole-prey-vs-kibble'],
    ],
  }
  let checked = 0
  for (const [site, rows] of Object.entries(first)) {
    const index = JSON.parse(readFileSync(join(ROOT, 'apps', site, 'src/data/search-index.json'), 'utf8'))
    for (const [query, path] of rows) {
      const hit = rankSearch(index.entries, query)[0]
      assert.equal(hit?.path, path, `${site} “${query}”`)
      checked += 1
    }
  }
  assert.equal(checked, 50)

  const track = readFileSync(join(ROOT, 'packages/ui/src/components/TrackSiteSearch.tsx'), 'utf8')
  assert.match(track, /trackEvent\('site_search'/)
  assert.match(track, /site_search_no_results/)
  assert.match(track, /resultCount === 0/)
  assert.match(track, /search_term/)
  assert.match(track, /result_count/)
})
