import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'AskVet vs Chewy Connect | Vets.co',
  description: 'AskVet is a $30 chat subscription. Chewy Connect is included with Chewy+. Neither replaces an emergency clinic.',
  path: '/reviews/askvet-vs-chewy-connect-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'AskVet or Chewy Connect',
  description: 'The telehealth page already scores AskVet for a chat subscription and Chewy Connect for Chewy customers.',
  url: 'https://vets.co/reviews/askvet-vs-chewy-connect-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does the telehealth page say AskVet includes?',
    answer: 'AskVet scores 8.8 and is marked Best Subscription. The page lists chat only, unlimited consultations at $30 a month, a typical wait under 5 minutes, general practice rather than specialists, and limited prescriptions.',
  },
  {
    question: 'What does Chewy Connect include?',
    answer: 'Chewy Connect with a Vet scores 8.4. The page says it is included with Chewy+ at $19.99 a month, which also covers free shipping and other benefits. Consults are video and chat, hours are extended, and a prescription can be filled through Chewy’s pharmacy. The page says it is less useful if you do not already want Chewy+.',
  },
  {
    question: 'Can either service replace the emergency clinic?',
    answer: 'No. The telehealth page says a crisis needs an emergency clinic, not a video or chat appointment. Vetster, the overall pick on that page, is a separate comparison.',
  },
]

export default function AskVetVsChewyConnectGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'AskVet or Chewy Connect',
        subtitle: 'Unlimited chat for a flat monthly fee, or telehealth included with a Chewy+ membership. Prices below are the ones on the telehealth page.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/askvet/telehealth?s=reviews-askvet-vs-connect-guide" label="Visit AskVet" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'AskVet vs Chewy Connect', href: '/reviews/askvet-vs-chewy-connect-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Telehealth services', href: '/telehealth' },
            { label: 'ER vs clinic', href: '/tools/er-vs-clinic' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>The <Link href="/telehealth">telehealth page</Link> already scores AskVet as the subscription and Chewy Connect with a Vet for people who already use Chewy. Those scores are editorial scores, not shopper star ratings. Vetster is the overall service on that page, and it is a separate comparison.</p>
        <h2>What the page says about AskVet</h2>
        <p>AskVet is Best Subscription, score 8.8. Consults are chat only, with no video exam. The printed price is $30 a month for unlimited consultations. A typical wait is under 5 minutes. Specialists are general practice only. Prescriptions are limited. The page says the subscription fits frequent questions, such as a new puppy, a senior pet, several pets, or a chronic condition, and that chat limits how much of a physical problem can be assessed.</p>
        <h2>What the page says about Chewy Connect</h2>
        <p>Chewy Connect with a Vet is Best for Chewy Customers, score 8.4. It is included with Chewy+ at $19.99 a month, which the page also ties to free shipping and other membership benefits. Consults are video and chat, during extended hours. A prescription from Connect can be filled through Chewy and shipped. The page says the telehealth access is a bonus on a membership you already want for shipping, and that specialist access is thinner than Vetster.</p>
        <p>If you are deciding between a video visit, a clinic, and an emergency hospital, use the <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link>. Neither service on this page replaces emergency care.</p>
        <h2>Who should open which service</h2>
        <p>Open AskVet when you want unlimited chat for a flat $30 and you do not need video. Open Chewy Connect when you already pay for Chewy+ and you want the pharmacy tied to that account. If the pet is in crisis, go to an emergency clinic. Do not wait on a chat queue.</p>
        <p>The button above opens AskVet, the same link as on the telehealth page. The price you see there is the service’s price, not a figure invented on this page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
