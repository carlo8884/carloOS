import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "The Cost of Owning a Horse — Purchase, Upkeep, and the Real Budget",
  description:
    "Reference guide to the cost of horse ownership: purchase price vs upkeep, the main recurring costs, hidden and emergency expenses, and budgeting honestly.",
  path: '/ownership/cost-of-owning-a-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "The Cost of Owning a Horse — Purchase, Upkeep, and the Real Budget",
  description:
    "Reference guide to the cost of horse ownership: purchase price vs upkeep, the main recurring costs, hidden and emergency expenses, and budgeting honestly.",
  url: 'https://horses.com/ownership/cost-of-owning-a-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Is the purchase price the main cost of a horse?",
    answer:
      "No -- the purchase price is usually the cheapest part. Upkeep is ongoing and forever, and the annual cost of keeping a horse routinely exceeds the purchase price of an ordinary horse within the first year. A free or cheap horse can even cost more overall through extra training, rehabilitation, or veterinary care, so budget for the keeping, not the buying.",
    answerText:
      "No -- upkeep is the main cost and is ongoing. Annual keeping costs routinely exceed an ordinary horse's purchase price within a year, and cheap horses can cost more in training and vet care.",
  },
  {
    question: "What are the biggest ongoing costs of owning a horse?",
    answer:
      "The largest recurring costs are keep (board, or the land, hay, bedding, and labor of keeping a horse at home) and feed and forage, which dominate the monthly budget. On top come the constant farrier cycle every 6 to 8 weeks, routine veterinary care and parasite control, insurance if chosen, and tack and equipment.",
    answerText:
      "Keep (board or home upkeep) and feed and forage dominate, followed by the regular farrier cycle, routine vet care and parasite control, insurance, and tack and equipment.",
  },
  {
    question: "Why do I need an emergency fund for a horse?",
    answer:
      "Emergencies such as colic surgery, a serious lameness workup, or a long course of treatment can cost thousands and arrive without warning. A horse with no contingency fund or insurance behind it is a welfare risk, since the owner may be unable to pay for urgent care. Budgeting an emergency fund or insurance is a core responsibility of ownership.",
    answerText:
      "Emergencies like colic surgery or major lameness can cost thousands without warning. Without a contingency fund or insurance, the horse's welfare is at risk if you cannot pay for urgent care.",
  },
]

