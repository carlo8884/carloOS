import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

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
    answer: 'Cosequin ASU Plus from Nutramax. The review lists ASU, glucosamine HCl, and chondroitin sulfate, an NASC seal, no prohibited ingredients for FEI or USEF, and a loading dose of 4–6 weeks. The printed price is $80–110 a month.',
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
        subtitle: 'An ASU joint pellet with the stronger published evidence, or a resveratrol pellet the review treats as a complement. Monthly prices below are the ones on the supplement review.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/smartpak/cosequin-asu-plus?s=reviews-cosequin-vs-equithrive-guide" label="Check price of Cosequin ASU Plus on SmartPak" />}
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
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
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
        <p>Prices below are the ones on the <Link href="/reviews/best-equine-supplements">supplement review</Link>. Cosequin ASU Plus is the joint-evidence pick. Equithrive Original Pellets are the resveratrol pick. <Link href="/reviews/ker-eo3-vs-equithrive-guide">KER EO-3 versus Equithrive</Link> is the omega-3 comparison, not this joint pair. The <Link href="/supplements/joint-supplements">joint-supplement guide</Link> is the ingredient ladder behind the Cosequin ranking.</p>
        <h2>What the review says about Cosequin ASU Plus</h2>
        <p>Cosequin ASU Plus is Best Joint Evidence and the winner. The actives are ASU, glucosamine HCl, and chondroitin sulfate. The review lists an NASC seal, Nutramax manufacturing, and no prohibited ingredients for FEI or USEF. A loading dose of 4–6 weeks is recommended, and that loading dose raises the first-month cost. The printed price is $80–110 a month. The cons say the price is the higher tier and that pellet palatability varies.</p>
        <h2>What the review says about Equithrive</h2>
        <p>Equithrive Original Pellets are Best Resveratrol. The active is trans-resveratrol. The review lists an NASC seal, a pelleted format, no prohibited ingredients for FEI or USEF, and University of Kentucky equine trials. The printed price is $45–65 a month. The review frames resveratrol as a complement to traditional joint ingredients, not a substitute, and says the evidence base is smaller than ASU and glucosamine. The common use it names is mild joint inflammation or support after an injection.</p>
        <h2>Who should buy which product</h2>
        <p>Buy Cosequin ASU Plus when the horse has diagnosed osteoarthritis or significant work-related joint loading and you want the product the review ranks on published evidence. Buy Equithrive when you want the lower monthly band and you are adding resveratrol beside another joint product, not instead of one. A single broad wellness tub is Platinum Performance on the same review, not either product here.</p>
        <p>The link above opens Cosequin ASU Plus on SmartPak, the same link as on the supplement review. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
