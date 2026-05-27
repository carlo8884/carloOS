import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Kidney Disease in Dogs — IRIS Staging, SDMA & Management | Dog.com', description: 'Chronic kidney disease in dogs: IRIS staging system, SDMA early detection, phosphorus restriction, and why 75% of kidney function is lost before bloodwork shows it. Reference guide.', path: '/health/dog-kidney-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Kidney Disease in Dogs', description: 'IRIS staging, SDMA, phosphorus restriction, and management of canine chronic kidney disease.', url: 'https://dog.com/health/dog-kidney-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Kidney Disease in Dogs', description: 'Chronic kidney disease — IRIS staging, early detection, and management.', url: 'https://dog.com/health/dog-kidney-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogKidneyPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Kidney Disease in Dogs', subtitle: 'Chronic kidney disease (CKD) is one of the most common conditions in older dogs. The kidneys have enormous reserve capacity — 75% of function must be lost before creatinine rises on a standard blood panel. This delay between disease onset and detection is why SDMA testing and urine specific gravity monitoring are now standard in senior wellness care.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Kidney Disease', href: '/health/dog-kidney-disease' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'IRIS Staging', href: '#iris' }, { label: 'SDMA Early Detection', href: '#sdma' }, { label: 'Phosphorus Restriction', href: '#phosphorus' }, { label: 'Hydration', href: '#hydration' }, { label: 'Monitoring', href: '#monitoring' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mt-4">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of CKD</div>
            {['Increased drinking and urination', 'Decreased appetite', 'Weight loss', 'Vomiting (uremia)', 'Lethargy', 'Bad breath (ammonia odor)', 'Pale gums (anemia of CKD)'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-dog-care' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-dog-care' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-kidney" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="iris">The IRIS Staging System</h2>
          <p>The International Renal Interest Society (IRIS) staging system is the standard framework veterinary internists use to classify CKD severity and guide treatment decisions. It uses creatinine (and increasingly SDMA) as the primary staging markers:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-brand-surface">
                <th className="p-3 text-left text-xs font-bold border border-brand-border">Stage</th>
                <th className="p-3 text-left text-xs font-bold border border-brand-border">Creatinine (mg/dL)</th>
                <th className="p-3 text-left text-xs font-bold border border-brand-border">SDMA (μg/dL)</th>
                <th className="p-3 text-left text-xs font-bold border border-brand-border">Clinical Context</th>
              </tr></thead>
              <tbody>
                {[['1', '<1.4', '<18', 'Non-azotemic — biomarkers abnormal, kidney damage present'], ['2', '1.4–2.8', '18–35', 'Mild azotemia — often no clinical signs'], ['3', '2.9–5.0', '36–54', 'Moderate — PU/PD, reduced appetite may appear'], ['4', '>5.0', '>54', 'Severe — uremia, active management required']].map(([s, cr, sdma, ctx]) => (
                  <tr key={s}><td className="p-3 text-xs border border-brand-border font-bold">{s}</td><td className="p-3 text-xs border border-brand-border">{cr}</td><td className="p-3 text-xs border border-brand-border">{sdma}</td><td className="p-3 text-xs border border-brand-border">{ctx}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>IRIS staging also substages based on proteinuria (urine protein:creatinine ratio — UPC) and blood pressure, both of which independently accelerate CKD progression and require separate management.</p>

          <h2 id="sdma">SDMA — Earlier Detection Changes Outcomes</h2>
          <p>Symmetric dimethylarginine (SDMA) rises when approximately 25% of kidney function is lost — creatinine rises only after 75% loss. This 50-percentage-point difference in detection threshold means SDMA can identify CKD years before creatinine becomes abnormal. For a 10-year-old Labrador with SDMA of 20 μg/dL (mildly elevated, creatinine still normal): intervention at this stage — phosphorus restriction, hydration optimization, blood pressure monitoring — can significantly slow progression to the point where creatinine abnormalities appear. The same dog detected at Stage 3 on creatinine has far less time and renal reserve to work with.</p>
          <p>Annual blood panels including SDMA for dogs over 7 years is the appropriate standard — not because something is wrong, but because early detection genuinely changes what is possible.</p>

          <h2 id="phosphorus">Phosphorus Restriction — The Most Important Dietary Intervention</h2>
          <p>Dietary phosphorus restriction is the single most evidence-supported dietary intervention in canine CKD. High phosphorus intake accelerates renal mineralization and nephron loss in dogs with impaired excretion. Renal diets (Hill's k/d, Royal Canin Renal, Purina NF) restrict phosphorus to levels that reduce this progression. Starting renal diet at IRIS Stage 2 (before clinical signs in most dogs) produces significantly better long-term outcomes than waiting until Stage 3-4 when the dog is clinically ill.</p>
          <p>If phosphorus cannot be adequately controlled through diet alone (common in Stage 3-4), intestinal phosphate binders (aluminum hydroxide, calcium carbonate given with meals — the binder binds dietary phosphate in the GI tract before absorption) supplement dietary restriction. Target serum phosphorus: Stage 1-2: under 4.5 mg/dL. Stage 3: under 5.0 mg/dL. Stage 4: under 6.0 mg/dL.</p>

          <h2 id="hydration">Hydration — The Second Pillar</h2>
          <p>CKD dogs produce dilute urine and are chronically at risk for dehydration, which further reduces perfusion to already-compromised kidneys. Strategies to increase fluid intake: wet food (canned renal diet or adding water to dry renal kibble), a pet water fountain (moving water encourages more drinking in many dogs), multiple water bowls placed around the house, and for dogs with more advanced CKD, subcutaneous fluid administration at home (fluid given under the skin of the scruff, absorbed over hours — taught to owners by their veterinarian). Subcutaneous fluids are a quality-of-life intervention that can extend comfortable life significantly in moderate-to-advanced CKD dogs.</p>

          <h2 id="monitoring">Monitoring Frequency</h2>
          <p>Stage 1-2: every 3-6 months — bloodwork (creatinine, SDMA, phosphorus, BUN, electrolytes), urinalysis with UPC, blood pressure. Stage 3: every 3 months. Stage 4: every 1-3 months depending on stability. Blood pressure monitoring is essential — systemic hypertension is common in CKD and accelerates both renal and cardiac disease. Target blood pressure under 140 mmHg systolic; treat with amlodipine when persistently elevated. UPC over 0.5 warrants treatment with benazepril or enalapril — ACE inhibitors reduce intraglomerular pressure and slow protein loss and progression.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