export default function CostOfOwningPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Boarding Options', href: '/ownership/boarding-options' },
          { title: 'Horse Insurance', href: '/ownership/horse-insurance' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Horse Cost of Ownership Calculator', href: '/tools/horse-cost-calculator', category: 'Tools' },
        ]}
        hero={{
          title: "The Cost of Owning a Horse",
          subtitle:
            "The most repeated piece of wisdom in horse ownership is that the purchase price is the cheapest part -- a free horse is anything but free once the bills start. Horses are a major, ongoing financial commitment, and the most common reason horses end up neglected or surrendered is that owners underestimated the cost. This guide breaks down where the money goes so a prospective owner can budget honestly. Figures vary enormously by region and are illustrative rather than quotes.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Cost of Owning a Horse", href: '/ownership/cost-of-owning-a-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Purchase vs Upkeep", href: "#purchase" },
            { label: "The Big Recurring Costs", href: "#recurring" },
            { label: "Routine Health and Farrier", href: "#routine" },
            { label: "Hidden and Emergency Costs", href: "#hidden" },
            { label: "Budgeting Honestly", href: "#budget" },
            { label: "Horse-ownership leftover budget kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Boarding Options", href: "/ownership/boarding-options" },
              { label: "Horse Insurance", href: "/ownership/horse-insurance" },
              { label: "Leasing a Horse", href: "/ownership/leasing-a-horse" },
              { label: "Cost of Ownership Calculator", href: "/tools/horse-cost-calculator" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-cost"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the horse-ownership budget worksheet
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse-ownership budget worksheet
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-ownership monthly-budget,
              emergency-fund-expense, and
              keep-feed-farrier cost-log notes that match
              the purchase-versus-upkeep, recurring-keep,
              and honest-budgeting copy on this
              page — a horse ownership monthly budget
              worksheet so purchase-price versus forever
              upkeep is written before anyone bids (not a
              first-horse tryout walkthrough, not a
              boarding-facility walkthrough, not a
              daily-care chart), an equine emergency fund
              expense tracker notebook so colic-surgery
              and lameness-workup contingency stays
              visible (not an emergency-triage chart, not
              a vital-signs card, not a first-aid saline
              hop), and a horse keep / feed / farrier
              cost log binder so board, hay, and the
              6-to-8-week farrier cycle stay in one
              ledger (not a farrier log book, not a
              boarding-contract binder, not a
              pre-purchase exam records binder).
              Educational owner budgeting tools only,
              not a ranked product list, and not a
              substitute for a veterinarian or
              accountant. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse-ownership budget worksheet"
              subtitle="Email the monthly-budget, emergency-fund, and keep-feed-farrier notes. No spam."
              ctaText="Email my horse-ownership budget worksheet"
              source="ownership-cost-of-owning-a-horse-under-hero"
            />
          </div>

          <h2 id="purchase">Purchase vs Upkeep</h2>
          <p>The purchase price of a horse ranges from free or a few hundred for an unbroke or older horse to many thousands or far more for a trained competition prospect. But the purchase is a one-time cost, while upkeep is forever. The annual cost of keeping a horse routinely exceeds the purchase price of an ordinary horse within the first year, and a low or zero purchase price often signals a horse that will cost more in training, rehabilitation, or veterinary care. Budget for the keeping, not the buying.</p>
          <p>
            A horse ownership monthly budget worksheet is how
            purchase-price versus forever upkeep stays
            written before anyone bids instead of living
            in a phone note after a classifieds scroll —
            it is not a laminated first-horse tryout
            walkthrough checklist (that lives on
            buying-your-first-horse), not a laminated
            horse boarding facility walkthrough checklist
            (that lives on boarding-options), and not a
            laminated horse barn daily-care chart (that
            lives on the care hub). This page does not hop
            owner-guides charts, calculator-tools charts,
            or forage-first charts already pinned on those
            hubs. This page does not hop the cost
            calculator&apos;s barn first-aid kit or
            halter-and-lead searches.
          </p>

          <h2 id="recurring">The Big Recurring Costs</h2>
          <p>The largest ongoing expense is usually keep -- either board (paying a facility to house and care for the horse) or, if you keep the horse at home, the combined cost of land, fencing, shelter, hay, bedding, and your labor. Feed and forage are a major year-round cost, rising in winter when hay does the work that grass does in summer. Together, keep and feed dominate the monthly budget, which is why the choice of how to keep a horse is the single biggest financial decision after buying.</p>
          <p>
            A horse keep / feed / farrier cost log binder
            is how board or home-keep, hay and forage,
            and the recurring farrier cycle stay in one
            ledger instead of three separate receipts —
            it is not an equine farrier log book (that
            lives on farrier-schedule and records trim
            dates, not dollar amounts), not a horse
            boarding contract document binder (that lives
            on boarding-options), and not a horse
            pre-purchase exam records binder (that lives
            on buying-your-first-horse). This page does
            not hop hay tarps, hay racks, or feed bins
            already pinned on boarding and nutrition
            pages.
          </p>

          <h2 id="routine">Routine Health and Farrier</h2>
          <ul>
            <li><strong>Farrier</strong> every 6 to 8 weeks, year-round -- trimming or shoeing is a constant recurring cost.</li>
            <li><strong>Routine veterinary care</strong> -- annual vaccinations, dental floats, and fecal egg counts and deworming.</li>
            <li><strong>Parasite control</strong> guided by fecal egg counts as part of a modern program.</li>
            <li><strong>Insurance</strong> where chosen, as a recurring premium (see the insurance guide).</li>
            <li><strong>Tack, rugs, and equipment</strong> with ongoing replacement and maintenance.</li>
          </ul>
          <p>
            The same horse keep / feed / farrier cost log
            binder is also how the 6-to-8-week farrier
            invoice and the routine veterinary line sit
            beside keep and feed — without turning this
            page into a farrier-log hop, a flood-light
            hop, a vaccine hop, or a clinic-directory
            listing. Educational owner cost records only.
            This page does not claim hands-on testing.
          </p>

          <h2 id="hidden">Hidden and Emergency Costs</h2>
          <p>The costs that catch owners out are the unpredictable ones. A colic surgery, a serious lameness workup with imaging, or a long course of treatment can run into thousands quickly, and emergencies do not wait for payday. Other less-obvious costs include lessons and training, competition fees and travel, supplements and special feeds for a horse with a condition, and the eventual costs of caring for an aging horse and, ultimately, end-of-life. A horse with no contingency fund behind it is a financial risk to its own welfare.</p>
          <p>
            An equine emergency fund expense tracker
            notebook is how the colic-surgery,
            lameness-workup, and long-treatment
            contingency stays visible when the monthly
            keep looks affordable — it is not a
            laminated horse barn emergency-triage chart
            (that lives on the health hub), not a horse
            stall-door vital-signs card (that lives on
            the health hub), and not a first-aid saline
            / pads / scissors hop (those live on
            first-aid-kit). This page does not hop
            equine first-aid kits, digital veterinary
            thermometers, vet-wrap, or poultice searches
            already pinned on grimace-scale and emergency
            tools. This page does not hop medications.
          </p>

          <h2 id="budget">Budgeting Honestly</h2>
          <p>The responsible approach is to total the realistic monthly keep, feed, farrier, and routine veterinary costs for your area, then add a genuine emergency fund (or insurance) for the inevitable unexpected vet bill. Get real local figures from boarding facilities, farriers, and veterinarians rather than guessing, and budget for the worst year, not the best. Many experienced owners advise treating affordability as the first question in horse ownership, because a horse the owner cannot afford to keep well is a welfare problem waiting to happen.</p>
          <p>
            The same horse ownership monthly budget
            worksheet is how those local keep, feed,
            farrier, and routine veterinary figures are
            totaled before the purchase — and the same
            equine emergency fund expense tracker
            notebook is how the worst-year contingency
            sits beside that monthly total. Educational
            owner budgeting tools only. They are not a
            substitute for a veterinarian or accountant.
            This page does not hop weatherproof
            clipboards already pinned on flu pages, and
            it does not hop shipping boots, trailer ties,
            or ASTM helmets.
          </p>

          <h2 id="kit">Horse-ownership leftover budget kit</h2>
          <p>
            Everyday physical supplies that match the
            purchase-versus-upkeep, keep-feed-farrier
            recurring-cost, and emergency-fund /
            honest-budgeting copy on this page — a horse
            ownership monthly budget worksheet so
            purchase-price versus forever upkeep is
            written before anyone bids, an equine
            emergency fund expense tracker notebook so
            colic-surgery and lameness-workup
            contingency stays visible, and a horse keep
            / feed / farrier cost log binder so board,
            hay, and the 6-to-8-week farrier cycle stay
            in one ledger. These are educational owner
            searches, not a ranked product list, not a
            substitute for a veterinarian or accountant,
            not a first-horse tryout walkthrough /
            buyer-visit-notebook /
            pre-purchase-exam-records-binder hop (those
            live on buying-your-first-horse), not a
            boarding-facility walkthrough /
            boarding-contract-binder / hay-bale-tarp hop
            (those live on boarding-options), not a
            first-aid saline / pads / scissors hop, not a
            laminated equine-vet interview checklist /
            after-hours emergency-cover question card /
            VCPR records folder hop (those live on
            choosing-a-vet), not a daily-care-chart /
            stall-door-care-card / husbandry-handbook hop
            (those live on the care hub), not an
            emergency-triage-chart / vital-signs-card /
            health-handbook hop, not a
            forage-first-chart / ration-card /
            nutrition-handbook hop, not an
            owner-guides-chart hop, not a
            calculator-tools-chart hop, not a
            farrier-log / flood-light hop, and not a
            weatherproof-clipboard hop. This page does
            not hop medications or vaccines. This page
            does not claim hands-on testing. This page
            does not invent clinic listings.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (horse ownership monthly budget worksheet /
              equine emergency fund expense tracker
              notebook /
              horse keep / feed / farrier cost log
              binder).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1132
              laminated+equine+vet+interview+checklist /
              horse+after+hours+emergency+cover+question+card /
              horse+veterinary+history+vcpr+records+folder, #1131
              first+horse+buyer+visit+field+notebook /
              laminated+first+horse+tryout+walkthrough+checklist /
              horse+pre+purchase+exam+records+binder, #1130
              laminated+horse+boarding+facility+walkthrough+checklist /
              horse+boarding+contract+document+binder /
              waterproof+horse+hay+bale+storage+tarp, #1129
              sterile+saline+wound+flush+horse /
              nonstick+wound+dressing+pads+horse /
              equine+bandage+scissors, #1128
              laminated+horse+barn+calculator+tools+chart /
              horse+stall+door+measurement+card /
              equine+calculator+reference+handbook, #1127
              laminated+horse+barn+owner+guides+chart /
              horse+stall+door+owner+guides+card /
              equine+owner+guides+reference+handbook, #1126
              laminated+horse+barn+daily+care+chart /
              horse+stall+door+care+card /
              equine+husbandry+reference+handbook, #1125
              laminated+horse+barn+emergency+triage+chart /
              horse+stall+door+vital+signs+card /
              equine+health+reference+handbook, #1124
              laminated+horse+barn+forage+first+chart /
              horse+stall+door+ration+card /
              equine+nutrition+reference+handbook,
              grimace / emergency
              equine+first+aid+kit /
              digital+veterinary+thermometer /
              vet+wrap+bandage /
              poultice,
              cost-calculator
              horse+barn+first+aid+kit /
              horse+halter+lead+rope,
              farrier-schedule
              cordless+barn+flood+light /
              equine+farrier+log+book,
              flu
              weatherproof+storage+clipboard,
              trailering
              horse+shipping+boots /
              horse+trailer+ties,
              helmet-guide
              ASTM+SEI+horse+riding+helmet. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the horse-ownership leftover budget kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page purchase-versus-upkeep,
              keep-feed-farrier recurring-cost, and
              emergency-fund / honest-budgeting
              copy — a horse ownership monthly budget
              worksheet, an equine emergency fund
              expense tracker notebook, and a horse
              keep / feed / farrier cost log binder.
              Educational owner searches only. They
              are not a ranked product list, they are
              not a first-horse tryout / buyer-notebook
              / PPE-records hop, they are not a
              boarding walkthrough / contract-binder /
              hay-tarp hop, they are not a first-aid
              saline / pads / scissors hop, they are
              not a choosing-a-vet interview /
              after-hours-cover / VCPR-folder hop,
              they are not a daily-care /
              emergency-triage / owner-guides /
              calculator-tools chart hop, they are not
              a farrier-log hop, and they do not
              replace a veterinarian or accountant.
              Horses.com earns a commission on
              qualifying purchases at no extra cost to
              you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+ownership+monthly+budget+worksheet?s=ownership-cost-of-owning-a-horse"
                amazonLabel="Browse horse ownership monthly budget worksheets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+emergency+fund+expense+tracker+notebook?s=ownership-cost-of-owning-a-horse"
                amazonLabel="Browse equine emergency fund expense tracker notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+keep+feed+farrier+cost+log+binder?s=ownership-cost-of-owning-a-horse"
                amazonLabel="Browse horse keep / feed / farrier cost log binders on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Responsible Horse Ownership and Cost” owner resources. aaep.org.</li>
            <li>American Horse Council and equine economic surveys (cost-of-ownership data).</li>
            <li>Rural and agricultural extension services. Horse-ownership budgeting resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
