import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { liveAnchorHref } from '@carloOS/config/affiliate-hop'
import { ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Vetster vs AskVet Telehealth | Vets.co',
  description: 'Vetster single visits start at $102. AskVet does not print a flat monthly chat price. Neither is emergency care.',
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
    answer: 'Vetster. The review lists video and chat, licensed veterinarians, and specialists. Prescriptions depend on the jurisdiction. The single-visit figure is on the telehealth card.',
  },
  {
    question: 'What does the AskVet plan include?',
    answer: 'The current AskVet page does not print a flat monthly chat price. See the carrier\'s current terms. There is no video. Prescriptions are limited.',
  },
  {
    question: 'Can either service replace the emergency clinic?',
    answer: 'No. The telehealth page says pale or blue gums, breathing trouble, collapse, suspected poisoning, a severe injury, or a cat that cannot urinate needs in-person emergency care. Use the ER versus clinic tool if you are unsure of the setting.',
  },
]

export default function VetsterVsAskvetGuidePage() {
  const visitHref = '/go/vetster/telehealth?s=reviews-vetster-vs-askvet-guide'
  const visit = liveAnchorHref(visitHref)
  return (
    <ArticleLayout
      priceAsOf="2026-10-07"
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Vetster vs AskVet',
        subtitle: 'One is a visit you pay for when you need video. The other is a monthly chat subscription. The prices are the ones on the telehealth page. This is not emergency care.',
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
        <p>The <Link href="/telehealth">telehealth comparison</Link> ranks Vetster, AskVet, and Chewy Connect. Vetster versus AskVet is the choice between paying for a visit and paying for a month of chat. If the pet is in crisis, neither policy applies. The page lists pale or blue gums, breathing difficulty, collapse, suspected poisoning, severe injury, and a cat that cannot urinate as reasons to go to an emergency clinic. The <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link> is the setting check. This guide is for a question that can wait for a screen.</p>
        <h2>Vetster</h2>
        <p>Vetster is the best overall pick. Consults are video and chat. Vetster&apos;s help article, updated 2025-12-18, says it verifies an active license in the veterinarian&apos;s jurisdiction before they go live (<span className="break-all">https://help.vetster.com/en/articles/13184184-how-are-licenses-verified</span>). It does not say the veterinarian is licensed where the owner is, or that a prescription is therefore valid. Specialists are listed, including behavior, dermatology, and internal medicine. This page does not publish a wait time. The con is a higher per-visit figure than a chat plan.</p>
        <p>Single visits start at $102. Plus is $12/month, billed annually.</p>
        <h2>AskVet</h2>
        <p>AskVet is the subscription option. See the carrier&apos;s current terms for a monthly chat price. The current askvet.app pages do not print a visit type. Specialists are listed as general practice, and prescriptions are limited. The review says that is a reasonable trade when the questions are frequent: a new puppy, a senior pet, several pets, or a chronic condition you already understand and need to ask about. It is a weak substitute when you needed someone to look at the animal.</p>
        <h2>Who should use which</h2>
        <p>Use Vetster when you want video, a specialist, or a prescription the review says is jurisdiction-dependent. Use AskVet when the questions are frequent and chat is enough. See the carrier&apos;s current terms before comparing a monthly chat price with a single visit. Chewy lists the licensed-vet video price on the telehealth page. Chewy is not the comparison this page is settling.</p>
        <HopDisclosure siteId="vets-co" href={visitHref} showQuietNote={false} />
        <p>The video visit stays on this page as a note until that partner ID is set. It is not emergency care.</p>
        {visit ? (
          <p><a className="font-semibold text-brand-primary" href={visit} rel="sponsored noopener">Visit Vetster →</a></p>
        ) : (
          <p><Link href="/telehealth" className="font-semibold text-brand-primary">Compare telehealth services →</Link></p>
        )}
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-vetster-vs-askvet-guide"
          checklist={[
            'Use Vetster when you want video, a specialist, or a prescription the review says is jurisdiction-dependent.',
            'Single visits start at $102. Plus is $12/month, billed annually. AskVet: see the carrier\'s current terms.',
            'The licensed-vet video visit is $49.99.',
            'Visit Vetster',
          ]}
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
