import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Breastplate & Martingale Guide — Types & Fit | Saddle.com",
  description: "Breastplates and martingales explained: running, standing, Irish, bib, hunting and five-point breastplates — their purpose, action, and correct fit.",
  path: "/guides/breastplate-martingale-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Breastplate and Martingale Guide",
  description: "Running, standing, Irish, and bib martingales plus hunting and five-point breastplates — purpose, action, and fitting.",
  url: "https://saddle.com/guides/breastplate-martingale-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function BreastplateMartingaleGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Breastplates &amp; Martingales", subtitle: "One keeps the saddle from sliding back; the other influences head carriage. Both are widely fitted incorrectly, and both can do harm when they are.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Breastplate & Martingale Guide", href: "/guides/breastplate-martingale-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Two Different Jobs", href: "#jobs" },
          { label: "Breastplate Types", href: "#breastplate" },
          { label: "Running Martingale", href: "#running" },
          { label: "Standing Martingale", href: "#standing" },
          { label: "Bib & Irish Martingales", href: "#bib" },
          { label: "Fitting Both", href: "#fit" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Show Jumping Tack Guide", href: "/guides/show-jumping-tack-guide" },
          { label: "Horse Bridle Guide", href: "/guides/horse-bridle-guide" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-breastplate-martingale-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A breastplate stops the saddle sliding backward on a horse with a poor wither or up steep terrain. A martingale acts on the reins or noseband to discourage a horse from carrying its head too high. They are often confused because some designs combine the two, but their purposes are distinct and their fitting rules unforgiving.</DropCap>

        <CalloutBox variant="tip" title="A martingale is not a fix for a head problem">
          A horse that carries its head high or tosses it is usually answering a question about pain, balance, or training — a martingale that physically limits the head does not address the cause. Rule out teeth, the <a href="/guides/bridle-fit-guide">bridle fit</a>, the bit, and the saddle first. A martingale is a refinement for an established horse, not a corrective shortcut.
        </CalloutBox>

        <h2 id="jobs">Two Different Jobs</h2>
        <p>A <strong>breastplate</strong> attaches to the saddle and girth and goes around the chest to stop the saddle from sliding backward — important on horses with flat or mutton withers, on hills, and in fast work. A <strong>martingale</strong> attaches to the girth and runs up to the reins or noseband to set a limit on how high the horse can raise its head before pressure is applied. Some breastplates incorporate a martingale attachment, which is the source of the common confusion.</p>

        <h2 id="breastplate">Breastplate Types</h2>
        <p>The <strong>hunting breastplate</strong> is a Y of straps from a neck strap to the saddle Dees and down to the girth — simple and common in jumping and hunting. The <strong>five-point breastplate</strong> adds attachments and an elastic chest insert for a closer, more stabilizing fit, popular in eventing and covered in the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a>. The <strong>polo/stockman breastplate</strong> uses a broad chest band for working horses. All keep the saddle forward without restricting the shoulder when correctly fitted.</p>

        <h2 id="running">Running Martingale</h2>
        <p>The running martingale splits into two straps ending in rings, through which the reins pass. It acts only when the horse raises its head above the point where the rein angle changes, applying downward pressure via the bit. Used with rein stops (to prevent the rings catching on the bit) and correctly fitted, it gives a degree of influence on a horse that throws its head, and is the most common jumping martingale.</p>

        <h2 id="standing">Standing Martingale</h2>
        <p>The standing martingale runs from the girth to the noseband (not the reins), acting directly on the nose to limit head height. It is common in hunting and some jumping. It is more fixed in its action than a running martingale and must be fitted so it only engages when the head is raised excessively, never to tie the head down. It is prohibited in some disciplines and dressage.</p>

        <h2 id="bib">Bib &amp; Irish Martingales</h2>
        <p>The <strong>Irish martingale</strong> is a short strap with a ring at each end joining the two reins under the neck — it does not limit head height; it only stops the reins coming over the head in a fall or if the horse throws its head violently (a racing and safety item). The <strong>bib martingale</strong> is a running martingale with a leather bib between the straps to prevent an excitable horse catching a ring, used on strong racehorses.</p>

        <h2 id="fit">Fitting Both Correctly</h2>
        <ul>
          <li><strong>Breastplate:</strong> a hand&apos;s width of clearance at the chest; it should not restrict the shoulder or pull the saddle forward into the withers. Check it does not interfere with the <a href="/guides/saddle-fit-guide">saddle&apos;s fit</a>.</li>
          <li><strong>Running martingale:</strong> with the reins attached and the horse&apos;s head in a normal working position, the rings should reach to about the withers or throat — they should create no rein angle until the head is raised too high.</li>
          <li><strong>Standing martingale:</strong> should reach up to the throat/gullet when held to the noseband; it engages only on an excessively raised head.</li>
          <li>Use rein stops with a running martingale, and confirm the discipline permits the martingale you choose.</li>
        </ul>
        <p>Both are aids to be fitted to engage only at the extreme of movement, never to hold the horse in a frame. Fitted that way, a breastplate keeps the saddle secure and a martingale gives gentle influence; fitted tightly, both cause resistance and can be dangerous.</p>

        <CalloutBox variant="note" title="Sources">
          British Horse Society (BHS) and pony club tack references. USEF and FEI rulebooks on permitted martingales by discipline. Manufacturer breastplate and martingale specifications. Equine welfare guidance on head-restraint devices.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
