import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  ArticleSourcesList,
  CrossPortfolioCard,
  EmailCapture,
  ShopCtas,
} from '@carloOS/ui'
import TriageHelper from './TriageHelper'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Is This a Horse Emergency? Symptom Triage | Horses.com',
  description:
    'Check horse signs against equine emergency criteria for a conservative urgency read: go now, same-day vet, or monitor. A triage aid, not a diagnosis.',
  path: '/tools/is-this-a-horse-emergency',
})

const SOURCES = [
  { label: 'AAEP: Colic — owner resources and emergency recognition', url: 'https://aaep.org/horsehealth/colic', publisher: 'AAEP' },
  { label: 'AAEP: First Aid and Emergency Preparedness — owner resources', url: 'https://aaep.org', publisher: 'AAEP' },
  { label: 'Merck Veterinary Manual: Colic in Horses — emergency presentation', url: 'https://www.merckvetmanual.com/horse-owners/digestive-disorders-of-horses/colic-in-horses', publisher: 'Merck Vet Manual' },
  { label: 'Merck Veterinary Manual: Laminitis in Horses', url: 'https://www.merckvetmanual.com/horse-owners/bone-joint-and-muscle-disorders-of-horses/laminitis-in-horses', publisher: 'Merck Vet Manual' },
  { label: 'ASPCA Animal Poison Control Center: Pet Poison Information', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
]

const FAQS = [
  {
    question: 'Is this tool a diagnosis?',
    answer:
      'No. This tool helps you decide how urgently to seek care — it does not diagnose your horse, and it does not tell you what is wrong. Only a veterinarian can diagnose your horse. The tool matches the signs you select against equine emergency-vs-wait criteria and returns a conservative urgency read. If you are ever unsure, treat it as urgent and call your equine veterinarian or nearest equine emergency clinic.',
    answerText:
      'No. It helps you decide how urgently to seek care; it does not diagnose. Only a veterinarian can diagnose your horse. When unsure, call your equine veterinarian or emergency clinic.',
  },
  {
    question: 'What do the three results mean?',
    answer:
      'Go now means at least one sign you selected can be a life-threatening emergency — call your equine veterinarian immediately and do not wait for another symptom. Same-day vet means the signs warrant equine attention within 24 hours, or sooner if anything worsens. Monitor closely applies only to a single mild episode of two specific signs (one isolated mild scrape, or one skipped handful of grain with normal manure and energy) — and it still tells you to call your vet if it persists, worsens, repeats, or you are unsure. If you select signs from more than one level, the result always reflects the most urgent one.',
    answerText:
      'Go now = possible life-threatening emergency, call immediately. Same-day vet = see an equine veterinarian within 24 hours, sooner if it worsens. Monitor closely = an isolated mild scrape or one skipped handful of grain with normal manure and energy, but call your vet if it persists, worsens, or you are unsure. Mixed selections resolve to the most urgent.',
  },
  {
    question: 'How is this different from the colic and first-aid guides?',
    answer:
      'The colic, choke, laminitis, and first-aid pages are the prose references — why each sign matters and what to stock. This page is a sign-list triage: it answers how urgently to seek care (go now / same-day / monitor) from the signs you check. It does not replace those guides, and it does not diagnose.',
    answerText:
      'The health and first-aid pages are the prose references. This page is a horse-only sign-list urgency read (go now / same-day / monitor). Neither diagnoses.',
  },
  {
    question: 'What if my horse has a sign that is not on the list?',
    answer:
      'This tool covers 15 well-defined equine signs drawn from Horses.com health and first-aid references. It is not exhaustive. If your horse is showing anything that worries you — even if it is not listed here — call your equine veterinarian or nearest equine emergency clinic. Absence from this list is never a reason to wait. When in doubt, seek care.',
    answerText:
      'The list is not exhaustive. If anything worries you, call your equine veterinarian or emergency clinic — absence from the list is never a reason to wait.',
  },
  {
    question: 'Should I call before hauling in?',
    answer:
      'Yes, when you safely can. Most equine practices will advise over the phone whether to come in, stay put, or haul to a referral hospital, and can prepare for your arrival. If you suspect poisoning, call ASPCA Animal Poison Control at 888-426-4435 (available 24/7, a consultation fee applies) and your veterinarian at the same time. Never delay leaving for a true emergency in order to make a call.',
    answerText:
      'Yes when you safely can — clinics can advise whether to stay, come in, or haul to referral. For suspected poisoning, call ASPCA Animal Poison Control (888-426-4435) and your vet simultaneously. Never delay leaving for a true emergency to make a call.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
    { name: 'Is This a Horse Emergency?', url: 'https://horses.com/tools/is-this-a-horse-emergency' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Is This a Horse Emergency? Symptom Triage Tool',
  description:
    'Select the signs you are seeing in your horse and get a conservative urgency read (go now / same-day vet / monitor closely) based on equine emergency-medicine criteria. A triage aid, not a diagnosis.',
  url: 'https://horses.com/tools/is-this-a-horse-emergency',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Conservative urgency read: go now, same-day vet, or monitor closely',
    '15 equine signs drawn from colic, choke, laminitis, lameness, and first-aid criteria',
    'Always rounds toward more care; no all-clear result',
    'Shoppable equine emergency-prep kit via Amazon category searches (equine first-aid kit, digital veterinary thermometer, vet wrap bandage, poultice, horse electrolytes)',
  ],
}

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Is This a Horse Emergency? Symptom Triage Tool',
  description:
    'A conservative triage aid that matches horse symptoms against equine emergency-medicine criteria to help owners decide how urgently to seek care. Not a diagnosis.',
  url: 'https://horses.com/tools/is-this-a-horse-emergency',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-09-03',
})

