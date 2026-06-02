import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "The Pre-Purchase Exam — Vetting a Horse Before You Buy",
  description:
    "Reference guide to the equine pre-purchase exam (vetting): what it covers, basic vs extensive exams, radiographs, who the vet works for, and using the results.",
  path: '/ownership/pre-purchase-exam',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "The Pre-Purchase Exam — Vetting a Horse Before You Buy",
  description:
    "Reference guide to the equine pre-purchase exam (vetting): what it covers, basic vs extensive exams, radiographs, who the vet works for, and using the results.",
  url: 'https://horses.com/ownership/pre-purchase-exam',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Does a horse pass or fail a pre-purchase exam?",
    answer:
      "No -- a pre-purchase exam does not pass or fail a horse. It produces findings about the horse's current health and soundness, and the veterinarian explains whether those findings matter for the buyer's intended use. Few horses are blemish-free, so the buyer weighs the findings and risk and decides, rather than the exam delivering a simple yes or no.",
    answerText:
      "No -- it produces findings, not a pass or fail. The vet explains whether issues matter for your intended use, and you weigh the findings and risk to decide. Few horses are blemish-free.",
  },
  {
    question: "Should the seller's vet do the pre-purchase exam?",
    answer:
      "Ideally not. The examining veterinarian should be acting for the buyer and is best not being the horse's regular vet, to avoid any conflict of interest. The buyer briefs the vet on the intended use and budget, and the vet reports findings honestly and advises on their significance without trying to push the sale either way.",
    answerText:
      "Ideally not -- the vet should act for the buyer and not be the horse's regular vet, to avoid a conflict of interest. They report findings honestly for the buyer's intended use.",
  },
  {
    question: "What is the difference between a basic and a five-stage vetting?",
    answer:
      "A basic (two-stage) exam covers the resting examination plus walk and trot, suitable for low-value or low-demand purchases. A five-stage exam adds strenuous exercise to stress the heart, lungs, and limbs, a rest period and re-examination, and a final trot-up to reveal lameness that only appears after work. The level should match the horse's value and intended use.",
    answerText:
      "A basic exam covers the resting check plus walk and trot; a five-stage adds strenuous exercise, a rest-and-re-exam, and a final trot-up to catch post-exercise lameness. Match the level to the horse's value and use.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function PrePurchaseExamPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "The Pre-Purchase Exam",
          subtitle:
            "The pre-purchase examination, or vetting, is the buyer's best protection against an expensive mistake -- an independent veterinary assessment of a horse's health and soundness before money changes hands. It does not promise a perfect horse or guarantee the future, but it surfaces problems, informs the price, and lets a buyer make a clear-eyed decision. This guide explains what the exam covers and how to use it. This is reference material to inform the process alongside your veterinarian.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Pre-Purchase Exam", href: '/ownership/pre-purchase-exam' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Exam Is For", href: "#purpose" },
            { label: "What It Covers", href: "#covers" },
            { label: "Basic vs Extensive", href: "#levels" },
            { label: "Radiographs and Extras", href: "#radiographs" },
            { label: "Who the Vet Works For", href: "#whofor" },
            { label: "Using the Results", href: "#results" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Choosing a Vet", href: "/ownership/choosing-a-vet" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-ppe"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="purpose">What the Exam Is For</h2>
          <p>A pre-purchase exam is a veterinary assessment of a horse&apos;s current health and soundness, carried out for a prospective buyer to inform the buying decision. Its purpose is not to pass or fail the horse, nor to guarantee its future, but to identify any existing problems and assess the horse&apos;s suitability for the buyer&apos;s intended use. A jumping prospect and a quiet trail horse are judged against different demands, so the buyer&apos;s plans shape what matters in the findings.</p>

          <h2 id="covers">What It Covers</h2>
          <p>A standard exam includes a thorough physical examination at rest -- eyes, heart, lungs, teeth, skin, conformation, and a hands-on check of the limbs and back -- followed by an evaluation of the horse in motion, in hand and often on the lunge, including flexion tests that stress the joints to reveal hidden lameness. The veterinarian assesses the horse&apos;s wind (breathing), demeanor, and overall condition. The aim is a rounded picture of how the horse is functioning now.</p>

          <h2 id="levels">Basic vs Extensive</h2>
          <p>Pre-purchase exams come in tiers. A basic (sometimes called two-stage) exam covers the resting examination and seeing the horse walk and trot, suitable for a low-value or low-demand purchase. A more extensive (five-stage) exam adds strenuous exercise to stress the heart, lungs, and limbs, a period of rest and re-examination, and a final trot-up to catch lameness that only shows after work. The level should match the horse&apos;s value and intended job, decided with your veterinarian.</p>

          <h2 id="radiographs">Radiographs and Extras</h2>
          <p>Beyond the clinical exam, buyers can request additional diagnostics: radiographs of the feet, hocks, and other areas to look for bony change; ultrasound of soft tissues; blood tests (including, by agreement, storing a sample to test later for medication that might mask problems); endoscopy of the airway; and tests appropriate to the discipline. These add cost and are chosen based on the horse&apos;s value, age, intended use, and any findings from the clinical exam.</p>

          <h2 id="whofor">Who the Vet Works For</h2>
          <p>A crucial principle is independence: the examining veterinarian should be acting for the buyer, not the seller, and ideally is not the horse&apos;s regular vet, to avoid any conflict of interest. The buyer should brief the vet on the intended use and budget. The vet&apos;s job is to report findings honestly and advise on their significance for that buyer&apos;s plans, not to talk the buyer into or out of the purchase.</p>

          <h2 id="results">Using the Results</h2>
          <p>The exam produces findings, not a simple yes or no. Few horses are entirely without blemish, and the question is whether the findings matter for the intended use -- a minor issue may be irrelevant for light hacking but disqualifying for upper-level competition. The veterinarian explains the significance of each finding and the associated risk, and the buyer decides, possibly renegotiating the price, requesting further tests, or walking away. The exam is a tool for an informed decision, not a guarantee against all future problems.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Purchase Examinations” guidelines. aaep.org.</li>
            <li>British Equine Veterinary Association (BEVA). Pre-purchase examination guidance. beva.org.uk.</li>
            <li>Veterinary texts on the equine purchase examination, current editions.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
