import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equitation — Judging the Rider, Not the Horse",
  description:
    "Reference overview of equitation: the discipline judging rider position and effectiveness, flat and over-fences classes, the medal classes, and position basics.",
  path: '/disciplines/equitation',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equitation — Judging the Rider, Not the Horse",
  description:
    "Reference overview of equitation: the discipline judging rider position and effectiveness, flat and over-fences classes, the medal classes, and position basics.",
  url: 'https://horses.com/disciplines/equitation',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is judged in an equitation class?",
    answer:
      "The rider is judged, not the horse. The judge evaluates the rider's position (a balanced, classically correct seat), security (a stable lower leg and independent seat), effectiveness (subtle, well-timed aids), accuracy (correct lines, distances, and lead changes), and overall presentation. The horse is essentially the vehicle through which the rider is assessed.",
    answerText:
      "The rider, not the horse -- position, security, effectiveness of the aids, accuracy, and overall presentation. The horse is the vehicle through which the rider is judged.",
  },
  {
    question: "How is equitation different from the hunters?",
    answer:
      "Hunters judge the horse's style, manners, and way of going, while equitation judges the rider's position, balance, and effectiveness. In the same over-fences round, a hunter judge watches the horse and an equitation judge watches the rider. Equitation is the rider-focused foundation that supports success in the horse-focused hunter and jumper disciplines.",
    answerText:
      "Hunters judge the horse's style and movement; equitation judges the rider's position and effectiveness. One watches the horse, the other the rider, sometimes over the same kind of course.",
  },
  {
    question: "What are the equitation medal classes?",
    answer:
      "The medal classes are prestigious junior equitation championships, in the United States including the USEF Medal, the ASPCA Maclay, the USET Talent Search, and the WIHS Equitation. They are highly competitive finals featuring demanding tests, gymnastic exercises, and sometimes riding an unfamiliar horse, and they have launched many professional riding careers.",
    answerText:
      "Prestigious junior equitation finals -- in the US the USEF Medal, ASPCA Maclay, USET Talent Search, and WIHS Equitation -- with demanding tests that identify the most polished, adaptable riders.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function EquitationPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        hero={{
          title: "Equitation",
          subtitle:
            "Equitation is the discipline in which the rider, not the horse, is judged. While hunters reward the horse's style and jumpers reward clear fast rounds, equitation evaluates the rider's position, balance, and effectiveness -- how correctly and quietly they ride and how well they present the horse. It is the schoolroom of English riding and the foundation on which the hunter and jumper disciplines are built. This overview describes how equitation is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Equitation", href: '/disciplines/equitation' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Equitation Is", href: "#what" },
            { label: "Flat and Over Fences", href: "#classes" },
            { label: "What the Judge Looks For", href: "#judging" },
            { label: "The Medal Classes", href: "#medals" },
            { label: "Why It Matters", href: "#matters" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hunter Under Saddle", href: "/disciplines/hunter-under-saddle" },
              { label: "Show Jumping", href: "/disciplines/show-jumping" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Stirrups and Safety", href: "/tack/stirrups-and-safety" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-equitation"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Equitation Is</h2>
          <p>Equitation is the art and judged discipline of correct, effective riding, where the focus is entirely on the rider. The horse is the vehicle; the rider&apos;s seat, position, use of the aids, and overall effectiveness are what the judge assesses. Strong equitation -- a balanced, quiet, secure position from which the rider can influence the horse subtly -- underpins success in every other English discipline, which is why it is the cornerstone of junior and amateur development in the hunter/jumper world.</p>

          <h2 id="classes">Flat and Over Fences</h2>
          <p>Equitation is judged both on the flat and over fences. Flat equitation evaluates the rider&apos;s position and effectiveness at walk, trot, and canter, often with the class asked to perform specific tests. Over-fences equitation judges the rider over a course, assessing position and security through the approach, the jump, and the landing, and how smoothly and accurately the rider presents the horse and rides the lines and distances. Riders may also be tested individually -- asked to perform particular movements to separate the best.</p>

          <h2 id="judging">What the Judge Looks For</h2>
          <ul>
            <li><strong>Position</strong> -- a balanced, classically correct seat: heels down, a straight line from ear to hip to heel, soft following hands, and an upright, quiet upper body.</li>
            <li><strong>Security</strong> -- a stable lower leg and independent seat that stays with the horse over fences and through transitions.</li>
            <li><strong>Effectiveness</strong> -- subtle, well-timed aids that produce a smooth, accurate ride rather than visible effort.</li>
            <li><strong>Accuracy</strong> -- correct lines, distances, lead changes, and execution of any tests.</li>
            <li><strong>Presentation</strong> -- the overall picture of harmony between rider and horse, turned out correctly.</li>
          </ul>

          <h2 id="medals">The Medal Classes</h2>
          <p>At the top of the junior equitation pyramid sit the prestigious medal finals -- in the United States, classes such as the USEF Medal, the ASPCA Maclay, the USET Talent Search, and the WIHS Equitation, which are highly competitive championships that have launched many professional careers. These finals often include demanding tests, gymnastic exercises, and even riding an unfamiliar horse, designed to identify the most polished, adaptable, and effective riders.</p>

          <h2 id="matters">Why It Matters</h2>
          <p>Equitation is sometimes dismissed as a beauty contest, but a correct, secure, effective position is the foundation of safe and successful riding in every discipline -- it lets a rider stay with the horse, give clear aids, and avoid interfering with the horse&apos;s balance. The skills honed in the equitation ring carry directly into jumpers, hunters, and beyond. For developing riders especially, equitation builds the toolkit that the rest of their riding stands on.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>United States Equestrian Federation (USEF). Equitation division and medal rules. usef.org.</li>
            <li>United States Hunter Jumper Association (USHJA). Equitation resources. ushja.org.</li>
            <li>Classic equitation texts (e.g., George Morris, Hunter Seat Equitation).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
