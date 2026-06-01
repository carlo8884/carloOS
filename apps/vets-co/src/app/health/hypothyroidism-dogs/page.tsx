import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Hypothyroidism in Dogs — Signs, Testing, Treatment | Vets.co", description: "Canine hypothyroidism causes weight gain, lethargy, and coat changes. Learn the signs, how it is diagnosed, and why treatment is highly effective.", path: '/health/hypothyroidism-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and lifelong management of canine hypothyroidism.', url: 'https://vets.co/health/hypothyroidism-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Hypothyroidism in Dogs', description: 'Clinical signs, testing, and treatment of canine hypothyroidism.', url: 'https://vets.co/health/hypothyroidism-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Is hypothyroidism in dogs treatable?", answer: "Yes — hypothyroidism is one of the most treatable chronic diseases in dogs. Treatment is a daily oral thyroid hormone replacement, and the dose is determined and adjusted by your veterinarian based on follow-up blood levels. Most dogs respond dramatically: energy and activity return within a few weeks, and skin and coat changes resolve over a few months. The medication is inexpensive and given for life, with periodic bloodwork to keep the dose correct." },
  { question: "Does hypothyroidism cause weight gain even when eating normally?", answer: "Yes. Thyroid hormone sets the body's metabolic rate, so an underactive thyroid slows metabolism and leads to weight gain despite no increase — or even a decrease — in food intake. This is a hallmark of the disease, alongside lethargy, a dull or thinning coat, skin darkening, recurrent ear or skin infections, and cold intolerance. Because these signs come on gradually and overlap with normal aging, the condition is often missed until bloodwork is done." },
  { question: "Can other illnesses cause a falsely low thyroid result?", answer: "Yes — this is an important diagnostic pitfall. Many unrelated illnesses, as well as certain medications, can lower thyroid hormone levels temporarily without true hypothyroidism, a phenomenon called euthyroid sick syndrome. For this reason veterinarians avoid diagnosing hypothyroidism in a sick dog and may run a fuller thyroid panel that includes free T4 and TSH to confirm the diagnosis before committing a dog to lifelong treatment." },
]
export default function HypothyroidismDogsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Hypothyroidism in Dogs', subtitle: 'Hypothyroidism — an underactive thyroid gland — is among the most common hormonal diseases in dogs and one of the most rewarding to treat. The signs are easy to mistake for normal aging, but once recognized and confirmed, daily hormone replacement restores most dogs to full health.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Signs</div>
            {[['Weight gain', 'Despite normal eating'], ['Lethargy', 'Less active, sleeps more'], ['Coat changes', 'Thinning, dull, symmetric hair loss'], ['Skin issues', 'Darkening, recurrent infections']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Cushing Disease in Dogs', href: '/health/cushing-disease-dogs' }, { label: 'Weight Management', href: '/health/weight-management' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-hypothyroid-dogs" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Easy to miss, easy to treat">
            Because the signs develop slowly and look like aging, many hypothyroid dogs go undiagnosed for a long time. A simple blood test confirms it, and treatment is highly effective and affordable. If your middle-aged dog has slowed down and gained weight, ask your veterinarian about thyroid testing.
          </CalloutBox>

          <h2>What the Thyroid Does</h2>
          <p>The thyroid gland in the neck produces hormones that regulate the body's metabolic rate — essentially how fast cells burn energy. When the gland becomes underactive, metabolism slows across the board, affecting weight, energy, skin, coat, and even mood. In dogs, the cause is usually progressive immune-mediated destruction or atrophy of the gland. It is most common in middle-aged dogs of medium to large breeds.</p>

          <h2>Recognizing the Signs</h2>
          <p>Classic signs are weight gain without overeating, lethargy and reduced activity, and skin and coat changes — thinning fur, a dull coat, symmetric hair loss over the trunk, darkened or thickened skin, and recurrent ear or skin infections. Some dogs seek out warm spots because they tolerate cold poorly. Occasionally hypothyroidism affects the nerves or causes a "tragic" facial expression from thickened skin. These signs accumulate gradually, which is why owners often attribute them to age.</p>

          <h2>How It Is Diagnosed</h2>
          <p>Diagnosis relies on bloodwork, but interpretation requires care. A low total T4 supports the diagnosis but is not enough alone, because many unrelated illnesses and some medications lower T4 without true thyroid disease. Veterinarians therefore confirm with a fuller panel — free T4 and TSH — and avoid testing while a dog is acutely ill. Routine bloodwork in hypothyroid dogs often also shows elevated cholesterol, a supportive clue.</p>

          <h2>Treatment</h2>
          <p>Treatment is daily oral thyroid hormone replacement, given for life. The starting dose and any adjustments are determined by your veterinarian, who rechecks thyroid levels after starting and periodically thereafter to fine-tune. Owners typically see energy return within weeks, with skin and coat improvements following over one to several months. The medication is inexpensive and well tolerated, and the response to treatment also helps confirm the diagnosis was correct.</p>

          <h2>Long-Term Management</h2>
          <p>Once stabilized, hypothyroid dogs need only their daily medication and periodic monitoring bloodwork to confirm the dose remains appropriate as they age or change weight. The prognosis is excellent. Because the disease is lifelong but easily controlled, the main job for owners is consistency — giving the medication reliably and keeping up with recheck testing.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
