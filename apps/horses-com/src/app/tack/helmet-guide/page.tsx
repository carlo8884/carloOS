import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, StockImage } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Riding Helmet Guide — Standards, Fit, and When to Replace",
  description:
    "Reference guide to equestrian helmets: why they matter, safety standards and certification, correct fit, when to replace after a fall, and helmet care.",
  path: '/tack/helmet-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Riding Helmet Guide — Standards, Fit, and When to Replace",
  description:
    "Reference guide to equestrian helmets: why they matter, safety standards and certification, correct fit, when to replace after a fall, and helmet care.",
  url: 'https://horses.com/tack/helmet-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "When should I replace my riding helmet?",
    answer:
      "Replace a helmet after any significant impact, even if it looks fine, because the protective foam crushes to absorb energy once and cannot do so again. Also replace it periodically as materials age -- manufacturers commonly advise around every five years even without a fall -- and immediately if it is cracked, deformed, or damaged.",
    answerText:
      "After any significant impact, even if it looks fine, since the foam protects only once. Also replace it as it ages (often around every five years) and immediately if cracked or damaged.",
  },
  {
    question: "Can I use a bike helmet for riding?",
    answer:
      "No. Bicycle and other sport helmets are tested for different impacts and are not substitutes for an equestrian helmet, which must be certified to a recognized riding standard (such as ASTM/SEI, PAS 015, VG1, or Snell equestrian). Always look for the equestrian certification label inside the helmet.",
    answerText:
      "No -- bike helmets are tested for different impacts. Use an equestrian helmet certified to a riding standard like ASTM/SEI, PAS 015, VG1, or Snell, shown on the inside label.",
  },
  {
    question: "Why shouldn't I buy a second-hand riding helmet?",
    answer:
      "A used helmet may have an unseen impact history that has already crushed its protective foam, leaving it looking fine but no longer protective. Because you cannot verify that history, a second-hand helmet is an unacceptable risk for something protecting against serious head injury. Always buy a new, certified, well-fitted helmet.",
    answerText:
      "A used helmet may have an unseen impact that spent its protective foam while looking fine. You cannot verify its history, so always buy new, certified, and well-fitted.",
  },
]

