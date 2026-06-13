#!/usr/bin/env node
/**
 * CI check: calculator formula-constant integrity (the "tools actually work" lock).
 *
 * The portfolio ships interactive calculators/tools as a core launch-quality +
 * GEO surface (CLAUDE.md §6, §8a). Their output is only trustworthy if the
 * underlying physical/financial constants are correct. A single wrong
 * coefficient silently produces confidently-wrong answers that no other gate
 * catches — trust-guard checks phrasing, metadata-policy checks <head>, link-
 * check checks hrefs, but NOTHING checks that "CO2 = 3 × dKH × 10^(7−pH)" still
 * has the 3 in it.
 *
 * This gate locks in the 2026-06-13 portfolio tools-acceptance audit. Each
 * entry pins the verified golden formula fingerprint for one calculator:
 *   - `mustInclude` — the correct constant/operation MUST still be present.
 *   - `mustExclude` — a known wrong form MUST NOT reappear (regression tripwire).
 *
 * Concrete bug this would have caught: the Fish CO2 calculator shipped with the
 * meq/L coefficient 12.839 against a dKH input — a ~4.3× overestimate that
 * labelled a textbook-healthy planted tank (4 dKH / pH 6.8 ≈ 19 ppm) as
 * "Dangerous — turn down now" (81 ppm). Fixed to `3 * khN`; this gate pins it.
 *
 * Intentionally a STATIC fingerprint check (no JSX execution / no imports), so
 * it runs anywhere with zero deps and never crosses lane boundaries — it only
 * READS calculator files (including Monetization/Visual-owned ones) and asserts.
 *
 * When a calculator is legitimately refactored, update its fingerprint here in
 * the same PR — that is the point: a constant change becomes a reviewed event.
 *
 * Exit code: 0 if every pinned calculator matches its golden fingerprint, 1 otherwise.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

/**
 * Golden formula fingerprints from the verified tools-acceptance audit.
 * `why` documents the source/derivation so a future editor understands intent.
 */
