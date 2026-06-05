/**
 * Per-state reptile-law page — Lizard.com.
 *
 * One static-rendered page per entry in src/data/state-reptile-laws.ts at
 * /states/<slug>. Summarizes the state's general regulatory posture,
 * banned-species list, restricted-species + permit categories, the
 * enforcing wildlife agency, and primary-source citations.
 *
 * Trust posture (QC-STANDARDS.md §1):
 *   - Byline: "Lizard.com Editorial — sourced from cited state agency
 *     references." No fake DVM.
 *   - No legal-advice language. The page renders
 *     "according to [agency], [species] is classified as..." not
 *     "you can keep this".
 *   - "Coverage in progress" framework-only states do NOT show fabricated
 *     banned-species lists.
 *   - Disclaimer block on every page: laws change, verify with the
 *     agency before acquiring a reptile.
 *
 * JSON-LD: Article + FAQPage + BreadcrumbList combined via combineSchemas.
 */

import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
  ArticleByline,
  SourceCitation,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  StateReptileLaws,
  getStateLawBySlug,
  postureLabel,
  postureColor,
  COMMON_QUESTION_SPECIES,
  type ReptileLaw,
} from '../../../data/state-reptile-laws'

// ─── Static generation ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return StateReptileLaws.map((s) => ({ state: s.slug }))
}

