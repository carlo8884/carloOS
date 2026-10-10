import { expect, test, type APIRequestContext, type Page } from '@playwright/test'

/**
 * Top three tools per site, ranked by inbound internal links.
 * Each path has two hops: the product hop on the result screen, then the
 * first /go/ hop on the guide that result links to.
 * A held partner (SmartPak, Dover, Schneider, Riding Warehouse, Wysong,
 * Marshall, Carniwhole, Chewy, and the insurers) must never be a live hop.
 * An Amazon search whose words name a held brand is still Amazon.
 * The Amazon Associates tag is still unresolved, so this checks the retailer
 * domain and the product words only.
 */

type Destination = {
  host: string
  product: string[]
  forbid: string[]
}

type Journey = {
  name: string
  start: string
  heading: RegExp
  prepare: (page: Page) => Promise<void>
  result: RegExp
  /** Product hop on the tool screen. Null means the result card has no /go/. */
  resultHop: string | null
  resultDestination?: Destination
  guide: string | RegExp
  guideUrl: RegExp
  hop: string
  destination: Destination
}

const dogForbid = ['horse', 'aquarium', 'ferret']
const catForbid = ['horse', 'aquarium', 'ferret']
const fishForbid = ['dog', 'horse', 'ferret', 'cat']
const horseForbid = ['aquarium', 'ferret', 'cat']
const ferretForbid = ['horse', 'aquarium', 'dog']

