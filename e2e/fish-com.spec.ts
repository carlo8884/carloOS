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
