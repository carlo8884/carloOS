import { expect, test } from '@playwright/test'
import { expectAAContrast } from './contrast'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { AMAZON_TAG, TRUPANION_TAG } from './tags'
import { jsonLdProblems } from './jsonld'
import { expectStampedLastmod } from './sitemap-lastmod'

test('insurance review, then a carrier quote hop', async ({ page }) => {
  await page.goto('/reviews/best-pet-insurance')
  await expect(page.getByRole('heading', { name: /Best Pet Insurance/ })).toBeVisible()

  const quote = page.locator('#trupanion').getByRole('link', { name: 'Get a Trupanion quote' })
  await expect(quote).toHaveAttribute('href', '/go/trupanion/home?s=reviews-best-pet-insurance')
  await expect(page.locator('#healthy-paws').getByRole('link', { name: 'Compare carriers on published terms' })).toHaveAttribute('href', '/reviews/best-pet-insurance')
  await expect(page.locator('#embrace').getByRole('link', { name: 'Compare carriers on published terms' })).toHaveAttribute('href', '/reviews/best-pet-insurance')

  await expectHop(page.request, '/go/trupanion/home?s=reviews-best-pet-insurance', [
    'https://www.trupanion.com/enrollments/get-a-quote',
    `refid=${TRUPANION_TAG}`,
    'campaign=home',
  ])
})

test('claim helper: add a line item, pick an insurer, see the summary', async ({ page }) => {
  await page.goto('/tools/claim-helper')
  await expect(page.getByRole('heading', { level: 1, name: 'Pet Insurance Claim Helper' })).toBeVisible()
  await expect(page.getByText('Everything stays in your browser; nothing is stored or sent.', { exact: true })).toBeVisible()

  await page.getByLabel('Pet name').fill('Bella')
  await page.getByLabel('Visit date').fill('2026-10-01')
  await page.getByLabel('Item 1', { exact: true }).fill('Exam')
  await page.getByLabel('Amount ($)').first().fill('75')
  await page.getByRole('button', { name: 'Add line item' }).click()
  await expect(page.locator('[data-line-item]')).toHaveCount(2)
  await page.getByLabel('Item 2', { exact: true }).fill('X-ray')
  await page.getByLabel('Amount ($)').nth(1).fill('200.50')
  await expect(page.locator('[data-claim-total]')).toHaveText('$275.50')

  await page.getByLabel('Your insurer').selectOption('aspca')
  await expect(page.getByRole('heading', { name: 'ASPCA Pet Health Insurance claim checklist' })).toBeVisible()
  await expect(page.locator('[data-claim-deadline]')).toContainText('June 28, 2027')
  const summary = page.locator('[data-claim-summary]')
  await expect(summary).toContainText('Bella')
  await expect(summary).toContainText('X-ray: $200.50')
  await expect(summary).toContainText('Total: $275.50')
  await expect(page.locator('[data-claim-email]')).toContainText('Subject: Claim for Bella')

  await page.getByLabel('Your insurer').selectOption('trupanion')
  await expect(page.locator('[data-generic-checklist]')).toContainText('General guidance')
  await expect(page.locator('[data-calculator-result] a')).toHaveCount(0)
})

test('vets fix: Healthy Paws claim speed matches the cited claims page in picks and schema', async ({ page }) => {
  await page.goto('/reviews/best-pet-insurance')
  const card = page.locator('#healthy-paws')
  await expect(card).toContainText('most claims are processed in 2 days')
  const pick = page.locator('a[href="#healthy-paws"][aria-label="Most claims in 2 days: Healthy Paws"]').locator('..')
  await expect(pick).toContainText('Most claims in 2 days')
  const body = await page.locator('body').innerText()
  expect(body).not.toMatch(/~\s?2[- ]day|2-day average/i)

  // L8 removed the carrier Product nodes; the schema must still carry no averaged claim speed.
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/~\s?2[- ]day|2-day average/i)
})

test('vets fix hp label: Healthy Paws is labeled by its sourced claim speed, not as fastest', async ({ page }) => {
  for (const path of ['/reviews/best-pet-insurance', '/reviews/trupanion-vs-healthy-paws-guide', '/reviews/healthy-paws-vs-embrace-guide']) {
    await page.goto(path)
    expect(await page.locator('body').innerText()).not.toMatch(/fastest[- ]reimbursement|faster reimbursement|fastest claims/i)
  }

  await page.goto('/reviews/best-pet-insurance')
  await expect(page.locator('a[href="#healthy-paws"][aria-label="Most claims in 2 days: Healthy Paws"]')).toBeVisible()
  await expect(page.locator('#healthy-paws')).toContainText('Most claims in 2 days')
  await expect(page.locator('#healthy-paws')).toContainText('Claims page says most claims are processed in 2 days')
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/fastest/i)
})

test('vets fix telehealth picks: each quick pick repeats its card badge, name, and wording', async ({ page }) => {
  await page.goto('/telehealth')
  const picks = [
    { id: 'vetster', label: 'Video and chat', name: 'Vetster', subtitle: 'Video + chat · No monthly commitment' },
    { id: 'askvet', label: 'Best Subscription', name: 'AskVet', subtitle: "Chat plan. See the carrier's current terms." },
    { id: 'chewy', label: 'Best for Chewy Customers', name: 'Chewy Connect with a Vet', subtitle: 'Free technician chat · Separate vet video visit' },
  ]
  for (const pick of picks) {
    const tile = page.locator(`a[href="#${pick.id}"][aria-label="${pick.label}: ${pick.name}"]`).locator('..')
    await expect(tile).toContainText(pick.subtitle)
    const card = page.locator(`#${pick.id}`)
    await expect(card).toContainText(pick.label)
    await expect(card).toContainText(pick.name)
    for (const part of pick.subtitle.split(' · ')) await expect(card).toContainText(part)
  }
  const tiles = page.locator('a[href^="#"][aria-label]').locator('..')
  await expect(tiles.filter({ hasText: /Licensed DVMs|Linked to Chewy Rx|Chewy Integration/ })).toHaveCount(0)

  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  const names: string[] = []
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk)
    else if (v && typeof v === 'object') {
      const node = v as { '@type'?: string; itemListElement?: { name?: string }[] }
      if (node['@type'] === 'ItemList') for (const e of node.itemListElement ?? []) if (e.name) names.push(e.name)
      Object.values(v).forEach(walk)
    }
  }
  ld.forEach((text) => walk(JSON.parse(text)))
  expect(names).toEqual(picks.map((p) => p.name))
})

test('vets fix claim links: claim helper links to the reimbursement estimator and carrier comparison', async ({ page }) => {
  await page.goto('/tools/claim-helper')
  const nextSteps = page.locator('h2#next-steps + ul')
  for (const href of ['/tools/insurance-reimbursement-estimator', '/reviews/best-pet-insurance']) {
    await expect(nextSteps.locator(`a[href="${href}"]`)).toHaveCount(1)
    const res = await page.request.get(href, { maxRedirects: 0 })
    expect(res.status()).toBe(200)
  }
  await expect(nextSteps.getByRole('link', { name: 'Pet Insurance Reimbursement Estimator' })).toBeVisible()
  await expect(nextSteps.getByRole('link', { name: 'Best Pet Insurance 2026 — How the 11 Major Carriers Compare' })).toBeVisible()

  await page.goto('/tools/insurance-reimbursement-estimator')
  await expect(page.getByRole('link', { name: 'Pet Insurance Claim Helper' })).toHaveAttribute('href', '/tools/claim-helper')
})

test('vets fix trupanion direct pay: no only-insurer claim, fast-claims labels, or established-carrier badge', async ({ page }) => {
  const removed = /Only insurer|only one of the 11 major carriers|only carrier whose|Fast Reimbursement|fast claims|Established Carrier/i
  for (const path of ['/reviews/best-pet-insurance', '/insurance/how-pet-insurance-works', '/insurance/pre-existing-conditions', '/tools/insurance-quote-prep']) {
    await page.goto(path)
    expect(await page.locator('body').innerText()).not.toMatch(removed)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld).not.toMatch(removed)
    await expect(page.locator('a[href*="trupanion.com"]')).toHaveCount(0)
  }

  await page.goto('/reviews/best-pet-insurance')
  await expect(page.locator('#trupanion')).toContainText('Offers direct vet payment; check terms')
  await expect(page.locator('#healthy-paws')).toContainText('Direct Pay can reimburse the vet when funding is urgent')
})

test('vets fix superlatives: provider cards drop unsourced reputation and board-certified claims', async ({ page }) => {
  const removed = /Board-certified vets available|customer satisfaction|reputation for fast reimbursement|fastest in category|Solid trust signal/i
  for (const path of ['/telehealth', '/reviews/best-pet-insurance', '/insurance/how-pet-insurance-works']) {
    await page.goto(path)
    expect(await page.locator('body').innerText()).not.toMatch(removed)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld).not.toMatch(removed)
  }

  await page.goto('/telehealth')
  await expect(page.locator('#vetster')).toContainText('Video + chat · No monthly commitment')

  await page.goto('/reviews/best-pet-insurance')
  await expect(page.locator('#healthy-paws')).toContainText('Claims page says most claims are processed in 2 days')
  await expect(page.locator('#healthy-paws')).toContainText('Unlimited is one of the limit choices')

  await page.goto('/insurance/how-pet-insurance-works')
  await expect(page.locator('#healthy-paws')).toContainText('A single straightforward accident-and-illness plan on the pay-then-claim model.')
})