const CALCULATORS = [
  {
    id: 'fish · co2-calculator',
    file: 'apps/fish-com/src/app/tools/co2-calculator/Calculator.tsx',
    mustInclude: [
      { re: /3\s*\*\s*khN\s*\*\s*Math\.pow\(10,\s*7\s*-\s*phN\)/, label: 'CO2 = 3 × dKH × 10^(7−pH)' },
    ],
    mustExclude: [
      { re: /12\.839\s*\*\s*kh/i, label: '12.839 (meq/L coefficient) used against a dKH input → ~4.3× overestimate' },
    ],
    why: 'Standard planted-tank CO2/pH/KH chart: 4 dKH @ pH 6.6 → ~30 ppm. Input is dKH, so coefficient must be 3.',
  },
  {
    id: 'fish · aquarium-volume-calculator',
    file: 'apps/fish-com/src/app/tools/aquarium-volume-calculator/Calculator.tsx',
    mustInclude: [
      { re: /IN3_PER_US_GAL\s*=\s*231/, label: '231 in³ per US gallon' },
      { re: /Math\.PI\s*\*\s*Math\.pow\(l\s*\/\s*2,\s*2\)/, label: 'cylinder area = π·(d/2)²' },
      { re: /0\.866\s*\*\s*l\s*\*\s*l/, label: 'hex face-to-face area = 0.866·w²' },
    ],
    why: 'US gallon = 231 in³; regular-hex face-to-face area = (√3/2)·w² ≈ 0.866·w².',
  },
  {
    id: 'fish · pond-volume-calculator',
    file: 'apps/fish-com/src/app/tools/pond-volume-calculator/Calculator.tsx',
    mustInclude: [{ re: /GAL_PER_FT3\s*=\s*7\.48/, label: '7.48 US gal per ft³' }],
    why: '1 ft³ = 7.48052 US gallons.',
  },
  {
    id: 'fish · heater-wattage-calculator',
    file: 'apps/fish-com/src/app/tools/heater-wattage-calculator/Calculator.tsx',
    mustInclude: [{ re: /gal\s*\*\s*3\s*\*\s*\(deltaF\s*\/\s*10\)/, label: '3 W/gal per 10°F lift' }],
    why: 'Aquarium heater rule of thumb: ~3 watts per gallon for a 10°F lift, scaled linearly.',
  },
  {
    id: 'fish · substrate-calculator',
    file: 'apps/fish-com/src/app/tools/substrate-calculator/Calculator.tsx',
    mustInclude: [{ re: /G_PER_LB\s*=\s*453\.592/, label: '453.592 g per lb' }],
    why: 'Mass = volume(cm³) × density(g/cm³); 1 lb = 453.592 g.',
  },
  {
    id: 'dog · dog-calorie-calculator',
    file: 'apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx',
    mustInclude: [{ re: /70\s*\*\s*Math\.pow\(.*0\.75\)/, label: 'RER = 70 × kg^0.75' }],
    why: 'WSAVA/AAHA resting energy requirement: RER = 70 × (body-weight-kg)^0.75.',
  },
  {
    id: 'petfood · portion-calculator',
    file: 'apps/petfood-com/src/app/tools/portion-calculator/Calculator.tsx',
    mustInclude: [{ re: /70\s*\*\s*Math\.pow\(.*0\.75\)/, label: 'RER = 70 × kg^0.75' }],
    why: 'Same WSAVA/AAHA RER equation (dog + cat MER factors applied on top).',
  },
  {
    id: 'petfood · food-cost-calculator',
    file: 'apps/petfood-com/src/components/visual/FoodCostCalculator.tsx',
    mustInclude: [
      { re: /DEFAULT_CUPS_PER_LB\s*=\s*4/, label: '~4 cups per lb dry kibble' },
      { re: /costPerDay\s*\*\s*365/, label: 'annual = daily × 365' },
    ],
    why: 'Dry kibble ≈ 4 oz/cup → 4 cups/lb; annual cost = per-day × 365.',
  },
  {
    id: 'dog · dog-gestation-calculator',
    file: 'apps/dog-com/src/app/tools/dog-gestation-calculator/Calculator.tsx',
    mustInclude: [{ re: /AVG_DAYS\s*=\s*63/, label: 'canine gestation ~63 days' }],
    why: 'Canine gestation averages ~63 days from breeding (normal window ~58–68).',
  },
  {
    id: 'horses · horse-gestation-calculator',
    file: 'apps/horses-com/src/app/tools/horse-gestation-calculator/Calculator.tsx',
    mustInclude: [{ re: /DEFAULT_GESTATION\s*=\s*340/, label: 'mare gestation ~340 days' }],
    why: 'Mare gestation averages ~340 days (normal range ~320–362).',
  },
  {
    id: 'horses · horse-weight-calculator',
    file: 'apps/horses-com/src/app/tools/horse-weight-calculator/Calculator.tsx',
    mustInclude: [
      { re: /divisorImperial:\s*330/, label: 'weight-tape divisor 330 (riding horse, lb/in)' },
      { re: /11900/, label: 'weight-tape divisor 11900 (metric, kg/cm)' },
    ],
    why: 'Carroll & Huntington (1988) heart-girth weight-tape: lb=(girth²·length)/330; kg=(girth²·length)/11900.',
  },
  {
    id: 'lizard · enclosure-size-calculator',
    file: 'apps/lizard-com/src/app/tools/enclosure-size-calculator/Calculator.tsx',
    mustInclude: [
      { re: /cubicIn\s*\/\s*231/, label: '231 in³ per US gallon' },
      { re: /\*\s*2\.54/, label: 'in→cm = ×2.54' },
    ],
    why: 'US gallon = 231 in³; 1 in = 2.54 cm.',
  },
  {
    id: 'lizard · uvb-distance-calculator',
    file: 'apps/lizard-com/src/components/visual/UvbDistanceCalculator.tsx',
    mustInclude: [
      { re: /\(12\s*\/\s*distanceInches\)\s*\*\*\s*2/, label: 'inverse-square from 12" baseline' },
      { re: /screen\s*===\s*'glass'\)\s*return 0/, label: 'glass blocks UVB → UVI 0' },
    ],
    why: 'UVB falls off as inverse-square of distance; glass blocks the 290–320 nm band entirely.',
  },
  {
    id: 'vets · insurance-reimbursement-estimator',
    file: 'apps/vets-co/src/components/visual/InsuranceReimbursementEstimator.tsx',
    mustInclude: [
      { re: /monthlyPremium\s*\*\s*12/, label: 'annual premium = monthly × 12' },
      { re: /Math\.min\(reimbursableBeforeCap,\s*annualLimit\)/, label: 'reimbursement capped at annual limit' },
    ],
    why: 'Standard annual-deductible model: reimburse = min(max(0,claims−deductible)×pct, annualCap).',
  },
]

let failures = 0
let checked = 0
const lines = []

for (const calc of CALCULATORS) {
  const abs = join(ROOT, calc.file)
  if (!existsSync(abs)) {
    // A pinned calculator was moved/removed — surface it rather than silently passing.
    lines.push(`## ${calc.id}\n  [missing-file] ${calc.file} — pinned calculator not found (moved or removed?)`)
    failures++
    continue
  }
  const src = readFileSync(abs, 'utf8')
  const problems = []

  for (const inc of calc.mustInclude || []) {
    checked++
    if (!inc.re.test(src)) problems.push(`[formula-drift] missing expected: ${inc.label}`)
  }
  for (const exc of calc.mustExclude || []) {
    checked++
    if (exc.re.test(src)) problems.push(`[regression] found forbidden form: ${exc.label}`)
  }

  if (problems.length) {
    failures++
    lines.push(`## ${calc.id}\n  ${problems.join('\n  ')}\n  why: ${calc.why}`)
  } else {
    lines.push(`## ${calc.id}: clean`)
  }
}

console.log('# Calculator formula-constant integrity\n')
console.log(lines.join('\n'))
console.log('')

if (failures > 0) {
  console.log(
    `FAIL: ${failures} calculator(s) drifted from the verified golden formula (${checked} assertions checked).`
  )
  console.log(
    'A calculator constant changed. If intentional, update scripts/ci/calculator-integrity.mjs in the same PR; otherwise this is a correctness regression.'
  )
  process.exit(1)
}

console.log(
  `PASS: all ${CALCULATORS.length} pinned calculators match their verified golden formula (${checked} assertions).`
)
