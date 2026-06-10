import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, StockImage } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Morris Animal Foundation: Golden Retriever Lifetime Study — Cancer and Longevity', url: 'https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study', publisher: 'Morris Animal Foundation' },
  { label: 'Orthopedic Foundation for Animals (OFA): Golden Retriever Hip and Cardiac Statistics', url: 'https://www.ofa.org', publisher: 'OFA' },
  { label: 'AVMA: Cancer Prevalence and Monitoring in Golden Retrievers', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/cancer-animals', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Hemangiosarcoma in Dogs', url: 'https://www.merckvetmanual.com/integumentary-system/tumors-of-the-skin-and-soft-tissues-in-dogs-and-cats/hemangiosarcoma-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
]


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Golden Retriever Health Guide — Cancer, Hip Dysplasia | Dog.com',
  description: 'Over 60% of Golden Retrievers develop cancer (Morris Animal Foundation lifetime study). Complete guide to hemangiosarcoma, lymphoma, hip dysplasia, SAS.',
  path: '/health/golden-retriever-health',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Golden Retriever Health Guide',
  description: 'Complete Golden Retriever health guide covering cancer risk, hip dysplasia, SAS, and preventive care.',
  url: 'https://dog.com/health/golden-retriever-health',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Golden Retriever Health Guide',
  description: 'Cancer risk, monitoring, and specialist referral for Golden Retrievers.',
  url: 'https://dog.com/health/golden-retriever-health',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
})
const combinedSchemaAll = combineSchemas(schema, medicalSchema)

