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
    id: 'fish · co2-calculator hops',
    file: 'apps/fish-com/src/app/tools/co2-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-co2-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my planted-tank checklist"/, label: 'concrete planted-tank-checklist offer, not Subscribe' },
      { re: /amazon-brand\/aquarium\+co2\+regulator\+solenoid\?s=tools-co2-calculator/, label: 'CO2 regulator+solenoid search hop' },
      { re: /amazon-brand\/aquarium\+co2\+diffuser\?s=tools-co2-calculator/, label: 'CO2 diffuser search hop' },
      { re: /amazon-brand\/aquarium\+co2\+drop\+checker\?s=tools-co2-calculator/, label: 'drop checker search hop' },
      { re: /amazon-brand\/seachem\+flourish\+excel\?s=tools-co2-calculator/, label: 'Seachem Flourish Excel liquid carbon search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete planted-tank-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'fish · aquarium-volume-calculator hops',
    file: 'apps/fish-com/src/app/tools/aquarium-volume-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-aquarium-volume-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my tank size checklist"/, label: 'concrete tank-size-checklist offer, not Subscribe' },
      { re: /amazon-brand\/glass\+aquarium\+tank\+gallon\?s=tools-aquarium-volume/, label: 'glass tank by gallon search hop' },
      { re: /amazon-brand\/acrylic\+aquarium\+tank\?s=tools-aquarium-volume/, label: 'acrylic tank search hop' },
      { re: /amazon-brand\/aquarium\+stand\?s=tools-aquarium-volume/, label: 'aquarium stand search hop' },
      { re: /amazon-brand\/aquarium\+substrate\+gravel\+bags\?s=tools-aquarium-volume/, label: 'substrate bags search hop' },
      { re: /amazon-brand\/aquarium\+heater\+tank\+size\?s=tools-aquarium-volume/, label: 'heater by tank size search hop' },
      { re: /amazon-brand\/aquarium\+filter\+gallon\?s=tools-aquarium-volume/, label: 'filter sized to gallons search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete tank-size-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'fish · pond-volume-calculator hops',
    file: 'apps/fish-com/src/app/tools/pond-volume-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-pond-volume-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my pond setup checklist"/, label: 'concrete pond-setup-checklist offer, not Subscribe' },
      { re: /amazon-brand\/epdm\+pond\+liner\?s=tools-pond-volume/, label: 'EPDM pond liner search hop' },
      { re: /amazon-brand\/submersible\+pond\+pump\?s=tools-pond-volume/, label: 'submersible pond pump search hop' },
      { re: /amazon-brand\/pond\+filter\+skimmer\+kit\?s=tools-pond-volume/, label: 'pond filter / skimmer kit search hop' },
      { re: /amazon-brand\/pond\+dechlorinator\+water\+conditioner\?s=tools-pond-volume/, label: 'pond dechlorinator / water conditioner search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete pond-setup-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'fish · heater-wattage-calculator',
    file: 'apps/fish-com/src/app/tools/heater-wattage-calculator/Calculator.tsx',
    mustInclude: [{ re: /gal\s*\*\s*3\s*\*\s*\(deltaF\s*\/\s*10\)/, label: '3 W/gal per 10°F lift' }],
    why: 'Aquarium heater rule of thumb: ~3 watts per gallon for a 10°F lift, scaled linearly.',
  },
  {
    id: 'fish · heater-wattage-calculator hops',
    file: 'apps/fish-com/src/app/tools/heater-wattage-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-heater-wattage-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my heater wattage checklist"/, label: 'concrete heater-wattage offer, not Subscribe' },
      { re: /amazon-brand\/eheim\+jager\+heater\?s=tools-heater-wattage-calculator/, label: 'Eheim Jager heater search hop (same query as heater reviews / stocking)' },
      { re: /amazon-brand\/aqueon\+pro\+heater\?s=tools-heater-wattage-calculator/, label: 'Aqueon Pro heater search hop (same query as heater reviews)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete heater-wattage offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'fish · substrate-calculator',
    file: 'apps/fish-com/src/app/tools/substrate-calculator/Calculator.tsx',
    mustInclude: [{ re: /G_PER_LB\s*=\s*453\.592/, label: '453.592 g per lb' }],
    why: 'Mass = volume(cm³) × density(g/cm³); 1 lb = 453.592 g.',
  },
  {
    id: 'fish · substrate-calculator hops',
    file: 'apps/fish-com/src/app/tools/substrate-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-substrate-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my substrate shopping list"/, label: 'concrete substrate-shopping-list offer, not Subscribe' },
      { re: /amazon-brand\/aquarium\+gravel\?s=tools-substrate-calculator/, label: 'aquarium gravel search hop' },
      { re: /amazon-brand\/aquarium\+sand\?s=tools-substrate-calculator/, label: 'aquarium sand search hop' },
      { re: /amazon-brand\/aquarium\+aqua\+soil\+planted\+substrate\?s=tools-substrate-calculator/, label: 'aqua soil / planted substrate search hop' },
      { re: /amazon-brand\/aquarium\+substrate\+vacuum\?s=tools-substrate-calculator/, label: 'substrate vacuum search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete substrate-shopping-list offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · dog-calorie-calculator',
    file: 'apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx',
    mustInclude: [{ re: /70\s*\*\s*Math\.pow\(.*0\.75\)/, label: 'RER = 70 × kg^0.75' }],
    why: 'WSAVA/AAHA resting energy requirement: RER = 70 × (body-weight-kg)^0.75.',
  },
  {
    id: 'dog · dog-calorie-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-calorie-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-calorie-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my dog kcal target"/, label: 'concrete dog-kcal offer, not Subscribe' },
      { re: /amazon-brand\/measured\+dog\+food\?s=tools-dog-calorie-calculator/, label: 'measured dog food search hop' },
      { re: /amazon-brand\/kitchen\+gram\+scale\?s=tools-dog-calorie-calculator/, label: 'kitchen gram scale search hop' },
      { re: /amazon-brand\/slow\+feeder\+dog\+bowl\?s=tools-dog-calorie-calculator/, label: 'slow-feeder dog bowl search hop' },
      { re: /amazon-brand\/interactive\+dog\+feeder\?s=tools-dog-calorie-calculator/, label: 'interactive dog feeder search hop' },
      { re: /amazon-brand\/low\+calorie\+dog\+treats\?s=tools-dog-calorie-calculator/, label: 'low-calorie dog treats search hop' },
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
    why: 'Money path: under-hero capture with a concrete dog-kcal offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'dog · dog-water-intake-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-water-intake-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-water-intake-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my hydration checklist"/, label: 'concrete hydration-checklist offer, not Subscribe' },
      { re: /amazon-brand\/heavy\+ceramic\+pet\+water\+bowl\?s=tools-dog-water-intake/, label: 'ceramic pet water bowl search hop' },
      { re: /amazon-brand\/dog\+water\+fountain\?s=tools-dog-water-intake/, label: 'dog water fountain search hop' },
      { re: /amazon-brand\/dog\+travel\+water\+bottle\?s=tools-dog-water-intake/, label: 'dog travel water bottle search hop' },
      { re: /amazon-brand\/kitchen\+measuring\+cup\?s=tools-dog-water-intake/, label: 'kitchen measuring cup search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete hydration-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'horses · horse-blanket-size-calculator',
    file: 'apps/horses-com/src/app/tools/horse-blanket-size-calculator/Calculator.tsx',
    mustInclude: [
      { re: /Math\.round\(inches \/ 3\) \* 3/, label: 'US size rounds to nearest 3-inch step' },
      { re: /Math\.max\(48, Math\.min\(90,/, label: 'US sizes clamped pony 48 → draft 90' },
      { re: /125 \+ \(\(us - 69\) \* 10\) \/ 3/, label: 'EU cm ≈ 125 + 10 cm per 3" above 69"' },
      { re: /value \/ 2\.54/, label: 'cm → in = ÷ 2.54' },
    ],
    why: 'US horse-blanket size is the chest-to-tail measurement in inches, rounded to the nearest 3-inch size (48–90). EU/cm is the standard approximate conversion from that US size, not a second body measurement.',
  },
  {
    id: 'horses · horse-blanket-size-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-blanket-size-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-blanket-size-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my blanket fit checklist"/, label: 'concrete blanket-fit offer, not Subscribe' },
      { re: /amazon-brand\/winter\+horse\+blanket\?s=tools-horse-blanket-size-calculator/, label: 'winter horse blanket search hop' },
      { re: /amazon-brand\/horse\+turnout\+sheet\?s=tools-horse-blanket-size-calculator/, label: 'turnout sheet search hop' },
      { re: /amazon-brand\/horse\+stable\+blanket\?s=tools-horse-blanket-size-calculator/, label: 'stable blanket search hop' },
      { re: /amazon-brand\/horse\+measuring\+tape\?s=tools-horse-blanket-size-calculator/, label: 'measuring tape search hop (same query as horse-weight-calculator)' },
      { re: /amazon-brand\/horse\+fleece\+cooler\?s=tools-horse-blanket-size-calculator/, label: 'fleece cooler search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete blanket-fit offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'horses · horse-feed-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-feed-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-feed-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my daily hay checklist"/, label: 'concrete daily-hay offer, not Subscribe' },
      { re: /amazon-brand\/timothy\+hay\+horse\?s=tools-horse-feed-calculator/, label: 'timothy hay search hop' },
      { re: /amazon-brand\/horse\+ration\+balancer\?s=tools-horse-feed-calculator/, label: 'ration balancer search hop' },
      { re: /amazon-brand\/horse\+feed\+scoop\+scale\?s=tools-horse-feed-calculator/, label: 'feed scoop search hop (same query as horse-cost-calculator / BCS)' },
      { re: /amazon-brand\/slow\+feeder\+hay\+net\+horse\?s=tools-horse-feed-calculator/, label: 'slow-feeder hay net search hop (same query as forage-basics / BCS)' },
      { re: /amazon-brand\/equine\+salt\+lick\?s=tools-horse-feed-calculator/, label: 'equine salt lick search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete daily-hay offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'dog · dog-gestation-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-gestation-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-gestation-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the whelping kit checklist"/, label: 'concrete whelping-kit-checklist offer, not Subscribe' },
      { re: /amazon-brand\/dog\+whelping\+box\?s=tools-dog-gestation-calculator/, label: 'whelping box search hop' },
      { re: /amazon-brand\/digital\+puppy\+scale\?s=tools-dog-gestation-calculator/, label: 'digital puppy scale search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-dog-gestation-calculator/, label: 'digital pet thermometer search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete whelping-kit-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'horses · horse-gestation-calculator',
    file: 'apps/horses-com/src/app/tools/horse-gestation-calculator/Calculator.tsx',
    mustInclude: [{ re: /DEFAULT_GESTATION\s*=\s*340/, label: 'mare gestation ~340 days' }],
    why: 'Mare gestation averages ~340 days (normal range ~320–362).',
  },
  {
    id: 'horses · horse-gestation-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-gestation-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-gestation-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the foaling kit checklist"/, label: 'concrete foaling-kit-checklist offer, not Subscribe' },
      { re: /amazon-brand\/digital\+equine\+thermometer\?s=tools-horse-gestation-calculator/, label: 'digital equine thermometer search hop' },
      { re: /amazon-brand\/iodine\+navel\+dip\+foal\?s=tools-horse-gestation-calculator/, label: 'foal navel dip search hop' },
      { re: /amazon-brand\/foaling\+alarm\?s=tools-horse-gestation-calculator/, label: 'foaling alarm search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete foaling-kit-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'horses · horse-weight-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-weight-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-weight-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the tape size"/, label: 'concrete tape-size offer, not Subscribe' },
      { re: /amazon-brand\/horse\+weight\+tape\?s=tools-horse-weight-calculator/, label: 'horse weight tape search hop' },
      { re: /amazon-brand\/horse\+measuring\+tape\?s=tools-horse-weight-calculator/, label: 'horse measuring tape search hop' },
      { re: /amazon-brand\/livestock\+barn\+scale\?s=tools-horse-weight-calculator/, label: 'livestock barn scale search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete tape-size offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'horses · stall-bedding-calculator hops',
    file: 'apps/horses-com/src/app/tools/stall-bedding-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-stall-bedding-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the bag count"/, label: 'concrete bag-count offer, not Subscribe' },
      { re: /amazon-brand\/pine\+shavings\+horse\+stall\+bedding\?s=tools-stall-bedding-calculator/, label: 'pine shavings stall bedding search hop' },
      { re: /amazon-brand\/wood\+pellet\+horse\+stall\+bedding\?s=tools-stall-bedding-calculator/, label: 'wood pellet stall bedding search hop' },
      { re: /amazon-brand\/horse\+stall\+rubber\+mats\?s=tools-stall-bedding-calculator/, label: 'rubber stall mats search hop' },
      { re: /amazon-brand\/horse\+stall\+fork\+manure\+picker\?s=tools-stall-bedding-calculator/, label: 'stall fork / manure picker search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete bag-count offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'horses · horse-cost-calculator hops',
    file: 'apps/horses-com/src/app/tools/horse-cost-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-cost-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my horse budget worksheet"/, label: 'concrete horse-budget-worksheet offer, not Subscribe' },
      { re: /amazon-brand\/horse\+halter\+lead\+rope\?s=tools-horse-cost-calculator/, label: 'halter and lead search hop (same query as startup kit)' },
      { re: /amazon-brand\/horse\+grooming\+kit\?s=tools-horse-cost-calculator/, label: 'grooming kit search hop' },
      { re: /amazon-brand\/horse\+hoof\+pick\?s=tools-horse-cost-calculator/, label: 'hoof pick search hop' },
      { re: /amazon-brand\/horse\+feed\+scoop\+scale\?s=tools-horse-cost-calculator/, label: 'feed scoop search hop (same query as horse-feed-calculator / BCS)' },
      { re: /amazon-brand\/horse\+barn\+first\+aid\+kit\?s=tools-horse-cost-calculator/, label: 'barn first-aid kit search hop' },
      { re: /amazon-brand\/horse\+fly\+mask\?s=tools-horse-cost-calculator/, label: 'fly mask search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete horse-budget-worksheet offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'dog · dog-ideal-weight-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-ideal-weight-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-ideal-weight-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my weight-check checklist"/, label: 'concrete weight-check-checklist offer, not Subscribe' },
      { re: /amazon-brand\/digital\+gram\+scale\+kitchen\+pet\?s=tools-dog-ideal-weight/, label: 'digital kitchen / pet scale search hop' },
      { re: /amazon-brand\/portion\+control\+food\+scale\+dog\?s=tools-dog-ideal-weight/, label: 'portion-control food scale search hop' },
      { re: /amazon-brand\/dog\+measuring\+tape\+body\+condition\+chart\?s=tools-dog-ideal-weight/, label: 'dog measuring tape / BCS chart search hop' },
      { re: /amazon-brand\/elevated\+slow\+feeder\+bowl\+dog\?s=tools-dog-ideal-weight/, label: 'elevated slow-feeder bowl search hop' },
      { re: /amazon-brand\/puzzle\+feeder\+dog\?s=tools-dog-ideal-weight/, label: 'puzzle feeder search hop' },
      { re: /amazon-brand\/weight\+management\+dog\+food\?s=tools-dog-ideal-weight/, label: 'weight-management dog food search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete weight-check-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'fish · water-change-calculator hops',
    file: 'apps/fish-com/src/app/tools/water-change-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-water-change-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my water-change checklist"/, label: 'concrete water-change-checklist offer, not Subscribe' },
      { re: /amazon-brand\/python\+water\+changer\?s=tools-water-change-calculator/, label: 'Python water changer search hop (same query as this tool ResultCTA)' },
      { re: /amazon-brand\/aquarium\+gravel\+vacuum\+siphon\?s=tools-water-change-calculator/, label: 'gravel-vacuum siphon search hop (same query as this tool ResultCTA)' },
      { re: /amazon-brand\/seachem\+prime\+water\+conditioner\?s=tools-water-change-calculator/, label: 'Seachem Prime dechlorinator search hop (same query as disease-checker)' },
      { re: /amazon-brand\/api\+freshwater\+master\+test\+kit\?s=tools-water-change-calculator/, label: 'API master test kit search hop (same query as water-test review / stocking)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete water-change-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'horses · horse-height-converter',
    file: 'apps/horses-com/src/app/tools/horse-height-converter/Calculator.tsx',
    mustInclude: [{ re: /hands\s*\*\s*4\s*\+\s*extraInches/, label: 'inches = hands × 4 + extra (hands.inches notation)' }],
    why: '1 hand = 4 inches; height in hands is hands.inches notation, not decimal (15.2hh = 62 in).',
  },
  {
    id: 'horses · horse-height-converter hops',
    file: 'apps/horses-com/src/app/tools/horse-height-converter/page.tsx',
    mustInclude: [
      { re: /source="tools-horse-height-converter-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my height conversion chart"/, label: 'concrete height-chart offer, not Subscribe' },
      { re: /amazon-brand\/horse\+measuring\+stick\?s=tools-horse-height-converter/, label: 'measuring stick search hop (same query as BCS)' },
      { re: /amazon-brand\/horse\+weight\+tape\?s=tools-horse-height-converter/, label: 'height/weight tape search hop (same query as weight-calculator / BCS / age / size-for-rider)' },
      { re: /amazon-brand\/horse\+saddle\+fitting\+kit\?s=tools-horse-height-converter/, label: 'saddle-fitting kit search hop (height→tack hop already on this page)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete height-chart offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'vets · insurance-reimbursement-estimator hops',
    file: 'apps/vets-co/src/app/tools/insurance-reimbursement-estimator/page.tsx',
    mustInclude: [
      { re: /source="tools-insurance-reimbursement-estimator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the insurance checklist"/, label: 'concrete insurance-checklist offer, not Subscribe' },
      { re: /<InsuranceWellnessShop source="tools-insurance-reimbursement-estimator"/, label: 'InsuranceWellnessShop kept (do not re-rank carriers)' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-insurance-reimbursement-estimator/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-insurance-reimbursement-estimator/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-insurance-reimbursement-estimator/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/pet\+recovery\+cone\?s=tools-insurance-reimbursement-estimator/, label: 'pet recovery cone search hop' },
      { re: /amazon-brand\/pet\+calming\+aid\?s=tools-insurance-reimbursement-estimator/, label: 'pet calming aid search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /href="\/reviews\/best-pet-insurance"/, label: 'insurance comparison CTA stays on best-pet-insurance' },
      { re: /href="\/telehealth"/, label: 'non-ER talk-to-a-vet points at /telehealth' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /ctaText="Subscribe"/, label: 'never generic Subscribe' },
      { re: /href=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
    ],
    why: 'Money path: under-hero capture with a concrete insurance-checklist offer; complementary amazon-brand category searches for home-care prep beside InsuranceWellnessShop; insurance quotes stay on /reviews/best-pet-insurance; empty Chewy stays hidden.',
  },
  {
    id: 'vets · insurance-finder hops',
    file: 'apps/vets-co/src/app/tools/insurance-finder/page.tsx',
    mustInclude: [
      { re: /source="tools-insurance-finder-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the insurance checklist"/, label: 'concrete insurance-checklist offer, not Subscribe' },
      { re: /<InsuranceWellnessShop source="tools-insurance-finder"/, label: 'InsuranceWellnessShop kept (do not re-rank carriers)' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-insurance-finder/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-insurance-finder/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-insurance-finder/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/pet\+recovery\+cone\?s=tools-insurance-finder/, label: 'pet recovery cone search hop' },
      { re: /amazon-brand\/pet\+calming\+aid\?s=tools-insurance-finder/, label: 'pet calming aid search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /href="\/reviews\/best-pet-insurance"/, label: 'insurance comparison CTA stays on best-pet-insurance' },
      { re: /href="\/telehealth"/, label: 'non-ER talk-to-a-vet points at /telehealth' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /ctaText="Subscribe"/, label: 'never generic Subscribe' },
      { re: /href=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
    ],
    why: 'Money path: under-hero capture with a concrete insurance-checklist offer; complementary amazon-brand category searches for home-care prep beside InsuranceWellnessShop; insurance quotes stay on /reviews/best-pet-insurance; empty Chewy stays hidden.',
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
    id: 'dog · puppy-first-year-budget hops',
    file: 'apps/dog-com/src/app/tools/puppy-first-year-budget/page.tsx',
    mustInclude: [
      { re: /source="tools-puppy-first-year-budget-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my puppy budget checklist"/, label: 'concrete puppy-budget offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=tools-puppy-first-year-budget/, label: 'wire crate with divider search hop (same query as crate-size / new-puppy / puppy-weight)' },
      { re: /amazon-brand\/puppy\+food\?s=tools-puppy-first-year-budget/, label: 'puppy food search hop (same query as new-puppy / puppy-weight)' },
      { re: /amazon-brand\/digital\+gram\+scale\+kitchen\+pet\?s=tools-puppy-first-year-budget/, label: 'scale search hop (same query as puppy-weight / ideal-weight)' },
      { re: /amazon-brand\/puppy\+training\+pads\?s=tools-puppy-first-year-budget/, label: 'puppy training pads search hop (same query as crate-size)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete puppy-budget offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'fish · filter-gph-calculator hops',
    file: 'apps/fish-com/src/app/tools/filter-gph-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-filter-gph-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my filter GPH checklist"/, label: 'concrete filter-GPH offer, not Subscribe' },
      { re: /amazon-brand\/aquaclear\+70\+filter\?s=tools-filter-gph-calculator/, label: 'AquaClear HOB filter search hop (same query as filter reviews / stocking)' },
      { re: /amazon-brand\/fluval\+307\+canister\+filter\?s=tools-filter-gph-calculator/, label: 'Fluval canister search hop (same query as canister reviews / stocking)' },
      { re: /amazon-brand\/aquarium\+filter\+media\?s=tools-filter-gph-calculator/, label: 'filter media search hop' },
      { re: /amazon-brand\/aquarium\+sponge\+filter\?s=tools-filter-gph-calculator/, label: 'sponge / prefilter search hop (same query as cycling estimator)' },
      { re: /amazon-brand\/aquarium\+powerhead\?s=tools-filter-gph-calculator/, label: 'powerhead search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete filter-GPH offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'ferret · cost-calculator hops',
    file: 'apps/ferret-com/src/app/tools/cost-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-cost-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the budget"/, label: 'concrete budget offer, not Subscribe' },
      { re: /amazon-brand\/high\+protein\+ferret\+food\+kibble\?s=tools-cost-calculator/, label: 'high-protein ferret food search hop (same query as kibble guide)' },
      { re: /amazon-brand\/compressed\+wood\+pellet\+litter\+heat\+treated\+non\+clumping\?s=tools-cost-calculator/, label: 'heat-treated wood pellet litter search hop (same query as litter review)' },
      { re: /amazon-brand\/ferret\+nation\+critter\+nation\+double\+unit\?s=tools-cost-calculator/, label: 'multi-level cage search hop (same query as cage review)' },
      { re: /amazon-brand\/ferret\+sleep\+sack\+fleece\?s=tools-cost-calculator/, label: 'hammock / sleep-sack search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete budget offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'ferret · litter-planner hops',
    file: 'apps/ferret-com/src/app/tools/litter-planner/page.tsx',
    mustInclude: [
      { re: /source="tools-litter-planner-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my litter & pan plan"/, label: 'concrete litter-and-pan-plan offer, not Subscribe' },
      { re: /amazon-brand\/compressed\+wood\+pellet\+litter\+heat\+treated\+non\+clumping\?s=tools-litter-planner/, label: 'heat-treated wood pellet litter search hop (same query as litter review)' },
      { re: /amazon-brand\/small\+animal\+grass\+pellet\+litter\+non\+clumping\?s=tools-litter-planner/, label: 'grass pellet litter search hop (same query as litter review)' },
      { re: /amazon-brand\/ferret\+corner\+litter\+pan\?s=tools-litter-planner/, label: 'corner litter pan search hop (same query as cage-size calculator)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete litter-and-pan-plan offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'ferret · cage-size-calculator hops',
    file: 'apps/ferret-com/src/app/tools/cage-size-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-cage-size-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the cage size"/, label: 'concrete cage-size offer, not Subscribe' },
      { re: /amazon-brand\/ferret\+nation\+critter\+nation\+double\+unit\?s=tools-cage-size-calculator/, label: 'multi-level cage search hop (same query as cage review)' },
      { re: /amazon-brand\/ferret\+sleep\+sack\+fleece\?s=tools-cage-size-calculator/, label: 'hammock / sleep-sack search hop' },
      { re: /amazon-brand\/ferret\+corner\+litter\+pan\?s=tools-cage-size-calculator/, label: 'corner litter pan search hop' },
      { re: /amazon-brand\/compressed\+wood\+pellet\+litter\+heat\+treated\+non\+clumping\?s=tools-cage-size-calculator/, label: 'heat-treated wood pellet litter search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete cage-size offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'dog · new-puppy-checklist hops',
    file: 'apps/dog-com/src/app/tools/new-puppy-checklist/page.tsx',
    mustInclude: [
      { re: /source="tools-new-puppy-checklist-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my new-puppy checklist"/, label: 'concrete new-puppy-checklist offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=tools-new-puppy-checklist/, label: 'crate search hop (same query as crate-size tool)' },
      { re: /amazon-brand\/puppy\+food\?s=tools-new-puppy-checklist/, label: 'puppy food search hop' },
      { re: /amazon-brand\/northmate\+green\+interactive\+feeder\?s=tools-new-puppy-checklist/, label: 'interactive feeder search hop' },
      { re: /amazon-brand\/julius\+k9\+idc\+powerharness\?s=tools-new-puppy-checklist/, label: 'Julius-K9 harness search hop' },
      { re: /amazon-brand\/dog\+id\+tag\+collar\?s=tools-new-puppy-checklist/, label: 'ID tag / collar search hop' },
      { re: /amazon-brand\/puppy\+teething\+toys\?s=tools-new-puppy-checklist/, label: 'puppy teething toys search hop' },
      { re: /amazon-brand\/enzymatic\+pet\+stain\+odor\+cleaner\?s=tools-new-puppy-checklist/, label: 'enzymatic cleaner search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete new-puppy-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · dog-age-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-age-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-age-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my dog-age checklist"/, label: 'concrete dog-age-checklist offer, not Subscribe' },
      { re: /amazon-brand\/puppy\+food\?s=tools-dog-age/, label: 'puppy food search hop' },
      { re: /amazon-brand\/puppy\+teething\+toys\?s=tools-dog-age/, label: 'puppy teething toys search hop' },
      { re: /amazon-brand\/dental\+chews\+dog\?s=tools-dog-age/, label: 'dental chews search hop' },
      { re: /amazon-brand\/joint\+support\+dog\+treats\?s=tools-dog-age/, label: 'joint-support treats search hop' },
      { re: /amazon-brand\/dog\+id\+tag\+collar\?s=tools-dog-age/, label: 'ID tag / collar search hop' },
      { re: /amazon-brand\/dog\+leash\?s=tools-dog-age/, label: 'dog leash search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete dog-age-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Twin of the already-pinned vets/ferret/horse age-calculator hops.',
  },
  {
    id: 'dog · dog-body-condition-score hops',
    file: 'apps/dog-com/src/app/tools/dog-body-condition-score/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-bcs-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my dog BCS checklist"/, label: 'concrete dog-BCS-checklist offer, not Subscribe' },
      { re: /amazon-brand\/dog\+measuring\+tape\+body\+condition\+chart\?s=tools-dog-bcs/, label: 'measuring tape / BCS chart search hop' },
      { re: /amazon-brand\/elevated\+slow\+feeder\+bowl\+dog\?s=tools-dog-bcs/, label: 'elevated slow-feeder bowl search hop' },
      { re: /amazon-brand\/portion\+control\+food\+scale\+dog\?s=tools-dog-bcs/, label: 'portion-control food scale search hop' },
      { re: /amazon-brand\/puzzle\+feeder\+dog\?s=tools-dog-bcs/, label: 'puzzle feeder search hop' },
      { re: /amazon-brand\/joint\+support\+dog\+treats\?s=tools-dog-bcs/, label: 'joint-support treats search hop' },
      { re: /amazon-brand\/weight\+management\+dog\+food\?s=tools-dog-bcs/, label: 'weight-management dog food search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete dog-BCS-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Twin of the already-pinned vets/ferret BCS hops.',
  },
  {
    id: 'dog · dog-exercise-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-exercise-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-dog-exercise-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my walk-gear checklist"/, label: 'concrete walk-gear-checklist offer, not Subscribe' },
      { re: /amazon-brand\/dog\+leash\?s=tools-dog-exercise/, label: 'dog leash search hop' },
      { re: /amazon-brand\/julius\+k9\+idc\+powerharness\?s=tools-dog-exercise/, label: 'Julius-K9 harness search hop (same query as new-puppy / harness-collar-size)' },
      { re: /amazon-brand\/front\+clip\+no\+pull\+dog\+harness\?s=tools-dog-exercise/, label: 'no-pull harness search hop' },
      { re: /amazon-brand\/kong\+classic\+dog\+toy\+stuffable\?s=tools-dog-exercise/, label: 'Kong fetch / stuffable toy search hop' },
      { re: /amazon-brand\/dog\+fetch\+toys\?s=tools-dog-exercise/, label: 'dog fetch toys search hop' },
      { re: /amazon-brand\/fi\+series\+3\+dog\+collar\?s=tools-dog-exercise/, label: 'Fi activity / GPS collar search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete walk-gear-checklist offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'dog · dog-chocolate-toxicity-calculator hops',
    file: 'apps/dog-com/src/app/tools/dog-chocolate-toxicity-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-chocolate-toxicity-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my chocolate-safety checklist"/, label: 'concrete chocolate-safety-checklist offer, not Subscribe' },
      { re: /amazon-brand\/activated\+charcoal\+pet\?s=tools-chocolate-toxicity/, label: 'activated charcoal (vet-directed) search hop' },
      { re: /amazon-brand\/hydrogen\+peroxide\+3\+percent\+first\+aid\?s=tools-chocolate-toxicity/, label: '3% hydrogen peroxide first aid (vet-directed) search hop' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\+dog\?s=tools-chocolate-toxicity/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/pet\+emergency\+kit\+dog\+toxin\?s=tools-chocolate-toxicity/, label: 'pet emergency / toxin kit search hop' },
      { re: /amazon-brand\/dog\+crate\+for\+recovery\?s=tools-chocolate-toxicity/, label: 'recovery crate search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete chocolate-safety-checklist offer; every kit CTA is an amazon-brand category search, never a placeholder ASIN. Safety-kit hops do not treat or reverse chocolate poisoning.',
  },
  {
    id: 'dog · which-pet hops',
    file: 'apps/dog-com/src/app/which-pet/page.tsx',
    mustInclude: [
      { re: /source="which-pet-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my first-week starter list"/, label: 'concrete first-week-starter-list offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=which-pet/, label: 'wire crate with divider search hop (same query as new-puppy / crate-size)' },
      { re: /amazon-brand\/puppy\+food\?s=which-pet/, label: 'puppy food search hop (same query as new-puppy)' },
      { re: /amazon-brand\/julius\+k9\+idc\+powerharness\?s=which-pet/, label: 'Julius-K9 harness search hop (same query as new-puppy / exercise)' },
      { re: /amazon-brand\/dog\+id\+tag\+collar\?s=which-pet/, label: 'dog ID tag / collar search hop (same query as new-puppy)' },
      { re: /amazon-brand\/soft\+dog\+carrier\?s=which-pet/, label: 'soft dog carrier search hop (same query as emergency-prep)' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=which-pet/, label: 'pet first-aid kit search hop (same query as emergency-prep)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete first-week-starter-list offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. The wizard itself stays ungated.',
  },
  {
    id: 'dog · training-puppy-schedule hops',
    file: 'apps/dog-com/src/app/training/puppy-schedule/page.tsx',
    mustInclude: [
      { re: /source="training-puppy-schedule-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my week-by-week puppy schedule"/, label: 'concrete week-by-week-schedule offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=training-puppy-schedule/, label: 'wire crate with divider search hop (same query as new-puppy / crate-size)' },
      { re: /amazon-brand\/puppy\+food\?s=training-puppy-schedule/, label: 'puppy food search hop (same query as new-puppy)' },
      { re: /amazon-brand\/puppy\+training\+treats\?s=training-puppy-schedule/, label: 'puppy training treats search hop (same query as new-puppy checklist)' },
      { re: /amazon-brand\/enzymatic\+pet\+stain\+odor\+cleaner\?s=training-puppy-schedule/, label: 'enzymatic cleaner search hop (same query as new-puppy)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete week-by-week-schedule offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy treat button that was rendering on this page.',
  },
  {
    id: 'dog · training-crate hops',
    file: 'apps/dog-com/src/app/training/crate-training/page.tsx',
    mustInclude: [
      { re: /source="training-crate-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my crate-training protocol"/, label: 'concrete crate-training-protocol offer, not Subscribe' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=training-crate/, label: 'wire crate with divider search hop (same query as new-puppy / crate-size)' },
      { re: /amazon-brand\/dog\+crate\+pad\?s=training-crate/, label: 'crate pad search hop (same query as crate-size)' },
      { re: /amazon-brand\/dog\+crate\+cover\?s=training-crate/, label: 'crate cover search hop (same query as crate-size)' },
      { re: /amazon-brand\/puppy\+training\+pads\?s=training-crate/, label: 'puppy training pads search hop (same query as crate-size)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete crate-training-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy crate button that was rendering on this page.',
  },
  {
    id: 'dog · training-house hops',
    file: 'apps/dog-com/src/app/training/house-training/page.tsx',
    mustInclude: [
      { re: /source="training-house-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my house-training schedule"/, label: 'concrete house-training-schedule offer, not Subscribe' },
      { re: /amazon-brand\/enzymatic\+pet\+stain\+odor\+cleaner\?s=training-house/, label: 'enzymatic cleaner search hop (same query as new-puppy / puppy-schedule)' },
      { re: /amazon-brand\/puppy\+training\+treats\?s=training-house/, label: 'puppy training treats search hop (same query as new-puppy checklist)' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=training-house/, label: 'wire crate with divider search hop (same query as new-puppy / crate-size)' },
      { re: /amazon-brand\/dog\+poop\+bags\?s=training-house/, label: 'dog poop bags search hop (same query as new-puppy checklist)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete house-training-schedule offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy cleaner button that was rendering on this page.',
  },
  {
    id: 'dog · training-basic-commands hops',
    file: 'apps/dog-com/src/app/training/basic-commands/page.tsx',
    mustInclude: [
      { re: /source="training-basic-commands-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my five-command protocol"/, label: 'concrete five-command-protocol offer, not Subscribe' },
      { re: /amazon-brand\/puppy\+training\+treats\?s=training-basic-commands/, label: 'puppy training treats search hop (same query as house-training / puppy-schedule / new-puppy)' },
      { re: /amazon-brand\/dog\+training\+treat\+pouch\+belt\+clip\?s=training-basic-commands/, label: 'treat pouch search hop (amazon-brand replacement for the empty Chewy pouch)' },
      { re: /amazon-brand\/dog\+training\+clicker\?s=training-basic-commands/, label: 'dog training clicker search hop (marker for sit / leave-it)' },
      { re: /amazon-brand\/dog\+long\+line\+leash\?s=training-basic-commands/, label: 'long-line leash search hop (recall before off-leash)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete five-command-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy treat-pouch button that was rendering on this page.',
  },
  {
    id: 'dog · training-loose-leash-walking hops',
    file: 'apps/dog-com/src/app/training/loose-leash-walking/page.tsx',
    mustInclude: [
      { re: /source="training-loose-leash-walking-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my loose-leash protocol"/, label: 'concrete loose-leash-protocol offer, not Subscribe' },
      { re: /amazon-brand\/front\+clip\+no\+pull\+dog\+harness\?s=training-loose-leash-walking/, label: 'front-clip no-pull harness search hop (same query as exercise / harness-collar-size)' },
      { re: /amazon-brand\/6\+ft\+dog\+leash\?s=training-loose-leash-walking/, label: '6-ft dog leash search hop (standard walk leash, not a retractable)' },
      { re: /amazon-brand\/dog\+training\+treat\+pouch\+belt\+clip\?s=training-loose-leash-walking/, label: 'treat pouch search hop (same query as basic-commands)' },
      { re: /amazon-brand\/puppy\+training\+treats\?s=training-loose-leash-walking/, label: 'high-value training treats search hop (same query as basic-commands / house-training / puppy-schedule)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete loose-leash-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy harness button that was rendering on this page.',
  },
  {
    id: 'dog · training-leash-reactivity hops',
    file: 'apps/dog-com/src/app/training/leash-reactivity/page.tsx',
    mustInclude: [
      { re: /source="training-leash-reactivity-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my leash-reactivity protocol"/, label: 'concrete leash-reactivity-protocol offer, not Subscribe' },
      { re: /amazon-brand\/front\+clip\+no\+pull\+dog\+harness\?s=training-leash-reactivity/, label: 'front-clip no-pull harness search hop (same query as loose-leash / exercise / harness-collar-size)' },
      { re: /amazon-brand\/6\+ft\+dog\+leash\?s=training-leash-reactivity/, label: '6-ft dog leash search hop (same query as loose-leash)' },
      { re: /amazon-brand\/dog\+training\+treat\+pouch\+belt\+clip\?s=training-leash-reactivity/, label: 'treat pouch search hop (same query as loose-leash / basic-commands)' },
      { re: /amazon-brand\/puppy\+training\+treats\?s=training-leash-reactivity/, label: 'high-value training treats search hop (same query as loose-leash / basic-commands / house-training)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete leash-reactivity-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy harness button that was rendering on this page.',
  },
  {
    id: 'dog · training-separation-anxiety hops',
    file: 'apps/dog-com/src/app/training/separation-anxiety/page.tsx',
    mustInclude: [
      { re: /source="training-sep-anxiety-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my separation-anxiety protocol"/, label: 'concrete separation-anxiety-protocol offer, not Subscribe' },
      { re: /amazon-brand\/kong\+classic\+dog\+toy\+stuffable\?s=training-sep-anxiety/, label: 'stuffable Kong search hop (same query as exercise calculator / new-puppy checklist)' },
      { re: /amazon-brand\/snuffle\+mat\+dog\+enrichment\?s=training-sep-anxiety/, label: 'snuffle mat search hop (amazon-brand replacement for the empty Chewy snuffle mat)' },
      { re: /amazon-brand\/wire\+dog\+crate\+with\+divider\+panel\?s=training-sep-anxiety/, label: 'wire crate with divider search hop (same query as crate-training)' },
      { re: /amazon-brand\/bully\+sticks\+dog\+chew\?s=training-sep-anxiety/, label: 'long-lasting chew search hop (bully sticks named on-page)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete separation-anxiety-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Replaces the empty Chewy snuffle-mat button that was rendering on this page.',
  },
  {
    id: 'dog · training-puppy-biting hops',
    file: 'apps/dog-com/src/app/training/puppy-biting/page.tsx',
    mustInclude: [
      { re: /source="training-puppy-biting-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my puppy-biting protocol"/, label: 'concrete puppy-biting-protocol offer, not Subscribe' },
      { re: /amazon-brand\/puppy\+chew\+toys\?s=training-puppy-biting/, label: 'puppy chew toys search hop (nipping redirection category)' },
      { re: /amazon-brand\/puppy\+teething\+toys\?s=training-puppy-biting/, label: 'puppy teething toys search hop (same query as new-puppy / dog-age)' },
      { re: /amazon-brand\/kong\+classic\+dog\+toy\+stuffable\?s=training-puppy-biting/, label: 'stuffable Kong search hop (same query as sep-anxiety / exercise / new-puppy)' },
      { re: /amazon-brand\/bitter\+apple\+spray\+dog\?s=training-puppy-biting/, label: 'bitter spray search hop (furniture-deterrent category, not a ranked SKU)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete puppy-biting-protocol offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN. Chewy stays omitted so empty buttons stay hidden.',
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
    id: 'vets · cat-calorie-calculator',
    file: 'apps/vets-co/src/app/tools/cat-calorie-calculator/Calculator.tsx',
    mustInclude: [
      { re: /70\s*\*\s*Math\.pow\(.*0\.75\)/, label: 'RER = 70 × kg^0.75' },
      { re: /label: 'Neutered indoor adult', factor: 1\.2/, label: 'neutered indoor adult DER 1.2' },
      { re: /label: 'Intact indoor adult', factor: 1\.4/, label: 'intact indoor adult DER 1.4' },
      { re: /label: 'Neutered outdoor \/ active', factor: 1\.4/, label: 'neutered outdoor / active DER 1.4' },
      { re: /label: 'Intact outdoor \/ active', factor: 1\.6/, label: 'intact outdoor / active DER 1.6' },
      { re: /label: 'Weight loss \(vet-supervised\)', factor: 0\.8/, label: 'feline weight-loss DER 0.8' },
      { re: /label: 'Kitten', factor: 2\.5/, label: 'kitten DER 2.5' },
      { re: /label: 'Senior indoor', factor: 1\.1/, label: 'senior indoor DER 1.1' },
      { re: /label: 'Obese-prone indoor', factor: 1\.0/, label: 'obese-prone indoor DER 1.0' },
    ],
    why: 'WSAVA/AAHA feline RER/DER: same 70 × kg^0.75 baseline as dogs, with lower cat factors (indoor/outdoor, neuter, life stage). Weight-loss 0.8 is vet-supervised only (hepatic lipidosis).',
  },
  {
    id: 'vets · cat-calorie-calculator hops',
    file: 'apps/vets-co/src/app/tools/cat-calorie-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-cat-calorie-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my cat kcal target"/, label: 'concrete cat-kcal offer, not Subscribe' },
      { re: /amazon-brand\/measured\+cat\+food\?s=tools-cat-calorie-calculator/, label: 'measured cat food search hop' },
      { re: /amazon-brand\/kitchen\+gram\+scale\?s=tools-cat-calorie-calculator/, label: 'kitchen gram scale search hop' },
      { re: /amazon-brand\/slow\+feeder\+cat\+bowl\?s=tools-cat-calorie-calculator/, label: 'slow-feeder cat bowl search hop' },
      { re: /amazon-brand\/interactive\+cat\+feeder\?s=tools-cat-calorie-calculator/, label: 'interactive cat feeder search hop' },
      { re: /amazon-brand\/low\+calorie\+cat\+treats\?s=tools-cat-calorie-calculator/, label: 'low-calorie cat treats search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete cat-kcal offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
    id: 'vets · er-vs-clinic hops',
    file: 'apps/vets-co/src/app/tools/er-vs-clinic/page.tsx',
    mustInclude: [
      { re: /source="tools-er-vs-clinic-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my ER vs clinic cheat sheet"/, label: 'concrete ER-vs-clinic cheat-sheet offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-er-vs-clinic/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-er-vs-clinic/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/soft\+pet\+carrier\?s=tools-er-vs-clinic/, label: 'soft pet carrier search hop' },
      { re: /amazon-brand\/styptic\+powder\?s=tools-er-vs-clinic/, label: 'styptic powder search hop' },
      { re: /amazon-brand\/wound\+care\+gauze\?s=tools-er-vs-clinic/, label: 'wound-care gauze search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete ER vs clinic cheat sheet; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
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
  {
    id: 'dog · harness-collar-size hops',
    file: 'apps/dog-com/src/app/tools/harness-collar-size/page.tsx',
    mustInclude: [
      { re: /source="tools-harness-collar-size-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my harness size chart"/, label: 'concrete harness-size-chart offer, not Subscribe' },
      { re: /amazon-brand\/julius\+k9\+idc\+powerharness\?s=tools-harness-collar-size/, label: 'Julius-K9 harness search hop (same query as new-puppy / exercise)' },
      { re: /amazon-brand\/flat\+buckle\+nylon\+dog\+collar\?s=tools-harness-collar-size/, label: 'flat buckle collar search hop (already on this page)' },
      { re: /amazon-brand\/dog\+measuring\+tape\+body\+condition\+chart\?s=tools-harness-collar-size/, label: 'measuring tape search hop (same query as BCS / puppy-weight)' },
      { re: /amazon-brand\/dog\+leash\?s=tools-harness-collar-size/, label: 'leash search hop (same query as exercise / age)' },
      { re: /amazon-brand\/front\+clip\+no\+pull\+dog\+harness\?s=tools-harness-collar-size/, label: 'front-clip no-pull harness search hop (same query as exercise / loose-leash)' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
    ],
    why: 'Money path: under-hero capture with a concrete harness-size-chart offer; every gear CTA is an amazon-brand category search, never a placeholder ASIN.',
  },
  {
    id: 'vets · telehealth hops',
    file: 'apps/vets-co/src/app/telehealth/page.tsx',
    mustInclude: [
      { re: /source="telehealth-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my telehealth checklist"/, label: 'concrete telehealth-checklist offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=telehealth/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=telehealth/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=telehealth/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/pet\+calming\+aid\?s=telehealth/, label: 'pet calming aid search hop' },
      { re: /amazon-brand\/pet\+recovery\+cone\?s=telehealth/, label: 'pet recovery cone search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /ctaHref="\/go\/vetster\/telehealth"/, label: 'Vetster partner hop kept' },
      { re: /ctaHref="\/go\/askvet\/telehealth"/, label: 'AskVet partner hop kept' },
      { re: /ctaHref="\/go\/chewy\/connect"/, label: 'Chewy Connect partner hop kept (ReviewCard hides it when empty)' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /ctaHref=["']#["']/, label: 'never ReviewCard href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /ctaHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into ReviewCard hrefs' },
      { re: /chewyHref|chewy-brand/, label: 'omit ShopCtas Chewy so empty hops stay hidden' },
      { re: /href=["']https?:\/\/(www\.)?chewy\.com/, label: 'never bare Chewy URLs — keep /go/chewy/connect only' },
      { re: /Trupanion|Healthy Paws|Embrace/, label: 'do not re-rank insurance carriers' },
    ],
    why: 'Money path: under-hero capture with a concrete telehealth-checklist offer; complementary amazon-brand category searches for home-care prep; existing Vetster/AskVet/Chewy partner hops kept; empty Chewy stays hidden.',
  },
  {
    id: 'vets · emergency-triage-card hops',
    file: 'apps/vets-co/src/app/emergency-triage-card/page.tsx',
    mustInclude: [
      { re: /source="emergency-triage-card-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email my emergency triage card"/, label: 'concrete emergency-triage-card offer, not Subscribe' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=emergency-triage/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=emergency-triage/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/styptic\+powder\?s=emergency-triage/, label: 'styptic powder search hop' },
      { re: /amazon-brand\/tick\+removal\+tool\?s=emergency-triage/, label: 'tick-removal tool search hop' },
      { re: /amazon-brand\/vetrap\+cohesive\+bandage\?s=emergency-triage/, label: 'Vetrap cohesive bandage search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /href="\/reviews\/best-pet-insurance"/, label: 'insurance quote CTA points at best-pet-insurance' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /ctaText="Subscribe"/, label: 'never generic Subscribe' },
      { re: /href=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
    ],
    why: 'Money path: under-hero capture with a concrete triage-card offer; complementary amazon-brand category searches for kit items already listed on the page; hops stay on the web page, not the printable card; empty Chewy stays hidden.',
  },
  {
    id: 'vets · pet-insurance-worth-it-calculator hops',
    file: 'apps/vets-co/src/app/tools/pet-insurance-worth-it-calculator/page.tsx',
    mustInclude: [
      { re: /source="tools-pet-insurance-worth-it-calculator-under-hero"/, label: 'under-hero email capture source tag' },
      { re: /ctaText="Email the insurance checklist"/, label: 'concrete insurance-checklist offer, not Subscribe' },
      { re: /<InsuranceWellnessShop source="tools-pet-insurance-worth-it-calculator"/, label: 'InsuranceWellnessShop kept (do not re-rank carriers)' },
      { re: /amazon-brand\/pet\+first\+aid\+kit\?s=tools-pet-insurance-worth-it-calculator/, label: 'pet first-aid kit search hop' },
      { re: /amazon-brand\/digital\+pet\+thermometer\?s=tools-pet-insurance-worth-it-calculator/, label: 'digital pet thermometer search hop' },
      { re: /amazon-brand\/digital\+pet\+scale\?s=tools-pet-insurance-worth-it-calculator/, label: 'digital pet scale search hop' },
      { re: /amazon-brand\/pet\+recovery\+cone\?s=tools-pet-insurance-worth-it-calculator/, label: 'pet recovery cone search hop' },
      { re: /amazon-brand\/pet\+calming\+aid\?s=tools-pet-insurance-worth-it-calculator/, label: 'pet calming aid search hop' },
      { re: /amazonHref="\/go\/amazon-brand\//, label: 'ShopCtas amazon-brand hops only' },
      { re: /REVIEWS_HREF = '\/reviews\/best-pet-insurance'/, label: 'insurance comparison CTA stays on best-pet-insurance' },
      { re: /href="\/telehealth"/, label: 'non-ER talk-to-a-vet points at /telehealth' },
    ],
    mustExclude: [
      { re: /amazonHref=["']#["']/, label: 'never href="#"' },
      { re: /amazonHref=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
      { re: /chewyHref|chewy-brand|\/go\/chewy/, label: 'omit Chewy so empty hops stay hidden' },
      { re: /ctaText="Subscribe"/, label: 'never generic Subscribe' },
      { re: /href=["'][^"']*PLACEHOLDER/, label: 'never write literal PLACEHOLDER into live hrefs' },
    ],
    why: 'Money path: under-hero capture with a concrete insurance-checklist offer; complementary amazon-brand category searches for home-care prep beside InsuranceWellnessShop; insurance quotes stay on /reviews/best-pet-insurance; empty Chewy stays hidden.',
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
