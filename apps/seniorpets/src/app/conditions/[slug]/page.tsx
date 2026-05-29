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

import { CONDITIONS, getCondition } from '../../../data/conditions'
import { getReviewerByline } from '../../../data/reviewers'
import { AffiliateDisclosure, AffiliateLink, type AffiliateVendor } from '../../../components'
import type { ConditionContent } from '../../../content/types'

// ────────────────────────────────────────────────────────────────────────────
// Content loader — looks up the generated structured-content module for a
// given condition slug. Each module lives at src/content/conditions/<slug>.ts
// and exports default a ConditionContent. We import them eagerly so that
// missing content surfaces as a build error rather than a 404 at runtime.
// ────────────────────────────────────────────────────────────────────────────

import * as ConditionModules from '../../../content/conditions/_index'

function getContent(slug: string): ConditionContent | null {
  const m = (ConditionModules as Record<string, { default?: ConditionContent }>)[
    `condition_${slug.replace(/-/g, '_')}`
  ]
  return m?.default ?? null
}

// ────────────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }))
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meta = getCondition(params.slug)
  if (!meta) return {}
  return buildMetadata({
    siteId: 'seniorpets',
    title: meta.title,
    description: meta.description,
    path: `/conditions/${meta.slug}`,
    category: meta.species === 'dog' ? 'Senior Dog Health' : 'Senior Cat Health',
    type: 'article',
  })
}

// ────────────────────────────────────────────────────────────────────────────

