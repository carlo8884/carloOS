import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Resale Value — What Holds Value and Why | Saddle.com",
  description: "Which saddles hold their value: brands, materials, and features that resell well, what tanks resale, and how to protect resale value while you own a saddle.",
  path: "/guides/saddle-resale-value",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Resale Value",
  description: "What drives saddle resale value — brands, materials, condition, and rebuildability — and how to protect it.",
  url: "https://saddle.com/guides/saddle-resale-value",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleResaleValuePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Resale Value — Buying With the Exit in Mind", subtitle: "A saddle is a depreciating asset, but how much it depreciates varies enormously. The brands, materials, and care that hold value can make a premium saddle cost less over time than a budget one.", category: "Buying", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Resale Value", href: "/guides/saddle-resale-value" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Resale Is Part of Cost", href: "#cost" },
          { label: "What Holds Value", href: "#holds" },
          { label: "What Tanks Value", href: "#tanks" },
          { label: "Rebuildability", href: "#rebuild" },
          { label: "Protecting Resale", href: "#protect" },
          { label: "Buying for Resale", href: "#buying" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Brands by Price", href: "/guides/saddle-brands-by-price" },
          { label: "New vs Used Saddle", href: "/guides/new-vs-used-saddle" },
          { label: "Saddle Budget Guide", href: "/guides/saddle-budget-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-resale-value" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Few buyers think about selling a saddle when they buy it, but resale value quietly determines the real cost of ownership. A premium saddle that holds two-thirds of its value over a decade can be cheaper to own than a budget saddle worth almost nothing in five years. The brands, materials, and care that hold value are predictable — and worth knowing before you buy.</DropCap>

        <CalloutBox variant="tip" title="Rebuildable saddles hold value because they outlast horses">
          Wool-flocked saddles from quality makers hold value partly because they can be reflocked and refitted to a new horse — a buyer is not stuck with the fit it has now. A saddle that can be made to fit the next horse has a far larger resale market than one locked to a single shape.
        </CalloutBox>

        <h2 id="cost">Resale Is Part of Cost</h2>
        <p>The true cost of owning a saddle is what you pay minus what you recover when you sell it. A saddle bought for a high price and sold for most of it has a low net cost; a cheap saddle worth nothing later can be a worse deal. This is the logic behind buying used premium in the <a href="/guides/new-vs-used-saddle">new vs used guide</a> and the value framing in the <a href="/guides/saddle-budget-guide">budget guide</a>.</p>

        <h2 id="holds">What Holds Value</h2>
        <ul>
          <li><strong>Premium brands with deep used markets</strong> — Stübben, County, French makers, quality Custom builds (see the <a href="/guides/saddle-brands-by-price">brands by price guide</a>).</li>
          <li><strong>Quality leather</strong> that ages well and develops patina rather than degrading.</li>
          <li><strong>Wool-flocked, rebuildable panels</strong> that can be refitted to a new horse.</li>
          <li><strong>Adjustable-width systems</strong> that fit a range of horses, widening the buyer pool.</li>
          <li><strong>Common, versatile sizes and disciplines</strong> — a medium-tree all-purpose or popular dressage size sells faster than an unusual specification.</li>
        </ul>

        <h2 id="tanks">What Tanks Value</h2>
        <ul>
          <li><strong>Synthetics</strong> — practical, but they do not develop patina and resell low.</li>
          <li><strong>Entry brands</strong> — low new price means low used value and a fast slide.</li>
          <li><strong>Poor condition</strong> — neglected leather, failing stitching, worn billets, mold history.</li>
          <li><strong>A cracked or broken tree</strong> — usually condemns an English saddle&apos;s value entirely.</li>
          <li><strong>Highly custom or unusual specs</strong> — a saddle built to one horse&apos;s tracing has a narrow buyer pool.</li>
        </ul>

        <h2 id="rebuild">Rebuildability</h2>
        <p>The biggest single driver of premium resale is whether the saddle can be made to fit the next horse. Wool-flocked saddles can be reflocked and panels reshaped (see the <a href="/guides/saddle-flocking-guide">flocking guide</a>); adjustable-gullet saddles change width with a plate (the <a href="/guides/gullet-plate-guide">gullet plate guide</a>). Both widen the pool of horses a buyer could fit the saddle to, which is why they hold value. A foam-paneled, fixed-tree saddle is locked to its current shape and sells only to a matching horse.</p>

        <h2 id="protect">Protecting Resale While You Own It</h2>
        <p>Resale value is partly in the buyer&apos;s hands. Keep the leather clean and conditioned (the <a href="/guides/leather-care-guide">leather care guide</a>), store it well (the <a href="/guides/saddle-storage-guide">storage guide</a>), avoid mold, keep billets sound, maintain wool flocking, and keep any documentation, original fitting records, and accessories. A well-cared-for saddle with records sells faster and higher than an identical neglected one. Damage — a dropped saddle, a cracked tree — destroys value, so handle and store it carefully.</p>

        <h2 id="buying">Buying for Resale</h2>
        <p>If resale matters to you, favor a quality brand with a deep used market, real leather, wool or adjustable panels, and a common size and discipline — and then care for it well. You will likely recover a large share of the cost, making the net price of a decade of riding surprisingly low. Buying with the exit in mind turns a saddle from a sunk cost into a holding asset. The <a href="/guides/saddle-brands-by-price">brands by price guide</a> identifies which brands earn this.</p>

        <CalloutBox variant="note" title="Sources">
          Used-saddle market and consignment pricing references. Society of Master Saddlers value and rebuildability references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer published price ranges and resale context. British Horse Society (BHS) buying guidance.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
