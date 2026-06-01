import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Pad Materials — Wool, Foam, Gel, Sheepskin | Saddle.com",
  description: "Saddle pad and numnah materials compared: cotton, wool felt, sheepskin, foam, and gel — breathability, pressure relief, and what a pad can and cannot fix.",
  path: "/guides/saddle-pad-materials",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Pad Materials",
  description: "Cotton, wool felt, sheepskin, foam, and gel saddle pad materials compared for breathability, pressure relief, and durability.",
  url: "https://saddle.com/guides/saddle-pad-materials",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddlePadMaterialsPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Pad Materials — What Sits Under the Saddle", subtitle: "A pad protects the saddle from sweat and the horse from minor friction. What it is made of decides how it breathes, how it cushions, and whether it helps or hurts heat dissipation.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Pad Materials", href: "/guides/saddle-pad-materials" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What a Pad Is For", href: "#what" },
          { label: "Cotton & Quilted", href: "#cotton" },
          { label: "Wool Felt", href: "#wool" },
          { label: "Sheepskin", href: "#sheepskin" },
          { label: "Foam & Gel", href: "#foam" },
          { label: "What a Pad Cannot Do", href: "#cannot" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Half Pad Guide", href: "/guides/half-pad-guide" },
          { label: "Best Saddle Pads", href: "/reviews/best-saddle-pads" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-pad-materials" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A saddle pad does two honest jobs: it keeps sweat and dirt off the saddle, and it provides a thin layer of friction protection for the horse. The material determines how well it breathes and dissipates heat, how it cushions, and how easily it cleans. What it cannot do — and is too often asked to do — is correct a saddle that does not fit.</DropCap>

        <CalloutBox variant="tip" title="A pad is not a fit corrector">
          Adding pads to make a too-wide saddle fit is like wearing thick socks to fix shoes that are too big — it changes the fit unpredictably and usually for the worse, lifting the saddle and altering balance. Correct fit comes from the tree, panel, and flocking. Use a pad for protection, not correction. For minor support there are <a href="/guides/half-pad-guide">half pads</a>.
        </CalloutBox>

        <h2 id="what">What a Pad Is For</h2>
        <p>The core purposes are protecting the saddle from sweat and grime (extending the life of the leather and panels) and giving a clean, comfortable interface against the horse. A pad is not part of the load-bearing structure the way the panel and tree are — those do the fit work described in the <a href="/guides/saddle-fit-guide">saddle fit guide</a>. The pad is the launderable layer between.</p>

        <h2 id="cotton">Cotton &amp; Quilted Pads</h2>
        <p>The everyday standard: a cotton or cotton-blend quilted pad or numnah. Cotton breathes reasonably, washes easily, and is inexpensive, which is why it is the default schooling and showing pad. Quilting adds a thin, even layer of padding. The limitation is modest cushioning and, in synthetic-backed versions, less breathability — keep them clean to avoid friction from caked sweat.</p>

        <h2 id="wool">Wool Felt</h2>
        <p>Wool felt is dense, breathable, and naturally wicking, and it dissipates heat well — qualities prized in western pads and endurance riding. Felt provides genuine cushioning and conforms with use. It is heavier and slower to dry than cotton and needs proper care, but for long rides and heat management it is excellent. Western saddles commonly pair a felt pad under a decorative blanket.</p>

        <h2 id="sheepskin">Sheepskin</h2>
        <p>Real sheepskin (wool-on-hide) is breathable, wicking, conforms to the back, and is gentle on the skin, which is why sheepskin numnahs and half pads are popular for sensitive horses and for showing. It manages heat and friction well. The trade-offs are price, weight when wet, and care — real sheepskin needs specific washing to keep the wool soft. Synthetic sheepskin imitates the feel at lower cost and easier care but breathes less.</p>

        <h2 id="foam">Foam &amp; Gel</h2>
        <p>Foam and gel pads (and inserts) aim to absorb shock and distribute pressure. Quality closed-cell foam can help cushion concussion; gel conforms and dampens vibration. The honest caution is that thick foam or gel can trap heat, can slip, and can mask rather than solve a fit problem by spreading pressure from a saddle that should be re-flocked. Used appropriately — a thin shock pad under a well-fitted saddle — they help; used to compensate for poor fit, they hurt.</p>

        <h2 id="cannot">What a Pad Cannot Do</h2>
        <ul>
          <li>Make a too-wide or too-narrow saddle fit — that is a <a href="/guides/saddle-tree-types">tree</a> and <a href="/guides/saddle-flocking-guide">flocking</a> matter.</li>
          <li>Fix bridging or asymmetry — those need a saddler.</li>
          <li>Substitute for cleaning — a dirty pad causes the friction it is meant to prevent.</li>
        </ul>
        <p>Choose pad material for breathability, cushioning, and care to suit your discipline and your horse&apos;s skin, keep it scrupulously clean, and let the saddle do the fitting. For targeted, temporary support, the <a href="/guides/half-pad-guide">half pad guide</a> covers the right and wrong uses, and the <a href="/reviews/best-saddle-pads">saddle pad reviews</a> compare specific options.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Equine thermoregulation and back-pressure-mapping literature. Manufacturer pad-material documentation. Endurance riding organization heat-management guidance.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
