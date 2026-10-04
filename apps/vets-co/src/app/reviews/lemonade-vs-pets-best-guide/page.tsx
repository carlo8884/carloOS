import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Lemonade vs Pets Best | Vets.co',
  description: 'The enrollment page scores Lemonade 8.4 for young pets and Pets Best 8.2 for flexible plans. Both prices are quote-based.',
  path: '/reviews/lemonade-vs-pets-best-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Lemonade or Pets Best',
  description: 'The enrollment page already scores Lemonade for young pets and Pets Best for flexible plans with no upper age limit.',
  url: 'https://vets.co/reviews/lemonade-vs-pets-best-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the enrollment page mark as the winner?',
    answer: 'Lemonade Pet, scored 8.4 and marked Young-Pet Value. The review lists app-based claims, availability that varies by state, and an optional preventive package. That package is not insurance. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Pets Best?',
    answer: 'When you want several plan tiers, including for an older adopted pet. Pets Best scores 8.2. The review lists multiple plan tiers, no upper age limit on enrollment, and a pay-then-claim model. Premiums rise with age. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both reviews say quote-based. Nothing here adds a premium, a reimbursement percent, or a waiting period the enrollment page does not print.',
  },
]

export default function LemonadeVsPetsBestGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Lemonade or Pets Best',
        subtitle: 'A young-pet quote, or a carrier the enrollment page says will still take an older pet. Scores below are the ones on that page. Neither price line is a premium.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/lemonade/home?s=reviews-lemonade-vs-pets-best-guide" label="Get a Lemonade quote" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Lemonade vs Pets Best', href: '/reviews/lemonade-vs-pets-best-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'When to enroll', href: '/insurance/when-to-enroll' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/insurance/when-to-enroll">enrollment page</Link> already puts Lemonade and Pets Best side by side as two carriers to quote early, and it points to the <Link href="/reviews/best-pet-insurance">insurance review</Link> for the wider comparison. Those scores are editorial scores, not shopper star ratings. Neither product prints a monthly premium.</p>
        <h2>What the review says about Lemonade</h2>
        <p>Lemonade Pet is Young-Pet Value, score 8.4, and the winner on that page. The review says the app-first accident-and-illness coverage often prices competitively for young, healthy pets, which is the window where premiums are lowest and few conditions are excluded. Claims are app-based. Availability varies by state. A preventive package is optional, and the review says that package is not insurance. The price line is quote-based.</p>
        <h2>What the review says about Pets Best</h2>
        <p>Pets Best is Flexible Plans, score 8.2. The review lists several plan tiers and no upper age limit on new enrollment, which is why it is worth quoting for both puppies and older adopted pets. The model is pay-then-claim. Premiums rise with age, and standard exclusions apply. The price line is quote-based. The review says the pre-existing-condition definition still decides what a late enrollment will cover.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Lemonade sample when the pet is young and healthy and you want the app-claim carrier the enrollment page marks first. Confirm the state actually offers it, and treat the preventive package as separate from the insurance. Open the Pets Best sample when the pet is older, or you want several tiers, and read how premium scales with age. On both, enroll before a condition is in the record. Do not treat either quote-based line as a price from this page.</p>
        <p>The button above opens the Lemonade quote from the enrollment page. The price you see there is the carrier’s quote, not a figure from this page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
