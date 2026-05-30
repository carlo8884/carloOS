/**
 * Veterinary specialists hub — /specialists
 *
 * Lists the eight board-certified specialties Vets.co covers in depth.
 * Each card shows the discipline, the board-certification college, and a
 * one-line summary of when a primary vet typically refers.
 *
 * Editorial constraints (QC §1):
 *   - No fake clinician bylines, no fabricated review-process trust claims.
 *   - Board-certification orgs are named (ACVIM, ACVD, ACVO, ACVECC,
 *     AVDC) with verified directory links.
 *   - Cost ranges live on the deep-dive pages, not here.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  CalloutBox,
} from '@carloOS/ui'
import { Specialties } from '../../data/specialties'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Veterinary Specialists — When to See One | Vets.co',
  description:
    'Eight board-certified veterinary specialties — cardiology, oncology, dermatology, ophthalmology, neurology, dentistry, internal medicine, and emergency care.',
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
  const combined = combineSchemas(breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Specialists</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
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
          Eight specialty deep-dives — when your primary vet refers, what to expect at the visit,
          typical US cost ranges, how pet insurance fits in, and how to verify board
          certification. Sourced from ACVIM, ACVD, ACVO, ACVECC, AVDC, and AVMA references.
        </p>
      </div>

      <main className="px-container sm:px-container-sm py-12 max-w-5xl">
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
            (DACVIM, DACVD, DACVO, DACVECC, DAVDC) signal a standard of training and continuing
            education that is independently verified.
          </p>
          <p className="text-brand-text-mid leading-relaxed mb-0">
            Specialists work in partnership with your primary vet: your primary vet handles
            routine and preventive care; the specialist handles the cases that benefit from
            advanced diagnostics and sub-specialty experience. Most pets never need to see a
            specialist. The eight disciplines below are the most common reasons your primary vet
            may suggest one.
          </p>
        </section>

        {/* Specialty grid */}
        <section className="mb-12">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Eight Specialty Deep-Dives
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
      </main>
    </>
  )
}
