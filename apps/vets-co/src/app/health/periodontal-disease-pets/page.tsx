import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Periodontal Disease in Dogs & Cats — Dental Health | Vets.co", description: "Periodontal disease affects most pets by age 3. Learn how dental disease harms the whole body, the signs, and how professional cleaning and home care help.", path: '/health/periodontal-disease-pets', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Periodontal Disease in Dogs and Cats', description: 'Causes, signs, and prevention of periodontal disease in pets.', url: 'https://vets.co/health/periodontal-disease-pets', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Periodontal Disease in Dogs and Cats', description: 'Causes, signs, and prevention of dental disease in pets.', url: 'https://vets.co/health/periodontal-disease-pets', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why does my pet need anesthesia for a dental cleaning?", answer: "A thorough, safe dental cleaning requires anesthesia because the most important work happens below the gumline — where disease actually lives — and involves probing each tooth, taking dental X-rays, and scaling under the gums, none of which an awake pet will tolerate. Anesthesia-free dentistry only scrapes visible tartar off the crown, leaving the disease beneath untouched and creating a false sense of health. Modern anesthesia with pre-operative bloodwork and monitoring is very safe for the vast majority of pets, and the diagnostic and treatment quality it allows is far superior." },
  { question: "Can dental disease affect the rest of the body?", answer: "Yes. Advanced periodontal disease is not just a mouth problem — the chronic infection and inflammation can affect the whole body, and severe dental disease has been associated with changes in the kidneys, liver, and heart. Locally, untreated disease causes painful tooth root abscesses, bone loss in the jaw, and oral-nasal fistulas. The pain alone significantly affects quality of life, even though pets rarely show it openly. Treating dental disease often produces a noticeable improvement in a pet's energy and comfort." },
  { question: "What is the best way to prevent dental disease at home?", answer: "Daily tooth brushing with a pet-safe toothpaste is the gold standard — it mechanically removes plaque before it hardens into tartar, which is the root of the problem. Most pets can be trained to accept brushing with patience and gradual introduction. When brushing is not possible, products carrying the Veterinary Oral Health Council (VOHC) seal — certain dental diets, chews, and water additives — have demonstrated effectiveness. Home care slows disease but does not replace professional cleanings, which remain necessary periodically." },
]
export default function PeriodontalDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Periodontal Disease in Dogs and Cats', subtitle: 'Periodontal disease is the most common disease in adult dogs and cats — by age 3, the majority show signs. It is also one of the most overlooked, because the damage happens below the gumline where owners cannot see it, and because pets hide the pain. Understanding it is the key to protecting both your pet\'s mouth and overall health.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Periodontal Disease', href: '/health/periodontal-disease-pets' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs of Dental Disease</div>
            {[['Bad breath', 'Often the first clue'], ['Tartar buildup', 'Brown or yellow deposits'], ['Red gums', 'Inflamed, bleeding gumline'], ['Eating changes', 'Dropping food, chewing one side']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dental Cleaning Guide', href: '/health/dental-cleaning-guide' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Senior Pet Care', href: '/health/senior-pet-care' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-periodontal" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="The disease lives below the gumline">
            What owners see — tartar on the visible tooth — is only the surface. Periodontal disease destroys the structures anchoring the tooth beneath the gum, where it causes pain and bone loss invisibly. This is why dental X-rays and cleaning under the gumline, which require anesthesia, are essential to real dental care.
          </CalloutBox>

          <h2>How Periodontal Disease Develops</h2>
          <p>It begins with plaque — a film of bacteria that constantly forms on teeth. Within days, minerals in saliva harden plaque into tartar (calculus), which provides a rough surface for more plaque. Bacteria along and under the gumline trigger inflammation (gingivitis), the reversible early stage. If unchecked, the inflammation progresses to periodontitis, destroying the gum, ligament, and bone that hold the tooth in place. This deeper destruction is permanent and is where the real damage and pain occur.</p>

          <h2>Recognizing the Signs</h2>
          <p>Bad breath is often the earliest and most noticeable sign — it reflects bacterial infection, not just "dog breath." Owners may also see brown or yellow tartar, red or bleeding gums, and, in advanced cases, loose or missing teeth. Pets may eat more slowly, chew on one side, drop food, paw at the mouth, or become reluctant to play with toys. Many show no obvious signs at all despite significant disease, because they instinctively hide oral pain.</p>

          <h2>Why It Matters Beyond the Mouth</h2>
          <p>Periodontal disease is painful and progressive, and its effects can reach beyond the mouth. The chronic infection and inflammation place a burden on the body, and severe dental disease has been associated with changes in the kidneys, liver, and heart. Locally, untreated disease leads to tooth root abscesses, jaw bone loss, and in small dogs even jaw fractures. Addressing dental disease protects not just the teeth but overall health and comfort.</p>

          <h2>Professional Cleaning</h2>
          <p>A proper veterinary dental cleaning is done under anesthesia and includes a full oral exam, dental X-rays to reveal disease below the gumline, scaling above and below the gums, polishing, and treatment or extraction of diseased teeth. Anesthesia is necessary to do this thoroughly and safely; anesthesia-free cleanings only address visible tartar and miss the disease that matters. Pre-anesthetic bloodwork and modern monitoring make the procedure safe for most pets, including many seniors.</p>

          <h2>Home Care and Prevention</h2>
          <p>Daily tooth brushing with pet-safe toothpaste is the most effective home measure, removing plaque before it mineralizes. Products with the Veterinary Oral Health Council seal — certain dental diets, chews, and water additives — provide proven secondary support when brushing is not feasible. Home care slows disease but does not replace periodic professional cleanings. A combined approach of consistent home care plus regular veterinary dental assessments keeps most pets comfortable and protects their long-term health.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
