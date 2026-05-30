/**
 * Dog.com — Breed-specific HEALTH deep-dive template.
 *
 * Route: /breeds/[slug]/health (sibling of /breeds/[slug])
 * Static generation for the 8 breeds in src/data/breed-health.ts; any other
 * slug returns 404 via notFound().
 *
 * Insurance affiliate intent is high here — owners researching breed-specific
 * conditions are pet-insurance buyers. The template surfaces a mid-page CTA to
 * /reviews/best-pet-insurance and a sidebar cross-link to the same page.
 *
 * Trust-bar (QC §1):
 *   - Editorial byline only: "Dog.com Editorial — sourced from cited references"
 *   - No specific dosing, no guaranteed outcomes
 *   - Frequency labels are common/occasional/rare — never fabricated %
 *   - Every issue is grounded in OFA / CHIC / AVMA / breed-club / peer-reviewed source
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArticleLayout,
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  ArticleByline,
  CalloutBox,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
} from '@carloOS/ui'
import {
  BreedHealthRecords,
  getBreedHealthBySlug,
  type BreedHealthRecord,
  type IssueFrequency,
} from '../../../../data/breed-health'

// Static render — every health record is known at build time.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BreedHealthRecords.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const record = getBreedHealthBySlug(slug)
  if (!record) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed Health Guide Not Found',
      description: 'This breed health guide does not exist.',
      path: `/breeds/${slug}/health`,
    })
  }

  // Title ≤ 70 chars including " | Dog.com" (10 chars). Target ≤ 56 for core.
  const title = `${record.breedName} Health Issues & Screenings | Dog.com`
  // Description ≤ 160 chars.
  const description =
    `${record.breedName} health deep-dive: known conditions, recommended ` +
    `screenings, emergency signs, and lifetime cost reality. Lifespan ` +
    `${record.lifespanRange}.`

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description: description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${record.slug}/health`,
    type: 'article',
  })
}

// ─── Frequency badge ─────────────────────────────────────────────────────────
const FREQ_STYLES: Record<
  IssueFrequency,
  { label: string; bg: string; text: string; border: string }
> = {
  common: {
    label: 'Common',
    bg: 'rgba(200,74,42,0.06)',
    text: '#C84A2A',
    border: 'rgba(200,74,42,0.18)',
  },
  occasional: {
    label: 'Occasional',
    bg: 'rgba(200,149,42,0.06)',
    text: '#C8952A',
    border: 'rgba(200,149,42,0.20)',
  },
  rare: {
    label: 'Rare',
    bg: 'rgba(42,106,58,0.05)',
    text: '#2A6A3A',
    border: 'rgba(42,106,58,0.15)',
  },
}

function FrequencyBadge({ frequency }: { frequency: IssueFrequency }) {
  const s = FREQ_STYLES[frequency]
  return (
    <span
      className="text-2xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-pill flex-shrink-0"
      style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
    >
      {s.label}
    </span>
  )
}

export default async function BreedHealthPage({ params }: PageProps) {
  const { slug } = await params
  const record = getBreedHealthBySlug(slug)
  if (!record) notFound()

  const url = `https://dog.com/breeds/${record.slug}/health`
  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `${record.breedName} — Health Deep-Dive`,
    description:
      `Breed-specific health guide for the ${record.breedName}: known conditions, ` +
      `recommended screenings, emergency signs, and preventive care, sourced from ` +
      `OFA / CHIC / AVMA / breed-club references.`,
    url,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const medicalSchema = buildMedicalWebPageSchema({
    name: `${record.breedName} Health Deep-Dive`,
    description:
      `Breed-specific reference for ${record.breedName} owners and prospective owners.`,
    url,
    authorName: 'Dog.com Editorial',
    lastReviewed: '2026-05-29',
    medicalAudience: 'Caregiver',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Breeds', url: 'https://dog.com/breeds' },
      { name: record.breedName, url: `https://dog.com/breeds/${record.slug}` },
      { name: 'Health', url },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: record.faqs })
  const combined = combineSchemas(
    articleSchema,
    medicalSchema,
    breadcrumbSchema,
    faqSchema,
  )

  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: `${record.breedName} — Health Deep-Dive`,
          subtitle:
            `Breed-specific conditions, recommended screenings, emergency signs, ` +
            `and the lifetime cost reality every ${record.breedName} owner should know. ` +
            `Sourced from OFA, CHIC, AVMA, and breed-club health committees.`,
          category: 'Breed Health',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: record.breedName, href: `/breeds/${record.slug}` },
          { name: 'Health' },
        ]}
        sidebar={
          <>
            <RelatedLinks
              title={`More on the ${record.breedName}`}
              links={[
                { label: `${record.breedName} Breed Overview`, href: `/breeds/${record.slug}` },
                { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
                { label: 'Find a Vet', href: '/find-a-vet' },
              ]}
            />

            <CrossPortfolioCard
              currentSite="dog-com"
              contentType="health"
              variant="sidebar"
            />

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                At a Glance
              </div>
              <div className="flex justify-between py-2 border-b border-brand-border text-xs">
                <span className="text-brand-text-light">Lifespan</span>
                <span className="font-bold text-brand-dark text-right max-w-[60%]">
                  {record.lifespanRange}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-brand-border text-xs">
                <span className="text-brand-text-light">Common issues</span>
                <span className="font-bold text-brand-dark text-right max-w-[60%]">
                  {
                    record.knownHealthIssues.filter((i) => i.frequency === 'common')
                      .length
                  }
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-brand-border text-xs">
                <span className="text-brand-text-light">Screenings</span>
                <span className="font-bold text-brand-dark text-right max-w-[60%]">
                  {record.recommendedScreenings.length}
                </span>
              </div>
              <div className="flex justify-between py-2 text-xs">
                <span className="text-brand-text-light">Emergency signs</span>
                <span className="font-bold text-brand-dark text-right max-w-[60%]">
                  {record.emergencySigns.length}
                </span>
              </div>
            </div>

            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance weekly."
              source={`breed-health-${record.slug}`}
            />
          </>
        }
      >
        <ArticleByline
          siteName="Dog.com Editorial — sourced from cited references"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* Mandatory top callout */}
        <CalloutBox variant="note" title="Educational reference, not medical advice">
          This page is educational reference. Discuss your specific dog with your
          veterinarian — breed predispositions don&apos;t predict individual outcomes.
          We do not list specific dosages or guarantee outcomes; any treatment
          decision belongs to you and your vet.
        </CalloutBox>

        {/* ── Section: Lifespan & Overview ──────────────────────────────────── */}
        <h2 id="overview">Lifespan and Overview</h2>
        <p>
          <strong>Typical lifespan:</strong> {record.lifespanRange}.
        </p>
        <p>{record.overview}</p>

        {/* ── Section: Known Health Issues ──────────────────────────────────── */}
        <h2 id="known-issues">Known Health Issues</h2>
        <p>
          The conditions below are well-documented in the {record.breedName}. Frequency
          is reported as <strong>common</strong>, <strong>occasional</strong>, or{' '}
          <strong>rare</strong> — we do not publish prevalence percentages we cannot
          cite. Tap the source markers to jump to the citations.
        </p>
        <div className="not-prose space-y-4 my-6">
          {record.knownHealthIssues.map((issue) => {
            const s = FREQ_STYLES[issue.frequency]
            return (
              <div
                key={issue.name}
                className="rounded-xl p-5"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-brand-dark text-base m-0">
                    {issue.name}
                  </h3>
                  <FrequencyBadge frequency={issue.frequency} />
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {issue.summary}
                </p>
                <div className="mt-3 pt-3 grid sm:grid-cols-2 gap-3 text-xs"
                  style={{ borderTop: `1px solid ${s.border}` }}>
                  <div>
                    <span className="font-bold uppercase tracking-eyebrow text-2xs" style={{ color: s.text }}>
                      Typical age of onset
                    </span>
                    <div className="text-brand-text-mid mt-1">{issue.ageOfOnset}</div>
                  </div>
                  {issue.screeningTest && (
                    <div>
                      <span className="font-bold uppercase tracking-eyebrow text-2xs" style={{ color: s.text }}>
                        Screening test
                      </span>
                      <div className="text-brand-text-mid mt-1">{issue.screeningTest}</div>
                    </div>
                  )}
                </div>
                {issue.citedRef && (
                  <div className="mt-2 text-2xs text-brand-text-light">
                    Source: <a href={`#source-${issue.citedRef}`} className="font-semibold no-underline hover:underline" style={{ color: s.text }}>
                      [{issue.citedRef}]
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Mid-page pet insurance CTA ────────────────────────────────────── */}
        <div className="not-prose my-8 rounded-xl p-6 border-2"
          style={{ borderColor: '#E8622A', background: 'linear-gradient(135deg, rgba(232,98,42,0.08) 0%, rgba(232,98,42,0.02) 100%)' }}>
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Cost reality check
          </div>
          <h3 className="font-display font-bold text-brand-dark text-lg mb-2 mt-0">
            Many breed-specific conditions cost $3,000–12,000 to manage.
          </h3>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
            Orthopedic surgery, airway surgery, cancer staging and treatment, IVDD
            care — each can run into five figures. Pet insurance enrolled before any
            diagnosis is the simplest way to keep these claim categories covered.
          </p>
          <Link
            href="/reviews/best-pet-insurance"
            className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
          >
            See our pet insurance comparison →
          </Link>
        </div>

        {/* ── Section: Recommended Screenings ───────────────────────────────── */}
        <h2 id="screenings">Recommended Screenings</h2>
        <p>
          Screening priorities below align with the OFA Canine Health Information
          Center (CHIC) panel for the {record.breedName} where one exists, plus
          standard senior wellness practice.
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse border border-brand-border text-sm">
            <thead>
              <tr className="bg-brand-surface">
                <th className="text-left font-semibold text-brand-text-light px-4 py-2 border-b border-brand-border">
                  Screening
                </th>
                <th className="text-left font-semibold text-brand-text-light px-4 py-2 border-b border-brand-border">
                  Age recommended
                </th>
                <th className="text-left font-semibold text-brand-text-light px-4 py-2 border-b border-brand-border">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              {record.recommendedScreenings.map((s) => (
                <tr key={s.name} className="border-b border-brand-border last:border-0">
                  <td className="px-4 py-2 text-brand-dark font-medium">{s.name}</td>
                  <td className="px-4 py-2 text-brand-text-mid">{s.ageRecommended}</td>
                  <td className="px-4 py-2 text-brand-text-mid">{s.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-brand-text-light italic">
          Verify clearances on the searchable OFA database (
          <a href="https://ofa.org" target="_blank" rel="noopener noreferrer">ofa.org</a>
          ) using the dog&apos;s registered name — pedigree paperwork from a breeder
          is not a substitute for the OFA record.
        </p>

        {/* ── Section: Breed-Specific Vaccinations ──────────────────────────── */}
        {record.breedSpecificVaccinations && record.breedSpecificVaccinations.length > 0 && (
          <>
            <h2 id="vaccinations">Breed-Specific Vaccination Notes</h2>
            <p>
              Core vaccines for every dog follow the AAHA canine vaccination
              guidelines. The notes below are{' '}
              <em>{record.breedName}</em>-specific considerations to discuss with your
              veterinarian — not a replacement for the standard schedule.
            </p>
            <ul>
              {record.breedSpecificVaccinations.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </>
        )}

        {/* ── Section: Emergency Warning Signs ──────────────────────────────── */}
        <h2 id="emergency-signs">Emergency Warning Signs</h2>
        <CalloutBox variant="warning" title="When to go to the ER">
          Any of the signs below in a {record.breedName} warrants an emergency
          veterinary visit. Do not wait for the next business day. If you are unsure,
          call your nearest emergency or specialty hospital for triage advice.
        </CalloutBox>
        <ul>
          {record.emergencySigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>

        {/* ── Section: Preventive Care ──────────────────────────────────────── */}
        <h2 id="preventive-care">Preventive Care</h2>
        <p>
          The single largest determinant of a {record.breedName}&apos;s long-term
          healthspan is consistent, owner-driven preventive care. These tips are
          breed-specific — not a replacement for your veterinarian&apos;s plan.
        </p>
        <ul>
          {record.preventiveCareTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        {/* ── Section: Insurance Cost Implications ──────────────────────────── */}
        <h2 id="insurance">Insurance Cost Implications</h2>
        <p>{record.typicalInsuranceCostImplications}</p>
        <p>
          <Link
            href="/reviews/best-pet-insurance"
            className="text-brand-primary font-semibold no-underline hover:underline"
          >
            Compare pet insurance providers for {record.breedName}s →
          </Link>
        </p>

        {/* ── Section: FAQs ─────────────────────────────────────────────────── */}
        <h2 id="faqs">Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {record.faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-brand-border rounded-lg p-5"
            >
              <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* ── Section: Sources ──────────────────────────────────────────────── */}
        <h2 id="sources">Sources</h2>
        <p>
          Citations supporting the conditions and screenings on this page. We cite
          OFA, CHIC, AVMA, and breed-club health committees by preference; peer-
          reviewed literature is cited where it is the original source.
        </p>
        <ul>
          {record.sourceCitations.map((c) => (
            <li key={c.ref} id={`source-${c.ref}`}>
              <strong>[{c.ref}]</strong>{' '}
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
              ) : (
                c.label
              )}
            </li>
          ))}
        </ul>
        <p className="text-sm text-brand-text-light italic">
          Last reviewed: 2026-05-29. Editorial — sourced from the cited references
          above. Not a veterinary consultation.
        </p>
      </ArticleLayout>
    </>
  )
}

// Re-export for type-checking integrity
export type { BreedHealthRecord }
