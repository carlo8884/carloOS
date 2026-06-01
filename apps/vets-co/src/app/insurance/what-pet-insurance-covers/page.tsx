import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "What Pet Insurance Covers (and Doesn't) | Vets.co", description: "Accident and illness plans cover injuries, illness, surgery, diagnostics, and often hereditary conditions. Learn what is typically covered and what is excluded.", path: '/insurance/what-pet-insurance-covers', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: "What Pet Insurance Covers and Doesn't", description: 'A breakdown of covered conditions, common exclusions, and plan types in pet insurance.', url: 'https://vets.co/insurance/what-pet-insurance-covers', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const FAQS = [
  { question: "Does pet insurance cover routine and wellness care?", answer: "Standard accident-and-illness policies generally do not cover routine wellness care such as annual exams, vaccinations, flea and tick prevention, or dental cleanings. These are predictable, budgetable costs, and insurance is designed for unexpected expenses. Many insurers offer optional wellness or preventive-care add-ons for an extra premium that reimburse some routine costs, but these typically return roughly what you pay in and are better viewed as a budgeting tool than true insurance." },
  { question: "Are hereditary and congenital conditions covered?", answer: "Many modern accident-and-illness plans do cover hereditary and congenital conditions — such as hip dysplasia or heart defects — provided they were not pre-existing before the policy began and any breed-specific waiting periods have passed. This is a meaningful difference between plans, especially for purebred dogs with known genetic risks. Always confirm in the policy wording, because coverage of hereditary conditions and the associated waiting periods vary by insurer." },
  { question: "Does insurance cover dental disease?", answer: "Coverage of dental care varies widely. Most plans cover dental treatment resulting from accidents, such as a broken tooth, and many cover illness-related dental disease like extractions for periodontal disease, often with conditions such as proof of prior dental care. Routine cleanings are usually excluded unless you add a wellness rider. Because dental coverage is one of the most inconsistent areas across insurers, it is worth reading the specific policy language carefully." },
]
export default function WhatCoversPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: "What Pet Insurance Covers (and Doesn't)", subtitle: 'Most pet insurance sold today is accident-and-illness coverage, which pays toward unexpected injuries and diseases — but every policy has exclusions, and the differences between plans live in the details. Knowing what is typically covered, what is usually excluded, and where plans diverge lets you choose coverage that fits your pet.', category: 'Insurance Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'What It Covers', href: '/insurance/what-pet-insurance-covers' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Plan Types</div>
            {[['Accident-only', 'Injuries only, lowest cost'], ['Accident & illness', 'Most common, broad coverage'], ['Wellness add-on', 'Routine care budgeting']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works' }, { label: 'Pre-Existing Conditions', href: '/insurance/pre-existing-conditions' }, { label: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Insurance Decision Guide" subtitle="Our plain-English checklist." source="insurance-what-covers" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Read the policy, not the marketing">
            Two plans advertised as comprehensive can differ enormously in waiting periods, hereditary-condition coverage, dental rules, and exam-fee handling. The marketing page tells you what is covered in broad strokes; the policy document tells you what is actually covered. Always read the sample policy before enrolling.
          </CalloutBox>

          <h2>The Three Plan Types</h2>
          <p>Pet insurance comes in three broad forms. <strong>Accident-only</strong> plans cover injuries — fractures, lacerations, swallowed objects, toxin ingestion — and are the cheapest, suiting young or budget-constrained owners who want catastrophe protection. <strong>Accident-and-illness</strong> plans, the most common, add coverage for diseases ranging from infections to cancer, and are what most people mean by pet insurance. <strong>Wellness add-ons</strong> are optional riders that reimburse routine care; they are budgeting tools rather than true insurance.</p>

          <h2>What Is Typically Covered</h2>
          <p>A standard accident-and-illness policy generally covers diagnostics (bloodwork, imaging, biopsies), surgery and hospitalization, prescription medications related to a covered condition, emergency and specialist care, cancer treatment, and treatment for chronic illnesses. Many modern plans also cover hereditary and congenital conditions, behavioral therapy, and alternative therapies, though these vary by insurer. The unifying principle is that the condition must be unexpected and not pre-existing.</p>

          <h2>What Is Usually Excluded</h2>
          <p>Common exclusions include pre-existing conditions (anything showing signs before the policy or during waiting periods), routine and preventive care unless a wellness rider is added, breeding and pregnancy costs, cosmetic or elective procedures, and food or supplements. Some plans exclude or limit specific hereditary conditions for certain breeds, or impose waiting periods for orthopedic issues. Reading the exclusions list is as important as reading the coverage list.</p>

          <h2>Where Plans Diverge</h2>
          <p>The biggest differences between plans tend to be in four areas: whether exam or consultation fees are reimbursed, how hereditary and congenital conditions are handled, the length of waiting periods (especially for orthopedic conditions), and dental coverage rules. Two plans can look identical in headline coverage yet differ by thousands of dollars in a real claim because of these details. This is why side-by-side comparison of policy documents, not advertisements, is essential.</p>

          <h2>Matching Coverage to Your Pet</h2>
          <p>A young mixed-breed dog with no known risks may be well served by a straightforward accident-and-illness plan. A purebred with documented hereditary risk benefits from a plan that clearly covers those conditions with short waiting periods. An owner focused purely on catastrophe protection might choose accident-and-illness with a high deductible and high limit and skip the wellness rider. Understanding what each plan type covers — and excludes — lets you align coverage with your pet's specific risk profile.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
