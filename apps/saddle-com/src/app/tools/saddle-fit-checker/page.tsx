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
import { SaddleFitChecker } from './SaddleFitChecker'

const URL = 'https://saddle.com/tools/saddle-fit-checker'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Fit Checker — Guided Self-Assessment | Saddle.com',
  description:
    'Free guided saddle-fit self-assessment: wither clearance, panel contact, gullet, balance and behaviour signs. Educational — a fitter must verify on the horse.',
  path: '/tools/saddle-fit-checker',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Saddle Fit Checker — Guided Self-Assessment',
  description:
    'A guided self-assessment that reads six fit signs — wither clearance, panel contact, gullet width, billet line, balance, and behaviour — into a likely-fits / check-signs / poor-fit read, then says what to measure or who to call next.',
  url: URL,
  imageUrl: 'https://saddle.com/og/tools-saddle-fit-checker.png',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',
})

const howToSchema = buildHowToSchema({
  name: 'How to check if your saddle fits',
  description:
    'Work through six fit signs — wither clearance, panel contact, gullet width over the spine, billet / girth-line position, balance, and the horse\'s movement and behaviour — to decide whether the saddle likely fits, needs watching, or should be assessed by a qualified saddle fitter.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Check wither clearance',
      text: 'Girth the saddle and have a rider mount. Slide your fingers between the pommel and the withers — aim for 2–3 fingers of clearance vertically, and clearance side-to-side, with no contact under a rider.',
    },
    {
      name: 'Check panel contact',
      text: 'Run a flat hand under the panel from front to back on both sides. You want even, full-length contact. A gap in the middle (bridging) or a rocking pivot point concentrates pressure.',
    },
    {
      name: 'Check gullet width over the spine',
      text: 'Look down the gullet channel from front and back. It should clear the spinous processes the full length, with daylight either side of the spine — the panels should never press on the spine.',
    },
    {
      name: 'Check the billet / girth-line position',
      text: 'Girthed up, the billets should hang roughly perpendicular to the ground and settle into the natural girth groove (about a hand\'s width behind the elbow) without dragging the saddle forward or back.',
    },
    {
      name: 'Check balance and seat level',
      text: 'View the saddle from the side on a level surface. The deepest point of the seat should sit level and central, not tipped toward a high pommel or a high cantle.',
    },
    {
      name: 'Read the horse\'s movement and behaviour',
      text: 'Note cold-backed, girthy, or bucking responses, hollowing, reluctance to go forward, and dry or ruffled patches in the sweat pattern after work. These are behavioural fit signals — persistent soreness warrants a veterinary exam.',
    },
    {
      name: 'Read the result and book a fitter if flagged',
      text: 'Any poor-fit sign means stopping and booking a Society of Master Saddlers (SMS) or Master Saddlers Association (MSA) qualified fitter to verify fit on the horse. Persistent back soreness warrants a veterinary exam.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Saddle Fit Checker',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquestrianTool',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free guided saddle-fit self-assessment. The user answers six fit-sign questions — wither clearance, panel contact, gullet width, billet line, balance, and movement/behaviour — and the tool returns a likely-fits / check-signs / poor-fit read plus next steps. Educational only; a qualified fitter must verify on the horse.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '6 evidence-based fit-sign questions',
    'Wither-clearance 2–3 finger rule',
    'Bridging / rocking panel check',
    'Spinal-clearance gullet check',
    'Balance and billet-line checks',
    'Behaviour-signal screen (cold-backed, girthy, bucking)',
    'Routes every poor-fit result to a qualified fitter and, for soreness, a vet',
  ],
  publisher: { '@type': 'Organization', name: 'Saddle.com Editorial', url: 'https://saddle.com' },
}

const schema = combineSchemas(articleSchema, howToSchema, softwareApplicationSchema)

