import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Saddle Pads and Numnahs — Purpose, Types, and What They Cannot Fix",
  description:
    "Reference guide to saddle pads and numnahs: what they do, English and western pad types, materials, correct use, and why a pad cannot fix a bad-fitting saddle.",
  path: '/tack/saddle-pads',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Saddle Pads and Numnahs — Purpose, Types, and What They Cannot Fix",
  description:
    "Reference guide to saddle pads and numnahs: what they do, English and western pad types, materials, correct use, and why a pad cannot fix a bad-fitting saddle.",
  url: 'https://horses.com/tack/saddle-pads',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Can a saddle pad fix a saddle that doesn't fit?",
    answer:
      "No. A pad cannot correct a poorly fitting saddle, and trying to usually makes it worse -- a thick pad under a too-narrow saddle pinches further, like an extra sock in a tight shoe, and padding up a too-wide saddle only perches it. Fit problems need a saddle fitter and possibly a veterinarian, not a new pad.",
    answerText:
      "No -- and trying makes it worse. A thick pad under a too-narrow saddle pinches more; padding a too-wide one perches it. Fit problems need a saddle fitter, not a pad.",
  },
  {
    question: "Why are western pads so much thicker than English pads?",
    answer:
      "Western saddles are considerably heavier than English saddles and western rides are often long, so western pads and blankets are thicker to cushion the weight and protect the back over many miles. They are frequently layered, such as a woven blanket over a felt pad, with wool and felt valued for breathability and durability.",
    answerText:
      "Western saddles are heavier and rides longer, so thicker, often layered pads cushion the weight over long miles. Wool and felt are valued for breathability and durability.",
  },
  {
    question: "What does a dry spot in the sweat pattern under the saddle mean?",
    answer:
      "A dry patch in an otherwise even sweat pattern after a ride often indicates a pressure point where the saddle is bearing too hard and impairing circulation to the skin -- a sign of a fit problem. Dry spots, white hairs, soreness, or behavioral resistance warrant a saddle-fit assessment and possibly a veterinary check rather than a change of pad.",
    answerText:
      "It often marks a pressure point where the saddle bears too hard, a sign of a fit problem. Dry spots, white hairs, or soreness call for a saddle-fit assessment, not just a new pad.",
  },
]

