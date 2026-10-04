import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Heater for a Display Tank | Fish.com',
  description: 'A flat shatterproof heater versus a glass heater versus an inline heater, using only the accuracy, housing, and prices on the heater review.',
  path: '/reviews/best-display-tank-heater-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Best Heater for a Display Tank',
  description: 'Cobalt Neo-Therm for a display tank, Eheim Jager when glass is acceptable, Hydor when a canister can hide the heater.',
  url: 'https://fish.com/reviews/best-display-tank-heater-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which heater does the review pick when the tank is a display?',
    answer: 'The Cobalt Aquatics Neo-Therm Pro, the best flat-design card. It lists ±0.5°F, a shatterproof plastic housing, an LED that moves from blue to white, and a price of $35–65. It is not recalibratable.',
  },
  {
    question: 'Does the glass heater match that accuracy?',
    answer: 'The Eheim Jager card also lists ±0.5°F, plus a recalibration dial and an auto shut-off when the heater leaves the water. The price is $25–55 by wattage, in sizes from 25W to 300W. The housing is glass and can shatter if dropped.',
  },
  {
    question: 'Can the heater stay out of the tank entirely?',
    answer: 'Only with a canister. The Hydor inline card sits on the return hose, at $40–70, and the review says it does not work with a hang-on-back or a sponge filter.',
  },
]

export default function DisplayTankHeaterGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Best heater for a display tank',
        subtitle: 'A display tank cares about the shape of the heater and whether the glass can break. Accuracy figures below are the manufacturer figures already quoted on the heater review.',
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
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-aquarium-heaters">heater review</Link> ranks four heaters. For a planted or display tank, the decision is whether a glass tube in the corner is acceptable. Wattage is a separate decision. Use the <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link> for the tank volume, then come back here for the body style. This page does not invent a wattage.</p>
        <h2>Flat and shatterproof: Cobalt Neo-Therm Pro</h2>
        <p>The Neo-Therm Pro is the best flat-design card, scored 9.1. The card lists the same ±0.5°F figure the review quotes for the Eheim, in a slim housing that sits against the glass instead of standing as a cylinder. The LED moves from blue while heating to white at temperature. The housing is shatterproof plastic. The price is $35–65. The tradeoff on the card is price and the lack of a recalibration dial.</p>
        <h2>Glass, and the tighter service story: Eheim Jager</h2>
        <p>The Eheim Jager is the best-overall card, scored 9.4. The review quotes manufacturer accuracy of ±0.5°F and a separate recalibration wheel for drift. It shuts off when lifted out of the water. Sizes run from 25W to 300W, at $25–55 depending on wattage. The housing is glass. The card says it can shatter if dropped, and that the main dial is approximate until you calibrate it. Buy this when you want the recalibration dial and you will handle glass carefully. It is a weaker display pick because the tube is the thing you are trying not to look at.</p>
        <h2>No heater in the scape: Hydor inline</h2>
        <p>If the tank already has a canister, the Hydor inline card is the way to keep the heater out of the picture. It heats water on the return hose, at $40–70. The review says temperature spreads from the filter return, and that the heater is incompatible with a hang-on-back or a sponge. Do not buy it for a tank that only has an AquaClear.</p>
        <h2>Who should buy which</h2>
        <p>Buy the Cobalt if the tank is a display and you want the published ±0.5°F figure without glass. Buy the Eheim if you want that figure plus a recalibration dial and you accept glass. Buy the Hydor only with a canister. The Aqueon Pro, at $18–30, is shatterproof and widely stocked, but the review quotes ±1–1.5°F and says it is the wrong heater for discus, cardinal tetras, and other tight-range animals. A display of those species is not the budget card.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p>The hop is the Cobalt search already on the heater review, for the display-tank job.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/cobalt+neo-therm+pro?s=reviews-best-display-tank-heater-guide">Browse Cobalt Neo-Therm Pro heaters on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
