import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Leather Conditioner Guide — Oils, Balms, Creams | Saddle.com",
  description: "How to condition tack leather: neatsfoot oil, balsam, glycerine, and modern conditioners compared — how often, how much, and the over-oiling mistake.",
  path: "/guides/leather-conditioner-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Leather Conditioner Guide",
  description: "Neatsfoot oil, leather balsam, glycerine, and modern conditioners compared for tack care, with frequency and over-oiling cautions.",
  url: "https://saddle.com/guides/leather-conditioner-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function LeatherConditionerGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Leather Conditioners — Feeding Tack Without Ruining It", subtitle: "Conditioning keeps tack supple and safe, but the wrong product or too much of the right one weakens stitching and over-softens leather. Knowing what to use, and how little, is the skill.", category: "Leather Care", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Leather Conditioner Guide", href: "/guides/leather-conditioner-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Leather Needs Feeding", href: "#why" },
          { label: "Cleaning Comes First", href: "#clean" },
          { label: "Neatsfoot Oil", href: "#neatsfoot" },
          { label: "Balms & Creams", href: "#balm" },
          { label: "Glycerine", href: "#glycerine" },
          { label: "The Over-Oiling Mistake", href: "#over" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Leather Care Guide", href: "/guides/leather-care-guide" },
          { label: "Tack Cleaning Schedule", href: "/guides/tack-cleaning-schedule" },
          { label: "Leather Restoration Guide", href: "/guides/leather-restoration-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-leather-conditioner-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Leather is skin, and like skin it dries out, cracks, and fails if not kept supple — but it can also be over-fed until it goes greasy, weak, and loses its structure. Conditioning is a balance: enough to replace the oils sweat and weather strip out, never so much that the leather softens past the point of strength or the stitching rots.</DropCap>

        <CalloutBox variant="tip" title="Less, more often, beats a lot at once">
          A thin coat of conditioner applied regularly keeps leather healthier than a heavy soaking now and then. Too much product at once sits on the surface, attracts dirt, and can over-soften and weaken structural leather like billets and stirrup leathers. Build conditioning into routine, not into rescue.
        </CalloutBox>

        <h2 id="why">Why Leather Needs Feeding</h2>
        <p>Tack leather loses natural oils to sweat, water, sun, and time, becoming dry, stiff, and eventually cracked — at which point it is both unsightly and unsafe, because dry leather fails. Conditioning replaces those oils and keeps the leather flexible and strong. It is the second half of leather care, after cleaning, and it sits inside the routine in the <a href="/guides/tack-cleaning-schedule">tack cleaning schedule</a> and the broader <a href="/guides/leather-care-guide">leather care guide</a>.</p>

        <h2 id="clean">Cleaning Comes First</h2>
        <p>Never condition over dirt. Conditioning dirty leather seals grit and sweat salts into the hide, causing abrasion and accelerating wear. Clean first — wipe off mud and sweat, then use a glycerine or saddle soap to lift dirt — let the leather dry to just-damp, and then condition. Cleaning and conditioning are two steps, in that order, every time.</p>

        <h2 id="neatsfoot">Neatsfoot Oil</h2>
        <p>Neatsfoot oil is a traditional penetrating oil that softens and waterproofs leather deeply. It is excellent for reviving very dry or new stiff leather, but it penetrates aggressively and darkens leather, and used heavily or too often it over-softens and can weaken stitching and structural leather. Use it sparingly, mainly to recondition dry or new leather, and prefer a balm for routine maintenance. Note: pure neatsfoot oil differs from &quot;neatsfoot oil compound,&quot; which may contain petroleum distillates best avoided on quality tack.</p>

        <h2 id="balm">Balms &amp; Creams</h2>
        <p>Leather balms, balsams, and creams (beeswax- and lanolin-based conditioners, and proprietary products) are the modern routine choice: they condition without over-penetrating, often add a degree of water resistance, and do not darken leather as dramatically as neatsfoot. A quality balm applied thinly is the everyday conditioner for saddles, bridles, and reins. They suit regular light maintenance far better than heavy oils.</p>

        <h2 id="glycerine">Glycerine</h2>
        <p>Glycerine soap is primarily a cleaner that also leaves a light conditioning film, and glycerine bars are used to clean and lightly feed bridle and rein leather in one step. It is gentle and good for frequent use, but it is a cleaner-conditioner, not a substitute for periodic deeper conditioning with a balm. Many riders clean with glycerine routinely and condition with a balm periodically.</p>

        <h2 id="over">The Over-Oiling Mistake</h2>
        <ul>
          <li>Over-oiled leather goes greasy, dark, and floppy, losing the structure that makes it safe.</li>
          <li>Excess oil rots stitching over time, the failure point on billets and leathers.</li>
          <li>Greasy surfaces attract and hold dirt, accelerating abrasion.</li>
          <li>Structural leather — billets, stirrup leathers, reins — should stay supple but strong, never soft and stretchy; see the <a href="/guides/billet-care-guide">billet care guide</a>.</li>
        </ul>
        <p>Clean first, condition with a thin coat of balm routinely, reserve penetrating oils for reviving dry or new leather, and stop well short of greasy. Conditioned correctly, quality tack lasts decades; over-oiled, it weakens and fails. For heavily neglected leather, the <a href="/guides/leather-restoration-guide">leather restoration guide</a> covers the recovery process.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) leather-care references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Leather conservation and tannery care guidance. Manufacturer conditioner documentation. British Horse Society (BHS) tack-care references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
