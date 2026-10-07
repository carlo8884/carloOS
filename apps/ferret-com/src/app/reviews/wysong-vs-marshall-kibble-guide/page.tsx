import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wysong Epigen 90 vs Marshall Kibble | Ferret.com',
  description: 'Which ferret kibble to buy: Wysong Epigen 90 for the lower carb load, or Marshall Premium when you need a bag from chain retail.',
  path: '/reviews/wysong-vs-marshall-kibble-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wysong Epigen 90 or Marshall Premium',
  description: 'The kibble review already lists Wysong Epigen 90 for the lower carb load and Marshall Premium for chain retail.',
  url: 'https://ferret.com/reviews/wysong-vs-marshall-kibble-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which kibble does the diet review mark as the winner?',
    answer: 'Wysong Epigen 90, marked Premium Tier. The review lists about 60% protein and 16% fat on a dry-matter basis, carbohydrate in the single digits, a starch-free panel, and $30–50 for 5 lb.',
  },
  {
    question: 'When does the review point to Marshall Premium?',
    answer: 'When you need a ferret-specific bag from chain retail. The review lists about 38% protein, 20% fat, carbohydrate in the mid teens, and $15–25 for 4 lb. The panel includes some plant protein.',
  },
  {
    question: 'Does this page add a third food?',
    answer: 'The kibble review also has a Carniwhole listing for a direct subscription. This guide does not add a shop link for it. The comparison here is Wysong versus Marshall, using the figures already on those two products.',
  },
]

export default function WysongVsMarshallKibbleGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Wysong Epigen 90 or Marshall Premium',
        subtitle: 'The lowest commercial carb load and a chain-shelf bag are different purchases. Percentages and prices below are the ones on the kibble review.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Wysong vs Marshall', href: '/reviews/wysong-vs-marshall-kibble-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best ferret kibble', href: '/diet/best-ferret-kibble' },
            { label: 'Food evaluator', href: '/tools/food-evaluator' },
          ]}
        />
      }
     priceAsOf="2026-10-05">
      <div className="carloOS-article">
        <p>The <Link href="/diet/best-ferret-kibble">kibble review</Link> already lists Wysong Epigen 90 as the premium, lower-carb pick and Marshall Premium as the mid-tier bag you are more likely to find in a chain aisle. The percentages below are the ones printed in the review.</p>
        <h2>What the review says about Wysong</h2>
        <p>Wysong Epigen 90 is Premium Tier and the winner. Protein is about 60% on a dry-matter basis. Fat is about 16%. Carbohydrate is in the single digits. The review calls the formula starch-free and animal-first, and it is the default when insulinoma risk is the priority. The printed price is $30–50 for 5 lb. Distribution is direct and specialty retail. The review says it is not always stocked in chain pet aisles.</p>
        <h2>What the review says about Marshall</h2>
        <p>Marshall Premium Ferret Diet is Mid Tier. Protein is about 38% on a dry-matter basis. Fat is about 20%. Carbohydrate is in the mid teens, which the review marks higher than the premium tier. The formula is ferret-specific, and the panel includes some plant protein. The printed price is $15–25 for 4 lb. Distribution is national chain pet retail.</p>
        <p>The <Link href="/tools/food-evaluator">food evaluator</Link> is the place to check a guaranteed analysis you already have. Bring a guaranteed analysis you already have. Nothing here adds a new worksheet. The same review has a Carniwhole listing with no retail backup. This guide does not send you there.</p>
        <h2>Who should buy which bag</h2>
        <p>Buy Wysong Epigen 90 when the lower commercial carb load is the priority and you can order it or find it at a specialty shop. Buy Marshall Premium when you need a ferret-specific bag from a chain aisle tonight, and you have read the higher carbohydrate and the plant protein on that listing. Skip Marshall when insulinoma risk is the reason you are choosing a food.</p>
        <HopDisclosure siteId="ferret-com" href="/go/wysong/epigen-90?s=reviews-wysong-vs-marshall-kibble-guide" />
        <p>The link below opens Wysong Epigen 90 from the kibble review. The price there is the retailer's.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/wysong/epigen-90?s=reviews-wysong-vs-marshall-kibble-guide">Check price of Wysong Epigen 90 at Wysong</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
