import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Kessil A360X vs Nicrew LED | Fish.com',
  description: 'The lighting review scores the Kessil A360X at 9.3 and the Nicrew Classic LED+ at 8.5. Printed prices are $400–500 and $20–35.',
  path: '/reviews/kessil-vs-nicrew-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Kessil A360X or Nicrew Classic',
  description: 'The lighting review already scores a reef fixture and a fish-only display light.',
  url: 'https://fish.com/reviews/kessil-vs-nicrew-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which light does the review pick for a reef?',
    answer: 'The Kessil A360X Tuna Blue, scored 9.3 and marked Best Reef. The printed price is $400–500. The card lists Dense Matrix LED, shimmer, Wi-Fi control, and PAR of 150–300 or more at 12 inches at moderate settings. It also says one fixture may not cover a wider tank.',
  },
  {
    question: 'When does the review point to the Nicrew?',
    answer: 'For fish-only or fish-only-with-live-rock, where light is for display. The Nicrew Classic LED+ scores 8.5 and is Best Fish-Only. The printed price is $20–35. The card says PAR is low, about 15–25 at 12 inches, and that the light is not for plants or corals.',
  },
  {
    question: 'Does this replace the Hygger and Fluval comparison?',
    answer: 'No. Hygger 957 and Fluval Plant 3.0 are the planted-tank pair already on this hub. This page is the reef card against the fish-only card on the same lighting review.',
  },
]

const RANKED = ['Kessil A360X', 'Nicrew Classic LED+']
const itemList = buildItemListSchema({
  name: 'Kessil A360X or Nicrew Classic',
  items: RANKED.map((name) => ({ name, url: 'https://fish.com/reviews/kessil-vs-nicrew-guide' })),
})

export default function KessilVsNicrewGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Kessil A360X or Nicrew Classic',
        subtitle: 'A reef fixture with published PAR, or the display light the lighting review says is not for coral. Scores and prices below are the ones on that page.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/kessil+a360x?s=reviews-kessil-vs-nicrew-guide" label="Browse Kessil A360X lights on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Kessil vs Nicrew', href: '/reviews/kessil-vs-nicrew-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Lighting review', href: '/reviews/best-aquarium-lighting' },
            { label: 'Hygger vs Fluval', href: '/reviews/hygger-vs-fluval-light-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-aquarium-lighting">lighting review</Link> scores four fixtures. Hygger against Fluval Plant 3.0 is already a guide for planted tanks. This page is the remaining pair: Kessil A360X for reef, and Nicrew Classic LED+ for fish-only display. Scores are editorial scores, not shopper star ratings. Prices are the ranges printed on those cards.</p>
        <h2>What the review says about the Kessil A360X</h2>
        <p>The Kessil A360X Tuna Blue is Best Reef, score 9.3. The card describes Dense Matrix LED, a shimmer effect, and Wi-Fi control in the Kessil app. PAR is listed as 150–300 or more at 12 inches of depth at moderate settings, which the review calls SPS-capable, over about a 24-inch square footprint. The cons say the printed price is $400–500, that a single point of light may need a second fixture on a wider tank, and that the light is overkill for fish-only or LPS-only. The button above is that product’s search from the lighting review.</p>
        <h2>What the review says about the Nicrew Classic LED+</h2>
        <p>The Nicrew Classic LED+ is Best Fish-Only, score 8.5. The review says it is for fish-only or fish-only-with-live-rock, where light is aesthetic. PAR is described as low, about 15–25 at 12 inches, adequate for display and not for photosynthetic plants or coral. A blue channel is said to enhance fish color. A simple timer is built in. There is no app. The card lists a typical lifespan of 2–3 years at this price. The printed price is $20–35. The cons say it is not for planted or reef tanks.</p>
        <p>Live rock weight is a separate question. The <Link href="/tools/live-rock-calculator">live-rock calculator</Link> uses the saltwater setup page’s pounds-per-gallon line. This page does not add a rock weight.</p>
        <h2>Who should buy which light</h2>
        <p>Buy the Kessil when the tank is a mixed reef or SPS and the printed premium is acceptable, including a second fixture if the tank is wider than the footprint on the card. Buy the Nicrew when the tank is fish-only or fish-only-with-live-rock and nothing in it needs photosynthetic light. A planted tank belongs on the Hygger and Fluval comparison, not on either of these two cards.</p>
        <p>The sale price can differ from the printed band. PAR figures above are the ones the lighting review already prints. This page does not add a measurement of its own.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
