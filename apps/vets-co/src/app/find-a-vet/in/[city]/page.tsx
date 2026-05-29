/**
 * Vets.co City-Specific Find-a-Vet Landing — /find-a-vet/in/[city]
 *
 * Trust-hub foundation per MONETIZATION-ARCHITECT.md S7 (Universal Directory
 * Engine). Twenty metro landing pages anchoring "find a vet in [city]"
 * search intent, cross-linking to:
 *   - the state-level /find-a-vet/[state] page
 *   - the pet-insurance hub at /reviews/best-pet-insurance
 *   - the reviewer network at /reviewers
 *
 * IMPORTANT: the path is /find-a-vet/in/[city] rather than the obvious
 * /find-a-vet/[city] because the sibling /find-a-vet/[state] dynamic
 * segment would conflict in Next.js's app router. Nesting under /in/
 * keeps both directory layers in the same URL family without breaking
 * the state pages already shipped.
 *
 * QC-STANDARDS.md §1: we do NOT list specific veterinary practices unless
 * they've been independently verified. notable_practices is a structural
 * placeholder; the template renders gracefully without it.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import { Cities, findCity } from '../../../../data/cities'

interface PageProps {
  params: { city: string }
}

export function generateStaticParams() {
  return Cities.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const c = findCity(params.city)
  if (!c) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Find a Vet by City | Vets.co',
      description: 'Find a veterinarian in your metro.',
      path: `/find-a-vet/in/${params.city}`,
      type: 'website',
    })
  }
  return buildMetadata({
    siteId: 'vets-co',
    title: `Find a Vet in ${c.name}, ${c.state_abbr} | Vets.co`,
    description: `Find a veterinarian in ${c.name}. State licensing context, what to look for, specialty considerations, and pet insurance that works with any licensed vet.`,
    path: `/find-a-vet/in/${c.slug}`,
    type: 'website',
  })
}

const FAQ_QUESTIONS = (cityName: string, stateName: string) => [
  {
    question: `How do I choose a good vet in ${cityName}?`,
    answer: `Look for AAHA-accredited general practice hospitals, ask local rescues and breed-specific clubs for referrals, verify licensure through the ${stateName} Veterinary Medical Board, and prioritize a vet who explains diagnoses clearly and refers to specialists when appropriate.`,
  },
  {
    question: `Do I need to use a specific vet for my pet insurance to pay out?`,
    answer: `Most major pet insurance providers allow you to use any licensed veterinarian in the United States — including emergency hospitals and board-certified specialists. The insurance company reimburses you after you pay the vet. This is different from human health insurance.`,
  },
  {
    question: `What veterinary specialties matter most in ${cityName}?`,
    answer: `The specialty mix varies by region — for example, hot-climate metros face more heat emergencies; tick-heavy regions need internists comfortable with vector-borne disease; cities with strong exotic-pet populations need DVMs trained in avian and small-mammal medicine. The specialty considerations section below covers what's specific to ${cityName}.`,
  },
  {
    question: `Where do I find a 24-hour emergency vet in ${cityName}?`,
    answer: `Save the number of your nearest 24-hour emergency veterinary hospital before you need it — looking it up during a crisis costs time. For suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, $75 consultation fee applies). Our state guide for ${stateName} lists known emergency hospital coverage notes.`,
  },
]

export default function CityFindAVetPage({ params }: PageProps) {
  const city = findCity(params.city)
  if (!city) notFound()

  const url = `https://vets.co/find-a-vet/in/${city.slug}`
  const title = `Find a Vet in ${city.name}`
  const description = `Find a veterinarian in ${city.name}, ${city.state_abbr}. State licensing context, what to look for, and specialty considerations.`
  const faqs = FAQ_QUESTIONS(city.name, city.state)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title,
    description,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Find a Vet', url: 'https://vets.co/find-a-vet' },
      { name: city.name, url },
    ],
  })
  const schema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Banner-style FTC disclosure — appears before any affiliate CTA. */}
      <aside
        className="px-container sm:px-container-sm py-3 text-xs"
        style={{
          background: 'rgba(182,136,48,0.10)',
          borderBottom: '1px solid var(--brand-border)',
          color: 'var(--brand-text-mid)',
        }}
        aria-label="Affiliate disclosure"
      >
        <div className="max-w-5xl">
          <strong>Affiliate disclosure:</strong> This page contains links to
          pet insurance partners. Vets.co may earn a commission if you
          purchase a policy through these links — at no extra cost to you. We
          evaluate insurance on payout speed and exclusion language, not on
          commission rate.{' '}
          <Link
            href="/legal/affiliate-disclosure"
            className="underline"
            style={{ color: 'var(--brand-primary)' }}
          >
            Full disclosure
          </Link>
          .
        </div>
      </aside>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/find-a-vet" className="hover:text-brand-primary no-underline">Find a Vet</Link>
        <span>›</span>
        <span className="text-brand-text-mid">{city.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Veterinary Directory · {city.state}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
        >
          Find a Veterinarian in {city.name}
        </h1>
        <p className="text-lg font-light text-white/70 max-w-2xl leading-relaxed">
          A pet-owner&rsquo;s guide to choosing a vet in the {city.name} metro
          (population approximately {city.population_millions} million) —
          including state licensing context, what to look for, specialty
          considerations, and how pet insurance fits in.
        </p>
      </div>

      <div className="px-container sm:px-container-sm py-12 max-w-5xl">
        {/* TL;DR */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0">
            Most pet-owner health needs in {city.name} are handled by a general
            practice (GP) veterinarian. Build a relationship with a GP before
            you need them urgently. For after-hours emergencies, identify your
            nearest 24-hour emergency hospital and save the number now. Pet
            insurance generally works with any licensed vet in the U.S. —
            policy quality matters more than network. Verify any vet through
            the {city.state} Veterinary Medical Board before you commit.
          </p>
        </section>

        {/* State licensing context */}
        <section className="mb-12">
          <h2
            className="font-display font-bold text-brand-dark mb-3"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            Licensing in {city.state}
          </h2>
          <p className="text-brand-text-mid leading-relaxed">
            Every veterinarian who practices in {city.state} must be licensed
            by the {city.state} Veterinary Medical Board (or the state&rsquo;s
            equivalent regulatory body). You can verify a vet&rsquo;s active
            license, see any disciplinary history, and confirm specialty
            board-certification claims by searching the board&rsquo;s public
            license-verification site. If a vet claims a specialty
            (cardiology, oncology, internal medicine, surgery, dermatology,
            ophthalmology, behavior, dentistry, neurology), you can also
            verify against the issuing specialty college — ACVIM, ACVS, ACVO,
            ACVD, ACVB, AVDC, and others all maintain public diplomate
            directories. A vet not listed in their claimed college&rsquo;s
            directory is a red flag.
          </p>
        </section>

        {/* What to look for */}
        <section className="mb-12">
          <h2
            className="font-display font-bold text-brand-dark mb-3"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            What to look for in a {city.name} vet
          </h2>
          <p className="text-brand-text-mid leading-relaxed mb-5 max-w-3xl">
            The questions to ask before you commit your pet&rsquo;s primary
            care to a practice. None of these are deal-breakers on their own,
            but they cluster: a practice that scores well on three or four is
            usually a practice that scores well on all of them.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              [
                'AAHA accreditation',
                'The American Animal Hospital Association sets voluntary standards higher than the minimum required by state law. Accreditation is a strong positive signal but not required.',
              ],
              [
                'Clear communication',
                'A vet who explains your pet\'s diagnosis and treatment plan in language you can repeat back is a vet who will catch your follow-up questions later. Reluctance to explain is the single most common red flag.',
              ],
              [
                'Willingness to refer',
                'A confident GP refers complex cases to board-certified specialists. Reluctance to refer — especially in surgical, oncology, or neurology cases — is a problem.',
              ],
              [
                'Transparent estimates',
                'Before any non-emergency procedure, you should receive a written estimate. Estimates that come in with significant unannounced overages are a warning sign for a vet you\'ll want to switch from.',
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-brand-surface border border-brand-border rounded-xl p-5 flex gap-3"
              >
                <span className="text-brand-primary text-lg flex-shrink-0">✓</span>
                <div>
                  <div className="font-bold text-brand-dark text-sm mb-1">{title}</div>
                  <p className="text-xs text-brand-text-mid leading-relaxed m-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialty considerations — region-specific */}
        <section className="mb-12">
          <h2
            className="font-display font-bold text-brand-dark mb-3"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            Specialty considerations in {city.name}
          </h2>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
              Specialty concentration
            </div>
            <p className="text-brand-text-mid leading-relaxed m-0">
              {city.specialty_concentration}
            </p>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
              Local context
            </div>
            <p className="text-brand-text-mid leading-relaxed m-0">
              {city.local_context}
            </p>
          </div>
        </section>

        {/* Find a Vet CTA */}
        <section className="mb-12">
          <div
            className="rounded-xl p-7"
            style={{
              background: 'var(--brand-primary-pale)',
              border: '1px solid var(--brand-border)',
            }}
          >
            <h3 className="font-display font-bold text-brand-dark text-xl mb-2">
              Browse the {city.state} directory
            </h3>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">
              Our state-level guide for {city.state} covers 24-hour emergency
              hospital coverage notes, board-certified specialty access, and
              metro-by-metro guidance.
            </p>
            <Link
              href={`/find-a-vet/${city.state_slug}`}
              className="inline-flex items-center font-semibold text-sm px-6 py-3 rounded no-underline hover:opacity-90"
              style={{ background: 'var(--brand-primary)', color: '#FFFFFF' }}
            >
              Open {city.state} guide
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Pet insurance cross-link — breed/condition framing */}
        <section className="mb-12">
          <h2
            className="font-display font-bold text-brand-dark mb-3"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            Pet insurance works with any licensed vet
          </h2>
          <p className="text-brand-text-mid leading-relaxed mb-4 max-w-3xl">
            Whichever vet you choose in {city.name}, your pet insurance policy
            does not need to match. Major U.S. pet insurance providers
            reimburse you after you pay the vet, and they accept claims from
            any licensed practice in the country — including emergency
            hospitals and board-certified specialists. Policy quality matters
            far more than the network: payout speed, exclusion language,
            bilateral-condition handling, and the renewal-year footnotes.
            Breed-specific conditions and pre-existing exclusions decide
            whether the policy actually pays the bill.
          </p>
          <Link
            href="/reviews/best-pet-insurance"
            className="inline-flex items-center text-sm font-semibold no-underline hover:underline"
            style={{ color: 'var(--brand-primary)' }}
          >
            Compare pet insurance plans
            <span aria-hidden="true" className="ml-1.5">→</span>
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2
            className="font-display font-bold text-brand-dark mb-4"
            style={{ fontSize: 'clamp(20px, 2.4vw, 28px)' }}
          >
            Frequently asked
          </h2>
          <div className="space-y-4">
            {faqs.map((q) => (
              <div
                key={q.question}
                className="bg-brand-surface border border-brand-border rounded-xl p-5"
              >
                <div className="font-bold text-brand-dark text-sm mb-2">
                  {q.question}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Email capture — choosing-a-vet checklist (Mailchimp tag below) */}
        <section className="mb-4">
          <EmailCapture
            variant="section"
            siteId="vets-co"
            title="Get our 'choosing a vet' checklist"
            subtitle={`A one-page PDF you can take to your first appointment in ${city.name}. Includes the AAHA-accreditation lookup, license-verification links, and the five questions to ask the front desk before you book.`}
            ctaText="Send me the checklist"
            source={`find-a-vet-${city.slug}:vet-checklist`}
            perks={[
              'One PDF, one page',
              'License-verification links for ' + city.state,
              'No paid placements',
              'Unsubscribe anytime',
            ]}
          />
          {/*
           * Mailchimp tag (configured server-side in /api/subscribe):
           *   vets-co:vet-checklist
           * The `source` prop above tags individual signups with the city
           * slug so Carlo can see which metros are driving signups.
           */}
        </section>
      </div>
    </>
  )
}
