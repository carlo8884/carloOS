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
  siteId: 'ferret-com',
  title: 'Is This a Ferret Emergency? Symptom Triage | Ferret.com',
  description:
    'Check ferret signs against exotic-mammal emergency criteria for a conservative urgency read: go now, same-day vet, or monitor. A triage aid, not a diagnosis.',
  path: '/tools/is-this-a-ferret-emergency',
})

const SOURCES = [
  { label: 'Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. — ferret emergency presentation and critical-care chapters', url: 'https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7', publisher: 'Elsevier/Saunders' },
  { label: 'Merck Veterinary Manual: Routine Health Care of Ferrets — emergency vs wait presentations', url: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/routine-health-care-of-ferrets', publisher: 'Merck Vet Manual' },
  { label: 'Association of Exotic Mammal Veterinarians (AEMV) — exotic-mammal emergency care and practitioner directory', url: 'https://aemv.org', publisher: 'AEMV' },
  { label: 'ASPCA Animal Poison Control Center: Pet Poison Information', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
  { label: 'AVMA: Emergency Care for Pets — Warning Signs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergencies-pets', publisher: 'AVMA' },
]

const FAQS = [
  {
    question: 'Is this tool a diagnosis?',
    answer:
      'No. This tool helps you decide how urgently to seek care — it does not diagnose your ferret, and it does not tell you what is wrong. Only a veterinarian can diagnose your ferret. The tool matches the signs you select against ferret emergency-vs-wait criteria and returns a conservative urgency read. If you are ever unsure, treat it as urgent and call your exotic-mammal vet or nearest ferret-capable emergency clinic.',
    answerText:
      'No. It helps you decide how urgently to seek care; it does not diagnose. Only a veterinarian can diagnose your ferret. When unsure, call your exotic-mammal vet or emergency clinic.',
  },
  {
    question: 'What do the three results mean?',
    answer:
      'Go now means at least one sign you selected can be a life-threatening emergency — go to a ferret-capable emergency vet immediately and do not wait for another symptom. Same-day vet means the signs warrant exotic-mammal attention within 24 hours, or sooner if anything worsens. Monitor closely applies only to a single mild episode of two specific signs (one isolated mild sneeze, or missing one meal in an otherwise bright, energetic ferret that is still drinking) — and it still tells you to call your vet if it persists, worsens, repeats, or you are unsure. Ferrets escalate faster than dogs. If you select signs from more than one level, the result always reflects the most urgent one.',
    answerText:
      'Go now = possible life-threatening emergency, go immediately. Same-day vet = see an exotic-mammal vet within 24 hours, sooner if it worsens. Monitor closely = a single mild sneeze or one skipped meal with normal energy, but call your vet if it persists, worsens, or you are unsure. Mixed selections resolve to the most urgent.',
  },
  {
    question: 'How is this different from the emergency warning signs guide?',
    answer:
      'The emergency warning signs page is the prose reference — why ferrets crash fast and what each can’t-wait sign can mean. This page is a sign-list triage: it answers how urgently to seek care (go now / same-day / monitor) from the signs you check. It does not replace the guide, and it does not diagnose.',
    answerText:
      'The warning-signs guide is the prose reference. This page is a ferret-only sign-list urgency read (go now / same-day / monitor). Neither diagnoses.',
  },
  {
    question: 'What if my ferret has a sign that is not on the list?',
    answer:
      'This tool covers 15 well-defined ferret signs drawn from exotic-mammal emergency-medicine and Ferret.com health references. It is not exhaustive. If your ferret is showing anything that worries you — even if it is not listed here — call your exotic-mammal vet or nearest ferret-capable emergency clinic. Absence from this list is never a reason to wait. When in doubt, seek care.',
    answerText:
      'The list is not exhaustive. If anything worries you, call your exotic-mammal vet or emergency clinic — absence from the list is never a reason to wait.',
  },
  {
    question: 'Should I call before driving in?',
    answer:
      'Yes, when you safely can. Not every clinic treats ferrets. Most emergency hospitals will advise over the phone whether they will see a ferret and can prepare for your arrival. If you suspect poisoning — including chocolate, xylitol, or ibuprofen — call ASPCA Animal Poison Control at 888-426-4435 (available 24/7, a consultation fee applies) and your emergency vet at the same time. Never delay leaving for a true emergency in order to make a call.',
    answerText:
      'Yes when you safely can — confirm the clinic sees ferrets and can prepare. For suspected poisoning, including chocolate, xylitol, or ibuprofen, call ASPCA Animal Poison Control (888-426-4435) and your vet simultaneously. Never delay leaving for a true emergency to make a call.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Is This a Ferret Emergency?', url: 'https://ferret.com/tools/is-this-a-ferret-emergency' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Is This a Ferret Emergency? Symptom Triage Tool',
  description:
    'Select the signs you are seeing in your ferret and get a conservative urgency read (go now / same-day vet / monitor closely) based on exotic-mammal emergency-medicine criteria. A triage aid, not a diagnosis.',
  url: 'https://ferret.com/tools/is-this-a-ferret-emergency',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Conservative urgency read: go now, same-day vet, or monitor closely',
    '15 ferret signs drawn from exotic-mammal emergency-medicine criteria',
    'Always rounds toward more care; no all-clear result',
    'Shoppable ferret emergency-prep kit via Amazon category searches (pet first-aid kit, digital pet thermometer, soft pet carrier, styptic powder, wound-care gauze)',
  ],
}

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Is This a Ferret Emergency? Symptom Triage Tool',
  description:
    'A conservative triage aid that matches ferret symptoms against exotic-mammal emergency-medicine criteria to help owners decide how urgently to seek care. Not a diagnosis.',
  url: 'https://ferret.com/tools/is-this-a-ferret-emergency',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-09-03',
})

