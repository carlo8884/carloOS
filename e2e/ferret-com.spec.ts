import { expect, test } from '@playwright/test'
import { expectAAContrast } from './contrast'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'
import { jsonLdProblems } from './jsonld'
import { expectStampedLastmod } from './sitemap-lastmod'

test('cage guide, cage setup, tagged hop', async ({ page }) => {
  await page.goto('/reviews/best-ferret-cage')
  await expect(page.getByRole('heading', { name: /Best Ferret Cage/ })).toBeVisible()

  const pick = page.locator('#ferret-nation')
  await expect(pick.getByRole('link', { name: 'Check price of the Ferret Nation double unit on Amazon' })).toHaveAttribute(
    'href',
    '/go/amazon/B0054U8UGW?s=reviews-best-ferret-cage',
  )

  await page.getByRole('link', { name: 'Cage Setup' }).first().click()
  await expect(page).toHaveURL(/\/care\/cage-setup\/?$/)
  await expect(page.getByRole('heading', { name: /Cage Setup|Setting Up/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon/B0054U8UGW?s=reviews-best-ferret-cage',
    [`https://amazon.com/dp/B0054U8UGW`, `tag=${AMAZON_TAG}`],
  )
})

test('cage calculator: one ferret with short out-time gets the Ferret Nation, not the Kaytee', async ({ page }) => {
  await page.goto('/tools/cage-size-calculator')
  await page.locator('#cs-ferrets').fill('1')
  const pick = page.locator('[data-result-pick]')

  await page.getByRole('button', { name: '4 h', exact: true }).click()
  await expect(pick.locator('a[href^="/go/amazon/"]')).toHaveAttribute('href', /B008FONT2Y/)

  await page.getByRole('button', { name: '< 4 h', exact: true }).click()
  await expect(pick.locator('a[href^="/go/amazon/"]')).toHaveAttribute('href', /B0054U8UGW/)
  await expect(pick).toContainText('With under four hours out')
})

test('cost calculator: cage and food cards follow ferret count, housing, and food style', async ({ page }) => {
  await page.goto('/tools/cost-calculator')
  const cage = page.locator('[data-cost-pick="cage"]')
  const food = page.locator('[data-cost-pick="food"]')

  await expect(cage.locator('a[href^="/go/amazon/"]')).toHaveAttribute('href', '/go/amazon/B0054U8UGW?s=tools-cost-calculator')

  await page.locator('#cc-ferrets').fill('1')
  await expect(cage.locator('a[href^="/go/amazon/"]')).toHaveAttribute('href', '/go/amazon/B008FONT2Y?s=tools-cost-calculator')

  await page.getByRole('button', { name: 'Room / playpen', exact: true }).click()
  await expect(cage.locator('a[href*="/go/"]')).toHaveCount(0)
  await expect(cage.getByRole('link', { name: 'Read the ferret cage review' })).toHaveAttribute('href', '/reviews/best-ferret-cage')

  await expect(food.locator('a[href^="/go/amazon-brand/"]')).toHaveAttribute(
    'href',
    '/go/amazon-brand/high+protein+ferret+food+kibble?s=tools-cost-calculator',
  )
  await page.getByRole('button', { name: 'Whole-prey / raw', exact: true }).click()
  await expect(food.locator('a[href*="/go/"]')).toHaveCount(0)
  await expect(food.getByRole('link', { name: 'Read whole-prey vs kibble for ferrets' })).toHaveAttribute('href', '/diet/whole-prey-vs-kibble')
})

const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-ferret-cage', pick: 'Ferret Nation' },
  { path: '/reviews/best-ferret-litter', pick: 'paper pellets' },
  { path: '/reviews/best-ferret-harness', pick: 'vest harness' },
  { path: '/reviews/wysong-vs-marshall-kibble-guide', pick: 'Wysong' },
  { path: '/reviews/vest-vs-h-harness-guide', pick: 'vest harness' },
  { path: '/reviews/fall-molt-brush-guide', pick: 'slicker' },
  { path: '/reviews/winter-harness-fit-guide', pick: 'vest harness' },
  { path: '/reviews/paper-vs-wood-litter-guide', pick: 'paper pellets' },
  { path: '/reviews/ferret-nation-vs-prevue-guide', pick: 'Ferret Nation' },
  { path: '/reviews/kaytee-vs-ferret-nation-guide', pick: 'Ferret Nation' },
  { path: '/reviews/critter-nation-vs-marshall-cage-guide', pick: 'Critter Nation' },
]

test.describe('money fold at 390', () => {
  for (const item of FOLD) {
    test(item.path, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(item.path)
      const answer = page.locator('[data-fold="answer"]')
      await expect(answer).toBeVisible()
      const answerBox = await answer.boundingBox()
      expect(answerBox).toBeTruthy()
      expect(answerBox!.y + answerBox!.height).toBeLessThan(844)
      const text = (await answer.innerText()).replace(/\s+/g, ' ')
      expect(text.toLowerCase()).toContain(item.pick.toLowerCase())
      expect(text).not.toMatch(/notes below|partner ID|We cut|We graded/i)
      const offer = page.locator('[data-fold="offer"]')
      const hop = offer.locator('a[href*="/go/"], a[href="/reviews/best-pet-insurance"]')
      await expect(hop.first()).toBeVisible()
      const hopBox = await hop.first().boundingBox()
      expect(hopBox).toBeTruthy()
      expect(hopBox!.y + hopBox!.height).toBeLessThan(844)
      const note = offer.locator('[data-affiliate-disclosure], [data-quote-note]')
      await expect(note.first()).toBeVisible()
      const noteBox = await note.first().boundingBox()
      expect(noteBox).toBeTruthy()
      expect(noteBox!.y).toBeLessThan(844)
      expect(Math.abs((noteBox!.y) - (hopBox!.y))).toBeLessThan(180)
      await expectMoneyCopy(page)
    })
  }
})

test('ferret fix superlatives: product cards drop unsourced reputation and superlative claims', async ({ page }) => {
  const removed = /track record|favoured by keepers|reference multi-ferret cage|keeping community|Community reference standard|default recommendation|ferret-keeper community|Excellent door access|excellent access|Lowest dust profile|Starch-free premium kibble/i
  for (const path of [
    '/diet/best-ferret-kibble',
    '/care/diet-basics',
    '/reviews/wysong-vs-carniwhole-guide',
    '/reviews/best-ferret-cage',
    '/care/cage-setup',
    '/care/litter-training',
    '/reviews/best-ferret-litter',
    '/diet/whole-prey-vs-kibble',
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(await page.locator('body').innerText(), path).not.toMatch(removed)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).not.toMatch(removed)
  }

  await page.goto('/care/cage-setup')
  await expect(page.locator('body')).toContainText('Full-width double doors per level')
  await page.goto('/care/litter-training')
  await expect(page.locator('body')).toContainText('Very low dust')
  await page.goto('/diet/whole-prey-vs-kibble')
  await expect(page.locator('body')).toContainText('Marketed as starch-free — the lower-risk base diet')
})

