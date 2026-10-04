import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Holiday Leftovers and a Low-Fat Dog Food | Vets.co',
  description: 'Holiday leftovers are the pancreatitis surge already on the health page. Buy the low-fat food only after a veterinarian says the dog is ready.',
  path: '/reviews/holiday-leftovers-low-fat-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Holiday leftovers and a low-fat dog food',
  description: 'The holiday pancreatitis warning, and the low-fat food link already on that page.',
  url: 'https://vets.co/reviews/holiday-leftovers-low-fat-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'What causes the holiday surge the health page describes?',
    answer: 'Fatty leftovers. The pancreatitis page says owners should be especially careful around holidays, when fatty leftovers cause a predictable surge in cases. For a dog that has already had pancreatitis, prevention is a consistent low-fat diet and no fatty table scraps.',
  },
  {
    question: 'When should you buy the low-fat food?',
    answer: 'Only after a veterinarian has confirmed the dog is ready for a home low-fat plan. The food is the same class of consistent recovery diet the page already names. It is not a leftover buffet and not a one-off bland meal. It does not treat an acute episode.',
  },
  {
    question: 'Is that food a named prescription diet?',
    answer: 'No. The page is explicit that these household foods are not Hill’s i/d Low Fat, Royal Canin Gastrointestinal Low Fat, or Purina EN prescription products.',
  },
  {
    question: 'When do you go in instead of reordering food?',
    answer: 'If vomiting, belly pain, or refusal to eat returns, the instruction is to go in, not to reorder food. Typical signs on that page also include lethargy and sometimes diarrhea or fever, and a veterinarian has to confirm the diagnosis.',
  },
]

export default function HolidayLeftoversLowFatGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Holiday leftovers and a low-fat dog food',
        subtitle: 'The pancreatitis page already says fatty leftovers cause a predictable holiday surge. Buy that food only after a veterinarian has said the dog is ready for a home low-fat plan.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday leftovers', href: '/reviews/holiday-leftovers-low-fat-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Pancreatitis in dogs', href: '/health/pancreatitis-in-dogs' },
            { label: 'Holiday emergency visit', href: '/reviews/holiday-emergency-visit-guide' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/health/pancreatitis-in-dogs">pancreatitis page</Link> names a high-fat meal as the most recognized trigger, and then says many cases have no single cause. For a dog that has already had pancreatitis, prevention on that page is a consistent low-fat diet, no fatty table scraps, no rich treats, and a lean body weight. The holiday sentence is specific: owners should be especially careful around holidays, when fatty leftovers cause a predictable surge in cases.</p>
        <h2>When the low-fat food applies</h2>
        <p>The same page says household recovery-diet tools sit beside that advice only after a veterinarian has confirmed the dog is ready for a home low-fat plan. The low-fat digestive-care food is described as the same class of consistent recovery diet the page already names. It is not a leftover buffet and not a one-off bland meal. Lean low-fat treats are the substitute so bacon grease, holiday skin, and rich chews stay off the plate. A portion scale is the third tool on that page, and it stays there. None of them treats an acute episode. The page is explicit that these are not Hill&apos;s i/d Low Fat, Royal Canin Gastrointestinal Low Fat, or Purina EN prescription products.</p>
        <h2>What still means go in</h2>
        <p>Typical signs on that page are vomiting, loss of appetite, abdominal pain, lethargy, and sometimes diarrhea or fever. A painful dog may hunch or take a praying posture. Mild cases can look like a simple upset. Severe cases are a very sick, dehydrated dog. The page says the signs overlap with other diseases, so a veterinarian has to confirm the diagnosis. If vomiting, belly pain, or refusal to eat returns, the instruction is to go in, not to reorder food.</p>
        <AffiliateDisclosure variant="inline" siteId="vets-co" />
        <p>The link below searches for a low-fat digestive-care food, the same search as on the pancreatitis page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/low+fat+digestive+care+dog+food?s=reviews-holiday-leftovers-low-fat-guide">Browse low-fat digestive-care dog foods on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <h2>Save an address</h2>
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Save an address with this guide"
          subtitle="We store the address you enter. This form does not send email."
          ctaText="Save my address"
          source="reviews-holiday-leftovers-low-fat-guide"
        />
      </div>
    </ArticleLayout>
  )
}
