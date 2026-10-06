import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure} from '@carloOS/ui'
import { VETS_PET_INSURANCE_REVIEW } from '@carloOS/config'
import { CARRIERS } from '../../../data/insurance-carriers'

function examRank(value: boolean | 'addon'): number {
  if (value === true) return 0
  if (value === 'addon') return 1
  return 2
}

function maxReimbursement(options: number[]): number {
  return Math.max(...options)
}

function limitRank(options: (number | 'unlimited')[]): number {
  if (options.includes('unlimited')) return Number.POSITIVE_INFINITY
  return Math.max(...options.filter((option): option is number => option !== 'unlimited'))
}

// Table order is the columns already on the page: exam fees, then the
// highest reimbursement option, then an unlimited annual limit, then the
// low end of the sample premium. ItemList follows this same array.
const ranked = [...CARRIERS].sort((a, b) => {
  const exam = examRank(a.coversExamFees) - examRank(b.coversExamFees)
  if (exam !== 0) return exam
  const reimbursement = maxReimbursement(b.reimbursementOptions) - maxReimbursement(a.reimbursementOptions)
  if (reimbursement !== 0) return reimbursement
  const limit = limitRank(b.annualLimitOptions) - limitRank(a.annualLimitOptions)
  if (limit !== 0) return limit
  const premium = a.samplePremiumMonthly.low - b.samplePremiumMonthly.low
  if (premium !== 0) return premium
  return a.name.localeCompare(b.name)
})

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Pet Insurance 2026 — Side-by-Side Comparison | Dog.com',
  description:
    'Compare 9 pet insurance carriers on sample premium, reimbursement, annual limit, and exam-fee coverage.',
  path: '/pet-insurance',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'dog-com',
    title: 'Pet Insurance 2026 — Side-by-Side Comparison',
    description:
      'Compare 9 pet insurance carriers — Trupanion, Pumpkin, Lemonade, Embrace, Healthy Paws, Spot, Figo, Fetch by The Dodo, ManyPets.',
    url: 'https://dog.com/pet-insurance',
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  }),
  buildBreadcrumbSchema({ items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
  ] }),
  buildItemListSchema({
    name: 'Pet insurance carriers ordered by exam fees, then reimbursement',
    items: ranked.map((c) => ({
      name: c.name,
      url: `https://dog.com/pet-insurance/${c.slug}`,
    })),
  }),
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
  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
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
          Pet Insurance 2026 — Side-by-Side
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
        {/* TL;DR — what AI engines should quote */}
        <p className="text-lg text-brand-text-mid leading-relaxed italic mb-8">
          <strong className="not-italic">TL;DR.</strong> Figo is listed first because exam fees are included and its reimbursement options go to 100%. Spot, ManyPets, and Pumpkin follow: exam fees included, a 90% option, and an unlimited annual limit, ordered by the low end of the sample premium. Trupanion&apos;s per-condition deductible and uncapped payout are in the use-case notes; exam fees are not included, so it is not first in this table.
        </p>

        {/* How we picked */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How this table is ordered
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            Rows follow the exam-fees column (included, then add-on, then not
            covered), then the highest reimbursement percentage listed, then
            whether an unlimited annual limit is offered, then the low end of
            the sample premium. Commission does not change that order. These
            are nine major U.S. pet insurers. Sample premiums
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
                  <td className="py-3">
                    <a
              href={VETS_PET_INSURANCE_REVIEW}
              rel="noopener" className="text-brand-primary font-semibold no-underline hover:underline whitespace-nowrap"
            >
              Compare →
            </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lead magnet */}

        {/* Editorial picks summary */}
        <h2 className="font-display text-3xl font-bold tracking-tight mb-6">
          Editorial picks by use case
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              🏆 Editorial pick — best overall
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Trupanion</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Per-condition lifetime deductible, no payout caps, direct-pay at participating vets.
            </p>
            {/* Monetization-lane exception: this hop stays live until Carlo
                sets AFF_TRUPANION_TAG, AFF_HEALTHY_PAWS_TAG, and AFF_EMBRACE_TAG.
                Editorial Vets.co quote buttons stay disabled until those tags
                are set. Do not invent an ID and do not disable this button
                without his say. See docs/affiliate-ids.md. */}
            <a
              href="/go/trupanion/home?s=pet-insurance-hub-best-overall"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Get a Trupanion quote →
            </a>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial pick — broad coverage
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Pumpkin Pet Insurance</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Broad base coverage with no per-incident caps. No upper age limit at enrollment.
            </p>
            <a
              href={VETS_PET_INSURANCE_REVIEW}
              rel="noopener" className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Compare quotes on Vets.co →
            </a>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              💎 Editorial pick — chronic / serious conditions
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Trupanion</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Per-condition lifetime deductible (not annual), no payout caps,
              direct-pay to participating vets. Premium reflects coverage depth.
            </p>
            <a
              href={VETS_PET_INSURANCE_REVIEW}
              rel="noopener" className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Compare quotes on Vets.co →
            </a>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              💰 Editorial pick — budget-conscious
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Lemonade Pet</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Often a lower entry premium in the category, instant app-based
              claims, bundle discount with Lemonade renters/home/life insurance.
            </p>
            <a
              href={VETS_PET_INSURANCE_REVIEW}
              rel="noopener" className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Compare quotes on Vets.co →
            </a>
          </div>

          <div className="border border-brand-border rounded-xl p-6">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              🦷 Editorial pick — dental disease coverage
            </div>
            <h3 className="font-display text-xl font-bold mb-1">Fetch by The Dodo</h3>
            <p className="text-sm text-brand-text-mid mb-3">
              Covers dental disease — not just dental accidents. Important for
              small dogs and brachycephalic breeds.
            </p>
            <a
              href={VETS_PET_INSURANCE_REVIEW}
              rel="noopener" className="inline-block text-brand-primary font-semibold no-underline hover:underline"
            >
              Compare quotes on Vets.co →
            </a>
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
              one carrier on this list that may offer a 100% reimbursement
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
            Why this table is ordered this way
          </h3>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            The order follows the exam-fees, reimbursement, annual-limit, and
            sample-premium columns. Commission does not change it. Affiliate
            links are disclosed on every page where they appear. See the{' '}
            <Link href="/editorial-standards" className="text-brand-primary underline">
              editorial standards
            </Link>{' '}
            for the methodology.
          </p>
        </div>

        {/* Email lead capture (footer) */}

      </div>
    </>
  )
}
