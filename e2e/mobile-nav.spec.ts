import { expect, type Locator, type Page, test } from '@playwright/test'

const MONEY: Record<string, { name: string; url: RegExp }> = {
  '3100': { name: 'Reviews', url: /\/reviews\/?$/ },
  '3101': { name: 'Reviews', url: /\/reviews\/?$/ },
  '3102': { name: 'Reviews', url: /\/reviews\/?$/ },
  '3103': { name: 'Pet Insurance', url: /\/reviews\/best-pet-insurance/ },
  '3104': { name: 'Reviews', url: /\/reviews\/?$/ },
}

test.describe('375px navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('menu, footer, hub links, and the money hub', async ({ page }) => {
    await page.goto('/')
    const moneyHub = MONEY[new URL(page.url()).port]
    expect(moneyHub, page.url()).toBeTruthy()

    await expectNoHorizontalOverflow(page, 'nav[aria-label="Main navigation"]')
    await expectNoHorizontalOverflow(page, 'footer')

    const open = page.getByRole('button', { name: 'Open menu' })
    await expectTapTarget(open)
    await open.focus()
    await page.keyboard.press('Enter')

    const dialog = page.getByRole('dialog', { name: 'Mobile navigation' })
    await expect(dialog).toBeVisible()
    await expectNoHorizontalOverflow(page, '#site-menu')
    await expect(dialog).toHaveAttribute('aria-modal', 'true')
    await expect.poll(async () => dialog.locator(':focus').count()).toBeGreaterThan(0)

    const menuLinks = dialog.getByRole('link')
    const menuCount = await menuLinks.count()
    expect(menuCount).toBeGreaterThan(0)
    for (let i = 0; i < menuCount; i++) await expectTapTarget(menuLinks.nth(i))

    const moneyLink = dialog.getByRole('link', { name: moneyHub!.name, exact: true })
    await expect(moneyLink).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(dialog).toHaveCount(0)
    await expect(open).toBeFocused()

    await open.click()
    await dialog.getByRole('link', { name: moneyHub!.name, exact: true }).click()
    await expect(page).toHaveURL(moneyHub!.url)

    await page.goto('/reviews')
    await expectNoHorizontalOverflow(page, 'nav[aria-label="Main navigation"]')
    await expectNoHorizontalOverflow(page, 'footer')
    await expectNoHorizontalOverflow(page, '[id$="-reviews-list"]')
    const search = page.getByRole('searchbox')
    await expect(search).toBeVisible()
    await expectTapTarget(search)
    const hubLinks = page.locator('a[data-hub-item], [data-hub-item] a')
    const hubCount = await hubLinks.count()
    expect(hubCount).toBeGreaterThan(0)
    for (let i = 0; i < hubCount; i++) await expectTapTarget(hubLinks.nth(i))

    const footerLinks = page.locator('footer a')
    const footerCount = await footerLinks.count()
    expect(footerCount).toBeGreaterThan(0)
    for (let i = 0; i < footerCount; i++) await expectTapTarget(footerLinks.nth(i))
  })
})

async function expectTapTarget(locator: Locator) {
  if (!(await locator.isVisible())) return
  const box = await locator.boundingBox()
  expect(box, await locator.evaluate((el) => (el.textContent ?? '').trim().slice(0, 40))).not.toBeNull()
  expect(box!.width).toBeGreaterThanOrEqual(44)
  expect(box!.height).toBeGreaterThanOrEqual(44)
}

async function expectNoHorizontalOverflow(page: Page, selector: string) {
  const overflow = await page.locator(selector).evaluate((root) => {
    const width = document.documentElement.clientWidth
    const bad: string[] = []
    const nodes = [root, ...Array.from(root.querySelectorAll('*'))]
    for (const el of nodes) {
      const rect = el.getBoundingClientRect()
      if (rect.width < 1 || rect.height < 1) continue
      if (rect.right > width + 1 || rect.left < -1) {
        const name = el.getAttribute('class')?.slice(0, 80) ?? ''
        bad.push(`${el.tagName} ${name} ${Math.round(rect.left)}..${Math.round(rect.right)}`)
        if (bad.length >= 6) break
      }
    }
    return bad
  })
  expect(overflow, `${selector}\n${overflow.join('\n')}`).toEqual([])
}
