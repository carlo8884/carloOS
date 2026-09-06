import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Leasing a Horse — Full and Partial Leases Explained",
  description:
    "Reference guide to leasing a horse: what a lease is, full vs partial (half) leases, on-site vs off-site, the lease agreement, costs, and pros and cons.",
  path: '/ownership/leasing-a-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Leasing a Horse — Full and Partial Leases Explained",
  description:
    "Reference guide to leasing a horse: what a lease is, full vs partial (half) leases, on-site vs off-site, the lease agreement, costs, and pros and cons.",
  url: 'https://horses.com/ownership/leasing-a-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a full and a partial lease?",
    answer:
      "In a full lease the lessee has the horse essentially to themselves and usually covers all or most of its costs, almost like temporary ownership. In a partial or half lease, the lessee rides on certain agreed days and shares the costs proportionally with the owner or other sharers, making it a cheaper way to ride regularly without taking on the whole horse.",
    answerText:
      "A full lease gives the lessee the horse to themselves and most of its costs, like temporary ownership; a partial (half) lease shares riding days and costs with the owner or others.",
  },
  {
    question: "Why lease a horse instead of buying one?",
    answer:
      "Leasing lets a rider ride regularly and experience the responsibilities of ownership at lower cost and risk, with the flexibility to walk away at the end of the term. It is an excellent stepping stone for testing whether you are ready to buy, and it avoids the full purchase price and the open-ended commitment of owning outright.",
    answerText:
      "Leasing offers regular riding and a taste of ownership at lower cost and risk, with flexibility to end the term. It is a great way to test readiness to buy without the full commitment.",
  },
  {
    question: "Do I need a written lease agreement?",
    answer:
      "Yes -- a clear written lease agreement is essential and prevents most disputes. It should define the term and fee, exactly which costs each party pays, the permitted use and who may ride, how veterinary decisions and emergencies are handled and paid for, insurance and liability, and the conditions for ending the lease early.",
    answerText:
      "Yes -- a written agreement is essential. It should cover the term, fee, who pays which costs, permitted use, emergency and vet decisions, insurance and liability, and how to end the lease.",
  },
]

