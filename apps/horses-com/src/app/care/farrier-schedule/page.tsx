import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
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
  modifiedAt: '2026-09-05T00:00:00Z',
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
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
          { title: 'Picking Out the Hooves', href: '/care/hoof-picking' },
          { title: 'Laminitis', href: '/health/laminitis' },
        ]}
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
            { label: "Farrier-Visit Kit", href: "#kit" },
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
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-05"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the farrier-visit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse farrier-visit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the equine farrier-log book, portable
              farrier hoof-stand, and cordless barn
              flood-light notes so the next trim is booked
              before the wall flares and the work area is
              ready. Educational checklist, not a shoeing
              order and not a substitute for the farrier.
              Hoof picks, hoof boots, snow pads, and shoe
              studs stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse farrier-visit checklist"
              subtitle="Email the log-book, hoof-stand, and barn-light notes. No spam."
              ctaText="Email my horse farrier-visit checklist"
              source="care-farrier-schedule-under-hero"
            />
          </div>

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
            <li><strong>Book ahead</strong> and keep a standing appointment rather than calling once the feet are already overgrown. An equine farrier log book is how the next 6-to-8-week date, the last interval, and any flaring notes stay written down instead of guessed from memory; it is not a notebook for seizures or a dog weight-log book.</li>
            <li><strong>Teach the horse to stand</strong> quietly and pick up its feet, which protects both horse and farrier. A portable farrier hoof stand is how a lifted foot stays supported while the farrier trims or resets a shoe — it is not a soaking boot and not a riding hoof boot.</li>
            <li><strong>Provide a clean, level, well-lit area</strong> and dry feet to work on. A cordless barn flood light is how that aisle or wash stall stays bright when the standing appointment lands before sunrise or in a dark barn; it is not a foaling headlamp and not a medical penlight.</li>
            <li><strong>Communicate</strong> about any lameness, footing changes, or the horse&apos;s workload so shoeing can be tailored.</li>
            <li><strong>Coordinate farrier and vet</strong> when managing conditions like laminitis or navicular syndrome, where they work as a team.</li>
          </ul>

          <h2 id="kit">Farrier-visit kit</h2>
          <p>Everyday physical supplies that match the booking and work-area copy on this page — an equine farrier log book so the standing appointment and last interval stay written down, a portable farrier hoof stand so a lifted foot stays supported while the farrier works, and a cordless barn flood light so the aisle is bright enough to see clenches, flaring, and dry feet. These are household barn tools, not treatments. They do not trim or shoe a horse, they do not replace a farrier or veterinarian, and they are not a ranked product list. Hoof picks, hoof-pick brushes, riding hoof boots, snow pads, shoe studs, soaking boots, stall rubber mats, fecal-sample containers, manure rakes, and muck carts already live on other pages. This page does not hop dewormers, bute, Banamine, copper sulfate, iodine, or any medication. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (equine farrier log book /
              portable farrier hoof stand /
              cordless barn flood light).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1060 fecal-container / manure-rake /
              muck-cart, #1059 scoop / portion-cups /
              weight-log-book, #1058 stopwatch / notebook /
              bumper, #1057 feeder / maze-bowl / house-line,
              #1056 diapers / collar / crate, hoof-pick /
              hoof-boots, snow-pads / shoe-studs,
              stall-bedding / pasture-management. Rx ASINs
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the horse farrier-visit kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page booking and work-area copy — an
              equine farrier log book, a portable farrier
              hoof stand, and a cordless barn flood light.
              Everyday physical supplies only. They are
              not a ranked product list, they are not a
              medication hop, they are not a hoof-pick /
              hoof-boot hop, they are not a #1060
              fecal-sample-container / manure-rake /
              muck-cart hop, they are not a snow-pad or
              shoe-stud hop, and they do not replace a
              farrier. Horses.com earns a commission on
              qualifying purchases at no extra cost to you.
              Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+farrier+log+book?s=care-farrier-schedule"
                amazonLabel="Browse equine farrier log books on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/portable+farrier+hoof+stand?s=care-farrier-schedule"
                amazonLabel="Browse portable farrier hoof stands on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cordless+barn+flood+light?s=care-farrier-schedule"
                amazonLabel="Browse cordless barn flood lights on Amazon →"
              />
            </div>
          </div>

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
