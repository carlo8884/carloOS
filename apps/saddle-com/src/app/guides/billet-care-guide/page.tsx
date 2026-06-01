import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Billet Care Guide — Inspection, Care, Replacement | Saddle.com",
  description: "Billets (girth straps) are safety-critical. How to inspect for cracks, stretch, and stitch failure, how to care for them, and when they must be replaced.",
  path: "/guides/billet-care-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Billet Care Guide",
  description: "Inspecting, caring for, and replacing saddle billets (girth straps) — the safety-critical strap that secures the saddle.",
  url: "https://saddle.com/guides/billet-care-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BilletCareGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Billet Care — The Strap That Cannot Fail", subtitle: "Billets hold the saddle to the horse. A cracked or rotted billet that lets go mid-ride is one of the most dangerous tack failures there is — and one of the most preventable.", category: "Leather Care", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Billet Care Guide", href: "/guides/billet-care-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Billets Are Critical", href: "#why" },
          { label: "How to Inspect", href: "#inspect" },
          { label: "Signs of Failure", href: "#signs" },
          { label: "Caring for Billets", href: "#care" },
          { label: "When to Replace", href: "#replace" },
          { label: "Point vs Conventional", href: "#types" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Girth Fit Guide", href: "/guides/girth-fit-guide" },
          { label: "Leather Care Guide", href: "/guides/leather-care-guide" },
          { label: "Used Saddle Buying Guide", href: "/guides/used-saddle-buying-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-billet-care-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Billets — the girth straps that the girth buckles to — carry the entire job of keeping the saddle on the horse. They are also leather under repeated load at the buckle holes, which is exactly where leather cracks and fails. A failed billet drops the saddle and the rider, often at speed. No part of tack rewards careful inspection more.</DropCap>

        <CalloutBox variant="tip" title="Inspect billets every single time you tack up">
          Billet inspection takes five seconds and prevents a serious fall. Every time you girth up, glance at the leather around the holes and the stitching at the top. A billet that is cracking, stretched into slots, or pulling at its stitching is a fall waiting to happen — catch it before it lets go.
        </CalloutBox>

        <h2 id="why">Why Billets Are Critical</h2>
        <p>Three billets per side attach to the tree (often at the point and the web) and the girth buckles to two of them, as covered in the <a href="/guides/girth-fit-guide">girth fit guide</a>. They bear the full securing load of the saddle. Because the buckle holes concentrate stress, and because billets flex and absorb sweat and dirt at the buckle, they are a leading point of tack failure — and unlike a snapped rein, a billet failure drops the whole saddle.</p>

        <h2 id="inspect">How to Inspect</h2>
        <p>Check both sides, all billets:</p>
        <ul>
          <li>Examine the leather around every hole — the holes are where cracks start and where stretch turns holes into slots.</li>
          <li>Flex each billet and look for surface cracking or a dry, brittle feel.</li>
          <li>Check the stitching where the billets attach at the top — pulled, frayed, or rotting stitching is a failure point.</li>
          <li>Feel for thinning or a stretched, floppy section near the buckle area.</li>
          <li>Look for rot or mold damage, especially if the saddle has been stored damp (see the <a href="/guides/mold-removal-tack">mold removal guide</a>).</li>
        </ul>

        <h2 id="signs">Signs of Failure</h2>
        <p>Retire or replace billets showing: cracks across or around the holes; holes stretched into elongated slots so the buckle no longer seats securely; pulled, frayed, or rotting attachment stitching; brittle, dry leather that does not flex; thinning or stretching that makes the billet floppy. Any one of these means the billet&apos;s strength is compromised, and billets are not where you take chances.</p>

        <h2 id="care">Caring for Billets</h2>
        <p>Keep billets clean and supple but strong — not over-oiled. Wipe off sweat and dirt that accumulate at the buckle area, and condition lightly per the <a href="/guides/leather-conditioner-guide">conditioner guide</a> so they stay flexible and do not dry out and crack. Crucially, do not over-condition: greasy, over-softened billets stretch and the stitching rots, the opposite of what you want in a structural strap. The goal is supple but firm.</p>

        <h2 id="replace">When to Replace</h2>
        <p>Replace billets at the first sign of cracking, slotting, stitch failure, or brittleness — and proactively on an older saddle whose billets have seen years of use, even if they look passable, because the cost of new billets is trivial against the cost of a fall. A saddler replaces billets quickly and inexpensively; it is routine work. This is also a key check in the <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a> — budget for new billets on any older used saddle.</p>

        <h2 id="types">Point vs Conventional Billets</h2>
        <p>Saddles attach billets in different ways: a <strong>point billet</strong> is sewn to the tree point for stability, while others attach to a webbing strap. Some saddles use a combination. The attachment affects which billets to girth to for the most stable spread (per the <a href="/guides/girth-fit-guide">girth fit guide</a>), but the care and inspection are the same for all — every billet that bears the girth is safety-critical. Inspect them all, every ride, and replace at the first doubt.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) saddle-safety and repair references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. British Horse Society (BHS) tack-safety guidance. Riding-safety literature on tack failure. Manufacturer billet-replacement documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
