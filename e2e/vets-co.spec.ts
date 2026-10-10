import { expect, test } from '@playwright/test'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { TRUPANION_TAG } from './tags'

test('insurance review, then a carrier quote hop', async ({ page }) => {
  await page.goto('/reviews/best-pet-insurance')
  await expect(page.getByRole('heading', { name: /Best Pet Insurance/ })).toBeVisible()

  const quote = page.locator('#trupanion').getByRole('link', { name: 'Get a Trupanion quote' })
  await expect(quote).toHaveAttribute('href', '/go/trupanion/home?s=reviews-best-pet-insurance')
  await expect(page.locator('#healthy-paws').getByRole('link', { name: 'Compare carriers on published terms' })).toHaveAttribute('href', '/reviews/best-pet-insurance')
  await expect(page.locator('#embrace').getByRole('link', { name: 'Compare carriers on published terms' })).toHaveAttribute('href', '/reviews/best-pet-insurance')

  await expectHop(page.request, '/go/trupanion/home?s=reviews-best-pet-insurance', [
    'https://www.trupanion.com/enrollments/get-a-quote',
    `refid=${TRUPANION_TAG}`,
    'campaign=home',
  ])
})


const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-pet-insurance', pick: 'Trupanion' },
  { path: '/reviews/holiday-emergency-visit-guide', pick: 'Trupanion' },
  { path: '/reviews/holiday-leftovers-low-fat-guide', pick: 'low-fat' },
  { path: '/reviews/askvet-vs-chewy-connect-guide', pick: 'AskVet' },
  { path: '/reviews/healthy-paws-vs-embrace-guide', pick: 'Healthy Paws' },
  { path: '/reviews/healthy-paws-vs-pets-best-guide', pick: 'Healthy Paws' },
  { path: '/reviews/november-december-gift-guide', pick: 'Trupanion' },
  { path: '/reviews/vetster-vs-chewy-connect-guide', pick: 'Vetster' },
  { path: '/reviews/lemonade-vs-pets-best-guide', pick: 'Lemonade' },
  { path: '/reviews/spot-vs-manypets-guide', pick: 'Spot' },
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
      const visit = /askvet-vs-chewy|vetster-vs-chewy/.test(item.path)
      if (visit) {
        const next = offer.locator('a[href="/telehealth"]')
        await expect(next).toBeVisible()
        const nextBox = await next.boundingBox()
        expect(nextBox).toBeTruthy()
        expect(nextBox!.y + nextBox!.height).toBeLessThan(844)
        const held = offer.locator('[data-primary-hop="held"]')
        await expect(held).toBeVisible()
        await expect(held.locator('a')).toHaveCount(0)
        await expect(offer.locator('a[href*="/go/"]')).toHaveCount(0)
      } else {
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
      }
      await expectMoneyCopy(page)
    })
  }
})

test('every review route rejects page-about-itself copy', async ({ page }) => {
  test.setTimeout(240_000)
  for (const path of reviewRoutes('vets-co')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})
