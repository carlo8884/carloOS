import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, BelowFoldPhoto, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'November and December Pet Care Costs | Vets.co',
  description: 'November and December costs from the insurance and telehealth reviews, grouped by the monthly and per-visit bands those cards already print.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'November and December pet care costs',
  description: 'Insurance and telehealth prices copied from the reviews. These are not toys, and a printed band is not a quote.',
  url: 'https://vets.co/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Is this a list of holiday toys?',
    answer: 'No. Vets.co reviews insurance and telehealth, not toys. The bands below are the ones already printed on those cards. A printed band is not a quote for a specific pet.',
  },
  {
    question: 'Which card prints the lower monthly band?',
    answer: 'AskVet, Healthy Paws, Embrace, and Trupanion: see the carrier\'s current terms. Single visits start at $102.',
  },
  {
    question: 'What about a holiday emergency visit?',
    answer: 'The holiday emergency page is the one that explains why a holiday visit can cost more. This page does not replace that explanation, and none of these hops is emergency care.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'November and December pet care costs',
        subtitle: 'These are not toys. The bands are the ones already printed on the insurance review and the telehealth page. A band is not a quote.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'November and December costs', href: PATH },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Telehealth', href: '/telehealth' },
            { label: 'Holiday emergency visit', href: '/reviews/holiday-emergency-visit-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <p>People ask what to buy a pet in November and December. The reviews on this site are not toy reviews. They price insurance and remote visits. The <Link href="/reviews">reviews hub</Link> is where those cards live. This page groups the printed bands so a reader can see a monthly chat fee next to a monthly premium and a per-visit video fee. It does not enroll anyone, and it does not turn a band into a quote.</p>
        <p>Holiday leftovers and holiday emergency bills already have their own pages. Fatty leftovers stay on the <Link href="/reviews/holiday-leftovers-low-fat-guide">leftovers guide</Link>. Why a holiday emergency visit costs more stays on the <Link href="/reviews/holiday-emergency-visit-guide">emergency-visit guide</Link>. None of the links below is a substitute for an in-person emergency.</p>
        <h2>Printed monthly bands</h2>
        <p>AskVet, Healthy Paws, Embrace, and Trupanion do not get a flat monthly figure on this page. See the carrier&apos;s current terms. A quote still depends on the pet and the zip code.</p>
        <h2>Printed per-visit band</h2>
        <p>Single visits start at $102. Plus is $12/month, billed annually. The licensed-vet video visit is $49.99.</p>
        <h2>Who should open which printed band</h2>
        <p>Open the AskVet card when the question is a chat subscription. Open Vetster when the question is a video visit paid per consult. Open Healthy Paws, Embrace, or Trupanion when the question is an accident-and-illness policy. Read the waiting period and the deductible on the insurance review before you treat any of those bands as the price you will pay.</p>
        <div className="overflow-x-auto max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th className="p-3 font-bold text-brand-dark">Printed band</th>
                <th className="p-3 font-bold text-brand-dark">Card</th>
                <th className="p-3 font-bold text-brand-dark">Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="p-3">See the carrier&apos;s current terms</td>
                <td className="p-3 font-bold">AskVet<TableShopLink href={`/go/askvet/telehealth?s=${SOURCE}`} product="AskVet" /></td>
                <td className="p-3"><Link href="/telehealth">Telehealth page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">See the carrier&apos;s current terms</td>
                <td className="p-3 font-bold">Healthy Paws<TableShopLink href={`/go/healthy-paws/home?s=${SOURCE}`} product="Healthy Paws" /></td>
                <td className="p-3"><Link href="/reviews/best-pet-insurance">Insurance review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">See the carrier&apos;s current terms</td>
                <td className="p-3 font-bold">Embrace<TableShopLink href={`/go/embrace/home?s=${SOURCE}`} product="Embrace" /></td>
                <td className="p-3"><Link href="/reviews/best-pet-insurance">Insurance review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">Single visits start at $102</td>
                <td className="p-3 font-bold">Vetster<TableShopLink href={`/go/vetster/telehealth?s=${SOURCE}`} product="Vetster" /></td>
                <td className="p-3"><Link href="/telehealth">Telehealth page</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">See the carrier&apos;s current terms</td>
                <td className="p-3 font-bold">Trupanion<TableShopLink href={`/go/trupanion/home?s=${SOURCE}`} product="Trupanion" /></td>
                <td className="p-3"><Link href="/reviews/best-pet-insurance">Insurance review</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-07" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} includeSchema={false} />
        <BelowFoldPhoto siteId="vets-co" />
      </div>
    </ArticleLayout>
  )
}
