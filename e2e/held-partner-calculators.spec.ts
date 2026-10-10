import { expect, test, type Page } from '@playwright/test'

/**
 * One typical input on every calculator, then every live anchor on that
 * result screen. A held partner must not be an <a>. An amazon-brand search
 * that only names the brand is allowed. A quiet note is allowed.
 * Playwright sets AFF_TRUPANION_TAG, so /go/trupanion is an earning hop here.
 * Vetster is not an insurer; its tag is still unset, so it stays off the anchor.
 */

const TOOLS: Record<string, string[]> = {
  'dog-com': [
    '/tools/dog-age-calculator',
    '/tools/dog-body-condition-score',
    '/tools/dog-calorie-calculator',
    '/tools/dog-chocolate-toxicity-calculator',
    '/tools/dog-crate-size-calculator',
    '/tools/dog-exercise-calculator',
    '/tools/dog-food-amount-calculator',
    '/tools/dog-gestation-calculator',
    '/tools/dog-grimace-scale',
    '/tools/dog-ideal-weight-calculator',
    '/tools/dog-water-intake-calculator',
    '/tools/harness-collar-size',
    '/tools/is-this-a-dog-emergency',
    '/tools/new-puppy-checklist',
    '/tools/puppy-first-year-budget',
    '/tools/puppy-weight-predictor',
  ],
  'vets-co': [
    '/tools/cat-age-calculator',
    '/tools/cat-body-condition-score',
    '/tools/cat-calorie-calculator',
    '/tools/cat-food-amount-calculator',
    '/tools/cat-grimace-scale',
    '/tools/er-vs-clinic',
    '/tools/insurance-finder',
    '/tools/insurance-quote-prep',
    '/tools/insurance-reimbursement-estimator',
    '/tools/is-this-a-cat-emergency',
    '/tools/pet-insurance-worth-it-calculator',
  ],
  'fish-com': [
    '/tools/aquarium-cycling-estimator',
    '/tools/aquarium-setup-builder',
    '/tools/aquarium-volume-calculator',
    '/tools/co2-calculator',
    '/tools/filter-gph-calculator',
    '/tools/fish-disease-symptom-checker',
    '/tools/heater-wattage-calculator',
    '/tools/live-rock-calculator',
    '/tools/pond-volume-calculator',
    '/tools/stocking-calculator',
    '/tools/substrate-calculator',
    '/tools/tank-mate-compatibility-checker',
    '/tools/water-change-calculator',
  ],
  'horses-com': [
    '/tools/body-condition-score',
    '/tools/horse-age-calculator',
    '/tools/horse-blanket-size-calculator',
    '/tools/horse-cost-calculator',
    '/tools/horse-feed-calculator',
    '/tools/horse-gestation-calculator',
    '/tools/horse-grimace-scale',
    '/tools/horse-height-converter',
    '/tools/horse-size-for-rider',
    '/tools/horse-water-calculator',
    '/tools/horse-weight-calculator',
    '/tools/is-this-a-horse-emergency',
    '/tools/stall-bedding-calculator',
  ],
  'ferret-com': [
    '/tools/cage-size-calculator',
    // /tools/ferret-cost-calculator only redirects here.
    '/tools/cost-calculator',
    '/tools/ferret-age-calculator',
    '/tools/ferret-body-condition-score',
    '/tools/ferret-grimace-scale',
    '/tools/food-evaluator',
    '/tools/is-this-a-ferret-emergency',
    '/tools/label-calculator',
    '/tools/litter-planner',
    '/tools/readiness-quiz',
  ],
}

const HELD =
  /\/go\/(smartpak|dover|schneider|ridingwarehouse|wysong|marshall|carniwhole|chewy(?:-brand|-pharmacy)?|healthy-paws|embrace|lemonade|pumpkin|pets-best|spot|manypets|figo|aspca|fetch|metlife|wagmo|vetster|askvet)(\/|\?|#|$)|smartpakequine\.com|doversaddlery\.com|schneidersaddlery\.com|ridingwarehouse\.com|wysong\.net|marshallferrets\.com|carniwhole\.com|chewy\.com|trupanion\.com|healthypawspetinsurance\.com|embracepetinsurance\.com|lemonade\.com|pumpkin\.care|petsbest\.com|spotpet\.com|manypets\.com|figopetinsurance\.com|aspcapetinsurance\.com|fetchpet\.com|metlifepetinsurance\.com|wagmo\.io|vetster\.com|askvet\.app/i

async function sampleInput(page: Page, start: string) {
  const numbers = page.locator('input[type="number"]')
  const numberCount = await numbers.count()
  for (let i = 0; i < numberCount; i++) {
    const field = numbers.nth(i)
    if (await field.isVisible()) await field.fill('12').catch(() => {})
  }
  const seen = new Set<string>()
  const radios = page.locator('input[type="radio"]')
  const radioCount = await radios.count()
  for (let i = 0; i < radioCount; i++) {
    const radio = radios.nth(i)
    const name = (await radio.getAttribute('name')) || `radio-${i}`
    if (seen.has(name)) continue
    seen.add(name)
    if (await radio.isVisible()) await radio.check({ force: true }).catch(() => {})
  }
  const box = page.locator('input[type="checkbox"]').first()
  if ((await box.count()) && (await box.isVisible())) await box.check({ force: true }).catch(() => {})
  const selects = page.locator('select')
  const selectCount = await selects.count()
  for (let i = 0; i < selectCount; i++) {
    const select = selects.nth(i)
    if (!(await select.isVisible())) continue
    const value = await select.inputValue().catch(() => 'set')
    if (value) continue
    const option = select.locator('option').nth(1)
    const next = await option.getAttribute('value')
    if (next) await select.selectOption(next).catch(() => {})
  }
  if (start.endsWith('/horse-age-calculator')) {
    const age = page.locator('#ha-age')
    if (await age.count()) await age.fill('18')
  }
  if (start.includes('emergency') || start.endsWith('/new-puppy-checklist') || start.endsWith('/cost-calculator') || start.endsWith('/readiness-quiz')) {
    const choice = page.locator('main button, article button').first()
    if (await choice.count()) await choice.click({ timeout: 2000 }).catch(() => {})
  }
}

for (const [site, tools] of Object.entries(TOOLS)) {
  test.describe(site, () => {
    test.describe.configure({ timeout: 240_000 })

    test('calculator results omit held partners', async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== site, testInfo.project.name)
      for (const start of tools) {
        await test.step(start, async () => {
          const response = await page.goto(start)
          expect(response?.status(), start).toBe(200)
          await sampleInput(page, start)
          const hrefs = await page.locator('a[href]').evaluateAll((els) =>
            els.map((el) => el.getAttribute('href') || ''),
          )
          for (const href of hrefs) {
            expect(href, `${start} live href`).not.toMatch(HELD)
          }
        })
      }
    })
  })
}
