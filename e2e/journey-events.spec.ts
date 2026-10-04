import { expect, test } from '@playwright/test'

const toolPath: Record<string, string> = {
  'dog-com': '/tools/dog-crate-size-calculator',
  'fish-com': '/tools/aquarium-volume-calculator',
  'horses-com': '/tools/horse-weight-calculator',
  'vets-co': '/tools/cat-calorie-calculator',
  'ferret-com': '/tools/cage-size-calculator',
}

const guidePath: Record<string, string> = {
  'dog-com': '/reviews/best-puppy-crate-guide',
  'fish-com': '/reviews/hob-vs-canister-guide',
  'horses-com': '/reviews/rambo-vs-rhino-guide',
  'vets-co': '/reviews/trupanion-vs-healthy-paws-guide',
  'ferret-com': '/reviews/vest-vs-h-harness-guide',
}

const hopPath: Record<string, string> = {
  'dog-com': '/reviews/best-dog-crates',
  'fish-com': '/reviews/best-aquarium-filters',
  'horses-com': '/reviews/best-winter-horse-blankets',
  'vets-co': '/reviews/best-pet-insurance',
  'ferret-com': '/reviews/best-ferret-cage',
}

async function eventParams(page: import('@playwright/test').Page, name: string) {
  let found: Record<string, unknown> | null = null
  await expect.poll(async () => {
    found = await page.evaluate((eventName) => {
      const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
      for (const entry of layer) {
        const list = Array.isArray(entry) ? entry : Array.from(entry as ArrayLike<unknown>)
        if (list[0] === 'event' && list[1] === eventName && list[2] && typeof list[2] === 'object') {
          return list[2] as Record<string, unknown>
        }
      }
      return null
    }, name)
    return found
  }).not.toBeNull()
  return found as Record<string, unknown>
}

test('tool result, guide signup, and primary hop view queue without an address', async ({ page }, testInfo) => {
  const site = testInfo.project.name
  const tool = toolPath[site]
  const guide = guidePath[site]
  const hopPage = hopPath[site]

  await page.goto(tool)
  const calc = await eventParams(page, 'calculator_complete')
  expect(calc).toMatchObject({ site, tool })
  expect(calc).not.toHaveProperty('email')

  await page.goto(guide)
  await page.getByLabel('Email address').fill('not-an-email')
  await page.getByRole('button', { name: 'Save my address' }).click()
  const signup = await eventParams(page, 'guide_signup_submit')
  expect(signup).toEqual({ site, page: guide, result: 'invalid' })

  await page.goto(hopPage)
  await page.locator('[data-primary-hop]').scrollIntoViewIfNeeded()
  const view = await eventParams(page, 'hop_view')
  expect(view.site).toBe(site)
  expect(view.page).toBe(hopPage)
  expect(view.hop).toMatch(/^\/go\//)
  expect(view).not.toHaveProperty('email')
})
