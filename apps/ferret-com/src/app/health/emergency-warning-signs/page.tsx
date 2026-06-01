import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Emergency Warning Signs — When to Rush to the Vet | Ferret.com',
  description:
    'The ferret symptoms that cannot wait: collapse, seizures, labored breathing, not eating, straining, and pale gums — what each means and why ferrets crash fast.',
  path: '/health/emergency-warning-signs',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Emergency Warning Signs',
  description:
    'Recognizing veterinary emergencies in domestic ferrets — the red-flag signs that require urgent care, what they can indicate, and why ferrets deteriorate quickly.',
  url: 'https://ferret.com/health/emergency-warning-signs',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Emergency Warning Signs',
  description:
    'Clinical reference on emergency warning signs in domestic ferrets and when to seek urgent veterinary care.',
  url: 'https://ferret.com/health/emergency-warning-signs',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health' },
    { name: 'Emergency Warning Signs', url: 'https://ferret.com/health/emergency-warning-signs' },
  ],
})

const FAQS = [
  {
    question: 'My ferret suddenly collapsed and seems weak — what should I do?',
    answer:
      "Sudden collapse, weakness, staring, or stargazing can signal a hypoglycemic crisis, which is common in ferrets with insulinoma. If your ferret is conscious and can swallow, a small amount of a sugar source rubbed on the gums can help temporarily, but this is a stabilizing step, not a treatment — get to a veterinarian immediately. Collapse can also reflect heart disease, severe anemia, or other emergencies, so it always warrants urgent care.",
  },
  {
    question: 'How quickly do ferrets get worse when they are sick?',
    answer:
      "Faster than many owners expect. Ferrets are small, have limited reserves, and instinctively hide illness, so by the time signs are obvious the underlying problem may already be advanced. A ferret that has not eaten for a day, or that is markedly lethargic, should be seen promptly rather than monitored for several more days. When in doubt with a ferret, err toward calling the vet.",
  },
  {
    question: 'Is not eating really an emergency?',
    answer:
      "It can be. Ferrets have a rapid metabolism and a high risk of low blood sugar, so anorexia is more dangerous in this species than in many others. A ferret that refuses food for a day, especially with lethargy, teeth-grinding, or other signs, needs veterinary evaluation. Refusing food can point to anything from a blockage to an ulcer to insulinoma — all of which are time-sensitive.",
  },
  {
    question: 'What does straining to urinate or defecate mean?',
    answer:
      "Straining can indicate a urinary blockage or a gastrointestinal obstruction, both of which are emergencies. A male ferret with prostatic enlargement from adrenal disease can develop a urinary obstruction that prevents urination — a life-threatening situation. Any ferret straining and producing little or nothing, or crying out, needs same-day care.",
  },
  {
    question: 'Should I keep an emergency vet number ready?',
    answer:
      "Yes. Because ferrets can deteriorate quickly and not every clinic treats them, identify an exotic-mammal-capable veterinarian and the nearest emergency hospital that will see ferrets before you have a crisis. Having the number, hours, and directions ready saves critical time when minutes matter.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretEmergencySignsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Emergency Warning Signs',
          subtitle:
            'Ferrets hide illness and crash fast. This is the can’t-wait list — the signs that mean stop reading and call a vet — along with what each one can indicate. Knowing them in advance is the difference between a scare and a tragedy.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Emergency Warning Signs', href: '/health/emergency-warning-signs' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why Ferrets Crash Fast', href: '#fast' },
                { label: 'The Can’t-Wait List', href: '#redflags' },
                { label: 'What Each Can Mean', href: '#meaning' },
                { label: 'Before the Emergency', href: '#prepare' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
                { label: 'Heart Disease', href: '/health/heart-disease' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-emergency-signs"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Ferrets are stoic, small, and quick to decline — a combination that
            makes them unforgiving when something goes wrong. The owner who
            knows the emergency signs cold, and who has already found a vet that
            treats ferrets, buys the most precious resource in a crisis: time.
            This page is the can&apos;t-wait list, and the reasoning behind each
            entry.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets hide illness and deteriorate quickly, so several signs
            warrant immediate veterinary care rather than watchful waiting:
            collapse or sudden weakness, seizures or stargazing, labored or
            open-mouth breathing, not eating, persistent vomiting or
            teeth-grinding, straining to urinate or defecate, a bloated or
            painful belly, pale or bluish gums, and uncontrolled bleeding.
            Identify an exotic-mammal-capable emergency vet before you ever need
            one.
          </p>

          <h2 id="fast">Why Ferrets Crash Fast</h2>
          <p>
            Three features of ferret physiology explain the urgency. They are
            small, with limited metabolic and fluid reserves, so problems
            escalate quickly. They have a rapid metabolism and a high background
            risk of insulinoma, which makes low blood sugar a constant lurking
            danger. And like many prey-adjacent and predator species, they mask
            weakness until they can no longer compensate. The exotic-mammal
            references (Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and
            Rodents</em>) repeatedly note that apparently sudden ferret crises
            often reflect a process that was advancing unseen.
          </p>

          <h2 id="redflags">The Can&apos;t-Wait List</h2>
          <CalloutBox variant="warning" title="Call a vet now if you see any of these">
            <ul style={{ marginBottom: 0 }}>
              <li>Collapse, sudden profound weakness, or inability to stand</li>
              <li>Seizures, tremors, or &quot;stargazing&quot; (staring blankly upward)</li>
              <li>Labored, rapid, or open-mouth breathing, or blue-tinged gums</li>
              <li>Not eating for a day, especially with lethargy</li>
              <li>Repeated vomiting, retching, or persistent teeth-grinding</li>
              <li>Straining to urinate or defecate with little or nothing produced</li>
              <li>A bloated, distended, or painful abdomen</li>
              <li>Pale or white gums (a sign of anemia or shock)</li>
              <li>Uncontrolled bleeding or significant trauma</li>
              <li>Black, tarry stool, or fresh blood in stool or urine</li>
            </ul>
          </CalloutBox>

          <h2 id="meaning">What Each Sign Can Mean</h2>
          <p>
            These signs are non-specific by design — the point is to act, not to
            self-diagnose — but understanding the common culprits explains the
            urgency:
          </p>
          <ul>
            <li>
              <strong>Collapse, weakness, seizures, stargazing</strong> — classic
              for a hypoglycemic crisis from insulinoma, but also heart disease
              or severe anemia. A conscious ferret that can swallow may be
              steadied with a little sugar on the gums on the way to the vet;
              this buys time, it does not treat the cause.
            </li>
            <li>
              <strong>Labored breathing, blue gums</strong> — possible
              congestive heart failure (see{' '}
              <a href="/health/heart-disease">heart disease</a>), pneumonia, or
              chest fluid. Always urgent.
            </li>
            <li>
              <strong>Not eating, vomiting, teeth-grinding</strong> — points
              toward a <a href="/health/gastrointestinal-blockage">GI
              blockage</a>, a gastric ulcer, or another painful abdominal
              process. Anorexia alone is dangerous in a ferret.
            </li>
            <li>
              <strong>Straining to urinate</strong> — a urinary obstruction,
              which in male ferrets is sometimes driven by prostatic enlargement
              from adrenal disease, is life-threatening and time-critical.
            </li>
            <li>
              <strong>Distended or painful belly</strong> — obstruction,
              organ enlargement, or fluid accumulation.
            </li>
            <li>
              <strong>Pale gums, bleeding, tarry stool</strong> — anemia or
              blood loss, which in an intact female could reflect estrogen
              toxicity (see{' '}
              <a href="/health/spaying-and-neutering">spaying and
              neutering</a>) and otherwise a bleeding ulcer or other cause.
            </li>
          </ul>

          <h2 id="prepare">Before the Emergency Ever Happens</h2>
          <p>
            The best emergency plan is made in advance, when no one is panicking:
          </p>
          <ul>
            <li>
              <strong>Find a ferret-capable vet now.</strong> Not every clinic
              treats ferrets, and not every emergency hospital does. Identify
              both before you need them. Our{' '}
              <a href="/health/vet-visit-prep">vet visit prep</a> guide covers
              finding an exotic-mammal practice.
            </li>
            <li>
              <strong>Save the numbers and hours.</strong> Keep the contact
              details, hours, and directions for your regular vet and the
              nearest ferret-capable emergency hospital somewhere you can find
              them instantly.
            </li>
            <li>
              <strong>Know your ferret&apos;s normal.</strong> Familiarity with
              your ferret&apos;s usual energy, appetite, gum color, and stool
              makes the abnormal obvious sooner.
            </li>
          </ul>
          <p>
            The full ferret health library — including the conditions behind
            most ferret emergencies — is organized at the{' '}
            <a href="/health">health hub</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret emergency and critical-care chapters.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — exotic-mammal emergency and critical-care reviews.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — clinical reports on
              ferret emergency presentations.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — practitioner
              directory and owner-facing emergency guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret emergencies.
            It is not individualized veterinary advice, and it is not a
            substitute for urgent care. When in doubt, contact a veterinarian
            familiar with ferrets immediately — ideally an AEMV member or an
            ABVP diplomate in Exotic Companion Mammal practice, or the nearest
            ferret-capable emergency hospital.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
