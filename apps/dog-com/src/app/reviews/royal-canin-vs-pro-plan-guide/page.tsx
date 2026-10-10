import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Royal Canin vs Purina Pro Plan | Dog.com',
  description: 'Royal Canin or Purina Pro Plan. Both meet the WSAVA standard used on the dry-food review.',
  path: '/reviews/royal-canin-vs-pro-plan-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Royal Canin or Purina Pro Plan',
  description: 'Royal Canin or Purina Pro Plan, both measured against the WSAVA standard on the dry-food review.',
  url: 'https://dog.com/reviews/royal-canin-vs-pro-plan-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which food does the review pick overall?',
    answer: 'Royal Canin, marked Best Overall. The review lists full WSAVA compliance, AAFCO feeding trials, more than 600 scientists, breed-specific formulas, low DCM risk, and a mid-premium price of $55–110 for 30 pounds. The price varies by formula and bag size.',
  },
  {
    question: 'When does the review point to Purina Pro Plan?',
    answer: 'When the same scientific bar should cost less. Purina Pro Plan is Best Value. The review lists full WSAVA compliance, more than 400 published studies, low DCM risk, excellent palatability, and $45–90 for 30 pounds. Some formulas include artificial colors or preservatives.',
  },
  {
    question: 'Does either food replace a prescription diet?',
    answer: 'No. The dry-food review gives that job to Hill’s Science Diet, including formulas a veterinarian authorizes. Royal Canin and Pro Plan are the two foods on this page.',
  },
]

export default function RoyalCaninVsProPlanGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'Royal Canin or Purina Pro Plan',
        subtitle: 'Two dry foods that meet the same WSAVA bar on the dry-food review. Bag prices below are the ones printed there.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-royal-canin-vs-pro-plan-guide" label="Check price of Royal Canin dry dog food on Amazon" />}
      heroExtra={<HopDisclosure siteId="dog-com" href="/go/chewy-brand/royal+canin+dry+dog+food?s=reviews-royal-canin-vs-pro-plan-guide" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Royal Canin vs Pro Plan', href: '/reviews/royal-canin-vs-pro-plan-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best dry dog food', href: '/reviews/best-dry-dog-food' },
            { label: 'Calorie calculator', href: '/tools/dog-calorie-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-dry-dog-food">dry-food review</Link>. Royal Canin is the first-ranked food. Purina Pro Plan is the best-value food at the same scientific standard.</p>
        <h2>What the review says about Royal Canin</h2>
        <p>Royal Canin is Best Overall and the winner. WSAVA compliance is listed as full. Nutritional testing is AAFCO feeding trials, not formulation testing alone. The review lists more than 600 scientists, genuine breed-specific formulas, and low DCM risk. The price point is mid-premium: $55–110 for 30 pounds, and it varies by formula and bag size. The review says the ingredient list is not the one a buyer seeking a natural label usually wants, and that some breed formulas feel overly segmented.</p>
        <p>How much of a chosen formula to feed is on the <Link href="/tools/dog-calorie-calculator">calorie calculator</Link>.</p>
        <h2>What the review says about Purina Pro Plan</h2>
        <p>Purina Pro Plan is Best Value. The review is specific that Pro Plan, not regular Purina, meets the WSAVA criteria used on the page, and that it uses AAFCO feeding trials. Research is listed as more than 400 published studies. DCM risk is low. Palatability is excellent, and availability is listed as everywhere. The printed price is $45–90 for 30 pounds. The cons say some formulas include artificial colors or preservatives, and that the label is not a clean-label ingredient list.</p>
        <h2>Who should buy which food</h2>
        <p>Buy Royal Canin when breed-specific kibble and the research standard on that review are the reason, and the mid-premium band is acceptable. Buy Pro Plan when the same WSAVA bar should land in the lower printed band, and artificial colors on some formulas are acceptable. A diagnosed condition that a veterinarian is managing with diet is the Hill’s line on the same review, not either food here.</p>
        <p>Royal Canin is the pick when breed-specific kibble and the research standard on that review are the reason. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
