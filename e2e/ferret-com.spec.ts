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

test('every review route rejects page-about-itself copy', async ({ page }) => {
  test.setTimeout(240_000)
  for (const path of reviewRoutes('ferret-com')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})