const howToSchema = buildHowToSchema({
  name: 'How to assess whether your horse needs emergency care',
  description: 'Use the equine symptom checklist to get a conservative urgency read — go now, same-day vet, or monitor closely — based on equine emergency-medicine criteria.',
  url: 'https://horses.com/tools/is-this-a-horse-emergency',
  steps: [
    {
      name: 'Check for immediately life-threatening signs first',
      text: 'If your horse is rolling, choking, non-weight-bearing, bleeding heavily, or down and cannot rise, call your equine veterinarian immediately without waiting for any tool. Call ASPCA Poison Control (888-426-4435) for suspected ingestion.',
    },
    {
      name: 'Select every sign you are currently observing',
      text: 'Work through the symptom checklist and check every sign you are seeing. The tool covers 15 well-defined equine signs drawn from Horses.com colic, choke, laminitis, lameness, and first-aid references.',
    },
    {
      name: 'Read the urgency result',
      text: 'The tool returns the most urgent result among your selections: "Go now" (possible life-threatening emergency — call immediately), "Same-day vet" (attention within 24 hours), or "Monitor closely" (an isolated mild scrape or one skipped handful of grain with normal manure and energy, but still call your vet if it persists or worsens).',
    },
    {
      name: 'Act on the result conservatively',
      text: 'If you receive "Go now," call your equine veterinarian immediately. If anything worries you beyond what is listed, call your vet — absence from the list is never a reason to wait.',
    },
  ],
})

// Exactly ONE BreadcrumbList across the page.
const schema = combineSchemas(breadcrumbSchema, appSchema, medicalSchema, howToSchema)

export default function IsThisAHorseEmergencyPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Emergency Triage Tool
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Is This a Horse Emergency?
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Check the equine signs you are seeing and get a conservative urgency read — go now, same-day vet, or
            monitor closely — using emergency-vs-wait criteria from equine emergency medicine.
            This tool helps you decide how urgently to seek care. It does not diagnose your horse.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Is This a Horse Emergency?</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fridge sheet
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse emergency-signs triage cheat sheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fridge horse-triage cheat sheet — the go-now / same-day / monitor
            recap plus a shoppable emergency-prep kit (equine first-aid, digital
            veterinary thermometer, vet wrap, poultice, horse electrolytes) — so you can re-check
            signs later without re-reading the list. A triage aid, not a
            diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse emergency-signs triage cheat sheet"
            subtitle="Email the fridge horse-triage cheat sheet and emergency-signs recap. No spam."
            ctaText="Email my horse triage cheat sheet"
            source="tools-is-this-a-horse-emergency-under-hero"
          />
        </div>
      </section>

      {/* PERSISTENT TOP BANNER — renders above the checklist on every state */}
      <section className="px-container-sm sm:px-container pt-section">
        <div className="max-w-5xl">
          <div
            role="alert"
            className="rounded-xl p-5 sm:p-6"
            style={{ background: 'rgba(200,74,42,0.07)', border: '2px solid rgba(200,74,42,0.45)' }}
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: '#C84A2A' }}>
              Do not wait for this tool
            </div>
            <p className="text-sm sm:text-base text-brand-dark leading-relaxed m-0">
              If your horse is rolling, choking, non-weight-bearing, bleeding heavily, or down and cannot rise —{' '}
              <strong>call your equine veterinarian or ASPCA Animal Poison Control (888-426-4435) now.</strong>{' '}
              Do not wait for this tool. When in doubt, seek care.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/ownership/choosing-a-vet"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find an equine veterinarian →
              </Link>
              <span className="inline-flex items-center text-sm text-brand-text-mid">
                ASPCA Poison Control:&nbsp;<span className="font-bold text-brand-dark">888-426-4435</span>&nbsp;(24/7)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Triage helper */}
      <section className="px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <TriageHelper />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (equine emergency-prep / first-aid kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="horse-emergency-prep-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop an equine emergency-prep kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are barn and trailer items for
              equine emergency prep — an equine first-aid kit, a digital veterinary thermometer,
              vet wrap bandage, poultice, and horse electrolytes. They are not
              a ranked product list, not invented inventory, and they do not
              diagnose, treat, or replace emergency care. If a sign looks
              life-threatening, call your equine veterinarian now; this kit is for
              planning ahead, not for waiting on a crisis. Horses.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+first+aid+kit?s=tools-is-this-a-horse-emergency"
                amazonLabel="Browse equine first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+veterinary+thermometer?s=tools-is-this-a-horse-emergency"
                amazonLabel="Browse digital veterinary thermometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/vet+wrap+bandage?s=tools-is-this-a-horse-emergency"
                amazonLabel="Browse vet wrap bandages on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/poultice?s=tools-is-this-a-horse-emergency"
                amazonLabel="Browse poultices on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+electrolytes?s=tools-is-this-a-horse-emergency"
                amazonLabel="Browse horse electrolytes on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calm, non-emergency footer — insurance basics + non-ER telehealth.
          Deliberately AFTER the tool, never inside/above a verdict.
          Insurance link is the educational page — not a product ranking. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              After the emergency
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Emergency and surgical care is among the most expensive a horse owner faces. Once things have
              settled, reading how horse insurance works — or sizing an emergency fund with the cost
              calculator — can protect against the next crisis. For a stable, non-emergency question — not
              rolling, not choke, not a horse that cannot rise — talk to a licensed vet on a screen
              rather than waiting for a gap to become an ER haul.
            </p>
            <AffiliateDisclosure variant="inline" siteId="horses-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/ownership/horse-insurance"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Horse insurance basics →
              </Link>
              <a
                href="https://vets.co/telehealth"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to use + scope */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How this triage tool works
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Select every sign you are seeing. The tool returns the most urgent result among your selections —
            it always rounds toward more care, never less. There are three results: <strong>go now</strong>{' '}
            (a possible life-threatening emergency), <strong>same-day vet</strong> (attention within 24 hours,
            sooner if it worsens), and <strong>monitor closely</strong> (reserved for an isolated mild scrape or
            one skipped handful of grain with normal manure and energy, and it still tells you to call your vet if anything persists,
            worsens, or you are unsure). There is deliberately no &quot;all clear&quot; result.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the full write-up of colic signs and why early trivial and catastrophic cases look alike, see{' '}
            <Link
              href="/health/colic"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              equine colic
            </Link>
            . Choke — esophageal, not airway — is covered on{' '}
            <Link
              href="/health/choke"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              choke in horses
            </Link>
            . Bounding pulses and the sawhorse stance live on{' '}
            <Link
              href="/health/laminitis"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              equine laminitis
            </Link>
            . What to stock before you need it is the{' '}
            <Link
              href="/ownership/first-aid-kit"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              equine first-aid kit
            </Link>
            . To line up emergency cover before a crisis, use{' '}
            <Link href="/ownership/choosing-a-vet" className="text-brand-primary underline-offset-2 hover:underline">
              choosing an equine vet
            </Link>
            . For a calm facial pain-watch that is not a diagnosis, use the{' '}
            <Link href="/tools/horse-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              horse grimace scale
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />

          <div className="mt-8">
            <ArticleSourcesList sources={SOURCES} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Guides &amp; Tools</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Equine Colic', href: '/health/colic', note: 'The prose guide behind the colic red flags' },
              { label: 'Choke in Horses', href: '/health/choke', note: 'Esophageal obstruction — still an emergency' },
              { label: 'Equine Laminitis', href: '/health/laminitis', note: 'Bounding pulse, pottery gait, founder' },
              { label: 'Equine First-Aid Kit', href: '/ownership/first-aid-kit', note: 'What to pack before you need it' },
              { label: 'Choosing an Equine Vet', href: '/ownership/choosing-a-vet', note: 'Line up emergency cover before a crisis' },
              { label: 'Lameness Basics', href: '/health/lameness-basics', note: 'AAEP 0–5 grades and when to call' },
              { label: 'Horse Cost Calculator', href: '/tools/horse-cost-calculator', note: 'Size the emergency-fund line' },
              { label: 'Horse Age Calculator', href: '/tools/horse-age-calculator', note: 'Human-year estimate and foal / young / adult / senior label' },
              { label: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale', note: 'Facial pain-watch, not a diagnosis' },
              { label: 'Talk to a vet (telehealth)', href: 'https://vets.co/telehealth', note: 'Stable, non-emergency questions' },
            ].map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="footer" />
    </>
  )
}
