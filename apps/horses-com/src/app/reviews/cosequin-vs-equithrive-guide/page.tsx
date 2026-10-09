import type { Metadata } from 'next'
import Link from 'next/link'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Cosequin vs Equithrive for Joints | Horses.com',
  description: 'The supplement review covers Cosequin ASU Plus and Equithrive Original Pellets. ASU with glucosamine, or a resveratrol pellet.',
  path: '/reviews/cosequin-vs-equithrive-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Cosequin or Equithrive for joints',
  description: 'Cosequin ASU Plus for joint evidence, or Equithrive for resveratrol. Scores and prices are on the supplement review.',
  url: 'https://horses.com/reviews/cosequin-vs-equithrive-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which joint product does the review pick for evidence?',
    answer: 'Cosequin ASU Plus from Nutramax. The current powder page lists glucosamine, MSM, chondroitin, and ASU, and it also lists other ingredients (https://www.cosequin.com/product/horses/cosequin-asu-plus, fetched 2026-10-08). Milligrams differ for powder and pellets — check the label. The initial period is 2–4 weeks. Check the current FEI and USEF lists. The printed price is $80–110 a month.',
  },
  {
    question: 'When does the review point to Equithrive?',
    answer: 'As a resveratrol pellet beside other joint support, not as a replacement for it. The review lists trans-resveratrol, an NASC seal, a pelleted format, and $45–65 a month. The evidence base is smaller than ASU and glucosamine.',
  },
  {
    question: 'Is the monthly figure a barn invoice?',
    answer: 'No. Both figures are the monthly bands printed on the supplement review. A retailer price can differ. Platinum Performance on that review is a different, broader product.',
  },
]

export default function CosequinVsEquithriveGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Cosequin or Equithrive for joints',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Cosequin ASU Plus is the joint pick on the supplement review.</p>
          <div data-fold="offer">
          <HopDisclosure tone="on-dark" siteId="horses-com" href="/go/amazon-brand/equithrive+original+pellets+resveratrol?s=reviews-cosequin-vs-equithrive-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon-brand/equithrive+original+pellets+resveratrol?s=reviews-cosequin-vs-equithrive-guide">Browse Equithrive original pellets on Amazon →</a>
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Cosequin vs Equithrive', href: '/reviews/cosequin-vs-equithrive-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Equine supplements', href: '/reviews/best-equine-supplements' },
            { label: 'Joint supplements', href: '/supplements/joint-supplements' },
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
          source="reviews-cosequin-vs-equithrive-guide"
          checklist={[
            "As a resveratrol pellet beside other joint support, not as a replacement for it.",
            "The evidence base is smaller than ASU and glucosamine.",
            "Both figures are the monthly bands printed on the supplement review.",
            "Platinum Performance on that review is a different, broader product.",
            "Cosequin ASU Plus is the joint-evidence pick.",
            "Equithrive Original Pellets are the resveratrol pick.",
          ]}
        />
        <p>Cosequin ASU Plus is the joint-evidence pick. Equithrive Original Pellets are the resveratrol pick. <Link href="/reviews/ker-eo3-vs-equithrive-guide">KER EO-3 versus Equithrive</Link> is the omega-3 comparison, not this joint pair. The <Link href="/supplements/joint-supplements">joint-supplement guide</Link> is the ingredient ladder behind the Cosequin ranking.</p>
        <h2>What the review says about Cosequin ASU Plus</h2>
        <p>Cosequin ASU Plus is Best Joint Evidence and the winner. The current powder page lists glucosamine, MSM, chondroitin, and ASU, and it also lists other ingredients (https://www.cosequin.com/product/horses/cosequin-asu-plus, fetched 2026-10-08). Milligrams differ for powder and pellets — check the label. The initial period is 2–4 weeks. Check the current FEI and USEF lists. The printed price is $80–110 a month. Pellet palatability varies.</p>
        <h2>What the review says about Equithrive</h2>
        <p>Equithrive Original Pellets are Best Resveratrol. The active is trans-resveratrol. The current page says research-backed and FEI and USEF compliant. It does not print University of Kentucky equine trials — check the label for the resveratrol amount. The printed price is $45–65 a month. The review frames resveratrol as a complement to traditional joint ingredients, not a substitute.</p>
        <h2>Who should buy which product</h2>
        <p>Buy Cosequin ASU Plus when the horse has diagnosed osteoarthritis or significant work-related joint loading and you want the product the review ranks on published evidence. Buy Equithrive when you want the lower monthly band and you are adding resveratrol beside another joint product, not instead of one. A single broad wellness tub is Platinum Performance on the same review, not either product here.</p>
        <p>Cosequin ASU Plus is the joint pick because the current powder page lists glucosamine, MSM, chondroitin, and ASU, and it also lists other ingredients (https://www.cosequin.com/product/horses/cosequin-asu-plus, fetched 2026-10-08).</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "www.cosequin.com/product/horses/cosequin-asu-plus", url: "https://www.cosequin.com/product/horses/cosequin-asu-plus", publisher: "www.cosequin.com" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