test('ferret fix audit: kibble top pick card and quick pick link to the Wysong Epigen 90 Amazon ASIN', async ({ page }) => {
  await page.goto('/diet/best-ferret-kibble')
  const hop = '/go/amazon/B019W9VXZK?s=best-ferret-kibble'

  const card = page.locator('#wysong-epigen-90')
  await expect(card.getByRole('link', { name: /Check price of Wysong Epigen 90 on Amazon/ })).toHaveAttribute('href', hop)
  await expect(card).not.toContainText('Available from Wysong')
  await expect(page.locator('a[href^="/go/wysong"], a[href^="/go/marshall"]')).toHaveCount(0)

  await expect(page.locator(`a[href="${hop}"]`).first()).toBeVisible()
  expect(await page.locator(`a[href="${hop}"]`).count()).toBeGreaterThanOrEqual(3)

  await expectHop(page.request, hop, ['https://amazon.com/dp/B019W9VXZK', `tag=${AMAZON_TAG}`])
})

test('litter review and starter kit: shop links and JSON-LD use Amazon, not Chewy', async ({ page }) => {
  await page.goto('/reviews/best-ferret-litter')
  await expect(page.locator('[href*="/go/chewy"]')).toHaveCount(0)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toContain('go/chewy')
  expect(ld).toContain('https://ferret.com/go/amazon-brand/recycled+paper+pellet+litter+non+clumping')
  const topPick = page.locator('#paper-pellet a[href^="/go/"]').first()
  await expect(topPick).toHaveAttribute('href', /^\/go\/amazon/)

  await page.goto('/ferret-starter-kit')
  await expect(page.locator('body')).toContainText('Prevue Feisty Ferret')
  await expect(page.locator('body')).not.toContainText(/numeric id|Chewy search/i)
})

test('every review route rejects page-about-itself copy', async ({ page }) => {
  test.setTimeout(240_000)
  for (const path of reviewRoutes('ferret-com')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})

test('kibble guide search data points at the Amazon hop or on-page picks', async ({ page }) => {
  await page.goto('/diet/best-ferret-kibble', { waitUntil: 'domcontentloaded' })
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/ferret\.com\/go\/(wysong|marshall|carniwhole|chewy)/)
  expect(ld).toContain('go/amazon/B019W9VXZK')
  expect(ld).toContain('best-ferret-kibble#marshall-premium-diet')
})

test('ferret fix T4: starter kit, adrenal, and Marshall cards drop internal link wording', async ({ page }) => {
  const internal = /numeric id|not a confirmed|stays below|comfort card|Chewy search|this card|no longer resolves|this button opens|this opens|results in this search|the search returns|kit link/i
  for (const path of [
    '/ferret-starter-kit',
    '/health/adrenal-disease',
    '/health/aging-ferret-care',
    '/care/bathing-and-grooming',
    '/care/cage-setup',
    '/care/litter-training',
    '/care/exercise-and-enrichment',
    '/behavior/leash-and-harness-training',
    '/behavior/diy-enrichment-toys',
    '/behavior/stress-signs',
    '/behavior/digging-and-burrowing',
    '/reviews/critter-nation-vs-marshall-cage-guide',
    '/reviews/paper-vs-grass-litter-guide',
    '/diet/whole-prey-vs-kibble',
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(await page.locator('body').innerText(), path).not.toMatch(internal)
  }
})

test('ferret fix T5: disclosure pages do not claim the Chewy program, and keep the Amazon Associates statement', async ({ page }) => {
  for (const path of ['/disclosure', '/legal/affiliate-disclosure']) {
    await page.goto(path)
    const body = await page.locator('main').innerText()
    expect(body).not.toMatch(/Chewy Affiliate Program/i)
    expect(body).not.toMatch(/participa\w*[^.]*\bChewy/i)
    expect(body).toMatch(/As an Amazon Associate we earn from qualifying purchases/)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld).not.toMatch(/participa\w*[^.]*\bChewy|Chewy Affiliate Program/i)
  }
})

test('ferret fix P1: cage review and home standalone links are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const [path, expected] of [
    ['/reviews/best-ferret-cage', ['How we pick', 'How we pick']],
    ['/', ['All ferret tools →', 'Gear buyer guides →']],
  ] as const) {
    await page.goto(path)
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'))
        .filter((a) => !a.closest('p, li'))
        .map((a) => ({ text: a.textContent?.trim() ?? '', rect: a.getBoundingClientRect(), hidden: getComputedStyle(a).visibility === 'hidden' }))
        .filter(({ rect, hidden }) => !hidden && rect.width > 1 && rect.height > 1)
        .map(({ text, rect }) => ({ text, height: Math.round(rect.height * 10) / 10 })),
    )
    const named = links.filter(({ text }) => (expected as readonly string[]).includes(text))
    expect(named.map(({ text }) => text).sort(), path).toEqual([...expected].sort())
    expect(links.filter(({ height }) => height < 24).map(({ text, height }) => `${text} (${height}px)`), path).toEqual([])
  }
})

test('ferret fix T6: grooming page drops unsourced vet-approved and practice-standard claims', async ({ page }) => {
  const removed = /vet-approved|vet-recommended|exotic-pet practice|first-line/i
  await page.goto('/care/bathing-and-grooming')
  expect(await page.locator('body').innerText()).not.toMatch(removed)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(removed)
  await expect(page.locator('#pet-ear-cleaner')).toContainText('Pet Ear Cleaner (Epi-Otic style)')
  await expect(page.locator('#marshall-ferret-shampoo')).toContainText('A sensible default for a ferret bathed only a few times a year.')
})