test('vets fix border collie: Lemonade pick drops unsourced fast-claims wording', async ({ page }) => {
  await page.goto('/pet-insurance/breeds/border-collie')
  expect(await page.locator('body').innerText()).not.toMatch(/fast claims/i)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/fast claims/i)
  await expect(page.locator('body')).toContainText("Lemonade's entry-tier premium fits a low-risk profile")
})

test('vets fix fast claims: deductibles page and Beagle pick use the sourced claims-page fact', async ({ page }) => {
  const removed = /fast claims|fast reimbursement|fast in-app|lowest-claim/i
  for (const path of ['/insurance/deductibles-reimbursement', '/pet-insurance/breeds/beagle']) {
    await page.goto(path)
    expect(await page.locator('body').innerText()).not.toMatch(removed)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld).not.toMatch(removed)
  }

  await page.goto('/insurance/deductibles-reimbursement')
  await expect(page.locator('#healthy-paws')).toContainText('Most claims in 2 days, per its claims page')
  await expect(page.locator('#healthy-paws [data-source="https://www.healthypawspetinsurance.com/pet-insurance-claims.html"]')).toContainText('most claims are processed in 2 days')
})

test('vets fix sample directory: /vets routes redirect to find-a-vet with no sample listings', async ({ page }) => {
  for (const path of ['/vets', '/vets/california']) {
    const res = await page.request.get(path, { maxRedirects: 0 })
    expect(res.status(), path).toBe(308)
    expect(res.headers()['location'], path).toMatch(/\/find-a-vet$/)
  }

  await page.goto('/vets/california/los-angeles')
  await expect(page).toHaveURL(/\/find-a-vet$/)
  expect(await page.locator('body').innerText()).not.toMatch(/Sample listing/i)
})

const FOLD: { path: string; pick: string }[] = [
  { path: '/reviews/best-pet-insurance', pick: 'Trupanion' },
  { path: '/reviews/holiday-emergency-visit-guide', pick: 'Trupanion' },
  { path: '/reviews/holiday-leftovers-low-fat-guide', pick: 'low-fat' },
  { path: '/reviews/askvet-vs-chewy-connect-guide', pick: 'AskVet' },
  { path: '/reviews/healthy-paws-vs-embrace-guide', pick: 'Healthy Paws' },
  { path: '/reviews/healthy-paws-vs-pets-best-guide', pick: 'Healthy Paws' },
  { path: '/reviews/november-december-gift-guide', pick: 'first-aid kit' },
  { path: '/reviews/vetster-vs-chewy-connect-guide', pick: 'Vetster' },
  { path: '/reviews/lemonade-vs-pets-best-guide', pick: 'Lemonade' },
  { path: '/reviews/spot-vs-manypets-guide', pick: 'Spot' },
]

test.describe('money fold at 390', () => {
  for (const item of FOLD) {
    test(item.path, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(item.path)
      const answer = page.locator('[data-fold="answer"]')
      await expect(answer).toBeVisible()
      const answerBox = await answer.boundingBox()
      expect(answerBox).toBeTruthy()
      expect(answerBox!.y + answerBox!.height).toBeLessThan(844)
      const text = (await answer.innerText()).replace(/\s+/g, ' ')
      expect(text.toLowerCase()).toContain(item.pick.toLowerCase())
      expect(text).not.toMatch(/notes below|partner ID|We cut|We graded/i)
      const offer = page.locator('[data-fold="offer"]')
      const visit = /askvet-vs-chewy|vetster-vs-chewy/.test(item.path)
      if (visit) {
        const next = offer.locator('a[href="/telehealth"]')
        await expect(next).toBeVisible()
        const nextBox = await next.boundingBox()
        expect(nextBox).toBeTruthy()
        expect(nextBox!.y + nextBox!.height).toBeLessThan(844)
        const held = offer.locator('[data-primary-hop="held"]')
        await expect(held).toBeVisible()
        await expect(held.locator('a')).toHaveCount(0)
        await expect(offer.locator('a[href*="/go/"]')).toHaveCount(0)
      } else {
        const hop = offer.locator('a[href*="/go/"], a[href="/reviews/best-pet-insurance"]')
        await expect(hop.first()).toBeVisible()
        const hopBox = await hop.first().boundingBox()
        expect(hopBox).toBeTruthy()
        expect(hopBox!.y + hopBox!.height).toBeLessThan(844)
        const note = offer.locator('[data-affiliate-disclosure], [data-quote-note]')
        await expect(note.first()).toBeVisible()
        const noteBox = await note.first().boundingBox()
        expect(noteBox).toBeTruthy()
        expect(noteBox!.y).toBeLessThan(844)
        expect(Math.abs((noteBox!.y) - (hopBox!.y))).toBeLessThan(180)
      }
      await expectMoneyCopy(page)
    })
  }
})

test('every review route rejects page-about-itself copy', async ({ page }) => {
  test.setTimeout(240_000)
  for (const path of reviewRoutes('vets-co')) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expectMoneyCopy(page)
  }
})

test('vets fix hp reimbursement: Healthy Paws guides state the sourced 2-day claims fact, not fast reimbursement', async ({ page }) => {
  for (const path of [
    '/reviews/trupanion-vs-healthy-paws-guide',
    '/reviews/healthy-paws-vs-embrace-guide',
    '/reviews/healthy-paws-vs-pets-best-guide',
  ]) {
    await page.goto(path)
    const body = await page.locator('body').innerText()
    expect(body).not.toMatch(/fast reimbursement|reimbursement back fast/i)
    expect(body).toMatch(/most claims are processed in 2 days/i)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld).not.toMatch(/fast reimbursement|reimbursement back fast/i)
  }
})

test('vets fix: JSON-LD points at on-page cards, not held partner quote hops', async ({ page }) => {
  for (const path of ['/reviews/best-pet-insurance', '/insurance/wellness-plans-vs-insurance']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    const hops = ld.match(/vets\.co\/go\/[^"\s]+/g) ?? []
    expect(hops.filter((hop) => !/^vets\.co\/go\/amazon(-brand)?\//.test(hop)), path).toEqual([])
    if (path === '/reviews/best-pet-insurance') {
      expect(ld).toContain('best-pet-insurance#trupanion')
      expect(ld).toContain('best-pet-insurance#healthy-paws')
      expect(ld).toContain('best-pet-insurance#embrace')
    }
  }
})

test('vets fix T4: fine-print ManyPets card drops internal card wording', async ({ page }) => {
  await page.goto('/insurance/reading-the-fine-print', { waitUntil: 'domcontentloaded' })
  const card = page.locator('#manypets')
  await expect(card).toContainText('ManyPets has stopped selling new US policies')
  const body = await page.locator('body').innerText()
  expect(body).not.toMatch(/this card does not print|this card|held partner|partner ID|tag needed/i)
})

test('vets fix T5: privacy and disclosure pages do not claim Chewy or telehealth programs, and keep the Amazon Associates statement', async ({ page }) => {
  for (const path of ['/legal/privacy-policy', '/disclosure', '/legal/affiliate-disclosure']) {
    await page.goto(path)
    const body = await page.locator('main').innerText()
    expect(body).not.toMatch(/participat\w*[^.]*\b(Chewy|Vetster|AskVet|telehealth)/i)
    expect(body).not.toMatch(/referral fees from (Vetster|AskVet|Chewy)/i)
    expect(body).toMatch(/As an Amazon Associate we earn from qualifying purchases/)
    expect(body).toMatch(/telehealth services[^.]*are not currently connected/i)
  }
})

test('vets fix Q1: breed insurance picks drop unsourced claim-frequency and ranking wording', async ({ page }) => {
  const removed = /lowest-claim|most-claimed|of any (AKC )?breed|among cat breeds|one of the (only|few|very few)|no other carrier|the rare carrier|most carriers|protects best|well-documented|industry-standard|\d+% (lifetime|of )/i
  for (const [path, kept] of [
    ['/pet-insurance/breeds/golden-retriever', "Hemangiosarcoma and lymphoma are on the Golden's condition list"],
    ['/pet-insurance/breeds/maine-coon', 'Maine Coons carry a breed-specific HCM mutation (MYBPC3)'],
  ]) {
    await page.goto(path)
    const body = await page.locator('main').innerText()
    expect(body, path).not.toMatch(removed)
    expect(body, path).toContain(kept)
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).not.toMatch(removed)
  }
})

test('vets fix P1: telehealth and insurance review have no standalone links under 24px at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const path of ['/telehealth', '/reviews/best-pet-insurance']) {
    await page.goto(path)
    const short = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'))
        .filter((a) => !a.closest('p, li'))
        .map((a) => ({ text: a.textContent?.trim() ?? '', rect: a.getBoundingClientRect(), hidden: getComputedStyle(a).visibility === 'hidden' }))
        .filter(({ rect, hidden }) => !hidden && rect.width > 1 && rect.height > 1 && rect.height < 24)
        .map(({ text, rect }) => `${text} (${Math.round(rect.height * 10) / 10}px)`),
    )
    expect(short, path).toEqual([])
  }
})

