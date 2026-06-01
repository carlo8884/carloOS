import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Flocking Guide — Wool, Foam, Air Panels | Saddle.com",
  description: "How saddle panels are stuffed: wool flocking, foam, and air systems compared. When to reflock, signs of uneven flocking, and panel maintenance.",
  path: "/guides/saddle-flocking-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Flocking Guide",
  description: "Wool flocking, foam, and air-panel systems — feel, maintenance, reflock intervals, and how flocking affects fit.",
  url: "https://saddle.com/guides/saddle-flocking-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleFlockingGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Flocking — Wool, Foam, and Air Panels", subtitle: "The panel is the cushion between tree and horse. What it is stuffed with decides how a saddle conforms, how often it needs service, and whether the fit can be adjusted at all.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Flocking Guide", href: "/guides/saddle-flocking-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What Flocking Is", href: "#what" },
          { label: "Wool Flocking", href: "#wool" },
          { label: "Foam Panels", href: "#foam" },
          { label: "Air Panels", href: "#air" },
          { label: "Signs You Need a Reflock", href: "#signs" },
          { label: "Reflock Intervals", href: "#intervals" },
          { label: "Which to Choose", href: "#choose" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Tree Types", href: "/guides/saddle-tree-types" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Saddle Panel Types", href: "/guides/saddle-panel-types" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-flocking-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Flocking is the stuffing inside a saddle&apos;s panels — the soft layer that sits between the rigid tree and the horse&apos;s back and does the fine work of distributing pressure. The material it is made of determines whether fit can be adjusted by a saddler, how the saddle feels, and how much maintenance it needs over its life.</DropCap>

        <CalloutBox variant="tip" title="The reflock is the cheapest fit fix there is">
          Before condemning a saddle as &quot;the wrong fit,&quot; have a qualified saddler check the flocking. A great many fit complaints — bridging, asymmetry, a saddle that has dropped at the cantle — are flocking problems, not tree problems, and a reflock costs a fraction of a new saddle.
        </CalloutBox>

        <h2 id="what">What Flocking Is and Why It Matters</h2>
        <p>A saddle panel is a leather or synthetic envelope filled with a cushioning material. That material is the last interface before the horse&apos;s back, so it shapes how the load coming through the tree is spread along the long back muscles. Good flocking is even, symmetrical, and conformed to the individual horse; poor flocking concentrates pressure, creates dry spots, and can cause the behavioral and soundness problems described in the <a href="/guides/saddle-fit-guide">saddle fit guide</a>.</p>
        <p>The three dominant materials are wool, foam, and air. Each behaves differently, and the choice interacts with the <a href="/guides/saddle-tree-types">tree type</a> — an adjustable tree with a foam panel adjusts differently than a fixed tree with wool.</p>

        <h2 id="wool">Wool Flocking</h2>
        <p>Wool flocking is loose, carded wool packed into the panel by hand. Its defining advantage is adjustability: a saddler can add, remove, or redistribute wool to shape the panel to a specific horse and to correct asymmetry. As a horse&apos;s back changes shape over years of work, the panel can be re-shaped rather than replaced — this rebuildability is why wool-flocked saddles from quality makers hold their value.</p>
        <p>The trade-off is maintenance. Wool compresses and settles with use, so it needs periodic attention to stay even. A saddle ridden hard can develop lumps, hollows, or a dropped side within a year. Wool also has a break-in period during which it settles to the horse.</p>

        <h2 id="foam">Foam Panels</h2>
        <p>Foam panels use moulded closed-cell or latex foam. They are consistent out of the box, lighter than wool, and require little maintenance — there is nothing to settle unevenly. Many close-contact and competition saddles use foam because it gives a thin, stable, predictable panel.</p>
        <p>The cost is adjustability: foam cannot be re-shaped by a saddler the way wool can. If a foam-paneled saddle does not fit, the options are a different saddle, a corrective pad, or in some makes a panel replacement — not a reflock. For a horse with a stable, symmetrical back, foam is low-maintenance and excellent; for a changeable or asymmetric horse, it is less forgiving.</p>

        <h2 id="air">Air Panels</h2>
        <p>Air panels (Bates and Wintec CAIR) use sealed air cells instead of stuffing. They conform to the back under load and spread pressure without the hot spots that uneven wool can create. They are very low maintenance and pair naturally with the adjustable-gullet systems those brands use.</p>
        <p>Two caveats appear in the <a href="/reviews/best-english-saddles">English saddle reviews</a>: air panels can lose air or develop a leak over time and then need professional service, and some riders and saddlers prefer to convert air panels to wool flocking for a more &quot;connected&quot; feel. Conversion is supported by dealers and is not a defect.</p>

        <h2 id="signs">Signs You Need a Reflock</h2>
        <ul>
          <li>The saddle has dropped or tilted to one side, or sits cantle-low when it used to sit level.</li>
          <li>You can feel lumps or hollows running your hand along the underside of the panel.</li>
          <li>Dry patches in the sweat pattern after work (pressure points where blood flow is restricted).</li>
          <li>New back soreness, girthiness, or resistance that training and veterinary checks do not explain.</li>
          <li>It has been more than a couple of years since the last reflock on a regularly ridden wool saddle.</li>
        </ul>

        <h2 id="intervals">Reflock Intervals</h2>
        <p>A common guideline for a regularly ridden wool-flocked saddle is a saddler check every six to twelve months and a reflock as needed, often every one to three years. A saddle in light use goes longer; a competition horse in hard work may need more frequent attention. Foam and air panels are not reflocked on a schedule — they are serviced only when there is a problem. The <a href="/guides/tack-cleaning-schedule">tack cleaning schedule</a> covers how panel checks fold into routine maintenance.</p>

        <h2 id="choose">Which Flocking to Choose</h2>
        <ul>
          <li><strong>Changeable or asymmetric horse, long-term ownership:</strong> wool, for the rebuildability.</li>
          <li><strong>Stable horse, low-maintenance priority, competition:</strong> foam for predictability or air for conforming with minimal upkeep.</li>
          <li><strong>One saddle across several horses:</strong> air or adjustable systems widen the fit window.</li>
        </ul>
        <p>Whatever the panel material, fit should be confirmed by a qualified fitter on the actual horse. Flocking is the layer most fit problems live in — and, with wool, the layer most of them can be solved in.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; panel flocking and fitter training materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). Bates and Wintec published CAIR panel documentation. Equine back-pressure-mapping literature on panel pressure distribution.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