export default function GoldenRetrieverHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="dog-com"
      contentType="health"
      hero={{
        title: 'Golden Retriever Health Guide',
        subtitle: 'More than 60% of Golden Retrievers develop cancer in their lifetime. Understanding the conditions they\'re prone to — and the monitoring schedule that catches problems early — is the most important thing a Golden owner can do.',
        category: 'Breed Health Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'Golden Retriever Health', href: '/health/golden-retriever-health' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents items={[
            { label: 'Cancer Risk Overview', href: '#cancer' },
            { label: 'Hemangiosarcoma', href: '#hemangiosarcoma' },
            { label: 'Lymphoma', href: '#lymphoma' },
            { label: 'Hip & Elbow Dysplasia', href: '#joints' },
            { label: 'Subvalvular Aortic Stenosis', href: '#sas' },
            { label: 'Skin & Allergies', href: '#allergies' },
            { label: 'Hypothyroidism', href: '#thyroid' },
            { label: 'Preventive Care Schedule', href: '#preventive' },
            { label: 'Insurance Recommendation', href: '#insurance' },
          ]} />
          <RelatedLinks title="Related" links={[
            { label: 'Golden Retriever Breed Profile', href: '/breeds/golden-retriever' },
            { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Find a Specialist', href: '/find-a-vet' },
            { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
          ]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com"
            title="Free Dog Health Tips"
            subtitle="Breed spotlights and health alerts every Tuesday."
            source="health-golden-retriever" />
        </>
      }
      relatedLinks={[
        { title: 'Golden Retriever Breed Guide', href: '/breeds/golden-retriever', category: 'Breed Profile' },
        { title: 'Best Pet Insurance', href: '/reviews/best-pet-insurance', category: 'Insurance' },
        { title: 'Find a Veterinary Oncologist', href: '/find-a-vet', category: 'Specialist Care' },
      ]}
    >
      <div className="carloOS-article">

        <StockImage manifestKey="dog-com:breed-golden-retriever" alt="A Golden Retriever in natural light" aspect="16:9" priority />

        <p>The Golden Retriever is America&apos;s most beloved family dog — and one of the breeds that most requires informed, proactive health management. The combination of their cancer predisposition, orthopedic vulnerabilities, and cardiac risks means that Golden ownership carries real medical responsibilities that owners deserve to understand from the start.</p>

        <p>This is not a reason to avoid the breed. It is a reason to own one with your eyes open, with good veterinary relationships, appropriate insurance enrolled before conditions develop, and the monitoring habits that make early detection possible.</p>

        <h2 id="cancer">Cancer Risk — The Central Challenge</h2>

        <p>The statistic that stops people: <strong>over 60% of Golden Retrievers will develop cancer in their lifetime</strong>, compared to approximately 25% of all dogs. This is the defining health challenge of the breed and the primary cause of their shortened lifespan relative to similar-sized dogs.</p>

        <p>The <a href="https://www.morrisanimalfoundation.org/golden-retriever-lifetime-study" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Morris Animal Foundation</a>&apos;s Golden Retriever Lifetime Study — the largest dog health study ever conducted — has been tracking over 3,000 Golden Retrievers since 2012, collecting data on genetics, environment, and disease. While best answers are still emerging, early findings have clarified which cancer types are most prevalent and which risk factors are modifiable.</p>

        <p>The most common cancers in Goldens are hemangiosarcoma, lymphoma, osteosarcoma, and mast cell tumors. Each has a different presentation, prognosis, and screening approach.</p>

        <h2 id="hemangiosarcoma">Hemangiosarcoma</h2>

        <BreedHealthCard
          name="Hemangiosarcoma"
          riskLevel="very-high"
          description="Hemangiosarcoma (HSA) is a malignant tumor of blood vessel cells, most commonly affecting the spleen, liver, and heart in Golden Retrievers. It is one of the most dangerous cancers in dogs because it typically causes no symptoms until it ruptures, causing sudden, life-threatening internal bleeding. A Golden that was completely normal can collapse from hemorrhagic shock within hours of a rupture event."
          signs={['Sudden collapse or weakness', 'Pale or white gums', 'Distended abdomen', 'Rapid breathing', 'Extreme lethargy']}
          management="Annual abdominal ultrasound from age 6–7 is the best current screening tool for splenic HSA. Cardiac HSA can be detected on echocardiogram. When caught before rupture, surgical removal of the spleen extends survival time significantly. Chemotherapy (doxorubicin-based protocols) adds additional months. A supplement called I'm-Yunity (PSK mushroom extract) showed promising results in a Stanford study for slowing post-surgical tumor regrowth."
          guideHref="/find-a-vet"
          guideLabel="Find a veterinary oncologist →"
        />

        <h2 id="lymphoma">Lymphoma</h2>

        <BreedHealthCard
          name="Lymphoma"
          riskLevel="very-high"
          description="Lymphoma is one of the most common cancers in all dogs, but Golden Retrievers are overrepresented. It is cancer of the lymphocytes (white blood cells) and typically presents as painless swelling of the lymph nodes. Unlike hemangiosarcoma, lymphoma is usually detectable before crisis — which is why owners who know where to feel for lymph nodes are at a real advantage."
          signs={['Firm, enlarged lymph nodes (under jaw, shoulder, groin, behind knees)', 'Weight loss', 'Decreased appetite', 'Lethargy', 'Increased thirst/urination']}
          management="Lymphoma is treated with chemotherapy (CHOP protocol — cyclophosphamide, doxorubicin, vincristine, prednisone). Response rates in dogs are high — 60–90% achieve remission. Median survival with treatment is 12–14 months; some dogs live significantly longer. Learn to check your Golden's lymph nodes monthly from middle age. Swollen nodes that persist more than 2 weeks warrant veterinary evaluation."
        />

        <h2 id="joints">Hip & Elbow Dysplasia</h2>

        <BreedHealthCard
          name="Hip & Elbow Dysplasia"
          riskLevel="high"
          description="Hip and elbow dysplasia are developmental joint disorders with a strong genetic component. Dysplasia means abnormal development — in the hip, this results in a loose, poorly fitting joint that progressively develops arthritis. In the elbow, fragmented bone fragments cause inflammation and pain. Both conditions are inherited, but environmental factors (rapid growth, excessive high-impact exercise during development) influence severity."
          signs={['Difficulty rising from rest', 'Stiffness after exercise', 'Reluctance to climb stairs', 'Bunny-hopping gait (hip)', 'Forelimb lameness (elbow)', 'Reduced exercise tolerance']}
          management="Buy only from breeders with OFA hip and elbow certification on both parents. Weight management is the most impactful intervention — every pound above ideal body weight accelerates joint disease. Omega-3 fatty acid supplementation has documented anti-inflammatory benefit. NSAIDs for pain management when needed. Joint replacement surgery is effective for severe cases."
          guideHref="/find-a-vet"
          guideLabel="Find an orthopedic specialist →"
        />

        <h2 id="sas">Subvalvular Aortic Stenosis (SAS)</h2>

        <BreedHealthCard
          name="Subvalvular Aortic Stenosis"
          riskLevel="high"
          description="SAS is a congenital heart defect in which abnormal tissue below the aortic valve partially obstructs blood flow out of the left ventricle. Golden Retrievers have one of the highest prevalence rates of SAS of any breed. Severity varies widely — mild cases may cause no symptoms and have a normal lifespan, while severe cases cause exercise intolerance, fainting, and sudden death."
          signs={['Heart murmur detected at wellness exam', 'Exercise intolerance', 'Fainting or collapse during exercise', 'Weakness or sudden death (severe cases)']}
          management="SAS is diagnosed on echocardiogram by a veterinary cardiologist. Mild cases: annual monitoring with cardiology. Moderate-severe: medications to reduce cardiac workload and restrict exercise. Balloon dilation catheterization is sometimes performed but has variable long-term outcomes. Annual cardiac auscultation at wellness exams catches new murmurs — all Goldens with murmurs should see a cardiologist."
        />

        <h2 id="allergies">Skin Allergies & Atopic Dermatitis</h2>

        <BreedHealthCard
          name="Atopic Dermatitis (Skin Allergies)"
          riskLevel="very-high"
          description="Environmental allergies (atopic dermatitis) are extremely common in Golden Retrievers. The immune system overreacts to common environmental triggers — pollen, dust mites, mold, grass — causing chronic skin inflammation. Food allergies are less common but do occur. Atopic dermatitis is a lifelong condition that is managed rather than cured."
          signs={['Paw licking and chewing', 'Recurrent ear infections', 'Face rubbing', 'Skin redness and rash', 'Belly and groin skin changes', 'Hair loss from scratching']}
          management="Apoquel (oclacitinib) and Cytopoint (lokivetmab injection) are the current standard of care — both are highly effective and much safer than long-term steroids. Allergy testing (intradermal or serum) can identify specific triggers and guide immunotherapy. Regular ear cleaning and prompt treatment of ear infections prevent secondary damage."
        />

        <h2 id="thyroid">Hypothyroidism</h2>

        <BreedHealthCard
          name="Hypothyroidism"
          riskLevel="moderate"
          description="Hypothyroidism (underactive thyroid) is common in middle-aged and older Golden Retrievers. The thyroid gland produces insufficient thyroid hormone, slowing metabolism. It develops gradually and is often attributed to aging or weight gain before the diagnosis is made. Easily identified on bloodwork and straightforwardly managed."
          signs={['Weight gain without dietary changes', 'Lethargy and reduced activity', 'Cold intolerance', 'Coat thinning and skin changes', 'Slow heart rate']}
          management="Diagnosed with a serum T4 and TSH level on routine bloodwork. Treated with daily oral levothyroxine (Soloxine, generic) — inexpensive and highly effective. Most dogs return to normal energy and weight within 4–8 weeks of starting treatment. Annual bloodwork from age 6 catches this before significant symptoms develop."
        />

        <h2 id="preventive">Preventive Care Schedule for Golden Retrievers</h2>

        <p>The following schedule reflects current veterinary recommendations specifically for Golden Retrievers, not just generic dog care. The increased monitoring frequency in the senior years reflects the breed&apos;s significantly elevated cancer risk.</p>

        <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', overflow: 'hidden', margin: '28px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-dark)' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Age</th>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Recommended Care</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['0–1 year', 'Puppy vaccines, spay/neuter discussion, hip/elbow baseline X-rays (if breeding), OFA cardiac evaluation'],
                ['1–5 years', 'Annual wellness exam, vaccine boosters, heartworm/flea prevention, annual bloodwork from age 3'],
                ['6–7 years', 'Annual abdominal ultrasound (HSA screening), cardiac auscultation, full bloodwork including T4, dental evaluation'],
                ['8+ years', 'Every 6 months: full exam, bloodwork, urinalysis. Annual: abdominal ultrasound, chest X-rays, echocardiogram if murmur present'],
              ].map(([age, care]) => (
                <tr key={age}>
                  <td style={{ padding: '12px 16px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)', whiteSpace: 'nowrap' }}>{age}</td>
                  <td style={{ padding: '12px 16px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)', lineHeight: 1.6 }}>{care}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="insurance">Pet Insurance — Why It Matters More for Goldens</h2>

        <p>The financial case for pet insurance is stronger for Golden Retrievers than almost any other breed. With a 60%+ lifetime cancer rate and real costs of $8,000–25,000 for cancer treatment, the expected value calculation is different than for lower-risk breeds.</p>

        <p>The single most important rule: <strong>enroll before your first vet visit</strong>. Any condition documented in records before enrollment is classified as pre-existing and excluded. A Golden diagnosed with a murmur at their first puppy exam has a cardiac exclusion for life in most policies.</p>

        <p>For Goldens specifically, we recommend <strong>Trupanion</strong> (direct vet payment, unlimited payouts, 90% reimbursement) or <strong>Healthy Paws</strong> (fast claims processing per the carrier, no payout limits, lower premiums). Both handle cancer treatment without per-incident caps — which matters when hemangiosarcoma treatment runs $5,000–12,000.</p>

        <div style={{ marginTop: '8px' }}>
          <Link href="/reviews/best-pet-insurance"
            style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--brand-primary)', color: 'white', padding: '12px 24px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            Compare Pet Insurance Plans →
          </Link>
        </div>


          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
    </>
  )
}
