import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vetster Video vs Chewy Connect | Vets.co',
  description: 'Vetster single visits start at $102. The licensed-vet video visit is $49.99. Neither is emergency care.',
  path: '/reviews/vetster-vs-chewy-connect-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Vetster video or Chewy Connect',
  description: 'Vetster for video visits, or Chewy Connect for people who already shop at Chewy.',
  url: 'https://vets.co/reviews/vetster-vs-chewy-connect-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which service does the telehealth page pick overall?',
    answer: 'Vetster. The page lists video and chat, licensed veterinarians, and specialists. This page does not publish a wait time. Prescriptions depend on the jurisdiction.',
  },
  {
    question: 'What does Chewy Connect include?',
    answer: 'Free chat is with a veterinary technician and comes with a Chewy account. A licensed-vet video visit is separate and is not offered in every state. A prescription from that visit can be filled through Chewy.',
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
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Vetster is the top pick for a video visit paid per consult, and the shop link searches Chewy Connect, the membership alternative.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon-brand/chewy+connect+with+a+vet?s=reviews-vetster-vs-connect-guide" label="Browse Chewy Connect on Amazon" />
          <HopDisclosure siteId="vets-co" href="/go/amazon-brand/chewy+connect+with+a+vet?s=reviews-vetster-vs-connect-guide" />
        </div>
        </>
      }
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
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-vetster-vs-connect-guide"
          checklist={[
            "The page says it is less useful if you do not already want Chewy+.",
            "The telehealth page says a crisis needs an emergency clinic, not a video appointment.",
            "Use the ER versus clinic tool if you are unsure which setting fits.",
            "Chewy Connect with a Vet is for people who already use Chewy.",
            "This page does not publish a wait time.",
            "The page says that per-visit price is higher than a subscription.",
          ]}
        />
        <p>Vetster is the overall service. Chewy Connect with a Vet is for people who already use Chewy. <Link href="/reviews/askvet-vs-chewy-connect-guide">AskVet versus Chewy Connect</Link> is the chat-subscription comparison, not this video visit.</p>
        <h2>What the page says about Vetster</h2>
        <p>Vetster is Best Overall and the winner. Consults are video and chat. The page says veterinarians are licensed where the owner is located, so a prescription can be valid, and that specialists are available, including behavior, dermatology, and internal medicine. This page does not publish a wait time. You pay per visit. The page says that per-visit figure is higher than a chat plan.</p>
        <p>Single visits start at $102. Plus is $12/month, billed annually.</p>
        <h2>What the page says about Chewy Connect</h2>
        <p>Chewy Connect with a Vet is Best for Chewy Customers. Free chat is with a veterinary technician and comes with a Chewy account. A prescription from the licensed-vet video visit can be filled through Chewy and shipped. Specialist access is thinner than Vetster.</p>
        <p>The licensed-vet video visit is $49.99.</p>
        <p>If you are deciding between a video visit, a clinic, and an emergency hospital, use the <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link>. Neither service on this page replaces emergency care.</p>
        <h2>Who should open which service</h2>
        <p>Open Vetster when you want a licensed veterinarian on video, possibly a specialist, and you do not want a monthly fee. Open Chewy Connect when you already pay for Chewy+ and you want the pharmacy tied to that account. If the pet is in crisis, go to an emergency clinic. Do not wait on a video queue.</p>
        <p>The link above searches Amazon for Chewy Connect. Vetster is the video visit described on the telehealth page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
