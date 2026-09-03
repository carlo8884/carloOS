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
      { re: /BPS_PER_10_GAL\s*=\s*1/, label: 'starting bubble rate 1 bps per 10 gal' },
      { re: /ML_PER_10_GAL\s*=\s*1/, label: 'liquid carbon starting point 1 ml per 10 gal' },
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
    mustInclude: [
      { re: /GAL_PER_FT3\s*=\s*7\.48052/, label: '7.48052 US gal per ft³' },
      { re: /areaFt2 = lFt \* wFt/, label: 'rectangular area = L × W' },
      { re: /Math\.PI \* Math\.pow\(lFt \/ 2, 2\)/, label: 'circular area = π·(d/2)²' },
      { re: /Math\.PI \* \(lFt \/ 2\) \* \(wFt \/ 2\)/, label: 'oval area = π·(L/2)·(W/2)' },
      { re: /volumeFt3 \* GAL_PER_FT3/, label: 'US gal = ft³ × 7.48052' },
      { re: /10 \* 8 \* 2 \* 7\.48052 = 1196\.8832/, label: 'smoke: 10×8×2 ft rectangle ≈ 1197 US gal' },
      { re: /Math\.PI \* \(10 \/ 2\) \*\* 2 \* 2 \* 7\.48052/, label: 'smoke: 10 ft diameter × 2 ft depth ≈ 1175 US gal' },
    ],
    why: '1 ft³ = 7.48052 US gallons. 10×8×2 ft rectangle = 160 ft³ × 7.48052 ≈ 1197 US gal; circular diameter×depth uses π·r² ≈ 1175 US gal.',
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
    id: 'dog · dog-crate-size-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-crate-size-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-crate-size-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my crate-size checklist"/, label: 'concrete crate-size offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=tools-dog-crate-size/, label: 'wire crate with divider search hop (same query as puppy-weight / new-puppy)' },
      { re: /amazon-brand\/dog\+crate\+pad\?s=tools-dog-crate-size/, label: 'crate pad search hop' },
      { re: /amazon-brand\/dog\+crate\+cover\?s=tools-dog-crate-size/, label: 'crate cover search hop' },
      { re: /amazon-brand\/puppy\+training\+pads\?s=tools-dog-crate-size/, label: 'puppy training pads search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete crate-size offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'fish · stocking-calculator hops',
    file: 'apps/fish-com/src/app/tools/stocking-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-stocking-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my stocking checklist"/, label: 'concrete stocking-checklist offer, not Subscribe' },
      { re: /amazon-brand\/aquaclear\+70\+filter\?s=tools-stocking-calculator/, label: 'AquaClear HOB filter search hop (same query as filter reviews)' },
      { re: /amazon-brand\/fluval\+307\+canister\+filter\?s=tools-stocking-calculator/, label: 'Fluval canister search hop (same query as canister reviews)' },
      { re: /amazon-brand\/fluval\+spec\+v\+5\+gallon\?s=tools-stocking-calculator/, label: 'Fluval Spec nano tank search hop (same query as nano-tank reviews)' },
      { re: /amazon-brand\/eheim\+jager\+heater\?s=tools-stocking-calculator/, label: 'Eheim Jager heater search hop (same query as heater-wattage tool)' },
      { re: /amazon-brand\/aquarium\+sand\?s=tools-stocking-calculator/, label: 'aquarium sand search hop (same query as substrate calculator)' },
      { re: /amazon-brand\/api\+freshwater\+master\+test\+kit\?s=tools-stocking-calculator/, label: 'API master test kit search hop (same query as cycling / water-change tools)' },
      { re: /amazon-brand\/aquarium\+fish\+net\+acclimation\+kit\?s=tools-stocking-calculator/, label: 'net / acclimation kit search hop (same query as tank-mate tool)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete stocking-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'horses · stall-bedding-calculator',
    file: 'apps/horses-com/src/app/tools/stall-bedding-calculator/Calculator.tsx',
    mustInclude: [
      { re: /lengthFt \* widthFt \* \(depthIn \/ 12\)/, label: 'volume = L × W × (depth_in / 12)' },
      { re: /CU_FT_PER_SHAVINGS_BAG = 8/, label: '8 cu ft per compressed shavings bag' },
      { re: /WEEKLY_FRACTION = 0\.15/, label: 'weekly restock ≈ 15% of initial bed' },
    ],
    why: 'Stall bed volume is a rectangular prism in cubic feet; 8 cu ft is the typical expanded pine-shavings / pellet bag; 15% is the daily pick-out restock fraction.',
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
    id: 'ferret · cost-calculator',
    file: 'apps/ferret-com/src/app/tools/cost-calculator/Calculator.tsx',
    mustInclude: [
      { re: /const firstYear = oneTime \+ annualRecurring/, label: 'first year = one-time + annual recurring' },
      { re: /const monthlyRecurring = annualRecurring \/ 12/, label: 'monthly = annual recurring ÷ 12' },
      { re: /cageAndSetup: 350/, label: 'multi-level housing starting point $350' },
      { re: /monthlyFoodLitter: 40/, label: 'kibble food+litter starting point $40/mo' },
    ],
    why: 'First year is setup plus twelve months of recurring; housing/food presets are labeled US retail starting points, not quotes.',
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
    id: 'ferret · cage-size-calculator',
    file: 'apps/ferret-com/src/app/tools/cage-size-calculator/Calculator.tsx',
    mustInclude: [
      { re: /SQIN_PER_FERRET = 24 \* 24/, label: '4 sq ft (24×24 in) per ferret AFA floor' },
      { re: /HEIGHT_PER_LEVEL_IN = 18/, label: '18 in height per level' },
      { re: /PAIR_MIN_LENGTH_IN = 36/, label: '36 in preferred pair footprint length' },
      { re: /neededSqIn = effectiveN \* SQIN_PER_FERRET/, label: 'needed floor = effective ferrets × 24×24' },
    ],
    why: 'AFA-cited planning floor is 24×24 in per ferret with 18 in height per level; pair preferred footprint is 36×24. Under-4h play adds one ferret-equivalent of floor.',
  },
  {
    id: 'ferret · food-evaluator hops',
    file: 'apps/ferret-com/src/app/tools/food-evaluator/page.tsx',
    mustInclude: [
      { re: /source="tools-food-evaluator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ferret food checklist"/, label: 'concrete food-checklist offer, not Subscribe' },
      { re: /amazon-brand\/high\+protein\+ferret\+food\+kibble\?s=tools-food-evaluator/, label: 'high-protein ferret kibble search hop' },
      { re: /amazon-brand\/freeze\+dried\+raw\+ferret\+treats\?s=tools-food-evaluator/, label: 'freeze-dried raw ferret treats search hop' },
      { re: /amazon-brand\/salmon\+oil\+ferret\?s=tools-food-evaluator/, label: 'salmon oil / ferret oil search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete food-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · puppy-weight-predictor',
    file: 'apps/dog-com/src/app/tools/puppy-weight-predictor/Predictor.tsx',
    mustInclude: [
      { re: /currentWeightLb \/ fraction/, label: 'adult ≈ current weight ÷ growth fraction' },
      { re: /useState<number>\(3\)/, label: 'default Large size class (index 3)' },
      { re: /useState<string>\('14'\)/, label: 'default age 14 weeks' },
      { re: /useState<string>\('20'\)/, label: 'default current weight 20 lb' },
      { re: /\{ weeks: 16, fraction: 0\.40 \}/, label: 'large 16 wk = 40% of adult weight' },
      { re: /\{ weeks: 12, fraction: 0\.30 \}/, label: 'large 12 wk = 30% of adult weight (14 wk interpolates to 35%)' },
    ],
    why: 'Growth-percentage method: adult ≈ current ÷ fraction. Defaults match the on-page 20 lb / 14 wk large-breed worked example (20 ÷ 0.35 ≈ 57 lb). Large 16 wk is 40%, not the small-breed double-at-16-weeks shortcut.',
  },
  {
    id: 'dog · puppy-weight-predictor hops',
    file: 'apps/dog-com/src/app/tools/puppy-weight-predictor/page.tsx',
    mustInclude: [
      { re: /source="tools-puppy-weight-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my puppy growth notes"/, label: 'concrete puppy-growth offer, not Subscribe' },
      { re: /amazon-brand\/digital\+gram\+scale\+kitchen\+pet\?s=tools-puppy-weight-predictor/, label: 'scale search hop (same query as ideal-weight tool)' },
      { re: /amazon-brand\/puppy\+food\?s=tools-puppy-weight-predictor/, label: 'puppy food search hop' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=tools-puppy-weight-predictor/, label: 'crate search hop (same query as crate-size tool)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    why: 'Money path: under-hero capture with a concrete growth offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · new-puppy-checklist',
    file: 'apps/dog-com/src/app/tools/new-puppy-checklist/Calculator.tsx',
    mustInclude: [
      { re: /id: 'before-pickup'/, label: 'before-pickup stage' },
      { re: /id: 'first-48'/, label: 'first-48-hours stage' },
      { re: /id: 'first-month'/, label: 'first-month stage' },
      { re: /id: 'vet-paperwork'/, label: 'vet-and-paperwork stage' },
      { re: /useState<Size>\('medium'\)/, label: 'default adult size = medium' },
      { re: /SHOP_SOURCE = 'tools-new-puppy-checklist'/, label: 'amazon-brand hop source tag' },
      { re: /amazonHop\('wire\+dog\+crate\+with\+divider\+panel'\)/, label: 'crate search hop (same query as crate-size tool)' },
    ],
    why: 'Staged new-puppy checklist with sensible medium/8-week/indoor defaults; every gear hop is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'vets · cat-age-calculator',
    file: 'apps/vets-co/src/components/tools/CatAgeCalculator.tsx',
    mustInclude: [
      { re: /if \(cat < 1\) return Math\.round\(cat \* 15\)/, label: 'year 1 = 15 human years (pro-rated under 1)' },
      { re: /if \(cat <= 2\) return Math\.round\(15 \+ \(cat - 1\) \* 9\)/, label: 'year 2 reaches 24 (15 + 9)' },
      { re: /return Math\.round\(24 \+ \(cat - 2\) \* 4\)/, label: '+4 human years per cat year after year 2' },
      { re: /if \(cat < 7\)/, label: 'AAFP/AAHA young adult through age 6' },
      { re: /if \(cat <= 10\)/, label: 'AAFP/AAHA mature adult 7–10' },
    ],
    why: 'Standard veterinary chart: year 1 = 15, year 2 = 24, then +4/year. AAFP/AAHA stages: kitten <1, young adult 1–6, mature 7–10, senior 11+.',
  },
  {
    id: 'vets · cat-age-calculator hops',
    file: 'apps/vets-co/src/app/tools/cat-age-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-cat-age-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my life-stage notes"/, label: 'concrete life-stage offer, not Subscribe' },
      { re: /amazon-brand\/kitten\+food\?s=tools-cat-age-calculator/, label: 'kitten food search hop' },
      { re: /amazon-brand\/senior\+cat\+food\?s=tools-cat-age-calculator/, label: 'senior cat food search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-cat-age-calculator/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/cat\+carrier\?s=tools-cat-age-calculator/, label: 'carrier search hop' },
      { re: /amazon-brand\/cat\+dental\?s=tools-cat-age-calculator/, label: 'dental search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete life-stage offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'vets · cat-body-condition-score',
    file: 'apps/vets-co/src/components/tools/CatBodyConditionScore.tsx',
    mustInclude: [
      { re: /const bcs = Math\.min\(9, Math\.max\(1, Math\.round\(avg\)\)\)/, label: 'BCS = round(mean of 3 checks), clamped 1–9' },
      { re: /if \(bcs <= 3\)/, label: 'underweight band ≤3' },
      { re: /if \(bcs <= 5\)/, label: 'ideal band ≤5 (4–5 on WSAVA 9-point)' },
      { re: /if \(bcs <= 7\)/, label: 'overweight band ≤7' },
      { re: /primordial pouch/, label: 'primordial-pouch caveat kept (not invented scale)' },
    ],
    why: 'Existing WSAVA 9-point feline BCS: average rib/waist/belly checks, 4–5 ideal. Do not invent a new scale.',
  },
  {
    id: 'vets · cat-body-condition-score hops',
    file: 'apps/vets-co/src/app/tools/cat-body-condition-score/page.tsx',
    mustInclude: [
      { re: /source="tools-cat-body-condition-score-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my BCS chart"/, label: 'concrete BCS-chart offer, not Subscribe' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-cat-body-condition-score/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/measuring\+tape\?s=tools-cat-body-condition-score/, label: 'measuring tape search hop' },
      { re: /amazon-brand\/weight\+management\+cat\+food\?s=tools-cat-body-condition-score/, label: 'weight-management cat food search hop' },
      { re: /amazon-brand\/puzzle\+feeder\?s=tools-cat-body-condition-score/, label: 'puzzle feeder search hop' },
      { re: /amazon-brand\/interactive\+cat\+toy\?s=tools-cat-body-condition-score/, label: 'interactive cat toy search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete BCS-chart offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'vets · cat-grimace-scale',
    file: 'apps/vets-co/src/components/tools/CatGrimaceScale.tsx',
    mustInclude: [
      { re: /id: 'ears'/, label: 'ear-position action unit kept' },
      { re: /id: 'orbital'/, label: 'orbital-tightening action unit kept' },
      { re: /id: 'muzzle'/, label: 'muzzle-tension action unit kept' },
      { re: /id: 'whiskers'/, label: 'whisker-position action unit kept' },
      { re: /id: 'head'/, label: 'head-position action unit kept' },
      { re: /const total = scores\.reduce\(\(a, b\) => a \+ b, 0\)/, label: 'grimace total = sum of five 0–2 scores' },
      { re: /if \(total <= 1\)/, label: 'minimal-signs band ≤1' },
      { re: /if \(total <= 3\)/, label: 'watch band ≤3 (below ≈4/10 threshold)' },
      { re: /about 4 out of 10/, label: 'validated ≈4/10 analgesia threshold kept' },
    ],
    why: 'Existing Feline Grimace Scale (Evangelista 2019): five facial action units 0–2, total 0–10, ≈4/10 analgesia cut-off. Do not invent a new scale.',
  },
  {
    id: 'vets · cat-grimace-scale hops',
    file: 'apps/vets-co/src/app/tools/cat-grimace-scale/page.tsx',
    mustInclude: [
      { re: /source="tools-cat-grimace-scale-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my grimace cheat sheet"/, label: 'concrete grimace-sheet offer, not Subscribe' },
      { re: /amazon-brand\/soft\+cat\+carrier\?s=tools-cat-grimace-scale/, label: 'soft carrier search hop' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-cat-grimace-scale/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/calming\+pheromone\+diffuser\?s=tools-cat-grimace-scale/, label: 'calming pheromone diffuser search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-cat-grimace-scale/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/cat\+recovery\+bed\?s=tools-cat-grimace-scale/, label: 'cozy recovery bed search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete grimace-sheet offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · is-this-a-dog-emergency',
    file: 'apps/dog-com/src/app/tools/is-this-a-dog-emergency/TriageHelper.tsx',
    mustInclude: [
      { re: /hasEmergency = picked\.some\(\(s\) => s\.level === 'emergency'\)/, label: 'any emergency sign → go now' },
      { re: /tier: 'go-now'/, label: 'go-now verdict kept' },
      { re: /allMonitorEligible = picked\.every\(\(s\) => MONITOR_ELIGIBLE\.has\(s\.num\)\)/, label: 'monitor only if every selected sign is monitor-eligible' },
      { re: /tier: 'same-day'/, label: 'same-day fallback when mixed/urgent' },
      { re: /There is no "all clear" verdict/, label: 'no all-clear verdict (comment contract)' },
      { re: /from '\.\.\/\.\.\/\.\.\/data\/dog-symptom-signs'/, label: 'signs imported from shared dog-symptom-signs (do not fork)' },
    ],
    why: 'Existing conservative triage: any emergency sign → go now; monitor only for 09/14 monitor-eligible signs; mixed selections resolve upward. No all-clear. Do not invent a new formula.',
  },
  {
    id: 'dog · is-this-a-dog-emergency hops',
    file: 'apps/dog-com/src/app/tools/is-this-a-dog-emergency/page.tsx',
    mustInclude: [
      { re: /source="tools-is-this-a-dog-emergency-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my triage cheat sheet"/, label: 'concrete fridge-sheet offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-is-this-a-dog-emergency/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-is-this-a-dog-emergency/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/soft\+dog\+carrier\?s=tools-is-this-a-dog-emergency/, label: 'soft carrier search hop' },
      { re: /amazon-brand\/styptic\+powder\?s=tools-is-this-a-dog-emergency/, label: 'styptic powder search hop' },
      { re: /amazon-brand\/tick\+remover\?s=tools-is-this-a-dog-emergency/, label: 'tick remover search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete fridge-sheet offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'vets · is-this-a-cat-emergency',
    file: 'apps/vets-co/src/app/tools/is-this-a-cat-emergency/TriageHelper.tsx',
    mustInclude: [
      { re: /hasEmergency = picked\.some\(\(s\) => s\.level === 'emergency'\)/, label: 'any emergency sign → go now' },
      { re: /tier: 'go-now'/, label: 'go-now verdict kept' },
      { re: /allMonitorEligible = picked\.every\(\(s\) => MONITOR_ELIGIBLE\.has\(s\.num\)\)/, label: 'monitor only if every selected sign is monitor-eligible' },
      { re: /tier: 'same-day'/, label: 'same-day fallback when mixed/urgent' },
      { re: /There is no "all clear" verdict/, label: 'no all-clear verdict (comment contract)' },
      { re: /from '\.\.\/\.\.\/\.\.\/data\/cat-symptom-signs'/, label: 'signs imported from shared cat-symptom-signs (do not fork)' },
    ],
    why: 'Conservative cat triage: any emergency sign → go now; monitor only for 10/14 monitor-eligible signs; mixed selections resolve upward. No all-clear. Do not invent a new formula.',
  },
  {
    id: 'vets · is-this-a-cat-emergency hops',
    file: 'apps/vets-co/src/app/tools/is-this-a-cat-emergency/page.tsx',
    mustInclude: [
      { re: /source="tools-is-this-a-cat-emergency-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my cat triage cheat sheet"/, label: 'concrete fridge-sheet offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-is-this-a-cat-emergency/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-is-this-a-cat-emergency/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/soft\+cat\+carrier\?s=tools-is-this-a-cat-emergency/, label: 'soft cat carrier search hop' },
      { re: /amazon-brand\/styptic\+powder\?s=tools-is-this-a-cat-emergency/, label: 'styptic powder search hop' },
      { re: /amazon-brand\/wound\+care\+gauze\?s=tools-is-this-a-cat-emergency/, label: 'wound-care gauze search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete fridge cat-triage cheat sheet; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'ferret · is-this-a-ferret-emergency',
    file: 'apps/ferret-com/src/app/tools/is-this-a-ferret-emergency/TriageHelper.tsx',
    mustInclude: [
      { re: /hasEmergency = picked\.some\(\(s\) => s\.level === 'emergency'\)/, label: 'any emergency sign → go now' },
      { re: /tier: 'go-now'/, label: 'go-now verdict kept' },
      { re: /allMonitorEligible = picked\.every\(\(s\) => MONITOR_ELIGIBLE\.has\(s\.num\)\)/, label: 'monitor only if every selected sign is monitor-eligible' },
      { re: /tier: 'same-day'/, label: 'same-day fallback when mixed/urgent' },
      { re: /There is no "all clear" verdict/, label: 'no all-clear verdict (comment contract)' },
      { re: /from '\.\.\/\.\.\/\.\.\/data\/ferret-symptom-signs'/, label: 'signs imported from shared ferret-symptom-signs (do not fork)' },
    ],
    why: 'Conservative ferret triage: any emergency sign → go now; monitor only for 11/12 monitor-eligible signs; mixed selections resolve upward. No all-clear. Do not invent a new formula.',
  },
  {
    id: 'ferret · is-this-a-ferret-emergency hops',
    file: 'apps/ferret-com/src/app/tools/is-this-a-ferret-emergency/page.tsx',
    mustInclude: [
      { re: /source="tools-is-this-a-ferret-emergency-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ferret triage cheat sheet"/, label: 'concrete fridge-sheet offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-is-this-a-ferret-emergency/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-is-this-a-ferret-emergency/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/soft\+pet\+carrier\?s=tools-is-this-a-ferret-emergency/, label: 'soft pet carrier search hop' },
      { re: /amazon-brand\/styptic\+powder\?s=tools-is-this-a-ferret-emergency/, label: 'styptic powder search hop' },
      { re: /amazon-brand\/wound\+care\+gauze\?s=tools-is-this-a-ferret-emergency/, label: 'wound-care gauze search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete fridge ferret-triage cheat sheet; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'ferret · ferret-age-calculator',
    file: 'apps/ferret-com/src/app/tools/ferret-age-calculator/Calculator.tsx',
    mustInclude: [
      { re: /if \(ferret < 1\) return Math\.round\(ferret \* 15\)/, label: 'year 1 = 15 human years (pro-rated kits)' },
      { re: /if \(ferret <= 2\) return Math\.round\(15 \+ \(ferret - 1\) \* 10\)/, label: 'year 2 reaches 25 (15 + 10)' },
      { re: /return Math\.round\(25 \+ \(ferret - 2\) \* 8\)/, label: '+8 human years per ferret year after year 2' },
      { re: /if \(ferret < 3\)/, label: 'young adult through age 2 (1–3 band)' },
      { re: /if \(ferret < 5\)/, label: 'mature 3–4; senior 5+' },
      { re: /label: 'Kit'/, label: 'kit life-stage label' },
      { re: /label: 'Young adult'/, label: 'young-adult life-stage label' },
      { re: /label: 'Mature'/, label: 'mature life-stage label' },
      { re: /label: 'Senior'/, label: 'senior life-stage label' },
    ],
    mustExclude: [
      { re: /\*\s*7\b/, label: 'never multiply-by-seven in the formula' },
    ],
    why: 'Ferret planning bands grounded in Ferret.com lifespan copy: kit <1, young adult 1–3, mature 3–5, senior 5+. Human-year model is year 1 = 15, year 2 = 25, then +8/year — not ×7, not a diagnosis.',
  },
  {
    id: 'ferret · ferret-age-calculator hops',
    file: 'apps/ferret-com/src/app/tools/ferret-age-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-ferret-age-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ferret life-stage notes"/, label: 'concrete life-stage offer, not Subscribe' },
      { re: /amazon-brand\/ferret\+food\?s=tools-ferret-age-calculator/, label: 'ferret food search hop' },
      { re: /amazon-brand\/senior\+ferret\+food\?s=tools-ferret-age-calculator/, label: 'senior ferret food search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-ferret-age-calculator/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/ferret\+hammock\?s=tools-ferret-age-calculator/, label: 'ferret hammock search hop' },
      { re: /amazon-brand\/ferret\+carrier\?s=tools-ferret-age-calculator/, label: 'ferret carrier search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete life-stage offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'ferret · ferret-body-condition-score',
    file: 'apps/ferret-com/src/app/tools/ferret-body-condition-score/Calculator.tsx',
    mustInclude: [
      { re: /const bcs = Math\.min\(9, Math\.max\(1, Math\.round\(avg\)\)\)/, label: 'BCS = round(mean of 3 checks), clamped 1–9' },
      { re: /if \(bcs <= 3\)/, label: 'underweight band ≤3' },
      { re: /if \(bcs <= 5\)/, label: 'ideal band ≤5 (4–5 on the 9-point planning scale)' },
      { re: /if \(bcs <= 7\)/, label: 'overweight band ≤7' },
      { re: /seasonal weight swing/, label: 'seasonal-weight-swing caveat kept (ferret-specific, not invented scale)' },
    ],
    why: 'Same 1–9 planning scale as the dog/cat BCS tools (average rib/waist/belly, 4–5 ideal), with ferret descriptors and the seasonal weight-swing caveat from Ferret.com weight-management copy. Do not invent a new scale or claim a published ferret WSAVA chart.',
  },
  {
    id: 'ferret · ferret-body-condition-score hops',
    file: 'apps/ferret-com/src/app/tools/ferret-body-condition-score/page.tsx',
    mustInclude: [
      { re: /source="tools-ferret-bcs-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ferret BCS checklist"/, label: 'concrete BCS-checklist offer, not Subscribe' },
      { re: /amazon-brand\/ferret\+food\?s=tools-ferret-body-condition-score/, label: 'ferret food search hop' },
      { re: /amazon-brand\/senior\+ferret\+food\?s=tools-ferret-body-condition-score/, label: 'senior ferret food search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-ferret-body-condition-score/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/ferret\+hammock\?s=tools-ferret-body-condition-score/, label: 'ferret hammock search hop' },
      { re: /amazon-brand\/ferret\+carrier\?s=tools-ferret-body-condition-score/, label: 'ferret carrier search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete BCS-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · dog-grimace-scale',
    file: 'apps/dog-com/src/app/tools/dog-grimace-scale/Calculator.tsx',
    mustInclude: [
      { re: /id: 'ears'/, label: 'ear-position action unit kept' },
      { re: /id: 'orbital'/, label: 'orbital-tightening action unit kept' },
      { re: /id: 'muzzle'/, label: 'muzzle-tension action unit kept' },
      { re: /id: 'brow'/, label: 'brow / tension-above-the-eye action unit kept (dog-specific)' },
      { re: /id: 'head'/, label: 'head-position action unit kept' },
      { re: /const total = scores\.reduce\(\(a, b\) => a \+ b, 0\)/, label: 'grimace total = sum of five 0–2 scores' },
      { re: /if \(total <= 1\)/, label: 'minimal-signs band ≤1' },
      { re: /if \(total <= 3\)/, label: 'watch band ≤3 (below the higher planning band)' },
      { re: /\/tools\/is-this-a-dog-emergency/, label: 'high-pain outcomes push ER triage, not shop-first' },
    ],
    mustExclude: [
      { re: /mg\/kg| milligrams per kilogram/i, label: 'never publish a dose' },
      { re: /\b(give|administer|dose with)\b.{0,40}\b(tramadol|carprofen|rimadyl|gabapentin|meloxicam|galliprant)\b/i, label: 'never recommend a named pain drug' },
    ],
    why: 'Dog twin of the cat grimace pattern: five facial action units 0–2, total 0–10, planning heuristic bands. Dog-specific brow AU. High-pain pushes /tools/is-this-a-dog-emergency. Not a validated canine analgesia cut-off. No dosing, no named Rx.',
  },
  {
    id: 'dog · dog-grimace-scale hops',
    file: 'apps/dog-com/src/app/tools/dog-grimace-scale/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-grimace-scale-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my dog pain-check checklist"/, label: 'concrete pain-check offer, not Subscribe' },
      { re: /amazon-brand\/dog\+first\+aid\+kit\?s=tools-dog-grimace-scale/, label: 'dog first-aid kit search hop' },
      { re: /amazon-brand\/soft\+recovery\+cone\+dog\?s=tools-dog-grimace-scale/, label: 'soft recovery cone search hop' },
      { re: /amazon-brand\/orthopedic\+dog\+bed\?s=tools-dog-grimace-scale/, label: 'orthopedic dog bed search hop' },
      { re: /amazon-brand\/dog\+ice\+pack\+wrap\?s=tools-dog-grimace-scale/, label: 'dog ice pack wrap search hop' },
      { re: /amazon-brand\/calming\+dog\+chews\?s=tools-dog-grimace-scale/, label: 'calming dog chews search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
      { re: /\/tools\/is-this-a-dog-emergency/, label: 'high-pain / kit copy points at dog emergency triage' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete pain-check offer; every gear CTA is an amazon-brand category search (comfort / observation, not Rx); high-pain points at ER triage.',
  },
  {
    id: 'horses · horse-grimace-scale',
    file: 'apps/horses-com/src/app/tools/horse-grimace-scale/Calculator.tsx',
    mustInclude: [
      { re: /id: 'ears'/, label: 'ear-position action unit kept' },
      { re: /id: 'orbital'/, label: 'orbital-tightening action unit kept' },
      { re: /id: 'supraorbital'/, label: 'tension-above-the-eye / supraorbital action unit kept (horse-specific)' },
      { re: /id: 'chewing'/, label: 'chewing-muscles / mouth / chin action unit kept' },
      { re: /id: 'nostrils'/, label: 'nostril / profile action unit kept' },
      { re: /const total = scores\.reduce\(\(a, b\) => a \+ b, 0\)/, label: 'grimace total = sum of five 0–2 scores' },
      { re: /if \(total <= 1\)/, label: 'minimal-signs band ≤1' },
      { re: /if \(total <= 3\)/, label: 'watch band ≤3 (below the higher planning band)' },
      { re: /\/tools\/is-this-a-horse-emergency/, label: 'high-pain outcomes push ER triage, not shop-first' },
    ],
    mustExclude: [
      { re: /mg\/kg| milligrams per kilogram/i, label: 'never publish a dose' },
      { re: /\b(give|administer|dose with)\b.{0,40}\b(bute|banamine|phenylbutazone|flunixin|firocoxib|previcox|gabapentin)\b/i, label: 'never recommend a named pain drug' },
    ],
    why: 'Horse twin of the dog/cat grimace pattern: five facial action units 0–2, total 0–10, planning heuristic bands. HGS-style AUs (ears, orbital, supraorbital, chewing/mouth, nostrils). High-pain pushes /tools/is-this-a-horse-emergency. Not a validated owner analgesia cut-off. No dosing, no named Rx.',
  },
  {
    id: 'horses · horse-grimace-scale hops',
    file: 'apps/horses-com/src/app/tools/horse-grimace-scale/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-grimace-scale-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my horse pain-check checklist"/, label: 'concrete pain-check offer, not Subscribe' },
      { re: /amazon-brand\/equine\+first\+aid\+kit\?s=tools-horse-grimace-scale/, label: 'equine first-aid kit search hop' },
      { re: /amazon-brand\/poultice\?s=tools-horse-grimace-scale/, label: 'poultice search hop' },
      { re: /amazon-brand\/ice\+boot\+cold\+therapy\+wrap\?s=tools-horse-grimace-scale/, label: 'ice boot / cold therapy wrap search hop' },
      { re: /amazon-brand\/digital\+veterinary\+thermometer\?s=tools-horse-grimace-scale/, label: 'digital veterinary thermometer search hop' },
      { re: /amazon-brand\/vet\+wrap\+cohesive\+bandage\?s=tools-horse-grimace-scale/, label: 'vet wrap / cohesive bandage search hop' },
      { re: /amazon-brand\/horse\+electrolytes\?s=tools-horse-grimace-scale/, label: 'horse electrolytes search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
      { re: /\/tools\/is-this-a-horse-emergency/, label: 'high-pain / kit copy points at horse emergency triage' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete pain-check offer; every gear CTA is an amazon-brand category search (comfort / observation, not Rx); high-pain points at ER triage.',
  },
  {
    id: 'ferret · ferret-grimace-scale',
    file: 'apps/ferret-com/src/app/tools/ferret-grimace-scale/Calculator.tsx',
    mustInclude: [
      { re: /id: 'ears'/, label: 'ear-position action unit kept' },
      { re: /id: 'orbital'/, label: 'orbital-tightening action unit kept' },
      { re: /id: 'nose'/, label: 'nose-bulging action unit kept (ferret-specific)' },
      { re: /id: 'cheek'/, label: 'cheek-bulging action unit kept (ferret-specific)' },
      { re: /id: 'whiskers'/, label: 'whisker-retraction action unit kept (ferret-specific)' },
      { re: /const total = scores\.reduce\(\(a, b\) => a \+ b, 0\)/, label: 'grimace total = sum of five 0–2 scores' },
      { re: /if \(total <= 1\)/, label: 'minimal-signs band ≤1' },
      { re: /if \(total <= 3\)/, label: 'watch band ≤3 (below the higher planning band)' },
      { re: /\/tools\/is-this-a-ferret-emergency/, label: 'high-pain outcomes push ER triage, not shop-first' },
    ],
    mustExclude: [
      { re: /mg\/kg| milligrams per kilogram/i, label: 'never publish a dose' },
      { re: /\b(give|administer|dose with)\b.{0,40}\b(tramadol|gabapentin|meloxicam|buprenorphine|metacam|carprofen)\b/i, label: 'never recommend a named pain drug' },
    ],
    why: 'Ferret twin of the dog/cat/horse grimace pattern: five facial action units 0–2, total 0–10, planning heuristic bands. FGS-style AUs (ears, orbital, nose, cheek, whiskers). High-pain pushes /tools/is-this-a-ferret-emergency. Not a validated owner analgesia cut-off. No dosing, no named Rx.',
  },
  {
    id: 'ferret · ferret-grimace-scale hops',
    file: 'apps/ferret-com/src/app/tools/ferret-grimace-scale/page.tsx',
    mustInclude: [
      { re: /source="tools-ferret-grimace-scale-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ferret pain-check checklist"/, label: 'concrete pain-check offer, not Subscribe' },
      { re: /amazon-brand\/ferret\+first\+aid\+kit\?s=tools-ferret-grimace-scale/, label: 'ferret first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-ferret-grimace-scale/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/vet\+wrap\+cohesive\+bandage\?s=tools-ferret-grimace-scale/, label: 'vet wrap / cohesive bandage search hop' },
      { re: /amazon-brand\/pet\+heating\+pad\+low\?s=tools-ferret-grimace-scale/, label: 'low-setting pet heating pad search hop' },
      { re: /amazon-brand\/ferret\+electrolytes\+recovery\+food\?s=tools-ferret-grimace-scale/, label: 'ferret electrolytes / recovery food search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
      { re: /\/tools\/is-this-a-ferret-emergency/, label: 'high-pain / kit copy points at ferret emergency triage' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete pain-check offer; every gear CTA is an amazon-brand category search (comfort / observation, not Rx); high-pain points at ER triage.',
  },
  {
    id: 'horses · is-this-a-horse-emergency',
    file: 'apps/horses-com/src/app/tools/is-this-a-horse-emergency/TriageHelper.tsx',
    mustInclude: [
      { re: /hasEmergency = picked\.some\(\(s\) => s\.level === 'emergency'\)/, label: 'any emergency sign → go now' },
      { re: /tier: 'go-now'/, label: 'go-now verdict kept' },
      { re: /allMonitorEligible = picked\.every\(\(s\) => MONITOR_ELIGIBLE\.has\(s\.num\)\)/, label: 'monitor only if every selected sign is monitor-eligible' },
      { re: /tier: 'same-day'/, label: 'same-day fallback when mixed/urgent' },
      { re: /There is no "all clear" verdict/, label: 'no all-clear verdict (comment contract)' },
      { re: /from '\.\.\/\.\.\/\.\.\/data\/horse-symptom-signs'/, label: 'signs imported from shared horse-symptom-signs (do not fork)' },
    ],
    why: 'Conservative horse triage: any emergency sign → go now; monitor only for 09/10 monitor-eligible signs; mixed selections resolve upward. No all-clear. Do not invent a new formula.',
  },
  {
    id: 'horses · is-this-a-horse-emergency hops',
    file: 'apps/horses-com/src/app/tools/is-this-a-horse-emergency/page.tsx',
    mustInclude: [
      { re: /source="tools-is-this-a-horse-emergency-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my horse triage cheat sheet"/, label: 'concrete fridge-sheet offer, not Subscribe' },
      { re: /amazon-brand\/equine\+first\+aid\+kit\?s=tools-is-this-a-horse-emergency/, label: 'equine first-aid kit search hop' },
      { re: /amazon-brand\/digital\+veterinary\+thermometer\?s=tools-is-this-a-horse-emergency/, label: 'digital veterinary thermometer search hop' },
      { re: /amazon-brand\/vet\+wrap\+bandage\?s=tools-is-this-a-horse-emergency/, label: 'vet wrap bandage search hop' },
      { re: /amazon-brand\/poultice\?s=tools-is-this-a-horse-emergency/, label: 'poultice search hop' },
      { re: /amazon-brand\/horse\+electrolytes\?s=tools-is-this-a-horse-emergency/, label: 'horse electrolytes search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete fridge horse-triage cheat sheet; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'horses · horse-age-calculator',
    file: 'apps/horses-com/src/app/tools/horse-age-calculator/Calculator.tsx',
    mustInclude: [
      { re: /if \(horse < 1\) return Math\.round\(horse \* 12\)/, label: 'year 1 = 12 human years (pro-rated foals)' },
      { re: /if \(horse <= 5\) return Math\.round\(12 \+ \(horse - 1\) \* 5\)/, label: 'age 5 reaches 32 (12 + 4×5)' },
      { re: /return Math\.round\(32 \+ \(horse - 5\) \* 2\.5\)/, label: '+2.5 human years per horse year after age 5' },
      { re: /if \(horse < 5\)/, label: 'young through age 4 (1–5 band)' },
      { re: /if \(horse < 15\)/, label: 'adult 5–14; senior 15+' },
      { re: /label: 'Foal'/, label: 'foal life-stage label' },
      { re: /label: 'Young'/, label: 'young life-stage label' },
      { re: /label: 'Adult'/, label: 'adult life-stage label' },
      { re: /label: 'Senior'/, label: 'senior life-stage label' },
    ],
    mustExclude: [
      { re: /\*\s*7\b/, label: 'never multiply-by-seven in the formula' },
    ],
    why: 'Horse planning bands grounded in Horses.com senior-care copy: foal <1, young 1–5, adult 5–15, senior 15+. Human-year model is year 1 = 12, age 5 = 32, then +2.5/year — not ×7, not a diagnosis.',
  },
  {
    id: 'horses · horse-age-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-age-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-age-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my horse life-stage notes"/, label: 'concrete life-stage offer, not Subscribe' },
      { re: /amazon-brand\/horse\+feed\?s=tools-horse-age-calculator/, label: 'horse feed search hop' },
      { re: /amazon-brand\/senior\+horse\+feed\?s=tools-horse-age-calculator/, label: 'senior horse feed search hop' },
      { re: /amazon-brand\/horse\+weight\+tape\?s=tools-horse-age-calculator/, label: 'weight tape search hop' },
      { re: /amazon-brand\/horse\+fly\+mask\?s=tools-horse-age-calculator/, label: 'fly mask search hop' },
      { re: /amazon-brand\/horse\+hoof\+pick\?s=tools-horse-age-calculator/, label: 'hoof pick search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /https:\/\/vets\.co\/telehealth/, label: 'non-ER talk-to-a-vet points at vets.co/telehealth' },
      { re: /https:\/\/vets\.co\/reviews\/best-pet-insurance/, label: 'insurance CTA points at educational vets.co comparison' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete life-stage offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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

  if (calc.id === 'fish · pond-volume-calculator') {
    const galMatch = src.match(/GAL_PER_FT3\s*=\s*([0-9.]+)/)
    const gal = galMatch ? Number(galMatch[1]) : NaN
    const rectGal = 10 * 8 * 2 * gal
    const circGal = Math.PI * (10 / 2) ** 2 * 2 * gal
    checked += 2
    if (Math.round(rectGal) !== 1197) {
      problems.push(`[smoke] 10×8×2 ft rectangle should be ≈1197 US gal, got ${Math.round(rectGal)}`)
    }
    if (Math.round(circGal) !== 1175) {
      problems.push(`[smoke] 10 ft diameter × 2 ft depth circle should be ≈1175 US gal, got ${Math.round(circGal)}`)
    }
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
