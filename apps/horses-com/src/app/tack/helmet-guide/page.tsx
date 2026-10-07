import { HopDisclosure } from '../../../components/HopDisclosure'
import { HubMoneyLinks } from '@carloOS/ui'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ShopCtas, StockImage, TableShopLink, ComparisonFoot, EmailCapture } from '@carloOS/ui'
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
  title: 'Riding Helmet Guide',
  description:
    "Reference guide to equestrian helmets: why they matter, safety standards and certification, correct fit, when to replace after a fall, and helmet care.",
  url: 'https://horses.com/tack/helmet-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
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
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Stirrups and Rider Safety', href: '/tack/stirrups-and-safety' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Disciplines Hub', href: '/disciplines' },
        ]}
        heroHop={
          <>
            <HopDisclosure siteId="horses-com" href="/go/amazon-brand/troxel+spirit+riding+helmet?s=helmet-guide" />
            <div className="mb-4" data-primary-hop="true">
              <a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" data-shop-placement="hero" href="/go/amazon-brand/troxel+spirit+riding+helmet?s=helmet-guide">Browse the Troxel Spirit riding helmet on Amazon →</a>
            </div>
          </>
        }
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
            { label: "Who should buy which helmet", href: "#who" },
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

        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          <h2 id="why">Why Helmets Matter</h2>
          <p>Riders sit well above the ground on a powerful, sometimes unpredictable animal, and a fall onto the head can cause traumatic brain injury. Head injuries are the leading cause of riding-related death and serious disability, and a correctly fitted, certified helmet absorbs and distributes the energy of an impact, substantially reducing the severity of head trauma. No level of experience makes a rider immune -- many serious accidents happen to skilled riders on quiet horses.</p>

          <StockImage manifestKey="horses-com:tack-helmet" aspect="16:9" />

          <h2 id="standards">Safety Standards</h2>
          <p>A riding helmet must be certified to a recognized equestrian safety standard, not merely styled to look like one. Common certifications include ASTM/SEI (United States), PAS 015 and the kitemark and VG1 (United Kingdom and Europe), and Snell equestrian standards. These certifications mean the helmet has passed impact testing for equestrian use. Bicycle and other sport helmets are not substitutes -- they are tested for different impacts. Look for the certification label inside the helmet. Recreational trail rides that treat an ASTM/SEI label as mandatory are in the <a href="/disciplines/trail-riding" className="text-brand-primary underline">trail-riding guide</a>.</p>

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



          <ReviewCard quietUntilTag
            id="troxel-spirit"
            badge="Best Value"
            name="Troxel Spirit"
            subtitle="ASTM/SEI-certified schooling helmet at an entry price"
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
            ctaText="Compare the Troxel Spirit helmet at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/troxel-spirit-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="troxel-spirit-helmet"
          />

          <ReviewCard quietUntilTag
            id="ovation-deluxe"
            badge="Best Mid-Range"
            name="Ovation Deluxe Schooler"
            subtitle="Certified all-purpose helmet with broader fit range"
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
            ctaText="Compare the Ovation Deluxe Schooler at Dover Saddlery →"
            ctaHref="/go/dover/ovation-deluxe-schooler-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="ovation-deluxe-schooler-helmet"
          />

          <ReviewCard quietUntilTag
            id="charles-owen-ayr8"
            badge="Premium / Show"
            name="Charles Owen AYR8 Plus"
            subtitle="Multi-standard certified show helmet"
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
            ctaText="Compare the Charles Owen AYR8 Plus at Riding Warehouse →"
            ctaHref="/go/ridingwarehouse/charles-owen-ayr8-plus-helmet?s=tack-helmet-guide"
            ctaAffiliateProgram="ridingwarehouse"
            ctaAffiliateProduct="charles-owen-ayr8-plus-helmet"
          />

          <h2 id="who">Who should buy which helmet</h2>
          <p>Who each helmet is for is already on the three cards. Certification and a current fit matter more than the tier, and every helmet here is retired after a significant impact.</p>
          <div className="overflow-x-auto my-6 max-w-full">
            <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th className="p-3 font-bold text-brand-dark">If you need</th>
                  <th className="p-3 font-bold text-brand-dark">Buy</th>
                  <th className="p-3 font-bold text-brand-dark">From the card</th>
                  <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A certified schooling helmet for a new rider, a growing rider, or a lesson-barn spare</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#troxel-spirit" className="text-brand-primary">Troxel Spirit</a><TableShopLink quietUntilTag href={"/go/ridingwarehouse/troxel-spirit-helmet?s=tack-helmet-guide"} product={"Troxel Spirit"} /></td>
                  <td className="p-3 text-brand-text-mid">ASTM/SEI. Dial-fit. Schooling, new riders, and spares. Fewer shape options for hard-to-fit heads</td>
                  <td className="p-3 text-brand-text-mid">You need a show helmet, or the entry fit range does not match the head. An entry price does not change the fit requirement</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">An all-purpose helmet with more ventilation and a wider fit range than an entry model</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#ovation-deluxe" className="text-brand-primary">Ovation Deluxe Schooler</a><TableShopLink quietUntilTag href={"/go/dover/ovation-deluxe-schooler-helmet?s=tack-helmet-guide"} product={"Ovation Deluxe Schooler"} /></td>
                  <td className="p-3 text-brand-text-mid">Certified all-purpose. More ventilation and a wider fit range. For the established amateur who schools across disciplines</td>
                  <td className="p-3 text-brand-text-mid">You only want a lesson-barn spare you will replace after every fall, or you need a show-tier helmet</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A multi-standard show helmet for a rider who shows regularly</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#charles-owen-ayr8" className="text-brand-primary">Charles Owen AYR8 Plus</a><TableShopLink quietUntilTag href={"/go/ridingwarehouse/charles-owen-ayr8-plus-helmet?s=tack-helmet-guide"} product={"Charles Owen AYR8 Plus"} /></td>
                  <td className="p-3 text-brand-text-mid">Multi-standard, commonly PAS 015, VG1, and ASTM/SEI by variant. Showing and competitive riders. Still single-use after a real impact</td>
                  <td className="p-3 text-brand-text-mid">You want the lowest replacement cost after a fall. Professional fitting is strongly advised, and it is retired after any significant impact</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-07" />

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="mb-4 text-sm font-semibold leading-snug">
              <a href="/tack/stirrups-and-safety" className="inline-block max-w-full whitespace-normal text-brand-primary underline underline-offset-2">
                Read stirrup safety before you ride in this helmet →
              </a>
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/troxel+spirit+riding+helmet?s=helmet-guide"
                amazonLabel="Browse Troxel Spirit riding helmet on Amazon →"
              />

          </div>
          </div>

          <EmailCapture
            variant="inline"
            siteId="horses-com"
            addressOnly
            title="Save an address with this guide"
            ctaText="Save my address"
            source="tack-helmet-guide"
            checklist={[
              'A riding helmet must be certified to a recognized equestrian safety standard, not merely styled to look like one.',
              'Replace a helmet after any significant impact, even if it looks undamaged, because the protective foam crushes once.',
              'The Troxel Spirit is the ASTM/SEI schooling helmet for a new rider, a growing rider, or a lesson-barn spare.',
              'The Ovation Deluxe Schooler is the all-purpose helmet with more ventilation and a wider fit range than an entry model.',
              'The Charles Owen AYR8 Plus is the multi-standard show helmet. Retire it after any significant impact.',
            ]}
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
            <HubMoneyLinks
        hubHref="/tack"
        hubLabel="Tack"
        links={[
          { href: '/reviews/best-winter-horse-blankets', label: 'Best winter blankets' },
          { href: '/reviews/best-equine-supplements', label: 'Best equine supplements' },
          { href: '/ownership/horse-insurance', label: 'Horse insurance covers' },
        ]}
      />
</ArticleLayout>
    </>
  )
}
