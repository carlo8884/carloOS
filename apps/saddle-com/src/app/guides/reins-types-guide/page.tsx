import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Reins Types Guide — Laced, Rubber, Web, Mecate | Saddle.com",
  description: "Rein types compared: plain leather, laced, rubber-grip, web, continental, and western split and mecate reins — grip, feel, and discipline suitability.",
  path: "/guides/reins-types-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Reins Types Guide",
  description: "Plain, laced, rubber-grip, web, continental, and western split and mecate reins compared for grip, feel, and discipline.",
  url: "https://saddle.com/guides/reins-types-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function ReinsTypesGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Reins — Grip, Feel, and the Connection to the Mouth", subtitle: "Reins are the rider&apos;s direct line to the bit. Their material and surface decide grip in the wet, feel through the contact, and how secure they are at speed.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Reins Types Guide", href: "/guides/reins-types-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Reins as the Connection", href: "#connection" },
          { label: "Plain Leather", href: "#plain" },
          { label: "Laced & Rubber Grip", href: "#grip" },
          { label: "Web & Continental", href: "#web" },
          { label: "Western Split & Mecate", href: "#western" },
          { label: "Choosing", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Horse Bridle Guide", href: "/guides/horse-bridle-guide" },
          { label: "Bit Selection Guide", href: "/guides/bit-selection-guide" },
          { label: "Western Tack Guide", href: "/guides/western-tack-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-reins-types-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Reins are the most direct piece of tack between rider and horse — every nuance of contact passes through them. The difference between plain leather that turns slippery in rain and a grippy rubber rein that holds in a gallop is not cosmetic; it is the security and clarity of the connection to the bit described in the <a href="/guides/bit-selection-guide">bit selection guide</a>.</DropCap>

        <CalloutBox variant="tip" title="Grip where you need it, feel where you do not">
          Match rein grip to the work. Galloping and jumping in the wet reward rubber or laced grip; refined flatwork rewards the direct feel of plain or web reins. There is no single best rein — there is the right rein for the discipline and the conditions you ride in.
        </CalloutBox>

        <h2 id="connection">Reins as the Connection</h2>
        <p>The rein carries the rider&apos;s contact to the bit, so its surface (grip versus slip), weight, and width all affect how clearly and securely that contact is held. A rein that slips in wet weather or under a strong horse compromises both safety and communication. Rein choice pairs with the bridle and bit — see the <a href="/guides/horse-bridle-guide">bridle guide</a> — and varies sharply between English and western traditions.</p>

        <h2 id="plain">Plain Leather Reins</h2>
        <p>Plain leather reins are smooth, elegant, and traditional, giving a direct, unfiltered feel of the contact prized in dressage and showing. The trade-off is grip: smooth leather becomes slippery when wet or sweaty, which is why they are less common in fast or foul-weather work. They need regular conditioning to stay supple and safe, per the <a href="/guides/leather-care-guide">leather care guide</a>.</p>

        <h2 id="grip">Laced &amp; Rubber-Grip Reins</h2>
        <p><strong>Laced reins</strong> have leather laces stitched along the rein for extra grip while keeping a leather feel — a hunter and jumper standard. <strong>Rubber-grip reins</strong> have a rubber or pimpled-rubber coating on the hand portion for maximum grip in the wet and at speed, the choice for jumping, eventing, and racing. Rubber reins are heavier and less refined in feel but far more secure when the hands are wet.</p>

        <h2 id="web">Web &amp; Continental Reins</h2>
        <p><strong>Web reins</strong> are made of woven webbing, often with leather stops, giving light weight and reasonable grip — common in racing and for riders who want a lighter rein than rubber. <strong>Continental (German martingale-style or multi-grip) reins</strong> have leather stops at intervals along a web rein, giving fixed hand positions useful for teaching consistent rein length and for cross-country. Both are lighter and grippier than plain leather.</p>

        <h2 id="western">Western Split &amp; Mecate Reins</h2>
        <p><strong>Split reins</strong> are two separate reins not joined at the ends, standard in western riding — they allow ground-tying and a particular rein handling, and their length and weight suit western work. <strong>Romal reins</strong> are joined with a quirt-like romal attached, traditional in reined cow-horse and vaquero classes. The <strong>mecate</strong> is a single long rope rein used with a bosal or snaffle, doubling as a lead — covered with the bosal in the <a href="/guides/hackamore-bitless-guide">hackamore and bitless guide</a> and the <a href="/guides/western-tack-guide">western tack guide</a>.</p>

        <h2 id="choosing">Choosing Reins</h2>
        <ul>
          <li><strong>Dressage / showing:</strong> plain or laced leather for direct feel.</li>
          <li><strong>Jumping / eventing / wet conditions:</strong> rubber-grip or laced for security.</li>
          <li><strong>Cross-country / teaching rein length:</strong> continental web with stops.</li>
          <li><strong>Western:</strong> split, romal, or mecate to suit the class and tradition.</li>
        </ul>
        <p>Whatever you choose, keep leather reins conditioned and all reins in sound repair — a rein that fails is a serious safety event. Match grip to your conditions and feel to your discipline, and the connection to the bit stays both clear and secure.</p>

        <CalloutBox variant="note" title="Sources">
          British Horse Society (BHS) tack references. USEF and FEI rulebooks on permitted reins by discipline. Western horsemanship references on split, romal, and mecate reins. Manufacturer rein specifications.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
