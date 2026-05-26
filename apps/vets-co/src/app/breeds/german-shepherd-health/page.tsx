import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'German Shepherd Health — DM, Hip Dysplasia & GDV | Vets.co', description: 'German Shepherds have specific health predispositions: degenerative myelopathy, hip dysplasia, and GDV. A DVM explains monitoring, screening, and when to refer.', path: '/breeds/german-shepherd-health', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'German Shepherd Health — Veterinary Perspective', description: 'DM, hip dysplasia, GDV, and EPI in German Shepherds from a DVM.', url: 'https://vets.co/breeds/german-shepherd-health', imageUrl: '', authorName: 'Dr. Sarah Webb, DVM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function GSHealthPage() {
  return (
    <ArticleLayout siteId="vets-co"
      hero={{ title: 'German Shepherd Health — A Veterinarian\'s Perspective', subtitle: 'German Shepherds are my most stoic patients — they mask pain remarkably well, which makes regular monitoring especially important. The breed predispositions are significant but manageable with early detection.', category: 'Breed Health Guide', authorName: 'Dr. Sarah Webb, DVM', authorCredentials: 'General Practice · 14 years', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breed Guides', href: '/breeds' }, { name: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'Find a Neurologist', href: '/find-a-vet' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Labrador Health', href: '/breeds/labrador-health' }]} />
        <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="DVM-written guidance every Tuesday." source="breeds-german-shepherd" />
      </>}
    >
      <div className="carloOS-article">
        <BreedHealthCard name="Degenerative Myelopathy (DM)" riskLevel="very-high" description="DM is a progressive, fatal neurological disease affecting the spinal cord — analogous to ALS in humans. Starts as hind limb wobbling and weakness, progresses to complete paralysis over 6–18 months. No cure exists. DNA testing identifies carriers and affected dogs. Almost all German Shepherds showing DM carry two copies of the SOD1 gene mutation — DNA test before breeding. Physical therapy and supportive care can maintain quality of life significantly longer than untreated progression." signs={['Hind limb wobbling or weakness', 'Crossing hind legs while walking', 'Knuckling (paws turning under)', 'Eventual inability to walk']} management="DNA test all GSDs before breeding. Physical therapy (underwater treadmill, controlled exercise) significantly extends functional life. Wheelchairs when paralysis progresses. DM-affected dogs maintain quality of life with dedicated care." />

        <BreedHealthCard name="Hip and Elbow Dysplasia" riskLevel="high" description="GSDs have among the highest rates of hip and elbow dysplasia of any breed. OFA screening of breeding dogs has improved outcomes over decades but has not eliminated the problem. Signs typically appear in the first 2 years of life. Weight management and appropriate exercise are critical — every pound above ideal adds approximately 4 pounds of force on each joint with every step." signs={['Lameness after exercise', 'Bunny-hopping gait', 'Difficulty rising', 'Reluctance to jump or use stairs']} management="OFA hip and elbow screening for breeding stock. Lean body condition throughout life. Fish oil from young adulthood. Glucosamine/chondroitin supplementation. Surgical options (FHO, TPO, total hip replacement) for severe cases." />

        <BreedHealthCard name="GDV (Bloat)" riskLevel="high" description="Gastric dilatation-volvulus — the stomach fills with gas and twists on itself, cutting off blood supply. Fatal without emergency surgery within hours. GSDs are a predisposed breed. Warning signs: unproductive retching (trying to vomit without producing anything), distended hard abdomen, extreme restlessness. This is the most time-critical emergency in the breed." signs={['Unproductive retching — EMERGENCY', 'Hard distended abdomen', 'Extreme restlessness, unable to settle', 'Drooling, obvious distress']} management="Emergency vet immediately — do not wait. Preventive gastropexy (surgical stomach tacking) can be performed prophylactically during spay/neuter, preventing torsion. Discuss with your vet at spay/neuter appointment. Feed twice daily rather than once; avoid exercise immediately after eating." />

        <BreedHealthCard name="Exocrine Pancreatic Insufficiency (EPI)" riskLevel="moderate" description="The pancreas fails to produce sufficient digestive enzymes — food passes through undigested. Dog eats voraciously but loses weight continuously. Classic sign: voluminous, pale, greasy, foul-smelling feces. Highly manageable with daily enzyme supplementation (Pancreatin or Viokace powder added to food). Dogs with EPI live normal lifespans with treatment." signs={['Weight loss despite normal or increased appetite', 'Voluminous, pale, greasy feces', 'Occasional vomiting', 'Voracious appetite — eating dirt, feces']} management="Pancreatic enzyme supplementation with every meal — once diagnosed, ongoing for life. Folate and B12 supplementation often required. Typically very manageable with correct treatment." />

        <h2>What I Watch for in My GSD Patients</h2>
        <p>Any hind limb incoordination after age 5: DM workup — neurological examination, MRI if indicated, DNA confirmation. Any episode of unproductive retching in a GSD: emergency evaluation — I would rather see a false alarm than miss a GDV. Gradual hind limb weakness in a young GSD (under 3): OFA radiographs, orthopedic evaluation.</p>
        <p>GSDs stoically mask pain. A GSD that is &quot;slowing down&quot; or &quot;getting old&quot; may be in significant orthopedic pain that is genuinely manageable with treatment. Do not attribute behavioral changes to age without a veterinary evaluation first.</p>
      </div>
    </ArticleLayout>
  )
}
