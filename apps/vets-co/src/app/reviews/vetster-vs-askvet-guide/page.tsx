import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vetster vs AskVet Telehealth | Vets.co',
  description: 'Pay per video visit versus a $30 chat subscription. Prices and limits are the telehealth cards. Neither replaces an emergency clinic.',
  path: '/reviews/vetster-vs-askvet-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Vetster vs AskVet',
  description: 'Vetster for video and specialists. AskVet for unlimited chat. Not for emergencies.',
  url: 'https://vets.co/reviews/vetster-vs-askvet-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which service does the telehealth page pick for video?',
    answer: 'Vetster. The card lists video and chat, licensed veterinarians, specialists, pay-per-consult pricing of $50–100, no monthly fee, and an editorial score of 9.2. Prescriptions depend on the jurisdiction.',
  },
  {
    question: 'What does the AskVet card include at $30 a month?',
    answer: 'Unlimited chat, a typical wait under five minutes, general practice rather than specialists, and limited prescriptions. There is no video. The score on the card is 8.8.',
  },
  {
    question: 'Can either service replace the emergency clinic?',
    answer: 'No. The telehealth page says pale or blue gums, breathing trouble, collapse, suspected poisoning, a severe injury, or a cat that cannot urinate needs in-person emergency care. Use the ER versus clinic tool if you are unsure of the setting.',
  },
]

export default function VetsterVsAskvetGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Vetster vs AskVet',
        subtitle: 'One is a visit you pay for when you need video. The other is a monthly chat subscription. The prices are the ones on the telehealth cards. This is not emergency care.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Telehealth comparison', href: '/telehealth' },
            { label: 'ER vs clinic', href: '/tools/er-vs-clinic' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/telehealth">telehealth comparison</Link> ranks Vetster, AskVet, and Chewy Connect. Vetster versus AskVet is the choice between paying for a visit and paying for a month of chat. If the pet is in crisis, neither card applies. The page lists pale or blue gums, breathing difficulty, collapse, suspected poisoning, severe injury, and a cat that cannot urinate as reasons to go to an emergency clinic. The <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link> is the setting check. This guide is for a question that can wait for a screen.</p>
        <h2>Vetster</h2>
        <p>Vetster is the best-overall card, scored 9.2. Consults are video and chat. The card says veterinarians are licensed in the owner&apos;s jurisdiction, which is what makes a prescription valid where state rules allow. Specialists are listed, including behavior, dermatology, and internal medicine. You pay per consult, $50–100, with no monthly fee. Typical wait is under 15 minutes, and the card says peak hours can run longer. The con is the higher price per visit compared with a subscription.</p>
        <h2>AskVet</h2>
        <p>AskVet is the subscription card, scored 8.8. The price on the card is $30 a month for unlimited chat. Typical wait is under five minutes. There is no video, specialists are general practice, and prescriptions are limited. The review says that is a reasonable trade when the questions are frequent: a new puppy, a senior pet, several pets, or a chronic condition you already understand and need to ask about. It is a weak substitute when you needed someone to look at the animal.</p>
        <h2>Who should use which</h2>
        <p>Use Vetster when you want video, a specialist, or a prescription the card says is jurisdiction-dependent. Use AskVet when the questions are frequent and chat is enough, and $30 a month is cheaper than repeating a $50–100 visit. If you already pay for Chewy+, the third card on the telehealth page is Chewy Connect, included with that membership, and it is a poor reason to join Chewy+ by itself. Chewy is not the comparison this page is settling.</p>
        <AffiliateDisclosure variant="inline" siteId="vets-co" />
        <p>The hop is the Vetster path already on the telehealth page, for the video visit.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/vetster/telehealth?s=reviews-vetster-vs-askvet-guide">Visit Vetster →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Telehealth comparison update list"
          subtitle="Leave an address to be on the list for changes to the Vetster versus AskVet note on this page."
          ctaText="Save my address"
          source="reviews-vetster-vs-askvet-guide"
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
