import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildHowToSchema,
  combineSchemas,
  ArticleLayout,
  ArticleSourcesList,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { GirthSizeCalculator } from './GirthSizeCalculator'

const URL = 'https://saddle.com/tools/girth-size-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Girth Size Calculator — Dressage & Jump | Saddle.com',
  description:
    'Free girth size calculator. Pick saddle type and horse size, or enter a measurement, for a recommended girth length in inches and cm, with a sizing chart.',
  path: '/tools/girth-size-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Girth Size Calculator — Dressage & Jump',
  description:
    'Recommend a girth length from saddle type (long/dressage vs short/jump) and horse size, or from a billet-to-billet measurement, with a sizing reference chart in inches and centimetres.',
  url: URL,
  imageUrl: 'https://saddle.com/og/tools-girth-size-calculator.png',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',
})

const howToSchema = buildHowToSchema({
  name: 'How to calculate girth size',
  description:
    'Choose the right girth length by identifying whether your saddle takes a long (dressage / monoflap) or short (jump / GP / close-contact) girth, then matching your horse\'s size or a billet-to-billet measurement to a recommended length.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Identify long vs short girth',
      text: 'Dressage and monoflap saddles have long billets and take a long girth that buckles low near the elbow. Jump, GP, and close-contact saddles have short billets under a long flap and take a short girth that buckles up under the flap.',
    },
    {
      name: 'Measure or pick your horse size',
      text: 'Either run a soft tape from one billet ring, under the belly in the girth groove, to the other billet ring, or choose the horse-size band (pony, cob, horse, large horse, warmblood/XL).',
    },
    {
      name: 'Read the recommended length',
      text: 'The calculator returns a recommended girth length in inches and centimetres, snapped to the nearest even size that girths up on the middle holes.',
    },
    {
      name: 'Allow one size either way',
      text: 'Aim to girth on the middle holes so you can go tighter or looser as the horse changes condition. If between sizes, size up — too low on a jump saddle or too high on a dressage saddle causes rubs.',
    },
    {
      name: 'Confirm against the brand chart',
      text: 'Girth sizing varies by manufacturer. Check the specific brand\'s size chart and, where possible, try the girth on the horse before buying.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Girth Size Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquestrianTool',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free girth size calculator. Inputs: saddle type (long dressage/monoflap vs short jump/GP/close-contact) and horse size band, or a measured billet-to-billet length. Outputs a recommended girth length in inches and centimetres with a sizing chart.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Long (dressage / monoflap) vs short (jump / GP) girth logic',
    '5 horse-size bands from pony to warmblood/XL',
    'Estimate-by-size and measure-it modes',
    'Inches and centimetres output',
    'Snaps to even sizes on the middle holes',
    'Sizing reference chart by saddle type',
  ],
  publisher: { '@type': 'Organization', name: 'Saddle.com Editorial', url: 'https://saddle.com' },
}

const schema = combineSchemas(articleSchema, howToSchema, softwareApplicationSchema)

