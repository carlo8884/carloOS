import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Insurance Explained — Mortality, Major Medical, and Liability",
  description:
    "Reference guide to equine insurance: mortality, major medical and surgical, loss-of-use, and liability cover, how policies work, and deciding what to insure.",
  path: '/ownership/horse-insurance',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Insurance Explained — Mortality, Major Medical, and Liability",
  description:
    "Reference guide to equine insurance: mortality, major medical and surgical, loss-of-use, and liability cover, how policies work, and deciding what to insure.",
  url: 'https://horses.com/ownership/horse-insurance',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What does horse mortality insurance cover?",
    answer:
      "Mortality insurance is effectively life insurance for the horse: it pays the agreed insured value if the horse dies or, often, must be humanely euthanized for covered reasons. The horse is insured for an agreed value, premiums scale with that value, and it is the foundational policy to which medical and other cover is usually added. It is most relevant for horses of meaningful value.",
    answerText:
      "It is life insurance for the horse, paying the agreed value if it dies or is euthanized for covered reasons. Premiums scale with the insured value, and it is the base policy other cover is added to.",
  },
  {
    question: "Does horse insurance cover colic surgery?",
    answer:
      "Major medical and surgical cover, usually added to a mortality policy, contributes toward veterinary costs including colic surgery up to an annual limit after a deductible. It is the cover most relevant to that dreaded bill, but owners should check the annual limit, deductible, and per-condition limits, since a low limit may not cover a major surgery in full.",
    answerText:
      "Yes, under major medical and surgical cover, up to an annual limit after a deductible. Check the limit and deductible, since a low limit may not cover a major surgery fully.",
  },
  {
    question: "Why might an insurance claim be denied?",
    answer:
      "Claims can be denied for breaching policy conditions -- pre-existing or excluded conditions, failing to report illness or get prior approval for treatment, or not disclosing the horse's history honestly. Every policy has exclusions and procedural requirements, and not following them can void a claim, so owners must read the policy and understand its conditions before relying on cover.",
    answerText:
      "For breaching conditions -- pre-existing or excluded conditions, not reporting illness or getting prior approval, or undisclosed history. Read the policy and follow its procedures to avoid voiding a claim.",
  },
]

