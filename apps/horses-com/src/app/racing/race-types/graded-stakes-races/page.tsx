/**
 * Horses.com -- Graded Stakes Races
 * /racing/race-types/graded-stakes-races
 *
 * Depth spoke beneath the race-types overview hub. Explains graded stakes as a
 * STRUCTURAL category: how grading works, the Graded vs Group naming, and why a
 * Grade 1 matters to racing and breeding.
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
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Graded Stakes Races Explained -- Grade 1, 2 & 3 and the Group System',
  description:
    'How graded stakes work: the Grade 1/2/3 ranking, who assigns the grades, the Graded vs Group naming, and why a Grade 1 is the pinnacle of the sport.',
  path: '/racing/race-types/graded-stakes-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Graded Stakes Races Explained -- Grade 1, 2 & 3 and the Group System',
  description:
    'How graded stakes work: the Grade 1/2/3 ranking, who assigns the grades, the Graded vs Group naming, and why a Grade 1 is the pinnacle of the sport.',
  url: 'https://horses.com/racing/race-types/graded-stakes-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Race Types', url: 'https://horses.com/racing/race-types' },
    { name: 'Graded Stakes Races', url: 'https://horses.com/racing/race-types/graded-stakes-races' },
  ],
})

const schema = combineSchemas(articleSchema, breadcrumbSchema)

const FAQS = [
  {
    question: 'What is a graded stakes race?',
    answer:
      'A graded stakes is the elite subset of stakes races, ranked Grade 1, Grade 2, or Grade 3 by an independent committee based on the quality of horses each race attracts over time. Grade 1 is the highest. The grade is a peer-reviewed measure of a race&apos;s class, not a fixed permanent label.',
    answerText:
      'A graded stakes is the elite subset of stakes, ranked Grade 1, 2, or 3 by an independent committee on the quality of horses each race attracts. Grade 1 is highest.',
  },
  {
    question: 'What is the difference between "graded" and "group" races?',
    answer:
      'They are regional names for the same elite tier. North America uses &ldquo;Graded&rdquo; (G1&ndash;G3); Europe and much of the rest of the world use &ldquo;Group&rdquo; (G1&ndash;G3). The underlying idea &mdash; an independent committee classifying the best races by quality &mdash; is the same.',
    answerText:
      'They are regional names for the same elite tier: North America uses "Graded" (G1-G3); Europe and much of the world use "Group" (G1-G3).',
  },
  {
    question: 'Can a race lose its grade?',
    answer:
      'Yes. Grades are reviewed and can be promoted or demoted from year to year based on the strength of each race&apos;s recent fields. A race must demonstrate sustained quality to earn or keep a grade, which makes the grade a rolling, peer-reviewed assessment rather than a permanent title.',
    answerText:
      'Yes. Grades are reviewed annually and can be promoted or demoted based on the strength of each race&apos;s recent fields.',
  },
]

export default function GradedStakesRacesPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-graded-stakes"
        fallbackKey="horses-com:hero"
        eyebrow="Race Types · Top Class"
        title="Graded Stakes Races"
        subtitle="The cream of the sport, ranked Grade 1, 2, or 3 by an independent committee — where championships are decided and pedigrees are made."
        alt="A Grade 1 field racing toward the finish at a championship meeting"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Stakes Races', href: '/racing/race-types/stakes-races' },
          { title: 'Handicap Races', href: '/racing/race-types/handicap-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Graded Stakes Races',
          subtitle:
            'Graded stakes are the cream of stakes racing. An independent committee grades the most important stakes as Grade 1 (the very best), Grade 2, or Grade 3, based on the quality of the horses they attract over time. This reference explains how grading works and why a Grade 1 matters. It is educational, not a wagering guide.',
          category: 'Race Types Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Race Types', href: '/racing/race-types' },
          { name: 'Graded Stakes Races', href: '/racing/race-types/graded-stakes-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Elite Subset of Stakes', href: '#elite' },
                { label: 'How Grading Works', href: '#grading' },
                { label: 'Graded vs Group', href: '#group' },
                { label: 'Why a Grade 1 Matters', href: '#grade1' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Handicap Races', href: '/racing/race-types/handicap-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-graded-stakes"
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

          <h2 id="elite">The Elite Subset of Stakes</h2>
          <p><strong>Graded stakes</strong> are the very best <a href="/racing/race-types/stakes-races">stakes races</a> &mdash; the elite layer at the top of the entire class structure. Not every stakes race is graded: below the graded ranks sit numerous ungraded or &ldquo;listed&rdquo; stakes that are still important regional events. The graded designation marks out the small number of races that consistently attract the strongest fields in the sport.</p>
          <p>A Grade 1 win is the highest achievement in racing short of a Classic, and the grade attached to a race is one of the first things participants and the breeding industry look at. This page treats grading as a structural classification; it contains no wagering guidance.</p>

          <h2 id="grading">How Grading Works</h2>
          <p>Grades are assigned by an independent committee &mdash; in the United States, the <strong>American Graded Stakes Committee</strong>, affiliated with The Jockey Club. The committee reviews the strength of each race&apos;s recent fields and assigns a grade of <strong>I</strong> (the best), <strong>II</strong>, or <strong>III</strong> based on the quality of horses the race has actually drawn over time.</p>
          <p>Crucially, the classification is <em>retrospective and rolling</em>. A race must demonstrate sustained quality to earn a grade in the first place, and it must keep doing so to retain it. Grades can be promoted or demoted from one year to the next as fields strengthen or weaken. That makes a grade a peer-reviewed, continually re-examined measure of a race&apos;s class &mdash; not a permanent title a race keeps regardless of who shows up.</p>

          <h2 id="group">Graded vs Group: The Same Idea, Two Names</h2>
          <p>The same concept appears worldwide under a different name. In Europe and much of the rest of the racing world, the elite races are called <strong>Group</strong> races &mdash; Group 1, Group 2, and Group 3 &mdash; classified through the international <strong>Pattern</strong> system. North America calls them <strong>Graded</strong> races. The two terms describe the identical idea: an independent body ranking the best races into three tiers by demonstrated quality.</p>
          <p>This shared structure is what makes it possible to compare race quality across countries. A Group 1 in Europe and a Grade 1 in North America are understood as equivalent pinnacle-level events, which is why international form can be read on a common scale.</p>

          <h2 id="grade1">Why a Grade 1 Matters</h2>
          <p>Grade 1 races are where championships are decided and where the breeding industry looks first. For an owner, a Grade 1 is the pinnacle goal of most campaigns &mdash; the result that defines a horse&apos;s career. For the bloodstock market, the &ldquo;G1&rdquo; label is the single most valuable line on a pedigree page: a Grade 1 winner commands the very top of the stallion and broodmare market.</p>
          <p>This is the point where on-track class and long-term breeding value meet most powerfully. The bold &ldquo;black type&rdquo; earned in any stakes is amplified enormously when it carries a Grade 1, feeding directly into the <a href="/bloodstock">bloodstock world</a>. For how stakes confer black type in the first place, see the <a href="/racing/race-types/stakes-races">stakes races</a> spoke; for the whole ladder, the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club / American Graded Stakes Committee. Annual graded stakes designations. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). Pattern Race Classification. horseracingintfed.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Graded stakes reference. ntra.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a race classification as an educational,
              structural subject. It is not a wagering resource: no betting tips,
              odds commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