test('vets fix M4: telehealth JSON-LD points at on-page cards, not held Vetster or Chewy hops', async ({ page }) => {
  await page.goto('/telehealth', { waitUntil: 'domcontentloaded' })
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/\/go\/(vetster|chewy|askvet)\b/)
  for (const id of ['vetster', 'askvet', 'chewy']) {
    expect(ld).toContain(`https://vets.co/telehealth#${id}`)
    await expect(page.locator(`#${id}`)).toHaveCount(1)
  }
})

test('vets fix Q3: comparison tables and carrier copy drop internal "from the sentences on this page" and "our notes" wording', async ({ page }) => {
  for (const path of ['/insurance/breed-specific-risk', '/reviews/lemonade-vs-pets-best-guide']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const html = await page.content()
    expect(html, path).not.toMatch(/from the sentences on this page/i)
    expect(html, path).not.toMatch(/\bour notes\b|\bnotes mark\b/i)
  }
  await expect(page.locator('caption', { hasText: 'At a glance' }).first()).toBeVisible()
})

test('vets fix Q2: holiday gift guide lists real gift picks with Amazon search buttons and no unattributed prices', async ({ page }) => {
  await page.goto('/reviews/november-december-gift-guide', { waitUntil: 'domcontentloaded' })
  const picks = ['pet-first-aid-kit', 'digital-pet-thermometer', 'digital-pet-scale', 'pet-recovery-cone', 'soft-cat-carrier']
  for (const id of picks) {
    const shop = page.locator(`#${id} a[href^="/go/"]`)
    await expect(shop, id).toHaveCount(1)
    await expect(shop, id).toHaveAttribute('href', /^\/go\/amazon-brand\/[a-z+]+\?s=reviews-november-december-gift-guide$/)
  }
  const text = await page.locator('main').innerText()
  expect(text).not.toMatch(/\$\d/)
  expect(text).not.toMatch(/printed band/i)
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/\/go\/(trupanion|healthy-paws|embrace|vetster|askvet|chewy)\b/)
})

test('vets fix P3: specialty table links, breed-health guide links and wellness table names are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const checks: Array<[string, string]> = [
    ['/specialists', 'th > a'],
    ['/breeds/chihuahua-health', 'div.mt-3 > a.text-xs.font-bold'],
    ['/insurance/wellness-plans-vs-insurance', 'td.font-bold > a'],
  ]
  for (const [path, selector] of checks) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const heights = await page.locator(`main ${selector}`).evaluateAll((els) => els.filter((el) => (el as HTMLElement).offsetParent).map((el) => el.getBoundingClientRect().height))
    expect(heights.length, path).toBeGreaterThan(0)
    expect(heights.filter((h) => h < 24), path).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(390)
  }
})

test('vets fix Q4: holiday emergency guide copy matches the held compare-carriers button, not a Trupanion quote', async ({ page }) => {
  await page.goto('/reviews/holiday-emergency-visit-guide', { waitUntil: 'domcontentloaded' })
  const text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
  expect(text).not.toMatch(/Open the Trupanion quote|link below opens the Trupanion quote|The Trupanion quote from the insurance review|Get a Trupanion quote/i)
  expect(text).toContain('Compare carriers on the insurance review')
  const description = await page.locator('meta[name="description"]').getAttribute('content')
  expect(description).not.toMatch(/quote link is Trupanion/i)
  // Held (no partner tag): the hero links to the comparison. With a tag set: the hero names plans, not a quote.
  const offer = page.locator('[data-fold="offer"]')
  if (await offer.locator('[data-primary-hop="held"]').count()) {
    await expect(offer.locator('a[href="/reviews/best-pet-insurance"]')).toHaveText('Compare carriers on published terms')
  } else {
    await expect(offer.locator('a[href^="/go/trupanion"]').first()).toHaveText(/See Trupanion plans/)
  }
})

test('vets fix P4: home, health, find-a-vet, legal footer and directory links are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  const checks: Array<[string, string]> = [
    ['/', 'div.flex.items-baseline.justify-between > a.text-sm.font-semibold'],
    ['/health', 'div.grid > a.text-sm.text-brand-primary'],
    ['/find-a-vet', 'section.mb-16 > a.text-sm.font-bold'],
    ['/legal/affiliate-disclosure', 'div.mt-12.border-t.flex > a'],
  ]
  for (const [path, selector] of checks) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const heights = await page.locator(selector).evaluateAll((els) => els.filter((el) => (el as HTMLElement).offsetParent).map((el) => el.getBoundingClientRect().height))
    expect(heights.length, path).toBeGreaterThan(0)
    expect(heights.filter((h) => h < 24), path).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(390)
  }
})

test('vets fix T7: emergency triage card drops the unsourced "cheapest" and "most common ER mistake" claims', async ({ page }) => {
  await page.goto('/emergency-triage-card', { waitUntil: 'domcontentloaded' })
  const html = await page.content()
  expect(html).not.toMatch(/cheapest emergency-prep purchase you will ever make|most common ER mistake/i)
  expect(html).toContain('$40–$70')
})

test('vets fix T8: worth-it answer page makes no unsourced emergency dollar range', async ({ page }) => {
  await page.goto('/insurance/questions/is-pet-insurance-worth-it', { waitUntil: 'domcontentloaded' })
  const text = await page.locator('main').innerText()
  expect(text).not.toMatch(/\$5,000|\$5k|\$10,000|\$10k/)
  await expect(page.locator('main')).toContainText('a sudden large emergency bill from savings')
})

test('vets fix T9: specialist pages make no unsourced annual specialist-cost claim', async ({ page }) => {
  for (const path of ['/specialists', '/specialists/veterinary-cardiology']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const text = await page.locator('body').innerText()
    expect(text).not.toContain('Chronic specialist visits can cost')
    await expect(page.getByText('Chronic specialist care can add up over a year').first()).toBeVisible()
  }
})

test('vets fix T10: diagnostics pages make no unsourced full-workup dollar range', async ({ page }) => {
  for (const path of ['/diagnostics', '/diagnostics/complete-blood-count-cbc']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const text = await page.locator('body').innerText()
    expect(text).not.toMatch(/300-2,000|300–2,000/)
    await expect(page.getByText('Diagnostic workups add up test by test').first()).toBeVisible()
  }
})

test('vets fix T9b: specialist pages carry no unsourced annual range in the cross-site promo', async ({ page }) => {
  for (const path of ['/specialists', '/specialists/veterinary-cardiology']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const text = await page.locator('body').innerText()
    expect(text).not.toMatch(/3,000–15,000/)
  }
})

test('vets fix T12: every Amazon hop on the main money pages redirects to amazon.com with the tag', async ({ page }) => {
  for (const path of ['/telehealth', '/tools/insurance-finder', '/tools/cat-calorie-calculator', '/medications']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const hops = await page.locator('a[href^="/go/amazon"]').evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href') || ''))])
    expect(hops.length, `${path} Amazon hops`).toBeGreaterThan(0)
    for (const hop of hops) {
      await expectHop(page.request, hop, ['https://amazon.com/', `tag=${AMAZON_TAG}`])
    }
  }
})

test('vets fix T11: insurance funnel pages show the affiliate disclosure only when they have affiliate links', async ({ page }) => {
  for (const path of ['/pet-insurance', '/pet-insurance/states/alabama', '/pet-insurance/breeds/abyssinian', '/pet-insurance/breeds/abyssinian/alabama']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const hops = await page.locator('a[href^="/go/"]').count()
    const disclosures = await page.locator('[data-affiliate-disclosure="inline"]').count()
    expect(disclosures > 0, `${path}: ${hops} hops, ${disclosures} inline disclosures`).toBe(hops > 0)
  }
})

