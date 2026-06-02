import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Ringbone in Horses — High vs Low, Signs, Management",
  description:
    "Reference guide to equine ringbone: arthritis of the pastern (high) and coffin (low) joints, articular vs periarticular forms, signs, diagnosis, and management.",
  path: '/health/ringbone',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Ringbone in Horses — High vs Low, Signs, Management",
  description:
    "Equine ringbone: high (pastern) versus low (coffin) ringbone, articular versus periarticular forms, clinical signs, diagnosis, and management.",
  url: 'https://horses.com/health/ringbone',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Ringbone",
  description:
    "Equine ringbone: high (pastern) versus low (coffin) ringbone, articular versus periarticular forms, clinical signs, diagnosis, and management.",
  url: 'https://horses.com/health/ringbone',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "Can a horse with ringbone still be ridden?",
    answer:
      "It depends on the type. Many horses with periarticular or stabilized high ringbone return to work, and pastern-joint fusion can restore soundness because that joint moves little. Articular low ringbone in the high-motion coffin joint carries a more guarded prognosis. A veterinary diagnosis with radiographs determines the realistic outlook.",
    answerText:
      "Often yes, depending on type. Periarticular and fused pastern-joint cases frequently return to work; articular coffin-joint ringbone is more guarded. Radiographs determine the outlook.",
  },
  {
    question: "What is the difference between high and low ringbone?",
    answer:
      "High ringbone affects the pastern joint between the long and short pastern bones; low ringbone affects the coffin joint inside the hoof. Low ringbone is often harder to manage because the coffin joint is a high-motion joint hidden within the hoof capsule.",
    answerText:
      "High ringbone affects the pastern joint; low ringbone affects the coffin joint inside the hoof. Low ringbone is usually harder to manage.",
  },
  {
    question: "Does ringbone get worse over time?",
    answer:
      "Articular ringbone is progressive joint disease and tends to advance, though good farriery and veterinary management slow it. Periarticular ringbone often stabilizes once the underlying ligament injury heals, after which the horse may stay comfortable. The type, confirmed by radiographs, predicts the course.",
    answerText:
      "Articular ringbone tends to progress, though management slows it. Periarticular ringbone often stabilizes once the underlying injury heals. The type predicts the course.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function RingbonePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Ringbone in Horses",
          subtitle:
            "Ringbone is the common name for arthritis and new bone growth in the pastern or coffin joint of the horse -- so called because the bony change can encircle the pastern like a ring. It is a specific form of osteoarthritis in the lower limb and a frequent cause of chronic lameness in working horses. Whether a horse stays usable depends largely on which joint is affected and whether the joint surface itself is involved. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Ringbone", href: '/health/ringbone' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Ringbone", href: "#what" },
            { label: "High vs Low", href: "#types" },
            { label: "Articular vs Periarticular", href: "#articular" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis and Management", href: "#management" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Osteoarthritis in Horses", href: "/health/osteoarthritis" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
              { label: "Joint Supplements", href: "/supplements/joint-supplements" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-ringbone"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is Ringbone</h2>
          <p>Ringbone is osteoarthritis -- with associated new bone formation -- affecting the joints of the lower limb between the fetlock and the hoof. It develops from repetitive concussion, poor conformation, hoof imbalance, or previous injury that inflames the joint and provokes the bone to lay down osteophytes. As the bony change builds, it can become palpable or even visible as a firm enlargement around the pastern, the origin of the name.</p>

          <h2 id="types">High vs Low</h2>
          <p>Ringbone is classified by location. High ringbone affects the pastern joint (the proximal interphalangeal joint, between the long and short pastern bones). Low ringbone affects the coffin joint (the distal interphalangeal joint, between the short pastern bone and the coffin bone, inside the hoof capsule). Low ringbone is often harder to manage because the coffin joint is a high-motion joint and the change is hidden within the hoof.</p>

          <h2 id="articular">Articular vs Periarticular</h2>
          <p>An equally important distinction is whether the joint surface itself is involved. Articular ringbone involves the cartilage and joint surface and carries a more guarded prognosis because it is true progressive joint disease. Periarticular (or &apos;false&apos;) ringbone is new bone formation around the joint, often from a torn ligament attachment, without involving the joint surface; once it stabilizes, the horse may be sound. Imaging distinguishes the two.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>A gradually worsening, often subtle lameness that increases with work.</li>
            <li>A firm, bony enlargement around the pastern in advanced high ringbone.</li>
            <li>Reduced flexibility and a shortened, stabbing stride.</li>
            <li>Heat or sensitivity over the affected joint in active phases.</li>
            <li>Lameness that worsens on hard ground and after work.</li>
          </ul>

          <h2 id="management">Diagnosis and Management</h2>
          <p>A veterinarian localizes the lameness with diagnostic blocks and confirms ringbone with radiographs, which show the location, severity, and joint involvement. Management mirrors osteoarthritis generally: corrective farriery to balance the foot and ease breakover, systemic and intra-articular anti-inflammatory treatment under veterinary direction, controlled exercise, and weight control. For severe high ringbone of the low-motion pastern joint, surgical fusion (arthrodesis) can return a horse to soundness because that joint normally moves very little. All treatment decisions belong to the veterinarian.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>Ross MW, Dyson SJ (eds). Diagnosis and Management of Lameness in the Horse, 2nd ed., Elsevier, 2011.</li>
            <li>American Association of Equine Practitioners. “Ringbone” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
