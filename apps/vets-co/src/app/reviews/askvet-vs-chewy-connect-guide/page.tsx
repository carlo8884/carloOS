import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'AskVet Chat vs Chewy Connect | Vets.co',
  description: 'AskVet does not print a flat monthly chat price. The licensed-vet video visit is $49.99. Neither is emergency care.',
  path: '/reviews/askvet-vs-chewy-connect-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'AskVet chat or Chewy Connect',
  description: 'AskVet for a chat subscription, or Chewy Connect for people who already shop at Chewy. The notes are on the telehealth page.',
  url: 'https://vets.co/reviews/askvet-vs-chewy-connect-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does the telehealth page say AskVet includes?',
    answer: 'AskVet is marked Best Subscription. The page lists chat only. See the carrier\'s current terms for a monthly chat price. General practice rather than specialists, and limited prescriptions. This page does not publish a wait time.',
  },
  {
    question: 'What does Chewy Connect include?',
    answer: 'Free chat is with a veterinary technician and comes with a Chewy account. A licensed-vet video visit is separate and is not offered in every state. A prescription from that visit can be filled through Chewy.',
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
        title: 'AskVet chat or Chewy Connect',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">AskVet is the top pick for unlimited chat at a flat monthly fee, and the shop link searches Chewy Connect, the membership alternative.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon-brand/chewy+connect+with+a+vet?s=reviews-askvet-vs-connect-guide" label="Browse Chewy Connect on Amazon" />
          <HopDisclosure siteId="vets-co" href="/go/amazon-brand/chewy+connect+with+a+vet?s=reviews-askvet-vs-connect-guide" />
        </div>
        </>
      }
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
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-askvet-vs-connect-guide"
          checklist={[
            "The page says it is less useful if you do not already want Chewy+.",
            "The telehealth page says a crisis needs an emergency clinic, not a video or chat appointment.",
            "Vetster, the overall pick on that page, is a separate comparison.",
            "Chewy Connect with a Vet is for people who already use Chewy.",
            "Chewy Connect with a Vet is Best for Chewy Customers.",
            "Consults are video and chat, during extended hours.",
          ]}
        />
        <p>AskVet is the subscription. Chewy Connect with a Vet is for people who already use Chewy. <Link href="/reviews/vetster-vs-chewy-connect-guide">Vetster versus Chewy Connect</Link> is the video-visit comparison, not this chat subscription.</p>
        <h2>What the page says about AskVet</h2>
        <p>AskVet is Best Subscription. Chat only, with no video. See the carrier&apos;s current terms for a monthly chat price. This page does not publish a wait time. Specialists are general practice only. Prescriptions are limited. The page says the subscription fits frequent questions, such as a new puppy, a senior pet, several pets, or a chronic condition, and that chat limits how much of a physical problem can be assessed.</p>
        <h2>What the page says about Chewy Connect</h2>
        <p>Chewy Connect with a Vet is Best for Chewy Customers. Free chat is with a veterinary technician and comes with a Chewy account. A prescription from the licensed-vet video visit can be filled through Chewy and shipped. Specialist access is thinner than Vetster.</p>
        <p>The licensed-vet video visit is $49.99.</p>
        <p>If you are deciding between a video visit, a clinic, and an emergency hospital, use the <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link>. Neither service on this page replaces emergency care.</p>
        <h2>Who should open which service</h2>
        <p>Open AskVet when you want chat and you do not need video. See the carrier&apos;s current terms for the monthly price. Open Chewy Connect when you already pay for Chewy+ and you want the pharmacy tied to that account. If the pet is in crisis, go to an emergency clinic. Do not wait on a chat queue.</p>
        <p>The link above searches Amazon for Chewy Connect. AskVet is the chat subscription described on the telehealth page.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
