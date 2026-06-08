/**
 * Horses.com -- Allowance Races
 * /racing/race-types/allowance-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the allowance class
 * as a STRUCTURAL category: where the "allowance" name comes from, how the
 * conditions ladder works, and where allowance races sit in a horse's career.
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
  title: 'Allowance Races Explained -- The Step Between Maiden and Stakes',
  description:
    'What an allowance race is, where the "allowance" name comes from, and how the conditions ladder works as the proving ground between maiden and stakes.',
  path: '/racing/race-types/allowance-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Allowance Races Explained -- The Step Between Maiden and Stakes',
  description:
    'What an allowance race is, where the "allowance" name comes from, and how the conditions ladder works as the proving ground between maiden and stakes.',
  url: 'https://horses.com/racing/race-types/allowance-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is an allowance race?',
    answer:
      'An allowance race is a mid-tier, non-claiming race where horses are not for sale and carry weights adjusted by &ldquo;allowances&rdquo; tied to their past accomplishments. It sits a step above claiming races and a step below stakes, serving as the proving ground for developing horses.',
    answerText:
      'An allowance race is a mid-tier, non-claiming race where weights are adjusted by allowances tied to past accomplishments. It sits between claiming and stakes.',
  },
  {
    question: 'Why is it called an "allowance"?',
    answer:
      'Because the conditions allow weight reductions to horses that lack certain achievements &mdash; for example, &ldquo;non-winners of two races other than maiden or claiming.&rdquo; A horse that has not met the stated condition is allowed to carry less weight, levelling the field between more and less accomplished runners.',
    answerText:
      'The conditions allow weight reductions to horses that lack certain achievements, levelling the field between more and less accomplished runners.',
  },
  {
    question: 'Where do allowance races fit in a horse\'s career?',
    answer:
      'The typical path runs maiden win &rarr; allowance company &rarr; stakes. Each allowance win removes an eligibility condition, so a horse climbing the allowance ranks is showing it is on an upward curve. Many graded-stakes horses spent a season working through the allowance conditions first.',
    answerText:
      'The typical path is maiden win to allowance company to stakes. Climbing the allowance ranks shows a horse is on an upward curve toward stakes.',
  },
]

export default function AllowanceRacesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-allowance"
        fallbackKey="horses-com:racing"
        eyebrow="Race Types · Mid Class"
        title="Allowance Races"
        subtitle="The proving ground above claiming and below stakes, where a horse that has broken its maiden climbs a ladder of conditions toward the top of the sport."
        alt="Thoroughbreds racing at a mid-level meeting"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Claiming Races', href: '/racing/race-types/claiming-races' },
          { title: 'Stakes Races', href: '/racing/race-types/stakes-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Allowance Races',
          subtitle:
            'An allowance race sits above claiming races in class but below stakes. Horses are not for sale, and the race’s conditions grant weight allowances based on what a horse has -- or has not -- achieved. This reference explains the class and the conditions ladder. It is educational, not a wagering guide.',
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
          { name: 'Allowance Races', href: '/racing/race-types/allowance-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What an Allowance Race Is', href: '#what' },
                { label: 'How the Allowances Work', href: '#allowances' },
                { label: 'The Conditions Ladder', href: '#ladder' },
                { label: 'Where It Sits in a Career', href: '#career' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Claiming Races', href: '/racing/race-types/claiming-races' },
                { label: 'Optional Claiming Races', href: '/racing/race-types/optional-claiming-races' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-allowance"
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

          <h2 id="what">What an Allowance Race Is</h2>
          <p>An <strong>allowance race</strong> occupies the middle of the class structure: it sits clearly above <a href="/racing/race-types/claiming-races">claiming races</a> and clearly below <a href="/racing/race-types/stakes-races">stakes</a>. Two things define it. First, the horses are <strong>not for sale</strong> &mdash; there is no claiming price, so no runner can be bought out of the race. Second, the weights each horse carries are adjusted by <strong>allowances</strong> written into the race&apos;s conditions.</p>
          <p>That combination makes the allowance race the natural home for a horse that has shown ability without yet being good enough for open stakes. It is the level where a young horse&apos;s reputation is built or quietly reassessed. This page treats it as a structural category; it contains no wagering guidance.</p>

          <h2 id="allowances">How the &ldquo;Allowances&rdquo; Work</h2>
          <p>The name comes directly from the mechanism. The race&apos;s conditions specify weight <strong>reductions</strong> &mdash; allowances &mdash; for horses that lack certain accomplishments. A typical condition might read &ldquo;non-winners of two races other than maiden or claiming.&rdquo; A horse that has not met that bar is <em>allowed</em> to carry less weight than a more accomplished rival in the same race.</p>
          <p>The purpose is to level the field. By giving the less-proven horse a weight break, the conditions narrow the gap between a lightly raced improver and a more established runner, so the race remains genuinely competitive. The weight a horse carries here is set by these rule-based allowances, not by an official&apos;s individual rating of the horse &mdash; which is the key difference between an allowance race and a <a href="/racing/race-types/handicap-races">handicap</a>.</p>

          <h2 id="ladder">The Conditions Ladder</h2>
          <p>Allowance races are usually described by their eligibility conditions, written in a shorthand: &ldquo;non-winners of a race other than maiden or claiming&rdquo; (often abbreviated NW1X), &ldquo;non-winners of two such races&rdquo; (NW2X), and so on up the ladder. Each time a horse wins, it satisfies one of these conditions and must step up to the next, facing tougher company.</p>
          <p>This creates a natural progression. A horse climbing from NW1X to NW2X and beyond is, by definition, winning at each level and being asked harder questions each time. Some tracks also card <strong>allowance optional claiming</strong> races &mdash; a hybrid that lets some runners enter under allowance conditions while others may also be claimed &mdash; which gives racing secretaries the flexibility to fill a field; that format is covered in the <a href="/racing/race-types/optional-claiming-races">optional claiming</a> spoke.</p>

          <h2 id="career">Where It Sits in a Career</h2>
          <p>For a developing horse, the textbook trajectory runs <strong>maiden win &rarr; allowance company &rarr; stakes</strong>. Breaking the maiden gets a horse out of the entry-level ranks; working successfully through the allowance conditions is the evidence that it belongs higher still. A horse that keeps climbing the allowance ladder is on an unmistakable upward curve.</p>
          <p>Many of the horses that go on to win <a href="/racing/race-types/graded-stakes-races">graded stakes</a> spent a season grinding through allowance conditions first. The allowance ranks are where the sport sorts the genuinely good horses from the merely useful ones, before the very best graduate to stakes company. For the whole ladder in summary, see the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Conditions of racing and allowance conditions. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on race conditions. arci.com.</li>
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
