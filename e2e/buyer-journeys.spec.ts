import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG, TRUPANION_TAG } from './tags'

type Journey = {
  name: string
  start: string
  startHeading: RegExp
  link: string | RegExp
  comparison: RegExp
  hop?: string
  hopIncludes?: string[]
  /** Unset partner. The comparison shows a note, not a live hop. */
  held?: boolean
  /** The comparison dropped this search because the first result was the wrong product. */
  droppedSearch?: string
}

const amazon = (keyword: string): string[] => ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, keyword]
const product = (asin: string): string[] => [`https://amazon.com/dp/${asin}`, `tag=${AMAZON_TAG}`]
const JOURNEYS: Record<string, Journey[]> = {
  'dog-com': [
    {
      name: 'crate size to crate review',
      start: '/tools/dog-crate-size-calculator',
      startHeading: /Dog Crate Size Calculator/,
      link: /Compare wire, airline, and heavy-duty crates/,
      comparison: /\/reviews\/best-dog-crates\/?$/,
      hop: '/go/amazon/B000QFT1RC?s=reviews-best-dog-crates',
      hopIncludes: product('B000QFT1RC'),
    },
    {
      name: 'front-clip guide to harness review',
      start: '/reviews/front-clip-vs-back-clip-guide',
      startHeading: /Front-clip vs back-clip/,
      link: 'harness review',
      comparison: /\/reviews\/best-dog-harnesses\/?$/,
      hop: '/go/amazon-brand/petsafe+easy+walk+harness?s=reviews-best-dog-harnesses',
      hopIncludes: amazon('petsafe'),
    },
    {
      name: 'bed guide to bed review',
      start: '/reviews/big-barker-vs-casper-guide',
      startHeading: /Big Barker or the Casper bed/,
      link: 'bed review',
      comparison: /\/reviews\/best-dog-beds\/?$/,
      hop: '/go/amazon/B009G9Y59S?s=reviews-best-dog-beds',
      hopIncludes: product('B009G9Y59S'),
    },
  ],
  'fish-com': [
    {
      name: 'heater calculator to heater review',
      start: '/tools/heater-wattage-calculator',
      startHeading: /Heater Wattage Calculator/,
      link: /Read the heater review before you buy/,
      comparison: /\/reviews\/best-aquarium-heaters\/?$/,
      hop: '/go/amazon/B003I5UC0W?s=reviews-best-aquarium-heaters',
      hopIncludes: product('B003I5UC0W'),
    },
    {
      name: 'filter guide to filter review',
      start: '/reviews/hob-vs-canister-guide',
      startHeading: /HOB vs canister/,
      link: 'filter review',
      comparison: /\/reviews\/best-aquarium-filters\/?$/,
      hop: '/go/amazon/B0DCGB5T4Y?s=reviews-best-aquarium-filters',
      hopIncludes: product('B0DCGB5T4Y'),
    },
    {
      name: 'test-kit guide to test-kit review',
      start: '/reviews/api-vs-salifert-guide',
      startHeading: /API Master Kit or Salifert/,
      link: 'water-test review',
      comparison: /\/reviews\/best-water-test-kits\/?$/,
      hop: '/go/amazon/B000255NCI?s=reviews-best-water-test-kits',
      hopIncludes: product('B000255NCI'),
    },
  ],
  'horses-com': [
    {
      name: 'blanket guide to blanket review',
      start: '/reviews/rambo-vs-rhino-guide',
      startHeading: /Rambo vs Rhino/,
      link: 'winter blanket review',
      comparison: /\/reviews\/best-winter-horse-blankets\/?$/,
      hop: '/go/amazon/B09JWTFTGY?s=reviews-best-winter-horse-blankets',
      hopIncludes: product('B09JWTFTGY'),
    },
    {
      name: 'joint guide to joint review',
      start: '/reviews/cosequin-vs-platinum-guide',
      startHeading: /Cosequin ASU Plus or Platinum/,
      link: 'joint-supplement review',
      comparison: /\/supplements\/joint-supplements\/?$/,
      droppedSearch: 'platinum+performance+CJ',
    },
    {
      name: 'pad guide to pad review',
      start: '/reviews/quilted-vs-sheepskin-pad-guide',
      startHeading: /Quilted cotton pad or a sheepskin/,
      link: 'saddle-pad review',
      comparison: /\/tack\/saddle-pads\/?$/,
      hop: '/go/amazon-brand/quilted+all+purpose+saddle+pad?s=saddle-pads',
      hopIncludes: amazon('quilted'),
    },
  ],
  'vets-co': [
    {
      name: 'Trupanion guide to insurance review',
      start: '/reviews/trupanion-vs-healthy-paws-guide',
      startHeading: /Trupanion vs Healthy Paws/,
      link: 'pet insurance review',
      comparison: /\/reviews\/best-pet-insurance\/?$/,
      hop: '/go/trupanion/home?s=reviews-best-pet-insurance',
      hopIncludes: ['https://www.trupanion.com/enrollments/get-a-quote', `refid=${TRUPANION_TAG}`, 'campaign=home'],
    },
    {
      name: 'Vetster guide to telehealth review',
      start: '/reviews/vetster-vs-askvet-guide',
      startHeading: /Vetster vs AskVet/,
      link: 'telehealth comparison',
      comparison: /\/telehealth\/?$/,
      hop: '',
      hopIncludes: [],
      held: true,
    },
    {
      name: 'Spot guide to insurance review',
      start: '/reviews/spot-vs-manypets-guide',
      startHeading: /Spot or ManyPets/,
      link: 'insurance review',
      comparison: /\/reviews\/best-pet-insurance\/?$/,
      hop: '/go/trupanion/home?s=reviews-best-pet-insurance',
      hopIncludes: ['https://www.trupanion.com/enrollments/get-a-quote', `refid=${TRUPANION_TAG}`, 'campaign=home'],
    },
  ],
  'ferret-com': [
    {
      name: 'cage calculator to cage review',
      start: '/tools/cage-size-calculator',
      startHeading: /Ferret Cage Size Calculator/,
      link: /Compare the cages that meet this footprint/,
      comparison: /\/reviews\/best-ferret-cage\/?$/,
      hop: '/go/amazon/B0054U8UGW?s=reviews-best-ferret-cage',
      hopIncludes: product('B0054U8UGW'),
    },
    {
      name: 'litter guide to litter review',
      start: '/reviews/paper-vs-wood-litter-guide',
      startHeading: /Paper pellets vs wood pellets/,
      link: 'litter review',
      comparison: /\/reviews\/best-ferret-litter\/?$/,
      hop: '/go/amazon-brand/recycled+paper+pellet+litter+non+clumping?s=reviews-best-ferret-litter',
      hopIncludes: amazon('paper'),
    },
    {
      name: 'harness guide to harness review',
      start: '/reviews/vest-vs-h-harness-guide',
      startHeading: /Vest harness vs H-style/,
      link: 'harness review',
      comparison: /\/reviews\/best-ferret-harness\/?$/,
      hop: '/go/amazon-brand/ferret+vest+harness+jacket+escape+proof?s=reviews-best-ferret-harness',
      hopIncludes: amazon('ferret'),
    },
  ],
}

