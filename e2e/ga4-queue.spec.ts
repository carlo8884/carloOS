import { expect, test } from '@playwright/test'

const shopPath: Record<string, string> = {
  'dog-com': '/training',
  'fish-com': '/tools',
  'horses-com': '/tools',
  'vets-co': '/telehealth',
  'ferret-com': '/care/seasonal-shedding',
}

test('gtag library waits, and a shop click still queues affiliate_click', async ({ page, request }, testInfo) => {
  const home = await request.get('/')
  expect(home.status()).toBe(200)
  const html = await home.text()
  expect(html).toContain('function gtag(){dataLayer.push(arguments);}')
  expect(html).not.toContain('googletagmanager.com/gtag/js')

  const path = shopPath[testInfo.project.name]
  await page.goto(path)
  const shop = page.locator('a[href*="/go/amazon"]').first()
  await expect(shop).toBeVisible()
  await shop.evaluate((el) => {
    el.addEventListener('click', (event) => event.preventDefault(), { capture: true })
  })
  await shop.click()

  const queued = await page.evaluate(() => {
    const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
    return JSON.stringify(layer).includes('affiliate_click')
  })
  expect(queued).toBe(true)

  const library = page.locator('script[src*="googletagmanager.com/gtag/js"]')
  await expect(library).toHaveAttribute('data-nscript', 'afterInteractive')
})
