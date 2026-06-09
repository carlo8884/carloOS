/**
 * Horses.com -- Racing Officials & Stewards
 * /racing/racing-roles/racing-official
 *
 * Depth spoke beneath the people-of-racing overview hub. Goes deep on ONE
 * role group: the officials who run and police a race -- stewards, starter,
 * placing judges, clerk of scales -- and how they protect the result.
 *
 * NON-WAGERING (QC §1): a people/role explainer. Inquiries and objections are
 * described as integrity processes, never as bet signals. No betting, no odds.
 *
 * Byline: Horses.com Editorial (no fabricated credentials, no AI humans).
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
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Racing Officials & Stewards -- Who Keeps a Race Fair',
  description:
    'The officials who run and police a race: stewards, the starter, placing judges, and the clerk of scales, plus how an inquiry works. A role guide, not betting.',
  path: '/racing/racing-roles/racing-official',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Racing Officials & Stewards -- Who Keeps a Race Fair',
  description:
    'The officials who run and police a race: stewards, the starter, placing judges, and the clerk of scales -- what each does and how an inquiry works.',
  url: 'https://horses.com/racing/racing-roles/racing-official',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const schema = combineSchemas(articleSchema)

const FAQS = [
  {
    question: 'What do stewards do in horse racing?',
    answer:
      'Stewards enforce the rules, review the running for interference through inquiries and objections, and can disqualify or reposition horses to ensure a fair result. They are the senior officials at a race meet.',
    answerText:
      'Stewards enforce the rules, review the running for interference through inquiries and objections, and can disqualify or reposition horses to ensure a fair result.',
  },
  {
    question: 'What is a stewards’ inquiry?',
    answer:
      'A review the stewards open when they suspect a rule breach during the race -- for example interference -- which can lead to a change in the official result. An objection is a similar review lodged by a rider rather than initiated by the stewards.',
    answerText:
      'A review the stewards open when they suspect a rule breach during the race, such as interference, which can lead to a change in the official result.',
  },
  {
    question: 'Who else officiates a race besides the stewards?',
    answer:
      'The starter is responsible for a fair start from the gate, the placing judges determine the order of finish (using the photo finish when needed), and the clerk of scales confirms riders carry the correct weight before and after the race. Together these officials keep racing fair and orderly.',
    answerText:
      'The starter ensures a fair start, the placing judges determine the order of finish, and the clerk of scales confirms correct riding weights.',
  },
]

export default function RacingOfficialRolePage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:role-official"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Roles · Integrity"
        title="Racing Officials & Stewards"
        subtitle="The licensed officials who enforce the rules, judge the running, and protect the integrity of every race -- the people the whole sport depends on."
        alt="A photo-finish camera and finish line at a racecourse"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing', category: 'Racing Roles' },
          { title: 'The Jockey', href: '/racing/racing-roles/jockey' },
          { title: 'The Trainer', href: '/racing/racing-roles/trainer' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Racing Officials & Stewards',
          subtitle:
            'A race is overseen by a team of officials. Stewards enforce the rules and can adjust the result through an inquiry or objection; around them work the starter, the placing judges, the clerk of scales, and others who keep racing fair and orderly. This reference explains who does what and how the integrity of a result is protected. It is an educational role guide, not a wagering guide.',
          category: 'Racing Roles Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Racing Roles', href: '/racing/racing-roles' },
          { name: 'Racing Official', href: '/racing/racing-roles/racing-official' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Stewards', href: '#stewards' },
                { label: 'The Other Officials', href: '#others' },
                { label: 'Why It Matters', href: '#why' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Roles In Depth"
              links={[
                { label: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing' },
                { label: 'The Jockey', href: '/racing/racing-roles/jockey' },
                { label: 'The Trainer', href: '/racing/racing-roles/trainer' },
                { label: 'The Owner', href: '/racing/racing-roles/owner' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-roles-official"
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

          <p>A race is overseen by a team of officials. Stewards are the senior officials who enforce the rules of racing, review the running for interference or infractions, and can adjust the result through an inquiry or objection. Around them work the starter, the placing judges, the clerk of scales, and others who keep racing fair and orderly. Together they uphold the integrity that the whole sport -- and its breeding economy -- depends on.</p>

          <h2 id="stewards">The Stewards</h2>
          <p>The stewards monitor each race and may hold an &ldquo;inquiry&rdquo; if they see a possible rule breach, or hear an &ldquo;objection&rdquo; lodged by a rider; they can disqualify or reposition horses for interference. Their authority over the result is what gives the rules teeth: a horse that wins on the track can still be placed behind a rival if the stewards judge that interference cost that rival a fair run.</p>
          <p>These inquiries and objections are integrity processes, described here as the mechanism that protects a fair result -- not as betting signals. The stewards&apos; job is to apply the rules consistently so that every participant competes on the same terms.</p>

          <h2 id="others">The Other Officials</h2>
          <p>The <strong>starter</strong> is responsible for a fair start from the gate, ensuring every horse breaks on even terms. The <strong>placing judges</strong> determine the order of finish, using the photo finish when the margin is too close to call by eye. The <strong>clerk of scales</strong> confirms riders carry the correct weight before and after the race -- weighing out and weighing in -- so that the assigned weights are genuinely carried. Each of these roles is licensed and overseen by the racing commission.</p>

          <h2 id="why">Why It Matters</h2>
          <p>The officials are the reason a result can be trusted. Owners, trainers, breeders, and the public all rely on the assurance that a race was run and judged fairly, and that assurance is what underpins the value of a horse&apos;s record. Without credible officiating, the entire structure of the sport -- from raceday results to the breeding value that flows from them -- would lose its footing.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Association of Racing Commissioners International (ARCI). Model rules on stewards and officials. arci.com.</li>
            <li>The Jockey Club. Rules of racing and integrity standards. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains racing&apos;s officiating roles as an
              educational subject -- who runs and polices a race and how the
              result is protected. Inquiries and objections are described as
              integrity processes, not as betting signals. No wagering tips, odds
              commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
