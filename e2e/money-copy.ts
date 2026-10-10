import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { expect, type Page } from '@playwright/test'

/** Every /reviews route for one earning app, including the reviews hub. */
export function reviewRoutes(app: string): string[] {
  const root = join(process.cwd(), 'apps', app, 'src/app/reviews')
  const paths: string[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      if (statSync(full).isDirectory()) walk(full)
      else if (name === 'page.tsx') paths.push(`/reviews${dir.slice(root.length)}`)
    }
  }
  walk(root)
  return paths.sort()
}

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
