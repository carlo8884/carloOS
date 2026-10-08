#!/usr/bin/env node
/**
 * CI check: a registered claim on the five earning sites must keep its
 * cited number and its source in the same blank-line block.
 *
 * A block fails when a registered claim appears with a different number,
 * or when the cited number appears without its source URL (or the named
 * token the rule requires). Funnels, email sequences, and the insurance
 * carrier registry are out of scope for the age-limit claim.
 *
 * In-script fixtures fail the process if a bare claim is allowed through.
 * Exit 0 when every scanned block is clean.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

const PETS_BEST = /https:\/\/www\.petsbest\.com\/faq/
const HP_CLAIMS = /https:\/\/www\.healthypawspetinsurance\.com\/pet-insurance-claims\.html/
const MERCK_GDV = /merckvetmanual\.com\/digestive-system\/surgical-problems-of-the-gastrointestinal-tract-in-small-animals\/gastric-dilation-and-volvulus-in-small-animals/
const MERCK_REPRO = /Merck|merckvetmanual\.com\/reproductive-system\/reproductive-system-introduction\/the-reproductive-system-in-animals/
const AAHA = /aaha\.org\/wp-content\/uploads\/globalassets\/02-guidelines\/weight-management\/2014-AAHA-Weight-Management-Guidelines-for-Dogs-and-Cats/
const RANGE = String.raw`\s*[–—-]\s*`

function fish(file, wrong, range, source) {
  return {
    id: `fish-${file}`,
    fileIncludes: `species/${file}/`,
    wrong,
    when: range,
    source,
  }
}

const CLAIMS = [
  {
    id: 'pets-best-age',
    when: /no upper age limit/i,
    source: PETS_BEST,
    skip: (path) => path.endsWith('/insurance-carriers.ts'),
  },
  {
    id: 'few-conditions',
    forbid: /few conditions are excluded/i,
  },
  {
    id: 'healthy-paws-about-two-days',
    forbid: /about two days|averages about two days/i,
  },
  {
    id: 'healthy-paws-days',
    when: /Healthy Paws[\s\S]{0,400}(?:\b2\b|two) days|(?:\b2\b|two) days[\s\S]{0,200}Healthy Paws/i,
    source: HP_CLAIMS,
  },
  {
    id: 'vetster-owner-license',
    forbid: /licensed in your state \(such as Vetster\)|licensed in the owner|jurisdiction where the pet owner|state-level licensing that makes prescriptions valid/i,
  },
  {
    id: 'askvet-visit',
    when: /AskVet[\s\S]{0,500}chat[ -]only|chat[ -]only[\s\S]{0,500}AskVet/i,
    source: /askvet\.app/,
    also: /do not print a visit type|does not print a visit type/,
  },
  {
    id: 'ferret-bar-spacing',
    when: /(?:Ferret Nation|Critter Nation)[\s\S]{0,300}(?:1\/2-inch|½-inch|~0\.5 in|\b0\.5 in\b)|(?:1\/2-inch|½-inch|~0\.5 in|\b0\.5 in\b)[\s\S]{0,300}(?:Ferret Nation|Critter Nation)/,
    source: /does not print|\bconfirm\b|planning/i,
  },
  {
    id: 'cosequin-30',
    forbid: /30\s*%\s*(?:avocado(?:\/soybean)?\s*)?unsaponifi|unsaponifi\w*[^.\n]{0,40}30\s*%|30\s*%[^.\n]{0,40}unsaponifi/i,
  },
  {
    id: 'gdv-wrong',
    forbid: /(?:GDV|bloat|gastric dil)[\s\S]{0,400}(?:70\s*[–—-]\s*80\s*%|10\s*[–—-]\s*18\s*%|near-?\s*100\s*%)|(?:70\s*[–—-]\s*80\s*%|10\s*[–—-]\s*18\s*%|near-?\s*100\s*%)[\s\S]{0,200}(?:GDV|bloat|gastric dil)/i,
  },
  {
    id: 'gdv-merck',
    when: /(?:GDV|bloat|gastric dil)[\s\S]{0,500}25\s*[–—-]\s*30\s*%|25\s*[–—-]\s*30\s*%[\s\S]{0,300}(?:GDV|bloat|gastric dil)/i,
    source: MERCK_GDV,
  },
  {
    id: 'parvo-wrong',
    forbid: /parvo[\s\S]{0,200}(?:75\s*[–—-]\s*90\s*%|50\s*[–—-]\s*90\s*%)|(?:75\s*[–—-]\s*90\s*%|50\s*[–—-]\s*90\s*%)[\s\S]{0,80}parvo/i,
  },
  {
    id: 'gestation-wrong',
    forbid: /58\s*[-–]\s*68|63-day canine average/i,
  },
  {
    id: 'gestation-merck',
    when: new RegExp(String.raw`58${RANGE}72`),
    source: MERCK_REPRO,
  },
  {
    id: 'horse-water-wrong',
    forbid: /5\s*[–—-]\s*15\s*gallons\s+per\s+day/i,
  },
  {
    id: 'weight-tape-percent',
    forbid: /weight tape[\s\S]{0,200}5\s*[–—-]\s*10\s*%|5\s*[–—-]\s*10\s*%[\s\S]{0,80}weight tape/i,
  },
  {
    id: 'aaha-weekly',
    when: /1\s*[–—-]\s*2\s*%[\s\S]{0,80}(?:per week|weekly)|(?:per week|weekly)[\s\S]{0,80}1\s*[–—-]\s*2\s*%/i,
    source: AAHA,
    passIf: /planning figure/i,
  },
  {
    id: 'oa-one-in-five',
    forbid: /1 in 5 dogs|one in five dogs/i,
  },
  {
    id: 'pda-near-100',
    forbid: /(?:patent ductus|\bPDA\b)[\s\S]{0,160}near-?\s*100\s*%\s*success|near-?\s*100\s*%\s*success[\s\S]{0,80}(?:patent ductus|\bPDA\b)/i,
  },
  {
    id: 'embrace-heartworm-testing',
    when: /Embrace[\s\S]{0,300}wellness[\s\S]{0,200}heartworm testing|heartworm testing[\s\S]{0,200}Embrace[\s\S]{0,200}wellness/i,
    source: /embracepetinsurance\.com\/coverage\/wellness-rewards/,
  },
  fish('betta-fish', /76\s*[–—-]\s*82\s*°F|78\s*[–—-]\s*82\s*°F/, /75\s*[–—-]\s*86\s*°F/, /Betta-splendens\.html/),
  fish('neon-tetra', /72\s*[–—-]\s*8[02]\s*°F/, /68\s*[–—-]\s*79\s*°F/, /Paracheirodon-innesi\.html/),
  fish('cardinal-tetra', /75\s*[–—-]\s*82\s*°F/, /73\s*[–—-]\s*81\s*°F/, /Paracheirodon-axelrodi\.html/),
  fish('guppy', /72\s*[–—-]\s*82\s*°F/, /64\s*[–—-]\s*83\s*°F/, /Poecilia-reticulata\.html/),
  fish('molly-fish', /72\s*[–—-]\s*82\s*°F|76\s*[–—-]\s*80\s*°F/, /64\s*[–—-]\s*83\s*°F/, /Poecilia-sphenops\.html/),
  fish('platy-fish', /65\s*[–—-]\s*80\s*°F|65-80°F|74\s*[–—-]\s*78\s*°F|74-78°F|65°F to 80°F/, /64\s*[–—-]\s*77\s*°F/, /Xiphophorus-maculatus\.html/),
  fish('swordtail-fish', /70\s*[–—-]\s*78\s*°F|70-78F/, /71\s*[–—-]\s*83\s*°F/, /Xiphophorus-hellerii\.html/),
  fish('angelfish', /76\s*[–—-]\s*82\s*°F|78\s*[–—-]\s*82\s*°F/, /75\s*[–—-]\s*86\s*°F/, /Pterophyllum-scalare\.html/),
  fish('corydoras', /72\s*[–—-]\s*78\s*°F|sterbai to 84/, /77\s*[–—-]\s*83\s*°F/, /Corydoras-aeneus\.html/),
  fish('bronze-corydoras', /72\s*[–—-]\s*79\s*°F/, /77\s*[–—-]\s*83\s*°F/, /Corydoras-aeneus\.html/),
  fish('bristlenose-pleco', /73\s*[–—-]\s*80\s*°F/, /70\s*[–—-]\s*79\s*°F/, /ancistrus-cf-cirrhosus/),
  fish('harlequin-rasbora', /73\s*[–—-]\s*82\s*°F/, /71\s*[–—-]\s*77\s*°F/, /Trigonostigma-heteromorpha\.html/),
  fish('zebra-danio', /64\s*[–—-]\s*77\s*°F|64 and 77°F/, /64\s*[–—-]\s*76\s*°F|64 and 76°F/, /Danio-rerio\.html/),
  fish('dwarf-gourami', /76\s*[–—-]\s*82\s*°F/, /77\s*[–—-]\s*83\s*°F/, /Trichogaster-lalius\.html/),
  fish('kuhli-loach', /75\s*[–—-]\s*82\s*°F/, /75\s*[–—-]\s*86\s*°F/, /Pangio-kuhlii\.html/),
  fish('oscar', /74\s*[–—-]\s*81\s*°F/, /71\s*[–—-]\s*77\s*°F/, /Astronotus-ocellatus\.html/),
]

function stripComments(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

function blocksOf(src) {
  const lines = stripComments(src).split('\n')
  const blocks = []
  let buf = []
  let start = 1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '') {
      if (buf.length) blocks.push({ text: buf.join('\n'), line: start })
      buf = []
      start = i + 2
    } else {
      if (!buf.length) start = i + 1
      buf.push(lines[i])
    }
  }
  if (buf.length) blocks.push({ text: buf.join('\n'), line: start })
  return blocks
}

function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.turbo'].includes(entry.name)) continue
      walk(path, out)
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.md')) {
      out.push(path)
    }
  }
  return out
}

function inScope(filePath) {
  return !filePath.includes('/(funnels)/') && !filePath.includes('/email-sequences/') && !filePath.includes('/components/visual/')
}

function claimHits(path, text) {
  const hits = []
  for (const claim of CLAIMS) {
    if (claim.fileIncludes && !path.includes(claim.fileIncludes)) continue
    if (claim.skip && claim.skip(path)) continue
    if (claim.forbid && claim.forbid.test(text)) {
      hits.push(claim.id)
      continue
    }
    if (claim.wrong && claim.wrong.test(text)) {
      hits.push(`${claim.id}-number`)
    }
    if (claim.when && claim.when.test(text)) {
      if (claim.passIf && claim.passIf.test(text)) continue
      if (claim.source && !claim.source.test(text)) hits.push(`${claim.id}-source`)
      if (claim.also && !claim.also.test(text)) hits.push(`${claim.id}-wording`)
    }
  }
  return hits
}

function assertFixtures() {
  const checks = [
    ['bare age limit', 'apps/vets-co/src/app/insurance/x/page.tsx', 'Many insurers have no upper age limit.', false],
    ['cited age limit', 'apps/vets-co/src/app/insurance/x/page.tsx', 'Pets Best has no upper age limit (https://www.petsbest.com/faq).', true],
    ['registry skipped', 'apps/vets-co/src/data/insurance-carriers.ts', 'no upper age limit', true],
    ['few conditions', 'apps/vets-co/src/app/insurance/x/page.tsx', 'few conditions are excluded', false],
    ['about two days', 'apps/vets-co/src/app/reviews/x/page.tsx', 'Healthy Paws averages about two days.', false],
    ['two days unsourced', 'apps/vets-co/src/app/reviews/x/page.tsx', 'Healthy Paws says most claims are processed in 2 days.', false],
    ['two days sourced', 'apps/vets-co/src/app/reviews/x/page.tsx', 'Healthy Paws says most claims are processed in 2 days (https://www.healthypawspetinsurance.com/pet-insurance-claims.html).', true],
    ['vetster owner', 'apps/vets-co/src/app/telehealth/page.tsx', 'licensed in the owner jurisdiction', false],
    ['askvet bare', 'apps/vets-co/src/app/telehealth/page.tsx', 'AskVet is chat-only.', false],
    ['askvet sourced', 'apps/vets-co/src/app/telehealth/page.tsx', 'AskVet is chat only. askvet.app does not print a visit type.', true],
    ['bar spacing', 'apps/ferret-com/src/app/care/cage-setup/page.tsx', 'Critter Nation uses 1/2-inch bar spacing.', false],
    ['bar planning', 'apps/ferret-com/src/app/care/cage-setup/page.tsx', 'Critter Nation 1/2-inch is a planning figure.', true],
    ['cosequin 30', 'apps/horses-com/src/app/reviews/x/page.tsx', 'ASU at 30% unsaponifiables', false],
    ['gdv wrong', 'apps/dog-com/src/app/breeds/x/page.tsx', 'GDV survival is 70–80%.', false],
    ['gdv unsourced', 'apps/dog-com/src/app/breeds/x/page.tsx', 'GDV mortality is 25–30%.', false],
    ['gdv sourced', 'apps/dog-com/src/app/breeds/x/page.tsx', 'GDV mortality is 25–30% (https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastric-dilation-and-volvulus-in-small-animals).', true],
    ['water content', 'apps/dog-com/src/app/tools/x/page.tsx', 'Canned food is 70–80% water.', true],
    ['parvo wrong', 'apps/dog-com/src/app/health/x/page.tsx', 'Parvo survival is 75–90%.', false],
    ['stent not parvo', 'apps/vets-co/src/data/diseases.ts', 'Surgical stenting has a 75–90% improvement.', true],
    ['gestation wrong', 'apps/dog-com/src/app/tools/page.tsx', 'the 63-day canine average plus the 58-68 day window', false],
    ['gestation merck', 'apps/dog-com/src/app/tools/page.tsx', 'Merck’s table is 58–72 days from an untimed breeding.', true],
    ['horse water', 'apps/horses-com/src/app/health/colic/page.tsx', 'drinks 5–15 gallons per day', false],
    ['nano gallons', 'apps/fish-com/src/data/equipment-categories.ts', 'Nano tanks 5–15 gallons where a rig would dominate.', true],
    ['weight tape', 'apps/horses-com/src/app/tools/x/page.tsx', 'The weight tape is accurate within 5–10%.', false],
    ['aaha bare', 'apps/dog-com/src/data/breed-feeding.ts', 'a 1–2% body weight loss per week target', false],
    ['aaha planning', 'apps/dog-com/src/app/nutrition/weight-management/page.tsx', '1–2% of body weight per week is a planning figure', true],
    ['oa dogs', 'apps/dog-com/src/app/health/x/page.tsx', '1 in 5 dogs have osteoarthritis', false],
    ['salmonella', 'apps/dog-com/src/app/nutrition/raw-diet-risks/page.tsx', 'one in five samples grew Salmonella', true],
    ['betta wrong', 'apps/fish-com/src/app/species/betta-fish/page.tsx', 'Temperature 76–82°F', false],
    ['betta room', 'apps/fish-com/src/app/species/betta-fish/page.tsx', 'Room temperature in most US homes (68–72°F)', true],
    ['betta sourced', 'apps/fish-com/src/app/species/betta-fish/page.tsx', '75–86°F (https://www.fishbase.se/summary/Betta-splendens.html)', true],
    ['cycling band', 'apps/fish-com/src/app/setup/aquarium-cycling-guide/page.tsx', 'Hold temperature at 78–82°F', true],
  ]
  const problems = []
  for (const [label, path, text, shouldPass] of checks) {
    const failed = claimHits(path, text).length > 0
    if (failed === shouldPass) problems.push(`${label}: expected ${shouldPass ? 'pass' : 'fail'} (${claimHits(path, text).join(', ')})`)
  }
  if (problems.length) {
    console.error('claim-siblings fixture check failed:')
    for (const problem of problems) console.error(`  ${problem}`)
    process.exit(1)
  }
}

assertFixtures()

const files = []
for (const site of SITES) {
  walk(join(ROOT, 'apps', site, 'src', 'app'), files)
  walk(join(ROOT, 'apps', site, 'src', 'data'), files)
}
const scoped = files.filter(inScope)
const misses = []
for (const filePath of scoped) {
  const src = readFileSync(filePath, 'utf8')
  for (const block of blocksOf(src)) {
    const hits = claimHits(filePath, block.text)
    if (hits.length) {
      misses.push({
        filePath,
        line: block.line,
        hits,
        snippet: block.text.replace(/\s+/g, ' ').trim().slice(0, 180),
      })
    }
  }
}

if (misses.length) {
  console.error(`FAIL: ${misses.length} claim-sibling mismatch(es)`)
  for (const miss of misses) {
    const rel = miss.filePath.replace(`${ROOT}/`, '')
    console.error(`  ${rel}:${miss.line} [${miss.hits.join(', ')}]`)
    console.error(`    ${miss.snippet}`)
  }
  console.error('Match the cited number and put the source in the same block, or remove the claim.')
  process.exit(1)
}

console.log(`PASS: ${scoped.length} pages and data modules match registered claim siblings`)
