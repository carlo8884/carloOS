import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, PullQuote, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Hypothyroidism in Dogs -- Weight Gain, Skin Changes | Dog.com', description: 'Hypothyroidism is the most common endocrine disorder in dogs. Weight gain without increased appetite, coat changes, and lethargy are the classic signs.', path: '/health/hypothyroidism', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and levothyroxine treatment for canine hypothyroidism.', url: 'https://dog.com/health/hypothyroidism', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and levothyroxine treatment for canine hypothyroidism.', url: 'https://dog.com/health/hypothyroidism', authorName: 'Dog.com Editorial', lastReviewed: '2026-06-05' })
const FAQS = [
  { question: 'What are the signs of hypothyroidism in dogs?', answer: 'The textbook presentation is a middle-aged dog (most commonly 4–10 years) gaining weight despite no increase in food intake, with lethargy and exercise intolerance, and coat or skin changes — bilaterally symmetrical hair loss, a dull or brittle coat, thickened skin, and secondary skin infections. Other signs: cold intolerance (seeking warm spots), a slowed heart rate, facial puffiness (the "tragic face"), and mild anemia. Because these changes develop gradually and mimic normal aging, hypothyroidism is one of the most frequently overlooked diagnoses — a single blood panel can confirm or rule it out.' },
  { question: 'How is hypothyroidism diagnosed in dogs?', answer: 'Total T4 (TT4) is the usual screening test — a low TT4 in a dog with appropriate clinical signs is strongly suggestive. But any sick dog can have a falsely low TT4 (euthyroid sick syndrome), so a low value in an ill dog should not be over-read. Free T4 by equilibrium dialysis (fT4ed) is the preferred confirmatory test, and an elevated cTSH combined with low fT4ed provides high diagnostic confidence. Testing is unreliable in dogs that are sick, on corticosteroids, or on phenobarbital — your veterinarian will confirm once the dog is stable.' },
  { question: 'What is the treatment for hypothyroidism in dogs?', answer: 'Lifelong levothyroxine (synthetic T4 — veterinary brands include Soloxine and Thyro-Tabs), given once or twice daily at a dose your veterinarian determines from body weight and overall health. The response is one of the most rewarding in small animal medicine: improved energy within 2–4 weeks, visible coat improvement within 6–8 weeks, and weight loss over several months when combined with appropriate diet.' },
  { question: 'Can I give my dog human thyroid medication like Synthroid?', answer: 'Not recommended. Human levothyroxine formulations differ in absorption characteristics from veterinary products, making dosing less predictable in dogs. Veterinary-specific levothyroxine gives the most consistent results — and the prescription, dose, and any substitution decisions belong with your veterinarian.' },
  { question: 'How often does a dog on thyroid medication need monitoring?', answer: 'Per this page: a post-pill T4 level (drawn 4–6 hours after the morning pill) at 4–8 weeks after starting or adjusting the dose, then every 6 months once stable. The target is a T4 in the upper half of normal at that post-pill timing. Underdosing leaves the dog symptomatic; overdosing causes restlessness, increased appetite, weight loss, and a rapid heart rate. Dose adjustments are common in the first year, after which most dogs remain stable.' },
]
const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function HypothyroidismPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Hypothyroidism in Dogs', subtitle: 'Hypothyroidism -- insufficient thyroid hormone production -- is the most common endocrine disorder in dogs. It affects metabolism, energy, skin, and cognition. It is easily managed with once or twice daily medication and dramatically improves quality of life once treated.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Hypothyroidism', href: '/health/hypothyroidism' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: "Cushing's Disease", href: '/health/cushing-disease', category: 'Dog Health' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: 'Dog Skin Allergies', href: '/health/dog-skin-allergies', category: 'Dog Health' }]}
        contentType="health"
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Predisposed Breeds</div>
            {['Golden Retriever', 'Labrador Retriever', 'Doberman Pinscher', 'Irish Setter', 'Great Dane', 'Boxer', 'Cocker Spaniel', 'Dachshund'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Health Hub', href: '/health' }, { label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-hypothyroidism" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />

          <DropCap>Hypothyroidism is the most common endocrine disorder diagnosed in dogs, yet it is also one of the most frequently overlooked -- because its signs develop gradually and mirror the changes many owners attribute to normal middle age. Weight gain despite stable food intake, a coat that seems to have lost its shine, and a dog that seems perpetually tired are the hallmarks. A single blood panel can confirm or rule out the diagnosis, and once levothyroxine treatment begins, the transformation in energy, coat, and body condition is among the most rewarding recoveries in small animal medicine.</DropCap>

          <h2>Classic Signs -- What to Look For</h2>
          <p>The textbook presentation of hypothyroidism is a middle-aged dog (most commonly 4-10 years) with weight gain despite no increase in food intake, lethargy and exercise intolerance, and coat/skin changes -- symmetrical hair loss (bilaterally symmetrical -- same areas on both sides of the body), dull or brittle coat, thickening of the skin, and secondary skin infections. Other signs include: cold intolerance (seeking warm spots, reluctant to go outside in cold weather), slowed heart rate, facial puffiness ("tragic face" -- accumulation of mucopolysaccharides in facial skin), and mild to moderate anemia.</p>
          <p>Neurological signs occur in a subset of cases -- peripheral neuropathy causing weakness, knuckling of paws, or facial nerve paralysis. These resolve with appropriate treatment in most cases. The neurological presentation can be mistaken for other conditions -- hypothyroidism should be in the differential for any middle-aged dog with unexplained neurological signs.</p>

          <PullQuote
            variant="inline"
            quote="Response to levothyroxine treatment is dramatic -- most owners notice improved energy within 2-4 weeks and visible coat improvement within 6-8 weeks."
            attribution="Merck Veterinary Manual -- Hypothyroidism in Dogs"
          />

          <h2>Diagnosis</h2>
          <p>Total T4 (TT4) is the most common initial screening test -- a low TT4 in a dog with appropriate clinical signs is strongly suggestive of hypothyroidism. However, non-thyroidal illness ("euthyroid sick syndrome") can suppress TT4 without true hypothyroidism -- any sick dog can have a falsely low TT4. For this reason, a low TT4 in a sick dog should not be interpreted as hypothyroidism until the dog is stable.</p>
          <p>Free T4 by equilibrium dialysis (fT4ed) is more specific and less affected by non-thyroidal illness -- it is the preferred confirmatory test. cTSH (canine thyroid stimulating hormone) is elevated in hypothyroid dogs as the pituitary tries to stimulate the underperforming thyroid -- an elevated cTSH combined with low fT4ed provides high confidence for hypothyroidism. Thyroglobulin autoantibodies (TgAA) identify dogs with lymphocytic thyroiditis (the immune-mediated cause of most canine hypothyroidism) -- present in approximately 50% of hypothyroid dogs.</p>

          <CalloutBox variant="note" title="Euthyroid sick syndrome -- a common diagnostic pitfall">
            Any acutely ill dog may show a falsely suppressed TT4 from non-thyroidal illness. Thyroid testing in a dog that is sick, on corticosteroids, or on phenobarbital is unreliable. Confirm results once the dog is stable, and use fT4ed plus cTSH together for equivocal cases.
          </CalloutBox>

          <h2>Treatment -- Levothyroxine for Life</h2>
          <p>Levothyroxine (synthetic T4 -- brand names include Soloxine, Thyro-Tabs, Nutri-Vet) is a veterinarian-prescribed medication given once or twice daily; the starting dose must be determined by a veterinarian based on the dog's body weight and overall health. Response to treatment is dramatic and rewarding -- most owners notice improved energy and attitude within 2-4 weeks, coat improvement within 6-8 weeks, and weight loss (combined with appropriate diet) over several months.</p>
          <p>Monitoring: post-pill T4 levels (measured 4-6 hours after morning pill) at 4-8 weeks after starting or dose-adjusting, then every 6 months once stable. The target is T4 in the upper half of the normal range at the 4-6 hour post-pill measurement. Underdosing leaves the dog symptomatic; overdosing causes signs of hyperthyroidism (restlessness, increased appetite, weight loss, rapid heart rate). Dose adjustments are common in the first year and then the dog typically remains stable.</p>
          <p>Human levothyroxine (Synthroid) is not recommended -- the formulation and absorption characteristics differ from veterinary products and dosing is less predictable in dogs. Use veterinary-specific levothyroxine products for the most consistent results.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList
            sources={[
              {
                label: 'Merck Veterinary Manual -- Hypothyroidism in Dogs: signs, diagnosis, and levothyroxine management',
                url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hypothyroidism-in-animals',
                publisher: 'Merck Veterinary Manual',
              },
              {
                label: 'ACVIM Consensus Statement on the Diagnosis of Hypothyroidism in Dogs',
                url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.12789',
                publisher: 'J Vet Intern Med (Mooney et al., 2014)',
              },
              {
                label: 'Thyroglobulin autoantibody prevalence and lymphocytic thyroiditis in hypothyroid dogs',
                url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.12494',
                publisher: 'J Vet Intern Med (Graham et al., 2007)',
              },
              {
                label: 'Scott-Moncrieff JC -- Hypothyroidism in Textbook of Veterinary Internal Medicine (Ettinger and Feldman, 7th ed.)',
                publisher: 'Elsevier Saunders',
              },
            ]}
          />
        </div>
      </ArticleLayout>
    </>
  )
}
