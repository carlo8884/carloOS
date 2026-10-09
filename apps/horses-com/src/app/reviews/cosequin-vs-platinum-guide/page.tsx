import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, QuietPartnerLink, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Cosequin ASU Plus vs Platinum CJ | Horses.com',
  description: 'Which joint supplement to buy: Cosequin ASU Plus for the ASU formula, or Platinum CJ when you want one comprehensive tub.',
  path: '/reviews/cosequin-vs-platinum-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Cosequin ASU Plus or Platinum CJ',
  description: 'The joint-supplement review already lists Cosequin ASU Plus for the ASU formula and Platinum CJ as the comprehensive tub.',
  url: 'https://horses.com/reviews/cosequin-vs-platinum-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which supplement does the joint review mark as the winner?',
    answer: 'Nutramax Cosequin ASU Plus, marked Best Evidence (ASU). The review lists ASU, glucosamine HCl, and chondroitin sulfate, an NASC Quality Seal, and $60–95 per 30-day supply.',
  },
  {
    question: 'When does the review point to Platinum Performance CJ?',
    answer: 'For a performance horse when the owner wants one comprehensive formula. The current page lists, per 2 scoops, glucosamine sulfate 8,820 mg, MSM 8,200 mg, ASU 2,000 mg, boswellia 1,400 mg, cetyl myristoleate 275 mg, and hyaluronic acid 90 mg. It does not list chondroitin. Omega-3 on that page is flax oil. The printed price is $130–180 per 30-day supply.',
  },
  {
    question: 'Does either product replace joint injections?',
    answer: 'No. The Cosequin listing says it is not a substitute for intra-articular medication when synovitis or active osteoarthritis is documented. Nothing here adds a new claim about the evidence.',
  },
]

export default function CosequinVsPlatinumGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-08"
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Cosequin ASU Plus or Platinum CJ',
        subtitle: 'An ASU maintenance tub and a comprehensive performance formula are different purchases. Prices below are the ones on the joint-supplement review. No dose is added here.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Cosequin vs Platinum', href: '/reviews/cosequin-vs-platinum-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Joint supplements', href: '/supplements/joint-supplements' },
            { label: 'Best equine supplements', href: '/reviews/best-equine-supplements' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-09" />
        <p>The <Link href="/supplements/joint-supplements">joint-supplement review</Link> already lists Nutramax Cosequin ASU Plus as the ASU pick and Platinum Performance CJ as the comprehensive pick. Cosequin milligrams differ by powder and pellets — check the label. Platinum CJ does not list chondroitin.</p>
        <h2>What the review says about Cosequin</h2>
        <p>Nutramax Cosequin ASU Plus is Best Evidence (ASU) and the winner. The current Cosequin ASU Plus page lists glucosamine, MSM, chondroitin, and ASU plus other ingredients (<a href="https://www.cosequin.com/product/horses/cosequin-asu-plus">Cosequin ASU Plus page</a>). Milligrams differ for powder and pellets — check the label. The initial period is 2–4 weeks. The printed price is $60–95 per 30-day supply.</p>
        <h2>What the review says about Platinum</h2>
        <p>Platinum Performance CJ is Best Comprehensive. The current page lists, per 2 scoops, glucosamine sulfate 8,820 mg, MSM 8,200 mg, ASU 2,000 mg, boswellia 1,400 mg, cetyl myristoleate 275 mg, and hyaluronic acid 90 mg. It does not list chondroitin. Omega-3 on that page is flax oil. The printed price is $130–180 per 30-day supply.</p>
        <h2>Who should buy which tub</h2>
        <p>Buy Cosequin ASU Plus when the job is the ASU formula with disclosed amounts, at the $60–95 band. Buy Platinum CJ when you want one tub that already stacks the longer ingredient list, and the $130–180 band is acceptable. Neither product is a replacement for veterinary joint treatment.</p>
        <QuietPartnerLink href="/go/smartpak/cosequin-asu-plus?s=reviews-cosequin-vs-platinum-guide" label="Compare Cosequin ASU Plus at SmartPak →" />
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Cosequin ASU Plus</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Platinum CJ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Best Evidence (ASU), and the winner</td>
                <td className="p-3">Best Comprehensive</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">What the page lists</th>
                <td className="p-3">Glucosamine, MSM, chondroitin, and ASU, plus other ingredients. Milligrams differ for powder and pellets</td>
                <td className="p-3">Per 2 scoops: glucosamine sulfate, MSM, ASU, boswellia, cetyl myristoleate, and hyaluronic acid. No chondroitin</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Also on the page</th>
                <td className="p-3">Initial period is 2–4 weeks</td>
                <td className="p-3">Omega-3 on that page is flax oil</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Not a replacement for</th>
                <td className="p-3">Intra-articular medication when synovitis or active osteoarthritis is documented</td>
                <td className="p-3">Veterinary joint treatment</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList title="Sources"
            sources={[
            { label: 'Cosequin ASU Plus', url: 'https://www.cosequin.com/product/horses/cosequin-asu-plus', publisher: 'Cosequin' },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
