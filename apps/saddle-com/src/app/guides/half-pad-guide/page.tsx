import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Half Pad Guide — Sheepskin, Riser, Shimmable | Saddle.com",
  description: "Half pads explained: sheepskin, riser (front/back wedge), and shimmable correction pads — appropriate uses, the risks, and when to call a fitter instead.",
  path: "/guides/half-pad-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Half Pad Guide",
  description: "Sheepskin, riser, and shimmable half pads — appropriate temporary uses, risks of over-correction, and when a saddler is the right answer.",
  url: "https://saddle.com/guides/half-pad-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HalfPadGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Half Pads — Useful Tool, Easy to Misuse", subtitle: "Half pads can add cushioning, fill a temporary gap, or balance a saddle while a horse changes shape. They can also disguise a fit problem until it becomes a soundness one.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Half Pad Guide", href: "/guides/half-pad-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What a Half Pad Is", href: "#what" },
          { label: "Sheepskin Half Pads", href: "#sheepskin" },
          { label: "Riser Pads", href: "#riser" },
          { label: "Shimmable Correction Pads", href: "#shim" },
          { label: "Legitimate Uses", href: "#uses" },
          { label: "When to Call a Fitter", href: "#fitter" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Pad Materials", href: "/guides/saddle-pad-materials" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Saddle Flocking Guide", href: "/guides/saddle-flocking-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-half-pad-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A half pad sits under the saddle and over the numnah, adding cushioning or, in shimmable versions, allowing small targeted adjustments to balance. Used as a temporary bridge while a horse&apos;s back changes, it is a sensible tool. Used as a permanent substitute for correct flocking, it stores up trouble.</DropCap>

        <CalloutBox variant="tip" title="A shim is a bridge, not a destination">
          Shimming a saddle to balance it is reasonable while a horse is gaining or losing topline, or as a fitter&apos;s short-term measure. But a saddle that needs permanent shimming needs reflocking or refitting. Shims that become permanent are usually masking a problem the panel should be solving.
        </CalloutBox>

        <h2 id="what">What a Half Pad Is</h2>
        <p>A half pad is a smaller pad, roughly the shape of the saddle&apos;s bearing area, used in addition to a full numnah. Some are purely for cushioning; others are built to allow correction — risers that wedge the saddle level, or shimmable pads with pockets that hold removable inserts. It sits in the same load path as the panel, so it directly affects fit and balance, unlike the protective pads in the <a href="/guides/saddle-pad-materials">pad materials guide</a>.</p>

        <h2 id="sheepskin">Sheepskin Half Pads</h2>
        <p>Sheepskin half pads add breathable cushioning and are popular for showing and for sensitive-backed horses. As long as the saddle still fits with the pad in place (it adds thickness, so fit must be confirmed with it on), a sheepskin half pad is a benign comfort addition. The error is adding one to a saddle that is already snug, which then over-tightens the fit.</p>

        <h2 id="riser">Riser Pads</h2>
        <p>Riser pads are wedged thicker at one end — front-riser or back-riser — to level a saddle that sits low at one end. A back-riser lifts a cantle-low saddle; a front-riser lifts a pommel-low one. They are a legitimate temporary fix for balance, but they change the fit and should be used knowingly: a saddle that needs a riser to sit level usually has a flocking or panel issue that a saddler should address per the <a href="/guides/saddle-flocking-guide">flocking guide</a>.</p>

        <h2 id="shim">Shimmable Correction Pads</h2>
        <p>Shimmable pads have pockets along each side that hold removable foam or felt shims, letting you build up specific areas — useful for asymmetry, for a horse mid-change in topline, or as a fitter&apos;s tool to test corrections before reflocking. They offer real flexibility and are favored by some fitters for managing a changing horse. The same caution applies: shims are a method of adjustment, not a permanent replacement for correct panel shape.</p>

        <h2 id="uses">Legitimate Uses</h2>
        <ul>
          <li>Cushioning and skin protection (sheepskin) on an already well-fitting saddle.</li>
          <li>Temporarily balancing a saddle while a horse gains or loses topline.</li>
          <li>Managing mild, known asymmetry under a fitter&apos;s direction.</li>
          <li>Bridging the gap between fitter visits on a changing youngster or a horse returning to work.</li>
        </ul>

        <h2 id="fitter">When to Call a Fitter Instead</h2>
        <p>If a saddle needs a half pad or shims permanently to fit or balance, the underlying fit is wrong and a saddler should reflock or refit it — see the <a href="/guides/saddle-fit-guide">saddle fit guide</a> for the checks that reveal this. Half pads buy time and add comfort; they do not change the tree or fix a panel. Use them as the temporary, knowing tools they are, confirm fit with the pad in place, and bring in a fitter when a correction becomes a permanent crutch.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) fitting materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). Equine back-pressure-mapping literature on padding and balance. Manufacturer shimmable-pad documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
