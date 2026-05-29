/**
 * Veterinary specialty deep-dive — /specialists/[slug]
 *
 * Programmatic template that consumes apps/vets-co/src/data/specialties.ts
 * and renders a long-form specialist guide for one of eight board-certified
 * specialties. Each page reads the same:
 *
 *   Overview → When to See → Common Conditions → What to Expect
 *   → Diagnostics → Cost Ranges → Pet Insurance → How to Find One
 *   → Questions to Ask → FAQs → Sources
 *
 * Editorial constraints (QC §1):
 *   - Byline is "Vets.co Editorial — sourced from cited references."
 *     No DVM or DACV* fake credential strings.
 *   - All cost figures are labeled "typical" — never guaranteed.
 *   - Insurance language is comparative, never a promise that a specific
 *     plan will pay a specific bill.
 *   - GP-referral path is named first under "How to Find One."
 *   - No specific dosing, no treatment promises, no fabricated outcomes.
 *
 * JSON-LD: Article + MedicalWebPage + FAQPage + BreadcrumbList.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleLayout,
  CalloutBox,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  SidebarCard,
} from '@carloOS/ui'
import { Specialties, SpecialtiesBySlug, type Specialty } from '../../../data/specialties'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Specialties.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const s = SpecialtiesBySlug[params.slug]
  if (!s) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Veterinary Specialists — Sourced Guides | Vets.co',
      description:
        'Board-certified veterinary specialists by discipline — when to refer, what to expect, typical cost ranges, and how pet insurance fits in.',
      path: '/specialists',
      type: 'website',
    })
  }
  // Title is kept tight to fit the 70-char metadata-policy ceiling.
  return buildMetadata({
    siteId: 'vets-co',
    title: `${s.specialtyName} — When to See One | Vets.co`,
    description: `${s.specialtyName} guide: when your primary vet refers, conditions treated, what to expect at the visit, typical US cost ranges, and pet insurance notes.`,
    path: `/specialists/${s.slug}`,
    type: 'article',
  })
}

function faqsFor(s: Specialty) {
  return [
    {
      question: `What does a ${s.shortName.toLowerCase()} specialist do?`,
      answer: `A board-certified ${s.shortName.toLowerCase()} specialist has completed a multi-year residency in the discipline beyond veterinary school and passed the ${s.boardCertificationOrg.split(' ')[0]} specialty examination. They handle the cases your primary veterinarian refers out — complex diagnostics, advanced imaging, and management decisions that benefit from sub-specialty training. They work in partnership with your primary vet rather than replacing them.`,
    },
    {
      question: `Do I need a referral to see a ${s.shortName.toLowerCase()} specialist?`,
      answer:
        'In the United States you can often self-refer, but a referral from your primary veterinarian is strongly recommended. A referral transfers the prior workup — bloodwork, imaging, treatment history — so the specialist does not duplicate testing, and it keeps your primary vet in the loop for routine care between specialty visits.',
    },
    {
      question: `How much does a ${s.shortName.toLowerCase()} specialist visit cost?`,
      answer: `Initial consultations for ${s.specialtyName.toLowerCase()} typically range from $200–500 in the United States, with diagnostics added on top. Total first-visit cost is highly variable because it depends on what testing is needed. See the cost-range table above for typical figures. Geographic location, teaching-hospital vs. private practice, and the complexity of the case all affect the final bill.`,
    },
    {
      question: 'Does pet insurance cover specialist visits?',
      answer:
        'Most accident-and-illness pet insurance plans reimburse board-certified specialist consultations, diagnostics, and treatments — provided the condition is not pre-existing and any waiting period has passed. Coverage details vary by insurer and plan tier. We compare plans on payout speed, exclusion language, and annual maximum limits — the variables that actually decide whether the policy pays the bill. See our pet insurance comparison for like-for-like detail.',
    },
    {
      question: `How do I verify a ${s.shortName.toLowerCase()} specialist is board-certified?`,
      answer: `${s.boardCertificationOrg} maintains a public directory of board-certified diplomates. Confirm the specialist appears in the directory and check the credential letters on their hospital profile. Board certification requires a structured residency and a specialty-board exam; "interest in" or "experience with" a specialty is not the same as board certification.`,
    },
    {
      question: 'How do specialists work with my primary vet?',
      answer:
        'Specialists send a written report to your primary veterinarian after each visit and stay in touch by phone or email when treatment changes. Your primary vet continues to handle routine care — vaccinations, preventive medication, minor illnesses — and refers back to the specialist when needed. This is the model that produces the best outcomes; specialists are not designed to replace your primary vet.',
    },
  ]
}

export default function SpecialistPage({ params }: PageProps) {
  const s = SpecialtiesBySlug[params.slug]
  if (!s) notFound()

  const url = `https://vets.co/specialists/${s.slug}`
  const faqs = faqsFor(s)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title: `${s.specialtyName} — When to See One`,
    description: `A plain-language guide to ${s.specialtyName.toLowerCase()}: when to refer, what to expect, and typical cost ranges.`,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const medSchema = buildMedicalWebPageSchema({
    name: s.specialtyName,
    description: `Educational overview of ${s.specialtyName.toLowerCase()} for pet owners — sourced from ${s.boardCertificationOrg.split(' ')[0]} and AVMA references.`,
    url,
    authorName: 'Vets.co Editorial',
    lastReviewed: '2026-05-29',
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Specialists', url: 'https://vets.co/specialists' },
      { name: s.specialtyName, url },
    ],
  })
  const combined = combineSchemas(articleSchema, medSchema, faqSchema, breadcrumbSchema)

  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combined}
      hero={{
        title: `${s.specialtyName}: When to See One`,
        subtitle: `${s.whenToSeeSummary} A plain-language guide to what a board-certified ${s.shortName.toLowerCase()} specialist does, what visits look like, what they typically cost in the US, and how pet insurance fits in.`,
        category: 'Veterinary Specialists',
        categoryHref: '/specialists',
        authorName: 'Vets.co Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2026',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Specialists', href: '/specialists' },
        { name: s.specialtyName },
      ]}
      sidebar={
        <>
          <SidebarCard title="In This Guide">
            <nav aria-label="Table of contents">
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5" role="list">
                {[
                  { label: 'Overview', href: '#overview' },
                  { label: 'When to See This Specialist', href: '#when-to-see' },
                  { label: 'Common Conditions', href: '#common-conditions' },
                  { label: 'What to Expect at the Visit', href: '#what-to-expect' },
                  { label: 'Typical Diagnostics', href: '#diagnostics' },
                  { label: 'Average Cost Ranges', href: '#costs' },
                  { label: 'Pet Insurance Coverage', href: '#insurance' },
                  { label: 'How to Find One', href: '#how-to-find' },
                  { label: 'Questions to Ask', href: '#questions' },
                  { label: 'FAQs', href: '#faqs' },
                  { label: 'Sources', href: '#sources' },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-xs text-brand-text-mid no-underline block px-2 py-1.5 rounded hover:bg-brand-white hover:text-brand-primary transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SidebarCard>
          <RelatedLinks
            title="Find Care & Coverage"
            links={[
              { label: 'Find a Vet Near You', href: '/find-a-vet' },
              { label: 'Compare Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
              { label: 'All Veterinary Specialties', href: '/specialists' },
              { label: 'Emergency Signs Guide', href: '/health/emergency-signs' },
            ]}
          />
          <CrossPortfolioCard
            currentSite="vets-co"
            contentType="specialty"
            variant="sidebar"
          />
          <SidebarCard title="Board Certification">
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">
              {s.boardCertificationOrg}
            </p>
            <a
              href={s.boardCertificationDirectoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-primary no-underline hover:underline"
            >
              Verify a specialist →
            </a>
          </SidebarCard>
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Free Pet Health Tips"
            subtitle="Practical, sourced guidance weekly."
            source={`specialist-${s.slug}`}
          />
        </>
      }
    >
      {/* MANDATORY top callout — educational framing + primary-vet referral path */}
      <CalloutBox variant="note" title="Educational — follow your vet's referral guidance">
        <p>
          This page is educational. For your pet&apos;s specific situation, follow your primary
          veterinarian&apos;s referral guidance. Vets.co is a reference desk — not a referral
          service, not a hospital, and not a replacement for the veterinarian who has examined
          your pet.
        </p>
      </CalloutBox>

      {/* Overview */}
      <h2 id="overview">Overview</h2>
      <p>
        <strong>{s.specialtyName}</strong> is the discipline that handles cases requiring training
        beyond a general-practice veterinary degree. Diplomates of {s.boardCertificationOrg.split(' — ')[0].split(' (')[0]} have completed a structured residency — typically three or more years
        after veterinary school — and passed a specialty board examination. The credential matters
        because it signals a standard of training and continuing education that is independently
        verified.
      </p>
      <p>
        {s.whenToSeeSummary} {s.specialtyName} specialists work in partnership with your primary
        veterinarian: your primary vet continues routine care, preventive medicine, and minor
        illness; the specialist handles the cases that benefit from advanced diagnostics and
        sub-specialty experience, then sends a written report back so both teams stay aligned.
      </p>

      {/* When to See */}
      <h2 id="when-to-see">When to See This Specialist</h2>
      <p>
        Most pets do not need to see a {s.shortName.toLowerCase()} specialist. The situations
        below are the ones where the additional training reliably changes outcomes. Your primary
        vet is the right first call for any of these — they will triage urgency and transfer
        records to the specialist if a referral is warranted.
      </p>
      <ul>
        {s.whenToSee.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {/* Common Conditions */}
      <h2 id="common-conditions">Common Conditions Treated</h2>
      <p>
        The conditions below are common reasons for referral. Each one has its own diagnostic
        workup, management plan, and prognosis range — the specialist will tailor the approach to
        your pet&apos;s specifics rather than apply a one-size-fits-all protocol.
      </p>
      <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
        {s.commonConditionsTreated.map((c) => (
          <div
            key={c.name}
            className="bg-brand-surface border border-brand-border rounded-xl p-5"
          >
            <div className="font-display font-bold text-brand-dark text-base mb-2">{c.name}</div>
            <p className="text-sm text-brand-text-mid leading-relaxed m-0">{c.summary}</p>
          </div>
        ))}
      </div>

      {/* PET INSURANCE CTA — mid-page */}
      <section className="not-prose my-10">
        <Link
          href="/reviews/best-pet-insurance"
          className="block bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary transition-colors"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Pet Insurance & Chronic Specialist Care
          </div>
          <div className="font-display font-bold text-brand-dark text-lg mb-2">
            Chronic specialist visits can cost $3,000–15,000 annually
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3 m-0">
            Pet-insurance plans differ widely in how they handle specialist consultations,
            advanced diagnostics, and chronic medications. We compare plans on payout speed,
            exclusion language, and annual-maximum structure — the variables that decide whether
            the policy pays the bill.
          </p>
          <span className="text-sm font-bold text-brand-primary">
            See our pet insurance comparison →
          </span>
        </Link>
      </section>

      {/* What to Expect */}
      <h2 id="what-to-expect">What to Expect at the Visit</h2>
      <p>
        A specialty visit is longer and more thorough than a routine primary-care appointment.
        Plan for at least an hour at the first visit, sometimes more if diagnostics are done at
        the same appointment.
      </p>
      <ul>
        {s.whatToExpectAtVisit.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {/* Diagnostics */}
      <h2 id="diagnostics">Typical Diagnostics</h2>
      <p>
        The diagnostic tools below are the ones {s.shortName.toLowerCase()} specialists use most
        often. Not every pet needs every test — the specialist will recommend the ones that are
        likely to change management for your pet&apos;s situation.
      </p>
      <ul>
        {s.typicalDiagnostics.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      {/* Cost Ranges */}
      <h2 id="costs">Average Cost Ranges</h2>
      <p>
        The figures below are typical US ranges drawn from public pet-care cost surveys,
        teaching-hospital fee schedules, and insurance-claim averages. They are not quotes from
        any specific hospital and they vary considerably by region, hospital type
        (specialty/teaching vs. private), and case complexity. Always ask for a written estimate
        before a procedure begins.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-brand-border">
              <th className="text-left py-3 pr-4 font-bold text-brand-text-light text-2xs tracking-eyebrow uppercase">
                Service
              </th>
              <th className="text-left py-3 font-bold text-brand-text-light text-2xs tracking-eyebrow uppercase">
                Typical Range
              </th>
            </tr>
          </thead>
          <tbody>
            {s.averageCostRanges.map((c) => (
              <tr key={c.service} className="border-b border-brand-border">
                <td className="py-3 pr-4 text-brand-dark font-semibold align-top">{c.service}</td>
                <td className="py-3 text-brand-text-mid leading-relaxed">{c.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-brand-text-light italic">
        Cost figures are typical published ranges, not guarantees. Your hospital&apos;s estimate
        is the only figure you can plan against.
      </p>

      {/* Insurance */}
      <h2 id="insurance">Pet Insurance Coverage</h2>
      <p>{s.insuranceCoverageNotes}</p>
      <p>
        For a like-for-like comparison of how the major pet-insurance plans handle specialist
        care, see{' '}
        <Link href="/reviews/best-pet-insurance" className="text-brand-primary hover:underline">
          our pet insurance comparison
        </Link>
        . We grade on payout behavior — not on commission rate.
      </p>

      {/* How to Find One */}
      <h2 id="how-to-find">How to Find One</h2>
      <p>
        The most reliable referral path starts with the veterinarian who already knows your pet.
        Self-referral is possible for most specialties, but a primary-vet referral transfers
        records and case context that prevents duplicate testing.
      </p>
      <ul>
        {s.howToFindOne.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      {/* Questions to Ask */}
      <h2 id="questions">Questions to Ask the Specialist</h2>
      <p>
        Bring these to the first visit. Writing them down in advance helps you remember to ask
        them — and writing the answers down as you go helps you compare options later.
      </p>
      <ul>
        {s.questionsToAskTheSpecialist.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>

      {/* FAQs */}
      <h2 id="faqs">Frequently Asked Questions</h2>
      <div className="not-prose space-y-4">
        {faqs.map((q) => (
          <details
            key={q.question}
            className="bg-brand-surface border border-brand-border rounded-xl p-5 group"
          >
            <summary className="font-bold text-brand-dark text-sm cursor-pointer list-none flex justify-between items-center gap-3">
              <span>{q.question}</span>
              <span className="text-brand-primary text-lg flex-shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="text-sm text-brand-text-mid leading-relaxed mt-3 mb-0">{q.answer}</p>
          </details>
        ))}
      </div>

      {/* Sources */}
      <section
        id="sources"
        className="not-prose mt-12 pt-8 border-t border-brand-border"
      >
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
          Sources
        </div>
        <ul className="space-y-2 text-sm text-brand-text-mid list-none p-0">
          {s.citedSources.map((c) => (
            <li key={c.url}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-brand-text-light italic mt-4 mb-0">
          Vets.co Editorial — sourced from cited references. This page is educational. It does not
          replace evaluation, diagnosis, or treatment by a licensed veterinarian. Cost figures are
          typical published ranges, not guarantees. Pet-insurance coverage details vary by plan
          and insurer; consult the policy for binding terms.
        </p>
      </section>

      {/* Back to hub */}
      <div className="mt-10 pt-8 border-t border-brand-border not-prose">
        <Link
          href="/specialists"
          className="text-brand-primary text-sm font-bold no-underline hover:underline"
        >
          ← All veterinary specialties
        </Link>
      </div>
    </ArticleLayout>
  )
}