const HELD_VENDOR =
  /\/go\/(smartpak|dover|schneider|ridingwarehouse|wysong|marshall|carniwhole|chewy(?:-brand|-pharmacy)?|trupanion|healthy-paws|embrace|vetster|askvet|lemonade|pumpkin|pets-best|spot|manypets|figo|aspca|fetch|metlife|wagmo)(\/|\?|#|$)/i

const JOURNEYS: Record<string, Journey[]> = {
  'dog-com': [
    {
      name: 'calorie calculator to body-condition guide',
      start: '/tools/dog-calorie-calculator',
      heading: /Dog Calorie Calculator/,
      prepare: async (page) => {
        await page.locator('#dc-weight').fill('50')
      },
      result: /MER \/ day/,
      resultHop: 'royal+canin+dry+dog+food',
      resultDestination: { host: 'amazon.com', product: ['royal', 'canin', 'dog'], forbid: dogForbid },
      guide: /Dog Body Condition Score \(BCS\)/,
      guideUrl: /\/guides\/dog-body-condition-score\/?$/,
      hop: 'soft+measuring+tape+for+pets',
      destination: { host: 'amazon.com', product: ['measuring', 'tape'], forbid: dogForbid },
    },
    {
      name: 'puppy checklist to crate review',
      start: '/tools/new-puppy-checklist',
      heading: /New Puppy Checklist/,
      prepare: async (page) => {
        await page.getByRole('button', { name: 'Large', exact: true }).click()
      },
      result: /Your new-puppy checklist/,
      resultHop: 'wire+dog+crate+with+divider+panel',
      resultDestination: { host: 'amazon.com', product: ['dog', 'crate'], forbid: ['horse', 'aquarium', 'ferret'] },
      guide: 'Best dog crates →',
      guideUrl: /\/reviews\/best-dog-crates\/?$/,
      hop: 'B000QFT1RC',
      destination: { host: 'amazon.com', product: ['b000qft1rc'], forbid: ['horse', 'aquarium', 'ferret'] },
    },
    {
      name: 'crate calculator to crate review',
      start: '/tools/dog-crate-size-calculator',
      heading: /Dog Crate Size Calculator/,
      prepare: async (page) => {
        await page.locator('#cs-length').fill('30')
        await page.locator('#cs-height').fill('22')
      },
      result: /Recommended crate size/,
      resultHop: 'midwest+icrate+36+inch',
      resultDestination: { host: 'amazon.com', product: ['midwest', 'crate'], forbid: ['horse', 'aquarium', 'ferret'] },
      guide: 'Compare wire, airline, and heavy-duty crates',
      guideUrl: /\/reviews\/best-dog-crates\/?$/,
      hop: 'B000QFT1RC',
      destination: { host: 'amazon.com', product: ['b000qft1rc'], forbid: ['horse', 'aquarium', 'ferret'] },
    },
  ],
  'vets-co': [
    {
      name: 'er vs clinic to when-to-go guide',
      start: '/tools/er-vs-clinic',
      heading: /ER vs Clinic vs Telehealth/,
      prepare: async (page) => {
        await page.getByRole('checkbox', { name: /Nutrition or diet question/ }).click()
      },
      result: /Talk to a licensed vet remotely/,
      resultHop: null,
      guide: 'Watch vs same-day vs emergency',
      guideUrl: /\/guides\/when-to-go-to-the-vet\/?$/,
      hop: 'pet+first+aid+kit?s=tools-er-vs-clinic',
      destination: { host: 'amazon.com', product: ['first', 'aid'], forbid: ['horse', 'aquarium', 'ferret'] },
    },
    {
      name: 'cat body condition to calorie calculator',
      start: '/tools/cat-body-condition-score',
      heading: /Cat Body Condition Score/,
      prepare: async (page) => {
        await page.getByRole('radio', { name: 'Ribs easily felt with only a slight covering of fat' }).check()
        await page.getByRole('radio', { name: 'A visible waist behind the ribs' }).check()
        await page.getByRole('radio', { name: 'Minimal abdominal fat pad; a slight tuck' }).check()
      },
      result: /\/9/,
      resultHop: 'digital+pet+scale?s=tools-cat-body-condition-score',
      resultDestination: { host: 'amazon.com', product: ['scale'], forbid: catForbid },
      guide: 'Estimate daily calories next',
      guideUrl: /\/tools\/cat-calorie-calculator\/?$/,
      hop: 'slow+feeder+cat+bowl',
      destination: { host: 'amazon.com', product: ['cat', 'bowl'], forbid: catForbid },
    },
    {
      name: 'cat calorie calculator to body condition',
      start: '/tools/cat-calorie-calculator',
      heading: /Cat Calorie Calculator/,
      prepare: async (page) => {
        await page.locator('#cc-weight').fill('12')
      },
      result: /kcal/,
      resultHop: 'slow+feeder+cat+bowl',
      resultDestination: { host: 'amazon.com', product: ['cat', 'bowl'], forbid: catForbid },
      guide: 'Check the number against body condition →',
      guideUrl: /\/tools\/cat-body-condition-score\/?$/,
      hop: 'digital+pet+scale',
      destination: { host: 'amazon.com', product: ['scale'], forbid: catForbid },
    },
  ],
  'fish-com': [
    {
      name: 'volume calculator to filter review',
      start: '/tools/aquarium-volume-calculator',
      heading: /Aquarium Volume Calculator/,
      prepare: async (page) => {
        await page.getByLabel(/^Length/).fill('48')
      },
      result: /US gal/,
      resultHop: 'eheim+jager+200w+heater',
      resultDestination: { host: 'amazon.com', product: ['eheim', 'heater'], forbid: fishForbid },
      guide: 'Read the aquarium filter review',
      guideUrl: /\/reviews\/best-aquarium-filters\/?$/,
      hop: 'B0DCGB5T4Y',
      destination: { host: 'amazon.com', product: ['b0dcgb5t4y'], forbid: fishForbid },
    },
    {
      name: 'cycling estimator to cycling guide',
      start: '/tools/aquarium-cycling-estimator',
      heading: /Aquarium Cycling Time Estimator/,
      prepare: async (page) => {
        await page.getByLabel(/Tank temperature/).fill('76')
      },
      result: /\d+ days/,
      resultHop: 'api+freshwater+master+test+kit',
      resultDestination: { host: 'amazon.com', product: ['api', 'test'], forbid: fishForbid },
      guide: 'Read the aquarium cycling guide',
      guideUrl: /\/setup\/aquarium-cycling-guide\/?$/,
      hop: 'ammonia',
      destination: { host: 'amazon.com', product: ['ammonia'], forbid: fishForbid },
    },
    {
      name: 'stocking calculator to filter review',
      start: '/tools/stocking-calculator',
      heading: /Aquarium Stocking Calculator/,
      prepare: async (page) => {
        await page.getByLabel(/^Tank Volume/).fill('29')
      },
      result: /slim inches/,
      resultHop: 'aqueon+quietflow+30',
      resultDestination: { host: 'amazon.com', product: ['aqueon'], forbid: fishForbid },
      guide: 'Read the aquarium filter review',
      guideUrl: /\/reviews\/best-aquarium-filters\/?$/,
      hop: 'B0DCGB5T4Y',
      destination: { host: 'amazon.com', product: ['b0dcgb5t4y'], forbid: fishForbid },
    },
  ],
  'horses-com': [
    {
      name: 'feed calculator to forage basics',
      start: '/tools/horse-feed-calculator',
      heading: /Horse Feed & Hay Calculator/,
      prepare: async (page) => {
        await page.locator('#hf-weight').fill('1100')
      },
      result: /Dry-matter weight/,
      resultHop: 'standlee+premium+forage+pellets',
      resultDestination: { host: 'amazon.com', product: ['standlee', 'forage'], forbid: horseForbid },
      guide: 'Read forage basics →',
      guideUrl: /\/nutrition\/forage-basics\/?$/,
      hop: 'slow+feeder+hay+net+horse',
      destination: { host: 'amazon.com', product: ['hay', 'horse'], forbid: horseForbid },
    },
    {
      name: 'body condition score to forage basics',
      start: '/tools/body-condition-score',
      heading: /Horse Body Condition Score/,
      prepare: async (page) => {
        for (const area of ['neck', 'withers', 'shoulder', 'ribs', 'loin', 'tailhead']) {
          await page.locator(`#bcs-${area}`).selectOption('5')
        }
      },
      result: /Overall BCS/,
      resultHop: 'horse+weight+tape',
      resultDestination: { host: 'amazon.com', product: ['horse', 'tape'], forbid: horseForbid },
      guide: 'Feed to the score, starting with forage →',
      guideUrl: /\/nutrition\/forage-basics\/?$/,
      hop: 'slow+feeder+hay+net+horse',
      destination: { host: 'amazon.com', product: ['hay', 'horse'], forbid: horseForbid },
    },
    {
      name: 'weight calculator to forage basics',
      start: '/tools/horse-weight-calculator',
      heading: /Horse Weight Calculator/,
      prepare: async (page) => {
        await page.locator('#hw-girth').fill('74')
        await page.locator('#hw-length').fill('66')
      },
      result: /Estimated weight/,
      resultHop: 'waterproof+turnout+horse+blanket+winter?s=tools-horse-blanket-size-calculator',
      resultDestination: { host: 'amazon.com', product: ['winter', 'horse', 'blanket'], forbid: horseForbid },
      guide: 'read forage basics',
      guideUrl: /\/nutrition\/forage-basics\/?$/,
      hop: 'slow+feeder+hay+net+horse',
      destination: { host: 'amazon.com', product: ['hay', 'horse'], forbid: horseForbid },
    },
  ],
  'ferret-com': [
    {
      name: 'cage calculator to cage review',
      start: '/tools/cage-size-calculator',
      heading: /Ferret Cage Size Calculator/,
      prepare: async (page) => {
        await page.locator('#cs-ferrets').fill('2')
        await page.getByRole('button', { name: '2', exact: true }).click()
      },
      result: /Minimum footprint/,
      resultHop: 'B0054U8UGW',
      resultDestination: { host: 'amazon.com', product: ['b0054u8ugw'], forbid: ferretForbid },
      guide: 'Compare the cages that meet this footprint',
      guideUrl: /\/reviews\/best-ferret-cage\/?$/,
      hop: 'B0054U8UGW',
      destination: { host: 'amazon.com', product: ['b0054u8ugw'], forbid: ferretForbid },
    },
    {
      name: 'body condition score to kibble guide',
      start: '/tools/ferret-body-condition-score',
      heading: /Ferret Body Condition Score/,
      prepare: async (page) => {
        await page.getByRole('radio', { name: /Ribs and spine easily felt under a light covering/ }).check()
        await page.getByRole('radio', { name: 'A defined waist behind the ribs — the body tapers' }).check()
        await page.getByRole('radio', { name: 'No pendulous belly; a lean, muscular outline from the side' }).check()
      },
      result: /\/9/,
      resultHop: 'ferret+hammock',
      resultDestination: { host: 'amazon.com', product: ['ferret', 'hammock'], forbid: ferretForbid },
      guide: 'Compare ferret kibble next',
      guideUrl: /\/diet\/best-ferret-kibble\/?$/,
      // Verified Wysong Epigen 90 product page. Not a /go/wysong direct hop.
      hop: 'B019W9VXZK',
      destination: { host: 'amazon.com', product: ['b019w9vxzk'], forbid: ferretForbid },
    },
    {
      name: 'age calculator to kibble guide',
      start: '/tools/ferret-age-calculator',
      heading: /Ferret Age Calculator/,
      prepare: async (page) => {
        await page.locator('#fa-age').fill('4')
      },
      result: /Human-equivalent age/,
      resultHop: 'amazon-brand/ferret+food?s=tools-ferret-age-calculator',
      resultDestination: { host: 'amazon.com', product: ['ferret'], forbid: ferretForbid },
      guide: 'Next: ferret kibble guide',
      guideUrl: /\/diet\/best-ferret-kibble\/?$/,
      hop: 'B019W9VXZK',
      destination: { host: 'amazon.com', product: ['b019w9vxzk'], forbid: ferretForbid },
    },
  ],
}

function plain(value: string): string {
  return decodeURIComponent(value).replace(/\+/g, ' ').toLowerCase()
}

async function expectNoHeldHops(page: Page, where: string) {
  const hrefs = await page.locator('a[href^="/go/"]').evaluateAll((els) =>
    els.map((el) => el.getAttribute('href') || ''),
  )
  expect(hrefs.length, `${where} has at least one hop to inspect`).toBeGreaterThan(0)
  for (const href of hrefs) {
    expect(href, `${where} live hop`).not.toMatch(HELD_VENDOR)
  }
}

async function expectRetailer(request: APIRequestContext, path: string, destination: Destination) {
  expect(path, 'live hop vendor').not.toMatch(HELD_VENDOR)
  const hop = await request.get(path, { maxRedirects: 0 })
  expect(hop.status(), `${path} status`).toBe(302)
  const location = hop.headers()['location'] || ''
  expect(location, `${path} location`).not.toBe('')
  const decoded = plain(location)
  expect(decoded, path).toContain(destination.host)
  expect(decoded, `${path} held host`).not.toMatch(
    /smartpakequine|doversaddlery|schneidersaddlery|ridingwarehouse|wysong\.net|marshallferrets|carniwhole|chewy\.com|trupanion|healthypaws|embracepet|vetster\.com|askvet\.app|lemonade\.com|pumpkin\.care|petsbest|spotpet|manypets|figopet|aspcapetinsurance/,
  )
  for (const word of destination.product) expect(decoded, path).toContain(word)
  for (const word of destination.forbid) expect(decoded, path).not.toContain(word)
}

for (const [site, journeys] of Object.entries(JOURNEYS)) {
  test.describe(site, () => {
    test.describe.configure({ timeout: 180_000 })

    for (const journey of journeys) {
      test(journey.name, async ({ page }, testInfo) => {
        test.skip(testInfo.project.name !== site, testInfo.project.name)
        const response = await page.goto(journey.start)
        expect(response?.status(), journey.start).toBe(200)
        await expect(page.getByRole('heading', { level: 1, name: journey.heading })).toBeVisible()
        await journey.prepare(page)
        await expect(page.getByText(journey.result).first()).toBeVisible()
        await expectNoHeldHops(page, `${journey.name} result`)

        if (journey.resultHop && journey.resultDestination) {
          const resultHop = page.locator(`a[href*="${journey.resultHop}"]`).first()
          await expect(resultHop).toBeVisible()
          const resultHref = (await resultHop.getAttribute('href')) || ''
          expect(plain(resultHref), `${journey.name} result`).toContain(plain(journey.resultHop))
          await expectRetailer(page.request, resultHref, journey.resultDestination)
        } else {
          await expect(page.locator('[data-result-pick] a[href^="/go/"]')).toHaveCount(0)
        }

        const guide = (typeof journey.guide === 'string'
          ? page.getByRole('link', { name: journey.guide, exact: true })
          : page.getByRole('link', { name: journey.guide })
        ).first()
        await expect(guide).toBeVisible()
        await guide.click()
        await expect(page).toHaveURL(journey.guideUrl)
        await expectNoHeldHops(page, `${journey.name} guide`)

        const hop = page.locator('a[href^="/go/"]').first()
        await expect(hop).toBeVisible()
        const href = (await hop.getAttribute('href')) || ''
        expect(plain(href), journey.name).toContain(plain(journey.hop))
        await expectRetailer(page.request, href, journey.destination)
      })
    }
  })
}
