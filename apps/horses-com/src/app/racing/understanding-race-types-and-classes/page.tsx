/**
 * Horses.com -- Race Types and Classes Explained
 * /racing/understanding-race-types-and-classes
 *
 * Educational reference: maiden, claiming, allowance, stakes, and graded
 * stakes race categories explained as structural categories, NOT betting guidance.
 *
 * Byline: Horses.com Editorial
 * Authorities: The Jockey Club, state racing commissions
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
import Link from 'next/link'
import { raceTypeSpokes } from '@/data/race-types'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Race Types & Classes Explained -- Maiden, Claiming, Stakes & More',
  description:
    'What maiden, claiming, allowance, stakes, and graded stakes races mean in horse racing -- an educational structural reference, not handicapping guidance.',
  path: '/racing/understanding-race-types-and-classes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Race Types & Classes Explained -- Maiden, Claiming, Stakes & More',
  description:
    'What maiden, claiming, allowance, stakes, and graded stakes races mean in horse racing -- an educational structural reference, not handicapping guidance.',
  url: 'https://horses.com/racing/understanding-race-types-and-classes',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is a maiden race?',
    answer:
      'A maiden race is a race restricted to horses that have never won a race. "Maiden" in this context refers to the horse&apos;s win record, not its breeding or age. A horse remains a maiden until it wins its first race, at which point it is no longer eligible for maiden conditions. Maiden special weight races are for maidens that have not been entered in a claiming race, while maiden claiming races allow any horse in the field to be claimed at the published price.',
    answerText:
      'A maiden race is for horses that have never won a race. A horse loses its maiden status when it wins for the first time.',
  },
  {
    question: 'What does "claiming" mean in horse racing?',
    answer:
      'A claiming race is a race in which every horse entered is available for purchase at a published claiming price. Any licensed horseperson can submit a claim for a horse before the race; if the race is run, the claiming party takes ownership of the horse regardless of the race result. The seller receives the purse for the race. Claiming races serve an important function in the racing ecosystem: they create a market mechanism that encourages owners to enter horses at an appropriate price level and prevents mismatches between horses of dramatically different quality.',
    answerText:
      'In a claiming race, every horse is for sale at a published price. Any licensed horseperson can buy a horse before the race runs. This creates a self-regulating quality mechanism.',
  },
  {
    question: 'What is an allowance race?',
    answer:
      'An allowance race is a non-claiming race with conditions of eligibility based on the horse&apos;s record -- typically earnings history or the number of wins in a defined time period. Allowance conditions serve as a step between maiden and claiming races and the open stakes level. Weight allowances are built into the conditions: horses that have earned less in a defined period carry less weight, providing a competitive adjustment between horses at different points in their development.',
    answerText:
      'An allowance race is a non-claiming race with eligibility conditions based on earnings or wins. Weight allowances adjust for horses at different competitive levels.',
  },
  {
    question: 'What makes a race a "graded stakes"?',
    answer:
      'Graded stakes races are the top tier of racing quality, classified by the American Graded Stakes Committee (affiliated with The Jockey Club) on a scale of Grade I (highest) to Grade III. The classification is based on the quality of horses that have competed in the race historically. A Grade I race is a championship-level event. The grading system provides a consistent framework for comparing race quality across different tracks and time periods and is used in international comparisons through the IFHA&apos;s Pattern Race system.',
    answerText:
      'Graded stakes are classified Grade I to III by the American Graded Stakes Committee based on historical horse quality. Grade I is championship level.',
  },
]

export default function RaceTypesAndClassesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'The Triple Crown', href: '/racing/triple-crown' },
          { title: 'The People of Racing', href: '/racing/the-people-of-racing' },
        ]}
        hero={{
          title: 'Race Types & Classes Explained',
          subtitle:
            'Horse races are organized into a hierarchy of conditions and classes that reflect the experience, earnings, and quality level of the horses eligible to enter. Understanding these categories -- maiden, claiming, allowance, stakes, and graded stakes -- is fundamental to understanding how the racing ecosystem is structured. This reference explains what these categories mean and why they exist. It is an educational reference, not a handicapping or wagering guide.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Race Types & Classes', href: '/racing/understanding-race-types-and-classes' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Class Structure Exists', href: '#why' },
                { label: 'Maiden Races', href: '#maiden' },
                { label: 'Claiming Races', href: '#claiming' },
                { label: 'Allowance Races', href: '#allowance' },
                { label: 'Stakes Races', href: '#stakes' },
                { label: 'Graded Stakes', href: '#graded' },
                { label: 'The Race Classes in Depth', href: '#in-depth' },
                { label: 'Weight and Conditions', href: '#weight' },
                { label: 'The Racing Secretary', href: '#secretary' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Each Class In Depth"
              links={[
                { label: 'Maiden Races', href: '/racing/race-types/maiden-races' },
                { label: 'Claiming Races', href: '/racing/race-types/claiming-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Graded Stakes Races', href: '/racing/race-types/graded-stakes-races' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Quarter Horse Racing', href: '/racing/quarter-horse-racing' },
                { label: 'Harness Racing', href: '/racing/harness-racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-race-types"
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


          <h2 id="why">Why a Class Structure Exists</h2>
          <p>Horse racing&apos;s class system exists to create competitive conditions that allow horses of broadly similar ability and experience to compete against each other. Without such a structure, races would be dominated by the best horses, and owners of less distinguished horses would have no competitive outlet. The class structure creates a spectrum of opportunities from entry-level maiden races through the highest-quality stakes events, allowing horses to compete at an appropriate level while providing a pathway for talented horses to advance.</p>
          <p>The conditions of a race define its class: who is eligible to enter, what weight they carry, and what kind of competition they will face. These conditions are published in the condition book, a schedule of races published by the racing secretary at each track. Understanding the condition book is fundamental to how trainers, owners, and agents plan which races to target for each horse.</p>
          <p>This reference explains the major race categories as structural concepts. It does not provide wagering guidance or predictions.</p>

          <h2 id="maiden">Maiden Races</h2>
          <p>A maiden is a horse that has never won a race. A maiden race restricts entry to horses with this status, creating a starting point in the competitive hierarchy. The term has nothing to do with age, sex, or breeding -- it refers solely to win record. Once a horse wins a race, regardless of the level, it is no longer a maiden and is no longer eligible for maiden conditions.</p>
          <p>There are two primary types of maiden races. <strong>Maiden special weight</strong> races are the higher-prestige variant, restricted to horses that have not been entered for a claiming price. These races typically attract well-bred and well-prepared horses in their early starts, and finishing well in maiden special weight company is considered a more meaningful performance than winning at lower levels. <strong>Maiden claiming races</strong> function like other claiming races in that all horses are available for purchase at the listed price, but entry is restricted to maidens.</p>
          <p>For trainers and owners, finding the right maiden race for a first-time starter involves assessing the horse&apos;s preparation, the conditions of the race, and the competitive field. A horse that breaks its maiden (wins for the first time) moves on to non-maiden conditions for its subsequent starts.</p>

          <h2 id="claiming">Claiming Races</h2>
          <p>A claiming race is one in which every horse entered is available for purchase at a published price, called the claiming price. Any licensed horseperson can file a claim for a horse before the race starts. If the race goes off and a valid claim has been filed, the claiming party takes ownership of the horse at the conclusion of the race, regardless of whether the horse wins, finishes last, or is injured during the race.</p>
          <p>The claiming price serves as a self-regulating mechanism in the racing ecosystem. If an owner enters a horse at a price below the horse&apos;s true market value, other owners will claim it. If an owner enters a horse at too high a price relative to its ability, the horse will be outclassed and will not be competitive. This creates an incentive to enter horses at a level appropriate to their current form and ability.</p>
          <p>Claiming races span an enormous range of quality levels. The claiming price reflects the approximate market value of the horses in the field; tracks with higher-quality racing programs will have higher claiming prices throughout their condition books. The claiming race structure is one of the most important features of North American racing&apos;s competitive ecosystem.</p>

          <h2 id="allowance">Allowance Races</h2>
          <p>An allowance race is a non-claiming race with conditions of eligibility based on the horse&apos;s record -- typically its earnings in a defined time period, the number of wins it has, or some combination. Allowance conditions create intermediate steps between maiden and claiming races on one end and stakes races on the other.</p>
          <p>The "allowance" in the name refers to weight allowances built into the race conditions. A horse that has earned less in a defined period, or that has fewer wins, may be assigned a lower weight to carry than a more accomplished horse in the same race. These weight adjustments are intended to level the competitive field among horses at different stages of development or different points in their seasonal form.</p>
          <p>Allowance conditions are often described by their eligibility criteria: "non-winners of a race other than maiden or claiming" (NW1X), "non-winners of two races" (NW2X), and so on. A horse working its way up through the allowance ranks is typically on a trajectory toward stakes competition if its talent warrants it.</p>

          <h2 id="stakes">Stakes Races</h2>
          <p>A stakes race is the highest level of non-claiming competition. The name derives from the historical practice in which owners nominally "staked" money against each other&apos;s horses, with the winnings going to the successful owner. In modern stakes races, the purse is contributed by the track and sponsors, with owners paying nomination and entry fees to be eligible.</p>
          <p>Stakes races are open to horses that meet the published conditions, which may include age, sex, or other eligibility criteria but are not based on earnings restrictions in the same way as allowance races. Stakes races range from local overnight stakes at smaller tracks to prestigious national and international championship events. The Kentucky Derby, the Preakness Stakes, and the Belmont Stakes are stakes races -- specifically, they are Grade I stakes (see below).</p>
          <p>A horse competing in stakes company is at or near the top of the competitive pyramid. Most horses in training will never reach stakes level, and the ability to compete successfully in stakes races defines the elite tier of the sport.</p>

          <h2 id="graded">Graded Stakes</h2>
          <p>Within the stakes category, the American Graded Stakes Committee -- an entity affiliated with The Jockey Club -- annually evaluates stakes races and assigns grades of I, II, or III based on the quality of horses that have historically competed in each race. The classification is retrospective: it reflects the caliber of horses that have previously run in the race, providing a consistent benchmark of quality across different tracks and years.</p>
          <p>A <strong>Grade I</strong> stakes is a championship-level event attracting the best horses in a given division or at a given distance. The Kentucky Derby, Belmont Stakes, Preakness Stakes, Breeders&apos; Cup Classic, and other major national races carry Grade I status. <strong>Grade II</strong> and <strong>Grade III</strong> stakes are also high-quality events but with a slightly less elite historical field. Internationally, the IFHA&apos;s Pattern Race system provides equivalent classifications, allowing cross-border comparisons of race quality.</p>
          <p>Below graded stakes, there are numerous ungraded or listed stakes races that serve as important competitive events at the regional or track level. The full graded stakes schedule is published annually by the American Graded Stakes Committee and is a standard reference for racing participants and researchers.</p>

          <h2 id="in-depth">The Race Classes in Depth</h2>
          <p>The sections above summarise the main race classes. Each class also has its own dedicated reference that goes deeper -- the mechanics, the terminology, and how horses move through the claiming, allowance, and stakes ladder. These remain strictly educational explainers of what each class means; none offers wagering guidance.</p>
          <ul className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 my-6">
            {raceTypeSpokes.map((spoke) => (
              <li key={spoke.slug}>
                <Link
                  href={`/racing/race-types/${spoke.slug}`}
                  className="block py-3 px-4 rounded-md border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
                >
                  <span className="block text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                    {spoke.kicker}
                  </span>
                  <span className="block font-display font-bold text-brand-dark text-base leading-tight mb-1">
                    {spoke.title}
                  </span>
                  <span className="block text-xs text-brand-text-mid">
                    {spoke.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 id="weight">Weight and Conditions</h2>
          <p>Weight is a fundamental variable in race conditions. The weight a horse carries -- jockey plus saddle plus lead weights if needed -- is adjusted in various ways to account for competitive differences. In allowance races, horses earn weight allowances based on their earnings or win record. In handicap races, an official assigns different weights to different horses based on an assessment of their relative ability, with better horses carrying more weight. In weight-for-age conditions, different weights are assigned based on the horse&apos;s age, reflecting the developmental advantage of older horses over younger ones at certain times of the season.</p>
          <p>Scale of weights -- the standard reference for weight-for-age assignments -- has been developed and maintained over many years by racing authorities and represents the consensus understanding of appropriate weight adjustments for horses of different ages at different distances and times of year.</p>

          <h2 id="secretary">The Racing Secretary</h2>
          <p>The racing secretary at each track is responsible for writing the condition book and designing the race program. The racing secretary&apos;s job is to create a schedule of races that will attract enough entrants to fill competitive fields while matching the available horse population at the track. This requires knowledge of the horses in the region, the time of year, the track&apos;s purse structure, and the preferences of the local horseperson community.</p>
          <p>The condition book is typically published several weeks in advance and is the primary planning document for trainers and owners deciding which races to target. Understanding the condition book -- and specifically which conditions a given horse qualifies for -- is a core competency for anyone involved in managing a racing horse.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club / American Graded Stakes Committee. Annual graded stakes designations. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). Pattern Race Classification. horseracingintfed.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
