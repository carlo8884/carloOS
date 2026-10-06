import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Brushing Boots vs Bell Boots | Horses.com',
  description: 'The boots page covers synthetic brushing boots and pull-on bell boots. Printed prices are $25–70 and $12–35 a pair.',
  path: '/reviews/brushing-boots-vs-bell-boots-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Brushing Boots or Bell Boots',
  description: 'Interference boots or overreach bell boots. The boots page says neither supports a tendon.',
  url: 'https://horses.com/reviews/brushing-boots-vs-bell-boots-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which boot does the page pick for interference?',
    answer: 'Synthetic brushing or splint boots, marked Everyday Protection and the winner. The printed price is $25–70 a pair. The card says they protect against strikes during schooling and turnout, and that they do not provide tendon support.',
  },
  {
    question: 'When does the page point to bell boots?',
    answer: 'When a hind foot strikes a front heel or the horse pulls a front shoe. Pull-on bell boots are Overreach Protection. The printed price is $12–35 a pair. The card says pull-on styles stay secure and are harder to put on, and that an oversized boot can rub.',
  },
  {
    question: 'Do these boots support tendons?',
    answer: 'No. The boots page says the forces on a galloping or landing tendon are larger than a boot can structurally support. Both cards are impact protection. Standing wraps are a separate skill on that page and are not one of these two products.',
  },
]

const RANKED = ['Synthetic Brushing Boots', 'Pull-On Bell Boots']
const itemList = buildItemListSchema({
  name: 'Brushing Boots or Bell Boots',
  items: RANKED.map((name) => ({ name, url: ({ 'Synthetic Brushing Boots': 'https://horses.com/go/ridingwarehouse/synthetic-brushing-boots?s=reviews-brushing-boots-vs-bell-boots-guide' }[name] ?? 'https://horses.com/reviews/brushing-boots-vs-bell-boots-guide') })),
})

export default function BrushingBootsVsBellBootsGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Brushing Boots or Bell Boots',
        subtitle: 'Interference protection for the cannon, or overreach protection for the heel. Scores and prices below are the ones on the boots page.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/ridingwarehouse/synthetic-brushing-boots?s=reviews-brushing-boots-vs-bell-boots-guide" label="Check price of synthetic brushing boots at Riding Warehouse" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Brushing vs Bell Boots', href: '/reviews/brushing-boots-vs-bell-boots-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Boots and wraps', href: '/tack/boots-and-wraps' },
            { label: 'Nylon vs breakaway', href: '/reviews/nylon-vs-breakaway-halter-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-brushing-boots-vs-bell-boots-guide"
          checklist={[
            "Synthetic brushing or splint boots, marked Everyday Protection and the winner.",
            "The card says they protect against strikes during schooling and turnout, and that they do not provide tendon support.",
            "When a hind foot strikes a front heel or the horse pulls a front shoe.",
            "The card says pull-on styles stay secure and are harder to put on, and that an oversized boot can rub.",
            "The boots page says the forces on a galloping or landing tendon are larger than a boot can structurally support.",
            "Standing wraps are a separate skill on that page and are not one of these two products.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/tack/boots-and-wraps">boots and wraps page</Link>, which compares published retail specs. Blankets and pads have their own guides. This comparison is brushing boots against bell boots.</p>
        <h2>What the page says about brushing boots</h2>
        <p>Synthetic brushing or splint boots are Everyday Protection and the winner. The card says they protect the lower leg from interference strikes in schooling, lunging, and turnout. Liners are washable and quick-drying because grit trapped under a boot causes rubs. Fit is snug, not tight. The cons repeat that no boot in this category provides genuine tendon support, and that a dirty boot can rub. The printed price is $25–70 a pair. The link above is the Riding Warehouse search on that page.</p>
        <h2>What the page says about bell boots</h2>
        <p>Pull-on bell boots are Overreach Protection. The card says they cover the heel bulbs and coronet when a hind foot strikes the back of a front foot, and that they help keep a front shoe on. Pull-on styles stay secure. Hook-and-loop styles are easier to fit and can come loose in deep footing. The printed price is $12–35 a pair. Cons say pull-on styles are harder to put on, an oversized boot can rub, and muddy work means cleaning. The page ties them to horses that overreach, forge, or pull shoes, and to jumping and fast work.</p>
        <h2>Who should buy which boot</h2>
        <p>Buy brushing boots when the strike is between legs during flatwork or turnout, and clean them so grit does not stay against the skin. Buy bell boots when the injury pattern is overreach or a pulled front shoe. A horse can need both jobs. Neither purchase is tendon support, and neither is a standing wrap. Bandaging technique stays on the boots page because a tight wrap can injure a tendon. Wraps are a different product on that page.</p>
        <p>The sale price can differ from the printed pair price. A blanket fill weight does not choose a boot.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
