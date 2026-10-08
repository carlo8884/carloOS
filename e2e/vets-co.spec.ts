import { expect, test } from '@playwright/test'
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
