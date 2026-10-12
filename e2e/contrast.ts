import { expect, type Page } from '@playwright/test'

/** WCAG contrast of each matched element's text against its first opaque ancestor background. */
export async function expectAAContrast(page: Page, selector: string, min = 4.5) {
  const ratios = await page.locator(selector).evaluateAll((els) => {
    const parse = (c: string) => {
      const m = c.match(/rgba?\(([^)]+)\)/)
      if (!m) return [0, 0, 0, 0]
      const p = m[1].split(',').map((x) => parseFloat(x))
      return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]
    }
    const lum = (c: number[]) => {
      const f = (v: number) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }
      return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2])
    }
    return els.map((el) => {
      let bg = [255, 255, 255, 1]
      for (let n: Element | null = el; n; n = n.parentElement) {
        const c = parse(getComputedStyle(n).backgroundColor)
        if (c[3] >= 1) { bg = c; break }
      }
      const fg = parse(getComputedStyle(el).color)
      let a = fg[3]
      for (let n: Element | null = el; n; n = n.parentElement) a *= parseFloat(getComputedStyle(n).opacity || '1')
      const mixed = [0, 1, 2].map((i) => a * fg[i] + (1 - a) * bg[i])
      const l1 = lum(mixed), l2 = lum(bg)
      return { text: (el.textContent || '').trim().slice(0, 40), ratio: (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05) }
    })
  })
  expect(ratios.length, `${selector} matches`).toBeGreaterThan(0)
  for (const r of ratios) expect(r.ratio, `${selector} "${r.text}"`).toBeGreaterThanOrEqual(min)
}