const FAQS = [
  {
    question: 'What size girth do I need?',
    answer:
      'It depends on two things: whether your saddle takes a long or short girth, and your horse\'s barrel size. A dressage or monoflap saddle takes a long girth — roughly 42–48" for a cob, 48–54" for an average horse, and 56–60" for a warmblood or draft. A jump, GP, or close-contact saddle takes a short girth — roughly 22–24" for a cob, 24–28" for an average horse, and 30–34" for a warmblood. Aim to girth up on the middle holes, and if you are between sizes, size up.',
  },
  {
    question: 'What is the difference between a long girth and a short girth?',
    answer:
      'A long (dressage) girth buckles low, near the horse\'s elbow, because dressage and monoflap saddles have long billets. A short girth buckles high, up under the saddle flap, because jump, GP, and close-contact saddles have short billets under a long flap. They are not interchangeable: using a short girth on a dressage saddle, or a long girth on a jump saddle, puts the buckles in the wrong place and causes rubs and instability.',
  },
  {
    question: 'How do I measure for a girth?',
    answer:
      'With the saddle on the horse and the billets hanging, run a soft measuring tape from one billet ring, under the belly through the natural girth groove (about a hand\'s width behind the elbow), up to the billet ring on the other side. That distance is your girth length. Snap up to the nearest even inch — girths are sold in even sizes — and you want the buckles to settle on the middle holes when girthed.',
  },
  {
    question: 'Should I size up or down if I am between girth sizes?',
    answer:
      'Size up. You want to girth on the middle holes so there is room to take it up or let it out as the horse gains or loses condition through the season. A girth that is too short forces the buckles too low on a jump saddle (rubbing the elbow) or runs out of holes on a dressage saddle; a slightly longer girth simply girths on a higher hole.',
  },
  {
    question: 'Why do girth sizes differ between brands?',
    answer:
      'Manufacturers measure and label girths differently — some quote buckle-to-buckle, others end-to-end including elastic, and stud-guard or anatomic shapes change the effective length. Treat any size chart, including this one, as a starting point, then confirm against the specific brand\'s own chart and, where possible, try the girth on the horse before buying.',
  },
  {
    question: 'Does girth type affect saddle fit?',
    answer:
      'Yes, indirectly. A girth that is the wrong length or sits outside the natural girth groove can pull the saddle forward or sideways, undoing an otherwise good fit. An anatomic or shaped girth can relieve pressure behind the elbow on some horses. Girth choice does not fix a poorly fitting saddle, though — if the saddle drifts or the horse is girthy, check fit with the saddle fit checker and a qualified fitter.',
  },
]

