import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Irish Wolfhound Breed Guide — Lifespan, Osteosarcoma | Dog.com', description: 'Irish Wolfhounds have the shortest lifespan of any dog breed — 6-8 years. Osteosarcoma, dilated cardiomyopathy, and GDV are the primary health concerns.', path: '/breeds/irish-wolfhound', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Irish Wolfhound Breed Guide', description: 'Osteosarcoma, DCM, GDV risk, and care for Irish Wolfhounds.', url: 'https://dog.com/breeds/irish-wolfhound', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function IrishWolfhoundPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Irish Wolfhound Breed Guide', subtitle: 'The Irish Wolfhound stands as the tallest dog breed — males average 32-35 inches at the shoulder and weigh 120-180 lbs. They are gentle, quiet, and deeply affectionate. They are also the shortest-lived of any dog breed: the median lifespan is 6-7 years. Prospective owners must understand and accept this before acquisition.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Irish Wolfhound', href: '/breeds/irish-wolfhound' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Great Dane Guide', href: '/breeds/great-dane', category: 'Breed Guide' }, { title: 'Saint Bernard Guide', href: '/breeds/saint-bernard', category: 'Breed Guide' }, { title: 'Best Pet Insurance', href: '/reviews/best-pet-insurance', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '120–180 lbs · 32–35" at shoulder'], ['Lifespan', '6–8 years — shortest of any breed'], ['Primary cause of death', 'Osteosarcoma and cardiomyopathy'], ['Temperament', 'Gentle, quiet, sweet-natured'], ['Exercise', 'Moderate — not the athlete their size implies'], ['With children', 'Excellent — patient and careful'], ['With other dogs', 'Generally good']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Cancer Signs', href: '/health/dog-cancer-signs' }, { label: 'Dog Heart Disease', href: '/health/dog-heart-disease' }, { label: 'Dog Bloat / GDV', href: '/health/dog-bloat-gvd' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-irish-wolfhound" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <h2>The Lifespan Reality — Before You Decide</h2>
        <p>Irish Wolfhound owners describe the breed as "heartbreak dogs" — because loving them means accepting a much shorter relationship than any other breed. The median lifespan in published studies is 6.2-7.0 years. A significant percentage of Irish Wolfhounds die between 4-6 years from osteosarcoma — the most aggressive bone cancer in dogs. Owners who have had Wolfhounds describe the depth of the relationship, the quality of the years together, and the community of Wolfhound people as compensation. But the grief is real and the timeline is short. This should be known before the decision, not discovered afterward.</p>

        <BreedHealthCard name="Osteosarcoma (Bone Cancer)" riskLevel="very-high"
          description="Osteosarcoma is the most common cause of death in Irish Wolfhounds and several other giant breeds. The distal radius (front leg near the wrist) and proximal humerus (front leg near the shoulder) are the most common sites. Signs appear suddenly: lameness in one leg, local swelling, severe pain on touch. The disease is aggressive — most affected dogs have microscopic pulmonary metastasis at the time of diagnosis. Irish Wolfhound owners should know the signs and understand that any sudden lameness in a mature Wolfhound is an osteosarcoma until proven otherwise."
          signs={['Sudden onset of lameness in one leg', 'Swelling over a bone — particularly the wrist or shoulder area', 'Severe pain when the area is touched', 'No improvement with rest (unlike soft tissue injuries)']}
          management="Diagnosis via radiographs (osteosarcoma has characteristic radiographic appearance) and chest films for metastasis screening. Treatment options: limb amputation ± chemotherapy (median survival 10-12 months with amputation + chemo), palliative radiation (pain management without curative intent), or palliative care only. Bisphosphonates (pamidronate) and NSAIDs are used for pain management." />

        <BreedHealthCard name="Dilated Cardiomyopathy (DCM)" riskLevel="high"
          description="DCM — the heart muscle dilates and loses contractile function — is the second most common cause of death in Irish Wolfhounds. Echocardiogram (cardiac ultrasound) screening is recommended annually from age 3 in Irish Wolfhounds. Early detection allows medical management (pimobendan, ACE inhibitors) that extends quality life. The Irish Wolfhound Club of America participates in the OFA cardiac registry — responsible breeders screen breeding dogs annually."
          signs={['Exercise intolerance', 'Coughing, especially at night', 'Increased respiratory rate at rest', 'Weakness or collapse', 'Sudden death in some cases (arrhythmia)']}
          management="Annual echo from age 3. Pimobendan at the time of DCM diagnosis, before clinical signs develop (the PROTECT study supports this). ACE inhibitors once clinical heart failure begins. Antiarrhythmic medications if ventricular arrhythmias are present." />

        <h2>Temperament — The Gentle Giant Reality</h2>
        <p>Irish Wolfhounds are famous for their mismatch between size and personality — the tallest dog in existence typically also has a gentle, quiet, low-intensity temperament. They are not guard dogs — they lack the territorial instinct that guard breeds have. They are not high-energy dogs despite their size — they are sighthounds, built for short sprints, and they spend most of their time in calm repose. They are profoundly affectionate with their families and patient with children.</p>
        <p>The size creates practical challenges: they require a vehicle that physically fits them, they cannot be left in small spaces, countertop access is automatic (they do not need to jump — they can eat off the counter standing flat), and the physical space of a 170-lb dog is impossible to ignore. Giant breed food costs are significant. Veterinary costs are dosed by weight — every procedure, medication, and surgery costs proportionally more. These are practical considerations, not reasons not to own one, but they should be anticipated.</p>
      </div>
    </ArticleLayout>
  )
}
