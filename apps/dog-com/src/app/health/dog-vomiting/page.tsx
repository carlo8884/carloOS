import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Vomiting in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/vomiting-in-small-animals/vomiting-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Vomiting in Dogs — When to See a Vet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'AAHA: Emergency Signs — Vomiting and GI Emergencies', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/emergency-and-critical-care-guidelines/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Gastric Dilation and Volvulus — Emergency Presentation', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-stomach-and-intestines-in-small-animals/gastric-dilation-and-volvulus-in-small-animals', publisher: 'Merck Vet Manual' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Vomiting — Acute vs Chronic, Yellow Bile | Dog.com', description: 'Dog vomiting guide. Acute vs chronic, yellow bile in the morning, and the signs that make vomiting an emergency. When to treat at home vs see a vet immediately.', path: '/health/dog-vomiting', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Vomiting Guide', description: 'Acute vs chronic vomiting, yellow bile syndrome, and emergency signs for dog vomiting.', url: 'https://dog.com/health/dog-vomiting', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Vomiting', description: 'Causes, home care, and emergency signs for dog vomiting.', url: 'https://dog.com/health/dog-vomiting', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogVomitingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Vomiting', subtitle: 'Dogs vomit. Most of the time it is not serious. But vomiting is also a sign of some of the most serious conditions in veterinary medicine — GDV, pancreatitis, toxin ingestion, intestinal obstruction. Knowing which signs escalate to emergency is essential.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Vomiting', href: '/health/dog-vomiting' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Diarrhea', href: '/health/dog-diarrhea', category: 'Dog Health' }, { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis', category: 'Dog Health' }, { title: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs</div>
            <ul className="text-xs text-brand-text-mid space-y-1 m-0 p-0 list-none">
              {['Unproductive retching (no vomit produced)', 'Blood in vomit', 'Vomiting + distended abdomen', 'Vomiting after suspected foreign body', 'Vomiting + extreme lethargy', 'Vomiting + pale gums', 'Puppy vomiting repeatedly', 'Vomiting persists >24 hours'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger font-bold">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'GDV / Bloat', href: '/health/dog-bloat-gvd' }, { label: 'Dog Diarrhea', href: '/health/dog-diarrhea' }, { label: 'Dog Pancreatitis', href: '/health/dog-symptoms-guide' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-vomiting" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Vomiting vs Regurgitation — An Important Distinction</h2>
          <p><strong>Vomiting</strong> is active — abdominal contractions, retching, nausea behavior beforehand (lip-licking, drooling, restlessness). The material comes from the stomach or upper small intestine. <strong>Regurgitation</strong> is passive — food slides out without effort, no retching, often tubular in shape (the shape of the esophagus), undigested food. Regurgitation indicates an esophageal problem (megaesophagus, esophageal obstruction) rather than gastric or intestinal disease. The distinction matters because the diagnostic and treatment approach is entirely different.</p>

          <h2>Common Causes of Acute Vomiting</h2>
          <p><strong>Dietary indiscretion:</strong> The dog ate something they shouldn't. Garbage, table scraps, foreign material. Most common cause. Usually self-limiting in 24 hours in otherwise healthy dogs.</p>
          <p><strong>Gastritis:</strong> Inflammation of the stomach lining from dietary indiscretion, infection, or unknown cause. May vomit several times, then improve. Bland diet and withholding food for 6–12 hours typically resolves uncomplicated gastritis.</p>
          <p><strong>Bilious vomiting syndrome (yellow bile in the morning):</strong> Many dogs vomit yellow bile — bile without food — first thing in the morning or after a long gap between meals. Caused by bile refluxing into the empty stomach overnight, irritating the stomach lining. Usually resolves with a small bedtime snack (empty stomach less time overnight) or feeding more frequently. Not serious but worth investigating if persistent.</p>

          <h2>Serious Causes That Mimic Mild Vomiting</h2>
          <p><strong>Intestinal obstruction:</strong> Foreign object (bone fragment, toy, corn cob, sock) stuck in the GI tract. Dogs may vomit repeatedly without progressing to improvement. Key sign: vomiting persists despite fasting, or the dog vomited after known ingestion of a foreign object. Radiographs and sometimes ultrasound or contrast study required to diagnose. Surgery often required. Delay worsens outcome significantly.</p>
          <p><strong>Pancreatitis:</strong> Inflammation of the pancreas — acute cases can be severe. Signs: vomiting, abdominal pain (dog may assume a "prayer position" — front end down, hind end up), lethargy, fever. Triggered by fatty meals. Golden Retrievers, Miniature Schnauzers, and Cocker Spaniels are predisposed. Requires IV fluids, pain management, and nil per os (no food/water initially). Diagnosis by elevated serum lipase (cPLI).</p>
          <p><strong>Parvovirus:</strong> In unvaccinated puppies — severe hemorrhagic gastroenteritis, vomiting, bloody diarrhea, lethargy. Emergency. Confirm vaccination status of any vomiting puppy.</p>

          <h2>When to Wait vs When to Go</h2>
          <p><strong>Can monitor at home (24 hours):</strong> Single vomiting episode in an otherwise alert adult dog, no blood, no known foreign body ingestion, no concurrent diarrhea, eating normally afterward.</p>
          <p><strong>Call or go to vet same day:</strong> Multiple vomiting episodes over several hours, not keeping water down, mild lethargy.</p>
          <p><strong>Emergency — go immediately:</strong> Unproductive retching (especially large breeds — GDV), blood in vomit, severe lethargy, vomiting after foreign body ingestion, distended abdomen, pale gums, puppy that cannot keep anything down.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
