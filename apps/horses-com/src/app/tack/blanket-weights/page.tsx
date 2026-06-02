import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Blanket Weights Explained — Turnout, Stable, and Fill",
  description:
    "Reference guide to horse blanket weights: turnout vs stable rugs, denier and fill explained, weight categories and temperature ranges, coolers and sheets.",
  path: '/tack/blanket-weights',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Blanket Weights Explained — Turnout, Stable, and Fill",
  description:
    "Reference guide to horse blanket weights: turnout vs stable rugs, denier and fill explained, weight categories and temperature ranges, coolers and sheets.",
  url: 'https://horses.com/tack/blanket-weights',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What does denier mean on a horse rug?",
    answer:
      "Denier measures the toughness of the rug's outer fabric -- a higher denier such as 1200D is more tear- and abrasion-resistant than a lower one such as 600D, which matters for horses that are hard on rugs in the field. Denier is about durability and waterproofing and is separate from fill, which measures warmth.",
    answerText:
      "Denier measures the outer fabric's toughness -- higher (e.g. 1200D) resists tears and abrasion better than lower (e.g. 600D). It is about durability, separate from fill, which measures warmth.",
  },
  {
    question: "What is the difference between a turnout rug and a stable rug?",
    answer:
      "A turnout rug is waterproof and tough, made for the field and the weather, while a stable rug is not waterproof and is meant for indoor use over a clean horse. Using a stable rug outside leaves the horse soaked, so the two are not interchangeable, though liners can add warmth to a turnout shell.",
    answerText:
      "A turnout rug is waterproof and tough for the field; a stable rug is non-waterproof for indoor use. They are not interchangeable -- a stable rug outside leaves the horse soaked.",
  },
  {
    question: "How do I choose the right blanket weight?",
    answer:
      "Match the fill (warmth) to the temperature, the horse's coat and condition, and whether it is clipped -- a clipped horse in hard cold may need a heavyweight, while an unclipped, sheltered horse may need only a no-fill waterproof or none. Then watch the horse: warm and dry, neither sweating nor shivering, means it is rugged about right.",
    answerText:
      "Match fill to temperature, coat, condition, and clipping, then watch the horse -- warm and dry, neither sweating nor shivering, is about right. Over-rugging harms as much as under-rugging.",
  },
]

export default function BlanketWeightsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Horse Blanket Weights Explained",
          subtitle:
            "Blanket terminology baffles many owners: turnout versus stable, denier versus fill, light versus heavy. Yet the choices matter, because a rug that is too warm makes a horse sweat and chill while one too light leaves it cold. This guide decodes the weights and categories so you can match the rug to the horse and the weather. This is reference material to inform decisions alongside the blanketing guide.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Blanket Weights", href: '/tack/blanket-weights' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Turnout vs Stable Rugs", href: "#types" },
            { label: "Denier and Fill", href: "#denier" },
            { label: "Weight Categories", href: "#weights" },
            { label: "Coolers and Sheets", href: "#coolers" },
            { label: "Choosing the Weight", href: "#choosing" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Blanketing Guide", href: "/care/blanketing" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Body Clipping", href: "/care/body-clipping" },
              { label: "Best Winter Horse Blankets", href: "/reviews/best-winter-horse-blankets" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-blanket-weights"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="types">Turnout vs Stable Rugs</h2>
          <p>The first distinction is turnout versus stable. Turnout rugs are waterproof and tough, built for the field and the weather. Stable rugs are not waterproof, made for use indoors over a clean horse. Using a stable rug outside leaves a horse soaked, and a turnout rug indoors can be unnecessarily heavy and harder-wearing than needed. Many horses have both, plus liners that add warmth to a shell.</p>

          <h2 id="denier">Denier and Fill</h2>
          <p>Two numbers describe a rug. Denier measures the toughness of the outer fabric -- a higher denier (for example 1200D versus 600D) is more tear- and abrasion-resistant, important for rough-and-tumble horses in the field. Fill (or filling) measures warmth, given in grams -- the weight of insulating material. Denier is about durability and waterproofing; fill is about warmth. A rug can be high-denier and low-fill (tough but light) or the reverse.</p>

          <h2 id="weights">Weight Categories</h2>
          <ul>
            <li><strong>No fill / lightweight (0 g)</strong> -- a waterproof turnout with no insulation, for rain protection in mild weather.</li>
            <li><strong>Lightweight (around 50 to 100 g)</strong> -- a little warmth for cool, wet days.</li>
            <li><strong>Medium weight (around 150 to 250 g)</strong> -- the everyday winter rug for many clipped or thin-coated horses.</li>
            <li><strong>Heavyweight (around 300 to 400+ g)</strong> -- maximum warmth for clipped horses in hard winter cold.</li>
          </ul>

          <h2 id="coolers">Coolers and Sheets</h2>
          <p>Beyond turnout and stable rugs are specialty layers. Coolers and anti-sweat sheets are breathable wicking rugs put on a hot or wet horse after work or bathing to draw moisture away while preventing a chill -- they warm by trapping a breathable layer, not by waterproof fill. Fly sheets are light mesh rugs for insect protection in summer. Liners clip inside a turnout shell to add fill flexibly as the weather changes.</p>

          <h2 id="choosing">Choosing the Weight</h2>
          <p>Match the fill to the temperature, the horse&apos;s coat and condition, and whether it is clipped -- a fully clipped horse in hard cold may need a heavyweight, while an unclipped, sheltered, well-fed horse may need only a no-fill waterproof or no rug at all. Watch the horse rather than the thermometer alone: a horse warm and dry under its rug, neither sweating nor shivering, is rugged about right. Over-rugging is as harmful as under-rugging, so check daily and adjust. See the blanketing guide for the broader decision of whether to rug at all.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Manufacturer rug specifications and weight categories (industry-standard fill ranges).</li>
            <li>American Association of Equine Practitioners. “Winter Care and Blanketing” owner resources. aaep.org.</li>
            <li>British Horse Society. Rugging and turnout guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
