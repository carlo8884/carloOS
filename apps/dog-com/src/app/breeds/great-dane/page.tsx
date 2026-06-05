import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Great Dane Breed Guide — Bloat Prevention, DCM | Dog.com', description: 'Great Danes live 7-10 years and face serious risks from GDV/bloat and DCM cardiac disease. Gastropexy at spay/neuter is strongly recommended.', path: '/breeds/great-dane', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Great Dane Breed Guide', description: 'GDV/bloat prevention, DCM cardiac disease, and nutrition for Great Danes.', url: 'https://dog.com/breeds/great-dane', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function GreatDanePage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Great Dane Breed Guide', subtitle: 'The largest dog breed — "Apollo of dogs." Great Danes are gentle giants with an unfortunately short lifespan of 7–10 years, driven primarily by their susceptibility to GDV/bloat and cardiac disease. Understanding these risks before acquiring a Great Dane changes how you manage their health from day one.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Great Dane', href: '/breeds/great-dane' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Irish Wolfhound Guide', href: '/breeds/irish-wolfhound', category: 'Breed Guide' }, { title: 'Saint Bernard Guide', href: '/breeds/saint-bernard', category: 'Breed Guide' }, { title: 'Best Large Breed Dog Food', href: '/reviews/best-large-breed-dog-food', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '100–200 lbs'], ['Lifespan', '7–10 years (giant breed)'], ['GDV risk', 'Very high — gastropexy at S/N recommended'], ['Cardiac', 'DCM predisposition'], ['Growth rate', 'Extreme — giant puppy diet essential'], ['Exercise puppy', 'Low impact until 18-24 months'], ['Temperament', 'Gentle, affectionate, calm indoors']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }, { label: 'Dog Heart Disease', href: '/health/dog-heart-disease' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Great Dane vs Mastiff', href: '/compare/great-dane-vs-mastiff' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-great-dane" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Gastric Dilatation-Volvulus (GDV / Bloat)" riskLevel="very-high"
          description="GDV is the leading cause of death in Great Danes after cancer. The deep, narrow chest creates the anatomical predisposition: the stomach can fill with gas and rotate on its long axis, trapping gas and cutting off blood supply. This is a true surgical emergency — a Great Dane with GDV has hours, not days. Prophylactic gastropexy (surgically tacking the stomach to the abdominal wall, preventing rotation) performed at the time of spay/neuter is the most impactful preventive measure available and is strongly recommended for Great Danes. It does not prevent bloating (gas accumulation) but prevents the rotation that makes GDV fatal."
          signs={['Unproductive retching — attempting to vomit without producing anything', 'Distended, drum-like abdomen', 'Restlessness followed by sudden lethargy', 'Excessive drooling', 'Pale gums and cardiovascular collapse in advanced disease']}
          management="Prophylactic gastropexy at spay/neuter — the most important preventive decision for Great Dane owners. If GDV occurs: immediate emergency surgery. Call ahead while driving. Know the location of the nearest 24-hour emergency vet before you need it." />

        <BreedHealthCard name="Dilated Cardiomyopathy (DCM)" riskLevel="high"
          description="Great Danes are one of the giant breeds with significant DCM predisposition alongside Dobermans and Irish Wolfhounds. The heart muscle weakens and dilates, reducing pumping efficiency. Great Dane DCM often presents differently from Doberman DCM — atrial fibrillation (irregular heart rhythm) is common in Great Danes with DCM and can be the presenting sign. Annual cardiac evaluation (auscultation, echocardiogram in suspicious cases) from age 3-4 is appropriate."
          signs={['Exercise intolerance', 'Irregular heartbeat detected on exam', 'Cough when CHF develops', 'Abdominal distension (ascites)', 'Weakness or syncope']}
          management="Annual cardiac auscultation. Echocardiogram if murmur or arrhythmia detected. Pimobendan when occult DCM confirmed on echo. Rate control with digoxin or diltiazem for atrial fibrillation. Cardiologist involvement for ongoing management." />

        <h2>Giant Puppy Nutrition — Get This Right</h2>
        <p>Giant breed puppies have the most critical nutritional requirements of any dog size category. They grow from 1 lb to 100–200 lbs in 18–24 months — the fastest growth rate relative to adult size of any mammal. Feeding a standard puppy food or adult food during this growth phase causes hypertrophic osteodystrophy (HOD), osteochondrosis (OCD), and other developmental orthopedic diseases from uncontrolled rapid growth.</p>
        <p>Giant breed puppy formulas (Royal Canin Giant Puppy, Purina Pro Plan Large Breed Puppy, Hill's Science Diet Large Breed Puppy) control calcium, phosphorus, and caloric density to slow growth to an appropriate rate. Never supplement calcium to a growing giant breed puppy — the growth rate is precisely managed by the food's calcium-phosphorus balance, and supplementation disrupts this and causes skeletal malformations. Feed large breed puppy food, measured carefully, until 18–24 months, then transition to giant breed adult.</p>

        <h2>Exercise — Protect the Joints While Growing</h2>
        <p>Great Dane puppies should not have forced, strenuous exercise until their growth plates close — approximately 18–24 months. Free play in the yard is appropriate; forced running, jogging alongside bicycles, or jumping should be avoided. The growth plates of giant breed dogs close significantly later than small breeds — exercising before closure risks growth plate injury and angular limb deformities. After 18–24 months, Great Danes actually need moderate daily exercise to maintain cardiovascular health and healthy weight, but they are not high-energy dogs — a daily 30-45 minute walk satisfies most adult Great Danes.</p>

        <h2>Lifespan — The Emotional Reality</h2>
        <p>Great Danes live 7–10 years, with the average closer to 8. This is significantly shorter than most companion breeds and is a consideration every prospective owner should weigh before acquiring one. The bond formed with a Great Dane is profound — their size, gentle nature, and deep human orientation make them extraordinary companions. The grief of losing them at 8–9 years is real and significant. Many Great Dane owners proceed knowing this, choosing the quality of the relationship over quantity of years. Others find the short lifespan a significant barrier. Both responses are reasonable and worth considering honestly before acquisition.</p>

        <h2>Wobbler Syndrome (Cervical Spondylomyelopathy)</h2>
        <p>Great Danes, along with Dobermans, are the most commonly affected breeds for Wobbler syndrome — spinal cord compression at the cervical vertebrae causing the characteristic wobbly, ataxic gait. Develops typically in young adults (Danes often affected at 2–3 years — earlier than Dobermans). Management: anti-inflammatory therapy for mild cases, surgical decompression for progressive or severe cases, referral to a veterinary neurologist for diagnosis and treatment planning.</p>
      </div>
    </ArticleLayout>
  )
}
