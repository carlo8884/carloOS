import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: '14 Dog Emergency Signs — When to Go to the Vet Right Now | Vets.co', description: '14 signs that require emergency veterinary care immediately. Pale gums, unproductive retching, seizures, and more', path: '/health/emergency-signs', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Emergency Care for Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/emergency-care-your-pet', publisher: 'AVMA' },
  { label: 'AAHA: Emergency and Critical Care Guidelines', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
  { label: 'ASPCA Animal Poison Control Center', url: 'https://www.aspca.org/pet-care/animal-poison-control', publisher: 'ASPCA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: '14 Dog Emergency Signs', description: 'Veterinary emergency signs requiring immediate care — Reference guide.', url: 'https://vets.co/health/emergency-signs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: '14 Dog Emergency Signs', description: 'Signs requiring immediate emergency veterinary care.', url: 'https://vets.co/health/emergency-signs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const EMERGENCY_SIGNS = [
  { sign: 'Pale, white, blue, or gray gums', detail: 'Normal gum color is pink. Pale gums indicate cardiovascular shock, internal bleeding, or severe anemia. White or blue gums indicate oxygen deprivation. Any color other than pink-to-salmon requires immediate emergency evaluation — gum color is one of the fastest assessments of circulatory status.' },
  { sign: 'Unproductive retching or attempting to vomit without producing anything', detail: 'In large and deep-chested breeds, this is GDV (gastric dilatation-volvulus) until proven otherwise. Do not wait. Call ahead to the emergency vet and go immediately. Time measured in hours.' },
  { sign: 'Sudden collapse or inability to stand', detail: 'Acute collapse with no obvious injury may indicate internal hemorrhage (splenic rupture), cardiac arrhythmia, hypoglycemia, or neurological emergency. Emergency vet immediately.' },
  { sign: 'Difficulty breathing — labored, rapid, or open-mouth breathing', detail: 'Respiratory distress from any cause (fluid around lungs, airway obstruction, pneumonia, cardiac failure) requires emergency care. Dogs do not pant in distress — open-mouth labored breathing at rest is an emergency.' },
  { sign: 'Seizure lasting more than 2-3 minutes (status epilepticus)', detail: 'A single brief seizure in a known epileptic dog may not be an immediate emergency. A first seizure, cluster seizures (multiple in 24 hours), or a seizure lasting more than 2–3 minutes (status epilepticus) is an emergency requiring immediate intervention.' },
  { sign: 'Suspected toxin ingestion', detail: 'Call the ASPCA Animal Poison Control Center (888-426-4435) immediately. Do not wait for symptoms. Many toxins have a narrow treatment window — induced vomiting is most effective within 30–60 minutes of ingestion. Time is critical.' },
  { sign: 'Eye injury or sudden vision loss', detail: 'Corneal ulcers, penetrating eye injuries, and glaucoma (sudden increased eye pressure with a visibly enlarged or red eye) require same-day veterinary care. Glaucoma causes permanent vision loss within hours without treatment.' },
  { sign: 'Urinary obstruction — straining without producing urine', detail: 'Male dogs and cats that strain to urinate without producing urine may have a blocked urethra — a life-threatening emergency. Bladder rupture and fatal hyperkalemia can occur within 24–48 hours.' },
  { sign: 'Suspected fracture or major wound', detail: 'Visible bone, wounds penetrating the body cavity, or inability to bear any weight after trauma requires emergency evaluation.' },
  { sign: 'Sudden hind limb paralysis or weakness', detail: 'Particularly in Dachshunds and other chondrodystrophic breeds — this is IVDD until proven otherwise. The surgical window for recovery from paralysis is 24–48 hours. Do not wait.' },
  { sign: 'Prolonged or unresponsive vomiting and diarrhea', detail: 'Multiple vomiting episodes without improvement over several hours, or bloody diarrhea with vomiting, can cause rapid dehydration and electrolyte imbalance requiring hospitalization.' },
  { sign: 'Ingestion of a foreign object', detail: 'Swallowed linear foreign bodies (string, fishing line, ribbon) are particularly dangerous — they can cause intestinal plication. Sharp objects or objects causing immediate choking require emergency evaluation.' },
  { sign: 'Loss of consciousness', detail: 'Loss of consciousness from any cause is an emergency. If the dog is unresponsive: check for breathing, call the emergency vet immediately while traveling to them.' },
  { sign: 'Dystocia — prolonged labor without delivery', detail: 'A female in active labor (visible straining) for more than 30–60 minutes without delivery of a puppy, or more than 4 hours between puppies, requires emergency veterinary evaluation.' },
]
export default function EmergencySignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: '14 Dog Emergency Signs', subtitle: 'Some signs warrant waiting until your regular vet opens. These do not. Print this page and keep it accessible. In a true emergency, knowing these signs before they happen is the difference between a treatment outcome and a fatality.', category: 'Emergency Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Emergency Signs', href: '/health/emergency-signs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs', category: 'Emergency Guide' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">If You Suspect Emergency</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-3">Call ahead while driving — the vet can prepare for your arrival. ASPCA Poison Control: <strong>888-426-4435</strong></p>
            <Link href="/find-a-vet" className="block w-full text-center bg-brand-danger text-white text-xs font-bold py-2.5 rounded-lg no-underline hover:opacity-90">Find Emergency Vet →</Link>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'ER vs Clinic vs Telehealth', href: '/tools/er-vs-clinic' }, { label: 'Bloat (GDV) in Dogs', href: '/health/bloat-gdv-dogs' }, { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-emergency" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <p className="text-base text-brand-text-mid leading-relaxed mb-8">When in doubt: call your emergency vet and describe what you are seeing. A 2-minute call is far better than waiting and watching something become life-threatening. Emergency vets would rather you call unnecessarily than delay a critical situation. These 14 signs should prompt an immediate call and drive.</p>
          {EMERGENCY_SIGNS.map((item, i) => (
            <div key={item.sign} className="flex gap-4 mb-5 p-5 rounded-xl border border-brand-border bg-brand-surface">
              <span className="font-display font-black text-brand-danger text-2xl flex-shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base m-0 mb-2 leading-snug">{item.sign}</h3>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">{item.detail}</p>
              </div>
            </div>
          ))}
          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