for (const width of [375, 1280]) {
  test(`buyer journeys at ${width}px`, async ({ page }, testInfo) => {
    const journeys = JOURNEYS[testInfo.project.name]
    expect(journeys, testInfo.project.name).toBeTruthy()
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 })

    for (const journey of journeys) {
      await test.step(journey.name, async () => {
        const response = await page.goto(journey.start)
        expect(response?.status(), journey.start).toBe(200)
        await expect(page.getByRole('heading', { level: 1, name: journey.startHeading })).toBeVisible()
        await page.getByRole('link', { name: journey.link }).first().click()
        await expect(page).toHaveURL(journey.comparison)

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        )
        expect(overflow, 'horizontal overflow').toBeLessThanOrEqual(1)
        await expect(page.locator('body')).not.toContainText(/\bhop\b/i)

        if (journey.droppedSearch) {
          await expect(page.locator(`a[href*="${journey.droppedSearch}"]`)).toHaveCount(0)
          await expect(page.locator('[data-partner-held="smartpak"]')).toBeVisible()
        } else if (journey.held) {
          const note = page.locator('[data-primary-hop="held"]')
          await expect(note).toBeVisible()
          await expect(page.locator('[data-primary-hop] a')).toHaveCount(0)
          const hrefs = await page.locator('a[href]').evaluateAll((els) =>
            els.map((el) => el.getAttribute('href') || ''),
          )
          for (const href of hrefs) {
            expect(href, `${journey.name} live href`).not.toMatch(
              /\/go\/(vetster|askvet|smartpak|dover|schneider|ridingwarehouse|wysong|marshall|carniwhole|chewy)(\/|\?|#|$)|vetster\.com|askvet\.app|smartpakequine|doversaddlery|chewy\.com/i,
            )
          }
        } else {
        const hopHref = journey.hop ?? ''
        const hopIncludes = journey.hopIncludes ?? []
        const hop = page.locator('[data-primary-hop] a')
        await expect(hop).toBeVisible()
        await expect(hop).toHaveAttribute('href', hopHref)
        const box = await hop.boundingBox()
        expect(box, 'primary hop box').toBeTruthy()
        expect(box!.x).toBeGreaterThanOrEqual(0)
        expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1)

        if (hopHref.startsWith('/')) {
          await expectHop(page.request, hopHref, hopIncludes)
        } else {
          expect(hopHref, 'unset consult href').not.toContain('PLACEHOLDER')
          for (const part of hopIncludes) expect(hopHref).toContain(part)
        }
        }
      })
    }
  })
}
