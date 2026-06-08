/**
 * Horses.com -- Handicap Races
 * /racing/race-types/handicap-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the handicap as a
 * STRUCTURAL category: how the official assigns weights, the "equal chance"
 * principle, and how handicaps differ from weight-for-age and condition races.
 *
 * NON-WAGERING (QC §1): "handicap" here means the WEIGHTING method, not
 * handicapping-to-bet. Strictly the sport's weight mechanics. No betting, odds,
 * or wagering angles. Byline "Horses.com Editorial".
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
  title: 'Handicap Races Explained -- How Assigned Weights Level the Field',
  description:
    'What a handicap race is, how an official assigns each horse a weight to give every runner an equal chance, and how handicaps differ from condition races.',
  path: '/racing/race-types/handicap-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Handicap Races Explained -- How Assigned Weights Level the Field',
  description:
    'What a handicap race is, how an official assigns each horse a weight to give every runner an equal chance, and how handicaps differ from condition races.',
  url: 'https://horses.com/racing/race-types/handicap-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is a handicap race?',
    answer:
      'A handicap race is one in which an official assigns each horse a weight to carry &mdash; more for better horses, less for lesser ones &mdash; with the aim of giving every runner an equal chance of winning. It is a method of equalising a field, distinct from the class ladder of maiden, claiming, allowance, and stakes races.',
    answerText:
      'A handicap race is one where an official assigns each horse a weight, more for better horses, aiming to give every runner an equal chance.',
  },
  {
    question: 'How are the weights assigned?',
    answer:
      'An official handicapper rates each horse on its past form and assigns weight accordingly: the higher the rating, the more weight. The weight is carried via the saddle and lead pads. The principle is that a superior horse giving weight to an inferior one evens out their chances.',
    answerText:
      'An official handicapper rates each horse on past form and assigns weight accordingly: higher-rated horses carry more, carried via the saddle and lead pads.',
  },
  {
    question: 'How is a handicap different from a weight-for-age race?',
    answer:
      'In a handicap, weights are set by an official&apos;s individual rating of each horse. In a weight-for-age or condition race, weights are set by rule &mdash; based on age, sex, or accomplishment &mdash; rather than by a personalised assessment. The handicap is the only common format where a single official tailors the weight to each runner.',
    answerText:
      'In a handicap, weights come from an official&apos;s rating of each horse; in weight-for-age and condition races, weights are set by rule based on age, sex, or accomplishment.',
  },
]

export default function HandicapRacesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-handicap"
        fallbackKey="horses-com:racing"
        eyebrow="Race Types · Weighting Method"
        title="Handicap Races"
        subtitle="The race built around a theoretical dead heat: an official assigns each horse a weight, better horses carrying more, so every runner starts with an equal chance on paper."
        alt="Thoroughbreds carrying assigned weights in a handicap race"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Stakes Races', href: '/racing/race-types/stakes-races' },
          { title: 'Allowance Races', href: '/racing/race-types/allowance-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Handicap Races',
          subtitle:
            'In a handicap, an official assigns each horse a weight to carry, with better horses carrying more. The goal is a theoretical dead heat -- to give every runner an equal winning chance on paper. This reference explains how the weighting works and how it differs from condition races. It is educational, not a wagering guide.',
          category: 'Race Types Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '5 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Race Types', href: '/racing/understanding-race-types-and-classes' },
          { name: 'Handicap Races', href: '/racing/race-types/handicap-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'A Method, Not a Class', href: '#method' },
                { label: 'How Weights Are Assigned', href: '#weights' },
                { label: 'The Equal-Chance Principle', href: '#principle' },
                { label: 'Handicap vs Weight-for-Age', href: '#contrast' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Graded Stakes Races', href: '/racing/race-types/graded-stakes-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-handicap"
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

          <h2 id="method">A Method, Not a Class</h2>
          <p>The <strong>handicap</strong> is different in kind from the other categories in this cluster. <a href="/racing/race-types/maiden-races">Maiden</a>, <a href="/racing/race-types/claiming-races">claiming</a>, <a href="/racing/race-types/allowance-races">allowance</a>, and <a href="/racing/race-types/stakes-races">stakes</a> races describe <em>levels</em> on the class ladder. A handicap describes a <em>way of assigning weight</em> that can cut across those levels &mdash; you can have a modest handicap or a major handicap stakes worth a fortune. What unifies them is the principle, not the prize.</p>
          <p>One note on the word itself: in racing, &ldquo;handicap&rdquo; in this sense means the official weighting method described here, not the popular shorthand for studying a race to place a wager. This page is about the former &mdash; the sport&apos;s weight mechanics &mdash; and contains no wagering guidance.</p>

          <h2 id="weights">How Weights Are Assigned</h2>
          <p>In a handicap, an official &mdash; the racing secretary or a dedicated handicapper &mdash; assigns each horse an individual weight to carry. The official rates each runner on its past form and translates that rating into weight: the higher the rating, the more weight the horse is asked to carry. The extra weight is made up via the saddle and, if needed, thin lead pads tucked into the saddle pad, so that the total the horse carries matches its assignment.</p>
          <p>This is a hands-on, per-horse judgement. Two horses in the same handicap may be set to carry meaningfully different weights purely because the official rates one more highly than the other on what they have done on the track.</p>

          <h2 id="principle">The Equal-Chance Principle</h2>
          <p>The whole design aims at a <strong>theoretical dead heat</strong>. By loading the better horses with more weight and the lesser horses with less, the handicapper tries to bring every runner to a single point of equality &mdash; a race in which, on paper, each horse has the same chance of winning.</p>
          <p>One consequence is that handicaps quietly reward <strong>improving horses</strong>. An official can only rate a horse on the form it has already shown, so a horse getting better faster than its assessment can keep up is, for a window, &ldquo;ahead of the handicapper.&rdquo; That dynamic &mdash; the official catching up to a horse&apos;s true ability over time &mdash; is part of what gives handicaps their distinctive, strategically rich character.</p>

          <h2 id="contrast">Handicap vs Weight-for-Age and Condition Races</h2>
          <p>It helps to set the handicap against the alternatives. In a <strong>weight-for-age</strong> race, weights are set by a fixed scale according to a horse&apos;s age (and the time of year), reflecting the natural developmental advantage of older horses. In a <strong>condition</strong> race &mdash; such as an <a href="/racing/race-types/allowance-races">allowance</a> &mdash; weights are adjusted by rule-based allowances tied to a horse&apos;s record. In both, the weight comes from a <em>rule</em>.</p>
          <p>The handicap is the format where the weight instead comes from an official&apos;s <em>individual rating</em> of each horse. That is the essential distinction: rule-based weighting versus personalised, form-based weighting. For how all these classes and methods fit together, see the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Weights, conditions, and the scale of weights. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International handicapping and ratings. horseracingintfed.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains the handicap weighting method as an
              educational, structural subject. &ldquo;Handicap&rdquo; here means
              the assigned-weight format, not handicapping to place a wager. No
              betting tips, odds commentary, or wagering guidance is provided or
              implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
