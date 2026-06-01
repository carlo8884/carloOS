import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Storage Guide — Racks, Humidity, Covers | Saddle.com",
  description: "How to store a saddle: proper racks, humidity and temperature targets, covers, long-term storage, and the mistakes that warp trees and grow mold.",
  path: "/guides/saddle-storage-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Storage Guide",
  description: "Correct saddle racks, humidity and temperature control, covers, and long-term storage practices that protect tree, leather, and panels.",
  url: "https://saddle.com/guides/saddle-storage-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleStorageGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Storage — Protecting the Investment Off the Horse", subtitle: "A quality saddle spends most of its life on a rack, not a horse. How it is stored decides whether the tree stays true, the leather stays sound, and mold stays away.", category: "Leather Care", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Storage Guide", href: "/guides/saddle-storage-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Storage Is Most of a Saddle Life", href: "#why" },
          { label: "The Right Rack", href: "#rack" },
          { label: "Humidity & Temperature", href: "#humidity" },
          { label: "Covers", href: "#covers" },
          { label: "Long-Term Storage", href: "#longterm" },
          { label: "Common Mistakes", href: "#mistakes" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Tack Room Organization", href: "/guides/tack-room-organization" },
          { label: "Removing Mold from Tack", href: "/guides/mold-removal-tack" },
          { label: "Leather Care Guide", href: "/guides/leather-care-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-storage-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A saddle that is ridden a few hours a week sits on its rack for the rest. Bad storage — a too-narrow rack that distorts the panels, a damp room that breeds mold, direct heat that cracks the leather — quietly damages a saddle more than riding ever does. Good storage is cheap, simple, and the most overlooked part of tack care.</DropCap>

        <CalloutBox variant="tip" title="A proper-width rack protects the tree and panels">
          Store a saddle on a rack wide enough to support the full width of the panels — a narrow rail or a too-thin rack lets the panels and gullet take the weight in one spot, distorting flocking and stressing the tree over months. The rack should cradle the saddle in roughly its on-horse shape.
        </CalloutBox>

        <h2 id="why">Storage Is Most of a Saddle Life</h2>
        <p>Riding wears tack, but storage damages it — and storage is where the saddle spends most of its time. The three threats are mechanical (a bad rack distorting the saddle), environmental (humidity growing mold, dryness or heat cracking leather), and neglect (storing it dirty or wet). Address all three and a saddle lasts decades; ignore them and even a great saddle degrades. Storage sits alongside the <a href="/guides/tack-room-organization">tack room organization guide</a>.</p>

        <h2 id="rack">The Right Rack</h2>
        <p>A saddle rack should be wide enough to support the full breadth of the panels, holding the saddle in approximately its working shape so the panels and gullet are not crushed onto a narrow rail. Free-standing racks, wall-mounted folding racks, and portable show racks all work if they are wide enough. Avoid hanging a saddle by its pommel or balancing it on a too-thin rail, both of which distort it over time. A rack also keeps the saddle off the ground and away from damp and dust.</p>

        <h2 id="humidity">Humidity &amp; Temperature</h2>
        <p>Leather is happiest in moderate, stable conditions — roughly room-temperature, neither damp nor bone-dry, with air movement. High humidity grows the mold covered in the <a href="/guides/mold-removal-tack">mold removal guide</a>; very dry or hot conditions crack and stiffen leather. A tack room benefits from ventilation and, in damp climates, a dehumidifier. Avoid storing tack against cold exterior walls where condensation forms, and never near a direct heat source.</p>

        <h2 id="covers">Covers</h2>
        <p>A breathable saddle cover keeps dust and light off the leather while letting moisture escape — fleece-lined and fabric covers are ideal. Avoid sealing a saddle in a non-breathable plastic bag for ongoing storage, which traps moisture against the leather and invites mold. A cover is for dust protection in a properly ventilated room, not a moisture barrier in a damp one.</p>

        <h2 id="longterm">Long-Term Storage</h2>
        <p>For storing a saddle for months:</p>
        <ul>
          <li>Clean and condition it first so it goes into storage sound, per the <a href="/guides/leather-care-guide">leather care guide</a>.</li>
          <li>Store on a proper rack in a cool, dry, ventilated space — not a damp basement or a hot attic.</li>
          <li>Use a breathable cover; never sealed plastic.</li>
          <li>Check on it periodically for early mold or dryness, especially through a damp season.</li>
          <li>Lightly recondition before returning it to use if it has stiffened.</li>
        </ul>

        <h2 id="mistakes">Common Mistakes</h2>
        <ul>
          <li>Storing the saddle dirty or wet — the leading cause of mold.</li>
          <li>A too-narrow rack or hanging by the pommel, distorting panels and tree.</li>
          <li>A sealed plastic cover trapping moisture.</li>
          <li>Direct heat (radiator, sun, heater) cracking the leather.</li>
          <li>A damp, unventilated tack room with no humidity control.</li>
        </ul>
        <p>Store a clean, conditioned saddle on a properly wide rack in a cool, dry, ventilated space under a breathable cover, and the off-horse life of the saddle protects rather than degrades it. Combined with routine cleaning, good storage is what makes a quality saddle a multi-decade asset.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) saddle-care references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Leather conservation guidance on humidity and storage. British Horse Society (BHS) tack-care references. Manufacturer storage documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
