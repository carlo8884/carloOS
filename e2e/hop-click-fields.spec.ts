import { expect, test, type Locator, type Page } from '@playwright/test'

/**
 * One affiliate_click per hop: site, page, slot, destination type, and the
 * ASIN or query. A second click on the same hop inside the dedupe window
 * must not queue another event.
 */

type ClickFields = {
  site?: string
  page?: string
  slot?: string
  destination_type?: string
  destination?: string
}

const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'] as const

async function clicks(page: Page): Promise<ClickFields[]> {
  return page.evaluate(() => {
    const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
    const out: ClickFields[] = []
    for (const entry of layer) {
      const list = Array.isArray(entry) ? entry : Array.from(entry as ArrayLike<unknown>)
      if (list[0] === 'event' && list[1] === 'affiliate_click' && list[2] && typeof list[2] === 'object') {
        out.push(list[2] as ClickFields)
      }
    }
    return out
  })
}

async function arm(link: Locator) {
  await link.evaluate((el) => {
    el.addEventListener('click', (event) => event.preventDefault(), { capture: true })
  })
}

function expectedDestination(href: string): { destination_type: string; destination: string } {
  const url = new URL(href, 'http://127.0.0.1')
  const parts = url.pathname.split('/').filter(Boolean)
  if (parts[0] !== 'go') {
    return { destination_type: 'other', destination: url.pathname }
  }
  const partner = parts[1] ?? ''
  const product = decodeURIComponent(parts.slice(2).join('/')).replace(/\+/g, ' ')
  if (partner === 'amazon' && /^[A-Z0-9]{10}$/i.test(product)) {
    return { destination_type: 'ASIN', destination: product.toUpperCase() }
  }
  if (partner === 'amazon' || partner === 'amazon-brand') {
    return { destination_type: 'search', destination: product }
  }
  return { destination_type: 'other', destination: product }
}

async function expectedSlot(link: Locator): Promise<string> {
  return link.evaluate((el) => {
    if (el.closest('#empty-search-guides, #missed-guides')) return 'search-recovery'
    const card = el.closest('[data-review-card]')
    if (card instanceof HTMLElement && card.id) return card.id
    if (el.closest('[data-result-pick]')) return 'result'
    const marked = el.closest('[data-shop-placement]')?.getAttribute('data-shop-placement')
    if (el.closest('[data-primary-hop]') || marked === 'hero') return 'hero'
    if (el.closest('table') || marked === 'table') return 'table'
    if (marked === 'quick-pick') return 'quick-pick'
    if (el.closest('[data-guide-checklist]')) return 'guide'
    return marked || 'card'
  })
}

async function oneClick(page: Page, link: Locator, site: string, pagePath: string) {
  await expect(link).toBeVisible()
  const href = await link.getAttribute('href')
  expect(href).toBeTruthy()
  const slot = await expectedSlot(link)
  const destination = expectedDestination(href as string)
  const before = (await clicks(page)).length
  await arm(link)
  await link.click()
  await link.click()
  await expect.poll(async () => (await clicks(page)).length).toBe(before + 1)
  const event = (await clicks(page)).at(-1)
  expect(event?.site).toBe(site)
  expect(event?.page).toBe(pagePath)
  expect(event?.slot).toBe(slot)
  expect(event?.slot).toBeTruthy()
  expect(event?.destination_type).toBe(destination.destination_type)
  expect(event?.destination).toBe(destination.destination)
}

