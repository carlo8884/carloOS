/**
 * Horses.com -- Claiming Races
 * /racing/race-types/claiming-races
 *
 * Depth spoke beneath the race-types overview hub. Explains the claiming class
 * as a STRUCTURAL category: the claim mechanism, why the system exists, and how
 * claiming prices sort horses by ability.
 *
 * NON-WAGERING (QC §1): claiming prices are described only as the sport's
 * organizing mechanic, never as a bet signal. No betting, odds, or handicapping.
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
  title: 'Claiming Races Explained -- How the "For Sale" Race Works',
  description:
    'How a claiming race works: the claim mechanism, why the prize and the horse can go to different people, and how claiming prices sort horses by class.',
  path: '/racing/race-types/claiming-races',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Claiming Races Explained -- How the "For Sale" Race Works',
  description:
    'How a claiming race works: the claim mechanism, why the prize and the horse can go to different people, and how claiming prices sort horses by class.',
  url: 'https://horses.com/racing/race-types/claiming-races',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is a claiming race?',
    answer:
      'A claiming race is one in which every horse entered is available for purchase at a fixed price, called the claiming price, stated in the conditions. Any licensed horseperson can file a claim before the race. The mechanism keeps fields evenly matched by discouraging owners from running a clearly superior horse against weaker, cheaper rivals.',
    answerText:
      'A claiming race is one where every horse is available for purchase at a fixed claiming price. The mechanism keeps fields evenly matched.',
  },
  {
    question: 'If I claim a horse and it wins, do I get the prize money?',
    answer:
      'No. The previous owner keeps the purse for that race. The person who claimed the horse takes ownership of the horse itself, effective from the start of the race &mdash; so the prize and the horse can go to two different people in the same race.',
    answerText:
      'No. The previous owner keeps the purse; the claimant takes ownership of the horse, effective from the start of the race.',
  },
  {
    question: 'What does the claiming price tell you?',
    answer:
      'The claiming price is a rough rating of the horse&apos;s class. A $5,000 claimer and a $50,000 claimer are very different levels of horse. Tracks with higher-quality programs carry higher claiming prices throughout their condition books. The price is a structural sorting tool, not a betting signal.',
    answerText:
      'The claiming price is a rough rating of a horse&apos;s class; higher-quality programs carry higher claiming prices. It is a sorting tool, not a betting signal.',
  },
]

export default function ClaimingRacesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:race-type-claiming"
        fallbackKey="horses-com:racing"
        eyebrow="Race Types · Entry Level"
        title="Claiming Races"
        subtitle="The everyday backbone of the racing calendar: races where every runner is for sale at a set price, and that price quietly sorts the whole field."
        alt="Thoroughbreds in the paddock before an everyday claiming race"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Race Types & Classes (Overview)', href: '/racing/understanding-race-types-and-classes', category: 'Race Types' },
          { title: 'Maiden Races', href: '/racing/race-types/maiden-races' },
          { title: 'Optional Claiming Races', href: '/racing/race-types/optional-claiming-races' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'Claiming Races',
          subtitle:
            'Claiming races are the workhorse of the sport -- the most common race type at most tracks. Every runner can be purchased ("claimed") for a fixed price before the race is run, a self-regulating mechanism that keeps fields competitive. This reference explains how it works and why it exists. It is educational, not a wagering guide.',
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
          { name: 'Claiming Races', href: '/racing/race-types/claiming-races' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'How the Claim Works', href: '#claim' },
                { label: 'Prize vs Horse', href: '#prize' },
                { label: 'Why Claiming Races Exist', href: '#why' },
                { label: 'How the Price Sorts Horses', href: '#price' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Race Classes In Depth"
              links={[
                { label: 'Race Types Overview', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Maiden Races', href: '/racing/race-types/maiden-races' },
                { label: 'Optional Claiming Races', href: '/racing/race-types/optional-claiming-races' },
                { label: 'Allowance Races', href: '/racing/race-types/allowance-races' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="race-types-claiming"
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

          <h2 id="claim">How the Claim Works</h2>
          <p>A claiming race is defined by one feature: <strong>every horse in the field is for sale</strong> at the same fixed price, the <strong>claiming price</strong>, which is published in the race&apos;s conditions. Before the race is run, a licensed owner &mdash; usually acting through a trainer &mdash; can submit a <strong>claim</strong> for any horse entered, putting up that price.</p>
          <p>The timing is what makes the system distinctive. The claim is lodged in advance, but ownership effectively transfers the instant the starting gate opens. From that moment the horse belongs to the claimant, who assumes all the risk of the running &mdash; including the possibility that the horse is injured during the race. The new owner is buying the horse blind to how the race itself will unfold.</p>
          <p>This page describes claiming as a structural feature of the sport. It is not wagering guidance, and the claiming price is discussed only as a sorting mechanic, never as a betting signal.</p>

          <h2 id="prize">Why the Prize and the Horse Can Go Different Ways</h2>
          <p>One quirk often surprises newcomers: in a claiming race, the <strong>prize money and the horse can end up with two different people</strong>. If a claimed horse goes on to win the race, the purse still goes to the <em>original</em> owner who entered it, while the horse itself passes to the claimant. The claimant is buying the animal and its future, not the result of the race it was claimed out of.</p>
          <p>That split is deliberate. It means an owner deciding to &ldquo;run for a tag&rdquo; is genuinely risking the horse, not just renting it out for one afternoon, which keeps the whole mechanism honest.</p>

          <h2 id="why">Why Claiming Races Exist</h2>
          <p>The claiming system solves a basic competitive problem. Without it, an owner could enter a clearly superior horse in a weak race and collect an easy, lopsided win, hollowing out the competition. By making every runner buyable, claiming races impose a cost on that strategy: drop a good horse into cheap company and a rival can simply claim it away.</p>
          <p>The result is a continuous, transparent market in racehorses running underneath the sport, and fields that are far more closely matched than they would otherwise be. Claiming races are one of the defining features of North American racing&apos;s competitive ecosystem &mdash; the everyday machinery that keeps the bottom and middle of the sport balanced.</p>

          <h2 id="price">How the Price Sorts Horses</h2>
          <p>The claiming price doubles as a rough rating of class. A horse running for a $5,000 tag and one running for $50,000 are simply different levels of animal, and the figure on the condition page reflects roughly what the market thinks each is worth. Tracks with stronger overall programs run higher claiming prices throughout their condition books, so the same number means different things at different venues.</p>
          <p>Because the price is itself a quality marker, claiming races span an enormous range &mdash; from the cheapest bottom-level events to high-priced claimers only a notch below <a href="/racing/race-types/allowance-races">allowance company</a>. Where a horse&apos;s ability is uncertain enough that connections want flexibility, racing secretaries can also reach for the hybrid <a href="/racing/race-types/optional-claiming-races">optional claiming</a> format. For the full ladder of classes, see the <a href="/racing/understanding-race-types-and-classes">race types overview</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Conditions of racing and claiming rules. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Rules and conditions reference. ntra.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on claiming. arci.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a race class as an educational, structural
              subject. Claiming prices are described as the sport&apos;s
              organizing mechanic, not as betting signals. No wagering tips, odds
              commentary, or handicapping guidance is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
