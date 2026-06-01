import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Western Tack Guide — Saddle, Bridle, Bits, Rigging | Saddle.com",
  description: "A western tack reference: the western saddle and tree, headstalls and bosals, western curb bits, rigging and cinches, and how a western set fits together.",
  path: "/guides/western-tack-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Western Tack Guide",
  description: "Western saddle, headstall, bit, rigging, and cinch reference — how western tack is built and fitted.",
  url: "https://saddle.com/guides/western-tack-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function WesternTackGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Western Tack — Built for Work", subtitle: "Western tack descends from the working ranch: a substantial saddle on a rigid tree, leverage curb bits ridden one-handed, and a rigging system built to take roping loads.", category: "Discipline Tack", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Western Tack Guide", href: "/guides/western-tack-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "A Working Tradition", href: "#tradition" },
          { label: "The Western Saddle", href: "#saddle" },
          { label: "Headstalls & Bosals", href: "#headstall" },
          { label: "Western Bits", href: "#bits" },
          { label: "Rigging & Cinches", href: "#rigging" },
          { label: "Building a Set", href: "#set" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Western Saddle Guide", href: "/guides/western-saddle-guide" },
          { label: "Western Riding Guide", href: "/guides/western-riding-guide" },
          { label: "Hackamore & Bitless Guide", href: "/guides/hackamore-bitless-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-western-tack-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Western tack is the equipment of the working stock horse, refined over generations of ranch and arena use. The saddle is heavy and rigid because it has to take roping and long-day loads; the curb bit is ridden one-handed on a loose rein by a horse trained to neck-rein; the rigging anchors a cinch built for security. Every piece descends from work.</DropCap>

        <CalloutBox variant="tip" title="The curb is for a finished horse on a loose rein">
          A western curb is ridden on a loose rein by a trained, finished horse responding to seat, leg, and neck-rein — not hauled on for steering. Young horses are started in a snaffle or bosal and progress to the curb only when light and finished. A curb used like a snaffle is misused.
        </CalloutBox>

        <h2 id="tradition">A Working Tradition</h2>
        <p>Western riding, detailed in the <a href="/guides/western-riding-guide">western riding guide</a>, grew from ranch work, and its tack is built for the job: security, durability, and one-handed control that leaves the other hand free to rope. The saddle, bridle, bit, and rigging all follow from that working heritage, even in the show ring.</p>

        <h2 id="saddle">The Western Saddle</h2>
        <p>The western saddle sits on a substantial rigid tree with bars, a fork, a horn, and a cantle, distributing the rider&apos;s weight (and roping loads) over a large skirt. It is heavier than an English saddle by design. Fit is set by the tree&apos;s bar angle and gullet width and cannot be flocked away — covered in detail in the <a href="/guides/western-saddle-guide">western saddle guide</a>. Discipline variants (roping, reining, trail, ranch, pleasure) differ in tree, horn, and skirt.</p>

        <h2 id="headstall">Headstalls &amp; Bosals</h2>
        <p>Western bridles are often headstalls — browband, one-ear (split-ear), or two-ear — frequently without a noseband, holding the bit simply. Young and started horses commonly go in a bosal (a rawhide hackamore worked with a mecate rope rein) before the bit, as covered in the <a href="/guides/hackamore-bitless-guide">hackamore and bitless guide</a>. The progression from snaffle or bosal to finished curb bridle is a hallmark of western training.</p>

        <h2 id="bits">Western Bits</h2>
        <p>The finished western horse is ridden in a curb bit — a leverage bit with shanks and a curb chain or strap, ridden one-handed on a loose rein. The leverage and the horse&apos;s training mean a light touch carries the message; severity rises with shank length and mouthpiece, as the <a href="/guides/bit-selection-guide">bit selection guide</a> explains. Snaffles are used for starting and schooling. Western shows specify legal bits by class.</p>

        <h2 id="rigging">Rigging &amp; Cinches</h2>
        <p>The rigging is the western girthing system attaching the cinch to the saddle, positioned (full, 7/8, 3/4, center-fire) to suit the horse and the job — roping rigs sit forward for security under load. The cinch (mohair, neoprene, or roper) ties to the rigging via the latigo, and a roping horse may carry a rear flank cinch as well. Cinch types and fit follow the <a href="/guides/girth-types-guide">girth types guide</a> and <a href="/guides/girth-fit-guide">girth fit guide</a>.</p>

        <h2 id="set">Building a Western Set</h2>
        <ul>
          <li><strong>Saddle:</strong> a discipline-appropriate western saddle, tree fitted to the horse.</li>
          <li><strong>Headstall:</strong> browband or split-ear, with a curb bit for a finished horse or a snaffle/bosal for a younger one.</li>
          <li><strong>Bit:</strong> a legal curb for the class, ridden one-handed on a loose rein.</li>
          <li><strong>Rigging and cinch:</strong> positioned for the job, with a breathable cinch fitted correctly.</li>
          <li><strong>Pad:</strong> a wool felt pad under a blanket for heat dissipation, per the <a href="/guides/saddle-pad-materials">pad materials guide</a>.</li>
        </ul>
        <p>Western tack is a coherent working system. Fitted to the horse and matched to the discipline and the horse&apos;s level of training, it equips everything from a ranch day to a reining pattern.</p>

        <CalloutBox variant="note" title="Sources">
          AQHA and western breed-association rulebooks and equipment rules. Vaquero and western horsemanship references on bosal and curb progression. Manufacturer western-saddle and rigging documentation. Society of Master Saddlers western-fit references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
