import type { Metadata } from 'next'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CalloutBox, PullQuote, ArticleByline, FAQAccordion, PriceAsOf, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { InsuranceWellnessShop } from '../../../components/InsuranceWellnessShop'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

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
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-10-07T00:00:00Z',
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
  name: 'Best Pet Insurance 2026 — Carrier Comparison',
  description: 'Pet insurance carriers compared on reimbursement model, payout speed, and policy terms. Editorial review by Vets.co.',
  url: 'https://vets.co/reviews/best-pet-insurance',
  numberOfItems: 3,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trupanion', url: 'https://vets.co/go/trupanion/home?s=reviews-best-pet-insurance' },
    { '@type': 'ListItem', position: 2, name: 'Healthy Paws', url: 'https://vets.co/go/healthy-paws/home?s=reviews-best-pet-insurance' },
    { '@type': 'ListItem', position: 3, name: 'Embrace', url: 'https://vets.co/go/embrace/home?s=reviews-best-pet-insurance' },
  ],
}

// Product schemas — single editorial review (reviewCount: 1 per honest-pattern used across the portfolio)
const trupanionSchema = buildProductSchema({
  name: 'Trupanion Pet Insurance',
  description: 'Only insurer that pays the veterinary practice directly at checkout. 90% reimbursement, unlimited payouts, per-condition deductible.',
  url: 'https://vets.co/go/trupanion/home?s=reviews-best-pet-insurance',
  imageUrl: '',
})

const healthyPawsSchema = buildProductSchema({
  name: 'Healthy Paws Pet Insurance',
  description: 'Fast claims processing (per the carrier\'s stated ~2-day average). Healthy Paws lets you choose an annual reimbursement limit of $5,000, $7,000, or unlimited.',
  url: 'https://vets.co/go/healthy-paws/home?s=reviews-best-pet-insurance',
  imageUrl: '',
})

const embraceSchema = buildProductSchema({
  name: 'Embrace Pet Insurance',
  description: 'Wellness add-on available for routine and preventive care. Deductible program: see the carrier\'s current terms.',
  // note: "highly customizable" is a calibrated descriptor, not an objective-superiority claim
  url: 'https://vets.co/go/embrace/home?s=reviews-best-pet-insurance',
  imageUrl: '',
})

const pageSchema = combineSchemas(schema, breadcrumbSchema, insurerListSchema, trupanionSchema, healthyPawsSchema, embraceSchema)

const PICKS = [
  { label: 'Pays the vet directly', name: 'Trupanion', subtitle: 'Only insurer that pays the vet directly', href: '#trupanion' },
  { label: 'Fastest Reimbursement', name: 'Healthy Paws', subtitle: '~2 day claims · Annual limit is a choice', href: '#healthy-paws' },
  { label: 'Wellness add-on', name: 'Embrace', subtitle: 'Routine care add-on available', href: '#embrace' },
]

