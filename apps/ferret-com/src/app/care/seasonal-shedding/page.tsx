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
  CrossPortfolioCard,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Seasonal Shedding — Grooming & Hairball Risk | Ferret.com',
  description:
    'Ferrets blow their coat twice a year as daylight changes. What a normal shed looks like, how to groom through it, and the hairball risk.',
  path: '/care/seasonal-shedding',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Seasonal Shedding',
  description:
    "Seasonal coat changes in domestic ferrets — the photoperiod-driven spring and autumn molts, grooming through a coat blow, hairball-obstruction prevention, and distinguishing a normal shed from pathological hair loss.",
  url: 'https://ferret.com/care/seasonal-shedding',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Care', url: 'https://ferret.com/care' },
    { name: 'Seasonal Shedding', url: 'https://ferret.com/care/seasonal-shedding' },
  ],
})

const FAQS = [
  {
    question: 'How often do ferrets shed?',
    answer:
      "Most ferrets go through two major coat changes a year — a spring shed, when the dense winter coat drops, and an autumn shed, when the lighter summer coat is replaced by a thicker winter one. These molts are triggered by changing daylight length, so a ferret kept under artificial light year-round may shed on a less predictable schedule. Light background shedding the rest of the year is normal.",
  },
  {
    question: "How long does a ferret's coat blow last?",
    answer:
      "A seasonal shed usually runs one to three weeks at its heaviest. During that window you may pull loose tufts off with your fingers and find hair on every surface the ferret touches. If heavy shedding drags on for many weeks, becomes patchy, or leaves bald areas, that is no longer a normal seasonal molt and warrants an exotic-pet vet visit.",
  },
  {
    question: 'Should I bathe my ferret during a heavy shed?',
    answer:
      "A single warm-water bath during a heavy shed can help loosen and remove dead coat, but resist the urge to bathe repeatedly. Frequent bathing strips skin oils and triggers the sebaceous glands to overproduce, which can actually worsen the greasy coat and odor. Most of the work during a shed should be done with a brush, not the bath. See our bathing-and-grooming guide for frequency limits.",
  },
  {
    question: 'Can shedding cause a blockage?',
    answer:
      "Yes. Ferrets groom themselves and ingest loose hair, and unlike cats they do not reliably vomit up hairballs. During a heavy seasonal shed the swallowed-hair load rises, and a hair mass can contribute to gastrointestinal obstruction — a surgical emergency in ferrets. Regular brushing during a molt and a vet-recommended hairball remedy are the standard preventive steps.",
  },
  {
    question: 'Is heavy shedding ever a sign of disease?',
    answer:
      "It can be. Symmetrical hair loss starting at the tail and rump, thinning that does not regrow, or a coat that never fully comes back after a shed are classic early signs of adrenal disease, the second most common condition in middle-aged ferrets. A normal seasonal shed is diffuse and regrows promptly; pathological loss is patterned and persistent.",
  },
  {
    question: 'What is a "rat tail" in ferrets?',
    answer:
      "\"Rat tail\" is keeper shorthand for a tail that has lost most of its fur, leaving thin, near-bare skin. On its own during a heavy seasonal molt it can be benign and regrow, but tail-base hair loss is also one of the earliest visible signs of adrenal disease. If the tail does not refur within a normal shed cycle, have an exotic-pet vet evaluate it.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretSeasonalSheddingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Seasonal Shedding',
          subtitle:
            "Ferrets blow their coat twice a year, driven by changing daylight rather than temperature. A spring shed drops the dense winter coat; an autumn shed builds it back. Knowing what a normal molt looks like — and which patterns of hair loss are not normal — is one of the more useful skills a ferret keeper develops.",
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Seasonal Shedding', href: '/care/seasonal-shedding' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferrets Shed Seasonally', href: '#why' },
                { label: 'What a Normal Shed Looks Like', href: '#normal' },
                { label: 'Grooming Through a Coat Blow', href: '#grooming' },
                { label: 'The Hairball Risk', href: '#hairball' },
                { label: 'When Shedding Is Not Normal', href: '#abnormal' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Bathing & Grooming', href: '/care/bathing-and-grooming' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
                { label: 'GI Blockage', href: '/health/gastrointestinal-blockage' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-seasonal-shedding"
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
            Twice a year, a ferret&apos;s coat transforms. In spring the thick,
            plush winter fur loosens and falls out in tufts; in autumn a
            lighter summer coat is shed and replaced by the dense one that will
            carry the animal through cold months. These coat blows are normal,
            predictable, and driven primarily by the changing length of the
            day rather than by temperature. Understanding the rhythm helps a
            keeper tell an ordinary molt from the patterned hair loss that
            signals disease.
          </DropCap>

          <h2 id="why">Why Ferrets Shed Seasonally</h2>
          <p>
            The ferret is a photoperiodic species: its coat, reproductive
            cycle, and even some hormonal patterns track the number of daylight
            hours. As days lengthen toward summer, the body sheds the heavy
            winter coat; as days shorten toward winter, it builds a denser one.
            This is the same light-sensitivity that makes artificial lighting
            relevant to ferret health more broadly, and it is why a ferret kept
            under constant indoor light on a long &quot;summer&quot; cycle can
            shed on an irregular or muted schedule.
          </p>
          <p>
            Spring and autumn are therefore the two windows when most keepers
            notice a dramatic increase in loose hair. The exact timing varies
            with the individual ferret and with how much natural daylight
            reaches its room. A ferret in a bright window-lit space will molt
            closer to the natural calendar than one in a dim interior room.
          </p>

          <h2 id="normal">What a Normal Shed Looks Like</h2>
          <p>
            During a healthy seasonal shed you will see:
          </p>
          <ul>
            <li>
              <strong>Diffuse loss across the whole body.</strong> Hair thins
              more or less evenly. You can often pull a gentle tuft free with
              your fingers, and loose fur appears on bedding, clothing, and any
              surface the ferret rests on.
            </li>
            <li>
              <strong>A short, intense window.</strong> The heaviest shedding
              concentrates into roughly one to three weeks, then tapers as the
              new coat fills in.
            </li>
            <li>
              <strong>Prompt regrowth.</strong> New coat appears as the old one
              drops, so the ferret never stays bald. A spring shed reveals the
              sleeker summer coat underneath; the autumn shed thickens up.
            </li>
            <li>
              <strong>Possible color shift.</strong> Many ferrets change shade
              between coats — a sable may look paler in summer and richer in
              winter. This is normal and tracks the molt cycle.
            </li>
          </ul>

          <h2 id="grooming">Grooming Through a Coat Blow</h2>
          <p>
            The main job during a shed is to remove as much loose hair as you
            can before the ferret swallows it. A soft slicker brush or a
            fine-toothed comb, used in short, gentle sessions, lifts dead coat
            efficiently. Most ferrets tolerate brushing better when it is paired
            with a high-value treat and kept brief — a minute or two at a time
            rather than a long session.
          </p>
          <ul>
            <li>
              <strong>Brush daily during the peak.</strong> The more loose hair
              you capture, the less the ferret ingests during self-grooming.
            </li>
            <li>
              <strong>Limit baths.</strong> One warm-water bath can help loosen
              a heavy shed, but frequent bathing strips skin oils and pushes the
              sebaceous glands to overproduce, worsening greasiness and odor.
              Brushing — not bathing — does the bulk of the work. Our{' '}
              <a href="/care/bathing-and-grooming">bathing and grooming guide</a>{' '}
              covers safe frequency in detail.
            </li>
            <li>
              <strong>Wipe down hard surfaces and wash bedding more often.</strong>{' '}
              A heavy shed coats hammocks and sleep sacks with fur, which the
              ferret then re-ingests when burrowing. Frequent laundering during
              the molt reduces the recycled-hair load.
            </li>
          </ul>

          <CalloutBox variant="tip" title="Keep sessions short and rewarded">
            <p>
              A ferret that associates brushing with a treat will sit still far
              longer than one wrestled into it. Smear a little ferret-safe
              high-protein paste on a spoon, let the ferret lick while you work
              the brush, and stop before patience runs out. Tolerance builds
              over many short sessions, not one long one.
            </p>
          </CalloutBox>

          <h2 id="hairball">The Hairball Risk</h2>
          <p>
            This is the part of seasonal shedding that has clinical weight.
            Ferrets groom themselves and swallow loose hair, but unlike cats
            they do not reliably bring hairballs back up. Swallowed hair can
            accumulate into a mass in the stomach or intestine, and gastric or
            intestinal hair masses are recognized in the exotic-mammal
            veterinary literature as a contributor to gastrointestinal
            obstruction — a surgical emergency in this species.
          </p>
          <p>
            The shedding season raises the swallowed-hair load precisely when a
            ferret is grooming the most. Two preventive measures matter:
          </p>
          <ul>
            <li>
              <strong>Brush aggressively during the molt</strong> so there is
              less loose hair to ingest in the first place.
            </li>
            <li>
              <strong>Ask your exotic-pet vet about a hairball remedy.</strong>{' '}
              Ferret-formulated petroleum-based laxative pastes are commonly
              recommended during heavy sheds to help hair pass; use a
              veterinarian-recommended product and dosing rather than improvising.
            </li>
          </ul>
          <p>
            Warning signs of a developing obstruction — reduced appetite,
            smaller or absent stools, lethargy, teeth-grinding (a pain sign),
            or vomiting — are an urgent reason to call a vet. Our{' '}
            <a href="/health/gastrointestinal-blockage">GI blockage guide</a>{' '}
            covers presentation and diagnosis in full.
          </p>

          <h2 id="abnormal">When Shedding Is Not Normal</h2>
          <p>
            The most important distinction a keeper can learn is between a
            diffuse, self-resolving seasonal molt and the patterned, persistent
            hair loss of disease. Treat the following as reasons to see an
            exotic-pet vet rather than wait out another shed cycle:
          </p>
          <ul>
            <li>
              <strong>Symmetrical loss starting at the tail and rump.</strong>{' '}
              Hair loss that begins at the tail base and progresses forward over
              the flanks and back, often bilaterally, is a classic early sign of{' '}
              <a href="/health/adrenal-disease">adrenal disease</a> — the second
              most common condition of middle-aged ferrets.
            </li>
            <li>
              <strong>Bald patches that do not regrow.</strong> A normal shed
              regrows promptly; areas that stay bare for weeks are abnormal.
            </li>
            <li>
              <strong>A &quot;rat tail&quot; that never refurs.</strong> A
              near-bare tail can occur during a heavy molt, but if it persists
              past a normal cycle it is a recognized adrenal warning sign.
            </li>
            <li>
              <strong>Itchy, flaky, or inflamed skin.</strong> Seasonal shedding
              is not itchy. Scratching, scabs, or dandruff alongside hair loss
              point toward parasites or skin disease, not a normal molt.
            </li>
          </ul>

          <CalloutBox variant="warning" title="A persistent shed is a vet question">
            <p>
              A normal coat blow is diffuse and regrows on its own within a few
              weeks. Hair loss that is patterned, one-sided in onset, slow to
              regrow, or accompanied by other changes — weight loss, behavior
              change, an enlarged vulva in a spayed female — is a reason to book
              an exotic-pet exam, not to wait for the next molt.
            </p>
          </CalloutBox>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret dermatology, photoperiod biology, adrenal disease, and
              gastrointestinal foreign-body chapters.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — articles on ferret integument, seasonal coat
              change, and gastrointestinal obstruction.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — clinical reports on
              ferret hair loss, adrenal disease presentation, and trichobezoar
              (hair-mass) obstruction.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing grooming and
              seasonal-care guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general husbandry information about normal ferret coat
            changes. It is not individualized veterinary advice. Persistent or
            patterned hair loss should be evaluated by a veterinarian
            experienced with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
