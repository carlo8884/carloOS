import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

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
  description: 'The joint-supplement review already scores Cosequin ASU Plus for the ASU formula and Platinum CJ as the comprehensive tub.',
  url: 'https://horses.com/reviews/cosequin-vs-platinum-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which supplement does the joint review mark as the winner?',
    answer: 'Nutramax Cosequin ASU Plus, scored 8.9 and marked Best Evidence (ASU). The review lists ASU, glucosamine HCl, and chondroitin sulfate, an NASC Quality Seal, and $60–95 per 30-day supply.',
  },
  {
    question: 'When does the review point to Platinum Performance CJ?',
    answer: 'For a performance horse when the owner wants one comprehensive formula. Platinum CJ scores 9.0. It lists glucosamine, chondroitin, MSM, HA, ASU, CMO, and omega-3, at $130–180 per 30-day supply.',
  },
  {
    question: 'Does either product replace joint injections?',
    answer: 'No. The Cosequin listing says it is not a substitute for intra-articular medication when synovitis or active osteoarthritis is documented. Nothing here adds a new claim about the evidence.',
  },
]

export default function CosequinVsPlatinumGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-04"
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Cosequin ASU Plus or Platinum CJ',
        subtitle: 'An ASU maintenance tub and a comprehensive performance formula are different purchases. Prices and scores below are the ones on the joint-supplement review. No dose is added here.',
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
        <p>The <Link href="/supplements/joint-supplements">joint-supplement review</Link> already scores Nutramax Cosequin ASU Plus as the ASU pick and Platinum Performance CJ as the comprehensive pick. Those scores are editorial scores, not shopper star ratings. Milligram amounts are the ones the review already prints.</p>
        <h2>What the review says about Cosequin</h2>
        <p>Nutramax Cosequin ASU Plus is Best Evidence (ASU), score 8.9, and the winner. The listed actives are ASU, glucosamine HCl, and chondroitin sulfate. NASC Quality Seal is listed as yes, and the review says ingredient amounts are disclosed on the label. The printed price is $60–95 per 30-day supply. It is for maintenance and an early osteoarthritis adjunct. The review says it is not a substitute for intra-articular or systemic medication when that is indicated.</p>
        <h2>What the review says about Platinum</h2>
        <p>Platinum Performance CJ is Best Comprehensive, score 9.0. It lists glucosamine, chondroitin, MSM, HA, ASU, CMO, and omega-3 on the wellness-formula base. The printed price is $130–180 per 30-day supply, and the review calls it the premium supplement with the highest typical order value in the category. It is for a performance horse on an integrated supplement plan. The downsides include cost, some Tier 3 ingredients in the formula, and auto-ship lock-in.</p>
        <h2>Who should buy which tub</h2>
        <p>Buy Cosequin ASU Plus when the job is the ASU formula with disclosed amounts, at the $60–95 band. Buy Platinum CJ when you want one tub that already stacks the longer ingredient list, and the $130–180 band is acceptable. Neither product is a replacement for veterinary joint treatment.</p>
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <p>The link below opens the Cosequin ASU Plus page from the joint review. The price there is the retailer's, not a quote from this page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/smartpak/cosequin-asu-plus?s=reviews-cosequin-vs-platinum-guide">Compare Cosequin ASU Plus at SmartPak →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
