import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Where to Buy a Saddle — Dealers, Fitters, Online, Used | Saddle.com",
  description: "Where to buy a saddle: independent fitters, brand dealers, tack shops, online, and the used market — trade-offs, trials, and returns.",
  path: "/guides/where-to-buy-saddles",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Where to Buy a Saddle",
  description: "Independent fitters, brand dealers, tack shops, online retailers, and the used market compared for saddle buying.",
  url: "https://saddle.com/guides/where-to-buy-saddles",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function WhereToBuySaddlesPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Where to Buy a Saddle", subtitle: "The right channel depends on whether you value independent fitting, brand expertise, price, or selection. Each route has a different relationship to the one thing that matters most: fit.", category: "Buying", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Where to Buy a Saddle", href: "/guides/where-to-buy-saddles" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Fit Decides the Channel", href: "#fit" },
          { label: "Independent Fitters", href: "#independent" },
          { label: "Brand Dealers", href: "#dealers" },
          { label: "Tack Shops", href: "#shops" },
          { label: "Online", href: "#online" },
          { label: "The Used Market", href: "#used" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Used Saddle Buying Guide", href: "/guides/used-saddle-buying-guide" },
          { label: "New vs Used Saddle", href: "/guides/new-vs-used-saddle" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-where-to-buy-saddles" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Every buying channel — independent fitter, brand dealer, tack shop, online retailer, private used sale — has a different relationship to fit, and fit is what determines whether a saddle is worth buying at all. The cheapest channel is no bargain if it sells you a saddle that does not fit your horse. Choose the channel that gets the right saddle onto your horse&apos;s back.</DropCap>

        <CalloutBox variant="tip" title="A trial period on your horse is worth more than a discount">
          The single most valuable thing a seller can offer is a trial period — the chance to try the saddle on your horse, ideally with a fitter, before committing. A channel that offers a genuine trial and return policy is worth more than one offering a lower price and no way to confirm fit. Always ask about trials and returns.
        </CalloutBox>

        <h2 id="fit">Fit Decides the Channel</h2>
        <p>The recurring theme of every Saddle.com buying guide is that fit to the individual horse, per the <a href="/guides/saddle-fit-guide">saddle fit guide</a>, decides everything. So the question &quot;where should I buy?&quot; is really &quot;which channel gets the right-fitting saddle onto my horse with the least risk?&quot; The channels below trade fit support against price and selection.</p>

        <h2 id="independent">Independent Fitters</h2>
        <p>An independent Society of Master Saddlers-qualified or equivalent fitter assesses your horse, recommends saddles across brands, brings options to try, and fits the chosen one — the gold standard for getting fit right. They carry or source multiple brands and have no single-brand bias (though some carry a limited range). The trade-off is that you pay for the expertise and the brand range may be narrower than a multi-brand search. For a hard-to-fit horse, this is the channel to use.</p>

        <h2 id="dealers">Brand Dealers</h2>
        <p>A dealer for a specific brand (Stübben, Bates, a French maker) offers deep expertise in that brand and often a fitter trained in its system, with trial saddles and adjustment support. The advantage is brand depth; the acknowledged trade-off is the conflict of interest — a brand dealer recommends that brand. If you already know the brand suits your horse, a dealer is excellent; if not, weigh the single-brand bias.</p>

        <h2 id="shops">Tack Shops</h2>
        <p>Brick-and-mortar tack shops let you handle saddles in person and sometimes offer in-house fitting or a fitter relationship. Selection is limited to what they stock, and fitting expertise varies from excellent to none. A good local shop with a real fitter is a fine option; a shop selling saddles off the rack with no fit support is selling you a guess. Ask about trials and fitting before buying.</p>

        <h2 id="online">Online</h2>
        <p>Online retailers offer the widest selection and often the best prices, but the obvious gap is fit — you cannot try the saddle on your horse before it arrives. Online works best when you already know exactly what fits (a repeat purchase, a known model and size), and when the retailer offers a genuine return policy. For a first saddle or an uncertain fit, online&apos;s price advantage is outweighed by the fit risk. Always confirm the return policy.</p>

        <h2 id="used">The Used Market</h2>
        <ul>
          <li><strong>Private sales, consignment, and used dealers</strong> offer premium saddles at a fraction of new, the best value for the money (see the <a href="/guides/new-vs-used-saddle">new vs used guide</a>).</li>
          <li>The risk is condition and fit — inspect rigorously per the <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a>, ideally with a trial and a fitter.</li>
          <li>Consignment through a fitter combines used value with fit expertise — often the best of both.</li>
          <li>Always insist on a trial period for a used saddle if at all possible.</li>
        </ul>
        <p>Match the channel to your situation: an independent fitter or fitter-led consignment for a hard-to-fit horse or a first saddle; a brand dealer if you know the brand; online or a tack shop for a known repeat purchase. Whatever the channel, prioritize a trial on your horse and a clear return policy over price alone — because fit, not the deal, is what you are really buying.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers buyer and fitter references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). British Horse Society (BHS) buying guidance. Used-saddle market and consignment practice references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
