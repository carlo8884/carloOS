import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Heat Stroke in Dogs — Emergency Recognition, First Aid | Vets.co', description: 'Heat stroke kills dogs in minutes. Rectal temp above 104°F is an emergency. Active cooling with cool (not ice cold) water while driving to the vet.', path: '/health/heat-stroke-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Heat Stroke in Dogs', description: 'Emergency recognition, first aid, and prevention of heat stroke in dogs.', url: 'https://vets.co/health/heat-stroke-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Heat Stroke in Dogs', description: 'Heat stroke emergency — recognition, first aid cooling, and veterinary treatment.', url: 'https://vets.co/health/heat-stroke-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'AVMA: Heat Stroke in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/heat-stroke', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Heat Stroke', url: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/heat-stroke/heat-stroke-in-dogs-and-cats', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Hyperthermia in Companion Animals', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
]

export default function HeatStrokePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Heat Stroke in Dogs', subtitle: 'Heat stroke is a life-threatening emergency where body temperature rises above the point where normal cellular function can be maintained. Brain damage begins at 106°F and is often irreversible. Dogs die from heat stroke every year — almost always preventably. Speed of recognition and first aid while transporting to the vet determines outcomes.', category: 'Veterinary Guide — Emergency', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Heat Stroke', href: '/health/heat-stroke-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-danger/8 border border-brand-danger/30 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency Signs</div>
            {['Excessive, frantic panting', 'Drooling heavily — thick, ropy saliva', 'Red or purple gums', 'Vomiting or diarrhea', 'Lethargy, staggering, disorientation', 'Seizures or collapse', 'Rectal temp above 104°F'].map(s => (
              <div key={s} className="py-1 text-xs text-brand-text-mid border-b border-brand-danger/15 last:border-0 flex gap-2">
                <span className="text-brand-danger font-bold">→</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'Dehydration', href: '/health/dehydration-in-dogs' }, { label: 'Find Emergency Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-heat-stroke" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Car Problem — How It Happens</h2>
          <p>On a 70°F day, a car's interior reaches 89°F within 10 minutes and 104°F within 30 minutes. On a 90°F day, a car reaches 109°F within 10 minutes. Cracking windows does not meaningfully change this — the glass traps solar radiation. A dog left in a parked car in warm weather for "just a few minutes" can be in danger faster than almost any owner anticipates. This is the most common cause of canine heat stroke — and it is entirely preventable by leaving the dog at home or using drive-through services when running errands.</p>
          <p>Other common heat stroke scenarios: exercise in hot weather (dogs do not self-regulate exercise intensity in heat the way humans do — they will run until they collapse), hot pavement (asphalt can reach 140-160°F on hot days — paws burn and the radiant heat contributes to core temperature rise), brachycephalic dogs (Bulldogs, Pugs, Frenchies — their compromised airway makes panting less effective at cooling, making them heat stroke victims at temperatures that other breeds handle), and dogs left outdoors without shade and water.</p>

          <h2>First Aid While Driving to the Vet</h2>
          <p>Do these things simultaneously with calling the vet and driving there — not as a substitute for veterinary care:</p>
          <ul>
            <li><strong>Move to shade/air conditioning immediately</strong></li>
            <li><strong>Apply cool (not ice cold) water</strong> to the body — especially the neck, armpits, and groin where large blood vessels are near the surface. Cool water causes peripheral vasodilation which dissipates core heat. Ice water or ice packs cause vasoconstriction — the opposite of what you want — and can slow cooling. Wet towels with cool water work; submerging in cold water does not.</li>
            <li><strong>Run air conditioning at full blast</strong> in the car during transport</li>
            <li><strong>Do not force water into the dog's mouth</strong> — a heat-affected dog may aspirate. Offer water to drink voluntarily if the dog is conscious and able to swallow</li>
            <li><strong>Monitor temperature if you have a thermometer</strong> — stop active cooling when temperature reaches 103.5°F to avoid overcooling</li>
          </ul>

          <h2>Veterinary Treatment</h2>
          <p>Veterinary care focuses on: continued controlled cooling (cool IV fluids, continuation of external cooling under monitoring), IV fluid support for blood pressure and perfusion (heat stroke causes hypotension and cardiovascular compromise), treatment of secondary complications (disseminated intravascular coagulation/DIC — a clotting disorder that develops after severe heat stroke; acute kidney injury; cerebral edema). Monitoring: serial temperature, blood pressure, clotting times, kidney values, lactate. Prognosis correlates with peak temperature reached and duration of hyperthermia — dogs treated promptly with modest temperature elevations recover well; those with temperatures above 109°F for extended periods often develop irreversible organ damage.</p>

          <h2>High-Risk Breeds — Increased Vigilance Required</h2>
          <p>Brachycephalic breeds (Bulldogs, French Bulldogs, Pugs, Boston Terriers, Boxers, Cavalier King Charles Spaniels) are disproportionately represented in heat stroke cases. Their narrowed airways make panting less effective as a cooling mechanism. These breeds should not be exercised in temperatures above 70°F, should have limited time outdoors in warm weather, and should never be in situations where other dogs of the same breed would be comfortable — the breed's physiology creates a lower heat tolerance ceiling than most owners realize.</p>
          <p>Obese dogs, dark-coated dogs, elderly dogs, and dogs with cardiac or respiratory disease also have elevated heat stroke risk at temperatures that healthy, lean, young dogs handle without difficulty.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