test('vets fix L1: sitemap lists every symptom, diagnostic, specialist, medication and find-a-vet state page linked from its hub', async ({ page }) => {
  const xml = await (await page.request.get('/sitemap/0.xml')).text()
  for (const [hub, prefix] of [['/symptoms', '/symptoms/'], ['/diagnostics', '/diagnostics/'], ['/specialists', '/specialists/'], ['/medications', '/medications/'], ['/find-a-vet', '/find-a-vet/']]) {
    await page.goto(hub, { waitUntil: 'domcontentloaded' })
    const hrefs = await page.locator(`a[href^="${prefix}"]`).evaluateAll((els) => [...new Set(els.map((el) => (el.getAttribute('href') || '').split(/[?#]/)[0].replace(/\/$/, '')))])
    const detail = hrefs.filter((h) => h.split('/').length === 3 && !h.startsWith('/medications/can-i-give-my-dog'))
    expect(detail.length, `${hub} detail links`).toBeGreaterThan(0)
    for (const h of detail) expect(xml, `${h} in sitemap`).toContain(`<loc>https://vets.co${h}</loc>`)
  }
})

test('vets fix L3: listed text meets WCAG AA contrast', async ({ page }) => {
  const checks: Array<[string, string]> = [
    ['/', 'p.text-sm.leading-relaxed.mb-5'],
    ['/', '[class*="bg-emerald-50"] p, [class*="bg-amber-50"] p'],
    ['/symptoms', 'span[class*="946A1A"]'],
    ['/symptoms', 'p.text-sm.text-brand-text-mid.leading-relaxed'],
    ['/emergency-triage-card', '[data-email-capture="section"] > p'],
  ]
  for (const [path, selector] of checks) {
    await page.goto(path, { waitUntil: 'networkidle' })
    await expectAAContrast(page, selector)
  }
})

test('vets fix L4: trimmed titles fit 70 characters', async ({ page }) => {
  for (const path of ['/tools/insurance-finder', '/reviews/best-pet-insurance', '/health/cognitive-dysfunction']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const title = await page.title()
    expect(title.length, `${path}: ${title}`).toBeLessThanOrEqual(70)
  }
})

test('vets fix L5: money-page Article dateModified matches the visible Last updated date', async ({ request }) => {
  const paths = [
    '/insurance/deductibles-reimbursement',
    '/insurance/breed-specific-risk',
    '/insurance/reading-the-fine-print',
    '/insurance/wellness-plans-vs-insurance',
    '/insurance/pre-existing-conditions',
    '/insurance/how-pet-insurance-works',
    '/insurance/when-to-enroll',
    '/insurance/what-pet-insurance-covers',
    '/insurance/questions/multi-pet-discounts',
    '/insurance/questions/does-pet-insurance-cover-dental',
    '/insurance/questions/does-pet-insurance-cover-pre-existing-conditions',
    '/insurance/questions/how-much-does-pet-insurance-cost',
    '/insurance/questions/how-does-the-claims-process-work',
    '/insurance/questions/does-pet-insurance-cover-vaccines',
    '/insurance/questions/is-pet-insurance-worth-it',
    '/insurance/questions/when-should-i-get-pet-insurance',
    '/reviews/vetster-vs-chewy-connect-guide',
    '/reviews/trupanion-vs-embrace-guide',
    '/reviews/november-december-gift-guide',
    '/reviews/trupanion-vs-figo-guide',
    '/reviews/vetster-vs-askvet-guide',
    '/reviews/lemonade-vs-pets-best-guide',
    '/reviews/healthy-paws-vs-embrace-guide',
    '/reviews/holiday-emergency-visit-guide',
    '/reviews/holiday-leftovers-low-fat-guide',
    '/reviews/trupanion-vs-healthy-paws-guide',
    '/reviews/best-pet-insurance',
    '/reviews/healthy-paws-vs-pets-best-guide',
    '/reviews/askvet-vs-chewy-connect-guide',
    '/reviews/spot-vs-manypets-guide',
  ]
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const visible = html.match(/Last updated <time dateTime="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const modified = [...html.matchAll(/"dateModified":"(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1])
    expect(visible, `${path} shows a Last updated date`).toBeTruthy()
    expect(modified.length, `${path} has Article dateModified`).toBeGreaterThan(0)
    for (const d of modified) expect(d, `${path} dateModified`).toBe(visible)
  }
})

test('vets fix L6: every FAQPage question on /medications/can-i-give-my-dog is visible on the page', async ({ page }) => {
  await page.goto('/medications/can-i-give-my-dog', { waitUntil: 'domcontentloaded' })
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
  const questions: string[] = []
  for (const block of blocks) {
    const data = JSON.parse(block)
    for (const node of Array.isArray(data) ? data : data['@graph'] ?? [data]) {
      if (node['@type'] === 'FAQPage') for (const q of node.mainEntity) questions.push(q.name)
    }
  }
  expect(questions.length).toBeGreaterThan(0)
  for (const q of questions) await expect(page.locator('[data-faq="visible"]').getByText(q, { exact: true })).toBeVisible()
})

test('vets fix L7: ArticleLayout breadcrumb items are absolute https://vets.co URLs', async ({ request }) => {
  const html = await (await request.get('/diagnostics/urinalysis')).text()
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]))
  const crumbs = blocks.flatMap((b) => (Array.isArray(b) ? b : b['@graph'] ?? [b])).filter((n) => n['@type'] === 'BreadcrumbList')
  expect(crumbs.length).toBe(1)
  const linked = crumbs[0].itemListElement.filter((e: { item?: string }) => e.item)
  expect(linked.length).toBeGreaterThan(0)
  for (const e of linked) expect(e.item.startsWith('https://vets.co/'), e.item).toBe(true)
})

test('vets fix L8: best-of pages carry ItemList markup and no Product, Review or Offer markup', async ({ request }) => {
  const paths = ['/reviews/best-pet-insurance', '/telehealth']
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1])
    const json = blocks.join('\n')
    for (const type of ['Product', 'Review', 'Offer', 'AggregateOffer', 'Rating']) {
      expect(json.includes(`"@type":"${type}"`), `${path} has ${type} markup`).toBe(false)
    }
    const lists = blocks.flatMap((b) => { const d = JSON.parse(b); return Array.isArray(d) ? d : d['@graph'] ?? [d] }).filter((n) => n['@type'] === 'ItemList')
    expect(lists.length, `${path} ItemList`).toBeGreaterThan(0)
    expect(lists[0].itemListElement.length).toBeGreaterThanOrEqual(3)
  }
})

test('vets fix L10: health and guide Article dateModified matches the visible Last updated date', async ({ request }) => {
  const paths = [
    '/health/anxiety-in-dogs',
    '/health/weight-management',
    '/health/pain-signs-dogs',
    '/health/spay-neuter-benefits',
    '/health/diabetes-in-dogs-cats',
    '/health/seizures-in-dogs',
    '/health/preventive-care-schedule',
    '/health/hyperthyroidism-cats',
    '/health/flea-tick-prevention',
    '/health/pain-management-dogs',
    '/health/kidney-disease-cats',
    '/health/cognitive-dysfunction',
    '/health/intestinal-parasites',
    '/health/emergency-signs',
    '/health/parvovirus-in-puppies',
    '/health/heat-stroke-dogs',
    '/health/leptospirosis',
    '/health/tick-borne-diseases',
    '/health/ear-infections-dogs',
    '/health/hypothyroidism-dogs',
    '/health/cushing-disease-dogs',
    '/health/dental-cleaning-guide',
    '/health/senior-bloodwork-guide',
    '/health/allergic-reactions-dogs',
    '/health/dog-vaccinations-guide',
    '/health/feline-lower-urinary-tract-disease',
    '/health/kennel-cough',
    '/health/vomiting-diarrhea-pets',
    '/health/senior-pet-care',
    '/health/bloat-gdv-dogs',
    '/health/heartworm-in-dogs',
    '/health/dehydration-in-dogs',
    '/health/arthritis-in-dogs',
    '/health/urinary-tract-infection',
    '/health/canine-influenza',
    '/health/dog-eye-conditions',
    '/health/pancreatitis-in-dogs',
    '/health/periodontal-disease-pets',
  ]
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    const visible = html.match(/Last updated <time dateTime="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const modified = [...html.matchAll(/"dateModified":"(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1])
    expect(visible, `${path} shows a Last updated date`).toBeTruthy()
    expect(modified.length, `${path} has Article dateModified`).toBeGreaterThan(0)
    for (const d of modified) expect(d, `${path} dateModified`).toBe(visible)
  }
})

test('vets fix R1: pet first-aid kit guide has the sourced checklist, tagged searches, disclosure, hub link and sitemap entry', async ({ page, request }) => {
  await page.goto('/guides/pet-first-aid-kit', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('h1')).toContainText('Pet First-Aid Kit Checklist')
  await expect(page.locator('#kit-table tbody tr')).toHaveCount(17)
  await expect(page.locator('#kit-table')).toContainText('never on wounds')
  const shop = await page.locator('main a[href^="/go/"]').evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href')))])
  expect(shop.sort()).toEqual([
    '/go/amazon-brand/digital+pet+thermometer?s=guides-pet-first-aid-kit',
    '/go/amazon-brand/pet+first+aid+kit?s=guides-pet-first-aid-kit',
    '/go/amazon-brand/wound+care+gauze?s=guides-pet-first-aid-kit',
  ])
  await expect(page.getByText(/commission/i).first()).toBeVisible()
  for (const href of ['https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners', 'https://www.merckvetmanual.com/special-pet-topics/emergencies/first-aid-kit-for-a-pet']) {
    await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
  }
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/"@type":"(Product|Review|Offer|AggregateRating)"/)
  for (const q of ['Should I buy a ready-made pet first-aid kit or build one?', 'How often should I check the kit?']) await expect(page.getByText(q, { exact: true })).toBeVisible()
  const hop = await request.get('/go/amazon-brand/pet+first+aid+kit?s=guides-pet-first-aid-kit', { maxRedirects: 0 })
  expect(hop.status()).toBe(302)
  expect(hop.headers().location).toMatch(/^https:\/\/(www\.)?amazon\.com\/.*[?&]tag=/)

  await page.goto('/guides', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('main a[href="/guides/pet-first-aid-kit"]')).toHaveCount(1)
  const sitemap = await (await request.get('/sitemap/0.xml')).text()
  expect(sitemap).toContain('<loc>https://vets.co/guides/pet-first-aid-kit</loc>')
})

