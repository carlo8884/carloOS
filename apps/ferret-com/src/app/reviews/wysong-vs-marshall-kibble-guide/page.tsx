import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, QuietPartnerLink, RelatedLinks, buildArticleSchema, buildMetadata, PrimaryHop, ArticleSourcesList, LastUpdated } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wysong Epigen 90 vs Marshall Kibble | Ferret.com',
  description: 'Wysong Epigen 90 is marketed as starch-free. Carbohydrate is not on the label. Marshall Premium is the chain-retail bag.',
  path: '/reviews/wysong-vs-marshall-kibble-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wysong Epigen 90 or Marshall Premium',
  description: 'The kibble review lists Wysong Epigen 90 as starch-free on the current page. Carbohydrate is not on the guaranteed analysis.',
  url: 'https://ferret.com/reviews/wysong-vs-marshall-kibble-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which kibble does the diet review mark as the winner?',
    answer: 'Wysong Epigen 90, marked the top row. The current page lists crude protein minimum 63% and crude fat minimum 16% as printed, not as dry matter. Carbohydrate is not on the guaranteed analysis. The page markets the food as starch-free. The printed price is $30–50 for 5 lb.',
  },
  {
    question: 'When does the review point to Marshall Premium?',
    answer: 'When you need a ferret-specific bag from chain retail. The current page lists crude protein minimum 38% and crude fat minimum 18% as printed, not as dry matter. Carbohydrate is not on the guaranteed analysis. Check the ingredient list. The printed price is $15–25 for 4 lb.',
  },
  {
    question: 'Does this page add a third food?',
    answer: 'The kibble review also has a Carniwhole listing for a direct subscription. This guide does not add a shop link for it. The comparison here is Wysong versus Marshall, using the figures already on those two products.',
  },
]

export default function WysongVsMarshallKibbleGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Wysong Epigen 90 or Marshall Premium',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Wysong Epigen 90 is the top kibble because the bag lists 63 percent protein and is marketed as starch-free.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon/B019W9VXZK?s=reviews-wysong-vs-marshall-kibble-guide" label="Check price of Wysong Epigen 90 on Amazon" />
          <HopDisclosure siteId="ferret-com" href="/go/amazon/B019W9VXZK?s=reviews-wysong-vs-marshall-kibble-guide" />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Wysong vs Marshall', href: '/reviews/wysong-vs-marshall-kibble-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best ferret kibble', href: '/diet/best-ferret-kibble' },
            { label: 'Food evaluator', href: '/tools/food-evaluator' },
          ]}
        />
      }
     priceAsOf="2026-10-07">
      <div className="carloOS-article">
          <LastUpdated date="2026-10-08" />
        <p>The <Link href="/diet/best-ferret-kibble">kibble review</Link> already lists Wysong Epigen 90 as the premium pick the current page markets as starch-free, and Marshall Premium as the mid-tier bag you are more likely to find in a chain aisle. Carbohydrate is not on either guaranteed analysis. The percentages below are the ones printed in the review.</p>
        <h2>What the review says about Wysong</h2>
        <p>Wysong Epigen 90 is the top row and the winner. The current Wysong Epigen 90 page lists crude protein minimum 63% and crude fat minimum 16%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. The page markets the food as starch-free. Carbohydrate is not on the guaranteed analysis — check the label. The printed price is $30–50 for 5 lb. Distribution is direct and specialty retail, and it is not always stocked in chain pet aisles.</p>
        <h2>What the review says about Marshall</h2>
        <p>Marshall Premium Ferret Diet is the mid-tier card. The current page lists crude protein minimum 38% and crude fat minimum 18%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. Carbohydrate is not on the guaranteed analysis — check the label.</p>
        <p>The printed price is $15–25 for 4 lb. Distribution is national chain pet retail.</p>
        <p>The <Link href="/tools/food-evaluator">food evaluator</Link> is the place to check a guaranteed analysis you already have. Bring a guaranteed analysis you already have. Nothing here adds a new worksheet. The same review has a Carniwhole listing with no retail backup. This guide does not send you there.</p>
        <h2>Who should buy which bag</h2>
        <p>Buy Wysong Epigen 90 when you want the bag the current page markets as starch-free and you can order it or find it at a specialty shop. Carbohydrate is not on that guaranteed analysis — check the label. Buy Marshall Premium when you need a ferret-specific bag from a chain aisle tonight. Carbohydrate is not on that guaranteed analysis either — check the label. Skip Marshall when insulinoma risk is the reason you are choosing a food.</p>
        <HopDisclosure siteId="ferret-com" href="/go/amazon/B019W9VXZK?s=reviews-wysong-vs-marshall-kibble-guide" />
        <p>The link below opens the Wysong Epigen 90 product page already used on the diet pages. The price there is the retailer's.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon/B019W9VXZK?s=reviews-wysong-vs-marshall-kibble-guide">Check price of Wysong Epigen 90 on Amazon →</a></p>
        <QuietPartnerLink href="/go/wysong/epigen-90?s=reviews-wysong-vs-marshall-kibble-guide" label="Check price of Wysong Epigen 90 at Wysong" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Wysong", url: "https://www.wysong.net/", publisher: "Wysong" },
            { label: "Marshall Pet Products", url: "https://www.marshallpet.com/", publisher: "Marshall Pet Products" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
