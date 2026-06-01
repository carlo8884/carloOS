import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "New vs Used Saddle — Which Is the Better Buy? | Saddle.com",
  description: "New versus used saddle: the case for used premium over new budget, the risks of buying used, warranties and fitting, and how to decide which route fits you.",
  path: "/guides/new-vs-used-saddle",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "New vs Used Saddle",
  description: "New versus used saddle buying compared — value, risk, fitting, and warranty considerations for each route.",
  url: "https://saddle.com/guides/new-vs-used-saddle",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function NewVsUsedSaddlePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "New vs Used — The Saddle Buyer Decision", subtitle: "For the money, a used premium saddle often beats a new budget one. But used carries inspection risk, and new carries warranties and certainty. The right answer depends on your horse, budget, and risk tolerance.", category: "Buying", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "New vs Used Saddle", href: "/guides/new-vs-used-saddle" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "The Core Trade-Off", href: "#tradeoff" },
          { label: "The Case for Used", href: "#used" },
          { label: "The Risks of Used", href: "#risks" },
          { label: "The Case for New", href: "#new" },
          { label: "Fitting Either Way", href: "#fitting" },
          { label: "Deciding", href: "#deciding" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Used Saddle Buying Guide", href: "/guides/used-saddle-buying-guide" },
          { label: "Saddle Budget Guide", href: "/guides/saddle-budget-guide" },
          { label: "Saddle Resale Value", href: "/guides/saddle-resale-value" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-new-vs-used-saddle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The most consequential decision after fit is new versus used — and for many buyers, a quality used saddle is the smarter purchase, capturing a premium tree, leather, and panels for the price of a new budget saddle. But used buying carries real inspection risk, and new buying buys certainty and warranty. The right call turns on your horse, your budget, and how much risk you can stomach.</DropCap>

        <CalloutBox variant="tip" title="A used premium often beats a new budget for the same money">
          At a given budget, a well-chosen used premium saddle (a sound Stübben, County, or quality French make) frequently offers a better tree, leather, and resale than a new entry-level saddle at the same price. The catch is inspection — used demands the checks in the <a href="/guides/used-saddle-buying-guide">used buying guide</a>; new does not.
        </CalloutBox>

        <h2 id="tradeoff">The Core Trade-Off</h2>
        <p>New buys certainty, a warranty, and pristine condition; used buys more saddle for the money but adds inspection risk. The value math, laid out in the <a href="/guides/saddle-budget-guide">budget guide</a>, often favors used premium — but only if the saddle is sound and fits. Both routes still require fitting to your horse, the universal requirement of the <a href="/guides/saddle-fit-guide">saddle fit guide</a>.</p>

        <h2 id="used">The Case for Used</h2>
        <ul>
          <li><strong>Value:</strong> premium saddles depreciate, so a sound used one captures a far better tree, leather, and panels per dollar.</li>
          <li><strong>Quality at budget prices:</strong> a used Stübben can cost what a new entry saddle does.</li>
          <li><strong>Rebuildability:</strong> wool-flocked used saddles can be reflocked and refitted to your horse (see the <a href="/guides/saddle-flocking-guide">flocking guide</a>).</li>
          <li><strong>Resale:</strong> a sound used premium holds value, so you can sell it on for much of what you paid (the <a href="/guides/saddle-resale-value">resale value guide</a>).</li>
        </ul>

        <h2 id="risks">The Risks of Used</h2>
        <ul>
          <li><strong>A broken or cracked tree</strong> — the critical defect, which can be hard to detect and usually condemns the saddle.</li>
          <li><strong>Worn billets and leathers</strong> — safety items often needing replacement (budget for it, per the <a href="/guides/billet-care-guide">billet care guide</a>).</li>
          <li><strong>Settled or uneven flocking</strong> — often fixable with a reflock, but a cost.</li>
          <li><strong>Hidden mold or rot history</strong> — see the <a href="/guides/mold-removal-tack">mold removal guide</a>.</li>
          <li><strong>No warranty</strong> and sometimes no trial — mitigated by buying through a fitter or with a return policy.</li>
        </ul>
        <p>The <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a> details the full inspection that manages these risks.</p>

        <h2 id="new">The Case for New</h2>
        <p>New buys a known-sound saddle in perfect condition, a manufacturer warranty, dealer fitting support, and the latest design — with no inspection risk and no hidden history. For a buyer who wants certainty, who is buying a brand-specific adjustable system with dealer support, or who simply prefers a fresh saddle, new is worth the premium. The trade-off is immediate depreciation and a higher price for equivalent quality.</p>

        <h2 id="fitting">Fitting Either Way</h2>
        <p>New or used, the saddle must be fitted to your horse — neither route changes this. A new saddle still needs checking and possibly reflocking to your horse; a used saddle needs the same plus the condition inspection. Buying through a fitter (new or used consignment) folds the fitting into the purchase and is, for many buyers, the lowest-risk route to the right saddle. See where to buy in the <a href="/guides/where-to-buy-saddles">where to buy guide</a>.</p>

        <h2 id="deciding">Deciding</h2>
        <ul>
          <li><strong>Tight budget, want quality, willing to inspect:</strong> used premium, with the full inspection and ideally a fitter.</li>
          <li><strong>Want certainty, warranty, and dealer support:</strong> new, especially for an adjustable brand system.</li>
          <li><strong>Hard-to-fit horse:</strong> work through a fitter either way — used consignment or a new fitted saddle.</li>
          <li><strong>First saddle, unsure:</strong> fitter-led, leaning used premium for value if a sound one fits.</li>
        </ul>
        <p>For most buyers seeking the most saddle for the money, used premium through a fitter is the value play; for those prioritizing certainty and support, new earns its premium. Either way, fit decides whether the saddle was worth buying at all.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers buyer references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Used-saddle market pricing context. Manufacturer warranty and new-saddle documentation. British Horse Society (BHS) buying guidance.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
