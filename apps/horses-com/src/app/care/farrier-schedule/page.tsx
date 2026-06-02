import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Farrier Schedule — Trim Intervals, Barefoot vs Shod & Your Farrier",
  description:
    "Reference guide to the equine farrier schedule: trim and shoeing intervals, seasonal growth, barefoot vs shod, and how to work effectively with your farrier.",
  path: '/care/farrier-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Farrier Schedule — Trim Intervals, Barefoot vs Shod & Your Farrier",
  description:
    "Reference guide to the equine farrier schedule: trim and shoeing intervals, seasonal growth, barefoot vs shod, and how to work effectively with your farrier.",
  url: 'https://horses.com/care/farrier-schedule',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How often should I have the farrier out?",
    answer:
      "Most horses are trimmed or reshod every 6 to 8 weeks, with performance horses and problem feet sometimes needing 4 to 6 weeks and some barefoot horses stretching to 8 to 10. The correct interval is whatever keeps the individual foot balanced, set with your farrier, and it usually shortens in the fast-growing summer months.",
    answerText:
      "Most horses every 6 to 8 weeks, shorter for performance or problem feet and longer for some barefoot horses. Set the interval with your farrier; it shortens in summer.",
  },
  {
    question: "Do barefoot horses still need a farrier?",
    answer:
      "Yes. Going barefoot does not mean going unattended -- barefoot horses need regular trimming on the same 6-to-8-week kind of schedule to stay balanced as the wall grows. Skipping trims lets the foot flare and lose balance just as it would under a shoe.",
    answerText:
      "Yes -- barefoot horses still need regular trimming on a similar 6-to-8-week schedule to stay balanced as the wall grows.",
  },
  {
    question: "Why do hooves grow faster in summer?",
    answer:
      "Hoof growth tracks circulation and nutrition, both of which improve in spring and summer with better grass, more movement, and warmer weather, then slow in winter. As a result many owners shorten the farrier interval slightly in the growing season and watch for flaring as a cue to book sooner.",
    answerText:
      "Growth tracks circulation and nutrition, which improve in spring and summer and slow in winter. Many owners shorten the interval in the growing season.",
  },
]

export default function FarrierSchedulePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "The Farrier Schedule",
          subtitle:
            "A consistent farrier schedule is one of the highest-value routines in horse ownership. Hooves grow continuously, and letting the interval stretch too long quietly loads the limb wrong and invites lameness. This guide covers how often horses need attention, how barefoot and shod cycles differ, and how to be the kind of client a good farrier wants to keep. This is reference material to complement your farrier's expertise.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "The Farrier Schedule", href: '/care/farrier-schedule' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why a Schedule", href: "#why" },
            { label: "Typical Intervals", href: "#intervals" },
            { label: "Seasonal Growth", href: "#season" },
            { label: "Barefoot vs Shod", href: "#barefoot" },
            { label: "Working With Your Farrier", href: "#working" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-farrier"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why a Schedule</h2>
          <p>Because the hoof wall grows constantly, a foot that was balanced six weeks ago is now longer and out of balance. Overgrown feet flare, the breakover point moves forward, the angles change, and the strain shifts onto joints and tendons. A regular schedule keeps the foot balanced before problems start, which is far cheaper and kinder than fixing the lameness that neglect produces.</p>

          <h2 id="intervals">Typical Intervals</h2>
          <p>Most horses are trimmed or reshod every 6 to 8 weeks. Performance horses, those with hoof issues, and fast-growing feet may need attention every 4 to 6 weeks; some easy-keeping barefoot horses on abrasive footing self-wear and stretch to 8 to 10 weeks. The right number is whatever keeps that individual foot balanced, set with your farrier rather than by the calendar alone.</p>

          <h2 id="season">Seasonal Growth</h2>
          <p>Hoof growth speeds up in spring and summer with better nutrition and circulation and slows in winter. That means the interval that worked in January may be too long by June. Owners often shorten the cycle slightly in the growing season and watch for flaring as a cue. Young horses also grow horn faster than aged horses.</p>

          <h2 id="barefoot">Barefoot vs Shod</h2>
          <p>Barefoot horses still need regular trimming on the same kind of schedule -- going barefoot does not mean going unattended. Shod horses need resetting before the shoe wears out, the clenches rise, or the foot grows so long that the shoe sits back under the heel. Transitioning between the two should be planned with the farrier, sometimes using hoof boots to bridge the change. The best choice depends on the horse&apos;s work, footing, and hoof quality.</p>

          <h2 id="working">Working With Your Farrier</h2>
          <ul>
            <li><strong>Book ahead</strong> and keep a standing appointment rather than calling once the feet are already overgrown.</li>
            <li><strong>Teach the horse to stand</strong> quietly and pick up its feet, which protects both horse and farrier.</li>
            <li><strong>Provide a clean, level, well-lit area</strong> and dry feet to work on.</li>
            <li><strong>Communicate</strong> about any lameness, footing changes, or the horse&apos;s workload so shoeing can be tailored.</li>
            <li><strong>Coordinate farrier and vet</strong> when managing conditions like laminitis or navicular syndrome, where they work as a team.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>O&apos;Grady SE. “Guidelines for Trimming the Equine Foot.” AAEP Proceedings, 2009.</li>
            <li>American Farrier&apos;s Association. Hoof-care and shoeing-cycle resources. americanfarriers.org.</li>
            <li>American Association of Equine Practitioners. “Hoof Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
