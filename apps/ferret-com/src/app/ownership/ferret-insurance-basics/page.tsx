import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Insurance Basics — How Exotic-Pet Coverage Works | Ferret.com',
  description:
    "A plain-English explainer on exotic-pet insurance for ferrets: what it typically covers, common exclusions, waiting periods, and how to weigh it against a dedicated vet savings fund.",
  path: '/ownership/ferret-insurance-basics',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Insurance Basics',
  description:
    'An educational overview of how exotic-pet insurance works for ferrets, including typical coverage, exclusions, and the alternative of a self-funded veterinary savings plan.',
  url: 'https://ferret.com/ownership/ferret-insurance-basics',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Insurance Basics',
  description:
    'Reference explaining how exotic-pet insurance for ferrets generally works, in educational terms.',
  url: 'https://ferret.com/ownership/ferret-insurance-basics',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretInsuranceBasicsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Insurance Basics',
          subtitle:
            "Ferrets get expensive in their senior years, and that is exactly when owners start asking whether pet insurance is worth it. This is an educational overview — not a recommendation of any carrier — of how exotic-pet coverage generally works for ferrets: what it tends to cover, what it usually does not, why timing matters so much, and how it stacks up against simply saving for the vet yourself.",
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ferret Insurance Basics', href: '/ownership/ferret-insurance-basics' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why This Comes Up for Ferrets', href: '#why' },
                { label: 'How Exotic-Pet Insurance Works', href: '#how' },
                { label: 'What Is Typically Covered', href: '#covered' },
                { label: 'Common Exclusions', href: '#exclusions' },
                { label: 'Insurance vs. a Savings Fund', href: '#vssavings' },
                { label: 'Questions to Ask', href: '#questions' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
                { label: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you' },
                { label: 'Health Hub', href: '/health' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferret-insurance-basics"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <CalloutBox variant="info" title="Educational only">
            <p>
              This page explains how exotic-pet insurance works in general. It
              does not recommend, rank, or sell any insurer, and it is not
              financial advice. Coverage, pricing, and availability vary by
              provider, region, and the individual ferret; read any policy in
              full and confirm current terms directly with the insurer.
            </p>
          </CalloutBox>

          <h2 id="why">Why This Comes Up for Ferrets</h2>
          <p>
            Ferrets are inexpensive to acquire and modest to feed, but their
            veterinary costs are heavily concentrated in the senior years.
            Middle-aged and older ferrets have a high incidence of conditions
            that require diagnostics, ongoing management, or surgery — insulinoma
            and adrenal disease above all, plus lymphoma and dental disease.
            Those workups and procedures are where ferret ownership turns
            genuinely costly, as laid out in the{' '}
            <a href="/ownership/cost-of-owning-a-ferret">cost of owning a
            ferret</a>. Insurance is one of two common strategies for absorbing
            that back-loaded risk; a dedicated savings fund is the other.
          </p>

          <h2 id="how">How Exotic-Pet Insurance Works</h2>
          <p>
            Most pet insurance is built around cats and dogs, and ferrets fall
            into a smaller &quot;exotic pet&quot; category that fewer insurers
            offer at all. Where it exists, it generally follows the standard
            reimbursement model:
          </p>
          <ul>
            <li><strong>You pay the vet directly</strong>, then submit a claim for reimbursement rather than the insurer paying the clinic.</li>
            <li><strong>A premium</strong> is paid monthly or annually to keep coverage active.</li>
            <li><strong>A deductible</strong> must be met before reimbursement begins.</li>
            <li><strong>A reimbursement rate</strong> (a percentage of the covered bill) determines how much comes back after the deductible.</li>
            <li><strong>Annual or per-condition limits</strong> cap how much the policy will pay out.</li>
          </ul>

          <h2 id="covered">What Is Typically Covered</h2>
          <p>
            Coverage varies enormously, but accident-and-illness policies broadly
            aim at unexpected events — injuries and newly arising illnesses,
            sometimes including diagnostics and surgery for conditions that
            develop after the policy starts. The value of a policy for a ferret
            hinges entirely on the fine print: whether the specific senior-onset
            diseases ferrets are prone to are covered, and under what limits.
          </p>

          <h2 id="exclusions">Common Exclusions</h2>
          <CalloutBox variant="warning" title="Pre-existing conditions and timing">
            <p>
              The single most important concept in pet insurance is the
              <strong> pre-existing condition</strong>: anything that showed
              signs before coverage began (or during a waiting period) is
              typically excluded permanently. Combined with <strong>waiting
              periods</strong> at policy start, this means insurance only helps if
              it is in place <em>before</em> a problem appears. Buying a policy
              after a ferret is already showing signs of adrenal or insulinoma
              disease generally will not cover that disease. Other common
              exclusions include routine and preventive care (unless a wellness
              add-on is purchased), elective procedures, and sometimes
              breed- or species-specific conditions.
            </p>
          </CalloutBox>

          <h2 id="vssavings">Insurance vs. a Savings Fund</h2>
          <p>
            Many experienced ferret owners self-insure instead, setting aside a
            fixed amount each month into a dedicated veterinary fund. The
            trade-off is straightforward:
          </p>
          <ul>
            <li><strong>Insurance</strong> smooths a large, unpredictable bill into predictable premiums, but you pay regardless of whether you claim, and exclusions may blunt its value for exactly the diseases ferrets get.</li>
            <li><strong>A savings fund</strong> keeps every dollar under your control with no exclusions or claims process, but it offers no protection if a major bill lands before the fund has grown.</li>
          </ul>
          <p>
            Neither is universally right. The honest framing is that ferrets need
            a plan for senior-year veterinary costs — whether that plan is a
            policy, a fund, or a combination is an individual decision. Whether a
            ferret fits your budget at all is part of{' '}
            <a href="/ownership/is-a-ferret-right-for-you">is a ferret right for
            you?</a>.
          </p>

          <h2 id="questions">Questions to Ask Before Buying</h2>
          <p>
            If you do look at a policy, evaluate it with ferret-specific
            questions in mind:
          </p>
          <ul>
            <li>Does the insurer cover ferrets at all, and in your region?</li>
            <li>Are insulinoma, adrenal disease, lymphoma, and dental disease covered, or excluded?</li>
            <li>How are pre-existing conditions defined, and how long is the waiting period?</li>
            <li>What are the deductible, reimbursement rate, and annual or per-condition limits?</li>
            <li>Is exotic-mammal veterinary care in your area accepted, and are claims reimbursed promptly?</li>
          </ul>
          <p>
            Bring the same diseases up with your exotic-mammal veterinarian, who
            can describe what diagnostics and management actually tend to cost in
            your area — context the <a href="/health">health hub</a> covers at a
            condition level.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Disease incidence in middle-aged and older ferrets — insulinoma,
            adrenal disease, lymphoma, dental disease — is documented in
            Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and
            Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier).
            Insurance structures (premiums, deductibles, reimbursement, waiting
            periods, pre-existing exclusions) reflect standard pet-insurance
            practice; specific terms vary by insurer and must be confirmed
            directly. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general educational information about how exotic-pet
            insurance works, not a recommendation of any product, not financial
            advice, and not individualized veterinary advice. Confirm policy terms
            with the insurer and discuss your ferret&apos;s health needs with an
            exotic-mammal veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
