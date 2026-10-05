#!/usr/bin/env node
/**
 * Mobile Lighthouse on each earning site's top five money pages, plus the
 * gift guide, search page, and not-found document.
 * One run per URL. A URL that misses a budget is retried up to twice.
 * Start the production servers yourself with LH_ORIGIN_<SITE>, or let this
 * process start `next start` for each site (the apps must already be built).
 *
 *   LH_ORIGIN_DOG_COM=http://127.0.0.1:4100 node scripts/ci/lighthouse-budgets.mjs
 */
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { setTimeout as delay } from 'node:timers/promises'
import { fileURLToPath } from 'node:url'
import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import {
  BUDGETS,
  EARNING_SITES,
  LAYOUT_PAGES,
  MONEY_PAGES,
  SITE_PORTS,
  budgetProblems,
  needsRetry,
  pageUrl,
  scoreProblems,
} from './lighthouse-budgets-lib.mjs'

const require = createRequire(import.meta.url)
const ROOT = fileURLToPath(new URL('../../', import.meta.url))

function originEnv(site) {
  const key = `LH_ORIGIN_${site.replace(/-/g, '_').toUpperCase()}`
  return process.env[key] || ''
}

function chromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  try {
    return require('playwright').chromium.executablePath()
  } catch {
    return undefined
  }
}

function metricsFromLhr(lhr) {
  return {
    performance: lhr.categories?.performance?.score ?? null,
    accessibility: lhr.categories?.accessibility?.score ?? null,
    cls: lhr.audits?.['cumulative-layout-shift']?.numericValue ?? null,
    lcp: lhr.audits?.['largest-contentful-paint']?.numericValue ?? null,
    runtimeError: lhr.runtimeError?.code || null,
  }
}

async function auditOnce(url, port) {
  const missingPage = url.endsWith('/this-page-does-not-exist')
  const result = await lighthouse(url, {
    logLevel: 'error',
    port,
    onlyCategories: ['performance', 'accessibility'],
  }, missingPage ? {
    extends: 'lighthouse:default',
    settings: { ignoreStatusCode: true },
  } : undefined)
  const metrics = metricsFromLhr(result.lhr)
  return { metrics, problems: scoreProblems(metrics) }
}

async function auditUrl(url, port) {
  let last
  for (let attempt = 1; attempt <= 3; attempt++) {
    last = await auditOnce(url, port)
    if (!needsRetry(last.problems, attempt, 3)) break
    console.log(`retry ${url}: ${last.problems.join('; ')}`)
  }
  return last
}

function startServer(site, port) {
  const child = spawn(
    'npm',
    ['run', 'start', '-w', site, '--', '-H', '127.0.0.1', '-p', String(port)],
    {
      cwd: ROOT,
      env: process.env,
      detached: true,
      stdio: 'ignore',
    },
  )
  return child
}

async function waitUntilUp(url, child) {
  const deadline = Date.now() + 120_000
  while (Date.now() < deadline) {
    if (child.exitCode != null) {
      throw new Error(`next start exited ${child.exitCode} before ${url} responded`)
    }
    try {
      const response = await fetch(url, { redirect: 'manual' })
      if (response.status < 500) return
    } catch {
      // Server is still booting.
    }
    await delay(400)
  }
  throw new Error(`timed out waiting for ${url}`)
}

function stopServer(child) {
  if (!child || child.pid == null) return
  try {
    process.kill(-child.pid, 'SIGTERM')
  } catch {
    try {
      child.kill('SIGTERM')
    } catch {
      // Already gone.
    }
  }
}

async function main() {
  const floorErrors = budgetProblems()
  if (floorErrors.length > 0) {
    console.error(floorErrors.join('\n'))
    process.exit(1)
  }

  const chrome = await chromeLauncher.launch({
    chromePath: chromePath(),
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
  })
  const failures = []
  try {
    for (const site of EARNING_SITES) {
      const preset = originEnv(site)
      const port = SITE_PORTS[site]
      const origin = preset || `http://127.0.0.1:${port}`
      let child = null
      if (!preset) {
        child = startServer(site, port)
        await waitUntilUp(origin + '/', child)
      }
      try {
        for (const slug of [...MONEY_PAGES[site], ...LAYOUT_PAGES[site]]) {
          const url = pageUrl(origin, slug)
          const { metrics, problems } = await auditUrl(url, chrome.port)
          const line = [
            problems.length === 0 ? 'ok' : 'FAIL',
            site,
            slug,
            `perf ${metrics.performance}`,
            `a11y ${metrics.accessibility}`,
            `cls ${metrics.cls}`,
            `lcp ${metrics.lcp == null ? 'missing' : Math.round(metrics.lcp)}`,
          ].join(' ')
          console.log(line)
          if (problems.length > 0) failures.push(`${site}/${slug}: ${problems.join('; ')}`)
        }
      } finally {
        stopServer(child)
      }
    }
  } finally {
    await chrome.kill()
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} page(s) missed the mobile budget`)
    for (const failure of failures) console.error(failure)
    console.error(
      `Budgets: performance >= ${BUDGETS.performanceMin}, accessibility >= ${BUDGETS.accessibilityMin}, CLS <= ${BUDGETS.clsMax}, LCP <= ${BUDGETS.lcpMaxMs}ms`,
    )
    process.exit(1)
  }
  const pageCount = EARNING_SITES.reduce(
    (count, site) => count + MONEY_PAGES[site].length + LAYOUT_PAGES[site].length,
    0,
  )
  console.log(`\nAll ${pageCount} pages met the mobile budget`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
