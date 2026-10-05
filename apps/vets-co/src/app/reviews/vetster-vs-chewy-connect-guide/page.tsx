import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vetster Video vs Chewy Connect | Vets.co',
  description: 'Vetster is pay-per-visit video. Chewy Connect is included with Chewy+. Neither replaces an emergency clinic.',
  path: '/reviews/vetster-vs-chewy-connect-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Vetster video or Chewy Connect',
  description: 'Vetster for video visits, or Chewy Connect for people who already shop at Chewy. Scores are on the telehealth page.',
  url: 'https://vets.co/reviews/vetster-vs-chewy-connect-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which service does the telehealth page pick overall?',
    answer: 'Vetster, scored 9.2. The page lists video and chat, licensed veterinarians, specialists, a typical wait under 15 minutes, pay-per-consult pricing of $50–100, and no monthly fee. Prescriptions depend on the jurisdiction.',
  },
  {
    question: 'What does Chewy Connect include?',
    answer: 'Chewy Connect with a Vet scores 8.4. The page says it is included with Chewy+ at $19.99 a month, which also covers free shipping and other benefits. Consults are video and chat, hours are extended, and a prescription can be filled through Chewy’s pharmacy. The page says it is less useful if you do not already want Chewy+.',
  },
  {
    question: 'Can either service replace the emergency clinic?',
    answer: 'No. The telehealth page says a crisis needs an emergency clinic, not a video appointment. Use the ER versus clinic tool if you are unsure which setting fits.',
  },
]

export default function VetsterVsChewyConnectGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Vetster video or Chewy Connect',
        subtitle: 'Pay per video visit, or telehealth included with a Chewy+ membership. Prices and limits below are the ones on the telehealth page.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/vetster/telehealth?s=reviews-vetster-vs-connect-guide" label="Visit Vetster" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Vetster vs Chewy Connect', href: '/reviews/vetster-vs-chewy-connect-guide' },
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
        <p>Scores below are the ones on the <Link href="/telehealth">telehealth page</Link>. Vetster is the overall service. Chewy Connect with a Vet is for people who already use Chewy. <Link href="/reviews/askvet-vs-chewy-connect-guide">AskVet versus Chewy Connect</Link> is the chat-subscription comparison, not this video visit.</p>
        <h2>What the page says about Vetster</h2>
        <p>Vetster is Best Overall, score 9.2, and the winner. Consults are video and chat. The page says veterinarians are licensed where the owner is located, so a prescription can be valid, and that specialists are available, including behavior, dermatology, and internal medicine. A typical wait is under 15 minutes, and it can run longer at peak times. You pay per consult. The printed price is $50–100 per consultation, with no monthly fee. The page says that per-visit price is higher than a subscription.</p>
        <h2>What the page says about Chewy Connect</h2>
        <p>Chewy Connect with a Vet is Best for Chewy Customers, score 8.4. It is included with Chewy+ at $19.99 a month, which the page also ties to free shipping and other membership benefits. Consults are video and chat, during extended hours. A prescription from Connect can be filled through Chewy and shipped. The page says the telehealth access is a bonus on a membership you already want for shipping, and that specialist access is thinner than Vetster.</p>
        <p>If you are deciding between a video visit, a clinic, and an emergency hospital, use the <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link>. Neither service on this page replaces emergency care.</p>
        <h2>Who should open which service</h2>
        <p>Open Vetster when you want a licensed veterinarian on video, possibly a specialist, and you do not want a monthly fee. Open Chewy Connect when you already pay for Chewy+ and you want the pharmacy tied to that account. If the pet is in crisis, go to an emergency clinic. Do not wait on a video queue.</p>
        <p>The link above opens Vetster, the same link as on the telehealth page. The price you see there is the service’s price.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
