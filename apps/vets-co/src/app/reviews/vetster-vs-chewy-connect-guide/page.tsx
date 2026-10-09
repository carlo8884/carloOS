import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'

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
    answer: 'Vetster. The telehealth page on this site lists video, chat, and specialists. Vetster’s help page, updated 2025-12-18 and fetched 2026-10-08, says it verifies an active license in the veterinarian’s jurisdiction before they go live. This page does not publish a wait time.',
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
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Vetster is the top pick for a video visit paid per consult, because the telehealth page lists veterinarians and specialists.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/vetster/telehealth?s=reviews-vetster-vs-connect-guide" label="Open Vetster" />
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
          <LastUpdated date="2026-10-09" />
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
        <p>Vetster is Best Overall and the winner. The telehealth page on this site lists video and chat. Vetster’s help page, updated 2025-12-18 and fetched 2026-10-08, says it verifies an active license in the veterinarian’s jurisdiction before they go live. The telehealth page lists specialists, including behavior, dermatology, and internal medicine. This page does not publish a wait time. You pay per visit. The page says that per-visit figure is higher than a chat plan.</p>
        <p>Single visits start at $102. Plus is $12/month, billed annually.</p>
        <h2>What the page says about Chewy Connect</h2>
        <p>Chewy Connect with a Vet is Best for Chewy Customers. Free chat is with a veterinary technician and comes with a Chewy account. A prescription from the licensed-vet video visit can be filled through Chewy and shipped. Specialist access is thinner than Vetster.</p>
        <p>The licensed-vet video visit is $49.99.</p>
        <p>If you are deciding between a video visit, a clinic, and an emergency hospital, use the <Link href="/tools/er-vs-clinic">ER versus clinic tool</Link>. Neither service on this page replaces emergency care.</p>
        <h2>Who should open which service</h2>
        <p>Open Vetster when you want a licensed veterinarian on video, possibly a specialist, and you do not want a monthly fee. Open Chewy Connect when you already pay for Chewy+ and you want the pharmacy tied to that account. If the pet is in crisis, go to an emergency clinic. Do not wait on a video queue.</p>
        <p>Vetster’s help page, updated 2025-12-18 and fetched 2026-10-08, says it verifies an active license in the veterinarian’s jurisdiction before they go live.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Vetster</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Chewy Connect</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Best Overall, and the winner</td>
                <td className="p-3">Best for Chewy Customers</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Format</th>
                <td className="p-3">Video and chat. You pay per visit</td>
                <td className="p-3">Free chat with a veterinary technician and a Chewy account. The licensed-vet video visit is separate</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Who you reach</th>
                <td className="p-3">Verifies an active license in the veterinarian’s jurisdiction before they go live. Specialists include behavior, dermatology, and internal medicine</td>
                <td className="p-3">A veterinary technician for free chat. Specialist access is thinner than Vetster</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Price line</th>
                <td className="p-3">The per-visit figure is higher than a chat plan</td>
                <td className="p-3">The licensed-vet video price is the one printed on this page</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Use it when</th>
                <td className="p-3">You want a licensed veterinarian on video, possibly a specialist, and you do not want a monthly fee</td>
                <td className="p-3">You already pay for Chewy+ and you want the pharmacy tied to that account</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Vetster help article", url: "https://help.vetster.com/en/articles/13184184-how-are-licenses-verified", publisher: "Vetster" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
