import type { Metadata } from 'next'
import Link from 'next/link'
import { ComparisonFoot, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, CrossSiteHelp, FAQAccordion, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'
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
            { label: "Who should buy which cover", href: "#who" },
            { label: "Exclusions and Deciding", href: "#deciding" },
            { label: "Next step", href: "#kit" },
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

        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          <h2 id="why">Why Insure a Horse</h2>
          <p>Insurance exists because the big costs of horse ownership -- the loss of a valuable horse, an emergency surgery, a long course of treatment, or a claim from someone the horse injures -- can be financially devastating and arrive without warning. Insurance spreads that risk for a recurring premium. Whether it is worth it depends on the horse&apos;s value, the owner&apos;s finances, and their appetite for risk; some owners insure heavily, others self-insure by keeping an emergency fund instead.</p>
          

          <h2 id="mortality">Mortality Cover</h2>
          <p>Equine mortality insurance is, in effect, life insurance for the horse: it pays out the insured value if the horse dies (or, often, must be humanely euthanized for covered reasons). The horse is insured for an agreed value, premiums scale with that value, and the insurer may require a veterinary certificate or exam to establish health and worth. Mortality is the foundational policy to which other cover is often added, and it is most relevant for horses of meaningful financial or replacement value.</p>

          <h2 id="medical">Major Medical and Surgical</h2>
          <p>Major medical and surgical cover, usually added to a mortality policy, contributes toward veterinary costs for illness, injury, and surgery up to an annual limit, after any deductible. This is the cover most relevant to the dreaded colic-surgery or serious-lameness bill. Owners should note the annual limit, the deductible, per-condition limits, and whether diagnostics and follow-up are included, since a low limit may not cover a major surgery in full.</p>
          <p>This page does not shop a policy binder. Read what ownership costs before choosing a policy.</p>
          <CrossSiteHelp
            href={crossSiteHref('vets-co', '/guides/emergency-vet-costs')}
            label="Emergency vet costs, explained"
            fromSite="horses-com"
            toSite="vets-co"
            topic="vet-costs"
          >
            Equine mortality and major-medical policies are not the dog and cat plans compared on Vets.co. That guide explains why a hospital bill for colic or a serious lameness runs higher than a routine call.
          </CrossSiteHelp>

          <h2 id="lou">Loss of Use</h2>
          <p>Loss-of-use cover addresses the situation where a horse survives but can no longer perform its intended job -- for example, a competition horse rendered permanently unable to compete by injury. It typically pays a portion of the insured value and comes with significant conditions, definitions of what counts as loss of use, and exclusions. It is a specialized and often costly add-on relevant mainly to higher-value performance horses.</p>

          <h2 id="liability">Liability Cover</h2>
          <p>Personal horse-owner liability insurance protects the owner if their horse injures a person or damages property -- for example if the horse escapes and causes a road accident or injures someone. Given that horses are large and can cause serious harm, liability cover is a consideration for every owner regardless of the horse&apos;s value, and it is sometimes included in equestrian-organization membership or separate from the horse&apos;s own mortality and medical cover.</p>

          <h2 id="who">Who should buy which cover</h2>
          <p>These are cover types, not ranked insurers. This page does not publish a premium, a payout percentage, or a carrier score. Read the policy for exclusions before you rely on any of them.</p>
          <div className="overflow-x-auto my-6 max-w-full">
            <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th className="p-3 font-bold text-brand-dark">If this is the risk</th>
                  <th className="p-3 font-bold text-brand-dark">Look at</th>
                  <th className="p-3 font-bold text-brand-dark">What this page already says</th>
                  <th className="p-3 font-bold text-brand-dark">It does not do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">Losing a horse that would be expensive to replace</td>
                  <td className="p-3 font-bold text-brand-dark">Mortality</td>
                  <td className="p-3 text-brand-text-mid">Pays the agreed value on death or covered euthanasia. Often the base policy</td>
                  <td className="p-3 text-brand-text-mid">Pay a vet bill while the horse is alive</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A colic surgery or a long treatment</td>
                  <td className="p-3 font-bold text-brand-dark">Major medical and surgical</td>
                  <td className="p-3 text-brand-text-mid">Usually added to mortality. Annual limit and deductible decide whether a surgery is covered in full</td>
                  <td className="p-3 text-brand-text-mid">Replace the horse if it dies. That is mortality</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A competition horse that survives but cannot do the job</td>
                  <td className="p-3 font-bold text-brand-dark">Loss of use</td>
                  <td className="p-3 text-brand-text-mid">Typically a portion of insured value, with a strict definition of loss of use</td>
                  <td className="p-3 text-brand-text-mid">Suit a low-value pleasure horse. The page calls it a costly add-on for higher-value performance horses</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">The horse injures a person or damages property</td>
                  <td className="p-3 font-bold text-brand-dark">Liability</td>
                  <td className="p-3 text-brand-text-mid">Relevant at any horse value. Sometimes sits in a membership, sometimes a separate policy</td>
                  <td className="p-3 text-brand-text-mid">Pay the horse&apos;s own vet bill or death benefit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-05" />

          <h2 id="deciding">Exclusions and Deciding</h2>
          <p>Every policy has exclusions and conditions -- pre-existing conditions, certain procedures, requirements to report illness and obtain prior approval for treatment, and limits per condition or per year -- and failing to follow them (such as not notifying the insurer promptly) can void a claim. Read the policy carefully, disclose the horse&apos;s history honestly, and understand the limits before relying on cover. The decision of what to insure comes down to the horse&apos;s value, the owner&apos;s ability to absorb a large bill, and how the premiums compare with self-insuring through savings.</p>
          

          <h2 id="kit">Next step</h2>
          <div id="insurance-next" className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Next step
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">The cost guide is the number to read before choosing a policy. This page does not shop a policy binder.</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/ownership/cost-of-owning-a-horse"
                className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                See what ownership costs before choosing a policy →
              </Link>
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
