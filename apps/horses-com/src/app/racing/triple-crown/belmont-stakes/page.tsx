/**
 * Horses.com -- The Belmont Stakes
 * /racing/triple-crown/belmont-stakes
 *
 * Depth spoke beneath the Triple Crown overview hub. Goes deep on the THIRD /
 * final leg only: Belmont Park, the mile-and-a-half distance ("Test of the
 * Champion"), why the distance + accumulated toll ends most Triple Crown bids,
 * and its traditions (white carnations, "New York, New York", alternate venues
 * during renovation). Does NOT re-tell the whole Triple Crown story (overview)
 * and does NOT cover Derby/Preakness in depth (sibling spokes).
 *
 * NON-WAGERING (QC §1): heritage/educational explainer of a public event.
 * No odds, picks, handicapping, or wagering framing. Byline "Horses.com
 * Editorial"; facts sourced to NYRA and racing's governing bodies.
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
  title: 'The Belmont Stakes Explained -- the Test of the Champion',
  description:
    'The Belmont Stakes: the final Triple Crown leg, traditionally a mile and a half at Belmont Park, why its distance ends most bids, and its traditions.',
  path: '/racing/triple-crown/belmont-stakes',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Belmont Stakes Explained -- the Test of the Champion',
  description:
    'The Belmont Stakes: the final Triple Crown leg, traditionally a mile and a half at Belmont Park, why its distance ends most bids, and its traditions.',
  url: 'https://horses.com/racing/triple-crown/belmont-stakes',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'How long is the Belmont Stakes?',
    answer:
      'The Belmont is traditionally run at a mile and a half (twelve furlongs) on dirt — the longest of the three Triple Crown legs and longer than most of these three-year-olds will ever race again. In years when the race has been hosted away from Belmont Park during renovations, it has sometimes been run at a shorter distance.',
    answerText:
      'Traditionally a mile and a half (twelve furlongs) on dirt -- the longest Triple Crown leg, sometimes shortened in years hosted at alternate venues.',
  },
  {
    question: 'Why is the Belmont Stakes called the Test of the Champion?',
    answer:
      'Because its mile-and-a-half distance — the longest of the Triple Crown — combined with the accumulated toll of three demanding races in about five weeks, makes it the hardest leg to win and the one that ends the majority of Triple Crown bids. A horse arriving with the first two legs in hand must overcome both the unfamiliar distance and fresh rivals pointed at this single race.',
    answerText:
      'Its mile-and-a-half distance, plus the toll of three races in roughly five weeks, makes it the hardest leg and the one that ends most Triple Crown bids.',
  },
  {
    question: 'Where and when is the Belmont Stakes held?',
    answer:
      'The Belmont is traditionally run at Belmont Park in Elmont, New York, about three weeks after the Preakness, as the third and final leg of the Triple Crown. During periods of renovation at Belmont Park it has been hosted at alternate New York venues, so it is worth confirming the current year&apos;s site with the New York Racing Association (NYRA).',
    answerText:
      'Traditionally at Belmont Park in Elmont, New York, about three weeks after the Preakness -- occasionally relocated to alternate venues during renovations.',
  },
  {
    question: 'What are the Belmont Stakes traditions?',
    answer:
      'The winner is draped with a blanket of white carnations, and &ldquo;New York, New York&rdquo; is associated with the race-day atmosphere. As the final leg, the Belmont is also where a completed Triple Crown is celebrated — or where the most bids fall short.',
    answerText:
      'A blanket of white carnations for the winner and the playing of "New York, New York"; it is also where the Triple Crown is won or, most often, lost.',
  },
]

export default function BelmontStakesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:triple-crown-belmont"
        fallbackKey="horses-com:racing"
        eyebrow="Triple Crown · Final Leg"
        title="The Belmont Stakes"
        subtitle="The Test of the Champion — the longest leg, traditionally a mile and a half at Belmont Park, where most Triple Crown bids meet their end."
        alt="A Thoroughbred galloping clear over a long dirt course"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The Triple Crown (Overview)', href: '/racing/triple-crown', category: 'Triple Crown' },
          { title: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
          { title: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
        ]}
        hero={{
          title: 'The Belmont Stakes',
          subtitle:
            'The Belmont Stakes is the third and final leg of the American Triple Crown — &ldquo;the Test of the Champion.&rdquo; Traditionally run at a mile and a half at Belmont Park about three weeks after the Preakness, it is the longest of the three legs and the graveyard of many a Triple Crown bid. This reference explains the race, why its distance is so decisive, and its traditions. It is educational, not a wagering guide.',
          category: 'Triple Crown Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '7 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'The Triple Crown', href: '/racing/triple-crown' },
          { name: 'The Belmont Stakes', href: '/racing/triple-crown/belmont-stakes' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Final Leg', href: '#final-leg' },
                { label: 'Belmont Park & the Distance', href: '#course' },
                { label: 'The Test of the Champion', href: '#test' },
                { label: 'The Traditions', href: '#traditions' },
                { label: 'Where the Sweep Is Decided', href: '#decided' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Three Legs"
              links={[
                { label: 'The Triple Crown (Overview)', href: '/racing/triple-crown' },
                { label: 'The Kentucky Derby', href: '/racing/triple-crown/kentucky-derby' },
                { label: 'The Preakness Stakes', href: '/racing/triple-crown/preakness-stakes' },
                { label: "The Breeders' Cup", href: '/racing/breeders-cup' },
                { label: 'Racing Hub', href: '/racing' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="triple-crown-belmont-stakes"
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

          <h2 id="final-leg">The Final Leg</h2>
          <p>The <strong>Belmont Stakes</strong> is the third and final leg of the American <a href="/racing/triple-crown">Triple Crown</a>, run about three weeks after the <a href="/racing/triple-crown/preakness-stakes">Preakness Stakes</a>. The oldest of the three races — first run in 1867 — it is also the longest and, by reputation, the hardest. It is the race that completes the sweep for the rare horse that wins all three, and the race that ends the bid for almost everyone else.</p>
          <p>This page goes deep on the Belmont alone. For the structure of the full series and the horses that have swept it, see the <a href="/racing/triple-crown">Triple Crown overview</a>. As a heritage and educational reference, this page offers no odds, picks, or wagering guidance.</p>

          <h2 id="course">Belmont Park &amp; the Distance</h2>
          <p>The Belmont is traditionally run at <strong>Belmont Park</strong> in Elmont, New York, over a mile and a half (twelve furlongs) on a notably broad, sweeping dirt main track. At a mile and a half, it is the <strong>longest of the three Triple Crown legs</strong> — and longer than most of these three-year-olds will ever be asked to run again in their careers.</p>
          <p>That distance is the heart of the race&apos;s identity. Few horses are bred and trained to be at their best over twelve furlongs at this stage of their development, so the Belmont rewards genuine stamina and a patient, well-judged ride above all. During periods of renovation at Belmont Park the race has been hosted at <strong>alternate New York venues</strong>, sometimes at a shorter distance; it is always worth confirming the current year&apos;s site and trip with the New York Racing Association (NYRA).</p>

          <h2 id="test">The Test of the Champion</h2>
          <p>The Belmont&apos;s nickname — <strong>&ldquo;the Test of the Champion&rdquo;</strong> — captures why it sits at the end of the series. A horse arriving with the first two legs in hand must overcome two things at once: the unfamiliar mile-and-a-half distance, and the accumulated toll of three hard races in roughly five weeks. On top of that, it typically faces <strong>fresh rivals</strong> who skipped one or both earlier legs specifically to be at their best for the Belmont.</p>
          <p>This combination is why the final leg is where most Triple Crown bids fall short. The long droughts between Triple Crown winners are largely a story of horses that won the Derby and Preakness only to be caught — by the distance, by fatigue, or by a rested challenger — in the Belmont. When a horse does get the job done here, it joins a very small group of the sport&apos;s immortals.</p>

          <h2 id="traditions">The Traditions</h2>
          <p>The Belmont has its own rituals to match the other legs. The winner is draped with a <strong>blanket of white carnations</strong>, the floral emblem that distinguishes it from the Derby&apos;s roses and the Preakness&apos;s black-eyed Susans. <strong>&ldquo;New York, New York&rdquo;</strong> is woven into the race-day atmosphere, and as the closing leg the Belmont carries the weight of being the place where a completed Triple Crown is finally celebrated.</p>
          <p>These heritage traditions, tied to New York and to the race&apos;s long history, round out the trio — three legs, three tracks, three floral identities — that together make the Triple Crown more than the sum of its parts.</p>

          <h2 id="decided">Where the Sweep Is Decided</h2>
          <p>By the time the field reaches the Belmont, the season&apos;s biggest question is on the line. A horse that has already won the <a href="/racing/triple-crown/kentucky-derby">Kentucky Derby</a> and the <a href="/racing/triple-crown/preakness-stakes">Preakness Stakes</a> arrives one race away from immortality — and the Belmont is the gate it must pass through. More often than not, this is where the bid ends; on the rare occasions it does not, the result becomes a national sports story and reshapes the horse&apos;s value as a future stallion or broodmare.</p>
          <p>For the breed and sport the series belongs to, see <a href="/racing/thoroughbred-flat-racing">Thoroughbred flat racing</a>; for how a Grade 1 like the Belmont fits the classification ladder, the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>; and for the careers these horses go on to after racing, the <a href="/racing/off-track-thoroughbred-aftercare">off-track Thoroughbred aftercare reference</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>New York Racing Association (NYRA) / Belmont Stakes. Official race history, distance, and venue. belmontstakes.com.</li>
            <li>The Jockey Club. American Stud Book; Thoroughbred registration. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Triple Crown overview and member-track information. ntra.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article is an educational, heritage explainer of a public
              sporting event. It is not a wagering resource: no betting tips,
              odds commentary, handicapping, or predictions are provided or
              implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
