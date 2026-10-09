import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'KER EO-3 vs Equithrive Omega-3 | Horses.com',
  description: 'KER EO-3 is marine omega-3. Equithrive Original is trans-resveratrol. Scores and monthly prices are on the supplement review.',
  path: '/reviews/ker-eo3-vs-equithrive-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'KER EO-3 or Equithrive omega-3',
  description: 'KER EO-3 for marine omega-3, or Equithrive Original for trans-resveratrol. Scores and prices are on the supplement review.',
  url: 'https://horses.com/reviews/ker-eo3-vs-equithrive-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which product does the review pick for marine omega-3?',
    answer: 'KER EO-3, marked Best Marine Omega-3. The current page lists, per 30 mL, EPA 3,200 mg, DHA 2,300 mg, and DPA 500 mg. The format is a liquid you pour on feed. The printed price is $55–85 a month.',
  },
  {
    question: 'When does the review point to Equithrive?',
    answer: 'For trans-resveratrol, not as a replacement for a joint formula. The review lists a pelleted format, an NASC seal, no prohibited FEI or USEF ingredients, and a price of $45–65 a month. It says the evidence base is smaller than ASU or glucosamine.',
  },
  {
    question: 'Does either product replace Cosequin or Platinum?',
    answer: 'No. Cosequin ASU Plus versus Platinum Performance is a separate comparison. The supplement review frames Equithrive as a complement to traditional joint ingredients, and EO-3 as a marine omega-3, not as a joint tub.',
  },
]

export default function KerVsEquithriveGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'KER EO-3 or Equithrive omega-3',
        subtitle: 'A marine omega-3 liquid, or a resveratrol pellet. Scores and monthly prices below are the ones on the supplement review.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon/B0037PL6QW?s=reviews-ker-eo3-vs-equithrive-guide" label="Check price of KER EO-3 on Amazon" />}
      heroExtra={<HopDisclosure siteId="horses-com" href="/go/amazon/B0037PL6QW?s=reviews-ker-eo3-vs-equithrive-guide" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'KER EO-3 vs Equithrive', href: '/reviews/ker-eo3-vs-equithrive-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Equine supplements', href: '/reviews/best-equine-supplements' },
            { label: 'Feed calculator', href: '/tools/horse-feed-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-09" />
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-ker-eo3-vs-equithrive-guide"
          checklist={[
            "It also says the liquid thickens in the cold and has a shorter life once opened than a pellet.",
            "For trans-resveratrol, not as a replacement for a joint formula.",
            "It says the evidence base is smaller than ASU or glucosamine.",
            "Cosequin ASU Plus versus Platinum Performance is a separate comparison.",
            "The supplement review frames Equithrive as a complement to traditional joint ingredients, and EO-3 as a marine omega-3, not as a joint tub.",
            "Equithrive Original Pellets are the trans-resveratrol.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/reviews/best-equine-supplements">equine supplement review</Link>. KER EO-3 is the marine omega-3. Equithrive Original Pellets are the trans-resveratrol. <Link href="/reviews/cosequin-vs-equithrive-guide">Cosequin versus Equithrive</Link> is the joint comparison, not this omega-3 pair. Cosequin versus Platinum is a different pair, on the <Link href="/reviews/cosequin-vs-platinum-guide">Cosequin versus Platinum guide</Link>.</p>
        <h2>What the review says about KER EO-3</h2>
        <p>EO-3 is Best Marine Omega-3. The current page lists, per 30 mL, EPA 3,200 mg, DHA 2,300 mg, and DPA 500 mg (6,000 mg long-chain omega-3). It is a stabilized liquid top-dress. The printed price is $55–85 a month.</p>
        <p>Forage amount is on the <Link href="/tools/horse-feed-calculator">feed calculator</Link>. That result is not a supplement dose. The review does not print a bag size for EO-3.</p>
        <h2>What the review says about Equithrive</h2>
        <p>Equithrive Original Pellets are Best Resveratrol. The active ingredient in the review is trans-resveratrol. The format is a pellet. The review says the brand carries an NASC seal, was founded by a veterinarian at the University of Kentucky, and lists no prohibited FEI or USEF ingredients. The printed price is $45–65 a month. It frames resveratrol as a complement to traditional joint ingredients, not a substitute, and says the evidence base is smaller than ASU or glucosamine. The common use it names is mild joint inflammation or support after an injection.</p>
        <h2>Who should buy which product</h2>
        <p>Buy EO-3 when the goal is marine DHA and EPA and you can handle a liquid in winter. Buy Equithrive when you want the resveratrol pellet beside a joint formula, not instead of one. Neither product replaces the Cosequin ASU Plus or Platinum Performance tubs on that review.</p>
        <p>EO-3 is the pick when the goal is marine DHA and EPA in a liquid top-dress. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Kentucky Equine Research", url: "https://ker.com/", publisher: "Kentucky Equine Research" },
            { label: "Equithrive", url: "https://www.equithrive.com/", publisher: "Equithrive" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
