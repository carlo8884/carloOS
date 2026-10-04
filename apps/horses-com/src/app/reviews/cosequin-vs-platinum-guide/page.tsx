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
    answer: 'Nutramax Cosequin ASU Plus, scored 8.9 and marked Best Evidence (ASU). The card lists ASU, glucosamine HCl, and chondroitin sulfate, an NASC Quality Seal, and $60–95 per 30-day supply.',
  },
  {
    question: 'When does the review point to Platinum Performance CJ?',
    answer: 'For a performance horse when the owner wants one comprehensive formula. Platinum CJ scores 9.0. The card lists glucosamine, chondroitin, MSM, HA, ASU, CMO, and omega-3, at $130–180 per 30-day supply.',
  },
  {
    question: 'Does either product replace joint injections?',
    answer: 'No. The Cosequin card says it is not a substitute for intra-articular medication when synovitis or active osteoarthritis is documented. This page does not add a new evidence claim.',
  },
]

export default function CosequinVsPlatinumGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Cosequin ASU Plus or Platinum CJ',
        subtitle: 'An ASU maintenance tub and a comprehensive performance formula are different purchases. This guide only restates the joint-supplement review. It does not add a dose, a price, or a score.',
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
        <p>The <Link href="/supplements/joint-supplements">joint-supplement review</Link> already scores Nutramax Cosequin ASU Plus as the ASU pick and Platinum Performance CJ as the comprehensive pick. Scores on those cards are editorial scores, not customer star ratings. This page does not add a milligram amount the cards do not print.</p>
        <h2>What the Cosequin card already says</h2>
        <p>Nutramax Cosequin ASU Plus is Best Evidence (ASU), score 8.9, and the winner. Actives on the card are ASU, glucosamine HCl, and chondroitin sulfate. NASC Quality Seal is listed as yes, and the card says ingredient amounts are disclosed on the label. The printed price is $60–95 per 30-day supply. The best-use line is maintenance and an early osteoarthritis adjunct. The card says it is not a substitute for intra-articular or systemic medication when that is indicated.</p>
        <h2>What the Platinum card already says</h2>
        <p>Platinum Performance CJ is Best Comprehensive, score 9.0. The card lists glucosamine, chondroitin, MSM, HA, ASU, CMO, and omega-3 on the wellness-formula base. The printed price is $130–180 per 30-day supply, and the review calls it the highest-AOV premium supplement in the category. The best-use line is a performance horse on an integrated supplement plan. Cons on the card include cost, some Tier 3 ingredients in the formula, and auto-ship lock-in.</p>
        <h2>Who should buy which tub</h2>
        <p>Buy Cosequin ASU Plus when the job is the ASU formula with disclosed amounts, at the $60–95 band. Buy Platinum CJ when you want one tub that already stacks the longer ingredient list, and the $130–180 band is acceptable. Neither card is a replacement for veterinary joint treatment.</p>
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <p>The hop below is the same Cosequin ASU Plus link already on the joint review. It is a merchant page, not a quoted price.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/smartpak/cosequin-asu-plus?s=reviews-cosequin-vs-platinum-guide">Compare Cosequin ASU Plus at SmartPak →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
