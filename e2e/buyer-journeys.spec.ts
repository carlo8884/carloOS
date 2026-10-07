import { expect, test } from '@playwright/test'
import { expectHop } from './hop'
import { AMAZON_TAG, TRUPANION_TAG } from './tags'

type Journey = {
  name: string
  start: string
  startHeading: RegExp
  link: string | RegExp
  comparison: RegExp
  hop: string
  hopIncludes: string[]
}

const amazon = (keyword: string): string[] => ['https://amazon.com/s?k=', `tag=${AMAZON_TAG}`, keyword]
const JOURNEYS: Record<string, Journey[]> = {
  'dog-com': [
    {
      name: 'crate size to crate review',
      start: '/tools/dog-crate-size-calculator',
      startHeading: /Dog Crate Size Calculator/,
      link: /Compare wire, airline, and heavy-duty crates/,
      comparison: /\/reviews\/best-dog-crates\/?$/,
      hop: '/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-best-dog-crates',
      hopIncludes: amazon('midwest'),
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
      hop: '/go/amazon-brand/big+barker+orthopedic+dog+bed?s=reviews-best-dog-beds',
      hopIncludes: amazon('barker'),
    },
  ],
  'fish-com': [
    {
      name: 'heater calculator to heater review',
      start: '/tools/heater-wattage-calculator',
      startHeading: /Heater Wattage Calculator/,
      link: /Read the heater review before you buy/,
      comparison: /\/reviews\/best-aquarium-heaters\/?$/,
      hop: '/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters',
      hopIncludes: amazon('eheim'),
    },
    {
      name: 'filter guide to filter review',
      start: '/reviews/hob-vs-canister-guide',
      startHeading: /HOB vs canister/,
      link: 'filter review',
      comparison: /\/reviews\/best-aquarium-filters\/?$/,
      hop: '/go/amazon-brand/aquaclear+70+filter?s=reviews-best-aquarium-filters',
      hopIncludes: amazon('aquaclear'),
    },
    {
      name: 'test-kit guide to test-kit review',
      start: '/reviews/api-vs-salifert-guide',
      startHeading: /API Master Kit or Salifert/,
      link: 'water-test review',
      comparison: /\/reviews\/best-water-test-kits\/?$/,
      hop: '/go/amazon-brand/api+freshwater+master+test+kit?s=reviews-best-water-test-kits',
      hopIncludes: amazon('api'),
    },
  ],
  'horses-com': [
    {
      name: 'blanket guide to blanket review',
      start: '/reviews/rambo-vs-rhino-guide',
      startHeading: /Rambo vs Rhino/,
      link: 'winter blanket review',
      comparison: /\/reviews\/best-winter-horse-blankets\/?$/,
      hop: '/go/amazon-brand/winter+horse+blanket?s=reviews-best-winter-horse-blankets',
      hopIncludes: amazon('winter'),
    },
    {
      name: 'joint guide to joint review',
      start: '/reviews/cosequin-vs-platinum-guide',
      startHeading: /Cosequin ASU Plus or Platinum/,
      link: 'joint-supplement review',
      comparison: /\/supplements\/joint-supplements\/?$/,
      hop: '/go/amazon-brand/platinum+performance+CJ+joint+supplement?s=supplements-joint-supplements',
      hopIncludes: amazon('platinum'),
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
      hop: 'https://vetster.com/?campaign=telehealth',
      hopIncludes: ['https://vetster.com/', 'campaign=telehealth'],
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
      hop: '/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=reviews-best-ferret-cage',
      hopIncludes: amazon('ferret'),
    },
    {
      name: 'litter guide to litter review',
      start: '/reviews/paper-vs-wood-litter-guide',
      startHeading: /Paper pellets vs wood pellets/,
      link: 'litter review',
      comparison: /\/reviews\/best-ferret-litter\/?$/,
      hop: '/go/amazon-brand/yesterdays+news+recycled+paper+pellet+litter+non+clumping?s=reviews-best-ferret-litter',
      hopIncludes: amazon('yesterdays'),
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

        const hop = page.locator('[data-primary-hop] a')
        await expect(hop).toBeVisible()
        await expect(hop).toHaveAttribute('href', journey.hop)
        const box = await hop.boundingBox()
        expect(box, 'primary hop box').toBeTruthy()
        expect(box!.x).toBeGreaterThanOrEqual(0)
        expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1)

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        )
        expect(overflow, 'horizontal overflow').toBeLessThanOrEqual(1)
        await expect(page.locator('body')).not.toContainText(/\bhop\b/i)

        if (journey.hop.startsWith('/')) {
          await expectHop(page.request, journey.hop, journey.hopIncludes)
        } else {
          expect(journey.hop, 'unset consult href').not.toContain('PLACEHOLDER')
          for (const part of journey.hopIncludes) expect(journey.hop).toContain(part)
        }
      })
    }
  })
}