const howToSchema = buildHowToSchema({
  name: 'How to assess whether your ferret needs emergency care',
  description: 'Use the ferret symptom checklist to get a conservative urgency read — go now, same-day vet, or monitor closely — based on exotic-mammal emergency-medicine criteria.',
  url: 'https://ferret.com/tools/is-this-a-ferret-emergency',
  steps: [
    {
      name: 'Check for immediately life-threatening signs first',
      text: 'If your ferret is struggling to breathe, has collapsed, cannot urinate, was injured, or you suspect chocolate, xylitol, ibuprofen, or other poisoning, go to a ferret-capable emergency vet immediately without waiting for any tool. Call ASPCA Poison Control (888-426-4435) for suspected ingestion.',
    },
    {
      name: 'Select every sign you are currently observing',
      text: 'Work through the symptom checklist and check every sign you are seeing. The tool covers 15 well-defined ferret signs drawn from exotic-mammal emergency-medicine references.',
    },
    {
      name: 'Read the urgency result',
      text: 'The tool returns the most urgent result among your selections: "Go now" (possible life-threatening emergency — go immediately), "Same-day vet" (attention within 24 hours), or "Monitor closely" (a single mild sneeze or one skipped meal with normal energy, but still call your vet if it persists or worsens).',
    },
    {
      name: 'Act on the result conservatively',
      text: 'If you receive "Go now," go to a ferret-capable emergency clinic immediately. If anything worries you beyond what is listed, call your exotic-mammal vet — absence from the list is never a reason to wait.',
    },
  ],
})

// Exactly ONE BreadcrumbList across the page.
const schema = combineSchemas(breadcrumbSchema, appSchema, medicalSchema, howToSchema)

export default function IsThisAFerretEmergencyPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
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
            Is This a Ferret Emergency?
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Check the ferret signs you are seeing and get a conservative urgency read — go now, same-day vet, or
            monitor closely — using emergency-vs-wait criteria from exotic-mammal emergency medicine.
            This tool helps you decide how urgently to seek care. It does not diagnose your ferret.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Is This a Ferret Emergency?</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fridge sheet
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret emergency-signs triage cheat sheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fridge ferret-triage cheat sheet — the go-now / same-day / monitor
            recap plus a shoppable emergency-prep kit (first-aid, thermometer,
            soft carrier, styptic powder, wound-care gauze) — so you can re-check
            signs later without re-reading the list. A triage aid, not a
            diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret emergency-signs triage cheat sheet"
            subtitle="Email the fridge ferret-triage cheat sheet and emergency-signs recap. No spam."
            ctaText="Email my ferret triage cheat sheet"
            source="tools-is-this-a-ferret-emergency-under-hero"
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
              If your ferret is struggling to breathe, collapsed, unable to urinate, bleeding heavily, or you
              suspect chocolate, xylitol, ibuprofen, or other poisoning —{' '}
              <strong>call your nearest ferret-capable emergency vet or ASPCA Animal Poison Control (888-426-4435) now.</strong>{' '}
              Do not wait for this tool. When in doubt, seek care.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/find-an-exotic-vet"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find a ferret-capable emergency vet →
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

      {/* Money path — live amazon-brand search hops (ferret emergency-prep / first-aid kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="ferret-emergency-prep-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a ferret emergency-prep kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are cabinet and car items for
              ferret emergency prep — a pet first-aid kit, a digital pet thermometer,
              a soft pet carrier, styptic powder, and wound-care gauze. They are not
              a ranked product list, not invented inventory, and they do not
              diagnose, treat, or replace emergency care. If a sign looks
              life-threatening, go to a ferret-capable emergency vet now; this kit is for
              planning ahead, not for waiting on a crisis. Ferret.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+first+aid+kit?s=tools-is-this-a-ferret-emergency"
                amazonLabel="Browse pet first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+thermometer?s=tools-is-this-a-ferret-emergency"
                amazonLabel="Browse digital pet thermometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+pet+carrier?s=tools-is-this-a-ferret-emergency"
                amazonLabel="Browse soft pet carriers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/styptic+powder?s=tools-is-this-a-ferret-emergency"
                amazonLabel="Browse styptic powder on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/wound+care+gauze?s=tools-is-this-a-ferret-emergency"
                amazonLabel="Browse wound-care gauze on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calm, non-emergency footer — insurance basics + non-ER telehealth.
          Deliberately AFTER the tool, never inside/above a verdict.
          Insurance link is the educational basics page — not a product ranking. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              After the emergency
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Emergency and surgical care is among the most expensive a ferret owner faces. Once things have
              settled, reading how exotic-pet insurance works — or sizing an emergency fund with the cost
              calculator — can protect against the next crisis. For a stable, non-emergency question — not
              collapse, not trouble breathing, not a blocked bladder — talk to a licensed vet on a screen
              rather than waiting for a gap to become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="ferret-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="/ownership/ferret-insurance-basics"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Ferret insurance basics →
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
            sooner if it worsens), and <strong>monitor closely</strong> (reserved for a single mild sneeze or
            one skipped meal with normal energy, and it still tells you to call your vet if anything persists,
            worsens, or you are unsure). There is deliberately no &quot;all clear&quot; result.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the full write-up of each can&apos;t-wait sign and the reasoning behind it, see the{' '}
            <Link
              href="/health/emergency-warning-signs"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              ferret emergency warning signs
            </Link>{' '}
            guide. If the sign is a swallowed object or a hard belly, read{' '}
            <Link
              href="/health/gastrointestinal-blockage"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              gastrointestinal blockage
            </Link>
            . Collapse and stargazing overlap with{' '}
            <Link
              href="/health/insulinoma"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              insulinoma
            </Link>
            . Chocolate, xylitol, and ibuprofen live on{' '}
            <Link
              href="/care/toxic-foods"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              toxic foods
            </Link>
            . To find ferret-capable care, use{' '}
            <Link href="/find-an-exotic-vet" className="text-brand-primary underline-offset-2 hover:underline">
              find an exotic vet
            </Link>
            . For a calm facial pain-watch that is not a diagnosis, use the{' '}
            <Link href="/tools/ferret-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              ferret grimace scale
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
              { label: 'Emergency Warning Signs', href: '/health/emergency-warning-signs', note: 'The prose guide behind this tool' },
              { label: 'Find an Exotic Vet', href: '/find-an-exotic-vet', note: 'Line up ferret-capable ER before a crisis' },
              { label: 'Gastrointestinal Blockage', href: '/health/gastrointestinal-blockage', note: 'Why a hard belly is treat-as-ER' },
              { label: 'Insulinoma', href: '/health/insulinoma', note: 'Collapse, weakness, and hypoglycemic crisis' },
              { label: 'Toxic Foods', href: '/care/toxic-foods', note: 'Chocolate, xylitol, ibuprofen, and more' },
              { label: 'Cost Calculator', href: '/tools/cost-calculator', note: 'Size the emergency-fund line' },
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator', note: 'Human-year estimate and kit / young adult / mature / senior label' },
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score', note: '1–9 planning score from rib feel, waist, and belly — not a diagnosis' },
              { label: 'Ferret Grimace Scale', href: '/tools/ferret-grimace-scale', note: 'Facial pain-watch, not a diagnosis' },
              { label: 'Readiness Quiz', href: '/tools/readiness-quiz', note: 'Score household fit, then pack the kit' },
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

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
