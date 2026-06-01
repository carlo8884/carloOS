import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Girth Fit Guide — Length, Placement, Elbow Clearance | Saddle.com",
  description: "How to fit a girth correctly: measuring length, billet placement, elbow clearance, tightening sequence, and how to avoid girth galls and pinching.",
  path: "/guides/girth-fit-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Girth Fit Guide",
  description: "Correct girth length, billet and groove placement, elbow clearance, tightening sequence, and prevention of girth galls.",
  url: "https://saddle.com/guides/girth-fit-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function GirthFitGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Girth Fit — Length, Placement, and Comfort", subtitle: "The right girth in the wrong size or position still causes problems. Length, where the buckles sit, and elbow clearance decide whether a girth secures the saddle without hurting the horse.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Girth Fit Guide", href: "/guides/girth-fit-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Fit Beats Type", href: "#why" },
          { label: "Measuring Length", href: "#length" },
          { label: "Billet Placement", href: "#billets" },
          { label: "Elbow Clearance", href: "#elbow" },
          { label: "Tightening Sequence", href: "#tighten" },
          { label: "Preventing Girth Galls", href: "#galls" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Girth Types Guide", href: "/guides/girth-types-guide" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Billet Care Guide", href: "/guides/billet-care-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-girth-fit-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A correctly chosen girth still has to be the right length, sit in the right place, and clear the elbow. Get those three things right and the girth secures the saddle and disappears from the horse&apos;s attention. Get them wrong and even an anatomic girth in the best leather will rub, pinch, or let the saddle slip.</DropCap>

        <CalloutBox variant="tip" title="Buckles should sit above the elbow, below the flap">
          On an English saddle, the girth buckles should rest in the lower third to middle of the billets — above the point of the elbow so they do not interfere, and below the saddle flap so they do not press the rider&apos;s leg. A girth that is too long buckles up under the flap; too short and the buckles sit down near the elbow.
        </CalloutBox>

        <h2 id="why">Why Fit Beats Type</h2>
        <p>The <a href="/guides/girth-types-guide">girth types guide</a> covers shape and material; this guide covers getting the chosen girth to fit. Fit is the larger lever — an anatomic girth in the wrong length or position causes the same galls and slipping as a basic one. And girth fit interacts with saddle fit: a saddle that slips because the girth is wrong can be misdiagnosed as a tree problem (see the <a href="/guides/saddle-fit-guide">saddle fit guide</a>).</p>

        <h2 id="length">Measuring Length</h2>
        <p>For a long (English) girth, the correct length leaves the buckles sitting in the lower-to-middle third of the billets on both sides when the girth is at working tightness — roughly a hand&apos;s width of billet showing above the buckles. For a short (dressage/monoflap) girth, the buckles sit low on the barrel, clear of the rider&apos;s leg. Measure an existing well-fitting girth, or measure from billet to billet under the barrel with the saddle on, and size so neither extreme of the buckle range is reached.</p>

        <h2 id="billets">Billet Placement</h2>
        <p>Which billets you use affects saddle stability. Most English saddles have three billets per side; using the first and third (rather than first and second) often gives the most stable spread, but the right combination depends on the saddle and the horse&apos;s girth-groove position. Billets must be in sound condition — cracked or stretched billets are a safety failure, covered in the <a href="/guides/billet-care-guide">billet care guide</a>.</p>

        <h2 id="elbow">Elbow Clearance</h2>
        <p>The girth must sit far enough back to clear the point of the elbow through its full range as the foreleg moves. A girth too far forward presses the elbow, causing rubs and short, restricted front movement; this is one reason anatomic, elbow-cutaway girths exist. Check clearance with the horse standing square and again by drawing each foreleg forward to see where the girth contacts.</p>

        <h2 id="tighten">Tightening Sequence</h2>
        <p>Tighten the girth gradually in stages — snug it before mounting, then check and adjust after a few minutes of walking, and again before serious work. Tightening in one hard pull is uncomfortable and contributes to girthiness; gradual tightening lets the horse adjust and lets the saddle settle. Always check both sides are even. Stretching the forelegs forward gently after girthing can smooth skin caught under the girth.</p>

        <h2 id="galls">Preventing Girth Galls</h2>
        <ul>
          <li>Keep the girth clean — dried sweat, mud, and grit are the main cause of rubs.</li>
          <li>Choose a soft, breathable, or anatomic girth for thin-skinned or sensitive horses (see <a href="/guides/girth-types-guide">girth types</a>).</li>
          <li>Smooth skin and hair under the girth after tightening.</li>
          <li>Watch for early signs — heat, sensitivity, hair loss in the girth groove — and address them before they become open galls.</li>
          <li>Recondition leather girths so they stay supple, per the <a href="/guides/leather-care-guide">leather care guide</a>.</li>
        </ul>
        <p>Girth fit is quick to check and easy to overlook. A few minutes confirming length, placement, and elbow clearance prevents most girth-related discomfort and keeps the saddle where it belongs.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) fitting materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. British Horse Society (BHS) saddling and tacking references. Equine biomechanics literature on girth-region pressure and foreleg clearance.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
