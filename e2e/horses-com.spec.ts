import { expect, test } from '@playwright/test'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

const AREAS = ['neck', 'withers', 'shoulder', 'ribs', 'loin', 'tailhead']

test('body condition result, forage guide, tagged hop', async ({ page }) => {
  await page.goto('/tools/body-condition-score')
  await expect(page.getByText('Overall BCS', { exact: true })).toBeVisible()
  await expect(page.getByText('Optimal / moderate', { exact: true })).toBeVisible()

  for (const area of AREAS) {
    await page.locator(`#bcs-${area}`).selectOption('1')
  }
  await expect(page.getByText('Very thin / poor', { exact: true })).toBeVisible()
  await expect(page.getByText('1.0', { exact: true })).toBeVisible()

  await page.locator('#journey-next').getByRole('link', { name: /starting with forage/ }).click()
  await expect(page).toHaveURL(/\/nutrition\/forage-basics\/?$/)
  await expect(page.getByRole('heading', { name: /Equine Forage Basics/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon-brand/horse+weight+tape?s=tools-body-condition-score',
    ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, 'horse'],
  )
})


const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-winter-horse-blankets', pick: 'Rambo' },
  { path: '/reviews/best-equine-supplements', pick: 'Platinum Performance' },
  { path: '/reviews/best-blanket-for-clipped-horse-guide', pick: 'StormShield' },
  { path: '/reviews/quilted-vs-sheepskin-pad-guide', pick: 'quilted cotton' },
  { path: '/reviews/rambo-vs-rhino-guide', pick: 'Rambo' },
  { path: '/reviews/brushing-boots-vs-bell-boots-guide', pick: 'brushing boots' },
  { path: '/reviews/blanket-weight-by-temperature-guide', pick: 'Rambo' },
  { path: '/reviews/nylon-vs-breakaway-halter-guide', pick: 'breakaway' },
  { path: '/reviews/winter-water-unfrozen-guide', pick: 'heated' },
  { path: '/reviews/cosequin-vs-equithrive-guide', pick: 'Cosequin' },
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
  for (const path of reviewRoutes('horses-com')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})
