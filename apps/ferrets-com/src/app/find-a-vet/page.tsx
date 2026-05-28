import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  EmailCapture,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Find an Exotic-Pet Vet for Your Ferret | Ferrets.com',
  description:
    'Most general-practice vets see fewer than ten ferrets a year. Seven questions to ask, the AEMV directory, and a state-by-state index of exotic-pet vets who actually treat ferrets.',
  path: '/find-a-vet',
  type: 'website',
})

// ─── State list (UI only — these are 404s today) ─────────────────────────────

const US_STATES: Array<{ slug: string; name: string }> = [
  { slug: 'alabama', name: 'Alabama' },
  { slug: 'alaska', name: 'Alaska' },
  { slug: 'arizona', name: 'Arizona' },
  { slug: 'arkansas', name: 'Arkansas' },
  { slug: 'california', name: 'California' },
  { slug: 'colorado', name: 'Colorado' },
  { slug: 'connecticut', name: 'Connecticut' },
  { slug: 'delaware', name: 'Delaware' },
  { slug: 'florida', name: 'Florida' },
  { slug: 'georgia', name: 'Georgia' },
  { slug: 'hawaii', name: 'Hawaii (ferrets prohibited)' },
  { slug: 'idaho', name: 'Idaho' },
  { slug: 'illinois', name: 'Illinois' },
  { slug: 'indiana', name: 'Indiana' },
  { slug: 'iowa', name: 'Iowa' },
  { slug: 'kansas', name: 'Kansas' },
  { slug: 'kentucky', name: 'Kentucky' },
  { slug: 'louisiana', name: 'Louisiana' },
  { slug: 'maine', name: 'Maine' },
  { slug: 'maryland', name: 'Maryland' },
  { slug: 'massachusetts', name: 'Massachusetts' },
  { slug: 'michigan', name: 'Michigan' },
  { slug: 'minnesota', name: 'Minnesota' },
  { slug: 'mississippi', name: 'Mississippi' },
  { slug: 'missouri', name: 'Missouri' },
  { slug: 'montana', name: 'Montana' },
  { slug: 'nebraska', name: 'Nebraska' },
  { slug: 'nevada', name: 'Nevada' },
  { slug: 'new-hampshire', name: 'New Hampshire' },
  { slug: 'new-jersey', name: 'New Jersey' },
  { slug: 'new-mexico', name: 'New Mexico' },
  { slug: 'new-york', name: 'New York (NYC restrictions apply)' },
  { slug: 'north-carolina', name: 'North Carolina' },
  { slug: 'north-dakota', name: 'North Dakota' },
  { slug: 'ohio', name: 'Ohio' },
  { slug: 'oklahoma', name: 'Oklahoma' },
  { slug: 'oregon', name: 'Oregon' },
  { slug: 'pennsylvania', name: 'Pennsylvania' },
  { slug: 'rhode-island', name: 'Rhode Island' },
  { slug: 'south-carolina', name: 'South Carolina' },
  { slug: 'south-dakota', name: 'South Dakota' },
  { slug: 'tennessee', name: 'Tennessee' },
  { slug: 'texas', name: 'Texas' },
  { slug: 'utah', name: 'Utah' },
  { slug: 'vermont', name: 'Vermont' },
  { slug: 'virginia', name: 'Virginia' },
  { slug: 'washington', name: 'Washington' },
  { slug: 'west-virginia', name: 'West Virginia' },
  { slug: 'wisconsin', name: 'Wisconsin' },
  { slug: 'wyoming', name: 'Wyoming' },
  { slug: 'district-of-columbia', name: 'Washington, D.C.' },
]

// ─── Vetting questions ───────────────────────────────────────────────────────

