/**
 * `next build` with a retrying Google Fonts fetch.
 * App package.json build scripts call this so GitHub Actions and Vercel
 * both get the same behavior. The fonts themselves are unchanged.
 */
import { spawn, spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const patch = path.join(path.dirname(fileURLToPath(import.meta.url)), 'patch-google-font-fetch.cjs')
const nextBin = require.resolve('next/dist/bin/next')
const existing = process.env.NODE_OPTIONS || ''

if (!existing.includes('patch-google-font-fetch.cjs')) {
  process.env.NODE_OPTIONS = `${existing} --require ${patch}`.trim()
}

const EARNING_SITES = new Set(['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'])
const site = path.basename(process.cwd())
if (EARNING_SITES.has(site)) {
  const indexer = path.join(path.dirname(fileURLToPath(import.meta.url)), '../build-search-index.mjs')
  const indexed = spawnSync(process.execPath, [indexer, '--site', site], {
    stdio: 'inherit',
    cwd: path.join(process.cwd(), '../..'),
  })
  if (indexed.status !== 0) process.exit(indexed.status ?? 1)
}

const child = spawn(process.execPath, [nextBin, 'build', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
  cwd: process.cwd(),
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 1)
})
