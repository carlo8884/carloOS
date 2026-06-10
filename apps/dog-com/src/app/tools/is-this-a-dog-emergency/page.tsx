import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  ArticleSourcesList,
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
}

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Is This a Dog Emergency? Symptom Triage Tool',
  description:
    'A conservative triage aid that matches dog symptoms against veterinary emergency-medicine criteria to help owners decide how urgently to seek care. Not a diagnosis.',
  url: 'https://dog.com/tools/is-this-a-dog-emergency',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-06-10',
})

// Exactly ONE BreadcrumbList across the page.
const schema = combineSchemas(breadcrumbSchema, appSchema, medicalSchema)

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

      {/* Calm, non-emergency footer — insurance CTA with disclosure.
          Deliberately AFTER the tool, never inside/above a verdict. */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              After the emergency
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Emergency and surgical care is among the most expensive a dog owner faces. Once things have
              settled, comparing pet insurance can protect against the cost of the next one — many plans cover
              accidents and emergencies.
            </p>
            <AffiliateDisclosure variant="inline" siteId="dog-com" className="mb-3 text-2xs" />
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Compare pet insurance plans →
            </Link>
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
            guide. To find emergency care near you, use{' '}
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
              { label: 'Find an Emergency Vet', href: '/find-a-vet', note: 'Locate 24/7 care near you' },
              { label: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', note: 'A true surgical emergency' },
              { label: 'Dog Vomiting Guide', href: '/health/dog-vomiting', note: 'When vomiting needs a vet' },
              { label: 'Dog Seizures', href: '/health/dog-seizures', note: 'First seizure vs. known epilepsy' },
              { label: 'Dog Health Hub', href: '/health', note: 'All conditions and symptoms A–Z' },
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
    </>
  )
}
