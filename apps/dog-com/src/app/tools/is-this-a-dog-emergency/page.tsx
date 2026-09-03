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
  siteId: 'dog-com',
  title: 'Is This a Dog Emergency? Symptom Triage Tool | Dog.com',
  description:
    'Check your dog\'s symptoms against veterinary emergency criteria for a conservative urgency read: go now, same-day vet, or monitor. A triage aid, not diagnosis.',
  path: '/tools/is-this-a-dog-emergency',
})

const SOURCES = [
  { label: 'AVMA: Emergency Care for Pets — Warning Signs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergencies-pets', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Emergency and Critical Care Overview for Small Animals', url: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/critical-care-medicine/overview-of-critical-care-medicine', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Emergency and Critical Care Standards', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/emergency-and-critical-care-guidelines/', publisher: 'AAHA' },
  { label: 'ASPCA Animal Poison Control Center: Pet Poison Information', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
]

const FAQS = [
  {
    question: 'Is this tool a diagnosis?',
    answer:
      'No. This tool helps you decide how urgently to seek care — it does not diagnose your dog, and it does not tell you what is wrong. Only a veterinarian can diagnose your dog. The tool matches the signs you select against the same emergency-vs-wait criteria used in veterinary emergency medicine and returns a conservative urgency read. If you are ever unsure, treat it as urgent and call your vet or nearest emergency clinic.',
    answerText:
      'No. It helps you decide how urgently to seek care; it does not diagnose. Only a veterinarian can diagnose your dog. When unsure, call your vet or emergency clinic.',
  },
  {
    question: 'What do the three results mean?',
    answer:
      'Go now means at least one sign you selected can be a life-threatening emergency — go to an emergency vet immediately and do not wait for another symptom. Same-day vet means the signs warrant veterinary attention within 24 hours, or sooner if anything worsens. Monitor closely applies only to a single mild episode of two specific signs (one episode of vomiting/diarrhea with blood, or missing one meal in an otherwise normal dog) — and it still tells you to call your vet if it persists, worsens, repeats, or you are unsure. If you select signs from more than one level, the result always reflects the most urgent one.',
    answerText:
      'Go now = possible life-threatening emergency, go immediately. Same-day vet = see a vet within 24 hours, sooner if it worsens. Monitor closely = a single mild episode of one of two signs, but call your vet if it persists, worsens, or you are unsure. Mixed selections resolve to the most urgent.',
  },
  {
    question: 'What if my dog has a sign that is not on the list?',
    answer:
      'This tool covers 15 well-defined signs drawn from veterinary emergency-medicine references. It is not exhaustive. If your dog is showing anything that worries you — even if it is not listed here — call your vet or nearest emergency clinic. Absence from this list is never a reason to wait. When in doubt, seek care.',
    answerText:
      'The list is not exhaustive. If anything worries you, call your vet or emergency clinic — absence from the list is never a reason to wait.',
  },
  {
    question: 'Should I call before driving in?',
    answer:
      'Yes, when you safely can. Most emergency clinics will advise over the phone whether to come in immediately and can prepare for your arrival. If you suspect poisoning, call ASPCA Animal Poison Control at 888-426-4435 (available 24/7, a consultation fee applies) and your emergency vet at the same time — for many toxins, treatment is most effective before symptoms appear. Never delay leaving for a true emergency in order to make a call.',
    answerText:
      'Yes when you safely can — clinics can advise and prepare. For suspected poisoning, call ASPCA Animal Poison Control (888-426-4435) and your vet simultaneously. Never delay leaving for a true emergency to make a call.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Dog.com', url: 'https://dog.com/' },
    { name: 'Tools', url: 'https://dog.com/tools' },
    { name: 'Is This a Dog Emergency?', url: 'https://dog.com/tools/is-this-a-dog-emergency' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Is This a Dog Emergency? Symptom Triage Tool',
  description:
    'Select the signs you are seeing in your dog and get a conservative urgency read (go now / same-day vet / monitor closely) based on veterinary emergency-medicine criteria. A triage aid, not a diagnosis.',
  url: 'https://dog.com/tools/is-this-a-dog-emergency',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Conservative urgency read: go now, same-day vet, or monitor closely',
    '15 signs drawn from veterinary emergency-medicine criteria',
    'Always rounds toward more care; no all-clear result',
    'Shoppable emergency-prep kit via Amazon category searches (pet first-aid kit, digital pet thermometer, soft carrier, styptic powder, tick remover)',
  ],
}

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Is This a Dog Emergency? Symptom Triage Tool',
  description:
    'A conservative triage aid that matches dog symptoms against veterinary emergency-medicine criteria to help owners decide how urgently to seek care. Not a diagnosis.',
  url: 'https://dog.com/tools/is-this-a-dog-emergency',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-10',
})

