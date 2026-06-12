import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Vaccines? | Vets.co', description: 'Standard accident-and-illness pet insurance does not cover vaccines. Only an optional wellness plan reimburses routine care — here is how that math works.', path: '/insurance/questions/does-pet-insurance-cover-vaccines', type: 'article' })

const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Vaccines?', description: 'Why accident-and-illness pet insurance excludes vaccines, and when an optional wellness plan is worth adding.', url: 'https://vets.co/insurance/questions/does-pet-insurance-cover-vaccines', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-11T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z', speakable: true })

const FAQS = [
  { question: 'Does any pet insurance cover vaccines?', answer: 'Not through the core accident-and-illness policy. Vaccines are covered only when you add an optional wellness or routine-care plan — sometimes called a preventive rider — which reimburses a fixed annual allowance toward vaccines, exams, and other predictable care for an extra monthly cost. The base policy is designed to pay for the unexpected, not the scheduled.' },
  { question: 'Is a pet insurance wellness plan worth it?', answer: 'It depends on arithmetic, not opinion. A wellness add-on rarely returns more than you pay into it; its value is smoothing predictable costs into a flat monthly figure rather than generating savings. Compare the rider’s annual premium to what you would spend out of pocket on the vaccines, exams, and preventives it reimburses. If those costs roughly match the premium, the rider mostly converts lumpy bills into level payments; if they fall well short, you are paying for convenience.' },
  { question: 'What is the difference between accident-only, accident-and-illness, and wellness coverage?', answer: 'Accident-only covers injuries — broken bones, swallowed objects, lacerations — and nothing else. Accident-and-illness adds coverage for diseases such as cancer, infections, and chronic conditions, and is the standard product most owners buy. Wellness is not insurance at all but a budgeting add-on that reimburses routine, predictable care like vaccines and annual exams. Only the wellness layer touches vaccines.' },
]

