import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Quilted Pad vs Sheepskin Half Pad | Horses.com',
  description: 'Which English pad to buy: the washable quilted cotton pad, or a sheepskin half pad for friction. Neither fixes saddle fit.',
  path: '/reviews/quilted-vs-sheepskin-pad-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Quilted cotton pad or a sheepskin half pad',
  description: 'The saddle-pad review already scores the quilted cotton pad for everyday schooling and the sheepskin half pad for friction.',
  url: 'https://horses.com/reviews/quilted-vs-sheepskin-pad-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which pad does the saddle-pad review mark as the winner?',
    answer: 'The Quilted Cotton All-Purpose Pad, scored 8.3 and marked Everyday English. The card lists quilted cotton, machine washing, and a price of $20–45. It does not correct saddle fit.',
  },
  {
    question: 'When does the review point to the sheepskin half pad?',
    answer: 'For friction reduction and wicking under a saddle that already fits. The sheepskin card scores 8.5, lists $60–160, and says some versions have shim pockets. It is not a substitute for a saddle fitter.',
  },
  {
    question: 'Can either pad fix a saddle that does not fit?',
    answer: 'No. The saddle-pad page says a pad cannot correct a poorly fitting saddle, and a thick pad under a too-narrow saddle makes the pinch worse.',
  },
]

export default function QuiltedVsSheepskinPadGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-04"
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Quilted cotton pad or a sheepskin half pad',
        subtitle: 'An everyday schooling pad and a friction half pad are different purchases. This guide only restates the saddle-pad review. It does not add a material, a price, or a score.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Quilted vs sheepskin', href: '/reviews/quilted-vs-sheepskin-pad-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Saddle pads', href: '/tack/saddle-pads' },
            { label: 'Saddle fit basics', href: '/guides/saddle-fit-basics' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/tack/saddle-pads">saddle-pad review</Link> already scores a quilted cotton all-purpose pad for everyday English schooling and a sheepskin half pad for friction under a saddle that fits. Scores on those cards are editorial scores, not customer star ratings. Neither card claims a hands-on trial, and neither pad corrects saddle fit.</p>
        <h2>What the quilted card already says</h2>
        <p>The Quilted Cotton All-Purpose Pad is Everyday English, score 8.3, and the winner. Material is quilted cotton. Care is machine washable. The printed price is $20–45. The card calls it inexpensive enough to keep several in rotation so a clean, dry pad is available. Cons: no structural fit correction, and it wears faster than wool or felt.</p>
        <h2>What the sheepskin card already says</h2>
        <p>The Sheepskin Half Pad scores 8.5. Material is sheepskin or synthetic fleece. The job is friction reduction and wicking at the saddle edges. Some versions have shim pockets for minor balance tuning between professional fittings. The printed price is $60–160. Cons on the card: it cannot fix a wrong-width saddle, real sheepskin needs careful washing, and premium versions are pricey.</p>
        <h2>Who should buy which pad</h2>
        <p>Buy the quilted cotton pad for daily schooling under a saddle that already fits, and keep more than one so a dry pad is always available. Buy the sheepskin half pad when friction or wicking at the edges is the extra job, still under a fitting saddle. If the saddle is the wrong width, the page sends you to a saddle fitter, not to a thicker pad. Western felt is a third card on that review, at $80–200, and it is a different discipline.</p>
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <p>The hop below is the same quilted cotton pad link already on the saddle-pad review. It is a merchant page, not a quoted price.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/smartpak/quilted-all-purpose-saddle-pad?s=reviews-quilted-vs-sheepskin-pad-guide">Compare the quilted cotton pad at SmartPak →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
