/**
 * Horses.com -- Optional Claiming Races
 * /racing/race-types/optional-claiming-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the optional
 * claiming hybrid as a STRUCTURAL category: how the per-entry option works and
 * why racing secretaries use it to fill fields.
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
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Optional Claiming Races Explained -- The Allowance/Claiming Hybrid',
  description:
    'How optional claiming races work: the per-entry choice between running "for the tag" or under allowance conditions, and why the format helps fill fields.',
  path: '/racing/race-types/optional-claiming-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Optional Claiming Races Explained -- The Allowance/Claiming Hybrid',
  description:
    'How optional claiming races work: the per-entry choice between running "for the tag" or under allowance conditions, and why the format helps fill fields.',
  url: 'https://horses.com/racing/race-types/optional-claiming-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const schema = combineSchemas(articleSchema)

const FAQS = [
  {
    question: 'What is an optional claiming race?',
    answer:
      'An optional claiming race is a hybrid in which each horse is entered either &ldquo;for the tag&rdquo; (claimable at the stated price) or under allowance conditions (not for sale). The two pools run together in one field. Connections choose which way to enter their horse.',
    answerText:
      'A hybrid race where each horse is entered either claimable ("for the tag") or under allowance conditions (not for sale), combining both pools into one field.',
  },
  {
    question: 'Why do tracks card optional claiming races?',
    answer:
      'They solve a scheduling problem. At smaller meets there may not be enough horses to fill a pure allowance race or a pure claiming race on their own. The optional-claiming format pools both groups into one viable, competitive field, helping racing secretaries write a fuller card.',
    answerText:
      'They pool allowance-level and claiming horses into one field so racing secretaries can fill competitive races at smaller meets.',
  },
  {
    question: 'Can a horse entered "not for sale" still be claimed in an optional claiming race?',
    answer:
      'No. Only horses entered &ldquo;for the tag&rdquo; can be claimed. Horses entered under the allowance condition are protected and cannot be purchased out of the race, even though they run against claimable rivals in the same field.',
    answerText:
      'No. Only horses entered "for the tag" can be claimed; those entered under the allowance condition are protected.',
  },
]

export default function OptionalClaimingRacesPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-optional-claiming"
        fallbackKey="horses-com:hero"
        eyebrow="Race Types · Mid Class"
        title="Optional Claiming Races"
        subtitle="The flexible hybrid that lets some horses run for a price and others run protected, so a single race can draw from two pools of horses at once."
        alt="Thoroughbreds entering the track for a mixed-conditions race"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Allowance Races', href: '/racing/race-types/allowance-races' },
          { title: 'Claiming Races', href: '/racing/race-types/claiming-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Optional Claiming Races',
          subtitle:
            'Optional claiming races are a flexible hybrid between allowance and claiming conditions. Each entrant’s connections choose whether to run their horse "for the tag" (claimable) or under the allowance conditions (not for sale). This reference explains how the option works and why it exists. It is educational, not a wagering guide.',
          category: 'Race Types Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '5 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Race Types', href: '/racing/race-types' },
          { name: 'Optional Claiming Races', href: '/racing/race-types/optional-claiming-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'A Hybrid of Two Classes', href: '#hybrid' },
                { label: 'How the Option Works', href: '#option' },
                { label: 'Why the Format Exists', href: '#why' },
                { label: 'Reading the Field', href: '#reading' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Claiming Races', href: '/racing/race-types/claiming-races' },
                { label: 'Stakes Races', href: '/racing/race-types/stakes-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-optional-claiming"
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

          <h2 id="hybrid">A Hybrid of Two Classes</h2>
          <p>An <strong>optional claiming race</strong> is exactly what its name suggests: a race that blends the two mid-level classes, <a href="/racing/race-types/allowance-races">allowance</a> and <a href="/racing/race-types/claiming-races">claiming</a>, into a single event. Rather than forcing every runner into one set of conditions, the format lets each horse&apos;s connections pick which set applies to them. The race therefore mixes protected, not-for-sale horses with claimable ones in the same field.</p>
          <p>It is one of the more elegant pieces of plumbing in the sport&apos;s class structure, and understanding it explains a lot about how cards actually get filled. This page treats the format as a structural device; it contains no wagering guidance.</p>

          <h2 id="option">How the Option Works</h2>
          <p>When entering, a horse&apos;s connections make a single choice: run the horse <strong>&ldquo;for the tag&rdquo;</strong>, meaning it is claimable at the stated price, or run it under the <strong>allowance condition</strong>, meaning it is not for sale. Horses entered for the tag can be claimed out of the race in the usual way; horses entered under the allowance condition are protected and cannot be bought, even though they line up against claimable rivals.</p>
          <p>So two horses can run side by side in the same race under different terms &mdash; one purchasable, one not &mdash; according to how each set of connections chose to enter. The option is per horse, decided at entry, and fixed once the race is drawn.</p>

          <h2 id="why">Why the Format Exists</h2>
          <p>The optional claiming race is fundamentally a tool for <strong>filling fields</strong>. At many tracks, especially smaller meets, there may simply not be enough horses in the region to fill a pure allowance race or a pure claiming race on its own. Each pool, taken alone, is too thin to make a competitive event.</p>
          <p>By pooling both groups, the racing secretary can combine allowance-eligible improvers with appropriately priced claimers into one full, competitive field. The format is, in effect, a flexibility valve in the condition book &mdash; a way to keep races viable when the local horse population would not otherwise support a full card.</p>

          <h2 id="reading">Reading the Field</h2>
          <p>The mixed nature of an optional claiming race is part of what makes the category distinctive. A field can contain a lightly raced allowance type being protected by its connections and an older claimer running for a price, all together. Each entry reflects a different decision about where a horse belongs and how much risk its connections are willing to take on its value.</p>
          <p>The format slots neatly between the pure classes on the ladder. For how it relates to the rest of the structure &mdash; from <a href="/racing/race-types/maiden-races">maiden races</a> at the bottom to <a href="/racing/race-types/graded-stakes-races">graded stakes</a> at the top &mdash; see the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Conditions of racing and claiming rules. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on race conditions. arci.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a race format as an educational, structural
              subject. It is not a wagering resource: no betting tips, odds
              commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
