import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

const AREAS = ['neck', 'withers', 'shoulder', 'ribs', 'loin', 'tailhead']

test('body condition result, forage guide, tagged hop', async ({ page }) => {
  await page.goto('/tools/body-condition-score')
  await expect(page.getByText('Overall BCS')).toBeVisible()
  await expect(page.getByText('Optimal / moderate')).toBeVisible()

  for (const area of AREAS) {
    await page.locator(`#bcs-${area}`).selectOption('1')
  }
  await expect(page.getByText('Very thin / poor')).toBeVisible()
  await expect(page.getByText('1.0')).toBeVisible()

  await page.locator('#journey-next').getByRole('link', { name: /starting with forage/ }).click()
  await expect(page).toHaveURL(/\/nutrition\/forage-basics\/?$/)
  await expect(page.getByRole('heading', { name: /Equine Forage Basics/ })).toBeVisible()

  await expectHop(
    page.request,
    '/go/amazon-brand/horse+weight+tape?s=tools-body-condition-score',
    ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, 'horse'],
  )
})
