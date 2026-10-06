import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Easy Green vs Seachem Flourish | Fish.com',
  description: 'Easy Green for one all-in-one bottle, or Seachem Flourish Comprehensive for trace elements from a fish store.',
  path: '/reviews/easy-green-vs-flourish-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Easy Green or Seachem Flourish',
  description: 'Easy Green as the all-in-one, or Flourish as the trace-element bottle. Prices are on the fertilizer review.',
  url: 'https://fish.com/reviews/easy-green-vs-flourish-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which fertilizer does the review pick overall?',
    answer: 'Easy Green All-in-One from Aquarium Co-Op. The review lists one pump per 10 gallons each week, macros and micros in one bottle, and a fit for low- to medium-tech planted tanks. The printed price is $15–25. It is online only.',
  },
  {
    question: 'When does the review point to Seachem Flourish?',
    answer: 'When you need trace elements from a store that already stocks them. Flourish Comprehensive. The review lists micronutrients rather than a full macro bottle, a dose of 5 ml per 250 liters twice a week, and a price of $10–20. Nitrogen, phosphorus, and potassium need separate Flourish bottles.',
  },
  {
    question: 'What about a high-tech CO2 tank?',
    answer: 'The fertilizer review gives that job to NilocG Thrive, and says the higher dose is an algae risk on a low-tech tank. Easy Green and Flourish are the two bottles on this page.',
  },
]

export default function EasyGreenVsFlourishGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Easy Green or Seachem Flourish',
        subtitle: 'One weekly all-in-one dose, or a trace-element bottle you can buy at a fish store. Dose and price below are the ones on the fertilizer review.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/aquarium+co-op+easy+green+fertilizer?s=reviews-easy-green-vs-flourish-guide" label="Check price of Aquarium Co-Op Easy Green fertilizer on Amazon" />}
      heroExtra={<HopDisclosure siteId="fish-com" href="/go/amazon-brand/aquarium+co-op+easy+green+fertilizer?s=reviews-easy-green-vs-flourish-guide" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Easy Green vs Flourish', href: '/reviews/easy-green-vs-flourish-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Planted-tank fertilizers', href: '/reviews/best-planted-tank-fertilizers' },
            { label: 'CO2 calculator', href: '/tools/co2-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-planted-tank-fertilizers">fertilizer review</Link>. Easy Green is the all-in-one. Seachem Flourish Comprehensive is the trace-element bottle. NilocG Thrive on that page is the high-tech bottle, and it is a separate choice.</p>
        <h2>What the review says about Easy Green</h2>
        <p>Easy Green is Best Overall and the winner. It is an all-in-one liquid. The dose is 1 pump per 10 gallons each week. It covers macros and micros. The review says it fits low- to medium-tech planted tanks, including Java fern, Anubias, crypts, and stem plants. The printed price is $15–25. The cons say it is Aquarium Co-Op online only, not a local fish store, and that a high-tech CO2 tank may still need extra macros.</p>
        <h2>What the review says about Flourish</h2>
        <p>Seachem Flourish Comprehensive is Best Trace Elements. It is a micronutrient supplement. Macros are listed as minimal, so nitrogen, phosphorus, and potassium need separate Flourish bottles. Availability is every fish store. The dose is 5 ml per 250 liters, about 66 gallons, twice a week. The printed price is $10–20. The review says it works for a low-tech tank that already gets nitrogen and phosphorus from the fish load.</p>
        <p>If the tank is injected with CO2, the bubble count is on the <Link href="/tools/co2-calculator">CO2 calculator</Link>.</p>
        <h2>Who should buy which bottle</h2>
        <p>Buy Easy Green when one bottle should cover macros and micros on a low- or medium-tech tank, and ordering online is fine. Buy Flourish Comprehensive when you need trace elements today from a store that stocks Seachem, and you already have a source of nitrogen and phosphorus. A pressurized CO2 tank with fast plants is the NilocG line on the same review.</p>
        <p>The link above searches Amazon for Easy Green, the same search as on the fertilizer review. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
