import { expect, test } from '@playwright/test'

/**
 * A nonsense search and a missing URL must keep that site's five recovery
 * links. A one-character query and a two-character query with no matches
 * use the same recovery.
 */
const FIRST_LINK: Record<string, string> = {
  'dog-com': 'Best dog crates',
  'fish-com': 'Best aquarium filters',
  'horses-com': 'Best equine supplements',
  'vets-co': 'Best pet insurance',
  'ferret-com': 'Best ferret cage',
}

test('empty search and a missing URL keep the top suggestions', async ({ page }, testInfo) => {
  const title = FIRST_LINK[testInfo.project.name]
  expect(title, testInfo.project.name).toBeTruthy()

  for (const query of ['zzzznotapage', 'z', 'zz']) {
    const response = await page.goto(`/search?q=${query}`)
    expect(response?.status(), query).toBe(200)
    await expect(page.getByRole('heading', { name: `No results for “${query}”` })).toBeVisible()
    await expect(page.locator('#missed-search-q')).toBeVisible()
    const links = page.locator('#empty-search-guides a')
    await expect(links).toHaveCount(5)
    await expect(links.first()).toContainText(title)
  }

  const missing = await page.goto('/not-a-real-page-r195')
  expect(missing?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
  await expect(page.getByText('This page does not exist or may have moved.')).toBeVisible()
  await expect(page.locator('#missed-search-q')).toBeVisible()
  const recovery = page.locator('#missed-guides a')
  await expect(recovery).toHaveCount(5)
  await expect(recovery.first()).toContainText(title)
})
