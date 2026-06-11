import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Orthopedic Foundation for Animals (OFA): Hip Dysplasia — German Shepherd Statistics', url: 'https://www.ofa.org/diseases/hip-dysplasia/', publisher: 'OFA' },
  { label: 'Merck Veterinary Manual: Degenerative Myelopathy in Dogs', url: 'https://www.merckvetmanual.com/nervous-system/spinal-cord-diseases/degenerative-myelopathy-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Degenerative Myelopathy and Hip Dysplasia in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Awano T et al. Genome-wide association analysis reveals a SOD1 mutation in canine degenerative myelopathy that resembles amyotrophic lateral sclerosis. Proc Natl Acad Sci. 2009;106(8):2794-2799.', publisher: 'PNAS' },
]


export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'German Shepherd Health Guide — DM, Hip Dysplasia & GDV | Dog.com',
  description: 'Complete German Shepherd health guide. Degenerative myelopathy, hip dysplasia, GDV/bloat, EPI, and the preventive care schedule every GSD owner should follow.',
  path: '/health/german-shepherd-health',
  type: 'article',
})

const FAQS = [
  { question: 'What is degenerative myelopathy in German Shepherds?', answer: 'DM is a progressive spinal cord disease — the canine equivalent of ALS — that causes gradual paralysis beginning in the hindlimbs and advancing forward over months to years. German Shepherds are the most commonly affected breed, and the responsible SOD1 gene mutation is present at high frequency in the breed. There is no cure or disease-modifying treatment, but physical rehabilitation (underwater treadmill, range-of-motion work, assisted walking) significantly extends mobility and quality of life, and dog wheelchairs allow meaningful mobility after the hindlimbs fail.' },
  { question: 'What are the early signs of DM in a German Shepherd?', answer: 'Progressive hindlimb weakness and wobbling, dragging of the rear feet — worn nails on the rear paws are a classic early clue — difficulty rising, and loss of hindlimb coordination. These typically appear from age 7 onward. Because early DM looks like several treatable conditions, a dog showing these signs should be evaluated by a veterinarian; DNA testing identifies whether a dog carries two copies of the SOD1 mutation (At Risk), one (Carrier), or none (Clear).' },
  { question: 'Why are German Shepherds at high risk for bloat (GDV)?', answer: 'GSDs are among the deep-chested breeds at highest risk for gastric dilatation-volvulus — the stomach fills with gas and twists, cutting off its own blood supply. Without emergency surgery GDV is fatal within hours; it is the most time-critical emergency in veterinary medicine. If you see a distended, hard abdomen with unproductive retching, restlessness, or drooling: emergency vet immediately, no waiting. Prevention to discuss with your vet: prophylactic gastropexy (often done at spay/neuter) and feeding multiple small meals instead of one large one.' },
  { question: 'Why is my German Shepherd losing weight despite eating ravenously?', answer: 'That combination — dramatic weight loss with a ravenous appetite, usually with chronic large-volume greasy yellow diarrhea — is the classic presentation of exocrine pancreatic insufficiency (EPI), and German Shepherds are by far the most affected breed. The pancreas stops producing digestive enzymes, so food passes through unabsorbed. Diagnosis is a serum TLI blood test (inexpensive and definitive); treatment is lifelong powdered pancreatic enzymes mixed into food. Appropriately treated dogs typically return to normal weight within weeks. Ask your veterinarian about TLI testing.' },
  { question: 'What health testing should a German Shepherd breeder provide?', answer: 'Per this guide\'s preventive schedule: OFA certification for hips and elbows, DM DNA testing, and cardiac evaluation at minimum — with documentation, not verbal assurances. For the dog you already own: annual bloodwork from age 5 (catches EPI, hypothyroidism, and early organ changes), watching for DM signs from age 7+, lean body weight throughout life, and twice-yearly exams from age 8.' },
]

const schema = combineSchemas(
  buildArticleSchema({
  siteId: 'dog-com',
  title: 'German Shepherd Health Guide',
  description: 'DM, hip dysplasia, bloat, EPI and preventive care for German Shepherds.',
  url: 'https://dog.com/health/german-shepherd-health',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
}), buildMedicalWebPageSchema({
  name: 'German Shepherd Health Guide',
  description: 'DM, hip dysplasia, bloat, EPI and preventive care for German Shepherds.',
  url: 'https://dog.com/health/german-shepherd-health',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2025-05-01',
  medicalAudience: 'Caregiver',
}), buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }),
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
          { label: 'FAQ', href: '#faq' },
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

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
