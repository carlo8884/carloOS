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
  SchemaScript,
  ArticleLayout,
  CalloutBox,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'
import {
  Diagnostics,
  DiagnosticsBySlug,
  type Diagnostic,
  type ResultUrgency,
} from '../../../data/diagnostics'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Diagnostics.map((d) => ({ slug: d.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const d = DiagnosticsBySlug[params.slug]
  if (!d) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Pet Diagnostic Tests — Cost & Results | Vets.co',
      description:
        'Plain-language deep dives on common veterinary diagnostic tests: what they measure, why vets order them, what results mean, and typical US cost ranges.',
      path: '/diagnostics',
      type: 'website',
    })
  }
  // Title ≤ 70 chars enforced by metadata-policy.mjs.
  return buildMetadata({
    siteId: 'vets-co',
    title: `${d.testName} — Results & Cost | Vets.co`,
    description: `${d.testName}: what it measures, why vets order it, what results mean in plain language, and typical US cost ranges. Sourced from ACVIM, AAHA, and Merck.`,
    path: `/diagnostics/${d.slug}`,
    type: 'article',
  })
}

// ─── result-urgency palette (color-coded by tier) ──────────────────────
interface UrgencyStyle {
  label: string
  bg: string
  text: string
  badgeBg: string
}
const URGENCY_STYLE: Record<ResultUrgency, UrgencyStyle> = {
  routine: {
    label: 'Routine',
    bg: 'bg-[#E9F4EC]',
    text: 'text-[#1E4A28]',
    badgeBg: 'bg-[#2A6A3A]',
  },
  urgent: {
    label: 'Urgent',
    bg: 'bg-[#FFF8EC]',
    text: 'text-[#7A5A18]',
    badgeBg: 'bg-[#C8952A]',
  },
  emergency: {
    label: 'Emergency',
    bg: 'bg-brand-danger/8',
    text: 'text-brand-danger',
    badgeBg: 'bg-brand-danger',
  },
}

function categoryLabel(d: Diagnostic): string {
  switch (d.category) {
    case 'blood':
      return 'Blood Test'
    case 'urine':
      return 'Urine Test'
    case 'imaging':
      return 'Imaging Study'
    case 'cardiac':
      return 'Cardiac Imaging'
    case 'biopsy':
      return 'Tissue Sampling'
  }
}

