import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Doberman Pinscher Breed Guide — DCM Screening, vWD & Wobbler Syndrome | Dog.com', description: 'Dobermans have the highest DCM rate of any breed (up to 58% by age 7). Annual Holter + echo is required. vWD bleeding disorder and cervical spondylomyelopathy (Wobbler) also covered.', path: '/breeds/doberman-pinscher', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Doberman Pinscher Breed Guide', description: 'DCM cardiac screening, von Willebrand disease, and Wobbler syndrome for Dobermans.', url: 'https://dog.com/breeds/doberman-pinscher', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function DobermanPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Doberman Pinscher Breed Guide', subtitle: 'Athletic, loyal, and highly intelligent — Dobermans are among the most capable working dogs. They are also among the most health-compromised large breeds, with a cardiac disease rate that exceeds any other breed. Understanding the health landscape is not optional for a responsible Doberman owner.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Doberman Pinscher', href: '/breeds/doberman-pinscher' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '60–100 lbs'], ['Lifespan', '10–13 years'], ['DCM prevalence', 'Up to 58% develop DCM by age 7'], ['Cardiac screening', 'Annual echo + Holter from age 3'], ['vWD', 'Most common bleeding disorder in breed'], ['Temperament', 'Loyal, alert, trainable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Heart Disease', href: '/health/dog-heart-disease' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'IVDD', href: '/health/intervertebral-disc-disease' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-doberman" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Dilated Cardiomyopathy (DCM)" riskLevel="very-high"
          description="Doberman Pinschers have the highest prevalence of DCM of any breed studied — multiple studies report 40–58% of Dobermans develop DCM by age 7, and nearly all by age 10. DCM in Dobermans has two phases: the occult (preclinical) phase where the heart muscle is weakening but no clinical signs are present, and the overt phase where CHF or sudden cardiac death occurs. The most dangerous aspect: sudden cardiac death from ventricular tachycardia or fibrillation can occur in occult-phase dogs with no warning. Annual screening is not precautionary — it is the standard of care for this breed."
          signs={['May have no signs until sudden collapse', 'Exercise intolerance', 'Episodic weakness or syncope', 'Cough when CHF develops', 'Abdominal distension (ascites in right-sided CHF)']}
          management="Annual echocardiogram from age 3 to detect cardiac enlargement. Annual 24-hour Holter monitor to detect ventricular premature contractions (VPCs) — the electrical warning of DCM before structural changes appear. Pimobendan started when occult DCM is detected. ACE inhibitor added at first sign of cardiac enlargement. DNA test available for one PDK4 mutation (identifies some but not all affected dogs — negative test does not rule out DCM)." />

        <BreedHealthCard name="von Willebrand Disease (vWD)" riskLevel="high"
          description="vWD is the most common inherited bleeding disorder in dogs, and Dobermans are the most commonly affected breed — up to 70% of Dobermans carry at least one copy of the mutation. vWD Type I (Dobermans) is the mildest form — affected dogs have reduced but not absent von Willebrand factor (a clotting protein) and may bleed excessively from wounds, surgery, or heat cycles. Type I Dobermans often live normally without incident but the disorder becomes apparent during surgery, trauma, or whelping."
          signs={['Prolonged bleeding from minor wounds', 'Excessive bleeding during heat cycle', 'Surgical bleeding (detected when spay/neuter is performed)', 'Nose bleeds (epistaxis) — less common in Type I']}
          management="DNA test available — determines clear, carrier, or affected status. All Dobermans should be vWD-tested before any elective surgery. Affected Dobermans should carry medical alert information. Desmopressin (DDAVP) administered before planned procedures temporarily increases vWF levels. Blood transfusion or fresh frozen plasma for acute bleeding emergencies. Responsible breeders DNA-test and avoid breeding two affected dogs." />

        <BreedHealthCard name="Cervical Spondylomyelopathy (Wobbler Syndrome)" riskLevel="moderate"
          description="Wobbler syndrome is spinal cord compression at the cervical (neck) vertebrae — caused by disc protrusion, bone malformation, or ligamentous hypertrophy at C5-C7 in large breeds. Dobermans and Great Danes are the most affected breeds. The condition causes progressive ataxia (wobbling gait, particularly of the hindlimbs) and in severe cases, weakness or paralysis. The name 'Wobbler syndrome' comes from the characteristic swaying, drunken gait of affected dogs."
          signs={['Wobbling or swaying gait — especially hind limbs', 'Short, stilted neck movement', 'Reluctance to flex or extend neck', 'Progressive weakness', 'Falling when turning']}
          management="Medical management: anti-inflammatory treatment, strict activity restriction. Surgical management: ventral slot decompression or dorsal laminectomy for cord decompression. Prognosis: better for acute presentations than chronic progressive disease. Board-certified neurologist referral for diagnosis and treatment planning." />

        <h2>The Doberman Screening Protocol</h2>
        <p>Every Doberman owner should follow this protocol from age 3:</p>
        <ul>
          <li><strong>Annual echocardiogram</strong> to assess ventricular dimensions and function — detects structural DCM before clinical signs</li>
          <li><strong>Annual 24-hour Holter monitor</strong> — detects ventricular premature contractions (VPCs), the electrical precursor to DCM-related sudden death. More than 50 VPCs per 24 hours warrants antiarrhythmic therapy consideration</li>
          <li><strong>vWD DNA test</strong> — once, before first surgery. Know the status before emergencies occur</li>
          <li><strong>Pet insurance</strong> — obtained as a puppy before conditions are detected. A Doberman with DCM will need echocardiograms, Holter monitors, pimobendan, ACE inhibitors, and potentially emergency care. Insurance coverage changes the financial calculus of optimal management</li>
        </ul>

        <h2>Exercise and Activity</h2>
        <p>Dobermans are high-energy working dogs that require significant daily exercise — 1–2 hours of vigorous activity for young adults. Mental stimulation (obedience training, scent work, protection sports) is as important as physical exercise for this highly intelligent breed. Without adequate mental and physical outlets, Dobermans develop destructive behaviors and anxiety. However: once DCM is detected, exercise should be moderated — strenuous activity in dogs with significant VPCs or structural cardiac disease carries risk of triggering arrhythmia. Discuss exercise parameters with the cardiologist once cardiac disease is identified.</p>
      </div>
    </ArticleLayout>
  )
}
