#!/usr/bin/env node
/**
 * CI check: tool-page GEO schema coverage (the citation-magnet lock).
 *
 * Tools/calculators are the portfolio's highest-value GEO surface (CLAUDE.md
 * §6): high-intent, click-and-cite assets AI answer engines cannot reproduce
 * in-SERP. They earn citations only when they carry the full structured-data
 * stack that AI Overviews / ChatGPT / Perplexity look for:
 *
 *   1. SoftwareApplication / WebApplication — declares it as an interactive tool
 *   2. HowTo                                — the extractable step-by-step method
 *   3. FAQPage                              — the directly-answerable Q&A block
 *
 * schema-validate.mjs checks that emitted JSON-LD is well-formed; it does NOT
 * check that a tool page emits all three. A new tool can ship valid-but-thin
 * (no FAQ, no HowTo) and silently leave citations on the table. This gate is
 * the coverage lock: every PRODUCTION tool page must carry all three signals.
 *
 * Scope: the 10 production sites only. The pre-production app scaffolds
 * (askthevet, seniorpets, dogpicture) are intentionally excluded — they have no
 * Vercel projects / no launch content yet (CLAUDE.md §13) and are out of the
 * polish cohort (§8a). When a scaffold is promoted to production, add it here.
 *
 * The `/tools` hub index page is excluded (it lists spokes; its value is links,
 * not a tool schema). Redirect-stub pages (next/navigation redirect) are skipped.
 *
 * Exit code: 0 if every production tool page carries all three signals, 1 otherwise.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

const PRODUCTION_SITES = [
  'dog-com', 'fish-com', 'lizard-com', 'saddle-com', 'vets-co',
  'horses-com', 'petfood-com', 'petfoods-com', 'ferret-com', 'ferrets-com',
]

// Each signal: at least one of these patterns must appear in the page source.
const SIGNALS = [
  { key: 'SoftwareApplication', re: /SoftwareApplication|WebApplication/, label: 'SoftwareApplication/WebApplication schema' },
  { key: 'HowTo', re: /buildHowToSchema|['"]HowTo['"]|@type:\s*['"]HowTo['"]/, label: 'HowTo schema' },
  { key: 'FAQ', re: /FAQPage|FAQAccordion|buildFAQSchema|buildFaqSchema/, label: 'FAQPage schema' },
]

function isRedirectStub(src) {
  return /from ['"]next\/navigation['"]/.test(src) && /\bredirect\(/.test(src) && !/buildMetadata/.test(src)
}

let failures = 0
let toolsChecked = 0
const lines = []

for (const site of PRODUCTION_SITES) {
  const toolsDir = join(ROOT, 'apps', site, 'src', 'app', 'tools')
  if (!existsSync(toolsDir)) continue

  const entries = readdirSync(toolsDir).filter((e) => {
    const p = join(toolsDir, e)
    return statSync(p).isDirectory() && !e.startsWith('_') && !e.startsWith('[')
  })

  const siteProblems = []
  for (const tool of entries) {
    const page = join(toolsDir, tool, 'page.tsx')
    if (!existsSync(page)) continue
    const src = readFileSync(page, 'utf8')
    if (isRedirectStub(src)) continue

    toolsChecked++
    const missing = SIGNALS.filter((s) => !s.re.test(src)).map((s) => s.label)
    if (missing.length) {
      failures++
      siteProblems.push(`  [schema-gap] /tools/${tool} — missing: ${missing.join(', ')}`)
    }
  }

  if (siteProblems.length) {
    lines.push(`## ${site}: ${siteProblems.length} tool(s) with schema gaps\n${siteProblems.join('\n')}`)
  } else {
    lines.push(`## ${site}: clean`)
  }
}

console.log('# Tool-page GEO schema coverage\n')
console.log(lines.join('\n'))
console.log('')

if (failures > 0) {
  console.log(`FAIL: ${failures} production tool page(s) missing a required schema signal (${toolsChecked} checked).`)
  console.log('Every production tool needs SoftwareApplication + HowTo + FAQPage to be citation-ready. Add the missing schema before merge.')
  process.exit(1)
}

console.log(`PASS: all ${toolsChecked} production tool pages carry the full SoftwareApplication + HowTo + FAQPage stack.`)
