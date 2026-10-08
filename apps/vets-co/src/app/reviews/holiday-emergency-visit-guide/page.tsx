import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, InlinePartnerQuote, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Why a Holiday Emergency Visit Costs More | Vets.co',
  description: 'Emergency hospitals already staff holidays. The quote link is Trupanion on the insurance review, bought before a problem.',
  path: '/reviews/holiday-emergency-visit-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Why a holiday emergency visit costs more',
  description: 'Holiday staffing is already part of the emergency-cost explanation. The quote link is the one on the insurance review.',
  url: 'https://vets.co/reviews/holiday-emergency-visit-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Why does the cost guide include holidays?',
    answer: 'An emergency hospital keeps veterinarians and technicians on duty overnight, on weekends, and on holidays, with oxygen, blood products, and monitoring ready. A holiday does not create a separate fee schedule on that page. It is already inside the round-the-clock sentence.',
  },
  {
    question: 'Which problems should not wait on cost?',
    answer: 'Difficulty breathing, severe bleeding, collapse, inability to urinate, or suspected bloat means go. The costs guide says not to delay a real emergency over cost. Financial options are discussed once the pet is stable.',
  },
  {
    question: 'What does that page say insurance covers?',
    answer: 'Insurance bought before any condition arises covers much of an emergency after the deductible. A savings fund covers the deductible, the unreimbursed share, and the deposit. This guide does not reprint a dollar figure and does not invent one.',
  },
  {
    question: 'Is a quote link emergency care?',
    answer: 'No. The link below opens the Trupanion quote from the insurance review. If a pet is already in crisis, the costs guide says go. A quote form is not emergency care.',
  },
]

export default function HolidayEmergencyVisitGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Why a holiday emergency visit costs more',
        subtitle: 'The emergency-cost guide already includes holidays in the reason an ER visit costs more than a daytime appointment. The only shop link here is the Trupanion quote on the insurance review.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday emergency visit', href: '/reviews/holiday-emergency-visit-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'November and December costs', href: '/reviews/november-december-gift-guide' },
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Emergency vet costs', href: '/guides/emergency-vet-costs' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Holiday leftovers', href: '/reviews/holiday-leftovers-low-fat-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/guides/emergency-vet-costs">emergency vet costs guide</Link> says an emergency hospital is a different operation from a general practice. It keeps veterinarians and technicians on duty overnight, on weekends, and on holidays, and it keeps oxygen, blood products, and monitoring ready. That standing capacity is the cost. A holiday does not create a separate fee schedule on that page. It is already inside the round-the-clock sentence.</p>
        <h2>What the page says to do first</h2>
        <p>The same guide tells owners not to delay a real emergency over cost. Difficulty breathing, severe bleeding, collapse, inability to urinate, or suspected bloat means go. Financial options are discussed once the pet is stable. For a case that is not immediately life-threatening, the page says the hospital provides a written plan and an estimate, often as a range, and that a deposit before treatment is standard. This guide does not reprint a dollar figure from any other page and does not invent one.</p>
        <h2>Where a quote fits</h2>
        <p>Preparation on that page is insurance bought before any condition arises, which it says covers much of an emergency after the deductible, plus a savings fund for the deductible, the unreimbursed share, and the deposit. The <Link href="/reviews/best-pet-insurance">pet insurance review</Link> is where the plan comparison lives. Its primary quote link is Trupanion. Nothing here adds a premium, a reimbursement percentage, or a holiday exclusion. If a pet is already in crisis, the costs guide says go. A quote form is not emergency care.</p>
        <HopDisclosure siteId="vets-co" href="/go/trupanion/home?s=reviews-holiday-emergency-visit-guide" showQuietNote={false} />
        <p><InlinePartnerQuote href="/go/trupanion/home?s=reviews-holiday-emergency-visit-guide" label="Get a Trupanion quote →" /></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-holiday-emergency-visit-guide"
          checklist={[
            'Difficulty breathing, severe bleeding, collapse, inability to urinate, or suspected bloat means go.',
            'If a pet is already in crisis, the costs guide says go.',
            'A quote form is not emergency care.',
            'Its primary quote link is Trupanion.',
            'Get a Trupanion quote',
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
