import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Cushing's Disease in Dogs — PUPD, Pot Belly | Vets.co", description: "Cushing's disease (hyperadrenocorticism) causes a classic PUPD-pot belly-panting presentation. PDH vs adrenal tumor, LDDS test, and trilostane management.", path: '/health/cushing-disease-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: "Cushing's Disease in Dogs", description: "PDH vs adrenal tumor, LDDS testing, and trilostane treatment for canine hyperadrenocorticism.", url: 'https://vets.co/health/cushing-disease-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Cushing's Disease in Dogs", description: "Signs, testing, and trilostane treatment for canine hyperadrenocorticism.", url: 'https://vets.co/health/cushing-disease-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function CushingsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: "Cushing's Disease in Dogs", subtitle: "Hyperadrenocorticism (Cushing's disease) results from chronic excess cortisol. It is one of the most commonly diagnosed endocrine diseases in middle-aged to older dogs. The clinical signs are characteristic and slowly progressive — which is also why many owners attribute them to \"normal aging\" for a year or two before diagnosis.", category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: "Cushing's Disease", href: '/health/cushing-disease-dogs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Classic Signs</div>
            {[['PU/PD', 'Excessive drinking and urinating'], ['Pot belly', 'Muscle wasting + fat redistribution'], ['Panting', 'Even at rest, even in cool environments'], ['Hair loss', 'Bilateral symmetrical — flanks and trunk'], ['Thin skin', 'Easy bruising, visible vessels'], ['Lethargy', 'Reduced activity, exercise intolerance'], ['Recurrent infections', 'UTI, skin infections — immune compromise']].map(([s, d]) => (
              <div key={s} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{s}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Diabetes in Dogs', href: '/health/dog-diabetes' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-cushings" />
        </>}
      >
        <div className="carloOS-article">
          <h2>PDH vs Adrenal Tumor — Two Causes, Different Implications</h2>
          <p><strong>Pituitary-dependent hyperadrenocorticism (PDH) — 85% of cases:</strong> A tumor (usually microadenoma — small, non-invasive) in the pituitary gland produces excess ACTH, which chronically overstimulates the adrenal glands to produce excess cortisol. Both adrenal glands are enlarged (bilateral adrenal hyperplasia). Treatment: trilostane or mitotane (both medical, given orally). Prognosis: good with appropriate management — median survival 2+ years from diagnosis.</p>
          <p><strong>Adrenal-dependent hyperadrenocorticism (ADH) — 15% of cases:</strong> A tumor in one adrenal gland autonomously overproduces cortisol regardless of pituitary input. The contralateral adrenal gland is typically small (atrophied from suppressed ACTH). Treatment: surgical adrenalectomy is the definitive treatment — medical management with trilostane or mitotane is an alternative when surgery is not possible. Prognosis: depends on whether the adrenal tumor is benign or malignant — adenoma (benign) has excellent prognosis with surgery; adrenocortical carcinoma has guarded prognosis.</p>

          <h2>Diagnosis — The LDDS Test</h2>
          <p>The low-dose dexamethasone suppression test (LDDS) is the most commonly used screening test for Cushing's disease. A small dose of dexamethasone is administered intravenously — in a normal dog, this suppresses pituitary ACTH production and therefore cortisol; in a dog with PDH or ADH, cortisol does not suppress appropriately. Blood samples at 0 hours, 4 hours, and 8 hours map the suppression pattern. Sensitivity approximately 90–95% — the LDDS misses some cases, so a negative test in a dog with strong clinical signs warrants consideration of repeat testing or alternative evaluation.</p>
          <p>The ACTH stimulation test is used after diagnosis to monitor treatment response — it is less sensitive as a diagnostic test but very useful for checking whether trilostane dosing is adequate. Urine cortisol:creatinine ratio (UCCR) on a urine sample collected at home is a sensitive screening test — a normal UCCR essentially rules out Cushing's in most clinical presentations.</p>
          <p>Abdominal ultrasound differentiates PDH (both adrenals enlarged) from ADH (one adrenal enlarged, one atrophied) and screens for adrenal mass, metastasis, and concurrent abdominal disease.</p>

          <h2>Trilostane — Current Standard Treatment</h2>
          <p>Trilostane (Vetoryl) blocks an enzyme in the adrenal cortex required for cortisol synthesis. Given once or twice daily with food. Starting dose: 1-2 mg/kg once daily. The goal is to reduce cortisol production to the lower half of the normal range — not to eliminate it (adrenal insufficiency from overdosing is a life-threatening complication).</p>
          <p>Monitoring: ACTH stimulation test 10-14 days after starting or dose adjusting, then every 3-6 months when stable. Pre-pill cortisol (measured just before the morning trilostane dose) is an increasingly used monitoring approach. Target post-ACTH cortisol: 1-5 μg/dL. Above 9 μg/dL = underdosed. Below 1 μg/dL = overdosed, risk of adrenal crisis. Signs of adrenal crisis from trilostane overdose: vomiting, diarrhea, lethargy, weakness, shaking — a medical emergency requiring IV fluids and steroid supplementation.</p>

          <h2>Iatrogenic Cushing's — Steroid-Induced</h2>
          <p>Chronic administration of corticosteroids (prednisone, dexamethasone, methylprednisolone — including long-acting injections) suppresses the hypothalamic-pituitary-adrenal axis and can produce all the classic Cushing's signs — PU/PD, pot belly, panting, hair loss, thin skin — indistinguishable from natural Cushing's. The ALP elevation on chemistry from corticosteroids (steroid-induced ALP) is often the first laboratory clue. Treatment: gradual corticosteroid tapering under veterinary guidance (never stop abruptly — the adrenals have become suppressed and need time to recover). LDDS and ACTH stimulation results will be abnormal while corticosteroids are being tapered — testing during taper is unreliable for diagnosis of natural Cushing's.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