export default function Page() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Does Pet Insurance Cover Vaccines?', subtitle: 'Standard accident-and-illness pet insurance does not cover vaccines or other routine care. Vaccines are reimbursed only if you add an optional wellness plan — and whether that add-on is worth it comes down to simple arithmetic, not the marketing.', category: 'Insurance Q&A', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '6 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Questions', href: '/insurance/questions' }, { name: 'Vaccines', href: '/insurance/questions/does-pet-insurance-cover-vaccines' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Answer</div>
            {[['Core policy', 'Vaccines excluded'], ['Wellness add-on', 'Vaccines reimbursed, up to a cap'], ['Worth it?', 'Compare premium to out-of-pocket']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Questions" links={[{ label: 'Does insurance cover dental?', href: '/insurance/questions/does-pet-insurance-cover-dental' }, { label: 'How much does it cost?', href: '/insurance/questions/how-much-does-pet-insurance-cost' }, { label: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }, { label: 'All insurance questions', href: '/insurance/questions' }]} />
          <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="The short answer">
            Standard accident-and-illness pet insurance does <strong>not</strong> cover vaccines or other routine, preventive care. Vaccines are reimbursed only if you add an optional wellness or routine-care plan for an extra monthly cost. The core policy pays for unexpected illness and injury — not predictable annual care.
          </CalloutBox>

          <h2>Why the Core Policy Excludes Vaccines</h2>
          <p>The product most owners buy is an accident-and-illness (A&amp;I) policy, and it is built around one idea: insuring against the unexpected. A broken leg, a swallowed sock, a cancer diagnosis, a sudden infection — these are unpredictable, potentially expensive events, which is exactly what insurance exists to cover. Vaccines do not fit that definition. They are scheduled, predictable, and relatively inexpensive, which is why every standard policy excludes them by design.</p>
          <p>This is not a loophole or a gap an insurer forgot to close. Insuring a known, recurring cost cannot make that cost cheaper; it can only add an administrative layer on top of it. If a policy reimbursed a $30 vaccine, the premium would simply have to rise by at least $30 to fund it, plus the insurer&apos;s overhead. Excluding predictable care is what keeps the premium attached to genuine risk, which is the whole point of the product.</p>

          <h2>What a Wellness Add-On Actually Does</h2>
          <p>If you want help with routine costs, the route is a separate wellness or routine-care plan — sometimes marketed as a preventive rider — layered on top of the A&amp;I policy. A wellness plan reimburses a fixed annual allowance toward predictable items: core and non-core vaccines, the annual wellness exam, flea and tick prevention, and sometimes a dental cleaning or routine bloodwork. Crucially, it pays up to a capped amount per category, not unlimited reimbursement.</p>
          <p>Because the reimbursement is capped and the premium is fixed, a wellness plan behaves more like a budgeting tool than like insurance. It converts several lumpy bills across the year into one level monthly payment. That can be genuinely useful for cash-flow planning, but it is not designed to generate savings, and it is important to understand which mechanism you are buying.</p>

          <h2>Is the Wellness Plan Worth It? Run the Numbers</h2>
          <p>Whether a wellness add-on pays off is arithmetic, and you can do it yourself before you enroll. Add up what you actually spend in a year on the items the plan reimburses — vaccines, the annual exam, preventives — and compare that total to the rider&apos;s annual premium. If the two are close, the plan mostly smooths your cash flow. If your real spending falls well short of the premium, you are paying for convenience rather than value. A wellness rider rarely &ldquo;profits&rdquo; the owner, because the insurer prices it to cover the predictable costs plus overhead.</p>
          <p>The right answer is personal: a multi-pet household that bundles every preventive each year may find the math close to neutral, while an owner who shops around for low-cost vaccine clinics will usually come out ahead skipping the rider and budgeting directly. To pressure-test the broader buy decision, the <a href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</a> can frame how routine versus catastrophic costs factor into the overall value of a policy.</p>

          <h2>What to Check on a Quote</h2>
          <p>When you request a quote and see a wellness option, three details decide whether it is structured well. First, confirm the wellness plan is a clearly separate line item from the A&amp;I premium, so you can see exactly what the routine-care layer costs. Second, look for the annual reimbursement cap per category — a plan that caps vaccine reimbursement at a low figure may not cover a full puppy or kitten vaccine series. Third, check whether the wellness allowance rolls over or resets each year, and whether there is any waiting period before routine claims are eligible. These small print details, not the headline price, determine whether the rider does what you expect.</p>

          <h2>The Practical Takeaway</h2>
          <p>If your goal is protection against a large, unexpected vet bill, the core accident-and-illness policy is the product to focus on, and vaccines are simply outside its scope. If your goal is to spread predictable annual care into level payments, a wellness add-on can do that — but only add it after checking that the math and the per-category caps make sense for your pet. The two products solve different problems, and conflating them is the most common reason owners feel let down at claim time.</p>

          <h2 id="next-steps">Next Steps</h2>
          <p>Most owners researching vaccines are early in the buy decision. The most useful next move is to model the overall value of a policy on your numbers and to compare how carriers structure their wellness options.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ul>
            <li>Run the <a href="/tools/pet-insurance-worth-it-calculator">&ldquo;is pet insurance worth it?&rdquo; calculator</a> to see the breakeven cost level for your pet.</li>
            <li>Compare carriers and their wellness add-ons in our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</li>
            <li>Narrow the field by the features you care about with the <a href="/tools/insurance-finder">pet insurance coverage finder</a>.</li>
          </ul>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={[
            { label: 'A Consumer’s Guide to Pet Insurance', url: 'https://content.naic.org/cipr-topics/pet-insurance', publisher: 'NAIC' },
            { label: 'State of the Industry Report (coverage-type definitions)', url: 'https://naphia.org/state-of-the-industry/', publisher: 'NAPHIA' },
            { label: 'Sample accident-and-illness and wellness policy documents', publisher: 'General carrier policy disclosures (not an endorsement)' },
          ]} />
        </div>
      </ArticleLayout>

      <div className="px-container-sm sm:px-container pb-12">
        <CrossPortfolioCard currentSite="vets-co" contentType="health" />
      </div>
    </>
  )
}
