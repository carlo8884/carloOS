import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

test('crate tool, result, crate guide, tagged hop', async ({ page }) => {
  await page.goto('/tools/dog-crate-size-calculator')
  await expect(page.getByRole('heading', { name: 'Dog Crate Size Calculator' })).toBeVisible()

  await page.getByLabel(/Body length/).fill('36')
  await page.getByLabel(/Standing height/).fill('24')
  await expect(page.getByText('42"', { exact: false }).first()).toBeVisible()
  await expect(page.getByText('(XL)')).toBeVisible()

  await page.locator('#journey-next').getByRole('link', { name: /Compare wire, airline, and heavy-duty crates/ }).click()
  await expect(page).toHaveURL(/\/reviews\/best-dog-crates\/?$/)
  await expect(page.getByRole('heading', { name: /Best Dog Crates/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon-brand/wire+dog+crate+with+divider+panel?s=tools-dog-crate-size',
    ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, 'wire'],
  )
})


const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-dry-dog-food', pick: 'Royal Canin' },
  { path: '/reviews/best-dog-crates', pick: 'MidWest' },
  { path: '/reviews/best-dog-harnesses', pick: 'Easy Walk' },
  { path: '/reviews/best-joint-supplements', pick: 'Dasuquin' },
  { path: '/reviews/best-dental-chews', pick: 'Greenies' },
  { path: '/reviews/best-flea-tick-prevention', pick: 'Bravecto' },
  { path: '/reviews/best-dog-food-for-puppies', pick: 'Royal Canin' },
  { path: '/reviews/best-dog-beds', pick: 'Big Barker' },
  { path: '/reviews/best-dog-gps-tracker', pick: 'Fi Series' },
  { path: '/reviews/best-large-breed-dog-food', pick: 'Royal Canin' },
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
