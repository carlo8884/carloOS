import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Bernese Mountain Dog Guide — Cancer, 7-Year Lifespan & Histiocytic Sarcoma | Dog.com', description: 'Berners have the shortest lifespan of any breed (~7 years). Cancer causes ~50% of deaths, with histiocytic sarcoma a breed-specific malignancy. What every Berner owner must know.', path: '/breeds/bernese-mountain-dog', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Bernese Mountain Dog Breed Guide', description: 'Cancer, histiocytic sarcoma, lifespan, and health screening for Bernese Mountain Dogs.', url: 'https://dog.com/breeds/bernese-mountain-dog', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function BerneseMountainDogPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Bernese Mountain Dog Breed Guide', subtitle: 'Gentle, devoted, and extraordinarily beautiful — Bernese Mountain Dogs are among the most loved family breeds. They are also among the shortest-lived and most cancer-prone. The average lifespan is 7–8 years. Approximately 50% die from cancer. This is not meant to discourage ownership — it is information every prospective Berner owner deserves to have before falling in love.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Bernese Mountain Dog', href: '/breeds/bernese-mountain-dog' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '70–115 lbs'], ['Lifespan', '7–8 years average'], ['Cancer mortality', '~50% of deaths'], ['Histiocytic sarcoma', 'Breed-specific — elevated rate'], ['Hip dysplasia', 'High prevalence'], ['Temperament', 'Gentle, loyal, calm']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Cancer Signs', href: '/health/dog-cancer-signs' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Senior Dog Care', href: '/health/senior-dog-care' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-berner" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Histiocytic Sarcoma" riskLevel="very-high"
          description="Histiocytic sarcoma is a malignant proliferation of histiocytes (immune cells) that is dramatically overrepresented in Bernese Mountain Dogs — they develop this cancer at rates orders of magnitude higher than other breeds. It can present as localized (affecting a single site — spleen, lung, bone marrow, skin) or disseminated (systemic, affecting multiple organs simultaneously). Disseminated histiocytic sarcoma is rapidly fatal — median survival even with chemotherapy (CCNU/lomustine) is 2–4 months. Localized disease treated surgically has a more variable prognosis."
          signs={['Rapid weight loss and muscle wasting', 'Lethargy and anorexia', 'Abdominal distension (splenic involvement)', 'Lameness (bone involvement)', 'Pale gums (anemia from bone marrow involvement)', 'Neurological signs (CNS involvement)']}
          management="No prevention currently available. Rapid veterinary evaluation for any unexplained decline, weight loss, or systemic signs in a Berner. Chemotherapy (CCNU) for disseminated disease. Surgical excision for localized disease. Veterinary oncologist involvement for all cases. Research into histiocytic sarcoma genetics in Berners is ongoing — the Bernese Mountain Dog Club of America funds breed health research." />

        <BreedHealthCard name="Malignant Histiocytosis and Other Cancers" riskLevel="very-high"
          description="Beyond histiocytic sarcoma, Bernese Mountain Dogs have elevated rates of mast cell tumors, lymphoma, and osteosarcoma. The breed's overall cancer mortality rate (~50%) reflects this multi-cancer predisposition. The genetic basis is being studied — the founder effect of the breed (a small founding population in Switzerland) likely concentrates cancer-predisposing genetic variants."
          signs={['New lumps — aspirate any mass immediately (no wait-and-see in this breed)', 'Lymph node enlargement', 'Bone pain or lameness', 'Systemic signs of illness in a middle-aged Berner']}
          management="Every new lump on a Berner requires a fine needle aspirate — no exceptions, no waiting. Annual physical with thorough lymph node palpation and abdominal palpation from age 5. Abdominal ultrasound annually from age 6 for splenic surveillance (histiocytic sarcoma often involves the spleen)." />

        <h2>The Lifespan Reality</h2>
        <p>The average Bernese Mountain Dog lifespan of 7–8 years is among the shortest of any purebred. The Swiss saying — "Three years a young dog, three years a good dog, three years an old dog" — captures both the love owners have for the breed and the sorrow of their brevity. Understanding this before acquiring a Berner allows owners to make the most of the years they have, invest in appropriate health screening, purchase pet insurance before any conditions develop, and make informed end-of-life decisions when the time comes without the additional shock of unexpected early loss.</p>
        <p>Some lines within the breed show longer lifespans — breeders who specifically track and select for longevity are producing dogs that live to 9–10 years at higher rates. Asking a breeder about the lifespans of dogs in their lines (not just the parents, but grandparents and great-grandparents) is meaningful due diligence.</p>

        <h2>Hip and Elbow Dysplasia</h2>
        <p>Bernese Mountain Dogs have high rates of hip and elbow dysplasia — compounded by their significant body weight. OFA clearances on both parents are a minimum baseline for responsible breeding. Elbow dysplasia in Berners is particularly common — the elbows should be radiographed and OFA-evaluated in addition to hips. Management follows the standard protocol for large breed joint disease: lean weight, fish oil, joint supplementation, NSAIDs when symptomatic, surgical options for severe cases.</p>

        <h2>Pet Insurance — Get It at 8 Weeks</h2>
        <p>Pet insurance for Bernese Mountain Dogs should be purchased before the dog is 8 weeks old — ideally before any wellness visit that might create a pre-existing condition record. Given the breed's cancer predisposition and short lifespan, the cost-benefit calculation on pet insurance is strongly positive. A histiocytic sarcoma workup, treatment, and oncology visits can cost $5,000–20,000. Insurance that covers this — purchased before any condition develops — changes the financial reality of managing a breed-specific cancer. Compare policies specifically for cancer coverage, specialist referral coverage, and oncology treatment limits.</p>
      </div>
    </ArticleLayout>
  )
}
