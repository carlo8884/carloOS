import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'German Shepherd Health Guide — DM, Hip Dysplasia & GDV | Dog.com',
  description: 'Complete German Shepherd health guide. Degenerative myelopathy, hip dysplasia, GDV/bloat, EPI, and the preventive care schedule every GSD owner should follow.',
  path: '/health/german-shepherd-health',
  type: 'article',
})

const schema = combineSchemas(
  buildArticleSchema({
  siteId: 'dog-com',
  title: 'German Shepherd Health Guide',
  description: 'DM, hip dysplasia, bloat, EPI and preventive care for German Shepherds.',
  url: 'https://dog.com/health/german-shepherd-health',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
}), buildMedicalWebPageSchema({
  name: 'German Shepherd Health Guide',
  description: 'DM, hip dysplasia, bloat, EPI and preventive care for German Shepherds.',
  url: 'https://dog.com/health/german-shepherd-health',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
  medicalAudience: 'Caregiver',
}),
)

export default function GermanShepherdHealthPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="health"
      hero={{
        title: 'German Shepherd Health Guide',
        subtitle: 'German Shepherds are one of the most capable working breeds in the world — and one of the most predisposed to serious degenerative conditions. Here\'s what every GSD owner must understand.',
        category: 'Breed Health Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Dog Health', href: '/health' },
        { name: 'German Shepherd Health', href: '/health/german-shepherd-health' },
      ]}
      relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Bloat (GDV)', href: '/health/dog-bloat-gvd', category: 'Dog Health' }, { title: 'Intervertebral Disc Disease', href: '/health/intervertebral-disc-disease', category: 'Dog Health' }, { title: 'Dog Arthritis', href: '/health/dog-arthritis', category: 'Dog Health' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Degenerative Myelopathy', href: '#dm' },
          { label: 'Hip Dysplasia', href: '#hips' },
          { label: 'GDV / Bloat', href: '#gdv' },
          { label: 'EPI', href: '#epi' },
          { label: 'Perianal Fistulas', href: '#perianal' },
          { label: 'Preventive Schedule', href: '#preventive' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Dog Symptom Guide', href: '/health/dog-symptoms-guide' },
          { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
          { label: 'Find a Neurologist', href: '/find-a-vet' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com"
          title="Free Dog Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="health-german-shepherd" />
      </>}
    >
      <div className="carloOS-article">
        <p>The German Shepherd Dog is among the world&apos;s most versatile working breeds — police dogs, military dogs, search and rescue, guide dogs, competitive sport. Their intelligence, drive, and loyalty are unmatched. They are also, structurally and genetically, one of the breeds most prone to serious degenerative conditions that owners must understand and actively manage.</p>

        <h2 id="dm">Degenerative Myelopathy (DM)</h2>
        <BreedHealthCard
          name="Degenerative Myelopathy"
          riskLevel="very-high"
          description="DM is a progressive neurological disease of the spinal cord that causes gradual paralysis, beginning in the hindlimbs and advancing forward over months to years. It is the canine equivalent of ALS and is ultimately fatal — there is no cure or disease-modifying treatment. German Shepherds are the most commonly affected breed. The SOD1 gene mutation responsible for DM is present at high frequency in the breed population."
          signs={['Progressive weakness and wobbling in hindlimbs', 'Dragging of rear feet (worn nails)', 'Difficulty rising', 'Loss of hindlimb coordination', 'Eventually inability to walk']}
          management="Physical rehabilitation therapy — underwater treadmill, range of motion exercises, assisted walking — significantly extends quality of life and time to severe disability. Dogs that remain mobile longer maintain better quality of life. Dog wheelchairs (carts) allow meaningful mobility after hindlimbs fail. DNA testing identifies dogs as At Risk (two copies), Carrier (one), or Clear — relevant for breeders and informs what owners should watch for from age 7+."
          guideHref="/find-a-vet"
          guideLabel="Find a veterinary rehabilitation specialist →"
        />

        <h2 id="hips">Hip Dysplasia</h2>
        <BreedHealthCard
          name="Hip Dysplasia"
          riskLevel="high"
          description="Hip dysplasia is abnormal development of the hip joint resulting in joint laxity, pain, and progressive arthritis. Strong genetic component — OFA hip certification of both parents substantially reduces but does not eliminate risk. The extreme hindquarter angulation seen in some show-line GSDs is associated with altered biomechanics; working-line GSDs generally have better structural conformation."
          signs={['Difficulty rising', 'Reluctance to exercise', 'Bunny-hopping gait', 'Stiffness after rest', 'Hindlimb lameness']}
          management="Buy from OFA-certified breeders only. Weight control is the most impactful single intervention. Omega-3s, joint supplements, anti-inflammatories as needed. Rehabilitation therapy. Surgery (TPO in young dogs, total hip replacement for severe adult cases) when indicated."
        />

        <h2 id="gdv">Gastric Dilatation-Volvulus (GDV / Bloat)</h2>
        <BreedHealthCard
          name="GDV / Bloat"
          riskLevel="very-high"
          description="GDV occurs when the stomach fills with gas and twists on itself, cutting off blood supply to the stomach wall and spleen. Without emergency surgery, GDV is fatal within hours. German Shepherds are among the deep-chested breeds at highest risk. This is the most time-critical emergency in veterinary medicine — minutes matter."
          signs={['Distended, hard abdomen', 'Unproductive retching (trying to vomit with nothing coming up)', 'Restlessness and pacing', 'Drooling', 'Rapid breathing', 'Pale gums (late sign)']}
          management="If you see a distended abdomen with retching: emergency vet immediately, no waiting. Prophylactic gastropexy — surgically tacking the stomach to the abdominal wall — prevents twisting even if the stomach dilates. Many vets now recommend gastropexy at time of spay/neuter for high-risk breeds. Discuss with your vet. Feed multiple small meals rather than one large meal daily."
        />

        <h2 id="epi">Exocrine Pancreatic Insufficiency (EPI)</h2>
        <BreedHealthCard
          name="EPI"
          riskLevel="high"
          description="EPI occurs when the pancreas fails to produce sufficient digestive enzymes, causing malabsorption of nutrients. German Shepherds are the most commonly affected breed by far. Without diagnosis, affected dogs waste away despite eating normally — sometimes ravenously."
          signs={['Dramatic weight loss despite ravenous appetite', 'Chronic large-volume diarrhea (often yellow, greasy)', 'Coprophagia (eating feces — a sign of nutritional deficiency)', 'Pot-bellied appearance']}
          management="Diagnosed with a serum TLI (trypsin-like immunoreactivity) test — inexpensive and definitive. Treated with lifelong supplementation of powdered pancreatic enzymes mixed into food before each meal. Dogs treated appropriately typically return to normal weight and quality of life within weeks. The condition is manageable long-term and not expensive once stabilized."
        />

        <h2 id="perianal">Perianal Fistulas</h2>
        <BreedHealthCard
          name="Perianal Fistulas"
          riskLevel="moderate"
          description="Perianal fistulas are chronic, painful tracts and ulcerations surrounding the anus, caused by immune dysregulation. They are strongly associated with German Shepherds and are rare in other breeds. They cause significant pain and can severely impact quality of life."
          signs={['Visible tracts or ulcerations around the anus', 'Licking or biting at the perianal area', 'Scooting', 'Reluctance to defecate', 'Foul odor']}
          management="Cyclosporine (an immunosuppressive medication) is the current first-line treatment and has significantly improved outcomes compared to previous surgical approaches. Tacrolimus ointment is used topically. Long-term management is typically required. Work with a veterinary internal medicine specialist or dermatologist for complex cases."
        />

        <h2 id="preventive">Preventive Care Schedule for GSDs</h2>
        <ul>
          <li><strong>Buy from OFA-certified breeders</strong> — hips, elbows, DM DNA testing, cardiac minimum. Ask for documentation.</li>
          <li><strong>Discuss prophylactic gastropexy</strong> at time of spay/neuter — prevents GDV, has no downside if performed at the same time as another surgery</li>
          <li><strong>Annual bloodwork from age 5</strong> — catch EPI (TLI), hypothyroidism, and early organ changes</li>
          <li><strong>Watch for DM signs from age 7+</strong> — subtle gait changes and nail wear on rear feet are earliest signs</li>
          <li><strong>Maintain lean body weight throughout life</strong> — reduces joint disease progression dramatically</li>
          <li><strong>Twice-yearly exams from age 8</strong></li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
