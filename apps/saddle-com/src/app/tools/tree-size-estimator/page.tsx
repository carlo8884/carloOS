import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { TreeSizeEstimator } from '../../../components/visual/TreeSizeEstimator'

const URL = 'https://saddle.com/tools/tree-size-estimator'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Tree Size Estimator — English & Western | Saddle.com',
  description: 'Free starting tree-size estimate from horse type, withers profile, and back length. Estimator only — a qualified fitter must verify on the horse.',
  path: '/tools/tree-size-estimator',
})

const schema = buildHowToSchema({
  name: 'How to estimate a starting saddle tree size',
  description:
    'Use horse type / conformation, withers profile, and back length to estimate an English gullet width or Western bar width as a starting reference before a qualified fitter verifies on the horse.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Identify the horse type',
      text: 'Choose the conformation group that best matches the horse — Thoroughbred / Arab, sport horse / warmblood, Quarter Horse / stock type, cob / draft cross, or pony.',
    },
    {
      name: 'Read the withers profile',
      text: 'Stand the horse square and look across the withers. High and narrow, medium, or flat / mutton — each changes which trees clear the spinous processes under load.',
    },
    {
      name: 'Note the back length',
      text: 'Short backs limit seat size and flap length. Long backs invite saddles to sit too far back over the loin (a leading cause of behavioural fit issues).',
    },
    {
      name: 'Read the starting tree estimate',
      text: 'Use the recommended English gullet width or Western bar width as the starting point in a fitter visit — not as a purchase decision.',
    },
    {
      name: 'Book a qualified fitter',
      text: 'A Society of Master Saddlers (SMS) or Master Saddlers Association (MSA) qualified fitter must verify fit on the horse, statically and under saddle.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Saddle Tree Size Estimator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquestrianTool',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free starting saddle-tree estimator. Inputs: horse type / conformation, withers profile, back length, English vs Western style. Outputs a starting English gullet width or Western bar width plus fit-risk notes. Estimator only — qualified saddler verification required.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '5 horse-type conformation groups',
    '3 wither profiles (high-narrow / medium / flat-mutton)',
    '3 back-length classes',
    'English gullet-width recommendation',
    'Western bar-width recommendation',
    'Fit-risk banner when conformation falls outside off-the-rack norms',
  ],
  publisher: { '@type': 'Organization', name: 'Saddle.com Editorial', url: 'https://saddle.com' },
}

const FAQS = [
  {
    question: 'Is this a substitute for a qualified saddle fitter?',
    answer:
      'No. The estimator gives a starting tree-size based on horse type, wither profile, and back length. Static and ridden assessment on the horse is the only way to confirm fit. Use the estimator to narrow the shortlist; book a Society of Master Saddlers (SMS) or Master Saddlers Association (MSA) fitter to confirm.',
  },
  {
    question: 'Why does Quarter Horse vs Thoroughbred make such a big difference?',
    answer:
      'Stock-breed conformation typically has wider shoulders and flatter withers, while Thoroughbreds and Arabs typically have higher and narrower withers. English trees use gullet width (N / MN / M / MW / W / XW), and Western trees use bar shape (Semi-Quarter Horse, Full Quarter Horse, Arab, Draft, etc.) to accommodate these differences. Selecting the wrong family is the single biggest source of off-the-rack fit failures.',
  },
  {
    question: 'My horse has flat / mutton withers. Will any off-the-rack saddle fit?',
    answer:
      'Often not. Flat or mutton withers struggle with standard English trees and frequently need a wide or hoop tree. Some manufacturers specialize in this conformation (e.g. WOW, Schleese Wave). A fitter consultation before purchase is strongly recommended — these horses are the most common returns at off-the-rack retailers.',
  },
  {
    question: 'What does "thoracic span" mean for back length?',
    answer:
      'The horse\'s saddle-bearing region runs from the highest part of the wither (T4-T5) to the last weight-bearing rib (T18). The lumbar region behind T18 is not designed to carry weight. A saddle whose panel extends behind T18 puts pressure on the loin and is a leading cause of behavioural fit issues. Short, medium, and long backs in the estimator refer to this T4-T18 span.',
  },
  {
    question: 'Does seat size scale with horse size?',
    answer:
      'Seat size is sized to the rider, not the horse. Tree size is sized to the horse. The two are independent. The estimator only addresses tree size; rider seat size (16, 16.5, 17, 17.5, 18 inches in English) is selected separately based on the rider\'s thigh length and seat-bone position.',
  },
  {
    question: 'My horse changed shape — do I need a new saddle?',
    answer:
      'Possibly. Reflocking, gusset changes, and tree adjustments can accommodate moderate changes (typical fitness gain or loss). Large changes — pregnancy, prolonged stall rest, significant muscle development under correct work — often require a new tree. A fitter should reassess at every season change and any time the horse\'s topline visibly changes.',
  },
]

