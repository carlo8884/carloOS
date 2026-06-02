import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Osteoarthritis in Horses — Joint Disease, Signs, Management",
  description:
    "Reference guide to equine osteoarthritis (degenerative joint disease): how cartilage breaks down, signs, diagnosis, joint medication, and management.",
  path: '/health/osteoarthritis',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Osteoarthritis in Horses — Joint Disease, Signs, Management",
  description:
    "Equine osteoarthritis (degenerative joint disease): cartilage breakdown, clinical signs, diagnosis, joint medications, and long-term management.",
  url: 'https://horses.com/health/osteoarthritis',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Osteoarthritis",
  description:
    "Equine osteoarthritis (degenerative joint disease): cartilage breakdown, clinical signs, diagnosis, joint medications, and long-term management.",
  url: 'https://horses.com/health/osteoarthritis',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "Can osteoarthritis in horses be reversed?",
    answer:
      "Cartilage damage in established osteoarthritis is not reversible, but the disease can be slowed and the horse kept comfortable. A combination of veterinary treatment, consistent low-impact exercise, weight control, good farriery, and forgiving footing keeps many arthritic horses sound and in work for years.",
    answerText:
      "Cartilage damage is not reversible, but the disease can be slowed and managed. Veterinary treatment, exercise, weight control, and good farriery keep many arthritic horses working.",
  },
  {
    question: "Is turnout good or bad for an arthritic horse?",
    answer:
      "Turnout and consistent gentle movement are generally good for arthritic joints -- motion maintains cartilage nutrition and synovial-fluid circulation, whereas stall confinement promotes stiffness. The exception is during an acute flare or following a procedure, when your veterinarian may prescribe restricted movement.",
    answerText:
      "Generally good -- gentle movement maintains cartilage health and reduces stiffness. The exception is during acute flares or after procedures, when your vet may restrict movement.",
  },
  {
    question: "Do joint supplements work for equine arthritis?",
    answer:
      "Evidence for oral joint supplements is mixed and product quality varies widely. Some horses appear to benefit and they are low-risk, so many owners use them as a long-term adjunct -- not a replacement -- alongside veterinary treatment and management. Discuss specific products with your veterinarian.",
    answerText:
      "The evidence is mixed and product quality varies. They are low-risk and some horses appear to benefit, so they are used as an adjunct, not a replacement, for veterinary care.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function OsteoarthritisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Osteoarthritis in Horses",
          subtitle:
            "Osteoarthritis -- degenerative joint disease -- is the single most common cause of lameness in performance and aging horses. It is the progressive breakdown of the smooth cartilage that lines a joint, leading to inflammation, pain, bone change, and reduced range of motion. While the cartilage damage itself is not reversible, a well-built management plan combining veterinary care, farriery, exercise, and weight control keeps a great many arthritic horses sound and working. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Osteoarthritis", href: '/health/osteoarthritis' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Osteoarthritis", href: "#what" },
            { label: "Commonly Affected Joints", href: "#joints" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Veterinary Treatment", href: "#treatment" },
            { label: "Management at Home", href: "#management" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Joint Supplements", href: "/supplements/joint-supplements" },
              { label: "Ringbone", href: "/health/ringbone" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-osteoarthritis"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Osteoarthritis</h2>
          <p>A healthy joint is lined with articular cartilage -- a slick, resilient surface that lets bone glide on bone -- and lubricated by joint (synovial) fluid. Osteoarthritis begins when that cartilage is damaged by wear, repetitive concussion, injury, or inflammation. The damaged cartilage releases enzymes that degrade it further, the joint inflames, the surrounding bone responds by forming new growth (osteophytes), and the cycle becomes self-sustaining. The result is pain, stiffness, and progressive loss of motion.</p>

          <h2 id="joints">Commonly Affected Joints</h2>
          <p>Osteoarthritis tends to settle in the joints that take the most repetitive load for a given use. The hocks (bone spavin) are classic in dressage, jumping, western, and driving horses. The coffin and pastern joints (the latter producing &apos;ringbone&apos;) are common in all disciplines. The fetlocks suffer in horses doing fast, concussive work, and the knees and stifles are affected in others. Where the arthritis sits is shaped by conformation and the demands of the discipline.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Stiffness that is worst at the start of work and eases as the horse warms up.</li>
            <li>Reduced range of motion, a shortened stride, and reluctance to perform specific movements.</li>
            <li>Visible joint swelling, heat, or effusion (fluid distension).</li>
            <li>Lameness that worsens after hard work or on hard ground.</li>
            <li>Positive response to flexion tests on the affected joint.</li>
            <li>Behavioral changes -- resistance, reluctance to go forward, or a drop in performance.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>A veterinary lameness examination localizes the problem using flexion tests and diagnostic joint blocks, then confirms it with imaging. Radiographs reveal joint-space narrowing, osteophytes, and bone change; ultrasound, and increasingly MRI and CT, add soft-tissue and early-cartilage detail. Joint-fluid analysis can support the diagnosis in some cases. Early diagnosis allows intervention before the joint deteriorates too far.</p>

          <h2 id="treatment">Veterinary Treatment</h2>
          <p>Treatment is tailored to the joint, the severity, and the horse&apos;s job, and is directed by a veterinarian. Options include systemic non-steroidal anti-inflammatory drugs, intra-articular medications (corticosteroids, hyaluronic acid), polysulfated glycosaminoglycan and pentosan injections, and biologic therapies such as platelet-rich plasma, IRAP, and stem cells. Joint fusion (arthrodesis) is an option for low-motion joints like the lower hocks. All medication selection and dosing is the veterinarian&apos;s call.</p>

          <h2 id="management">Management at Home</h2>
          <ul>
            <li><strong>Keep the horse moving.</strong> Consistent low-impact exercise and turnout maintain joint health better than stall rest; long warm-ups loosen stiff joints before work.</li>
            <li><strong>Manage weight.</strong> Excess bodyweight multiplies joint load; lean is kinder to arthritic joints.</li>
            <li><strong>Choose footing carefully.</strong> Deep, even, forgiving footing reduces concussion; avoid hard or uneven ground.</li>
            <li><strong>Maintain farriery</strong> on a tight schedule to keep the foot balanced and reduce abnormal joint loading.</li>
            <li><strong>Consider oral joint supplements</strong> as a long-term adjunct, recognizing that the evidence is mixed; see the joint supplement guide.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>McIlwraith CW, Frisbie DD, Kawcak CE. “The Horse as a Model of Naturally Occurring Osteoarthritis.” Bone &amp; Joint Research, 2012; 1(11):297–309.</li>
            <li>Goodrich LR, Nixon AJ. “Medical Treatment of Osteoarthritis in the Horse — A Review.” Veterinary Journal, 2006; 171(1):51–69.</li>
            <li>Frisbie DD, Kawcak CE, Werpy NM, et al. Evaluation of intra-articular therapies, multiple studies. Equine Veterinary Journal, 2007–2013.</li>
            <li>American Association of Equine Practitioners. “Arthritis / Degenerative Joint Disease” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