export default function SaddlePadsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Saddle Pads and Numnahs",
          subtitle:
            "The saddle pad protects the saddle from sweat and the horse from minor friction, and it is one of the most over-claimed pieces of tack on the market. A good pad supports a well-fitting saddle; no pad can fix a saddle that does not fit, and trying to pad out a poor fit usually makes things worse. Understanding what pads do -- and do not do -- saves money and protects the horse's back. This is reference material to inform choices alongside a saddle fitter.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Saddle Pads", href: '/tack/saddle-pads' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What a Pad Does", href: "#what" },
            { label: "English Pads", href: "#english" },
            { label: "Western Pads and Blankets", href: "#western" },
            { label: "Materials", href: "#materials" },
            { label: "What a Pad Cannot Fix", href: "#cannot" },
            { label: "Pad Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
              { label: "Girths and Cinches", href: "/tack/girths-and-cinches" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-saddle-pads"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What a Pad Does</h2>
          <p>The primary jobs of a saddle pad are simple: to absorb sweat and protect the underside of the saddle from it, to provide a thin, clean, comfortable interface between saddle and back, and to wick moisture. A correctly fitting saddle on a healthy back needs only a clean, appropriate pad. The pad is a supporting player, not the thing that determines whether the saddle fits.</p>

          <h2 id="english">English Pads</h2>
          <ul>
            <li><strong>Numnah</strong> -- a pad cut to the shape of the saddle, often quilted, the everyday English pad.</li>
            <li><strong>Square (schooling) pad</strong> -- a rectangular pad common in dressage and general schooling.</li>
            <li><strong>Half pad</strong> -- a shaped pad used under or over the numnah, sometimes with shimmable pockets to fine-tune fit between fittings.</li>
            <li><strong>Discipline shapes</strong> -- close-contact and jump pads, dressage pads, and shaped show pads.</li>
          </ul>

          <h2 id="western">Western Pads and Blankets</h2>
          <p>Western riders use thicker pads and blankets because western saddles are heavier and rides are often long. Options range from traditional woven wool Navajo-style blankets to contoured felt and foam pads, frequently layered (a blanket over a felt pad). Wool and quality felt are valued for breathability, durability, and the way they conform to the back. The greater bulk reflects the weight of the saddle and the demands of long working rides.</p>

          <h2 id="materials">Materials</h2>
          <ul>
            <li><strong>Cotton and quilted fabrics</strong> -- common, washable English numnah materials.</li>
            <li><strong>Wool and felt</strong> -- breathable, conforming, and durable, especially in western pads.</li>
            <li><strong>Foam and gel</strong> -- cushioning materials in half pads, useful within limits but not a fit fix.</li>
            <li><strong>Sheepskin</strong> -- soft and good at reducing friction and wicking, popular at saddle edges and as half pads.</li>
            <li><strong>Synthetics</strong> -- modern wicking and impact materials of varying quality.</li>
          </ul>

          <h2 id="cannot">What a Pad Cannot Fix</h2>
          <p>The central truth about pads is that they cannot correct a saddle that does not fit. A saddle too narrow pinches, and adding a thick pad makes it tighter, like putting on an extra sock inside a tight shoe. A saddle too wide sits low on the withers, and padding it up only perches it and shifts pressure. Persistent back soreness, dry spots in the sweat pattern, white hairs, or behavioral resistance point to a fit problem that needs a saddle fitter and possibly a veterinarian -- not a new pad. Use pads to keep a well-fitting saddle clean and comfortable, not to paper over fit faults.</p>

          <h2 id="picks">Pad Picks</h2>
          <p>A few widely-stocked pad types covering the common English and Western needs. These support a correctly fitting saddle — none of them, as the section above makes clear, can correct a saddle that does not fit. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="cotton-quilted-numnah"
            badge="Everyday English"
            badgeEmoji="🐴"
            name="Quilted Cotton All-Purpose Pad"
            subtitle="Washable everyday numnah for schooling"
            score={8.3}
            winner
            description={<>
              <p>A quilted cotton all-purpose or dressage-cut pad is the everyday English workhorse: washable, breathable, and inexpensive enough to keep several in rotation so a clean, dry pad is always available. Keeping the pad clean and dry matters more for back health than any premium feature.</p>
              <p>Reasonable choice for: daily schooling under a correctly fitting saddle, and as a baseline pad before considering any specialty half pad.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Quilted cotton', highlight: 'good' },
              { label: 'Care', value: 'Machine washable' },
              { label: 'Best use case', value: 'Everyday English schooling' },
            ]}
            pros={['Inexpensive enough to keep several', 'Machine washable', 'Breathable everyday material']}
            cons={['No structural fit correction (none can)', 'Wears faster than wool or felt']}
            price="$20–45"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/quilted-all-purpose-saddle-pad?s=tack-saddle-pads"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="quilted-all-purpose-saddle-pad"
          />

          <ReviewCard
            id="sheepskin-half-pad"
            badge="Half Pad"
            badgeEmoji="🐑"
            name="Sheepskin Half Pad"
            subtitle="Friction reduction and wicking under a fitting saddle"
            score={8.5}
            description={<>
              <p>A sheepskin (or quality synthetic-fleece) half pad sits under or over the numnah to reduce friction and wick moisture at the saddle edges. Some include shimmable pockets to fine-tune balance between professional fittings — a legitimate use, but not a substitute for a fitter when the saddle is genuinely the wrong width.</p>
              <p>Most relevant for a rider managing minor balance refinement under guidance from a saddle fitter, or for added comfort under a correctly fitting saddle.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Sheepskin or synthetic fleece' },
              { label: 'Feature', value: 'Some offer shim pockets' },
              { label: 'Best use case', value: 'Friction reduction, minor balance tuning' },
            ]}
            pros={['Excellent friction reduction', 'Good wicking at saddle edges', 'Shimmable versions aid fit tuning']}
            cons={['Cannot fix a wrong-width saddle', 'Real sheepskin needs careful washing', 'Premium versions are pricey']}
            price="$60–160"
            ctaText="Compare at Dover Saddlery →"
            ctaHref="/go/dover/sheepskin-half-pad?s=tack-saddle-pads"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="sheepskin-half-pad"
          />

          <ReviewCard
            id="western-felt-pad"
            badge="Western"
            badgeEmoji="🤠"
            name="Wool-Felt Western Pad"
            subtitle="Cushion and durability for heavier saddles and long rides"
            score={8.7}
            description={<>
              <p>A wool-felt Western pad cushions the heavier Western saddle over the long rides typical of the discipline. Wool felt is valued for breathability, durability, and the way it conforms to the back. Many riders layer a woven blanket over the felt for tradition and additional protection.</p>
              <p>Most relevant for trail, ranch, and Western performance riders whose saddles are heavier and rides longer than typical English work.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Wool felt', highlight: 'good' },
              { label: 'Use', value: 'Often layered under a woven blanket' },
              { label: 'Best use case', value: 'Western, long working rides' },
            ]}
            pros={['Durable and breathable', 'Conforms to the back over time', 'Cushions heavier Western saddles']}
            cons={['Heavier and bulkier than English pads', 'Quality felt is more expensive', 'Still cannot correct saddle fit']}
            price="$80–200"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/wool-felt-western-pad?s=tack-saddle-pads"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="wool-felt-western-pad"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Society of Master Saddlers. Saddle-fit and numnah guidance. mastersaddlers.co.uk.</li>
            <li>Research on saddle pressure distribution and pad effects, various.</li>
            <li>British Horse Society and Pony Club manuals, current editions (tack).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
