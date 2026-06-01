import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Spurs Guide — Types, Severity, Rules, Use | Saddle.com",
  description: "Riding spurs explained: Prince of Wales, roller, rowel, swan-neck, and dummy spurs — severity, correct use, competition rules, and when spurs are appropriate.",
  path: "/guides/spurs-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Spurs Guide",
  description: "Prince of Wales, roller, rowel, swan-neck, and dummy spurs compared for severity, correct use, and competition rules.",
  url: "https://saddle.com/guides/spurs-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SpursGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Spurs — Refinement, Not Force", subtitle: "A spur sharpens the precision of the leg aid for an educated rider on a trained horse. In the wrong hands or on the wrong horse, it is simply a way to cause pain.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Spurs Guide", href: "/guides/spurs-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What Spurs Are For", href: "#what" },
          { label: "Reading Severity", href: "#severity" },
          { label: "Neck & Shank Length", href: "#neck" },
          { label: "End Types", href: "#ends" },
          { label: "Competition Rules", href: "#rules" },
          { label: "When to Use Them", href: "#when" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Dressage Basics Guide", href: "/guides/dressage-basics-guide" },
          { label: "English Riding Guide", href: "/guides/english-riding-guide" },
          { label: "Show Attire Guide", href: "/guides/show-attire-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-spurs-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A spur refines the leg aid, letting a rider with a still, independent lower leg ask for more precision or lateral response without exaggerating the leg. It is a tool of refinement for the educated. It is not a tool for making a dull or untrained horse go forward — that is a training matter, and a spur used that way is misuse.</DropCap>

        <CalloutBox variant="tip" title="A still leg first, a spur second">
          Spurs require an independent, quiet lower leg — a rider whose leg swings or grips will jab the horse unintentionally with every stride. Earn a still leg before wearing a spur. The horse should respond to the leg alone; the spur sharpens that response, never replaces it.
        </CalloutBox>

        <h2 id="what">What Spurs Are For</h2>
        <p>A spur extends the leg aid to a precise point, allowing a refined rider to ask for a more exact or more lateral response from a trained horse with a small, controlled action rather than a large leg movement. It supports the precise aids described in the <a href="/guides/dressage-basics-guide">dressage basics guide</a> and the position fundamentals in the <a href="/guides/english-riding-guide">English riding guide</a>. Severity comes from neck length and the end type, discussed below.</p>

        <h2 id="severity">Reading Severity</h2>
        <p>A spur&apos;s severity depends mainly on the length of the neck (how far it reaches), the shape, and the end (smooth, rounded, or a rowel). A short, blunt, smooth spur is mild; a long-necked rowel spur is sharp. Severity should match the horse&apos;s sensitivity and the rider&apos;s skill — a sensitive horse and a less-experienced rider call for the mildest spur, often a dummy or short Prince of Wales.</p>

        <h2 id="neck">Neck &amp; Shank Length</h2>
        <p>The neck is the part that projects toward the horse. A <strong>dummy spur</strong> has essentially no neck — it sits on the heel for appearance and the lightest possible contact, ideal for riders required to wear spurs in showing but who need minimal action. A <strong>short neck</strong> reaches the horse with a deliberate small movement; a <strong>long neck</strong> reaches with very little movement, increasing both precision and the risk of unintended contact. Swan-neck spurs angle the neck upward to reach a horse carried in a rounder frame.</p>

        <h2 id="ends">End Types</h2>
        <p>The <strong>Prince of Wales</strong> is a flat-ended spur, the common mild English standard. A <strong>knob/rounded end</strong> is mild. A <strong>roller</strong> has a rolling barrel that rolls against the side rather than dragging, considered kinder for sensitive horses. A <strong>rowel</strong> has a spiked or disc wheel and is sharper, used in western and some advanced contexts — rowel sharpness varies from blunt discs to pointed stars, with severity rising accordingly.</p>

        <h2 id="rules">Competition Rules</h2>
        <p>Disciplines regulate spurs closely. Dressage permits spurs within defined limits on neck length and type (and at some levels effectively requires them for the precision expected), while prohibiting sharp rowels and excessive length. Showing has turnout conventions covered in the <a href="/guides/show-attire-guide">show attire guide</a>. Always check the current rulebook for your discipline and level — permitted spur types and lengths are specified and enforced, and a sharp or over-long spur can mean elimination.</p>

        <h2 id="when">When to Use Them</h2>
        <ul>
          <li>The rider has an independent, still lower leg and educated aids.</li>
          <li>The horse is trained to the leg and the spur refines rather than enforces.</li>
          <li>The discipline and level call for the precision a spur supports.</li>
          <li>The spur&apos;s severity is matched to the horse&apos;s sensitivity — mildest first.</li>
        </ul>
        <p>A spur is a refinement, regulated by the rules and earned by a still leg. Choose the mildest spur that achieves the precision you need, confirm it is permitted for your class, and remember that the horse should answer the leg — the spur only sharpens the question.</p>

        <CalloutBox variant="note" title="Sources">
          USEF and FEI dressage and discipline rules on permitted spurs. British Horse Society (BHS) and pony club spur references. International Society for Equitation Science (ISES) on aid pressure. Manufacturer spur specifications.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
