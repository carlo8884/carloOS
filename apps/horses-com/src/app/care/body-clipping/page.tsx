import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Body Clipping Horses — Why, When, Clip Types, and Aftercare",
  description:
    "Reference guide to clipping horses: why clip, when to start and stop, the main clip patterns, technique basics, and post-clip blanketing and care.",
  path: '/care/body-clipping',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Body Clipping Horses — Why, When, Clip Types, and Aftercare",
  description:
    "Reference guide to clipping horses: why clip, when to start and stop, the main clip patterns, technique basics, and post-clip blanketing and care.",
  url: 'https://horses.com/care/body-clipping',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Why would I clip my horse in winter?",
    answer:
      "A horse in regular winter work grows a heavy coat, sweats under it, and dries slowly, risking chills and poor recovery. Clipping removes the coat so the horse sweats less, cools and dries quickly, stays cleaner, and works better. It is also used for old or PPID horses that fail to shed and overheat.",
    answerText:
      "Clipping lets a working horse sweat less and cool and dry quickly after work, avoiding chills and improving recovery. It also helps old or PPID horses that overheat in heavy coats.",
  },
  {
    question: "Does a clipped horse need a blanket?",
    answer:
      "Yes. A clipped horse has lost the natural insulation of its winter coat and depends on rugs for warmth, with the weight matched to the weather and the extent of the clip. Rugging is therefore a commitment that comes with the decision to clip, and the rugs must be adjusted as conditions change.",
    answerText:
      "Yes -- clipping removes natural insulation, so a clipped horse needs rugs matched to the weather and clip extent. Rugging is part of the commitment to clip.",
  },
  {
    question: "When should I stop clipping for the season?",
    answer:
      "Many owners stop clipping in late winter, commonly avoiding clips after around the start of spring, so the new summer coat comes through cleanly rather than being cut and spoiled. The exact timing follows the horse's workload and coat growth rather than a fixed calendar date.",
    answerText:
      "Usually in late winter -- often stopping around early spring so the summer coat comes through cleanly. Timing follows workload and coat growth, not a fixed date.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function BodyClippingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Body Clipping Horses",
          subtitle:
            "Clipping removes some or all of a horse's winter coat so that a horse in work can cool down, dry off, and recover faster without overheating and sweating under a heavy coat. It is a management decision with real trade-offs: a clipped horse looks smart and works better, but it has surrendered its natural insulation and now depends on you for warmth. This is reference material to inform the decision and the aftercare.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Body Clipping", href: '/care/body-clipping' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Clip", href: "#why" },
            { label: "When to Clip", href: "#when" },
            { label: "Clip Types", href: "#types" },
            { label: "Technique Basics", href: "#technique" },
            { label: "Aftercare", href: "#aftercare" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Blanketing Guide", href: "/care/blanketing" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Blanket Weights Explained", href: "/tack/blanket-weights" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-clipping"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Clip</h2>
          <p>A horse in regular winter work grows a thick coat, sweats heavily under it, and then takes hours to dry -- risking chills and making proper cooling impossible. Clipping removes the coat so the horse sweats less, cools and dries quickly after work, is easier to keep clean, and recovers better. Clipping is also used to help old or PPID horses that fail to shed and overheat under heavy coats. The trade-off is that the horse loses its natural insulation and must be blanketed.</p>

          <h2 id="when">When to Clip</h2>
          <p>The first clip is usually done in autumn once the winter coat has come in, with horses in work re-clipped through the winter as the coat regrows -- often every few weeks. Many owners stop clipping in late winter so the summer coat comes through cleanly, commonly avoiding clips after roughly the start of spring so as not to spoil the new coat. The timing follows the horse&apos;s workload and coat growth rather than a fixed date.</p>

          <h2 id="types">Clip Types</h2>
          <ul>
            <li><strong>Full clip</strong> -- all the coat removed; for horses in hard work, requiring the most rugging.</li>
            <li><strong>Hunter clip</strong> -- coat removed except the legs (for protection) and a saddle patch.</li>
            <li><strong>Blanket clip</strong> -- coat removed from the neck and belly, leaving a blanket-shaped area of coat over the back and quarters.</li>
            <li><strong>Trace clip</strong> -- only the sweatiest lower neck, chest, and belly clipped; suits light to moderate work and keeps more natural cover.</li>
            <li><strong>Bib or chaser clips</strong> -- minimal clips for horses in light work that still grow heavy coats.</li>
          </ul>

          <h2 id="technique">Technique Basics</h2>
          <p>Clipping is done on a clean, dry horse with well-maintained, sharp, properly tensioned clippers and clean blades, working against the direction of hair growth in long overlapping strokes. The blades and motor get hot, so they need regular oiling, cooling, and cleaning to clip well and avoid burning the horse. A calm horse, good lighting, and patience matter; nervous or unhandled horses may need professional clipping or, on veterinary advice, sedation. Take care around ticklish and bony areas.</p>

          <h2 id="aftercare">Aftercare</h2>
          <p>A clipped horse has lost its insulation and must be rugged appropriately for the weather and the extent of the clip, with weights adjusted as conditions change -- see the blanketing and blanket-weights guides. Clipped horses also benefit from extra warmth after washing and from coolers that wick moisture. Watch for the horse being too cold (shivering, tucked up) or too hot under rugs, and groom regularly, since clipping exposes the skin and a clipped coat shows dirt and rubs more readily.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (clipping types and technique).</li>
            <li>American Association of Equine Practitioners. “Clipping and Winter Work” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
