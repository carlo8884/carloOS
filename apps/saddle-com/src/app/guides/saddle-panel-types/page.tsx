import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Panel Types — K, Trapezius, Full, Short | Saddle.com",
  description: "Saddle panel shapes explained: full panel, short panel, K panel, trapezius cutback, and gusseted panels — how each affects fit and weight distribution.",
  path: "/guides/saddle-panel-types",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Panel Types",
  description: "Full, short, K, trapezius, and gusseted saddle panels — how panel shape changes bearing surface and fit.",
  url: "https://saddle.com/guides/saddle-panel-types",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddlePanelTypesPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Panel Types — Shaping the Bearing Surface", subtitle: "Two saddles can share a tree and feel entirely different because of how the panels are shaped. Panel geometry decides where the load lands on the back.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Panel Types", href: "/guides/saddle-panel-types" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "The Panel as Bearing Surface", href: "#bearing" },
          { label: "Full Panels", href: "#full" },
          { label: "Short Panels", href: "#short" },
          { label: "K Panels", href: "#k" },
          { label: "Trapezius & Cutback", href: "#trap" },
          { label: "Gussets", href: "#gussets" },
          { label: "Matching Panel to Horse", href: "#matching" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Flocking Guide", href: "/guides/saddle-flocking-guide" },
          { label: "Saddle Tree Types", href: "/guides/saddle-tree-types" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-panel-types" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The panel is the part of the saddle that actually touches the horse, and its shape decides how the rider&apos;s weight is spread along the back. A longer panel spreads load over more surface; a panel shaped to clear the shoulder frees the foreleg. Panel type is one of the most under-discussed variables in fit.</DropCap>

        <CalloutBox variant="tip" title="Bearing surface, not just length">
          What matters is not raw panel length but how much of the panel makes even contact. A long panel that bridges or lifts at the rear is bearing on less surface than a shorter panel in full contact. Always assess panels for even contact, as in the <a href="/guides/saddle-fit-guide">fit guide</a>, not by eye alone.
        </CalloutBox>

        <h2 id="bearing">The Panel as Bearing Surface</h2>
        <p>The total area of even panel contact is the bearing surface — the surface across which rider weight is distributed onto the long back muscles. The larger and more even the bearing surface, the lower the pressure per square inch on the horse. Panel shape is how makers control this: lengthening, shortening, angling, and gusseting the panel changes where and how evenly weight lands.</p>
        <p>Panel geometry has to be matched to the horse&apos;s back length and shape, and it interacts with the <a href="/guides/saddle-tree-types">tree</a> and the <a href="/guides/saddle-flocking-guide">flocking</a>. The shapes below are the common families.</p>

        <h2 id="full">Full Panels</h2>
        <p>A full panel runs the length of the seat and provides the largest bearing surface, spreading load over the most back area. Full panels suit horses with long enough backs to carry them without the rear of the panel running onto the loins (behind the last rib), which must be avoided. Many all-purpose and dressage saddles use full panels for the load-spreading benefit.</p>

        <h2 id="short">Short Panels</h2>
        <p>Short panels stop further forward, concentrating bearing surface over the strongest part of the back and keeping weight off the loin. They suit short-backed horses where a full panel would extend too far back. The trade-off is a smaller bearing surface, so flocking and tree fit must be correct to avoid concentrating pressure.</p>

        <h2 id="k">K Panels</h2>
        <p>A K panel (named for its shape) is contoured to follow the change of angle behind the horse&apos;s shoulder, increasing rearward bearing while keeping the front of the panel clear of the moving shoulder. K panels are common on dressage saddles where shoulder freedom and a long, stable bearing surface are both priorities.</p>

        <h2 id="trap">Trapezius &amp; Cutback Shaping</h2>
        <p>The front of the panel sits near the trapezius muscle and the rear of the shoulder blade. Panels are often shaped — recessed or cut back at the front — so the saddle does not sit on or pinch the moving shoulder. A saddle that interferes with the shoulder restricts the foreleg and is a frequent cause of short, choppy front-end movement. Shoulder-freeing panel shaping addresses this directly.</p>

        <h2 id="gussets">Gussets</h2>
        <p>A gusset is an extra strip of leather between the top and bottom of the panel at the rear, which increases the panel&apos;s depth and the volume of flocking it can hold. Rear gussets (and front gussets on some saddles) let a saddler build a thicker, more level panel for horses that need more lift or fill at one end. Gusseted panels give more adjustment range to a wool-flocked saddle.</p>

        <h2 id="matching">Matching Panel to Horse</h2>
        <ul>
          <li><strong>Short-backed horse:</strong> short or contoured panel that does not run onto the loins.</li>
          <li><strong>Long-backed horse:</strong> full or gusseted panel to maximize bearing surface.</li>
          <li><strong>Big-moving or shoulder-tight horse:</strong> cutback or K-shaped front for shoulder freedom.</li>
          <li><strong>Horse needing fit adjustment over time:</strong> a gusseted wool panel gives the most room to re-shape.</li>
        </ul>
        <p>Panel shape is selected by the maker, refined by the saddler, and confirmed on the horse. As with every fit variable, the test is even contact and a level balance — see the <a href="/guides/saddle-fit-guide">saddle fit guide</a> and the <a href="/fit">discipline fit references</a> for the checkpoints that matter most by discipline.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; panel construction and fitter training, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). Manufacturer panel specifications. Equine biomechanics literature on bearing-surface pressure distribution and shoulder freedom.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
