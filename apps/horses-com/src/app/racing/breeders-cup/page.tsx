/**
 * Horses.com -- The Breeders' Cup Reference
 * /racing/breeders-cup
 *
 * Educational reference hub: what the Breeders' Cup is, the championship
 * format, the principal divisions/races, host-track rotation, and the
 * "Win and You're In" qualifying series. NOT a betting, odds, or picks
 * resource.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities: Breeders' Cup Limited, The Jockey Club.
 * Only well-established, stable facts are stated; no fabricated purses,
 * year-by-year results, or counts that drift over time.
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "The Breeders' Cup -- The Championships of Racing, Explained",
  description:
    "The Breeders' Cup reference: the year-end World Championships of Thoroughbred racing -- the format, the Classic, the divisions, and how horses qualify.",
  path: '/racing/breeders-cup',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "The Breeders' Cup -- The Championships of Racing, Explained",
  description:
    "The Breeders' Cup reference: the year-end World Championships of Thoroughbred racing -- the format, the Classic, the divisions, and how horses qualify.",
  url: 'https://horses.com/racing/breeders-cup',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the Breeders' Cup?",
    answer:
      "The Breeders&apos; Cup is an end-of-season championship event for Thoroughbred racing, first run in 1984. It gathers the leading horses in North America and internationally for a series of Grade I championship races held over two days in late autumn. Often called the &quot;World Championships&quot; of the sport, it is run by Breeders&apos; Cup Limited and rotates among major host tracks rather than being tied to a single venue.",
    answerText:
      "An end-of-season Thoroughbred championship event, first run in 1984, with a series of Grade I championship races over two days in late autumn. Run by Breeders' Cup Limited; host track rotates.",
  },
  {
    question: "What is the Breeders' Cup Classic?",
    answer:
      "The Breeders&apos; Cup Classic is the marquee race of the event -- a mile-and-a-quarter test on dirt and the richest race of the meeting. Open to horses three years old and up, it frequently brings together the season&apos;s best older horses and three-year-olds, and its result often influences year-end Horse of the Year honors. It sits at the top of the championship card.",
    answerText:
      "The marquee, richest race of the event: a 1.25-mile dirt race for horses three and up. Its result often influences Horse of the Year voting.",
  },
  {
    question: "How do horses qualify for the Breeders' Cup?",
    answer:
      "The Breeders&apos; Cup uses a &quot;Win and You&apos;re In&quot; Challenge Series: winning a designated qualifying race during the season earns an automatic, fees-paid berth in the corresponding Breeders&apos; Cup championship race. Horses can also be entered through the standard nomination and pre-entry process, subject to the racing secretary&apos;s decisions when a race is oversubscribed. Foal and stallion nominations to the Breeders&apos; Cup program also factor into eligibility.",
    answerText:
      "Through the 'Win and You're In' Challenge Series (winning a designated race earns an automatic berth) or standard nomination and pre-entry, subject to eligibility and field limits.",
  },
  {
    question: "How is the Breeders' Cup different from the Triple Crown?",
    answer:
      "The Triple Crown is a spring series of three set races (the Kentucky Derby, Preakness, and Belmont Stakes) restricted to three-year-olds and tied to specific tracks. The Breeders&apos; Cup is a single year-end championship event with many races across different divisions -- sprinters, milers, turf horses, juveniles, and fillies and mares -- open to a range of ages, and held at a rotating host track. They are the two pillars of the North American racing calendar but serve different purposes.",
    answerText:
      "The Triple Crown is a spring, three-year-old-only series of three fixed races; the Breeders' Cup is a year-end championship event with many divisional races across ages at a rotating venue.",
  },
]

export default function BreedersCupPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'The Triple Crown', href: '/racing/triple-crown' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'Race Types & Classes', href: '/racing/understanding-race-types-and-classes' },
        ]}
        hero={{
          title: "The Breeders' Cup",
          subtitle:
            "The Breeders&apos; Cup is the year-end championship of Thoroughbred racing -- two days, more than a dozen Grade I races, and the season&apos;s best horses from North America and around the world gathered at a single rotating host track. This reference explains the event&apos;s format, the marquee Classic, the principal divisions, and how horses earn their place. It is an educational reference, not a betting guide.",
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: "The Breeders' Cup", href: '/racing/breeders-cup' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: "What the Breeders' Cup Is", href: '#what' },
                { label: 'The Championship Format', href: '#format' },
                { label: 'The Classic', href: '#classic' },
                { label: 'The Principal Divisions', href: '#divisions' },
                { label: 'Host Tracks', href: '#hosts' },
                { label: "Win and You're In", href: '#qualifying' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'The Triple Crown', href: '/racing/triple-crown' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-breeders-cup"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-02"
            updatedAt="2026-06-02"
            reviewedBy="Editorial team"
          />


          <h2 id="what">What the Breeders&apos; Cup Is</h2>
          <p>The Breeders&apos; Cup is an end-of-season championship event for Thoroughbred racing, first run in 1984. Where the Triple Crown is a spring series for three-year-olds, the Breeders&apos; Cup is a single championship meeting held in late autumn that brings together the best horses of the year across every major division -- from two-year-olds to seasoned older horses, on dirt and on turf, at distances from sprints to a mile and a half. It is frequently described as the &quot;World Championships&quot; of the sport because it draws leading horses from Europe, Japan, and elsewhere alongside the top North American runners.</p>
          <p>The event is administered by Breeders&apos; Cup Limited, a non-profit organization, and is funded in part through nomination fees paid on stallions and foals enrolled in the Breeders&apos; Cup program. This reference treats the event as an educational subject. No picks, odds, wagering guidance, or predictions are offered here.</p>

          <h2 id="format">The Championship Format</h2>
          <p>The modern Breeders&apos; Cup is run over two days, typically on the Friday and Saturday of a weekend in late October or early November. The card comprises more than a dozen Grade I championship races, each crowning a divisional champion for the season. Because the races are spread across surfaces, distances, sexes, and age groups, the event functions as a set of simultaneous finals rather than a single race.</p>
          <p>The two-day structure groups the younger-horse and certain divisional races on the first day and the marquee races, including the Classic, on the second. The exact race list and scheduling are set by Breeders&apos; Cup Limited each year and are published in advance of the event.</p>

          <h2 id="classic">The Classic</h2>
          <p>The Breeders&apos; Cup Classic is the centerpiece of the event: a mile-and-a-quarter race on dirt for horses three years old and up, and the richest race of the meeting. It often assembles the strongest field of the year, mixing emerging three-year-olds with established older horses, and its outcome regularly shapes the year-end Horse of the Year conversation. For many top dirt horses, the Classic is the season&apos;s defining target.</p>

          <h2 id="divisions">The Principal Divisions</h2>
          <p>The Breeders&apos; Cup crowns champions across the sport&apos;s major divisions. While the precise lineup is set annually, the long-standing principal races include:</p>
          <p><strong>The Classic</strong> (dirt, classic distance, older horses and three-year-olds) and <strong>the Turf</strong> (the marquee turf race at a mile and a half) headline the event. <strong>The Distaff</strong> is the leading championship for fillies and mares on dirt, and <strong>the Filly &amp; Mare Turf</strong> its turf counterpart. <strong>The Mile</strong> is the championship for milers on turf, and <strong>the Sprint</strong> and <strong>Turf Sprint</strong> crown the fastest horses at short distances on each surface. <strong>The Dirt Mile</strong> rounds out the older-horse program. The <strong>Juvenile</strong> and <strong>Juvenile Fillies</strong> races (and their turf equivalents) are the championships for two-year-olds and are often early indicators of the following year&apos;s classic contenders.</p>

          <h2 id="hosts">Host Tracks</h2>
          <p>Unlike the Triple Crown races, which are tied to specific tracks, the Breeders&apos; Cup rotates among major host venues. Tracks such as Santa Anita Park, Churchill Downs, Del Mar, and Keeneland have hosted the event multiple times. Rotating the host site spreads the event across the country and allows different racing regions to stage the championships. The host track for each upcoming year is announced in advance by Breeders&apos; Cup Limited.</p>

          <h2 id="qualifying">&quot;Win and You&apos;re In&quot;</h2>
          <p>The Breeders&apos; Cup operates a &quot;Win and You&apos;re In&quot; Challenge Series: throughout the season, designated races at tracks in North America and abroad are linked to specific Breeders&apos; Cup championship races. A horse that wins a designated Challenge race earns an automatic, fees-paid berth in the corresponding Breeders&apos; Cup race. Horses can also reach the event through the standard nomination and pre-entry process. When a race draws more entries than the field can hold, a panel applies published criteria to determine the starters. The structure of the graded-stakes hierarchy these races sit within is explained in the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Breeders&apos; Cup Limited. Event history, race program, and the Challenge Series. breederscup.com.</li>
            <li>The Jockey Club. American Stud Book; Thoroughbred registration. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). Grade/Group race classification. horseracingintfed.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
