/**
 * Dog.com — Breed-specific pet insurance landing page.
 *
 * Targets "best pet insurance for [breed]" — the highest-commercial-intent
 * SEO query in the insurance category. Renders one page per breed in
 * src/data/insurance-by-breed.ts (30 pages). Each page routes the visitor
 * to the carrier whose policy spec best matches the breed's hereditary risk
 * profile.
 *
 * Architect S6 — monetization. Affiliate referral pays $40–80 per converted
 * policy depending on carrier.
 *
 * Editorial constraint: no DVM credentials. Sign as "Dog.com Editorial".
 * FTC compliance: every page wraps in <AffiliateDisclosure variant="banner">.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  AffiliateDisclosure,
  AffiliateLink,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildMetadata,
  combineSchemas,
  EmailCapture,
  FAQAccordion,
  SchemaScript,
} from '@carloOS/ui'
import {
  CARRIERS,
  getCarrierBySlug,
  type InsuranceCarrier,
} from '../../../../data/insurance-carriers'
import {
  INSURANCE_BREEDS,
  getBreedInsuranceBySlug,
  type BreedInsuranceProfile,
  type RiskLevel,
} from '../../../../data/insurance-by-breed'
import { getBreedBySlug } from '../../../../data/breeds'

export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ breed: string }>
}

export function generateStaticParams() {
  return INSURANCE_BREEDS.map((b) => ({ breed: b.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { breed: slug } = await params
  const profile = getBreedInsuranceBySlug(slug)
  if (!profile) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed Not Found',
      description: 'No insurance guide exists for this breed.',
      path: `/pet-insurance/breeds/${slug}`,
    })
  }
  const carrier = getCarrierBySlug(profile.recommendedCarrier)
  const carrierName = carrier?.name ?? 'top-rated carrier'

  const title = `Best Pet Insurance for ${profile.breedName} (2026) | Dog.com`
  const description =
    `${profile.breedName} insurance guide: ${carrierName} is our top pick for this breed's ` +
    `hereditary risk profile. Sample premiums from $${profile.sampleMonthlyPremium[0]}/mo. ` +
    `${profile.keyConditions.slice(0, 2).join(', ')}.`

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description:
      description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/pet-insurance/breeds/${profile.slug}`,
    category: 'Pet Insurance',
    type: 'article',
  })
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const RISK_BADGE_CLASS: Record<RiskLevel, string> = {
  high: 'bg-brand-danger/10 text-brand-danger border-brand-danger/30',
  moderate: 'bg-amber-50 text-amber-700 border-amber-200',
  low: 'bg-brand-success/10 text-brand-success border-brand-success/30',
}

function RiskBadge({ level, label }: { level: RiskLevel; label: string }) {
  return (
    <span
      className={`text-2xs font-bold tracking-eyebrow uppercase px-2 py-1 rounded-pill border ${RISK_BADGE_CLASS[level]}`}
    >
      {label}: {level}
    </span>
  )
}

function buildFAQs(
  profile: BreedInsuranceProfile,
  recommended: InsuranceCarrier,
): Array<{ question: string; answer: string }> {
  const lo = profile.sampleMonthlyPremium[0]
  const hi = profile.sampleMonthlyPremium[1]
  const topConditions = profile.keyConditions.slice(0, 3).join(', ')
  return [
    {
      question: `What is the best pet insurance for a ${profile.breedName}?`,
      answer:
        `${recommended.name} is our top pick for ${profile.breedName}s. ${profile.recommendedReason} ` +
        `The two backup options worth comparing are ` +
        `${profile.alternateCarriers
          .map((s) => getCarrierBySlug(s)?.name)
          .filter(Boolean)
          .join(' and ')}.`,
    },
    {
      question: `How much does pet insurance cost for a ${profile.breedName}?`,
      answer:
        `A healthy ${profile.breedName} puppy or young adult typically runs ` +
        `$${lo}–$${hi} per month on a 90% reimbursement plan with a $250–$500 annual deductible. ` +
        `Senior dogs generally pay 2–3x more. Quote at least three carriers on the same coverage spec ` +
        `(deductible, reimbursement, annual limit) before committing — apples-to-apples or you can't compare.`,
    },
    {
      question: `What health conditions should I insure my ${profile.breedName} against?`,
      answer:
        `The most documented hereditary conditions for ${profile.breedName}s include: ${topConditions}. ` +
        `Enroll before the first vet visit — any condition noted in records before the policy starts ` +
        `becomes a permanently excluded pre-existing condition on every major US carrier.`,
    },
    {
      question: `When should I enroll my ${profile.breedName} in pet insurance?`,
      answer:
        `Enroll the week you bring the dog home, before any veterinary appointment. ` +
        `${profile.orthopedicRisk === 'high' ? 'Orthopedic conditions are especially time-sensitive for this breed — many carriers impose a 6-month orthopedic waiting period, so signing early is critical to avoid out-of-pocket costs on the first hip or cruciate claim. ' : ''}` +
        `Most carriers backdate exclusions to the policy effective date, not the symptom date, so even ` +
        `a routine first puppy exam can lock in a lifetime exclusion if a murmur or other finding is noted.`,
    },
  ]
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function BreedInsurancePage({ params }: PageProps) {
  const { breed: slug } = await params
  const profile = getBreedInsuranceBySlug(slug)
  if (!profile) notFound()

  const recommended = getCarrierBySlug(profile.recommendedCarrier)
  if (!recommended) notFound()

  const alternates = profile.alternateCarriers
    .map((s) => getCarrierBySlug(s))
    .filter((c): c is InsuranceCarrier => c !== undefined)

  // Cross-link to the existing breed profile page. breeds.ts uses some
  // shorter slugs (e.g. 'cavalier-king-charles' vs the insurance slug
  // 'cavalier-king-charles-spaniel'); fall back to no link if the breed
  // isn't yet in breeds.ts.
  const existingBreed = getBreedBySlug(profile.breedDataSlug)
  const breedProfileHref = existingBreed
    ? `/breeds/${existingBreed.slug}`
    : null
  const dnaTestingHref = `/dna-testing/breeds/${profile.slug}`

  const faqs = buildFAQs(profile, recommended)

  // ─── Schema ─────────────────────────────────────────────────────────────
  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `Best Pet Insurance for ${profile.breedName} (2026)`,
    description:
      `Breed-specific pet insurance guide for ${profile.breedName}s — recommended carrier, ` +
      `coverage priorities, and sample premiums.`,
    url: `https://dog.com/pet-insurance/breeds/${profile.slug}`,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
      {
        name: profile.breedName,
        url: `https://dog.com/pet-insurance/breeds/${profile.slug}`,
      },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  // ─── Render ─────────────────────────────────────────────────────────────
  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link
          href="/pet-insurance"
          className="hover:text-brand-primary no-underline"
        >
          Pet Insurance
        </Link>
        <span>›</span>
        <Link
          href="/pet-insurance/breeds"
          className="hover:text-brand-primary no-underline"
        >
          By Breed
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">
          {profile.breedName}
        </span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          Breed-Specific Buyer's Guide
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 4.4vw, 50px)' }}
        >
          Best Pet Insurance for {profile.breedName}
        </h1>
        <p className="text-base sm:text-lg font-light text-white/65 max-w-2xl leading-relaxed">
          <strong className="text-white font-semibold">
            {recommended.name}
          </strong>{' '}
          is our recommended carrier for {profile.breedName}s. Sample premium
          band for a healthy young dog: ${profile.sampleMonthlyPremium[0]}–$
          {profile.sampleMonthlyPremium[1]}/month. Updated 2026.
        </p>
      </div>

      <div className="px-container sm:px-container-sm py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="min-w-0">
            {/* FTC disclosure — required above first affiliate link */}
            <AffiliateDisclosure variant="banner" category="pet insurance" />

            {/* Why insurance matters for this breed */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Why insurance matters for this breed
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The <strong>{profile.breedName}</strong> is a{' '}
                {profile.sizeCategory}-size breed with a {profile.lifespan[0]}–
                {profile.lifespan[1]} year lifespan. Hereditary risk profile:{' '}
                <strong>chronic risk {profile.chronicRisk}</strong>,{' '}
                <strong>orthopedic risk {profile.orthopedicRisk}</strong>,{' '}
                <strong>dental risk {profile.dentalRisk}</strong>. That mix
                drives the carrier choice — a single high-risk category (e.g.
                orthopedic for a Lab, dental for a Yorkie, cancer for a Golden)
                can shift the value of one carrier's policy spec over another by
                thousands of dollars across a dog's lifetime. The pick below
                isn't generic — it's tuned to this breed.
              </p>
            </section>

            {/* Key conditions */}
            <h2 className="font-display text-2xl font-bold text-brand-dark mt-4 mb-3">
              Key Conditions to Insure Against
            </h2>
            <p className="text-sm text-brand-text-mid mb-4">
              These are the documented hereditary conditions most likely to
              generate insurance claims for {profile.breedName}s. Sourced from
              AKC breed-club priority panels and published veterinary
              literature.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <RiskBadge level={profile.chronicRisk} label="Chronic" />
              <RiskBadge level={profile.orthopedicRisk} label="Orthopedic" />
              <RiskBadge level={profile.dentalRisk} label="Dental" />
            </div>
            <ul className="text-sm text-brand-text-mid leading-relaxed pl-5 list-disc mb-8">
              {profile.keyConditions.map((c) => (
                <li key={c} className="mb-1">
                  {c}
                </li>
              ))}
            </ul>

            {/* Coverage needs */}
            <h2 className="font-display text-2xl font-bold text-brand-dark mt-8 mb-3">
              Coverage Priorities for {profile.breedName}s
            </h2>
            <p className="text-sm text-brand-text-mid mb-4">
              When comparing carrier quotes for this breed, prioritize policies
              that include the following features. Skipping any one of these
              materially raises the chance of a denied or capped claim later.
            </p>
            <ul className="text-sm text-brand-text-mid leading-relaxed pl-5 list-disc mb-8">
              {profile.keyCoverageNeeds.map((need) => (
                <li key={need} className="mb-1">
                  {need}
                </li>
              ))}
            </ul>

            {/* Recommended carrier */}
            <h2 className="font-display text-2xl font-bold text-brand-dark mt-10 mb-3">
              Our Recommended Carrier
            </h2>
            <div className="border-2 border-brand-primary rounded-xl p-6 mb-6 bg-brand-primary/5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Best for {profile.breedName}s
              </div>
              <h3 className="font-display text-2xl font-black text-brand-dark mb-1">
                {recommended.name}
              </h3>
              <p className="text-sm text-brand-text-light font-medium mb-4">
                {recommended.tagline}
              </p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                {profile.recommendedReason}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-brand-text-mid mb-5">
                <div>
                  <strong className="text-brand-dark">Reimbursement:</strong>{' '}
                  {recommended.reimbursement}
                </div>
                <div>
                  <strong className="text-brand-dark">Annual limit:</strong>{' '}
                  {recommended.annualLimit}
                </div>
                <div>
                  <strong className="text-brand-dark">Deductible:</strong>{' '}
                  {recommended.deductibleType === 'per-incident'
                    ? 'Per-condition'
                    : 'Annual'}
                </div>
                <div>
                  <strong className="text-brand-dark">Orthopedic wait:</strong>{' '}
                  {recommended.orthopedicWaitDays} days
                </div>
                <div>
                  <strong className="text-brand-dark">Pays vet direct:</strong>{' '}
                  {recommended.paysVetDirect ? 'Yes' : 'No'}
                </div>
                <div>
                  <strong className="text-brand-dark">Price range:</strong>{' '}
                  {recommended.priceRange}
                </div>
              </div>
              <AffiliateLink
                href={recommended.url}
                program={recommended.affiliateProgram}
                product="dog-insurance"
                source={`breed-page-${profile.slug}`}
                variant="primary"
              >
                Get {recommended.name} Quote →
              </AffiliateLink>
            </div>

            {/* Alternate carriers */}
            <h2 className="font-display text-xl font-bold text-brand-dark mt-10 mb-4">
              Two Strong Backup Options
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {alternates.map((c) => (
                <div
                  key={c.slug}
                  className="border border-brand-border rounded-xl p-5 bg-white"
                >
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
                    Alternate
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
                    {c.name}
                  </h3>
                  <p className="text-xs text-brand-text-light mb-3">
                    {c.tagline}
                  </p>
                  <ul className="text-xs text-brand-text-mid space-y-1 mb-4 pl-4 list-disc">
                    {c.pros.slice(0, 2).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <AffiliateLink
                    href={c.url}
                    program={c.affiliateProgram}
                    product="dog-insurance"
                    source={`breed-page-${profile.slug}-alt`}
                    variant="secondary"
                  >
                    Quote {c.name} →
                  </AffiliateLink>
                </div>
              ))}
            </div>

            {/* Cross-link to DNA testing */}
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-10">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
                Pair with DNA testing
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                Insurance covers what happens. A genetic panel tells you what's
                statistically likely <em>before</em> it happens — and gives you
                a documented baseline that can support claims later. The two
                purchases complement each other for hereditary-risk breeds like
                the {profile.breedName}.
              </p>
              <Link
                href={dnaTestingHref}
                className="text-brand-primary font-semibold no-underline hover:underline text-sm"
              >
                See DNA tests for {profile.breedName}s →
              </Link>
            </div>

            {/* Breed profile cross-link */}
            {breedProfileHref && (
              <p className="text-sm text-brand-text-mid mb-10">
                Want the full health, temperament, and care profile?{' '}
                <Link
                  href={breedProfileHref}
                  className="text-brand-primary font-semibold no-underline hover:underline"
                >
                  Read our {profile.breedName} breed guide →
                </Link>
              </p>
            )}

            {/* FAQ */}
            <h2 className="font-display text-2xl font-bold text-brand-dark mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <FAQAccordion
              items={faqs.map((f) => ({
                question: f.question,
                answer: f.answer,
                answerText: f.answer,
              }))}
              includeSchema={false}
              allowMultiple
            />

            {/* Email capture */}
            <div className="mt-12">
              <EmailCapture
                variant="section"
                siteId="dog-com"
                title="Free: Pet Insurance Comparison Spreadsheet"
                subtitle="9 carriers compared on the specs that actually matter — deductible type, orthopedic wait, dental coverage, annual limit. Editable Google Sheet."
                source="dog-com:insurance-comparison"
                leadMagnet="Insurance comparison spreadsheet"
              />
            </div>

            {/* Editorial sign-off */}
            <p className="text-xs text-brand-text-light italic mt-10 pt-6 border-t border-brand-border">
              Researched and written by Dog.com Editorial. We do not employ
              practicing veterinarians and this page is not veterinary advice.
              Carrier specs reflect publicly filed policy documents as of May
              2026 — verify the current policy wording before purchasing.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                At-a-glance
              </div>
              {[
                ['Size', profile.sizeCategory],
                [
                  'Lifespan',
                  `${profile.lifespan[0]}–${profile.lifespan[1]} yr`,
                ],
                ['Chronic risk', profile.chronicRisk],
                ['Orthopedic risk', profile.orthopedicRisk],
                ['Dental risk', profile.dentalRisk],
                ['Top pick', recommended.name],
                [
                  'Sample premium',
                  `$${profile.sampleMonthlyPremium[0]}–$${profile.sampleMonthlyPremium[1]}/mo`,
                ],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[55%] capitalize">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Other breeds
              </div>
              <ul className="text-xs space-y-1.5 m-0 p-0 list-none">
                {INSURANCE_BREEDS.filter((b) => b.slug !== profile.slug)
                  .slice(0, 8)
                  .map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/pet-insurance/breeds/${b.slug}`}
                        className="text-brand-text-mid hover:text-brand-primary no-underline"
                      >
                        {b.breedName}
                      </Link>
                    </li>
                  ))}
                <li className="pt-2 mt-2 border-t border-brand-border">
                  <Link
                    href="/pet-insurance"
                    className="text-brand-primary font-semibold no-underline hover:underline"
                  >
                    See all 30 breeds →
                  </Link>
                </li>
              </ul>
            </div>

            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Comparison Spreadsheet"
              subtitle="9 carriers, specs that actually matter."
              source="dog-com:insurance-comparison"
            />
          </aside>
        </div>
      </div>
    </>
  )
}

// Silence unused-import linter when CARRIERS isn't directly referenced
// at runtime — we keep the import for downstream extension and to assert
// the data file loads (its module-level integrity check throws on
// inconsistent slugs).
void CARRIERS
