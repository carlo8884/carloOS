import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Monoflap vs Double-Flap Saddles — Compared | Saddle.com",
  description: "Monoflap and double-flap (conventional) saddles compared: closeness of contact, weight, billet systems, fit adjustment, and which disciplines favor each.",
  path: "/guides/monoflap-vs-double-flap-saddles",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Monoflap vs Double-Flap Saddles",
  description: "Monoflap versus conventional double-flap saddle construction — contact, weight, billets, and discipline fit.",
  url: "https://saddle.com/guides/monoflap-vs-double-flap-saddles",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function MonoflapVsDoubleFlapSaddlesPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Monoflap vs Double-Flap Saddles", subtitle: "The single-flap design strips bulk from under the leg for a closer feel; the conventional double flap offers more billet flexibility and a familiar build. Each has a clear best use.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Monoflap vs Double-Flap", href: "/guides/monoflap-vs-double-flap-saddles" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "The Construction Difference", href: "#construction" },
          { label: "Closeness of Contact", href: "#contact" },
          { label: "Weight", href: "#weight" },
          { label: "Billets & Girthing", href: "#billets" },
          { label: "Fit Adjustment", href: "#fit" },
          { label: "By Discipline", href: "#discipline" },
          { label: "Which to Buy", href: "#which" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Close Contact vs All-Purpose", href: "/guides/close-contact-vs-all-purpose" },
          { label: "Eventing Tack Guide", href: "/guides/eventing-tack-guide" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-monoflap-vs-double-flap-saddles" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A monoflap saddle replaces the conventional two-layer flap-and-sweat-flap with a single flap and an integrated short-billet system. The result is less leather between the rider&apos;s leg and the horse — a closer feel that French eventing and dressage makers built their reputations on. Whether that closeness is worth the trade-offs depends entirely on what you ride.</DropCap>

        <CalloutBox variant="tip" title="Closeness is not a fit shortcut">
          A monoflap brings your leg closer to the horse, but it does nothing for tree width, panel shape, or balance. A poorly fitted monoflap is still a poorly fitted saddle. Treat the closeness as a feel preference layered on top of correct fit, never as a substitute for it.
        </CalloutBox>

        <h2 id="construction">The Construction Difference</h2>
        <p>A conventional saddle has an outer flap the rider&apos;s leg rests against and, beneath it, a sweat flap protecting the horse and the long girth billets. A monoflap combines these into a single flap and uses short billets that buckle to a special short girth, removing a full layer of leather and the buckle bulk from under the leg.</p>
        <p>This is a construction choice independent of discipline — there are monoflap dressage, jumping, and eventing saddles, just as there are conventional versions of each. It interacts with the <a href="/guides/saddle-tree-types">tree</a> and panel like any other build detail.</p>

        <h2 id="contact">Closeness of Contact</h2>
        <p>The headline benefit is contact. Removing a leather layer and the long-billet buckles lets the rider&apos;s leg lie closer and flatter against the horse&apos;s barrel, which many riders find improves feel and the subtlety of the leg aid. French makers such as those covered in the <a href="/guides/french-saddle-makers">French saddle makers reference</a> built a following on exactly this feel.</p>

        <h2 id="weight">Weight</h2>
        <p>A monoflap is lighter — one fewer flap and shorter billets remove material. For eventers riding three phases and for smaller riders, the weight saving is meaningful. The difference is modest in absolute terms but noticeable over a long day.</p>

        <h2 id="billets">Billets &amp; Girthing</h2>
        <p>Monoflaps use short billets and require a short (dressage-style or special monoflap) girth. This is the main practical adjustment for owners switching from conventional: the existing long girth will not work, and the short-billet system places the buckles low against the horse&apos;s side, which suits some horses better and a few worse. Billet condition and replacement are the same maintenance concern as any saddle — see the <a href="/guides/billet-care-guide">billet care guide</a>.</p>

        <h2 id="fit">Fit Adjustment</h2>
        <p>Because the monoflap integrates the billets and flap more tightly, some riders find the saddle slightly less forgiving to alterations, though a saddler can still reflock and adjust the panel normally on a wool-flocked monoflap. The single flap also shows wear and scuffs more visibly, since there is no outer flap protecting it.</p>

        <h2 id="discipline">By Discipline</h2>
        <ul>
          <li><strong>Eventing:</strong> monoflap is very popular — light, close, and suited to a forward cross-country position. See the <a href="/guides/eventing-tack-guide">eventing tack guide</a>.</li>
          <li><strong>Dressage:</strong> monoflap dressage saddles are common at upper levels for the close leg contact.</li>
          <li><strong>Show jumping / hunters:</strong> a mix; some riders prefer the traditional double flap for the familiar feel and the showing aesthetic.</li>
        </ul>

        <h2 id="which">Which to Buy</h2>
        <p>Choose a monoflap if closeness of contact and lighter weight are priorities and you are happy to use a short girth — eventers and dressage riders are the natural fit. Choose a conventional double flap if you prefer the traditional feel, want a saddle that hides scuffs under an outer flap, or compete in disciplines where the conventional look is expected. In both cases, fit on the horse decides everything; the flap design is a refinement on top of a correctly fitted saddle. Compare disciplines in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; saddle construction materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer published construction specifications (French and English makers). USEF and FEI discipline equipment references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