test('five hops record one click each, including a double click', async ({ page }, testInfo) => {
  const site = testInfo.project.name
  expect(SITES).toContain(site)

  if (site === 'dog-com') {
    await page.goto('/tools/dog-calorie-calculator')
    await page.locator('#dc-weight').fill('50')
    await oneClick(page, page.locator('[data-result-pick] a[href*="/go/"]').first(), site, '/tools/dog-calorie-calculator')

    await page.goto('/reviews/best-dog-crates')
    await oneClick(page, page.locator('a[data-shop-placement="hero"]').first(), site, '/reviews/best-dog-crates')
    await oneClick(page, page.locator('[data-review-card] a[href*="/go/"]').nth(1), site, '/reviews/best-dog-crates')

    await page.goto('/guides/dog-body-condition-score')
    await oneClick(page, page.locator('main a[href*="/go/amazon"]').first(), site, '/guides/dog-body-condition-score')
  }

  if (site === 'fish-com') {
    await page.goto('/tools/aquarium-volume-calculator')
    await page.getByLabel(/^Length/).fill('48')
    await oneClick(page, page.locator('[data-result-pick] a[href*="/go/"]').first(), site, '/tools/aquarium-volume-calculator')

    await page.goto('/reviews/best-aquarium-filters')
    await oneClick(page, page.locator('[data-primary-hop] a[href*="/go/"]').first(), site, '/reviews/best-aquarium-filters')
    await oneClick(page, page.locator('[data-review-card] a[href*="/go/"]').nth(1), site, '/reviews/best-aquarium-filters')

    await page.goto('/reviews/hob-vs-canister-guide')
    await oneClick(page, page.locator('main a[href*="/go/amazon"]').first(), site, '/reviews/hob-vs-canister-guide')
  }

  if (site === 'horses-com') {
    await page.goto('/tools/horse-feed-calculator')
    await page.locator('#hf-weight').fill('1100')
    await oneClick(page, page.locator('[data-result-pick] a[href*="/go/"]').first(), site, '/tools/horse-feed-calculator')

    await page.goto('/reviews/best-equine-supplements')
    await oneClick(page, page.locator('a[data-shop-placement="hero"]').first(), site, '/reviews/best-equine-supplements')
    await oneClick(page, page.locator('[data-review-card] a[href*="/go/"]').nth(1), site, '/reviews/best-equine-supplements')

    await page.goto('/guides/saddle-fit-basics')
    await oneClick(page, page.locator('main a[data-shop-placement="card"]').first(), site, '/guides/saddle-fit-basics')
  }

  if (site === 'vets-co') {
    await page.goto('/tools/cat-calorie-calculator')
    await page.locator('#cc-weight').fill('10')
    await oneClick(page, page.locator('a[href*="slow+feeder+cat+bowl"]').first(), site, '/tools/cat-calorie-calculator')

    await page.goto('/reviews/holiday-leftovers-low-fat-guide')
    await oneClick(page, page.locator('[data-primary-hop] a[href*="/go/"]').first(), site, '/reviews/holiday-leftovers-low-fat-guide')

    await page.goto('/guides/choosing-a-veterinarian')
    await oneClick(page, page.locator('a[data-shop-placement="card"]').nth(1), site, '/guides/choosing-a-veterinarian')

    await page.goto('/guides/questions-to-ask-your-vet')
    await oneClick(page, page.locator('main a[href*="/go/amazon"]').first(), site, '/guides/questions-to-ask-your-vet')
  }

  if (site === 'ferret-com') {
    await page.goto('/tools/cage-size-calculator')
    await page.getByRole('button', { name: '2', exact: true }).click()
    await oneClick(page, page.locator('[data-result-pick] a[href*="/go/"]').first(), site, '/tools/cage-size-calculator')

    await page.goto('/reviews/best-ferret-cage')
    await oneClick(page, page.locator('[data-primary-hop] a[href*="/go/"]').first(), site, '/reviews/best-ferret-cage')
    await oneClick(page, page.locator('[data-review-card] a[href*="/go/"]').nth(1), site, '/reviews/best-ferret-cage')

    await page.goto('/care/bedding-and-litter-types')
    await oneClick(page, page.locator('main a[href*="/go/amazon"]').first(), site, '/care/bedding-and-litter-types')
  }

  await page.goto('/search?q=zzzznotapage')
  await oneClick(page, page.locator('#empty-search-guides a').first(), site, '/search')
})
