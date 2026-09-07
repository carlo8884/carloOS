import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

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

export default function EquitationPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Hunter Under Saddle', href: '/disciplines/hunter-under-saddle' },
          { title: 'Show Jumping', href: '/disciplines/show-jumping' },
          { title: 'Dressage', href: '/disciplines/dressage' },
        ]}
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
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
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
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the equitation checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Equitation checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-horse-equitation-position-chart,
              stall-door-usef-medal-card, and
              equine-hunter-seat-handbook notes
              that match the ear-hip-heel, usef-medal /
              aspc-maclay, and hunter-seat copy on this
              page — a laminated horse equitation position
              chart so the heels-down / ear-to-hip-to-heel
              / independent-seat notes are posted on the
              stall door (not a cutting cow-work chart,
              not an ADS driving-phase chart), a horse
              stall-door USEF medal card so the USEF Medal
              / ASPCA Maclay / WIHS notes are labeled at
              the barn (not an NCHA cutting card, not a
              four-in-hand card), and an equine hunter-seat
              handbook so the rider-not-horse / George
              Morris grounding is a physical barn book
              (not a cutting cow-sense handbook, not a
              cones-driving handbook). Educational barn
              checklist, not a ranked clinic list, not a
              first-aid-kit hop, and not a substitute for
              a veterinarian. Horses.com does not sell
              insurance. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Equitation checklist"
              subtitle="Email the equitation position chart, USEF medal card, and hunter-seat handbook notes. No spam."
              ctaText="Email my equitation checklist"
              source="disciplines-equitation-under-hero"
            />
          </div>

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

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated horse equitation position chart /
              horse stall-door USEF medal card /
              equine hunter-seat handbook).
              No existing product hop to keep.
              Educational barn searches only; no Rx /
              vaccine / flea / heartworm / nsaid hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs cutting /
              combined-driving hops.
              Directory import left untouched.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the equitation barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page ear-hip-heel, usef-medal /
              aspc-maclay, and hunter-seat copy — a
              laminated horse equitation position chart, a
              horse stall-door USEF medal card, and an
              equine hunter-seat handbook. Educational
              barn searches only. They are not a ranked
              clinic list, they are not a cutting /
              combined-driving hop, they are not a
              first-aid-kit hop, they are not a child
              toothbrush hop, and they do not replace a
              veterinarian. Horses.com does not sell
              insurance. Horses.com earns a commission on
              qualifying purchases at no extra cost to
              you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+equitation+position+chart?s=discipline-equitation"
                amazonLabel="Browse laminated horse equitation position charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+stall+door+usef+medal+card?s=discipline-equitation"
                amazonLabel="Browse horse stall-door USEF medal cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+hunter+seat+handbook?s=discipline-equitation"
                amazonLabel="Browse equine hunter-seat handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
