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

test('every review route rejects page-about-itself copy', async ({ page }) => {
  test.setTimeout(240_000)
  for (const path of reviewRoutes('ferret-com')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})
