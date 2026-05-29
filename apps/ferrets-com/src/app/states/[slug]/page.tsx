/**
 * /states/[slug] — per-state ferret legality + adoption directory page.
 *
 * Generates a static page per US state (51 entries: 50 states + DC) at build
 * time via `generateStaticParams`. Reads the canonical state record from
 * `@/data/states`. Renders:
 *   - Mandatory color-coded legality CalloutBox at the top
 *   - Legal Status · Law Citation · Permit Requirements (if any)
 *   - Adoption Resources (AFA shelter directory, Petfinder)
 *   - Veterinary Resources (university hospitals + AEMV state filter)
 *   - Local Ferret Associations (where listed)
 *   - FAQs (5)
 *   - Sidebar: RelatedLinks (other top-15 states), Ferret.com cross-link,
 *     EmailCapture
 *   - Schema: Article + BreadcrumbList + Place + FAQPage
 *
 * Trust contract (QC §1):
 *   - All law citations are real state codes / administrative rules.
 *   - Adoption resources are limited to national networks the editorial team
 *     can cite by name (AFA, Petfinder). No fabricated rescue listings.
 *   - Disclaimer rendered on every page advising the reader to verify with
 *     their state Fish & Wildlife and municipality before acquiring a ferret.
 *   - Byline reads "Ferrets.com Editorial — sourced from state codes".
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  EmailCapture,
  SidebarCard,
  RelatedLinks,
  CalloutBox,
} from '@carloOS/ui'
import type { FAQItem, CalloutVariant } from '@carloOS/ui'
import {
  States,
  TOP_STATE_SLUGS,
  effectiveLegalStatus,
  getStateBySlug,
  type StateEntry,
  type LegalStatus,
} from '@/data/states'

// ─── Static params (51 prerendered pages) ─────────────────────────────────────

export function generateStaticParams() {
  return States.map((s) => ({ slug: s.slug }))
}

// ─── Legal-status presentation ────────────────────────────────────────────────

interface StatusPresentation {
  label: string
  variant: CalloutVariant
  badgeBg: string
  badgeText: string
}

function presentationFor(status: LegalStatus): StatusPresentation {
  switch (status) {
    case 'illegal':
      return {
        label: 'Illegal',
        variant: 'warning',
        badgeBg: '#FCE7E7',
        badgeText: '#7A1818',
      }
    case 'restricted':
      return {
        label: 'Restricted',
        variant: 'warning',
        badgeBg: '#FEF3D8',
        badgeText: '#7A5A18',
      }
    case 'requires-permit':
      return {
        label: 'Requires permit',
        variant: 'info',
        badgeBg: '#E7EEFC',
        badgeText: '#1A3A7A',
      }
    case 'legal':
    default:
      return {
        label: 'Legal',
        variant: 'evidence',
        badgeBg: '#E2F1E5',
        badgeText: '#1E4A28',
      }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…'
}

function statusSentence(state: StateEntry, status: LegalStatus): string {
  if (state.legalSummary) return state.legalSummary
  switch (status) {
    case 'illegal':
      return `Ferrets are illegal as pets in ${state.name}. Possession is prohibited under state law.`
    case 'restricted':
      return `Ferrets are subject to local restrictions in ${state.name}. See the city-level notes below.`
    case 'requires-permit':
      return `Ferrets are legal in ${state.name} only with a state-issued possession permit. See permit details below.`
    case 'legal':
    default:
      return `Ferrets are legal as pets in ${state.name} with no state-level permit requirement. Rabies vaccination and local licensing rules apply.`
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const state = getStateBySlug(slug)
  if (!state) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'State Not Found',
      description: 'The requested state legality page does not exist.',
      path: `/states/${slug}`,
      noIndex: true,
    })
  }
  const status = effectiveLegalStatus(state)
  const pres = presentationFor(status)

  const title = truncate(
    `Are Ferrets Legal in ${state.name}? Laws & Adoption (${pres.label})`,
    70,
  )
  const description = truncate(
    `${state.name} ferret laws, adoption resources, and exotic-pet vet directory. Cited state-code references and AFA shelter-directory links.`,
    160,
  )

  return buildMetadata({
    siteId: 'ferrets-com',
    title,
    description,
    path: `/states/${state.slug}`,
    type: 'article',
    category: 'State Directory',
  })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function StateLegalityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const state = getStateBySlug(slug)
  if (!state) notFound()

  const status = effectiveLegalStatus(state)
  const pres = presentationFor(status)
  const pageUrl = `https://ferrets.com/states/${state.slug}`

  // ─── FAQ block ────────────────────────────────────────────────────────────
  const faqs: FAQItem[] = [
    {
      question: `Are ferrets legal in ${state.name}?`,
      answer: statusSentence(state, status),
    },
    {
      question: `What law governs ferret ownership in ${state.name}?`,
      answer:
        state.lawCitation ??
        `${state.name} does not enumerate ferrets among restricted exotic species. Domesticated ferrets are governed by general companion-animal statutes (rabies vaccination, licensing where applicable). Always confirm with your state Fish & Wildlife / Agriculture department and your municipality.`,
    },
    ...(state.permitRequirementsIfAny
      ? [
          {
            question: `What is required to get a ferret permit in ${state.name}?`,
            answer: state.permitRequirementsIfAny,
          },
        ]
      : []),
    {
      question: `Where can I adopt a ferret in ${state.name}?`,
      answer:
        status === 'illegal'
          ? `Adoption is not possible in ${state.name} because ferret possession is prohibited. The American Ferret Association shelter directory lists rescues in permissive states for owners who are relocating.`
          : `Start with the American Ferret Association (AFA) accredited-shelter directory and Petfinder filtered to ${state.name}. Read the Ferrets.com rescue-adoption guide (in the sidebar) for red and green flags before committing.`,
    },
    {
      question: `Can my state law change?`,
      answer:
        'Yes. Ferret-ownership laws have been the subject of repeated reform efforts in multiple states (notably California, where reform bills have been introduced in several sessions). Citations on this page reflect current public-record statute and rule references; always verify with the linked state department before acquiring a ferret. Laws change.',
    },
  ]

  // ─── Schema (Article + BreadcrumbList + Place + FAQPage) ──────────────────
  const now = new Date().toISOString()
  const articleSchema = buildArticleSchema({
    siteId: 'ferrets-com',
    title: `Are Ferrets Legal in ${state.name}? Laws, Permits, and Adoption`,
    description:
      `Current ferret-legality status, state-code citations, permit guidance, and adoption directory for ${state.name}.`,
    url: pageUrl,
    imageUrl: `https://ferrets.com/api/og?title=${encodeURIComponent(
      `Ferret Laws in ${state.name}`,
    )}&site=ferrets-com&category=${encodeURIComponent('State Directory')}`,
    authorName: 'Ferrets.com Editorial — sourced from state codes',
    publishedAt: now,
    modifiedAt: now,
  })

  const faqSchema = buildFAQSchema({
    questions: faqs.map((f) => ({
      question: f.question,
      answer:
        typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'States', url: 'https://ferrets.com/states' },
      { name: state.name, url: pageUrl },
    ],
  })

  // Place schema — describes the state as a jurisdiction this page covers.
  const placeSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: state.name,
    address: {
      '@type': 'PostalAddress',
      addressRegion: state.abbr,
      addressCountry: 'US',
    },
    additionalType:
      state.abbr === 'DC'
        ? 'https://schema.org/AdministrativeArea'
        : 'https://schema.org/State',
  }

  const schema = combineSchemas(
    articleSchema,
    breadcrumbSchema,
    placeSchema,
    faqSchema,
  )

  // ─── Sidebar: related states + Ferret.com cross-link + email capture ───────
  const otherTopStates = TOP_STATE_SLUGS
    .filter((s) => s !== state.slug)
    .slice(0, 8)
    .map((s) => {
      const entry = States.find((x) => x.slug === s)
      return entry ? { label: `Ferrets in ${entry.name}`, href: `/states/${entry.slug}` } : null
    })
    .filter((x): x is { label: string; href: string } => x !== null)

  const sidebar = (
    <>
      <RelatedLinks title="Other state guides" links={otherTopStates} />

      {/* Cross-portfolio: Ferret.com for care content. Plain semantic card
          (the shared CrossPortfolioCard component requires config helpers
          not present in this monorepo yet). */}
      <SidebarCard title="Care references">
        <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">
          For day-to-day care, diet, and health-condition references, see the
          Ferret.com cornerstones.
        </p>
        <ul className="list-none p-0 m-0 flex flex-col gap-2 text-xs">
          <li>
            <a
              href="https://ferret.com/care/diet-basics"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              Ferret diet basics &rarr;
            </a>
          </li>
          <li>
            <a
              href="https://ferret.com/health/insulinoma"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              Insulinoma in ferrets &rarr;
            </a>
          </li>
          <li>
            <a
              href="https://ferret.com/care/housing"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              Ferret housing setup &rarr;
            </a>
          </li>
        </ul>
      </SidebarCard>

      <SidebarCard title="On Ferrets.com">
        <ul className="list-none p-0 m-0 flex flex-col gap-2 text-xs">
          <li>
            <Link
              href={`/find-a-vet/${state.slug}`}
              className="text-brand-primary font-medium hover:underline"
            >
              Find an exotic-pet vet in {state.name} &rarr;
            </Link>
          </li>
          <li>
            <Link
              href="/directory/rescues"
              className="text-brand-primary font-medium hover:underline"
            >
              Ferret rescue &amp; adoption guide &rarr;
            </Link>
          </li>
          <li>
            <Link
              href="/care"
              className="text-brand-primary font-medium hover:underline"
            >
              Care library &rarr;
            </Link>
          </li>
        </ul>
      </SidebarCard>

      <EmailCapture
        siteId="ferrets-com"
        variant="sidebar"
        title="State law updates"
        subtitle={`One email when ${state.name} ferret-law guidance changes.`}
        source={`states-${state.slug}`}
      />
    </>
  )

  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'States', href: '/states' },
          { name: state.name, href: `/states/${state.slug}` },
        ]}
      />

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_300px]">
          <article className="carloOS-article min-w-0 max-w-content">
            {/* ─── Header ───────────────────────────────────────────────── */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  State Directory &middot; {state.abbr}
                </span>
                <span
                  className="inline-flex items-center text-2xs font-bold tracking-eyebrow uppercase px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: pres.badgeBg,
                    color: pres.badgeText,
                  }}
                  aria-label={`Ferret legal status in ${state.name}: ${pres.label}`}
                >
                  {pres.label}
                </span>
              </div>
              <h1
                className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Are Ferrets Legal in {state.name}?
              </h1>
              <p className="text-lg text-brand-text-mid leading-relaxed m-0">
                A plain-language legality reference for ferret ownership in{' '}
                {state.name}, with the current state-code citation, adoption
                directory pointers, and an exotic-pet vet starting point.
              </p>
              <p className="text-xs text-brand-text-light mt-4 m-0">
                By Ferrets.com Editorial &mdash; sourced from state codes.
              </p>
            </header>

            {/* ─── Mandatory legality CalloutBox ─────────────────────────── */}
            <CalloutBox
              variant={pres.variant}
              title={`Legal status in ${state.name}: ${pres.label}`}
            >
              <p>{statusSentence(state, status)}</p>
              {state.knownRestrictedCities &&
                state.knownRestrictedCities.length > 0 && (
                  <p>
                    <strong>Local restrictions:</strong>{' '}
                    {state.knownRestrictedCities.join('; ')}.
                  </p>
                )}
            </CalloutBox>

            {/* ─── Legal Status detail ──────────────────────────────────── */}
            <section aria-labelledby="legal-status" className="mb-10 mt-10">
              <h2
                id="legal-status"
                className="font-display font-bold text-brand-text-dark mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
              >
                Legal status
              </h2>
              <p className="text-base text-brand-text-mid leading-relaxed mb-4">
                {state.ferretLegalNote ?? statusSentence(state, status)}
              </p>
              {state.officialResourceUrl && (
                <p className="text-base text-brand-text-mid leading-relaxed m-0">
                  Official reference:{' '}
                  <a
                    href={state.officialResourceUrl}
                    rel="noopener"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    {state.name} regulatory department
                  </a>
                  .
                </p>
              )}
            </section>

            {/* ─── Law Citation ─────────────────────────────────────────── */}
            <section aria-labelledby="law-citation" className="mb-10">
              <h2
                id="law-citation"
                className="font-display font-bold text-brand-text-dark mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
              >
                Law citation
              </h2>
              {state.lawCitation ? (
                <blockquote className="border-l-4 border-brand-primary pl-4 py-1 m-0 text-base text-brand-text-mid leading-relaxed">
                  {state.lawCitation}
                </blockquote>
              ) : (
                <p className="text-base text-brand-text-mid leading-relaxed m-0">
                  {state.name} has no enumerated ferret-specific statute. Refer
                  to general companion-animal statutes and rabies-vaccination
                  rules at the state department of agriculture or public health.
                </p>
              )}
            </section>

            {/* ─── Permit Requirements (conditional) ────────────────────── */}
            {state.permitRequirementsIfAny && (
              <section aria-labelledby="permits" className="mb-10">
                <h2
                  id="permits"
                  className="font-display font-bold text-brand-text-dark mb-4"
                  style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
                >
                  Permit requirements
                </h2>
                <p className="text-base text-brand-text-mid leading-relaxed m-0">
                  {state.permitRequirementsIfAny}
                </p>
              </section>
            )}

            {/* ─── Adoption Resources ───────────────────────────────────── */}
            <section aria-labelledby="adoption" className="mb-10">
              <h2
                id="adoption"
                className="font-display font-bold text-brand-text-dark mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
              >
                Adoption resources
              </h2>
              {state.adoptionResources && state.adoptionResources.length > 0 ? (
                <ul className="list-none p-0 m-0 flex flex-col gap-4">
                  {state.adoptionResources.map((r) => (
                    <li
                      key={r.name}
                      className="p-4 rounded-md border border-brand-border bg-brand-surface"
                    >
                      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
                        <h3 className="text-base font-bold text-brand-text-dark m-0">
                          {r.url ? (
                            <a
                              href={r.url}
                              rel="noopener"
                              className="text-brand-primary hover:underline"
                            >
                              {r.name}
                            </a>
                          ) : (
                            r.name
                          )}
                        </h3>
                        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
                          {r.type}
                          {r.city ? ` · ${r.city}` : ''}
                        </span>
                      </div>
                      {r.blurb && (
                        <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                          {r.blurb}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-brand-text-mid leading-relaxed m-0">
                  No state-specific rescues are listed on Ferrets.com for{' '}
                  {state.name} yet. The{' '}
                  <a
                    href="https://www.ferret.org/links/shelters.html"
                    rel="noopener"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    American Ferret Association shelter directory
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.petfinder.com/search/ferrets-for-adoption/"
                    rel="noopener"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    Petfinder
                  </a>{' '}
                  are the recommended starting points. See the Ferrets.com{' '}
                  <Link
                    href="/directory/rescues"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    rescue &amp; adoption guide
                  </Link>{' '}
                  for the vetting checklist.
                </p>
              )}
            </section>

            {/* ─── Veterinary Resources ─────────────────────────────────── */}
            <section aria-labelledby="vets" className="mb-10">
              <h2
                id="vets"
                className="font-display font-bold text-brand-text-dark mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
              >
                Veterinary resources
              </h2>
              {state.veterinaryResources && state.veterinaryResources.length > 0 ? (
                <ul className="list-none p-0 m-0 flex flex-col gap-4">
                  {state.veterinaryResources.map((v) => (
                    <li
                      key={v.name}
                      className="p-4 rounded-md border border-brand-border bg-brand-surface"
                    >
                      <h3 className="text-base font-bold text-brand-text-dark m-0 mb-1">
                        {v.url ? (
                          <a
                            href={v.url}
                            rel="noopener"
                            className="text-brand-primary hover:underline"
                          >
                            {v.name}
                          </a>
                        ) : (
                          v.name
                        )}
                        {v.city ? (
                          <span className="text-sm font-normal text-brand-text-light ml-2">
                            · {v.city}
                          </span>
                        ) : null}
                      </h3>
                      <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                        {v.specialty}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-brand-text-mid leading-relaxed m-0">
                  No state-specific veterinary referral is listed for{' '}
                  {state.name}. Start with the{' '}
                  <a
                    href="https://www.aemv.org/find-a-vet"
                    rel="noopener"
                    className="text-brand-primary font-medium hover:underline"
                  >
                    AEMV find-a-vet directory
                  </a>{' '}
                  filtered to {state.abbr}, or see the Ferrets.com{' '}
                  <Link
                    href={`/find-a-vet/${state.slug}`}
                    className="text-brand-primary font-medium hover:underline"
                  >
                    {state.name} vet directory page
                  </Link>{' '}
                  for the seven-question vetting checklist.
                </p>
              )}
            </section>

            {/* ─── Local Ferret Associations ────────────────────────────── */}
            {state.localFerretAssociations &&
              state.localFerretAssociations.length > 0 && (
                <section aria-labelledby="associations" className="mb-10">
                  <h2
                    id="associations"
                    className="font-display font-bold text-brand-text-dark mb-4"
                    style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
                  >
                    Local associations
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
                    {state.localFerretAssociations.map((a) => (
                      <li key={a.url}>
                        <a
                          href={a.url}
                          rel="noopener"
                          className="text-brand-primary font-medium hover:underline"
                        >
                          {a.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            {/* ─── FAQs ─────────────────────────────────────────────────── */}
            <section aria-labelledby="faq" className="mb-10">
              <h2
                id="faq"
                className="font-display font-bold text-brand-text-dark mb-5"
                style={{ fontSize: '1.5rem' }}
              >
                Frequently asked questions
              </h2>
              <FAQAccordion items={faqs} includeSchema={false} />
            </section>

            {/* ─── Disclaimer ───────────────────────────────────────────── */}
            <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
              <p className="mb-2 font-semibold text-brand-text-mid">
                Disclaimer
              </p>
              <p className="m-0">
                This page is general legal information about ferret ownership
                in {state.name}. Laws change. Verify the current status with
                your state Fish &amp; Wildlife department, state Department of
                Agriculture, and your municipality before acquiring a ferret.
                This page is not legal advice and does not endorse any specific
                breeder, rescue, or clinic.
              </p>
            </footer>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            {sidebar}
          </aside>
        </div>
      </div>
    </>
  )
}
