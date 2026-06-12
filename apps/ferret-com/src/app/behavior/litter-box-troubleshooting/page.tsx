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
  ArticleSourcesList,
  CrossPortfolioCard,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Litter Box Troubleshooting — Why Misses Happen | Ferret.com',
  description:
    'A systematic guide to ferret litter-box problems: box placement, corner instinct, cleaning, the right litter, and the medical causes behind a sudden change.',
  path: '/behavior/litter-box-troubleshooting',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Litter Box Troubleshooting for Ferrets',
  description:
    'How to diagnose and resolve ferret litter-box problems by working with corner instinct, box placement, litter choice, and ruling out medical causes.',
  url: 'https://ferret.com/behavior/litter-box-troubleshooting',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
  speakable: true,
})


const FAQS = [
  {
    question: 'Why does my ferret keep missing the litter box?',
    answer:
      "The most common cause is distance: a ferret more than fifteen to twenty feet from the nearest box is unlikely to return to it, so it backs into the closest corner instead. Other frequent causes are a box that is too dirty for the ferret's standards, a box in a high-traffic spot the ferret avoids, or a litter the ferret dislikes. Work through placement and cleaning first before assuming it is a training failure.",
  },
  {
    question: 'What is the best litter for a ferret box?',
    answer:
      "Paper-pellet litter or non-aromatic wood-pellet litter are the standard recommendations. Avoid clumping clay litter because of the ingestion and respiratory-irritation risk, and avoid aromatic softwood shavings such as cedar and pine, which can irritate a ferret's airways. Ferrets do not dig and bury the way cats do, so a thin layer in a corner-style box is enough.",
  },
  {
    question: 'How many litter boxes does one ferret need?',
    answer:
      "Plan for at least one box per room the ferret has free access to, plus a box in the cage on the lowest level. Ferrets will not travel far to find a box, so coverage matters more than total count. In a multi-ferret home, add boxes so there is never competition for a single corner.",
  },
  {
    question: 'My house-trained ferret suddenly stopped using the box. What changed?',
    answer:
      "A sudden regression in a previously reliable adult ferret often has a medical cause rather than a behavioral one. Diarrhea, urinary discomfort, insulinoma-related weakness, and arthritis that makes climbing into the box painful can all show up first as litter-box misses. A sudden change is a reason to see an exotic-pet veterinarian, not a reason to retrain.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — behaviour and clinical chapters on elimination and disease",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — litter-training guidance and realistic compliance expectations",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — clinician resources on ferret GI and urinary disease",
    url: "https://www.aemv.org",
    publisher: "AEMV",
  },
]

export default function LitterBoxTroubleshootingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Litter Box Troubleshooting for Ferrets',
          subtitle:
            'Ferrets are not cats. They never fully commit to a single box the way a tidy cat does, and an 80-90% hit rate is a realistic ceiling rather than a failure. When the miss rate climbs higher than that, the fix is almost always placement, cleaning, or litter choice — or, in a previously reliable adult, a medical change worth investigating.',
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Litter Box Troubleshooting', href: '/behavior/litter-box-troubleshooting' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Reset Your Expectations', href: '#expectations' },
                { label: 'Work With the Corner Instinct', href: '#corner' },
                { label: 'Box Placement & Count', href: '#placement' },
                { label: 'Litter Choice', href: '#litter' },
                { label: 'Cleaning & Scent Cues', href: '#cleaning' },
                { label: 'When It Is Medical', href: '#medical' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Litter Training', href: '/care/litter-training' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Leash & Harness Training', href: '/behavior/leash-and-harness-training' },
                { label: 'Behavior Hub', href: '/behavior' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-litter-troubleshooting"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="behavior" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Litter Training', href: '/care/litter-training' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Cage Cleaning Routine', href: '/care/cage-cleaning-routine' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Almost every litter-box complaint about ferrets comes down to
            one of four things: an expectation set too high, a box too far
            away, a box too dirty, or a litter the ferret dislikes. A fifth
            cause — a medical problem — sits underneath any sudden change in
            a previously reliable ferret. Work through these in order and
            most litter problems resolve without any retraining at all.
          </DropCap>

          <h2 id="expectations">Reset Your Expectations</h2>
          <p>
            Ferrets do not approach the litter box the way cats do. Per
            American Ferret Association owner education, an 80-90% hit rate
            is the realistic ceiling for a well-trained ferret, and the
            remaining misses are normal. If you are aiming for perfect
            compliance, you will be frustrated forever. The useful question
            is not &quot;how do I get to 100%&quot; but &quot;why has my
            ferret slipped below its usual rate&quot;.
          </p>

          <h2 id="corner">Work With the Corner Instinct</h2>
          <p>
            Ferrets instinctively back into a corner to eliminate. You will
            never train this out, so the trainable behavior is &quot;use one
            of these specific corners&quot; rather than &quot;stop preferring
            corners&quot;. Corner-shaped boxes with raised back walls fit the
            instinct and catch the characteristic backing-up posture. The
            foundational version of this approach is covered in our{' '}
            <a href="/behavior/training-and-bonding">training and bonding guide</a>.
          </p>

          <h2 id="placement">Box Placement and Count</h2>
          <ul>
            <li>
              <strong>One box per room of free-roam access.</strong> A ferret
              more than fifteen to twenty feet from a box will use the nearest
              corner instead. Coverage beats total count.
            </li>
            <li>
              <strong>Cage box on the lowest level.</strong> Ferrets prefer to
              eliminate at the bottom of the cage, away from where they sleep
              and eat.
            </li>
            <li>
              <strong>Identify the ferret&apos;s chosen corners.</strong> If a
              ferret repeatedly uses one specific corner that has no box, put a
              box there. Fighting the ferret&apos;s preferred site rarely works;
              accommodating it almost always does.
            </li>
            <li>
              <strong>Avoid high-traffic placement.</strong> A box in a busy,
              noisy spot gets avoided. Tuck boxes into quieter corners.
            </li>
          </ul>

          <h2 id="litter">Litter Choice</h2>
          <p>
            Use paper-pellet litter or non-aromatic wood pellets. Avoid
            clumping clay litter, which carries an ingestion and respiratory
            risk, and avoid aromatic softwood shavings such as cedar and pine,
            which can irritate a ferret&apos;s airways. Ferrets do not bury
            waste, so a thin layer is enough — a deep bed of litter just gets
            kicked out of the box.
          </p>
          <CalloutBox variant="tip" title="Change one variable at a time">
            <p>
              If you are switching litter to solve a problem, change only the
              litter and keep box placement constant for a week before judging
              the result. Changing several things at once makes it impossible
              to tell which one helped.
            </p>
          </CalloutBox>

          <h2 id="cleaning">Cleaning and Scent Cues</h2>
          <p>
            Ferrets abandon boxes that smell unpleasant to them, so spot-clean
            daily and fully replace litter weekly. When a ferret misses, clean
            the spot thoroughly with an enzymatic cleaner so no scent marker
            remains, then move the soiled paper into the nearest box. The
            residual scent in the box teaches location far more effectively
            than any correction. Never punish a miss — a startled ferret does
            not connect the punishment to the behavior and may begin to avoid
            you instead.
          </p>

          <h2 id="medical">When It Is Medical</h2>
          <p>
            A previously reliable adult ferret that suddenly starts missing is
            often telling you about a health problem rather than a training
            lapse. The common culprits include:
          </p>
          <ul>
            <li>
              <strong>Diarrhea or GI upset</strong> — urgency overrides the
              trip to the box.
            </li>
            <li>
              <strong>Urinary discomfort</strong> — straining, frequent small
              urinations, or blood-tinged urine warrant prompt veterinary
              attention.
            </li>
            <li>
              <strong>Weakness from insulinoma</strong> — a ferret too weak or
              disoriented to reach the box reliably.
            </li>
            <li>
              <strong>Arthritis or pain</strong> — an older ferret may avoid a
              box with high walls because climbing in hurts. A lower-sided box
              can help.
            </li>
          </ul>
          <CalloutBox variant="warning" title="Sudden regression is a vet visit">
            <p>
              When a house-trained ferret changes its bathroom habits abruptly,
              treat it as a possible medical sign first. Retraining a ferret
              that is actually unwell wastes time and delays diagnosis. See an
              exotic-pet veterinarian before assuming the problem is behavioral.
            </p>
          </CalloutBox>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general behavior information about ferrets, not
            individualized veterinary advice. A sudden change in litter habits
            warrants an exotic-pet veterinary exam before pursuing a
            training-only solution.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