test('vets fix R2: /guides/recovery-cone-e-collar has the sourced guide, tagged searches, disclosure, hub link and sitemap entry', async ({ page, request }) => {
  await page.goto('/guides/recovery-cone-e-collar', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('h1')).toContainText("Recovery Cones and E-Collars")
  await expect(page.locator('#cone-table tbody tr')).toHaveCount(4)
  const shop = await page.locator('main a[href^="/go/"]').evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href')))])
  expect(shop.sort()).toEqual(["/go/amazon-brand/dog+recovery+suit?s=guides-recovery-cone-e-collar", "/go/amazon-brand/pet+recovery+cone?s=guides-recovery-cone-e-collar", "/go/amazon-brand/soft+dog+cone+after+surgery?s=guides-recovery-cone-e-collar"])
  await expect(page.getByText(/commission/i).first()).toBeVisible()
  for (const href of ["https://vcahospitals.com/veterinary-care/primary/know-your-pet/post-operative-instructions-in-dogs", "https://www.aspca.org/aspca-spay-neuter-alliance/after-surgery-instructions"]) await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/"@type":"(Product|Review|Offer|AggregateRating)"/)
  for (const q of ["Can I take the cone off at night or while my dog eats?", "My pet can still lick the incision with the cone on. What now?"]) await expect(page.getByText(q, { exact: true })).toBeVisible()
  const hop = await request.get("/go/amazon-brand/pet+recovery+cone?s=guides-recovery-cone-e-collar", { maxRedirects: 0 })
  expect(hop.status()).toBe(302)
  expect(hop.headers().location).toMatch(/^https:\/\/(www\.)?amazon\.com\/.*[?&]tag=/)
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('main a[href="/guides/recovery-cone-e-collar"]').first()).toBeVisible()
  const sitemap = await (await request.get('/sitemap/0.xml')).text()
  expect(sitemap).toContain('<loc>https://vets.co/guides/recovery-cone-e-collar</loc>')
})

test('vets fix R3: /guides/how-to-give-your-pet-a-pill has the sourced guide, tagged searches, disclosure, hub link and sitemap entry', async ({ page, request }) => {
  await page.goto('/guides/how-to-give-your-pet-a-pill', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('h1')).toContainText("How to Give Your Dog or Cat a Pill")
  await expect(page.locator('#pill-table tbody tr')).toHaveCount(6)
  const shop = await page.locator('main a[href^="/go/"]').evaluateAll((els) => [...new Set(els.map((el) => el.getAttribute('href')))])
  expect(shop.sort()).toEqual(["/go/amazon-brand/pet+pill+gun?s=guides-how-to-give-your-pet-a-pill", "/go/amazon-brand/pill+pockets+for+cats?s=guides-how-to-give-your-pet-a-pill", "/go/amazon-brand/pill+pockets+for+dogs?s=guides-how-to-give-your-pet-a-pill"])
  await expect(page.getByText(/commission/i).first()).toBeVisible()
  for (const href of ["https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/how-medicate-your-dog", "https://vmc.vet.osu.edu/sites/default/files/documents/pet-medication-conditioning-2024.pdf"]) await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).not.toMatch(/"@type":"(Product|Review|Offer|AggregateRating)"/)
  for (const q of ["Are pill pockets safe for every pet?", "What if my pet keeps spitting the pill out?"]) await expect(page.getByText(q, { exact: true })).toBeVisible()
  const hop = await request.get("/go/amazon-brand/pill+pockets+for+dogs?s=guides-how-to-give-your-pet-a-pill", { maxRedirects: 0 })
  expect(hop.status()).toBe(302)
  expect(hop.headers().location).toMatch(/^https:\/\/(www\.)?amazon\.com\/.*[?&]tag=/)
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('main a[href="/guides/how-to-give-your-pet-a-pill"]').first()).toBeVisible()
  const sitemap = await (await request.get('/sitemap/0.xml')).text()
  expect(sitemap).toContain('<loc>https://vets.co/guides/how-to-give-your-pet-a-pill</loc>')
})

test('vets fix L12: issue #2676 dead source links replaced or removed, no held Chewy or Pets Best link rendered', async ({ page }) => {
  const dead = [
    'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/',
    'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/emergency-and-critical-care-guidelines/',
    'https://www.aaha.org/aaha-guidelines/otitis/',
    'https://www.aaha.org/aaha-guidelines/pain-management-guidelines/',
    'https://www.aaha.org/aaha-guidelines/dental-care-configuration/',
    'https://www.aaha.org/aaha-guidelines/senior-care-configuration/',
    'https://capcvet.org/guidelines/roundworms/',
    'https://www.cdc.gov/parasites/toxocariasis/gen_info/faqs.html',
  ]
  const pages: Record<string, string[]> = {
    '/health/emergency-signs': [], '/health/allergic-reactions-dogs': [], '/health/dehydration-in-dogs': [], '/health/heat-stroke-dogs': [],
    '/health/ear-infections-dogs': [], '/tools/er-vs-clinic': [], '/tools/is-this-a-cat-emergency': [],
    '/health/arthritis-in-dogs': ['https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf'],
    '/health/periodontal-disease-pets': ['https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/resource-center/'],
    '/health/senior-bloodwork-guide': ['https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf'],
    '/health/senior-pet-care': ['https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf'],
    '/health/intestinal-parasites': ['https://capcvet.org/guidelines/ascarid/', 'https://www.cdc.gov/toxocariasis/about/index.html'],
  }
  for (const [path, fresh] of Object.entries(pages)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    for (const href of dead) await expect(page.locator(`a[href="${href}"]`), `${path} ${href}`).toHaveCount(0)
    for (const href of fresh) await expect(page.locator(`a[href="${href}"]`).first(), `${path} ${href}`).toBeAttached()
  }
  await page.goto('/telehealth', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('#chewy')).toBeVisible()
  await expect(page.locator('a[href*="/go/chewy"], a[href*="chewy.com"]')).toHaveCount(0)
  for (const path of ['/insurance/deductibles-reimbursement', '/insurance/when-to-enroll']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('#pets-best')).toBeVisible()
    await expect(page.locator('a[href*="/go/pets-best"], a[href*="petsbest.com"]'), path).toHaveCount(0)
  }
})

test('vets fix P2: non-funnel breadcrumb, back and dosing links are at least 24px tall at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const path of ['/about', '/find-a-vet/california', '/symptoms/dog-vomiting', '/medications/apoquel', '/medications/can-i-give-my-dog/ibuprofen', '/diagnostics/urinalysis', '/specialists/veterinary-cardiology', '/glossary', '/tools/er-vs-clinic', '/tools/cat-calorie-calculator', '/insurance/questions', '/legal/terms']) {
    const res = await page.goto(path)
    expect(res?.status(), path).toBe(200)
    const short = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'))
        .filter((a) => !a.closest('p, li'))
        .map((a) => ({ text: a.textContent?.trim() ?? '', rect: a.getBoundingClientRect(), hidden: getComputedStyle(a).visibility === 'hidden' }))
        .filter(({ rect, hidden }) => !hidden && rect.width > 1 && rect.height > 1 && rect.height < 24)
        .map(({ text, rect }) => `${text} (${Math.round(rect.height * 10) / 10}px)`),
    )
    expect(short, path).toEqual([])
  }
})

test('vets fix T13: Amazon hops carry exactly the env tag, no raw Amazon links, no hard-coded tag in config', async ({ page, request }) => {
  const { readFileSync } = await import('node:fs')
  expect(readFileSync('packages/config/affiliate.ts', 'utf8')).not.toMatch(/carloOS-20|amazonLink|amazonSearchLink/)
  const hops = new Set<string>()
  for (const path of ['/guides/pet-first-aid-kit', '/guides/recovery-cone-e-collar', '/guides/how-to-give-your-pet-a-pill', '/telehealth']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const hrefs = await page.locator('a[href]').evaluateAll((els) => els.map((el) => el.getAttribute('href') ?? ''))
    expect(hrefs.filter((h) => /^https?:\/\/([^/]*\.)?(amazon\.com|amzn\.to|amzn\.com)\b/.test(h)), path).toEqual([])
    for (const h of hrefs) if (h.startsWith('/go/amazon')) hops.add(h)
  }
  expect(hops.size).toBeGreaterThan(0)
  for (const h of hops) {
    const res = await request.get(h, { maxRedirects: 0 })
    expect(res.status(), h).toBe(302)
    expect(new URL(res.headers().location).searchParams.getAll('tag'), h).toEqual([AMAZON_TAG])
  }
})

test('vets fix IL1: related health pages link to the first-aid kit, recovery cone and pill guides', async ({ page }) => {
  const map: Record<string, string> = {
    '/health/emergency-signs': '/guides/pet-first-aid-kit', '/health/heat-stroke-dogs': '/guides/pet-first-aid-kit', '/health/allergic-reactions-dogs': '/guides/pet-first-aid-kit',
    '/health/spay-neuter-benefits': '/guides/recovery-cone-e-collar', '/health/ear-infections-dogs': '/guides/recovery-cone-e-collar',
    '/health/heartworm-in-dogs': '/guides/how-to-give-your-pet-a-pill', '/health/intestinal-parasites': '/guides/how-to-give-your-pet-a-pill',
    '/health/hyperthyroidism-cats': '/guides/how-to-give-your-pet-a-pill', '/health/urinary-tract-infection': '/guides/how-to-give-your-pet-a-pill',
  }
  for (const [path, href] of Object.entries(map)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator(`a[href="${href}"]`).first(), path).toBeAttached()
  }
})

