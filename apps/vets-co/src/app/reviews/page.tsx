import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Product Reviews — Honest Comparisons | Vets.co', description: 'Pet product reviews from a veterinarian\'s perspective. Pet insurance, telehealth services ranked using public payout data and insurer disclosures.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Reviews', url: 'https://vets.co/reviews' },
  ],
})


const REVIEWS = [
  { title: 'Best Pet Insurance 2025 — Owner Reference', desc: 'Which plans actually pay when your pet needs $5,000 of care at 11pm', href: '/reviews/best-pet-insurance', badge: '🏆 Most Important' },
  { title: 'Best Pet Telehealth 2025', desc: 'Vetster, AskVet, Chewy Connect compared by availability and credentials', href: '/telehealth', badge: '📱 Convenient Care' },
]

export default function VetsReviewsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>Pet Product Reviews — Honest Comparisons</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Ranked from a veterinarian&apos;s perspective — what actually matters when your pet needs care.</p>
      </div>
      <div className="px-container-sm sm:px-container py-12 max-w-content-wide mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">What Vets.co reviews</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The two surfaces below are the only consumer products where the &ldquo;wrong choice&rdquo; can compound into thousands of dollars of out-of-pocket cost or delayed care for a pet that needed it. Pet insurance and pet telehealth. Everything else owners ask about — supplements, foods, leashes, beds, GPS trackers — lives on the breed and condition pages where the recommendation is in context. We do not run a general-purpose &ldquo;Best dog X&rdquo; review section because most of those categories are already well-served and our editorial bandwidth is better spent on the two surfaces where consumer judgement most often fails.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            The insurance review draws on the public carrier disclosures (the actual policy contracts, not the quote-marketing material), state-DOI complaint counts where available, and the published payout-ratio data the larger carriers report. The telehealth review compares the operating model, the clinician-credentialing posture, the prescribing scope, and the realistic cost-per-consult for each platform. Neither review is a paid placement; every page that contains affiliate links carries the FTC disclosure as required by 16 CFR Part 255.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all">
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light">{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">How rankings are made</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Rankings reflect the editorial team&apos;s reading of three things in this order: (1) what the policy contract or telehealth-platform terms actually obligate the carrier or provider to do, (2) the published track record on whether they do it (claim payout speed, claim approval rate, telehealth clinician availability), and (3) the price the consumer pays for the category of service. The third weighting — price — comes last because in this category the cheapest option that fails on the first two metrics is not actually cheap.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Where the published evidence is genuinely thin (a small newer carrier with no payout-history data, a telehealth platform under five years old) we say so on the page and recommend caution rather than fabricate confidence. Where two options are functionally tied on the criteria we name above, we describe the tie rather than break it.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Affiliate independence: rankings are made before affiliate links are added. We include carriers and platforms in the comparisons even when they pay no commission. The full editorial-independence policy is on <Link href="/editorial-standards" className="text-brand-primary no-underline hover:underline">/editorial-standards</Link>; the FTC-required affiliate disclosure is on <Link href="/legal/affiliate-disclosure" className="text-brand-primary no-underline hover:underline">/legal/affiliate-disclosure</Link>.
          </p>
        </div>
      </div>

      <div className="bg-brand-surface border-t border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">What&apos;s not reviewed here (and why)</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            We do not run a generic &ldquo;Best dog food&rdquo; review section. The diet question is so context-dependent — life stage, breed-specific risk, owner budget, allergic history, vet-prescribed therapeutic indication — that a generic ranking is misleading. Diet recommendations live on the condition and life-stage pages where they sit next to the clinical context that makes them defensible. PetFood.com handles the standalone brand-evaluation work with a published five-dimension rubric.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            We also don&apos;t rank or recommend specific veterinary practices in the reviews section. The directory at <Link href="/find-a-vet" className="text-brand-primary no-underline hover:underline">/find-a-vet</Link> is a directory, not a ranking, because the right clinic for a given owner is a function of geography, the practice&apos;s case mix, and the relationship a clinic has with its clients — none of which a top-N list captures honestly.
          </p>
        </div>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Tips" subtitle="research-based guidance every Tuesday." source="reviews-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly']} />
      </div>
    </>
  </>
  )
}
