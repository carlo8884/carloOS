import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Bit Materials Guide — Stainless, Copper, Sweet Iron | Saddle.com",
  description: "How bit metals and mouthpiece materials affect acceptance: stainless steel, copper, sweet iron, German silver, and synthetics compared for taste and warmth.",
  path: "/guides/bit-materials-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Bit Materials Guide",
  description: "Bit mouthpiece materials compared — stainless steel, copper, sweet iron, German silver, and synthetics, and how each affects acceptance.",
  url: "https://saddle.com/guides/bit-materials-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BitMaterialsGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Bit Materials — Metal, Taste, and Acceptance", subtitle: "The metal a mouthpiece is made of changes how it tastes, how warm it sits, and how much a horse salivates and softens to it. Material is a real variable in bit acceptance.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Bit Materials Guide", href: "/guides/bit-materials-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Material Matters", href: "#why" },
          { label: "Stainless Steel", href: "#stainless" },
          { label: "Copper & Copper Alloys", href: "#copper" },
          { label: "Sweet Iron", href: "#sweet" },
          { label: "German Silver", href: "#german" },
          { label: "Synthetics & Rubber", href: "#synthetic" },
          { label: "Choosing", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Bit Selection Guide", href: "/guides/bit-selection-guide" },
          { label: "Horse Bridle Guide", href: "/guides/horse-bridle-guide" },
          { label: "Double Bridle Guide", href: "/guides/double-bridle-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-bit-materials-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A bit&apos;s shape and action get most of the attention, but the material of the mouthpiece quietly shapes acceptance. Some metals encourage salivation and a soft, accepting mouth; others are neutral and durable. Material is one lever — alongside the mechanics in the <a href="/guides/bit-selection-guide">bit selection guide</a> — for a horse that frets or sets against the bit.</DropCap>

        <CalloutBox variant="tip" title="Change one variable at a time">
          If a horse is unhappy in the bit, resist swapping shape, size, and material all at once. Change one variable, ride in it consistently, and observe. Otherwise you learn nothing about which change helped — and bit acceptance is too important to leave to guesswork.
        </CalloutBox>

        <h2 id="why">Why Bit Material Matters</h2>
        <p>The mouthpiece sits on the sensitive bars and tongue, and its surface chemistry influences salivation and acceptance. A moist, salivating mouth is a soft, accepting mouth; a dry mouth often sets against the bit. Different metals oxidize and taste differently, and that taste is the mechanism. Material works alongside fit (correct width and height, per the <a href="/guides/bridle-fit-guide">bridle fit guide</a>) and mechanics — not instead of them.</p>

        <h2 id="stainless">Stainless Steel</h2>
        <p>The default. Stainless is hard, durable, rust-resistant, hygienic, and essentially tasteless and neutral. It does not encourage salivation the way copper or sweet iron do, but it never corrodes and lasts indefinitely. For a horse that accepts the bit happily, stainless is the sensible, low-maintenance standard, and most snaffles and curbs are available in it.</p>

        <h2 id="copper">Copper &amp; Copper Alloys</h2>
        <p>Copper has a distinct taste and is widely held to encourage salivation and mouthing, which can help a dry-mouthed or fussy horse accept and soften to the bit. It is often used as inlays, rollers, or in alloys (copper mixed with other metals) rather than as a solid mouthpiece, because pure copper is soft and wears. The trade-off is durability and the green oxidation copper develops, which is cosmetic and cleans off.</p>

        <h2 id="sweet">Sweet Iron</h2>
        <p>Sweet iron is a plain steel that is meant to rust lightly on the surface, producing a taste many horses find encouraging — it is a traditional western and training material. The surface oxidizes to a blued or rusty appearance that looks alarming to newcomers but is the intended behavior, not damage. Sweet iron is valued specifically for promoting salivation and acceptance; the cost is that it does rust and is not as hygienic-looking as stainless.</p>

        <h2 id="german">German Silver (Nickel Silver)</h2>
        <p>German silver is a copper-nickel-zinc alloy with a warm golden tone and a sweetish taste that, like copper, is associated with encouraging salivation. It is harder and more durable than copper while keeping some of the acceptance benefit, which is why it is popular for quality mouthpieces. Riders with horses sensitive to nickel should note the nickel content.</p>

        <h2 id="synthetic">Synthetics &amp; Rubber</h2>
        <p>Rubber, vulcanite, and synthetic (e.g., flexible plastic) mouthpieces are softer and warmer than metal and can suit horses with very sensitive mouths or those that need a gentler introduction. They are thicker and lighter, and some horses chew through soft rubber, so durability and a horse that bites down hard are considerations. Flexible synthetic mouthpieces conform to the mouth and are popular for young or fussy horses.</p>

        <h2 id="choosing">Choosing a Material</h2>
        <ul>
          <li><strong>Horse accepts the bit well:</strong> stainless steel — durable and neutral.</li>
          <li><strong>Dry-mouthed or fussy, sets against the bit:</strong> copper-inlay, German silver, or sweet iron to encourage salivation.</li>
          <li><strong>Very sensitive mouth or young horse:</strong> a soft rubber or flexible synthetic to start.</li>
          <li><strong>Nickel-sensitive horse:</strong> avoid nickel-containing alloys; choose stainless or appropriate alternatives.</li>
        </ul>
        <p>Material is a refinement layered on correct bit shape, size, and fit. Get the mechanics right first using the <a href="/guides/bit-selection-guide">bit selection guide</a>, fit it correctly, and then use material to fine-tune acceptance.</p>

        <CalloutBox variant="note" title="Sources">
          British Horse Society (BHS) and pony club bitting references. Manufacturer mouthpiece material documentation (Sprenger, Neue Schule, and others). International Society for Equitation Science (ISES) bitting literature. Equine dental and oral comfort references from AAEP.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
