/**
 * Horses.com -- Maiden Races
 * /racing/race-types/maiden-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the maiden class
 * as a STRUCTURAL category: what "maiden" means, the special-weight vs claiming
 * split, and why maidens are watched for emerging talent.
 *
 * NON-WAGERING (QC §1): structural explanation only. No betting, odds,
 * handicapping-to-bet, or wagering angles. Byline "Horses.com Editorial".
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
  title: 'Maiden Races Explained -- The Starting Point of a Racing Career',
  description:
    'What a maiden race is, the difference between maiden special weight and maiden claiming, and why maidens are the most-watched proving ground for new talent.',
  path: '/racing/race-types/maiden-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Maiden Races Explained -- The Starting Point of a Racing Career',
  description:
    'What a maiden race is, the difference between maiden special weight and maiden claiming, and why maidens are the most-watched proving ground for new talent.',
  url: 'https://horses.com/racing/race-types/maiden-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is a maiden race in horse racing?',
    answer:
      'A maiden race is open only to horses that have never won a race. The word &ldquo;maiden&rdquo; describes the horse&apos;s win record, not its age, sex, or breeding. A horse stays a maiden until its first career win, an achievement called &ldquo;breaking its maiden,&rdquo; after which it is no longer eligible for maiden conditions.',
    answerText:
      'A maiden race is open only to horses that have never won. A horse stays a maiden until its first win, called "breaking its maiden."',
  },
  {
    question: 'What is the difference between maiden special weight and maiden claiming?',
    answer:
      'Maiden special weight is the higher-quality version: horses are not for sale and carry weights set by the race conditions, so connections run their better prospects here. Maiden claiming is for maidens that can be purchased out of the race, which generally signals lower expectations or an attempt to place the horse where it can win.',
    answerText:
      'Maiden special weight is the higher-quality, not-for-sale version; maiden claiming is for maidens that can be bought out of the race, generally indicating lower expectations.',
  },
  {
    question: 'Why are maiden races watched so closely?',
    answer:
      'Because every runner is unproven, maiden fields mix first-time starters, late developers, and horses stepping up in distance. A strong maiden win is the first real evidence of a young horse&apos;s ability, so breeders, owners, and fans follow top maidens as an early line on the next season&apos;s stars.',
    answerText:
      'Maiden fields are full of unproven horses, so a strong maiden win is the first real evidence of ability and an early line on emerging talent.',
  },
]

export default function MaidenRacesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-maiden"
        fallbackKey="horses-com:racing"
        eyebrow="Race Types · Entry Level"
        title="Maiden Races"
        subtitle="Where almost every racing career begins: races for horses that have never won, and the first place future stars show their hand."
        alt="Young Thoroughbreds breaking from the starting gate"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Claiming Races', href: '/racing/race-types/claiming-races' },
          { title: 'Allowance Races', href: '/racing/race-types/allowance-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Maiden Races',
          subtitle:
            'A maiden race is for horses that have not yet won. The word "maiden" refers to the horse, not the race -- a horse stays a maiden until it "breaks its maiden" with a first career win. This reference explains the class and its two main forms. It is educational, not a handicapping or wagering guide.',
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
          { name: 'Maiden Races', href: '/racing/race-types/maiden-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What "Maiden" Means', href: '#meaning' },
                { label: 'Special Weight vs Claiming', href: '#types' },
                { label: 'Reading a Horse\'s Trajectory', href: '#trajectory' },
                { label: 'Why Maidens Are Watched', href: '#watched' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Claiming Races', href: '/racing/race-types/claiming-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-maiden"
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

          <h2 id="meaning">What &ldquo;Maiden&rdquo; Actually Means</h2>
          <p>In racing, a <strong>maiden</strong> is simply a horse that has never won a race. The label is about win record and nothing else: it has no connection to a horse&apos;s age, sex, or breeding. A beautifully bred, expensively purchased colt and a modest gelding are both &ldquo;maidens&rdquo; until the day each first crosses the line in front. That first win is called <strong>breaking your maiden</strong>, and from that moment the horse can no longer be entered under maiden conditions.</p>
          <p>Because every racing career starts at zero wins, the maiden ranks are the universal entry point to the sport. Almost every champion you can name once stood in a maiden field, unproven and untested. The class exists to give those unproven horses a level place to start &mdash; a race in which they are not immediately thrown in against established winners.</p>
          <p>This page treats maiden races as a structural category within the sport. It does not provide wagering guidance, picks, or predictions of any kind.</p>

          <h2 id="types">Maiden Special Weight vs Maiden Claiming</h2>
          <p>In US racing, maidens divide into two main kinds, and the difference says a lot about how a horse&apos;s connections rate it.</p>
          <p>A <strong>maiden special weight</strong> is the higher-quality version. Horses are not for sale, and they carry weights set purely by the race conditions. Trainers run their genuine prospects here, so these races tend to fill with well-bred, well-prepared horses in their early starts. Performing well in maiden special weight company is considered a far more meaningful result than winning at a lower level, because of the quality of horse a maiden gets measured against.</p>
          <p>A <strong>maiden claiming</strong> race works like any other claiming race &mdash; every runner can be purchased out of the race at the listed price &mdash; but entry is restricted to maidens. Dropping a maiden into a claiming race generally signals that connections have a question mark over the horse&apos;s ability or soundness, or simply want to place it somewhere it has a realistic chance to finally win. The presence of a claiming price reshapes the field: it is a lower, more attainable rung of the maiden ladder.</p>

          <h2 id="trajectory">Reading a Horse&apos;s Trajectory</h2>
          <p>Which kind of maiden a horse debuts in is one of the clearest early tells about how its connections see it. A well-bred horse making its first start in a maiden special weight is being given every chance; one dropped early into a maiden claiming often carries an unspoken doubt about its talent or physical soundness. Neither is a verdict &mdash; horses surprise their connections constantly &mdash; but the placement is a window into expectation.</p>
          <p>Once a horse breaks its maiden, the maiden category closes behind it for good. Its next starts move into non-maiden conditions &mdash; allowance races for a promising sort, or claiming races for one with a more modest outlook. In this way the maiden ranks act as a sorting gate at the very bottom of the <a href="/racing/understanding-race-types-and-classes">class structure</a>, separating horses that can win from those still searching for that first success.</p>

          <h2 id="watched">Why Maidens Are Watched So Closely</h2>
          <p>Maiden races carry a particular fascination precisely because the field is full of unknowns. With no prior winners in the race, every runner is a question: a first-time starter, a horse stretching out to a new distance, a late developer finally putting it together. There is no established form to lean on, only potential.</p>
          <p>For breeders, owners, and fans, a strong maiden win is the first hard evidence that a young horse has genuine ability. The form of a top maiden &mdash; especially a fast, visually impressive maiden special weight &mdash; can read like an early roll-call of the coming season&apos;s stars, which is why connections and observers across the sport pay such close attention to how the best newcomers fare.</p>
          <p>From here, horses that break their maiden in good style often graduate to <a href="/racing/race-types/allowance-races">allowance company</a>, while the wider everyday population fills the sport&apos;s <a href="/racing/race-types/claiming-races">claiming races</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Conditions of racing and the maiden classification. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International racing terminology. horseracingintfed.com.</li>
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
