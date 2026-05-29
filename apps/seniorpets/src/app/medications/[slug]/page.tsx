import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  ArticleByline,
  CalloutBox,
  FAQAccordion,
  EmailCapture,
} from '@carloOS/ui'

import { MEDICATIONS, getMedication } from '../../../data/medications'
import { getReviewerByline } from '../../../data/reviewers'
import { AffiliateDisclosure, AffiliateLink, VetDisclaimer } from '../../../components'
import type { MedicationContent } from '../../../content/types'

import * as MedicationModules from '../../../content/medications/_index'

function getContent(slug: string): MedicationContent | null {
  const m = (MedicationModules as Record<string, { default?: MedicationContent }>)[
    `medication_${slug.replace(/-/g, '_')}`
  ]
  return m?.default ?? null
}

export async function generateStaticParams() {
  return MEDICATIONS.map((m) => ({ slug: m.slug }))
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meta = getMedication(params.slug)
  if (!meta) return {}
  return buildMetadata({
    siteId: 'seniorpets',
    title: `${meta.name} — Senior Pet Medication Reference`,
    description: meta.description,
    path: `/medications/${meta.slug}`,
    category: 'Senior Pet Medications',
    type: 'article',
  })
}

export default function MedicationPage({ params }: PageProps) {
  const meta = getMedication(params.slug)
  if (!meta) return notFound()
  const content = getContent(params.slug)
  const reviewer = getReviewerByline()

  const url = `https://seniorpetpharmacy.com/medications/${meta.slug}`

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'seniorpets',
      title: meta.name,
      description: meta.description,
      url,
      imageUrl: '',
      authorName: 'SeniorPetPharmacy Editorial',
      publishedAt: content?.publishedAt ?? '2026-05-29T00:00:00Z',
      modifiedAt: content?.updatedAt ?? '2026-05-29T00:00:00Z',
    }),
    buildMedicalWebPageSchema({
      name: meta.name,
      description: meta.description,
      url,
      authorName: 'SeniorPetPharmacy Editorial',
      lastReviewed: (content?.updatedAt ?? '2026-05-29').slice(0, 10),
    }),
    ...(content?.faqs?.length
      ? [
          buildFAQSchema({
            questions: content.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            })),
          }),
        ]
      : []),
  )

  return (
    <>
      <SchemaScript schema={schema} />
      <article className="px-container sm:px-container-sm py-12 max-w-content mx-auto">
        <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
          <Link href="/" className="hover:text-brand-primary no-underline">
            Home
          </Link>
          <span>›</span>
          <Link href="/medications" className="hover:text-brand-primary no-underline">
            Medications
          </Link>
          <span>›</span>
          <span className="text-brand-text-mid">{meta.name}</span>
        </nav>

        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          {meta.drugClass}
        </div>
        <h1 className="font-display font-semibold text-brand-dark text-4xl sm:text-5xl tracking-tight mb-2 leading-tight">
          {meta.name}
        </h1>
        <p className="text-sm text-brand-text-light mb-4">
          Active ingredient: <strong>{meta.activeIngredient}</strong>
          {meta.prescription ? ' · Prescription required' : ' · Over-the-counter'}
        </p>

        {content?.abstract && (
          <p className="text-lg text-brand-text-mid leading-relaxed max-w-3xl mb-2">
            {content.abstract}
          </p>
        )}

        <ArticleByline
          siteName="SeniorPetPharmacy Editorial"
          publishedAt={content?.publishedAt ?? '2026-05-29T00:00:00Z'}
          updatedAt={content?.updatedAt ?? '2026-05-29T00:00:00Z'}
          reviewedBy={reviewer}
        />

        {/* ── Vet disclaimer — prominent on every med page ────────── */}
        <VetDisclaimer variant="urgent" />

        <AffiliateDisclosure variant="banner" />

        {!content && (
          <CalloutBox variant="info" title="Content in progress">
            This medication&apos;s detailed editorial reference is being
            generated. Re-run{' '}
            <code>npm run generate:content -- --kind medication --slug {meta.slug}</code>{' '}
            from the seniorpets app to populate it.
          </CalloutBox>
        )}

        {content && (
          <div className="carloOS-article">
            <h2 id="overview">Overview</h2>
            {content.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 id="conditions">Conditions treated</h2>
            <ul>
              {content.conditionsTreated.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <h2 id="side-effects">Common side effects</h2>
            <ul>
              {content.sideEffects.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h2 id="dose-range">Typical dose range</h2>
            <CalloutBox variant="warning" title="Confirm every dose with your veterinarian">
              The dose ranges shown below are from published veterinary
              pharmacology references and are not a prescription. Real-world
              dosing depends on bloodwork, comorbidities, body condition, and
              your veterinarian&apos;s judgment.
            </CalloutBox>
            {content.doseRange.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 id="interactions">Drug interactions and cautions</h2>
            <ul>
              {content.interactions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h2 id="monitoring">Monitoring</h2>
            <ul>
              {content.monitoring.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            {/* ── Where to fill (Chewy Pharmacy + others) ─────────── */}
            {meta.chewyRxPath && (
              <>
                <h2 id="fill">Where to fill or buy</h2>
                <div className="not-prose">
                  <AffiliateLink
                    vendor={meta.prescription ? 'chewyrx' : 'chewy'}
                    path={meta.chewyRxPath}
                    source={`medication:${meta.slug}`}
                    variant="card"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                      {meta.prescription ? 'Chewy Pharmacy' : 'Chewy'}
                    </div>
                    <div className="font-display font-semibold text-brand-dark text-base mb-1">
                      {meta.name} on {meta.prescription ? 'Chewy Pharmacy' : 'Chewy'}
                    </div>
                    <div className="text-sm text-brand-text-mid leading-snug">
                      Your veterinarian sends the prescription to Chewy
                      Pharmacy; auto-ship keeps the next refill on time.
                    </div>
                    <div className="text-2xs text-brand-text-light mt-2">
                      Affiliate link · we may earn a commission
                    </div>
                  </AffiliateLink>
                </div>
              </>
            )}

            <h2 id="warnings">Warnings</h2>
            <ul>
              {meta.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>

            <h2 id="faq">Frequently asked questions</h2>
            <div className="not-prose my-6">
              <FAQAccordion
                items={content.faqs.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                }))}
                includeSchema={false}
              />
            </div>

            <h2 id="sources">Sources</h2>
            <ul>
              {content.citations.map((c) => (
                <li key={c.url}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <section className="my-12 p-6 sm:p-8 bg-brand-primary-pale rounded-lg border border-brand-border">
          <EmailCapture
            variant="section"
            siteId="seniorpets"
            title="Senior Pet Care Monthly"
            subtitle="Monthly updates on senior pet medications, dose changes, and new options — written for owners, sourced from published veterinary references."
            ctaText="Subscribe Free"
            source={`medication:${meta.slug}`}
          />
        </section>
      </article>
    </>
  )
}