test('ferret fix M5: wood litter and ear cleaner cards get one Amazon search button; held and unmatched cards stay unlinked', async ({ page }) => {
  await page.goto('/reviews/best-ferret-litter')
  for (const [id, query] of [
    ['paper-pellet', 'recycled+paper+pellet+litter+non+clumping'],
    ['wood-pellet', 'heat+treated+wood+pellet+litter'],
  ] as const) {
    const shop = page.locator(`#${id} a[href^="/go/"]`)
    await expect(shop, id).toHaveCount(1)
    await expect(shop, id).toHaveAttribute('href', `/go/amazon-brand/${query}?s=reviews-best-ferret-litter`)
  }
  // No Amazon search returned a non-clumping grass pellet litter, so this card stays without a button.
  await expect(page.locator('#grass-pellet a[href^="/go/"]')).toHaveCount(0)
  let ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld.match(/ferret\.com\/go\/[^"\s]+/g)?.filter((hop) => !hop.startsWith('ferret.com/go/amazon-brand/')) ?? []).toEqual([])
  expect(ld).toContain('best-ferret-litter#wood-pellet')

  await page.goto('/care/bathing-and-grooming')
  const ear = page.locator('#pet-ear-cleaner a[href^="/go/"]')
  await expect(ear).toHaveCount(1)
  await expect(ear).toHaveAttribute('href', '/go/amazon-brand/pet+ear+cleaner?s=care-bathing-and-grooming')
  await expect(page.locator('#marshall-ferret-shampoo a[href^="/go/"]')).toHaveCount(0)
  ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/\/go\/(marshall|chewy|wysong)\b/)
})

test('ferret fix Q3: comparison table caption reads "At a glance", not internal wording', async ({ page }) => {
  await page.goto('/diet/kit-vs-adult-feeding', { waitUntil: 'domcontentloaded' })
  expect(await page.content()).not.toMatch(/from the sentences on this page/i)
  await expect(page.locator('caption', { hasText: 'At a glance' }).first()).toBeVisible()
})

test('ferret fix P3: insurance card link, tool breadcrumb and gift-guide table links are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const checks: Array<[string, string]> = [
    ['/health/adrenal-disease', 'a:has-text("Compare exotic-pet insurance")'],
    ['/tools/litter-planner', 'nav.py-3.text-xs > a'],
    ['/reviews/november-december-gift-guide', 'td > a'],
  ]
  for (const [path, selector] of checks) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const heights = await page.locator(selector).evaluateAll((els) => els.filter((el) => (el as HTMLElement).offsetParent).map((el) => el.getBoundingClientRect().height))
    expect(heights.length, path).toBeGreaterThan(0)
    expect(heights.filter((h) => h < 24), path).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(390)
  }
})

test('ferret fix M6: supplies checklist has an Amazon link for each core item and no "non-commercial" line', async ({ page }) => {
  await page.goto('/ownership/ferret-supplies-checklist', { waitUntil: 'domcontentloaded' })
  const hrefs = await page.locator('#shop-checklist a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(hrefs).toEqual([
    '/go/amazon/B001NJ0DAY?s=ferret-supplies-checklist',
    '/go/amazon-brand/ferret+hammock?s=ferret-supplies-checklist',
    '/go/amazon-brand/ferret+fleece+liner?s=ferret-supplies-checklist',
    '/go/amazon-brand/ferret+corner+litter+pan?s=ferret-supplies-checklist',
    '/go/amazon-brand/recycled+paper+pellet+litter?s=ferret-supplies-checklist',
    '/go/amazon-brand/high+protein+ferret+food+kibble?s=ferret-supplies-checklist',
  ])
  expect(await page.locator('main a[href^="/go/amazon"]').count()).toBeGreaterThanOrEqual(7)
  const text = await page.locator('main').innerText()
  expect(text).not.toMatch(/non-commercial|dead shop page/i)
  expect(text).not.toContain('/go buttons')
})

test('ferret fix M7: H-style vs mesh guide has a shop link for both picks, in the table and the ItemList', async ({ page }) => {
  await page.goto('/reviews/h-style-vs-mesh-harness-guide', { waitUntil: 'domcontentloaded' })
  const h = '/go/amazon-brand/ferret+h+style+harness+adjustable?s=reviews-h-style-vs-mesh-harness-guide'
  const mesh = '/go/amazon-brand/ferret+mesh+harness+leash+set?s=reviews-h-style-vs-mesh-harness-guide'
  const table = await page.locator('#harness-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(table).toEqual([h, mesh])
  await expect(page.locator(`main a[href="${mesh}"]`)).toHaveCount(2)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  const list = ld.slice(ld.indexOf('"ItemList"'))
  expect(list).toContain(`https://ferret.com${h}`)
  expect(list).toContain(`https://ferret.com${mesh}`)
})

test('ferret fix Q5: health pages use credited photos that load, not the removed Unsplash ids', async ({ page }) => {
  for (const path of ['/health/adrenal-disease', '/health/aging-ferret-care']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const html = await page.content()
    expect(html, path).not.toMatch(/photo-1633627876960|photo-1604848698030/)
  }
})

test('ferret fix M8: first-week checklist has a shop table for the day-one setup, Amazon only', async ({ page }) => {
  await page.goto('/ownership/first-week-checklist', { waitUntil: 'domcontentloaded' })
  const links = page.locator('#shop-first-week a[href^="/go/"]')
  await expect(links).toHaveCount(6)
  for (const href of await links.evaluateAll((els) => els.map((el) => el.getAttribute('href') ?? ''))) {
    expect(href).toMatch(/^\/go\/amazon(-brand)?\/[^?]+\?s=first-week-checklist$/)
  }
  await expect(page.locator('#shop-first-week a[href="/go/amazon/B001NJ0DAY?s=first-week-checklist"]')).toHaveCount(1)
  expect(await page.locator('main').innerText()).not.toMatch(/with no links/i)
})

test('ferret fix P4: hub and legal breadcrumbs, legal footer and cost-calculator links are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const checks: Array<[string, string]> = [
    ['/care', 'nav > a.amber-link'],
    ['/legal/affiliate-disclosure', 'nav.text-xs.flex.mb-8 > a, div.mt-12.border-t.flex > a'],
    ['/tools/cost-calculator', 'div.rounded.border > a.underline'],
  ]
  for (const [path, selector] of checks) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const heights = await page.locator(selector).evaluateAll((els) => els.filter((el) => (el as HTMLElement).offsetParent).map((el) => el.getBoundingClientRect().height))
    expect(heights.length, path).toBeGreaterThan(0)
    expect(heights.filter((h) => h < 24), path).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(390)
  }
})

