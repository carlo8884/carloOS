import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Boarding Options — Full, Pasture, and Self-Care",
  description:
    "Reference guide to horse boarding: full-care, partial, pasture, and self-care board, keeping a horse at home, and choosing the right arrangement and facility.",
  path: '/ownership/boarding-options',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Boarding Options — Full, Pasture, and Self-Care",
  description:
    "Reference guide to horse boarding: full-care, partial, pasture, and self-care board, keeping a horse at home, and choosing the right arrangement and facility.",
  url: 'https://horses.com/ownership/boarding-options',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between full-care and self-care board?",
    answer:
      "Full-care board has the facility do all the daily work -- feeding, turnout, mucking, hay, and bedding -- for a higher fee, suiting owners short on time or experience. Self-care board provides only the space while the owner supplies feed and bedding and does all the daily care themselves, which is cheaper but demands reliable daily attendance and real horsemanship.",
    answerText:
      "Full-care board has the facility do all daily work for a higher fee; self-care provides only the space while you do all the feeding, mucking, and turnout yourself, cheaper but demanding daily attendance.",
  },
  {
    question: "Is pasture board good for a horse?",
    answer:
      "Pasture board, keeping the horse out at grass in a group with shelter, suits horses that thrive on turnout and company and aligns with the welfare benefits of living out -- continuous movement, forage, and social contact. It is usually cheaper than stabled board, with the trade-offs of less individual management and less protection from extreme weather.",
    answerText:
      "Often yes -- it suits horses that thrive on turnout and company and matches the welfare benefits of living out. It is usually cheaper, with less individual management and weather protection.",
  },
  {
    question: "What should I look for when choosing a boarding facility?",
    answer:
      "Visit and observe the condition of the horses, cleanliness, safety of fencing and stabling, and how staff handle horses; check how much turnout is provided and in what groups; clarify in writing exactly what the fee includes; ask about feeding routine, hay quality, and emergency handling; and talk to current boarders to confirm the management style suits you.",
    answerText:
      "Horse condition, cleanliness, fencing and stable safety, turnout provision, exactly what the fee includes in writing, feeding and emergency routines, and feedback from current boarders.",
  },
]

