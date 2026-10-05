import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Cosequin DS vs Dasuquin | Dog.com',
  description: 'The joint review scores Dasuquin with MSM 9.2 and Cosequin DS 8.8. ASU in the formula, or the lower glucosamine price.',
  path: '/reviews/cosequin-vs-dasuquin-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Cosequin DS or Dasuquin',
  description: 'Dasuquin with MSM or Cosequin DS, using the scores and bottle prices on the joint-supplement review.',
  url: 'https://dog.com/reviews/cosequin-vs-dasuquin-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which supplement does the review pick for evidence?',
    answer: 'Nutramax Dasuquin with MSM, scored 9.2 and marked Best Evidence. The review lists ASU, glucosamine, chondroitin, and MSM, an NASC seal, a published JAVMA study, chewables or sprinkle capsules, and an onset of 4–6 weeks. The printed price is $40–70 for an 84-count.',
  },
  {
    question: 'When does the review point to Cosequin DS?',
    answer: 'As the lower-priced NASC glucosamine. Cosequin DS Maximum Strength scores 8.8. The review lists glucosamine and chondroitin, no ASU, moderate evidence, and $25–45 for a 120-count. It says some dogs do not respond, and that a step up to Dasuquin is reasonable if there is no visible change after 6 weeks.',
  },
  {
    question: 'Does either product replace a pain medication?',
    answer: 'No. The joint review says dogs with diagnosed osteoarthritis need veterinary management, typically an NSAID, and that these supplements do not replace pain medication. A limp is a veterinary visit first.',
  },
]

export default function CosequinVsDasuquinGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'Cosequin DS or Dasuquin',
        subtitle: 'Glucosamine and chondroitin, or the same base plus ASU and MSM. Scores and bottle prices below are the ones on the joint review.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/dasuquin+with+msm?s=reviews-cosequin-vs-dasuquin-guide" label="Check price of Dasuquin with MSM on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Cosequin vs Dasuquin', href: '/reviews/cosequin-vs-dasuquin-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Joint supplements', href: '/reviews/best-joint-supplements' },
            { label: 'Senior dog food', href: '/reviews/best-dog-food-senior' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>Prices and scores below are the ones on the <Link href="/reviews/best-joint-supplements">joint-supplement review</Link>. Dasuquin with MSM ranks above Cosequin DS Maximum Strength. Fish oil on that review is a different product.</p>
        <h2>What the review says about Dasuquin</h2>
        <p>Dasuquin with MSM is Best Evidence, score 9.2, and the winner. The active ingredients are avocado/soybean unsaponifiables, glucosamine, chondroitin, and MSM. The review lists an NASC seal, a published JAVMA force-plate study, chewables or sprinkle capsules, and an onset of 4–6 weeks. The printed price is $40–70 for an 84-count. The cons say it costs more than basic glucosamine, the wait for an effect is long, and it is not a substitute for NSAIDs in severe arthritis.</p>
        <h2>What the review says about Cosequin DS</h2>
        <p>Cosequin DS is Best Budget Glucosamine, score 8.8. The actives are glucosamine and chondroitin. It is NASC certified. Evidence is listed as moderate, and the review says the difference from Dasuquin is the missing ASU. The printed price is $25–45 for a 120-count. The review calls it a reasonable starting point, and says a dog with no visible improvement after 6 weeks can step up to Dasuquin.</p>
        <p>The same review says a dog that is limping needs a veterinary exam before either bottle. Supplements on that page do not replace pain medication.</p>
        <h2>Who should buy which bottle</h2>
        <p>Buy Dasuquin when the review’s evidence ranking is the reason and the higher bottle price is acceptable. Buy Cosequin DS when the lower NASC price is the constraint, and plan the 6-week check the review describes. Neither bottle is the fish-oil product on that page, and neither is a pain medication.</p>
        <p>The link above searches Amazon for Dasuquin with MSM, the same search as on the joint review. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