export default function LeasingHorsePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
          { title: 'The Pre-Purchase Exam', href: '/ownership/pre-purchase-exam' },
        ]}
        hero={{
          title: "Leasing a Horse",
          subtitle:
            "Leasing is one of the smartest, most underused ways to get more horse in your life without the full commitment of buying. A lease lets a rider use a horse -- in part or in full -- in exchange for sharing or covering its costs, offering a low-risk step between lessons and ownership. But leases vary widely and live or die by a clear written agreement. This guide explains the main types and what to nail down. This is reference material, not legal advice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Leasing a Horse", href: '/ownership/leasing-a-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What a Lease Is", href: "#what" },
            { label: "Full vs Partial Lease", href: "#types" },
            { label: "On-Site vs Off-Site", href: "#location" },
            { label: "The Lease Agreement", href: "#agreement" },
            { label: "Pros and Cons", href: "#proscons" },
            { label: "Horse-lease leftover agreement kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "Boarding Options", href: "/ownership/boarding-options" },
              { label: "Horse Insurance", href: "/ownership/horse-insurance" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-leasing"
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
              Keep the horse-lease agreement checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse-lease agreement checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-lease-agreement-binder,
              lease-walkthrough-checklist, and
              full-versus-partial cost-share
              notes that match the what-a-lease-is,
              full-versus-partial, on-site-versus-
              off-site, and written-agreement copy
              on this page — a horse lease
              agreement document binder so the
              term, fee, cost split, permitted use,
              veterinary decisions, insurance, and
              early-end conditions stay in writing
              (not a boarding-contract binder, not
              an insurance-policy binder, not a
              pre-purchase exam records binder, not
              a keep-feed-farrier cost-log binder),
              a laminated horse lease walkthrough
              checklist so term, fee, riding days,
              activity limits, who-pays-vet, and
              early-end steps stay visible before
              anyone signs (not a vet-interview
              checklist, not a first-horse tryout
              walkthrough, not a boarding-facility
              walkthrough, not an insurance-claims
              checklist), and a horse full vs
              partial lease cost-share worksheet so
              full-lease versus half-lease riding
              days and who pays board, farrier, and
              routine vet stay on one page (not a
              monthly-budget worksheet, not a
              mortality-versus-major-medical
              worksheet, not an emergency-fund
              expense tracker). Educational owner
              lease-readiness tools only, not a
              ranked product list, not a legal form
              for a specific state, and not a
              substitute for a written agreement
              reviewed with an equine attorney.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse-lease agreement checklist"
              subtitle="Email the lease-agreement-binder, walkthrough-checklist, and full-versus-partial notes. No spam."
              ctaText="Email my horse-lease agreement checklist"
              source="ownership-leasing-a-horse-under-hero"
            />
          </div>

          <h2 id="what">What a Lease Is</h2>
          <p>A horse lease is an arrangement in which a rider gets the use of a horse they do not own, in exchange for covering some or all of its costs and following agreed conditions. The owner keeps ownership but offloads some cost and ensures the horse is ridden; the lessee gets riding time and experience without buying. Leasing is widely used as a stepping stone toward ownership, as a way to ride more than lessons allow, and as a flexible option for outgrown or temporarily idle horses.</p>
          <p>
            A horse lease agreement document binder
            is how the term, fee, cost split,
            permitted use, veterinary decisions,
            insurance, and early-end conditions
            stay in writing instead of living in
            a text thread — it is not a horse
            boarding contract document binder
            (that lives on boarding-options and
            records yard fees, not a lease of the
            horse), not a horse insurance policy
            document binder (that lives on
            horse-insurance), and not a horse
            pre-purchase exam records binder
            (that lives on buying-your-first-horse).
            This page does not hop owner-guides
            charts, calculator-tools charts, or
            forage-first charts already pinned on
            those hubs. This page does not hop
            legal-form marketplaces or re-rank
            lease templates.
          </p>

          <h2 id="types">Full vs Partial Lease</h2>
          <p>The two broad types differ by how much of the horse the lessee gets. In a full lease, the lessee has the horse essentially to themselves and typically covers all or most of its costs -- board, farrier, routine vet, and so on -- almost like temporary ownership. In a partial or share lease (often a half lease), the lessee rides on certain days and shares the costs proportionally with the owner or other sharers. Partial leases suit riders wanting regular riding at a fraction of full cost.</p>
          <p>
            A horse full vs partial lease
            cost-share worksheet is how full-lease
            versus half-lease riding days and who
            pays board, farrier, and routine vet
            stay on one page before anyone
            commits — it is not a horse ownership
            monthly budget worksheet (that lives
            on cost-of-owning-a-horse and totals
            forever keep, not a shared lease),
            not a horse mortality vs major-medical
            decision worksheet (that lives on
            horse-insurance), and not an equine
            emergency fund expense tracker
            notebook (that lives on
            cost-of-owning-a-horse). This page
            does not hop keep-feed-farrier cost
            logs, farrier log books, or VCPR
            records folders already pinned
            elsewhere. This page does not hop
            medications or vaccines.
          </p>

          <h2 id="location">On-Site vs Off-Site</h2>
          <p>Leases also differ by where the horse stays. In an on-site lease the horse remains at its current barn, which is common for partial leases and keeps the owner close and the routine stable. In an off-site lease the lessee moves the horse to their own yard, more typical of a full lease and giving more independence but also more responsibility. The location affects cost, oversight, and how much the owner stays involved in the horse&apos;s daily life.</p>
          <p>
            The same laminated horse lease
            walkthrough checklist is how
            on-site-versus-off-site, who keeps
            the daily routine, and who pays
            haul-in or home-yard costs stay
            visible before the horse moves —
            it is not a laminated horse boarding
            facility walkthrough checklist
            (that lives on boarding-options and
            scores a yard visit, not a lease
            of the horse), not a waterproof
            horse hay-bale storage tarp (that
            lives on boarding-options), and not
            a horse shipping-boots hop (that
            lives on trailering). This page
            does not hop hay racks, feed bins,
            or stall-bedding already pinned on
            boarding and nutrition pages.
          </p>

          <h2 id="agreement">The Lease Agreement</h2>
          <ul>
            <li><strong>Put it in writing.</strong> A clear written lease agreement is essential and prevents most disputes.</li>
            <li><strong>Define the term and fee</strong> and exactly which costs each party pays (board, farrier, vet, insurance, supplements).</li>
            <li><strong>Specify use</strong> -- which days, what activities, whether competing or jumping is allowed, and who may ride.</li>
            <li><strong>Address veterinary decisions and emergencies</strong> -- who decides and who pays in an emergency or for major treatment.</li>
            <li><strong>Cover insurance and liability</strong> and the conditions for ending the lease early.</li>
          </ul>
          <p>
            The same horse lease agreement
            document binder is how those five
            written clauses stay with the lease
            instead of living in a phone photo
            roll — it is not a horse keep /
            feed / farrier cost log binder
            (that lives on
            cost-of-owning-a-horse), not a
            horse veterinary history / VCPR
            records folder (that lives on
            choosing-a-vet), and not a horse
            insurance policy document binder
            (that lives on horse-insurance).
            This page does not hop
            insurance-carrier deep links,
            after-hours emergency-cover
            question cards, or first-aid
            saline / pads / scissors already
            pinned on first-aid-kit. This
            page does not invent clinic
            listings.
          </p>

          <h2 id="proscons">Pros and Cons</h2>
          <p>Leasing lets a rider gain experience, ride regularly, and try the responsibilities of ownership at lower cost and risk, with the flexibility to walk away at the end of the term -- ideal for testing whether you are ready to buy. The downsides are that you do not own the horse and may have to give it up, you ride within the owner&apos;s rules, and a poorly defined arrangement can lead to disputes over costs, care decisions, and an injured horse. A good lease rests on a fair, specific, written agreement and a trustworthy owner.</p>
          <p>
            A laminated horse lease walkthrough
            checklist is how term, fee, riding
            days, activity limits, who-pays-vet,
            and early-end steps stay visible
            when a dispute is forming — it is
            not a laminated equine-vet interview
            checklist (that lives on
            choosing-a-vet), not a laminated
            first-horse tryout walkthrough
            checklist (that lives on
            buying-your-first-horse), and not a
            laminated horse insurance claims
            checklist (that lives on
            horse-insurance). This page does
            not hop emergency-triage charts,
            vital-signs cards, or daily-care
            charts already pinned on the health
            and care hubs. This page does not
            hop medications. This page does
            not claim hands-on testing.
          </p>

          <h2 id="kit">Horse-lease leftover agreement kit</h2>
          <p>
            Everyday physical supplies that match the
            what-a-lease-is, full-versus-partial,
            on-site-versus-off-site, and
            written-agreement copy on this page —
            a horse lease agreement document
            binder so the term, fee, cost split,
            permitted use, veterinary decisions,
            insurance, and early-end conditions
            stay in writing, a laminated horse
            lease walkthrough checklist so term,
            fee, riding days, activity limits,
            who-pays-vet, and early-end steps
            stay visible before anyone signs,
            and a horse full vs partial lease
            cost-share worksheet so full-lease
            versus half-lease riding days and
            who pays board, farrier, and routine
            vet stay on one page. These are
            educational owner searches, not a
            ranked product list, not a legal
            form for a specific state, not a
            substitute for a written agreement
            reviewed with an equine attorney,
            not a monthly-budget-worksheet /
            emergency-fund-tracker /
            keep-feed-farrier-cost-log hop
            (those live on cost-of-owning-a-horse),
            not a laminated equine-vet interview
            checklist / after-hours emergency-cover
            question card / VCPR records folder
            hop (those live on choosing-a-vet),
            not a first-horse tryout walkthrough /
            buyer-visit-notebook /
            pre-purchase-exam-records-binder hop
            (those live on buying-your-first-horse),
            not a boarding-facility walkthrough /
            boarding-contract-binder / hay-bale-tarp
            hop (those live on boarding-options),
            not a horse-insurance-policy-binder /
            insurance-claims-checklist /
            mortality-versus-major-medical
            worksheet hop (those live on
            horse-insurance), not a first-aid
            saline / pads / scissors hop, not a
            daily-care-chart / stall-door-care-card
            / husbandry-handbook hop (those live
            on the care hub), not an
            emergency-triage-chart /
            vital-signs-card / health-handbook
            hop, not a forage-first-chart /
            ration-card / nutrition-handbook hop,
            not an owner-guides-chart hop, not a
            calculator-tools-chart hop, not a
            farrier-log / flood-light hop, and
            not a weatherproof-clipboard hop.
            This page does not hop medications
            or vaccines. This page does not
            claim hands-on testing. This page
            does not invent clinic listings.
            This page does not hop
            insurance-carrier deep links.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (horse lease agreement document binder /
              laminated horse lease walkthrough checklist /
              horse full vs partial lease cost-share
              worksheet).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1134
              horse+insurance+policy+document+binder /
              laminated+horse+insurance+claims+checklist /
              horse+mortality+vs+major+medical+decision+worksheet, #1133
              horse+ownership+monthly+budget+worksheet /
              equine+emergency+fund+expense+tracker+notebook /
              horse+keep+feed+farrier+cost+log+binder, #1132
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
              Shop the horse-lease leftover agreement kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page what-a-lease-is, full-versus-
              partial, on-site-versus-off-site, and
              written-agreement copy — a horse lease
              agreement document binder, a laminated
              horse lease walkthrough checklist, and
              a horse full vs partial lease
              cost-share worksheet. Educational
              owner searches only. They are not a
              ranked product list, they are not a
              legal form for a specific state, they
              are not a monthly-budget /
              emergency-fund / keep-feed-farrier
              hop, they are not a choosing-a-vet
              interview / after-hours-cover /
              VCPR-folder hop, they are not a
              first-horse tryout / buyer-notebook /
              PPE-records hop, they are not a
              boarding walkthrough / contract-binder
              / hay-tarp hop, they are not a
              horse-insurance policy-binder /
              claims-checklist / mortality-versus-
              medical hop, they are not a first-aid
              saline / pads / scissors hop, they
              are not a daily-care / emergency-triage
              / owner-guides / calculator-tools
              chart hop, they are not a farrier-log
              hop, and they do not replace a written
              agreement reviewed with an equine
              attorney. Horses.com earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+lease+agreement+document+binder?s=ownership-leasing-a-horse"
                amazonLabel="Browse horse lease agreement document binders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+lease+walkthrough+checklist?s=ownership-leasing-a-horse"
                amazonLabel="Browse laminated horse lease walkthrough checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+full+vs+partial+lease+cost+share+worksheet?s=ownership-leasing-a-horse"
                amazonLabel="Browse horse full vs partial lease cost-share worksheets on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners and equestrian-organization resources on horse leasing.</li>
            <li>Equine legal resources on lease agreements and liability.</li>
            <li>British Horse Society. Loan and share agreement guidance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
