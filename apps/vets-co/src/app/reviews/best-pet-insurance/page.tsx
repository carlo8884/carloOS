import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology} from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Best Pet Insurance 2025 — A Veterinarian\'s Perspective | Vets.co',
  description: 'Pet insurance ranked from a veterinarian\'s perspective — which plans actually pay when your pet needs care, how direct payment works, and what the fine…',
  path: '/reviews/best-pet-insurance',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Best Pet Insurance 2025 — A Veterinarian\'s Perspective',
  description: 'Pet insurance ranked using public payout data, contract terms, and what actually matters for owners.',
  url: 'https://vets.co/reviews/best-pet-insurance',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Trupanion', subtitle: 'Only insurer that pays the vet directly', href: '#trupanion' },
  { label: 'Fastest Reimbursement', emoji: '⚡', name: 'Healthy Paws', subtitle: '~2 day claims · No limits', href: '#healthy-paws' },
  { label: 'Wellness Included', emoji: '📋', name: 'Embrace', subtitle: 'Routine care add-on available', href: '#embrace' },
]

export default function VetsPetInsurancePage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">
          Owner Reference · May 2025
        </span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Best Pet Insurance 2025 — What Vets Actually Think
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          From a veterinarian&apos;s perspective, Trupanion is the only major pet insurer
          that pays the practice directly at checkout, eliminating the
          submit-and-wait reimbursement gap that strands owners with a $5,000
          emergency bill. Healthy Paws delivers the fastest reimbursement (around
          two days, no payout caps), and Embrace is the practical choice when
          routine wellness coverage matters. Enroll before any vet visit — every
          insurer permanently excludes conditions documented before the policy starts.
        </p>
        <div className="mt-4 text-xs text-white/30">Vets.co Editorial · Updated May 2025 · Affiliate disclosure applies</div>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Best Pet Insurance</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">From the Vet Side</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The single most important point: <strong>enroll before your first vet visit</strong>. Every condition noted in records before enrollment may be classified as pre-existing and excluded. Owners commonly try to enroll after a diagnosis — at that point it&apos;s too late for that condition. The second most important thing: Trupanion is the only insurer where the veterinarian can submit the claim and be paid directly while you&apos;re standing at my front desk. For major emergencies, this matters enormously.
              </p>
            </div>

            <ScoreMethodology />
            <ReviewCard id="trupanion" badge="Best Overall" badgeEmoji="🏆" name="Trupanion" winner
              subtitle="Pays the vet directly · 90% reimbursement · No payout limits"
              score={9.4}
              description={<p>Trupanion is the only insurer integrated with veterinary practice management software to pay the clinic directly at checkout — no claim form for you, no waiting for reimbursement. From the vet side, this is genuinely significant: it removes the financial barrier to needed care in the moment it matters most. Their 90% reimbursement rate and unlimited payouts make them the standard recommendation for high-risk breeds.</p>}
              specs={[
                { label: 'Reimbursement', value: '90%', highlight: 'good' },
                { label: 'Payout Limit', value: 'Unlimited', highlight: 'good' },
                { label: 'Claims', value: 'Direct vet payment', highlight: 'good' },
                { label: 'Deductible', value: 'Per-condition' },
                { label: 'Wellness', value: 'Not included', highlight: 'warn' },
              ]}
              pros={['Only insurer paying vet directly at time of service', '90% reimbursement', 'Unlimited payouts', 'Per-condition deductible favors chronic disease']}
              cons={['Higher premiums', 'No wellness coverage']}
              price="$65–120/month"
              ctaText="Get a Quote →" ctaHref="https://trupanion.com"
              ctaAffiliateProgram="trupanion" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="healthy-paws" badge="Fastest Reimbursement" badgeEmoji="⚡" name="Healthy Paws"
              subtitle="~2 day claims processing · Highest customer satisfaction"
              score={9.1}
              description={<p>Healthy Paws consistently wins customer satisfaction surveys — their mobile app claim submission and average 2-day processing make the reimbursement experience the smoothest in the industry. No annual or per-incident limits. Slightly lower premiums than Trupanion at comparable coverage levels. Best for owners who prefer to pay the vet and be reimbursed quickly rather than wait for direct payment integration.</p>}
              specs={[
                { label: 'Reimbursement', value: '80–90%', highlight: 'good' },
                { label: 'Claims Speed', value: '~2 days', highlight: 'good' },
                { label: 'Payout Limit', value: 'Unlimited', highlight: 'good' },
                { label: 'Deductible', value: 'Annual' },
              ]}
              pros={['Fastest claims in the industry', 'Highest customer satisfaction scores', 'No payout limits', 'Good mobile app']}
              cons={['No direct vet payment', 'No wellness add-on']}
              price="$40–85/month"
              ctaText="Get a Quote →" ctaHref="https://healthypawspetinsurance.com"
              ctaAffiliateProgram="healthy-paws" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="embrace" badge="Wellness Included" badgeEmoji="📋" name="Embrace"
              subtitle="Wellness add-on · Diminishing deductible · Customizable"
              score={8.8}
              description={<p>Embrace is the best choice for owners who want routine and preventive care covered alongside illness and accident insurance. Their wellness add-on covers vaccines, heartworm testing, dental cleanings, and annual exams. The diminishing deductible reduces by $50 each claim-free year. Among the more customizable plan structures of the major insurers — adjust reimbursement, deductible, and annual limit to fit your budget.</p>}
              specs={[
                { label: 'Wellness', value: 'Add-on available', highlight: 'good' },
                { label: 'Deductible', value: 'Diminishing annual', highlight: 'good' },
                { label: 'Reimbursement', value: '70–90%' },
                { label: 'Ortho Waiting', value: '6 months', highlight: 'warn' },
              ]}
              pros={['Only major insurer with wellness add-on', 'Diminishing deductible rewards claim-free years', 'Highly customizable']}
              cons={['6-month orthopedic waiting period', 'More complex plan options']}
              price="$45–95/month + wellness add-on"
              ctaText="Get a Quote →" ctaHref="https://embracepetinsurance.com"
              ctaAffiliateProgram="embrace" ctaAffiliateProduct="pet-insurance"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Related Guides" links={[
              { label: 'Find a Specialist', href: '/find-a-vet' },
              { label: 'Emergency Signs', href: '/health/emergency-signs' },
              { label: 'Golden Retriever Health', href: '/breeds/golden-retriever-health' },
            ]} />
            <EmailCapture variant="sidebar" siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday." source="review-pet-insurance" />
          </aside>
        </div>
      </div>
    </>
  )
}
