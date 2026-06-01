import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Hoof Abscess in Horses — Signs, Treatment, Prevention",
  description:
    "Reference guide to equine hoof abscess: the most common cause of sudden severe lameness, how abscesses form, drainage, soaking, and prevention.",
  path: '/health/abscess',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Hoof Abscess in Horses — Signs, Treatment, Prevention",
  description:
    "Equine hoof abscess: a localized infection in the hoof and the most common cause of sudden severe lameness. Signs, drainage, soaking, and prevention.",
  url: 'https://horses.com/health/abscess',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Hoof Abscess",
  description:
    "Equine hoof abscess: a localized infection in the hoof and the most common cause of sudden severe lameness. Signs, drainage, soaking, and prevention.",
  url: 'https://horses.com/health/abscess',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "How do I know if my horse has an abscess or a fracture?",
    answer:
      "Both can cause sudden severe lameness, and an owner cannot reliably tell them apart. Abscesses are far more common and typically show heat, a bounding digital pulse, and focal pain on hoof testers, but a fracture must be ruled out by a veterinarian, who may use radiographs. Call for professional assessment.",
    answerText:
      "Both cause sudden severe lameness and you cannot reliably tell them apart at home. Abscesses are more common and show heat, a bounding pulse, and focal hoof-tester pain, but a vet must rule out a fracture.",
  },
  {
    question: "How long does a hoof abscess take to heal?",
    answer:
      "Once an abscess drains, most horses improve dramatically within hours to a day or two, and the tract heals over the following days to weeks with soaking and clean bandaging. Abscesses that are slow to localize can take longer to mature before they can be drained.",
    answerText:
      "Once drained, most horses improve within hours to a day or two, with the tract healing over days to weeks. Slow-to-localize abscesses take longer to mature first.",
  },
  {
    question: "Should I soak an abscessed hoof?",
    answer:
      "Warm soaking, often with Epsom salts, is a standard part of treatment -- it softens the horn and encourages the abscess to drain. Soaking is usually combined with poulticing and clean bandaging after a veterinarian or farrier has located and opened the abscess. Follow their specific instructions.",
    answerText:
      "Yes -- warm Epsom-salt soaking softens horn and encourages drainage, usually combined with poulticing and bandaging after a vet or farrier opens the abscess.",
  },
]

export default function AbscessPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Hoof Abscess in Horses",
          subtitle:
            "A hoof abscess is the single most common cause of sudden, severe lameness in horses -- a horse that was sound yesterday can be non-weight-bearing today, alarming owners who fear a fracture. In fact most abscesses are a localized pocket of infection that, once it drains, resolves quickly. Recognizing the pattern saves a great deal of worry and gets the horse comfortable faster. This is reference material, not a substitute for veterinary or farrier care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Hoof Abscess", href: '/health/abscess' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is a Hoof Abscess", href: "#what" },
            { label: "How They Form", href: "#causes" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Treatment", href: "#treatment" },
            { label: "Prevention", href: "#prevention" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Sudden Severe Lameness</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              A horse that becomes acutely, severely lame on one foot is most often dealing with an abscess, but a fracture or other emergency cannot be ruled out by an owner. Call your veterinarian or farrier to confirm.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Thrush", href: "/health/thrush" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-abscess"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is a Hoof Abscess</h2>
          <p>A hoof abscess is a pocket of infection trapped within the rigid hoof capsule. Because the hoof cannot expand, even a small accumulation of pus generates intense pressure on the sensitive tissues, which is why abscesses produce such dramatic, often non-weight-bearing lameness. The infection naturally tries to migrate to the path of least resistance and eventually bursts out, usually at the sole, the white line, or up at the coronary band (a &apos;gravel&apos; that tracks up and blows out at the hairline).</p>

          <h2 id="causes">How They Form</h2>
          <p>Bacteria enter through a defect in the hoof: a puncture from a nail or stone, a crack, a separation in the white line, a close nail from shoeing, or softened horn after wet weather. Once inside, the bacteria multiply in the warm, moist environment and pus accumulates under pressure. Wet-then-dry cycles, poor hoof quality, and chronic white-line disease all raise the risk.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Sudden, often severe lameness, frequently non-weight-bearing, usually in one foot.</li>
            <li>A strong, bounding digital pulse in the affected foot.</li>
            <li>Heat in the hoof.</li>
            <li>Pain on hoof-tester pressure over a focal spot, which helps localize the abscess.</li>
            <li>Sometimes swelling up the leg, or a draining tract at the coronary band once it bursts.</li>
          </ul>

          <h2 id="treatment">Treatment</h2>
          <p>The aim is to establish drainage. A veterinarian or farrier locates the abscess with hoof testers and hoof-knife exploration and opens a small drainage tract -- this often brings dramatic, immediate relief. The foot is then poulticed and soaked (commonly in warm water with Epsom salts) and kept clean and bandaged to draw the infection out and protect the opening. Most abscesses resolve within days once they drain. An abscess that will not localize, recurs, or is accompanied by significant swelling or systemic signs warrants veterinary follow-up. Pain relief, if any, is prescribed by the veterinarian.</p>

          <h2 id="prevention">Prevention</h2>
          <ul>
            <li><strong>Pick out the feet daily</strong> and inspect for stones, punctures, and cracks.</li>
            <li><strong>Maintain a regular farrier schedule</strong> to keep the foot balanced and the white line tight.</li>
            <li><strong>Manage wet and dry cycles</strong> with dry standing and, where appropriate, hoof conditioning, since softened horn is more easily breached.</li>
            <li><strong>Support hoof quality</strong> with good nutrition and prompt attention to cracks and white-line problems.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>O&apos;Grady SE, Parks AH. “Farriery for Common Hoof Problems.” Veterinary Clinics of North America: Equine Practice, 2012.</li>
            <li>American Association of Equine Practitioners. “Hoof Abscess” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
