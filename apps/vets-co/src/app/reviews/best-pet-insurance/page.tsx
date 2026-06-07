import type { Metadata } from 'next'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, CalloutBox, PullQuote, ArticleByline, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Best Pet Insurance 2026 — How the 11 Major Carriers Compare | Vets.co',
  description: 'Pet insurance compared on direct-pay vs reimbursement, payout speed, pre-existing exclusions, and waiting periods. Sourced from carrier contracts.',
  path: '/reviews/best-pet-insurance',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Best Pet Insurance 2026 — How the 11 Major Carriers Compare',
  description: 'Pet insurance ranked using public payout data, contract terms, and what actually matters for owners.',
  url: 'https://vets.co/reviews/best-pet-insurance',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: new Date().toISOString(),
  modifiedAt: new Date().toISOString(),
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Reviews', url: 'https://vets.co/reviews' },
    { name: 'Best Pet Insurance', url: 'https://vets.co/reviews/best-pet-insurance' },
  ],
})

// ItemList schema — enumerates compared carriers for AI/search citation
const insurerListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Pet Insurance 2025 — Carrier Comparison',
  description: 'Pet insurance carriers compared on reimbursement model, payout speed, and policy terms. Editorial review by Vets.co.',
  url: 'https://vets.co/reviews/best-pet-insurance',
  numberOfItems: 3,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trupanion', url: 'https://vets.co/reviews/best-pet-insurance#trupanion' },
    { '@type': 'ListItem', position: 2, name: 'Healthy Paws', url: 'https://vets.co/reviews/best-pet-insurance#healthy-paws' },
    { '@type': 'ListItem', position: 3, name: 'Embrace', url: 'https://vets.co/reviews/best-pet-insurance#embrace' },
  ],
}

// Product schemas — single editorial review (reviewCount: 1 per honest-pattern used across the portfolio)
const trupanionSchema = buildProductSchema({
  name: 'Trupanion Pet Insurance',
  description: 'Only insurer that pays the veterinary practice directly at checkout. 90% reimbursement, unlimited payouts, per-condition deductible.',
  url: 'https://vets.co/reviews/best-pet-insurance#trupanion',
  imageUrl: '',
  ratingValue: 9.4,
  reviewCount: 1,
})

const healthyPawsSchema = buildProductSchema({
  name: 'Healthy Paws Pet Insurance',
  description: 'Fast claims processing (~2 days average), strong customer satisfaction reputation, unlimited payouts, no annual or per-incident limits.',
  url: 'https://vets.co/reviews/best-pet-insurance#healthy-paws',
  imageUrl: '',
  ratingValue: 9.1,
  reviewCount: 1,
})

const embraceSchema = buildProductSchema({
  name: 'Embrace Pet Insurance',
  description: 'Wellness add-on available for routine and preventive care. Diminishing deductible, highly customizable plan structure.',
  url: 'https://vets.co/reviews/best-pet-insurance#embrace',
  imageUrl: '',
  ratingValue: 8.8,
  reviewCount: 1,
})

const pageSchema = combineSchemas(schema, breadcrumbSchema, insurerListSchema, trupanionSchema, healthyPawsSchema, embraceSchema)

const PICKS = [
  { label: 'Best Overall', name: 'Trupanion', subtitle: 'Only insurer that pays the vet directly', href: '#trupanion' },
  { label: 'Fastest Reimbursement', name: 'Healthy Paws', subtitle: '~2 day claims · No limits', href: '#healthy-paws' },
  { label: 'Wellness Included', name: 'Embrace', subtitle: 'Routine care add-on available', href: '#embrace' },
]

