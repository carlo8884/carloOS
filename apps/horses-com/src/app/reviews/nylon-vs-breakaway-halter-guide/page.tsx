import type { Metadata } from 'next'
import Link from 'next/link'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas, LastUpdated } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Nylon Halter vs Breakaway | Horses.com',
  description: 'The halter page covers a flat nylon halter and a leather-crown breakaway. Printed prices are $10–25 and $25–55.',
  path: '/reviews/nylon-vs-breakaway-halter-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Nylon Halter or Breakaway',
  description: 'An everyday nylon halter, or a leather-crown breakaway for turnout. Scores and prices are on the halter page.',
  url: 'https://horses.com/reviews/nylon-vs-breakaway-halter-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which halter does the page mark for turnout?',
    answer: 'The leather-crown breakaway, marked Safer Turnout and the winner. The printed price is $25–55. The card says a leather crown or breakable tab gives way if the horse is caught, and that the crown needs periodic replacement.',
  },
  {
    question: 'When does the page point to flat nylon?',
    answer: 'For leading, grooming, and tying under supervision. The adjustable flat nylon halter is badged Everyday. The printed price is $10–25. The card says it does not break and is unsafe to leave on a turned-out horse.',
  },
  {
    question: 'Does this page pick a lead rope?',
    answer: 'No. Lead ropes and tying stay on the halter page, including rope prices and the quick-release knot. The turnout halter is the leather-crown breakaway, because the crown gives way if a horse gets caught.',
  },
]

const RANKED = ['Leather-Crown Breakaway Halter', 'Adjustable Flat Nylon Halter']
const itemList = buildItemListSchema({
  name: 'Nylon Halter or Breakaway',
  items: RANKED.map((name) => ({ name, url: ({ 'Leather-Crown Breakaway Halter': 'https://horses.com/go/dover/leather-crown-breakaway-halter?s=reviews-nylon-vs-breakaway-halter-guide' }[name] ?? 'https://horses.com/reviews/nylon-vs-breakaway-halter-guide') })),
})

export default function NylonVsBreakawayGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Nylon Halter or Breakaway',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The leather-crown breakaway is the turnout pick because the crown gives way if a horse gets caught.</p>
          <div data-fold="offer">
          <HopDisclosure tone="on-dark" siteId="horses-com" href="/go/amazon-brand/nylon+horse+halter?s=reviews-nylon-vs-breakaway-halter-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon-brand/nylon+horse+halter?s=reviews-nylon-vs-breakaway-halter-guide">Browse nylon horse halters on Amazon →</a>
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Nylon vs Breakaway', href: '/reviews/nylon-vs-breakaway-halter-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Halters and leads', href: '/tack/halters-and-lead-ropes' },
            { label: 'Quilted vs sheepskin', href: '/reviews/quilted-vs-sheepskin-pad-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-08"
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-08" />
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-nylon-vs-breakaway-halter-guide"
          checklist={[
            "The leather-crown breakaway, marked Safer Turnout and the winner.",
            "The card says a leather crown or breakable tab gives way if the horse is caught, and that the crown needs periodic replacement.",
            "For leading, grooming, and tying under supervision.",
            "The adjustable flat nylon halter is badged Everyday.",
            "The card says it does not break and is unsafe to leave on a turned-out horse.",
            "Lead ropes and tying stay on the halter page, including rope prices and the quick-release knot.",
          ]}
        />
        <p>A nylon halter does not break, so it stays for leading under supervision, and the leather-crown breakaway is the one to leave on a horse at turnout.</p>
        <h2>What the page says about flat nylon</h2>
        <p>The adjustable flat nylon halter is Everyday. The card calls it the standard barn halter: strong, washable, inexpensive, and sized from foal to draft. Fit is an adjustable crown and noseband. The same strength is why the card says it should never be left on a turned-out horse. Hardware can rub if the fit is poor. The printed price is $10–25. Reasonable uses on the card are in-hand leading, grooming, and tying under supervision.</p>
        <h2>What the page says about the breakaway</h2>
        <p>The leather-crown breakaway is Safer Turnout and the winner. The card describes a nylon or leather body with a leather crownpiece or breakable tab that gives way under force, so a horse caught on a post or a hoof can get free. It is the card for a horse that must be left haltered in order to be caught. Cons say the leather crown needs periodic replacement and the price is higher than plain nylon. The printed price is $25–55.</p>
        <h2>Who should buy which halter</h2>
        <p>Buy flat nylon when the horse is led, groomed, or tied while someone is there, and the lower printed band is the point. Buy the breakaway when a halter stays on in turnout. Do not treat the nylon card as a field halter. Tying practice, including a quick-release knot and wither height, stays on the halter page. Lead ropes are a different product there.</p>
        <p>The sale price can differ from the printed band. A pad comparison does not choose a halter, and a halter does not fix saddle fit.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
