import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Ear Infections in Dogs — Causes, Signs, Treatment | Vets.co", description: "Recurrent ear infections in dogs usually point to an underlying cause like allergies. Learn the signs, why infections recur, and how to manage them.", path: '/health/ear-infections-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Ear Infections in Dogs', description: 'Causes, signs, and management of canine otitis externa and ear infections.', url: 'https://vets.co/health/ear-infections-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Ear Infections in Dogs', description: 'Causes, signs, and treatment of ear infections in dogs.', url: 'https://vets.co/health/ear-infections-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why does my dog keep getting ear infections?", answer: "Recurrent ear infections are almost always a symptom of an underlying problem rather than a standalone disease — most commonly allergies (environmental or food), which inflame the ear canal and create the warm, moist environment bacteria and yeast thrive in. Other contributors include the ear's anatomy in floppy-eared and hairy-eared breeds, moisture from swimming, excess wax, foreign material like grass awns, and underlying hormonal disease. Treating the infection without addressing the underlying cause leads to the frustrating cycle of repeated infections." },
  { question: "Can I use leftover ear medication or home remedies?", answer: "No. Using leftover or over-the-counter products can be harmful: if the eardrum is ruptured (which the infection itself can cause), certain cleaners and medications can damage hearing and balance. The type of organism — bacteria, yeast, or both — and the state of the eardrum determine which medication is safe and effective, and only an exam with otoscopy and often cytology can establish that. Vinegar and peroxide home remedies can worsen inflammation. Always have a veterinarian examine the ear before treating." },
  { question: "How can I prevent ear infections?", answer: "Prevention depends on the underlying cause. For allergic dogs, controlling the allergy is the key, often with veterinary guidance. General measures help too: drying the ears thoroughly after swimming or baths, routine cleaning with a veterinarian-recommended ear cleaner for dogs prone to wax buildup, and keeping up with any prescribed allergy management. Avoid over-cleaning healthy ears, which can cause irritation. If infections keep recurring despite these steps, a workup for allergies or hormonal disease is warranted." },
]
const SOURCES = [
  { label: 'AAHA: Otitis Management Guidelines', url: 'https://www.aaha.org/aaha-guidelines/otitis/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Otitis Externa in Dogs', url: 'https://www.merckvetmanual.com/ear-disorders/diseases-of-the-outer-ear/otitis-externa-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Ear Infections in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/ear-infections-dogs', publisher: 'AVMA' },
]
export default function EarInfectionsDogsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Ear Infections in Dogs', subtitle: 'Ear infections are among the most common reasons dogs visit the veterinarian. A single infection is easily treated, but recurrent infections are a red flag for an underlying problem — usually allergies. Understanding why infections happen, and treating the root cause, is the difference between a one-time problem and a lifelong cycle.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Ear Infections', href: '/health/ear-infections-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs', category: 'Veterinary Guide' },
          { title: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Signs</div>
            {[['Head shaking', 'Repeated, persistent'], ['Scratching ears', 'Pawing, rubbing on floor'], ['Odor & discharge', 'Yeasty smell, brown or yellow'], ['Redness & pain', 'Sore, swollen canal']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Allergic Reactions in Dogs', href: '/health/allergic-reactions-dogs' }, { label: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-ear-infections" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Recurrence means look deeper">
            A dog that gets ear infection after ear infection does not have bad luck — it has an unaddressed underlying cause, most often allergies. Breaking the cycle requires identifying and managing that cause, not just clearing each infection as it appears.
          </CalloutBox>

          <h2>How Ear Infections Develop</h2>
          <p>The canine ear canal is long and L-shaped, which traps moisture and debris and makes the ear vulnerable. An ear infection (otitis externa) develops when the normal balance is disrupted and bacteria, yeast, or both overgrow in the canal. Crucially, infections rarely arise out of nowhere — they are usually secondary to a primary problem that inflames the canal and changes its environment, such as allergies, moisture, excess wax, foreign bodies, or hormonal disease.</p>

          <h2>Recognizing the Signs</h2>
          <p>Common signs are head shaking, scratching or pawing at the ears, rubbing the head along furniture or the floor, an unpleasant odor, and visible discharge that may be brown, yellow, or waxy. The ear canal often looks red, swollen, and feels painful or hot. Some dogs hold the head tilted or become irritable when the ear is touched. Severe or chronic infections can cause thickening of the canal and, if they reach the deeper ear, balance problems.</p>

          <h2>Why the Underlying Cause Matters</h2>
          <p>The single most important concept is that recurrent ear infections are a symptom. Allergies — to environmental allergens or food — are by far the most common driver, inflaming the canal and setting the stage for overgrowth. Floppy-eared and hairy-eared breeds, frequent swimmers, and dogs with hormonal diseases like hypothyroidism are also predisposed. Treating only the infection clears it temporarily, but if the allergy or other cause remains, the infection returns. Lasting control comes from managing the root problem.</p>

          <h2>Diagnosis</h2>
          <p>A proper diagnosis requires a veterinary exam. The veterinarian uses an otoscope to examine the canal and assess whether the eardrum is intact, then often examines a sample of discharge under the microscope (cytology) to identify whether bacteria, yeast, or both are present — which determines the right treatment. This step matters because the wrong medication can fail or, if the eardrum is ruptured, cause harm. Recurrent cases prompt a search for the underlying allergy or hormonal disease.</p>

          <h2>Treatment</h2>
          <p>Treatment typically involves thorough cleaning of the ear and a veterinarian-selected medication targeting the specific organisms found, with the choice and dosing determined by your veterinarian based on cytology and the condition of the eardrum. Pain and inflammation are addressed as needed. For chronic or recurrent infections, the focus shifts to identifying and controlling the underlying cause. Owners should complete the full course and return for a recheck to confirm the infection has resolved rather than stopping when signs improve.</p>

          <h2>Prevention</h2>
          <p>Prevention is tailored to the dog. For allergic dogs, allergy management is the foundation. General measures include drying ears after swimming and bathing, routine cleaning with a veterinarian-recommended cleaner for wax-prone dogs, and avoiding over-cleaning healthy ears. Staying ahead of the underlying cause is what keeps prone dogs comfortable and out of the recurring-infection cycle.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
