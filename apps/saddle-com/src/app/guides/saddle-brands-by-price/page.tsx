import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Brands by Price — Entry to Premium Tiers | Saddle.com",
  description: "English and western saddle brands organized by price tier: entry, mid-range, and premium — what each tier offers and which brands sit where.",
  path: "/guides/saddle-brands-by-price",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Brands by Price",
  description: "English and western saddle brands organized into entry, mid-range, and premium price tiers with what each offers.",
  url: "https://saddle.com/guides/saddle-brands-by-price",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleBrandsByPricePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Brands by Price Tier", subtitle: "A price-tier map of the saddle market: which brands sit at entry, mid-range, and premium, and what your money buys at each level — so you can shop the tier that fits your budget.", category: "Buying", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Brands by Price", href: "/guides/saddle-brands-by-price" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "How the Tiers Work", href: "#tiers" },
          { label: "Entry Tier", href: "#entry" },
          { label: "Mid-Range Tier", href: "#mid" },
          { label: "Premium Tier", href: "#premium" },
          { label: "Western Brands", href: "#western" },
          { label: "Choosing a Tier", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Budget Guide", href: "/guides/saddle-budget-guide" },
          { label: "Best English Saddles", href: "/reviews/best-english-saddles" },
          { label: "English Saddle Makers", href: "/guides/english-saddle-makers" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-brands-by-price" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The saddle market sorts into three rough price tiers, and knowing which brands sit where lets you shop the tier that matches your budget without wasting time. Entry brands deliver function at low prices; mid-range adds quality and adjustability; premium brings the best trees, leather, and resale. This is the map — read alongside the value logic of the <a href="/guides/saddle-budget-guide">budget guide</a>.</DropCap>

        <CalloutBox variant="tip" title="A tier is a starting point, not a verdict">
          Price tier tells you roughly what build quality to expect, but a sound used premium saddle can land in a lower price band than its tier, and fit always overrides tier. Use the tiers to narrow the search, then let fit on your horse make the final call.
        </CalloutBox>

        <h2 id="tiers">How the Tiers Work</h2>
        <p>Tiers reflect build quality — tree, leather, panel construction, and resale — more than just price. The <a href="/guides/saddle-budget-guide">budget guide</a> covers what each tier costs and the hidden extras; this guide places the brands. Many of these appear with fuller profiles in the <a href="/reviews/best-english-saddles">English saddle reviews</a> and the maker references.</p>

        <h2 id="entry">Entry Tier</h2>
        <p>Entry brands deliver a functional, often real-leather saddle, frequently with an adjustable gullet, at accessible prices — serviceable for several years rather than decades. <strong>Collegiate</strong> (Weatherbeeta group) is the archetype: real leather, adjustable gullet, accessible price. <strong>Wintec</strong> sits here too with synthetic, washable, adjustable saddles ideal for foul weather and lessons. These suit first saddles, growing horses, and lesson programs where committing to a premium saddle is premature.</p>

        <h2 id="mid">Mid-Range Tier</h2>
        <p>The mid-range adds quality leather, better trees, and adjustable systems with stronger support. <strong>Bates</strong> leads here with CAIR air panels and the EASY-CHANGE adjustable gullet — versatile, well-engineered Australian saddles spanning all-purpose to specialist geometries. Quality used premium saddles also live in this price band, often offering more saddle than a new mid-range one. This tier suits committed riders who want quality and adjustability without premium prices.</p>

        <h2 id="premium">Premium Tier</h2>
        <p>Premium brands bring the best trees, hand-finished leather, rebuildable wool panels, and strong resale — saddles built to last decades. <strong>Stübben</strong> (German, steel-sprung Quick-Change trees), <strong>County</strong> (wool-flocked, rebuildable), <strong>Custom Saddlery</strong> (made-to-measure dressage), and the <strong>French makers</strong> — Antares, Devoucoux, and others covered in the <a href="/guides/french-saddle-makers">French saddle makers reference</a> and the <a href="/guides/english-saddle-makers">English saddle makers reference</a> — define this tier. They cost the most new but hold value best, as the <a href="/guides/saddle-resale-value">resale value guide</a> explains.</p>

        <h2 id="western">Western Brands</h2>
        <p>Western brands tier by tree quality and craftsmanship. Entry western saddles offer functional trees at low prices; mid-range brands like <strong>Circle Y</strong> and <strong>Billy Cook</strong> offer solid quality and value; premium custom and maker saddles (and reining/cutting specialists like <strong>Reinsman</strong>) bring the best trees and hand-tooling. The <a href="/guides/western-saddle-makers">western saddle makers reference</a> profiles these, and the <a href="/reviews/best-western-saddles">western saddle reviews</a> rank specific models.</p>

        <h2 id="choosing">Choosing a Tier</h2>
        <ul>
          <li><strong>First saddle, growing horse, lessons:</strong> entry (Collegiate, Wintec).</li>
          <li><strong>Committed rider, want quality and adjustability:</strong> mid-range (Bates) or quality used premium.</li>
          <li><strong>Long-term ownership, best build and resale:</strong> premium (Stübben, County, Custom, French makers) — bought new or, for value, used.</li>
          <li><strong>Western:</strong> match the tier to the discipline and your budget, favoring tree quality.</li>
        </ul>
        <p>Shop the tier that fits your budget and goals, lean toward quality used premium when value matters, and let fit on your horse decide between the candidates. The tiers narrow the field; the fitting closes the deal.</p>

        <CalloutBox variant="note" title="Sources">
          Manufacturer published price ranges (Collegiate, Wintec, Bates, Stübben, County, Custom Saddlery, Antares, Devoucoux, Circle Y, Billy Cook, Reinsman). Society of Master Saddlers references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Used-saddle market pricing context.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