export default function VetsPetInsurancePage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">
          Owner Reference · Updated Jun 2026
        </span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Best Pet Insurance 2026 — How the 11 Major Carriers Compare
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          Across the 11 major pet insurance carriers, Trupanion is the only one
          that pays the practice directly at checkout, eliminating the
          submit-and-wait reimbursement gap that strands owners with a $5,000
          emergency bill. Healthy Paws delivers the fastest reimbursement (around
          two days, no payout caps), and Embrace is the practical choice when
          routine wellness coverage matters. Enroll before any vet visit — every
          insurer permanently excludes conditions documented before the policy starts.
        </p>
        <div className="mt-4 text-xs text-white/30">Vets.co Editorial · Updated Jun 2026 · Affiliate disclosure applies</div>
      </div>

      <QuickPicks items={PICKS} />

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Best Pet Insurance</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12">
          <div>
            <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

            <AffiliateDisclosure variant="inline" siteId="vets-co" />

            <PullQuote variant="lead" quote="Enroll before your first vet visit. Every condition noted in records before enrollment may be permanently excluded as pre-existing." attribution="The single most important point on pet insurance" />

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Why It Matters</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The single most important point: <strong>enroll before your first vet visit</strong>. Every condition noted in records before enrollment may be classified as pre-existing and excluded. Owners commonly try to enroll after a diagnosis — at that point it&apos;s too late for that condition. The second most important thing: Trupanion is the only carrier whose policy contract obligates them to pay the veterinary practice directly at checkout (rather than the standard submit-receipt-and-wait reimbursement model). For major emergencies, this matters enormously.
              </p>
            </div>

            <CalloutBox variant="warning" title="Always read the policy fine print">
              Every insurer&apos;s pre-existing condition definition, bilateral exclusion, and waiting-period language differs in ways that materially affect what is paid. Before purchase, read the sample policy document — not just the marketing page — and confirm orthopedic waiting periods, hereditary-condition exclusions, and how the insurer defines &ldquo;curable&rdquo; vs. &ldquo;chronic&rdquo;. Want to model what a given policy actually pays on a real bill? Use the <Link href="/tools/insurance-reimbursement-estimator" className="text-brand-primary no-underline hover:underline">insurance reimbursement estimator</Link> — plug in deductible, reimbursement %, and annual cap to see net out-of-pocket on representative scenarios.
            </CalloutBox>

            <ScoreMethodology />
            <ReviewCard id="trupanion" badge="Best Overall" name="Trupanion" winner
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
              ctaText="Get a Quote →" ctaHref="/go/trupanion/home?s=reviews-best-pet-insurance"
              ctaAffiliateProgram="trupanion" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="healthy-paws" badge="Fastest Reimbursement" name="Healthy Paws"
              subtitle="~2 day claims processing · Strong customer satisfaction reputation"
              score={9.1}
              description={<p>Healthy Paws is consistently well-regarded for customer satisfaction — their mobile app claim submission and average 2-day processing make the reimbursement experience notably smooth. No annual or per-incident limits. Slightly lower premiums than Trupanion at comparable coverage levels. Best for owners who prefer to pay the vet and be reimbursed quickly rather than wait for direct payment integration.</p>}
              specs={[
                { label: 'Reimbursement', value: '80–90%', highlight: 'good' },
                { label: 'Claims Speed', value: '~2 days', highlight: 'good' },
                { label: 'Payout Limit', value: 'Unlimited', highlight: 'good' },
                { label: 'Deductible', value: 'Annual' },
              ]}
              pros={['Among the fastest claims processing of major carriers', 'Consistently strong customer satisfaction reputation', 'No payout limits', 'Good mobile app']}
              cons={['No direct vet payment', 'No wellness add-on']}
              price="$40–85/month"
              ctaText="Get a Quote →" ctaHref="/go/healthy-paws/home?s=reviews-best-pet-insurance"
              ctaAffiliateProgram="healthy-paws" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="embrace" badge="Wellness Included" name="Embrace"
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
              ctaText="Get a Quote →" ctaHref="/go/embrace/home?s=reviews-best-pet-insurance"
              ctaAffiliateProgram="embrace" ctaAffiliateProduct="pet-insurance"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Related Guides" links={[
              { label: 'Pet Insurance Education Hub', href: '/insurance' },
              { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' },
              { label: 'When to Enroll Your Pet', href: '/insurance/when-to-enroll' },
              { label: 'Pre-Existing Conditions Explained', href: '/insurance/pre-existing-conditions' },
              { label: 'Find a Specialist', href: '/find-a-vet' },
              { label: 'Emergency Signs', href: '/health/emergency-signs' },
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
