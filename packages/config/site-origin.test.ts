import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { crossSiteHref, siteBaseUrl, siteOriginMode } from './site-origin.mjs'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../..')
const APEXES = {
  'dog-com': 'https://dog.com',
  'fish-com': 'https://fish.com',
  'horses-com': 'https://horses.com',
  'vets-co': 'https://vets.co',
  'ferret-com': 'https://ferret.com',
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (/\.(tsx|ts|mjs|xml)$/.test(entry.name)) out.push(path)
  }
  return out
}

describe('site origins', () => {
  it('uses the apex unless the build is a Vercel preview', () => {
    assert.equal(siteOriginMode({}), 'apex')
    assert.equal(siteOriginMode({ VERCEL_ENV: 'production' }), 'apex')
    assert.equal(siteOriginMode({ VERCEL_ENV: 'preview' }), 'preview')
    assert.equal(siteOriginMode({ NEXT_PUBLIC_SITE_ORIGIN_MODE: 'preview' }), 'preview')
  })

  it('builds dog and vets links from that one table', () => {
    assert.equal(siteBaseUrl('dog-com', {}), 'https://dog.com')
    assert.equal(
      siteBaseUrl('dog-com', { VERCEL_ENV: 'preview' }),
      'https://dog-com-three.vercel.app',
    )
    assert.equal(
      crossSiteHref('vets-co', '/reviews/best-pet-insurance', {}),
      'https://vets.co/reviews/best-pet-insurance',
    )
    assert.equal(
      crossSiteHref('vets-co', '/reviews/best-pet-insurance', { VERCEL_ENV: 'preview' }),
      'https://carlo-os-vets-co.vercel.app/reviews/best-pet-insurance',
    )
    assert.equal(
      crossSiteHref('fish-com', 'health', { VERCEL_ENV: 'preview' }),
      'https://carlo-os-fish-com.vercel.app/health',
    )
  })

  it('production canonical, sitemap, and robots use the apex and do not leak vercel.app', () => {
    const seo = readFileSync(join(ROOT, 'packages/ui/src/components/SEOHead.tsx'), 'utf8')
    assert.match(seo, /metadataBase: new URL\(config\.theme\.siteUrl\)/)
    assert.match(seo, /const canonicalUrl = `\$\{config\.theme\.siteUrl\}\$\{path\}`/)
    assert.match(seo, /url: canonicalUrl/)
    const config = readFileSync(join(ROOT, 'packages/config/index.ts'), 'utf8')
    for (const [site, apex] of Object.entries(APEXES)) {
      assert.equal(siteBaseUrl(site, { VERCEL_ENV: 'production' }), apex)
      assert.equal(apex.includes('vercel.app'), false)
      assert.match(config, new RegExp(`siteUrl: '${apex}'`))
      const app = join(ROOT, 'apps', site, 'src')
      const robots = readFileSync(join(app, 'app/robots.ts'), 'utf8')
      assert.match(robots, new RegExp(`const APEX = '${apex}'`))
      assert.match(robots, /buildRobots\(APEX\)/)
      const sitemap = readFileSync(join(app, 'app/sitemap.ts'), 'utf8')
      assert.equal(sitemap.includes('vercel.app'), false)
      assert.match(sitemap, new RegExp(apex.replace(/\./g, '\\.')))
      for (const file of walk(app)) {
        const src = readFileSync(file, 'utf8')
        assert.equal(src.includes('vercel.app'), false, file.replace(ROOT + '/', ''))
      }
    }
  })

  it('keeps a missing page out of the index and on the apex', () => {
    for (const [site, apex] of Object.entries(APEXES)) {
      const src = readFileSync(join(ROOT, 'apps', site, 'src/app/not-found.tsx'), 'utf8')
      assert.equal(src.includes('vercel.app'), false, site)
      assert.match(src, /index:\s*false/)
      assert.match(src, new RegExp(`canonical: '${apex.replace('.', '\\.')}/'`))
    }
  })

})
