/**
 * Horses.com -- The Preakness Stakes
 * /racing/triple-crown/preakness-stakes
 *
 * Depth spoke beneath the Triple Crown overview hub. Goes deep on the SECOND
 * leg only: Pimlico, the mile-and-three-sixteenths distance (shortest leg),
 * the two-week turnaround, and the Preakness's own traditions (black-eyed
 * Susans, the painted weathervane, the Woodlawn Vase). Does NOT re-tell the
 * whole Triple Crown story (overview) and does NOT cover Derby/Belmont in depth
 * (sibling spokes).
 *
 * NON-WAGERING (QC §1): heritage/educational explainer of a public event.
 * No odds, picks, handicapping, or wagering framing. Byline "Horses.com
 * Editorial"; facts sourced to the Maryland Jockey Club and racing's bodies.
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Preakness Stakes Explained -- Pimlico & the Middle Jewel',
  description:
    'The Preakness Stakes: the second Triple Crown leg at Pimlico, the shortest of the three, the two-week turnaround, and its black-eyed Susan traditions.',
  path: '/racing/triple-crown/preakness-stakes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Preakness Stakes Explained -- Pimlico & the Middle Jewel',
  description:
    'The Preakness Stakes: the second Triple Crown leg at Pimlico, the shortest of the three, the two-week turnaround, and its black-eyed Susan traditions.',
  url: 'https://horses.com/racing/triple-crown/preakness-stakes',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'How long is the Preakness Stakes?',
    answer:
      'The Preakness is run at a mile and three-sixteenths (nine and a half furlongs) on dirt at Pimlico — the shortest of the three Triple Crown legs. Coming a touch shorter than the Derby, and only two weeks after it, the Preakness rewards recovery and tactical speed.',
    answerText:
      'A mile and three-sixteenths (nine and a half furlongs) on dirt at Pimlico -- the shortest of the three Triple Crown legs.',
  },
  {
    question: 'Where and when is the Preakness Stakes held?',
    answer:
      'The Preakness is run at Pimlico Race Course in Baltimore, Maryland, traditionally about two weeks after the Kentucky Derby. It is the second leg of the American Triple Crown.',
    answerText:
      'At Pimlico Race Course in Baltimore, Maryland, traditionally about two weeks after the Kentucky Derby -- the second Triple Crown leg.',
  },
  {
    question: 'What makes the Preakness different from the Derby?',
    answer:
      'Two things stand out. The field is usually smaller than the Derby&apos;s crowded twenty, making the Preakness a more tactical, less traffic-dependent race. And the turnaround is short — only about two weeks — so it is partly a test of how well a horse has recovered from the Derby, often against fresh rivals who skipped the first leg.',
    answerText:
      'A smaller, more tactical field than the Derby and a short two-week turnaround that tests recovery, often against fresh rivals who skipped the Derby.',
  },
  {
    question: 'What are the Preakness traditions?',
    answer:
      'The winner is traditionally draped with a blanket of black-eyed Susans, the Maryland state flower, and the winning stable&apos;s colors are painted onto a weathervane atop the infield cupola after the race. The historic Woodlawn Vase is presented to the winning connections.',
    answerText:
      'A blanket of black-eyed Susans for the winner, the painting of the winning silks on the infield weathervane, and the historic Woodlawn Vase trophy.',
  },
]

export default function PreaknessStakesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:triple-crown-preakness"
        fallbackKey="horses-com:hero"
        eyebrow="Triple Crown · Second Leg"
        title="The Preakness Stakes"
        subtitle="The middle jewel — the shortest leg, run two weeks after the Derby at historic Pimlico, where a Triple Crown bid is either kept alive or quietly ended."
        alt="Thoroughbreds driving down the homestretch at a historic dirt racecourse"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The Triple Crown (Overview)', href: '/racing/triple-crown', category: 'Triple Crown' },
          { title: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
          { title: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
        ]}
        hero={{
          title: 'The Preakness Stakes',
          subtitle:
            'The Preakness Stakes is the second leg of the American Triple Crown — the &ldquo;middle jewel&rdquo; — run two weeks after the Kentucky Derby at Pimlico Race Course in Baltimore. At a mile and three-sixteenths it is the shortest of the three legs, and the short turnaround makes it a distinct test of recovery and tactics. This reference explains the race, its place in the series, and its traditions. It is educational, not a wagering guide.',
          category: 'Triple Crown Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'The Triple Crown', href: '/racing/triple-crown' },
          { name: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Middle Jewel', href: '#middle-jewel' },
                { label: 'Pimlico & the Distance', href: '#course' },
                { label: 'The Two-Week Turnaround', href: '#turnaround' },
                { label: 'The Traditions', href: '#traditions' },
                { label: 'Where the Sweep Stands', href: '#sweep' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Three Legs"
              links={[
                { label: 'The Triple Crown (Overview)', href: '/racing/triple-crown' },
                { label: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
                { label: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
                { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="triple-crown-preakness-stakes"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-08"
            updatedAt="2026-06-08"
            reviewedBy="Editorial team"
          />

          <h2 id="middle-jewel">The Middle Jewel</h2>
          <p>The <strong>Preakness Stakes</strong> is the second leg of the American <a href="/racing/triple-crown">Triple Crown</a>, run about two weeks after the <a href="/racing/triple-crown/kentucky-derby">Kentucky Derby</a>. First run in 1873, it sits in the middle of the series both in the calendar and in character — shorter than the Derby, run at a different track, and arriving on a fast turnaround that gives it a tension all its own. It is often called the &ldquo;middle jewel&rdquo; of the Triple Crown.</p>
          <p>This page goes deep on the Preakness alone. For how the three legs combine into the full Triple Crown, and the horses that have swept all three, see the <a href="/racing/triple-crown">Triple Crown overview</a>. As a heritage and educational reference, this page contains no odds, picks, or wagering guidance.</p>

          <h2 id="course">Pimlico &amp; the Distance</h2>
          <p>The Preakness is run at <strong>Pimlico Race Course</strong> in Baltimore, Maryland, over a mile and three-sixteenths (nine and a half furlongs) on the dirt main track. Pimlico is one of the oldest racetracks in the country, and the Preakness is the centerpiece of its calendar.</p>
          <p>At a mile and three-sixteenths, the Preakness is the <strong>shortest of the three Triple Crown legs</strong> — a touch shorter than the Derby&apos;s mile and a quarter and well short of the Belmont&apos;s mile and a half. The field is also typically smaller than the Derby&apos;s crowded twenty. Together these make the Preakness a more tactical, less traffic-bound race: position and timing matter, but a horse is far less likely to be swallowed up by sheer numbers than in the first leg.</p>

          <h2 id="turnaround">The Two-Week Turnaround</h2>
          <p>The defining stress of the Preakness is the calendar. Only about <strong>two weeks</strong> separate it from the Derby, a short gap by modern training standards. For a Derby winner pressing on toward a Triple Crown, that turnaround is a genuine test of how well the horse has bounced back from a hard mile and a quarter.</p>
          <p>It also reshapes the field. Some Derby runners skip the Preakness to wait for the Belmont or other targets, while <strong>fresh challengers</strong> who bypassed the Derby enter specifically to take on a tiring Derby winner. That dynamic — a Triple Crown hopeful facing rested opponents two weeks after a grueling first leg — is exactly the kind of obstacle that makes the full sweep so rare.</p>

          <h2 id="traditions">The Traditions</h2>
          <p>The Preakness carries its own distinctive rituals. The winner is traditionally draped with a <strong>blanket of black-eyed Susans</strong>, the Maryland state flower that gives the race its floral identity. After the race, the winning stable&apos;s silks are <strong>painted onto a weathervane</strong> atop the cupola in the infield — a livery that stays until the next year&apos;s winner is crowned. The historic <strong>Woodlawn Vase</strong>, one of the most valued trophies in American sport, is presented to the winning connections.</p>
          <p>These are heritage traditions tied to the race and to Maryland, not commercial features — part of what gives each Triple Crown leg its own character rather than three interchangeable races.</p>

          <h2 id="sweep">Where the Sweep Stands</h2>
          <p>By the Preakness, the Triple Crown picture is sharpening. If the <a href="/racing/triple-crown/kentucky-derby">Derby</a> winner wins again here, the sport turns its full attention to the final leg, the <a href="/racing/triple-crown/belmont-stakes">Belmont Stakes</a>, with a sweep on the line. If a different horse wins, the Triple Crown is no longer possible that year — and the Preakness becomes the race that ended the bid. Either way, the middle jewel is where the season&apos;s biggest story is held in the balance.</p>
          <p>For the breed and sport behind the series, see <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>; for how a Grade 1 like the Preakness sits in the classification ladder, the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Maryland Jockey Club / Preakness Stakes. Official race history, distance, and traditions. preakness.com.</li>
            <li>The Jockey Club. American Stud Book; Thoroughbred registration. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Triple Crown overview and member-track information. ntra.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article is an educational, heritage explainer of a public
              sporting event. It is not a wagering resource: no betting tips,
              odds commentary, handicapping, or predictions are provided or
              implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
