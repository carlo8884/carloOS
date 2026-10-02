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
