import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Bits Explained — Snaffles, Curbs, and How Bits Work",
  description:
    "Reference guide to horse bits: how a bit acts on the horse, snaffle vs curb (leverage) action, common mouthpieces, fit, and choosing humanely.",
  path: '/tack/bits-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Bits Explained — Snaffles, Curbs, and How Bits Work",
  description:
    "Reference guide to horse bits: how a bit acts on the horse, snaffle vs curb (leverage) action, common mouthpieces, fit, and choosing humanely.",
  url: 'https://horses.com/tack/bits-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a snaffle and a curb bit?",
    answer:
      "A snaffle applies direct pressure -- rein pressure equals mouth pressure, acting mainly on the lips, tongue, and bars with no leverage. A curb is a leverage bit with shanks and usually a curb chain, multiplying rein pressure and adding action on the poll and chin groove. Longer shanks mean more leverage. They are the two fundamental bit families.",
    answerText:
      "A snaffle applies direct (non-leverage) pressure on the lips, tongue, and bars. A curb uses shanks and a curb chain to multiply pressure and act on the poll and chin groove. They are the two main families.",
  },
  {
    question: "Is a snaffle always a gentle bit?",
    answer:
      "Not necessarily. Severity depends far more on the hands using the bit than on the bit itself -- a snaffle can be harsh in rough hands, and a single-jointed snaffle can apply a nutcracker action. A snaffle is non-leverage and often milder, but no bit is gentle on its own; fit, training, and educated hands determine kindness.",
    answerText:
      "Not on its own -- kindness depends mainly on the hands. A snaffle is non-leverage and often milder, but can be harsh in rough hands. Fit, training, and hands matter more than the bit.",
  },
  {
    question: "Will a stronger bit fix a horse that pulls?",
    answer:
      "Rarely, and usually it backfires. Pulling and resistance more often stem from training gaps, poor fit, dental pain, or rough hands, which a harsher bit masks rather than solves while risking the horse's comfort and trust. Addressing the root cause -- training, fit, dental health, and rider hands -- is the lasting fix.",
    answerText:
      "Rarely -- a stronger bit masks rather than solves pulling, which usually stems from training, fit, dental pain, or rough hands. Fixing the root cause is the lasting solution.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function BitsGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Horse Bits Explained",
          subtitle:
            "The bit is one of the most misunderstood pieces of tack. There is no such thing as a gentle or harsh bit in isolation -- a bit is only as kind as the hands that use it -- but bits do differ enormously in how they apply pressure and where. Understanding the two great families, snaffle and curb, and the parts that make up a bit lets an owner choose thoughtfully rather than by fashion. This is reference material to inform choices alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Bits Explained", href: '/tack/bits-guide' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How a Bit Works", href: "#how" },
            { label: "Snaffle vs Curb", href: "#families" },
            { label: "Mouthpieces", href: "#mouthpieces" },
            { label: "Fit", href: "#fit" },
            { label: "Choosing Humanely", href: "#choosing" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bridle Types", href: "/tack/bridle-types" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Western Pleasure", href: "/disciplines/western-pleasure" },
              { label: "Equitation", href: "/disciplines/equitation" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-bits"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="how">How a Bit Works</h2>
          <p>A bit communicates through pressure on sensitive structures of the head: the bars (the toothless gum between incisors and molars where the mouthpiece rests), the tongue, the lips and corners of the mouth, and -- with leverage bits -- the poll and chin groove. Rein pressure is transmitted through the bit to these points, and the horse learns to respond by yielding to and seeking relief from that pressure. Because these structures are sensitive, the bit must be matched to the horse and used with educated hands.</p>

          <h2 id="families">Snaffle vs Curb</h2>
          <p>All bits fall broadly into two action families. A snaffle applies direct pressure -- the rein pressure equals the pressure on the mouth, acting mainly on the corners of the lips, tongue, and bars, with no leverage. A curb is a leverage bit: it has shanks (cheekpieces) and usually a curb chain, so rein pressure is multiplied and acts on the bars, tongue, poll, and chin groove. Longer shanks increase leverage. A double bridle carries both a small snaffle (bradoon) and a curb together for refined communication in advanced dressage.</p>

          <h2 id="mouthpieces">Mouthpieces</h2>
          <ul>
            <li><strong>Single-jointed</strong> -- the classic snaffle mouthpiece; folds in the middle and can apply a nutcracker action on the bars and palate.</li>
            <li><strong>Double-jointed (French link, lozenge)</strong> -- two joints with a central link reduce the nutcracker effect and lie more comfortably on the tongue.</li>
            <li><strong>Mullen mouth</strong> -- a solid, gently curved mouthpiece with no joints, spreading pressure evenly and considered mild.</li>
            <li><strong>Ported mouthpieces</strong> -- a raised central arch giving tongue relief, common on curbs.</li>
            <li><strong>Materials</strong> -- metals, rubber, and synthetics that vary in warmth, taste, and how much they encourage mouthing and salivation.</li>
          </ul>

          <h2 id="fit">Fit</h2>
          <p>A bit must be the right width -- sitting snugly without pinching the lips or sliding through the mouth -- and at the right height, so it rests on the bars and creates a slight wrinkle or two at the corners of the lips without being so high it bangs the molars or so low it hits the teeth. The mouthpiece thickness and shape must suit the individual horse&apos;s mouth conformation (tongue size, palate height, bar shape). A poorly fitted bit causes pain, rubs, and resistance regardless of how mild the design.</p>

          <h2 id="choosing">Choosing Humanely</h2>
          <p>The guiding principle is that severity lives in the hand, not only the bit -- a mild snaffle can be cruel in rough hands and a curb kind in educated ones. Many competition rules require or restrict particular bits by discipline and level (snaffles for lower-level dressage, for example), so check the rulebook. Reaching for a stronger bit to fix a problem is usually a mistake: training, fit, dental health, and rider hands address the root cause, whereas a harsher bit masks it and risks the horse&apos;s trust and comfort.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (bitting and tack).</li>
            <li>Clayton HM. Research on bit action and oral comfort in horses, various.</li>
            <li>USEF and FEI rulebooks, current editions (permitted bits by discipline and level).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
