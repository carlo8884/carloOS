/**
 * Horses.com -- The Trainer
 * /racing/racing-roles/trainer
 *
 * Depth spoke beneath the people-of-racing overview hub. Goes deep on ONE
 * role: the licensed trainer. Responsibilities, how a stable operates, and
 * the pay model -- kept general.
 *
 * NON-WAGERING (QC §1): a people/role explainer. Strike-rate is described as
 * a public measure of a trainer's success, never as a bet signal. No betting
 * on trainers, no odds, no handicapping.
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
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Trainer -- The Head Coach of the Racing Stable',
  description:
    'What a racehorse trainer does: conditioning, planning campaigns, placing horses in races, booking jockeys, and how trainers are paid. A role guide, not betting.',
  path: '/racing/racing-roles/trainer',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Trainer -- The Head Coach of the Racing Stable',
  description:
    'What a racehorse trainer does: conditioning, planning a campaign, placing horses in the right races, booking jockeys, and running the stable team.',
  url: 'https://horses.com/racing/racing-roles/trainer',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does a horse trainer do?',
    answer:
      'A trainer conditions the horse, manages its health and feeding in partnership with vets and farriers, decides which races to enter, engages jockeys, and runs the stable team. The trainer is effectively the head coach and operations manager of the stable.',
    answerText:
      'A trainer conditions the horse, manages its health and feeding with vets and farriers, decides which races to enter, engages jockeys, and runs the stable team.',
  },
  {
    question: 'How are trainers paid?',
    answer:
      'Usually a daily training fee per horse charged to the owner, plus a percentage of any purse money the horse earns. They answer to owners on one side and to racing officials and integrity rules on the other.',
    answerText:
      'Usually a daily training fee per horse charged to the owner, plus a percentage of any purse money the horse earns.',
  },
  {
    question: 'What does it mean to "place" a horse well?',
    answer:
      'Placing a horse means finding the right race for its current ability and condition -- the right distance, class, and timing -- so it has a fair chance to be competitive. It is a core skill that separates leading trainers from the rest, and it is purely a matter of matching horse to race, not a betting judgment.',
    answerText:
      'Placing a horse means finding the right race for its current ability and condition. It is a core skill, and a matter of matching horse to race, not a betting judgment.',
  },
]

export default function TrainerRolePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:role-trainer"
        fallbackKey="horses-com:racing"
        eyebrow="Racing Roles · The Stable"
        title="The Trainer"
        subtitle="The head coach and operations manager of the stable: conditioning each horse, planning its campaign, and answering to owners on one side and the rules on the other."
        alt="A trainer overseeing a Thoroughbred at the stable on a morning at the track"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing', category: 'Racing Roles' },
          { title: 'The Jockey', href: '/racing/racing-roles/jockey' },
          { title: 'The Owner', href: '/racing/racing-roles/owner' },
          { title: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
        ]}
        hero={{
          title: 'The Trainer',
          subtitle:
            'The trainer is responsible for preparing a horse to race -- designing its conditioning, managing its health, choosing which races to enter, and engaging jockeys. The trainer is effectively the head coach and operations manager of the stable. This reference explains the role, how a stable operates, and how trainers are paid. It is an educational role guide, not a wagering guide.',
          category: 'Racing Roles Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'People', href: '/racing/the-people-of-racing' },
          { name: 'The Trainer', href: '/racing/racing-roles/trainer' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Trainer’s Responsibilities', href: '#responsibilities' },
                { label: 'How Trainers Operate', href: '#operate' },
                { label: 'How Trainers Are Paid', href: '#pay' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Roles In Depth"
              links={[
                { label: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing' },
                { label: 'The Jockey', href: '/racing/racing-roles/jockey' },
                { label: 'The Owner', href: '/racing/racing-roles/owner' },
                { label: 'Racing Officials & Stewards', href: '/racing/racing-roles/racing-official' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-roles-trainer"
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

          <p>The trainer is responsible for preparing a horse to race: designing its conditioning, managing its health and feeding in partnership with vets and farriers, choosing which races to enter, and engaging jockeys. The trainer is effectively the head coach and operations manager of the stable, the person whose judgment shapes a horse&apos;s entire racing career. The mechanics of how a horse is brought to fitness are covered in the <a href="/racing/racehorse-training-and-conditioning">training and conditioning reference</a>.</p>

          <h2 id="responsibilities">The Trainer&apos;s Responsibilities</h2>
          <p>A trainer plans each horse&apos;s campaign -- what distance and class suit it, when it is fit to run, and which race gives it the best chance. Day to day, they oversee a team (assistant trainers, grooms, exercise riders), monitor each horse&apos;s soundness and wellbeing, and coordinate the vet and farrier work that keeps a string healthy. Much of the job is reading the individual horse: noticing the subtle signs that an animal is thriving, or that it needs more time.</p>
          <p>Placing horses well -- finding the right race for each animal&apos;s ability and condition -- is a core skill that separates leading trainers from the rest. It is purely a matter of matching horse to race; nothing here is wagering guidance, and a trainer&apos;s placement decisions are about competitiveness, not bet signals.</p>

          <h2 id="operate">How Trainers Operate</h2>
          <p>Trainers are licensed and answer to owners on one side and to racing officials and integrity rules on the other. Their stable&apos;s strike-rate -- the share of starters that win or place -- is a public measure of their success, and it is reported simply as a record of results, not as a tip. A trainer builds a reputation over years through the consistency of the horses they turn out and the care with which they manage a string.</p>

          <h2 id="pay">How Trainers Are Paid</h2>
          <p>Trainers usually charge owners a daily training fee per horse, plus a percentage of purses earned. Because the day-rate covers the real costs of keeping a horse in training -- staff, feed, facilities -- and the purse percentage rewards results, a trainer&apos;s livelihood depends on both keeping the stable full and winning races with the horses in it. Specific fee levels vary widely by region, by the scale of the operation, and by the quality of horses in the yard.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Licensing and registration of racing participants. jockeyclub.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on trainer licensing. arci.com.</li>
            <li>American Association of Equine Practitioners (AAEP). Equine welfare and veterinary guidance. aaep.org.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a racing role as an educational subject --
              what a trainer does, how a stable operates, and how trainers are
              paid. Strike-rate and placement are described as measures of a
              trainer&apos;s craft, not as betting signals. No wagering tips, odds
              commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
