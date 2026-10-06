import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Eheim Jager vs Cobalt Neo-Therm | Fish.com',
  description: 'Eheim Jager is the glass heater. Cobalt Neo-Therm Pro is the flat one. Accuracy and prices are the ones on the heater review.',
  path: '/reviews/eheim-vs-cobalt-heater-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Eheim Jager or Cobalt Neo-Therm',
  description: 'The Eheim Jager for accuracy, or the Cobalt Neo-Therm Pro for a flat housing. Scores and prices are on the heater review.',
  url: 'https://fish.com/reviews/eheim-vs-cobalt-heater-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which heater does the review pick overall?',
    answer: 'The Eheim Jager TruTemp, marked Best Overall. The review lists accuracy of ±0.5°F, a recalibration dial, auto shut-off when the heater is out of water, glass construction, and sizes from 25W to 300W. The printed price is $25–55 by wattage.',
  },
  {
    question: 'When does the review point to the Cobalt Neo-Therm Pro?',
    answer: 'When you want a flat heater that is less visible in a display tank. The review lists the same ±0.5°F accuracy, an LED that goes from blue to white, a shatterproof plastic housing, and a price of $35–65. It is not recalibratable, and the review says it costs more than the Jager for the same accuracy.',
  },
  {
    question: 'What if the wattage calculator asks for more than 300W?',
    answer: 'The heater review stops the Eheim size list at 300W. The heater-wattage calculator can print a higher stock figure. That figure is not an Eheim size on the review.',
  },
]

export default function EheimVsCobaltGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Eheim Jager or Cobalt Neo-Therm',
        subtitle: 'A glass heater you can recalibrate, or a flat shatterproof heater for a display tank. Accuracy and prices below are the ones on the heater review.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/eheim+jager+heater?s=reviews-eheim-vs-cobalt-heater-guide" label="Check price of the Eheim Jager heater on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Eheim vs Cobalt', href: '/reviews/eheim-vs-cobalt-heater-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best aquarium heaters', href: '/reviews/best-aquarium-heaters' },
            { label: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-aquarium-heaters">heater review</Link>. The Eheim Jager TruTemp is the overall pick. The Cobalt Aquatics Neo-Therm Pro is the flat heater.</p>
        <h2>What the review says about the Eheim Jager</h2>
        <p>The Jager is Best Overall and the winner. Published accuracy is ±0.5°F. A side dial recalibrates drift separately from the main dial. It shuts off when it is removed from water. The housing is glass, so it can shatter if dropped. Sizes in the review run from 25W to 300W. The printed price is $25–55 by wattage. The review also says the main dial is approximate until you calibrate it, and that the tube takes more space than a flat heater.</p>
        <p>Use the <Link href="/tools/heater-wattage-calculator">heater-wattage calculator</Link> for the watts this tank needs. If that result is above 300W, the Jager review does not list a matching size.</p>
        <h2>What the review says about the Neo-Therm Pro</h2>
        <p>The Neo-Therm Pro is Best Flat Design. The review says manufacturer-published accuracy is also ±0.5°F. The body is flat, so it hides better in a planted or display tank. An LED moves from blue while heating to white at temperature. The housing is shatterproof plastic. It is not recalibratable. The printed price is $35–65, and the review says that is higher than the Jager for the same accuracy.</p>
        <h2>Who should buy which heater</h2>
        <p>Buy the Jager when you want the recalibration dial, the out-of-water shut-off, and a wattage from 25W to 300W, and you can keep glass off the floor. Buy the Neo-Therm Pro when the tank is a display and you would rather have shatterproof plastic than a calibration dial. The Hydor on the same review is the inline heater, and it needs a canister. It is not this pair.</p>
        <p>The link above searches Amazon for the Eheim Jager, the same search as on the heater review. Pick the wattage there. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
