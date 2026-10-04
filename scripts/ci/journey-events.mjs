#!/usr/bin/env node
/**
 * Lock the funnel event names and their parameters.
 * calculator_complete (site, tool) → hop_view (site, page, hop, experiment params) → affiliate_click.
 * guide_signup_submit (site, page, result) carries no address or email.
 * guide_checklist_copy / guide_checklist_print (site, page) replace that
 * form until NEXT_PUBLIC_GUIDE_ADDRESS_CAPTURE is exactly "true".
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const hits = []

const EVENTS = [
  {
    name: 'calculator_complete',
    file: 'packages/ui/src/components/JourneyEvents.tsx',
    call: /trackEvent\(\s*'calculator_complete'\s*,\s*\{\s*site\s*,\s*tool:\s*page\s*\}\s*\)/,
  },
  {
    name: 'hop_view',
    file: 'packages/ui/src/components/JourneyEvents.tsx',
    call: /trackEvent\(\s*'hop_view'\s*,\s*\{\s*site\s*,\s*page\s*,\s*hop\s*,\s*\.\.\.experimentEventParams\(\)\s*\}\s*\)/,
  },
  {
    name: 'guide_signup_submit',
    file: 'packages/ui/src/components/EmailCapture.tsx',
    call: /trackEvent\(\s*'guide_signup_submit'\s*,\s*\{\s*site:\s*siteId\s*,\s*page:\s*window\.location\.pathname\s*,\s*result\s*,?\s*\}\s*\)/,
  },
]

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

const journey = read('packages/ui/src/components/JourneyEvents.tsx')
const capture = read('packages/ui/src/components/EmailCapture.tsx')
const checklist = read('packages/ui/src/components/GuideChecklist.tsx')
const meaning = read('packages/ui/src/components/ToolFeedback.tsx')
const hop = read('packages/ui/src/components/PrimaryHop.tsx')
const click = read('packages/ui/src/components/AffiliateClickListener.tsx')

for (const event of EVENTS) {
  const src = event.file.endsWith('EmailCapture.tsx') ? capture : journey
  if (!src.includes(`'${event.name}'`)) hits.push(`missing event name ${event.name}`)
  if (!event.call.test(src)) hits.push(`${event.name} params drifted`)
}

const signup = capture.match(/trackEvent\(\s*'guide_signup_submit'\s*,\s*\{[^}]*\}\s*\)/)
if (!signup) hits.push('guide_signup_submit call not found')
else if (/email|address|phone/i.test(signup[0])) hits.push('guide_signup_submit includes a personal field')
if (!/if \(!addressOnly\) return/.test(capture)) hits.push('guide_signup_submit must stay on the guide address form')
if (!/guideAddressCaptureEnabled\(/.test(capture)) hits.push('guide address form must stay behind NEXT_PUBLIC_GUIDE_ADDRESS_CAPTURE')
if (!/fetch\('\/api\/subscribe'/.test(capture)) hits.push('address storage must stay ready')
if (!/addressOnly && !guideAddressCaptureEnabled\(\)/.test(capture)) hits.push('address form must hide when the flag is off')

for (const name of ['guide_checklist_copy', 'guide_checklist_print']) {
  const call = checklist.match(new RegExp(`trackEvent\\(\\s*'${name}'\\s*,\\s*\\{[^}]*\\}\\s*\\)`))
  if (!call) hits.push(`${name} call not found`)
  else if (/email|address|phone/i.test(call[0])) hits.push(`${name} includes a personal field`)
  else if (!/site:\s*siteId\s*,\s*page:\s*window\.location\.pathname/.test(call[0])) hits.push(`${name} params drifted`)
}

if (!/data-calculator-result/.test(meaning)) hits.push('ResultMeaning missing data-calculator-result')
if (!/\[data-calculator-result\]/.test(journey)) hits.push('calculator_complete does not watch the result marker')
if (!/data-primary-hop/.test(hop)) hits.push('PrimaryHop missing data-primary-hop')
if (!/\[data-primary-hop\]/.test(journey)) hits.push('hop_view does not watch the primary hop')
if (!/IntersectionObserver/.test(journey)) hits.push('hop_view does not use IntersectionObserver')
if (!/querySelectorAll\('a\[href\*="\/go\/"\]'\)/.test(journey)) hits.push('single-hop pages are not observed')
if (!/anchors\.length === 1/.test(journey)) hits.push('hop_view must ignore pages with several unmarked hops')
if (!/trackEvent\(\s*'affiliate_click'/.test(click)) hits.push('affiliate_click missing from the click listener')
if (!/\.\.\.experimentEventParams\(\)/.test(click)) hits.push('affiliate_click missing experiment params')
const experiments = read('packages/ui/src/lib/experiments.ts')
if (!/NEXT_PUBLIC_EXPERIMENT_CRATE_HOP_LABEL/.test(experiments)) hits.push('crate hop experiment flag is undocumented')
if (!/return value === 'true'/.test(experiments)) hits.push('crate hop experiment must require the exact string true')
if (/NEXT_PUBLIC_EXPERIMENT_CRATE_HOP_LABEL\s*=\s*['"]true['"]/.test(experiments)) hits.push('crate hop experiment must not be hardcoded on')

const earning = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']
const apps = readdirSync(join(root, 'apps'))
for (const app of apps) {
  let layout
  try {
    layout = read(`apps/${app}/src/app/layout.tsx`)
  } catch {
    continue
  }
  const mounted = layout.includes('<JourneyEvents ')
  if (earning.includes(app)) {
    if (!layout.includes(`<JourneyEvents site="${app}" />`)) hits.push(`${app} layout missing JourneyEvents`)
  } else if (mounted) {
    hits.push(`${app} is not an earning site and must not mount JourneyEvents`)
  }
}

if (hits.length) {
  console.error('FAIL: funnel events')
  for (const hit of hits) console.error(`  - ${hit}`)
  process.exit(1)
}
console.log('PASS: calculator_complete, guide_signup_submit, and hop_view are locked.')
