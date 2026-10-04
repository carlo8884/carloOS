import { expect, test } from '@playwright/test'

/**
 * Reviews and guides hubs group cards, and the jump links stay tappable
 * at 375px. Search still hides a group when none of its cards match.
 */
const hubs: Record<string, { path: string; query: string; hiddenHeading: string }[]> = {
  'dog-com': [
    { path: '/reviews', query: 'crate', hiddenHeading: 'Dental' },
    { path: '/guides', query: 'microchip', hiddenHeading: 'Reference' },
  ],
  'fish-com': [
    { path: '/reviews', query: 'heater', hiddenHeading: 'Filters' },
  ],
  'horses-com': [
    { path: '/reviews', query: 'blanket', hiddenHeading: 'Supplements' },
    { path: '/guides', query: 'saddle', hiddenHeading: 'Preventive care' },
  ],
  'vets-co': [
    { path: '/reviews', query: 'trupanion', hiddenHeading: 'Telehealth' },
    { path: '/guides', query: 'emergency', hiddenHeading: 'The Vet Visit' },
  ],
  'ferret-com': [
    { path: '/reviews', query: 'litter', hiddenHeading: 'Housing' },
  ],
}

test('hub groups, jump links, and search at 375px', async ({ page }, testInfo) => {
  const targets = hubs[testInfo.project.name]
  expect(targets?.length).toBeGreaterThan(0)
  await page.setViewportSize({ width: 375, height: 812 })

  for (const target of targets) {
    const response = await page.goto(target.path, { waitUntil: 'commit' })
    expect(response?.status(), target.path).toBe(200)
    const jumps = page.locator('nav[aria-label="On this page"] a')
    await expect(jumps.first(), target.path).toBeVisible()
    const count = await jumps.count()
    expect(count, target.path).toBeGreaterThan(1)
    for (let i = 0; i < count; i++) {
      const box = await jumps.nth(i).boundingBox()
      expect(box?.height ?? 0, `${target.path} jump ${i}`).toBeGreaterThanOrEqual(44)
    }
    const firstHref = await jumps.first().getAttribute('href')
    expect(firstHref, target.path).toMatch(/^#/)
    await jumps.first().click()
    await expect(page.locator(firstHref!)).toBeVisible()

    const search = page.locator('form[role="search"] input')
    await search.fill(target.query)
    await expect(page.getByRole('heading', { name: target.hiddenHeading, exact: true })).toBeHidden()
    await expect(page.locator('[data-hub-item]:visible').first()).toBeVisible()
  }
})
