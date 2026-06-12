import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "The Cost of Owning a Horse — Purchase, Upkeep, and the Real Budget",
  description:
    "Reference guide to the cost of horse ownership: purchase price vs upkeep, the main recurring costs, hidden and emergency expenses, and budgeting honestly.",
  path: '/ownership/cost-of-owning-a-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "The Cost of Owning a Horse — Purchase, Upkeep, and the Real Budget",
  description:
    "Reference guide to the cost of horse ownership: purchase price vs upkeep, the main recurring costs, hidden and emergency expenses, and budgeting honestly.",
  url: 'https://horses.com/ownership/cost-of-owning-a-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Is the purchase price the main cost of a horse?",
    answer:
      "No -- the purchase price is usually the cheapest part. Upkeep is ongoing and forever, and the annual cost of keeping a horse routinely exceeds the purchase price of an ordinary horse within the first year. A free or cheap horse can even cost more overall through extra training, rehabilitation, or veterinary care, so budget for the keeping, not the buying.",
    answerText:
      "No -- upkeep is the main cost and is ongoing. Annual keeping costs routinely exceed an ordinary horse's purchase price within a year, and cheap horses can cost more in training and vet care.",
  },
  {
    question: "What are the biggest ongoing costs of owning a horse?",
    answer:
      "The largest recurring costs are keep (board, or the land, hay, bedding, and labor of keeping a horse at home) and feed and forage, which dominate the monthly budget. On top come the constant farrier cycle every 6 to 8 weeks, routine veterinary care and parasite control, insurance if chosen, and tack and equipment.",
    answerText:
      "Keep (board or home upkeep) and feed and forage dominate, followed by the regular farrier cycle, routine vet care and parasite control, insurance, and tack and equipment.",
  },
  {
    question: "Why do I need an emergency fund for a horse?",
    answer:
      "Emergencies such as colic surgery, a serious lameness workup, or a long course of treatment can cost thousands and arrive without warning. A horse with no contingency fund or insurance behind it is a welfare risk, since the owner may be unable to pay for urgent care. Budgeting an emergency fund or insurance is a core responsibility of ownership.",
    answerText:
      "Emergencies like colic surgery or major lameness can cost thousands without warning. Without a contingency fund or insurance, the horse's welfare is at risk if you cannot pay for urgent care.",
  },
]

export default function CostOfOwningPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Boarding Options', href: '/ownership/boarding-options' },
          { title: 'Horse Insurance', href: '/ownership/horse-insurance' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Horse Cost of Ownership Calculator', href: '/tools/horse-cost-calculator', category: 'Tools' },
        ]}
        hero={{
          title: "The Cost of Owning a Horse",
          subtitle:
            "The most repeated piece of wisdom in horse ownership is that the purchase price is the cheapest part -- a free horse is anything but free once the bills start. Horses are a major, ongoing financial commitment, and the most common reason horses end up neglected or surrendered is that owners underestimated the cost. This guide breaks down where the money goes so a prospective owner can budget honestly. Figures vary enormously by region and are illustrative rather than quotes.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Cost of Owning a Horse", href: '/ownership/cost-of-owning-a-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Purchase vs Upkeep", href: "#purchase" },
            { label: "The Big Recurring Costs", href: "#recurring" },
            { label: "Routine Health and Farrier", href: "#routine" },
            { label: "Hidden and Emergency Costs", href: "#hidden" },
            { label: "Budgeting Honestly", href: "#budget" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Boarding Options", href: "/ownership/boarding-options" },
              { label: "Horse Insurance", href: "/ownership/horse-insurance" },
              { label: "Leasing a Horse", href: "/ownership/leasing-a-horse" },
              { label: "Cost of Ownership Calculator", href: "/tools/horse-cost-calculator" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-cost"
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

          <h2 id="purchase">Purchase vs Upkeep</h2>
          <p>The purchase price of a horse ranges from free or a few hundred for an unbroke or older horse to many thousands or far more for a trained competition prospect. But the purchase is a one-time cost, while upkeep is forever. The annual cost of keeping a horse routinely exceeds the purchase price of an ordinary horse within the first year, and a low or zero purchase price often signals a horse that will cost more in training, rehabilitation, or veterinary care. Budget for the keeping, not the buying.</p>

          <h2 id="recurring">The Big Recurring Costs</h2>
          <p>The largest ongoing expense is usually keep -- either board (paying a facility to house and care for the horse) or, if you keep the horse at home, the combined cost of land, fencing, shelter, hay, bedding, and your labor. Feed and forage are a major year-round cost, rising in winter when hay does the work that grass does in summer. Together, keep and feed dominate the monthly budget, which is why the choice of how to keep a horse is the single biggest financial decision after buying.</p>

          <h2 id="routine">Routine Health and Farrier</h2>
          <ul>
            <li><strong>Farrier</strong> every 6 to 8 weeks, year-round -- trimming or shoeing is a constant recurring cost.</li>
            <li><strong>Routine veterinary care</strong> -- annual vaccinations, dental floats, and fecal egg counts and deworming.</li>
            <li><strong>Parasite control</strong> guided by fecal egg counts as part of a modern program.</li>
            <li><strong>Insurance</strong> where chosen, as a recurring premium (see the insurance guide).</li>
            <li><strong>Tack, rugs, and equipment</strong> with ongoing replacement and maintenance.</li>
          </ul>

          <h2 id="hidden">Hidden and Emergency Costs</h2>
          <p>The costs that catch owners out are the unpredictable ones. A colic surgery, a serious lameness workup with imaging, or a long course of treatment can run into thousands quickly, and emergencies do not wait for payday. Other less-obvious costs include lessons and training, competition fees and travel, supplements and special feeds for a horse with a condition, and the eventual costs of caring for an aging horse and, ultimately, end-of-life. A horse with no contingency fund behind it is a financial risk to its own welfare.</p>

          <h2 id="budget">Budgeting Honestly</h2>
          <p>The responsible approach is to total the realistic monthly keep, feed, farrier, and routine veterinary costs for your area, then add a genuine emergency fund (or insurance) for the inevitable unexpected vet bill. Get real local figures from boarding facilities, farriers, and veterinarians rather than guessing, and budget for the worst year, not the best. Many experienced owners advise treating affordability as the first question in horse ownership, because a horse the owner cannot afford to keep well is a welfare problem waiting to happen.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Responsible Horse Ownership and Cost” owner resources. aaep.org.</li>
            <li>American Horse Council and equine economic surveys (cost-of-ownership data).</li>
            <li>Rural and agricultural extension services. Horse-ownership budgeting resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
