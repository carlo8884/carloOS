import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hyperadrenocorticism (Cushing\'s Disease) in Dogs', url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hyperadrenocorticism-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Diagnosis and Treatment of Hyperadrenocorticism in Dogs — Consensus Guidelines', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Cushing\'s Disease (Hyperadrenocorticism) in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Feldman EC et al. Use of low- and high-dose dexamethasone tests for distinguishing pituitary-dependent from adrenal tumor hyperadrenocorticism in dogs. J Am Vet Med Assoc. 1996;209(4):772-775.', publisher: 'JAVMA' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Cushing's Disease in Dogs — Signs, Testing | Dog.com", description: "Cushing's syndrome (hyperadrenocorticism) causes a pot-bellied appearance, excessive drinking, and hair loss. Testing requires a LDDS or ACTH stim test", path: '/health/cushing-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Cushing's Disease in Dogs", description: "Signs, diagnostic testing, and trilostane treatment for canine Cushing's syndrome.", url: 'https://dog.com/health/cushing-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Cushing's Disease in Dogs", description: "Hyperadrenocorticism — diagnosis and treatment.", url: 'https://dog.com/health/cushing-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What are the symptoms of Cushing\'s disease in dogs?', answer: 'The classic presentation in a middle-aged or older dog: drinking and urinating dramatically more (PU/PD — sometimes needing to go out multiple times at night), a pot-bellied appearance (from liver enlargement and weakened abdominal muscles, not fat), bilateral symmetrical hair loss starting at the flanks, thin fragile skin, muscle weakness, increased appetite, excessive panting, and recurrent skin or urinary tract infections. The signs develop slowly over 1–2 years and are commonly mistaken for normal aging — which is why Cushing\'s is one of the most misdiagnosed conditions in older dogs.' },
  { question: 'How do vets test for Cushing\'s disease?', answer: 'Routine bloodwork (elevated ALP, dilute urine, stress leukogram) is suggestive but cannot confirm Cushing\'s. The screening test is the urine cortisol:creatinine ratio collected at home — a normal result effectively rules Cushing\'s out. Confirmation usually uses the low-dose dexamethasone suppression test (LDDS), a day-long clinic test that also helps differentiate pituitary from adrenal disease, or the ACTH stimulation test. Abdominal ultrasound assesses adrenal size and symmetry.' },
  { question: 'What is the difference between pituitary and adrenal Cushing\'s?', answer: 'Pituitary-dependent (PDH) accounts for 85–90% of cases: a small pituitary tumor produces excess ACTH that drives both adrenal glands to overproduce cortisol; treatment is medical (trilostane or mitotane). Adrenal-dependent (ADH) accounts for 10–15%: a tumor on one adrenal gland autonomously produces cortisol; treatment is surgical removal by a specialist. The LDDS test plus ultrasound (both adrenals enlarged in PDH; one enlarged and one atrophied in ADH) distinguishes them.' },
  { question: 'What is the treatment for Cushing\'s disease in dogs?', answer: 'For pituitary-dependent disease, trilostane (Vetoryl) is the preferred medical treatment in most cases — a daily oral medication that blocks cortisol synthesis, taking effect within weeks. Mitotane is an older alternative. For adrenal tumors, surgical removal of the affected gland by a board-certified surgeon offers a high cure rate for adenomas. All medical management requires ongoing monitoring, and treatment selection is your veterinarian\'s call based on the type and the individual dog.' },
  { question: 'Is trilostane dangerous for dogs?', answer: 'It requires respect and monitoring rather than fear. The primary risk is over-suppression of cortisol causing adrenal insufficiency (an Addisonian crisis) — signs are weakness, vomiting, and collapse, and it is a medical emergency. That is why ACTH stimulation testing is required 10–14 days after starting or changing the dose, then every 3 months once stable, and any time the dog seems ill. Owners of dogs on trilostane should also have an Addison\'s emergency kit prescribed. It is not a "set and forget" medication.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function CushingDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: "Cushing's Disease in Dogs", subtitle: "Hyperadrenocorticism — Cushing's syndrome — is caused by chronic cortisol excess. It is one of the most commonly misdiagnosed conditions in middle-aged and older dogs because its signs resemble normal aging. The classic presentation: a middle-aged dog that is drinking more, has a pot belly, is losing hair, and seems lethargic.", category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: "Cushing's Disease", href: '/health/cushing-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Hypothyroidism', href: '/health/hypothyroidism', category: 'Dog Health' }, { title: 'Dog Diabetes', href: '/health/dog-diabetes', category: 'Dog Health' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: "Addison's Disease", href: '/health/addisons-disease', category: 'Dog Health' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Classic Signs', href: '#signs' }, { label: 'PDH vs ADH', href: '#types' }, { label: 'Diagnostic Tests', href: '#tests' }, { label: 'Treatment', href: '#treatment' }, { label: 'Monitoring', href: '#monitoring' }, { label: 'FAQ', href: '#faq' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Classic Signs</div>
            {['PU/PD (drinking/urinating excessively)', 'Pot-bellied appearance', 'Bilateral symmetrical hair loss', 'Thin, fragile skin', 'Muscle weakness/wasting', 'Increased appetite', 'Panting excessively', 'Recurrent skin/UTI infections'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Diabetes', href: '/health/dog-diabetes' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Cushing&apos;s + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Cortisol control is lifelong</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Cushing&apos;s management — trilostane/mitotane, ACTH-stim recheck panels, endocrinology consults — typically runs $3,000-$8,000+ over the dog&apos;s lifetime. Insurance covers it if enrolled before diagnosis.</p>
            <a href="/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-cushings" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="signs">Signs — What Owners Notice</h2>
          <p>The signs of Cushing's develop slowly — owners often attribute them to normal aging over 1–2 years before diagnosis. The most common clinical presentation: <strong>polyuria/polydipsia (PU/PD)</strong> — the dog drinks and urinates dramatically more than before, sometimes needing to go outside multiple times at night. <strong>Pot-bellied appearance</strong> — the abdomen enlarges not from fat but from organ enlargement (liver hepatomegaly) and muscle weakness causing the abdominal muscles to relax. <strong>Bilateral symmetrical hair loss</strong> — the coat thins symmetrically, beginning at the flanks. <strong>Skin changes</strong> — the skin becomes thin, loses elasticity, and may develop calcium deposits (calcinosis cutis), blackheads (comedones), and fragile blood vessels that bruise easily. Recurrent skin infections and urinary tract infections occur because cortisol suppresses immune function.</p>

          <h2 id="types">PDH vs ADH — Two Different Causes</h2>
          <p><strong>Pituitary-dependent hyperadrenocorticism (PDH)</strong> accounts for 85–90% of cases. A pituitary tumor (usually a microadenoma — too small to see on standard imaging) produces excess ACTH, which drives both adrenal glands to overproduce cortisol. Treatment is medical (trilostane or mitotane). MRI may reveal the pituitary tumor if it is large enough to cause neurological signs (macroadenoma — a serious complication).</p>
          <p><strong>Adrenal-dependent hyperadrenocorticism (ADH)</strong> accounts for 10–15% of cases. A tumor (adenoma or carcinoma) on one adrenal gland autonomously produces excess cortisol. Treatment is surgical removal of the affected adrenal — a complex procedure with significant perioperative risk performed by a specialist. Bilateral adrenal involvement is rare but possible.</p>
          <p>Distinguishing PDH from ADH requires the low-dose dexamethasone suppression test (LDDS) followed by abdominal ultrasound — adrenal size and symmetry helps differentiate. Both adrenal glands are enlarged in PDH; one is enlarged (the tumor-bearing gland) and one is atrophied in ADH.</p>

          <h2 id="tests">Diagnostic Tests — Why Routine Panels Aren't Enough</h2>
          <p>Routine bloodwork often shows changes consistent with Cushing's: elevated alkaline phosphatase (ALP — often dramatically elevated), mild elevation of ALT, mild hyperglycemia, dilute urine on urinalysis, and a "stress leukogram" (elevated white cells with specific pattern). These findings are suggestive but not diagnostic — they support investigating Cushing's but cannot confirm it.</p>
          <p><strong>Urine cortisol:creatinine ratio (UCCR):</strong> Screening test — collected at home first thing in the morning. High sensitivity (catches most true cases) but low specificity (many stressed or otherwise ill dogs have elevated UCCR without Cushing's). A normal UCCR effectively rules out Cushing's. An elevated UCCR requires confirmatory testing.</p>
          <p><strong>Low-dose dexamethasone suppression test (LDDS):</strong> The most commonly used confirmatory test. Dexamethasone is injected and cortisol is measured at 4 and 8 hours. Dogs with Cushing's fail to suppress cortisol normally. Also helps differentiate PDH from ADH based on suppression patterns. Requires a day at the clinic.</p>
          <p><strong>ACTH stimulation test:</strong> Measures cortisol before and after synthetic ACTH injection. Less sensitive than LDDS for PDH but the required monitoring test during trilostane therapy. Also distinguishes iatrogenic Cushing's (caused by exogenous steroid administration) from true Cushing's.</p>

          <h2 id="treatment">Treatment</h2>
          <p><strong>Trilostane (Vetoryl):</strong> The preferred medical treatment for PDH in most cases. Blocks cortisol synthesis by inhibiting an adrenal enzyme (3β-HSD). Daily oral administration — once or twice daily depending on response. Takes effect within weeks. Requires regular monitoring. The primary risk: over-suppression causing adrenal insufficiency (Addisonian crisis) — a medical emergency. Signs of over-suppression: weakness, vomiting, collapse. An Addison's emergency kit (injectable dexamethasone) should be prescribed for owners of dogs on trilostane.</p>
          <p><strong>Mitotane (Lysodren):</strong> An older alternative — selectively destroys adrenal cortex cells. Induction phase then maintenance dosing. Higher risk of irreversible adrenal destruction (permanent Addison's disease). Less commonly used since trilostane became available but still appropriate in some cases.</p>
          <p><strong>Surgery:</strong> For adrenal-dependent Cushing's — removal of the tumor-bearing adrenal gland by a board-certified surgeon. High cure rate for adenomas but requires careful perioperative management (the suppressed contralateral adrenal must "wake up" post-surgery). Adrenocortical carcinoma has more variable prognosis depending on invasion and metastasis.</p>

          <h2 id="monitoring">Monitoring on Trilostane</h2>
          <p>ACTH stimulation testing is required 10–14 days after starting or changing trilostane dose, then every 3 months once stable, and any time the dog shows signs of illness or weakness. Target post-ACTH cortisol: 1.45–5.4 μg/dL (lab-specific reference ranges may vary). Values below this indicate over-suppression — dose reduction. Values above this with persistent clinical signs indicate underdosing. Trilostane management requires commitment to regular monitoring — it is not a "set and forget" medication.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
