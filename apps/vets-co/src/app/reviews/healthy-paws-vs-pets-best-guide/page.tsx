import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Healthy Paws vs Pets Best Tiers | Vets.co',
  description: 'The deductible page scores Healthy Paws 8.7 for one plan and Pets Best 8.2 for several tiers. Both prices are quote-based.',
  path: '/reviews/healthy-paws-vs-pets-best-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Healthy Paws or Pets Best tiers',
  description: 'Healthy Paws for one set of levers, or Pets Best for several plan tiers. Scores are on the deductible page.',
  url: 'https://vets.co/reviews/healthy-paws-vs-pets-best-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the deductible page mark as the winner?',
    answer: 'Healthy Paws, scored 8.7 and marked Simple Levers. The review lists one accident-and-illness plan, a deductible and reimbursement rate you set, and fast reimbursement. There is no wellness add-on. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Pets Best?',
    answer: 'When you want several plan tiers and a wider set of deductible and reimbursement combinations. Pets Best scores 8.2. The review lists multiple tiers, a pay-then-claim model, and no upper age limit. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both cards say quote-based. The premium, reimbursement percent, and annual limit are on the carrier quote, which is where the deductible page leaves them.',
  },
]

const RANKED = ['Healthy Paws', 'Pets Best']
const itemList = buildItemListSchema({
  name: 'Healthy Paws or Pets Best',
  items: RANKED.map((name) => ({ name, url: 'https://vets.co/reviews/healthy-paws-vs-pets-best-guide' })),
})

export default function HealthyPawsVsPetsBestGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Healthy Paws or Pets Best tiers',
        subtitle: 'One accident-and-illness plan with two levers, or several tiers. Scores below are the ones on the deductible page. Neither price line is a premium.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-pets-best-guide" label="Get a Healthy Paws quote" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Healthy Paws vs Pets Best', href: '/reviews/healthy-paws-vs-pets-best-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Deductibles and reimbursement', href: '/insurance/deductibles-reimbursement' },
            { label: 'Quote prep checklist', href: '/tools/insurance-quote-prep' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>Scores below are the ones on the <Link href="/insurance/deductibles-reimbursement">deductible and reimbursement page</Link>. That page puts Healthy Paws and Pets Best side by side as two ways to set the same levers. <Link href="/reviews/healthy-paws-vs-embrace-guide">Healthy Paws versus Embrace</Link> is the wellness-add-on comparison. Trupanion, Lemonade, and Spot have their own guides. Neither card prints a monthly premium.</p>
        <h2>What the page says about Healthy Paws</h2>
        <p>Healthy Paws is Simple Levers, score 8.7, and the winner. The card describes a single accident-and-illness plan where you choose the deductible and the reimbursement rate. Reimbursement is listed as fast, on a pay-then-claim model. The cons say there is no wellness add-on and that you should confirm the annual-limit structure on the quote, because that limit is the catastrophe protection. The price line is quote-based. The link above opens the Healthy Paws quote from that page.</p>
        <h2>What the page says about Pets Best</h2>
        <p>Pets Best is Tiered Options, score 8.2. The card says several plan tiers offer a wide range of deductible and reimbursement combinations, which is the point when you want to see how each lever moves a premium. The model is pay-then-claim. A listed pro is no upper age limit. Cons say there are more options to compare and that standard exclusions apply. The price line is quote-based. The reimbursement percent is the one on this card, not a figure copied from another carrier.</p>
        <p>What to have ready before either quote is on the <Link href="/tools/insurance-quote-prep">quote-prep checklist</Link>: age, breed, pre-existing conditions, and the deductible and reimbursement choices.</p>
        <h2>Who should quote which carrier</h2>
        <p>Start the Healthy Paws quote when one plan and two levers are enough, and wellness coverage is not the reason you are buying. Start the Pets Best quote when you want several tiers, including for an older pet the card says can still enroll, and you are willing to compare more structures. On both, read the annual limit, exclusions, and waiting periods in the sample policy. Do not treat either quote-based line as a price from this page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
