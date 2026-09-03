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
    id: 'dog · dog-water-intake-calculator',
    file: 'apps/dog-com/src/app/tools/dog-water-intake-calculator/Calculator.tsx',
    mustInclude: [
      { re: /OZ_LOW_PER_LB\s*=\s*0\.5/, label: 'low bound 0.5 oz water per lb/day' },
      { re: /OZ_HIGH_PER_LB\s*=\s*1\.0/, label: 'high bound 1.0 oz water per lb/day' },
    ],
    why: 'Standard husbandry rule: dogs need ~0.5–1 oz of water per lb of body weight per day.',
  },
  {
    id: 'petfood · food-transition-calculator',
    file: 'apps/petfood-com/src/app/tools/food-transition-calculator/Calculator.tsx',
    mustInclude: [{ re: /STEP_PCTS\s*=\s*\[0\.25,\s*0\.5,\s*0\.75,\s*1\.0\]/, label: 'four-step ramp 25→50→75→100% new food' }],
    why: 'Standard gradual food-transition ramp: 25% → 50% → 75% → 100% new food across the window.',
  },
  {
    id: 'dog · dog-crate-size-calculator',
    file: 'apps/dog-com/src/app/tools/dog-crate-size-calculator/Calculator.tsx',
    mustInclude: [
      { re: /ADD_INCHES\s*=\s*2/, label: '+2 in minimum clearance on each body measurement' },
      { re: /c\.len\s*>=\s*minLength\s*&&\s*c\.height\s*>=\s*minHeight/, label: 'pick smallest crate meeting both minimums' },
    ],
    why: 'Crate must let the dog stand/turn/lie flat: add ~2 in (standard 2–4 in, min) to length+height, pick smallest standard crate clearing both — aligns with manufacturer weight charts.',
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
    id: 'dog · dog-ideal-weight-calculator',
    file: 'apps/dog-com/src/app/tools/dog-ideal-weight-calculator/Calculator.tsx',
    mustInclude: [{ re: /\/\s*\(1\s*\+\s*0\.1\s*\*\s*\(score\s*-\s*5\)\)/, label: 'ideal ≈ current / (1 + 0.10·(BCS−5))' }],
    why: 'Standard WSAVA body-condition heuristic: each BCS point above ideal (5/9) ≈ 10% over ideal body weight.',
  },
  {
    id: 'fish · water-change-calculator',
    file: 'apps/fish-com/src/app/tools/water-change-calculator/Calculator.tsx',
    mustInclude: [
      { re: /\(c\s*-\s*t\)\s*\/\s*\(c\s*-\s*s\)/, label: 'dilution fraction = (current−target)/(current−source)' },
      { re: /const filled = tank \* \(fillPct \/ 100\)/, label: 'filled volume = tank × (fill% / 100)' },
      { re: /const remove = filled \* \(changePct \/ 100\)/, label: 'remove = filled × (change% / 100)' },
    ],
    why: 'Volume mode: gallons to remove = filled volume × change percent. Dilution mode: fraction = (current−target)/(current−sourceLevel).',
  },
  {
    id: 'horses · horse-height-converter',
    file: 'apps/horses-com/src/app/tools/horse-height-converter/Calculator.tsx',
    mustInclude: [{ re: /hands\s*\*\s*4\s*\+\s*extraInches/, label: 'inches = hands × 4 + extra (hands.inches notation)' }],
    why: '1 hand = 4 inches; height in hands is hands.inches notation, not decimal (15.2hh = 62 in).',
  },
  {
    id: 'vets · pet-insurance-worth-it-calculator',
    file: 'apps/vets-co/src/components/tools/PetInsuranceWorthItCalculator.tsx',
    mustInclude: [{ re: /deductible\s*\+\s*annualPremium\s*\/\s*pct/, label: 'breakeven X = deductible + annualPremium/pct' }],
    why: 'Solving max(0,X−deductible)·pct = annualPremium for the eligible-cost level where the policy pays for itself.',
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
  {
    id: 'dog · puppy-first-year-budget',
    file: 'apps/dog-com/src/app/tools/puppy-first-year-budget/Calculator.tsx',
    mustInclude: [
      { re: /const foodYear = monthlyFood \* 12/, label: 'food year = monthlyFood × 12' },
      { re: /crateAndGear: 180/, label: 'small-size crate-and-gear starting point $180' },
    ],
    why: 'First-year food is twelve months of the monthly food line; small-dog gear band starts at $180 as an editable US retail starting point.',
  },
  {
    id: 'fish · filter-gph-calculator',
    file: 'apps/fish-com/src/app/tools/filter-gph-calculator/Calculator.tsx',
    mustInclude: [
      { re: /const gphMin = gal \* band\.min/, label: 'GPH min = gallons × turnover min' },
      { re: /community: \{[\s\S]*min: 4,[\s\S]*max: 6/, label: 'community turnover 4–6×' },
    ],
    why: 'Hobby filter-sizing rule: community freshwater turnover is 4–6 tank volumes per hour; GPH = gallons × band.',
  },
  {
    id: 'ferret · litter-planner',
    file: 'apps/ferret-com/src/app/tools/litter-planner/Calculator.tsx',
    mustInclude: [
      { re: /WEEKS_PER_30LB_BAG = 7/, label: '30 lb bag lasts ~7 weeks per ferret (mid of 6–8)' },
      { re: /const pans = n \+ PANS_EXTRA/, label: 'pans = ferrets + 1 extra' },
    ],
    why: 'Starter-kit planning figure: a 30 lb paper-pellet bag lasts one ferret ~6–8 weeks; pan rule is one per ferret plus one extra.',
  },
  {
    id: 'dog · harness-collar-size',
    file: 'apps/dog-com/src/app/tools/harness-collar-size/Calculator.tsx',
    mustInclude: [
      { re: /SIZE_UP_MARGIN_IN\s*=\s*0\.5/, label: 'size-up when within 0.5 in of next band' },
      { re: /id: 'XS',\s*minIn: 6,\s*maxIn: 10/, label: 'XS collar band 6–10 in neck' },
      { re: /valueIn\s*>=\s*next\.minIn\s*-\s*SIZE_UP_MARGIN_IN/, label: 'conservative size-up at band boundary' },
    ],
    why: 'Typical retail collar/harness letters map to neck/girth inches; between sizes size up by a 0.5 in margin.',
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
