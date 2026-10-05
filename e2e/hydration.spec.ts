import { expect, test } from '@playwright/test'

/**
 * Money pages on the five earning sites. A hydration mismatch here is how
 * dog /training, fish /tools, and vets /telehealth lost their shop links.
 */
const moneyPaths: Record<string, string[]> = {
  'dog-com': [
    '/training',
    '/reviews/best-dry-dog-food',
    '/reviews/best-dog-crates',
    '/reviews/best-dog-harnesses',
  ],
  'fish-com': [
    '/tools',
    '/reviews/best-aquarium-filters',
    '/reviews/best-aquarium-heaters',
    '/reviews/best-water-test-kits',
  ],
  'horses-com': [
    '/tools',
    '/reviews/best-equine-supplements',
    '/reviews/best-winter-horse-blankets',
    '/tools/horse-cost-calculator',
  ],
  'vets-co': [
    '/telehealth',
    '/reviews/best-pet-insurance',
    '/insurance/wellness-plans-vs-insurance',
  ],
  'ferret-com': [
    '/care/seasonal-shedding',
    '/reviews/best-ferret-cage',
    '/reviews/best-ferret-litter',
    '/reviews/best-ferret-harness',
  ],
}

const hydrationError =
  /Hydration failed|did not match server-rendered HTML|Expected server HTML|error while hydrating|Text content does not match|Minified React error #(418|422|423|425)\b/

test('money pages hydrate with no console hydration error', async ({ page }, testInfo) => {
  const paths = moneyPaths[testInfo.project.name]
  expect(paths?.length).toBeGreaterThan(0)

  for (const path of paths) {
    const problems: string[] = []
    const onConsole = (msg: { type: () => string; text: () => string }) => {
      const text = msg.text()
      if (msg.type() === 'error' && hydrationError.test(text)) problems.push(text)
    }
    const onPageError = (err: Error) => {
      if (hydrationError.test(err.message)) problems.push(err.message)
    }
    page.on('console', onConsole)
    page.on('pageerror', onPageError)
    try {
      const response = await page.goto(path, { waitUntil: 'commit' })
      expect(response?.status(), path).toBe(200)
      await new Promise((resolve) => setTimeout(resolve, 400))
      await expect(page.locator('h1').first(), path).toBeVisible()
      expect(problems, `${path}\n${problems.join('\n')}`).toEqual([])
    } finally {
      page.off('console', onConsole)
      page.off('pageerror', onPageError)
    }
  }
})
