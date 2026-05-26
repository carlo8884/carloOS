import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Addison's Disease in Dogs — Vague Signs, Addisonian Crisis & DOCP Treatment | Dog.com", description: "Addison's disease (hypoadrenocorticism) is the 'great imitator' — vague signs mimic many conditions. Addisonian crisis is life-threatening. Lifelong DOCP or fludrocortisone management.", path: '/health/addisons-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Addison's Disease in Dogs", description: "Hypoadrenocorticism — diagnosis, Addisonian crisis management, and DOCP treatment.", url: 'https://dog.com/health/addisons-disease', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Addison's Disease in Dogs", description: "Canine hypoadrenocorticism — signs, diagnosis, crisis management, and lifelong treatment.", url: 'https://dog.com/health/addisons-disease', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function AddisonsDiseaseePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: "Addison's Disease in Dogs", subtitle: "Hypoadrenocorticism (Addison's disease) results from insufficient production of adrenal cortex hormones — glucocorticoids (primarily cortisol) and mineralocorticoids (primarily aldosterone). It is sometimes called 'the great imitator' because its signs are vague and non-specific, leading to misdiagnosis for months or years before the characteristic electrolyte changes point to the diagnosis.", category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: "Addison's Disease", href: '/health/addisons-disease' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['Standard Poodle (highest prevalence)', 'Portuguese Water Dog', 'Soft-Coated Wheaten Terrier', 'Nova Scotia Duck Tolling Retriever', 'Bearded Collie', 'Great Dane', 'Rottweiler'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Megaesophagus', href: '/health/megaesophagus' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-addisons" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Addison's Is Missed — The Vague Signs</h2>
          <p>The challenge with Addison's disease is that its clinical presentation is genuinely non-specific in early or mild disease. Affected dogs often show: intermittent GI signs (vomiting, diarrhea, anorexia that waxes and wanes), weakness and lethargy that comes and goes, weight loss over time, and a dog that is "just not right." These signs can mimic inflammatory bowel disease, early kidney disease, liver disease, and numerous other conditions. Without an electrolyte panel showing the characteristic hyperkalemia (elevated potassium) and hyponatremia (low sodium) — the sodium:potassium ratio below 27 being the classic finding — Addison's is easy to miss through empirical treatment of the GI signs.</p>
          <p>The "waxing and waning" character is because the adrenal crisis threshold is dynamic — a stressed dog produces more ACTH demand that the failing adrenals cannot meet, producing acute signs. A less-stressed dog stays below the crisis threshold, seeming improved. This pattern of stress-induced GI illness followed by apparent recovery is characteristic and should prompt electrolyte testing.</p>

          <h2>Addisonian Crisis — The Emergency</h2>
          <p>When adrenal hormone production drops below the minimum required for cardiovascular and electrolyte homeostasis, an Addisonian crisis occurs — acute collapse, profound weakness, bradycardia (slow heart rate from hyperkalemia's cardiac effect), hypotension, and shock. The hyperkalemia can cause life-threatening cardiac arrhythmias. This is the presentation that frequently leads to the diagnosis — a dog that was intermittently unwell arrives in acute cardiovascular collapse.</p>
          <p>Emergency treatment: IV fluid resuscitation with 0.9% saline (restores blood pressure and begins diluting potassium), IV dexamethasone (the glucocorticoid of choice during crisis — it does not interfere with the ACTH stimulation test if needed for diagnosis confirmation), cardiac monitoring and treatment for hyperkalemia-induced arrhythmias if present. Once stabilized, the ACTH stimulation test confirms the diagnosis (cortisol fails to rise appropriately after ACTH injection in Addisonian dogs).</p>

          <h2>Treatment — DOCP or Fludrocortisone</h2>
          <p>Treatment requires lifelong hormone supplementation:</p>
          <p><strong>DOCP (Percorten-V / desoxycorticosterone pivalate):</strong> Injectable mineralocorticoid given every 25-28 days (the standard) or every 21-30 days depending on electrolyte response. Most widely used in the US. Requires a separate glucocorticoid (prednisone at physiologic dose — 0.1-0.2 mg/kg daily) since DOCP provides only mineralocorticoid activity. Dogs typically do very well on this regimen.</p>
          <p><strong>Fludrocortisone (Florinef):</strong> Oral tablet daily. Provides both mineralocorticoid and some glucocorticoid activity. Easier for owners who struggle with injections. Some dogs require an additional low-dose prednisone supplement. Requires daily dosing compliance.</p>
          <p>During periods of stress (travel, veterinary procedures, illness, boarding), the glucocorticoid dose is temporarily increased ("stress dosing") to cover the increased demand — typically 2-3× the maintenance dose for the duration of the stressor. Owners should keep oral prednisone on hand specifically for this purpose and know when to administer it.</p>

          <h2>Long-Term Prognosis</h2>
          <p>Addison's disease is one of the most manageable chronic conditions in veterinary medicine — with appropriate treatment, Addisonian dogs live normal, full-quality lives with normal lifespans. The majority of owners describe their dogs as transformed after diagnosis and treatment begins — the dog that had been intermittently unwell for months becomes consistently well, energetic, and normal once adequate hormone replacement is established. Annual rechecks with electrolyte monitoring ensure treatment is appropriately dosed as the dog ages.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
