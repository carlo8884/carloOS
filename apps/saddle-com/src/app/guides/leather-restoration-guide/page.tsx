import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Leather Restoration Guide — Reviving Dry, Stiff Tack | Saddle.com",
  description: "How to restore neglected leather tack: assessing whether it is salvageable, deep cleaning, gradual reconditioning, and recognizing when leather is unsafe.",
  path: "/guides/leather-restoration-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Leather Restoration Guide",
  description: "Assessing, deep-cleaning, and reconditioning neglected leather tack, and recognizing structural leather that is beyond safe restoration.",
  url: "https://saddle.com/guides/leather-restoration-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function LeatherRestorationGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Leather Restoration — Reviving Neglected Tack", subtitle: "A dry, stiff, neglected saddle or bridle can often be brought back to supple life. But restoration has a hard limit: leather that has lost its strength cannot be restored, only retired.", category: "Leather Care", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Leather Restoration Guide", href: "/guides/leather-restoration-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Restorable or Not", href: "#assess" },
          { label: "Deep Cleaning", href: "#clean" },
          { label: "Gradual Reconditioning", href: "#recondition" },
          { label: "Stitching & Hardware", href: "#stitching" },
          { label: "The Safety Line", href: "#safety" },
          { label: "When to Call a Saddler", href: "#saddler" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Leather Conditioner Guide", href: "/guides/leather-conditioner-guide" },
          { label: "Used Saddle Buying Guide", href: "/guides/used-saddle-buying-guide" },
          { label: "Billet Care Guide", href: "/guides/billet-care-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-leather-restoration-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A bargain bridle stiff as a board, or an inherited saddle that has sat dry for years, can often be coaxed back to supple, usable life — leather is remarkably resilient. But restoration distinguishes between cosmetic revival, which is usually possible, and structural recovery, which is not: leather that has rotted or weakened cannot be made safe again, only replaced.</DropCap>

        <CalloutBox variant="tip" title="Revive cosmetically, retire structurally">
          Dry, dull, surface-cracked leather on non-load-bearing parts (flaps, seat, bridle cheeks) usually restores beautifully. But structural leather — billets, stirrup leathers, reins — that has dried, cracked, or rotted is a safety item, and if its strength is in doubt, it is replaced, not restored. Never gamble on a billet.
        </CalloutBox>

        <h2 id="assess">Restorable or Not</h2>
        <p>Start by assessing honestly. Leather that is dry, stiff, and dull but intact — bending without cracking through, with sound stitching and no rot — is a cosmetic restoration job and usually recoverable. Leather that is cracked through, flaking, brittle enough to snap, or rotted (often from mold, see the <a href="/guides/mold-removal-tack">mold removal guide</a>) has lost integrity. On structural parts, the latter means replacement. This same assessment underlies the <a href="/guides/used-saddle-buying-guide">used saddle buying guide</a>.</p>

        <h2 id="clean">Deep Cleaning</h2>
        <p>Neglected leather is usually caked with old conditioner, sweat salts, dust, and sometimes mold. Clean thoroughly before conditioning — conditioning over this grime seals it in. Use a leather cleaner or saddle soap and clean cloths, working in stages over all surfaces, including the underside and crevices, lifting decades of buildup. Let it dry to just-damp. This may take several passes; do not rush to oil before the leather is genuinely clean.</p>

        <h2 id="recondition">Gradual Reconditioning</h2>
        <p>Restoring dry leather is a process of repeated thin conditioning, not one heavy soak — that is the central technique. Apply a thin coat of a quality balm (or, for very dry leather, a careful application of neatsfoot oil per the <a href="/guides/leather-conditioner-guide">conditioner guide</a>), let it absorb over hours or a day, and repeat. Over several applications the leather drinks in the oils and gradually returns to suppleness. Soaking it heavily once sits on the surface and can over-soften the outer layer while the core stays dry. Patience is the method.</p>

        <h2 id="stitching">Stitching &amp; Hardware</h2>
        <p>Restoration is also the moment to check stitching and hardware. Rotted or broken stitching needs restitching by a saddler before the item is used — it is a failure point. Buckles, Dees, and stirrup bars should be sound and rust-free; light rust cleans, but pitted or weakened hardware is replaced. The <a href="/guides/billet-care-guide">billet care guide</a> covers the most safety-critical hardware-and-leather junction.</p>

        <h2 id="safety">The Safety Line</h2>
        <ul>
          <li><strong>Cosmetic / non-structural</strong> (flaps, seat, bridle cheeks, browbands): restore freely once sound.</li>
          <li><strong>Structural</strong> (billets, stirrup leathers, reins, girth points): restore only if strength is unquestionable; replace if in any doubt.</li>
          <li><strong>Rotted or brittle structural leather:</strong> replace, never restore.</li>
          <li><strong>The tree:</strong> a cracked or broken tree cannot be restored at home and usually condemns an English saddle.</li>
        </ul>

        <h2 id="saddler">When to Call a Saddler</h2>
        <p>A saddler can restitch, replace billets and leathers, reflock panels, and assess the tree — turning a structurally sound but neglected saddle into a safe, usable one. Bring in a professional for any structural repair, for tree assessment, and whenever you are unsure whether leather is strong enough to trust. Restoration brings neglected tack back to life within the limits of safety; a saddler handles everything past those limits. Done right, a revived quality saddle is one of the best values in the sport — and the <a href="/guides/used-saddle-buying-guide">used buying guide</a> shows how to spot one worth reviving.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) leather-care and repair references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Leather conservation guidance on reconditioning. British Horse Society (BHS) tack-safety references. Manufacturer leather-care documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
