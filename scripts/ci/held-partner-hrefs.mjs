/**
 * Required after `npx turbo build`.
 * Fails when a rendered <a href> on dog, vets, fish, horses, or ferret
 * resolves to a held partner, or when a result-pick would render one.
 * An amazon-brand search is allowed, even when its words name a held brand.
 * A held row with no anchor is allowed only when its visible text is neutral:
 * the retailer or brand name, never "partner ID", "tag needed", or other
 * internal wording (HELD_COPY_PATTERN in internal-voice.mjs).
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { heldVendorOfHref, liveAnchorHref } from '../../packages/config/affiliate-hop.ts'
import * as picks from '../../packages/ui/src/lib/result-picks.ts'
import { HELD_COPY_PATTERN } from './internal-voice.mjs'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../..')
const SITES = ['dog-com', 'vets-co', 'fish-com', 'horses-com', 'ferret-com']

const ANCHOR = /<a\b[^>]*?\bhref\s*=\s*(?:"([^"]+)"|'([^']+)')/gi

export function anchorHrefs(text) {
  const html = text.includes('<html') || text.includes('<body')
    ? text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    : text.replace(/\\u003c/gi, '<').replace(/\\"/g, '"')
  const hrefs = []
  for (const match of html.matchAll(ANCHOR)) {
    const href = match[1] ?? match[2]
    if (href) hrefs.push(href)
  }
  return hrefs
}

/** Internal held-partner phrases in built page text, including RSC payloads. */
export function heldCopyHits(text) {
  const flat = text.replace(/\\u003c/gi, '<').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  const re = new RegExp(HELD_COPY_PATTERN.source, 'gi')
  return [...flat.matchAll(re)].map((match) => match[0])
}

export function siteOfPath(file) {
  for (const site of SITES) {
    if (file.includes(`${site}/`) || file.includes(`${site}\\`)) return site
  }
  return 'result-picks'
}

async function walk(dir, out) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path, out)
      continue
    }
    if (entry.name.endsWith('.html') || entry.name.endsWith('.rsc')) out.push(path)
  }
}

function resultPickSamples() {
  return [
    picks.icratePick(36),
    picks.icratePick(null),
    picks.heaterFromGallons(5),
    picks.heaterFromGallons(20),
    picks.heaterFromGallons(55),
    picks.heaterFromGallons(120),
    picks.heaterFromGallons(7),
    picks.heaterFromStockWatts(100),
    picks.heaterFromStockWatts(400),
    picks.blanketPick(78, 'tools-horse-blanket-size-calculator'),
    picks.blanketPick(66, 'tools-horse-blanket-size-calculator'),
    picks.blanketPick(78, 'tools-horse-weight-calculator', 'body-length'),
    picks.ferretCagePick(1),
    picks.ferretCagePick(2),
    picks.ferretCagePick(6),
    picks.filterFromGallons(10),
    picks.filterFromGallons(25),
    picks.filterFromGallons(40, 'community'),
    picks.filterFromGallons(50, 'goldfish'),
    picks.filterFromGallons(90),
    picks.filterFromGallons(40, 'reef'),
    picks.harnessPick('M'),
    picks.harnessPick('nope'),
    picks.calorieFoodPick('Puppy', 100),
    picks.calorieFoodPick('Puppy', 60),
    picks.calorieFoodPick('Puppy', 20),
    picks.calorieFoodPick('Senior', 40),
    picks.calorieFoodPick('Adult', 40),
    picks.puppyClassFoodPick('small'),
    picks.puppyClassFoodPick('large'),
    picks.puppyClassFoodPick('giant'),
    picks.puppyClassFoodPick('medium'),
    picks.insuranceWorthPick(10, 2),
    picks.insuranceWorthPick(-1, 2),
    picks.insuranceWorthPick(0, null),
    picks.careSettingPick('telehealth'),
    picks.careSettingPick('er'),
    picks.careSettingPick('clinic'),
    picks.paperLitterPick(1),
    picks.paperLitterPick(3),
    picks.cycleTestPick(28, 'fishless'),
    picks.diseaseTestPick('Ich'),
    picks.foragePick('15 lb+', 'Maintenance (no work)'),
    picks.horseAgePick('Senior'),
    picks.horseAgePick('Adult'),
    picks.horseAgePick('Foal'),
    picks.horseAgePick('Young'),
    picks.catFoodAmountPick('Weight loss (vet-supervised)', 40),
    picks.catFoodAmountPick('Kitten', 80),
    picks.catFoodAmountPick('Neutered indoor adult', 55),
    picks.horseWaterPick(false, '5.0', '10.0'),
    picks.horseWaterPick(true, '5.0', '10.0'),
    picks.liveRockPick(40, '40', '60'),
    picks.ferretLabelPick(4.2),
    picks.ferretLabelPick(9.9),
    picks.ferretLabelPick(11),
    picks.ferretLabelPick(14),
    picks.ferretLabelPick(22),
    picks.pondLinerPick(500),
  ]
}

export async function scanBuiltOutput(root = ROOT) {
  const failures = []
  const filesBySite = Object.fromEntries(SITES.map((site) => [site, 0]))
  for (const site of SITES) {
    const files = []
    await walk(join(root, 'apps', site, '.next', 'server', 'app'), files)
    if (files.length === 0) {
      failures.push({ site, vendor: 'build', href: '(no built HTML)', file: `apps/${site}/.next/server/app` })
      continue
    }
    filesBySite[site] = files.length
    for (const file of files) {
      const text = await readFile(file, 'utf8')
      for (const href of anchorHrefs(text)) {
        const vendor = heldVendorOfHref(href)
        if (!vendor) continue
        failures.push({ site, vendor, href, file: relative(root, file) })
      }
      for (const phrase of heldCopyHits(text)) {
        failures.push({ site, vendor: 'internal-copy', href: phrase, file: relative(root, file) })
      }
    }
  }
  return { failures, filesBySite }
}

export function scanResultPicks(env = {}) {
  const failures = []
  for (const pick of resultPickSamples()) {
    const rendered = liveAnchorHref(pick.href, env)
    const vendor = heldVendorOfHref(rendered)
    if (vendor) {
      failures.push({ site: 'result-picks', vendor, href: rendered, file: 'packages/ui/src/lib/result-picks.ts' })
    }
  }
  return failures
}

function printCounts(label, rows) {
  const counts = new Map()
  for (const row of rows) {
    const key = `${row.site}\t${row.vendor}`
    counts.set(key, (counts.get(key) ?? 0) + 1)
  }
  console.log(label)
  if (counts.size === 0) {
    console.log('  (none)')
    return
  }
  for (const [key, count] of [...counts.entries()].sort()) {
    const [site, vendor] = key.split('\t')
    console.log(`  ${site}  ${vendor}  ${count}`)
  }
}

async function main() {
  const { failures: pageFailures, filesBySite } = await scanBuiltOutput()
  const pickFailures = scanResultPicks()
  console.log('Built HTML files scanned:')
  for (const site of SITES) console.log(`  ${site}  ${filesBySite[site]}`)
  printCounts('Live held hrefs or internal held copy in built pages:', pageFailures)
  printCounts('Live held result-pick hrefs:', pickFailures)
  const failures = [...pageFailures, ...pickFailures]
  if (failures.length > 0) {
    for (const row of failures.slice(0, 40)) {
      console.error(`${row.file}  ${row.vendor}  ${row.href}`)
    }
    console.error(`held-partner-hrefs: ${failures.length} live held href(s) or internal held-copy phrase(s)`)
    process.exit(1)
  }
  console.log('held-partner-hrefs: no live held hrefs and no internal held copy')
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
