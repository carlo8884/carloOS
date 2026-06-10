import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Saint Bernard Breed Guide — Bloat, Hip Dysplasia | Dog.com', description: 'Saint Bernards are gentle giants with serious GDV/bloat and hip dysplasia predisposition. Gastropexy at spay/neuter strongly recommended.', path: '/breeds/saint-bernard', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Saint Bernard Breed Guide', description: 'GDV risk, hip dysplasia, and care for Saint Bernard dogs.', url: 'https://dog.com/breeds/saint-bernard', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function SaintBernardPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Saint Bernard Breed Guide', subtitle: 'The Alpine rescue dogs of the Great St. Bernard Pass — Saint Bernards are among the most massive dogs in existence, combining legendary gentleness with significant health considerations that prospective owners must understand before acquisition. At 120–180+ pounds, the decisions made about their health management have outsized consequences.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Saint Bernard', href: '/breeds/saint-bernard' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Great Pyrenees Guide', href: '/breeds/great-pyrenees', category: 'Breed Guide' }, { title: 'Bernese Mountain Dog Guide', href: '/breeds/bernese-mountain-dog', category: 'Breed Guide' }, { title: 'Best Large Breed Dog Food', href: '/reviews/best-large-breed-dog-food', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '120–180+ lbs (males larger)'], ['Lifespan', '8–10 years (giant breed)'], ['GDV risk', 'Very high — gastropexy at S/N recommended'], ['Hip dysplasia', 'High prevalence'], ['Drool', 'Heavy — daily management required'], ['Exercise', 'Moderate — low-impact to protect joints'], ['Heat tolerance', 'Poor — northern breed origin']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Great Dane Guide', href: '/breeds/great-dane' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Saint Bernard vs Newfoundland', href: '/compare/saint-bernard-vs-newfoundland' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-saint-bernard" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Gastric Dilatation-Volvulus (GDV / Bloat)" riskLevel="very-high"
          description="Saint Bernards are among the highest-risk breeds for GDV — their deep, barrel chest creates the anatomical predisposition. Prophylactic gastropexy (surgically tacking the stomach to prevent rotation) performed at the time of spay/neuter is one of the most impactful preventive health decisions available for this breed. The procedure adds 15-20 minutes to the surgery and effectively eliminates the rotation component of GDV, the part that is rapidly fatal. GDV without surgery has near-100% mortality; with immediate surgery, 70-80% survival — but you may not make it to an emergency vet in time without the gastropexy already in place."
          signs={['Unproductive retching — attempting to vomit without producing anything', 'Distended abdomen that sounds hollow when tapped', 'Extreme restlessness then sudden profound lethargy', 'Excessive drooling beyond the breed baseline', 'Pale gums and signs of cardiovascular shock']}
          management="Prophylactic gastropexy at spay/neuter — discuss with your veterinarian before the procedure. Know your nearest 24-hour emergency veterinary clinic before you ever need it." />

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="very-high"
          description="Saint Bernards have among the highest rates of hip dysplasia of any breed — their enormous body weight loads already predisposed joints with compounding force. OFA or PennHIP evaluations on breeding dogs are essential baseline health testing. Giant breed puppy nutrition (controlled calcium, phosphorus, and calories) is critical during growth to prevent developmental orthopedic disease."
          signs={['Stiffness when rising — improves after warming up', 'Hind limb weakness', 'Reduced activity or play', 'Bunny-hopping gait (bilateral hip dysplasia)', 'Swollen or thickened elbows']}
          management="Giant breed puppy food until 18-24 months. Lean weight maintained throughout life. Fish oil from puppyhood. Joint supplementation (Dasuquin Advanced). NSAIDs when symptomatic. Total hip replacement for severe cases in younger dogs — excellent outcomes." />

        <h2>Giant Breed Puppy Nutrition — Critical Window</h2>
        <p>A Saint Bernard puppy grows from roughly 1.5 lbs at birth to 100–130+ lbs in 18-24 months — the most extreme growth rate of any commonly kept dog. Feeding a regular puppy food, a small breed food, or supplementing calcium during this growth phase causes developmental orthopedic disease (DOD): hypertrophic osteodystrophy (HOD), osteochondrosis (OCD), and angular limb deformities that can require surgical correction. Giant breed puppy foods (Royal Canin Giant Puppy, Purina Pro Plan Large Breed Puppy, Hill's Science Diet Large Breed Puppy) control caloric density and calcium-phosphorus ratios specifically to slow growth to a safe rate.</p>
        <p>Never supplement calcium in a growing giant breed dog — the controlled calcium in the food is precisely calibrated. Adding more disrupts the ratio and causes the skeletal problems it is meant to prevent. Feed measured giant breed puppy food until 18-24 months, then transition to giant breed adult.</p>

        <h2>The Drool — Setting Honest Expectations</h2>
        <p>Saint Bernards drool. This is not occasionally or mildly — it is continuously, in large volumes, particularly after eating, drinking, or physical activity. Drool strings catch on furniture, walls, people, and clothing. Saint Bernard owners keep dedicated drool towels (called "slobber rags") accessible throughout the house. The drool cannot be reduced through feeding changes or training — it is an anatomical feature of their loose, pendulous lips. This is not a problem to be solved; it is a feature of the breed that requires acceptance before acquisition. Prospective owners who visit a Saint Bernard household and find the drool genuinely bothersome should consider a different breed.</p>

        <h2>Exercise and Heat Management</h2>
        <p>Saint Bernards were bred for cold Alpine work — they have dense double coats and poor heat dissipation. Exercise in temperatures above 75°F risks heat stroke, which in a 150-lb dog is rapidly life-threatening. Exercise should happen in early morning or evening during warm months. They need moderate activity (daily 30-45 minute walks) to maintain cardiovascular health and healthy weight, but high-intensity or prolonged exercise is inappropriate — both for heat reasons and to protect already-stressed joints. A Saint Bernard that pants heavily at rest in warm weather needs to be moved to air conditioning immediately.</p>
      </div>
    </ArticleLayout>
  )
}
