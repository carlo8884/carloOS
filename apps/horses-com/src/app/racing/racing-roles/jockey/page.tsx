/**
 * Horses.com -- The Jockey
 * /racing/racing-roles/jockey
 *
 * Depth spoke beneath the people-of-racing overview hub. Goes deep on ONE
 * role: the licensed rider. What a jockey actually does in a race, the
 * demands of the job, and the pay model -- kept general.
 *
 * NON-WAGERING (QC §1): a people/role explainer. Pace and tactics are
 * described as the rider's craft, never as a bet signal. No betting on
 * jockeys, no odds, no handicapping.
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
  title: 'The Jockey -- What a Racehorse Rider Actually Does',
  description:
    'What a jockey really does: managing pace, position, and ground in a race, the demands of the job, and how riders are paid. A role guide, not a betting guide.',
  path: '/racing/racing-roles/jockey',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Jockey -- What a Racehorse Rider Actually Does',
  description:
    'What a jockey really does: managing pace, position, and ground in a race, the physical demands of the job, and how riders are paid.',
  url: 'https://horses.com/racing/racing-roles/jockey',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does a jockey do besides ride in races?',
    answer:
      'Jockeys ride morning workouts, school young horses, and build a feel for their mounts. In a race they then manage pace, position, ground-saving, and the timing of the final run -- decisions made in seconds that often decide close finishes between evenly matched horses.',
    answerText:
      'Jockeys ride morning workouts and school young horses, then in races manage pace, position, ground-saving, and the timing of the final run.',
  },
  {
    question: 'How are jockeys paid?',
    answer:
      'Typically a set riding fee per mount plus a percentage of the purse when the horse finishes in the money. Most jockeys are self-employed and ride for many different stables, competing on different horses race to race.',
    answerText:
      'Usually a set riding fee per mount plus a percentage of the purse when the horse finishes in the money. Most jockeys are self-employed.',
  },
  {
    question: 'Why are jockeys so light?',
    answer:
      'Each horse is assigned a weight to carry, and the jockey plus equipment must make that figure, so riders maintain very low riding weights through rigorous discipline. The role also carries real physical risk, which is why fitness and weight management are central to the job.',
    answerText:
      'Each horse is assigned a weight to carry, so riders maintain very low riding weights through rigorous discipline; the role also carries real physical risk.',
  },
]

export default function JockeyRolePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:role-jockey"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Roles · In the Saddle"
        title="The Jockey"
        subtitle="More than a passenger: a finely conditioned athlete and split-second tactician, judging pace and timing a run at 35+ mph in a tight pack."
        alt="A jockey riding a Thoroughbred at speed during a race"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing', category: 'Racing Roles' },
          { title: 'The Trainer', href: '/racing/racing-roles/trainer' },
          { title: 'The Owner', href: '/racing/racing-roles/owner' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'The Jockey',
          subtitle:
            'The jockey is the licensed professional who rides the horse in a race. Far more than a passenger, a top jockey is a finely conditioned athlete and a split-second tactician. This reference explains what the role really involves, the demands it carries, and how riders are paid. It is an educational role guide, not a wagering guide.',
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
          { name: 'The Jockey', href: '/racing/racing-roles/jockey' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What a Jockey Does', href: '#does' },
                { label: 'The Demands of the Job', href: '#demands' },
                { label: 'How Jockeys Are Paid', href: '#pay' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Roles In Depth"
              links={[
                { label: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing' },
                { label: 'The Trainer', href: '/racing/racing-roles/trainer' },
                { label: 'The Owner', href: '/racing/racing-roles/owner' },
                { label: 'Racing Officials & Stewards', href: '/racing/racing-roles/racing-official' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-roles-jockey"
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

          <p>The jockey is the licensed professional who rides the horse in a race. Far more than a passenger, a top jockey is a finely conditioned athlete and a split-second tactician, judging pace, saving ground, and timing a run -- often at 35+ mph in a tight pack. The partnership between horse and rider is one of the sport&apos;s defining elements, and on the closest of finishes it is frequently the rider&apos;s judgment that separates the winner from the rest.</p>

          <h2 id="does">What a Jockey Actually Does</h2>
          <p>During a race the jockey manages the horse&apos;s energy: settling it early, finding a good position and a clear path, conserving ground on the rails or angling out for a run, and timing the final effort so the horse peaks at the wire. These decisions, made in seconds, frequently decide close races between evenly matched horses. A rider who commits too early can empty the tank before the line; one who waits too long can run out of racetrack.</p>
          <p>Jockeys also ride in morning workouts and school young horses, building the feel and trust that pays off on race day. Much of a rider&apos;s craft is invisible from the grandstand -- the quiet work of getting a green horse to relax, or of learning exactly how a particular animal likes to be ridden -- but it is the foundation on which raceday performance is built. The pace and tactical judgment described here are the rider&apos;s craft, not a betting signal.</p>

          <h2 id="demands">The Demands of the Job</h2>
          <p>Jockeys maintain very low riding weights through rigorous discipline, because each horse is assigned a weight to carry and the rider plus equipment must make that figure. Sustaining that level of fitness and weight management over a long season is one of the defining demands of the profession.</p>
          <p>The role also carries real physical risk: racing at speed in close company leaves little margin for error, and riders accept that risk as part of the job. It is among the most physically demanding athletic professions, requiring strength, balance, and nerve as well as the low body weight the role imposes.</p>

          <h2 id="pay">How Jockeys Are Paid</h2>
          <p>Jockeys are typically self-employed, earning a riding fee plus a percentage of purse money when their mounts finish in the money, and they compete on different horses race to race. Because earnings depend on finishing well across many mounts, a rider&apos;s living is tied to building relationships with the trainers who book them and to riding consistently across a full card. Most riders work through an agent who arranges their mounts. Specific earnings vary widely by circuit, by the quality of horses a rider partners, and by how many races they ride.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Licensing and registration of racing participants. jockeyclub.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on jockey licensing and weights. arci.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a racing role as an educational subject --
              what a jockey does, the demands of the job, and how riders are
              paid. Pace and tactics are described as the rider&apos;s craft, not
              as betting signals. No wagering tips, odds commentary, or
              handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
