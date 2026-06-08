/**
 * Horses.com -- Stakes Races
 * /racing/race-types/stakes-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the stakes class as
 * a STRUCTURAL category: where the "stakes" name comes from, the fee structure,
 * and how "black type" links racing success to breeding value.
 *
 * NON-WAGERING (QC §1): structural explanation only. No betting, odds, or
 * handicapping. Byline "Horses.com Editorial".
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
  title: 'Stakes Races Explained -- The Top Class and the Power of Black Type',
  description:
    'What a stakes race is, why it is named for the entry fees owners "stake," and how "black type" turns stakes success into lasting breeding value.',
  path: '/racing/race-types/stakes-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Stakes Races Explained -- The Top Class and the Power of Black Type',
  description:
    'What a stakes race is, why it is named for the entry fees owners "stake," and how "black type" turns stakes success into lasting breeding value.',
  url: 'https://horses.com/racing/race-types/stakes-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is a stakes race?',
    answer:
      'A stakes race is the highest class of race, with the largest purses. It is named for the entry fees &mdash; the &ldquo;stakes&rdquo; &mdash; that owners pay to nominate, enter, and start a horse, which are typically added to the prize money. Stakes wins confer valuable &ldquo;black type.&rdquo;',
    answerText:
      'A stakes race is the highest class of race, named for the entry fees ("stakes") owners pay, which are typically added to the prize money.',
  },
  {
    question: 'Why are stakes races important for breeding?',
    answer:
      'Stakes races confer &ldquo;black type&rdquo; &mdash; the bold print in sales catalogues marking a horse, and its relatives, as a stakes winner or placegetter. Black type significantly increases a horse&apos;s value as a breeding prospect, so stakes performance echoes far beyond the racetrack into the bloodstock market.',
    answerText:
      'Stakes wins confer "black type," the bold catalogue print that significantly raises a horse&apos;s value as a breeding prospect.',
  },
  {
    question: 'Are all stakes races fee-based?',
    answer:
      'Most are, but not all. The classic stakes structure is built on nomination, entry, and starting fees that owners stake. Some prestigious races are &ldquo;invitational,&rdquo; waiving fees for invited horses. Either way, the defining feature of the class is its position at the top of the competitive pyramid.',
    answerText:
      'Most stakes are fee-based, but some prestigious races are "invitational" and waive fees for invited horses.',
  },
]

export default function StakesRacesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-stakes"
        fallbackKey="horses-com:racing"
        eyebrow="Race Types · Top Class"
        title="Stakes Races"
        subtitle="The top of the sport: the biggest purses, the races that make champions, and the bold catalogue print that turns a win into lasting breeding value."
        alt="Thoroughbreds contesting a major stakes race"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Graded Stakes Races', href: '/racing/race-types/graded-stakes-races' },
          { title: 'Allowance Races', href: '/racing/race-types/allowance-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Stakes Races',
          subtitle:
            'Stakes races are the highest class of racing and carry the largest purses. The name comes from the entry fees ("stakes") that owners pay, which are typically added to the prize fund. This reference explains the class and the "black type" it confers. It is educational, not a wagering guide.',
          category: 'Race Types Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Race Types', href: '/racing/understanding-race-types-and-classes' },
          { name: 'Stakes Races', href: '/racing/race-types/stakes-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Top of the Sport', href: '#top' },
                { label: 'Why They\'re Called "Stakes"', href: '#name' },
                { label: 'Black Type & Breeding Value', href: '#blacktype' },
                { label: 'From Local Stakes to Championships', href: '#range' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Graded Stakes Races', href: '/racing/race-types/graded-stakes-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Handicap Races', href: '/racing/race-types/handicap-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-stakes"
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

          <h2 id="top">The Top of the Sport</h2>
          <p><strong>Stakes races</strong> are the highest class of non-claiming competition and carry the sport&apos;s largest purses. They sit above <a href="/racing/race-types/allowance-races">allowance races</a> at the very top of the competitive pyramid. These are the races that make champions and define a season; the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes are all stakes races &mdash; specifically <a href="/racing/race-types/graded-stakes-races">graded stakes</a>, the elite subset covered separately.</p>
          <p>Most horses in training will never reach stakes level. The ability to compete successfully in stakes company is precisely what marks out the elite tier of the sport. This page treats the class as a structural category; it contains no wagering guidance.</p>

          <h2 id="name">Why They&apos;re Called &ldquo;Stakes&rdquo;</h2>
          <p>The name is a relic of the sport&apos;s origins. Historically, owners would nominally <strong>&ldquo;stake&rdquo; money</strong> against one another&apos;s horses, with the pooled stakes going to the winning owner. The modern echo of that practice is the fee structure: owners pay to <strong>nominate</strong> a horse early, then pay again to <strong>enter</strong> and to <strong>start</strong>, and those fees are typically added to the purse on top of any track or sponsor contribution.</p>
          <p>That is why the biggest stakes can carry multi-million-dollar purses: the participants themselves are putting money into the pot. Some prestigious races invert the model and run as <strong>invitationals</strong>, waiving fees for invited horses, but the classic, defining stakes structure is fee-based. The owners genuinely have a stake in the prize they are chasing.</p>

          <h2 id="blacktype">Black Type and Breeding Value</h2>
          <p>What makes stakes races matter beyond the day itself is <strong>black type</strong>. In sales catalogues, the achievements of stakes winners and placegetters &mdash; and of their relatives &mdash; are printed in <strong>bold</strong>, the &ldquo;black type&rdquo; that instantly signals quality on a pedigree page. A single stakes placing in a family can be the line a buyer&apos;s eye lands on first.</p>
          <p>Because black type dramatically raises a horse&apos;s value as a breeding prospect, stakes performance reverberates far past the racetrack and into the <a href="/bloodstock">bloodstock market</a>. A stakes win is not just prize money and prestige; it is a permanent upgrade to how the horse, its siblings, and its descendants will be valued at auction for years to come. This is the mechanism by which on-track class becomes lasting commercial value.</p>

          <h2 id="range">From Local Stakes to Championships</h2>
          <p>The stakes category is broad. At one end sit modest <strong>overnight stakes</strong> at smaller tracks &mdash; still the top of their local program, but regional in stature. At the other end are the prestigious national and international championship events that draw the best horses in a division. Eligibility for a stakes race may include conditions on age, sex, or distance, but &mdash; unlike allowance races &mdash; it is not based on earnings restrictions in the same way.</p>
          <p>Within this category, the very best races are formally ranked as graded stakes, which is where the championship-level events live. For that ranking system, see the <a href="/racing/race-types/graded-stakes-races">graded stakes</a> spoke, and for the whole class ladder in summary, the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Stakes nominations and conditions. jockeyclub.com.</li>
            <li>The Jockey Club / American Graded Stakes Committee. Stakes and black type. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). Black type and the Pattern. horseracingintfed.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a race class as an educational, structural
              subject. It is not a wagering resource: no betting tips, odds
              commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
