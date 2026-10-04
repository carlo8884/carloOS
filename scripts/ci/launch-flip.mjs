#!/usr/bin/env node
/**
 * Dry-run the go-live indexing switch for the five earning sites.
 *
 * Builds each app with SITE_INDEXABLE=true and a non-preview origin, starts
 * it, and requests the apex Host. Asserts robots allow crawling, sitemap
 * locs are apex-only, money-page canonicals are apex, noindex is absent,
 * and cross-site links use the apex table.
 *
 * Does not set SITE_INDEXABLE on Vercel. Go-live stays that one env change.
 *
 *   LAUNCH_FLIP_SITES=dog-com node scripts/ci/launch-flip.mjs
 */
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')

const PREVIEW_HOSTS = [
  'dog-com-three.vercel.app',
  'carlo-os-fish-com.vercel.app',
  'horses-com.vercel.app',
  'carlo-os-vets-co.vercel.app',
  'ferret-com.vercel.app',
]

const SITES = [
  {
    id: 'dog-com',
    host: 'dog.com',
    apex: 'https://dog.com',
    port: 3840,
    money: '/reviews/best-dog-crates',
    cross: 'https://vets.co/reviews/best-pet-insurance',
  },
  {
    id: 'fish-com',
    host: 'fish.com',
    apex: 'https://fish.com',
    port: 3841,
    money: '/reviews/best-aquarium-filters',
    crossPage: '/species/african-cichlid',
    cross: 'https://vets.co/find-a-vet/aquarium',
  },
  {
    id: 'horses-com',
    host: 'horses.com',
    apex: 'https://horses.com',
    port: 3842,
    money: '/ownership/horse-insurance',
    cross: 'https://vets.co/guides/emergency-vet-costs',
  },
  {
    id: 'vets-co',
    host: 'vets.co',
    apex: 'https://vets.co',
    port: 3843,
    money: '/reviews/best-pet-insurance',
    crossPage: '/breeds/french-bulldog-health',
    cross: 'https://dog.com/breeds/french-bulldog',
  },
  {
    id: 'ferret-com',
    host: 'ferret.com',
    apex: 'https://ferret.com',
    port: 3844,
    money: '/ownership/ferret-insurance-basics',
    cross: 'https://vets.co/guides/emergency-vet-costs',
  },
]

const only = (process.env.LAUNCH_FLIP_SITES || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const selected = only.length ? SITES.filter((site) => only.includes(site.id)) : SITES
if (selected.length === 0) {
  console.error(`LAUNCH_FLIP_SITES matched nothing: ${only.join(',')}`)
  process.exit(1)
}

function run(cmd, args, { cwd, env }) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, env, stdio: 'inherit' })
    child.on('error', reject)
    child.on('exit', (code, signal) => {
      if (code === 0) resolve()
      else reject(new Error(`${path.basename(cmd)} ${args.slice(-2).join(' ')} exited ${code ?? signal}`))
    })
  })
}

function rawGet(port, hostHeader, urlPath) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port,
        path: urlPath,
        method: 'GET',
        headers: { Host: hostHeader, Accept: 'text/html,application/xml' },
      },
      (res) => {
        const chunks = []
        res.on('data', (chunk) => chunks.push(chunk))
        res.on('end', () => {
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          })
        })
      },
    )
    req.on('error', reject)
    req.end()
  })
}

async function get(port, hostHeader, urlPath) {
  let path = urlPath
  for (let hop = 0; hop < 5; hop++) {
    const res = await rawGet(port, hostHeader, path)
    if (res.status < 300 || res.status >= 400 || !res.headers.location) return res
    const loc = Array.isArray(res.headers.location) ? res.headers.location[0] : res.headers.location
    if (/^https?:\/\//i.test(loc)) {
      const url = new URL(loc)
      if (url.hostname !== '127.0.0.1') return res
      path = `${url.pathname}${url.search}`
    } else {
      path = loc
    }
  }
  return rawGet(port, hostHeader, path)
}

function header(res, name) {
  const value = res.headers[name.toLowerCase()]
  if (Array.isArray(value)) return value.join(', ')
  return value || ''
}