interface PageProps {
  params: Promise<{ state: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerStateMetadata(s: ReptileLaw): {
  title: string
  description: string
} {
  // "Reptile laws in <State> | Lizard.com" — 28 chars + state name <= 14
  // = <= 42 chars; well under the 70-char policy ceiling.
  const titleRaw = `Reptile laws in ${s.stateName} | Lizard.com`
  const title = truncate(titleRaw, 70)
  const desc =
    s.coverage === 'full'
      ? `What reptiles are legal in ${s.stateName}: banned species, permit-required categories, and the ${s.agency.name} as the enforcing authority. Sourced from cited state references.`
      : `${s.stateName} reptile-law overview: general regulatory posture and the enforcing wildlife agency. Coverage in progress; verify directly with ${s.agency.name}.`
  return { title, description: truncate(desc, 160) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const law = getStateLawBySlug(state)
  if (!law) {
    return buildMetadata({
      siteId: 'lizard-com',
      title: 'State reptile law not found | Lizard.com',
      description:
        'The requested state-by-state reptile-law page is not in the Lizard.com index.',
      path: `/states/${state}`,
    })
  }

  const { title, description } = buildPerStateMetadata(law)
  return buildMetadata({
    siteId: 'lizard-com',
    title,
    description,
    path: `/states/${law.slug}`,
    type: 'article',
  })
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildCommonQuestionFaqs(law: ReptileLaw): FAQItem[] {
  // "Is a [species] legal in [State]" — five entries. We do NOT render
  // a definitive yes/no; the answer points readers to the enforcing
  // agency, which is the editorially correct posture per QC §1.
  return COMMON_QUESTION_SPECIES.map((species) => {
    const question = `Is a ${species.toLowerCase()} legal in ${law.stateName}?`
    const answer =
      law.coverage === 'full'
        ? `${species} is a common pet reptile not specifically listed on the ${law.agency.name} banned or restricted species list summarized on this page. Common pet reptiles are generally allowed in ${law.stateName} without a state permit, but municipal ordinances (city or county) may impose additional restrictions. Before acquiring a ${species.toLowerCase()}, verify the current status with ${law.agency.name} and check your local Animal Control or municipal code.`
        : `Coverage in progress. Lizard.com has not yet completed primary-source verification of ${law.stateName}'s current banned and restricted species lists for individual reptiles. ${law.agency.name} is the authoritative source — verify directly with the agency before acquiring any reptile in ${law.stateName}.`
    return {
      question,
      answer,
      answerText: answer,
    }
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function StateReptileLawPage({ params }: PageProps) {
  const { state } = await params
  const law = getStateLawBySlug(state)
  if (!law) notFound()

  const url = `https://lizard.com/states/${law.slug}`
  const { title: metaTitle, description: metaDescription } =
    buildPerStateMetadata(law)
  const faqItems = buildCommonQuestionFaqs(law)
  const colors = postureColor(law.generalPosture)
  const postureText = postureLabel(law.generalPosture)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'State Laws', href: '/states' },
    { name: law.stateName, href: `/states/${law.slug}` },
  ]

  // ─── JSON-LD ─────────────────────────────────────────────────────────
  const articleSchema = buildArticleSchema({
    siteId: 'lizard-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Lizard.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://lizard.com${b.href}`,
    })),
  })

  const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  const sectionIds = [
    { label: 'At a glance', href: '#at-a-glance' },
    { label: 'Common questions answered', href: '#common-questions' },
    ...(law.coverage === 'full'
      ? [
          { label: 'Banned species', href: '#banned-species' },
          { label: 'Restricted species', href: '#restricted-species' },
          { label: 'Permit categories', href: '#permit-categories' },
        ]
      : []),
    { label: 'Enforcement agency', href: '#agency' },
    { label: 'Local-government overrides', href: '#local-overrides' },
    { label: 'Find an exotic vet', href: '#exotic-vet' },
    { label: 'Disclaimer', href: '#disclaimer' },
    { label: 'Sources', href: '#sources' },
  ]

  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: `Reptile laws in ${law.stateName}`,
        subtitle: `What's legal, what's restricted, and what's banned in ${law.stateName} — sourced from cited ${law.agency.name} references.`,
        category: `${postureText} regulatory posture`,
        authorName: 'Lizard.com Editorial',
        authorAvatar: 'LZ',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={combined}
      relatedLinks={[
        { title: 'State Laws Hub', href: '/states', category: 'Hub' },
        { title: 'Species Library', href: '/species', category: 'Species' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
        { title: 'Enclosure Setup Guides', href: '/setup', category: 'Setup' },
      ]}
      sidebar={
        <>
          <TableOfContents items={sectionIds} />
          <RelatedLinks
            title="State Law Resources"
            links={[
              { label: 'All states (hub)', href: '/states' },
              { label: 'Editorial standards', href: '/editorial-standards' },
              { label: 'Enclosure setup guides', href: '/setup' },
              { label: 'Vivarium build guides', href: '/builds' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Free Care Sheets"
            subtitle="Species guides for subscribers."
            source={`state-${law.slug}`}
            ctaText="Download Free"
          />
          <CalloutBox variant="info" title="Laws change">
            <p style={{ margin: 0, fontSize: '13.5px' }}>
              State reptile statutes and administrative rules are amended
              regularly. Always verify the current text of the rule with{' '}
              {law.agency.name} before acquiring a reptile. This page is not
              legal advice.
            </p>
          </CalloutBox>
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Lizard.com Editorial — sourced from cited state agency references"
          publishedAt="2026-05-30T00:00:00Z"
          updatedAt="2026-05-30T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* ─── At a glance badge ──────────────────────────────────────── */}
        <h2 id="at-a-glance">At a glance</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            margin: '12px 0 18px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '4px',
              background: colors.bg,
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          >
            {postureText} posture
          </span>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '4px',
              background: 'rgba(122,181,42,0.10)',
              border: '1px solid rgba(122,181,42,0.25)',
              color: 'var(--brand-primary)',
            }}
          >
            {law.stateCode}
          </span>
          {law.coverage === 'framework' ? (
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 12px',
                borderRadius: '4px',
                background: 'rgba(245,178,42,0.10)',
                border: '1px solid rgba(245,178,42,0.30)',
                color: '#E0A025',
              }}
            >
              Coverage in progress
            </span>
          ) : null}
        </div>

        {law.coverage === 'framework' ? (
          <CalloutBox variant="warning" title="Coverage in progress">
            Lizard.com has not yet completed primary-source verification of{' '}
            {law.stateName}&rsquo;s current banned and restricted reptile
            species lists. The general regulatory posture and the enforcing
            agency below are accurate; the per-species detail will be added
            as research is completed. Until then, treat {law.agency.name} as
            the authoritative source.
          </CalloutBox>
        ) : (
          <p>{law.notes}</p>
        )}

        {/* ─── Common questions answered ──────────────────────────────── */}
        <h2 id="common-questions">Common questions answered</h2>
        <p>
          The five reptile species most commonly searched for{' '}
          &ldquo;is X legal in {law.stateName}&rdquo;. Answers cite{' '}
          {law.agency.name} as the enforcing authority and direct readers to
          verify with the agency before acquiring an animal.
        </p>
        <div
          style={{
            margin: '14px 0 18px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px',
            }}
          >
            <thead>
              <tr style={{ background: 'rgba(122,181,42,0.08)' }}>
                <th
                  style={{
                    padding: '10px 12px',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--brand-border)',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Species
                </th>
                <th
                  style={{
                    padding: '10px 12px',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--brand-border)',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Authoritative source for {law.stateName}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMMON_QUESTION_SPECIES.map((species) => (
                <tr key={species}>
                  <td
                    style={{
                      padding: '10px 12px',
                      borderBottom: '1px solid var(--brand-border)',
                      fontWeight: 600,
                    }}
                  >
                    {species}
                  </td>
                  <td
                    style={{
                      padding: '10px 12px',
                      borderBottom: '1px solid var(--brand-border)',
                    }}
                  >
                    <a
                      href={law.agency.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--brand-primary)' }}
                    >
                      {law.agency.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ─── Banned species ─────────────────────────────────────────── */}
        {law.coverage === 'full' ? (
          <>
            <h2 id="banned-species">Banned species</h2>
            {law.bannedSpecies.length === 0 ? (
              <p>
                No species are categorically banned at the state level
                according to {law.agency.name} as of the publication date of
                this page. Restrictions still apply by permit category (see
                below) and municipalities may impose stricter rules.
              </p>
            ) : (
              <ul>
                {law.bannedSpecies.map((b, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <strong>{b.name}.</strong> {b.reason}
                  </li>
                ))}
              </ul>
            )}

            {/* ─── Restricted species ─────────────────────────────────── */}
            <h2 id="restricted-species">Restricted species (permit required)</h2>
            {law.restrictedSpecies.length === 0 ? (
              <p>
                No restricted-permit categories beyond the banned list above
                are published by {law.agency.name} for individual species.
              </p>
            ) : (
              <ul>
                {law.restrictedSpecies.map((r, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>
                    <strong>{r.name}.</strong> {r.permitRequired}
                  </li>
                ))}
              </ul>
            )}

            {/* ─── Permit categories ──────────────────────────────────── */}
            <h2 id="permit-categories">General permit-required categories</h2>
            {law.permitRequiredFor.length === 0 ? (
              <p>
                {law.agency.name} does not publish blanket category-level
                permit requirements beyond the species lists above.
              </p>
            ) : (
              <ul>
                {law.permitRequiredFor.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>
            )}
          </>
        ) : null}

        {/* ─── Enforcement agency ─────────────────────────────────────── */}
        <h2 id="agency">Enforcement agency &mdash; how to verify before purchasing</h2>
        <p>
          The authoritative source for reptile regulation in {law.stateName}{' '}
          is the <strong>{law.agency.name}</strong>. Before acquiring any
          reptile, contact the agency directly or consult their published
          species lists.
        </p>
        <p>
          <a
            href={law.agency.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '8px 14px',
              borderRadius: '4px',
              border: '1px solid var(--brand-primary)',
              color: 'var(--brand-primary)',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Visit {law.agency.name} &rarr;
          </a>
        </p>

        {/* ─── Local government overrides ─────────────────────────────── */}
        <h2 id="local-overrides">Local-government overrides</h2>
        <p>
          County and municipal ordinances frequently impose stricter rules
          than state law. Cities commonly restrict large constrictors,
          venomous reptiles, and crocodilians inside city limits even when
          state law allows them with a permit. Before acquiring a regulated
          species, check with:
        </p>
        <ul>
          <li>Your county Animal Control office</li>
          <li>Your municipal code (typically the &ldquo;Animals&rdquo; or &ldquo;Health&rdquo; chapter)</li>
          <li>Any HOA covenants applicable to your residence</li>
        </ul>
        <p>
          A species that is permitted at the state level is not automatically
          permitted in every city or county within {law.stateName}.
        </p>

        {/* ─── Find an exotic vet (cross-portfolio link) ──────────────── */}
        <h2 id="exotic-vet">Find an exotic vet in {law.stateName}</h2>
        <p>
          Exotic-animal veterinarians are scarce in most states. The
          Association of Reptilian and Amphibian Veterinarians (ARAV)
          maintains a public directory of veterinarians with reptile-specific
          training; the Vets.co exotic-vet directory will surface
          {' '}{law.stateName}-specific clinics as it expands.
        </p>
        <p>
          <a
            href={`https://vets.co/find-a-vet?state=${law.stateCode}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '8px 14px',
              borderRadius: '4px',
              border: '1px solid var(--brand-primary)',
              color: 'var(--brand-primary)',
              fontWeight: 600,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Find a {law.stateName} exotic vet on Vets.co &rarr;
          </a>
        </p>

        {/* ─── Disclaimer ─────────────────────────────────────────────── */}
        <h2 id="disclaimer">Disclaimer</h2>
        <CalloutBox variant="warning" title="Not legal advice">
          Laws change. This page summarizes publicly available information
          from {law.agency.name} and the cited primary-source statutes; it is
          not legal advice. Always verify the current text of the regulation
          with the agency before acquiring a reptile. Lizard.com does not
          guarantee that any species listed as permissible on this page is
          permissible in your specific city, county, or HOA jurisdiction.
        </CalloutBox>

        {/* ─── Common questions FAQ accordion ─────────────────────────── */}
        <h2 id="faq">Five common questions</h2>
        <FAQAccordion items={faqItems} />

        {/* ─── Sources ─────────────────────────────────────────────────── */}
        <h2 id="sources">Sources</h2>
        <p>
          Primary-source citations supporting this page. All claims should
          be verified against the current text of the cited regulation, as
          state law changes regularly.
        </p>
        <ul>
          {law.citations.map((c, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <SourceCitation source={c.title} url={c.url} variant="block" />
            </li>
          ))}
        </ul>
      </div>
    </ArticleLayout>
  )
}