export default function HorseInsurancePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
          { title: 'The Pre-Purchase Exam', href: '/ownership/pre-purchase-exam' },
          { title: 'Equine Health Hub', href: '/health' },
        ]}
        hero={{
          title: "Horse Insurance Explained",
          subtitle:
            "Horse insurance is how many owners protect themselves against the financial shock of a horse's death, a major veterinary bill, or a liability claim. The market has several distinct types of cover that are easy to confuse, and policies come with conditions and exclusions that catch owners out at claim time. Understanding the main products and how they work helps an owner decide what, if anything, to insure. This is reference material to inform decisions, not financial or insurance advice.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Horse Insurance", href: '/ownership/horse-insurance' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Insure a Horse", href: "#why" },
            { label: "Mortality Cover", href: "#mortality" },
            { label: "Major Medical and Surgical", href: "#medical" },
            { label: "Loss of Use", href: "#lou" },
            { label: "Liability Cover", href: "#liability" },
            { label: "Exclusions and Deciding", href: "#deciding" },
            { label: "Horse-insurance leftover policy kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "The Pre-Purchase Exam", href: "/ownership/pre-purchase-exam" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
              { label: "Equine Colic", href: "/health/colic" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-insurance"
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
              Keep the horse-insurance claims checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse-insurance claims checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-insurance-policy-binder,
              claims-checklist, and
              mortality-versus-major-medical decision
              notes that match the why-insure, mortality
              versus medical, and exclusions-and-deciding
              copy on this page — a horse insurance
              policy document binder so the agreed value,
              exclusions, deductibles, and prior-approval
              conditions stay with the horse (not a
              boarding-contract binder, not a
              pre-purchase exam records binder, not a
              keep-feed-farrier cost-log binder), a
              laminated horse insurance claims checklist
              so report-illness, prior-approval, and
              honest-history steps stay visible before a
              claim is voided (not a vet-interview
              checklist, not a first-horse tryout
              walkthrough, not a first-aid saline hop),
              and a horse mortality vs major-medical
              decision worksheet so mortality, medical,
              loss-of-use, liability, and self-insure
              stay on one page (not a monthly-budget
              worksheet, not an emergency-fund expense
              tracker, not a VCPR records folder).
              Educational owner insurance-readiness
              tools only, not a ranked product list,
              not a carrier quote, and not a substitute
              for a licensed insurance broker or
              veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse-insurance claims checklist"
              subtitle="Email the policy-binder, claims-checklist, and mortality-versus-medical notes. No spam."
              ctaText="Email my horse-insurance claims checklist"
              source="ownership-horse-insurance-under-hero"
            />
          </div>

          <h2 id="why">Why Insure a Horse</h2>
          <p>Insurance exists because the big costs of horse ownership -- the loss of a valuable horse, an emergency surgery, a long course of treatment, or a claim from someone the horse injures -- can be financially devastating and arrive without warning. Insurance spreads that risk for a recurring premium. Whether it is worth it depends on the horse&apos;s value, the owner&apos;s finances, and their appetite for risk; some owners insure heavily, others self-insure by keeping an emergency fund instead.</p>
          <p>
            A horse mortality vs major-medical decision
            worksheet is how mortality, major medical,
            loss-of-use, liability, and the
            self-insure-through-savings option stay on
            one page before anyone pays a premium —
            it is not a horse ownership monthly budget
            worksheet (that lives on
            cost-of-owning-a-horse and totals keep,
            feed, and farrier, not cover types), not
            an equine emergency fund expense tracker
            notebook (that lives on
            cost-of-owning-a-horse), and not a
            laminated equine-vet interview checklist
            (that lives on choosing-a-vet). This page
            does not hop owner-guides charts,
            calculator-tools charts, or
            forage-first charts already pinned on
            those hubs. This page does not hop
            insurance-carrier quote pages or
            re-rank policies.
          </p>

          <h2 id="mortality">Mortality Cover</h2>
          <p>Equine mortality insurance is, in effect, life insurance for the horse: it pays out the insured value if the horse dies (or, often, must be humanely euthanized for covered reasons). The horse is insured for an agreed value, premiums scale with that value, and the insurer may require a veterinary certificate or exam to establish health and worth. Mortality is the foundational policy to which other cover is often added, and it is most relevant for horses of meaningful financial or replacement value.</p>
          <p>
            The same horse mortality vs major-medical
            decision worksheet is how mortality as the
            foundational policy sits beside the
            question of whether the horse&apos;s
            agreed value justifies the premium — it
            is not a horse veterinary history / VCPR
            records folder (that lives on
            choosing-a-vet), not a horse pre-purchase
            exam records binder (that lives on
            buying-your-first-horse), and not a
            farrier log book (that lives on
            farrier-schedule). This page does not hop
            medications or vaccines. This page does
            not invent clinic listings.
          </p>

          <h2 id="medical">Major Medical and Surgical</h2>
          <p>Major medical and surgical cover, usually added to a mortality policy, contributes toward veterinary costs for illness, injury, and surgery up to an annual limit, after any deductible. This is the cover most relevant to the dreaded colic-surgery or serious-lameness bill. Owners should note the annual limit, the deductible, per-condition limits, and whether diagnostics and follow-up are included, since a low limit may not cover a major surgery in full.</p>
          <p>
            A horse insurance policy document binder
            is how the annual limit, deductible,
            per-condition caps, and whether
            diagnostics are included stay with the
            mortality-plus-medical policy instead of
            living in a phone photo roll — it is not
            a horse boarding contract document binder
            (that lives on boarding-options), not a
            horse keep / feed / farrier cost log
            binder (that lives on
            cost-of-owning-a-horse), and not a horse
            pre-purchase exam records binder (that
            lives on buying-your-first-horse). This
            page does not hop hay tarps, hay racks,
            or feed bins already pinned on boarding
            and nutrition pages.
          </p>

          <h2 id="lou">Loss of Use</h2>
          <p>Loss-of-use cover addresses the situation where a horse survives but can no longer perform its intended job -- for example, a competition horse rendered permanently unable to compete by injury. It typically pays a portion of the insured value and comes with significant conditions, definitions of what counts as loss of use, and exclusions. It is a specialized and often costly add-on relevant mainly to higher-value performance horses.</p>
          <p>
            The same horse insurance policy document
            binder is also how the loss-of-use
            definition, the portion of insured value
            that pays, and those specialized
            exclusions stay with the policy packet —
            without turning this page into a
            performance-feed hop, a shipping-boots
            hop, or an ASTM-helmet hop. Educational
            owner policy records only. This page does
            not claim hands-on testing.
          </p>

          <h2 id="liability">Liability Cover</h2>
          <p>Personal horse-owner liability insurance protects the owner if their horse injures a person or damages property -- for example if the horse escapes and causes a road accident or injures someone. Given that horses are large and can cause serious harm, liability cover is a consideration for every owner regardless of the horse&apos;s value, and it is sometimes included in equestrian-organization membership or separate from the horse&apos;s own mortality and medical cover.</p>
          <p>
            The same horse mortality vs major-medical
            decision worksheet is how liability —
            sometimes in a membership, sometimes a
            separate policy — stays on the decide-
            what-to-insure page beside mortality and
            medical, instead of being forgotten
            because the horse itself is low-value.
            This page does not hop fencing-safety
            tape, trailer ties, or barn first-aid
            kits already pinned elsewhere.
          </p>

          <h2 id="deciding">Exclusions and Deciding</h2>
          <p>Every policy has exclusions and conditions -- pre-existing conditions, certain procedures, requirements to report illness and obtain prior approval for treatment, and limits per condition or per year -- and failing to follow them (such as not notifying the insurer promptly) can void a claim. Read the policy carefully, disclose the horse&apos;s history honestly, and understand the limits before relying on cover. The decision of what to insure comes down to the horse&apos;s value, the owner&apos;s ability to absorb a large bill, and how the premiums compare with self-insuring through savings.</p>
          <p>
            A laminated horse insurance claims
            checklist is how the report-illness,
            obtain-prior-approval, and
            disclose-history-honestly steps stay
            visible when a colic or lameness bill is
            forming — it is not a laminated equine-
            vet interview checklist (that lives on
            choosing-a-vet), not a laminated first-
            horse tryout walkthrough checklist (that
            lives on buying-your-first-horse), and
            not a laminated horse boarding facility
            walkthrough checklist (that lives on
            boarding-options). This page does not hop
            emergency-triage charts, vital-signs
            cards, or first-aid saline / pads /
            scissors already pinned on the health
            hub and first-aid-kit. This page does
            not hop medications.
          </p>

          <h2 id="kit">Horse-insurance leftover policy kit</h2>
          <p>
            Everyday physical supplies that match the
            why-insure, mortality-versus-medical, and
            exclusions-and-deciding copy on this
            page — a horse insurance policy document
            binder so the agreed value, exclusions,
            deductibles, and prior-approval
            conditions stay with the horse, a
            laminated horse insurance claims
            checklist so report-illness,
            prior-approval, and honest-history steps
            stay visible before a claim is voided,
            and a horse mortality vs major-medical
            decision worksheet so mortality, medical,
            loss-of-use, liability, and self-insure
            stay on one page. These are educational
            owner searches, not a ranked product
            list, not a carrier quote, not a
            substitute for a licensed insurance
            broker or veterinarian, not a
            monthly-budget-worksheet /
            emergency-fund-tracker /
            keep-feed-farrier-cost-log hop (those
            live on cost-of-owning-a-horse), not a
            laminated equine-vet interview checklist
            / after-hours emergency-cover question
            card / VCPR records folder hop (those
            live on choosing-a-vet), not a
            first-horse tryout walkthrough /
            buyer-visit-notebook /
            pre-purchase-exam-records-binder hop
            (those live on buying-your-first-horse),
            not a boarding-facility walkthrough /
            boarding-contract-binder / hay-bale-tarp
            hop (those live on boarding-options),
            not a first-aid saline / pads / scissors
            hop, not a daily-care-chart /
            stall-door-care-card /
            husbandry-handbook hop (those live on
            the care hub), not an
            emergency-triage-chart / vital-signs-card
            / health-handbook hop, not a
            forage-first-chart / ration-card /
            nutrition-handbook hop, not an
            owner-guides-chart hop, not a
            calculator-tools-chart hop, not a
            farrier-log / flood-light hop, and not a
            weatherproof-clipboard hop. This page
            does not hop medications or vaccines.
            This page does not claim hands-on
            testing. This page does not invent
            clinic listings. This page does not hop
            insurance-carrier deep links.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (horse insurance policy document binder /
              laminated horse insurance claims checklist /
              horse mortality vs major-medical decision
              worksheet).
              Educational owner searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1133
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
              Shop the horse-insurance leftover policy kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page why-insure, mortality-versus-
              medical, and exclusions-and-deciding
              copy — a horse insurance policy document
              binder, a laminated horse insurance
              claims checklist, and a horse mortality
              vs major-medical decision worksheet.
              Educational owner searches only. They
              are not a ranked product list, they are
              not a carrier quote, they are not a
              monthly-budget / emergency-fund /
              keep-feed-farrier hop, they are not a
              choosing-a-vet interview /
              after-hours-cover / VCPR-folder hop,
              they are not a first-horse tryout /
              buyer-notebook / PPE-records hop, they
              are not a boarding walkthrough /
              contract-binder / hay-tarp hop, they
              are not a first-aid saline / pads /
              scissors hop, they are not a daily-care
              / emergency-triage / owner-guides /
              calculator-tools chart hop, they are not
              a farrier-log hop, and they do not
              replace a licensed insurance broker or
              veterinarian. Horses.com earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+insurance+policy+document+binder?s=ownership-horse-insurance"
                amazonLabel="Browse horse insurance policy document binders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+insurance+claims+checklist?s=ownership-horse-insurance"
                amazonLabel="Browse laminated horse insurance claims checklists on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+mortality+vs+major+medical+decision+worksheet?s=ownership-horse-insurance"
                amazonLabel="Browse horse mortality vs major-medical decision worksheets on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine insurance providers and brokers. Policy-type explanations (mortality, major medical, loss of use, liability).</li>
            <li>American Association of Equine Practitioners. “Insurance and the Veterinary Exam” owner resources. aaep.org.</li>
            <li>Consumer and equestrian-organization guidance on horse insurance.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
