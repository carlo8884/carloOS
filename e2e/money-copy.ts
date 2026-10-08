import { expect, type Page } from '@playwright/test'

const META = /this comparison is|the link above/i
const SERVICE =
  /chewy\+connect|connect\+with\+a\+vet|healthy\+paws|pets\+best|pet\+insurance|(?:^|[+/])(?:askvet|vetster|telehealth|trupanion|lemonade|manypets|figo|embrace)(?:[+/]|$)/i

/** Reject page-about-itself copy and Amazon searches that name a service or insurer. */
export async function expectMoneyCopy(page: Page) {
  const body = await page.locator('body').innerText()
  expect(body).not.toMatch(META)
  const hrefs = await page.locator('a[href*="/go/amazon"]').evaluateAll((els) =>
    els.map((el) => el.getAttribute('href') || ''),
  )
  for (const href of hrefs) expect(href, href).not.toMatch(SERVICE)
}
