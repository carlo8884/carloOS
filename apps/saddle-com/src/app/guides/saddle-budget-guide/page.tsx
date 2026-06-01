import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Budget Guide — What to Spend and Where | Saddle.com",
  description: "How to budget for a saddle: realistic price tiers, where money makes a difference, the hidden costs of fitting and billets, and when used beats new.",
  path: "/guides/saddle-budget-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Budget Guide",
  description: "Realistic saddle price tiers, where spending matters, hidden costs, and when used outperforms new for the money.",
  url: "https://saddle.com/guides/saddle-budget-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleBudgetGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Budget — Where the Money Actually Matters", subtitle: "A saddle budget is not just the sticker price. Fitting, billets, a girth, and the value of buying once shape what you really spend — and where spending more genuinely buys more.", category: "Buying", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Budget Guide", href: "/guides/saddle-budget-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Budget Is More Than Price", href: "#budget" },
          { label: "Realistic Price Tiers", href: "#tiers" },
          { label: "Where Money Matters", href: "#matters" },
          { label: "Hidden Costs", href: "#hidden" },
          { label: "New vs Used by Budget", href: "#used" },
          { label: "Allocating a Budget", href: "#allocating" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "New vs Used Saddle", href: "/guides/new-vs-used-saddle" },
          { label: "Saddle Brands by Price", href: "/guides/saddle-brands-by-price" },
          { label: "Used Saddle Buying Guide", href: "/guides/used-saddle-buying-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-budget-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The price on a saddle is the start of the budget, not the end of it. A fitting appointment, possibly new billets, a girth, and the long-run value of a saddle that lasts twenty years rather than five all belong in the calculation. And spending more genuinely buys more in some places and almost nothing in others — knowing which is the whole skill of budgeting for a saddle.</DropCap>

        <CalloutBox variant="tip" title="Budget for the fitting, always">
          Whatever you spend on the saddle, budget separately for a professional fitting on your horse — it is the cheapest insurance against buying the wrong saddle, and a perfectly fitted budget saddle outperforms an unfitted expensive one. The fitting is not an optional extra; it is part of the purchase.
        </CalloutBox>

        <h2 id="budget">Budget Is More Than Price</h2>
        <p>A saddle&apos;s true cost includes the purchase price, a fitting (see the <a href="/guides/saddle-fit-guide">saddle fit guide</a>), often new billets on a used saddle (per the <a href="/guides/billet-care-guide">billet care guide</a>), a girth, and the amortized value of how long it lasts. A saddle that lasts twenty years at a higher price can be cheaper per year than a budget saddle replaced every five. Budget for the system, not the sticker.</p>

        <h2 id="tiers">Realistic Price Tiers</h2>
        <p>English saddles broadly tier into entry (a few hundred dollars, real-leather brands like Collegiate or synthetics like Wintec, adjustable gullets, serviceable for years), mid-range (one to two-and-a-half thousand, Bates and quality used premium), and premium (three to seven-plus thousand, Stübben, County, Custom, French makers). The <a href="/reviews/best-english-saddles">English saddle reviews</a> and the <a href="/guides/saddle-brands-by-price">brands by price guide</a> place specific brands in these tiers. Western saddles tier similarly by tree quality and maker.</p>

        <h2 id="matters">Where Money Matters</h2>
        <p>Spending more genuinely buys: a better tree (longevity and durable fit), quality leather that lasts and develops patina, rebuildable wool panels, and resale value. A premium saddle bought used often captures most of this at a fraction of new. Spending more does <em>not</em> buy a better fit on your specific horse — that comes from fitting, not price — and an expensive saddle that fits poorly is money wasted.</p>

        <h2 id="hidden">Hidden Costs</h2>
        <ul>
          <li><strong>Fitting:</strong> a professional appointment, and possibly reflocking to fit your horse.</li>
          <li><strong>Billets:</strong> often replaced on an older used saddle — cheap, but budget for it.</li>
          <li><strong>Girth:</strong> the right type and length (see the <a href="/guides/girth-types-guide">girth types guide</a>); a dressage saddle needs a short girth.</li>
          <li><strong>Ongoing care:</strong> conditioning supplies and periodic reflocks on wool saddles.</li>
        </ul>

        <h2 id="used">New vs Used by Budget</h2>
        <p>At every budget, a used premium saddle often beats a new budget one for the money — a ten-year-old Stübben in good condition can cost what a new entry saddle does while offering a better tree, leather, and resale. The trade-off is the inspection risk, covered in the <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a> and weighed in the <a href="/guides/new-vs-used-saddle">new vs used guide</a>. For a tight budget, used premium is usually the smart play.</p>

        <h2 id="allocating">Allocating a Budget</h2>
        <p>A sound approach: set a total figure, reserve part of it for fitting and incidentals (billets, girth), and spend the rest on the best tree and leather you can get for the money — favoring quality used over new budget where possible. Buy the saddle that fits your horse and your dominant discipline, not the most prestigious badge. A well-fitted, sound saddle at any tier serves better than an aspirational one that does not fit. The <a href="/guides/saddle-brands-by-price">brands by price guide</a> maps the options.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers fitting and value references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer published price ranges. Used-saddle market pricing context. British Horse Society (BHS) buying references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
