import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Labrador Retriever Health — Hip & Elbow Dysplasia, Obesity & EIC | Vets.co', description: 'From a veterinarian\'s perspective: Labrador health priorities — OFA screening, weight management, exercise-induced collapse, and when to refer to a specialist.', path: '/breeds/labrador-health', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Labrador Retriever Health — Owner Guide', description: 'Managing Labrador health with payout data and case-cost ranges.', url: 'https://vets.co/breeds/labrador-health', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Labrador Retriever Health',
  description: 'Hip dysplasia, EIC, and obesity management in Labradors.',
  url: 'https://vets.co/breeds/labrador-health',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2025-05-01',
})
const combinedSchemaAll = combineSchemas(schema, medicalSchema)

export default function VetsLabradorHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="vets-co"
      hero={{ title: 'Labrador Retriever Health — A Veterinarian\'s Perspective', subtitle: 'Labradors are among my highest-volume patients. Fantastic temperaments, but specific health predispositions require proactive management. Here\'s what I prioritize with every Lab owner.', category: 'Breed Health Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breed Guides', href: '/breeds' }, { name: 'Labrador Health', href: '/breeds/labrador-health' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Find an Orthopedic Specialist', href: '/find-a-vet' }, { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }, { label: 'Golden Retriever Health', href: '/breeds/golden-retriever-health' }]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance every Tuesday." source="breeds-labrador" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Conditions I Monitor Most Closely</h2>

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high" description="The most common orthopedic conditions in Labradors. Hip dysplasia: abnormal hip joint development causing pain and early arthritis. Elbow dysplasia: similar issue in the elbow, often presenting as forelimb lameness in young dogs. Both are polygenetic — breeding from OFA-cleared parents significantly reduces (but doesn't eliminate) risk. Signs appear in young dogs (8 months to 2 years) and worsen with age." signs={['Lameness, especially after exercise', 'Reluctance to rise or climb stairs', 'Abnormal gait — swaying, bunny-hopping', 'Joint swelling or pain on manipulation']} management="OFA screening for breeding dogs. Maintain lean weight — every extra pound accelerates joint damage significantly. Joint supplements (fish oil, glucosamine) from young adulthood. Surgical evaluation for severe cases — FHO, TPO, total hip replacement depending on severity and age." />

        <BreedHealthCard name="Obesity" riskLevel="very-high" description="Labradors have a specific genetic mutation (POMC gene deletion) that genuinely impairs the satiety signal — many Labs do not feel full normally. This is not behavioral laziness or owner failure; it is a real metabolic difference. Labs require portion control their entire lives. Obesity is a primary driver of joint disease, diabetes, and reduced lifespan in this breed." signs={['Cannot feel ribs without pressure', 'No visible waist from above', 'No abdominal tuck from the side', 'Reduced exercise tolerance']} management="Measure every meal — never free-feed. Body condition score monthly. Target BCS 4–5. Prescription weight diets (Hill's Metabolic) for dogs that are not losing weight on reduced portions. Feeding puzzle toys to slow intake." />

        <BreedHealthCard name="Exercise-Induced Collapse (EIC)" riskLevel="moderate" description="A genetic condition causing collapse after intense exercise. DNA test available — dogs are clear, carrier, or affected. Affected dogs collapse after 5–15 minutes of intense activity and recover within 30 minutes. Most dogs are not seriously harmed by individual episodes, but severe episodes can be fatal. Carriers do not show symptoms." signs={['Wobbling or collapsing during or after intense play', 'Muscle weakness during exercise', 'Rapid recovery after rest']} management="DNA test all Labradors — particularly important for working dogs and active breeds. Manage exercise intensity for affected dogs — avoid intense sustained exertion in hot weather. Breeders should test and not breed two carriers together." />

        <BreedHealthCard name="Progressive Retinal Atrophy (PRA)" riskLevel="moderate" description="Progressive degeneration of the retina leading to blindness. Hereditary — DNA test available. Symptoms begin with night blindness and progress to full blindness, typically over 1–2 years. No treatment prevents progression, but dogs adapt remarkably well to vision loss." signs={['Night blindness — reluctance to enter dark rooms', 'Bumping into objects, especially in low light', 'Dilated pupils']} management="DNA testing for breeding dogs. Annual ophthalmology examination for breeding stock. Affected dogs adapt well — maintain consistent home layout." />

        <h2>Weight — My Single Biggest Intervention</h2>
        <p>In nearly every Labrador, addressing weight reliably improves quality and length of life. The POMC mutation in this breed is real and documented in peer-reviewed research — Labs with the mutation are significantly more food-motivated and prone to obesity. If a Lab constantly acts hungry, that is likely not manipulation but a genuine difference in hunger signaling.</p>
        <p>My recommendation: weigh the dog monthly (same time, same scale). Adjust portions based on BCS, not appetite. The dog will always ask for more. The dog&apos;s actual needs are what the scale and BCS tell you, not what the dog communicates.</p>

        <h2>Recommended Screening</h2>
        <ul>
          <li><strong>OFA hip and elbow:</strong> At 2 years minimum; consider preliminary at 12–16 months for dogs showing early symptoms</li>
          <li><strong>EIC DNA test:</strong> Before intense training programs; important for families with children who play intensely with the dog</li>
          <li><strong>PRA DNA test:</strong> For any dog used for breeding</li>
          <li><strong>Annual bloodwork:</strong> From age 5; earlier if overweight (metabolic monitoring)</li>
          <li><strong>Annual weight and BCS:</strong> Starting at puppy visits and every visit thereafter</li>
        </ul>

        <h2>Pet Insurance — Start Early</h2>
        <p>Orthopedic surgery for hip dysplasia runs $3,500–7,000 per joint. Bilateral (both hips): $7,000–14,000. Total hip replacement: $6,000–10,000 per side. These are common outcomes in this breed. Enroll before the first veterinary visit. See the <a href="/reviews/best-pet-insurance">insurance comparison →</a></p>
      </div>
    </ArticleLayout>
    </>
  )
}
