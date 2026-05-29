import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateLink,
  AffiliateDisclosure,
  EmailCapture,
} from '@carloOS/ui'
import { CARRIERS } from '../../data/insurance-carriers'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Pet Insurance 2026 — Side-by-Side Comparison | Dog.com',
  description:
    'Compare the 9 major pet insurance carriers on premium, deductible, reimbursement, exam-fee coverage, and waiting periods. Independent editorial rankings updated quarterly.',
  path: '/pet-insurance',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'dog-com',
    title: 'Best Pet Insurance 2026 — Side-by-Side Comparison',
    description:
      'Compare 9 pet insurance carriers — Trupanion, Pumpkin, Lemonade, Embrace, Healthy Paws, Spot, Figo, Fetch by The Dodo, ManyPets.',
    url: 'https://dog.com/pet-insurance',
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  }),
  buildBreadcrumbSchema([
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
  ]),
)

function formatPrem(c: { samplePremiumMonthly: { low: number; high: number } }) {
  return `$${c.samplePremiumMonthly.low}–$${c.samplePremiumMonthly.high}/mo`
}

function formatLimits(opts: (number | 'unlimited')[]) {
  const tiers = opts
    .map((o) => (o === 'unlimited' ? 'Unlimited' : `$${o.toLocaleString()}`))
    .slice(0, 4)
  if (opts.length > 4) tiers.push('…')
  return tiers.join(', ')
}

