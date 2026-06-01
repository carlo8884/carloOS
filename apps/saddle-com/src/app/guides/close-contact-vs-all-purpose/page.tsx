import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Close Contact vs All-Purpose Saddles | Saddle.com",
  description: "Close-contact, all-purpose, dressage, and jumping saddles compared: flap angle, seat depth, knee blocks, and which English saddle suits which rider.",
  path: "/guides/close-contact-vs-all-purpose",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Close Contact vs All-Purpose Saddles",
  description: "English saddle styles compared — close-contact, all-purpose, dressage, and jumping geometry, flap angle, and seat depth.",
  url: "https://saddle.com/guides/close-contact-vs-all-purpose",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function CloseContactVsAllPurposePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Close Contact vs All-Purpose — English Saddle Styles", subtitle: "The English saddle market is organized by discipline geometry. Flap angle, seat depth, and block placement tell you what a saddle is built to do before you ever sit in it.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Close Contact vs All-Purpose", href: "/guides/close-contact-vs-all-purpose" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Geometry Tells the Story", href: "#geometry" },
          { label: "Close-Contact / Jumping", href: "#cc" },
          { label: "All-Purpose", href: "#ap" },
          { label: "Dressage", href: "#dressage" },
          { label: "Seat Depth & Blocks", href: "#seat" },
          { label: "Can One Saddle Do It All?", href: "#one" },
          { label: "Choosing", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Best English Saddles", href: "/reviews/best-english-saddles" },
          { label: "Monoflap vs Double-Flap", href: "/guides/monoflap-vs-double-flap-saddles" },
          { label: "English Riding Guide", href: "/guides/english-riding-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-close-contact-vs-all-purpose" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>An English saddle&apos;s discipline is written into its shape. The angle of the flap, the depth of the seat, and the size and placement of the knee and thigh blocks all follow from whether the saddle is built for the long leg of dressage, the forward leg of jumping, or the compromise of all-purpose riding. Reading that geometry is the first step in buying right.</DropCap>

        <CalloutBox variant="tip" title="Buy for what you ride 80% of the time">
          The most common buying mistake is choosing a versatile all-purpose saddle and then doing one discipline almost exclusively. If you ride dressage four days a week and jump once a month, a dressage saddle will serve you far better than an all-purpose compromise. Match the saddle to your dominant discipline, not your occasional one.
        </CalloutBox>

        <h2 id="geometry">Geometry Tells the Story</h2>
        <p>Three features define an English saddle&apos;s discipline: flap angle (how far forward the flap is cut), seat depth (how much the seat cradles the rider), and the rider&apos;s leg position the saddle encourages. These follow from the position each discipline needs — explained in the <a href="/guides/english-riding-guide">English riding guide</a> — and they are why a jumping saddle feels wrong for flatwork and vice versa.</p>

        <h2 id="cc">Close-Contact / Jumping Saddles</h2>
        <p>Close-contact saddles have a forward-cut flap to accommodate the shorter stirrup and bent knee of jumping position, a flatter and shallower seat that lets the rider move into two-point easily, and minimal bulk for the closest possible feel at speed. Knee rolls support the forward leg. Hunters and equitation use a more conservative cut; grand-prix jumpers use the most forward, minimal builds — the Pessoa Gen X in the <a href="/reviews/best-english-saddles">English saddle reviews</a> is the archetype.</p>

        <h2 id="ap">All-Purpose Saddles</h2>
        <p>All-purpose (AP) saddles split the difference: a moderately forward flap, a medium seat, and blocks that support both flatwork and low jumping. They suit riders who genuinely do a bit of everything — flatwork, low fences, hacking, lessons — and growing riders who are not yet specialized. The honest limitation is that an AP does nothing as well as a specialist saddle; it is a versatility tool, not a performance one.</p>

        <h2 id="dressage">Dressage Saddles</h2>
        <p>Dressage saddles have a long, straight-cut flap for the long-leg, deep-seat position, a deep seat that places the rider over the seat bones, and often pronounced thigh blocks. Long billets and a short girth are standard so the buckles do not sit under the leg. The geometry is built entirely around flatwork and the vertical, balanced seat the <a href="/guides/dressage-basics-guide">dressage basics guide</a> describes.</p>

        <h2 id="seat">Seat Depth &amp; Blocks</h2>
        <p>Seat depth runs from flat (jumping) through medium (AP) to deep (dressage). Knee and thigh blocks vary from minimal to large; large blocks add security but reduce freedom, and over-blocking can lock a rider into one position. Block size is partly personal preference and partly discipline convention — try before committing, because a block that feels secure at the dealer can feel restrictive after an hour.</p>

        <h2 id="one">Can One Saddle Do It All?</h2>
        <p>An all-purpose can cover light, mixed riding adequately. But the more serious you are about any one discipline, the more a specialist saddle pays off — in position, in feel, and in the horse&apos;s comfort, since discipline saddles also shape the panel and balance for the work. Eventers, who must do three disciplines, often own more than one saddle or use a versatile event-specific build, covered in the <a href="/guides/eventing-tack-guide">eventing tack guide</a>.</p>

        <h2 id="choosing">Choosing</h2>
        <ul>
          <li><strong>Mostly flatwork / dressage:</strong> a dressage saddle, deep seat, straight flap.</li>
          <li><strong>Mostly jumping / hunters / equitation:</strong> a close-contact saddle matched to how forward you ride.</li>
          <li><strong>Genuinely mixed or beginner:</strong> an all-purpose saddle.</li>
          <li><strong>Eventing across phases:</strong> an event-specific saddle or more than one.</li>
        </ul>
        <p>Whatever the style, fit to the horse comes first — the <a href="/guides/saddle-fit-guide">saddle fit guide</a> applies to every English saddle regardless of discipline geometry.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; saddle styles and fitting materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. USEF and FEI discipline rulebooks and equipment references. Manufacturer published model geometry specifications.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
