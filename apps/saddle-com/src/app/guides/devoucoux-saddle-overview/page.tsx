import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Devoucoux Saddle Overview — Models, Technology, Fit | Saddle.com",
  description: "An overview of Devoucoux saddles: the bespoke French model, back-mapping fitting technology, jumping and dressage lines, leather reputation, and resale.",
  path: "/guides/devoucoux-saddle-overview",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Devoucoux Saddle Overview",
  description: "Devoucoux saddles — bespoke French fitting, back-mapping technology, jumping and dressage lines, and market positioning.",
  url: "https://saddle.com/guides/devoucoux-saddle-overview",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function DevoucouxSaddleOverviewPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Devoucoux — Technology Meets the French Bespoke Tradition", subtitle: "Devoucoux pairs the French close-contact bespoke tradition with measurement technology, building technically sophisticated saddles favored at the top of jumping and eventing.", category: "Brand Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Devoucoux Saddle Overview", href: "/guides/devoucoux-saddle-overview" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Who Devoucoux Is", href: "#who" },
          { label: "Back-Mapping Technology", href: "#tech" },
          { label: "Jumping Lines", href: "#jumping" },
          { label: "Dressage & Eventing", href: "#dressage" },
          { label: "Leather & Feel", href: "#leather" },
          { label: "Buying & Resale", href: "#buying" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "French Saddle Makers", href: "/guides/french-saddle-makers" },
          { label: "Antares Saddle Overview", href: "/guides/antares-saddle-overview" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-devoucoux-saddle-overview" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Devoucoux, from the same Nontron saddlery region as Antares, distinguishes itself by marrying the French bespoke close-contact tradition with measurement technology — using back-mapping in its fitting process to specify saddles with technical precision. It is a premier French house, very visible at the top of show jumping and eventing, and part of the tradition described in the <a href="/guides/french-saddle-makers">French saddle makers reference</a>.</DropCap>

        <CalloutBox variant="tip" title="Technology supports fitting, it does not replace the fitter">
          Devoucoux&apos;s back-mapping adds data to the fitting process, but the saddle is still fitted and specified by a trained representative, and confirmed on the horse using the same fit principles as any saddle (the <a href="/guides/saddle-fit-guide">saddle fit guide</a>). Treat the technology as a precision aid within bespoke fitting, not a guarantee that removes the need for fit assessment.
        </CalloutBox>

        <h2 id="who">Who Devoucoux Is</h2>
        <p>Devoucoux is a French saddle house from the Nontron region, building jumping, eventing, and dressage saddles on a bespoke model, and known for bringing measurement technology into a traditionally hand-craft process. It sits alongside Antares and CWD at the premium top of the French close-contact market, with a strong presence at international jumping and eventing. The shared French tradition is covered in the <a href="/guides/french-saddle-makers">French saddle makers reference</a>; its closest peer is profiled in the <a href="/guides/antares-saddle-overview">Antares overview</a>.</p>

        <h2 id="tech">Back-Mapping Technology</h2>
        <p>Devoucoux is associated with using technology to map the horse&apos;s back as part of fitting — capturing the back&apos;s shape with measurement tools to inform the saddle&apos;s specification. This is the brand&apos;s differentiator within the French bespoke field: a more data-driven approach to the same goal of a saddle built to the individual horse. As the tip notes, the technology supports the fitter and is still confirmed on the horse against the universal fit checks in the <a href="/guides/saddle-fit-guide">saddle fit guide</a>.</p>

        <h2 id="jumping">Jumping Lines</h2>
        <p>Like its French peers, Devoucoux is strongest in jumping saddles — close-contact, frequently monoflap (see the <a href="/guides/monoflap-vs-double-flap-saddles">monoflap guide</a>), with the forward-flap geometry for the jumping position detailed in the <a href="/guides/close-contact-vs-all-purpose">close-contact vs all-purpose guide</a>. The jumping lines are the brand&apos;s competitive showcase, prized for close contact and build quality, and suit show jumpers, hunters, and eventers.</p>

        <h2 id="dressage">Dressage &amp; Eventing</h2>
        <p>Devoucoux also builds dressage saddles for the long-leg, deep-seat position and eventing saddles suited to the three phases in the <a href="/guides/eventing-tack-guide">eventing tack guide</a>, with the light, close monoflap construction that benefits cross-country. The bespoke fitting and technical approach carry across all lines, applied to each discipline&apos;s geometry.</p>

        <h2 id="leather">Leather &amp; Feel</h2>
        <p>Devoucoux shares the French signature of supple calfskin and close contact — soft leather that breaks in to the rider and conveys movement, the reason the French houses command premium prices. As with all soft French leather, it rewards diligent care per the <a href="/guides/leather-care-guide">leather care guide</a> to reach its long potential lifespan.</p>

        <h2 id="buying">Buying &amp; Resale</h2>
        <ul>
          <li><strong>The appeal:</strong> bespoke fit refined by back-mapping technology, top-level jumping pedigree, French leather and close contact.</li>
          <li><strong>The cost:</strong> premium pricing and a build fitted to a specific horse and rider.</li>
          <li><strong>Resale:</strong> strong within competitive jumping and eventing, with the bespoke caveat that narrows the buyer pool versus adjustable saddles (the <a href="/guides/saddle-resale-value">resale value guide</a>).</li>
          <li><strong>Fitting:</strong> through a Devoucoux representative using the brand&apos;s process — central to the model.</li>
        </ul>
        <p>Devoucoux is a premium bespoke French saddle that adds measurement technology to the close-contact tradition, well suited to the competitive jumper or eventer who values precision fitting and the closest feel. For a direct comparison within the French houses, see the <a href="/guides/antares-saddle-overview">Antares overview</a> and the <a href="/guides/french-saddle-makers">French makers reference</a>.</p>

        <CalloutBox variant="note" title="Sources">
          Devoucoux published product and fitting documentation. Society of Master Saddlers and French saddlery references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Competition-use observation at FEI jumping and eventing levels. Used-saddle market context for French makers.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
