import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "French Saddle Makers — Antares, Devoucoux, CWD, Delgrange | Saddle.com",
  description: "The French saddle makers: Antares, Devoucoux, CWD, Delgrange, and Childeric — the bespoke fitting tradition and close-contact reputation.",
  path: "/guides/french-saddle-makers",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "French Saddle Makers",
  description: "Antares, Devoucoux, CWD, Delgrange, and Childeric — the French bespoke saddle tradition, close-contact reputation, and house characteristics.",
  url: "https://saddle.com/guides/french-saddle-makers",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function FrenchSaddleMakersPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "French Saddle Makers — The Bespoke Close-Contact Tradition", subtitle: "France produces the most coveted close-contact and jumping saddles in the sport, built on a bespoke fitting model and a reputation for a uniquely close, refined feel.", category: "Brand Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "French Saddle Makers", href: "/guides/french-saddle-makers" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "The French Tradition", href: "#tradition" },
          { label: "Antares", href: "#antares" },
          { label: "Devoucoux", href: "#devoucoux" },
          { label: "CWD", href: "#cwd" },
          { label: "Delgrange & Childeric", href: "#others" },
          { label: "Buying French", href: "#buying" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Antares Saddle Overview", href: "/guides/antares-saddle-overview" },
          { label: "Devoucoux Saddle Overview", href: "/guides/devoucoux-saddle-overview" },
          { label: "Monoflap vs Double-Flap", href: "/guides/monoflap-vs-double-flap-saddles" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-french-saddle-makers" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>The French saddle makers — Antares, Devoucoux, CWD, Delgrange, Childeric — built their reputation on a particular idea: a bespoke saddle, measured to horse and rider, in supple French leather, delivering the closest possible contact for jumping and dressage. At the top of show jumping and eventing, French saddles are everywhere, and the bespoke model is their hallmark.</DropCap>

        <CalloutBox variant="tip" title="Bespoke means measured to a specific horse and rider">
          The French model centers on a fitter visiting to measure your horse and you, then building the saddle to those measurements. The upside is a saddle made for the pair; the downside is that a heavily bespoke saddle is fitted to one horse, which narrows resale and complicates moving it to a different horse. Weigh that before ordering.
        </CalloutBox>

        <h2 id="tradition">The French Tradition</h2>
        <p>French saddlery is defined by bespoke fitting and close contact. Rather than selling stock saddles off a shelf, the French houses send a representative to take measurements of horse and rider and build to them, in soft French calfskin, with geometry engineered for the closest feel — the close-contact philosophy detailed in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a> and often executed as monoflaps (the <a href="/guides/monoflap-vs-double-flap-saddles">monoflap guide</a>). The result is the saddle of choice at the top of jumping and eventing.</p>

        <h2 id="antares">Antares</h2>
        <p>Antares, based in the Nontron region of France, is among the best-known French makers, building jumping, dressage, and eventing saddles to a bespoke fitting model. Known for supple leather and a close, refined feel, Antares has a strong following among competitive jumpers and eventers. The fuller profile is in the <a href="/guides/antares-saddle-overview">Antares saddle overview</a>. Antares saddles sit firmly in the premium tier of the <a href="/guides/saddle-brands-by-price">brands by price guide</a>.</p>

        <h2 id="devoucoux">Devoucoux</h2>
        <p>Devoucoux, also from the Nontron area, is a premier French house known for technically sophisticated bespoke saddles, including the use of measurement technology in its fitting process and its D3D-type back-mapping approach. Devoucoux is favored at the top of jumping and eventing for its close contact and build quality, and is profiled fully in the <a href="/guides/devoucoux-saddle-overview">Devoucoux saddle overview</a>. Like its peers, it is a premium, bespoke-fitted brand.</p>

        <h2 id="cwd">CWD</h2>
        <p>CWD (Cheval — De Wandeleer) is a major French maker built on a strong dealer-fitter network and a bespoke ordering model, very visible at the top of international show jumping. CWD emphasizes a close-contact monoflap geometry and a wide program of options specified at order. Its high competition profile and dealer-driven fitting model are defining, and it competes directly with Antares and Devoucoux in the premium close-contact space.</p>

        <h2 id="others">Delgrange &amp; Childeric</h2>
        <p><strong>Delgrange</strong> is a French maker with a strong showjumping reputation, known for elegant close-contact saddles and a bespoke model. <strong>Childeric</strong> is a long-established French house building jumping, dressage, and eventing saddles, also bespoke-fitted and respected for leather and craftsmanship. Both sit in the premium French tradition alongside the larger names, with loyal followings in their respective disciplines.</p>

        <h2 id="buying">Buying French</h2>
        <ul>
          <li><strong>The appeal:</strong> bespoke fit, the closest contact, supple French leather, and top-level competition pedigree.</li>
          <li><strong>The cost:</strong> premium prices, and a bespoke build fitted to one horse and rider.</li>
          <li><strong>Resale:</strong> strong within the competitive jumping and eventing community, but a heavily bespoke saddle has a narrower buyer pool than an adjustable production saddle (see the <a href="/guides/saddle-resale-value">resale value guide</a>).</li>
          <li><strong>Fitting:</strong> through the maker&apos;s representative or dealer — central to the French model and to getting the saddle right.</li>
        </ul>
        <p>The French makers represent the pinnacle of bespoke close-contact saddlery, the default at the top of jumping and eventing. For a competitive jumper or eventer who values the closest feel and a saddle built to the pair, they are worth the premium — with the bespoke trade-offs understood. Compare the broader maker landscape in the <a href="/guides/english-saddle-makers">English saddle makers reference</a>.</p>

        <CalloutBox variant="note" title="Sources">
          Manufacturer published documentation (Antares, Devoucoux, CWD, Delgrange, Childeric). Society of Master Saddlers and French saddlery references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Competition-use observation at FEI jumping and eventing levels. Used-saddle market context for French makers.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
