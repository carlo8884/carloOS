import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  EmailCapture,
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://vets.co/tools/er-vs-clinic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'ER vs Clinic vs Telehealth — Where to Go | Vets.co',
  description:
    'Pick the signs you see. Get a conservative setting — ER now, clinic tomorrow, or telehealth. A triage aid, not a diagnosis.',
  path: '/tools/er-vs-clinic',
})

const SOURCES = [
  {
    label: 'AVMA: Emergency Care for Your Pet',
    url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergency-care-your-pet',
    publisher: 'AVMA',
  },
  {
    label: 'AAHA: Emergency and Critical Care Guidelines',
    url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/',
    publisher: 'AAHA',
  },
  {
    label: 'ASPCA Animal Poison Control Center',
    url: 'https://www.aspca.org/pet-care/animal-poison-control',
    publisher: 'ASPCA',
  },
]

const FAQS = [
  {
    question: 'Is this tool a diagnosis?',
    answer:
      'No. It chooses a setting — emergency hospital, general-practice or urgent-care clinic, or telehealth — from the signs you select. It does not name a disease, prescribe, or dose. Only a veterinarian who examines your pet can diagnose. When you are unsure, treat it as more urgent and call a clinic.',
  },
  {
    question: 'What do ER now, clinic tomorrow, and telehealth mean?',
    answer:
      'ER now means at least one selected sign can be life-threatening — go to a 24-hour emergency hospital and do not wait for a morning slot. Clinic tomorrow means a same-day or next-open general-practice or urgent-care visit; go sooner if anything worsens. Telehealth means a licensed remote vet is a reasonable first step for a question or a stable follow-up — not for breathing trouble, collapse, a blocked bladder, or suspected poisoning.',
  },
  {
    question: 'When is telehealth the wrong first step?',
    answer:
      'Telehealth cannot replace a physical exam, blood work, imaging, surgery, or emergency stabilization. Difficulty breathing, pale or blue gums, collapse, unproductive retching, a cat that cannot urinate, a seizure that will not stop, major trauma, and suspected poisoning belong at an emergency hospital — not in a video queue.',
  },
  {
    question: 'Should I call before I drive in?',
    answer:
      'Yes, when you safely can. A clinic can tell you whether to come now and can prepare for arrival. For suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (a consultation fee may apply) and the emergency hospital at the same time. Never delay leaving for a true emergency in order to finish a call.',
  },
  {
    question: 'What if the sign I am seeing is not on the list?',
    answer:
      'The list is not exhaustive. If anything worries you — even if it is not listed — call your veterinarian or the nearest emergency hospital. Absence from this list is never a reason to wait. The printable emergency triage card and the symptom library cover more signs in prose.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
    { name: 'ER vs Clinic vs Telehealth', url: URL },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ER vs Clinic vs Telehealth Setting Chooser',
  description:
    'Free interactive setting chooser. Owners select the signs they see in a dog or cat and receive a conservative recommendation: emergency hospital now, clinic tomorrow, or telehealth. A triage aid, not a diagnosis.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Dog and cat sign lists',
    'Conservative ER / clinic / telehealth setting',
    'No all-clear result — mixed selections resolve upward',
    'Poison-control number when ingestion is selected',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to choose ER vs clinic vs telehealth',
  description:
    'Select the signs you are seeing. The tool returns the most urgent setting — emergency hospital, clinic, or telehealth — using the same emergency-vs-wait framing as published veterinary owner guidance.',
  url: URL,
  steps: [
    {
      name: 'Do not wait on obvious emergencies',
      text: 'If your pet cannot breathe, has collapsed, is bleeding heavily, cannot urinate, or you suspect poisoning, go to an emergency hospital now. Call ASPCA Poison Control at 888-426-4435 for suspected ingestion.',
    },
    {
      name: 'Pick the species and every sign you see',
      text: 'Choose dog or cat, then check every matching sign. The list covers emergencies, clinic-level problems, and telehealth-first questions.',
    },
    {
      name: 'Read the most urgent setting',
      text: 'ER now, clinic tomorrow (or today if open), or telehealth. Mixed selections always resolve to the more urgent setting. There is no all-clear result.',
    },
    {
      name: 'Act, then decide about the bill later',
      text: 'Use find-a-vet for an ER or clinic, or the telehealth comparison for a remote consult. After the visit, the insurance comparison explains how policies treat accidents and emergencies.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, softwareApplicationSchema, howToSchema)

export default function ErVsClinicPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(10, 107, 94, 0.55) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Tools &amp; Calculators
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            ER vs Clinic vs Telehealth
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Where should this go — emergency hospital now, clinic tomorrow, or a licensed vet on
            a screen? Select the signs. The tool returns the more urgent setting. It does not
            diagnose.
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">
          Tools
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">ER vs Clinic vs Telehealth</span>
      </nav>

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
              If your pet is struggling to breathe, collapsed, bleeding heavily, unable to urinate,
              or you suspect poisoning —{' '}
              <strong>go to the nearest emergency hospital now.</strong> ASPCA Poison Control:{' '}
              <strong>888-426-4435</strong>. When in doubt, seek care.
            </p>
          </div>
        </div>
      </section>

      <section className="px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              After the visit
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Emergency and after-hours care is among the most expensive visits an owner faces.
              Once the pet is stable, the editorial insurance comparison explains how accident and
              illness policies treat those bills — it does not re-rank carriers for this page.
            </p>
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Compare pet insurance →
            </Link>
          </div>
          <div className="mt-6">
            <EmailCapture
              siteId="vets-co"
              variant="inline"
              title="Vets.co reference letter"
              subtitle="Triage references and tool updates. No spam."
              source="tools-er-vs-clinic"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            A setting chooser, not a symptom checker
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Consumer symptom checkers that try to name a disease over-refer to emergency rooms and
            still miss the cases where the owner&apos;s sense of severity is the real signal. This
            tool only answers <em>where to go</em>. It uses the same three-bucket framing as the{' '}
            <Link href="/guides/er-vs-urgent-care" className="text-brand-primary underline-offset-2 hover:underline">
              ER vs urgent care guide
            </Link>{' '}
            and the printable{' '}
            <Link href="/emergency-triage-card" className="text-brand-primary underline-offset-2 hover:underline">
              emergency triage card
            </Link>
            , plus a third bucket for licensed telehealth when the pet is stable.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For a cat-specific sign-list urgency read (go now / same-day / monitor), use{' '}
            <Link href="/tools/is-this-a-cat-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              Is this a cat emergency?
            </Link>
            — that page does not replace this setting chooser. For the longer sign list, use the{' '}
            <Link href="/symptoms" className="text-brand-primary underline-offset-2 hover:underline">
              symptom library
            </Link>{' '}
            and{' '}
            <Link href="/health/emergency-signs" className="text-brand-primary underline-offset-2 hover:underline">
              emergency signs
            </Link>
            . Non-emergency &ldquo;talk to a vet&rdquo; goes to the existing{' '}
            <Link href="/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth comparison
            </Link>
            — this page does not hop to an empty vendor button.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQS} />
          <div className="mt-8">
            <ArticleSourcesList sources={SOURCES} />
          </div>
        </div>
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related guides &amp; tools</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Is This a Cat Emergency?', href: '/tools/is-this-a-cat-emergency', note: 'Cat sign-list urgency read' },
              { label: 'ER vs. Urgent Care guide', href: '/guides/er-vs-urgent-care', note: 'The prose version of this decision' },
              { label: 'When to go to the vet', href: '/guides/when-to-go-to-the-vet', note: 'Watch vs same-day vs emergency' },
              { label: 'Emergency signs', href: '/health/emergency-signs', note: 'The longer ER list' },
              { label: 'Symptom library', href: '/symptoms', note: '30 dog and cat symptoms by tier' },
              { label: 'Telehealth compared', href: '/telehealth', note: 'Licensed remote vets' },
              { label: 'Best pet insurance', href: '/reviews/best-pet-insurance', note: 'After the bill' },
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

      <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="footer" />
    </>
  )
}
