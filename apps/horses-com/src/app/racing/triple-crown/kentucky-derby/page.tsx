/**
 * Horses.com -- The Kentucky Derby
 * /racing/triple-crown/kentucky-derby
 *
 * Depth spoke beneath the Triple Crown overview hub. Goes deep on the FIRST
 * leg only: Churchill Downs, the mile-and-a-quarter distance, the road of prep
 * races, and the Derby's defining traditions (roses, "My Old Kentucky Home").
 * Does NOT re-tell the whole Triple Crown story (that is the overview) and does
 * NOT cover the Preakness/Belmont in depth (those are sibling spokes).
 *
 * NON-WAGERING (QC §1): heritage/educational explainer of a public event.
 * No odds, picks, handicapping, juleps-as-betting, or wagering framing.
 * Byline "Horses.com Editorial"; records stated as widely-reported/general,
 * sourced to Churchill Downs and racing's governing bodies.
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
  title: 'The Kentucky Derby Explained -- Churchill Downs & the First Leg',
  description:
    'The Kentucky Derby: the first Triple Crown leg at Churchill Downs over a mile and a quarter, the prep-race road, and the Run for the Roses traditions.',
  path: '/racing/triple-crown/kentucky-derby',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Kentucky Derby Explained -- Churchill Downs & the First Leg',
  description:
    'The Kentucky Derby: the first Triple Crown leg at Churchill Downs over a mile and a quarter, the prep-race road, and the Run for the Roses traditions.',
  url: 'https://horses.com/racing/triple-crown/kentucky-derby',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'How long is the Kentucky Derby?',
    answer:
      'The Kentucky Derby is run at a mile and a quarter (ten furlongs) on the dirt main track at Churchill Downs. For most of the three-year-olds in the field it is the longest race they have ever run, which is why the Derby tests stamina and the quality of a horse&apos;s trip as much as raw speed.',
    answerText:
      'A mile and a quarter (ten furlongs) on dirt at Churchill Downs -- typically the longest distance the runners have faced, so stamina and a clean trip matter as much as speed.',
  },
  {
    question: 'Where and when is the Kentucky Derby held?',
    answer:
      'The Derby is run at Churchill Downs in Louisville, Kentucky, traditionally on the first Saturday in May. It is the opening leg of the American Triple Crown and the most widely watched horse race in the United States.',
    answerText:
      'At Churchill Downs in Louisville, Kentucky, traditionally on the first Saturday in May -- the opening leg of the Triple Crown.',
  },
  {
    question: 'How do horses qualify for the Kentucky Derby?',
    answer:
      'Entry is earned, not bought. Churchill Downs runs a points-based qualifying series in which three-year-olds accumulate points by finishing well in a slate of designated prep races over the preceding months. The horses with the most points fill the field, which is capped at a maximum number of starters.',
    answerText:
      'Through a points-based series of designated prep races: three-year-olds earn points by finishing well, and the top point-earners fill the capped field.',
  },
  {
    question: 'Why is the Kentucky Derby called the Run for the Roses?',
    answer:
      'The winner is draped with a garland of red roses in the winner&apos;s circle, a tradition that gave the race its enduring nickname, &ldquo;the Run for the Roses.&rdquo; The rose has been associated with the Derby since the early twentieth century.',
    answerText:
      'Because the winner is draped with a garland of red roses, a long-standing tradition that gave the race its nickname.',
  },
]

export default function KentuckyDerbyPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:triple-crown-derby"
        fallbackKey="horses-com:racing"
        eyebrow="Triple Crown · First Leg"
        title="The Kentucky Derby"
        subtitle="The first jewel of the Triple Crown — a mile and a quarter at Churchill Downs on the first Saturday in May, and the most famous race in American sport."
        alt="A full field of Thoroughbreds racing past a packed grandstand on a spring race day"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The Triple Crown (Overview)', href: '/racing/triple-crown', category: 'Triple Crown' },
          { title: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
          { title: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
        ]}
        hero={{
          title: 'The Kentucky Derby',
          subtitle:
            'The Kentucky Derby is the first leg of the American Triple Crown and the most famous horse race in the United States. Run at Churchill Downs over a mile and a quarter on the first Saturday in May, it is wrapped in tradition — the garland of roses, the singing of &ldquo;My Old Kentucky Home,&rdquo; and a field of up to twenty three-year-olds earned through a season of prep races. This reference explains the race, the road to it, and its traditions. It is educational, not a wagering guide.',
          category: 'Triple Crown Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '7 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'The Triple Crown', href: '/racing/triple-crown' },
          { name: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The First Leg', href: '#first-leg' },
                { label: 'Churchill Downs & the Distance', href: '#course' },
                { label: 'The Road to the Derby', href: '#road' },
                { label: 'The Traditions', href: '#traditions' },
                { label: 'Why It Sets the Stage', href: '#stage' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Three Legs"
              links={[
                { label: 'The Triple Crown (Overview)', href: '/racing/triple-crown' },
                { label: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
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
              source="triple-crown-kentucky-derby"
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

          <h2 id="first-leg">The First Leg</h2>
          <p>The <strong>Kentucky Derby</strong> is the opening leg of the American <a href="/racing/triple-crown">Triple Crown</a> and the most widely watched horse race in the United States. First run in 1875, it is restricted to three-year-old Thoroughbreds, run once a year on the first Saturday in May, and watched by an audience that includes millions of people who follow no other racing all year. Because it comes first, the Derby sets the narrative for the entire Triple Crown season: every spring, the story of who might sweep all three legs begins here.</p>
          <p>This page goes deep on the Derby itself. For how the three legs combine into the rarely-won sweep, and the history of the horses that have managed it, see the <a href="/racing/triple-crown">Triple Crown overview</a>. This reference treats the race as a heritage and educational subject; it offers no odds, picks, or wagering guidance.</p>

          <h2 id="course">Churchill Downs &amp; the Distance</h2>
          <p>The Derby is run at <strong>Churchill Downs</strong> in Louisville, Kentucky, over a mile and a quarter (ten furlongs) on the dirt main track. The track&apos;s twin spires are among the most recognizable landmarks in the sport, and the Derby draws the largest single-day attendance in American racing.</p>
          <p>The distance is central to what makes the Derby distinctive. A mile and a quarter is longer than most of these horses have ever raced — few earlier contests for three-year-olds are run at the full Derby trip — so the race rewards stamina and a well-judged ride, not just speed. The Derby also carries the largest field of the three Triple Crown legs, traditionally up to twenty starters. That crowded field makes the run to the first turn, post position, and racing luck genuinely consequential: a horse can have all the ability in the world and still be compromised by traffic in a field that size.</p>

          <h2 id="road">The Road to the Derby</h2>
          <p>A place in the Derby gate is earned through a structured qualifying campaign. Churchill Downs operates a <strong>points-based prep series</strong>: across the preceding months, three-year-olds accumulate points by finishing well in a designated slate of prep races run at tracks around the country (and, in part, internationally). When entries close, the horses with the most points fill the field up to its cap.</p>
          <p>This system means the Derby tends to assemble the deepest but least-tested field of the spring. Many runners arrive having proven themselves only at shorter distances, against regional rivals, on a handful of starts. The Derby is where those separate form lines collide for the first time — which is part of why the result so often reshapes expectations for the legs that follow.</p>

          <h2 id="traditions">The Traditions</h2>
          <p>Few sporting events are as defined by ritual as the Derby. The winning horse is draped with a <strong>garland of red roses</strong> in the winner&apos;s circle, the tradition behind the race&apos;s nickname, &ldquo;the Run for the Roses.&rdquo; As the field is led onto the track, the crowd sings <strong>&ldquo;My Old Kentucky Home,&rdquo;</strong> one of the most emotional moments in American sport.</p>
          <p>The spectacle extends to the stands. Elaborate hats, spring fashion, and the pageantry of the infield and grandstand are part of Derby culture, and the race carries the informal billing of &ldquo;the most exciting two minutes in sports.&rdquo; These traditions — heritage rituals rather than commercial add-ons — are a large part of why the Derby reaches so far beyond racing&apos;s regular audience.</p>

          <h2 id="stage">Why It Sets the Stage</h2>
          <p>As the first leg, the Derby is the gateway to the Triple Crown drama. A winner here arrives at the <a href="/racing/triple-crown/preakness-stakes">Preakness Stakes</a> two weeks later carrying the hopes of a sweep, and the whole season&apos;s narrative tightens around that one horse. If a Derby winner then takes the Preakness, the sport&apos;s attention turns to the long, demanding <a href="/racing/triple-crown/belmont-stakes">Belmont Stakes</a> — the &ldquo;Test of the Champion&rdquo; — where most Triple Crown bids are ultimately decided.</p>
          <p>For the wider context of the breed and the sport the Derby sits within, see <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>, and for how the Derby&apos;s Grade 1 status fits the classification ladder, the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Churchill Downs / Kentucky Derby. Official race history, distance, and qualifying points system. kentuckyderby.com.</li>
            <li>The Jockey Club. American Stud Book; Thoroughbred registration and the three-year-old crop. jockeyclub.com.</li>
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
