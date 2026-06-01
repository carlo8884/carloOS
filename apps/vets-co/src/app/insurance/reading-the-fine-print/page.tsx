import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, ReviewCard, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Reading Pet Insurance Fine Print — What to Check | Vets.co", description: "Waiting periods, exam-fee coverage, payout schedules, and exclusions hide in the policy document. Use this checklist to read a pet insurance policy properly.", path: '/insurance/reading-the-fine-print', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Reading Pet Insurance Fine Print', description: 'A checklist for the policy details that matter most: waiting periods, exam fees, payout schedules, and exclusions.', url: 'https://vets.co/insurance/reading-the-fine-print', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "Why do waiting periods matter so much?", answer: "Waiting periods are the gap between when you enroll and when coverage actually begins, and anything that arises during them is treated as pre-existing and excluded. Accident waiting periods are usually short (a few days), illness periods longer (around two weeks), and orthopedic conditions can carry waiting periods of six months or even a year. For a breed prone to cruciate or hip problems, a long orthopedic waiting period can be the difference between coverage and a denied claim, so it is one of the first things to check." },
  { question: "What is a benefit schedule and why should I avoid it?", answer: "A benefit schedule (or payout schedule) caps how much the insurer will pay for each specific condition or procedure, regardless of your actual bill. With a benefit-schedule plan, even if your covered claim is large, reimbursement may be limited to a fixed amount per item, leaving you to cover the rest. Most modern, well-regarded plans reimburse a percentage of the actual cost instead. Identifying whether a plan uses a benefit schedule is important, because it can quietly undercut coverage that otherwise looks comprehensive." },
  { question: "Are exam fees covered?", answer: "Exam or consultation fees — what you pay for the vet to see your pet — are covered by some insurers and excluded by others, and they add up over a pet's lifetime, especially for chronic conditions requiring frequent rechecks. Two otherwise-similar plans can differ meaningfully on this point. If your pet is likely to need ongoing monitoring, a plan that reimburses exam fees can be worth a higher premium. Always check the policy specifically, as this detail is easy to overlook." },
]
export default function FinePrintPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Reading the Fine Print', subtitle: 'The difference between a plan that pays when you need it and one that disappoints lives in the policy document, not the marketing page. Waiting periods, payout structures, exam-fee handling, and the exclusions list quietly determine your real coverage. This checklist walks through what to read before you sign.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Reading the Fine Print', href: '/insurance/reading-the-fine-print' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Fine-Print Checklist</div>
            {[['Waiting periods', 'Especially orthopedic'], ['Payout type', 'Percentage vs. benefit schedule'], ['Exam fees', 'Covered or excluded'], ['Exclusions', 'Bilateral, hereditary, dental']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }, { label: 'Pre-Existing Conditions', href: '/insurance/pre-existing-conditions' }, { label: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-fine-print" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Always read the sample policy">
            Reputable insurers publish a sample policy document. Read it before enrolling — not the summary, the actual document. The differences that matter in a real claim are almost always in the detailed terms, not the headline coverage.
          </CalloutBox>

          <h2>Waiting Periods</h2>
          <p>Every policy imposes a waiting period after enrollment before coverage starts, and anything arising during it is excluded as pre-existing. Accident waiting periods are typically short, illness periods longer, and orthopedic conditions can carry the longest waits — six months or more with some insurers. For breeds prone to cruciate or hip disease, a long orthopedic waiting period is a major consideration. Check the length of each waiting period and whether the insurer offers a way to shorten the orthopedic wait, such as an exam.</p>

          <h2>How the Plan Pays</h2>
          <p>There are two payout models. Most modern plans reimburse a percentage of your actual covered costs. A minority use a benefit schedule, capping payment for each condition or procedure at a fixed amount regardless of the real bill — which can leave large gaps even when a claim is covered. Confirm the plan reimburses actual costs, and be wary of unusually cheap plans that quietly use a benefit schedule.</p>

          <h2>Exam Fees and Ancillary Costs</h2>
          <p>Some insurers reimburse the exam or consultation fee; others exclude it. Over a chronic condition requiring repeated rechecks, this adds up. Look also at how the plan handles prescription medications, hospitalization, specialist and emergency care, alternative therapies, and behavioral treatment. These ancillary inclusions and exclusions distinguish otherwise-similar plans and can swing the value substantially for a pet with ongoing needs.</p>

          <h2>The Exclusions List</h2>
          <p>The exclusions section is the most important part of the document. Read how the plan treats pre-existing conditions, bilateral conditions, hereditary and congenital conditions, and dental disease. Note any breed-specific exclusions, age limits, and conditions that are never covered. The coverage list tells you what a plan promises; the exclusions list tells you where it stops — and the gaps are where claims get denied.</p>

          <h2>Practical Reading Strategy</h2>
          <p>Approach the policy with a checklist: waiting periods (especially orthopedic), payout model (percentage vs. schedule), exam-fee coverage, annual limit, and the full exclusions list. Compare two or three plans on these same points side by side rather than on price alone. A few minutes reading the fine print before enrollment prevents the far more painful discovery, during a claim, that the coverage you thought you had does not apply.</p>

          <h2 id="quote">Compare Two or Three Policies</h2>
          <p>The practical reading strategy above works best applied to real sample policies. Pull quotes from a couple of carriers and compare them on the same points — waiting periods, payout model, exam-fee coverage, annual limit, and the exclusions list. The two below are useful starting points; for the full side-by-side, see our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ReviewCard
            id="spot"
            badge="Customizable"
            badgeEmoji="🔎"
            name="Spot Pet Insurance"
            subtitle="Adjustable limits and an optional preventive add-on"
            score={8.2}
            winner
            description={
              <p>Offers a range of annual-limit and deductible combinations plus an optional preventive-care add-on, which gives you several policy structures to read side by side. Use the fine-print checklist above — waiting periods, exam-fee coverage, exclusions — to compare its sample policy against another carrier before enrolling.</p>
            }
            specs={[
              { label: 'Limits', value: 'Adjustable', highlight: 'good' },
              { label: 'Exam fees', value: 'Often covered', highlight: 'good' },
              { label: 'Preventive', value: 'Optional add-on' },
            ]}
            pros={['Several policy structures to compare', 'Exam-fee coverage available', 'Optional preventive package']}
            cons={['Read waiting-period terms', 'Preventive add-on is not insurance']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/spot/home?s=insurance-reading-the-fine-print"
            ctaAffiliateProgram="spot"
            ctaAffiliateProduct="home"
          />
          <ReviewCard
            id="manypets"
            badge="Straightforward Terms"
            badgeEmoji="📄"
            name="ManyPets"
            subtitle="Single comprehensive plan, clearer fine print"
            score={8.0}
            description={
              <p>Built around a single comprehensive plan rather than a tier maze, which can make the fine print easier to read and compare. Still apply the checklist — confirm waiting periods, bilateral and hereditary terms, and the annual limit. A clear sample policy is exactly what you want when learning to read coverage documents.</p>
            }
            specs={[
              { label: 'Plan', value: 'Single comprehensive' },
              { label: 'Fine print', value: 'Relatively clear', highlight: 'good' },
              { label: 'Model', value: 'Pay-then-claim' },
            ]}
            pros={['Simpler single plan to read', 'Clear sample policy', 'Covers many conditions']}
            cons={['Fewer structures to mix and match', 'Availability varies by state']}
            price="Quote-based"
            ctaText="Get a Quote →"
            ctaHref="/go/manypets/home?s=insurance-reading-the-fine-print"
            ctaAffiliateProgram="manypets"
            ctaAffiliateProduct="home"
          />

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
