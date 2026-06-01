import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Breeches Fabric Guide — Grip, Seat Types, Fabrics | Saddle.com",
  description: "Riding breeches and jodhpurs explained: full-seat vs knee-patch, silicone grip, four-way stretch fabrics, schooling tights, and what suits each discipline.",
  path: "/guides/breeches-fabric-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Breeches Fabric Guide",
  description: "Full-seat and knee-patch breeches, silicone grip, technical stretch fabrics, and schooling tights compared by discipline.",
  url: "https://saddle.com/guides/breeches-fabric-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BreechesFabricGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Breeches &amp; Riding Tights — Seat, Grip, and Fabric", subtitle: "Breeches are the rider&apos;s working garment. Seat type and grip influence stability in the saddle; fabric influences comfort, breathability, and how the breeches wear.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Breeches Fabric Guide", href: "/guides/breeches-fabric-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Breeches Are Technical", href: "#why" },
          { label: "Full-Seat vs Knee-Patch", href: "#seat" },
          { label: "Grip Materials", href: "#grip" },
          { label: "Fabrics & Stretch", href: "#fabric" },
          { label: "Tights & Schooling", href: "#tights" },
          { label: "By Discipline", href: "#discipline" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Show Attire Guide", href: "/guides/show-attire-guide" },
          { label: "Tall Boots vs Paddock Boots", href: "/guides/tall-boots-vs-paddock-boots" },
          { label: "English Riding Guide", href: "/guides/english-riding-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-breeches-fabric-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Breeches are cut and built for one purpose: to let the rider sit and move in the saddle without bulk, chafing, or slipping. Seat type and grip material affect how securely the rider stays put; fabric affects breathability, stretch, and durability. The right pair disappears under the rider; the wrong pair rubs, slips, or restricts.</DropCap>

        <CalloutBox variant="tip" title="Full-seat grip is a training aid, not just security">
          Full-seat breeches keep the seat planted, which is excellent for dressage stability — but riders learning an independent seat should be sure they are developing balance, not relying on grip to stay on. Use grip to refine a secure position, not to paper over a developing one.
        </CalloutBox>

        <h2 id="why">Why Breeches Are Technical</h2>
        <p>Unlike ordinary trousers, breeches are cut without inner-leg seams that would chafe against the saddle, made of stretch fabric to allow the deep hip and knee angles of riding, and finished with grip in the seat or knee. They support the position taught in the <a href="/guides/english-riding-guide">English riding guide</a>. The two big decisions are seat type and grip material.</p>

        <h2 id="seat">Full-Seat vs Knee-Patch</h2>
        <p><strong>Full-seat breeches</strong> have grip material across the entire seat and inner thigh, maximizing the contact and stability favored in dressage where a deep, planted seat matters. <strong>Knee-patch breeches</strong> have grip only at the knee, leaving the seat free to move out of the saddle — preferred in jumping and for general riding where the rider needs to rise into two-point. The choice follows the discipline&apos;s seat: planted for dressage, mobile for jumping.</p>

        <h2 id="grip">Grip Materials</h2>
        <p>Grip is usually silicone (printed or molded), synthetic suede (clarino), or leather. <strong>Silicone</strong> grips strongly in all conditions and is the modern standard, though patterns vary in tackiness. <strong>Synthetic suede</strong> gives a softer, traditional grip that breathes well. <strong>Leather</strong> is durable and classic but heavier and needs care. Grip strength is partly preference — very tacky silicone locks the seat, which some riders love and others find restrictive.</p>

        <h2 id="fabric">Fabrics &amp; Stretch</h2>
        <p>Modern breeches use technical four-way-stretch blends (often nylon or polyester with elastane/spandex) that move with the rider, wick sweat, and hold their shape. Cotton-blend breeches breathe well but stretch and crease more. Heavier fabrics suit winter; lightweight, mesh-paneled fabrics suit summer. Four-way stretch (stretching both directions) is the key feature for unrestricted movement and is now standard in quality breeches.</p>

        <h2 id="tights">Tights &amp; Schooling Breeches</h2>
        <p>Riding tights (pull-on, no zip or button, often with phone pockets and silicone grip) have become a popular everyday and schooling option — comfortable, stretchy, and quick to wear, though less formal than traditional breeches. Schooling breeches in everyday colors serve daily riding; show breeches in white or pale shades are reserved for competition turnout, as the <a href="/guides/show-attire-guide">show attire guide</a> covers.</p>

        <h2 id="discipline">By Discipline</h2>
        <ul>
          <li><strong>Dressage:</strong> full-seat breeches, often white for showing, for a planted seat.</li>
          <li><strong>Jumping / eventing:</strong> knee-patch breeches for a mobile seat and two-point.</li>
          <li><strong>Everyday / schooling:</strong> knee-patch breeches or riding tights in practical colors.</li>
          <li><strong>Hot climates:</strong> lightweight, mesh-paneled technical fabric; cold climates, fleece-lined or heavier weaves.</li>
        </ul>
        <p>Match seat type to your discipline&apos;s seat, choose grip strength to suit your preference, and pick fabric for your climate and how hard you ride. Paired with the right boots from the <a href="/guides/tall-boots-vs-paddock-boots">boots guide</a>, well-chosen breeches let the rider focus on the horse rather than the kit.</p>

        <CalloutBox variant="note" title="Sources">
          USEF and FEI dress and turnout rules by discipline. Manufacturer fabric and grip documentation. British Horse Society (BHS) rider-equipment references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
