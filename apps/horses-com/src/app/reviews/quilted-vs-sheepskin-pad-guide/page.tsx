import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, QuietPartnerLink, RelatedLinks, buildArticleSchema, buildMetadata, PrimaryHop, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'

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
  description: 'The saddle-pad review already lists the quilted cotton pad for everyday schooling and the sheepskin half pad for friction.',
  url: 'https://horses.com/reviews/quilted-vs-sheepskin-pad-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which pad does the saddle-pad review mark as the winner?',
    answer: 'The Quilted Cotton All-Purpose Pad, marked Everyday English. The review lists quilted cotton, machine washing, and a price of $20–45. It does not correct saddle fit.',
  },
  {
    question: 'When does the review point to the sheepskin half pad?',
    answer: 'For friction reduction and wicking under a saddle that already fits. The sheepskin listing lists $60–160, and says some versions have shim pockets. It is not a substitute for a saddle fitter.',
  },
  {
    question: 'Can either pad fix a saddle that does not fit?',
    answer: 'No. The saddle-pad page says a pad cannot correct a poorly fitting saddle, and a thick pad under a too-narrow saddle makes the pinch worse.',
  },
]

export default function QuiltedVsSheepskinPadGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-05"
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Quilted cotton pad or a sheepskin half pad',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The quilted cotton pad is the everyday pick because it washes and costs less than a sheepskin half pad.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon-brand/quilted+all+purpose+saddle+pad?s=reviews-quilted-vs-sheepskin-pad-guide" label="Browse quilted all-purpose saddle pads on Amazon" />
          <HopDisclosure tone="on-dark" siteId="horses-com" href="/go/amazon-brand/quilted+all+purpose+saddle+pad?s=reviews-quilted-vs-sheepskin-pad-guide" />
        </div>
        </>
      }
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
          <LastUpdated date="2026-10-09" />
        <p>The <Link href="/tack/saddle-pads">saddle-pad review</Link> already lists a quilted cotton all-purpose pad for everyday English schooling and a sheepskin half pad for friction under a saddle that fits. Neither pad corrects saddle fit.</p>
        <h2>What the review says about the quilted pad</h2>
        <p>The Quilted Cotton All-Purpose Pad is Everyday English and the winner. Material is quilted cotton. Care is machine washable. The printed price is $20–45. The review calls it inexpensive enough to keep several in rotation so a clean, dry pad is available. Cons: no structural fit correction, and it wears faster than wool or felt.</p>
        <h2>What the review says about the sheepskin pad</h2>
        <p>The sheepskin half pad is the friction pick. Material is sheepskin or synthetic fleece. The job is friction reduction and wicking at the saddle edges. Some versions have shim pockets for minor balance tuning between professional fittings. The printed price is $60–160. Downsides listed: it cannot fix a wrong-width saddle, real sheepskin needs careful washing, and premium versions are pricey.</p>
        <h2>Who should buy which pad</h2>
        <p>Buy the quilted cotton pad for daily schooling under a saddle that already fits, and keep more than one so a dry pad is always available. Buy the sheepskin half pad when friction or wicking at the edges is the extra job, still under a fitting saddle. If the saddle is the wrong width, the page sends you to a saddle fitter, not to a thicker pad. Western felt is another option on that review, at $80–200, and it is a different discipline.</p>
        <HopDisclosure siteId="horses-com" href="/go/amazon-brand/quilted+all+purpose+saddle+pad?s=reviews-quilted-vs-sheepskin-pad-guide" />
        <p>The link below opens the quilted cotton pad search already used on the saddle-pad review. The price there is the retailer's.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/quilted+all+purpose+saddle+pad?s=reviews-quilted-vs-sheepskin-pad-guide">Browse quilted all-purpose saddle pads on Amazon →</a></p>
        <QuietPartnerLink href="/go/smartpak/quilted-all-purpose-saddle-pad?s=reviews-quilted-vs-sheepskin-pad-guide" label="Compare the quilted cotton pad at SmartPak →" />
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Quilted cotton pad</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Sheepskin half pad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Everyday English, and the winner</td>
                <td className="p-3">Friction pick</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Material</th>
                <td className="p-3">Quilted cotton. Machine washable</td>
                <td className="p-3">Sheepskin or synthetic fleece</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Job</th>
                <td className="p-3">A clean, dry pad in rotation. No structural fit correction</td>
                <td className="p-3">Friction reduction and wicking under a saddle that already fits. Some versions have shim pockets</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Limit</th>
                <td className="p-3">Wears faster than wool or felt. It does not correct saddle fit</td>
                <td className="p-3">Cannot fix a wrong-width saddle. Real sheepskin needs careful washing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "SmartPak", url: "https://www.smartpakequine.com/", publisher: "SmartPak" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
