#!/usr/bin/env node
/**
 * Round 7–8 guide pages on the five earning sites must be in that site's
 * sitemap at the apex canonical, and their internal links must not 404 or
 * land on a redirect chain. No new tool routes were added in those rounds.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

const GUIDES = {
  'dog-com': {
    host: 'dog.com',
    paths: ['/reviews/best-puppy-crate-guide', '/reviews/front-clip-vs-back-clip-guide'],
  },
  'fish-com': {
    host: 'fish.com',
    paths: ['/reviews/hob-vs-canister-guide', '/reviews/best-display-tank-heater-guide'],
  },
  'horses-com': {
    host: 'horses.com',
    paths: ['/reviews/rambo-vs-rhino-guide', '/reviews/best-blanket-for-clipped-horse-guide'],
  },
  'vets-co': {
    host: 'vets.co',
    paths: ['/reviews/trupanion-vs-healthy-paws-guide', '/reviews/vetster-vs-askvet-guide'],
  },
  'ferret-com': {
    host: 'ferret.com',
    paths: ['/reviews/paper-vs-wood-litter-guide', '/reviews/vest-vs-h-harness-guide'],
  },
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.turbo'].includes(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (/\/(page|route)\.[tj]sx?$/.test(path) || /\\(page|route)\.[tj]sx?$/.test(path)) out.push(path)
  }
  return out
}

function routePatterns(app) {
  const appDir = join(ROOT, 'apps', app, 'src/app')
  const patterns = []
  for (const file of walk(appDir)) {
    let rel = file.slice(appDir.length).replace(/\/(page|route)\.[tj]sx?$/, '')
    rel = rel.replace(/\/\([^)]+\)(?=\/|$)/g, '')
    if (!rel) {
      patterns.push(/^\/$/)
      continue
    }
    const source = '^' + rel.replace(/\[[^\]]+\]/g, '[^/]+') + '$'
    patterns.push(new RegExp(source))
  }
  patterns.push(/^\/$/)
  return patterns
}

function redirectsFor(app) {
  const file = join(ROOT, 'apps', app, 'next.config.mjs')
  let src = ''
  try {
    src = readFileSync(file, 'utf8')
  } catch {
    return []
  }
  const found = []
  const re = /source:\s*'([^']+)'[\s\S]*?destination:\s*'([^']+)'/g
  let match
  while ((match = re.exec(src))) found.push({ source: match[1], destination: match[2] })
  return found
}

function nextPath(destination, host) {
  if (destination.startsWith('/')) return destination.split(/[?#]/)[0]
  try {
    const url = new URL(destination)
    if (url.host !== host && url.host !== `www.${host}`) return null
    return url.pathname
  } catch {
    return null
  }
}

function chainFrom(start, hops, host) {
  const seen = []
  let current = start
  while (hops.has(current)) {
    if (seen.includes(current)) return seen.concat(current)
    seen.push(current)
    const next = nextPath(hops.get(current), host)
    if (!next || next === current || !hops.has(next)) {
      if (next === current) seen.push(current)
      break
    }
    current = next
  }
  return seen
}

const hits = []

for (const [app, { host, paths }] of Object.entries(GUIDES)) {
  const sitemap = readFileSync(join(ROOT, 'apps', app, 'src/app/sitemap.ts'), 'utf8')
  const patterns = routePatterns(app)
  const redirectList = redirectsFor(app)
  const hopMap = new Map(redirectList.map((item) => [item.source, item.destination]))

  for (const [source, destination] of hopMap) {
    const chain = chainFrom(source, hopMap, host)
    if (chain.length > 1) {
      hits.push(`${app}: redirect chain ${chain.join(' -> ')} -> ${destination}`)
    }
  }

  for (const path of paths) {
    const apex = `https://${host}${path}`
    const file = join(ROOT, 'apps', app, 'src/app', path.slice(1), 'page.tsx')
    let src = ''
    try {
      src = readFileSync(file, 'utf8')
    } catch {
      hits.push(`${app}: missing page ${path}`)
      continue
    }
    if (!sitemap.includes(`url: '${apex}'`) && !sitemap.includes(`url: "${apex}"`)) {
      hits.push(`${app}: sitemap is missing apex ${apex}`)
    }
    if (sitemap.includes(`https://www.${host}${path}`)) {
      hits.push(`${app}: sitemap uses www for ${path}`)
    }
    if (!src.includes(`path: '${path}'`) && !src.includes(`path: "${path}"`)) {
      hits.push(`${file.replace(ROOT + '/', '')}: metadata path is not ${path}`)
    }
    if (!src.includes(`url: '${apex}'`) && !src.includes(`url: "${apex}"`)) {
      hits.push(`${file.replace(ROOT + '/', '')}: Article url is not apex ${apex}`)
    }

    const hrefs = [...src.matchAll(/href[=:][{\s]*['"`]([^'"`]+)['"`]/g)].map((match) => match[1])
    for (const href of hrefs) {
      if (!href.startsWith('/') || href.startsWith('//')) continue
      const pathname = href.split(/[?#]/)[0] || '/'
      if (hopMap.has(pathname)) {
        const chain = chainFrom(pathname, hopMap, host)
        hits.push(`${path}: ${href} points at redirect ${chain.join(' -> ') || pathname}`)
      }
      if (!patterns.some((pattern) => pattern.test(pathname))) {
        hits.push(`${path}: ${href} has no page (404)`)
      }
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} new-guide sitemap or link problem(s)`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: round 7–8 guides are in the apex sitemap, and their links do not 404 or chain redirects.')
