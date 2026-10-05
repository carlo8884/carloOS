import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Trupanion vs Figo Pet Insurance | Vets.co',
  description: 'The breed-risk page scores Trupanion 9.0 for unlimited payouts and Figo 8.3 for high-limit tiers. Both prices are quote-based.',
  path: '/reviews/trupanion-vs-figo-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Trupanion or Figo',
  description: 'The breed-risk page already scores Trupanion for unlimited payouts and Figo for high-limit plan tiers.',
  url: 'https://vets.co/reviews/trupanion-vs-figo-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the breed-risk page mark as the winner?',
    answer: 'Trupanion, scored 9.0 and marked Unlimited Payouts. The review lists an unlimited annual limit, hereditary and congenital coverage per policy terms, a per-condition lifetime deductible, and a direct-to-vet payment option. There is no wellness add-on. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Figo?',
    answer: 'When you want high or unlimited annual-limit tiers and app-based claims. Figo scores 8.3. The review lists a pay-then-claim model and an optional wellness add-on. It says to check orthopedic and bilateral terms on the quote. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both cards say quote-based. Nothing here adds a premium or a waiting period the breed-risk page did not print.',
  },
]

const RANKED = ['Trupanion', 'Figo']
const itemList = buildItemListSchema({
  name: 'Trupanion or Figo',
  items: RANKED.map((name) => ({ name, url: 'https://vets.co/reviews/trupanion-vs-figo-guide' })),
})

export default function TrupanionVsFigoGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Trupanion or Figo',
        subtitle: 'Unlimited payouts, or high-limit tiers with app claims. Scores below are the ones on the breed-risk page. Neither price line is a premium.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/trupanion/home?s=reviews-trupanion-vs-figo-guide" label="Get a Trupanion quote" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Trupanion vs Figo', href: '/reviews/trupanion-vs-figo-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Breed-specific risk', href: '/insurance/breed-specific-risk' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/insurance/breed-specific-risk">breed-specific risk page</Link> already names Trupanion and Figo as two carriers to quote when a breed has predictable expensive needs. Other pairs on this hub compare Trupanion with Healthy Paws or Embrace. Figo was not in those guides. Scores below are editorial scores, not shopper star ratings. Neither card prints a monthly premium.</p>
        <h2>What the page says about Trupanion</h2>
        <p>Trupanion is Unlimited Payouts, score 9.0, and the winner on that page. The annual limit is unlimited, which the review ties to a major orthopedic or chronic-disease course that would exhaust a capped plan. Hereditary and congenital conditions are covered per policy terms. The deductible is a per-condition lifetime deductible. A direct-to-vet payment option is listed. Cons say premiums can run higher and there is no wellness add-on. The price line is quote-based. The page says to enroll as a puppy so breed-typical conditions are not later excluded as pre-existing. The button above opens the Trupanion quote already linked there.</p>
        <h2>What the page says about Figo</h2>
        <p>Figo is High-Limit Plans, score 8.3. The card says the carrier offers high and unlimited annual-limit tiers and app-based claims. The model is pay-then-claim. An optional wellness add-on is listed. Cons say to check orthopedic and bilateral terms, and that premiums scale with breed risk. The price line is quote-based. This page does not fill in a waiting-period length the breed-risk page left unread.</p>
        <p>The wider ranking of carriers that are not on this pair is the <Link href="/reviews/best-pet-insurance">insurance review</Link>. Early enrollment is the lever that page repeats. A quote still needs the pet’s age, breed, and medical history.</p>
        <h2>Who should quote which carrier</h2>
        <p>Start the Trupanion quote when an unlimited annual payout and direct-to-vet payment are the features you are comparing, and wellness coverage is not required. Start the Figo quote when you want high-limit tiers and an app claim flow, and you will read the orthopedic and bilateral language before you enroll. On both, confirm hereditary coverage in the sample policy rather than in a marketing line. Do not treat either quote-based line as a price from this page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
