/**
 * Horses.com -- The Triple Crown Reference
 * /racing/triple-crown
 *
 * Educational reference hub: what the Triple Crown is, the three races
 * (Kentucky Derby, Preakness Stakes, Belmont Stakes), the difficulty of
 * the feat, and the history of the 13 winners. NOT a betting, odds, or
 * picks resource.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities: Churchill Downs, the Maryland Jockey Club, NYRA, The Jockey Club.
 * Only well-established, stable historical facts are stated; no fabricated
 * year-by-year statistics.
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Triple Crown -- Derby, Preakness & Belmont Explained',
  description:
    'The Triple Crown reference: the Kentucky Derby, Preakness Stakes, and Belmont Stakes -- distances, venues, why the feat is so rare, and the 13 winners.',
  path: '/racing/triple-crown',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Triple Crown -- Derby, Preakness & Belmont Explained',
  description:
    'The Triple Crown reference: the Kentucky Derby, Preakness Stakes, and Belmont Stakes -- distances, venues, why the feat is so rare, and the 13 winners.',
  url: 'https://horses.com/racing/triple-crown',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What are the three Triple Crown races?',
    answer:
      'The American Triple Crown comprises three races for three-year-old Thoroughbreds, run each spring: the Kentucky Derby at Churchill Downs in Louisville, Kentucky (one and a quarter miles); the Preakness Stakes at Pimlico Race Course in Baltimore, Maryland (one and three-sixteenths miles); and the Belmont Stakes, traditionally at Belmont Park in Elmont, New York (one and a half miles). A horse wins the Triple Crown by winning all three.',
    answerText:
      'The Kentucky Derby (1.25 mi, Churchill Downs), the Preakness Stakes (1 3/16 mi, Pimlico), and the Belmont Stakes (1.5 mi, Belmont Park) -- all for three-year-old Thoroughbreds each spring.',
  },
  {
    question: 'Why is the Triple Crown so difficult to win?',
    answer:
      'The difficulty comes from the combination of compression and variety. The three races are run over roughly five weeks, so a horse must stay sound and at peak form throughout. Each race is a different distance at a different track, culminating in the Belmont&apos;s demanding mile and a half -- the longest of the three. A horse must also beat fresh challengers who skip earlier legs to target a single race. Winning all three demands speed, stamina, durability, and a measure of luck.',
    answerText:
      'A horse must win three different distances at three tracks in about five weeks, staying sound while facing fresh rivals who target a single leg. It demands speed, stamina, durability, and luck.',
  },
  {
    question: 'How many horses have won the Triple Crown?',
    answer:
      'Thirteen horses have won the American Triple Crown. Sir Barton was the first, in 1919. Secretariat&apos;s 1973 sweep is among the most celebrated performances in the sport&apos;s history. After Affirmed won in 1978, a 37-year gap followed until American Pharoah swept the series in 2015; Justify followed in 2018. The long droughts between winners underscore how rare the achievement is.',
    answerText:
      'Thirteen horses, beginning with Sir Barton (1919). Secretariat (1973) is among the most famous; American Pharoah (2015) ended a 37-year drought, and Justify won in 2018.',
  },
  {
    question: 'Is the order or schedule of the races ever changed?',
    answer:
      'The traditional order is the Derby, then the Preakness about two weeks later, then the Belmont about three weeks after that. This sequence and spacing have occasionally been altered for extraordinary circumstances -- for example, the 2020 series was rescheduled and reordered. The Belmont Stakes has also been hosted at alternate venues during periods of facility renovation at Belmont Park. Always confirm the current year&apos;s dates and venues with the host tracks.',
    answerText:
      'The usual order is Derby, Preakness, Belmont over about five weeks, but it has been altered in extraordinary years (e.g., 2020), and the Belmont has been relocated during Belmont Park renovations.',
  },
]

export default function TripleCrownPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        hero={{
          title: 'The Triple Crown',
          subtitle:
            'The Triple Crown is American horse racing&apos;s most famous prize: winning the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes -- three races, three distances, three tracks -- in a single spring as a three-year-old. This reference explains each race, why the sweep is one of the hardest feats in sport, and the thirteen horses that have achieved it. It is an educational reference, not a betting guide.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'The Triple Crown', href: '/racing/triple-crown' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What the Triple Crown Is', href: '#what' },
                { label: 'The Kentucky Derby', href: '#derby' },
                { label: 'The Preakness Stakes', href: '#preakness' },
                { label: 'The Belmont Stakes', href: '#belmont' },
                { label: 'Why the Sweep Is So Rare', href: '#difficulty' },
                { label: 'The Thirteen Winners', href: '#winners' },
                { label: 'Following the Series', href: '#following' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-triple-crown"
            />
          </>
        }
      >
        <div className="carloOS-article">

          <h2 id="what">What the Triple Crown Is</h2>
          <p>The American Triple Crown is the achievement of winning three specific Thoroughbred races in a single year: the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes. All three are restricted to three-year-old horses, so any individual horse has exactly one season in which it is eligible to attempt the sweep. There is no separate Triple Crown trophy race -- the title is conferred on a horse that wins all three legs in the same spring.</p>
          <p>The three races predate the concept that unites them. The Belmont Stakes was first run in 1867, the Preakness Stakes in 1873, and the Kentucky Derby in 1875. The phrase &quot;Triple Crown&quot; came into common American use in the 1930s, popularized by the racing writer Charles Hatton of the Daily Racing Form, and was applied retroactively to earlier sweeps. Each race is a Grade I stakes -- the highest classification in North American racing -- and each is run on dirt.</p>
          <p>This reference treats the Triple Crown as an educational and historical subject. No picks, odds, wagering guidance, or predictions are offered here.</p>

          <h2 id="derby">The Kentucky Derby</h2>
          <p>The first leg, the Kentucky Derby, is run at Churchill Downs in Louisville, Kentucky, on the first Saturday in May. It is contested at a mile and a quarter (ten furlongs) on dirt. Known for its traditions -- the garland of roses awarded to the winner, the field of up to twenty starters, and a qualifying system based on points earned in designated prep races -- the Derby is the most widely watched horse race in the United States and the largest single-day attendance event in the sport.</p>
          <p>Because it carries the largest field of the three legs and a points-based qualification path, the Derby tends to assemble the deepest and least-tested field. Many horses that contest the Derby are running the longest distance of their lives to that point, since few earlier races for three-year-olds are run at a mile and a quarter.</p>

          <h2 id="preakness">The Preakness Stakes</h2>
          <p>The second leg, the Preakness Stakes, is run at Pimlico Race Course in Baltimore, Maryland, approximately two weeks after the Derby. It is the shortest of the three legs at a mile and three-sixteenths (nine and a half furlongs) on dirt. The winner is traditionally draped with a blanket of black-eyed Susans, the Maryland state flower.</p>
          <p>The Preakness typically draws a smaller field than the Derby, often including the Derby winner, a number of Derby also-rans, and fresh horses that skipped the first leg. The short turnaround from the Derby -- and the fact that a Derby winner arriving at Pimlico is the focus of Triple Crown attention -- gives the second leg its particular tension.</p>

          <h2 id="belmont">The Belmont Stakes</h2>
          <p>The third and final leg, the Belmont Stakes, is traditionally run at Belmont Park in Elmont, New York, roughly three weeks after the Preakness. At a mile and a half (twelve furlongs) on dirt, it is the longest of the three and the longest race most of these horses will ever run. Its demanding distance has earned it the nickname &quot;the Test of the Champion.&quot;</p>
          <p>The Belmont is where Triple Crown bids are most often decided -- and most often denied. A horse arriving with the first two legs in hand faces both the unfamiliar distance and fresh rivals pointed specifically at the Belmont. During periods of renovation at Belmont Park, the race has been hosted at alternate New York venues; confirm the current year&apos;s site with the New York Racing Association (NYRA).</p>

          <h2 id="difficulty">Why the Sweep Is So Rare</h2>
          <p>Several factors compound to make the Triple Crown one of the most difficult achievements in sport:</p>
          <p><strong>Compression.</strong> All three races fall within roughly five weeks. A horse must remain sound, healthy, and at peak fitness across the entire stretch, with little margin to recover from a hard race or a minor setback.</p>
          <p><strong>Distance variety.</strong> The three legs run a mile and a quarter, a mile and three-sixteenths, and a mile and a half. A horse must be effective across that range, and the Belmont&apos;s mile and a half is longer than the comfortable distance of many top three-year-olds.</p>
          <p><strong>Fresh competition.</strong> Connections of strong horses frequently skip the Derby or Preakness to point a well-rested runner at a single leg, meaning the Triple Crown contender repeatedly faces opponents who have not endured the same campaign.</p>
          <p><strong>The one-season window.</strong> Because the races are limited to three-year-olds, a horse cannot return the following year to try again. Every attempt is a single, non-repeatable opportunity.</p>

          <h2 id="winners">The Thirteen Winners</h2>
          <p>Thirteen horses have swept the American Triple Crown. The history is marked by long droughts that illustrate the rarity of the feat:</p>
          <p><strong>Sir Barton (1919)</strong> was the first horse to win all three, before the achievement even carried its now-famous name. Through the 1930s and 1940s, a cluster of winners -- including <strong>Gallant Fox (1930)</strong>, <strong>Whirlaway (1941)</strong>, <strong>Count Fleet (1943)</strong>, <strong>Assault (1946)</strong>, and <strong>Citation (1948)</strong> -- established the Triple Crown as the sport&apos;s defining prize.</p>
          <p>A 25-year drought then followed until <strong>Secretariat (1973)</strong>, whose performances -- particularly a record-setting Belmont won by many lengths -- are remembered as among the greatest in the sport&apos;s history. <strong>Seattle Slew (1977)</strong> and <strong>Affirmed (1978)</strong> followed in quick succession.</p>
          <p>Then came the longest drought of all: 37 years in which several horses won the first two legs but failed in the Belmont. <strong>American Pharoah (2015)</strong> finally ended it, and <strong>Justify (2018)</strong> swept the series three years later. The repeated near-misses during the long droughts are part of what gives the Triple Crown its mystique.</p>

          <h2 id="following">Following the Series</h2>
          <p>The Triple Crown unfolds each spring, beginning with the Kentucky Derby on the first Saturday in May. The official host tracks -- Churchill Downs, the Maryland Jockey Club (Pimlico), and NYRA (Belmont) -- publish entries, post positions, and results, and the races are broadcast nationally. For the structure of the stakes classifications that the Triple Crown races sit atop, see the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>, and for the breed and the sport itself, see <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>.</p>
          <p>Many Triple Crown contenders go on to long second careers after racing. The transition of Thoroughbreds out of the sport is covered in the <a href="/racing/off-track-thoroughbred-aftercare">off-track Thoroughbred aftercare reference</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Churchill Downs / Kentucky Derby. Race history, distance, and qualifying. kentuckyderby.com.</li>
            <li>Maryland Jockey Club / Preakness Stakes. Race history and traditions. preakness.com.</li>
            <li>New York Racing Association (NYRA) / Belmont Stakes. Race history and venue. belmontstakes.com.</li>
            <li>The Jockey Club. American Stud Book; Thoroughbred registration. jockeyclub.com.</li>
            <li>Daily Racing Form. Historical use of the term &quot;Triple Crown&quot; (Charles Hatton). drf.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