export default function DiagnosticPage({ params }: PageProps) {
  const d = DiagnosticsBySlug[params.slug]
  if (!d) notFound()

  const url = `https://vets.co/diagnostics/${d.slug}`

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title: `${d.testName} — Veterinary Diagnostic Deep Dive`,
    description: `Plain-language overview of ${d.testName}: what it measures, why vets order it, what results mean, and typical US cost ranges.`,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  })
  const medSchema = buildMedicalWebPageSchema({
    name: d.testName,
    description: `Veterinary diagnostic deep dive for ${d.testName}. Educational reference only — your veterinarian's interpretation supersedes any general guidance here.`,
    url,
    authorName: 'Vets.co Editorial',
    lastReviewed: '2026-05-30',
  })
  const faqSchema = buildFAQSchema({ questions: d.faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Diagnostics', url: 'https://vets.co/diagnostics' },
      { name: d.testName, url },
    ],
  })
  const combined = combineSchemas(articleSchema, medSchema, faqSchema, breadcrumbSchema)

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Diagnostics', href: '/diagnostics' },
    { name: d.testName, href: `/diagnostics/${d.slug}` },
  ]

  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="vets-co"
        hero={{
          title: `${d.testName}`,
          subtitle: `What it measures, why a veterinarian orders it, what the results mean in plain language, and typical US cost ranges — sourced from ACVIM, AAHA, ACVR, and the Merck Veterinary Manual.`,
          category: `Diagnostic Test · ${categoryLabel(d)}`,
          authorName: 'Vets.co Editorial — sourced from cited references',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={breadcrumbs}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick facts
              </div>
              <div className="text-xs text-brand-text-mid space-y-2">
                <div>
                  <span className="font-bold text-brand-dark">Category:</span> {categoryLabel(d)}
                </div>
                <div>
                  <span className="font-bold text-brand-dark">Duration:</span> {d.duration}
                </div>
                <div>
                  <span className="font-bold text-brand-dark">Also known as:</span>{' '}
                  {d.alsoKnownAs.join(', ')}
                </div>
              </div>
            </div>

            <RelatedLinks
              title="Related Guides"
              links={[
                {
                  label: `Find a ${
                    d.interpretingSpecialtySlug === 'veterinary-cardiology'
                      ? 'Cardiologist'
                      : 'Specialist'
                  }`,
                  href: `/specialists/${d.interpretingSpecialtySlug}`,
                },
                ...d.relatedLinks,
                { label: 'Find a Vet Near You', href: '/find-a-vet' },
                { label: 'Compare Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
              ]}
            />

            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical, vet-sourced guidance weekly."
              source={`diagnostics-${d.slug}`}
            />
          </>
        }
      >
        <div className="carloOS-article">
          {/* MANDATORY TOP CALLOUT — interpretation supersedes general guidance */}
          <CalloutBox variant="note" title="Result interpretation depends on your pet's clinical picture">
            Result interpretation depends on your pet&apos;s clinical picture — your veterinarian&apos;s
            interpretation supersedes any general guidance here. This page is an educational
            reference, not medical advice for an individual patient.
          </CalloutBox>

          {/* What it measures */}
          <h2>What {d.testName} measures</h2>
          <p>{d.whatItMeasures}</p>

          {/* When vets order it */}
          <h2>When vets order {d.testName}</h2>
          <p>
            Veterinarians order {d.testName} in several clinical contexts. The most common reasons
            include:
          </p>
          <ul>
            {d.whenVetsOrder.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>

          {/* How it's done */}
          <h2>How {d.testName} is done</h2>
          <p>{d.howItsDone}</p>

          {/* Preparation */}
          <h2>Preparation</h2>
          <p>
            Before {d.testName}, your veterinarian or clinic typically asks owners to handle a few
            things:
          </p>
          <ul>
            {d.preparationNeeded.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          {/* Duration */}
          <h2>How long it takes</h2>
          <p>{d.duration}</p>

          {/* Typical cost */}
          <h2>Typical cost</h2>
          <p>
            Cost varies by region, hospital, and complexity. The figures below are{' '}
            <strong>typical US ranges</strong>, never guaranteed — your individual quote may fall
            outside the range based on local pricing and whether the test is bundled with other
            diagnostics.
          </p>
          <div className="not-prose space-y-3 my-6">
            {d.typicalCost.map((c) => (
              <div
                key={c.range}
                className="bg-brand-surface border border-brand-border rounded-xl p-5"
              >
                <div className="font-display font-bold text-brand-dark text-sm mb-1">{c.range}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{c.factors}</div>
              </div>
            ))}
          </div>

          {/* MID-PAGE PET-INSURANCE CTA */}
          <section className="not-prose my-10">
            <Link
              href="/reviews/best-pet-insurance"
              className="block bg-brand-primary/5 border-2 border-brand-primary/40 rounded-xl p-6 no-underline hover:border-brand-primary"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Pet Insurance & Diagnostic Costs
              </div>
              <div className="font-display font-bold text-brand-dark text-lg mb-2">
                Diagnostic workups commonly run $300-2,000
              </div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Pet insurance covers most diagnostic costs once your policy is active and waiting
                periods have passed — see our comparison →
              </p>
            </Link>
          </section>

          {/* What results mean */}
          <h2>What results mean</h2>
          <p>
            The brief interpretations below are <em>general</em> — your veterinarian&apos;s
            interpretation, made in the full context of your pet&apos;s history and physical exam,
            supersedes anything here.
          </p>
          <div className="not-prose space-y-3 my-6">
            {d.whatResultsMean.map((r) => {
              const style = URGENCY_STYLE[r.urgency]
              return (
                <div
                  key={r.result}
                  className={`border border-brand-border ${style.bg} rounded-xl p-5`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className={`flex-shrink-0 ${style.badgeBg} text-white font-display font-black text-2xs tracking-eyebrow uppercase px-2 py-1 rounded`}
                    >
                      {style.label}
                    </span>
                    <div className="font-display font-bold text-brand-dark text-sm">
                      {r.result}
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed m-0 text-brand-text-mid`}>
                    {r.interpretation}
                  </p>
                </div>
              )
            })}
          </div>

          {/* What comes next */}
          <h2>What comes next</h2>
          <p>
            Depending on the result, your veterinarian typically recommends one or more of the
            following next steps:
          </p>
          <ul>
            {d.whatComesNext.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          {/* Insurance coverage */}
          <h2>Insurance coverage</h2>
          <p>{d.insuranceCoverageNotes}</p>

          {/* Result interpretation always defers to the vet */}
          <CalloutBox
            variant="tip"
            title="Always discuss results with your veterinarian"
          >
            Reference ranges, urgency tiers, and general interpretations on this page are
            educational. Your veterinarian interprets {d.testName} results in the context of your
            pet&apos;s history, physical exam, and any concurrent diagnostics — and that
            interpretation supersedes any general guidance here.
          </CalloutBox>

          {/* FAQs */}
          <h2>Frequently asked questions</h2>
          <div className="not-prose space-y-4">
            {d.faqs.map((q) => (
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
                <p className="text-sm text-brand-text-mid leading-relaxed mt-3 mb-0">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Sources */}
          <section className="not-prose mt-12 pt-8 border-t border-brand-border">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
              Sources
            </div>
            <ul className="space-y-2 text-sm text-brand-text-mid list-none p-0">
              {d.citedSources.map((c) => (
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
              Vets.co Editorial — sourced from cited references. Content is educational and does
              not replace evaluation or interpretation by a licensed veterinarian. Cost ranges are
              typical US figures and are not guaranteed.
            </p>
          </section>

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-brand-border not-prose">
            <Link
              href="/diagnostics"
              className="text-brand-primary text-sm font-bold no-underline hover:underline"
            >
              ← Back to all diagnostic tests
            </Link>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