export default function VetsPetInsurancePage() {
  return (
    <>
      <SchemaScript schema={pageSchema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">
          Owner Reference · Updated Jun 2026
        </span>
        <h1 className="font-bold text-white tracking-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.15, fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Best Pet Insurance 2026 — How the 11 Major Carriers Compare
        </h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Trupanion is the top pet insurance pick because it is the carrier that pays the clinic at checkout.</p>
        <PriceAsOf date="2026-10-09" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/trupanion/home?s=reviews-best-pet-insurance' label='Get a Trupanion quote →' holdWithoutPartnerId />
        <HopDisclosure tone="on-dark"
          siteId="vets-co"
          noteClassName="mt-3 mb-0 text-xs leading-relaxed text-white/80"
          href={[
            '/go/trupanion/home?s=reviews-best-pet-insurance',
            '/go/healthy-paws/home?s=reviews-best-pet-insurance',
            '/go/embrace/home?s=reviews-best-pet-insurance',
          ]}
        />
        </div>
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-pet-insurance"
          checklist={[
            "Trupanion is the card for direct pay at checkout rather than pay-and-wait reimbursement.",
            "Healthy Paws is the next card, for reimbursement speed.",
            "Embrace is the card for owners who want a wellness add-on beside accident and illness coverage.",
            "The page says the orthopedic waiting period is on the carrier page: see the carrier's current terms.",
            "Trupanion is the only one of the 11 major carriers that pays the practice directly at checkout.",
            "Every condition noted in records before enrollment may be classified as pre-existing and excluded.",
          ]}
        />

        <p className="text-lg text-white/55 max-w-2xl" style={{ lineHeight: 1.6, fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
          Trupanion is the only one of the 11 major carriers that pays the practice directly at checkout.
        </p>
        <div className="mt-4 text-xs text-white/80">Vets.co Editorial · Updated Jun 2026</div>
      </div>

      <QuickPicks items={PICKS} />

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link>
        <span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Pet Insurance</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-12 min-w-0">
          <div className="min-w-0">
            <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-10-07T00:00:00Z" reviewedBy="Editorial team" />
          <LastUpdated date="2026-10-09" />


            <PullQuote variant="lead" quote="Enroll before your first vet visit. Every condition noted in records before enrollment may be permanently excluded as pre-existing." attribution="The single most important point on pet insurance" />

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Why It Matters</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The single most important point: <strong>enroll before your first vet visit</strong>. Every condition noted in records before enrollment may be classified as pre-existing and excluded. Owners commonly try to enroll after a diagnosis — at that point it&apos;s too late for that condition. The second most important thing: Trupanion is the only carrier whose policy contract obligates them to pay the veterinary practice directly at checkout (rather than the standard submit-receipt-and-wait reimbursement model). For major emergencies, this matters enormously.
              </p>
            </div>

            <CalloutBox variant="warning" title="Always read the policy fine print">
              Every insurer&apos;s pre-existing condition definition, bilateral exclusion, and waiting-period language differs in ways that materially affect what is paid. Before purchase, read the sample policy document — not just the marketing page — and confirm orthopedic waiting periods, hereditary-condition exclusions, and how the insurer defines &ldquo;curable&rdquo; vs. &ldquo;chronic&rdquo;. Want to model what a given policy actually pays on a real bill? Use the <Link href="/tools/insurance-reimbursement-estimator" className="text-brand-primary underline">insurance reimbursement estimator</Link> — plug in deductible, reimbursement %, and annual cap to see net out-of-pocket on representative scenarios. Still deciding whether to buy at all? The <Link href="/tools/pet-insurance-worth-it-calculator" className="text-brand-primary underline">&ldquo;is pet insurance worth it?&rdquo; calculator</Link> shows the breakeven cost level at which a policy pays for itself.
            </CalloutBox>

            <ReviewCard id="trupanion" badge="Pays the vet directly" name="Trupanion" winner
              subtitle="Pays the vet directly · 90% reimbursement · No payout limits"
              description={<p>Trupanion is the only insurer integrated with veterinary practice management software to pay the clinic directly at checkout — no claim form for you, no waiting for reimbursement. From the vet side, this is genuinely significant: it removes the financial barrier to needed care in the moment it matters most. Their 90% reimbursement rate and unlimited payouts are the coverage numbers on this card.</p>}
              specs={[
                { label: 'Reimbursement', value: '90%', highlight: 'good' },
                { label: 'Payout Limit', value: 'Unlimited', highlight: 'good' },
                { label: 'Claims', value: 'Direct vet payment', highlight: 'good' },
                { label: 'Deductible', value: 'Per-condition' },
                { label: 'Wellness', value: 'Not included', highlight: 'warn' },
              ]}
              pros={['Only insurer paying vet directly at time of service', '90% reimbursement', 'Unlimited payouts', 'Per-condition deductible favors chronic disease']}
              cons={['Higher premiums', 'No wellness coverage']}
              price="See the carrier's current terms"
              priceNote="dated 2026-10-05."
              ctaText="Get a Trupanion quote" ctaHref="/go/trupanion/home?s=reviews-best-pet-insurance" holdWithoutPartnerId
              ctaAffiliateProgram="trupanion" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="healthy-paws" badge="Fastest Reimbursement" name="Healthy Paws"
              subtitle="Most claims processed in 2 days · Notes list no wellness add-on"
              description={<p>The Healthy Paws claims page, fetched 2026-10-08, says most claims are processed in 2 days, and that Direct Pay can reimburse the vet when funding is urgent. The annual reimbursement limit is a choice. Healthy Paws lists $5,000, $7,000, or unlimited, dated 2026-10-09. The carrier page was fetched 2026-10-08. It is not automatically unlimited. Our notes list no wellness add-on.</p>}
              specs={[
                { label: 'Reimbursement', value: 'Up to 90%', highlight: 'good' },
                { label: 'Claims Speed', value: 'Most in 2 days', highlight: 'good' },
                { label: 'Payout Limit', value: '$5,000, $7,000, or unlimited', highlight: 'good' },
                { label: 'Deductible', value: 'Annual' },
              ]}
              pros={['Among the fastest claims processing of major carriers', 'Consistently strong customer satisfaction reputation', 'Unlimited is one of the limit choices', 'Good mobile app']}
              cons={['Direct Pay is the urgent exception on the claims page', 'No wellness add-on']}
              price="See the carrier's current terms"
              priceNote="dated 2026-10-07."
              ctaText="Get a Healthy Paws quote" ctaHref="/go/healthy-paws/home?s=reviews-best-pet-insurance" holdWithoutPartnerId
              ctaAffiliateProgram="healthy-paws" ctaAffiliateProduct="pet-insurance"
            />

            <ReviewCard id="embrace" badge="Wellness add-on" name="Embrace"
              subtitle="Wellness add-on · Deductible program: see the carrier's current terms"
              description={<p>The Wellness Rewards page, fetched 2026-10-08, lists wellness exams, vaccinations, flea, tick, and heartworm prevention, and preventative dental cleaning. Our notes mark that coverage as a standalone add-on. The deductible program and the orthopedic waiting period: see the carrier's current terms. Reimbursement on the current dog page is 70%, 80%, or 90%.</p>}
              specs={[
                { label: 'Wellness', value: 'Add-on available', highlight: 'good' },
                { label: 'Deductible', value: 'See the carrier\'s current terms' },
                { label: 'Reimbursement', value: '70–90%' },
                { label: 'Ortho Waiting', value: 'See the carrier\'s current terms', highlight: 'warn' },
              ]}
              pros={['Wellness add-on covers routine and preventive care', 'Deductible program: see the carrier\'s current terms', 'Reimbursement is 70%, 80%, or 90%']}
              cons={['Orthopedic waiting period: see the carrier\'s current terms', 'More complex plan options']}
              price="See the carrier's current terms"
              priceNote="dated 2026-10-05."
              ctaText="Get an Embrace quote" ctaHref="/go/embrace/home?s=reviews-best-pet-insurance" holdWithoutPartnerId
              ctaAffiliateProgram="embrace" ctaAffiliateProduct="pet-insurance"
            />

            <InsuranceWellnessShop source="reviews-best-pet-insurance" />

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which policy</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Reimbursement, limits, and prices below are the figures already on each card. They are not a quote. The Healthy Paws claims page says most claims are processed in 2 days. Enroll before a condition is in the medical record — every card on this page is subject to that rule.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If this is you</th>
                      <th className="p-3 font-bold text-brand-dark">Start here</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Tradeoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">You need the clinic paid at checkout</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#trupanion" className="text-brand-primary">Trupanion</a><TableShopLink href={"/go/trupanion/home?s=reviews-best-pet-insurance"} product={"Trupanion"} holdWithoutPartnerId /></td>
                      <td className="p-3 text-brand-text-mid">Pays the vet directly. 90% reimbursement. Unlimited payouts. See the carrier's current terms for the monthly figure.</td>
                      <td className="p-3 text-brand-text-mid">Higher premiums. Wellness is not included. Deductible is per condition</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">You can pay the clinic and want the reimbursement back fast</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#healthy-paws" className="text-brand-primary">Healthy Paws</a><TableShopLink href={"/go/healthy-paws/home?s=reviews-best-pet-insurance"} product={"Healthy Paws"} holdWithoutPartnerId /></td>
                      <td className="p-3 text-brand-text-mid">Most claims processed in 2 days. Up to 90 percent. Annual limit is $5,000, $7,000, or unlimited. See the carrier's current terms for the monthly figure.</td>
                      <td className="p-3 text-brand-text-mid">Wellness is not in our notes. Deductible is annual</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">You want routine care budgeted beside accident and illness</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#embrace" className="text-brand-primary">Embrace</a><TableShopLink href={"/go/embrace/home?s=reviews-best-pet-insurance"} product={"Embrace"} holdWithoutPartnerId /></td>
                      <td className="p-3 text-brand-text-mid">Wellness add-on. 70%, 80%, or 90%. See the carrier's current terms for the monthly figure.</td>
                      <td className="p-3 text-brand-text-mid">Orthopedic waiting period: see the carrier's current terms. More plan options to read</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-09" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Questions this comparison answers</h2>
              <FAQAccordion items={[
                {
                  question: 'Which carrier pays the clinic at checkout?',
                  answer: 'Trupanion is the card for direct pay at checkout rather than pay-and-wait reimbursement. Healthy Paws is the next card, for reimbursement speed.',
                },
                {
                  question: 'Which plan on this page covers routine care?',
                  answer: 'Embrace is the card for owners who want a wellness add-on beside accident and illness coverage. The page says the orthopedic waiting period is on the carrier page: see the carrier\'s current terms.',
                },
              ]} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <RelatedLinks title="Related Guides" links={[
              { label: 'November and December costs', href: '/reviews/november-december-gift-guide' },
              { label: 'Insurance quote prep checklist', href: '/tools/insurance-quote-prep' },
              { label: 'Is Pet Insurance Worth It? (calculator)', href: '/tools/pet-insurance-worth-it-calculator' },
              { label: 'ER vs Clinic vs Telehealth', href: '/tools/er-vs-clinic' },
              { label: 'Pet Insurance Education Hub', href: '/insurance' },
              { label: 'Pet Insurance Questions, Answered', href: '/insurance/questions' },
              { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' },
              { label: 'When to Enroll Your Pet', href: '/insurance/when-to-enroll' },
              { label: 'Pre-Existing Conditions Explained', href: '/insurance/pre-existing-conditions' },
              { label: 'Find a Specialist', href: '/find-a-vet' },
              { label: 'Emergency Signs', href: '/health/emergency-signs' },
            ]} />

          </aside>
        </div>
      </div>
      <RelatedReads siteId="vets-co" path="/reviews/best-pet-insurance" />
          <ArticleSourcesList title="Sources"
            sources={[
            { label: 'Healthy Paws claims', url: 'https://www.healthypawspetinsurance.com/pet-insurance-claims.html', publisher: 'Healthy Paws' },
            { label: 'Embrace Wellness Rewards', url: 'https://www.embracepetinsurance.com/coverage/wellness-rewards', publisher: 'Embrace' },
            ]}
          />
    </>
  )
}