const VET_QUESTIONS: Array<{ q: string; a: string }> = [
  {
    q: 'How many ferrets do you see in an average year?',
    a:
      'The single most useful filter. A general-practice vet who sees fewer than a dozen ferrets a year may be perfectly competent at vaccinations and uncomplicated visits, but is unlikely to be the right person for an adrenal-disease workup or an insulinoma surgery. Practices that genuinely treat ferrets typically see them in the hundreds per year.',
  },
  {
    q: 'Are you board-certified — ABVP (Exotic Companion Mammal) or ACZM?',
    a:
      'Board certification by the American Board of Veterinary Practitioners in Exotic Companion Mammal practice (ABVP-ECM) or by the American College of Zoological Medicine (ACZM) is the highest formal credential for ferret medicine. Plenty of excellent ferret vets are not boarded, but if a clinic has a boarded specialist on staff, that is a strong positive signal.',
  },
  {
    q: 'What is your emergency plan for ferret-specific procedures after hours?',
    a:
      'Ferret emergencies — hypoglycemic crisis from undiagnosed insulinoma, dyspnea from cardiomyopathy, foreign-body obstruction — do not wait for business hours. Ask which 24-hour emergency hospital they recommend and whether that hospital has staff comfortable with ferrets. A clinic that has no answer here is a clinic you do not want to discover this from at 2 a.m.',
  },
  {
    q: 'What is your anesthesia protocol for ferrets, and what is your perioperative monitoring?',
    a:
      'Ferret anesthesia is technically demanding: small body mass, rapid metabolism of inhalant agents, sensitivity to hypothermia and hypoglycemia, and a thin margin between effective and toxic dosing. Modern protocols typically use isoflurane or sevoflurane with intraoperative blood-glucose monitoring, active warming, and IV access. A clinic that cannot describe its protocol in detail is not the right surgical option.',
  },
  {
    q: 'Do you have in-house ultrasound, and can you image adrenals?',
    a:
      'Adrenal disease and insulinoma are the two most common diagnoses in middle-aged ferrets, and both benefit from abdominal ultrasound. Adrenal imaging in particular is operator-dependent: the glands are small, and detecting hyperplasia or a mass requires both equipment and a sonographer used to ferret anatomy. Ask whether they image adrenals routinely or refer out.',
  },
  {
    q: 'Can you give me a cost estimate before the visit?',
    a:
      'Reasonable practices will give a wellness-exam range and a workup range over the phone. A clinic that refuses to discuss cost until after the patient is in-house is not necessarily acting in bad faith, but cost transparency is an important variable for an owner managing the multi-year cost of a ferret with chronic endocrine disease.',
  },
  {
    q: 'Do you offer telehealth follow-ups for stable patients?',
    a:
      'For chronic conditions — insulinoma on prednisone, adrenal disease on deslorelin implants, post-surgical recovery — telehealth check-ins reduce travel stress on the ferret and lower the friction on actually keeping follow-up appointments. Not every state allows full telemedicine without an in-person VCPR, but most allow follow-up consultations once the relationship is established.',
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const FAQS: FAQItem[] = [
  {
    question: 'Do I really need an exotic-pet vet for my ferret?',
    answer:
      'For routine vaccinations and minor concerns, a general-practice vet who sees ferrets occasionally can be appropriate. For surgery, suspected adrenal disease, suspected insulinoma, anesthesia for any reason, or any condition that has not resolved within a week, the case for an exotic-pet vet is strong. Ferret physiology differs from cats and dogs in clinically significant ways — drug dosing, anesthesia tolerance, and disease prevalence are all different.',
  },
  {
    question: 'How do I find an exotic-pet vet near me?',
    answer:
      'Three starting points: the Association of Exotic Mammal Veterinarians (AEMV) find-a-vet tool on aemv.org; the American Board of Veterinary Practitioners directory filtered by Exotic Companion Mammal practice; and the American Ferret Association (AFA) shelter-and-vet contact list. Word-of-mouth from a local ferret rescue is also reliable — rescues triage dozens of ferrets a year and know which vets respond.',
  },
  {
    question: 'Are ferrets legal everywhere in the US?',
    answer:
      'No. Ferrets are prohibited as pets in Hawaii and California, and restricted in New York City (which prohibits them despite ferrets being legal in the rest of New York state). Several other jurisdictions have specific permit or registration requirements. Check your state and municipality before adopting or moving.',
  },
  {
    question: 'What vaccines does my ferret need?',
    answer:
      'Two core vaccines are recommended in the United States: rabies (legally required in many jurisdictions) and canine distemper virus (CDV). CDV is uniformly fatal in unvaccinated ferrets and is the single most important vaccine in the protocol. The Association of Exotic Mammal Veterinarians publishes current vaccination guidelines, and reaction rates have been documented in the exotic-pet veterinary literature — see Greenacre CB, "Incidence of adverse events in ferrets vaccinated with distemper or rabies vaccine," JAAHA 39(1):17–21, 2003.',
  },
  {
    question: 'What should I do during a hypoglycemic emergency?',
    answer:
      'If a ferret is wobbly, drooling, glassy-eyed, or unresponsive, the working assumption is hypoglycemia from insulinoma. Apply a small amount of corn syrup, honey, or glucose gel to the gums (do not pour liquid into an unresponsive mouth — aspiration risk), warm the ferret if cold, and transport to an emergency vet immediately. This is general first-aid information; for clinical detail see the insulinoma reference on Ferret.com.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({
    question: f.question,
    answer: typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
  })),
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferrets.com' },
    { name: 'Find a Vet', url: 'https://ferrets.com/find-a-vet' },
  ],
})

