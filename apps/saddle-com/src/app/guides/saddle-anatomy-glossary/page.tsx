import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Saddle Anatomy Glossary — Parts of a Saddle | Saddle.com",
  description: "A reference glossary of saddle parts: pommel, cantle, twist, gullet, panels, points, billets, knee rolls, stirrup bars, and western tree terms explained.",
  path: "/guides/saddle-anatomy-glossary",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Saddle Anatomy Glossary",
  description: "Reference glossary of English and western saddle parts and terms, from pommel and cantle to billets, gullet, and tree points.",
  url: "https://saddle.com/guides/saddle-anatomy-glossary",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SaddleAnatomyGlossaryPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Saddle Anatomy — A Reference Glossary", subtitle: "Buying, fitting, and caring for a saddle all depend on speaking its language. Here is the vocabulary of the English and western saddle, part by part.", category: "Saddle Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Saddle Anatomy Glossary", href: "/guides/saddle-anatomy-glossary" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Vocabulary Matters", href: "#why" },
          { label: "The Seat", href: "#seat" },
          { label: "Front of the Saddle", href: "#front" },
          { label: "Underside & Panels", href: "#underside" },
          { label: "Flaps & Blocks", href: "#flaps" },
          { label: "Girthing Hardware", href: "#girthing" },
          { label: "Western Terms", href: "#western" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Saddle Tree Types", href: "/guides/saddle-tree-types" },
          { label: "Saddle Panel Types", href: "/guides/saddle-panel-types" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-anatomy-glossary" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Every conversation about saddle fit, maintenance, and buying runs on a shared vocabulary — pommel and cantle, twist and gullet, panels and points, billets and bars. This glossary defines the terms used across the rest of the Saddle.com reference library so the fit and care guides read clearly.</DropCap>

        <CalloutBox variant="tip" title="Learn the underside first">
          The parts you can see — seat, flaps, pommel — matter less to the horse than the parts you cannot: the tree points, the panels, the gullet, and the bars. When assessing a saddle for a horse, turn it over first. The underside is where fit lives.
        </CalloutBox>

        <h2 id="why">Why the Vocabulary Matters</h2>
        <p>Saddle fitting, the <a href="/guides/used-saddle-buying-guide">used buying inspection</a>, and routine care all assume you can name the parts. A dealer describing &quot;medium tree points&quot; or a saddler noting &quot;dropped flocking at the rear gusset&quot; is speaking a precise language. This glossary maps it.</p>

        <h2 id="seat">The Seat</h2>
        <p><strong>Seat:</strong> the surface the rider sits on, measured as seat size (see the <a href="/guides/seat-size-guide">seat size guide</a>). <strong>Twist (waist):</strong> the narrowest part of the seat between the rider&apos;s thighs; a narrow twist suits narrower-hipped riders, a wide twist spreads the seat more. <strong>Deepest point / balance point:</strong> where the rider naturally settles; a level saddle places this correctly, as covered in the <a href="/guides/saddle-fit-guide">fit guide</a>.</p>

        <h2 id="front">Front of the Saddle</h2>
        <p><strong>Pommel:</strong> the raised front arch of an English saddle. <strong>Cantle:</strong> the raised rear of the seat. <strong>Head:</strong> the front arch of the tree that sets width. <strong>Points:</strong> the lower arms of the tree head that extend down each side and determine the angle of fit against the horse behind the shoulder — point angle and length are central to fit and to the <a href="/guides/saddle-tree-types">tree</a>.</p>

        <h2 id="underside">Underside &amp; Panels</h2>
        <p><strong>Gullet:</strong> the channel running the length of the saddle underside that must clear the spine — the daylight-through check from the fit guide. <strong>Panels:</strong> the stuffed cushions either side of the gullet that bear on the back; their shape is covered in the <a href="/guides/saddle-panel-types">panel types guide</a> and their stuffing in the <a href="/guides/saddle-flocking-guide">flocking guide</a>. <strong>Gusset:</strong> the depth-adding strip at the rear of a panel. <strong>Channel width:</strong> the gullet width, which must clear the spinous processes.</p>

        <h2 id="flaps">Flaps &amp; Blocks</h2>
        <p><strong>Flap:</strong> the leather panel the rider&apos;s leg rests against; its angle defines the discipline, as in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>. <strong>Sweat flap:</strong> the inner flap protecting horse and billets on a conventional (double-flap) saddle; absent on a <a href="/guides/monoflap-vs-double-flap-saddles">monoflap</a>. <strong>Knee roll / thigh block:</strong> padded supports positioning and securing the leg.</p>

        <h2 id="girthing">Girthing Hardware</h2>
        <p><strong>Billets (girth straps):</strong> the straps the girth buckles to; their condition is a safety item covered in the <a href="/guides/billet-care-guide">billet care guide</a>. <strong>Point billet:</strong> a billet attached to the tree point for stability. <strong>Stirrup bar:</strong> the metal bar under the flap the stirrup leather hangs from, usually with a safety catch. <strong>Girth:</strong> the band securing the saddle — types and fit are in the <a href="/guides/girth-types-guide">girth types guide</a>.</p>

        <h2 id="western">Western Terms</h2>
        <p><strong>Horn:</strong> the front projection used for roping and balance. <strong>Fork / swell:</strong> the front structure of the western tree the horn sits on. <strong>Cantle:</strong> the rear of the western seat. <strong>Bars:</strong> the long underside members of the western tree that bear on the back; bar angle and spread set western fit, covered in the <a href="/guides/western-saddle-guide">western saddle guide</a>. <strong>Skirt:</strong> the large leather underside panel. <strong>Rigging:</strong> the western girthing system attaching the cinch. <strong>Cinch:</strong> the western girth. <strong>Latigo:</strong> the strap tying the cinch to the rigging.</p>
        <p>With these terms in hand, the rest of the reference library — fit, care, and buying — reads as a single connected vocabulary rather than a set of disconnected articles.</p>

        <CalloutBox variant="note" title="Sources">
          Society of Master Saddlers (SMS) &mdash; saddle construction and terminology, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Master Saddlers Association (US). Western saddle maker terminology references. Standard equestrian reference texts on saddle construction.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