test('vets fix IL2: oral medication pages link to the pill guide, injectable Cytopoint does not', async ({ page }) => {
  for (const path of ['/medications/apoquel', '/medications/carprofen', '/medications/doxycycline', '/medications/vetmedin']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('main a[href="/guides/how-to-give-your-pet-a-pill"]').first(), path).toBeVisible()
  }
  await page.goto('/medications/cytopoint', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('a[href="/guides/how-to-give-your-pet-a-pill"]')).toHaveCount(0)
})

test('vets fix AI1: llms.txt matches the site (Amazon disclosure, no scores, guides listed)', async ({ request }) => {
  const res = await request.get('/llms.txt')
  expect(res.status()).toBe(200)
  const t = await res.text()
  expect(t).not.toMatch(/does not promote pet-retail|promotes insurance only|editorial scoring/)
  expect(t).toContain('Amazon Associate')
  for (const p of ['/guides/pet-first-aid-kit', '/guides/recovery-cone-e-collar', '/guides/how-to-give-your-pet-a-pill', '/how-we-pick', '/disclosure']) expect(t).toContain(p)
  for (const m of t.matchAll(/\]\(https:\/\/vets\.co(\/[^)]*)\)/g)) expect((await request.get(m[1])).status(), m[1]).toBe(200)
})
test('vets fix TS2: journal citations link to their DOI, unverifiable citations and the unsourced remission rate are gone', async ({ page }) => {
  const want: Record<string, string[]> = {
    '/health/bloat-gdv-dogs': ['10.2460/javma.2000.216.40'],
    '/health/cognitive-dysfunction': ['10.1016/j.cvsm.2012.04.003'],
    '/health/cushing-disease-dogs': ['10.1111/jvim.12192', '10.1016/j.cvsm.2009.10.008'],
    '/health/diabetes-in-dogs-cats': [],
    '/health/kidney-disease-cats': ['10.1016/s0022-2143(98)90146-9'],
    '/health/heartworm-in-dogs': [],
  }
  for (const [path, dois] of Object.entries(want)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    for (const doi of dois) await expect(page.locator(`a[href="https://doi.org/${doi}"]`).first(), `${path} ${doi}`).toBeAttached()
    await expect(page.locator('body'), path).not.toContainText(/Atkins CE|Gilor C|Rand JS|30-50%/)
  }
  for (const [path, href] of [['/health/diabetes-in-dogs-cats', 'https://pubmed.ncbi.nlm.nih.gov/25701862/'], ['/health/kidney-disease-cats', 'https://pubmed.ncbi.nlm.nih.gov/26936494/']]) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator(`a[href="${href}"]`).first(), path).toBeAttached()
  }
})

test('vets fix SD1: rendered JSON-LD on key templates parses and has no structural errors', async ({ request }) => {
  const problems: string[] = []
  for (const path of ['/', '/health/kidney-disease-cats', '/breeds/beagle-health', '/guides/pet-first-aid-kit', '/tools', '/tools/er-vs-clinic', '/insurance', '/medications']) problems.push(...(await jsonLdProblems(request, path)))
  expect(problems).toEqual([])
})

