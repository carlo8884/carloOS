import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, EmailCapture, QuietPartnerLink, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wysong vs Carniwhole | Ferret.com',
  description: 'The kibble review covers Wysong Epigen 90 and Carniwhole. Wysong’s printed price is $30–50 for 5 lb. Carniwhole is subscription pricing.',
  path: '/reviews/wysong-vs-carniwhole-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wysong or Carniwhole',
  description: 'Wysong Epigen 90 or the direct-to-consumer Carniwhole bag, using the notes on the kibble review.',
  url: 'https://ferret.com/reviews/wysong-vs-carniwhole-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which food does the kibble review list first?',
    answer: 'Wysong Epigen 90, marked the top row and the winner. The current page lists crude protein minimum 63% and crude fat minimum 16% as printed, not as dry matter. Carbohydrate is not on the guaranteed analysis. The printed price is $30–50 for 5 pounds. It is not always stocked in a chain aisle.',
  },
  {
    question: 'When does the review point to Carniwhole?',
    answer: 'When the keeper wants a direct-to-consumer bag with a published panel and a subscription shipment. The card says there is no retail backup and a shorter community track record than Wysong or Marshall. The price line is subscription pricing, not a dollar range.',
  },
  {
    question: 'Where is Marshall Premium?',
    answer: 'On the Wysong-versus-Marshall guide. Marshall is the mid-tier card on the same kibble review.',
  },
]

const RANKED = ['Wysong Epigen 90', 'Carniwhole']
const itemList = buildItemListSchema({
  name: 'Wysong or Carniwhole',
  items: RANKED.map((name) => ({ name, url: ({ 'Wysong Epigen 90': 'https://ferret.com/go/wysong/epigen-90?s=reviews-wysong-vs-carniwhole-guide' }[name] ?? 'https://ferret.com/reviews/wysong-vs-carniwhole-guide') })),
})

export default function WysongVsCarniwholeGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Wysong or Carniwhole',
        subtitle: 'The premium bag the kibble review lists first, or the direct-to-consumer subscription. The Wysong price below are the ones on that page.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<><HopDisclosure siteId="ferret-com" href="/go/amazon-brand/wysong+ferret+food?s=reviews-wysong-vs-carniwhole-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon-brand/wysong+ferret+food?s=reviews-wysong-vs-carniwhole-guide">Browse Wysong ferret food on Amazon →</a></>}
      heroExtra={<QuietPartnerLink tone="dark" href="/go/wysong/epigen-90?s=reviews-wysong-vs-carniwhole-guide" label="Check price of Wysong Epigen 90 at Wysong" />}
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
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-wysong-vs-carniwhole-guide"
          checklist={[
            "Wysong Epigen 90, marked Premium Tier and the winner.",
            "When the keeper wants a direct-to-consumer bag with a published panel and a subscription shipment.",
            "The card says there is no retail backup and a shorter community track record than Wysong or Marshall.",
            "The price line is subscription pricing, not a dollar range.",
            "Marshall is the mid-tier card on the same kibble review.",
            "This comparison is Wysong Epigen 90 against Carniwhole.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/diet/best-ferret-kibble">kibble review</Link>, which compares published panels. Wysong against Marshall is a separate guide. This comparison is Wysong Epigen 90 against Carniwhole. Carniwhole’s card has no shop link. The link above opens the Wysong ferret food search already used on the diet pages. The Wysong shop link stays on this page for when that partner ID is set.</p>
        <h2>What the review says about Wysong Epigen 90</h2>
        <p>Wysong Epigen 90 is the top row and the winner. The current Wysong Epigen 90 page lists crude protein minimum 63% and crude fat minimum 16%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. The page markets the food as starch-free. Carbohydrate is not on the guaranteed analysis — check the label. It is sold direct and through specialty pet retail, and it may not be in a supermarket aisle. The printed price is $30–50 for 5 pounds. The Amazon search above is the one already used for this bag on the diet pages.</p>
        <p>Dry-matter math for a different label is the <Link href="/tools/label-calculator">label calculator</Link>, using the conversion on the label guide. Wysong’s panel stays the one printed above.</p>
        <h2>What the review says about Carniwhole</h2>
        <p>Carniwhole is Direct-to-Consumer. The card says keepers choose it for a published ingredient and macronutrient panel and a fresher product than long-shelf-stable kibble. Protein source is listed as animal-first named meats. Distribution is direct only, with no retail backup. Shipping is a subscription. Smaller-batch sourcing is listed as yes. Cons are subscription logistics, the missing retail backup, and a shorter community track record than Marshall or Wysong. The price line says subscription pricing. That is the price the review prints, not a dollar range.</p>
        <h2>Who should buy which food</h2>
        <p>Buy Wysong when the printed guaranteed analysis and specialty or direct stocking are what you want, and the printed bag price is acceptable. Carbohydrate is not on that analysis — check the label. Buy Carniwhole when a subscription shipment and a direct-only panel are acceptable, including the chance you cannot pick the same bag up at a store. Marshall remains the mid-tier retail card on the other guide. Similar carbohydrate on an unknown label does not make that label into either of these bags.</p>
        <p>The sale price can differ from the printed Wysong band. Carniwhole’s price is whatever the subscription page shows, not a figure added here.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