function linesMatching(body, re) {
  return body.split(/\r?\n/).filter((line) => re.test(line.trim()))
}

function canonical(html) {
  const tags = html.match(/<link\b[^>]*>/gi) || []
  for (const tag of tags) {
    if (!/\brel=["']canonical["']/i.test(tag)) continue
    const href = tag.match(/\bhref=["']([^"']+)["']/i)
    if (href) return href[1]
  }
  return ''
}

function robotsMetas(html) {
  const tags = html.match(/<meta\b[^>]*>/gi) || []
  const found = []
  for (const tag of tags) {
    if (!/\bname=["']robots["']/i.test(tag)) continue
    const content = tag.match(/\bcontent=["']([^"']+)["']/i)
    if (content) found.push(content[1])
  }
  return found
}

function locs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1])
}

function assertNoPreview(text, label, failures) {
  for (const host of PREVIEW_HOSTS) {
    if (text.includes(host)) failures.push(`${label} contains preview host ${host}`)
  }
}

async function waitFor(port) {
  const start = Date.now()
  let last = 'not started'
  while (Date.now() - start < 90000) {
    try {
      const res = await rawGet(port, '127.0.0.1', '/robots.txt')
      if (res.status) return
    } catch (err) {
      last = err instanceof Error ? err.message : String(err)
    }
    await new Promise((r) => setTimeout(r, 400))
  }
  throw new Error(`nothing answered on 127.0.0.1:${port} (${last})`)
}

async function checkSitemap(site, failures) {
  const index = await get(site.port, site.host, '/sitemap.xml')
  if (index.status !== 200) {
    failures.push(`${site.id} /sitemap.xml status ${index.status}`)
    return
  }
  assertNoPreview(index.body, `${site.id} sitemap index`, failures)
  const indexLocs = locs(index.body)
  if (indexLocs.length === 0) failures.push(`${site.id} sitemap index has no locs`)
  const xmlLocs = indexLocs.filter((loc) => loc.endsWith('.xml'))
  if (xmlLocs.length === 0) failures.push(`${site.id} sitemap index has no shard locs`)
  const seen = new Set([`${site.apex}/sitemap.xml`])
  const pending = [...xmlLocs]
  for (const loc of indexLocs) {
    if (!loc.startsWith(`${site.apex}/`)) failures.push(`${site.id} sitemap loc is not apex: ${loc}`)
  }
  let depth = 0
  while (pending.length && depth < 2) {
    const batch = pending.splice(0, pending.length)
    depth += 1
    for (const loc of batch) {
      if (seen.has(loc)) continue
      seen.add(loc)
      if (!loc.startsWith(`${site.apex}/`)) {
        failures.push(`${site.id} sitemap shard is not apex: ${loc}`)
        continue
      }
      const shardPath = loc.slice(site.apex.length)
      const shard = await get(site.port, site.host, shardPath)
      if (shard.status !== 200) {
        failures.push(`${site.id} ${shardPath} status ${shard.status}`)
        continue
      }
      assertNoPreview(shard.body, `${site.id} ${shardPath}`, failures)
      for (const child of locs(shard.body)) {
        if (!child.startsWith(`${site.apex}/`)) failures.push(`${site.id} sitemap loc is not apex: ${child}`)
        if (child.endsWith('.xml') && !seen.has(child)) pending.push(child)
      }
    }
  }
}

function checkPage(site, res, pagePath, { cross } , failures) {
  const label = `${site.id} ${pagePath}`
  if (res.status !== 200) {
    failures.push(`${label} status ${res.status}`)
    return
  }
  const robotsHeader = header(res, 'x-robots-tag')
  if (/noindex/i.test(robotsHeader)) failures.push(`${label} X-Robots-Tag is ${robotsHeader}`)
  const metas = robotsMetas(res.body)
  for (const meta of metas) {
    if (/noindex/i.test(meta)) failures.push(`${label} meta robots is ${meta}`)
  }
  const canon = canonical(res.body)
  const expected = `${site.apex}${pagePath}`
  if (canon !== expected && canon !== `${expected}/`) {
    failures.push(`${label} canonical is ${canon || '(missing)'} expected ${expected}`)
  }
  assertNoPreview(res.body, label, failures)
  if (cross && !res.body.includes(cross)) failures.push(`${label} missing cross-site link ${cross}`)
}

async function probe(site) {
  const failures = []
  const open = await get(site.port, site.host, '/robots.txt')
  if (open.status !== 200) failures.push(`${site.id} apex robots status ${open.status}`)
  const openTag = header(open, 'x-robots-tag')
  if (/noindex/i.test(openTag)) failures.push(`${site.id} apex robots X-Robots-Tag is ${openTag}`)
  const rootDisallow = linesMatching(open.body, /^disallow:\s*\/\s*$/i)
  if (rootDisallow.length) failures.push(`${site.id} apex robots still disallows /`)
  if (!linesMatching(open.body, /^allow:\s*\/\s*$/i).length) {
    failures.push(`${site.id} apex robots has no Allow: /`)
  }
  const sitemapLine = `Sitemap: ${site.apex}/sitemap.xml`
  if (!open.body.includes(sitemapLine)) failures.push(`${site.id} apex robots missing ${sitemapLine}`)
  assertNoPreview(open.body, `${site.id} robots`, failures)

  const local = await get(site.port, `127.0.0.1:${site.port}`, '/robots.txt')
  if (!linesMatching(local.body, /^disallow:\s*\/\s*$/i).length) {
    failures.push(`${site.id} localhost robots does not Disallow: /`)
  }
  const localPage = await get(site.port, `127.0.0.1:${site.port}`, site.money)
  const localTag = header(localPage, 'x-robots-tag')
  if (!/noindex/i.test(localTag)) {
    failures.push(`${site.id} localhost money page X-Robots-Tag is ${localTag || '(missing)'}`)
  }

  const money = await get(site.port, site.host, site.money)
  checkPage(site, money, site.money, { cross: site.crossPage ? undefined : site.cross }, failures)
  if (site.crossPage) {
    const crossPage = await get(site.port, site.host, site.crossPage)
    checkPage(site, crossPage, site.crossPage, { cross: site.cross }, failures)
  }
  await checkSitemap(site, failures)
  return failures
}

async function main() {
  for (const site of selected) {
    const appDir = path.join(ROOT, 'apps', site.id)
    const require = createRequire(path.join(appDir, 'package.json'))
    const nextBin = require.resolve('next/dist/bin/next')
    const buildEnv = {
      ...process.env,
      SITE_INDEXABLE: 'true',
      VERCEL_ENV: 'production',
    }
    console.log(`\n== build ${site.id} SITE_INDEXABLE=true apex ==`)
    await run(process.execPath, [path.join(ROOT, 'scripts/ci/next-build.mjs')], {
      cwd: appDir,
      env: buildEnv,
    })

    const startEnv = { ...process.env, SITE_INDEXABLE: 'true', VERCEL_ENV: 'production' }
    delete startEnv.NODE_OPTIONS
    const child = spawn(process.execPath, [nextBin, 'start', '-H', '127.0.0.1', '-p', String(site.port)], {
      cwd: appDir,
      env: startEnv,
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true,
    })
    let log = ''
    child.stdout.on('data', (chunk) => {
      log += chunk.toString()
    })
    child.stderr.on('data', (chunk) => {
      log += chunk.toString()
    })
    const stop = () => {
      try {
        process.kill(-child.pid, 'SIGTERM')
      } catch {
        try { child.kill('SIGTERM') } catch { /* already gone */ }
      }
    }
    try {
      await waitFor(site.port)
      const failures = await probe(site)
      if (failures.length) {
        console.error(failures.map((line) => `FAIL ${line}`).join('\n'))
        console.error(log.slice(-2000))
        process.exitCode = 1
        return
      }
      console.log(`ok ${site.id}`)
    } finally {
      stop()
      await new Promise((r) => setTimeout(r, 300))
    }
  }
  if (!process.exitCode) console.log(`\nlaunch flip dry run ok (${selected.map((s) => s.id).join(', ')})`)
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack || err.message : err)
  process.exit(1)
})