const howToSchema = buildHowToSchema({
  name: 'How to assess whether your dog needs emergency care',
  description: 'Use the symptom checklist to get a conservative urgency read — go now, same-day vet, or monitor closely — based on veterinary emergency-medicine criteria.',
  url: 'https://dog.com/tools/is-this-a-dog-emergency',
  steps: [
    {
      name: 'Check for immediately life-threatening signs first',
      text: 'If your dog is struggling to breathe, has collapsed, is bleeding heavily, or you suspect poisoning, go to an emergency vet immediately without waiting for any tool. Call ASPCA Poison Control (888-426-4435) for suspected ingestion.',
    },
    {
      name: 'Select every sign you are currently observing',
      text: 'Work through the symptom checklist and check every sign you are seeing. The tool covers 15 well-defined signs drawn from veterinary emergency-medicine references.',
    },
    {
      name: 'Read the urgency result',
      text: 'The tool returns the most urgent result among your selections: "Go now" (possible life-threatening emergency — go immediately), "Same-day vet" (attention within 24 hours), or "Monitor closely" (a single mild episode, but still call your vet if it persists or worsens).',
    },
    {
      name: 'Act on the result conservatively',
      text: 'If you receive "Go now," go to an emergency clinic immediately. If anything worries you beyond what is listed, call your vet — absence from the list is never a reason to wait.',
    },
  ],
})

// Exactly ONE BreadcrumbList across the page.
const schema = combineSchemas(breadcrumbSchema, appSchema, medicalSchema, howToSchema)

