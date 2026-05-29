import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture,
  FAQAccordion,
} from '@carloOS/ui'
import {
  CARRIERS,
  getCarrierBySlug,
  type CarrierProfile,
} from '../../../../../data/insurance-carriers'
import {
  INSURANCE_BREEDS,
  type BreedInsuranceProfile,
} from '../../../../../data/insurance-by-breed'

export async function generateStaticParams() {
  return INSURANCE_BREEDS.map((b) => ({ breed: b.slug }))
}

function getBreedBySlug(slug: string): BreedInsuranceProfile | undefined {
  return INSURANCE_BREEDS.find((b) => b.slug === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ breed: string }>
}): Promise<Metadata> {
  const { breed } = await params
  const b = getBreedBySlug(breed)
  if (!b) return {}
  return buildMetadata({
    siteId: 'dog-com',
    title: `Best Pet Insurance for ${b.breedName}s (2026) — Carrier Match by Risk Profile | Dog.com`,
    description: `${b.breedName}s face ${b.keyConditions.length} key hereditary conditions. Our editorial recommendation is ${getCarrierBySlug(b.recommendedCarrier)?.name ?? 'the right-for-breed carrier'}, with two backups. Compare sample premiums + coverage.`,
    path: `/pet-insurance/breeds/${b.slug}`,
    type: 'article',
  })
}

function RiskBadge({ level }: { level: 'high' | 'moderate' | 'low' }) {
  const styles = {
    high: 'bg-red-50 text-red-700',
    moderate: 'bg-amber-50 text-amber-700',
    low: 'bg-emerald-50 text-emerald-700',
  }[level]
  return (
    <span
      className={`inline-block text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded-full ${styles}`}
    >
      {level} risk
    </span>
  )
}

function CarrierCard({
  c,
  source,
  variant,
  reason,
}: {
  c: CarrierProfile
  source: string
  variant: 'recommended' | 'alternate'
  reason?: string
}) {
  const accent =
    variant === 'recommended'
      ? 'border-brand-primary bg-brand-primary-pale/40'
      : 'border-brand-border bg-white'
  return (
    <div className={`rounded-xl p-6 border ${accent}`}>
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
        {variant === 'recommended' ? '🏆 Recommended' : 'Alternate'} · Editorial score {c.editorialScore}/10
      </div>
      <h3 className="font-display text-xl font-bold mb-1">{c.name}</h3>
      <p className="text-sm text-brand-text-mid mb-3">{c.tagline}</p>
      {reason && (
        <p className="text-sm text-brand-text-dark leading-relaxed mb-4 italic">
          <strong>Why this fits:</strong> {reason}
        </p>
      )}
      <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
        <div>
          <span className="text-brand-text-light">Sample premium:</span>{' '}
          <span className="font-semibold">
            ${c.samplePremiumMonthly.low}–${c.samplePremiumMonthly.high}/mo
          </span>
        </div>
        <div>
          <span className="text-brand-text-light">Reimbursement:</span>{' '}
          <span className="font-semibold">
            {c.reimbursementOptions.map((r) => `${r}%`).join(', ')}
          </span>
        </div>
        <div>
          <span className="text-brand-text-light">Orthopedic wait:</span>{' '}
          <span className="font-semibold">{c.waitingPeriods.orthopedic}</span>
        </div>
        <div>
          <span className="text-brand-text-light">Exam fees:</span>{' '}
          <span className="font-semibold">
            {c.coversExamFees === true
              ? 'Included'
              : c.coversExamFees === 'addon'
                ? 'Add-on'
                : 'Not covered'}
          </span>
        </div>
      </div>
      <a
        href={`/go/${c.vendor}/home?s=pet-insurance-breed-${source}-${variant}`}
        rel="sponsored nofollow noopener"
        target="_blank"
        className={`inline-block ${variant === 'recommended' ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary border border-brand-primary'} px-5 py-2 rounded-lg font-semibold text-sm no-underline hover:opacity-90`}
      >
        Get a {c.name} quote →
      </a>
      <Link
        href={`/pet-insurance/${c.slug}`}
        className="inline-block ml-3 text-brand-primary text-sm font-semibold no-underline hover:underline"
      >
        Full review →
      </Link>
    </div>
  )
}

