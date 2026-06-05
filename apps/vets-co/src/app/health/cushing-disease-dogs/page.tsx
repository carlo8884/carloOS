import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Cushing's Disease in Dogs — PUPD, Pot Belly | Vets.co", description: "Cushing's disease (hyperadrenocorticism) causes a classic PUPD-pot belly-panting presentation. PDH vs adrenal tumor, LDDS test, and trilostane management.", path: '/health/cushing-disease-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: "Cushing's Disease in Dogs", description: "PDH vs adrenal tumor, LDDS testing, and trilostane treatment for canine hyperadrenocorticism.", url: 'https://vets.co/health/cushing-disease-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-05T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: "Cushing's Disease in Dogs", description: "Signs, testing, and trilostane treatment for canine hyperadrenocorticism.", url: 'https://vets.co/health/cushing-disease-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-05' })
const combined = combineSchemas(schema, med)

const SOURCES = [
  { label: 'Behrend EN et al. Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement. J Vet Intern Med. 2013;27(6):1292-1304.', publisher: 'ACVIM / JVIM' },
  { label: 'Feldman EC, Nelson RW. Canine hyperadrenocorticism. In: Canine and Feline Endocrinology and Reproduction. 3rd ed. Saunders, 2004.', publisher: 'Saunders' },
  { label: 'Merck Veterinary Manual: Hyperadrenocorticism in Animals', url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hyperadrenocorticism-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Cushing\'s Disease in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/cushings-disease', publisher: 'AVMA' },
  { label: 'Ramsey IK. Trilostane in dogs. Vet Clin North Am Small Anim Pract. 2010;40(2):269-283.', publisher: 'Vet Clin North Am' },
]

const FAQS = [
  { question: "How is Cushing's disease different from diabetes?", answer: "Both cause excessive thirst and urination (PU/PD), but Cushing's disease is driven by excess cortisol from an adrenal or pituitary tumor, while diabetes is a failure of glucose regulation from insulin deficiency or resistance. In Cushing's, blood glucose is usually normal or mildly elevated (cortisol is a glucose-raising hormone), but it is not the primary finding. The two conditions can co-occur: Cushing's is a recognized cause of insulin resistance that can trigger or worsen diabetes. Distinguishing and treating both simultaneously is a clinical challenge that requires specialist input." },
  { question: "What is the risk of adrenal crisis with trilostane?", answer: "Trilostane blocks cortisol synthesis, and if the dose is too high, it can cause adrenal insufficiency — a life-threatening drop in cortisol and aldosterone. Signs include sudden vomiting, diarrhea, weakness, collapse, and shaking. This is why monitoring with ACTH stimulation testing is mandatory after each dose change: the therapeutic window is narrow, and a dog that is underdosed (poor control) versus overdosed (adrenal crisis risk) needs careful laboratory-guided adjustment. Owners should know the signs of adrenal crisis and have an emergency contact plan with their veterinarian." },
  { question: "Can Cushing's disease be cured?", answer: "PDH (the pituitary-dependent form, 85% of cases) is managed but rarely cured with medical treatment — trilostane controls cortisol but does not remove the pituitary tumor. Radiation therapy targets the pituitary tumor but is not widely available. Adrenal-dependent Cushing's (15% of cases) can be cured with successful surgical removal of the adrenal tumor, provided it is a benign adenoma. Adrenocortical carcinoma has a more guarded outlook. For most dogs with PDH on trilostane, the prognosis is good — median survival of over two years from diagnosis is commonly reported." },
]

