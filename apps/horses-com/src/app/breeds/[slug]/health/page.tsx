/**
 * Horses.com — Breed-specific HEALTH deep-dive template.
 *
 * Route: /breeds/[slug]/health (sibling of /breeds/[slug])
 * Static generation for the 8 breeds in src/data/breed-health.ts; any other
 * slug returns 404 via notFound().
 *
 * Mirror of the dog-com breed-health pattern, tuned for the equine domain.
 *
 * Trust-bar (QC §1):
 *   - Editorial byline only: "Horses.com Editorial — sourced from cited references"
 *   - No specific dosing, no guaranteed outcomes
 *   - Frequency labels are common / occasional / rare — never fabricated %
 *   - Every issue is grounded in USEF Veterinary Committee, AAEP, breed-registry
 *     health committees, Cornell Equine Genetics, or UC Davis VGL.
 */

import type { Metadata } from 'next'
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
  EmailCapture,
  RelatedLinks,
} from '@carloOS/ui'
import {
  BreedHealthRecords,
  getBreedHealthBySlug,
  type BreedHealthRecord,
  type IssueFrequency,
} from '../../../../data/breed-health'
import { getBreedBySlug } from '../../../../data/breeds'

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
      siteId: 'horses-com',
      title: 'Breed Health Guide Not Found',
      description: 'This horse-breed health guide does not exist.',
      path: `/breeds/${slug}/health`,
    })
  }

  // Title target ≤ 70 chars including " | Horses.com" (13 chars).
  const candidate = `${record.breedName} Health & Genetic Screening | Horses.com`
  const title =
    candidate.length > 70
      ? `${record.breedName} Health & Screening | Horses.com`
      : candidate

  // Description ≤ 160 chars.
  const description =
    `${record.breedName} health deep-dive: hereditary conditions, screening ` +
    `tests, AAEP-aligned preventive care, and lifespan (${record.lifespanRange}).`

  return buildMetadata({
    siteId: 'horses-com',
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

// ─── Per-breed discipline cross-link picker ──────────────────────────────────
const EXISTING_DISCIPLINES: Record<string, string> = {
  dressage: '/disciplines/dressage',
  eventing: '/disciplines/eventing',
  reining: '/disciplines/reining',
  'show jumping': '/disciplines/show-jumping',
  'trail riding': '/disciplines/trail-riding',
  trail: '/disciplines/trail-riding',
  'western pleasure': '/disciplines/western-pleasure',
}

function pickDisciplineLinks(slug: string): Array<{ label: string; href: string }> {
  const breed = getBreedBySlug(slug)
  if (!breed) return []
  const seen = new Set<string>()
  const out: Array<{ label: string; href: string }> = []
  for (const discipline of breed.disciplines) {
    const lc = discipline.toLowerCase()
    for (const [keyword, href] of Object.entries(EXISTING_DISCIPLINES)) {
      if (lc.includes(keyword) && !seen.has(href)) {
        seen.add(href)
        out.push({
          label: keyword.replace(/\b\w/g, (c) => c.toUpperCase()) + ' on Horses.com',
          href,
        })
      }
    }
  }
  return out.slice(0, 3)
}

export default async function BreedHealthPage({ params }: PageProps) {
  const { slug } = await params
  const record = getBreedHealthBySlug(slug)
  if (!record) notFound()

  const url = `https://horses.com/breeds/${record.slug}/health`
  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: `${record.breedName} — Health Deep-Dive`,
    description:
      `Breed-specific health guide for the ${record.breedName}: hereditary ` +
      `conditions, recommended screenings, lifespan, and preventive care sourced ` +
      `from USEF Veterinary Committee, AAEP, breed-registry health committees, ` +
      `Cornell Equine Genetics, and UC Davis VGL references.`,
    url,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const medicalSchema = buildMedicalWebPageSchema({
    name: `${record.breedName} Health Deep-Dive`,
    description:
      `Breed-specific equine health reference for ${record.breedName} owners and prospective owners.`,
    url,
    authorName: 'Horses.com Editorial',
    lastReviewed: '2026-05-29',
    medicalAudience: 'Caregiver',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://horses.com/' },
      { name: 'Breeds', url: 'https://horses.com/breeds' },
      { name: record.breedName, url: `https://horses.com/breeds/${record.slug}` },
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

  const disciplineLinks = pickDisciplineLinks(record.slug)
  const sidebarLinks: Array<{ label: string; href: string }> = [
    { label: `${record.breedName} Breed Overview`, href: `/breeds/${record.slug}` },
    ...disciplineLinks,
  ]

  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        relatedLinks={[
          { title: 'Horse Breeds Hub', href: '/breeds', category: 'Breeds' },
          { title: 'Equine Health Hub', href: '/health' },
          { title: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
        ]}
        hero={{
          title: `${record.breedName} — Health Deep-Dive`,
          subtitle:
            `Hereditary conditions, recommended screenings, lifespan reality, and ` +
            `preventive care every ${record.breedName} owner should know. Sourced ` +
            `from USEF Veterinary Committee, AAEP, breed-registry health ` +
            `committees, and Cornell Equine Genetics.`,
          category: 'Breed Health',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: record.breedName, href: `/breeds/${record.slug}` },
          { name: 'Health' },
        ]}
        sidebar={
          <>
            <RelatedLinks title={`More on the ${record.breedName}`} links={sidebarLinks} />

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

            <RelatedLinks
              title="Equine Reference"
              links={[
                { label: 'Equine Ulcers', href: '/health/equine-ulcers' },
                { label: 'Colic Reference', href: '/health/colic' },
                { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
                { label: 'Best Equine Supplements', href: '/reviews/best-equine-supplements' },
              ]}
            />

            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Practical Horse Reference"
              subtitle="Discipline-aware buyer guides and reference articles."
              source={`breed-health-${record.slug}`}
            />
          </>
        }
      >
        <ArticleByline
          siteName="Horses.com Editorial — sourced from cited references"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        {/* Mandatory top callout */}
        <CalloutBox variant="note" title="Educational reference, not veterinary advice">
          For your specific horse, consult an AAEP-member veterinarian — breed
          predispositions don&apos;t predict individual outcomes. This page does
          not list specific drug doses or guarantee outcomes; every treatment
          decision belongs to you and your veterinarian.
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
          The conditions below are well-documented in the {record.breedName}.
          Frequency is reported as <strong>common</strong>,{' '}
          <strong>occasional</strong>, or <strong>rare</strong> — we do not
          publish prevalence percentages we cannot cite. Tap the source markers
          to jump to the citations.
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
                <div
                  className="mt-3 pt-3 grid sm:grid-cols-2 gap-3 text-xs"
                  style={{ borderTop: `1px solid ${s.border}` }}
                >
                  <div>
                    <span
                      className="font-bold uppercase tracking-eyebrow text-2xs"
                      style={{ color: s.text }}
                    >
                      Typical age of onset
                    </span>
                    <div className="text-brand-text-mid mt-1">{issue.ageOfOnset}</div>
                  </div>
                  {issue.geneticScreeningTest && (
                    <div>
                      <span
                        className="font-bold uppercase tracking-eyebrow text-2xs"
                        style={{ color: s.text }}
                      >
                        Genetic / screening test
                      </span>
                      <div className="text-brand-text-mid mt-1">
                        {issue.geneticScreeningTest}
                      </div>
                    </div>
                  )}
                </div>
                {issue.citedRef && (
                  <div className="mt-2 text-2xs text-brand-text-light">
                    Source:{' '}
                    <a
                      href={`#source-${issue.citedRef}`}
                      className="font-semibold no-underline hover:underline"
                      style={{ color: s.text }}
                    >
                      [{issue.citedRef}]
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Mid-page equine vet CTA ───────────────────────────────────────── */}
        <div
          className="not-prose my-8 rounded-xl p-6 border-2"
          style={{
            borderColor: '#E8622A',
            background:
              'linear-gradient(135deg, rgba(232,98,42,0.08) 0%, rgba(232,98,42,0.02) 100%)',
          }}
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Find an equine specialist
          </div>
          <h3 className="font-display font-bold text-brand-dark text-lg mb-2 mt-0">
            Breed-specific risks deserve a breed-aware veterinarian.
          </h3>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
            For genetic-test interpretation, pre-purchase exams, ophthalmology,
            lameness work-ups, and emergency surgery referrals, work with an
            AAEP-member veterinarian who knows the {record.breedName}. Our
            sister site Vets.co maintains a cross-portfolio directory of equine
            and equine-specialty practices.
          </p>
          <a
            href="https://vets.co/find-a-vet"
            className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
          >
            Find an equine veterinarian on Vets.co →
          </a>
        </div>

        {/* ── Section: Recommended Screenings ───────────────────────────────── */}
        <h2 id="screenings">Recommended Screenings</h2>
        <p>
          Screening priorities below align with the relevant breed-registry
          health committee and the AAEP pre-purchase guidance for the{' '}
          {record.breedName}.
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
          Verify genetic-test results at the lab of record (UC Davis Veterinary
          Genetics Laboratory —{' '}
          <a href="https://vgl.ucdavis.edu/" target="_blank" rel="noopener noreferrer">
            vgl.ucdavis.edu
          </a>{' '}
          — or Cornell Equine Genetics —{' '}
          <a
            href="https://equinegenetics.vet.cornell.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            equinegenetics.vet.cornell.edu
          </a>
          ) using the horse&apos;s registered name. A seller&apos;s paperwork
          is not a substitute for the lab record.
        </p>

        {/* ── Section: Breed-Specific Vaccinations ──────────────────────────── */}
        {record.breedSpecificVaccinations &&
          record.breedSpecificVaccinations.length > 0 && (
            <>
              <h2 id="vaccinations">Breed-Specific Vaccination Notes</h2>
              <p>
                Core equine vaccines follow the AAEP vaccination guidelines for
                all horses. The notes below are <em>{record.breedName}</em>
                -specific considerations to discuss with your veterinarian — not
                a replacement for the standard AAEP schedule.
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
        <CalloutBox variant="warning" title="When to call your vet immediately">
          Any of the signs below in a {record.breedName} warrants an urgent
          equine veterinary call — do not wait for the next business day. If you
          are unsure, call your nearest equine emergency or referral hospital
          for triage advice.
        </CalloutBox>
        <ul>
          {record.emergencySigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>

        {/* ── Section: Preventive Care ──────────────────────────────────────── */}
        <h2 id="preventive-care">Preventive Care</h2>
        <p>
          The single largest determinant of a {record.breedName}&apos;s
          long-term healthspan is consistent, owner-driven preventive care.
          These tips are breed-specific — not a replacement for your
          veterinarian&apos;s plan.
        </p>
        <ul>
          {record.preventiveCareTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        {/* ── Section: Insurance Cost Considerations ────────────────────────── */}
        <h2 id="insurance">Insurance Cost Considerations</h2>
        <p>{record.insuranceCostNotes}</p>

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
          Citations supporting the conditions and screenings on this page. We
          cite the AAEP, USEF Veterinary Committee, breed-registry health
          committees, Cornell Equine Genetics, and UC Davis VGL by preference;
          peer-reviewed literature is cited where it is the original source.
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
          Last reviewed: 2026-05-29. Editorial — sourced from the cited
          references above. Not a veterinary consultation.
        </p>
      </ArticleLayout>
    </>
  )
}

// Re-export for type-checking integrity
export type { BreedHealthRecord }
