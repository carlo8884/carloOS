import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

test('cage guide, cage setup, tagged hop', async ({ page }) => {
  await page.goto('/reviews/best-ferret-cage')
  await expect(page.getByRole('heading', { name: /Best Ferret Cage/ })).toBeVisible()

  const pick = page.locator('#ferret-nation')
  await expect(pick.getByRole('link', { name: /Find Ferret Nation/ })).toHaveAttribute(
    'href',
    '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=reviews-best-ferret-cage',
  )

  await page.getByRole('link', { name: 'Cage Setup' }).first().click()
  await expect(page).toHaveURL(/\/care\/cage-setup\/?$/)
  await expect(page.getByRole('heading', { name: /Cage Setup|Setting Up/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=reviews-best-ferret-cage',
    ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, 'ferret'],
  )
})
