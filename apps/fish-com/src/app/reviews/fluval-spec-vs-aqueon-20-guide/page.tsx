import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fluval Spec vs Aqueon 20 Long | Fish.com',
  description: 'The nano-tank review scores the Fluval Spec V at 9.2 and the Aqueon 20-gallon long at 9.4. Printed prices are $75–95 and $30–50.',
  path: '/reviews/fluval-spec-vs-aqueon-20-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Fluval Spec or a 20-Gallon Long',
  description: 'A 5-gallon all-in-one, or a bare 20-gallon long. Scores and prices are on the nano-tank review.',
  url: 'https://fish.com/reviews/fluval-spec-vs-aqueon-20-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which tank does the review mark Best Overall Nano?',
    answer: 'The Aqueon 20-gallon long, scored 9.4 and badged Best Overall Nano. The printed price is $30–50. The card says the tank is bare, so a filter, heater, and light are separate, and the footprint is 30 by 12 by 12 inches.',
  },
  {
    question: 'When does the review point to the Fluval Spec V?',
    answer: 'For a 5-gallon betta or shrimp tank that arrives as a kit. The Spec V scores 9.2, is badged Best 5 Gallon, and is marked the winner on that card. The printed price is $75–95. The card says the filter flow should be baffled for a betta and that 5 gallons is less stable than a larger tank.',
  },
  {
    question: 'Does this page include the 10-gallon Aqueon?',
    answer: 'No. The nano review also scores an Aqueon 10-gallon standard at 9.0. That bare tank is a third size, and this page does not repeat its price as one of these two.',
  },
]

const RANKED = ['Aqueon 20-Gallon Long', 'Fluval Spec V']
const itemList = buildItemListSchema({
  name: 'Fluval Spec or a 20-Gallon Long',
  items: RANKED.map((name) => ({ name, url: 'https://fish.com/reviews/fluval-spec-vs-aqueon-20-guide' })),
})

export default function FluvalSpecVsAqueonGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Fluval Spec or a 20-Gallon Long',
        subtitle: 'A 5-gallon all-in-one, or the bare 20-gallon long the nano review calls the beginner size. Scores and prices below are the ones on that page.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/aqueon+20+gallon+long+aquarium?s=reviews-fluval-spec-vs-aqueon-20-guide" label="Browse Aqueon 20-gallon long aquariums on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Fluval Spec vs Aqueon 20', href: '/reviews/fluval-spec-vs-aqueon-20-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Nano tank review', href: '/reviews/best-nano-tanks' },
            { label: 'Cycling guide', href: '/setup/aquarium-cycling-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>Prices and scores below are the ones on the <Link href="/reviews/best-nano-tanks">nano-tank review</Link>. This comparison is the Fluval Spec V against the Aqueon 20-gallon long. The 10-gallon bare tank stays on the review.</p>
        <h2>What the review says about the Fluval Spec V</h2>
        <p>The Fluval Spec V is Best 5 Gallon, score 9.2, and the card is marked the winner. Volume is 5 gallons. The design is rimless and all-in-one, with integrated three-stage filtration behind a honeycomb baffle and a low-profile LED the review calls capable of low-light plants such as Java fern, Anubias, and mosses. The card says to baffle the outlet for a betta, that 5 gallons is less stable than 10 gallons and up, and that aquascaping space is tight. The printed price is $75–95. Equipment is included. The review says to cycle the tank before fish go in.</p>
        <h2>What the review says about the 20-gallon long</h2>
        <p>The Aqueon 20-gallon long is Best Overall Nano, score 9.4. The footprint on the card is 30 by 12 by 12 inches. The review calls that long footprint better for territorial separation than a tall tank, and it calls this the most forgiving beginner size. The tank is bare. A filter rated for 20 gallons, a heater, and a light are separate purchases. The printed price is $30–50 for the tank itself. The cons are those missing pieces, not a defect in the glass.</p>
        <p>Cycling is the next step either way. The <Link href="/setup/aquarium-cycling-guide">cycling guide</Link> is where ammonia and nitrite have to read zero before livestock. How many fish the tank can hold is on the <Link href="/tools/stocking-calculator">stocking calculator</Link>.</p>
        <h2>Who should buy which tank</h2>
        <p>Buy the Spec V when the job is a 5-gallon betta or shrimp desk tank that should arrive with filter and light, and the higher printed kit price is acceptable, including the flow baffle the card names. Buy the 20-gallon long when the job is a first community tank and you will add the filter, heater, and light. The review’s own next-step search is that 20-gallon long, which is the link above. The sale price can differ from the printed band, and the band does not include the equipment the card says is missing.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