const schema = combineSchemas(faqSchema, breadcrumbSchema)

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FindAVetPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Find a Vet', href: '/find-a-vet' },
        ]}
      />

      <div className="px-container sm:px-container-sm py-12 max-w-4xl mx-auto">
        {/* ─── Header ─────────────────────────────────────────────────── */}
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Ferrets.com Directory
          </p>
          <h1
            className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Find an Exotic-Pet Vet for Your Ferret
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed">
            Most general-practice vets in the United States see fewer than ten
            ferrets a year. Ferret medicine is technically distinct from cat or
            dog medicine — drug dosing, anesthesia tolerance, and disease
            prevalence are all different — and finding a clinic that actually
            treats ferrets is the single most important upstream decision a
            new ferret owner makes.
          </p>
        </header>

        {/* ─── TL;DR ──────────────────────────────────────────────────── */}
        <aside
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
          aria-label="TL;DR"
        >
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </p>
          <ul className="text-base text-brand-text-mid leading-relaxed list-disc pl-5 space-y-1 m-0">
            <li>
              Start with the Association of Exotic Mammal Veterinarians
              (AEMV) find-a-vet tool.
            </li>
            <li>
              Ask seven questions before the first visit — they are listed
              below.
            </li>
            <li>
              For adrenal disease, insulinoma, surgery, or any anesthesia
              event, an exotic-pet vet is not a luxury.
            </li>
            <li>
              The state directory below is in build. Browse anyway and email
              us if you would like to suggest a clinic.
            </li>
          </ul>
        </aside>

        {/* ─── Why this matters ───────────────────────────────────────── */}
        <section aria-labelledby="why" className="mb-12">
          <h2
            id="why"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Why finding a real exotic vet matters
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Two prevalence facts shape the case. First, neoplastic and
            endocrine disease in middle-aged ferrets is common rather than
            unusual: Quesenberry &amp; Carpenter&rsquo;s{' '}
            <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>{' '}
            (Saunders/Elsevier) reports insulinoma, adrenocortical disease,
            and lymphoma as the three most-frequent diagnoses in
            middle-to-older ferrets, with adrenocortical disease alone
            estimated in a substantial fraction of the over-three-year-old
            population in the US pet ferret cohort.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Second, dental disease in ferrets is far more prevalent than the
            casual owner expects. The same exotic-mammal references document
            calculus accumulation and periodontal disease as common findings
            on routine exams, often missed because owners do not lift the lip
            and look. Dental cleanings under anesthesia are part of mainstream
            ferret wellness care after age three.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            On the vaccination side, Greenacre&rsquo;s 2003 paper in the{' '}
            <em>Journal of the American Animal Hospital Association</em>{' '}
            ({'"'}Incidence of adverse events in ferrets vaccinated with
            distemper or rabies vaccine,{'"'} JAAHA 39(1):17–21) documented
            measurable rates of vaccine reactions in ferrets — high enough
            that contemporary protocols emphasize observation periods after
            vaccination and the option of pre-medication. A vet who does not
            volunteer this context is a vet who has not internalized the
            ferret-specific literature.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            The practical implication is not that every ferret needs a
            specialist for every visit. It is that a baseline relationship
            with a clinic that genuinely treats ferrets — before there is an
            emergency — is the highest-leverage investment a new owner can
            make in their ferret&rsquo;s lifespan.
          </p>
        </section>

        {/* ─── Seven questions ────────────────────────────────────────── */}
        <section aria-labelledby="seven" className="mb-12">
          <h2
            id="seven"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Seven questions to ask before the first visit
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-6">
            Call the clinic. Ask the front desk to either answer or take a
            message for the lead doctor. A clinic that genuinely treats
            ferrets will answer most of these without hesitation; a clinic
            that does not will either decline to engage or give vague,
            general-practice answers.
          </p>
          <ol className="list-decimal pl-6 space-y-5 m-0">
            {VET_QUESTIONS.map((qa, i) => (
              <li key={i} className="text-base text-brand-text-mid leading-relaxed">
                <strong className="text-brand-text-dark">{qa.q}</strong>
                <p className="mt-2 mb-0">{qa.a}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── AEMV pointer ──────────────────────────────────────────── */}
        <section
          aria-labelledby="aemv"
          className="mb-12 p-7 rounded-xl border-2 border-brand-primary/20 bg-brand-primary/5"
        >
          <h2
            id="aemv"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            The AEMV find-a-vet tool
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            The{' '}
            <a
              href="https://www.aemv.org/find-a-vet"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              Association of Exotic Mammal Veterinarians
            </a>{' '}
            maintains a member directory searchable by location. AEMV
            membership is voluntary, so the directory does not include every
            qualified clinic, but every member has self-identified as an
            exotic-mammal practitioner and most see ferrets routinely.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            Combine the AEMV directory with a phone call running the seven
            questions above. That is the workflow we recommend until the
            Ferrets.com state-by-state directory below is fully populated.
          </p>
        </section>

        {/* ─── State directory placeholder ────────────────────────────── */}
        <section aria-labelledby="states" className="mb-12">
          <h2
            id="states"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Browse exotic-pet vets by state
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-2">
            The state-by-state directory is under construction. The links
            below show the planned navigation structure; per-state pages will
            roll out as clinic listings are verified.
          </p>
          <p className="text-sm text-brand-text-light leading-relaxed mb-6">
            <em>
              Coming soon — Q3 2026. State links currently 404 by design.
            </em>
          </p>
          <ul
            className="list-none p-0 m-0 grid gap-2"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            }}
          >
            {US_STATES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/find-a-vet/${s.slug}`}
                  className="block px-3 py-2 rounded-md border border-brand-border bg-brand-surface text-sm text-brand-text-mid hover:bg-brand-primary/5 hover:border-brand-primary/40 transition-colors no-underline"
                  aria-label={`${s.name} — directory coming soon`}
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── Email capture ──────────────────────────────────────────── */}
        <section aria-labelledby="newsletter" className="mb-12">
          <h2
            id="newsletter"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            Notify me when my state goes live
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="Vet Directory Updates"
            subtitle="One email per state batch. Includes vetting checklists."
            source="find-a-vet"
          />
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq" className="mb-12">
          <h2
            id="faq"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: '1.5rem' }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQS} includeSchema={false} />
        </section>

        {/* ─── Sources ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="sources"
          className="mb-8 text-sm text-brand-text-light leading-relaxed"
        >
          <h2
            id="sources"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.125rem' }}
          >
            Sources
          </h2>
          <ul className="list-disc pl-5 space-y-2 m-0">
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — find-a-vet
              directory and member position statements (aemv.org).
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing veterinary care
              guidance.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders / Elsevier.
            </li>
            <li>
              Greenacre CB. Incidence of adverse events in ferrets vaccinated
              with distemper or rabies vaccine: 143 cases (1995–2001).{' '}
              <em>Journal of the American Animal Hospital Association</em>{' '}
              39(1):17–21, 2003.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — issues on ferret endocrine and neoplastic
              disease.
            </li>
          </ul>
        </section>

        {/* ─── Closing note ───────────────────────────────────────────── */}
        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          This page is general information about finding veterinary care for
          ferrets. It is not a referral, an endorsement of any specific
          clinic, or a substitute for individualized advice. For care
          references see the{' '}
          <Link href="/care" className="text-brand-primary hover:underline">
            Ferret Care Library
          </Link>
          .
        </footer>
      </div>
    </>
  )
}
