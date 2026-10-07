import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Heater for a Display Tank | Fish.com',
  description: 'A flat shatterproof heater versus a glass heater versus an inline heater, using only the accuracy, housing, and prices on the heater review.',
  path: '/reviews/best-display-tank-heater-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Best heater for a display tank',
  description: 'The review ranks the Cobalt Neo-Therm for a display tank. The shop link searches for the Eheim Jager. Hydor stays out of sight when a canister can hide the heater.',
  url: 'https://fish.com/reviews/best-display-tank-heater-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which heater does the review pick when the tank is a display?',
    answer: 'The review ranks the Cobalt Aquatics Neo-Therm Pro as the best flat heater. Cobalt accuracy: see the manufacturer\'s current page. It lists a shatterproof plastic housing, an LED that moves from blue to white, and a price of $35–65. It is not recalibratable. The shop link on this page searches for the Eheim Jager, because a Cobalt Neo-Therm Pro search returned no products.',
  },
  {
    question: 'Does the glass heater match that accuracy?',
    answer: 'The Eheim Jager also lists ±0.5°C, plus a recalibration dial and an auto shut-off when the heater leaves the water. The price is $25–55 by wattage, in sizes from 25W to 300W. The housing is glass and can shatter if dropped.',
  },
  {
    question: 'Can the heater stay out of the tank entirely?',
    answer: 'Only with a canister. The Hydor inline heater sits on the return hose, at $40–70, and the review says it does not work with a hang-on-back or a sponge filter.',
  },
]

const RANKED = [
  'Cobalt Neo-Therm Pro',
  'Eheim Jager',
  'Hydor inline',
]
const itemList = buildItemListSchema({
  name: 'Best heater for a display tank',
  items: RANKED.map((name) => ({ name, url: ({ 'Eheim Jager': 'https://fish.com/go/amazon-brand/eheim+jager+heater?s=reviews-best-display-tank-heater-guide' }[name] ?? 'https://fish.com/reviews/best-display-tank-heater-guide') })),
})

export default function DisplayTankHeaterGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Best heater for a display tank',
        subtitle: 'A display tank cares about the shape of the heater and whether the glass can break. Eheim accuracy below is the figure on the current Eheim page.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Display-tank heater', href: '/reviews/best-display-tank-heater-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best aquarium heaters', href: '/reviews/best-aquarium-heaters' },
            { label: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator' },
            { label: 'Best aquarium filters', href: '/reviews/best-aquarium-filters' },
          ]}
        />
      }
     priceAsOf="2026-10-07">
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-aquarium-heaters">heater review</Link> ranks four heaters. For a planted or display tank, the decision is whether a glass tube in the corner is acceptable. Wattage is a separate decision. Use the <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link> for the tank volume, then come back here for the body style. Choose the wattage in the calculator, then come back for the heater shape.</p>
        <h2>Flat and shatterproof: Cobalt Neo-Therm Pro</h2>
        <p>The Neo-Therm Pro is the best flat heater. Cobalt accuracy: see the manufacturer's current page. The body is a slim housing that sits against the glass instead of standing as a cylinder. The LED moves from blue while heating to white at temperature. The housing is shatterproof plastic. The price is $35–65. The tradeoff is price and the lack of a recalibration dial.</p>
        <p>The Cobalt search currently returns no products, so the shop link goes to the Eheim Jager.</p>
        <h2>Glass, and the tighter service story: Eheim Jager</h2>
        <p>The Eheim Jager is the best overall pick. The review quotes manufacturer accuracy of ±0.5°C and a separate recalibration wheel for drift. It shuts off when lifted out of the water. Sizes run from 25W to 300W, at $25–55 depending on wattage. The housing is glass. The review says it can shatter if dropped, and that the main dial is approximate until you calibrate it. Buy this when you want the recalibration dial and you will handle glass carefully. It is a weaker display pick because the tube is the thing you are trying not to look at.</p>
        <h2>No heater in the scape: Hydor inline</h2>
        <p>If the tank already has a canister, the Hydor inline heater is the way to keep the heater out of the picture. It heats water on the return hose, at $40–70. The review says temperature spreads from the filter return, and that the heater is incompatible with a hang-on-back or a sponge. Do not buy it for a tank that only has an AquaClear.</p>
        <h2>Who should buy which</h2>
        <p>The review ranks the Cobalt for a display when you want a flat housing without glass. Cobalt accuracy: see the manufacturer's current page. Buy the Eheim if you want that figure plus a recalibration dial and you accept glass. Buy the Hydor only with a canister. The Aqueon Pro, at $18–30, is shatterproof and widely stocked, Aqueon Pro accuracy: see the manufacturer's current page. The review says it is the wrong heater for discus, cardinal tetras, and other tight-range animals. A display of those species is not the budget heater.</p>
        <HopDisclosure siteId="fish-com" href="/go/amazon-brand/eheim+jager+heater?s=reviews-best-display-tank-heater-guide" />
        <p>The link below searches for the Eheim Jager, the glass heater the review ranks best overall.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/eheim+jager+heater?s=reviews-best-display-tank-heater-guide">Check price of the Eheim Jager heater on Amazon →</a></p>
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-best-display-tank-heater-guide"
          checklist={[
            {
              label: 'Check price of the Eheim Jager heater on Amazon',
              href: '/go/amazon-brand/eheim+jager+heater?s=reviews-best-display-tank-heater-guide',
            },
            'The shop link searches for the Eheim Jager, the glass heater the review ranks best overall.',
            'Buy the Eheim if you want that figure plus a recalibration dial and you accept glass.',
            'Buy the Hydor only with a canister.',
            'The Aqueon Pro, at $18–30, is shatterproof and widely stocked, Aqueon Pro accuracy: see the manufacturer\'s current page. The review says it is the wrong heater for discus, cardinal tetras, and other tight-range animals.',
            'A display of those species is not the budget heater.',
          ]}
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
