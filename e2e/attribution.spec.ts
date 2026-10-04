import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG } from './tags'

const pagePath: Record<string, string> = {
  'dog-com': '/reviews/best-puppy-crate-guide',
  'fish-com': '/reviews/hob-vs-canister-guide',
  'horses-com': '/ownership/horse-insurance',
  'vets-co': '/reviews/trupanion-vs-healthy-paws-guide',
  'ferret-com': '/reviews/vest-vs-h-harness-guide',
}

const amazonHop: Record<string, string> = {
  'dog-com': '/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-puppy-crate-guide',
  'fish-com': '/go/amazon-brand/aquaclear+70+filter?s=reviews-hob-vs-canister-guide',
  'horses-com': '/go/amazon-brand/horse+insurance+policy+document+binder?s=ownership-horse-insurance',
  'vets-co': '/go/amazon-brand/pet+first+aid+kit?s=telehealth',
  'ferret-com': '/go/amazon-brand/ferret+vest+harness+jacket+escape+proof?s=reviews-vest-vs-h-harness-guide',
}

test('money-page hop records site, source, and partner, and Amazon hops stay tagged', async ({ page }, testInfo) => {
  const site = testInfo.project.name
  await page.goto(pagePath[site])
  const hops = page.locator('main a[href*="/go/"]')
  const count = await hops.count()
  expect(count, 'page has a hop').toBeGreaterThan(0)

  const hrefs: string[] = []
  for (let i = 0; i < count; i++) {
    const href = await hops.nth(i).getAttribute('href')
    expect(href, 'hop href').toBeTruthy()
    expect(href, 'source page').toMatch(/[?&]s=[^&]+/)
    hrefs.push(href as string)
  }

  const href = hrefs[0]
  const source = new URL(href, 'http://localhost').searchParams.get('s')
  const partner = href.split('/').filter(Boolean)[1]?.split('?')[0]
  const link = hops.first()
  await link.evaluate((el) => {
    el.addEventListener('click', (event) => event.preventDefault(), { capture: true })
  })
  await link.click()

  const queued = await page.evaluate(() => {
    const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
    return layer.some((entry) => {
      const list = Array.isArray(entry) ? entry : Array.from(entry as ArrayLike<unknown>)
      return list[0] === 'event' && list[1] === 'affiliate_click'
    })
  })
  expect(queued).toBe(true)

  const params = await page.evaluate(() => {
    const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
    for (const entry of layer) {
      const list = Array.isArray(entry) ? entry : Array.from(entry as ArrayLike<unknown>)
      if (list[0] === 'event' && list[1] === 'affiliate_click' && list[2] && typeof list[2] === 'object') {
        return list[2] as { site?: string; source?: string; partner?: string }
      }
    }
    return null
  })
  expect(params?.site).toBe(site)
  expect(params?.source).toBe(source)
  expect(params?.partner).toBe(partner)

  await expectHop(page.request, amazonHop[site], ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`])
})