test('ferret fix M9: vest vs H-style guide has a shop link for both picks', async ({ page }) => {
  await page.goto('/reviews/vest-vs-h-harness-guide', { waitUntil: 'domcontentloaded' })
  const vest = '/go/amazon-brand/ferret+vest+harness+jacket+escape+proof?s=reviews-vest-vs-h-harness-guide'
  const h = '/go/amazon-brand/ferret+h+style+harness+adjustable?s=reviews-vest-vs-h-harness-guide'
  const table = await page.locator('#harness-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(table).toEqual([vest, h])
  await expect(page.locator(`main a[href="${h}"]`)).toHaveCount(2)
})

test('ferret fix M10: paper vs wood litter guide has a shop link for both picks', async ({ page }) => {
  await page.goto('/reviews/paper-vs-wood-litter-guide', { waitUntil: 'domcontentloaded' })
  const paper = '/go/amazon-brand/recycled+paper+pellet+litter+non+clumping?s=reviews-paper-vs-wood-litter-guide'
  const wood = '/go/amazon-brand/heat+treated+wood+pellet+litter?s=reviews-paper-vs-wood-litter-guide'
  const table = await page.locator('#litter-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(table).toEqual([paper, wood])
  await expect(page.locator(`main a[href="${wood}"]`)).toHaveCount(2)
})

test('ferret fix M11: fall molt brush guide has a shop link for both picks', async ({ page }) => {
  await page.goto('/reviews/fall-molt-brush-guide', { waitUntil: 'domcontentloaded' })
  const brush = '/go/amazon-brand/soft+slicker+brush+small+animal?s=reviews-fall-molt-brush-guide'
  const comb = '/go/amazon-brand/fine+tooth+metal+comb?s=reviews-fall-molt-brush-guide'
  const table = await page.locator('#molt-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(table).toEqual([brush, comb])
  await expect(page.locator(`main a[href="${comb}"]`)).toHaveCount(2)
})

test('ferret fix M12: winter harness fit guide has a shop link for both picks', async ({ page }) => {
  await page.goto('/reviews/winter-harness-fit-guide', { waitUntil: 'domcontentloaded' })
  const vest = '/go/amazon-brand/ferret+vest+harness+jacket+escape+proof?s=reviews-winter-harness-fit-guide'
  const h = '/go/amazon-brand/ferret+h+style+harness+adjustable?s=reviews-winter-harness-fit-guide'
  const table = await page.locator('#harness-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
  expect(table).toEqual([vest, h])
  await expect(page.locator(`main a[href="${h}"]`)).toHaveCount(2)
})

test('ferret fix M13: paper and wood vs grass guides have a shop link for both picks', async ({ page }) => {
  const pages: Array<[string, string]> = [
    ['paper-vs-grass-litter-guide', '/go/amazon-brand/recycled+paper+pellet+litter+non+clumping?s=reviews-paper-vs-grass-litter-guide'],
    ['wood-vs-grass-litter-guide', '/go/amazon-brand/heat+treated+wood+pellet+litter?s=reviews-wood-vs-grass-litter-guide'],
  ]
  for (const [slug, first] of pages) {
    await page.goto(`/reviews/${slug}`, { waitUntil: 'domcontentloaded' })
    const grass = `/go/amazon-brand/grass+pellet+litter+small+animal?s=reviews-${slug}`
    const table = await page.locator('#litter-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
    expect(table).toEqual([first, grass])
    await expect(page.locator(`main a[href="${grass}"]`)).toHaveCount(2)
  }
})

test('ferret fix M14: cage comparison tables have an exact-ASIN shop link for both cages', async ({ page }) => {
  const pages: Array<[string, string, string]> = [
    ['ferret-nation-vs-prevue-guide', 'B0054U8UGW', 'B000QFMYWQ'],
    ['kaytee-vs-ferret-nation-guide', 'B008FONT2Y', 'B0054U8UGW'],
    ['kaytee-vs-prevue-guide', 'B000QFMYWQ', 'B008FONT2Y'],
  ]
  for (const [slug, a, b] of pages) {
    await page.goto(`/reviews/${slug}`, { waitUntil: 'domcontentloaded' })
    const table = await page.locator('#cage-table a[href^="/go/"]').evaluateAll((els) => els.map((el) => el.getAttribute('href')))
    expect(table).toEqual([`/go/amazon/${a}?s=reviews-${slug}`, `/go/amazon/${b}?s=reviews-${slug}`])
  }
})

test('ferret fix M15: emergency warning signs page has a carrier shop link', async ({ page }) => {
  await page.goto('/health/emergency-warning-signs', { waitUntil: 'domcontentloaded' })
  const hop = '/go/amazon-brand/ferret+carrier?s=health-emergency-warning-signs'
  await expect(page.locator(`#emergency-shop a[href="${hop}"]`)).toHaveCount(1)
  await expect(page.getByText('Keep a carrier ready.')).toBeVisible()
})

test('ferret fix T12: every Amazon hop on the main money pages redirects to amazon.com with the tag', async ({ page }) => {
  for (const path of ['/ownership/ferret-supplies-checklist', '/ferret-starter-kit', '/ownership/first-week-checklist', '/care/cage-cleaning-routine', '/reviews/best-ferret-cage']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const hops = await page.locator('a[href^="/go/amazon"]').evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href') || ''))])
    expect(hops.length, `${path} Amazon hops`).toBeGreaterThan(0)
    for (const hop of hops) {
      await expectHop(page.request, hop, ['https://amazon.com/', `tag=${AMAZON_TAG}`])
    }
  }
})

test('ferret fix L3: food evaluator verdict meets WCAG AA contrast', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await expectAAContrast(page, '[class*="bg-emerald-50"] p, [class*="bg-amber-50"] p, [class*="bg-red-50"] p')
})

test('ferret fix L4: trimmed titles fit 70 characters and directory titles are whole and unique', async ({ page }) => {
  const paths = ['/care/litter-training', '/care/ferret-proofing-your-home', '/behavior/dead-sleep-explained', '/diet', '/diet/raw-feeding-guide', '/diet/protein-and-fat-requirements', '/diet/supplements-and-vitamins', '/health/emergency-warning-signs', '/health/dental-disease', '/health/adrenal-disease', '/health/spaying-and-neutering', '/health/annual-checkup-guide', '/ownership/adoption-vs-buying', '/tools/food-evaluator', '/directory/broward-avian-exotic-animal-hospital-deerfield-beach-fl-ve-0007097', '/directory/broward-avian-exotic-animal-clinic-deerfield-beach-fl-ve-0004271']
  const titles: string[] = []
  for (const path of paths) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const title = await page.title()
    expect(title.length, `${path}: ${title}`).toBeLessThanOrEqual(70)
    titles.push(title)
  }
  const [hospital, clinic] = titles.slice(-2)
  expect(hospital).toContain('Broward Avian & Exotic Animal Hospital')
  expect(clinic).toContain('Broward Avian & Exotic Animal Clinic')
})

test('ferret fix L5: money-page Article dateModified matches the visible Last updated date', async ({ request }) => {
  const paths = [
    '/reviews/best-ferret-litter',
    '/reviews/november-december-gift-guide',
    '/reviews/wysong-vs-marshall-kibble-guide',
    '/reviews/paper-vs-wood-litter-guide',
    '/reviews/paper-vs-grass-litter-guide',
    '/reviews/kaytee-vs-prevue-guide',
    '/reviews/wysong-vs-carniwhole-guide',
    '/reviews/best-ferret-harness',
    '/reviews/fall-molt-brush-guide',
    '/reviews/wood-vs-grass-litter-guide',
    '/reviews/vest-vs-h-harness-guide',
    '/reviews/best-ferret-cage',
    '/reviews/kaytee-vs-ferret-nation-guide',
    '/reviews/critter-nation-vs-marshall-cage-guide',
    '/reviews/ferret-nation-vs-prevue-guide',
    '/reviews/h-style-vs-mesh-harness-guide',
    '/reviews/winter-harness-fit-guide',
    '/diet/best-ferret-kibble',
  ]
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const visible = html.match(/Last updated <time dateTime="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const modified = [...html.matchAll(/"dateModified":"(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1])
    expect(visible, `${path} shows a Last updated date`).toBeTruthy()
    expect(modified.length, `${path} has Article dateModified`).toBeGreaterThan(0)
    for (const d of modified) expect(d, `${path} dateModified`).toBe(visible)
  }
})

test('ferret fix L6: every FAQPage question on /diet/can-ferrets-eat is visible on the page', async ({ page }) => {
  await page.goto('/diet/can-ferrets-eat', { waitUntil: 'domcontentloaded' })
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
  const questions: string[] = []
  for (const block of blocks) {
    const data = JSON.parse(block)
    for (const node of Array.isArray(data) ? data : data['@graph'] ?? [data]) {
      if (node['@type'] === 'FAQPage') for (const q of node.mainEntity) questions.push(q.name)
    }
  }
  expect(questions.length).toBeGreaterThan(0)
  for (const q of questions) await expect(page.locator('[data-faq="visible"]').getByText(q, { exact: true })).toBeVisible()
})

test('ferret fix L7: ArticleLayout breadcrumb items are absolute https://ferret.com URLs', async ({ request }) => {
  const html = await (await request.get('/health/dental-disease')).text()
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]))
  const crumbs = blocks.flatMap((b) => (Array.isArray(b) ? b : b['@graph'] ?? [b])).filter((n) => n['@type'] === 'BreadcrumbList')
  expect(crumbs.length).toBe(1)
  const linked = crumbs[0].itemListElement.filter((e: { item?: string }) => e.item)
  expect(linked.length).toBeGreaterThan(0)
  for (const e of linked) expect(e.item.startsWith('https://ferret.com/'), e.item).toBe(true)
})