export default async function BreedInsurancePage({
  params,
}: {
  params: Promise<{ breed: string }>
}) {
  const { breed } = await params
  const b = getBreedBySlug(breed)
  if (!b) notFound()

  const recommended = getCarrierBySlug(b.recommendedCarrier)
  if (!recommended) notFound()
  const alternates = b.alternateCarriers
    .map((slug) => getCarrierBySlug(slug))
    .filter((x): x is CarrierProfile => x != null)

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'dog-com',
      title: `Best Pet Insurance for ${b.breedName}s (2026)`,
      description: `Breed-specific pet insurance routing for ${b.breedName}s with hereditary risk match.`,
      url: `https://dog.com/pet-insurance/breeds/${b.slug}`,
      imageUrl: '',
      authorName: 'Dog.com Editorial',
      publishedAt: '2026-05-30T00:00:00Z',
      modifiedAt: '2026-05-30T00:00:00Z',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
      { name: `${b.breedName}`, url: `https://dog.com/pet-insurance/breeds/${b.slug}` },
    ]),
  )

  const faqs = [
    {
      question: `What's the best pet insurance for ${b.breedName}s?`,
      answer: `${recommended.name} is our editorial pick for ${b.breedName}s. ${b.recommendedReason} See sample premiums of $${b.sampleMonthlyPremium[0]}–$${b.sampleMonthlyPremium[1]}/mo and full coverage details below.`,
    },
    {
      question: `What hereditary conditions affect ${b.breedName}s?`,
      answer: `${b.keyConditions.length} key conditions: ${b.keyConditions.join('; ')}. Pet insurance covers hereditary conditions only if they aren't pre-existing at enrollment — enroll before symptoms appear.`,
    },
    {
      question: `How much does pet insurance cost for a ${b.breedName}?`,
      answer: `For a young-adult ${b.breedName}, our reference profile (${b.sizeCategory}-size, $5,000 annual limit, $500 deductible, 80% reimbursement) runs $${b.sampleMonthlyPremium[0]}–$${b.sampleMonthlyPremium[1]}/mo. Senior premiums are typically 2-3× higher. ZIP and exact age affect the quote.`,
    },
    {
      question: `When should I enroll my ${b.breedName} in insurance?`,
      answer: `As young as possible. Pre-existing conditions are universally excluded by every major carrier. ${b.orthopedicRisk === 'high' ? `${b.breedName}s have high orthopedic risk — choose a carrier with a short orthopedic waiting period (Pumpkin = 14 days vs. industry standard 6 months).` : ''} ${b.dentalRisk === 'high' ? `Dental disease is a high-frequency claim category — Fetch by The Dodo is the only carrier covering periodontal disease on its base plan.` : ''}`,
    },
  ]

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🛡️ Pet Insurance Match · {b.breedName}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Best Pet Insurance for {b.breedName}s
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          {b.breedName}s face {b.keyConditions.length} key hereditary
          conditions. Our editorial pick for the right carrier is{' '}
          {recommended.name} — {b.recommendedReason}
        </p>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/pet-insurance" className="hover:text-brand-primary no-underline">
          Pet Insurance
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{b.breedName}</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-5xl mx-auto">
        {/* Quick facts */}
        <div className="grid sm:grid-cols-4 gap-3 mb-10">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Size
            </div>
            <div className="font-display text-lg font-bold capitalize">{b.sizeCategory}</div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Lifespan
            </div>
            <div className="font-display text-lg font-bold">
              {b.lifespan[0]}–{b.lifespan[1]} yrs
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Sample premium
            </div>
            <div className="font-display text-lg font-bold">
              ${b.sampleMonthlyPremium[0]}–${b.sampleMonthlyPremium[1]}/mo
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Editorial score
            </div>
            <div className="font-display text-lg font-bold">
              {recommended.editorialScore}/10
            </div>
          </div>
        </div>

        {/* Key conditions */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-3">
          Key hereditary conditions to insure against
        </h2>
        <p className="text-sm text-brand-text-mid mb-5">
          {b.breedName}s have a documented risk profile across the conditions
          below. Insurance covers these only if they aren't pre-existing at
          enrollment.
        </p>
        <ul className="border border-brand-border rounded-xl overflow-hidden mb-10">
          {b.keyConditions.map((c, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-5 py-3 border-b border-brand-border/30 last:border-b-0 text-sm"
            >
              <span className="font-medium">{c}</span>
              <span className="text-xs text-brand-text-light">condition #{i + 1}</span>
            </li>
          ))}
        </ul>

        {/* Risk profile */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-3">
          Risk profile
        </h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Chronic
            </div>
            <RiskBadge level={b.chronicRisk} />
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Orthopedic
            </div>
            <RiskBadge level={b.orthopedicRisk} />
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Dental
            </div>
            <RiskBadge level={b.dentalRisk} />
          </div>
        </div>

        {/* Coverage needs */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-3">
          What coverage to prioritize
        </h2>
        <ul className="space-y-2 mb-10 list-disc pl-6 text-sm">
          {b.keyCoverageNeeds.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>

        {/* Recommended */}
        <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
          Recommended carrier for {b.breedName}s
        </h2>
        <div className="mb-10">
          <CarrierCard
            c={recommended}
            source={b.slug}
            variant="recommended"
            reason={b.recommendedReason}
          />
        </div>

        {/* Alternates */}
        {alternates.length > 0 && (
          <>
            <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
              Two strong backup options
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {alternates.map((a) => (
                <CarrierCard
                  key={a.slug}
                  c={a}
                  source={b.slug}
                  variant="alternate"
                />
              ))}
            </div>
          </>
        )}

        {/* Cross-link to DNA testing */}
        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Pair with DNA testing
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Insurance covers what happens. A genetic panel tells you what's
            likely to happen — so you can plan for it before symptoms turn
            into pre-existing exclusions.
          </p>
          <Link
            href={`/dna-testing/breeds/${b.breedDataSlug}`}
            className="text-brand-primary font-semibold no-underline hover:underline"
          >
            See {b.breedName} DNA testing recommendations →
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="font-display text-2xl font-bold mb-6">
          {b.breedName} insurance FAQ
        </h2>
        <FAQAccordion items={faqs} />

        {/* Other breeds */}
        <h2 className="font-display text-2xl font-bold mb-4 mt-12">
          More breed-specific insurance guides
        </h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-10">
          {INSURANCE_BREEDS.filter((x) => x.slug !== b.slug)
            .slice(0, 9)
            .map((other) => (
              <Link
                key={other.slug}
                href={`/pet-insurance/breeds/${other.slug}`}
                className="border border-brand-border rounded-lg p-3 text-sm hover:border-brand-primary transition no-underline"
              >
                <div className="font-display font-semibold">{other.breedName}</div>
                <div className="text-xs text-brand-text-light">
                  → {getCarrierBySlug(other.recommendedCarrier)?.name ?? 'see guide'}
                </div>
              </Link>
            ))}
        </div>

        {/* Email capture */}
        <EmailCapture
          variant="section"
          siteId="dog-com"
          tag="dog-com:insurance-comparison"
          title="Get the full 9-carrier comparison spreadsheet"
          subtitle={`The complete spec sheet for every carrier we considered for ${b.breedName}s. Free.`}
          buttonText="Email the spreadsheet"
        />
      </div>
    </>
  )
}