export default function ConditionPage({ params }: PageProps) {
  const meta = getCondition(params.slug)
  if (!meta) return notFound()
  const content = getContent(params.slug)

  const url = `https://seniorpetpharmacy.com/conditions/${meta.slug}`
  const reviewer = getReviewerByline()

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'seniorpets',
      title: meta.title,
      description: meta.description,
      url,
      imageUrl: '',
      authorName: 'SeniorPetPharmacy Editorial',
      publishedAt: content?.publishedAt ?? '2026-05-29T00:00:00Z',
      modifiedAt: content?.updatedAt ?? '2026-05-29T00:00:00Z',
    }),
    buildMedicalWebPageSchema({
      name: meta.title,
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
        {/* ── Breadcrumbs ─────────────────────────────────────────── */}
        <nav className="text-xs text-brand-text-light flex gap-2 mb-6">
          <Link href="/" className="hover:text-brand-primary no-underline">
            Home
          </Link>
          <span>›</span>
          <Link href="/conditions" className="hover:text-brand-primary no-underline">
            Conditions
          </Link>
          <span>›</span>
          <span className="text-brand-text-mid">{meta.title}</span>
        </nav>

        {/* ── Eyebrow + Title ────────────────────────────────────── */}
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
          {meta.species === 'dog' ? 'Senior Dog Health' : 'Senior Cat Health'}{' '}
          · {meta.category.replace('-', ' ')}
        </div>
        <h1 className="font-display font-semibold text-brand-dark text-4xl sm:text-5xl tracking-tight mb-4 leading-tight">
          {meta.title}
        </h1>

        {content?.abstract && (
          <p className="text-lg text-brand-text-mid leading-relaxed max-w-3xl mb-2">
            {content.abstract}
          </p>
        )}

        {/* ── Byline (placeholder reviewer surfaced only if env flag set) */}
        <ArticleByline
          siteName="SeniorPetPharmacy Editorial"
          publishedAt={content?.publishedAt ?? '2026-05-29T00:00:00Z'}
          updatedAt={content?.updatedAt ?? '2026-05-29T00:00:00Z'}
          reviewedBy={reviewer}
        />

        {/* ── FTC affiliate disclosure (banner) ──────────────────── */}
        <AffiliateDisclosure variant="banner" />

        {!content && (
          <CalloutBox variant="info" title="Content in progress">
            This page&apos;s detailed editorial content is being generated.
            Re-run <code>npm run generate:content -- --slug {meta.slug}</code>
            {' '}from the seniorpets app to populate it.
          </CalloutBox>
        )}

        {content && (
          <div className="carloOS-article">
            {/* ── Overview ───────────────────────────────────────── */}
            <h2 id="overview">Overview</h2>
            {content.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* ── Signs ──────────────────────────────────────────── */}
            <h2 id="signs">Clinical signs and what owners notice</h2>
            <ul>
              {content.clinicalSigns.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            {/* ── Red flags ──────────────────────────────────────── */}
            <h2 id="red-flags">When to see a veterinarian</h2>
            <CalloutBox variant="warning" title="Urgent red flags">
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {content.redFlags.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </CalloutBox>

            {/* ── Treatment ──────────────────────────────────────── */}
            <h2 id="treatment">Treatment options</h2>
            {content.treatment.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* ── Recommended products ───────────────────────────── */}
            <h2 id="recommended-products">Recommended products</h2>
            <p className="text-sm text-brand-text-light italic">
              These are senior-pet-appropriate categories supported by
              veterinary references. Always confirm with your pet&apos;s
              veterinarian before adding a supplement or product to a treatment
              plan.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
              {content.recommendedProducts.map((p) => (
                <AffiliateLink
                  key={p.name}
                  vendor={p.vendor as AffiliateVendor}
                  path={p.path}
                  search={p.search}
                  asin={p.asin}
                  source={`condition:${meta.slug}`}
                  variant="card"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                    {vendorLabel(p.vendor)}
                  </div>
                  <div className="font-display font-semibold text-brand-dark text-base mb-1">
                    {p.name}
                  </div>
                  <div className="text-sm text-brand-text-mid leading-snug">
                    {p.description}
                  </div>
                  <div className="text-2xs text-brand-text-light mt-2">
                    Affiliate link · we may earn a commission
                  </div>
                </AffiliateLink>
              ))}
            </div>

            {/* ── Lifestyle ──────────────────────────────────────── */}
            <h2 id="lifestyle">Lifestyle changes that help</h2>
            <ul>
              {content.lifestyleChanges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            {/* ── Prognosis ──────────────────────────────────────── */}
            <h2 id="prognosis">Prognosis and quality of life</h2>
            {content.prognosis.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* ── Insurance block — senior pets convert 3× ───────── */}
            <CalloutBox variant="tip" title="Pet insurance for senior pets">
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Pre-existing conditions aren&apos;t covered.</strong>{' '}
                The single biggest predictor of whether pet insurance pays out
                for {meta.species === 'dog' ? 'a senior dog' : 'a senior cat'} is
                whether the condition was already on the medical record when
                the policy started. If your pet is healthy today, this is the
                cheapest the policy will ever be — and the broadest the
                coverage will ever be.
              </p>
              <p style={{ marginBottom: 0 }}>
                <AffiliateLink
                  vendor="trupanion"
                  source={`condition:${meta.slug}:insurance`}
                >
                  Compare senior pet insurance options →
                </AffiliateLink>
              </p>
            </CalloutBox>

            {/* ── FAQ ────────────────────────────────────────────── */}
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

            {/* ── Citations ──────────────────────────────────────── */}
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

        {/* ── Email capture (condition-tagged) ────────────────────── */}
        <section className="my-12 p-6 sm:p-8 bg-brand-primary-pale rounded-lg border border-brand-border">
          <EmailCapture
            variant="section"
            siteId="seniorpets"
            title="Senior Pet Care Monthly"
            subtitle={`Get the next ${meta.species === 'dog' ? 'senior dog' : 'senior cat'} care deep dive direct in your inbox. Free, once a month.`}
            ctaText="Subscribe Free"
            source={`condition:${meta.slug}`}
          />
        </section>
      </article>
    </>
  )
}

function vendorLabel(vendor: string): string {
  switch (vendor) {
    case 'chewyrx':
      return 'Chewy Pharmacy'
    case 'chewy':
      return 'Chewy'
    case 'amazon':
      return 'Amazon'
    case 'petwellbeing':
      return 'PetWellbeing'
    case 'nuvet':
      return 'NuVet'
    default:
      return vendor
  }
}
