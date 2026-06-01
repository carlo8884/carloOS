import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Dressage Tack Guide — Saddle, Bridle, Legal Equipment | Saddle.com",
  description: "A complete dressage tack reference: dressage saddle geometry, snaffle and double bridles, legal bits and nosebands, and what the FEI rulebook permits.",
  path: "/guides/dressage-tack-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Dressage Tack Guide",
  description: "Dressage saddle, bridle, bit, and equipment reference aligned with FEI and national dressage rules.",
  url: "https://saddle.com/guides/dressage-tack-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function DressageTackGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Dressage Tack — The Discipline of Restraint", subtitle: "Dressage tack is defined as much by what the rulebook forbids as by what it requires. Correct, legal, well-fitted equipment is the foundation the training scale is built on.", category: "Discipline Tack", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Dressage Tack Guide", href: "/guides/dressage-tack-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "A Regulated Discipline", href: "#regulated" },
          { label: "The Dressage Saddle", href: "#saddle" },
          { label: "Snaffle & Double Bridles", href: "#bridle" },
          { label: "Legal Bits", href: "#bits" },
          { label: "Nosebands & Whips", href: "#nosebands" },
          { label: "Building a Set", href: "#set" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Dressage Basics Guide", href: "/guides/dressage-basics-guide" },
          { label: "Double Bridle Guide", href: "/guides/double-bridle-guide" },
          { label: "Close Contact vs All-Purpose", href: "/guides/close-contact-vs-all-purpose" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-dressage-tack-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Dressage is the most equipment-regulated of the everyday disciplines, and its tack reflects that: a deep-seated saddle built for the long-leg position, a snaffle or double bridle within strict limits, legal bits and nosebands, and a whip and spurs governed by the rulebook. Getting the tack right is the unglamorous foundation under the training scale.</DropCap>

        <CalloutBox variant="tip" title="Legal at your level is not legal at every level">
          Dressage tack rules vary by level — a double bridle permitted (or required) at upper levels is not allowed at lower ones, where a snaffle is mandated. Always confirm what is legal for the specific test and level you are riding before you compete. The rulebook is the authority.
        </CalloutBox>

        <h2 id="regulated">A Regulated Discipline</h2>
        <p>FEI and national dressage rules specify saddle type, permitted bridles and bits, noseband types, whip length, and spurs in detail, and stewards enforce them. The tack serves the position and aids described in the <a href="/guides/dressage-basics-guide">dressage basics guide</a>. This guide covers the equipment; always cross-check the current rulebook for your level.</p>

        <h2 id="saddle">The Dressage Saddle</h2>
        <p>A dressage saddle has the deep seat, long straight-cut flap, and often pronounced thigh blocks that place and hold the rider in the long-leg, vertical-seat position — the geometry contrasted with jumping saddles in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>. Long billets pair with a short girth so buckles sit clear of the leg. Fit to the horse follows the universal principles in the <a href="/guides/saddle-fit-guide">saddle fit guide</a>; the <a href="/fit/dressage-saddle-fit">dressage fit reference</a> covers discipline-specific checkpoints.</p>

        <h2 id="bridle">Snaffle &amp; Double Bridles</h2>
        <p>Lower levels are ridden in a snaffle bridle; upper levels permit and often expect the double bridle covered in the <a href="/guides/double-bridle-guide">double bridle guide</a>. The snaffle bridle is a plain or flash-noseband headstall with a single bit; the double carries a bradoon and Weymouth on separate cheekpieces. The transition from snaffle to double is a training milestone, not just an equipment change — the horse must be confirmed and soft before the double is appropriate.</p>

        <h2 id="bits">Legal Bits</h2>
        <p>Dressage rules specify permitted snaffle and curb bit types, mouthpieces, and dimensions, generally allowing a range of snaffles (single- and double-jointed, with restrictions on severity) and the Weymouth/bradoon combination for the double. Severe or unconventional bits are prohibited. Mouthpiece materials — covered in the <a href="/guides/bit-materials-guide">bit materials guide</a> — are largely a matter of acceptance within the legal shapes. Check the rulebook&apos;s bit appendix for your level.</p>

        <h2 id="nosebands">Nosebands &amp; Whips</h2>
        <p>Permitted nosebands include the cavesson, flash, and (at some levels) crank, fitted to the two-finger standard in the <a href="/guides/bridle-fit-guide">bridle fit guide</a> — noseband tightness is increasingly checked with a taper gauge at competition. Whip length and use, and spur type and length (see the <a href="/guides/spurs-guide">spurs guide</a>), are specified and limited, with whips often barred in championship arenas. All are rulebook matters that change, so confirm the current season&apos;s rule.</p>

        <h2 id="set">Building a Dressage Set</h2>
        <ul>
          <li><strong>Saddle:</strong> a well-fitted dressage saddle, deep seat, long flap, short girth.</li>
          <li><strong>Bridle:</strong> a snaffle bridle for lower levels; a double for upper levels once the horse is confirmed.</li>
          <li><strong>Bit:</strong> a legal snaffle, fitted correctly, in a material the horse accepts.</li>
          <li><strong>Noseband:</strong> a permitted type, fitted to two fingers, never cranked tight.</li>
          <li><strong>Turnout:</strong> per the <a href="/guides/show-attire-guide">show attire guide</a>, with a certified helmet.</li>
        </ul>
        <p>Dressage tack is about correctness within rules and comfort for the horse — the discipline rewards quiet, legal, well-fitted equipment and penalizes anything severe or non-compliant. Build the set to the rulebook and the horse, and the tack disappears so the training can show.</p>

        <CalloutBox variant="note" title="Sources">
          FEI Dressage Rules and bit/equipment appendices. USEF and British Dressage rulebooks. Society of Master Saddlers (SMS) fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. International Society for Equitation Science (ISES) on noseband and bit fit.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
