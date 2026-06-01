import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Antares Saddle Overview — Models, Fit, Reputation | Saddle.com",
  description: "An overview of Antares saddles: the bespoke French fitting model, jumping and dressage lines, leather and feel reputation, and where Antares fits the market.",
  path: "/guides/antares-saddle-overview",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Antares Saddle Overview",
  description: "Antares saddles — the bespoke French fitting model, jumping and dressage lines, leather reputation, and market positioning.",
  url: "https://saddle.com/guides/antares-saddle-overview",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function AntaresSaddleOverviewPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Antares — The Bespoke French Jumping Saddle", subtitle: "Antares is among the most recognized French saddle houses, built on bespoke fitting, supple French leather, and a close-contact reputation that put it at the top of competitive jumping.", category: "Brand Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Antares Saddle Overview", href: "/guides/antares-saddle-overview" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Who Antares Is", href: "#who" },
          { label: "The Bespoke Model", href: "#bespoke" },
          { label: "Jumping Lines", href: "#jumping" },
          { label: "Dressage & Eventing", href: "#dressage" },
          { label: "Leather & Feel", href: "#leather" },
          { label: "Buying & Resale", href: "#buying" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "French Saddle Makers", href: "/guides/french-saddle-makers" },
          { label: "Devoucoux Saddle Overview", href: "/guides/devoucoux-saddle-overview" },
          { label: "Close Contact vs All-Purpose", href: "/guides/close-contact-vs-all-purpose" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-antares-saddle-overview" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Antares, founded in the Nontron saddlery region of France, is one of the defining names of the modern bespoke French saddle — measured to horse and rider, built in soft French calfskin, and engineered for the close contact that competitive jumpers and eventers prize. It sits squarely in the premium, bespoke tradition described in the <a href="/guides/french-saddle-makers">French saddle makers reference</a>.</DropCap>

        <CalloutBox variant="tip" title="Bespoke fit is the value and the catch">
          An Antares is built to your horse and you, which is its great strength — and the reason a heavily bespoke Antares is fitted to one horse and has a narrower resale pool than an adjustable production saddle. If you expect to keep the horse, the bespoke fit is a feature; if the horse may change, weigh it carefully.
        </CalloutBox>

        <h2 id="who">Who Antares Is</h2>
        <p>Antares is a French saddle house from the Nontron region, the historic heart of French saddlery, building jumping, eventing, and dressage saddles on a bespoke fitting model. It rose to prominence on the close-contact feel and leather quality that the French houses are known for, and is a common sight at the top of international show jumping and eventing. Its peers and the shared French tradition are covered in the <a href="/guides/french-saddle-makers">French saddle makers reference</a>.</p>

        <h2 id="bespoke">The Bespoke Model</h2>
        <p>Antares works through a fitter who visits to measure the horse&apos;s back and the rider&apos;s build, then specifies the saddle — tree, panel, flap, seat, and twist — to those measurements. This produces a saddle made for the pair rather than chosen from stock, the core of the French value proposition and the bespoke trade-off discussed in the <a href="/guides/french-saddle-makers">French makers reference</a>: a precise fit now, but a saddle tied more closely to one horse.</p>

        <h2 id="jumping">Jumping Lines</h2>
        <p>Antares is best known for its jumping saddles — close-contact, often monoflap (see the <a href="/guides/monoflap-vs-double-flap-saddles">monoflap guide</a>), forward-flapped geometry built for the bent-knee, two-point jumping position detailed in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>. The jumping lines are what put Antares at the top of the sport, prized for the closeness of feel and the supple leather under the leg. They suit show jumpers, hunters, and eventers wanting a close-contact saddle.</p>

        <h2 id="dressage">Dressage &amp; Eventing</h2>
        <p>Antares also builds dressage saddles (deep-seated, long-flapped, for the dressage position) and eventing saddles bridging the demands of the three phases covered in the <a href="/guides/eventing-tack-guide">eventing tack guide</a>. The eventing saddles in particular benefit from the close, light, monoflap construction that suits cross-country. Across lines, the bespoke fitting and French leather remain the common thread.</p>

        <h2 id="leather">Leather &amp; Feel</h2>
        <p>The Antares reputation rests heavily on its leather and the closeness of contact it allows — soft French calfskin that breaks in to the rider and conveys the horse&apos;s movement with minimal interference. This supple, close feel is the reason riders pay premium prices, and it is the shared signature of the French houses. The trade-off of soft leather is that it requires diligent care to last, following the <a href="/guides/leather-care-guide">leather care guide</a>.</p>

        <h2 id="buying">Buying &amp; Resale</h2>
        <ul>
          <li><strong>The appeal:</strong> bespoke fit, top-level jumping pedigree, supple French leather, close contact.</li>
          <li><strong>The cost:</strong> premium pricing and a build fitted to a specific horse and rider.</li>
          <li><strong>Resale:</strong> strong within the competitive jumping and eventing community, though bespoke specs narrow the buyer pool versus adjustable production saddles (see the <a href="/guides/saddle-resale-value">resale value guide</a>).</li>
          <li><strong>Fitting:</strong> through an Antares fitter — central to getting the saddle right and to the brand&apos;s model.</li>
        </ul>
        <p>Antares is a premium bespoke French saddle for the competitive jumper or eventer who values the closest contact and a saddle built to the pair — with the bespoke trade-offs understood. For a direct comparison within the French tradition, see the <a href="/guides/devoucoux-saddle-overview">Devoucoux overview</a> and the broader <a href="/guides/french-saddle-makers">French makers reference</a>.</p>

        <CalloutBox variant="note" title="Sources">
          Antares published product and fitting documentation. Society of Master Saddlers and French saddlery references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Competition-use observation at FEI jumping and eventing levels. Used-saddle market context for French makers.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
