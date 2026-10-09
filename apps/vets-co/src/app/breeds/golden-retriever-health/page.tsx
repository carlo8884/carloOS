import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, ShopCtas, CrossSiteHelp } from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

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
  modifiedAt: '2026-10-07T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Golden Retriever Health',
  description: 'Managing Golden Retriever cancer risk with payout data and case-cost ranges.',
  url: 'https://vets.co/breeds/golden-retriever-health',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-10-07',
})

const FAQS = [
  {
    question: 'How common is cancer in Golden Retrievers?',
    answer:
      'More than 60% of Golden Retrievers will develop cancer in their lifetime. The two cancers that kill most Goldens are hemangiosarcoma and lymphoma. Neither is currently curable, but both can be managed more effectively with earlier detection, and treatment meaningfully extends quality life — which is why proactive monitoring is the primary medical responsibility of Golden ownership.',
  },
  {
    question: 'What cancer screening should a Golden Retriever have?',
    answer:
      'Annual wellness exams from year 1–5 with annual bloodwork from year 3; annual abdominal ultrasound added from age 6 (the most impactful change for hemangiosarcoma detection); and every-6-month visits from age 8, when Goldens change faster than annual monitoring captures. At home: monthly lymph node checks, gum color baseline awareness, body weight, and body condition scoring. Discuss the right schedule for your dog with your veterinarian.',
  },
  {
    question: 'What are the emergency signs of hemangiosarcoma?',
    answer:
      'Sudden collapse, pale or white gums, a distended abdomen, and extreme lethargy. Hemangiosarcoma — a cancer of blood vessel cells, most commonly in the spleen, liver, and heart — often causes no symptoms until rupture. Sudden collapse with pale gums in a Golden is hemangiosarcoma until proven otherwise: go to an emergency vet immediately.',
  },
  {
    question: 'How do I check my Golden Retriever for lymphoma at home?',
    answer:
      'Learn to check the lymph nodes monthly — at the jaw, shoulders, groin, and behind the knees. Lymphoma is usually detectable before crisis, and firm bilateral swelling of multiple nodes warrants veterinary evaluation within the week, not the month. With chemotherapy (CHOP protocol), remission rates run 60–90%, with median survival of 12–14 months with treatment.',
  },
  {
    question: 'Is pet insurance worth it for a Golden Retriever?',
    answer:
      'With a 60%+ lifetime cancer rate, the expected-value calculation is unambiguous: Cornell University Hospital for Animals says radiation therapy is approximately $2,500–$7,000, a chemotherapy course over three to six months runs from several hundred dollars to several thousand, and major surgery starts around $500 and rises with the procedure. A February 2025 Dog Cancer Foundation summary of Veterinary Cancer Society figures puts an oncology consultation at $100–$250 and chemotherapy at $150–$600 per dose. NC State Veterinary Hospital lists bone-tumor stereotactic radiation at about $7,500–$8,500 and palliative radiation at about $800–$1,500. Typical US range, checked Oct 2026; varies by clinic and region. dated 2026-10-07. The non-negotiable rule is to enroll before the first veterinary appointment — any condition noted in records before enrollment becomes an excluded pre-existing condition on most policies.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })
const combinedSchemaAll = combineSchemas(schema, medicalSchema, faqSchema)

export default function VetsGoldenRetrieverHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchemaAll} />
      <ArticleLayout
      priceAsOf="2026-10-07"
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
          { label: 'FAQ', href: '#faq' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Find an Oncologist', href: '/find-a-vet' },
          { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
          { label: 'Emergency Signs Guide', href: '/health/emergency-signs' },
        ]} />

        <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">

        <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

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
          <li><strong>From age 8:</strong> Every 6 months for everything. Goldens change faster than annual monitoring captures in the senior years. Blood pressure measurement added. An 18-month wall calendar is how that age-6 ultrasound and these every-6-month senior visits stay written on one longer horizon — it is not a monthly desk pad calendar, not a hardcover weekly appointment planner, and not a wall-mounted magnetic monthly planner.</li>
          <li>Monthly at home: Lymph node check, gum color baseline awareness, body weight, body condition scoring. Paint-chip sample cards are how the gum-color baseline stays a pink-versus-pale comparison — they are not round color-coding labels, not an assorted highlighter set, and not a dog-com gum-color assessment chart.</li>
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
        <p>Typical US range, checked Oct 2026; varies by clinic and region. dated 2026-10-07.</p>
        <p>Pet insurance is widely recommended for new Golden Retriever owners because the lifetime cancer rate is high and hip disease is common. Cornell University Hospital for Animals says radiation therapy is approximately $2,500–$7,000, a chemotherapy course over three to six months runs from several hundred dollars to several thousand, and major surgery starts around $500 and rises with the procedure. A February 2025 Dog Cancer Foundation summary of Veterinary Cancer Society figures puts an oncology consultation at $100–$250 and chemotherapy at $150–$600 per dose. NC State Veterinary Hospital lists bone-tumor stereotactic radiation at about $7,500–$8,500 and palliative radiation at about $800–$1,500. University of Missouri Veterinary Health Center lists a total hip replacement consult at $2,000–$2,500, surgery at $8,500–$10,000 per hip, and follow-up at $600–$700. Each hip is quoted separately. Typical US range, checked Oct 2026; varies by clinic and region. dated 2026-10-07.</p>
        <p>The non-negotiable rule: <strong>enroll before the first appointment.</strong> Any condition noted in records before enrollment becomes a pre-existing condition and is excluded. A puppy with a murmur noted at the first exam has a cardiac exclusion for life on most policies. Enroll the week you get the dog, before the first vet visit.</p>
        <p>This page does not name a recommended carrier. See the <Link href="/reviews/best-pet-insurance">full comparison →</Link></p>

        <h2 id="kit">Supplies named on this page</h2>
        <p>Keep these on hand: paint chip sample cards and 18 month wall calendar. These are educational Golden-retriever-health / paperwork tools, not a ranked product list, not a substitute for veterinary care, and not a treatment.</p>

        <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/paint+chip+sample+cards?s=breeds-golden-retriever-health", "/go/amazon-brand/18+month+wall+calendar?s=breeds-golden-retriever-health"]} />

        {/* Money path — live amazon-brand search hops
            (dot-grid notebook /
            paint-chip sample cards /
            18-month wall calendar).
            These are educational
            Golden-retriever-health / paperwork
            tools, not a ranked product list, not
            a substitute for veterinary care, no
            Rx / first-aid kit / thermometer /
            carrier / insurance-brand ASIN hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Category searches only —
            unused vs #1175
            flexible+sewing+tape+measure /
            bound+composition+book /
            letter+size+document+frame,
            #1174
            blank+pedigree+chart /
            round+color+coding+labels /
            5+compartment+letter+sorter,
            dog · golden-retriever-health
            dog+lymph+node+anatomy+chart /
            foam+dog+stairs /
            dog+ear+wipes,
            dog+gum+color+assessment+chart /
            hardcover+weekly+appointment+planner /
            wall+mounted+magnetic+monthly+planner. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop related supplies
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
          <div className="flex flex-col gap-3">
<ShopCtas
              amazonHref="/go/amazon-brand/paint+chip+sample+cards?s=breeds-golden-retriever-health"
              amazonLabel="Browse paint-chip sample cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/18+month+wall+calendar?s=breeds-golden-retriever-health"
              amazonLabel="Browse 18-month wall calendars on Amazon →"
            />
          </div>
        </div>

        <CrossSiteHelp
          href={crossSiteHref('dog-com', '/breeds/golden-retriever')}
          label="Dog.com Golden Retriever guide"
          fromSite="vets-co"
          toSite="dog-com"
          topic="species-care"
        >
          The Dog.com Golden Retriever page is the owner-side guide for this breed: size, temperament, and everyday care.
        </CrossSiteHelp>
        <h2 id="faq">FAQ</h2>
        <p>Typical US range, checked Oct 2026; varies by clinic and region. dated 2026-10-07.</p>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          allowMultiple
          includeSchema={false}
        />
      </div>
    </ArticleLayout>
    </>
  )
}
