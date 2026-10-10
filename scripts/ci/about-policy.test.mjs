import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const SITES = [
  ['dog-com', 'dog.com', 'editorial@dog.com'],
  ['fish-com', 'fish.com', 'editorial@fish.com'],
  ['horses-com', 'horses.com', 'editorial@horses.com'],
  ['vets-co', 'vets.co', 'editorial@vets.co'],
  ['ferret-com', 'ferret.com', 'editorial@ferret.com'],
]

const banned = /\bDVM\b|\bwe tested\b|\bin our lab\b|\bDr\.\s+[A-Z]/

test('each earning site has an About page and an editorial policy with a real corrections address', () => {
  for (const [site, host, email] of SITES) {
    const about = readFileSync(`apps/${site}/src/app/about/page.tsx`, 'utf8')
    const policy = readFileSync(`apps/${site}/src/app/editorial-standards/page.tsx`, 'utf8')
    const picks = readFileSync(`apps/${site}/src/app/how-we-pick/page.tsx`, 'utf8')
    const sitemap = readFileSync(`apps/${site}/src/app/sitemap.ts`, 'utf8')
    for (const src of [about, policy]) {
      assert.match(src, /href="\/how-we-pick"/)
      assert.match(src, new RegExp(`mailto:${email.replace('.', '\\.')}`))
      assert.doesNotMatch(src, banned)
    }
    assert.match(policy, /href="\/about"/)
    assert.match(about, /earn/i)
    assert.match(policy, /editorial and affiliate policy/i)
    assert.match(picks, /href="\/about"/)
    assert.match(picks, /href="\/editorial-standards"/)
    assert.ok(sitemap.includes(`https://${host}/about`))
  }
  const footer = readFileSync('packages/ui/src/components/Footer.tsx', 'utf8')
  assert.match(footer, /label: 'About', href: ABOUT_HREF/)
  assert.match(footer, /const ABOUT_HREF = '\/' \+ 'about'/)
  assert.match(footer, /'Editorial policy'/)
  assert.match(footer, /label: 'Disclosure'/)
  assert.match(footer, /'Privacy'/)
  assert.match(footer, /label: 'Contact', href: '\/inquire'/)
})
