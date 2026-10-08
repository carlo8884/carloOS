import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

test('new tank guide, cycling guide, tagged hop', async ({ page }) => {
  await page.goto('/health/new-tank-syndrome')
  await expect(page.getByRole('heading', { name: /New Tank Syndrome/ })).toBeVisible()
  await expect(page.getByText(/ammonia/i).first()).toBeVisible()

  await page.locator('#journey-next').getByRole('link', { name: /Run the fishless cycle/ }).click()
  await expect(page).toHaveURL(/\/setup\/aquarium-cycling-guide\/?$/)
  await expect(page.getByRole('heading', { name: /Aquarium Cycling Guide/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon-brand/api+freshwater+master+test+kit?s=health-new-tank-syndrome',
    ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, 'api'],
  )
})


const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-water-test-kits', pick: 'API Freshwater' },
  { path: '/reviews/best-aquarium-filters', pick: 'AquaClear' },
  { path: '/reviews/best-aquarium-heaters', pick: 'Eheim' },
  { path: '/reviews/best-aquarium-lighting', pick: 'Hygger' },
  { path: '/reviews/best-planted-tank-fertilizers', pick: 'Easy Green' },
  { path: '/reviews/best-canister-filters', pick: 'Fluval 307' },
  { path: '/reviews/best-nano-tanks', pick: 'Spec V' },
  { path: '/reviews/hob-vs-canister-guide', pick: 'AquaClear' },
  { path: '/reviews/winter-heater-sizing-guide', pick: 'Eheim' },
  { path: '/reviews/november-december-gift-guide', pick: 'Easy Green' },
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
    })
  }
})
