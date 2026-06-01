import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Navicular Syndrome — Caudal Heel Pain, Diagnosis, Management",
  description:
    "Reference guide to navicular syndrome (caudal heel pain): anatomy of the podotrochlear apparatus, signs, MRI and nerve-block diagnosis, farriery, and management.",
  path: '/health/navicular-syndrome',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Navicular Syndrome — Caudal Heel Pain, Diagnosis, Management",
  description:
    "Navicular syndrome and caudal heel pain in horses: anatomy, clinical signs, diagnostic blocks and MRI, corrective farriery, and management.",
  url: 'https://horses.com/health/navicular-syndrome',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Navicular Syndrome",
  description:
    "Navicular syndrome and caudal heel pain in horses: anatomy, clinical signs, diagnostic blocks and MRI, corrective farriery, and management.",
  url: 'https://horses.com/health/navicular-syndrome',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Is navicular syndrome curable?",
    answer:
      "Navicular syndrome is managed rather than cured. With corrective farriery, appropriate veterinary treatment, controlled exercise, and good footing, many horses remain comfortably in work for years. Prognosis varies with which structures of the podotrochlear apparatus are affected, which is why MRI-guided diagnosis is valuable.",
    answerText:
      "It is managed rather than cured. Corrective farriery and veterinary treatment keep many horses in work for years. Prognosis depends on which structures are involved.",
  },
  {
    question: "Why is corrective shoeing so important for navicular horses?",
    answer:
      "Hoof balance and breakover directly affect how much load and leverage fall on the painful heel and the deep digital flexor tendon. Easing breakover, supporting the heel, and correcting a long-toe low-heel imbalance reduce strain on the podotrochlear apparatus, which is why farriery is the foundation of management.",
    answerText:
      "Hoof balance and breakover control the load on the painful heel and deep digital flexor tendon. Easing breakover and supporting the heel reduce strain, making farriery the foundation of management.",
  },
  {
    question: "Can MRI diagnose navicular syndrome?",
    answer:
      "MRI is the reference standard. It distinguishes lesions of the navicular bone, the bursa, the supporting ligaments, and the deep digital flexor tendon, which radiographs cannot fully separate. Because treatment and prognosis differ by structure, MRI guides a targeted plan in cases that justify the cost.",
    answerText:
      "Yes -- MRI is the reference standard, distinguishing bone, bursa, ligament, and tendon lesions that radiographs cannot separate, and guiding targeted treatment.",
  },
]

export default function NavicularPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Navicular Syndrome",
          subtitle:
            "Navicular syndrome -- increasingly called caudal heel pain or podotrochlosis -- is one of the most common causes of chronic forelimb lameness in riding horses. The term covers a family of degenerative and soft-tissue problems centered on the navicular bone and its surrounding structures deep in the heel of the front foot. Modern MRI imaging has reshaped how the condition is understood and managed, and many affected horses stay in work for years with the right farriery and veterinary plan. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Navicular Syndrome", href: '/health/navicular-syndrome' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "The Anatomy", href: "#anatomy" },
            { label: "What Causes It", href: "#causes" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Farriery", href: "#farriery" },
            { label: "Medical Management", href: "#medical" },
            { label: "Prognosis", href: "#prognosis" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-navicular"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="anatomy">The Anatomy</h2>
          <p>The navicular bone is a small, boat-shaped bone (hence the name, from the Latin for little ship) that sits behind the coffin joint, deep in the heel. The deep digital flexor tendon glides over its lower surface like a rope over a pulley, cushioned by the navicular bursa. Together the bone, bursa, deep digital flexor tendon, and supporting ligaments form the podotrochlear apparatus. Navicular syndrome is pain arising anywhere within this apparatus.</p>

          <h2 id="causes">What Causes It</h2>
          <p>Rather than a single disease, navicular syndrome reflects chronic biomechanical overload of the heel region. Contributing factors include conformation (small feet relative to body size, long-toe low-heel hoof balance, upright or broken-back pastern axis), the demands of athletic work that loads the heel (jumping, hard stops, circles), and degenerative changes in the bone and soft tissues. MRI studies show that much of the pain comes from the deep digital flexor tendon and the supporting ligaments, not only the bone itself.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A gradual-onset, often bilateral front-limp lameness that may shift from one foot to the other.</li>
            <li>A short, choppy, toe-first landing as the horse tries to spare the painful heel.</li>
            <li>Lameness that worsens on hard ground, on circles (worse on the inside leg), and after work.</li>
            <li>A tendency to stumble or to point one front foot at rest.</li>
            <li>Improvement after rest that returns with work -- the classic intermittent pattern.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Diagnosis begins with a lameness examination, including flexion tests and hoof testers. Diagnostic nerve blocks -- a palmar digital block that desensitizes the heel -- localize the pain to the caudal foot. Radiographs assess the navicular bone for degenerative change, but normal radiographs do not rule out the syndrome. MRI is the reference standard, distinguishing tendon, ligament, bursa, and bone lesions and guiding targeted treatment. This is a veterinary diagnostic workup, not something an owner can confirm at home.</p>

          <h2 id="farriery">Farriery</h2>
          <p>Corrective farriery is the foundation of management. The goals are to restore hoof balance, ease breakover, support the heel, and shorten the lever arm on the deep digital flexor tendon. Common approaches include rolled or rocker toes, bar shoes or heart-bar shoes, wedge pads to adjust the pastern axis, and shortening a long toe. The right prescription depends on the individual foot and on imaging, so the farrier and veterinarian work together.</p>

          <h2 id="medical">Medical Management</h2>
          <p>Beyond farriery, veterinarians may prescribe anti-inflammatory medication, intra-articular or navicular-bursa medication, and bisphosphonate drugs that target bone remodeling in selected cases -- all under veterinary direction. Controlled exercise, appropriate footing, and weight management support the plan. Surgical options such as palmar digital neurectomy exist for refractory cases but are a last resort with their own risks.</p>

          <h2 id="prognosis">Prognosis</h2>
          <p>Navicular syndrome is generally managed rather than cured. Many horses stay comfortably in work for years with consistent farriery and a tailored medical plan, while others step down to lighter work. Prognosis depends heavily on which structures are involved -- bone and bursa lesions often respond better than extensive deep digital flexor tendon damage -- which is why MRI-guided diagnosis matters.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Dyson SJ. “Navicular Disease and Other Soft Tissue Causes of Palmar Foot Pain.” In: Diagnosis and Management of Lameness in the Horse, 2nd ed., Elsevier, 2011.</li>
            <li>Waguespack RW, Hanson RR. “Navicular Syndrome in Equine Patients.” Compendium: Continuing Education for Veterinarians, 2010; 32(12):E1–E13.</li>
            <li>Dyson S, Murray R. “Magnetic Resonance Imaging Evaluation of the Foot in Horses with Foot Pain.” Equine Veterinary Journal, 2007; 39(4):340–343.</li>
            <li>American Association of Equine Practitioners. “Navicular Syndrome” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
