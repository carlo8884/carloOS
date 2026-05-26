import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: "Cushing's Disease in Dogs — Signs, Testing & Trilostane Treatment | Dog.com", description: "Cushing's syndrome (hyperadrenocorticism) causes a pot-bellied appearance, excessive drinking, and hair loss. Testing requires a LDDS or ACTH stim test — not a routine panel. DVM guide.", path: '/health/cushing-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: "Cushing's Disease in Dogs", description: "Signs, diagnostic testing, and trilostane treatment for canine Cushing's syndrome.", url: 'https://dog.com/health/cushing-disease', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Cushing's Disease in Dogs", description: "Hyperadrenocorticism — diagnosis and treatment.", url: 'https://dog.com/health/cushing-disease', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function CushingDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: "Cushing's Disease in Dogs", subtitle: "Hyperadrenocorticism — Cushing's syndrome — is caused by chronic cortisol excess. It is one of the most commonly misdiagnosed conditions in middle-aged and older dogs because its signs resemble normal aging. The classic presentation: a middle-aged dog that is drinking more, has a pot belly, is losing hair, and seems lethargic.", category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '10 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: "Cushing's Disease", href: '/health/cushing-disease' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Classic Signs', href: '#signs' }, { label: 'PDH vs ADH', href: '#types' }, { label: 'Diagnostic Tests', href: '#tests' }, { label: 'Treatment', href: '#treatment' }, { label: 'Monitoring', href: '#monitoring' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Classic Signs</div>
            {['PU/PD (drinking/urinating excessively)', 'Pot-bellied appearance', 'Bilateral symmetrical hair loss', 'Thin, fragile skin', 'Muscle weakness/wasting', 'Increased appetite', 'Panting excessively', 'Recurrent skin/UTI infections'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Diabetes', href: '/health/dog-diabetes' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-cushings" />
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
        </div>
      </ArticleLayout>
    </>
  )
}