export default function PetInsuranceHubPage() {
  // Sort by editorial score for the comparison table
  const ranked = [...CARRIERS].sort((a, b) => b.editorialScore - a.editorialScore)

  return (
    <AffiliateDisclosure variant="banner">
      <SchemaScript schema={schema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🛡️ Independent · Updated May 2026
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Best Pet Insurance 2026 — Side-by-Side
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Nine major pet insurance carriers compared on what actually matters:
          monthly premium, deductible flexibility, reimbursement %, what
          coverage is included vs. an add-on, waiting periods, and the small
          print that decides whether a $3,000 vet bill is covered or not.
        </p>
        <div className="mt-7 flex gap-4 flex-wrap">
          <Link
            href="/pet-insurance/quiz"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
          >
            Take the 60-second insurance quiz →
          </Link>
          <a
            href="#table"
            className="inline-block text-white/80 px-6 py-3 rounded-lg font-medium no-underline hover:text-white border border-white/20"
          >
            Jump to comparison table
          </a>
        </div>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Pet Insurance</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-6xl mx-auto">
        {/* How we picked */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How we ranked these
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            Editorial rankings are based on policy structure and trust signals
            — not on commission rates. The same nine carriers we recommend are
            the nine major U.S. pet insurance carriers, ranked on annual limit
            flexibility, exam-fee coverage, waiting periods (especially
            orthopedic), and pre-existing condition stance. Sample premiums
            assume a 4-year-old mixed-breed medium dog, $5,000 annual limit,
            $500 deductible, 80% reimbursement. Your actual premium will vary
            by breed, age, and ZIP.
          </p>
        </div>

        {/* Comparison table */}
        <h2 id="table" className="font-display text-3xl font-bold tracking-tight mb-6">
          Carrier comparison at a glance
        </h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-border">
                <th className="text-left py-3 pr-4 font-semibold">Carrier</th>
                <th className="text-left py-3 pr-4 font-semibold">Sample premium</th>
                <th className="text-left py-3 pr-4 font-semibold">Reimbursement</th>
                <th className="text-left py-3 pr-4 font-semibold">Annual limit</th>
                <th className="text-left py-3 pr-4 font-semibold">Exam fees</th>
                <th className="text-left py-3 pr-4 font-semibold">Score</th>
                <th className="text-left py-3 font-semibold">Quote</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((c) => (
                <tr key={c.slug} className="border-b border-brand-border">
                  <td className="py-3 pr-4">
                    <Link
                      href={`/pet-insurance/${c.slug}`}
                      className="font-semibold text-brand-primary no-underline hover:underline"
                    >
                      {c.name}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 whitespace-nowrap">{formatPrem(c)}</td>
                  <td className="py-3 pr-4">{c.reimbursementOptions.map((r) => `${r}%`).join(' · ')}</td>
                  <td className="py-3 pr-4 text-xs">{formatLimits(c.annualLimitOptions)}</td>
                  <td className="py-3 pr-4">
                    {c.coversExamFees === true
                      ? '✓'
                      : c.coversExamFees === 'addon'
                        ? 'Add-on'
                        : '—'}
                  </td>
                  <td className="py-3 pr-4 font-semibold">{c.editorialScore}</td>
                  <td className="py-3">
                    <AffiliateLink
                      vendor={c.vendor}
                      sku="home"
                      source="pet-insurance-hub-table"
                      className="text-brand-primary font-semibold no-underline hover:underline whitespace-nowrap"
                    >
                      Get quote →
                    </AffiliateLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lead magnet */}
        <div className="mb-12">
          <EmailCapture
            variant="section"
            siteId="dog-com"
            tag="dog-com:insurance-comparison"
            title="Get the Pet Insurance Comparison Spreadsheet"
            subtitle="All 9 carriers · all coverage details · downloadable PDF. We'll email it instantly."
            buttonText="Email me the spreadsheet"
          />
        </div>

        {/* Top picks summary */}
        <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
          Editorial picks by use case
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              🏆 Best Overall
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Pumpkin Pet Insurance</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Highest editorial score (9.0) for the broadest base coverage with
              no per-incident caps. No upper age limit at enrollment.
            </p>
            <AffiliateLink
              vendor="pumpkin"
              sku="home"
              source="pet-insurance-hub-best-overall"
              className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Get a Pumpkin quote →
            </AffiliateLink>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              💎 Best for Chronic / Serious Conditions
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Trupanion</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Per-condition lifetime deductible (not annual), no payout caps,
              direct-pay to participating vets. Premium reflects coverage depth.
            </p>
            <AffiliateLink
              vendor="trupanion"
              sku="home"
              source="pet-insurance-hub-best-chronic"
              className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Get a Trupanion quote →
            </AffiliateLink>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              💰 Best Budget Pick
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Lemonade Pet</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Lowest entry premium in the category, instant app-based claims,
              bundle discount with Lemonade renters/home/life insurance.
            </p>
            <AffiliateLink
              vendor="lemonade"
              sku="home"
              source="pet-insurance-hub-best-budget"
              className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Get a Lemonade quote →
            </AffiliateLink>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              🦷 Best for Dental Disease Coverage
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Fetch by The Dodo</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Covers dental disease — not just dental accidents. Important for
              small dogs and brachycephalic breeds.
            </p>
            <AffiliateLink
              vendor="fetch"
              sku="home"
              source="pet-insurance-hub-best-dental"
              className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Get a Fetch quote →
            </AffiliateLink>
          </div>
        </div>

        {/* FAQ-style explainers */}
        <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
          What to look for when comparing
        </h2>

        <div className="space-y-6 mb-12 text-brand-text-dark">
          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Annual limit vs. unlimited
            </h3>
            <p className="text-sm leading-relaxed">
              A capped annual limit (say $5,000) means the carrier stops paying
              once you've claimed that much in a year. An unlimited annual
              benefit means there's no cap. For dogs with chronic conditions or
              breeds prone to expensive interventions (cruciate tears,
              orthopedic surgery), unlimited is materially safer. Trupanion,
              Pumpkin (top tier), Healthy Paws, Spot (top tier), Figo (top
              tier), and ManyPets offer unlimited.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Reimbursement %
            </h3>
            <p className="text-sm leading-relaxed">
              After your deductible, the carrier reimburses you for a percentage
              of the eligible vet bill — typically 70%, 80%, or 90%. Figo is
              the only carrier on this list offering a 100% reimbursement
              option. Higher reimbursement = higher premium. The 80%/$500
              deductible combination is the most common configuration.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Exam fee coverage
            </h3>
            <p className="text-sm leading-relaxed">
              When you take your pet to the vet for a problem, you pay an exam
              fee on top of any diagnostics or treatment. Some carriers include
              exam fees in eligible claims (Pumpkin, ManyPets, Trupanion, Spot,
              Figo, Fetch, Embrace). Others require an add-on (Lemonade,
              Healthy Paws, Embrace base plan). Over the life of a policy this
              difference adds up.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Waiting periods (especially orthopedic)
            </h3>
            <p className="text-sm leading-relaxed">
              The waiting period is the gap between when your policy starts and
              when you can claim. Accident waiting periods are typically short
              (1–15 days). Illness is usually 14 days. The orthopedic waiting
              period is where carriers diverge sharply: Pumpkin, ManyPets, and
              Spot have a 14-day orthopedic waiting period. Trupanion is 30
              days. Lemonade, Embrace, Figo, and Fetch are 6 months. Healthy
              Paws is 12 months. For breeds predisposed to cruciate tears
              (Labradors, Rottweilers, Newfoundlands), a short orthopedic
              waiting period is meaningful.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Pre-existing conditions
            </h3>
            <p className="text-sm leading-relaxed">
              No carrier covers pre-existing conditions present before your
              policy starts. The strongest stance is ManyPets, which covers
              curable pre-existing conditions after 18 symptom-free months.
              Other carriers treat "curable" conditions as covered after a
              cure-confirmation period. Chronic / lifelong conditions are
              uniformly excluded across all carriers.
            </p>
          </div>
        </div>

        {/* Editorial standards link */}
        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-12">
          <h3 className="font-display text-lg font-bold mb-2">
            Why you can trust these rankings
          </h3>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Dog.com rankings are independent of affiliate relationships.
            Editorial scores are based on policy structure, not commission. We
            disclose affiliate links on every page where they appear. See our
            full{' '}
            <Link href="/editorial-standards" className="text-brand-primary underline">
              editorial standards
            </Link>{' '}
            for the methodology.
          </p>
        </div>

        {/* Email lead capture (footer) */}
        <EmailCapture
          variant="section"
          siteId="dog-com"
          tag="dog-com:insurance-comparison"
          title="One more time: get the comparison spreadsheet"
          subtitle="All 9 carriers, side-by-side, downloadable. Free."
          buttonText="Send the spreadsheet"
        />
      </div>
    </AffiliateDisclosure>
  )
}
