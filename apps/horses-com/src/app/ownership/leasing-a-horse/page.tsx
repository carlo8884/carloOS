import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Leasing a Horse — Full and Partial Leases Explained",
  description:
    "Reference guide to leasing a horse: what a lease is, full vs partial (half) leases, on-site vs off-site, the lease agreement, costs, and pros and cons.",
  path: '/ownership/leasing-a-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Leasing a Horse — Full and Partial Leases Explained",
  description:
    "Reference guide to leasing a horse: what a lease is, full vs partial (half) leases, on-site vs off-site, the lease agreement, costs, and pros and cons.",
  url: 'https://horses.com/ownership/leasing-a-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a full and a partial lease?",
    answer:
      "In a full lease the lessee has the horse essentially to themselves and usually covers all or most of its costs, almost like temporary ownership. In a partial or half lease, the lessee rides on certain agreed days and shares the costs proportionally with the owner or other sharers, making it a cheaper way to ride regularly without taking on the whole horse.",
    answerText:
      "A full lease gives the lessee the horse to themselves and most of its costs, like temporary ownership; a partial (half) lease shares riding days and costs with the owner or others.",
  },
  {
    question: "Why lease a horse instead of buying one?",
    answer:
      "Leasing lets a rider ride regularly and experience the responsibilities of ownership at lower cost and risk, with the flexibility to walk away at the end of the term. It is an excellent stepping stone for testing whether you are ready to buy, and it avoids the full purchase price and the open-ended commitment of owning outright.",
    answerText:
      "Leasing offers regular riding and a taste of ownership at lower cost and risk, with flexibility to end the term. It is a great way to test readiness to buy without the full commitment.",
  },
  {
    question: "Do I need a written lease agreement?",
    answer:
      "Yes -- a clear written lease agreement is essential and prevents most disputes. It should define the term and fee, exactly which costs each party pays, the permitted use and who may ride, how veterinary decisions and emergencies are handled and paid for, insurance and liability, and the conditions for ending the lease early.",
    answerText:
      "Yes -- a written agreement is essential. It should cover the term, fee, who pays which costs, permitted use, emergency and vet decisions, insurance and liability, and how to end the lease.",
  },
]

export default function LeasingHorsePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Leasing a Horse",
          subtitle:
            "Leasing is one of the smartest, most underused ways to get more horse in your life without the full commitment of buying. A lease lets a rider use a horse -- in part or in full -- in exchange for sharing or covering its costs, offering a low-risk step between lessons and ownership. But leases vary widely and live or die by a clear written agreement. This guide explains the main types and what to nail down. This is reference material, not legal advice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Leasing a Horse", href: '/ownership/leasing-a-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What a Lease Is", href: "#what" },
            { label: "Full vs Partial Lease", href: "#types" },
            { label: "On-Site vs Off-Site", href: "#location" },
            { label: "The Lease Agreement", href: "#agreement" },
            { label: "Pros and Cons", href: "#proscons" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "Boarding Options", href: "/ownership/boarding-options" },
              { label: "Horse Insurance", href: "/ownership/horse-insurance" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-leasing"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What a Lease Is</h2>
          <p>A horse lease is an arrangement in which a rider gets the use of a horse they do not own, in exchange for covering some or all of its costs and following agreed conditions. The owner keeps ownership but offloads some cost and ensures the horse is ridden; the lessee gets riding time and experience without buying. Leasing is widely used as a stepping stone toward ownership, as a way to ride more than lessons allow, and as a flexible option for outgrown or temporarily idle horses.</p>

          <h2 id="types">Full vs Partial Lease</h2>
          <p>The two broad types differ by how much of the horse the lessee gets. In a full lease, the lessee has the horse essentially to themselves and typically covers all or most of its costs -- board, farrier, routine vet, and so on -- almost like temporary ownership. In a partial or share lease (often a half lease), the lessee rides on certain days and shares the costs proportionally with the owner or other sharers. Partial leases suit riders wanting regular riding at a fraction of full cost.</p>

          <h2 id="location">On-Site vs Off-Site</h2>
          <p>Leases also differ by where the horse stays. In an on-site lease the horse remains at its current barn, which is common for partial leases and keeps the owner close and the routine stable. In an off-site lease the lessee moves the horse to their own yard, more typical of a full lease and giving more independence but also more responsibility. The location affects cost, oversight, and how much the owner stays involved in the horse&apos;s daily life.</p>

          <h2 id="agreement">The Lease Agreement</h2>
          <ul>
            <li><strong>Put it in writing.</strong> A clear written lease agreement is essential and prevents most disputes.</li>
            <li><strong>Define the term and fee</strong> and exactly which costs each party pays (board, farrier, vet, insurance, supplements).</li>
            <li><strong>Specify use</strong> -- which days, what activities, whether competing or jumping is allowed, and who may ride.</li>
            <li><strong>Address veterinary decisions and emergencies</strong> -- who decides and who pays in an emergency or for major treatment.</li>
            <li><strong>Cover insurance and liability</strong> and the conditions for ending the lease early.</li>
          </ul>

          <h2 id="proscons">Pros and Cons</h2>
          <p>Leasing lets a rider gain experience, ride regularly, and try the responsibilities of ownership at lower cost and risk, with the flexibility to walk away at the end of the term -- ideal for testing whether you are ready to buy. The downsides are that you do not own the horse and may have to give it up, you ride within the owner&apos;s rules, and a poorly defined arrangement can lead to disputes over costs, care decisions, and an injured horse. A good lease rests on a fair, specific, written agreement and a trustworthy owner.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners and equestrian-organization resources on horse leasing.</li>
            <li>Equine legal resources on lease agreements and liability.</li>
            <li>British Horse Society. Loan and share agreement guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
