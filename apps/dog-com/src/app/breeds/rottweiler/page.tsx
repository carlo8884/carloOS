import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Rottweiler Breed Guide — Osteosarcoma Risk | Dog.com', description: 'Rottweilers have elevated osteosarcoma (bone cancer) and subaortic stenosis (SAS) rates. Annual cardiac screening and bone cancer awareness are essential.', path: '/breeds/rottweiler', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Rottweiler Breed Guide', description: 'Osteosarcoma risk, subaortic stenosis, hip dysplasia, and health screening for Rottweilers.', url: 'https://dog.com/breeds/rottweiler', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function RottweilerPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Rottweiler Breed Guide', subtitle: 'One of the most powerful working breeds — Rottweilers excel as protection dogs, herders, search-and-rescue animals, and service dogs. Their loyalty and trainability make them exceptional in the right hands. Their significant health predispositions — particularly bone cancer — make informed ownership critical.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Rottweiler', href: '/breeds/rottweiler' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Doberman Pinscher Guide', href: '/breeds/doberman-pinscher', category: 'Breed Guide' }, { title: 'Bullmastiff Guide', href: '/breeds/bullmastiff', category: 'Breed Guide' }, { title: 'Best Pet Insurance', href: '/reviews/best-pet-insurance', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Health Screening</div>
          {['OFA hip and elbow clearances', 'CAER annual eye exam', 'Cardiac evaluation — cardiologist', 'Annual physical from age 6+', 'Bone cancer awareness (any limb lameness)', 'Pet insurance from puppyhood'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2">
              <span className="text-green-600 font-bold">✓</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Cancer Signs', href: '/health/dog-cancer-signs' }, { label: 'Dog Heart Disease', href: '/health/dog-heart-disease' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'German Shepherd vs Rottweiler', href: '/compare/german-shepherd-vs-rottweiler' },
          { label: 'Doberman Pinscher vs Rottweiler', href: '/compare/doberman-pinscher-vs-rottweiler' },
          { label: 'Cane Corso vs Rottweiler', href: '/compare/cane-corso-vs-rottweiler' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-rottweiler" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <BreedHealthCard name="Osteosarcoma (Bone Cancer)" riskLevel="very-high"
          description="Rottweilers have one of the highest osteosarcoma rates of any breed — exceeded only by Giant breeds (Irish Wolfhound, Great Dane). Osteosarcoma is an aggressive malignant bone tumor that most commonly affects the long bones of the limbs — distal radius (just above the wrist), proximal humerus (shoulder), and distal femur. It is locally destructive and metastasizes to the lungs early — typically before diagnosis. Median survival without treatment is 1–2 months; with limb amputation plus chemotherapy, approximately 10–12 months. Surgical alternatives (limb-sparing surgery) preserve the limb in some cases."
          signs={['Progressive single-limb lameness that does not respond to NSAIDs', 'Localized swelling at a specific bone site', 'Pain on palpation of the affected limb', 'Pathological fracture through the tumor site']}
          management="Any large breed dog with unremitting single-limb lameness unresponsive to appropriate anti-inflammatory therapy requires radiographs urgently — not after the next available appointment. Osteosarcoma diagnosis: radiographs showing characteristic bone lysis and proliferation, confirmed by biopsy. Treatment: amputation + chemotherapy (carboplatin or doxorubicin) is standard. Consult a veterinary oncologist." />

        <BreedHealthCard name="Subaortic Stenosis (SAS)" riskLevel="high"
          description="Rottweilers are one of the breeds with elevated risk for subvalvular aortic stenosis — a fibrous band below the aortic valve that obstructs blood flow from the left ventricle. Detected as a heart murmur on auscultation; severity confirmed by echocardiogram with Doppler. Mild SAS: often no clinical impact but murmur present. Severe SAS: exercise intolerance, syncope, sudden cardiac death. The Rottweiler cardiac genetics are complex — some SAS in Rottweilers has a polygenic inheritance pattern."
          signs={['Heart murmur — detected by veterinarian on exam', 'Exercise intolerance in moderate to severe cases', 'Syncope (fainting) in severe cases']}
          management="Cardiac auscultation at all wellness visits. Referral to cardiologist (DACVIM Cardiology) for echocardiogram when murmur detected. Atenolol for moderate-severe SAS. Annual monitoring. Avoid strenuous exercise in dogs with significant gradient." />

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high"
          description="Rottweilers rank among the most commonly affected large breeds for both hip and elbow dysplasia. Their significant muscle mass can mask gait abnormalities — dysplastic Rottweilers may appear sound while experiencing significant joint pain. OFA hip and elbow clearances on breeding dogs reduce but do not eliminate risk in offspring."
          signs={['Stiffness after rest', 'Reduced hind limb flexibility', 'Bunny-hopping gait (bilateral hip dysplasia)', 'Elbow lameness — forelimb involvement']}
          management="Lean body weight throughout life — most critical management. Fish oil from young adulthood. Dasuquin Advanced for joint support. NSAIDs when symptomatic. Surgical options for significant dysplasia: total hip replacement, FHO, elbow surgery depending on pathology." />

        <h2>Training — Structure Required from Day One</h2>
        <DropCap>Rottweilers are powerful, confident dogs with natural protective instincts. Without consistent structure, training, and socialization from early puppyhood, these traits can become management problems. A Rottweiler that has not been properly socialized and trained is a liability; a properly trained and socialized Rottweiler is one of the most reliable, trustworthy family dogs in existence.</DropCap>

        <CalloutBox variant="warning" title="Unremitting limb lameness is urgent">
          A large-breed dog with persistent single-limb lameness that does not improve with rest or NSAIDs should have radiographs taken within days, not weeks. Osteosarcoma in Rottweilers metastasizes to the lungs early — often before the limb signs are obvious. Early imaging is the difference between options and palliative care.
        </CalloutBox>
        <p>Training approach: positive reinforcement methods work extremely well with Rottweilers — they are highly motivated by food and praise and learn quickly. Dominance-based methods and physical correction are contraindicated — they damage the relationship and create unpredictable responses in a powerful breed. Enroll in a positive reinforcement obedience class from 8 weeks (puppy class) and continue through at least a basic Canine Good Citizen certification.</p>

        <h2>Early Spay/Neuter and Cancer Risk</h2>
        <p>Research on Rottweilers specifically has found associations between early spay/neuter (before 1 year) and increased risk of bone cancer and certain joint disorders. A published study found that Rottweilers spayed or neutered before 1 year had a significantly higher osteosarcoma rate than intact dogs or those altered after 1 year. This aligns with similar findings in other large breeds and is one reason many internists and oncologists recommend delaying spay/neuter in large breed dogs until 12–18 months. Discuss the timing with your veterinarian in the context of your specific household situation.</p>
      </div>
    </ArticleLayout>
  )
}