test('vets fix AF1: heat stroke, leptospirosis and UTI pages open with a sourced short answer and carry FAQ schema', async ({ page }) => {
  const cases: Array<[string, RegExp, string]> = [
    ['/health/heat-stroke-dogs', /Do not put your dog in cold water/, 'Can I use ice packs on a dog with heat stroke?'],
    ['/health/leptospirosis', /treat it with the antibiotic doxycycline/, 'Can I catch leptospirosis from my dog?'],
    ['/health/urinary-tract-infection', /short antibiotic course of 3 to 5 days/, 'Does cranberry prevent UTIs in dogs?'],
  ]
  for (const [path, short, question] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const box = page.locator('.carloOS-article').getByText('Short answer').first()
    await expect(box, path).toBeVisible()
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator('.carloOS-article a[href^="https://www.merckvetmanual.com/"]').first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
    expect(ld, path).toContain(question)
  }
  await page.goto('/health/heat-stroke-dogs', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('Ice water or ice packs cause vasoconstriction')
})

test('vets fix SM1: sitemap lastmod is the stamped page date, and unstamped hubs carry none', async ({ request }) => {
  await expectStampedLastmod(request, ['/health/heat-stroke-dogs', '/health/kidney-disease-cats', '/breeds/beagle-health'], ['/how-we-pick', '/symptoms/dog-vomiting'])
})

test('vets fix AF3: influenza, allergic reaction and tick-borne pages open with a sourced short answer and carry FAQ schema', async ({ page }) => {
  const cases: Array<[string, string, string]> = [
    ['/health/canine-influenza', 'most dogs recover in 2 to 3 weeks', 'Do antibiotics treat dog flu?'],
    ['/health/allergic-reactions-dogs', 'Anaphylaxis is different', 'What are the signs of anaphylaxis in a dog?'],
    ['/health/tick-borne-diseases', 'at least 24 hours', 'Can my dog give me Lyme disease?'],
  ]
  for (const [path, short, question] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const box = page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()
    await expect(box, path).toContainText(short)
    await expect(page.locator('.carloOS-article a[href^="https://www.merckvetmanual.com/"]').first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
    expect(ld, path).toContain(question)
  }
  await page.goto('/health/canine-influenza', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText(/incubation period is 2–4 days|recover in 2–4 weeks|less prevalent than H3N2/)
})

test('vets fix AF4: dehydration, emergency signs and weight pages lead with sourced short answers, FAQ schema, and the correct Kealy citation', async ({ page }) => {
  const cases: Array<[string, string, string, string]> = [
    ['/health/dehydration-in-dogs', 'thick saliva', 'How do I check my dog for dehydration at home?', 'https://www.akc.org/expert-advice/health/warning-signs-dehydration-dogs/'],
    ['/health/emergency-signs', 'not eating or drinking for 24 hours', 'When is a seizure an emergency?', 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian'],
    ['/health/weight-management', '59% of dogs and 61% of cats', 'Do leaner dogs live longer?', 'https://pubmed.ncbi.nlm.nih.gov/11991408/'],
  ]
  for (const [path, short, question, href] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator(`a[href="${href}"]`).first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
  await page.goto('/health/weight-management', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('a[href="https://pubmed.ncbi.nlm.nih.gov/12420743/"]')).toHaveCount(0)
  await expect(page.locator('body')).not.toContainText('1.8 years longer')
})

test('vets fix SD2: Article schema omits image instead of shipping an empty string', async ({ request }) => {
  for (const path of ['/breeds/beagle-health', '/health/heat-stroke-dogs']) {
    const html = await (await request.get(path)).text()
    expect(html, path).toContain('"@type":"Article"')
    expect(html, path).not.toContain('"image":""')
  }
})

test('vets fix AF7: parasites and cognitive dysfunction pages lead with sourced short answers, FAQ schema, and CAPC testing frequency', async ({ page }) => {
  const cases: Array<[string, string, string, string]> = [
    ['/health/intestinal-parasites', 'at least twice a year in adults', 'How often should my dog have a fecal test?', 'https://capcvet.org/guidelines/ascarid/'],
    ['/health/cognitive-dysfunction', 'around nine years of age', 'Is there medication for dog dementia?', 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/cognitive-dysfunction-syndrome'],
  ]
  for (const [path, short, question, href] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first(), path).toContainText(short)
    await expect(page.locator(`a[href="${href}"]`).first(), path).toBeAttached()
    await expect(page.getByText(question).first(), path).toBeVisible()
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
    expect(ld, path).toContain('"FAQPage"')
  }
  await page.goto('/health/intestinal-parasites', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('fecal testing at least annually')
})

test('vets fix SM2: directory sitemap shards carry no build-time lastmod', async ({ request }) => {
  for (const id of [1, 2]) {
    const xml = await (await request.get(`/sitemap/${id}.xml`)).text()
    expect(xml, `sitemap ${id}`).toContain('<loc>https://vets.co/directory/')
    expect(xml, `sitemap ${id}`).not.toContain('<lastmod>')
  }
})

test('vets fix AF8: pain signs page leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/pain-signs-dogs', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('still wag their tails')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/special-pet-topics/pain-management/recognizing-and-assessing-pain-in-animals"]').first()).toBeAttached()
  await expect(page.getByText('Can a dog be in pain and still wag its tail?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix OG1: og:image renders a real 1200x630 PNG', async ({ page, request }) => {
  await page.goto('/health/heat-stroke-dogs', { waitUntil: 'domcontentloaded' })
  const og = await page.locator('meta[property="og:image"]').getAttribute('content')
  expect(og).toBeTruthy()
  const u = new URL(og!)
  const res = await request.get(u.pathname + u.search)
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('image/png')
  const body = await res.body()
  expect(body.length).toBeGreaterThan(1000)
  expect(body.readUInt32BE(16)).toBe(1200)
  expect(body.readUInt32BE(20)).toBe(630)
})

test('vets fix AF9: senior care page leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/senior-pet-care', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('twice a year or more')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/dog-owners/routine-care-of-dogs/routine-health-care-of-dogs"]').first()).toBeAttached()
  await expect(page.getByText('How often should a senior dog see the vet?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix AF12: senior bloodwork page leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/senior-bloodwork-guide', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('every 6 to 12 months')
  await expect(page.locator('a[href*="2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf"]').first()).toBeAttached()
  await expect(page.getByText('How often should a senior dog have bloodwork?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix AF11: pain management page leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/pain-management-dogs', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('giving pain medicine regularly is usually best')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/special-pet-topics/pain-management/pain-treatment-in-animals"]').first()).toBeAttached()
  await expect(page.getByText('Is it normal for my dog to sleep a lot after surgery?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix AF10: eye conditions page leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/dog-eye-conditions', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('see a vet immediately')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/dog-owners/eye-disorders-of-dogs/glaucoma-in-dogs"]').first()).toBeAttached()
  await expect(page.getByText('Is glaucoma in dogs an emergency?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix CD1: dog dementia prevalence matches the cited Neilson 2001 abstract', async ({ page }) => {
  for (const path of ['/health/cognitive-dysfunction', '/health/senior-pet-care']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const body = page.locator('body')
    await expect(body, path).toContainText('68% of dogs aged 15–16')
    await expect(body, path).not.toContainText('22% of dogs')
    await expect(body, path).not.toContainText('Madari')
    await expect(page.locator('a[href="https://pubmed.ncbi.nlm.nih.gov/11394831/"]').first(), path).toBeAttached()
  }
})

test('vets fix AF13: preventive care schedule leads with a sourced short answer and FAQ schema', async ({ page }) => {
  await page.goto('/health/preventive-care-schedule', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').filter({ hasText: 'Short answer' }).first()).toContainText('every 3 to 4 weeks for puppies')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/dog-owners/routine-care-of-dogs/routine-health-care-of-dogs"]').first()).toBeAttached()
  await expect(page.getByText('Does my dog need heartworm prevention all year?').first()).toBeVisible()
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n')
  expect(ld).toContain('"FAQPage"')
})

test('vets fix BR1: breed percentages match fetched sources', async ({ page }) => {
  await page.goto('/breeds/golden-retriever-health', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').first()).not.toContainText('More than 60% of Golden Retrievers will develop cancer')
  await expect(page.locator('.carloOS-article').first()).not.toContainText('60–90%')
  await expect(page.locator('a[href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9182714/"]').first()).toBeAttached()
  await expect(page.locator('a[href="https://www.merckvetmanual.com/circulatory-system/lymphoma-in-dogs/lymphoma-in-dogs"]').first()).toBeAttached()
  await page.goto('/breeds/labrador-health', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('.carloOS-article').first()).not.toContainText('23% of pet Labs')
  await expect(page.locator('a[href="https://pubmed.ncbi.nlm.nih.gov/27157046/"]').first()).toBeAttached()
})

test('vets fix BR3: Pomeranian periodontal claim matches Merck', async ({ page }) => {
  await page.goto('/breeds/pomeranian-health', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('By age 3, the majority of toy-breed dogs')
  await expect(page.locator('body')).toContainText('up to 80% of dogs have some level of periodontal disease by age 2')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/digestive-system/dentistry-in-small-animals/periodontal-disease-in-small-animals"]').first()).toBeAttached()
})

test('vets fix BR2: Golden insurance answer drops 60%+ and links its price sources', async ({ page }) => {
  await page.goto('/breeds/golden-retriever-health', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).not.toContainText('60%+ lifetime cancer rate')
  await expect(page.locator('a[href="https://www.dogcancerfoundation.org/blog/cost-dog-chemotherapy"]').first()).toBeAttached()
  await expect(page.locator('a[href="https://hospital.cvm.ncsu.edu/services/small-animals/cancer-oncology/radiation-oncology/radiation-therapy-for-bone-cancer/"]').first()).toBeAttached()
  await expect(page.locator('body')).toContainText('dated 2026-10-13')
})

test('vets fix PC1: senior bloodwork follows AAHA 6–12 months and the fecal FAQ cites differing sources', async ({ page }) => {
  await page.goto('/health/preventive-care-schedule', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).toContainText('Every 6–12 months (AAHA)')
  await page.getByText('How often should my dog have a fecal test?').first().click()
  await expect(page.locator('body')).toContainText('Sources differ.')
  await expect(page.locator('a[href*="2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf"]').first()).toBeAttached()
})

test('vets fix Q5: holiday emergency hero answer is two sentences, not a comma splice', async ({ page }) => {
  await page.goto('/reviews/holiday-emergency-visit-guide', { waitUntil: 'domcontentloaded' })
  const answer = (await page.locator('[data-fold="answer"]').innerText()).replace(/\s+/g, ' ')
  expect(answer).not.toMatch(/, Compare/)
  expect(answer).toContain('on duty overnight. Compare carriers')
})

test('vets fix IQ1: insurance cost and pre-existing answers match NAPHIA and NAIC', async ({ page }) => {
  await page.goto('/insurance/questions/how-much-does-pet-insurance-cost', { waitUntil: 'domcontentloaded' })
  let text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
  expect(text).not.toMatch(/\$30–\$70|\$15–\$40|thirty to seventy/)
  expect(text).toContain('$62.44')
  expect(text).toContain('$32.21')
  await expect(page.locator('a[href="https://naphia.org/news/naphia-news/soi-report-2025/"]').first()).toBeVisible()
  await page.goto('/insurance/questions/does-pet-insurance-cover-pre-existing-conditions', { waitUntil: 'domcontentloaded' })
  text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
  expect(text).not.toMatch(/No pet insurer covers|excluded everywhere/)
  expect(text).toContain('Most pet insurance companies exclude pre-existing conditions')
  await expect(page.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]').first()).toBeVisible()
})

test('vets fix IQ2: insurance Q&A drops unsourced figures and cites NAIC', async ({ page }) => {
  const naic = 'a[href="https://content.naic.org/insurance-topics/pet-insurance"]'
  const pages: Array<[string, RegExp]> = [
    ['multi-pet-discounts', /5–10%|five to ten percent/],
    ['when-should-i-get-pet-insurance', /six to eight weeks|6–8 weeks/],
    ['how-does-the-claims-process-work', /a few days to a few weeks|almost always/],
    ['does-pet-insurance-cover-pre-existing-conditions', /six to eighteen months/],
    ['is-pet-insurance-worth-it', /$^/],
    ['does-pet-insurance-cover-dental', /$^/],
    ['does-pet-insurance-cover-vaccines', /$^/],
  ]
  for (const [slug, banned] of pages) {
    await page.goto(`/insurance/questions/${slug}`, { waitUntil: 'domcontentloaded' })
    const text = (await page.locator('main').innerText()).replace(/\s+/g, ' ')
    expect(text, slug).not.toMatch(banned)
    expect(await page.locator(naic).count(), slug).toBeGreaterThan(0)
  }
})

test('vets fix IQ3: insurance Q&A has no unlinked sample-carrier sources or orphan range dates', async ({ page }) => {
  for (const slug of ['is-pet-insurance-worth-it', 'multi-pet-discounts', 'how-does-the-claims-process-work', 'does-pet-insurance-cover-dental', 'does-pet-insurance-cover-vaccines', 'when-should-i-get-pet-insurance', 'how-much-does-pet-insurance-cost', 'does-pet-insurance-cover-pre-existing-conditions']) {
    await page.goto(`/insurance/questions/${slug}`, { waitUntil: 'domcontentloaded' })
    const text = (await page.locator('body').innerText()).replace(/\s+/g, ' ')
    expect(text, slug).not.toMatch(/Sample carrier|typical US ranges dated 2026-06-11/)
    expect(await page.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]').count(), slug).toBeGreaterThan(0)
  }
})

test('vets fix HB1: insurance hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/insurance', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]')).toBeVisible()
  await expect(page.locator('h2#faq')).toBeVisible()
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  expect(ld.filter((t) => t.includes('"FAQPage"')).length).toBe(1)
})

test('vets fix HB4: /guides hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/guides', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian"]').first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Owner guides FAQ' })).toBeVisible()
})

test('vets fix HB3: find-a-vet hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/find-a-vet', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.avma.org/education/veterinary-specialties"]')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Finding a vet: FAQ' })).toBeVisible()
  expect(await page.locator('main, body').first().innerText()).not.toMatch(/\$70/)
})

test('vets fix HB2: medications hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/medications', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-about-pain-relievers-pets"]')).toBeVisible()
  await expect(page.locator('h2#faq')).toBeVisible()
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  expect(ld.filter((t) => t.includes('"FAQPage"')).length).toBe(1)
})

test('vets fix HB7: /reviews hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/reviews', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://content.naic.org/insurance-topics/pet-insurance"]').first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Reviews FAQ' })).toBeVisible()
})

test('vets fix HB6: /breeds hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/breeds', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://ofa.org/chic-programs/"]').first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Breed health FAQ' })).toBeVisible()
})

test('vets fix HB5: /tools hub answers first and has a sourced FAQ', async ({ page }) => {
  await page.goto('/tools', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian"]').first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Tools FAQ' })).toBeVisible()
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  expect(ld.filter((t) => t.includes('"FAQPage"')).length).toBe(1)
})

test('vets fix TR1: health and symptoms hubs follow Merck triage timing and cite it', async ({ page }) => {
  for (const path of ['/health', '/symptoms']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const text = await page.locator('body').innerText()
    expect(text).not.toMatch(/refusing food for (over|more than) a day/i)
    expect(text).not.toMatch(/not eating for more than a day/i)
    expect(text).toMatch(/not eating or drinking for 24 hours|no eating or drinking for 24 hours/i)
    expect(text).toMatch(/General references \(not checked against each statement on this page\)/)
    await expect(page.locator('a[href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian"]').first()).toBeVisible()
  }
})

test('vets fix HB8: diagnostics, specialists, telehealth and triage card open with a sourced short answer', async ({ page }) => {
  const cases: [string, string][] = [
    ['/diagnostics', 'https://www.merckvetmanual.com/special-pet-topics/diagnostic-tests-and-imaging/common-laboratory-tests-in-veterinary-medicine'],
    ['/specialists', 'https://www.avma.org/education/veterinary-specialties'],
    ['/telehealth', 'https://www.avma.org/resources-tools/animal-health-and-welfare/telehealth-telemedicine-veterinary-practice'],
    ['/emergency-triage-card', 'https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian'],
  ]
  for (const [path, src] of cases) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    const box = page.getByTestId('short-answer')
    await expect(box).toBeVisible()
    await expect(box.locator(`a[href="${src}"]`)).toBeVisible()
  }
  const text = await page.locator('body').innerText()
  expect(text).not.toContain('Single seizure, fully recovered')
  expect(text).not.toMatch(/Not eating for 24 h \(cats/)
  expect(text).toContain('Any seizure, even one that has stopped')
})

test('vets fix DV1: dog vaccination guide opens with a sourced short answer and softened schedule claims', async ({ page }) => {
  await page.goto('/health/dog-vaccinations-guide', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations"]')).toBeVisible()
  await expect(box.locator('a[href="https://wsava.org/wp-content/uploads/2025/06/Dogs-Vaccination-Table.pdf"]')).toBeVisible()
  const text = await page.locator('body').innerText()
  expect(text).not.toContain('Required by law in virtually all US states')
  expect(text).not.toContain('Northeast, Upper Midwest, Pacific Northwest')
  expect(text).not.toContain('within 72 hours')
  expect(text).not.toContain('same-day results')
  expect(text).toContain('general reference; not checked against this page')
})

test('vets fix DV2: dog vaccination supplies copy drops unsourced 72-hour and Vaccicheck claims, shop hops intact', async ({ page }) => {
  await page.goto('/health/dog-vaccinations-guide', { waitUntil: 'domcontentloaded' })
  const text = await page.locator('body').innerText()
  expect(text).not.toMatch(/72[- ]hour/i)
  expect(text).not.toContain('Vaccicheck')
  expect(text).not.toContain('same-day printout')
  await expect(page.locator('a[href="/go/amazon-brand/soft+sided+dog+crate?s=health-dog-vaccinations-guide"]').first()).toBeVisible()
  await expect(page.locator('a[href="/go/amazon-brand/collapsible+silicone+travel+dog+bowl?s=health-dog-vaccinations-guide"]').first()).toBeVisible()
  await expect(page.getByText('Browse soft-sided dog crates on Amazon').first()).toBeVisible()
})

test('vets fix ES1: emergency-signs list matches Merck/AVMA (any seizure, no unsourced time windows)', async ({ page }) => {
  await page.goto('/health/emergency-signs', { waitUntil: 'domcontentloaded' })
  const text = await page.locator('body').innerText()
  await expect(page.getByRole('heading', { name: 'Any seizure' })).toBeVisible()
  expect(text).not.toContain('2-3 minutes')
  expect(text).not.toContain('single brief seizure in a known epileptic dog may not be')
  expect(text).not.toContain('most effective within 30–60 minutes')
  expect(text).not.toContain('permanent vision loss within hours')
  expect(text).not.toContain('surgical window for recovery from paralysis is 24–48 hours')
  expect(text).not.toContain('Dogs do not pant in distress')
  expect(text).toContain('seizure longer than 5 minutes')
  await expect(page.locator('a[href="https://www.merckvetmanual.com/multimedia/table/when-to-see-a-veterinarian"]').first()).toBeVisible()
})

test('vets fix TL1: when-to-go and ER-vs-urgent guides show no 72-hour timer claim', async ({ page }) => {
  for (const path of ['/guides/when-to-go-to-the-vet', '/guides/er-vs-urgent-care']) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    expect(await page.locator('body').innerText()).not.toMatch(/72[- ]hour/i)
    await expect(page.locator('a[href^="/go/amazon-brand/"]').first()).toBeVisible()
  }
})

test('vets fix PX1: heartworm, intestinal parasites and leptospirosis match AHS/FDA, CAPC and AVMA', async ({ page }) => {
  await page.goto('/health/heartworm-in-dogs', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics"]')).toBeVisible()
  let text = await page.locator('body').innerText()
  expect(text).not.toContain('Federal regulations require annual testing')
  expect(text).not.toContain('2 doses of melarsomine')
  expect(text).not.toContain('57 degrees')
  expect(text).toContain('three separate melarsomine injections')
  await page.goto('/health/intestinal-parasites', { waitUntil: 'domcontentloaded' })
  text = await page.locator('body').innerText()
  expect(text).not.toContain('combined with fenbendazole (5 days) has better clearance')
  expect(text).not.toContain('then monthly until 6 months')
  await page.goto('/health/leptospirosis', { waitUntil: 'domcontentloaded' })
  text = await page.locator('body').innerText()
  expect(text).not.toContain('non-core vaccine')
  expect(text).not.toContain('Southeast US, Pacific Northwest')
  expect(text).toContain('experts recommend vaccinating all dogs')
})

test('vets fix HW2: heartworm supplies copy uses vet-set rest wording, hops intact', async ({ page }) => {
  await page.goto('/health/heartworm-in-dogs', { waitUntil: 'domcontentloaded' })
  expect(await page.locator('body').innerText()).not.toMatch(/8-week/)
  await expect(page.locator('a[href^="/go/amazon-brand/"]').first()).toBeVisible()
})

test('vets fix DB1: diabetes page opens with an AVMA-sourced short answer and AVMA emergency timing', async ({ page }) => {
  await page.goto('/health/diabetes-in-dogs-cats', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.avma.org/resources-tools/pet-owners/petcare/diabetes-pets"]')).toBeVisible()
  const text = await page.locator('body').innerText()
  expect(text).not.toContain('Seek emergency veterinary care the same day')
  expect(text).not.toContain('Dogs almost never go into remission')
  expect(text).toContain('SGLT2')
})

test('vets fix SK1: senior bloodwork, eye conditions and cat kidney pages drop unsourced figures; kidney page has a Merck short answer', async ({ page }) => {
  await page.goto('/health/kidney-disease-cats', { waitUntil: 'domcontentloaded' })
  const box = page.getByTestId('short-answer')
  await expect(box).toBeVisible()
  await expect(box.locator('a[href="https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/renal-dysfunction-in-dogs-and-cats"]')).toBeVisible()
  let text = await page.locator('body').innerText()
  expect(text).not.toMatch(/30-40% of cats|2-3 years or longer|as little as 25%/)
  await page.goto('/health/senior-bloodwork-guide', { waitUntil: 'domcontentloaded' })
  text = await page.locator('body').innerText()
  expect(text).not.toContain('approximately 25% of kidney function')
  await expect(page.getByText('Short answer').first()).toBeVisible()
  await page.goto('/health/dog-eye-conditions', { waitUntil: 'domcontentloaded' })
  text = await page.locator('body').innerText()
  expect(text).not.toMatch(/vision loss within hours|30-40% of the tear film|within 4-8 weeks/)
  await expect(page.getByText('Short answer').first()).toBeVisible()
})

test('vets fix ST1: mobile sticky bar appears after scrolling with internal next steps', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/health/anxiety-in-dogs', { waitUntil: 'load' })
  const bar = page.getByTestId('mobile-sticky-cta')
  await expect(bar).toHaveAttribute('aria-hidden', 'true')
  await page.mouse.wheel(0, 1500)
  await expect(bar).toHaveAttribute('aria-hidden', 'false')
  await expect(bar.locator('a[href="/emergency-triage-card"]')).toBeVisible()
  await expect(bar.locator('a[href="/reviews/best-pet-insurance"]')).toBeVisible()
  await expect(bar.locator('a[href*="/go/"]')).toHaveCount(0)
  await bar.getByRole('button', { name: 'Close' }).click()
  await expect(bar).toHaveCount(0)
})

test('vets fix PH1: health pages shop topic-matched care products, not paperwork', async ({ page }) => {
  const expectations: Record<string, string> = {
    '/health/canine-influenza': 'digital+pet+thermometer',
    '/health/dog-vaccinations-guide': 'soft+sided+dog+crate',
    '/health/pain-management-dogs': 'orthopedic+dog+bed',
    '/health/senior-bloodwork-guide': 'digital+pet+scale',
    '/health/vomiting-diarrhea-pets': 'quilted+disposable+underpads',
  }
  for (const [path, slug] of Object.entries(expectations)) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator(`a[href^="/go/amazon-brand/${slug}?"]`).first(), path).toBeAttached()
    expect(await page.content(), path).not.toMatch(/amazon-brand\/(analog\+wall\+clock|72\+hour\+digital|hardcover\+weekly|wall\+mounted\+magnetic|12\+hour\+mechanical|letter\+size|dog\+weight\+log|pocket\+spiral)/)
  }
})
