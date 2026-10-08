import { expect, test } from '@playwright/test'

/**
 * Money pages on the five earning sites. A hydration mismatch here is how
 * dog /training, fish /tools, and vets /telehealth lost their shop links.
 */
const moneyPaths: Record<string, string[]> = {
  'dog-com': [
    '/training',
    '/reviews/best-dry-dog-food',
    '/reviews/best-dog-crates',
    '/reviews/best-dog-harnesses',
  ],
  'fish-com': [
    '/tools',
    '/reviews/best-aquarium-filters',
    '/reviews/best-aquarium-heaters',
    '/reviews/best-water-test-kits',
  ],
  'horses-com': [
    '/tools',
    '/reviews/best-equine-supplements',
    '/reviews/best-winter-horse-blankets',
    '/tools/horse-cost-calculator',
  ],
  'vets-co': [
    '/telehealth',
    '/reviews/best-pet-insurance',
    '/insurance/wellness-plans-vs-insurance',
  ],
  'ferret-com': [
    '/care/seasonal-shedding',
    '/reviews/best-ferret-cage',
    '/reviews/best-ferret-litter',
    '/reviews/best-ferret-harness',
  ],
}

const hydrationError =
  /Hydration failed|did not match server-rendered HTML|Expected server HTML|error while hydrating|Text content does not match|Minified React error #(418|422|423|425)\b/

/** Compact body outline so a CI hydration failure names the first diverging node. */
async function bodyOutline(target: { evaluate: <T>(fn: () => T) => Promise<T> }): Promise<string[]> {
  return target.evaluate(() => {
    const out: string[] = []
    const walk = (n: Node) => {
      if (out.length > 800) return
      if (n.nodeType === Node.TEXT_NODE) {
        const raw = n.textContent || ''
        const t = raw.replace(/\s+/g, ' ').trim()
        out.push(t ? 'T:' + t.slice(0, 120) : 'W:' + raw.length)
        return
      }
      if (n.nodeType !== Node.ELEMENT_NODE) return
      const el = n as Element
      if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE' || el.tagName === 'NOSCRIPT') return
      const href = el.getAttribute('href') || ''
      const src = (el.getAttribute('src') || '').replace(/^https?:\/\/[^/]+/, '')
      const bits = [
        el.getAttribute('class') ? 'class=' + el.getAttribute('class') : '',
        href ? 'href=' + href.slice(0, 80) : '',
        src ? 'src=' + src.slice(0, 80) : '',
        el.getAttribute('alt') ? 'alt=' + el.getAttribute('alt') : '',
      ].filter(Boolean)
      out.push('E:' + el.tagName + (bits.length ? ' ' + bits.join(' ') : ''))
      for (const c of el.childNodes) walk(c)
    }
    const html = document.documentElement
    out.push('HTML class=' + (html.getAttribute('class') || ''))
    walk(document.body)
    return out
  })
}

function outlineDiff(server: string[], client: string[]): string {
  const lines: string[] = []
  const max = Math.max(server.length, client.length)
  for (let i = 0; i < max && lines.length < 8; i++) {
    if (server[i] === client[i]) continue
    if (i > 0) lines.push(`#${i - 1} both: ${server[i - 1]}`)
    lines.push(`#${i}\n  server: ${server[i] ?? '(end)'}\n  client: ${client[i] ?? '(end)'}`)
    break
  }
  return lines.join('\n')
}

test('money pages hydrate with no console hydration error', async ({ page }, testInfo) => {
  const paths = moneyPaths[testInfo.project.name]
  expect(paths?.length).toBeGreaterThan(0)

  for (const path of paths) {
    const problems: string[] = []
    const onConsole = (msg: { type: () => string; text: () => string }) => {
      const text = msg.text()
      if (msg.type() === 'error' && hydrationError.test(text)) problems.push(text)
    }
    const onPageError = (err: Error) => {
      if (hydrationError.test(err.message)) problems.push(err.message)
    }
    page.on('console', onConsole)
    page.on('pageerror', onPageError)
    try {
      const response = await page.goto(path, { waitUntil: 'commit' })
      expect(response?.status(), path).toBe(200)
      const rawHtml = path === '/tools' ? await response.text() : ''
      await new Promise((resolve) => setTimeout(resolve, 400))
      await expect(page.locator('h1').first(), path).toBeVisible()
      let detail = ''
      if (problems.length > 0) {
        const client = await bodyOutline(page)
        const plain = await page.context().newPage()
        try {
          await plain.route('**/*', (route) => {
            if (route.request().resourceType() === 'script') return route.abort()
            return route.continue()
          })
          await plain.goto(path, { waitUntil: 'domcontentloaded' })
          const server = await bodyOutline(plain)
          const diff = outlineDiff(server, client)
          const at = rawHtml.indexOf('New-tank setup')
          const snippet = (at >= 0 ? rawHtml.slice(at, at + 900) : rawHtml.slice(0, 200))
            .replace(/https?:\/\/[^"\s<]+/g, 'URL')
            .replace(/\s+/g, ' ')
          detail = '\n' + (diff || `outlines match (${server.length} nodes)`) + '\nHTML ' + snippet
        } finally {
          await plain.close()
        }
      }
      expect(problems, `${path}\n${problems.join('\n')}${detail}`).toEqual([])
    } finally {
      page.off('console', onConsole)
      page.off('pageerror', onPageError)
    }
  }
})
