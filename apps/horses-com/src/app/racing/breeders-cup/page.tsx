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
    question: "When did the Breeders' Cup start, and why was it created?",
    answer:
      "The first Breeders&apos; Cup was held in 1984 at Hollywood Park in California. It was created to give Thoroughbred racing a single year-end championship that would crown divisional champions across the sport -- something the calendar, with its many tracks and scattered marquee races, had previously lacked. The concept is widely credited to breeder and owner John R. Gaines, and the event was designed to be funded by the breeding industry through nomination fees on stallions and foals, which is reflected in its name.",
    answerText:
      "The first Breeders' Cup was run in 1984 at Hollywood Park. It was created to give racing a single year-end championship crowning divisional champions, funded by the breeding industry; the concept is credited to John R. Gaines.",
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
                { label: 'Founding and History', href: '#history' },
                { label: 'The Championship Format', href: '#format' },
                { label: 'The Classic', href: '#classic' },
                { label: 'The Principal Divisions', href: '#divisions' },
                { label: 'Host Tracks', href: '#hosts' },
                { label: "Win and You're In", href: '#qualifying' },
                { label: 'The Event in the Racing Year', href: '#calendar' },
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
                { label: 'Great Racehorses', href: '/racing/great-racehorses' },
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

          <h2 id="history">Founding and History</h2>
          <p>The Breeders&apos; Cup was conceived in the early 1980s as a year-end championship that would give Thoroughbred racing a single, climactic event to crown its divisional champions -- something the sport, with its many tracks and scattered marquee races, had historically lacked. The concept is widely credited to the breeder and owner John R. Gaines, who proposed a championship day funded by the breeding industry itself. Breeders&apos; Cup Limited was organized to run the event, and the inaugural Breeders&apos; Cup was held in 1984 at Hollywood Park in California.</p>
          <p>From the outset the event was designed to be self-funding through the breeding industry: stallion owners and breeders pay nomination fees to enroll their stallions and foals in the program, and those fees help underwrite the purses. That structure tied the championship directly to the people who produce the horses, and it is part of why the event carries the name &quot;Breeders&apos;&quot; Cup. Over the following decades the meeting grew from a single afternoon of races into the two-day championship it is today, adding divisional championships -- including expanded turf, sprint, and juvenile categories -- as the program matured.</p>
          <p>The Breeders&apos; Cup has been the stage for many of the most memorable performances in modern racing, and a strong Breeders&apos; Cup run is frequently a deciding line on a champion&apos;s résumé. Several of the horses profiled in the <a href="/racing/great-racehorses">great racehorses</a> collection -- including the Triple Crown winners <a href="/racing/great-racehorses/american-pharoah">American Pharoah</a> and <a href="/racing/great-racehorses/justify">Justify</a> -- ran during their championship campaigns at the level the event represents. Because results and records change every year, this reference states the event&apos;s stable, well-established features rather than year-by-year outcomes.</p>

          <h2 id="format">The Championship Format</h2>
          <p>The modern Breeders&apos; Cup is run over two days, typically on the Friday and Saturday of a weekend in late October or early November. The card comprises more than a dozen Grade I championship races, each crowning a divisional champion for the season. Because the races are spread across surfaces, distances, sexes, and age groups, the event functions as a set of simultaneous finals rather than a single race -- a sprinter, a turf miler, a two-year-old filly, and an older dirt horse can each end the day as the recognized best in their category.</p>
          <p>The two-day structure groups the younger-horse and certain divisional races on the first day -- often referred to as the day built around the juvenile and distaff championships -- and the marquee races, including the Classic, on the second. The exact race list, distances, and scheduling are set by Breeders&apos; Cup Limited each year and published in advance. Each race is run as a Grade I, the top classification in North American racing; the way grades and classes are assigned is explained in the <a href="/racing/race-types/graded-stakes-races">graded stakes reference</a>.</p>

          <h2 id="classic">The Classic</h2>
          <p>The Breeders&apos; Cup Classic is the centerpiece of the event: a mile-and-a-quarter race on dirt for horses three years old and up, and the richest race of the meeting. It often assembles the strongest field of the year, mixing emerging three-year-olds -- many of them fresh from a Triple Crown campaign -- with established older horses, and its outcome regularly shapes the year-end Horse of the Year conversation. For many top dirt horses, the Classic is the season&apos;s defining target, the race a campaign is built toward.</p>
          <p>Because it falls in late autumn, the Classic also functions as a culmination of the three-year-old generation&apos;s season: a horse that contested the <a href="/racing/triple-crown">Triple Crown</a> in the spring may meet older rivals for the first time in the Classic, and a strong showing there can settle questions left open earlier in the year. The distance -- the same ten furlongs as the Kentucky Derby -- favors horses that combine speed with the stamina to carry it a full mile and a quarter.</p>

          <h2 id="divisions">The Principal Divisions</h2>
          <p>The Breeders&apos; Cup crowns champions across the sport&apos;s major divisions. While the precise lineup is set annually, the long-standing principal races include:</p>
          <p><strong>The Classic</strong> (dirt, classic distance, older horses and three-year-olds) and <strong>the Turf</strong> (the marquee turf race at a mile and a half) headline the event. <strong>The Distaff</strong> is the leading championship for fillies and mares on dirt, and <strong>the Filly &amp; Mare Turf</strong> its turf counterpart. <strong>The Mile</strong> is the championship for milers on turf, and <strong>the Sprint</strong> and <strong>Turf Sprint</strong> crown the fastest horses at short distances on each surface. <strong>The Dirt Mile</strong> rounds out the older-horse program. The <strong>Juvenile</strong> and <strong>Juvenile Fillies</strong> races (and their turf equivalents) are the championships for two-year-olds and are often early indicators of the following year&apos;s classic contenders.</p>
          <p>This spread across age, sex, surface, and distance is deliberate. It means the Breeders&apos; Cup is not a test of a single type of horse but a championship for the whole sport at once: the precocious two-year-old, the specialist sprinter, the European turf router shipping in, and the seasoned dirt horse all have a race designed for them. The divisional structure also feeds the year-end Eclipse Awards, the sport&apos;s championship honors, for which a Breeders&apos; Cup result is frequently the strongest single line on a horse&apos;s record.</p>

          <h2 id="hosts">Host Tracks</h2>
          <p>Unlike the Triple Crown races, which are tied to specific tracks, the Breeders&apos; Cup rotates among major host venues. Tracks such as Santa Anita Park, Churchill Downs, Del Mar, and Keeneland have hosted the event multiple times, and the inaugural 1984 running was held at Hollywood Park. Rotating the host site spreads the event across the country and allows different racing regions to stage the championships in front of their own audiences.</p>
          <p>The choice of host carries practical consequences for the racing. A track&apos;s configuration -- the length of its stretch, the tightness of its turns, the layout of its turf course -- can favor certain running styles, and horses shipping in from across the country or from overseas must adapt to an unfamiliar surface and climate. The host track for each upcoming year is announced in advance by Breeders&apos; Cup Limited, and the selection is itself a notable event on the racing calendar.</p>

          <h2 id="qualifying">&quot;Win and You&apos;re In&quot;</h2>
          <p>The Breeders&apos; Cup operates a &quot;Win and You&apos;re In&quot; Challenge Series: throughout the season, designated races at tracks in North America and abroad are linked to specific Breeders&apos; Cup championship races. A horse that wins a designated Challenge race earns an automatic, fees-paid berth in the corresponding Breeders&apos; Cup race -- the connections do not have to pay the nomination and entry fees that would otherwise apply, and the horse&apos;s place in the field is secured regardless of how oversubscribed the race becomes.</p>
          <p>The Challenge Series gives the season&apos;s major prep races a clear, shared destination, and because it includes races in Europe, Japan, and elsewhere, it is one of the mechanisms that draws international runners to the event. Horses can also reach the Breeders&apos; Cup through the standard nomination and pre-entry process. When a race draws more entries than the field can hold, a panel applies published criteria -- typically weighing graded-stakes earnings and quality of performance -- to determine the starters. The structure of the graded-stakes hierarchy these races sit within is explained in the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="calendar">The Event in the Racing Year</h2>
          <p>The Breeders&apos; Cup and the Triple Crown together frame the North American racing calendar. The Triple Crown opens the season&apos;s headline narrative in the spring, focused entirely on the three-year-old division; the Breeders&apos; Cup closes it in the autumn, settling the championships across every division and frequently deciding Horse of the Year. A horse&apos;s full season can be read as the arc between them -- spring classics, a summer campaign, and an autumn championship target.</p>
          <p>For horses whose racing careers end after a Breeders&apos; Cup campaign, the transition to a second life follows the same pathways as for any Thoroughbred; the <a href="/racing/off-track-thoroughbred-aftercare">off-track Thoroughbred aftercare reference</a> covers that process. For the breed and the sport that the event crowns, see <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>, and for the historic champions who define what a championship campaign can look like, the <a href="/racing/great-racehorses">great racehorses</a> collection.</p>

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
