import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Cognitive Dysfunction Syndrome in Dogs — Dog Dementia Signs | Vets.co', description: 'CDS (dog dementia) affects 22% of dogs 9-11 years. Disorientation, sleep disruption, house soiling, and anxiety. Purina Bright Mind, Anipryl.', path: '/health/cognitive-dysfunction', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Cognitive Dysfunction Syndrome in Dogs', description: 'Signs, diagnosis, and management of canine cognitive dysfunction syndrome (dog dementia).', url: 'https://vets.co/health/cognitive-dysfunction', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Cognitive Dysfunction Syndrome in Dogs', description: 'Signs, diagnosis, and treatment of CDS — canine cognitive dysfunction.', url: 'https://vets.co/health/cognitive-dysfunction', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'Merck Veterinary Manual: Cognitive Dysfunction Syndrome in Dogs', url: 'https://www.merckvetmanual.com/behavior/behavior-of-dogs/cognitive-dysfunction-syndrome-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'Madari A et al. Assessment of severity and progression of canine cognitive dysfunction syndrome using the CAnine DEmentia Scale (CADES). Appl Anim Behav Sci. 2015;171:138-145.', publisher: 'Applied Animal Behaviour Science' },
  { label: 'Landsberg GM et al. Cognitive dysfunction syndrome: a disease of canine and feline brain aging. Vet Clin Small Anim. 2012;42(4):749-768.', publisher: 'Veterinary Clinics of North America' },
]
export default function CognitiveDysfunctionPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Cognitive Dysfunction Syndrome in Dogs', subtitle: 'Cognitive Dysfunction Syndrome (CDS) — the canine equivalent of Alzheimer\'s disease — affects approximately 22% of dogs aged 9–11 years and over 60% of dogs aged 15+ (Madari et al., Appl Anim Behav Sci). Signs are frequently misattributed to "just getting old" and undertreated. While there is no cure, effective management strategies improve quality of life significantly.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Cognitive Dysfunction', href: '/health/cognitive-dysfunction' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Anxiety in Dogs', href: '/health/anxiety-in-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">DISHAA Signs</div>
            {[['D — Disorientation', 'Gets lost in familiar spaces, staring at walls'], ['I — Interactions', 'Less interested in family, altered greetings'], ['S — Sleep/wake', 'Active at night, sleeps during day'], ['H — Housetraining', 'Indoor accidents despite prior reliability'], ['A — Activity', 'Less active, decreased interest in play'], ['A — Anxiety', 'Increased anxiety, restlessness']].map(([letter, desc]) => (
              <div key={letter} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{letter}</div>
                <div className="text-2xs text-brand-text-light">{desc}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-cds" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

          <h2>The DISHAA Framework</h2>
          <DropCap>The DISHAA acronym provides a standardized clinical assessment for CDS — Disorientation, Interactions (changes), Sleep/wake cycle changes, Housetraining regression, Activity changes, and Anxiety. Any 1–2 signs from different categories suggest possible CDS; 3+ signs across multiple categories is highly consistent with the diagnosis. The DISHAA assessment is completed by the owner based on observations at home — it provides more clinically relevant information than what the veterinarian observes in the exam room (dogs often appear more alert during veterinary visits due to the stimulation).</DropCap>
          <p>The most diagnostically significant and often first-noticed sign: the dog that was reliable for housetraining for years begins having indoor accidents — not because of a UTI (urinalysis normal) but because the cognitive circuits that maintained that trained behavior are degrading. A senior dog with a normal urinalysis and new housetraining regression has CDS until proven otherwise.</p>

          <h2>Pathophysiology — What Changes in the Brain</h2>
          <p>CDS shares pathological features with human Alzheimer's disease: accumulation of beta-amyloid plaques in the brain, oxidative damage to neurons, reduced brain glucose metabolism, and progressive neuronal loss. The frontal lobe and hippocampus are most affected — areas responsible for learning, memory, and executive function. Brain imaging (MRI) in affected dogs shows cerebral atrophy, ventricular enlargement, and white matter changes. The molecular similarity between canine CDS and human Alzheimer's has made dogs valuable natural models for Alzheimer's research, and vice versa — advances in human Alzheimer's research increasingly translate to canine CDS management.</p>

          <h2>Management — Multiple Approaches Combined</h2>
          <p><strong>Purina Pro Plan Bright Mind (cognitive diet):</strong> The only commercial food with published clinical trial data for cognitive benefit in senior dogs. Enhanced botanical oils (medium-chain triglycerides) provide alternative fuel for neurons with reduced glucose metabolism. Trial data: dogs fed Bright Mind showed significant improvements on cognitive assessments versus control diet after 30 days. Not a cure — a supportive dietary intervention that slows progression and may improve function.</p>
          <p><strong>Anipryl (selegiline):</strong> <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a>-approved for canine CDS. A monoamine oxidase B inhibitor that increases dopamine availability in the brain and may reduce oxidative damage. Dosing frequency and timing are determined by your veterinarian. Approximately 70% of dogs show some improvement in CDS signs within 30 days of starting. Not all dogs respond. Side effects are uncommon but include GI upset and restlessness. Has drug interactions — disclose all current medications before starting.</p>
          <p><strong>Omega-3 fatty acids (EPA/DHA):</strong> Anti-inflammatory effects in brain tissue. Supplementation at 20–40mg/kg EPA+DHA daily supports general brain health. Use Nordic Naturals Omega-3 Pet or a high-quality fish oil with documented EPA+DHA content.</p>
          <p><strong>Melatonin:</strong> For dogs with disrupted sleep-wake cycles, melatonin supplementation is sometimes used to help restore more normal nocturnal sleep and reduce nighttime restlessness. Appropriate dose and timing vary by the dog's weight and health status — ask your veterinarian before supplementing.</p>
          <p><strong>Environmental enrichment:</strong> Cognitive enrichment slows neurological decline in aging brains across species — the "use it or lose it" principle. Short, positive training sessions (teaching new tricks), food puzzles, novel smells (scent walks, sniff boxes with new objects), and gentle play maintain cognitive engagement. The goal is stimulation without overwhelm — CDS dogs tire more quickly and can become anxious if overstimulated.</p>

          <CalloutBox variant="evidence" title="Bright Mind has clinical trial data">
            Purina Pro Plan Bright Mind is the only commercial senior diet with published clinical evidence of cognitive benefit — the trial showed measurable improvements on cognitive assessments versus a control diet after 30 days. It is not curative, but it is the dietary intervention with the strongest evidence base for CDS support.
          </CalloutBox>

          <h2>Nighttime Management</h2>
          <p>Nighttime restlessness and vocalization is one of the most disruptive CDS signs for owners. The dog wanders, vocalizes, or appears confused at night — often the only time the owner is aware something is wrong. Management: melatonin as above, maintaining a consistent bedtime routine, keeping the dog in the bedroom where human presence is reassuring, night lights (disorientation is worse in darkness), and ensuring the dog is not in pain (pain can disrupt sleep in senior dogs independent of CDS — pain management may dramatically improve nighttime behavior).</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
