import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'November and December Ferret Gifts | Ferret.com',
  description: 'November and December ferret gifts grouped by the dollar bands already printed on the treat, grooming, food, and cage-setup cards.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'November and December ferret gifts',
  description: 'Dollar bands copied from ferret cards that already name a shop link. Cage cards that only print a dollar-sign tier are not given a new number here.',
  url: 'https://ferret.com/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Why are some cage prices missing from this list?',
    answer: 'The cage review prints tiers as $, $$, and $$$. This page does not turn those symbols into a dollar range. The cage-setup page does print the MidWest Critter Nation double unit at $200–280, and that is the cage band listed here.',
  },
  {
    question: 'Which printed bands are the smaller gifts?',
    answer: 'The cage-setup page prints a Kaytee corner litter pan at $5–12 and a Marshall sleep sack at $10–20. The treat page prints Wysong freeze-dried treats at $8–15 a pack. The grooming page prints Marshall shampoo at $8–14.',
  },
  {
    question: 'Where is the food price?',
    answer: 'The kibble review prints Marshall Premium at $15–25 for 4 pounds and Wysong Epigen 90 at $30–50 for 5 pounds. Carniwhole’s card does not print a shop link, so it is not in the table.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'November and December ferret gifts',
        subtitle: 'Dollar bands copied from cards that already name a product and a shop link. This page does not turn a $ symbol into a dollar price.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'November and December gifts', href: PATH },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best ferret kibble', href: '/diet/best-ferret-kibble' },
            { label: 'Cage setup', href: '/care/cage-setup' },
            { label: 'Fall molt brush', href: '/reviews/fall-molt-brush-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>November and December gifts for a ferret are usually a small supply, a bag of food, or a cage someone has already measured. The <Link href="/reviews">reviews hub</Link> points at those pages. This guide only lists cards that print a dollar band and a shop link. The cage review’s $, $$, and $$$ tiers stay symbols. Inventing a dollar range for those symbols would be a new price, and this page does not do that.</p>
        <p>Seasonal coat and harness fit already have guides. The <Link href="/reviews/fall-molt-brush-guide">fall molt guide</Link> is the brush page. The <Link href="/reviews/winter-harness-fit-guide">winter harness guide</Link> is the fit check. They are not repeated as new products here.</p>
        <h2>Printed bands under $20</h2>
        <p>The cage-setup page prints the Kaytee corner litter pan at $5–12 and the Marshall sleep sack and hammock set at $10–20. The treat page prints Wysong single-ingredient freeze-dried treats at $8–15 a pack. The grooming page prints Marshall ferret shampoo at $8–14. Those are the small bands.</p>
        <h2>Printed food bands</h2>
        <p>The kibble review prints Marshall Premium Ferret Diet at $15–25 for 4 pounds and Wysong Epigen 90 at $30–50 for 5 pounds. Carniwhole is on that review without a shop link and without a dollar band this page can copy, so it is left off the table. Read the kibble review before you switch a food in December. A sudden bag change is not a small gift.</p>
        <h2>Printed cage band</h2>
        <p>The cage-setup page prints the MidWest Critter Nation double unit at $200–280. That is the dollar band this page can cite for a cage. The cage review still explains bar spacing and which household that style of cage is for. Measure the room before you order a double unit as a surprise.</p>
        <h2>Who should get which printed band</h2>
        <p>A litter pan, a sleep sack, a treat pack, or a bottle of shampoo is the small gift. A bag of kibble is the gift when the ferret already eats that food. A double unit is the large gift, and only when the cage page’s spacing and footprint already fit the room. The shop link is the hop already on that card, with this page named as the source.</p>
        <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        <div className="overflow-x-auto max-w-full">
          <table className="w-full text-xs border-collapse min-w-[36rem]">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th className="p-3 font-bold text-brand-dark">Printed band</th>
                <th className="p-3 font-bold text-brand-dark">Product</th>
                <th className="p-3 font-bold text-brand-dark">Page</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="p-3">$5–12</td>
                <td className="p-3 font-bold">Kaytee corner litter pan<TableShopLink href={`/go/chewy-brand/kaytee+corner+ferret+litter+pan?s=${SOURCE}`} product="Kaytee corner litter pan" /></td>
                <td className="p-3"><Link href="/care/cage-setup">Cage setup</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$8–14</td>
                <td className="p-3 font-bold">Marshall ferret shampoo<TableShopLink href={`/go/marshall/ferret-shampoo-original?s=${SOURCE}`} product="Marshall ferret shampoo" /></td>
                <td className="p-3"><Link href="/care/bathing-and-grooming">Grooming page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$8–15 a pack</td>
                <td className="p-3 font-bold">Wysong freeze-dried treats<TableShopLink href={`/go/wysong/freeze-dried-treats?s=${SOURCE}`} product="Wysong freeze-dried treats" /></td>
                <td className="p-3"><Link href="/diet/safe-treats">Treat page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$10–20</td>
                <td className="p-3 font-bold">Marshall sleep sack<TableShopLink href={`/go/marshall/ferret-sleep-sack?s=${SOURCE}`} product="Marshall sleep sack" /></td>
                <td className="p-3"><Link href="/care/cage-setup">Cage setup</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$15–25 for 4 pounds</td>
                <td className="p-3 font-bold">Marshall Premium<TableShopLink href={`/go/marshall/premium-ferret-diet?s=${SOURCE}`} product="Marshall Premium" /></td>
                <td className="p-3"><Link href="/diet/best-ferret-kibble">Kibble review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$30–50 for 5 pounds</td>
                <td className="p-3 font-bold">Wysong Epigen 90<TableShopLink href={`/go/wysong/epigen-90?s=${SOURCE}`} product="Wysong Epigen 90" /></td>
                <td className="p-3"><Link href="/diet/best-ferret-kibble">Kibble review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$200–280</td>
                <td className="p-3 font-bold">Critter Nation double unit<TableShopLink href={`/go/amazon-brand/midwest+critter+nation+double+unit?s=${SOURCE}`} product="Critter Nation double unit" /></td>
                <td className="p-3"><Link href="/care/cage-setup">Cage setup</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-05" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
