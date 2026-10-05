import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wysong vs Carniwhole | Ferret.com',
  description: 'The kibble review scores Wysong Epigen 90 at 9.3 and Carniwhole at 8.2. Wysong’s printed price is $30–50 for 5 lb. Carniwhole is subscription pricing.',
  path: '/reviews/wysong-vs-carniwhole-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wysong or Carniwhole',
  description: 'The kibble review already scores Wysong Epigen 90 and the direct-to-consumer Carniwhole bag.',
  url: 'https://ferret.com/reviews/wysong-vs-carniwhole-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which food does the kibble review score higher?',
    answer: 'Wysong Epigen 90, scored 9.3 and marked Premium Tier and the winner. The card lists about 60 percent protein and about 16 percent fat on a dry-matter basis, carbohydrate in the single digits, and a printed price of $30–50 for 5 pounds. It is not always stocked in a chain aisle.',
  },
  {
    question: 'When does the review point to Carniwhole?',
    answer: 'When the keeper wants a direct-to-consumer bag with a published panel and a subscription shipment. Carniwhole scores 8.2. The card says there is no retail backup and a shorter community track record than Wysong or Marshall. The price line is subscription pricing, not a dollar range.',
  },
  {
    question: 'Where is Marshall Premium?',
    answer: 'On the Wysong-versus-Marshall guide. Marshall is the mid-tier card on the same kibble review. This page does not repeat that comparison.',
  },
]

const RANKED = ['Wysong Epigen 90', 'Carniwhole']
const itemList = buildItemListSchema({
  name: 'Wysong or Carniwhole',
  items: RANKED.map((name) => ({ name, url: 'https://ferret.com/reviews/wysong-vs-carniwhole-guide' })),
})

export default function WysongVsCarniwholeGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Wysong or Carniwhole',
        subtitle: 'The premium bag the kibble review scores first, or the direct-to-consumer subscription. Scores and the Wysong price below are the ones on that page.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/wysong/epigen-90?s=reviews-wysong-vs-carniwhole-guide" label="Check price of Wysong Epigen 90 at Wysong" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Wysong vs Carniwhole', href: '/reviews/wysong-vs-carniwhole-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Kibble review', href: '/diet/best-ferret-kibble' },
            { label: 'Wysong vs Marshall', href: '/reviews/wysong-vs-marshall-kibble-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>The <Link href="/diet/best-ferret-kibble">kibble review</Link> scores three dry diets and says the comparison uses published panels, not a hands-on test. Wysong against Marshall is already a guide. This page is the remaining card: Wysong Epigen 90 against Carniwhole. Scores are editorial scores, not shopper star ratings. Carniwhole’s card does not print a shop link, so the only hop here is the Wysong link already on the review.</p>
        <h2>What the review says about Wysong Epigen 90</h2>
        <p>Wysong Epigen 90 is Premium Tier, score 9.3, and the winner. The card calls it the lowest-carbohydrate commercial kibble in wide ferret-keeping use, with named meats and organ meats and a starch-free system that puts carbohydrate by difference in the low single digits. Specs list about 60 percent protein and about 16 percent fat on a dry-matter basis, grain-free, sold direct and through specialty pet retail. Cons are the premium price and the chance it is not in a supermarket aisle. The printed price is $30–50 for 5 pounds. The button above is that product’s Wysong link.</p>
        <p>Dry-matter math for a different label is the <Link href="/tools/label-calculator">label calculator</Link>, using the conversion already on the label guide. This page does not recalculate Wysong’s panel.</p>
        <h2>What the review says about Carniwhole</h2>
        <p>Carniwhole is Direct-to-Consumer, score 8.2. The card says keepers choose it for a published ingredient and macronutrient panel and a fresher product than long-shelf-stable kibble. Protein source is listed as animal-first named meats. Distribution is direct only, with no retail backup. Shipping is a subscription. Smaller-batch sourcing is listed as yes. Cons are subscription logistics, the missing retail backup, and a shorter community track record than Marshall or Wysong. The price line says subscription pricing. This page does not turn that line into a dollar range the review did not print.</p>
        <h2>Who should buy which food</h2>
        <p>Buy Wysong when the review’s single-digit carbohydrate line and specialty or direct stocking are what you want, and the printed bag price is acceptable. Buy Carniwhole when a subscription shipment and a direct-only panel are acceptable, including the chance you cannot pick the same bag up at a store. Marshall remains the mid-tier retail card on the other guide. Similar carbohydrate on an unknown label does not make that label into either of these bags.</p>
        <p>The sale price can differ from the printed Wysong band. Carniwhole’s price is whatever the subscription page shows, not a figure added here.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
