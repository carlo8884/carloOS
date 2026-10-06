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
  modifiedAt: '2026-10-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What does horse mortality insurance cover?",
    answer:
      "Mortality cover is the type described as life insurance for the horse. Published descriptions say it pays an agreed value if the horse dies or, in some policies, if it must be euthanized for covered reasons. The value, the premium, and the exclusions are in the policy. This page does not quote them. It is most often discussed for horses that would be expensive to replace.",
    answerText:
      "It is the life-insurance type of cover. Whether it pays, and how much, is in the policy. This page does not quote a premium or a payout.",
  },
  {
    question: "Does horse insurance cover colic surgery?",
    answer:
      "Colic surgery is the kind of bill major medical and surgical cover is written for. Those policies are commonly described as sitting alongside mortality, with an annual limit and a deductible. A low limit may not pay a surgery in full. This page does not quote a limit or a deductible.",
    answerText:
      "Major medical is the cover type owners look at for a surgery bill. The limit and deductible are in the policy. This page does not quote them.",
  },
  {
    question: "Why might an insurance claim be denied?",
    answer:
      "A claim can be denied when a policy condition is missed: a pre-existing or excluded condition, a late report, a missing prior approval, or a history that was not disclosed. The policy sets those conditions. This page does not quote a carrier's claim rules.",
    answerText:
      "For a missed condition, such as an exclusion, a late report, or a history that was not disclosed. Read the policy before relying on it.",
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
            { label: "Scope", href: "#references" },
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
            updatedAt="2026-10-06"
            reviewedBy="Editorial team"
          />

          <h2 id="why">Why Insure a Horse</h2>
          <p>Insurance exists because the big costs of horse ownership -- the loss of a valuable horse, an emergency surgery, a long course of treatment, or a claim from someone the horse injures -- can be financially devastating and arrive without warning. Insurance spreads that risk for a recurring premium. Whether it is worth it depends on the horse&apos;s value, the owner&apos;s finances, and their appetite for risk; some owners insure heavily, others self-insure by keeping an emergency fund instead.</p>
          

          <h2 id="mortality">Mortality Cover</h2>
          <p>Equine mortality cover is the type described as life insurance for the horse. Published descriptions say it pays an agreed value if the horse dies or, in some policies, if the horse must be euthanized for covered reasons. The agreed value, any vet exam, and the exclusions are set by the policy. Other cover is often offered alongside it. It is most relevant when replacing the horse would be a large cost. This page does not quote a premium.</p>

          <h2 id="medical">Major Medical and Surgical</h2>
          <p>Major medical and surgical cover is the type owners look at for illness, injury, and surgery bills, including colic surgery. It is commonly described as an add-on to mortality, with an annual limit and a deductible. A low limit may not pay a major surgery in full. Diagnostics and follow-up may or may not be included. This page does not quote a limit.</p>
          <p>This page does not shop a policy binder. The <Link href="/tools/horse-cost-calculator">horse cost calculator</Link> shows typical US ownership ranges. Those ranges are not a premium.</p>
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
          <p>Loss-of-use cover is described for the case where a horse survives but can no longer do its intended job, such as a competition horse that cannot compete. Descriptions usually say it pays a portion of the insured value and that the definition of loss of use is strict. It is a specialized add-on discussed mainly for higher-value performance horses. This page does not quote that portion or a price.</p>

          <h2 id="liability">Liability Cover</h2>
          <p>Personal horse-owner liability cover is the type written for injury to a person or damage to property, for example a horse that gets loose. Horses are large enough that this risk exists at any horse value. Some organization memberships are described as including liability, and some owners buy it separately from mortality and medical cover. This page does not check a specific membership or quote a limit.</p>

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
                  <td className="p-3 text-brand-text-mid">Described as paying an agreed value on death or covered euthanasia. Often discussed as the base policy. This page does not quote that value.</td>
                  <td className="p-3 text-brand-text-mid">Pay a vet bill while the horse is alive</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A colic surgery or a long treatment</td>
                  <td className="p-3 font-bold text-brand-dark">Major medical and surgical</td>
                  <td className="p-3 text-brand-text-mid">Commonly described as an add-on to mortality. The policy&apos;s limit and deductible decide what is paid. This page does not quote them.</td>
                  <td className="p-3 text-brand-text-mid">Replace the horse if it dies. That is mortality</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A competition horse that survives but cannot do the job</td>
                  <td className="p-3 font-bold text-brand-dark">Loss of use</td>
                  <td className="p-3 text-brand-text-mid">Described as a portion of insured value, with a strict definition. This page does not quote that portion.</td>
                  <td className="p-3 text-brand-text-mid">Name a price, or recommend it for a low-value pleasure horse</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">The horse injures a person or damages property</td>
                  <td className="p-3 font-bold text-brand-dark">Liability</td>
                  <td className="p-3 text-brand-text-mid">Relevant at any horse value. Sometimes described as part of a membership, sometimes as its own policy. This page does not check a membership.</td>
                  <td className="p-3 text-brand-text-mid">Pay the horse&apos;s own vet bill or death benefit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-06" />

          <h2 id="deciding">Exclusions and Deciding</h2>
          <p>Policies commonly list exclusions and conditions: pre-existing conditions, certain procedures, a duty to report illness, prior approval for treatment, and limits per condition or per year. Missing one can be grounds for a denial. Read the policy before relying on it. Whether to insure depends on the horse&apos;s value, what the owner can pay out of pocket, and the premium in the actual quote. This page does not compare premiums.</p>
          

          <h2 id="kit">Next step</h2>
          <div id="insurance-next" className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Next step
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">The cost calculator shows typical US ownership ranges. Those ranges are not a premium and not a live quote. This page does not shop a policy binder.</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/tools/horse-cost-calculator"
                className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                See typical ownership costs before choosing a policy →
              </Link>
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">Scope</h2>
          <p>This page is a plain-language map of cover types. It does not quote a carrier, a premium, a payout percentage, or a scored ranking. Read the policy for exclusions before relying on any of it.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