const FAQS = [
  {
    question: 'How do I know if my saddle fits?',
    answer:
      'Check six signs with the horse standing square and a rider mounted: 2–3 fingers of wither clearance, even full-length panel contact (no bridging or rocking), a gullet channel that clears the spine with daylight either side, billets that hang straight into the girth groove, a level central seat, and relaxed behaviour with an even sweat pattern. If any of those reads as poor — or the horse is cold-backed, girthy, or bucking — the saddle should be assessed by a qualified fitter. This self-assessment narrows the question; it does not replace a fitter.',
  },
  {
    question: 'What is the wither-clearance rule for saddle fit?',
    answer:
      'The common rule of thumb is 2–3 fingers of vertical clearance between the pommel and the withers, checked with the saddle girthed and a rider mounted, plus clearance side-to-side so the pommel is not pinching the withers. One finger or less, or contact that only clears when the horse is unmounted, is a warning sign. Clearance is necessary but not sufficient — a saddle can clear the withers and still bridge, rock, or sit unbalanced further back.',
  },
  {
    question: 'Is this checker a substitute for a professional saddle fitter?',
    answer:
      'No. The checker is educational and helps you spot signs and frame questions before a fitting. Confirming fit requires a qualified saddle fitter — a Society of Master Saddlers (SMS) or Master Saddlers Association (MSA) fitter — assessing the saddle statically and under saddle on the horse. Use the result to decide whether to book a fitter and what to show them.',
  },
  {
    question: 'My horse is cold-backed or girthy — is it the saddle?',
    answer:
      'Cold-backed behaviour (dipping or tensing as the saddle goes on), girthiness, bucking, and reluctance to go forward can be fit-related, but they can also signal pain from other causes. Treat them as a reason to involve professionals: book a qualified saddle fitter to check fit, and because persistent back soreness or pain behaviour warrants a veterinary exam, ask your vet to rule out underlying causes. Do not assume it is "just the saddle" or "just behaviour".',
  },
  {
    question: 'How often should I re-check saddle fit?',
    answer:
      'Fit is a snapshot, not a permanent state. Horses change shape with fitness, season, age, and workload, so re-run a fit check at every season change and any time the topline visibly changes. Many fitters recommend a professional review roughly once or twice a year, and sooner after notable weight or muscle change, pregnancy, or a period of stall rest.',
  },
  {
    question: 'What does panel bridging mean?',
    answer:
      'Bridging is when the front and back of the panel touch the horse but the middle does not, leaving a gap. It concentrates pressure at two points instead of spreading load along the whole panel, and it is a common cause of sore spots and uneven sweat patterns. Rocking — a saddle that pivots around a central point — is the related opposite. Both are poor-fit signs that a qualified fitter should address; they are usually not fixable by adding a thicker pad.',
  },
]

