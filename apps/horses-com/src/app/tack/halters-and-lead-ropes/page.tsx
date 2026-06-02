import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Halters and Lead Ropes — Types, Safety, and Correct Use",
  description:
    "Reference guide to halters and lead ropes: halter materials and types, rope vs flat halters, the dangers of turnout in a halter, lead ropes, and safe handling.",
  path: '/tack/halters-and-lead-ropes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Halters and Lead Ropes — Types, Safety, and Correct Use",
  description:
    "Reference guide to halters and lead ropes: halter materials and types, rope vs flat halters, the dangers of turnout in a halter, lead ropes, and safe handling.",
  url: 'https://horses.com/tack/halters-and-lead-ropes',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Is it safe to turn a horse out in a halter?",
    answer:
      "Turning a horse out in a strong, non-breakable halter is hazardous, because it can catch on a post, gate, branch, or the horse's own hoof and trap the horse, which panics and may be badly injured. The safest practice is no halter in turnout where possible, or a breakaway or leather-crownpiece halter that gives way under force.",
    answerText:
      "It is hazardous in a non-breakable halter, which can catch and trap the horse. Safest is no halter in turnout, or a breakaway or leather-crownpiece halter that breaks under force.",
  },
  {
    question: "What is the difference between a rope halter and a flat halter?",
    answer:
      "A rope halter is thin and knotted, concentrating pressure on small points for effective communication in groundwork and training by skilled handlers. A flat nylon or leather halter spreads pressure over a broader area and is gentler for everyday leading and tying. Rope halters are generally not used for tying because they can injure under sudden force.",
    answerText:
      "A rope halter is thin and knotted, focusing pressure for training; a flat halter spreads pressure for everyday leading and tying. Rope halters are generally not used for tying.",
  },
  {
    question: "How should I tie a horse safely?",
    answer:
      "Tie to a solid fixed point or tie ring using a quick-release knot or panic snap, ideally to a loop of breakable baler twine so the string gives way rather than the horse if it pulls back. Tie around wither height and short enough that the horse cannot get a leg over the rope, and never tie by the bit or reins.",
    answerText:
      "Tie to a solid point with a quick-release knot, ideally to breakable baler twine, at wither height and short enough to prevent a leg over the rope. Never tie by the bit or reins.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function HaltersLeadRopesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Halters and Lead Ropes",
          subtitle:
            "The halter and lead rope are the most-used pieces of equipment in any barn -- the everyday tools for catching, leading, tying, and handling horses. Their very ordinariness leads owners to overlook real safety considerations, from the dangers of turning a horse out in a halter to how a horse is tied. Choosing and using them well prevents avoidable accidents. This is reference material to inform safe handling alongside hands-on instruction.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Halters and Lead Ropes", href: '/tack/halters-and-lead-ropes' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Halter Types", href: "#types" },
            { label: "Rope vs Flat Halters", href: "#ropevsflat" },
            { label: "Turnout Halter Dangers", href: "#turnout" },
            { label: "Lead Ropes", href: "#leads" },
            { label: "Tying Safely", href: "#tying" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Trailering and Transport", href: "/care/trailering" },
              { label: "Reading Body Language", href: "/ownership/reading-body-language" },
              { label: "Fencing and Safety", href: "/care/fencing-safety" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-halters"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="types">Halter Types</h2>
          <ul>
            <li><strong>Flat nylon halters</strong> -- the common, inexpensive, durable everyday halter; strong, which is both a virtue and a turnout hazard.</li>
            <li><strong>Leather halters</strong> -- traditional and smart; valued because good leather breaks under extreme force, a safety feature in turnout.</li>
            <li><strong>Rope halters</strong> -- a single knotted rope that applies more focused pressure, favored in groundwork and natural-horsemanship training.</li>
            <li><strong>Breakaway halters</strong> -- with a leather crownpiece or a breakable tab designed to give way if the horse is caught, for safer turnout.</li>
          </ul>

          <h2 id="ropevsflat">Rope vs Flat Halters</h2>
          <p>Rope halters are thin and knotted, concentrating pressure on small points of the head, which makes them effective communication tools in skilled hands for groundwork and training. Flat (webbing or leather) halters spread pressure over a broader area and are gentler for everyday leading and tying. Rope halters are generally not left on or used for tying in the same way, because their thin material can cause injury under sudden force and many do not break. Match the halter to the task and the handler&apos;s skill.</p>

          <h2 id="turnout">Turnout Halter Dangers</h2>
          <p>Turning a horse out in a strong, non-breakable halter is a recognized hazard: a halter can catch on a fence post, gate, branch, or the horse&apos;s own hoof when scratching, trapping the horse, which then panics and can suffer severe injury or death. The safest practice is to turn horses out without a halter where catching allows; where a halter must be left on, use a breakaway halter or one with a leather crownpiece that will give way under force. Never turn a horse out in a fixed nylon halter that cannot break.</p>

          <h2 id="leads">Lead Ropes</h2>
          <p>Lead ropes attach to the halter and come in cotton, nylon, and poly materials, with various clips (a strong trigger or bull snap is common). A good lead is long enough to handle and tie safely, soft enough not to burn the hands, and fitted with a reliable clip. Avoid wrapping a lead rope around the hand -- a spooking horse can cause serious rope burns or pull a handler off their feet -- and instead fold the slack and hold it so it can be released.</p>

          <h2 id="tying">Tying Safely</h2>
          <ul>
            <li><strong>Tie to a safe object</strong> -- a solid, fixed point or a purpose-built tie ring, never to something a horse can pull loose and drag.</li>
            <li><strong>Use a quick-release knot</strong> or a panic-snap so the horse can be freed instantly in an emergency.</li>
            <li><strong>Tie to baler twine</strong> or a breakable loop on a fixed ring, so the string breaks rather than the horse if it pulls back.</li>
            <li><strong>Tie at the right height and length</strong> -- around wither height and short enough that the horse cannot get a leg over the rope.</li>
            <li><strong>Never tie by the bit or reins</strong> and never leave a tied horse unattended for long.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (handling, leading, and tying).</li>
            <li>American Association of Equine Practitioners. “Safe Handling and Turnout” owner resources. aaep.org.</li>
            <li>Equestrian safety organizations. Guidance on halters and tying.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