export default function CushingsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: "Cushing's Disease in Dogs", subtitle: "Hyperadrenocorticism (Cushing's disease) results from chronic excess cortisol. It is one of the most commonly diagnosed endocrine diseases in middle-aged to older dogs. The clinical signs are characteristic and slowly progressive — which is also why many owners attribute them to 'normal aging' for a year or two before diagnosis.", category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: "Cushing's Disease", href: '/health/cushing-disease-dogs' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats', category: 'Veterinary Guide' },
          { title: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
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
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats' }, { label: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-cushings" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-05T00:00:00Z" reviewedBy="Editorial team" />

          <DropCap>Pituitary-dependent hyperadrenocorticism (PDH) accounts for approximately 85% of Cushing's cases: a tumor (usually a small microadenoma) in the pituitary gland overproduces ACTH, which chronically overstimulates both adrenal glands to produce excess cortisol, resulting in bilateral adrenal hyperplasia. The remaining 15% is adrenal-dependent — a tumor in one adrenal gland autonomously overproduces cortisol regardless of pituitary input, and the opposite adrenal gland atrophies from suppressed ACTH. The distinction matters because it determines whether surgery is the definitive treatment.</DropCap>

          <h2>Adrenal-Dependent Hyperadrenocorticism (ADH)</h2>
          <p>An adrenal tumor autonomously overproduces cortisol regardless of pituitary input. The contralateral adrenal gland is typically small (atrophied from suppressed ACTH). Treatment: surgical adrenalectomy is the definitive treatment — medical management with trilostane or mitotane is an alternative when surgery is not possible. Prognosis depends on whether the adrenal tumor is benign or malignant — adenoma (benign) has excellent prognosis with surgery; adrenocortical carcinoma has guarded prognosis.</p>

          <h2>Diagnosis — The LDDS Test</h2>
          <p>The low-dose dexamethasone suppression test (LDDS) is the most commonly used screening test for Cushing's disease. A small dose of dexamethasone is administered intravenously — in a normal dog, this suppresses pituitary ACTH production and therefore cortisol; in a dog with PDH or ADH, cortisol does not suppress appropriately. Blood samples at 0 hours, 4 hours, and 8 hours map the suppression pattern. Sensitivity approximately 90-95% — the LDDS misses some cases, so a negative test in a dog with strong clinical signs warrants consideration of repeat testing or alternative evaluation.</p>
          <p>The ACTH stimulation test is used after diagnosis to monitor treatment response — it is less sensitive as a diagnostic test but very useful for checking whether trilostane dosing is adequate. Urine cortisol:creatinine ratio (UCCR) on a urine sample collected at home is a sensitive screening test — a normal UCCR essentially rules out Cushing's in most clinical presentations.</p>
          <p>Abdominal ultrasound differentiates PDH (both adrenals enlarged) from ADH (one adrenal enlarged, one atrophied) and screens for adrenal mass, metastasis, and concurrent abdominal disease.</p>

          <PullQuote
            variant="inline"
            quote="The ACTH stimulation test is used after diagnosis to monitor treatment response — it is less sensitive as a diagnostic test but very useful for checking whether trilostane dosing is adequate."
            attribution="Vets.co Editorial"
          />

          <h2>Trilostane — Current Standard Treatment</h2>
          <p>Trilostane (Vetoryl) blocks an enzyme in the adrenal cortex required for cortisol synthesis. It is veterinarian-prescribed and given once or twice daily with food; the starting dose must be determined by a veterinarian based on the dog's condition and overall health. The goal is to reduce cortisol production to the lower half of the normal range — not to eliminate it (adrenal insufficiency from overdosing is a life-threatening complication).</p>

          <CalloutBox variant="evidence" title="ACVIM consensus: LDDS sensitivity and monitoring targets">
            The 2012 ACVIM Consensus Statement on canine hyperadrenocorticism cites the LDDS test as the recommended first-line screening test, with approximately 85-95% sensitivity for PDH. Post-ACTH cortisol monitoring targets for trilostane therapy are 1-5 microg/dL at 4-6 hours post-pill; values below 1 microg/dL indicate overdosing risk and values above 9 microg/dL indicate inadequate control.
          </CalloutBox>

          <p>Monitoring: ACTH stimulation test 10-14 days after starting or dose adjusting, then every 3-6 months when stable. Pre-pill cortisol (measured just before the morning trilostane dose) is an increasingly used monitoring approach. Signs of adrenal crisis from trilostane overdose — vomiting, diarrhea, lethargy, weakness, shaking — are a medical emergency requiring IV fluids and steroid supplementation.</p>

          <h2>Iatrogenic Cushing's — Steroid-Induced</h2>
          <p>Chronic administration of corticosteroids (prednisone, dexamethasone, methylprednisolone — including long-acting injections) suppresses the hypothalamic-pituitary-adrenal axis and can produce all the classic Cushing's signs — PU/PD, pot belly, panting, hair loss, thin skin — indistinguishable from natural Cushing's. The ALP elevation on chemistry from corticosteroids (steroid-induced ALP) is often the first laboratory clue. Treatment: gradual corticosteroid tapering under veterinary guidance (never stop abruptly — the adrenals have become suppressed and need time to recover). LDDS and ACTH stimulation results will be abnormal while corticosteroids are being tapered — testing during taper is unreliable for diagnosis of natural Cushing's.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
