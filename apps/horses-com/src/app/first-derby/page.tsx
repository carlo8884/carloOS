/**
 * Horses.com -- Your First Day at the Races (Derby Spectator Guide)
 * /first-derby
 *
 * The casual->committed beginner on-ramp: a friendly, no-jargon guide to
 * ENJOYING the biggest day in racing as a spectator -- what you're watching,
 * the traditions, how a race day unfolds, and how to follow a horse through a
 * race. Built as the casual-interest -> racing-vertical funnel.
 *
 * NON-WAGERING (CRITICAL): this page is a spectator/experience on-ramp, NOT a
 * wagering guide. It does NOT teach betting, odds, handicapping, or how to bet.
 * A non-wagering disclaimer mirrors the bloodstock cluster pattern.
 *
 * Trust posture (QC §1): byline "Horses.com Editorial" only; no fabricated
 * credentials; no AI-generated humans; figures kept general/sourced. Factual,
 * nominative reference to a public event -- no protected marks, no implied
 * official affiliation.
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
  title: "Your First Day at the Races: A Beginner's Derby Spectator Guide",
  description:
    'A friendly, no-jargon spectator guide to enjoying the biggest day in racing: what you are watching, the traditions, and how the day unfolds. Not a betting guide',
  path: '/first-derby',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Your First Day at the Races: A Beginner's Derby Spectator Guide",
  description:
    'A friendly, no-jargon guide to enjoying the biggest day in horse racing as a spectator: what you are watching, the traditions, how a race day unfolds, and how to get into the sport.',
  url: 'https://horses.com/first-derby',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Do I need to know anything about horse racing to enjoy a big race day?',
    answer:
      'Not at all. Most of the day is atmosphere and tradition you can enjoy with zero prior knowledge. Pick a horse whose name or story you like, watch the parade to the post, and follow the silks around the track. The feature race itself lasts only about two minutes &mdash; the build-up, the fashion, and the undercard races fill the afternoon.',
    answerText:
      'No. Most of the day is atmosphere and tradition you can enjoy with no prior knowledge. Pick a horse you like, watch the parade, and follow it around the track. The feature race lasts about two minutes.',
  },
  {
    question: 'What actually happens at a marquee race day like the Derby?',
    answer:
      'Coverage and the gates usually open hours before the feature, with a full card of undercard races, ceremonies, and traditions building toward the headline event. The main race is a contest for elite three-year-old Thoroughbreds over a classic distance &mdash; the culmination of a long road of prep races earlier in the season.',
    answerText:
      'A full card of undercard races, ceremonies, and traditions builds toward the headline race over several hours. The feature is a contest for elite three-year-old Thoroughbreds over a classic distance, the culmination of a season of prep races.',
  },
  {
    question: 'What should I wear to a race day or a watch party?',
    answer:
      'Marquee race days have a dress-up tradition. The spring classics lean into pastels and a statement hat or fascinator, traditionally for women, though anyone can join in. Men often go bold with colourful blazers and ties. You do not need to attend in person &mdash; themed dress is half the fun of a watch party at home.',
    answerText:
      'Lean into pastels and a statement hat or fascinator. Themed dress is part of the tradition, whether you are at the track or hosting a watch party at home.',
  },
]

export default function FirstDerbyPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      {/* Image-first hero (StockImage via PremiumMasthead, attribution preserved) */}
      <PremiumMasthead
        manifestKey="horses-com:first-derby-hero"
        fallbackKey="horses-com:hero"
        eyebrow="New to the Sport? Start Here"
        title="Your First Day at the Races"
        subtitle="A friendly, no-jargon guide to enjoying the biggest day in racing as a spectator: what you are watching, the traditions, and how the afternoon unfolds. An on-ramp into the sport, not a betting guide."
        alt="A lively crowd watching from the grandstand on a sunny race day"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Horse Racing Hub', href: '/racing', category: 'Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'Bloodstock & Breeding', href: '/bloodstock' },
          { title: 'Horse Ownership', href: '/ownership' },
        ]}
        hero={{
          title: 'Your First Day at the Races',
          subtitle:
            'Millions of people watch the big spring classic each year &mdash; many tuning into racing for the only time all year. If that is you, welcome. This is a friendly, no-jargon spectator guide to enjoying the day. It is an educational on-ramp into the sport, not a wagering guide.',
          category: 'Beginner Guide',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '7 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Your First Day at the Races', href: '/first-derby' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What You Are Watching', href: '#watching' },
                { label: 'How the Day Unfolds', href: '#day' },
                { label: 'The Traditions', href: '#traditions' },
                { label: 'How to Follow a Horse', href: '#follow' },
                { label: 'Catching the Bug', href: '#next' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Bloodstock & Breeding', href: '/bloodstock' },
                { label: 'Horse Ownership', href: '/ownership' },
                { label: 'Horse Breeds', href: '/breeds' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="first-derby"
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

          {/* NON-WAGERING SCOPE NOTE (mirrors bloodstock disclaimer pattern) */}
          <div className="not-prose my-6 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              A Spectator Guide
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This is an educational guide to enjoying race day as a spectator &mdash; the
              experience, the traditions, and how the sport works. It is not a
              wagering resource. It does not explain how to bet, read odds, or
              handicap a race, and nothing here is betting advice. Most fans enjoy
              a great day at the races without wagering a cent.
            </p>
          </div>

          <p>
            Millions of people watch the big spring classic each year, and for many
            of them it is the only horse race they will watch all year. If that is
            you, welcome &mdash; you do not need any experience to have a wonderful
            day. The headline race is over in about two minutes, but the afternoon
            around it is full of pageantry, tradition, and atmosphere you can enjoy
            from the first hour. This guide walks you through what you are watching
            and how to settle in.
          </p>

          <h2 id="watching">What You Are Actually Watching</h2>
          <p>
            The headline race is a contest for elite three-year-old Thoroughbreds
            over a classic distance &mdash; the culmination of a long road of prep
            races run across the preceding months. By the time the field reaches the
            starting gate, these are among the best young horses of their generation,
            and for most of them this is the biggest race of their lives.
          </p>
          <p>
            You do not need to know the horses to enjoy it. Pick one whose name or
            story you like, watch the parade to the post, and you may be surprised
            how invested you feel over those two minutes. The race itself is a
            compressed drama: a clean break from the gate, the jostle for position
            early, the long run down the backstretch, and the final turn into the
            stretch where the result is usually decided.
          </p>

          <h2 id="day">How the Day Unfolds</h2>
          <p>
            The feature race is the climax, but it is the last act of a long
            afternoon. Major networks carry the day live, with streaming options,
            and coverage typically begins hours before the headline race with
            build-up, fashion, ceremony, and a full card of undercard races. Tuning
            in early is part of the experience &mdash; the atmosphere is most of the
            day, not just the two-minute feature.
          </p>
          <ul>
            <li>
              <strong>The undercard.</strong> A series of earlier races runs through
              the afternoon, giving you a chance to learn the rhythm of a race before
              the main event.
            </li>
            <li>
              <strong>The post parade.</strong> Before each race the horses are led
              out in front of the stands so spectators can see them up close &mdash;
              a good moment to pick one to follow.
            </li>
            <li>
              <strong>The ceremony.</strong> Marquee race days have signature rituals
              and traditions that build anticipation toward the feature.
            </li>
            <li>
              <strong>The feature race.</strong> The two minutes everyone came for,
              followed by the winner&apos;s ceremony.
            </li>
          </ul>

          <h2 id="traditions">The Traditions That Make the Day</h2>
          <p>
            Half the fun of a marquee race day is the culture around it, and you can
            join in whether you are trackside or hosting at home.
          </p>
          <p>
            <strong>Dressing up.</strong> Big race days have a dress-up tradition,
            and the spring classics lean into pastels and bold hats. A statement hat
            or fascinator is the signature look &mdash; traditionally for women,
            though anyone can join in &mdash; while many men go bold with colourful
            blazers, ties, and loafers. Comfortable shoes help if you are on your feet
            all day.
          </p>
          <p>
            <strong>The food and drink.</strong> The classic race-day drink is the
            mint julep &mdash; bourbon, fresh mint, sugar, and crushed ice,
            traditionally served in a frosted cup, and easy to batch as a pitcher for
            a watch party (a mint-and-soda version makes an equally good
            no-alcohol option). The food leans Southern and shareable: hot browns,
            pimento cheese, benedictine, and bite-size desserts. A grazing table lets
            guests drift in and out between races.
          </p>

          <h2 id="follow">How to Follow a Horse Through a Race</h2>
          <p>
            For a first-timer, choosing a horse to root for is part of the fun and
            does not need to be scientific. Plenty of lifelong fans started by
            picking on instinct, and there is no wrong way to do it.
          </p>
          <ul>
            <li>
              <strong>By name or story.</strong> A horse with a name that makes you
              smile, or a backstory you connect with, is an easy one to cheer.
            </li>
            <li>
              <strong>By the silks.</strong> Each owner races in distinctive coloured
              silks worn by the jockey, which makes a horse easy to track around the
              circuit &mdash; pick a colour you can spot.
            </li>
            <li>
              <strong>By post position.</strong> The starting gate slot a horse draws,
              shown in the programme, is as good a tiebreaker as any for a first pick.
            </li>
            <li>
              <strong>In the parade.</strong> Watch the post parade and pick the horse
              that simply catches your eye walking to the gate.
            </li>
          </ul>
          <p>
            Once the gate opens, keep your eye on your colours and watch how the race
            shapes up &mdash; who breaks well, who settles at the back to save energy,
            and who makes a move on the far turn. Following one horse through the run
            is the fastest way to feel the drama of the sport.
          </p>

          <h2 id="next">Caught the Bug? Where to Go Next</h2>
          <p>
            If one afternoon turns into curiosity, racing rewards it. The sport has
            real depth once you start pulling threads &mdash; the disciplines, the
            breeding world behind the horses, and the many ways fans get closer to it.
          </p>
          <ul>
            <li>
              Start with the <a href="/racing">horse racing hub</a> for a plain-English
              tour of how the sport is organised, then read up on{' '}
              <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>,
              the format the spring classics belong to.
            </li>
            <li>
              Curious where these elite horses come from? The{' '}
              <a href="/bloodstock">bloodstock and breeding</a> reference explains the
              breeding-and-sales world that produces them.
            </li>
            <li>
              Ever thought about getting closer to the action? Our{' '}
              <a href="/ownership">horse ownership</a> guide covers how everyday fans
              can buy into the sport, from syndicates to shares.
            </li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Thoroughbred racing, the classic races, and the American Stud Book. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). The classic races and Group/Grade 1 contests for three-year-olds. horseracingintfed.com.</li>
            <li>The Jockey Club Information Systems. Fact Book &mdash; racing schedules and field statistics. jockeyclub.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
