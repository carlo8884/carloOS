import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Heater Size for a Cold Room | Fish.com',
  description: 'Winter rooms use the wattage the heater calculator already publishes. The hop is the Eheim Jager search on the heater review.',
  path: '/reviews/winter-heater-sizing-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Aquarium heater size for a cold room',
  description: 'The heater calculator wattage rule for a winter room, and the Eheim Jager hop already on the review.',
  url: 'https://fish.com/reviews/winter-heater-sizing-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

export default function WinterHeaterSizingGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Aquarium heater size for a cold room',
        subtitle: 'The wattage calculator already sizes a heater from tank volume and how cold the room gets. This guide only repeats that winter case. It does not add a watt chart.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Winter heater size', href: '/reviews/winter-heater-sizing-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator' },
            { label: 'Best aquarium heaters', href: '/reviews/best-aquarium-heaters' },
            { label: 'Winter photoperiod', href: '/reviews/winter-photoperiod-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>A heater that was enough in September can be short once the room drops. The <Link href="/tools/heater-wattage-calculator">heater wattage calculator</Link> says the baseline is 3 watts per gallon per 10°F of lift: gallons times 3 times (the temperature difference divided by 10). It then adds 25 percent headroom because heaters age and because a cold snap goes past a typical room low. The inputs it asks for are tank gallons, target temperature, and the coldest typical room temperature, not the average.</p>
        <h2>The winter examples already on that page</h2>
        <p>The FAQ works a 20-gallon tropical tank with a 10°F lift, room 68°F to a 78°F target, and calls that about 60 watts, with a 75 or 100 watt heater as the standard pick. If the room drops to 60°F in winter, the same answer says step up to 150 watts. A colder case is stated separately: a room at 60 to 65°F and tropical fish at 80°F is 5 to 7 watts per gallon, not the 3-watt rule, because that rule assumes about a 10°F lift. Enter the winter low you actually see. This page does not publish a third formula.</p>
        <h2>One heater or two</h2>
        <p>On tanks of 40 gallons or larger, the calculator says to run two smaller heaters rather than one large one. A heater stuck on can push a tank to 90°F and hotter; the page says a single 300 watt heater on a 75-gallon tank does that quickly, while two 150 watt heaters leave more time to notice. A heater that fails off lets the tank fall to room temperature; the second unit, the page says, holds the tank within 2 to 4°F of target. The <Link href="/reviews/best-aquarium-heaters">heater review</Link> adds the same idea in shorter form: buy slightly above the minimum, and split two heaters on a large tank. Pair either setup with a separate thermometer. The review&apos;s reference heater, and the calculator&apos;s reference search, is the Eheim Jager.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p>The hop is that Eheim Jager search. Wattage still comes from the calculator, not from the brand name.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/eheim+jager+heater?s=reviews-winter-heater-sizing-guide">Check price of the Eheim Jager heater on Amazon →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Winter heater update list"
          subtitle="Leave an address to be on the list for changes to the cold-room wattage note on this page."
          ctaText="Save my address"
          source="reviews-winter-heater-sizing-guide"
        />
      </div>
    </ArticleLayout>
  )
}