export default function HelmetGuidePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Riding Helmet Guide",
          subtitle:
            "A properly fitted, certified riding helmet is the single most important piece of safety equipment a rider owns. Head injury is the leading cause of serious harm and death in equestrian accidents, and a helmet measurably reduces that risk. Knowing which standards to trust, how to fit a helmet correctly, and when to replace it is essential knowledge for every rider and every parent of a young rider. This is reference material to inform safety decisions.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Helmet Guide", href: '/tack/helmet-guide' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Helmets Matter", href: "#why" },
            { label: "Safety Standards", href: "#standards" },
            { label: "Correct Fit", href: "#fit" },
            { label: "When to Replace", href: "#replace" },
            { label: "Care and Common Mistakes", href: "#care" },
            { label: "Certified Helmet Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Stirrups and Safety", href: "/tack/stirrups-and-safety" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Eventing", href: "/disciplines/eventing" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-helmet"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Helmets Matter</h2>
          <p>Riders sit well above the ground on a powerful, sometimes unpredictable animal, and a fall onto the head can cause traumatic brain injury. Head injuries are the leading cause of riding-related death and serious disability, and a correctly fitted, certified helmet absorbs and distributes the energy of an impact, substantially reducing the severity of head trauma. No level of experience makes a rider immune -- many serious accidents happen to skilled riders on quiet horses.</p>

          <StockImage manifestKey="horses-com:tack-helmet" aspect="16:9" />

          <h2 id="standards">Safety Standards</h2>
          <p>A riding helmet must be certified to a recognized equestrian safety standard, not merely styled to look like one. Common certifications include ASTM/SEI (United States), PAS 015 and the kitemark and VG1 (United Kingdom and Europe), and Snell equestrian standards. These certifications mean the helmet has passed impact testing for equestrian use. Bicycle and other sport helmets are not substitutes -- they are tested for different impacts. Look for the certification label inside the helmet.</p>

          <h2 id="fit">Correct Fit</h2>
          <ul>
            <li><strong>Measure the head</strong> and try helmets on, since shapes vary; the helmet should sit level, low on the forehead just above the eyebrows.</li>
            <li><strong>Snug all around</strong> -- the helmet should grip evenly without pressure points, and move the scalp slightly when wiggled rather than sliding.</li>
            <li><strong>Secure harness</strong> -- the chinstrap fastened so only a finger or two fits underneath, holding the helmet in place.</li>
            <li><strong>No rocking or sliding</strong> forward, back, or side to side when the head moves or the harness is done up.</li>
            <li><strong>Replace as children grow</strong> rather than buying big to last, since a loose helmet does not protect.</li>
          </ul>

          <h2 id="replace">When to Replace</h2>
          <p>A helmet must be replaced after any significant impact, even if it looks undamaged, because the protective foam crushes to absorb energy and cannot do so again -- the protection may be spent invisibly. Helmets should also be replaced periodically as materials age (manufacturers commonly advise every few years, often around five, even without a fall), and immediately if cracked, deformed, or damaged. A helmet that has done its job in a fall has earned retirement.</p>

          <h2 id="care">Care and Common Mistakes</h2>
          <ul>
            <li><strong>Do not buy second-hand</strong> -- you cannot know an unseen impact history, which may have spent the protection.</li>
            <li><strong>Store sensibly</strong> away from extreme heat (a hot car can degrade the materials) and harsh chemicals.</li>
            <li><strong>Always fasten the harness</strong> -- an unfastened or loose helmet can come off in a fall and offers little protection.</li>
            <li><strong>Replace after impacts</strong> and at the manufacturer-advised interval, rather than riding in an aged or damaged helmet.</li>
            <li><strong>Choose certification over looks</strong> and fit over fashion every time.</li>
          </ul>

          <h2 id="picks">Certified Helmet Picks</h2>
          <p>The following are widely-stocked, certified equestrian helmets across the common price tiers. Certification and correct fit matter far more than brand or price — any helmet below must be tried on and fitted to the individual head before it protects. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing, and no helmet here is endorsed over a fitter&apos;s professional measurement.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="troxel-spirit"
            badge="Best Value"
            badgeEmoji="💲"
            name="Troxel Spirit"
            subtitle="ASTM/SEI-certified schooling helmet at an entry price"
            score={8.4}
            winner
            description={<>
              <p>The Troxel Spirit is one of the most widely-stocked entry-tier schooling helmets in US equestrian retail. It carries ASTM/SEI certification — the floor requirement for any riding helmet — at a price point that makes replacing a helmet after a fall financially painless, which matters because a spent helmet must be retired regardless of cost.</p>
              <p>Reasonable choice for: a new or growing rider, a lesson-barn spare, or anyone who wants a certified helmet they will not hesitate to replace after an impact. Fit must be confirmed on the head; an entry price does not change the fit requirement.</p>
            </>}
            specs={[
              { label: 'Certification', value: 'ASTM/SEI', highlight: 'good' },
              { label: 'Adjustment', value: 'Dial-fit system' },
              { label: 'Best use case', value: 'Schooling, new riders, spares' },
            ]}
            pros={['ASTM/SEI certified', 'Low replacement cost after a fall', 'Dial-fit adjustability', 'Very widely stocked']}
            cons={['Heavier and less ventilated than premium helmets', 'Fewer shape options for hard-to-fit heads']}
            price="$40–60"
            ctaText="Compare at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/troxel-spirit-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="troxel-spirit-helmet"
          />

          <ReviewCard
            id="ovation-deluxe"
            badge="Best Mid-Range"
            badgeEmoji="🎩"
            name="Ovation Deluxe Schooler"
            subtitle="Certified all-purpose helmet with broader fit range"
            score={8.6}
            description={<>
              <p>The Ovation Deluxe Schooler sits in the mid price tier and is a common all-purpose choice for riders who school across disciplines. It carries the required equestrian certification and offers more ventilation and a wider fit range than entry models, making it easier to fit a broader set of head shapes.</p>
              <p>Most relevant for the established amateur rider who wants better ventilation and fit refinement than an entry helmet without moving to a show-tier price.</p>
            </>}
            specs={[
              { label: 'Certification', value: 'ASTM/SEI', highlight: 'good' },
              { label: 'Ventilation', value: 'Multiple vents' },
              { label: 'Best use case', value: 'All-purpose schooling' },
            ]}
            pros={['Certified for equestrian use', 'Better ventilation than entry tier', 'Wider fit range', 'Moderate price']}
            cons={['Not a show-ring aesthetic', 'Still requires individual fitting']}
            price="$70–110"
            ctaText="Compare at Dover Saddlery →"
            ctaHref="/go/dover/ovation-deluxe-schooler-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="ovation-deluxe-schooler-helmet"
          />

          <ReviewCard
            id="charles-owen-ayr8"
            badge="Premium / Show"
            badgeEmoji="🏆"
            name="Charles Owen AYR8 Plus"
            subtitle="Multi-standard certified show helmet"
            score={9.1}
            description={<>
              <p>The Charles Owen AYR8 Plus is a long-standing premium show helmet certified to multiple equestrian standards (commonly PAS 015, VG1, and ASTM/SEI depending on model variant). Riders choose it for the refined fit, ventilation, and show-appropriate appearance — but the protective value still comes from certification and correct fit, not the price.</p>
              <p>Most relevant for the competitive rider who shows regularly and wants a multi-standard-certified helmet. As with every helmet, retire it after any significant impact.</p>
            </>}
            specs={[
              { label: 'Certification', value: 'Multi-standard (PAS 015 / VG1 / ASTM-SEI by variant)', highlight: 'good' },
              { label: 'Ventilation', value: 'High-flow vented shell' },
              { label: 'Best use case', value: 'Showing, competitive riders' },
            ]}
            pros={['Multiple safety-standard certifications', 'Refined fit and ventilation', 'Show-appropriate appearance', 'Long manufacturer track record']}
            cons={['Premium price', 'Still single-use after a real impact', 'Professional fitting strongly advised']}
            price="$280–400"
            ctaText="Compare at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/charles-owen-ayr8-plus-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="charles-owen-ayr8-plus-helmet"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>ASTM International / SEI, PAS 015, VG1, and Snell equestrian helmet standards.</li>
            <li>Equestrian medical and safety organizations. Helmet use and head-injury research.</li>
            <li>American Association of Equine Practitioners and riding-safety bodies. Helmet guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
