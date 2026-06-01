import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Girth Types Guide — Anatomic, Stud, Dressage, Cinch | Saddle.com",
  description: "Girth and cinch types compared: anatomic, stud-guard, dressage, string, and western cinches — materials, shapes, and which suits which saddle and horse.",
  path: "/guides/girth-types-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Girth Types Guide",
  description: "English girths and western cinches compared — anatomic, stud-guard, dressage, string, and roller-buckle types, materials, and shapes.",
  url: "https://saddle.com/guides/girth-types-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function GirthTypesGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Girth Types — English Girths and Western Cinches", subtitle: "The girth keeps the saddle in place and presses against some of the most sensitive parts of the horse. Shape and material matter as much as length.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Girth Types Guide", href: "/guides/girth-types-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What the Girth Does", href: "#what" },
          { label: "Materials", href: "#materials" },
          { label: "Anatomic & Shaped", href: "#anatomic" },
          { label: "Stud-Guard Girths", href: "#stud" },
          { label: "Dressage (Short) Girths", href: "#dressage" },
          { label: "Western Cinches", href: "#cinch" },
          { label: "Choosing", href: "#choosing" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Girth Fit Guide", href: "/guides/girth-fit-guide" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
          { label: "Western Tack Guide", href: "/guides/western-tack-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-girth-types-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A girth has one job and several complications. The job is to hold the saddle securely in place. The complications are that it presses on the sternum, the elbow, and the sensitive girth groove, so its shape, edges, and material can make the difference between a comfortable horse and a girthy, resentful one.</DropCap>

        <CalloutBox variant="tip" title="Girthiness is often a fit signal">
          A horse that pins its ears, swishes, or nips when girthed is communicating. Before labeling it &quot;just girthy,&quot; rule out a girth that pinches the elbow, a non-anatomic shape, ulcers, or a saddle fit problem. Genuine behavioral girthiness is the diagnosis of last resort, not first.
        </CalloutBox>

        <h2 id="what">What the Girth Does</h2>
        <p>The girth (English) or cinch (western) secures the saddle by passing under the barrel and buckling to the billets or rigging. Because it sits in the girth groove just behind the elbow, it bears on sensitive structures and must clear the elbow&apos;s range of motion — fit is covered in detail in the <a href="/guides/girth-fit-guide">girth fit guide</a>. Type and shape determine how comfortably it does this.</p>

        <h2 id="materials">Materials</h2>
        <p>Common materials include leather (durable, traditional, conforms over time, needs conditioning per the <a href="/guides/leather-care-guide">leather care guide</a>), synthetic and neoprene (washable, grippy, but can trap heat and rub if not kept clean), string/mohair (breathable and traditional in western use), and cotton or fleece-lined (soft, washable, good for sensitive skin). Material choice trades durability and tradition against washability and breathability.</p>

        <h2 id="anatomic">Anatomic &amp; Shaped Girths</h2>
        <p>Anatomic (shaped or &quot;comfort&quot;) girths are cut away or curved behind the elbow to free the foreleg&apos;s movement and relieve pressure on the sternum. They are wider through the middle to spread pressure and narrow or contoured at the elbow. For horses that move short in front or object to girthing, an anatomic shape is often the single most effective change.</p>

        <h2 id="stud">Stud-Guard Girths</h2>
        <p>Stud-guard girths have a wide leather shield across the belly to protect the horse from its own studs (shoe studs used for grip in jumping) when it tucks its legs over a fence. They are a jumping and eventing item — see the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a> — and the broad belly panel also spreads pressure.</p>

        <h2 id="dressage">Dressage (Short) Girths</h2>
        <p>Dressage saddles use long billets, so they take a short girth that buckles low on the barrel, keeping the buckles away from the rider&apos;s leg for the close contact the <a href="/guides/close-contact-vs-all-purpose">dressage geometry</a> needs. Monoflap saddles likewise use a short girth. Short girths come in the same anatomic and material varieties as long girths.</p>

        <h2 id="cinch">Western Cinches</h2>
        <p>Western cinches attach to the rigging via the latigo and are commonly made of mohair or alpaca string (breathable, dissipates heat, traditional), neoprene (grippy, washable), or roper styles for working horses. The cinch ties or buckles to the latigo, and roping horses may use a rear (flank) cinch as well. Western girthing is covered in the <a href="/guides/western-tack-guide">western tack guide</a>.</p>

        <h2 id="choosing">Choosing a Girth</h2>
        <ul>
          <li><strong>Short or restricted front movement, girthiness:</strong> an anatomic shaped girth.</li>
          <li><strong>Jumping with studs:</strong> a stud-guard girth.</li>
          <li><strong>Dressage or monoflap saddle:</strong> a short girth matched to long billets.</li>
          <li><strong>Sensitive skin:</strong> soft cotton, fleece-lined, or mohair string; keep it clean.</li>
          <li><strong>Western:</strong> mohair or neoprene cinch suited to the discipline and climate.</li>
        </ul>
        <p>Whatever the type, correct length and placement matter more than any feature — turn to the <a href="/guides/girth-fit-guide">girth fit guide</a> next.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. British Horse Society (BHS) tack references. Manufacturer girth and cinch specifications. Equine biomechanics literature on girth-region pressure and foreleg movement.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
