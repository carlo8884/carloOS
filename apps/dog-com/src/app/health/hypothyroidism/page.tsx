import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Hypothyroidism in Dogs — Weight Gain, Skin Changes & Levothyroxine | Dog.com', description: 'Hypothyroidism is the most common endocrine disorder in dogs. Weight gain without increased appetite, coat changes, and lethargy are the classic signs. Lifelong levothyroxine is the treatment.', path: '/health/hypothyroidism', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and levothyroxine treatment for canine hypothyroidism.', url: 'https://dog.com/health/hypothyroidism', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and levothyroxine treatment for canine hypothyroidism.', url: 'https://dog.com/health/hypothyroidism', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function HypothyroidismPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Hypothyroidism in Dogs', subtitle: 'Hypothyroidism — insufficient thyroid hormone production — is the most common endocrine disorder in dogs. It affects metabolism, energy, skin, and cognition. It is easily managed with once or twice daily medication and dramatically improves quality of life once treated.', category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '8 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Hypothyroidism', href: '/health/hypothyroidism' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['Golden Retriever', 'Labrador Retriever', 'Doberman Pinscher', 'Irish Setter', 'Great Dane', 'Boxer', 'Cocker Spaniel', 'Dachshund'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-hypothyroidism" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Classic Signs — What to Look For</h2>
          <p>The textbook presentation of hypothyroidism is a middle-aged dog (most commonly 4–10 years) with weight gain despite no increase in food intake, lethargy and exercise intolerance, and coat/skin changes — symmetrical hair loss (bilaterally symmetrical — same areas on both sides of the body), dull or brittle coat, thickening of the skin, and secondary skin infections. Other signs include: cold intolerance (seeking warm spots, reluctant to go outside in cold weather), slowed heart rate, facial puffiness ("tragic face" — accumulation of mucopolysaccharides in facial skin), and mild to moderate anemia.</p>
          <p>Neurological signs occur in a subset of cases — peripheral neuropathy causing weakness, knuckling of paws, or facial nerve paralysis. These resolve with appropriate treatment in most cases. The neurological presentation can be mistaken for other conditions — hypothyroidism should be in the differential for any middle-aged dog with unexplained neurological signs.</p>

          <h2>Diagnosis</h2>
          <p>Total T4 (TT4) is the most common initial screening test — a low TT4 in a dog with appropriate clinical signs is strongly suggestive of hypothyroidism. However, non-thyroidal illness ("euthyroid sick syndrome") can suppress TT4 without true hypothyroidism — any sick dog can have a falsely low TT4. For this reason, a low TT4 in a sick dog should not be interpreted as hypothyroidism until the dog is stable.</p>
          <p>Free T4 by equilibrium dialysis (fT4ed) is more specific and less affected by non-thyroidal illness — it is the preferred confirmatory test. cTSH (canine thyroid stimulating hormone) is elevated in hypothyroid dogs as the pituitary tries to stimulate the underperforming thyroid — an elevated cTSH combined with low fT4ed provides high confidence for hypothyroidism. Thyroglobulin autoantibodies (TgAA) identify dogs with lymphocytic thyroiditis (the immune-mediated cause of most canine hypothyroidism) — present in approximately 50% of hypothyroid dogs.</p>

          <h2>Treatment — Levothyroxine for Life</h2>
          <p>Levothyroxine (synthetic T4 — brand names include Soloxine, Thyro-Tabs, Nutri-Vet) is given once or twice daily. Dosing starts at 0.02 mg/kg body weight per dose. Response to treatment is dramatic and rewarding — most owners notice improved energy and attitude within 2–4 weeks, coat improvement within 6–8 weeks, and weight loss (combined with appropriate diet) over several months.</p>
          <p>Monitoring: post-pill T4 levels (measured 4–6 hours after morning pill) at 4–8 weeks after starting or dose-adjusting, then every 6 months once stable. The target is T4 in the upper half of the normal range at the 4-6 hour post-pill measurement. Underdosing leaves the dog symptomatic; overdosing causes signs of hyperthyroidism (restlessness, increased appetite, weight loss, rapid heart rate). Dose adjustments are common in the first year and then the dog typically remains stable.</p>
          <p>Human levothyroxine (Synthroid) is not recommended — the formulation and absorption characteristics differ from veterinary products and dosing is less predictable in dogs. Use veterinary-specific levothyroxine products for the most consistent results.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
