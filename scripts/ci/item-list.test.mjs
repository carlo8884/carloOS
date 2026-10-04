import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { itemListNames, pageProblems, rankingSets, reviewCardNames } from './item-list.mjs'

const picksPage = `
const PICKS = [
  { label: 'Best Wire', name: 'MidWest iCrate', href: '#midwest' },
  { label: 'Best Airline', name: 'Petmate Sky Kennel', href: '#petmate' },
]
const itemList = buildItemListSchema({
  name: 'Best Dog Crates',
  items: PICKS.map((pick) => ({ name: pick.name, url: 'https://dog.com/reviews/best-dog-crates' + pick.href })),
})
<QuickPicks items={PICKS} />
`

test('a Quick Picks page matches the pick names and rejects a rating', () => {
  assert.deepEqual(pageProblems('apps/dog-com/src/app/reviews/best-dog-crates/page.tsx', picksPage), [])
  const rated = picksPage.replace('name: pick.name', "name: pick.name, ratingValue: 9")
  assert.match(pageProblems('x', rated).join(' '), /must not carry/)
})

test('ReviewCard names are a ranking when there is no pick strip', () => {
  const src = `
    <ReviewCard id="a" name="Wysong Epigen 90" />
    <ReviewCard id="b" name="Frozen Feeder Mice & Chicks" />
    const itemList = buildItemListSchema({
      items: [
        { name: 'Wysong Epigen 90', url: 'https://ferret.com/diet/whole-prey-vs-kibble#a' },
        { name: 'Frozen Feeder Mice & Chicks', url: 'https://ferret.com/diet/whole-prey-vs-kibble#b' },
      ],
    })
  `
  assert.deepEqual(reviewCardNames(src), ['Wysong Epigen 90', 'Frozen Feeder Mice & Chicks'])
  assert.deepEqual(itemListNames(src), ['Wysong Epigen 90', 'Frozen Feeder Mice & Chicks'])
  assert.deepEqual(pageProblems('apps/ferret-com/src/app/diet/whole-prey-vs-kibble/page.tsx', src), [])
  assert.equal(rankingSets(src).length, 1)
})

test('the ItemList builder does not emit Review or AggregateRating', () => {
  const src = readFileSync(new URL('../../packages/ui/src/components/SEOHead.tsx', import.meta.url), 'utf8')
  const start = src.indexOf('export function buildItemListSchema')
  const body = src.slice(start, src.indexOf('export function buildHowToSchema', start))
  assert.match(body, /ItemList/)
  assert.equal(/AggregateRating|Review/.test(body), false)
})
