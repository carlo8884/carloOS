import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Gullet Plate Guide — Adjustable Saddle Widths | Saddle.com",
  description: "How adjustable gullet plates work: Bates EASY-CHANGE, Wintec, and Stubben systems, width sizing, when to change, and the limits of gullet adjustment.",
  path: "/guides/gullet-plate-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Gullet Plate Guide",
  description: "Adjustable gullet-plate systems explained — how they change saddle width, sizing, and what gullet changes cannot fix.",
  url: "https://saddle.com/guides/gullet-plate-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function GulletPlateGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Gullet Plates — Adjusting Saddle Width at the Head", subtitle: "Interchangeable gullet plates let one saddle fit a range of widths. They are genuinely useful and widely misunderstood — here is what they change and what they do not.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Gullet Plate Guide", href: "/guides/gullet-plate-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What a Gullet Plate Is", href: "#what" },
          { label: "How the Systems Work", href: "#systems" },
          { label: "Reading Width Colors", href: "#colors" },
          { label: "When to Change", href: "#when" },
          { label: "What It Cannot Fix", href: "#cannot" },
          { label: "Doing It Safely", href: "#safely" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Tree Types", href: "/guides/saddle-tree-types" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Best English Saddles", href: "/reviews/best-english-saddles" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-gullet-plate-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A gullet plate is the metal arch at the front of an adjustable saddle that sets the width over the withers. Swap the plate and the saddle&apos;s width changes — without a saddler rebuilding the tree. It is one of the most practical innovations in modern saddle design, and also one of the most over-trusted.</DropCap>

        <CalloutBox variant="tip" title="A width change still needs a fitter">
          Changing the gullet plate alters the width at the head, but it does not reshape the panels or change the point angle. After any width change, the saddle should be re-checked on the horse for even panel contact and level balance. The plate widens your fit options; it does not complete the fit by itself.
        </CalloutBox>

        <h2 id="what">What a Gullet Plate Is</h2>
        <p>On adjustable saddles, the front arch of the tree (the head) accepts an interchangeable metal plate that determines the gullet width and the angle of the tree points. Narrow, medium, wide, and extra-wide plates are available, letting the saddle fit a span of back shapes that a fixed-tree saddle could not. This is the system behind the Bates and Wintec saddles in the <a href="/reviews/best-english-saddles">English saddle reviews</a>.</p>

        <h2 id="systems">How the Systems Work</h2>
        <p><strong>Bates EASY-CHANGE / Wintec:</strong> the plate is held by screws under the pommel; owners can change it at home with the supplied tool, then re-tighten to spec. <strong>Stübben Quick-Change:</strong> a saddler-operated mechanism that adjusts width across several settings without swapping a separate plate. In all cases the principle is the same — change the arch geometry without rebuilding the <a href="/guides/saddle-tree-types">tree</a>.</p>

        <h2 id="colors">Reading Width Colors and Sizes</h2>
        <p>Adjustable systems usually code widths by color or label (for example narrow, medium-narrow, medium, medium-wide, wide, extra-wide). The naming is brand-specific and does not always cross-translate, so a &quot;medium&quot; in one system is not guaranteed to equal a &quot;medium&quot; in another. The <a href="/tools/tree-size-estimator">tree-size estimator</a> gives a directional starting band from wither shape, but the plate that fits is confirmed on the horse, not from a chart.</p>

        <h2 id="when">When to Change the Plate</h2>
        <ul>
          <li>The horse changes shape with fitness, season, age, or returning to work after time off.</li>
          <li>You move the saddle to a different horse of a different width.</li>
          <li>A fitter identifies that the current plate is bridging (too narrow) or rocking (too wide) per the <a href="/guides/saddle-fit-guide">fit checks</a>.</li>
        </ul>

        <h2 id="cannot">What a Gullet Change Cannot Fix</h2>
        <p>Changing the plate adjusts width and point angle at the front. It does not reshape the panel, change the panel&apos;s length or balance, or correct flocking that has settled unevenly. A saddle that bridges in the middle, sits cantle-low, or has asymmetric panels will still do so after a plate change — those are <a href="/guides/saddle-flocking-guide">flocking</a> and panel issues. The plate solves width, and only width.</p>

        <h2 id="safely">Doing It Safely</h2>
        <p>For home-changeable systems: use the manufacturer&apos;s tool, seat the new plate fully, and tighten the fixing screws to the specified torque — a loose plate is a safety risk. Re-check the screws after the first few rides. Then assess the saddle on the horse for even contact and level balance, and have a fitter confirm if you are unsure. Treat the gullet plate as a tool that widens your fit window within a sound, well-flocked saddle — not as a way to make any saddle fit any horse.</p>

        <CalloutBox variant="note" title="Sources">
          Bates and Wintec published EASY-CHANGE and gullet documentation. Stübben Quick-Change system documentation. Society of Master Saddlers (SMS) fitting materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US).
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