export default function IsThisADogEmergencyPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(200, 74, 42, 0.5) 0%, transparent 60%)' }}
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
            Is This a Dog Emergency?
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Check the signs you are seeing and get a conservative urgency read — go now, same-day vet, or
            monitor closely — using the same emergency-vs-wait criteria from veterinary emergency medicine.
            This tool helps you decide how urgently to seek care. It does not diagnose your dog.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Dog.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Is This a Dog Emergency?</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fridge sheet
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog emergency-signs triage cheat sheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fridge triage cheat sheet — the go-now / same-day / monitor
            recap plus a shoppable emergency-prep kit (first-aid, thermometer,
            soft carrier, styptic powder, tick remover) — so you can re-check
            signs later without re-reading the list. A triage aid, not a
            diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog emergency-signs triage cheat sheet"
            subtitle="Email the fridge triage cheat sheet and emergency-signs recap. No spam."
            ctaText="Email my triage cheat sheet"
            source="tools-is-this-a-dog-emergency-under-hero"
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
              If your dog is struggling to breathe, collapsed, bleeding heavily, or you suspect poisoning —{' '}
              <strong>call your nearest emergency vet or ASPCA Animal Poison Control (888-426-4435) now.</strong>{' '}
              Do not wait for this tool. When in doubt, seek care.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/find-a-vet"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find your nearest emergency vet →
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

      {/* Money path — live amazon-brand search hops (emergency-prep / first-aid kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="dog-emergency-prep-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a dog emergency-prep kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are cabinet and car items for
              emergency prep — a pet first-aid kit, a digital pet thermometer,
              a soft carrier, styptic powder, and a tick remover. They are not
              a ranked product list, not invented inventory, and they do not
              diagnose, treat, or replace emergency care. If a sign looks
              life-threatening, go to an emergency vet now; this kit is for
              planning ahead, not for waiting on a crisis. Dog.com earns a
              commission on qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+first+aid+kit?s=tools-is-this-a-dog-emergency"
                amazonLabel="Browse pet first-aid kits on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+thermometer?s=tools-is-this-a-dog-emergency"
                amazonLabel="Browse digital pet thermometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+dog+carrier?s=tools-is-this-a-dog-emergency"
                amazonLabel="Browse soft dog carriers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/styptic+powder?s=tools-is-this-a-dog-emergency"
                amazonLabel="Browse styptic powder on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/tick+remover?s=tools-is-this-a-dog-emergency"
                amazonLabel="Browse tick removers on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calm, non-emergency footer — insurance + non-ER telehealth.
          Deliberately AFTER the tool, never inside/above a verdict. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              After the emergency
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Emergency and surgical care is among the most expensive a dog owner faces. Once things have
              settled, comparing pet insurance can protect against the cost of the next one — many plans cover
              accidents and emergencies. For a stable, non-emergency question — not collapse, not trouble
              breathing, not uncontrolled bleeding — talk to a licensed vet on a screen rather than waiting
              for a gap to become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="https://vets.co/reviews/best-pet-insurance"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Compare pet insurance plans →
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
            sooner if it worsens), and <strong>monitor closely</strong> (reserved for a single mild episode of
            two specific signs, and it still tells you to call your vet if anything persists, worsens, or you
            are unsure). There is deliberately no &quot;all clear&quot; result.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the full write-up of each sign and the reasoning behind it, see the{' '}
            <Link
              href="/health/dog-symptoms-guide"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              15 dog symptoms you should never ignore
            </Link>{' '}
            guide. If you are watching the face for a pain expression rather than a
            listed emergency sign, use the{' '}
            <Link
              href="/tools/dog-grimace-scale"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              dog grimace scale
            </Link>
            {' '}— a planning / observation reference, not a diagnosis. If the sign is chocolate, use the{' '}
            <Link
              href="/tools/dog-chocolate-toxicity-calculator"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              chocolate-toxicity calculator
            </Link>
            . For what to pack before you need it, see the{' '}
            <Link
              href="/guides/dog-first-aid-kit"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              dog first-aid kit guide
            </Link>
            . To find emergency care near you, use{' '}
            <Link href="/find-a-vet" className="text-brand-primary underline-offset-2 hover:underline">
              find a vet
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
              { label: '15 Dog Symptoms You Should Never Ignore', href: '/health/dog-symptoms-guide', note: 'The full guide behind this tool' },
              { label: 'Dog Grimace Scale', href: '/tools/dog-grimace-scale', note: 'Facial pain-watch, not a diagnosis' },
              { label: 'Dog Chocolate Toxicity Calculator', href: '/tools/dog-chocolate-toxicity-calculator', note: 'Theobromine dose bands + safety kit' },
              { label: 'Dog First-Aid Kit Guide', href: '/guides/dog-first-aid-kit', note: 'What to pack before you need it' },
              { label: 'How to Take a Dog\'s Temperature', href: '/guides/how-to-take-dogs-temperature', note: 'Baseline vitals for the phone call' },
              { label: 'Find an Emergency Vet', href: '/find-a-vet', note: 'Locate 24/7 care near you' },
              { label: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', note: 'A true surgical emergency' },
              { label: 'Dog Vomiting Guide', href: '/health/dog-vomiting', note: 'When vomiting needs a vet' },
              { label: 'Dog Seizures', href: '/health/dog-seizures', note: 'First seizure vs. known epilepsy' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
              >
                <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                <div className="text-xs text-brand-text-light">{item.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="dog-com" contentType="tool" variant="footer" />
    </>
  )
}
