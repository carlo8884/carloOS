import { expect, test } from '@playwright/test'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

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
  await expect(page.locator('#marshall-ferret-shampoo')).toContainText('A sensible default for the every-2–3-month bathing schedule.')
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
