import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Bullmastiff Breed Guide — Hip Dysplasia, Bloat Risk & Calm Temperament | Dog.com', description: 'Bullmastiffs are quiet, loyal giant breed dogs. GDV/bloat risk, hip and elbow dysplasia, and cardiac screening are the primary health priorities. They drool. A lot.', path: '/breeds/bullmastiff', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Bullmastiff Breed Guide', description: 'Hip dysplasia, GDV risk, cardiac screening, and care for Bullmastiffs.', url: 'https://dog.com/breeds/bullmastiff', imageUrl: '', authorName: 'Dog.com Editorial Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function BullmastiffPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Bullmastiff Breed Guide', subtitle: 'The Bullmastiff was bred in 19th century England as the "Gamekeeper\'s Night Dog" — large and powerful enough to pin poachers but tractable enough to be controlled. The result is a breed that combines impressive size (100–130 lbs) with a surprisingly calm, low-energy temperament indoors. They are not the bouncing-off-walls giant most people expect.', category: 'Breed Guide', authorName: 'Dog.com Editorial Team', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Bullmastiff', href: '/breeds/bullmastiff' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '100–130 lbs'], ['Lifespan', '7–9 years (giant breed)'], ['Exercise', 'Moderate — 45-60 min daily'], ['GDV risk', 'High — deep-chested'], ['Hip/elbow', 'OFA clearances essential'], ['Cardiac', 'Echo screening recommended'], ['Drool', 'Significant — this is not optional']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Dog Arthritis', href: '/health/dog-arthritis' }, { label: 'Best Large Breed Food', href: '/reviews/best-large-breed-dog-food' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="breed-bullmastiff" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high"
          description="Bullmastiffs, like most giant breeds, carry significant risk of hip and elbow dysplasia. Their rapid growth rate and substantial adult weight amplify the developmental joint disease risk present in larger breeds generally. OFA certification of both hips and elbows on both parents is the minimum expectation from responsible breeders. Limit high-impact exercise during growth — no forced running or jumping until 18 months."
          signs={['Hind-end weakness or stiffness after rest', 'Altered gait — bunny-hopping or reduced stride', 'Reluctance to rise, climb stairs, or jump', 'Forelimb lameness (elbows)']}
          management="Lean weight maintained throughout life. Fish oil from puppy stage. Joint supplement from young adulthood. NSAIDs or Librela when pain management is needed. Surgical options (TPO, THR, elbow procedures) for appropriate cases." />

        <BreedHealthCard name="Gastric Dilatation-Volvulus (GDV / Bloat)" riskLevel="high"
          description="Bullmastiffs are a deep-chested breed with documented GDV predisposition. Prophylactic gastropexy at the time of spay or neuter prevents the stomach from rotating (the fatal component) while allowing normal stomach function. This is strongly recommended — the procedure adds minimal risk and time to an existing anesthetic event."
          signs={['Unproductive retching or gagging', 'Distended, hard abdomen', 'Restlessness progressing to collapse', 'Pale or white gums', 'Excessive drooling and anxiety']}
          management="Prophylactic gastropexy. Know the nearest 24-hour emergency vet's address before you need it. Feed from floor height (raised bowls have not been shown to prevent GDV and may increase risk in some studies). Multiple small meals rather than one large meal." />

        <h2>Cardiac Screening — Often Overlooked</h2>
        <p>Bullmastiffs have an elevated prevalence of cardiac conditions — specifically dilated cardiomyopathy and subaortic stenosis. Cardiac auscultation at every annual wellness exam and echocardiogram (cardiac ultrasound) by a board-certified cardiologist or via the OFA cardiac certification program is recommended for breeding animals and appropriate for pet Bullmastiffs as well. Early detection of cardiac disease allows management that extends quality life — DCM caught before clinical signs develop has better management outcomes than disease found during a crisis presentation.</p>

        <h2>The Drool Reality</h2>
        <p>Bullmastiff ownership requires accepting significant drool as a permanent feature of daily life. The breed's jowl structure and loose lip anatomy produces drool at rest, during meals, after drinking, during excitement, and after exercise. "Slobber cloths" — small towels tucked into a pocket or hung nearby — are standard Bullmastiff owner equipment. Furniture, clothing, and walls will carry evidence of the dog. This is not something that can be managed through training — it is anatomy. Prospective owners who are uncomfortable with this should choose a different breed honestly rather than acquiring a Bullmastiff and being chronically frustrated.</p>

        <h2>Temperament and Training</h2>
        <p>Bullmastiffs are characteristically calm, confident, and deeply loyal — described by their owners as "big, gentle dogs that just happen to be very large." They are not high-energy dogs despite their size; moderate daily exercise (45-60 minutes) satisfies their physical needs, and they are content to settle indoors for long periods. They can be stubborn — the same independent judgment that made them useful as working dogs makes them selective about compliance. Early, consistent positive reinforcement training from puppyhood establishes the patterns that make a 120-pound dog manageable. A poorly trained adult Bullmastiff is a genuine management challenge — their size means that compliance cannot be compelled physically.</p>
      </div>
    </ArticleLayout>
  )
}
