import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, QuickPicks, ScoreMethodology, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Best Ferret Harness 2026: H-Style vs Jacket Picks | Ferret.com',
  description:
    'The best ferret harness in 2026: H-style vs jacket harnesses ranked on escape prevention, sizing for a no-neck body, fit adjustment, and material.',
  path: '/reviews/best-ferret-harness',
  type: 'article',
})

const PAGE_URL = 'https://ferret.com/reviews/best-ferret-harness'

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Best Ferret Harness: Escape Prevention and Fit',
  description:
    'A criteria-led buyer guide to ferret harnesses — H-style vs jacket, ranked on escape prevention, sizing for a slinky no-neck body, fit adjustment, and material.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Reviews', url: 'https://ferret.com/reviews' },
    { name: 'Best Ferret Harness', url: PAGE_URL },
  ],
})

const itemList = buildItemListSchema({
  name: 'Ferret Harnesses That Meet the Criteria',
  items: [
    { name: 'Jacket / Vest-Style Ferret Harness', url: `${PAGE_URL}#jacket` },
    { name: 'Adjustable H-Style Ferret Harness', url: `${PAGE_URL}#h-style` },
    { name: 'Figure-H Mesh Harness with Leash Set', url: `${PAGE_URL}#mesh-h` },
  ],
})

const products = [
  buildProductSchema({
    name: 'Jacket / Vest-Style Ferret Harness',
    description: 'Wide body panel spreads pressure, hardest to back out of — best escape resistance',
    url: `${PAGE_URL}#jacket`,
    ratingValue: 9.0,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'A vest-style harness wraps a broad panel around the chest and shoulders and closes along the back, which is the layout hardest for a ferret to reverse out of and the gentlest on the skin because pressure is spread over a wide area. The trade-offs are getting an accurate body measurement and a slightly fussier put-on; for a determined escape artist it is the most secure choice.',
  }),
  buildProductSchema({
    name: 'Adjustable H-Style Ferret Harness',
    description: 'Two girth loops joined by a back strap, multi-point adjustment for a no-neck body',
    url: `${PAGE_URL}#h-style`,
    ratingValue: 8.3,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'The classic ferret harness: a neck loop and a girth loop joined by a back strap, forming an H. Multiple adjustment points let you fit the loops to a ferret that has effectively no neck, and a snug girth loop is what stops a backout. It is lightweight and quick to fit; the catch is that an H-harness left even slightly loose is the easiest type to escape, so dialing the fit is essential.',
  }),
  buildProductSchema({
    name: 'Figure-H Mesh Harness with Leash Set',
    description: 'Lightweight breathable mesh H-harness sold with a matched leash, entry-level',
    url: `${PAGE_URL}#mesh-h`,
    ratingValue: 7.5,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'A lightweight breathable-mesh take on the H-harness, usually bundled with a matched leash, and the most common entry-level option. Breathable mesh is comfortable in warm weather and the bundled leash is convenient. The limitations are fewer adjustment points and lighter buckles than a dedicated H-harness, so fit must be checked carefully and supervision is non-negotiable.',
  }),
]

