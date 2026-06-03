import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture
} from '@carloOS/ui'

/**
 * Vets-co pet insurance hub.
 *
 * The COO orchestration shipped 20 medication + specialty pages on
 * vets-co with insurance CTAs that pointed at this URL but the page
 * didn't exist. This is the destination — minimal duplicate of the
 * Dog.com hub, framed from a clinical perspective with cross-links
 * to the canonical hub at dog.com/pet-insurance for the deep dive.
 */

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Insurance — Why Your Vet Recommends It | Vets.co',
  description:
    'Pet insurance lowers the cost of unexpected vet bills. See the carriers we rank highest, with our editorial methodology.',
  path: '/pet-insurance',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Pet Insurance — Why Your Vet Recommends It',
  description: 'A clinical perspective on pet insurance, with carrier rankings.',
  url: 'https://vets.co/pet-insurance',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

// Top 5 carriers vets-co recommends (same data as dog.com hub,
// abbreviated here to keep the page focused).
const TOP_CARRIERS = [
  { slug: 'pumpkin', name: 'Pumpkin Pet', vendor: 'pumpkin' as const, blurb: 'Broad base coverage; no upper age limit.', why: 'Recommended when owners want extensive coverage out of the box.' },
  { slug: 'trupanion', name: 'Trupanion', vendor: 'trupanion' as const, blurb: 'Per-condition deductible, direct-pay at participating vets.', why: 'Recommended for chronic and complex conditions where claim totals accumulate.' },
  { slug: 'manypets', name: 'ManyPets', vendor: 'manypets' as const, blurb: 'Curable pre-existing conditions covered after 18 months symptom-free.', why: 'Recommended when the pet has a minor curable condition in history.' },
  { slug: 'embrace', name: 'Embrace', vendor: 'embrace' as const, blurb: 'Healthy Pet Deductible decreases each claim-free year.', why: 'Recommended for younger healthy pets — the deductible discount compounds.' },
  { slug: 'lemonade', name: 'Lemonade Pet', vendor: 'lemonade' as const, blurb: 'Lowest entry premium; app-first claims.', why: 'Recommended when budget is the constraint.' },
]

export default function VetsCoInsuranceHub() {
  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="vets-co" />
      <SchemaScript schema={schema} />

      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🩺 Clinical perspective · May 2026
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Why Your Vet Recommends Pet Insurance
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Veterinarians see two recurring patterns with uninsured pets:
          delayed care because of cost, and economic euthanasia decisions
          that wouldn't be necessary with insurance. Insurance is not a
          guarantee of care, but it changes the conversation in the exam room.
        </p>
        <div className="mt-7">
          <Link
            href="https://dog.com/pet-insurance/quiz"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
          >
            Take the 60-second quiz →
          </Link>
        </div>
      </div>

      <nav aria-label="Breadcrumb" className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Pet Insurance</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-4xl mx-auto">
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            What insurance covers (and doesn't)
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            Pet insurance is medical insurance. It covers accidents, illness,
            and (depending on plan) hereditary, chronic, alternative,
            behavioral, dental, and exam costs. It does <strong>not</strong>{' '}
            cover pre-existing conditions present before the policy starts.
            Most plans reimburse you after the visit; some (Trupanion) pay the
            vet directly.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          The 5 carriers we rank highest
        </h2>

        <div className="grid gap-4 mb-12">
          {TOP_CARRIERS.map((c) => (
            <div
              key={c.slug}
              className="border border-brand-border rounded-xl p-6 bg-white"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold">{c.name}</h3>
                  <p className="text-sm text-brand-text-mid">{c.blurb}</p>
                </div>
                <a
              href={`/go/${c.vendor}/home?s=vets-co-insurance-hub-${c.slug}`}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold text-sm no-underline hover:opacity-90 whitespace-nowrap"
            >
              Get quote →
            </a>
              </div>
              <div className="text-xs text-brand-text-light italic border-t border-brand-border/40 pt-3 mt-3">
                {c.why}
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold tracking-tight mb-6">
          The clinical case for buying early
        </h2>

        <div className="space-y-5 text-brand-text-dark mb-12">
          <p className="text-sm leading-relaxed">
            The single most consistent finding in our editorial reviews of pet
            insurance is that the value compounds with how early you enroll.
            Younger pets have fewer pre-existing exclusions, lower premiums,
            and longer time horizons over which premiums spread the cost of
            inevitable later-life claims.
          </p>
          <p className="text-sm leading-relaxed">
            For senior pets — common at the first DVM visit after adoption —
            the carriers with no upper age limit (Pumpkin, ManyPets, Spot,
            Figo) are the practical short list. Premiums are higher than for
            puppies, but rejection at enrollment is the bigger risk.
          </p>
          <p className="text-sm leading-relaxed">
            For breeds with predictable orthopedic risk (Labradors,
            Rottweilers, Newfoundlands, Bernese Mountain Dogs), pay attention
            to the orthopedic waiting period — 14 days (Pumpkin, ManyPets,
            Spot) vs. 6 months (Lemonade, Embrace, Figo, Fetch) vs. 12 months
            (Healthy Paws) materially changes the math.
          </p>
        </div>

        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6 mb-12">
          <h3 className="font-display text-xl font-bold mb-3">
            See the full carrier comparison
          </h3>
          <p className="text-sm text-brand-text-mid mb-4">
            Detailed editorial reviews of all 9 major carriers — premium
            ranges, waiting periods, exam-fee coverage, pre-existing condition
            stance — live on our sister site Dog.com.
          </p>
          <Link
            href="https://dog.com/pet-insurance"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
          >
            See all 9 carriers compared →
          </Link>
        </div>

        <EmailCapture
          variant="section"
          siteId="vets-co"
          source="vets-co:insurance-comparison"
          title="Save the comparison for later"
          subtitle="We'll send you the 9-carrier comparison spreadsheet by email."
          ctaText="Email the spreadsheet"
        />
      </div>
    </>
  )
}
