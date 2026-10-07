import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, BelowFoldPhoto, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'November and December Horse Gifts | Horses.com',
  description: 'November and December horse gifts grouped by the price bands already printed on the halter, boot, and winter blanket reviews.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'November and December horse gifts',
  description: 'Halter, boot, and blanket prices copied from the cards that already review them. Monthly supplement prices stay on the supplement review.',
  url: 'https://horses.com/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Are the supplement prices on this page?',
    answer: 'No. The supplement review prints monthly ranges, such as a tub that is priced per month. This page lists one-time bands from the halter, boot, and blanket cards so a monthly cost is not mixed in as if it were a single gift.',
  },
  {
    question: 'Which printed bands are the smaller barn gifts?',
    answer: 'The halter page prints a cotton lead at $8–22 and an adjustable nylon halter at $10–25. The boot page prints pull-on bell boots at $12–35 a pair. The breakaway halter is $25–55. Synthetic brushing boots are $25–70 a pair.',
  },
  {
    question: 'Which blanket band is the lower one?',
    answer: 'The blanket review prints the Horseware Amigo Bravo 12 Plus at $130–190. The Rambo Original is $280–420 on that same review. Measure the horse before you order. The blanket page has the sizing note.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'November and December horse gifts',
        subtitle: 'Halter, boot, and turnout prices copied from the cards. This page does not add a score or a blanket size.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '8 min',
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
            { label: 'Winter blankets', href: '/reviews/best-winter-horse-blankets' },
            { label: 'Halters and leads', href: '/tack/halters-and-lead-ropes' },
            { label: 'Boots and wraps', href: '/tack/boots-and-wraps' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>November and December are blanket season in a lot of barns, and they are also when a lead rope or a pair of boots shows up as a gift. The <Link href="/reviews">reviews hub</Link> already prints those bands. This page sorts the one-time prices from the halter page, the boot page, and the winter blanket review. It does not call any row the gift of the year, and it does not invent a size chart.</p>
        <p>Supplement cards on the supplement review are monthly ranges. A monthly tub is a different kind of spending from a blanket you buy once. Those monthly figures stay on the <Link href="/reviews/best-equine-supplements">supplement review</Link>. Fill weight for a clipped horse stays on the <Link href="/reviews/blanket-weight-by-temperature-guide">blanket-weight guide</Link>.</p>
        <h2>Printed bands under $70</h2>
        <p>The halter page prints the cotton lead with a bull snap at $8–22, the adjustable flat nylon halter at $10–25, and the leather-crown breakaway at $25–55. The boot page prints pull-on bell boots at $12–35 a pair and synthetic brushing boots at $25–70 a pair. The nylon halter is the in-hand halter. The breakaway is the one the card describes for a horse left haltered. Brushing boots and bell boots protect different parts of the leg. The boot page says neither one is tendon support.</p>
        <h2>Printed blanket bands</h2>
        <p>The blanket review prints the Amigo Bravo 12 Plus at $130–190, the SmartPak Ultimate at $160–230, the Rhino Original at $180–260, and the Rambo Original at $280–420. Those four bands are the ones on the cards. Measure before you order. A blanket that does not fit is not a useful gift, even when the band looks right.</p>
        <h2>Who should get which printed band</h2>
        <p>A lead or a nylon halter is the small barn gift when the horse is led under supervision. A breakaway is the gift when the horse is left haltered, which is the limit the halter card already states. Bell boots are for overreach. Brushing boots are for interference. A turnout blanket is the larger gift, and the blanket review is where denier and fill live.</p>
        <HopDisclosure siteId="horses-com" href={[`/go/smartpak/cotton-lead-rope-bull-snap?s=${SOURCE}`, `/go/smartpak/adjustable-nylon-halter?s=${SOURCE}`, `/go/smartpak/pull-on-bell-boots?s=${SOURCE}`, `/go/dover/leather-crown-breakaway-halter?s=${SOURCE}`, `/go/ridingwarehouse/synthetic-brushing-boots?s=${SOURCE}`, `/go/ridingwarehouse/amigo-bravo-12-plus?s=${SOURCE}`, `/go/smartpak/ultimate-turnout?s=${SOURCE}`, `/go/dover/rhino-original-turnout?s=${SOURCE}`, `/go/smartpak/rambo-original-turnout?s=${SOURCE}`]} />
        <div className="overflow-x-auto max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th className="p-3 font-bold text-brand-dark">Printed band</th>
                <th className="p-3 font-bold text-brand-dark">Product</th>
                <th className="p-3 font-bold text-brand-dark">Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="p-3">$8–22</td>
                <td className="p-3 font-bold">Cotton lead rope<TableShopLink href={`/go/smartpak/cotton-lead-rope-bull-snap?s=${SOURCE}`} product="Cotton lead rope" /></td>
                <td className="p-3"><Link href="/tack/halters-and-lead-ropes">Halter page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$10–25</td>
                <td className="p-3 font-bold">Adjustable nylon halter<TableShopLink href={`/go/smartpak/adjustable-nylon-halter?s=${SOURCE}`} product="Adjustable nylon halter" /></td>
                <td className="p-3"><Link href="/tack/halters-and-lead-ropes">Halter page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$12–35 a pair</td>
                <td className="p-3 font-bold">Pull-on bell boots<TableShopLink href={`/go/smartpak/pull-on-bell-boots?s=${SOURCE}`} product="Pull-on bell boots" /></td>
                <td className="p-3"><Link href="/tack/boots-and-wraps">Boot page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$25–55</td>
                <td className="p-3 font-bold">Leather-crown breakaway<TableShopLink href={`/go/dover/leather-crown-breakaway-halter?s=${SOURCE}`} product="Leather-crown breakaway" /></td>
                <td className="p-3"><Link href="/tack/halters-and-lead-ropes">Halter page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$25–70 a pair</td>
                <td className="p-3 font-bold">Synthetic brushing boots<TableShopLink href={`/go/ridingwarehouse/synthetic-brushing-boots?s=${SOURCE}`} product="Synthetic brushing boots" /></td>
                <td className="p-3"><Link href="/tack/boots-and-wraps">Boot page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$130–190</td>
                <td className="p-3 font-bold">Amigo Bravo 12 Plus<TableShopLink href={`/go/ridingwarehouse/amigo-bravo-12-plus?s=${SOURCE}`} product="Amigo Bravo 12 Plus" /></td>
                <td className="p-3"><Link href="/reviews/best-winter-horse-blankets">Blanket review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$160–230</td>
                <td className="p-3 font-bold">SmartPak Ultimate<TableShopLink href={`/go/smartpak/ultimate-turnout?s=${SOURCE}`} product="SmartPak Ultimate" /></td>
                <td className="p-3"><Link href="/reviews/best-winter-horse-blankets">Blanket review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$180–260</td>
                <td className="p-3 font-bold">Rhino Original<TableShopLink href={`/go/dover/rhino-original-turnout?s=${SOURCE}`} product="Rhino Original" /></td>
                <td className="p-3"><Link href="/reviews/best-winter-horse-blankets">Blanket review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$280–420</td>
                <td className="p-3 font-bold">Rambo Original<TableShopLink href={`/go/smartpak/rambo-original-turnout?s=${SOURCE}`} product="Rambo Original" /></td>
                <td className="p-3"><Link href="/reviews/best-winter-horse-blankets">Blanket review</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-07" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <BelowFoldPhoto siteId="horses-com" />
      </div>
    </ArticleLayout>
  )
}
