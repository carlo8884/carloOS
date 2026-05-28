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
  title: 'Find a Ferret Rescue Near You | Ferrets.com',
  description:
    'A directory of ferret rescues organized by US state, plus the case for rescue adoption, red and green flags, and the American Ferret Association shelter accreditation criteria.',
  path: '/directory/rescues',
  type: 'website',
})

// ─── States (same shape as /find-a-vet — 404 today by design) ────────────────

const US_STATES: Array<{ slug: string; name: string }> = [
  { slug: 'alabama', name: 'Alabama' },
  { slug: 'alaska', name: 'Alaska' },
  { slug: 'arizona', name: 'Arizona' },
  { slug: 'arkansas', name: 'Arkansas' },
  { slug: 'california', name: 'California (ferrets prohibited)' },
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

// ─── Flags ───────────────────────────────────────────────────────────────────

const GREEN_FLAGS: string[] = [
  'Accredited or in good standing with the American Ferret Association (AFA) shelter program.',
  'Adoption fee in a sensible range — typically covers vaccination, spay/neuter where applicable, and basic vet workup. Free or under-cost adoption is sometimes a red flag (covers cost of intake unable to be sustained).',
  'Adoption application includes housing questions, household composition, and (for older ferrets) experience with chronic disease.',
  'Will discuss the ferret\'s medical history honestly, including known adrenal-disease, insulinoma, or dental issues.',
  'Operates from a dedicated space or a sustained foster network — not a single home with dozens of un-vetted intakes.',
  'Has an active relationship with at least one exotic-pet veterinarian.',
  'Encourages a meet-and-greet before adoption is finalized.',
]

const RED_FLAGS: string[] = [
  'No application process — anyone with cash can walk in and walk out with a ferret. This is a sales channel, not a rescue.',
  'Will not name a treating veterinarian or share recent vet records.',
  'Pressure to adopt the same day, or pressure to take a "bonded pair" you did not ask for.',
  'Discourages questions about medical history or about why the ferret was surrendered.',
  'No spay/neuter status declared and no explanation for unaltered intake animals (intact pet-store-source ferrets are common but the rescue should know and disclose).',
  'Selling kits ("baby ferrets") sourced from a breeder or pet store rather than fostering surrendered animals — that is a brokerage operation, not a rescue.',
  'Hostile to a question about the AFA shelter accreditation criteria.',
]

const QUESTIONS_TO_ASK: string[] = [
  'How long has this ferret been with you, and where did it come from?',
  'What is the ferret\'s known medical history? Adrenal disease, insulinoma, dental work, vaccination status?',
  'Who is your treating veterinarian, and can I see the most recent wellness exam?',
  'What is the adoption fee, and what does it cover?',
  'What is your return policy if the ferret does not fit my household?',
  'Are you AFA-accredited, and if not, why not?',
  'Do you require a meet-and-greet, and can my existing ferrets come if I have them?',
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const FAQS: FAQItem[] = [
  {
    question: 'Why adopt a rescue ferret instead of buying from a pet store?',
    answer:
      'Two reasons. First, ferret rescues fill a real need: many pet-store ferrets are surrendered within 18 months when owners discover ferrets are not low-maintenance "pocket pets," and rescues absorb that load. Second, the dominant US commercial source for pet-store ferrets (Marshall Farms) has been the subject of long-running debate within the ferret community over breeding density and early spay/neuter age (typically performed at 5–6 weeks). The American Ferret Association\'s position statements on responsible sourcing favor adoption from accredited rescues or from breeders who delay alteration. Cost is also a factor: rescues are generally less expensive than pet-store retail.',
  },
  {
    question: 'How do I find an accredited ferret rescue?',
    answer:
      'The American Ferret Association maintains an accredited-shelter program at ferret.org. Accreditation criteria include facility standards, veterinary relationships, intake and adoption protocols, and financial disclosure. AFA accreditation is the most established credential in US ferret rescue, though many good rescues operate outside formal accreditation. Word-of-mouth from local exotic-pet vets is also reliable.',
  },
  {
    question: 'What does it cost to adopt a ferret?',
    answer:
      'Typical adoption fees in the US range from roughly $100 to $300 per ferret, often including spay/neuter, vaccination, and a basic vet workup. Older ferrets or ferrets with known chronic disease (adrenal, insulinoma) may have reduced fees, and many rescues offer fee-waived placement for senior ferrets. The first-year cost of ferret ownership generally exceeds the adoption fee by an order of magnitude once cage, food, and routine vet care are included.',
  },
  {
    question: 'Can I adopt a single ferret, or do I have to take a pair?',
    answer:
      'Most rescues prefer to place ferrets in pairs because ferrets are social, but single-ferret adoptions are widely available for owners who can offer significant out-of-cage interaction. A bonded pair is usually placed together — separating bonded ferrets is something good rescues avoid except for medical reasons.',
  },
  {
    question: 'What if I find a ferret being neglected — where do I report?',
    answer:
      'Contact your state\'s animal-welfare authority for the formal report. Separately, contact the nearest AFA-accredited shelter or a local exotic-pet veterinary clinic for triage advice and intake capacity. Ferrets in distress require warmth, glucose support if hypoglycemic, and rapid veterinary assessment — the rescue or vet will know the protocol.',
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
    { name: 'Directory', url: 'https://ferrets.com/directory/rescues' },
    { name: 'Rescues', url: 'https://ferrets.com/directory/rescues' },
  ],
})

const schema = combineSchemas(faqSchema, breadcrumbSchema)

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RescuesDirectoryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Directory', href: '/directory/rescues' },
          { name: 'Rescues', href: '/directory/rescues' },
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
            Find a Ferret Rescue Near You
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed">
            Ferret rescue is a small, networked world. A few hundred shelters
            and committed foster operations across the United States absorb
            most of the surrendered-ferret load — and many are run on margins
            that depend on adopters who arrive prepared. The directory below
            is in build; meanwhile, this page covers how rescue works, what to
            look for, and what to ask.
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
              Start with the American Ferret Association&rsquo;s accredited
              shelter list.
            </li>
            <li>
              Expect an application, a meet-and-greet, and a fee in the $100–$300 range per ferret.
            </li>
            <li>
              Red flags: no application, no vet relationship, same-day pressure, kits sourced from breeders.
            </li>
            <li>
              State directory below is in build. Per-state pages roll out as rescues are verified.
            </li>
          </ul>
        </aside>

        {/* ─── Why adopt from rescue ──────────────────────────────────── */}
        <section aria-labelledby="why" className="mb-12">
          <h2
            id="why"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Why adopt from a rescue
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            <strong>Cost.</strong> Rescue adoption fees in the US run roughly
            $100 to $300 per ferret, generally inclusive of vaccination,
            spay/neuter, and a basic vet workup. Pet-store retail for the same
            ferret runs $200 to $400 and rarely includes the medical
            screening. A bonded pair from a rescue is almost always less than
            two individually-acquired pet-store kits.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            <strong>The pet-store sourcing question.</strong> The dominant US
            commercial breeder of pet-store ferrets has historically been
            Marshall Farms. The Marshall operation is the subject of
            longstanding debate within the ferret community on two specific
            points: high-density breeding facilities, and early spay/neuter
            performed at five to six weeks of age. The early-alteration
            question is the more clinically significant one — exotic-mammal
            veterinary literature has discussed whether very-early
            gonadectomy contributes to the high prevalence of adrenocortical
            disease in the US pet ferret population. The evidence is
            associational rather than experimentally established, and the
            American Ferret Association&rsquo;s position statement encourages
            responsible sourcing through accredited rescues or breeders who
            delay alteration. For owners weighing the decision, rescue
            adoption sidesteps the question entirely.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            <strong>The match question.</strong> Rescues see the ferret as an
            individual — temperament, household compatibility, medical
            history. Pet stores see the ferret as inventory. For a first-time
            owner trying to find a ferret that suits their household, the
            rescue process is a real screening, not a checkout flow.
          </p>
        </section>

        {/* ─── Green and red flags ────────────────────────────────────── */}
        <section aria-labelledby="flags" className="mb-12">
          <h2
            id="flags"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            How to vet a rescue
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-3 text-lg">
                Green flags
              </h3>
              <ul className="list-disc pl-5 space-y-2 m-0 text-sm text-brand-text-mid leading-relaxed">
                {GREEN_FLAGS.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-3 text-lg">
                Red flags
              </h3>
              <ul className="list-disc pl-5 space-y-2 m-0 text-sm text-brand-text-mid leading-relaxed">
                {RED_FLAGS.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-display font-bold text-brand-text-dark mb-3 text-lg">
            Questions to ask before adopting
          </h3>
          <ol className="list-decimal pl-6 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
            {QUESTIONS_TO_ASK.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </section>

        {/* ─── AFA pointer ────────────────────────────────────────────── */}
        <section
          aria-labelledby="afa"
          className="mb-12 p-7 rounded-xl border-2 border-brand-primary/20 bg-brand-primary/5"
        >
          <h2
            id="afa"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            The American Ferret Association accredited-shelter program
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            The{' '}
            <a
              href="https://www.ferret.org"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              American Ferret Association
            </a>{' '}
            runs an accreditation program for ferret shelters and rescues.
            Accreditation criteria cover facility standards, intake protocols,
            veterinary relationships, adoption procedures, and financial
            disclosure. The AFA also publishes owner-facing position
            statements on sourcing, vaccination, and welfare.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            AFA accreditation is the strongest single credential in US ferret
            rescue. It is not the only marker of a good rescue — many
            excellent operations are not accredited because the paperwork and
            facility-standard load is significant — but an AFA-accredited
            shelter is a high-confidence starting point.
          </p>
        </section>

        {/* ─── State directory placeholder ────────────────────────────── */}
        <section aria-labelledby="states" className="mb-12">
          <h2
            id="states"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Browse ferret rescues by state
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-2">
            Per-state pages will list verified rescues with intake status,
            adoption process, and AFA-accreditation flag. The state index
            below shows the planned navigation structure.
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
                  href={`/directory/rescues/${s.slug}`}
                  className="block px-3 py-2 rounded-md border border-brand-border bg-brand-surface text-sm text-brand-text-mid hover:bg-brand-primary/5 hover:border-brand-primary/40 transition-colors no-underline"
                  aria-label={`${s.name} ferret rescues — directory coming soon`}
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
            title="Rescue Directory Updates"
            subtitle="One email per state batch — verified rescues only."
            source="rescues-directory"
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
              American Ferret Association (AFA) — shelter accreditation
              program and position statements on sourcing and welfare
              (ferret.org).
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinical
              guidance referenced by ferret rescues.
            </li>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders / Elsevier
              — early-alteration and adrenocortical-disease discussion.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — peer-reviewed
              discussion of early gonadectomy and adrenal disease prevalence
              in the US pet ferret population.
            </li>
          </ul>
        </section>

        {/* ─── Closing note ───────────────────────────────────────────── */}
        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          This page is general information about ferret rescue and adoption.
          It is not an endorsement of any specific organization. Before
          adopting, see{' '}
          <Link href="/find-a-vet" className="text-brand-primary hover:underline">
            Find an Exotic-Pet Vet
          </Link>{' '}
          and the{' '}
          <Link href="/care" className="text-brand-primary hover:underline">
            Care Library
          </Link>
          .
        </footer>
      </div>
    </>
  )
}
