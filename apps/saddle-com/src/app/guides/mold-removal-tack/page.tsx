import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Removing Mold from Tack — Safe Method & Prevention | Saddle.com",
  description: "How to safely remove mold from leather tack without damaging it, and how to prevent it: humidity control, ventilation, drying, and storage that stops mold.",
  path: "/guides/mold-removal-tack",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Removing Mold from Leather Tack",
  description: "A safe step-by-step method for removing mold from leather tack and the storage and humidity practices that prevent it returning.",
  url: "https://saddle.com/guides/mold-removal-tack",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function MoldRemovalTackPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Removing Mold from Leather Tack", subtitle: "Mold on tack is a storage problem first and a cleaning problem second. Remove it safely without driving it deeper, then fix the conditions that grew it.", category: "Leather Care", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Removing Mold from Tack", href: "/guides/mold-removal-tack" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Tack Molds", href: "#why" },
          { label: "Removing It Safely", href: "#remove" },
          { label: "What Not to Do", href: "#avoid" },
          { label: "After Removal", href: "#after" },
          { label: "Preventing Return", href: "#prevent" },
          { label: "When Leather Is Beyond Saving", href: "#beyond" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Storage Guide", href: "/guides/saddle-storage-guide" },
          { label: "Leather Care Guide", href: "/guides/leather-care-guide" },
          { label: "Tack Room Organization", href: "/guides/tack-room-organization" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-mold-removal-tack" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Mold blooms on leather when warmth, moisture, and the natural oils and dirt in the hide meet still air — exactly the conditions of a damp tack room or a saddle put away wet. The fuzzy gray-green growth is alarming but usually recoverable if caught early. The real fix is not the cleaning; it is changing the storage conditions covered in the <a href="/guides/saddle-storage-guide">saddle storage guide</a>.</DropCap>

        <CalloutBox variant="tip" title="Take it outside and wear a mask">
          Clean moldy tack outdoors or in a well-ventilated space, not inside your tack room where you will redistribute spores onto everything else. Wear a dust mask — mold spores are a respiratory irritant. Removing mold indoors near other tack just seeds the next outbreak.
        </CalloutBox>

        <h2 id="why">Why Tack Molds</h2>
        <p>Mold needs moisture, warmth, and food. Leather provides the food (oils, conditioners, sweat, dirt); a damp, poorly ventilated tack room or a saddle stored wet provides the moisture and still air. This is why mold is fundamentally a storage problem — see the <a href="/guides/tack-room-organization">tack room organization guide</a> — and why cleaning it off without changing conditions only delays the next bloom.</p>

        <h2 id="remove">Removing It Safely</h2>
        <p>Work outdoors or well-ventilated, wearing a mask:</p>
        <ul>
          <li>First, wipe or brush off the surface mold with a dry or barely damp cloth to lift it away — do not grind it into the leather.</li>
          <li>Clean with a leather cleaner or saddle soap and a clean cloth, working over all surfaces including the underside, billets, and crevices where mold hides.</li>
          <li>A diluted solution sometimes recommended is a mild vinegar-and-water wipe to discourage spores, used sparingly and followed by thorough conditioning — test on a hidden area first, as acids can affect some finishes.</li>
          <li>Let the leather dry slowly and naturally, away from direct heat.</li>
        </ul>

        <h2 id="avoid">What Not to Do</h2>
        <ul>
          <li>Do not soak leather or use harsh bleach or strong solvents — they damage the hide and finish.</li>
          <li>Do not dry tack with direct heat (heater, hairdryer, hot sun) — heat cracks and stiffens leather.</li>
          <li>Do not condition over mold without cleaning it off first; you will feed the next bloom.</li>
          <li>Do not clean moldy tack in your tack room and re-hang it among clean tack.</li>
        </ul>

        <h2 id="after">After Removal</h2>
        <p>Once clean and dry to just-damp, condition the leather to restore the oils the cleaning and the mold have disturbed, following the <a href="/guides/leather-conditioner-guide">leather conditioner guide</a> — a thin coat of balm, not a heavy soaking. Check the leather&apos;s condition: mold that was only surface-deep cleans away with the leather sound beneath; mold that has rotted stitching or pitted the surface is a more serious matter.</p>

        <h2 id="prevent">Preventing Return</h2>
        <ul>
          <li>Never store tack wet — wipe off sweat and let it dry before putting it away.</li>
          <li>Control humidity in the tack room with ventilation and, if needed, a dehumidifier; the <a href="/guides/saddle-storage-guide">storage guide</a> covers target conditions.</li>
          <li>Keep air moving — still, damp air is what mold needs.</li>
          <li>Clean tack regularly so dirt and old conditioner do not feed mold, per the <a href="/guides/tack-cleaning-schedule">cleaning schedule</a>.</li>
          <li>Do not over-condition; greasy leather molds more readily.</li>
        </ul>

        <h2 id="beyond">When Leather Is Beyond Saving</h2>
        <p>Surface mold cleans off and the leather recovers. But mold that has been left long enough to rot the stitching, weaken billets or stirrup leathers, or pit and degrade the hide may have compromised structural safety — and structural leather that has been weakened should be replaced, not relied on. If billets, leathers, or reins are affected and you doubt their strength, retire them or have a saddler assess. The <a href="/guides/leather-restoration-guide">leather restoration guide</a> covers what is and is not recoverable.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) leather-care references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Leather conservation guidance on mold treatment. British Horse Society (BHS) tack-care references. Manufacturer leather-care documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
