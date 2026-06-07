import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "What Veterinary Care Really Costs — A Realistic Guide | Vets.co", description: "Understand the real cost of routine care, common procedures, and major emergencies, plus why prices vary and how to plan financially for a pet.", path: '/guides/cost-of-veterinary-care', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'What Veterinary Care Really Costs', description: 'A realistic overview of routine, procedural, and emergency veterinary costs and why they vary.', url: 'https://vets.co/guides/cost-of-veterinary-care', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "Why do veterinary prices vary so much between clinics?", answer: "Veterinary prices reflect real differences in overhead, equipment, staffing, and location. A clinic in a high-cost urban area, or one with advanced diagnostic equipment and board-certified specialists on staff, will generally charge more than a rural general practice. Emergency and specialty hospitals carry higher costs because of round-the-clock staffing and intensive-care capability. Prices also vary with the complexity of a case. This is why getting an estimate before non-emergency procedures, and understanding what is included, helps you compare meaningfully." },
  { question: "What are the biggest cost surprises for new pet owners?", answer: "The most common surprises are emergencies and chronic illness. A single emergency surgery — for a swallowed object, a bloat, or a trauma — can run into the thousands, and chronic conditions like diabetes, kidney disease, or cancer generate recurring costs over months or years. Many owners budget for routine care but are unprepared for these larger, unpredictable expenses, which is precisely the gap that pet insurance or a dedicated emergency fund is designed to fill." },
  { question: "Is it cheaper to skip routine care?", answer: "No — skipping routine care is usually more expensive in the long run. Preventive care such as vaccinations, parasite prevention, dental care, and wellness exams catches problems early and prevents costly diseases. A dental cleaning is far cheaper than treating advanced periodontal disease and its complications; heartworm prevention costs a fraction of heartworm treatment. Routine care is among the highest-return spending in pet ownership precisely because it averts much larger future bills." },
]
export default function CostOfCarePage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'What Veterinary Care Really Costs', subtitle: 'Pet ownership comes with predictable routine costs and unpredictable large ones, and understanding the difference is the foundation of planning. This guide gives a realistic picture of routine care, common procedures, and major emergencies — and explains why prices vary so widely — so you can budget and protect yourself sensibly.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Cost of Care', href: '/guides/cost-of-veterinary-care' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Cost Categories</div>
            {[['Routine', 'Predictable, budgetable'], ['Procedures', 'Planned, estimable'], ['Chronic', 'Recurring over time'], ['Emergency', 'Unpredictable, can be large']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }, { label: 'Emergency Vet Costs', href: '/guides/emergency-vet-costs' }, { label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Owner Newsletter" subtitle="Practical guidance weekly." source="guides-cost" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Plan for two kinds of cost">
            Veterinary expenses fall into two buckets: predictable routine care you can budget for, and unpredictable large expenses you must protect against. A sound financial plan handles both — a budget for routine care and either insurance or an emergency fund for the rest.
          </CalloutBox>

          <h2>Routine Care</h2>
          <p>Routine care is the predictable backbone of pet ownership: annual or twice-yearly wellness exams, vaccinations, parasite prevention (heartworm, flea, and tick), routine bloodwork, and periodic dental care. These costs recur on a known schedule and are straightforward to budget. They are also among the highest-value spending you will do, because catching problems early and preventing disease averts far larger costs down the road.</p>

          <h2>Common Procedures</h2>
          <p>Beyond routine care, most pets need certain planned procedures over a lifetime: spay or neuter surgery, professional dental cleanings (which often reveal teeth needing treatment), and management of the occasional infection or minor injury. These are generally estimable in advance, and reputable clinics will provide a written estimate before non-emergency procedures so you can plan and ask questions about what is included.</p>

          <h2>Chronic Conditions</h2>
          <p>As pets age, chronic conditions become a major cost category. Diseases such as diabetes, kidney disease, arthritis, allergies, and cancer require ongoing medication, monitoring bloodwork, and recheck visits, sometimes for years. These recurring costs can quietly exceed the price of a single emergency over time. Anticipating that most pets will face at least one chronic condition in later life is an important part of long-term planning.</p>

          <h2>Emergencies</h2>
          <p>Emergencies are the least predictable and often the largest single expenses. A swallowed object requiring surgery, a bloat, a serious trauma, or a sudden severe illness can generate bills in the thousands, especially at emergency and specialty hospitals that maintain round-the-clock staffing and intensive care. Because these events are by nature unexpected, they are the strongest argument for either pet insurance or a substantial emergency fund.</p>

          <h2>Why Prices Vary</h2>
          <p>Veterinary prices differ by region, clinic type, and case complexity. Urban clinics and those with advanced equipment or specialists generally cost more than rural general practices; emergency and specialty hospitals cost more than routine clinics because of their staffing and capabilities. Within a case, more complex diagnostics and treatments cost more. Understanding these drivers helps you interpret estimates and compare options without assuming a higher price means worse value or a lower price means cut corners.</p>

          <h2>Planning Ahead</h2>
          <p>The practical takeaway is to plan for both predictable and unpredictable costs. Budget routinely for wellness care, and protect against the rest with pet insurance, a dedicated emergency savings fund, or both. Knowing roughly what to expect — and that emergencies and chronic illness are when costs balloon — lets you make calm decisions for your pet rather than financial ones under pressure.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
