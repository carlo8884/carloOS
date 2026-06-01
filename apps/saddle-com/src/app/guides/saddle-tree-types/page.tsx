import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Tree Types — Wood, Spring, Synthetic, Treeless | Saddle.com",
  description: "The saddle tree is the structural skeleton that determines fit and longevity. Wood-spring, laminate, synthetic, adjustable, and treeless trees compared.",
  path: "/guides/saddle-tree-types",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Tree Types",
  description: "Wood-spring, laminate, synthetic, adjustable-gullet, and treeless saddle trees — construction, fit implications, and longevity.",
  url: "https://saddle.com/guides/saddle-tree-types",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleTreeTypesPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Tree Types — The Skeleton That Decides Fit", subtitle: "Every leather-and-flocking detail sits on top of one structural choice: the tree. Wood-spring, laminate, synthetic, adjustable, and treeless trees behave differently under load and over years of use.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "11 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Tree Types", href: "/guides/saddle-tree-types" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What a Tree Does", href: "#what" },
          { label: "Spring Trees", href: "#spring" },
          { label: "Rigid & Laminate", href: "#rigid" },
          { label: "Synthetic Trees", href: "#synthetic" },
          { label: "Adjustable Trees", href: "#adjustable" },
          { label: "Treeless Saddles", href: "#treeless" },
          { label: "Western Trees", href: "#western" },
          { label: "Choosing a Tree", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Saddle Flocking Guide", href: "/guides/saddle-flocking-guide" },
          { label: "Saddle Anatomy Glossary", href: "/guides/saddle-anatomy-glossary" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-tree-types" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The tree is the rigid internal frame a saddle is built around — it sets the width over the withers, the angle of the bars or points against the horse&apos;s back, the seat shape under the rider, and the load-spreading surface that protects the spine. Almost every difference in how two saddles fit, feel, and last traces back to the tree beneath the leather.</DropCap>

        <CalloutBox variant="tip" title="Why this matters before you shop">
          You cannot judge a tree by looking at a finished saddle. Two saddles with identical leather can ride completely differently because one has a hardwood-spring tree and the other a moulded polymer tree. Ask the maker or dealer what the tree is made of and how the width is specified — it is the single most important spec on the saddle.
        </CalloutBox>

        <h2 id="what">What a Saddle Tree Actually Does</h2>
        <p>A tree has three structural jobs. First, it bridges the rider&apos;s weight away from the spine and onto the long back muscles either side of it — without a tree, point loads concentrate over the vertebrae. Second, it sets and holds the width and angle that has to match the horse&apos;s back shape. Third, it gives the seat its shape and the stirrup bars something solid to anchor to.</p>
        <p>Because the tree determines width and angle, it is also the part that cannot usually be changed after the fact — flocking can be adjusted, billets replaced, and leather conditioned, but a tree that is the wrong width for a horse is a structural mismatch. This is why fit assessment, covered in the <a href="/guides/saddle-fit-guide">saddle fit guide</a>, is fundamentally a question about the tree.</p>

        <h2 id="spring">Spring Trees</h2>
        <p>A spring tree has two flat steel springs running lengthwise under the seat between pommel and cantle. The springs give the seat a degree of flex and a more responsive, &quot;giving&quot; feel under the rider&apos;s seat bones rather than feeling like a board. Most quality English saddles built in recent decades use spring trees.</p>
        <p>The trade-off is that the spring flexes only in the seat, not across the width: the head and points that determine fit over the withers are still rigid and width-specific. Spring trees are typically built on a beech-laminate or moulded base with steel springs and a steel gullet plate, and a well-made one can outlast multiple reflocks.</p>

        <h2 id="rigid">Rigid &amp; Laminate Trees</h2>
        <p>Traditional English saddles may use a rigid (non-spring) tree, often laminated beech. These give a firmer, more direct seat — some classical and showing riders prefer the feel. Laminate trees glue thin layers of wood under pressure, which resists the warping solid timber is prone to.</p>
        <p>The chief failure mode of any wooden tree is a cracked or &quot;broken&quot; tree — usually from a fall, a horse rolling on the saddle, or being dropped. A broken tree is the most important defect to rule out when buying used; the <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a> covers the flex test and the checks for it.</p>

        <h2 id="synthetic">Synthetic Trees</h2>
        <p>Synthetic trees are moulded from polymers such as glass-reinforced nylon. They are lighter than wood-spring trees, unaffected by moisture, and consistent unit to unit because they are moulded rather than hand-built. Wintec and the synthetic side of Bates use synthetic trees, most with a clip-in gullet system that allows width changes at home.</p>
        <p>Modern composites are well past the point where durability under normal riding is a concern. The remaining trade-off is feel and resale: synthetics do not develop patina, and the used market values them below equivalent leather-on-wood saddles.</p>

        <h2 id="adjustable">Adjustable-Gullet Trees</h2>
        <p>Adjustable trees let the width over the withers be changed without rebuilding the saddle — by swapping a metal gullet plate (Bates EASY-CHANGE, Wintec) or a saddler-operated mechanism (Stübben Quick-Change). This is genuinely useful for a horse whose back changes shape, and for riders who keep one saddle across several horses.</p>
        <p>Two cautions: changing the gullet plate alters width at the head but does not reshape the panel or the point angle, so an adjustable saddle still needs a fitter&apos;s eye after a change; and home-adjustable plates should be torqued correctly. Adjustability widens the fit window — it is not a substitute for fitting.</p>

        <h2 id="treeless">Treeless Saddles</h2>
        <p>Treeless saddles omit the rigid frame, relying on dense foam or padded panels to spread load. They conform closely to the back and are popular in trail and endurance. The benefit is adaptability across differently shaped horses; the cost is load distribution — without a rigid tree, weight spreads less evenly, and pressure under the seat bones is a real concern over long rides unless a quality pad is used.</p>
        <p>Treeless is legitimate for the right context but is not automatically kinder than a well-fitted treed saddle. The pad and the rider&apos;s position do the work the tree would otherwise do. Half-tree and flex-tree designs sit between the extremes.</p>

        <h2 id="western">Western Trees</h2>
        <p>Western trees are a substantial rigid frame of wood (traditionally) or a wood core wrapped in rawhide or fiberglass, with bars along the back, a fork at the front, a horn, and a cantle. Because the western tree carries roping and working loads, rigidity is the point. Fit is set by bar angle, bar spread, and gullet width and cannot be flocked away — the <a href="/guides/western-saddle-guide">western saddle guide</a> covers this in detail.</p>

        <h2 id="choosing">Choosing a Tree</h2>
        <ul>
          <li><strong>Stable mature horse, long-term English ownership:</strong> a quality wood-spring tree with wool flocking — rebuildable and long-lived.</li>
          <li><strong>Horse changing shape, or one saddle across horses:</strong> an adjustable-gullet tree widens the fit window.</li>
          <li><strong>Foul weather, endurance, weight-conscious riders:</strong> a synthetic tree is light, washable, and consistent.</li>
          <li><strong>Recreational trail or hard-to-fit:</strong> treeless or flex-tree with the right pad and honest assessment of load.</li>
          <li><strong>Roping and ranch work:</strong> a rigid western tree matched by bar angle and gullet width.</li>
        </ul>
        <p>Whatever the construction, a tree only earns its keep when it is the right width and angle for the individual horse. Confirm that with a fitter before purchase.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; construction and fitter training materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). Manufacturer published construction specifications (Stübben, Bates, Wintec, County). Equine biomechanics literature on load distribution under treed and treeless saddles.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
