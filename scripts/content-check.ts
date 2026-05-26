#!/usr/bin/env tsx
/**
 * CarloOS Content Health Check
 * Reports page counts, identifies stubs, and validates content structure.
 *
 * Run: npx tsx scripts/content-check.ts
 */

import fs from 'fs'
import path from 'path'

const APPS_DIR = path.join(process.cwd(), 'apps')
const APPS = [
  { id: 'dog-com', domain: 'dog.com' },
  { id: 'vets-co', domain: 'vets.co' },
  { id: 'fish-com', domain: 'fish.com' },
  { id: 'saddle-com', domain: 'saddle.com' },
  { id: 'lizard-com', domain: 'lizard.com' },
]

const MIN_LINES_FOR_REAL_PAGE = 40

function getPageFiles(appId: string): Array<{ file: string; route: string; lines: number }> {
  const appDir = path.join(APPS_DIR, appId, 'src', 'app')
  if (!fs.existsSync(appDir)) return []

  const results: Array<{ file: string; route: string; lines: number }> = []

  function scan(dir: string, base: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        scan(full, base + '/' + entry.name)
      } else if (entry.name === 'page.tsx') {
        const content = fs.readFileSync(full, 'utf-8')
        const lines = content.split('\n').length
        results.push({ file: full, route: base || '/', lines })
      }
    }
  }

  scan(appDir, '')
  return results.sort((a, b) => a.route.localeCompare(b.route))
}

function main() {
  console.log('\n📋 CarloOS Content Health Check\n' + '='.repeat(50))

  let totalPages = 0
  let totalStubs = 0

  for (const { id, domain } of APPS) {
    const pages = getPageFiles(id)
    const stubs = pages.filter(p => p.lines < MIN_LINES_FOR_REAL_PAGE)
    totalPages += pages.length
    totalStubs += stubs.length

    console.log(`\n${domain} (${pages.length} pages)`)

    for (const page of pages) {
      const isStub = page.lines < MIN_LINES_FOR_REAL_PAGE
      const icon = isStub ? '⚠️  STUB' : '✅'
      const lineInfo = `(${page.lines} lines)`
      console.log(`  ${icon} ${page.route.padEnd(45)} ${lineInfo}`)
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`Total pages:  ${totalPages}`)
  console.log(`Full pages:   ${totalPages - totalStubs}`)
  console.log(`Stubs:        ${totalStubs}`)

  if (totalStubs === 0) {
    console.log('\n✅ All pages have substantial content.\n')
  } else {
    console.log(`\n⚠️  ${totalStubs} stub pages detected above ${MIN_LINES_FOR_REAL_PAGE} line threshold.\n`)
  }
}

main()
