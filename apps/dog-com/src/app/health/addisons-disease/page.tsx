import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hypoadrenocorticism in Animals', url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hypoadrenocorticism-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Diagnosis of Hypoadrenocorticism in Dogs and Cats — Consensus Statement', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Addison\'s Disease in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Baumstark ME et al. Alternate-day dosing of desoxycorticosterone pivalate in dogs with hypoadrenocorticism. J Vet Intern Med. 2014;28(4):1214-1220.', publisher: 'JVIM' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Addison's Disease in Dogs — Vague Signs | Dog.com", description: "Addison's disease (hypoadrenocorticism) is the 'great imitator' — vague signs mimic many conditions. Addisonian crisis is life-threatening.", path: '/health/addisons-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Addison's Disease in Dogs", description: "Hypoadrenocorticism — diagnosis, Addisonian crisis management, and DOCP treatment.", url: 'https://dog.com/health/addisons-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: "Addison's Disease in Dogs", description: "Canine hypoadrenocorticism — signs, diagnosis, crisis management, and lifelong treatment.", url: 'https://dog.com/health/addisons-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: "What are the symptoms of Addison's disease in dogs?", answer: "The signs are genuinely non-specific, which is why Addison's is called 'the great imitator': intermittent vomiting, diarrhea, and appetite loss that waxes and wanes, weakness and lethargy that comes and goes, gradual weight loss, and a dog that is 'just not right.' A characteristic pattern is stress-induced GI illness followed by apparent recovery — a stressed dog crosses the crisis threshold its failing adrenals cannot meet, then seems improved when the stress passes. That pattern should prompt your veterinarian to run an electrolyte panel." },
  { question: "What is an Addisonian crisis?", answer: "The life-threatening emergency form of the disease: acute collapse, profound weakness, a slow heart rate (from elevated potassium's effect on the heart), low blood pressure, and shock. The hyperkalemia can cause dangerous cardiac arrhythmias. Many dogs are first diagnosed this way — a dog that was intermittently unwell arrives in acute cardiovascular collapse. This is an immediate emergency-vet situation; hospital treatment is IV saline resuscitation, IV dexamethasone, and cardiac monitoring." },
  { question: "How is Addison's disease in dogs diagnosed?", answer: "The classic laboratory clue is the electrolyte panel: elevated potassium (hyperkalemia) and low sodium (hyponatremia), with a sodium:potassium ratio below 27. Without that panel, the vague GI signs are easily treated empirically and the diagnosis missed for months. Confirmation is the ACTH stimulation test — in an Addisonian dog, cortisol fails to rise appropriately after ACTH injection. Dexamethasone is used during crisis stabilization specifically because it does not interfere with this test." },
  { question: "What is the treatment for Addison's disease in dogs?", answer: "Lifelong hormone replacement, prescribed and dosed by a veterinarian. The two main options on this page: DOCP (Percorten-V), an injectable mineralocorticoid given roughly every 25–28 days plus a separate low-dose glucocorticoid such as prednisone; or fludrocortisone (Florinef), a daily oral tablet that covers both hormone types in many dogs. During stress (travel, boarding, illness, procedures) the glucocorticoid dose is temporarily increased — ask your veterinarian for a written stress-dosing protocol." },
  { question: "What is the life expectancy of a dog with Addison's disease?", answer: "With appropriate treatment, normal. Addison's is one of the most manageable chronic conditions in veterinary medicine — treated dogs live full-quality lives with normal lifespans, and many owners describe their dogs as transformed once adequate hormone replacement is established. Annual rechecks with electrolyte monitoring keep the dosing appropriate as the dog ages." },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function AddisonsDiseaseePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: "Addison's Disease in Dogs", subtitle: "Hypoadrenocorticism (Addison's disease) results from insufficient production of adrenal cortex hormones — glucocorticoids (primarily cortisol) and mineralocorticoids (primarily aldosterone). It is sometimes called 'the great imitator' because its signs are vague and non-specific, leading to misdiagnosis for months or years before the characteristic electrolyte changes point to the diagnosis.", category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: "Addison's Disease", href: '/health/addisons-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: "Cushing's Disease", href: '/health/cushing-disease', category: 'Dog Health' }, { title: 'Hypothyroidism', href: '/health/hypothyroidism', category: 'Dog Health' }, { title: 'Megaesophagus', href: '/health/megaesophagus', category: 'Dog Health' }, { title: 'Kidney Disease', href: '/health/dog-kidney-disease', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['Standard Poodle (highest prevalence)', 'Portuguese Water Dog', 'Soft-Coated Wheaten Terrier', 'Nova Scotia Duck Tolling Retriever', 'Bearded Collie', 'Great Dane', 'Rottweiler'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Megaesophagus', href: '/health/megaesophagus' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-addisons" />
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
          <p><strong>DOCP (Percorten-V / desoxycorticosterone pivalate):</strong> Injectable mineralocorticoid given every 25-28 days (the standard) or every 21-30 days depending on electrolyte response. Widely used in the US. Requires a separate veterinarian-prescribed glucocorticoid (typically prednisone at a low physiologic dose determined by a veterinarian) since DOCP provides only mineralocorticoid activity. Dogs typically do very well on this regimen.</p>
          <p><strong>Fludrocortisone (Florinef):</strong> Oral tablet daily. Provides both mineralocorticoid and some glucocorticoid activity. Easier for owners who struggle with injections. Some dogs require an additional low-dose prednisone supplement. Requires daily dosing compliance.</p>
          <p>During periods of stress (travel, veterinary procedures, illness, boarding), the glucocorticoid dose is temporarily increased ("stress dosing") to cover the increased demand. Ask your veterinarian for a written stress-dosing protocol — how much to give, and when — and keep oral prednisone on hand as they direct.</p>

          <h2 id="prognosis">Long-Term Prognosis</h2>
          <p>Addison's disease is one of the most manageable chronic conditions in veterinary medicine — with appropriate treatment, Addisonian dogs live normal, full-quality lives with normal lifespans. The majority of owners describe their dogs as transformed after diagnosis and treatment begins — the dog that had been intermittently unwell for months becomes consistently well, energetic, and normal once adequate hormone replacement is established. Annual rechecks with electrolyte monitoring ensure treatment is appropriately dosed as the dog ages.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