test('ferret fix L8: best-of pages carry ItemList markup and no Product, Review or Offer markup', async ({ request }) => {
  const paths = ['/reviews/best-ferret-cage', '/reviews/best-ferret-harness', '/reviews/best-ferret-litter', '/diet/best-ferret-kibble']
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1])
    const json = blocks.join('\n')
    for (const type of ['Product', 'Review', 'Offer', 'AggregateOffer', 'Rating']) {
      expect(json.includes(`"@type":"${type}"`), `${path} has ${type} markup`).toBe(false)
    }
    const lists = blocks.flatMap((b) => { const d = JSON.parse(b); return Array.isArray(d) ? d : d['@graph'] ?? [d] }).filter((n) => n['@type'] === 'ItemList')
    expect(lists.length, `${path} ItemList`).toBeGreaterThan(0)
    expect(lists[0].itemListElement.length).toBeGreaterThanOrEqual(3)
  }
})

test('ferret fix L10: health and guide Article dateModified matches the visible Last updated date', async ({ request }) => {
  const paths = [
    '/ownership/ferret-insurance-basics',
    '/ownership/adoption-vs-buying',
    '/diet/transitioning-foods',
    '/diet/hydration-and-water',
    '/diet/kit-vs-adult-feeding',
    '/ownership/ferret-supplies-checklist',
    '/diet/raw-feeding-guide',
    '/colors/male-vs-female-ferrets',
    '/health/ear-mites',
    '/health/dental-disease',
    '/health/ferret-influenza',
    '/health/canine-distemper-in-ferrets',
    '/health/signs-of-pain',
    '/health/adrenal-disease',
    '/health/gastrointestinal-blockage',
    '/health/anesthesia-and-surgery-risk',
    '/health/lymphoma',
    '/health/fleas-and-parasites',
    '/health/spaying-and-neutering',
    '/health/ferret-ulcers',
    '/health/emergency-warning-signs',
    '/health/insulinoma',
    '/health/aging-ferret-care',
    '/health/annual-checkup-guide',
    '/health/ferret-diarrhea-causes',
    '/health/vaccinations',
    '/health/heart-disease',
    '/health/vet-visit-prep',
  ]
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const visible = html.match(/Last updated <time dateTime="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const modified = [...html.matchAll(/"dateModified":"(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1])
    expect(visible, `${path} shows a Last updated date`).toBeTruthy()
    expect(modified.length, `${path} has Article dateModified`).toBeGreaterThan(0)
    for (const d of modified) expect(d, `${path} dateModified`).toBe(visible)
  }
})

