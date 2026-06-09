import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, CrossPortfolioCard, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Golden Retriever Health — Cancer Risk | Vets.co',
  description: 'From a veterinarian\'s perspective: managing Golden Retriever cancer risk, what monitoring to do at each life stage, when to refer to a specialist, and…',
  path: '/breeds/golden-retriever-health',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Golden Retriever Health — Owner Guide',
  description: 'Managing Golden Retriever health with payout data and case-cost ranges.',
  url: 'https://vets.co/breeds/golden-retriever-health',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-07T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Golden Retriever Health',
  description: 'Managing Golden Retriever cancer risk with payout data and case-cost ranges.',
  url: 'https://vets.co/breeds/golden-retriever-health',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-06-07',
})
const combinedSchemaAll = combineSchemas(schema, medicalSchema)

export default function VetsGoldenRetrieverHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      siteId="vets-co"
      contentType="breed"
      hero={{
        title: 'Golden Retriever Health — Owner Guide',
        subtitle: 'Golden Retrievers are one of the most common breeds in general practice. The points most worth giving every Golden owner: the cancer statistics are real, the monitoring matters, and early detection is the single most impactful thing you can do.',
        category: 'Breed Health Guide',
        authorName: 'Vets.co Editorial',
       
        publishedAt: 'May 2025',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Breed Guides' },
        { name: 'Golden Retriever Health', href: '/breeds/golden-retriever-health' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'The Cancer Reality', href: '#cancer' },
          { label: 'Monitoring Schedule', href: '#monitoring' },
          { label: 'When to Refer', href: '#specialist' },
          { label: 'Pet Insurance', href: '#insurance' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Find an Oncologist', href: '/find-a-vet' },
          { label: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' },
          { label: 'Emergency Signs Guide', href: '/health/emergency-signs' },
        ]} />
        <EmailCapture variant="sidebar" siteId="vets-co"
          title="Free Pet Health Tips"
          subtitle="Practical guidance every Tuesday."
          source="breeds-golden-retriever" />
        <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="cancer">The Cancer Reality — What I Tell Every New Golden Owner</h2>
        <p>More than 60% of Golden Retrievers will develop cancer in their lifetime. I say this at every new Golden puppy appointment, because I want owners to understand from the beginning that proactive monitoring is not optional — it is the primary medical responsibility of Golden ownership.</p>
        <p>The two cancers that kill most Goldens are hemangiosarcoma and lymphoma. Both can be managed more effectively with earlier detection. Neither is currently curable, but treatment meaningfully extends quality life. And monitoring can catch them before the crisis presentation that brings owners in when options have narrowed significantly.</p>

        <BreedHealthCard
          name="Hemangiosarcoma"
          riskLevel="very-high"
          description="Cancer of blood vessel cells — most commonly the spleen, liver, and heart. Often causes no symptoms until rupture. Annual abdominal ultrasound from age 6–7 is the best current screening. When caught before rupture: surgical removal + chemotherapy significantly extends survival. Sudden collapse with pale gums in a Golden is hemangiosarcoma until proven otherwise — emergency."
          signs={['Sudden collapse', 'Pale or white gums', 'Distended abdomen', 'Extreme lethargy']}
          management="Annual abdominal ultrasound from age 6-7. Know how to check gum color. If your Golden collapses suddenly — emergency vet immediately."
          guideHref="/find-a-vet"
          guideLabel="Find a veterinary oncologist →"
        />

        <BreedHealthCard
          name="Lymphoma"
          riskLevel="very-high"
          description="Cancer of lymphocytes. Usually detectable before crisis — learn to check lymph nodes monthly. Firm bilateral swelling of multiple nodes warrants same-week evaluation. Chemotherapy (CHOP protocol) achieves 60–90% remission rates. Median survival 12–14 months with treatment."
          signs={['Enlarged lymph nodes (jaw, shoulders, groin, behind knees)', 'Weight loss', 'Lethargy', 'Decreased appetite']}
          management="Monthly lymph node check at home. Any firm bilateral swelling: evaluation within the week, not the month."
        />

        <h2 id="monitoring">Monitoring Schedule I Use in Practice</h2>
        <ul>
          <li><strong>Annual wellness from year 1–5:</strong> Full physical, vaccines as indicated, annual bloodwork from year 3</li>
          <li><strong>From age 6:</strong> Annual abdominal ultrasound added — the most impactful change in monitoring for hemangiosarcoma. Annual echocardiogram if any murmur detected. Full bloodwork including chemistry, CBC, urinalysis.</li>
          <li><strong>From age 8:</strong> Every 6 months for everything. Goldens change faster than annual monitoring captures in the senior years. Blood pressure measurement added.</li>
          <li><strong>Monthly at home:</strong> Lymph node check, gum color baseline awareness, body weight, body condition scoring.</li>
        </ul>

        <h2 id="specialist">When to Refer to a Specialist</h2>
        <ul>
          <li><strong>Oncologist:</strong> Any cancer diagnosis. Earlier referral means more options. Do not have me manage cancer long-term without an oncologist involved.</li>
          <li><strong>Cardiologist:</strong> Any murmur, exercise intolerance, or concerning cardiac finding on echocardiogram. Subvalvular aortic stenosis is common in Goldens — cardiologist assessment when SAS is suspected.</li>
          <li><strong>Internal Medicine:</strong> Complex bloodwork findings, conditions not responding to initial treatment, unexplained weight loss not explained by cancer.</li>
          <li><strong>Orthopedics:</strong> Hip or elbow dysplasia diagnosed, lameness not responding to conservative management.</li>
        </ul>
        <p>Use the <Link href="/find-a-vet">specialist finder</Link> to locate board-certified specialists near you.</p>

        <h2 id="insurance">Pet Insurance — My Honest Recommendation</h2>
        <p>Pet insurance is widely recommended for new Golden Retriever owners for one reason: with a 60%+ lifetime cancer rate, the expected value calculation is unambiguous. Hemangiosarcoma treatment runs $8,000–18,000. Lymphoma chemotherapy runs $5,000–15,000. Orthopedic surgery for hip dysplasia: $3,500–7,000 per joint.</p>
        <p>The non-negotiable rule: <strong>enroll before the first appointment.</strong> Any condition noted in records before enrollment becomes a pre-existing condition and is excluded. A puppy with a murmur noted at the first exam has a cardiac exclusion for life on most policies. Enroll the week you get the dog, before the first vet visit.</p>
        <p>For Goldens specifically, well-rated picks include Trupanion (direct vet payment, no per-incident limits, 90% reimbursement) or Healthy Paws (fast claims processing per the carrier, no payout limits). See the <Link href="/reviews/best-pet-insurance">full comparison →</Link></p>
      </div>
    </ArticleLayout>
    </>
  )
}