export default function BoardingOptionsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
          { title: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling' },
          { title: 'Fencing Safety', href: '/care/fencing-safety' },
        ]}
        hero={{
          title: "Horse Boarding Options",
          subtitle:
            "Where and how you keep a horse is the biggest practical and financial decision after buying it. The choice runs from full-service board, where the facility does everything, to keeping a horse at home, where you do everything -- with several arrangements in between, each trading cost against convenience and control. This guide explains the main options and what to look for in a facility. This is reference material to inform the decision.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Boarding Options", href: '/ownership/boarding-options' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "The Spectrum of Options", href: "#spectrum" },
            { label: "Full-Care Board", href: "#full" },
            { label: "Partial and Pasture Board", href: "#partial" },
            { label: "Self-Care Board", href: "#self" },
            { label: "Keeping a Horse at Home", href: "#home" },
            { label: "Choosing a Facility", href: "#choosing" },
            { label: "Boarding leftover barn kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "Turnout vs Stabling", href: "/care/turnout-vs-stabling" },
              { label: "Pasture Management", href: "/care/pasture-management" },
              { label: "Fencing and Safety", href: "/care/fencing-safety" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-boarding"
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
              Keep the horse boarding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse boarding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the boarding-facility-walkthrough,
              written-boarding-contract, and
              hay-and-bedding-storage notes that match
              the visit-and-observe, clarify-in-writing,
              and hay-and-bedding-storage copy on this
              page — a laminated horse boarding facility
              walkthrough checklist so the visit records
              horse condition, cleanliness, and fencing
              and stabling safety (not a daily-care
              chart, not an emergency-triage chart, not
              an owner-guides chart), a horse boarding
              contract document binder so the fee
              inclusions and extras stay in writing
              (not a farrier log, not a stall-door
              care card, not a weatherproof clipboard),
              and a waterproof horse hay-bale storage
              tarp so home-kept hay and bedding stay
              dry (not a hay rack, not a hay bag, not
              a feed bin). Educational barn checklist,
              not a ranked product list, and not a
              substitute for visiting the yard or
              putting the boarding agreement in
              writing. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse boarding checklist"
              subtitle="Email the walkthrough, written-contract, and hay-storage notes. No spam."
              ctaText="Email my horse boarding checklist"
              source="ownership-boarding-options-under-hero"
            />
          </div>

          <h2 id="spectrum">The Spectrum of Options</h2>
          <p>Boarding arrangements sit on a spectrum from most service to least. At one end, full-care board has the facility do all the daily work for a higher fee; at the other, self-care board provides only the space while you do everything; and keeping a horse at home gives total control and total responsibility. Between them lie partial and pasture board. The right choice depends on your time, budget, experience, facilities available, and how hands-on you want or need to be.</p>

          <h2 id="full">Full-Care Board</h2>
          <p>Full (or full-service) board is the most comprehensive and expensive option: the facility feeds, turns out and brings in, mucks stalls, provides hay and bedding, and handles the daily routine, often with arenas, trainers, and amenities on site. It suits owners short on time or experience, those who want training and facilities, and anyone who cannot be at the barn daily. The trade-off is cost and less personal control over exactly how the horse is managed.</p>

          <h2 id="partial">Partial and Pasture Board</h2>
          <p>Partial board splits the duties -- the facility might provide feeding and turnout while the owner handles some tasks -- at a fee between full and self-care. Pasture board keeps the horse out at grass, typically in a group with shelter, rather than in a stall; it is usually cheaper, suits horses that thrive on turnout and company, and aligns with the welfare benefits of living out, though it offers less individual management and protection from the elements.</p>

          <h2 id="self">Self-Care Board</h2>
          <p>Self-care (or DIY) board provides the space -- a stall or field and use of facilities -- while the owner supplies feed and bedding and does all the daily care: feeding, mucking, turnout, and checking the horse. It is cheaper than full board but demands daily attendance and real horsemanship, and it only works if the owner can reliably be there every day, including in bad weather and emergencies. Many self-care yards rely on owners covering for each other.</p>

          <h2 id="home">Keeping a Horse at Home</h2>
          <p>Keeping a horse at home offers maximum control and the joy of having the horse on your doorstep, but it is a serious undertaking: it requires suitable land, safe fencing and shelter, water, hay and bedding storage, and your labor every single day, year-round. Horses are herd animals, so a lone horse needs company. Home-keeping also means you are the first responder in every emergency. It can be rewarding and even economical with the right setup, but it is a lifestyle commitment, not just a saving.</p>
          <p>
            A waterproof horse hay-bale storage tarp is how
            home-kept hay and bedding stay dry instead of
            sitting in a leak — it is not a wall-mounted
            horse hay rack (that lives on forage-basics),
            not a nylon horse hay bag (that lives on
            performance feeding), and not a rodent-proof
            metal horse feed bin (that lives on grain
            and concentrates). This page does not hop
            stall bedding, manure carts, or automatic
            waterers already pinned on the stall-bedding
            calculator, deworming-program, and water
            pages.
          </p>

          <h2 id="choosing">Choosing a Facility</h2>
          <ul>
            <li><strong>Visit and observe</strong> the condition of the horses, the cleanliness, safety of fencing and stabling, and how staff handle horses.</li>
            <li><strong>Check turnout</strong> -- how much, in what groups, and on what footing, since turnout is central to welfare.</li>
            <li><strong>Clarify exactly what is included</strong> in the fee and what costs extra, in writing.</li>
            <li><strong>Ask about routine</strong> feeding times, hay quality, and how emergencies and after-hours problems are handled.</li>
            <li><strong>Talk to current boarders</strong> and confirm the management style and atmosphere suit you and your horse.</li>
          </ul>
          <p>
            A laminated horse boarding facility
            walkthrough checklist is how the visit
            records horse condition, cleanliness, and
            fencing and stabling safety instead of
            relying on memory after the tour — it is
            not a laminated horse barn daily-care chart
            (that lives on the care hub), not an
            emergency-triage chart (that lives on the
            health hub), and not an owner-guides chart
            (that lives on the guides hub). A horse
            boarding contract document binder is how
            the fee inclusions and extras stay in
            writing — it is not a farrier log book
            (that lives on farrier-schedule), not a
            stall-door care card (that lives on the
            care hub), and not a weatherproof storage
            clipboard (that lives on flu pages). This
            page does not hop electric tape, fence
            mesh, or flood lights already pinned on
            fencing-safety and farrier-schedule.
          </p>

          <h2 id="kit">Boarding leftover barn kit</h2>
          <p>
            Everyday physical supplies that match the
            visit-and-observe, clarify-in-writing, and
            hay-and-bedding-storage copy on this page —
            a laminated horse boarding facility
            walkthrough checklist so the visit records
            horse condition, cleanliness, and fencing
            and stabling safety, a horse boarding
            contract document binder so the fee
            inclusions and extras stay in writing, and
            a waterproof horse hay-bale storage tarp so
            home-kept hay and bedding stay dry. These
            are educational barn searches, not a ranked
            product list, not a substitute for visiting
            the yard or putting the boarding agreement
            in writing, not a daily-care-chart /
            stall-door-care-card / husbandry-handbook
            hop (those live on the care hub), not an
            emergency-triage-chart / vital-signs-card /
            health-handbook hop, not a forage-first-chart
            / ration-card / nutrition-handbook hop, not
            an owner-guides-chart hop, not a
            calculator-tools-chart hop, not a first-aid
            saline / pads / scissors hop, not a
            hay-rack / hay-bag / feed-bin hop, not a
            farrier flood-light hop, and not a
            fencing-safety tape / mesh / rope hop.
            This page does not hop medications or
            vaccines. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated horse boarding facility
              walkthrough checklist /
              horse boarding contract document binder /
              waterproof horse hay-bale storage tarp).
              Educational barn searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1129
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
              equine+nutrition+reference+handbook, #1123
              laminated+horse+barn+treat+safety+chart /
              lidded+horse+barn+treat+tote /
              horse+barn+treat+prep+shears,
              grimace / emergency
              equine+first+aid+kit /
              digital+veterinary+thermometer /
              vet+wrap+bandage /
              poultice,
              cost-calculator
              horse+barn+first+aid+kit,
              farrier-schedule
              cordless+barn+flood+light,
              fencing-safety
              horse+electric+tape /
              horse+fence+mesh /
              horse+electric+rope,
              forage-basics
              wall+mounted+horse+hay+rack,
              grain
              rodent+proof+metal+horse+feed+bin,
              performance
              nylon+horse+hay+bag. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the boarding leftover barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page visit-and-observe,
              clarify-in-writing, and
              hay-and-bedding-storage copy — a
              laminated horse boarding facility
              walkthrough checklist, a horse boarding
              contract document binder, and a
              waterproof horse hay-bale storage tarp.
              Educational barn searches only. They are
              not a ranked product list, they are not a
              daily-care / emergency-triage /
              owner-guides / calculator-tools chart
              hop, they are not a first-aid saline /
              pads / scissors hop, they are not a hay
              rack / hay bag / feed bin hop, and they
              do not replace visiting the yard or
              putting the boarding agreement in
              writing. Horses.com earns a commission on
              qualifying purchases at no extra cost to
              you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+boarding+facility+walkthrough+checklist?s=ownership-boarding-options"
                amazonLabel="Browse laminated horse boarding facility walkthrough checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+boarding+contract+document+binder?s=ownership-boarding-options"
                amazonLabel="Browse horse boarding contract document binders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/waterproof+horse+hay+bale+storage+tarp?s=ownership-boarding-options"
                amazonLabel="Browse waterproof horse hay-bale storage tarps on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Boarding and Stable Management” owner resources. aaep.org.</li>
            <li>Rural and agricultural extension services. Horse boarding and facility resources.</li>
            <li>British Horse Society. Livery and boarding guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
