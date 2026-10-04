import { expect, test } from '@playwright/test'

/**
 * Security headers on the five earning sites. A CSP miss shows up as a
 * console error and as a form or heading that never hydrates.
 */
const pages: Record<string, { money: string; hub: string; query: string }> = {
  'dog-com': { money: '/reviews/best-dog-crates', hub: '/reviews', query: 'crate' },
  'fish-com': { money: '/reviews/best-aquarium-filters', hub: '/reviews', query: 'filter' },
  'horses-com': { money: '/reviews/best-equine-supplements', hub: '/reviews', query: 'blanket' },
  'vets-co': { money: '/reviews/best-pet-insurance', hub: '/reviews', query: 'insurance' },
  'ferret-com': { money: '/reviews/best-ferret-cage', hub: '/reviews', query: 'cage' },
}

const hydrationError =
  /Hydration failed|did not match server-rendered HTML|Expected server HTML|error while hydrating|Text content does not match|Minified React error #(418|422|423|425)\b/

test('money pages send security headers and the hub search still runs', async ({ page }, testInfo) => {
  const target = pages[testInfo.project.name]
  expect(target, testInfo.project.name).toBeTruthy()

  const problems: string[] = []
  const onConsole = (msg: { type: () => string; text: () => string }) => {
    const text = msg.text()
    if (msg.type() === 'error') problems.push(text)
    else if (/Content Security Policy|Refused to/i.test(text)) problems.push(text)
  }
  const onPageError = (err: Error) => {
    problems.push(err.message)
  }
  page.on('console', onConsole)
  page.on('pageerror', onPageError)

  try {
    const money = await page.goto(target.money, { waitUntil: 'commit' })
    expect(money?.status(), target.money).toBe(200)
    const headers = money?.headers() ?? {}
    expect(headers['strict-transport-security'], target.money).toMatch(/max-age=\d+/)
    expect(headers['x-content-type-options'], target.money).toBe('nosniff')
    expect(headers['referrer-policy'], target.money).toBe('strict-origin-when-cross-origin')
    expect(headers['permissions-policy'], target.money).toMatch(/camera=\(\)/)
    expect(headers['content-security-policy'], target.money).toContain('https://www.googletagmanager.com')
    expect(headers['content-security-policy'], target.money).toContain('https://fonts.gstatic.com')
    await expect(page.locator('h1').first(), target.money).toBeVisible()

    const hub = await page.goto(target.hub, { waitUntil: 'commit' })
    expect(hub?.status(), target.hub).toBe(200)
    expect(hub?.headers()['content-security-policy'], target.hub).toContain("form-action 'self'")
    const search = page.locator('form[role="search"] input')
    await expect(search, target.hub).toBeVisible()
    await search.fill(target.query)
    await expect(search).toHaveValue(target.query)

    expect(problems.filter((line) => hydrationError.test(line)), problems.join('\n')).toEqual([])
    expect(problems.filter((line) => /Content Security Policy|Refused to/i.test(line)), problems.join('\n')).toEqual([])
    expect(problems, problems.join('\n')).toEqual([])
  } finally {
    page.off('console', onConsole)
    page.off('pageerror', onPageError)
  }
})
