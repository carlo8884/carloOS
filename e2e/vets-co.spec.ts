import { expect, test } from '@playwright/test'
import { expectAAContrast } from './contrast'
import { expectMoneyCopy, reviewRoutes } from './money-copy'
import { expectHop } from './hop'
import { AMAZON_TAG, TRUPANION_TAG } from './tags'

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

  const ld = await page.locator('script[type="application/ld+json"]').allTextContents()
  const nodes: { name?: string; description?: string }[] = []
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk)
    else if (v && typeof v === 'object') {
      nodes.push(v as { name?: string; description?: string })
      Object.values(v).forEach(walk)
    }
  }
  ld.forEach((text) => walk(JSON.parse(text)))
  const healthyPaws = nodes.find((n) => n.name === 'Healthy Paws Pet Insurance')
  expect(healthyPaws?.description).toContain('most claims are processed in 2 days')
  expect(healthyPaws?.description).not.toMatch(/average|~/)
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
      const node = v as { '@type'?: string; name?: string }
      if (node['@type'] === 'Product' && node.name) names.push(node.name)
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
