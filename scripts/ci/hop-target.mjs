#!/usr/bin/env node
/**
 * Hop targets on the five earning sites must not use the path shapes that
 * 404'd: invented /pt/{sku} product paths, bare ridingwarehouse.com (bad
 * certificate), marshall/wysong /product/{sku}, and the dead carniwhole host.
 * Citation URLs that moved stay on the live pages.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const ROUTE_FORBIDDEN = [
  [/smartpakequine\.com\/pt\//, 'SmartPak /pt/ product paths 404'],
  [/doversaddlery\.com\/\{sku\}\/p/, 'Dover /{sku}/p/ paths 404'],
  [/sstack\.com\/\{sku\}\.html/, 'Schneiders /{sku}.html paths 404'],
  [/ridingwarehouse\.com\/\{sku\}/, 'ridingwarehouse.com without www fails TLS'],
  [/marshallpet\.com\/product\/\{sku\}/, 'Marshall /product/{sku} 404s'],
  [/wysong\.net\/product\/\{sku\}/, 'Wysong /product/{sku} 404s'],
]

const PAGE_FORBIDDEN = [
  '/go/carniwhole/',
  'smartpakequine.com/pt/',
  'global-dental-guidelines',
  'animal-health-literacy/fda-investigation-potential-link',
  'fact-sheet-isoxazoline-class-products',
  'acvim.org/About/Find-a-Specialist',
  'acvim.org/Pet-Owners/Find-a-Specialist',
  'acvim.org/Specialties/Oncology',
  'acvd.org/find-a-dermatologist',
  'acvo.org/find-a-veterinary-ophthalmologist',
  'acvecc.org/find-an-ecc-specialist',
  'avdc.org/find-a-veterinary-dentist',
  'avma.org/resources-tools/animal-health-welfare',
  'aaha.org/your-pet/pet-owner-education',
  'akcchf.org/canine-health/your-dogs-health/disease-information',
]

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) {
      if (['node_modules', '.next'].includes(e.name)) continue
      walk(p, out)
    } else if (/\.(tsx|ts)$/.test(e.name)) out.push(p)
  }
  return out
}

const hits = []
for (const site of SITES) {
  const routes = join(ROOT, 'apps', site, 'src/data/affiliate-routes.ts')
  const routeSrc = readFileSync(routes, 'utf8')
  for (const [re, reason] of ROUTE_FORBIDDEN) {
    if (re.test(routeSrc)) hits.push(`${site} affiliate-routes.ts: ${reason}`)
  }
  for (const file of walk(join(ROOT, 'apps', site, 'src'))) {
    const src = readFileSync(file, 'utf8')
    for (const needle of PAGE_FORBIDDEN) {
      if (src.includes(needle)) hits.push(`${file.replace(ROOT + '/', '')}: still contains ${needle}`)
    }
  }
}

if (hits.length) {
  console.error(`FAIL: ${hits.length} hop or citation target(s) still point at a dead URL`)
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}
console.log('PASS: earning-site hop templates and moved citations avoid the known 404 paths.')
