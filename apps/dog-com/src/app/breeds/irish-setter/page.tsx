import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Irish Setter Breed Guide — Epilepsy, PRA & Exuberant Energy | Dog.com', description: 'Irish Setters are exuberantly energetic sporting dogs. Progressive retinal atrophy (PRA) and epilepsy are the primary health concerns. Gluten sensitivity also documented in the breed.', path: '/breeds/irish-setter', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Irish Setter Breed Guide', description: 'PRA, epilepsy, exercise requirements, and care for Irish Setters.', url: 'https://dog.com/breeds/irish-setter', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function IrishSetterPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Irish Setter Breed Guide', subtitle: 'The mahogany-red Irish Setter is one of the most instantly recognizable dog breeds — and one of the most energetic. Bred for all-day upland bird hunting across Irish terrain, they combine a beautiful flowing coat with an exuberance and energy level that requires an active household to channel properly.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Irish Setter', href: '/breeds/irish-setter' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '60–70 lbs'], ['Lifespan', '11–15 years'], ['Exercise', 'High — 90+ min vigorous daily'], ['Trainability', 'Good — slow to mature mentally'], ['PRA risk', 'Elevated — CAER annual exam'], ['Epilepsy', 'Elevated prevalence'], ['Coat', 'Long silky mahogany — weekly grooming']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Seizures', href: '/health/dog-seizures' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Separation Anxiety', href: '/training/separation-anxiety' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-irish-setter" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Progressive Retinal Atrophy (PRA)" riskLevel="high"
          description="Irish Setters were one of the first breeds in which PRA was studied extensively — the rod-cone dysplasia (rcd1) mutation was identified in Irish Setters and led to the first DNA test for hereditary eye disease in dogs. The rcd1 mutation causes early-onset blindness (rods begin degenerating from birth, with clinical signs appearing in puppies). Modern Irish Setter lines have been largely cleared of rcd1 through testing programs, but later-onset PRA mutations also occur in the breed. Annual CAER examination and DNA testing of breeding dogs is appropriate."
          signs={['Night blindness in young dogs (rcd1 — early onset)', 'Progressive difficulty seeing in low light', 'Eventual complete blindness in affected dogs']}
          management="DNA test breeding dogs for rcd1 and other available PRA mutations. Annual CAER examination. Affected dogs adapt well to familiar environments." />

        <BreedHealthCard name="Epilepsy" riskLevel="moderate"
          description="Irish Setters have an elevated prevalence of idiopathic epilepsy — typical onset between 1–5 years. Most affected dogs are well-managed on anti-epileptic medication. The breed's epilepsy has some familial inheritance patterns — pedigree research when purchasing from a breeder is appropriate."
          signs={['Generalized tonic-clonic seizures', 'Focal seizures', 'Post-ictal confusion and disorientation']}
          management="Veterinary evaluation after first seizure. Anti-epileptic medication (phenobarbital or levetiracetam as first-line) when indicated. Regular bloodwork monitoring." />

        <h2>The "Peter Pan" Syndrome</h2>
        <p>Irish Setters are famously slow to mature mentally — they retain their puppy exuberance and lack of impulse control for significantly longer than most large breeds. A 3-year-old Irish Setter often behaves more like a 1-year-old Lab in terms of impulse control and focus. This is not a training failure — it is a breed characteristic. The upside: their joy and enthusiasm for life remains infectious well into adulthood. The management requirement: consistent, patient positive reinforcement training from puppyhood, understanding that the "calm adult" stage may not arrive until age 3-4.</p>

        <h2>Gluten Sensitivity in Irish Setters</h2>
        <p>Irish Setters are one of the few breeds with documented gluten-sensitive enteropathy — a condition analogous to celiac disease in humans where gluten (from wheat, barley, rye) causes intestinal inflammation and malabsorption. The condition was characterized in research at the University of Liverpool. Affected Irish Setters on a gluten-containing diet show: poor growth, weight loss, diarrhea, and eventually skin and coat changes. A gluten-free diet resolves the clinical signs in affected dogs. Genetic testing is available; responsible breeders test for the mutation. This is an Irish Setter-specific condition distinct from the general grain-free DCM concern — grain-free is not inherently recommended for all dogs, but a tested-positive Irish Setter genuinely requires a gluten-free diet.</p>

        <h2>Exercise Requirements</h2>
        <p>90+ minutes of vigorous daily exercise is the Irish Setter's requirement — and "vigorous" means running, not walking. They are built for all-day hunting across varied terrain. Dog sports (agility, field trials, hunt tests), off-leash running in safe areas, and consistent active engagement satisfy their needs. An under-exercised Irish Setter is a destructive, hyperactive Irish Setter — all that energy goes somewhere, and in an unstimulated environment it goes into furniture, landscaping, and anything else that provides an outlet.</p>
      </div>
    </ArticleLayout>
  )
}
