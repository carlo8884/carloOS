import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'HOB vs Canister: AquaClear or Fluval | Fish.com',
  description: 'Hang-on-back versus canister, using the AquaClear 70 and the Fluval 307: flow, tank size, noise, cleaning, and price already published.',
  path: '/reviews/hob-vs-canister-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'HOB vs canister filter',
  description: 'When the AquaClear 70 hang-on-back is the pick, and when the Fluval 307 canister is.',
  url: 'https://fish.com/reviews/hob-vs-canister-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which filter does the review pick for a typical 40 to 70 gallon tank?',
    answer: 'The AquaClear 70, the best hang-on-back filter. It lists 300 GPH, tanks up to 70 gallons, refillable media, and a price of $45–70.',
  },
  {
    question: 'When does the same review move you to a canister?',
    answer: 'For a 40 to 70 gallon tank with a high bioload and cabinet space. The Fluval 307 lists pump output of 303 US GPH and filter circulation of 206 US GPH, near-silent running, a self-priming button, and $120–160. Cleaning is every 3–6 months and more involved than a hang-on-back.',
  },
  {
    question: 'Is either filter the shrimp or fry pick?',
    answer: 'No. The review assigns those tanks to a sponge filter, the Hikari Bacto-Surge at $10–20 plus an air pump sold separately, because there is no intake to pull in fry or shrimp.',
  },
]

export default function HobVsCanisterGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'HOB vs canister filter',
        subtitle: 'A hang-on-back and a canister can post nearly the same gallons per hour and still be different purchases. Flow, noise, and price below come from the filter review.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'HOB vs canister', href: '/reviews/hob-vs-canister-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best aquarium filters', href: '/reviews/best-aquarium-filters' },
            { label: 'Best canister filters', href: '/reviews/best-canister-filters' },
            { label: 'Filter GPH calculator', href: '/tools/filter-gph-calculator' },
          ]}
        />
      }
     priceAsOf="2026-10-07">
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-aquarium-filters">filter review</Link> ranks a hang-on-back, a canister, a sponge, and a budget hang-on-back. AquaClear 70 versus Fluval 307 is this page: one hang-on-back and one canister. Two canisters, the Fluval 307 against the Eheim Classic, are on the <Link href="/reviews/fluval-307-vs-eheim-guide">canister comparison</Link>. The flow numbers on the AquaClear and the Fluval are close. The maintenance, the noise, the price, and the space under the tank are not. The canister half of this comparison is in the <a href="/reviews/best-canister-filters" className="text-brand-primary underline">canister filter review</a>.</p>
        <h2>Hang-on-back: AquaClear 70</h2>
        <p>The AquaClear 70 is the best hang-on-back filter. It lists 300 GPH, tanks up to 70 gallons, and a refillable basket with room for foam, carbon, and ceramic rings. You are not locked to a proprietary cartridge. The price is $45–70. Flow is adjustable. Noise is described as low when the water level is correct, and higher if the level drops. The impeller needs cleaning about every three to four months or the flow falls off. A monthly rinse of the sponge is the ordinary upkeep.</p>
        <p>Run the <Link href="/tools/filter-gph-calculator">filter GPH calculator</Link> before you treat “up to 70 gallons” as a promise. Turnover depends on the stocking, not only on the badge.</p>
        <h2>Canister: Fluval 307</h2>
        <p>The Fluval 307 is the best canister. It lists pump output of 303 US GPH, filter circulation of 206 US GPH, tanks of 40 to 70 US gallons, and a basket volume of 3.1 L. It is the pick the review names for 40 to 70 gallons with a high bioload. Startup uses a self-priming button. The review calls the running noise near-silent, quieter than most hang-on-backs. Cleaning stretches to every three to six months because the media takes longer to clog, and cleaning day is more work. The price is $120–160, and the canister needs space in the cabinet. It is the wrong shape of purchase if you have nowhere to hide it.</p>
        <h2>Who should buy which</h2>
        <p>Buy the AquaClear 70 for a community tank in that 40 to 70 gallon band when you want refillable media and a simpler cleaning day. Buy the Fluval 307 when the bioload is high, you want the longer service interval and the quieter box, and you have cabinet space. Buy the Aqueon QuietFlow 30 at $25–40 only where the manufacturer's current page rates the tank, and a proprietary cartridge is acceptable. Buy the sponge, not either of these, for shrimp, fry, or a nano under the sizes those listings claim.</p>
        <HopDisclosure siteId="fish-com" href="/go/amazon-brand/aquaclear+70+filter?s=reviews-hob-vs-canister-guide" />
        <p>The link below searches for the AquaClear 70, the hang-on-back from the filter review.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/aquaclear+70+filter?s=reviews-hob-vs-canister-guide">Browse AquaClear 70 hang-on-back filters on Amazon →</a></p>
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-hob-vs-canister-guide"
          checklist={[
            {
              label: 'Browse AquaClear 70 hang-on-back filters on Amazon',
              href: '/go/amazon-brand/aquaclear+70+filter?s=reviews-hob-vs-canister-guide',
            },
            'Buy the AquaClear 70 for a community tank in that 40 to 70 gallon band when you want refillable media and a simpler cleaning day.',
            'Buy the Fluval 307 when the bioload is high, you want the longer service interval and the quieter box, and you have cabinet space.',
            'Buy the Aqueon QuietFlow 30 at $25–40 only where the manufacturer's current page rates the tank, and a proprietary cartridge is acceptable.',
            'Buy the sponge, not either of these, for shrimp, fry, or a nano under the sizes those listings claim.',
          ]}
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
