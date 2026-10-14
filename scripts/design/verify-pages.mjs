#!/usr/bin/env node
/**
 * Real-browser check before opening a PR (premium-affiliate-site-design §12).
 *
 *   node scripts/design/verify-pages.mjs <baseUrl> <outDir> <path> [path...]
 *
 * Opens each path in headless Chromium at 1280x800 and 390x844, saves an
 * above-the-fold and a full-page screenshot, and prints header height, hero
 * height, first shop-link position, disclosure text and page length. Exits 1
 * when a page breaks a hard rule: header >64/56px, home/hub hero >320/400px,
 * first shop link below 1.5 mobile screens on an article, a disclosure that is
 * not the one-line "Affiliate links" link before the first shop link, or a
 * console error. Attach the screenshots to the PR.
 */
import { chromium } from '@playwright/test'
import { mkdirSync } from 'node:fs'

const [base, outDir, ...paths] = process.argv.slice(2)
if (!base || !outDir || paths.length === 0) {
  console.error('usage: verify-pages.mjs <baseUrl> <outDir> <path> [path...]')
  process.exit(2)
}
mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const problems = []
for (const [w, h, tag, navMax, heroMax] of [[1280, 800, 'desktop', 64, 320], [390, 844, 'mobile', 56, 400]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  for (const path of paths) {
    errors.length = 0
    await page.goto(base + path, { waitUntil: 'networkidle' })
    const m = await page.evaluate(() => {
      const vis = (e) => Boolean(e.offsetParent)
      const nav = document.querySelector('nav[aria-label="Main navigation"]')
      const hero = document.querySelector('[data-testid="home-hero"], [data-testid="hub-hero"]')
      const link = [...document.querySelectorAll('a[href*="/go/"]')].find((a) => vis(a) && !a.closest('footer, [data-sticky-cta]'))
      const lines = [...document.querySelectorAll('[data-affiliate-disclosure="inline"], [data-affiliate-disclosure="banner"]')].filter(vis)
      return {
        navH: nav ? Math.round(nav.getBoundingClientRect().height) : null,
        heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
        shopY: link ? Math.round(link.getBoundingClientRect().top + scrollY) : null,
        discBefore: link && lines[0] ? Boolean(lines[0].compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING) : null,
        discTexts: lines.map((l) => l.innerText.trim()),
        pageH: document.documentElement.scrollHeight,
      }
    })
    const name = (path === '/' ? 'home' : path.slice(1).replaceAll('/', '_')) + '-' + tag
    await page.screenshot({ path: `${outDir}/${name}-fold.png` })
    await page.screenshot({ path: `${outDir}/${name}.png`, fullPage: true })
    console.log(tag, path, JSON.stringify(m))
    const isArticle = path.split('/').length > 2
    if (m.navH !== null && m.navH > navMax) problems.push(`${tag} ${path}: header ${m.navH}px`)
    if (m.heroH !== null && m.heroH > heroMax) problems.push(`${tag} ${path}: hero ${m.heroH}px`)
    if (m.shopY !== null && m.discBefore !== true) problems.push(`${tag} ${path}: disclosure not before first shop link`)
    if (m.discTexts.some((t) => t !== 'Affiliate links')) problems.push(`${tag} ${path}: disclosure text ${JSON.stringify(m.discTexts)}`)
    if (tag === 'mobile' && isArticle && m.shopY !== null && m.shopY > 1266) problems.push(`${tag} ${path}: first shop link at ${m.shopY}px`)
    if (errors.length) problems.push(`${tag} ${path}: console errors ${errors.join(' | ').slice(0, 200)}`)
  }
  await page.close()
}
await browser.close()
if (problems.length) {
  console.error('FAIL\n' + problems.join('\n'))
  process.exit(1)
}
console.log(`OK — screenshots in ${outDir}`)
