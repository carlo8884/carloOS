import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "How Pet Insurance Works — A Plain-English Guide | Vets.co", description: "Pet insurance reimburses you for covered vet bills after a deductible. Learn how premiums, deductibles, reimbursement rates, and annual limits fit together.", path: '/insurance/how-pet-insurance-works', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'How Pet Insurance Works', description: 'A plain-English explanation of premiums, deductibles, reimbursement, and limits in pet insurance.', url: 'https://vets.co/insurance/how-pet-insurance-works', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "Do I pay the vet directly or does insurance pay them?", answer: "With most pet insurers, you pay the veterinary clinic in full at the time of the visit, then submit a claim and the insurer reimburses you afterward — typically within days to a couple of weeks. This reimbursement model is different from most human health insurance. A few insurers offer direct payment to participating veterinarians, which can ease the cash-flow burden of a large bill, but the standard model is pay-then-claim. Budgeting for that upfront cost is part of using pet insurance effectively." },
  { question: "What is a reimbursement rate?", answer: "After you meet your deductible, the insurer pays a set percentage of the remaining covered costs — commonly 70%, 80%, or 90% — and you cover the rest. This percentage is the reimbursement rate. A higher reimbursement rate means lower out-of-pocket costs per claim but a higher monthly premium. Choosing a reimbursement rate is a trade-off between predictable monthly cost and exposure during an expensive claim." },
  { question: "What is an annual limit?", answer: "The annual limit is the maximum the insurer will reimburse in a policy year. Plans range from modest annual caps to unlimited coverage. A higher or unlimited limit costs more in premium but protects you against catastrophic bills — a single major surgery or cancer treatment can exceed lower caps. When comparing plans, the annual limit is one of the most important numbers, because it defines your worst-case protection." },
]
export default function HowPetInsuranceWorksPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'How Pet Insurance Works', subtitle: 'Pet insurance is medical insurance for your dog or cat, and it works on a reimbursement model: you pay the vet, then the insurer pays you back a percentage of covered costs after a deductible. Four numbers — premium, deductible, reimbursement rate, and annual limit — define every policy. Once you understand how they interact, comparing plans becomes straightforward.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'How It Works', href: '/insurance/how-pet-insurance-works' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Four Levers</div>
            {[['Premium', 'What you pay monthly'], ['Deductible', 'You pay first, then coverage'], ['Reimbursement', 'Percent paid after deductible'], ['Annual limit', 'Yearly payout cap']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }, { label: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }, { label: 'When to Enroll', href: '/insurance/when-to-enroll' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-how-works" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="It protects against the big bills">
            Pet insurance is best thought of as protection against unexpected, large veterinary expenses — a torn ligament, a swallowed object, cancer, a chronic illness — not as a way to save money on routine care. The math works because it converts an unpredictable catastrophic risk into a predictable monthly cost.
          </CalloutBox>

          <h2>The Reimbursement Model</h2>
          <p>Unlike most human health insurance, pet insurance almost always works by reimbursement. You take your pet to any licensed veterinarian, pay the bill yourself, then submit a claim — usually by app or online — with the itemized invoice and records. The insurer reviews the claim and reimburses you for the covered portion. This means you need to be able to cover the bill upfront, which is an important practical consideration when choosing coverage.</p>

          <h2>The Four Levers</h2>
          <p>Every policy is defined by four interacting numbers. The <strong>premium</strong> is what you pay monthly to keep coverage active. The <strong>deductible</strong> is the amount you pay out of pocket before reimbursement kicks in, set either per year or per condition. The <strong>reimbursement rate</strong> is the percentage of covered costs the insurer pays after the deductible — often 70%, 80%, or 90%. The <strong>annual limit</strong> caps how much the insurer will reimburse in a policy year. Raising your reimbursement rate or annual limit, or lowering your deductible, increases your premium; the levers trade off against each other.</p>

          <h2>A Worked Example</h2>
          <p>Suppose your dog needs a $4,000 surgery and your policy has a $500 annual deductible, an 80% reimbursement rate, and a generous annual limit. You pay the clinic $4,000. You then submit a claim. After subtracting the $500 deductible, $3,500 remains as covered cost; the insurer reimburses 80% of that, or $2,800. Your net out-of-pocket is $1,200 plus your monthly premiums. If you had chosen a 90% rate, you would have received more back but paid a higher premium all year.</p>

          <h2>What Affects Your Premium</h2>
          <p>Premiums are priced on the pet's species, breed, age, and location, plus your chosen deductible, reimbursement rate, and limit. Older pets and breeds with known hereditary risks cost more to insure. Premiums also tend to rise as a pet ages, since the likelihood of claims increases — an important reason many people enroll while pets are young, when premiums are lowest and few conditions are excluded.</p>

          <h2>Choosing a Structure</h2>
          <p>There is no single best plan; the right structure depends on your budget and risk tolerance. If you could comfortably absorb a few thousand dollars but not a $10,000 catastrophe, a higher deductible with a high or unlimited annual limit gives strong protection at a lower premium. If cash flow is tight even for moderate bills, a lower deductible and higher reimbursement rate smooth costs but raise the premium. Understanding the four levers lets you build a plan that matches your situation rather than chasing the cheapest or most expensive option.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
