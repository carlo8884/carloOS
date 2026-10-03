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
  expect(html).not.toMatch(/<script[^>]+src="https:\/\/www\.googletagmanager\.com\/gtag\/js/)
  expect(html).not.toMatch(/<link[^>]+href="https:\/\/www\.googletagmanager\.com\/gtag\/js/)

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
    return layer.some((entry) => {
      if (entry && typeof entry === 'object' && 'event' in entry) {
        return (entry as { event?: string }).event === 'affiliate_click'
      }
      const list = Array.isArray(entry) ? entry : Array.from(entry as ArrayLike<unknown>)
      return list[0] === 'event' && list[1] === 'affiliate_click'
    })
  })
  expect(queued).toBe(true)

  const library = page.locator('script[src*="googletagmanager.com/gtag/js"]')
  await expect(library).toHaveAttribute('data-nscript', 'lazyOnload')
})