export default function SaddleFitCheckerPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Saddle Fit Checker',
        subtitle:
          'A guided self-assessment of six fit signs — wither clearance, panel contact, gullet, billet line, balance, and behaviour. Educational only; a qualified fitter must verify on the horse.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Saddle Fit Checker' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Tree Size Estimator', href: '/tools/tree-size-estimator', category: 'Tool' },
        { title: 'Girth Size Calculator', href: '/tools/girth-size-calculator', category: 'Tool' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The fit checker', href: '#checker' },
              { label: 'Wither-clearance rule', href: '#wither-rule' },
              { label: 'The six fit signs', href: '#signs' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Fit references"
            links={[
              { label: 'Tree Size Estimator', href: '/tools/tree-size-estimator' },
              { label: 'Girth Size Calculator', href: '/tools/girth-size-calculator' },
              { label: '12-Point Saddle Fit Checklist', href: '/saddle-fit-checklist' },
              { label: 'Saddle Fit by Discipline', href: '/fit' },
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Saddle.com fit letter"
            subtitle="Saddle-fit deep-dives. No spam."
            source="saddle-fit-checker"
          />
          <CrossPortfolioCard currentSite="saddle-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="wither-rule">The fast answer: the wither-clearance rule</h2>
        <p>
          The single most-cited saddle-fit check is wither clearance:{' '}
          <strong>
            with the saddle girthed and a rider mounted, you want 2–3 fingers of
            vertical clearance between the pommel and the withers
          </strong>
          , plus clearance side-to-side so the pommel is not pinching. That is
          necessary but not sufficient — a saddle can clear the withers and still
          bridge, rock, or sit unbalanced. The reference table below summarises the
          six signs this checker reads.
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Fit sign</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Looks like a good fit</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Warning sign</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Wither clearance</td><td className="py-2 pr-4">2–3 fingers clear, mounted, no side contact</td><td className="py-2">≤1 finger, or pommel touches under a rider</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Panel contact</td><td className="py-2 pr-4">Even, full-length contact both sides</td><td className="py-2">Bridging (gap in middle) or rocking</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Gullet width</td><td className="py-2 pr-4">Channel clears spine, daylight either side</td><td className="py-2">Panels press on the spinous processes</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Billet / girth line</td><td className="py-2 pr-4">Billets hang straight; saddle stays put</td><td className="py-2">Billets pull forward/back; saddle drifts</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Balance / level seat</td><td className="py-2 pr-4">Deepest point level and central</td><td className="py-2">Tipped to pommel or cantle</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4 font-medium">Movement / behaviour</td><td className="py-2 pr-4">Relaxed; free; even sweat pattern</td><td className="py-2">Cold-backed, girthy, bucking, dry sweat patches</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="checker">The fit checker</h2>
        <p>
          Answer each of the six questions for your saddle on your horse. The
          checker reads your answers into a likely-fits / check-these-signs /
          signs-of-poor-fit result and tells you what to do next. It is educational
          and does not diagnose the horse or replace a qualified fitter.
        </p>
        <SaddleFitChecker />

        <h2 id="signs">The six fit signs, in detail</h2>
        <p>
          <strong>Wither clearance.</strong> The classic 2–3 finger gap, checked
          mounted, is about keeping the pommel off the spinous processes of the
          withers under load. A pad that lifts a too-wide saddle into clearance is
          masking the problem, not solving it.
        </p>
        <p>
          <strong>Panel contact.</strong> Even, full-length contact spreads the
          rider&apos;s weight. Bridging (front and back touch, middle gaps) and
          rocking (the saddle pivots on a central point) both concentrate pressure
          and are leading causes of sore spots.
        </p>
        <p>
          <strong>Gullet width over the spine.</strong> The channel must clear the
          spine its full length with daylight either side. Panels that sit on the
          spinous processes are a clear poor-fit sign.
        </p>
        <p>
          <strong>Billet / girth-line position.</strong> Billets that hang
          perpendicular into the natural girth groove keep the saddle stable. When
          they angle hard, the saddle is being dragged out of position.
        </p>
        <p>
          <strong>Balance / level seat.</strong> A seat tipped to the cantle throws
          the rider back onto the loins; a seat tipped to the pommel tips them onto
          the fork. Both change where load lands.
        </p>
        <p>
          <strong>Movement / behaviour.</strong> Cold-backed, girthy, and bucking
          responses, plus dry or ruffled sweat patches, are the horse&apos;s
          feedback. They can be fit-related or signal pain from other causes —
          which is why persistent soreness warrants a veterinary exam alongside a
          fitter visit.
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The checker maps six categorical inputs to one of three outcome bands. Any
          single &ldquo;poor&rdquo; answer routes to the poor-fit band; two or more
          &ldquo;borderline&rdquo; answers route to the check-signs band; otherwise
          the result is likely-fits. A poor or behaviour-pain answer always defers to
          a qualified fitter, and to a veterinary exam where soreness or pain
          behaviour is present.
        </p>
        <p>
          The checker does <strong>not</strong>:
        </p>
        <ul>
          <li>Diagnose the horse or make any clinical or veterinary claim</li>
          <li>Replace a static or ridden fit assessment by a qualified saddler</li>
          <li>Account for asymmetry (most horses are asymmetric to some degree)</li>
          <li>Account for the rider&apos;s position, weight distribution, or skill</li>
          <li>Measure anything — it reads signs you observe, not numbers</li>
        </ul>
        <p>
          Use the result to decide whether to book a fitter and what to show them. A
          qualified saddler must confirm fit on the horse.
        </p>

        <ArticleSourcesList
          title="Sources"
          sources={[
            {
              label: 'Saddle Fitting Information Pack and Qualified Saddle Fitter directory',
              publisher: 'Society of Master Saddlers (SMS, UK)',
              url: 'https://www.mastersaddlers.co.uk/',
            },
            {
              label: 'Certified Saddle Ergonomist (CSE) / Certified Saddle Fitter program reference',
              publisher: 'Master Saddlers Association (MSA, US)',
              url: 'https://mastersaddlersassociation.com/',
            },
            {
              label: 'Greve, L., & Dyson, S. (2013). The horse-saddle-rider interaction. The Veterinary Journal, 195(3), 275-281.',
              publisher: 'The Veterinary Journal',
              url: 'https://doi.org/10.1016/j.tvjl.2012.10.020',
            },
            {
              label: 'de Cocq, P., van Weeren, P. R., & Back, W. (2006). Effects of girth, saddle and weight on movements of the horse. Equine Veterinary Journal, 38(8), 758-763.',
              publisher: 'Equine Veterinary Journal',
              url: 'https://doi.org/10.2746/042516406X421490',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Saddle.com Editorial cites these as the published basis for the fit-sign
          categories used by the checker. No fitter, saddler, or veterinary
          credentials are claimed for the Saddle.com editorial team.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Once you know the fit picture, narrow tree width with the{' '}
          <Link href="/tools/tree-size-estimator">tree size estimator</Link>, size a
          girth with the <Link href="/tools/girth-size-calculator">girth size calculator</Link>,
          and take the printable{' '}
          <Link href="/saddle-fit-checklist">12-point saddle fit checklist</Link> to
          your fitter visit.
        </p>
      </div>
    </ArticleLayout>
  )
}