test('ferret fix R5: bedding page hammock section is sourced and keeps the tagged hammock search', async ({ page, request }) => {
  await page.goto('/care/bedding-and-litter-types', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('h2#hammocks')).toHaveText('Hammocks: Placement, Fabric and Upkeep')
  await expect(page.locator('a[href="#hammocks"]').first()).toBeAttached()
  const section = page.locator('h2#hammocks + p + ul')
  await expect(section.locator('li')).toHaveCount(5)
  await expect(section).toContainText('second or third level')
  await expect(section).toContainText('loops, holes and loose strings')
  for (const href of ['https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret', 'https://vcahospitals.com/know-your-pet/ferrets---housing', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf']) await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
  await expect(page.getByText(/commission/i).first()).toBeVisible()
  const hop = await request.get('/go/amazon-brand/ferret+hammock?s=care-bedding-and-litter-types', { maxRedirects: 0 })
  expect(hop.status()).toBe(302)
  expect(hop.headers().location).toMatch(/^https:\/\/(www\.)?amazon\.com\/.*[?&]tag=/)
})

test('ferret fix T13: exact-ASIN and search hops carry exactly the env tag, no raw Amazon links', async ({ page, request }) => {
  const hops = new Set<string>(['/go/amazon/B0054U8UGW', '/go/amazon/B019W9VXZK?s=best-ferret-kibble'])
  for (const path of ['/reviews/best-ferret-cage', '/care/bedding-and-litter-types']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const hrefs = await page.locator('a[href]').evaluateAll((els) => els.map((el) => el.getAttribute('href') ?? ''))
    expect(hrefs.filter((h) => /^https?:\/\/([^/]*\.)?(amazon\.com|amzn\.to|amzn\.com)\b/.test(h)), path).toEqual([])
    for (const h of hrefs) if (h.startsWith('/go/amazon')) hops.add(h)
  }
  for (const h of hops) {
    const res = await request.get(h, { maxRedirects: 0 })
    expect(res.status(), h).toBe(302)
    expect(new URL(res.headers().location).searchParams.getAll('tag'), h).toEqual([AMAZON_TAG])
  }
})

test('ferret fix IL1: harness, travel and exercise pages link to both harness guides', async ({ page }) => {
  for (const path of ['/behavior/leash-and-harness-training', '/care/travel-and-carriers', '/care/exercise-and-enrichment']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    for (const href of ['/reviews/h-style-vs-mesh-harness-guide', '/reviews/winter-harness-fit-guide']) await expect(page.locator(`a[href="${href}"]`).first(), `${path} ${href}`).toBeAttached()
  }
})

test('ferret fix IL3: care pages link to the cage, litter and molt-brush comparison guides', async ({ page }) => {
  const cage = ['/reviews/ferret-nation-vs-prevue-guide', '/reviews/kaytee-vs-ferret-nation-guide', '/reviews/kaytee-vs-prevue-guide']
  const litter = ['/reviews/paper-vs-wood-litter-guide', '/reviews/paper-vs-grass-litter-guide', '/reviews/wood-vs-grass-litter-guide']
  const map: Record<string, string[]> = {
    '/care/cage-setup': cage, '/care/multi-level-housing': cage,
    '/care/litter-training': litter, '/behavior/litter-box-troubleshooting': litter, '/care/bedding-and-litter-types': litter, '/care/odor-and-scent-control': litter,
    '/care/bathing-and-grooming': ['/reviews/fall-molt-brush-guide'],
  }
  for (const [path, hrefs] of Object.entries(map)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    for (const href of hrefs) await expect(page.locator(`a[href="${href}"]`).first(), `${path} ${href}`).toBeAttached()
  }
})

test('ferret fix TS1: money review sources are verifiable, vague aggregate citations removed', async ({ page }) => {
  const vague = /House Rabbit Society|Exotic-mammal veterinary|Laboratory-animal husbandry references/
  const want: Record<string, string[]> = {
    '/reviews/best-ferret-cage': ['https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf', 'https://vcahospitals.com/know-your-pet/ferrets---housing'],
    '/reviews/best-ferret-harness': ['https://www.petmd.com/ferret/training/how-leash-train-and-walk-your-ferret'],
    '/reviews/best-ferret-litter': ['https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret', 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf', 'https://vcahospitals.com/know-your-pet/ferrets---housing'],
  }
  for (const [path, hrefs] of Object.entries(want)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('body')).not.toContainText(vague)
    await expect(page.locator('h2#vet-references')).toBeVisible()
    for (const href of hrefs) await expect(page.locator(`a[href="${href}"]`).first(), `${path} ${href}`).toBeAttached()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).not.toMatch(vague)
  }
})

test('ferret fix AI1: llms.txt lists the money reviews and every linked path resolves', async ({ request }) => {
  const t = await (await request.get('/llms.txt')).text()
  for (const p of ['/reviews/best-ferret-cage', '/reviews/best-ferret-litter', '/reviews/best-ferret-harness', '/diet/best-ferret-kibble', '/how-we-pick']) expect(t).toContain(p)
  for (const m of t.matchAll(/\]\(https:\/\/ferret\.com(\/[^)]*)\)/g)) expect((await request.get(m[1])).status(), m[1]).toBe(200)
})
test('ferret fix TS2: cage size and wood-litter claims are sourced, unsourced phenol and floor-space lines gone', async ({ page }) => {
  await page.goto('/reviews/best-ferret-cage', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText(/two feet by three feet|common community guideline/)
  await expect(page.getByText(/24 x 24 x 18 inches/).first()).toBeAttached()
  await page.goto('/reviews/best-ferret-litter', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText(/phenol/i)
  await expect(page.locator('h2#phenols')).toHaveText('Pine & Cedar Shavings')
  for (const href of ['https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret', 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets']) await expect(page.locator(`h2#phenols + p a[href="${href}"]`)).toHaveCount(1)
})

test('ferret fix SD1: rendered JSON-LD on key templates parses and has no structural errors', async ({ request }) => {
  const problems: string[] = []
  for (const path of ['/', '/reviews/best-ferret-cage', '/behavior/biting-and-nipping', '/tools/cage-size-calculator', '/diet/best-ferret-kibble', '/first-year-schedule']) problems.push(...(await jsonLdProblems(request, path)))
  expect(problems).toEqual([])
})

test('ferret fix AF2: grooming and nail pages lead with a sourced short answer that matches Merck and Lafeber', async ({ page }) => {
  await page.goto('/care/bathing-and-grooming', { waitUntil: 'domcontentloaded' })
  const article = page.locator('main')
  await expect(article.getByText('Short answer:').first()).toBeVisible()
  await expect(article).toContainText('two to four times a year')
  await expect(article).toContainText('every 1 to 2 weeks')
  await expect(article).not.toContainText(/every 2-3 months|every 2-3 weeks|every 2–3 weeks|every 2-4 weeks|every 2–4 weeks|not human clippers/)
  await expect(page.locator('a[href="https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets"]').first()).toBeAttached()
  await expect(page.locator('a[href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf"]').first()).toBeAttached()
  await page.goto('/care/nail-trimming', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('main').getByText('Short answer').first()).toBeVisible()
  await expect(page.locator('main')).toContainText('Never declaw a ferret')
  await expect(page.locator('main')).not.toContainText('tend to crush rather than cleanly cut')
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('a nail clipper made for humans may be used')
})

test('ferret fix SM1: sitemap lastmod is the stamped page date, and unstamped hubs carry none', async ({ request }) => {
  await expectStampedLastmod(request, ['/care/nail-trimming', '/care/bathing-and-grooming', '/behavior/biting-and-nipping'], ['/care'])
})

test('ferret fix SD2: Article schema omits image instead of shipping an empty string', async ({ request }) => {
  for (const path of ['/behavior/biting-and-nipping', '/care/nail-trimming']) {
    const html = await (await request.get(path)).text()
    expect(html, path).toContain('"@type":"Article"')
    expect(html, path).not.toContain('"image":""')
  }
})

test('ferret fix SM2: directory sitemap shard carries no build-time lastmod', async ({ request }) => {
  const xml = await (await request.get('/sitemap/1.xml')).text()
  expect(xml).toContain('<loc>https://ferret.com/directory/')
  expect(xml).not.toContain('<lastmod>')
})

test('ferret fix AF5: diet pages lead with sourced short answers, FAQ schema, and linked sources', async ({ page }) => {
  const cases: Array<[string, string, string, string]> = [
    ['/diet/hydration-and-water', 'Rinse bottles daily', 'Why are ferrets prone to dehydration?', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf'],
    ['/diet/transitioning-foods', 'do not react well to frequent diet changes', 'How do I switch my ferret to a new food?', 'https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret'],
    ['/diet/senior-ferret-nutrition', 'insulinoma', 'Does an older ferret need vitamin supplements?', 'https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets'],
    ['/diet/weight-management', 'no more than 5% of daily calories', 'How much should a ferret weigh?', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf'],
  ]
  for (const [path, short, question, href] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator(`#sources ~ ul a[href="${href}"]`).first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
})

test('ferret fix AF6: care and ownership pages lead with sourced short answers, FAQ schema, and Lafeber-aligned figures', async ({ page }) => {
  const LAF = 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf'
  const cases: Array<[string, string, string]> = [
    ['/diet/supplements-and-vitamins', 'not necessary except under special conditions', 'Do ferrets need vitamins?'],
    ['/care/bedding-and-litter-types', 'several times a week', 'What litter is best for ferrets?'],
    ['/care/multi-level-housing', '24 × 24 × 18 inches', 'What bar spacing is safe for a ferret cage?'],
    ['/ownership/is-a-ferret-right-for-you', 'average of 6 to 8 years', 'How long do ferrets live?'],
    ['/ownership/ferrets-and-other-pets', 'birds, rabbits, rodents, or lizards', 'Can ferrets live with cats and dogs?'],
  ]
  for (const [path, short, question] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator(`a[href="${LAF}"]`).first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
  await page.goto('/ownership/is-a-ferret-right-for-you', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('six to ten years')
})

test('ferret fix OG1: og:image renders a real 1200x630 PNG', async ({ page, request }) => {
  await page.goto('/care/nail-trimming', { waitUntil: 'domcontentloaded' })
  const og = await page.locator('meta[property="og:image"]').getAttribute('content')
  expect(og).toBeTruthy()
  const u = new URL(og!)
  const res = await request.get(u.pathname + u.search)
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('image/png')
  const body = await res.body()
  expect(body.length).toBeGreaterThan(1000)
  expect(body.readUInt32BE(16)).toBe(1200)
  expect(body.readUInt32BE(20)).toBe(630)
})

test('ferret fix FA2: food-label page leads with a Lafeber/Merck short answer and FAQ schema', async ({ page }) => {
  await page.goto('/diet/reading-food-labels', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('30% to 40%')
  await expect(page.locator('a[href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf"]').first()).toBeAttached()
  await expect(page.locator('body')).not.toContainText('ash is roughly 6-8%')
  await expect(page.getByText('What protein and fat should a ferret food have?').first()).toBeVisible()
})

test('ferret fix FA1: travel pages lead with a Merck-sourced short answer and FAQ schema', async ({ page }) => {
  for (const path of ['/care/travel-and-carriers', '/ownership/traveling-with-a-ferret']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText('65°F to 75°F')
    await expect(page.locator('a[href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets"]').first(), path).toBeAttached()
    await expect(page.getByText('Can I leave a ferret in a parked car for a few minutes?').first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
})

test('ferret fix FA3: kids and first-week pages lead with Lafeber/Merck short answers and FAQ schema', async ({ page }) => {
  const cases: Array<[string, string, string]> = [
    ['/ownership/ferrets-with-kids', 'should always be monitored', 'Are ferrets good pets for families with young children?'],
    ['/ownership/first-week-checklist', 'rabies and canine distemper', 'What vaccines does a new ferret need?'],
  ]
  for (const [path, short, question] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator('a[href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf"]').first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
  await page.goto('/ownership/ferrets-with-kids', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('6–10 year life')
})
test('ferret fix FA4: legality page cites CDFW and Hawaii agriculture with FAQ schema', async ({ page }) => {
  await page.goto('/ownership/ferret-legality-by-state', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('California')
  await expect(page.locator('a[href="https://wildlife.ca.gov/Living-with-Wildlife/Restricted-Species"]').first()).toBeAttached()
  await expect(page.locator('a[href="https://dab.hawaii.gov/pi/pq/import-program/animal-guidelines/"]').first()).toBeAttached()
  await expect(page.locator('body')).not.toContainText('New York City and Washington')
  await expect(page.getByText('Which US states ban pet ferrets?').first()).toBeVisible()
})

test('ferret fix FA5: insurance basics leads with an NAIC/Merck short answer, FAQ schema, and names no insurer', async ({ page }) => {
  await page.goto('/ownership/ferret-insurance-basics', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('pre-existing conditions')
  await expect(page.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]').first()).toBeAttached()
  await expect(page.getByText('Will insurance cover a condition my ferret already has?').first()).toBeVisible()
  const text = await page.locator('.carloOS-article').first().innerText()
  for (const held of ['Trupanion', 'Pets Best']) expect(text).not.toContain(held)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('ferret fix FA7: supplies checklist leads with a Lafeber/Merck short answer and FAQ schema', async ({ page }) => {
  await page.goto('/ownership/ferret-supplies-checklist', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('24 × 24 × 18 inches')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret"]').first()).toBeAttached()
  await expect(page.getByText('What litter is safe for ferrets?').first()).toBeVisible()
})

test('ferret fix FA6: adoption-vs-buying leads with a Lafeber/Merck short answer and FAQ schema', async ({ page }) => {
  await page.goto('/ownership/adoption-vs-buying', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('commercial farms')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets"]').first()).toBeAttached()
  await expect(page.getByText('Does descenting stop a ferret from smelling?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('ferret fix FA8: cost page drops unsourced dollar ranges, uses Lafeber lifespan, and has FAQ schema', async ({ page }) => {
  await page.goto('/ownership/cost-of-owning-a-ferret', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('several-hundred-dollar')
  await expect(body).not.toContainText('hundreds or thousands of dollars')
  await expect(body).not.toContainText('6–10 year')
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('6 to 8 years')
  await expect(page.getByText('What is the biggest cost of owning a ferret?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('ferret fix KF1: kit-vs-adult feeding cites Apfelbach, VCA and Merck and drops unsourced ages', async ({ page }) => {
  await page.goto('/diet/kit-vs-adult-feeding', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('8–10 times a day')
  await expect(body).not.toContainText('8 to 10 times a day')
  await expect(body).not.toContainText('around age five')
  await expect(body).not.toContainText('first roughly six months')
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('60 to 90 days')
  await expect(page.locator('a[href="https://pubmed.ncbi.nlm.nih.gov/24924694/"]').first()).toBeVisible()
  await expect(page.locator('a[href="https://vcahospitals.com/know-your-pet/feeding-ferrets"]').first()).toBeVisible()
  await expect(page.getByText('Should I free-feed my ferret?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('ferret fix SC1: can-ferrets-eat food pages emit Article and FAQPage schema', async ({ page }) => {
  for (const path of ['/diet/can-ferrets-eat/chocolate', '/diet/can-ferrets-eat/chicken', '/diet/can-ferrets-eat/banana']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"Article"')
    expect(ld.match(/"FAQPage"/g)?.length, path).toBe(1)
    expect(ld, path).toContain('Can ferrets eat')
  }
})

test('ferret fix LS1: lifespan page answers first with Lafeber 6 to 8 years', async ({ page }) => {
  await page.goto('/colors/ferret-lifespan', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('5 to 8 years')
  await expect(body).not.toContainText('around age five')
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('6 to 8 years')
  await expect(page.locator('a[href*="Care-of-the-Ferret-2020.pdf"]').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
  expect(ld).toContain('6 to 8 years')
})

test('ferret fix MR1: no page carries a /go/marshall href, even a held one', async ({ page }) => {
  for (const path of [
    '/behavior/digging-and-burrowing',
    '/behavior/diy-enrichment-toys',
    '/behavior/leash-and-harness-training',
    '/behavior/stress-signs',
    '/care/bathing-and-grooming',
    '/care/cage-setup',
    '/care/diet-basics',
    '/care/exercise-and-enrichment',
    '/care/litter-training',
    '/diet/best-ferret-kibble',
    '/diet/kit-vs-adult-feeding',
    '/health/aging-ferret-care',
    '/reviews/november-december-gift-guide',
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(await page.content(), path).not.toContain('/go/marshall')
  }
})

test('ferret fix BT1: biting page answers first from Merck and drops unsourced claims', async ({ page }) => {
  await page.goto('/behavior/biting-and-nipping', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('5-6 weeks is typical')
  await expect(body).not.toContainText('behaviour literature is consistent')
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('time-out')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/multimedia/table/biting"]').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('What should I do right after my ferret nips?')
})

test('ferret fix PA1: play-aggression page answers first and cites the MSD Veterinary Manual', async ({ page }) => {
  await page.goto('/behavior/play-aggression', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('Usually it is play')
  await expect(page.locator('a[href="https://www.msdvetmanual.com/all-other-pets/ferrets/special-considerations-for-ferrets"]').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('ferret fix AO1: kibble guide, can-ferrets-eat hub, and find-a-vet answer first from fetched sources', async ({ page }) => {
  const cases: [string, string, string][] = [
    ['/diet/best-ferret-kibble', '32% to 40% protein', 'https://vcahospitals.com/know-your-pet/feeding-ferrets'],
    ['/diet/can-ferrets-eat', 'occasional treat', 'https://vcahospitals.com/know-your-pet/feeding-ferrets'],
    ['/find-an-exotic-vet', 'Find a Vet search', 'https://aemv.org/'],
  ]
  for (const [path, text, href] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.getByText('Short answer', { exact: true }).first(), path).toBeVisible()
    await expect(page.locator('body'), path).toContainText(text)
    await expect(page.locator(`a[href="${href}"]`).first(), path).toBeVisible()
  }
})

test('ferret fix SK1: starter kit drops the rehoming claim and answers first from Merck', async ({ page }) => {
  await page.goto('/ferret-starter-kit', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('rehome within 90 days')
  await expect(page.locator('article').filter({ hasText: 'Short answer' }).first()).toContainText('3 feet wide')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret"]').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld.match(/"FAQPage"/g)?.length).toBe(1)
  expect(ld).toContain('What size cage does a ferret need?')
})

test('ferret fix WY1: no page carries a /go/wysong href, even a held one', async ({ page }) => {
  for (const path of [
    '/care/diet-basics',
    '/diet/best-ferret-kibble',
    '/diet/protein-and-fat-requirements',
    '/diet/reading-food-labels',
    '/diet/safe-treats',
    '/diet/senior-ferret-nutrition',
    '/diet/whole-prey-vs-kibble',
    '/reviews/november-december-gift-guide',
    '/reviews/wysong-vs-carniwhole-guide',
    '/reviews/wysong-vs-marshall-kibble-guide',
    '/tools/label-calculator',
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(await page.content(), path).not.toContain('/go/wysong')
  }
})

test('ferret fix TX2: find-a-vet drops the dead ferret-afa.org link and labels unchecked references', async ({ page }) => {
  await page.goto('/find-an-exotic-vet', { waitUntil: 'domcontentloaded' })
  expect(await page.content()).not.toContain('ferret-afa.org')
  await expect(page.locator('#sources + ul a[href="https://aemv.org/certifications/"]')).toBeVisible()
  await expect(page.locator('main')).toContainText('not checked against this page')
  await page.goto('/diet/best-ferret-kibble', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('main')).toContainText('not checked these general references')
})

test('ferret fix FY1: first-year schedule uses Lafeber and Merck, labels unchecked references', async ({ page }) => {
  await page.goto('/first-year-schedule', { waitUntil: 'domcontentloaded' })
  const body = page.locator('body')
  await expect(body).not.toContainText('5–8 years')
  await expect(body).not.toContainText('peaks between ages 4 and 7')
  await expect(body).toContainText('6 to 8 years')
  await expect(body).toContainText('General references, not checked against')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets"]').first()).toBeVisible()
})

test('ferret fix TX1: generic textbook and journal citations are labelled as unchecked', async ({ page }) => {
  for (const path of ['/behavior/biting-and-nipping', '/colors/ferret-lifespan', '/diet/weight-management', '/health/insulinoma']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
    expect(text, path).toMatch(/not checked against this page|not checked this general reference against the claims on this page/)
  }
})

test('ferret fix AO2: emergency and readiness tools open with a sourced short answer', async ({ page }) => {
  for (const [path, href] of [
    ['/tools/is-this-a-ferret-emergency', 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian'],
    ['/tools/readiness-quiz', 'https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf'],
  ]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const box = page.getByTestId('short-answer')
    await expect(box, path).toBeVisible()
    await expect(box.getByRole('heading', { name: 'The short answer' })).toBeVisible()
    await expect(box.locator(`a[href="${href}"]`)).toBeVisible()
  }
})

test('ferret fix TX3: health hub labels unchecked general references', async ({ page }) => {
  await page.goto('/health', { waitUntil: 'domcontentloaded' })
  const text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
  expect(text).toMatch(/Clinical Medicine and Surgery\. \(general reference; not checked against this page\)/)
  expect(text).toMatch(/Association of Exotic Mammal Veterinarians \(general reference; not checked against this page\)/)
  expect(text).toContain('background reading we have not checked against this page')
})

test('ferret fix SK2: starter kit insurance box cites Merck and NAIC, no unsourced surgery cost', async ({ page }) => {
  await page.goto('/ferret-starter-kit', { waitUntil: 'domcontentloaded' })
  const box = page.locator('section', { hasText: 'Insurance Before Symptoms' })
  const text = (await box.innerText()).replace(/\s+/g, ' ')
  expect(text).not.toMatch(/\$1,500|hereditary/)
  await expect(box.locator('a[href="https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/neoplasia-of-ferrets"]')).toBeVisible()
  await expect(box.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]')).toBeVisible()
})

test('ferret fix FN1: ferret names page has a FAQ with FAQPage schema', async ({ page }) => {
  await page.goto('/ownership/ferret-names', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('h2#faq')).toBeVisible()
  await expect(page.getByText('Will my ferret learn its name?').first()).toBeVisible()
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  expect(ld.filter((t) => t.includes('"FAQPage"')).length).toBe(1)
})
