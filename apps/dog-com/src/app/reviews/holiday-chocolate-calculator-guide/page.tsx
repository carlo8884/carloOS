import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Holiday Chocolate and the Toxicity Calculator | Dog.com',
  description: 'Holiday baking often includes chocolate. Use the existing calculator. The first-aid kit hop does not treat poisoning.',
  path: '/reviews/holiday-chocolate-calculator-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Holiday chocolate and the toxicity calculator',
  description: 'Use the existing chocolate calculator. The first-aid kit hop does not treat poisoning.',
  url: 'https://dog.com/reviews/holiday-chocolate-calculator-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

export default function HolidayChocolateCalculatorGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'Holiday chocolate and the toxicity calculator',
        subtitle: 'The foods list already says holiday baking often pairs nutmeg with chocolate or xylitol. The amount question belongs on the calculator. This page does not add a safe dose.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday chocolate', href: '/reviews/holiday-chocolate-calculator-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Chocolate calculator', href: '/tools/dog-chocolate-toxicity-calculator' },
            { label: 'Can dogs eat nutmeg', href: '/nutrition/can-dogs-eat/nutmeg' },
            { label: 'Holiday scraps guide', href: '/reviews/holiday-scraps-trash-can-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/nutrition/can-dogs-eat/nutmeg">nutmeg entry</Link> is the holiday sentence already on the site: baked goods that contain nutmeg often also contain raisins, chocolate, or xylitol. A plate of fudge, a cocoa-dusted dessert, or a sugar-free holiday candy is therefore two different calls. Chocolate goes to the <Link href="/tools/dog-chocolate-toxicity-calculator">chocolate toxicity calculator</Link>. Xylitol, on its own foods entry, is described as an emergency measured in minutes. This guide does not merge those into one product.</p>
        <h2>What the calculator page already says about dose</h2>
        <p>The calculator FAQ says there is no truly safe amount. It describes theobromine signs as commonly reported from about 20 mg per kilogram of body weight, cardiac signs as possible around 40 to 60 mg/kg, and severe signs including seizures above roughly 60 mg/kg. It also says concentration differs by type, so a small amount of baking chocolate or cocoa powder can be far more dangerous than a larger amount of milk chocolate. Real products vary by cocoa percentage, and caffeine adds to the load. The honest instruction on that page is that any ingestion warrants a call to a veterinarian or a poison-control hotline, with the product and the amount. Enter type, amount, and body weight in the calculator. Do not treat a round number on this guide as a clearance to wait.</p>
        <h2>What the shop links are not</h2>
        <p>The calculator page sells a safety kit in words only: activated charcoal and 3 percent hydrogen peroxide are labeled vet-directed, and the page says the Amazon searches are general supplies. They are not a ranked list and they do not replace veterinary care. They do not reverse chocolate poisoning. This guide keeps a single hop, the pet first-aid kit search already on that page, and leaves charcoal, peroxide, the toxin kit, and the recovery crate on the calculator.</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" />
        <p>The hop is that first-aid kit search. Call a veterinarian or poison control for an actual ingestion before you shop.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/pet+first+aid+kit+dog?s=reviews-holiday-chocolate-calculator-guide">Browse pet first-aid kits on Amazon →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Holiday chocolate update list"
          subtitle="Leave an address to be on the list for changes to the first-aid-kit note on this page."
          ctaText="Save my address"
          source="reviews-holiday-chocolate-calculator-guide"
        />
      </div>
    </ArticleLayout>
  )
}
