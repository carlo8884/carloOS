import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Boarding Options — Full, Pasture, Self-Care, and Keeping at Home",
  description:
    "Reference guide to horse boarding: full-care, partial, pasture, and self-care board, keeping a horse at home, and choosing the right arrangement and facility.",
  path: '/ownership/boarding-options',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Boarding Options — Full, Pasture, Self-Care, and Keeping at Home",
  description:
    "Reference guide to horse boarding: full-care, partial, pasture, and self-care board, keeping a horse at home, and choosing the right arrangement and facility.",
  url: 'https://horses.com/ownership/boarding-options',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between full-care and self-care board?",
    answer:
      "Full-care board has the facility do all the daily work -- feeding, turnout, mucking, hay, and bedding -- for a higher fee, suiting owners short on time or experience. Self-care board provides only the space while the owner supplies feed and bedding and does all the daily care themselves, which is cheaper but demands reliable daily attendance and real horsemanship.",
    answerText:
      "Full-care board has the facility do all daily work for a higher fee; self-care provides only the space while you do all the feeding, mucking, and turnout yourself, cheaper but demanding daily attendance.",
  },
  {
    question: "Is pasture board good for a horse?",
    answer:
      "Pasture board, keeping the horse out at grass in a group with shelter, suits horses that thrive on turnout and company and aligns with the welfare benefits of living out -- continuous movement, forage, and social contact. It is usually cheaper than stabled board, with the trade-offs of less individual management and less protection from extreme weather.",
    answerText:
      "Often yes -- it suits horses that thrive on turnout and company and matches the welfare benefits of living out. It is usually cheaper, with less individual management and weather protection.",
  },
  {
    question: "What should I look for when choosing a boarding facility?",
    answer:
      "Visit and observe the condition of the horses, cleanliness, safety of fencing and stabling, and how staff handle horses; check how much turnout is provided and in what groups; clarify in writing exactly what the fee includes; ask about feeding routine, hay quality, and emergency handling; and talk to current boarders to confirm the management style suits you.",
    answerText:
      "Horse condition, cleanliness, fencing and stable safety, turnout provision, exactly what the fee includes in writing, feeding and emergency routines, and feedback from current boarders.",
  },
]

export default function BoardingOptionsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
          { title: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling' },
          { title: 'Fencing Safety', href: '/care/fencing-safety' },
        ]}
        hero={{
          title: "Horse Boarding Options",
          subtitle:
            "Where and how you keep a horse is the biggest practical and financial decision after buying it. The choice runs from full-service board, where the facility does everything, to keeping a horse at home, where you do everything -- with several arrangements in between, each trading cost against convenience and control. This guide explains the main options and what to look for in a facility. This is reference material to inform the decision.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Boarding Options", href: '/ownership/boarding-options' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "The Spectrum of Options", href: "#spectrum" },
            { label: "Full-Care Board", href: "#full" },
            { label: "Partial and Pasture Board", href: "#partial" },
            { label: "Self-Care Board", href: "#self" },
            { label: "Keeping a Horse at Home", href: "#home" },
            { label: "Choosing a Facility", href: "#choosing" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "Turnout vs Stabling", href: "/care/turnout-vs-stabling" },
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Fencing and Safety", href: "/care/fencing-safety" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-boarding"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="spectrum">The Spectrum of Options</h2>
          <p>Boarding arrangements sit on a spectrum from most service to least. At one end, full-care board has the facility do all the daily work for a higher fee; at the other, self-care board provides only the space while you do everything; and keeping a horse at home gives total control and total responsibility. Between them lie partial and pasture board. The right choice depends on your time, budget, experience, facilities available, and how hands-on you want or need to be.</p>

          <h2 id="full">Full-Care Board</h2>
          <p>Full (or full-service) board is the most comprehensive and expensive option: the facility feeds, turns out and brings in, mucks stalls, provides hay and bedding, and handles the daily routine, often with arenas, trainers, and amenities on site. It suits owners short on time or experience, those who want training and facilities, and anyone who cannot be at the barn daily. The trade-off is cost and less personal control over exactly how the horse is managed.</p>

          <h2 id="partial">Partial and Pasture Board</h2>
          <p>Partial board splits the duties -- the facility might provide feeding and turnout while the owner handles some tasks -- at a fee between full and self-care. Pasture board keeps the horse out at grass, typically in a group with shelter, rather than in a stall; it is usually cheaper, suits horses that thrive on turnout and company, and aligns with the welfare benefits of living out, though it offers less individual management and protection from the elements.</p>

          <h2 id="self">Self-Care Board</h2>
          <p>Self-care (or DIY) board provides the space -- a stall or field and use of facilities -- while the owner supplies feed and bedding and does all the daily care: feeding, mucking, turnout, and checking the horse. It is cheaper than full board but demands daily attendance and real horsemanship, and it only works if the owner can reliably be there every day, including in bad weather and emergencies. Many self-care yards rely on owners covering for each other.</p>

          <h2 id="home">Keeping a Horse at Home</h2>
          <p>Keeping a horse at home offers maximum control and the joy of having the horse on your doorstep, but it is a serious undertaking: it requires suitable land, safe fencing and shelter, water, hay and bedding storage, and your labor every single day, year-round. Horses are herd animals, so a lone horse needs company. Home-keeping also means you are the first responder in every emergency. It can be rewarding and even economical with the right setup, but it is a lifestyle commitment, not just a saving.</p>

          <h2 id="choosing">Choosing a Facility</h2>
          <ul>
            <li><strong>Visit and observe</strong> the condition of the horses, the cleanliness, safety of fencing and stabling, and how staff handle horses.</li>
            <li><strong>Check turnout</strong> -- how much, in what groups, and on what footing, since turnout is central to welfare.</li>
            <li><strong>Clarify exactly what is included</strong> in the fee and what costs extra, in writing.</li>
            <li><strong>Ask about routine</strong> feeding times, hay quality, and how emergencies and after-hours problems are handled.</li>
            <li><strong>Talk to current boarders</strong> and confirm the management style and atmosphere suit you and your horse.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Boarding and Stable Management” owner resources. aaep.org.</li>
            <li>Rural and agricultural extension services. Horse boarding and facility resources.</li>
            <li>British Horse Society. Livery and boarding guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
