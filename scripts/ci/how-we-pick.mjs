#!/usr/bin/env node
/**
 * Each earning site has one How we pick page. Comparison tables link it and
 * show a last-updated date that matches this file's latest git commit date.
 * The page may not invent a hands-on test or a clinical credential.
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '(funnels)'].includes(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (entry.name === 'page.tsx') out.push(path)
  }
  return out
}

function gitDate(file) {
  return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: ROOT, encoding: 'utf8' }).trim()
}

const foot = readFileSync(join(ROOT, 'packages/ui/src/components/ComparisonFoot.tsx'), 'utf8')
if (!foot.includes('href="/how-we-pick"')) {
  console.error('FAIL: ComparisonFoot does not link to /how-we-pick')
  process.exit(1)
}

const hits = []

for (const site of SITES) {
  const page = join(ROOT, 'apps', site, 'src/app/how-we-pick/page.tsx')
  let src = ''
  try {
    src = readFileSync(page, 'utf8')
  } catch {
    hits.push(`${site}: missing /how-we-pick`)
    continue
  }
  if (!src.includes('path: \'/how-we-pick\'')) hits.push(`${site}: how-we-pick metadata path is missing`)
  if (!/published spec|published product|published policy/i.test(src)) {
    hits.push(`${site}: how-we-pick does not say it uses published facts`)
  }
  if (!/hands-on trial/i.test(src)) hits.push(`${site}: how-we-pick does not say there is no hands-on trial`)
  if (/\bDVM\b|\bwe tested\b|\bin our lab\b/i.test(src)) {
    hits.push(`${site}: how-we-pick invents a credential or a hands-on test`)
  }
  const shown = src.match(/dateTime="(\d{4}-\d{2}-\d{2})"/)
  const logged = gitDate(page)
  if (!shown || shown[1] !== logged) {
    hits.push(`${site}: how-we-pick date ${shown?.[1] || 'missing'} is not the git date ${logged}`)
  }

  for (const file of walk(join(ROOT, 'apps', site, 'src/app'))) {
    const body = readFileSync(file, 'utf8')
    if (!/<table\b/.test(body) || !/Who should/.test(body)) continue
    if (!body.includes('<ComparisonFoot')) {
      hits.push(`${file.replace(ROOT + '/', '')}: comparison table does not link to /how-we-pick`)
    }
    const date = body.match(/<ComparisonFoot updated="(\d{4}-\d{2}-\d{2})"\s*\/>/)
    const fileDate = gitDate(file)
    if (!date || date[1] !== fileDate) {
      hits.push(`${file.replace(ROOT + '/', '')}: last-updated ${date?.[1] || 'missing'} is not the git date ${fileDate}`)
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} how-we-pick problem(s)`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: each earning site explains how it picks, and comparison dates match git.')