export default function TreeSizeEstimatorPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Saddle Tree Size Estimator',
        subtitle:
          'Starting English / Western tree-size estimate from horse type, withers profile, and back length. Estimator only — a qualified fitter must verify on the horse.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Tree Size Estimator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Saddle Fit Checker', href: '/tools/saddle-fit-checker', category: 'Tool' },
        { title: 'Girth Size Calculator', href: '/tools/girth-size-calculator', category: 'Tool' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        { title: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide', category: 'Buying' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The estimator', href: '#estimator' },
              { label: 'English gullet widths', href: '#english' },
              { label: 'Western bar widths', href: '#western' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Fit references"
            links={[
              { label: 'Saddle Fit Checker', href: '/tools/saddle-fit-checker' },
              { label: 'Girth Size Calculator', href: '/tools/girth-size-calculator' },
              { label: '12-Point Saddle Fit Checklist', href: '/saddle-fit-checklist' },
              { label: 'Saddle Fit by Discipline', href: '/fit' },
              { label: 'Saddle Brand Database', href: '/brands' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="saddle-com"
            title="Saddle.com fit letter"
            subtitle="Saddle-fit deep-dives. No spam."
            source="tree-size-estimator"
          />
          <CrossPortfolioCard currentSite="saddle-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="estimator">The estimator</h2>
        <p>
          Pick the conformation group, withers profile, back length, and saddle style. The estimator suggests a starting English gullet width or Western bar width, plus risk flags when the horse falls outside the off-the-rack norm.
        </p>
        <TreeSizeEstimator />

        <h2 id="english">English gullet widths at a glance</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Width</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Code (UK)</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Typical conformation</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Narrow</td><td className="py-2 pr-4">N / 29</td><td className="py-2">Fine-boned Thoroughbreds, Arabs with high narrow withers</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Medium-Narrow</td><td className="py-2 pr-4">MN / 30</td><td className="py-2">Average Thoroughbreds, lighter Arabs, lighter sport types</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Medium</td><td className="py-2 pr-4">M / 31</td><td className="py-2">Average sport horse / warmblood</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Medium-Wide</td><td className="py-2 pr-4">MW / 32</td><td className="py-2">Heavier warmbloods, lighter stock-type</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Wide</td><td className="py-2 pr-4">W / 33</td><td className="py-2">Quarter Horses, broader-shouldered cobs</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Extra-Wide / Hoop</td><td className="py-2 pr-4">XW / 34+ / hoop</td><td className="py-2">Cobs, draft crosses, flat / mutton withers</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="western">Western bar widths at a glance</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Bar</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Approximate gullet</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Typical conformation</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Arab / Semi-Quarter</td><td className="py-2 pr-4">6.25"-6.5"</td><td className="py-2">Arabs, lighter Thoroughbreds, narrower stock types</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Full Quarter Horse</td><td className="py-2 pr-4">6.75"-7"</td><td className="py-2">Average Quarter Horses, broader sport horses</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Wide / Draft</td><td className="py-2 pr-4">7"-7.5"</td><td className="py-2">Cobs, draft crosses, gaited draft types</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The estimator uses three published categorical inputs — horse type / conformation group, withers profile, and back length — and returns a recommended starting tree-size category. The model is rule-based, not measurement-based.
        </p>
        <p>
          The estimator does <strong>not</strong>:
        </p>
        <ul>
          <li>Replace a static or ridden fit assessment by a qualified saddler</li>
          <li>Account for asymmetry (most horses are asymmetric to some degree)</li>
          <li>Account for muscle change over a season</li>
          <li>Account for any rider-specific factor (rider weight distribution, seat position, leg length)</li>
          <li>Account for brand-specific tree shape (two "Medium" trees from different makers can differ noticeably in spinal clearance and panel width)</li>
        </ul>
        <p>
          Use the output as a shortlisting tool. A qualified saddler must confirm fit on the horse.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Society of Master Saddlers (SMS, UK) — qualified-saddler directory and the SMS Saddle Fitting Information Pack.</li>
          <li>Master Saddlers Association (MSA, US) — Certified Saddle Ergonomist (CSE) curriculum reference.</li>
          <li>de Cocq, P., van Weeren, P. R., &amp; Back, W. (2006). Effects of girth, saddle and weight on movements of the horse. <em>Equine Veterinary Journal</em>, 38(8), 758-763.</li>
          <li>Greve, L., &amp; Dyson, S. (2013). The horse-saddle-rider interaction. <em>The Veterinary Journal</em>, 195(3), 275-281.</li>
          <li>Manufacturer fit guidance referenced under <Link href="/brands">Saddle Brand Database</Link>, drawn from each brand&apos;s published fitter materials.</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Saddle.com Editorial cites these as the published basis for the conformation-group and tree-width categories used by the estimator. No fitter or saddler credentials are claimed for the Saddle.com editorial team.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair this estimator with the printable <Link href="/saddle-fit-checklist">12-Point Saddle Fit Checklist</Link> at your fitter visit.
        </p>
      </div>
    </ArticleLayout>
  )
}
