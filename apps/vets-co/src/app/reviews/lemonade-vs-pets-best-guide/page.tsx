import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Lemonade vs Pets Best | Vets.co',
  description: 'Lemonade for a young pet, or Pets Best for a flexible plan. Both prices are quote-based.',
  path: '/reviews/lemonade-vs-pets-best-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Lemonade or Pets Best',
  description: 'Lemonade for a young pet, or Pets Best for a flexible plan with no upper age limit (https://www.petsbest.com/faq).',
  url: 'https://vets.co/reviews/lemonade-vs-pets-best-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the enrollment page mark as the winner?',
    answer: 'Lemonade Pet, marked Young-Pet Value. The review lists app-based claims, availability that varies by state, and an optional preventive package. That package is not insurance. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Pets Best?',
    answer: 'When you want several plan tiers, including for an older adopted pet. Pets Best. Pets Best\'s FAQ, fetched 2026-10-08, says there is no upper age limit (https://www.petsbest.com/faq). The review lists multiple plan tiers and a pay-then-claim model. Premiums rise with age. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both reviews say quote-based. The premium, reimbursement percent, and waiting period are the ones the enrollment page prints, or the ones on the carrier quote.',
  },
]

const RANKED = [
  'Lemonade',
  'Pets Best',
]
const itemList = buildItemListSchema({
  name: 'Lemonade or Pets Best',
  items: RANKED.map((name) => ({ name, url: ({ 'Lemonade': 'https://vets.co/go/lemonade/home?s=reviews-lemonade-vs-pets-best-guide' }[name] ?? 'https://vets.co/reviews/lemonade-vs-pets-best-guide') })),
})

export default function LemonadeVsPetsBestGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Lemonade or Pets Best',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Lemonade is the top pick for a younger pet, the group the verified registry marks for this carrier.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/lemonade/home?s=reviews-lemonade-vs-pets-best-guide" label="Get a Lemonade quote" />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/lemonade/home?s=reviews-lemonade-vs-pets-best-guide" noteClassName="mt-3 mb-0 text-xs leading-relaxed text-white/80" />
        </div>
        </>
      }
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
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-lemonade-vs-pets-best-guide"
          checklist={[
            "The review lists app-based claims, availability that varies by state, and an optional preventive package.",
            "When you want several plan tiers, including for an older adopted pet.",
            "The review lists multiple plan tiers, no upper age limit on enrollment (https://www.petsbest.com/faq), and a pay-then-claim model.",
            "The premium, reimbursement percent, and waiting period are the ones the enrollment page prints, or the ones on the carrier quote.",
            "Lemonade Pet is Young-Pet Value and the winner on that page.",
            "A preventive package is optional, and the review says that package is not insurance.",
          ]}
        />
        <p>Lemonade and Pets Best are two carriers to quote early. The wider comparison is on the <Link href="/reviews/best-pet-insurance">insurance review</Link>. Neither product prints a monthly premium.</p>
        <h2>What the review says about Lemonade</h2>
        <p>Lemonade Pet is Young-Pet Value and the winner on that page. Lemonade’s FAQ, fetched 2026-10-08, says signing up while a pet is young and healthy means they are not denied coverage at renewal because of age (<a className="break-all" href="https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/">https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/</a>). The verified registry marks Lemonade for owners with younger pets. Claims are app-based. Availability varies by state. A preventive package is optional, and the review says that package is not insurance. The price line is quote-based.</p>
        <h2>What the review says about Pets Best</h2>
        <p>Pets Best is Flexible Plans. Pets Best’s FAQ, fetched 2026-10-08, says there is no upper age limit, and a dog or cat can enroll at any age over 7 weeks (<a className="break-all" href="https://www.petsbest.com/faq">https://www.petsbest.com/faq</a>). The review lists several plan tiers, which is why it is worth quoting for both puppies and older adopted pets. The model is pay-then-claim. Premiums rise with age, and standard exclusions apply. The price line is quote-based. The review says the pre-existing-condition definition still decides what a late enrollment will cover.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Lemonade sample when the pet is young and healthy and you want the app-claim carrier. Confirm the state actually offers it, and treat the preventive package as separate from the insurance. Open the Pets Best sample when the pet is older, or you want several tiers, and read how premium scales with age. On both, enroll before a condition is in the record. Do not treat either quote-based line as a price from this page.</p>
        <p>Lemonade’s FAQ, fetched 2026-10-08, says signing up while a pet is young and healthy means they are not denied coverage at renewal because of age (<a className="break-all" href="https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/">https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/</a>). The verified registry marks Lemonade for owners with younger pets. Pets Best’s FAQ, fetched the same day, says there is no upper age limit (<a className="break-all" href="https://www.petsbest.com/faq">https://www.petsbest.com/faq</a>).</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