export default function GirthSizeCalculatorPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Girth Size Calculator',
        subtitle:
          'Recommended girth length from saddle type and horse size, or from a measurement — in inches and centimetres, with a sizing chart.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Girth Size Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Saddle Fit Checker', href: '/tools/saddle-fit-checker', category: 'Tool' },
        { title: 'Tree Size Estimator', href: '/tools/tree-size-estimator', category: 'Tool' },
        { title: 'Saddle Accessories', href: '/accessories', category: 'Tack' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Girth size chart', href: '#chart' },
              { label: 'The calculator', href: '#calculator' },
              { label: 'Long vs short girths', href: '#long-short' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Related tools"
            links={[
              { label: 'Saddle Fit Checker', href: '/tools/saddle-fit-checker' },
              { label: 'Tree Size Estimator', href: '/tools/tree-size-estimator' },
              { label: '12-Point Saddle Fit Checklist', href: '/saddle-fit-checklist' },
              { label: 'Saddle Accessories', href: '/accessories' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Saddle.com fit letter"
            subtitle="Saddle-fit deep-dives. No spam."
            source="girth-size-calculator"
          />
          <CrossPortfolioCard currentSite="saddle-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="chart">Girth size chart, at a glance</h2>
        <p>
          The fast answer:{' '}
          <strong>
            dressage and monoflap saddles take a long girth that buckles low near
            the elbow; jump, GP, and close-contact saddles take a short girth that
            buckles high under the flap.
          </strong>{' '}
          The table below gives typical lengths by horse size for each. These are
          starting points — barrel shape and brand both shift the result.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Horse size</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Approx. height</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Long girth (dressage / monoflap)</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Short girth (jump / GP)</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Pony</td><td className="py-2 pr-4">under ~14.2 hh</td><td className="py-2 pr-4">36"–42"</td><td className="py-2">18"–22"</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Cob / small horse</td><td className="py-2 pr-4">~14.2–15.2 hh</td><td className="py-2 pr-4">42"–48"</td><td className="py-2">22"–24"</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Horse (average)</td><td className="py-2 pr-4">~15.2–16.2 hh</td><td className="py-2 pr-4">48"–54"</td><td className="py-2">24"–28"</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Large horse</td><td className="py-2 pr-4">~16.2–17 hh</td><td className="py-2 pr-4">54"–56"</td><td className="py-2">28"–30"</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Warmblood / draft / XL</td><td className="py-2 pr-4">~17 hh and up</td><td className="py-2 pr-4">56"–60"</td><td className="py-2">30"–34"</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-brand-text-mid">
          Girths come in even sizes (e.g. 24&quot;, 26&quot;, 28&quot;). Aim to girth on the middle holes; if between sizes, size up. 1 inch = 2.54 cm.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Choose your saddle type, then either pick your horse&apos;s size band or
          switch to &ldquo;I measured it&rdquo; and enter a billet-to-billet length.
          The calculator returns a recommended girth length in inches and
          centimetres.
        </p>
        <GirthSizeCalculator />

        <h2 id="long-short">Long vs short girths — why it matters</h2>
        <p>
          The single biggest sizing mistake is buying the wrong <em>type</em> of
          girth. Dressage and monoflap saddles use long billets, so the girth has to
          be long enough to buckle down near the elbow, below the flap. Jump, GP, and
          close-contact saddles use short billets hidden under a long flap, so the
          girth is short and buckles up under the flap, out of the rider&apos;s way.
        </p>
        <p>
          Putting a short girth on a dressage saddle leaves the billets dangling with
          no reach; putting a long girth on a jump saddle buckles down by the elbow
          where it rubs and bulges under the leg. Get the type right first, then size.
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The estimate mode maps a horse-size band and saddle type to a typical
          length range, then returns the mid-point snapped to the nearest even inch.
          The measure mode snaps your billet-to-billet measurement up to the nearest
          even inch. Centimetres are a direct 1&quot; = 2.54 cm conversion.
        </p>
        <p>
          The calculator does <strong>not</strong>:
        </p>
        <ul>
          <li>Account for barrel shape (well-sprung vs slab-sided ribs shift the length)</li>
          <li>Account for anatomic, stud-guard, or shaped girths that measure differently</li>
          <li>Normalise the way each brand labels its sizes</li>
          <li>Replace trying the girth on the horse</li>
        </ul>
        <p>
          Use the output as a starting size, then confirm against the brand&apos;s own
          chart and a try-on.
        </p>

        <ArticleSourcesList
          title="Sources"
          sources={[
            {
              label: 'Saddle Fitting Information Pack (girth groove and billet guidance)',
              publisher: 'Society of Master Saddlers (SMS, UK)',
              url: 'https://www.mastersaddlers.co.uk/',
            },
            {
              label: 'Certified Saddle Fitter program reference',
              publisher: 'Master Saddlers Association (MSA, US)',
              url: 'https://mastersaddlersassociation.com/',
            },
            {
              label: 'Murray, R., et al. (2017). Girth pressure measurements reveal high peak pressures that can be avoided using an alternative girth design. The Veterinary Journal, 220, 96-102.',
              publisher: 'The Veterinary Journal',
              url: 'https://doi.org/10.1016/j.tvjl.2016.12.001',
            },
            {
              label: 'de Cocq, P., van Weeren, P. R., & Back, W. (2006). Effects of girth, saddle and weight on movements of the horse. Equine Veterinary Journal, 38(8), 758-763.',
              publisher: 'Equine Veterinary Journal',
              url: 'https://doi.org/10.2746/042516406X421490',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Saddle.com Editorial cites these as the published basis for the girth-type
          and girth-groove guidance used by the calculator, alongside manufacturer
          sizing charts. No fitter or saddler credentials are claimed for the
          Saddle.com editorial team.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          A girth supports a saddle but cannot fix a poor fit. Check the saddle with
          the <Link href="/tools/saddle-fit-checker">saddle fit checker</Link>, narrow
          tree width with the{' '}
          <Link href="/tools/tree-size-estimator">tree size estimator</Link>, and see
          the <Link href="/accessories">saddle accessories</Link> reference for
          girths, pads, and leathers.
        </p>
      </div>
    </ArticleLayout>
  )
}