const FAQS = [
  {
    question: 'What kind of harness is best for a ferret?',
    answer:
      'The two suitable styles are the jacket (vest) harness and the H-style harness. Jacket harnesses wrap a wide panel around the chest and are the hardest to back out of; H-style harnesses use two loops joined by a back strap and adjust at several points to fit a no-neck body. A simple collar is not a substitute — ferrets slip collars easily. The single best choice is whichever you can fit snugly, because fit prevents escape more than style does.',
  },
  {
    question: 'How tight should a ferret harness be?',
    answer:
      'Snug enough that you can just slide one finger between the strap and the body, and no more. Because a ferret has no real neck and a tapered, flexible body, anything looser lets it back out or twist free. After fitting, do a supervised test indoors: if the ferret can reverse out, tighten the girth loop. A correctly fitted harness should not shift much when the ferret moves.',
  },
  {
    question: 'How do I stop my ferret escaping its harness?',
    answer:
      'Escapes almost always come down to a loose girth strap. Measure the ferret, choose an adjustable harness, and fit it to the one-finger rule with the girth loop snug just behind the front legs. Vest-style harnesses are inherently harder to back out of than H-style. Always test the fit indoors before going outside, and never leave a harnessed ferret unsupervised. Our leash-and-harness-training guide covers acclimating a ferret that fights the harness.',
  },
  {
    question: 'Can ferrets wear a collar instead of a harness?',
    answer:
      'For walking, no. A ferret&rsquo;s head is barely wider than its neck, so it slips collars with ease, and a collar tight enough to stay on risks the trachea. A breakaway collar with an ID tag can be worn for identification, but the walking attachment should always be a properly fitted harness, never a collar.',
  },
  {
    question: 'How do I get my ferret used to a harness?',
    answer:
      'Introduce it gradually. Let the ferret sniff and wear the harness indoors for short, treat-paired sessions before ever attaching a leash, and build up slowly — many ferrets initially flop, freeze, or try to reverse out. Keep early outdoor trips short, warm, and quiet. The full acclimation routine is in our leash-and-harness-training behavior guide.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, breadcrumbSchema, itemList, faqSchema, ...products)

const QUICK_PICKS = [
  { label: 'Best Escape Resistance', name: 'Jacket / Vest Harness', subtitle: 'Wide panel · Hardest to back out of', href: '#jacket' },
  { label: 'Best Adjustability', name: 'Adjustable H-Style', subtitle: 'Multi-point fit · Lightweight', href: '#h-style' },
  { label: 'Entry / Bundle', name: 'Mesh H + Leash Set', subtitle: 'Breathable · Leash included', href: '#mesh-h' },
]

const SOURCES = [
  { label: 'Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery (behavior & restraint)', publisher: 'Quesenberry & Carpenter, Saunders/Elsevier' },
  { label: 'Ferret harness fit, leash training, and outdoor-safety guidance', publisher: 'American Ferret Association' },
  { label: 'Small-mammal harness and restraint safety', publisher: 'Exotic-mammal veterinary husbandry references' },
  { label: 'Manufacturer sizing charts and fit instructions', publisher: 'Ferret harness manufacturers' },
]

export default function BestFerretHarnessPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Best Ferret Harness: Escape Prevention and Fit',
          subtitle:
            'A ferret has no real neck and a body that tapers and flexes, which makes harness choice almost entirely a question of escape prevention and fit. The two styles that work are the jacket and the H-style; a collar is not an option for walking. This guide compares the two styles and ranks three harnesses on the criteria that keep a ferret attached.',
          category: 'Buyer Guides',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
          { name: 'Best Ferret Harness', href: '/reviews/best-ferret-harness' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Criteria That Matter', href: '#criteria' },
                { label: 'H-Style vs Jacket', href: '#styles' },
                { label: 'Escape Prevention', href: '#escape' },
                { label: 'Sizing a No-Neck Body', href: '#sizing' },
                { label: 'Material & Comfort', href: '#material' },
                { label: 'Harnesses That Meet the Criteria', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Leash & Harness Training', href: '/behavior/leash-and-harness-training' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Travel & Carriers', href: '/care/travel-and-carriers' },
                { label: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
                { label: 'Reviews Hub', href: '/reviews' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Gear Notes"
              subtitle="Criteria-based ferret buyer guides, monthly."
              source="reviews-best-ferret-harness"
            />
          </>
        }
        relatedLinks={[
          { title: 'Reviews Hub', href: '/reviews' },
          { title: 'Leash & Harness Training', href: '/behavior/leash-and-harness-training' },
          { title: 'Best Ferret Cage', href: '/reviews/best-ferret-cage' },
          { title: 'Travel & Carriers', href: '/care/travel-and-carriers' },
          { title: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-11"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          <QuickPicks items={QUICK_PICKS} />

          <p>
            A ferret harness is unusual among pet gear in that nearly everything about choosing one reduces to a single
            question: will the ferret stay in it? A ferret&rsquo;s head is barely wider than its neck, its body tapers
            and flexes, and its instinct when restrained is to reverse — which means a harness that does not fit
            precisely becomes an empty harness and a loose ferret outdoors. This guide treats escape prevention and fit
            as the primary criteria, compares the two viable styles, and ranks three harnesses against them. It is a
            criteria comparison, not a hands-on durability test, and it pairs with our{' '}
            <a href="/behavior/leash-and-harness-training">leash and harness training</a> guide for the acclimation
            side.
          </p>

          <h2 id="criteria">The Criteria That Matter</h2>
          <p>
            A ferret harness is ranked on three things: <strong>escape prevention</strong> (can the ferret back or twist
            out), <strong>fit adjustability</strong> (can you size it to a body with no neck and a tapered chest), and{' '}
            <strong>material and comfort</strong> (does it spread pressure and sit kindly on delicate skin). A fourth,
            quieter factor is leash-attachment placement, which should sit on the back rather than dragging the harness
            sideways. Note what is absent: a collar is not on the list, because a ferret slips a collar effortlessly and
            a collar tight enough to hold risks the windpipe.
          </p>

          <h2 id="styles">H-Style vs Jacket</h2>
          <p>
            Two harness shapes suit ferrets. The <strong>H-style</strong> is the classic: a neck loop and a girth loop
            joined by a back strap, forming an H when laid flat, with the leash clipping to the spine of the H. It is
            light, quick to put on, and adjustable at several points — but an H-harness left even slightly loose is the
            easiest type for a ferret to escape. The <strong>jacket</strong> (or vest) harness wraps a wide fabric panel
            around the chest and shoulders and closes along the back. Because it grips a broad area rather than two thin
            loops, it is harder to reverse out of and spreads pressure more kindly across the skin. The trade is a
            slightly fussier put-on and a greater dependence on getting the body measurement right.
          </p>

          <h2 id="escape">Escape Prevention</h2>
          <p>
            Escapes are overwhelmingly a fit problem, not a style problem — but style sets the ceiling. With any harness,
            the girth strap (the loop just behind the front legs) is what stops a backout, and the test is the one-finger
            rule: snug enough that a single finger just slides under the strap, no looser. A vest-style harness raises the
            ceiling because there is simply more contact area to reverse against. Whatever you choose, the
            non-negotiable step is a supervised indoor test before any outdoor use: put the harness on, attach the leash,
            and let the ferret try to back out on a soft floor. If it escapes inside, it will escape outside.
          </p>

          <h2 id="sizing">Sizing a No-Neck Body</h2>
          <p>
            Sizing is where most ferret harnesses fail, because a ferret&rsquo;s proportions defeat charts written for
            other animals. There is effectively no neck, so a fixed neck loop must be adjustable or it will be both too
            loose to hold and too tight to be comfortable. Measure the chest girth just behind the front legs and the
            neck at its base, then match to the manufacturer&rsquo;s chart, sizing toward adjustability rather than a
            single fixed dimension. Kits and small jills may need the smallest size with room to grow; large hobs may
            sit between sizes, where the more adjustable harness wins. Re-check fit seasonally — ferrets gain and lose
            noticeable weight across the year, as covered in our{' '}
            <a href="/diet/weight-management">weight management</a> guide.
          </p>

          <h2 id="material">Material & Comfort</h2>
          <p>
            Ferret skin is thin and the coat does little to pad a strap, so material matters. Wide, soft webbing or a
            breathable-mesh panel spreads pressure better than thin cord, which can chafe or dig in when the ferret
            pulls. Breathable mesh is a real advantage in warm weather, when overheating is a genuine risk for ferrets.
            Check for rough stitching or hard buckle edges that sit against the armpit or chest. Comfort is not a
            luxury here: a harness that pinches teaches the ferret to fight it, which makes every future walk harder.
          </p>

          <h2 id="picks">Harnesses That Meet the Criteria</h2>
          <p>
            Three harnesses representing the two viable styles, ranked on escape prevention, adjustability, and comfort.
            This is a criteria comparison based on style characteristics and manufacturer specifications, not a hands-on
            test. Whichever you choose, measure your ferret, fit to the one-finger rule, and never walk a ferret
            unsupervised.
          </p>
          <ScoreMethodology />

          {/* MONETIZATION: buy-box slot — jacket / vest-style ferret harness. Non-clinical husbandry
              product, buy-box permissible under QC §1.5; Monetization owns CTA + /go wiring. */}
          <ReviewCard
            id="jacket"
            badge="Best Escape Resistance"
            name="Jacket / Vest-Style Ferret Harness"
            subtitle="Wide body panel spreads pressure, hardest to back out of"
            score={9.0}
            winner
            description={
              <p>A vest-style harness wraps a broad panel around the chest and shoulders and closes along the back — the layout hardest for a ferret to reverse out of, and the gentlest on the skin because pressure is spread over a wide area rather than two thin loops. The trade-offs are getting an accurate body measurement and a slightly fussier put-on. For a determined escape artist, or a first-time walker, it is the most secure choice.</p>
            }
            specs={[
              { label: 'Style', value: 'Jacket / vest', highlight: 'good' },
              { label: 'Escape resistance', value: 'Highest', highlight: 'good' },
              { label: 'Pressure spread', value: 'Wide panel', highlight: 'good' },
              { label: 'Fit dependence', value: 'Needs measuring', highlight: 'warn' },
              { label: 'Best for', value: 'Escape artists' },
            ]}
            pros={['Hardest style to back out of', 'Spreads pressure over a wide area', 'Kind to thin ferret skin', 'Often includes a back D-ring']}
            cons={['Requires an accurate body measurement', 'Slightly fussier to put on', 'Can be warm in heat unless mesh-panelled']}
            price="$$"
            ctaText="See current price"
            ctaHref="/reviews/best-ferret-harness#picks"
            editorial
          />

          {/* MONETIZATION: buy-box slot — adjustable H-style ferret harness. */}
          <ReviewCard
            id="h-style"
            badge="Best Adjustability"
            name="Adjustable H-Style Ferret Harness"
            subtitle="Two girth loops joined by a back strap, multi-point adjustment for a no-neck body"
            score={8.3}
            description={
              <p>The classic ferret harness: a neck loop and a girth loop joined by a back strap, forming an H. Multiple adjustment points let you fit the loops precisely to a ferret that has effectively no neck, and a snug girth loop is what stops a backout. It is lightweight and quick to fit. The catch is that an H-harness left even slightly loose is the easiest type to escape, so dialing the fit and testing it indoors matters more here than with a vest.</p>
            }
            specs={[
              { label: 'Style', value: 'H-style', highlight: 'good' },
              { label: 'Adjustability', value: 'Multi-point', highlight: 'good' },
              { label: 'Weight', value: 'Light', highlight: 'good' },
              { label: 'Escape risk if loose', value: 'Higher', highlight: 'warn' },
              { label: 'Best for', value: 'Precise fitting' },
            ]}
            pros={['Highly adjustable for a no-neck body', 'Lightweight and quick to fit', 'Inexpensive', 'Widely available']}
            cons={['Easiest style to escape if left loose', 'Thin straps spread less pressure', 'Fit must be checked every outing']}
            price="$"
            ctaText="See current price"
            ctaHref="/reviews/best-ferret-harness#picks"
            editorial
          />

          {/* MONETIZATION: buy-box slot — mesh H-harness with leash set. */}
          <ReviewCard
            id="mesh-h"
            badge="Entry / Bundle"
            name="Figure-H Mesh Harness with Leash Set"
            subtitle="Lightweight breathable mesh H-harness sold with a matched leash"
            score={7.5}
            description={
              <p>A lightweight breathable-mesh take on the H-harness, usually bundled with a matched leash, and the most common entry-level option. Breathable mesh is comfortable in warm weather and the included leash is convenient for a first-time owner. The limitations are fewer adjustment points and lighter buckles than a dedicated H-harness, so fit must be checked carefully and supervision is non-negotiable. A fine starter set, with the understanding that you may upgrade to a vest for a true escape artist.</p>
            }
            specs={[
              { label: 'Style', value: 'Mesh H-style', highlight: 'good' },
              { label: 'Includes leash', value: 'Yes', highlight: 'good' },
              { label: 'Breathability', value: 'High (mesh)', highlight: 'good' },
              { label: 'Adjustment points', value: 'Fewer', highlight: 'warn' },
              { label: 'Best for', value: 'First-time owners' },
            ]}
            pros={['Breathable mesh for warm weather', 'Matched leash included', 'Affordable starter bundle', 'Lightweight']}
            cons={['Fewer adjustment points', 'Lighter buckles than a dedicated H', 'May be outgrown by an escape artist']}
            price="$"
            ctaText="See current price"
            ctaHref="/reviews/best-ferret-harness#picks"
            editorial
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />

          <p className="text-sm text-brand-text-light">
            This guide describes how to choose and fit a harness against published safety criteria; it is not
            individualized advice. A ferret with skin disease, mobility limits, or a recent surgery should have any
            harness use cleared with an exotic-animal veterinarian first.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
