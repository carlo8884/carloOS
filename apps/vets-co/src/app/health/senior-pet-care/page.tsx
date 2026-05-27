import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Senior Dog Care — Biannual Exams, Screening & Quality of Life | Vets.co', description: 'Senior dogs need more frequent veterinary care, not less. The biannual exam protocol, what screenings matter at 7+, and how to assess and maintain quality of life in aging dogs.', path: '/health/senior-pet-care', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Senior Dog Care Guide', description: 'Biannual exams, screening protocols, and quality of life for senior dogs.', url: 'https://vets.co/health/senior-pet-care', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Senior Dog Care', description: 'Veterinary care protocols and quality of life for aging dogs.', url: 'https://vets.co/health/senior-pet-care', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function SeniorPetCarePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Senior Dog Care', subtitle: 'A dog is considered senior at 7 years for most breeds — earlier for giants (5–6 years), later for small breeds (9–10 years). Senior dogs have more to gain from regular veterinary care, not less. The goal is maximum quality of life for maximum time.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Senior Pet Care', href: '/health/senior-pet-care' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Senior Screening Checklist</div>
            {[['Biannual physical exams', '✓'], ['Annual CBC + chemistry + UA', '✓'], ['Blood pressure measurement', '✓'], ['Thyroid screen (T4)', '✓ age 7+'], ['Abdominal ultrasound', '✓ Golden/Lab/GSD 7+'], ['Dental evaluation', '✓ every exam'], ['Pain assessment', '✓ every exam'], ['Cognitive function check', '✓ every exam']].map(([item, check]) => (
              <div key={item} className="flex justify-between py-1.5 border-b border-brand-border last:border-0 text-xs">
                <span className="text-brand-text-mid">{item}</span>
                <span className="text-green-600 font-bold">{check}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Find a Specialist', href: '/find-a-vet' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-senior-care" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Biannual Exams Matter</h2>
          <p>A year in a senior dog's life corresponds to 5–7 human years. Conditions that develop gradually — dental disease, kidney disease, hypothyroidism, arthritis, cardiac disease, early cancer — can progress from manageable to advanced within one annual exam cycle. The standard of care for dogs 7+ is twice-yearly comprehensive examinations. This is not excessive — it is appropriate for the rate at which senior dogs' health changes.</p>
          <p>Each biannual senior exam should include: a comprehensive physical examination with specific attention to lymph nodes (lymphoma screening), abdominal palpation (organ size and masses), cardiac auscultation (murmur grading), orthopedic assessment (joint pain, range of motion), ophthalmic assessment (cataracts, early glaucoma), dental grading, body weight and condition scoring, and a brief cognitive and behavioral history review.</p>

          <h2>What Bloodwork Reveals</h2>
          <p>Annual bloodwork in senior dogs — CBC (complete blood count) plus comprehensive chemistry panel plus urinalysis — screens for the most common senior health conditions before clinical signs develop. Key findings:</p>
          <ul>
            <li><strong>Kidney disease:</strong> SDMA elevation detects CKD when 25% of kidney function is lost — years before BUN and creatinine become abnormal. Early detection allows dietary intervention before significant disease progression.</li>
            <li><strong>Hypothyroidism:</strong> Low T4 in a middle-aged to older dog with appropriate clinical signs. Easily managed with daily medication.</li>
            <li><strong>Diabetes:</strong> Elevated fasting glucose with appropriate history.</li>
            <li><strong>Liver disease:</strong> Elevated liver enzymes may indicate hepatic disease, Cushing's disease, or medication effects.</li>
            <li><strong>Anemia:</strong> May indicate blood loss, bone marrow disease, or chronic disease.</li>
          </ul>

          <h2>Blood Pressure — The Overlooked Vital</h2>
          <p>Hypertension (high blood pressure) occurs in senior dogs — commonly secondary to kidney disease, hypothyroidism, Cushing's disease, or cardiac disease. Hypertension causes retinal detachment and blindness, progresses kidney disease, and affects cardiac function. It is detected only by measurement and is easily treated once identified. Blood pressure should be measured at every senior wellness visit using a Doppler or oscillometric device. A normal canine blood pressure is under 160 mmHg systolic.</p>

          <h2>Cognitive Dysfunction Syndrome</h2>
          <p>Cognitive dysfunction syndrome (CDS) — the canine equivalent of dementia — affects approximately 22% of dogs 9–11 years and over 60% of dogs 15+ years (Madari et al., Appl Anim Behav Sci). Signs: disorientation (getting stuck in corners, losing their way in familiar places), altered sleep-wake cycles (sleeping during day, awake and vocal at night), house soiling (forgetting trained behaviors), reduced interest in interaction, staring at walls.</p>
          <p>The DISHAA scale (Disorientation, Interactions, Sleep/wake, Housetraining, Activity, Anxiety) standardizes CDS assessment. CDS is underdiagnosed — owners frequently attribute signs to "just getting old." While there is no cure, management helps: Purina Pro Plan Bright Mind (has clinical evidence), Anipryl (selegiline — FDA approved for CDS), environmental enrichment, regular exercise maintaining cognitive engagement, and Apoaequorin (Neutricks) which has some supporting evidence.</p>

          <h2>Quality of Life Assessment</h2>
          <p>For senior dogs with chronic illness, a formal quality of life assessment helps owners and veterinarians make difficult decisions objectively. The Lap of Love Quality of Life Scale and the HHHHHMM scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad) provide structured frameworks. The goal is not length of life alone — it is maximum quality of life for whatever time remains. Regular QoL conversations with your veterinarian starting in early senior years, before crisis, allow more thoughtful and less emotionally reactive end-of-life decision-making.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
