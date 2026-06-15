/**
 * Veterinary specialists hub — /specialists
 *
 * Lists the nine board-certified specialties Vets.co covers in depth.
 * Each card shows the discipline, the board-certification college, and a
 * one-line summary of when a primary vet typically refers.
 *
 * Editorial constraints (QC §1):
 *   - No fake clinician bylines, no fabricated review-process trust claims.
 *   - Board-certification orgs are named (ACVIM, ACVD, ACVO, ACVECC,
 *     ACVS, AVDC) with verified directory links.
 *   - Cost ranges live on the deep-dive pages, not here.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  FAQAccordion,
  SchemaScript,
  CalloutBox,
  StockImage,
} from '@carloOS/ui'
import { Specialties, type Specialty } from '../../data/specialties'

// Short credential label (e.g. "DACVIM (Cardiology)") parsed from the
// board-certification org string, which always names the diplomate credential
// in double quotes. Falls back to the leading college acronym.
function credentialLabel(s: Specialty): string {
  const quoted = s.boardCertificationOrg.match(/"([^"]+)"/)
  if (quoted) return quoted[1]
  return s.boardCertificationOrg.split(' ')[0]
}

// Initial-consultation cost for the reference table. The first entry in every
// specialty's averageCostRanges is the initial consultation; we surface the
// bare dollar band (stripping the "(typical US range)" label, which the table
// caption already states once).
function consultationCost(s: Specialty): string {
  const first = s.averageCostRanges[0]?.range ?? ''
  const match = first.match(/\$[\d,]+(?:[–-]\$?[\d,]+)?/)
  return match ? match[0] : '—'
}

// Hub-level FAQs — grounded ONLY in facts already stated on this page and in
// the per-specialty data (consultation cost ranges, board-certification
// credentials, referral pathway, insurance coverage pattern). Calibrated
// language; diagnostic and referral decisions always defer to the
// veterinarian. See QC-STANDARDS.md §1.
const HUB_FAQS = [
  {
    question: 'How much does a veterinary specialist visit cost?',
    answer:
      'An initial specialist consultation commonly runs about $150–500 in the United States, depending on the discipline — emergency and dentistry consultations tend to start lower, while most internal-medicine subspecialties start near $200–500. The consultation is only the entry point: advanced diagnostics (echocardiograms, MRI, CT, biopsy) and any procedure or surgery are billed separately and can reach several thousand dollars. The reference table on this page lists the typical initial-consultation range for each of the nine specialties. All figures are typical US ranges and are not guaranteed.',
  },
  {
    question: 'Do I need a referral to see a veterinary specialist?',
    answer:
      'Most board-certified specialists prefer — and some require — a referral from your primary veterinarian, who transfers records, prior bloodwork, and imaging so the specialist does not duplicate testing. Some teaching hospitals and specialty practices accept owner-initiated appointments. For a true emergency (collapse, labored breathing, a vision-threatening eye, an open fracture), go to a 24-hour emergency hospital first; specialty referral can follow once your pet is stabilized.',
  },
  {
    question: 'How do I confirm a veterinarian is actually board-certified?',
    answer:
      'Board certification means the veterinarian completed a multi-year residency and passed a specialty board exam administered by an AVMA-recognized college, and it is signaled by credential letters such as DACVIM, DACVD, DACVO, DACVECC, DACVS, or DAVDC. "Interest in" or "experience with" a specialty is not the same thing. Each college publishes a public directory of board-certified diplomates — confirm the practitioner appears in the directory linked on this page before assuming.',
  },
  {
    question: 'Does pet insurance cover specialist care?',
    answer:
      'Most accident-and-illness pet insurance plans reimburse specialist consultations, advanced diagnostics, and chronic specialty medications once the policy is active and waiting periods have cleared — provided the condition is not pre-existing. The variables that matter most for specialty care are annual maximums (a multi-day ICU stay or a chemotherapy protocol can exhaust low-cap plans), per-condition caps, and bilateral-condition language. Pre-existing condition exclusions are universal, so enrolling before a specialist-level diagnosis is documented is what keeps specialty care covered.',
  },
]

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Veterinary Specialists — When to See One | Vets.co',
  description:
    'Board-certified veterinary specialty guides — cardiology, oncology, neurology, ophthalmology, dermatology, dentistry, internal medicine, orthopedics, ER.',
  path: '/specialists',
  type: 'website',
})

export default function SpecialistsHubPage() {
  const url = 'https://vets.co/specialists'

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Specialists', url },
    ],
  })
  // ItemList — declares the hub as an ordered list of specialty deep-dives.
  // Helps AI Overviews + Perplexity surface the cluster as a connected set
  // rather than 9 unrelated pages.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Board-Certified Veterinary Specialties',
    description:
      'Nine board-certified veterinary specialties Vets.co covers in depth, with referral guidance, typical US cost ranges, and pet-insurance notes.',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: Specialties.length,
    itemListElement: Specialties.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.specialtyName,
      url: `https://vets.co/specialists/${s.slug}`,
    })),
  }
  const faqSchema = buildFAQSchema({
    questions: HUB_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  })
  const combined = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Specialists</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Veterinary Specialists
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Board-Certified Veterinary Specialists
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          Nine specialty deep-dives — when your primary vet refers, what to expect at the visit,
          typical US cost ranges, how pet insurance fits in, and how to verify board
          certification. Sourced from ACVIM, ACVD, ACVO, ACVECC, ACVS, AVDC, and AVMA references.
        </p>
      </div>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="vets-co:specialists-hero" aspect="16:9" variant="wide" priority />
      </div>

      <main className="px-container-sm sm:px-container py-12 max-w-5xl">
        {/* Extractable direct-answer summary (TL;DR) for SERP + AI citation */}
        <section className="bg-brand-dark rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            The short answer
          </div>
          <p className="text-white/90 leading-relaxed m-0 text-base max-w-3xl">
            A board-certified veterinary specialist has completed a multi-year residency and passed
            a specialty board exam from an AVMA-recognized college, signaled by credential letters
            like <strong>DACVIM, DACVD, DACVO, DACVECC, DACVS, or DAVDC</strong>. The nine
            disciplines pet owners most commonly reach are{' '}
            <strong>cardiology, oncology, dermatology, ophthalmology, neurology, dentistry,
            internal medicine, orthopedic surgery, and emergency &amp; critical care</strong>. Most
            specialists prefer a referral from your primary vet, who transfers records so testing
            is not duplicated. An initial consultation commonly runs <strong>$150–500</strong>, with
            advanced diagnostics and procedures billed separately and often reaching several
            thousand dollars. Most accident-and-illness pet insurance plans reimburse specialist
            care once the policy is active and waiting periods clear — but pre-existing conditions
            are excluded. Verify any specialist in the relevant college&apos;s public directory.
            All cost figures are typical US ranges and are not guaranteed.
          </p>
        </section>

        {/* Educational framing — top callout */}
        <CalloutBox variant="note" title="Educational — follow your vet's referral guidance">
          <p>
            This hub is educational. For your pet&apos;s specific situation, follow your primary
            veterinarian&apos;s referral guidance. Vets.co is a reference desk — not a referral
            service, not a hospital, and not a replacement for the veterinarian who has examined
            your pet.
          </p>
        </CalloutBox>

        {/* Intro section */}
        <section className="mb-10">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">
            What a board-certified specialist is
          </h2>
          <p className="text-brand-text-mid leading-relaxed mb-3">
            Board-certified veterinary specialists have completed a structured residency —
            typically three or more years beyond veterinary school — and passed a specialty board
            examination administered by an AVMA-recognized college. The credential letters
            (DACVIM, DACVD, DACVO, DACVECC, DACVS, DAVDC) signal a standard of training and continuing
            education that is independently verified.
          </p>
          <p className="text-brand-text-mid leading-relaxed mb-0">
            Specialists work in partnership with your primary vet: your primary vet handles
            routine and preventive care; the specialist handles the cases that benefit from
            advanced diagnostics and sub-specialty experience. Most pets never need to see a
            specialist. The nine disciplines below are the most common reasons your primary vet
            may suggest one.
          </p>
        </section>

        {/* At-a-glance reference table — grounded in per-specialty data */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2"
            style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}
          >
            Specialties at a glance
          </h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-3xl leading-relaxed">
            The board-certification credential, typical initial-consultation cost, and the most
            common reason a primary vet refers, for each of the nine disciplines. Consultation
            figures are typical US ranges for the first visit only — advanced diagnostics and any
            procedure or surgery are billed separately. All figures are typical US ranges and are
            not guaranteed.
          </p>
          <div className="overflow-x-auto border border-brand-border rounded-xl">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">
                Board-certified veterinary specialties with credential, typical initial
                consultation cost, and the most common reason for referral
              </caption>
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">
                    Specialty
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border whitespace-nowrap">
                    Board credential
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border whitespace-nowrap">
                    Typical consult cost
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">
                    Most common reason to refer
                  </th>
                </tr>
              </thead>
              <tbody>
                {Specialties.map((s) => (
                  <tr key={s.slug} className="border-b border-brand-border last:border-0 hover:bg-brand-surface/50">
                    <th scope="row" className="p-3 font-medium text-left align-top">
                      <Link href={`/specialists/${s.slug}`} className="text-brand-primary hover:underline no-underline">
                        {s.shortName}
                      </Link>
                    </th>
                    <td className="p-3 align-top text-brand-text-mid whitespace-nowrap">{credentialLabel(s)}</td>
                    <td className="p-3 align-top text-brand-text-mid whitespace-nowrap">{consultationCost(s)}</td>
                    <td className="p-3 align-top text-brand-text-light">{s.whenToSeeSummary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Specialty grid */}
        <section className="mb-12">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Nine Specialty Deep-Dives
          </div>
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">
            The disciplines we cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Specialties.map((s) => (
              <Link
                key={s.slug}
                href={`/specialists/${s.slug}`}
                className="group block bg-brand-surface border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {s.boardCertificationOrg.split(' ')[0]} · Board-Certified
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {s.specialtyName}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-3 m-0">
                  <span className="font-semibold text-brand-text-dark">When to see one:</span>{' '}
                  {s.whenToSeeSummary}
                </p>
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow text-brand-primary">
                  Read the guide
                  <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Pet insurance cross-link */}
        <section className="mb-12">
          <Link
            href="/reviews/best-pet-insurance"
            className="block bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary transition-colors"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Pet Insurance & Specialist Care
            </div>
            <div className="font-display font-bold text-brand-dark text-lg mb-2">
              Chronic specialist visits can cost $3,000–15,000 annually
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">
              Plans differ in how they handle specialist consultations, advanced diagnostics, and
              chronic medications. We compare on payout speed, exclusion language, and annual
              caps — not on commission rate.
            </p>
            <span className="inline-block mt-3 text-sm font-bold text-brand-primary">
              See our pet insurance comparison →
            </span>
          </Link>
        </section>

        {/* How to verify */}
        <section>
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">
            How to verify board certification
          </h2>
          <p className="text-brand-text-mid leading-relaxed mb-4">
            &quot;Interest in&quot; or &quot;experience with&quot; a specialty is not the same as
            board certification. Each specialty college publishes a public directory of board-
            certified diplomates — confirm the practitioner appears in the directory before
            assuming.
          </p>
          <ul className="space-y-2 text-sm text-brand-text-mid list-none p-0">
            <li>
              <a
                href="https://www.acvim.org/About/Find-a-Specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                ACVIM — Find a Specialist
              </a>{' '}
              (internal medicine, cardiology, oncology, neurology subspecialties)
            </li>
            <li>
              <a
                href="https://www.acvd.org/find-a-dermatologist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                ACVD — Find a Dermatologist
              </a>
            </li>
            <li>
              <a
                href="https://www.acvo.org/find-a-veterinary-ophthalmologist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                ACVO — Find a Veterinary Ophthalmologist
              </a>
            </li>
            <li>
              <a
                href="https://acvecc.org/find-an-ecc-specialist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                ACVECC — Find an Emergency & Critical Care Specialist
              </a>
            </li>
            <li>
              <a
                href="https://www.acvs.org/find-a-surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                ACVS — Find a Surgeon
              </a>{' '}
              (orthopedic and soft-tissue surgery)
            </li>
            <li>
              <a
                href="https://avdc.org/find-a-veterinary-dentist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                AVDC — Find a Veterinary Dentist
              </a>
            </li>
            <li>
              <a
                href="https://www.avma.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                AVMA — American Veterinary Medical Association (parent body)
              </a>
            </li>
          </ul>
          <p className="text-xs text-brand-text-light italic mt-6 mb-0">
            Vets.co Editorial — sourced from cited references. This hub is educational and does
            not replace evaluation, diagnosis, or treatment by a licensed veterinarian.
          </p>
        </section>

        {/* Hub FAQ — schema lives in the combined SchemaScript above */}
        <section className="mt-12">
          <h2
            className="font-display font-black text-brand-dark mb-5"
            style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}
          >
            Common questions about veterinary specialists
          </h2>
          <FAQAccordion items={HUB_FAQS} includeSchema={false} />
          <p className="text-xs text-brand-text-light mt-4 leading-relaxed max-w-3xl">
            For the tests a specialist commonly orders, see the{' '}
            <Link href="/diagnostics" className="text-brand-primary hover:underline">
              pet diagnostic tests
            </Link>{' '}
            library. To understand how coverage handles specialty care, read{' '}
            <Link href="/insurance/pre-existing-conditions" className="text-brand-primary hover:underline">
              how pre-existing conditions are treated
            </Link>{' '}
            and{' '}
            <Link href="/insurance/what-pet-insurance-covers" className="text-brand-primary hover:underline">
              what pet insurance covers
            </Link>
            . To put a number on whether coverage pays off, try the{' '}
            <Link href="/tools/pet-insurance-worth-it-calculator" className="text-brand-primary hover:underline">
              &ldquo;is pet insurance worth it?&rdquo; calculator
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  )
}
