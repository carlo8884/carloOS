import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../../../components/visual/BodyConditionScoreCalculator'
import ConditionKit from './ConditionKit'

const URL = 'https://horses.com/tools/body-condition-score'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Body Condition Score Calculator (Henneke) | Horses.com',
  description: 'Free Henneke body condition score (BCS 1-9) calculator. Score six body areas, get overall BCS, condition narrative, and feeding guidance per range.',
  path: '/tools/body-condition-score',
})

const schema = buildHowToSchema({
  name: 'How to body-condition-score a horse on the Henneke scale',
  description:
    'Visually inspect and palpate six body areas (neck, withers, shoulder, ribs, loin, tailhead), score each 1-9 against the published Henneke descriptors, and average to compute the overall body condition score.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Stand the horse square on level footing',
      text: 'Score the horse standing relaxed on flat, level footing. Wet or muddy coats can mask body shape; brush mud off and let the coat settle before scoring.',
    },
    {
      name: 'Score the neck',
      text: 'Look at the crest line and palpate along the side of the neck. Bony / lean / smooth / cresty.',
    },
    {
      name: 'Score the withers',
      text: 'Observe the withers profile from the side; run a hand over the spinous processes.',
    },
    {
      name: 'Score the shoulder',
      text: 'Look at where the shoulder meets the body wall. Prominent / smooth / heavy.',
    },
    {
      name: 'Score the ribs',
      text: 'Palpate firmly along the rib cage. The number of ribs you can feel and how they feel determines the score.',
    },
    {
      name: 'Score the loin',
      text: 'Stand behind the horse and observe the topline. Look for spinous-process prominence vs. level back vs. positive crease.',
    },
    {
      name: 'Score the tailhead',
      text: 'Observe and palpate the tailhead area for prominence vs. soft / bulging fat.',
    },
    {
      name: 'Average the six scores',
      text: 'The overall BCS is the average of the six area scores. Optimal range for most adult horses is BCS 5-6.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Body Condition Score Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive Henneke body condition score (BCS) calculator. Inputs: six body-area descriptors (neck, withers, shoulder, ribs, loin, tailhead). Outputs: overall BCS 1-9, condition narrative, and feeding guidance per range. Flags underlying-condition risk at BCS 1-2 and 8-9.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Henneke 1983 published descriptors for all six body areas',
    'Overall BCS as area-average to one decimal place',
    'Condition narrative + feeding guidance per BCS range',
    'Underlying-condition flag at BCS 1-2 (refeeding syndrome) and 8-9 (EMS / laminitis / PPID risk)',
    'Explicit "BCS is husbandry, not diagnosis" framing',
    'Interactive condition-tracking kit with Amazon shop hops',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'What BCS should my horse be?',
    answer:
      'For most adult horses, BCS 5-6 is the recommended range. Performance horses in moderate-to-heavy work often sit at BCS 5. Easy-keepers and pleasure horses with limited work often drift toward BCS 6-7; sustained BCS 7+ raises laminitis and equine metabolic syndrome (EMS) risk and should be reversed with feed and exercise changes. Pregnant mares in the third trimester and lactating mares may briefly run at BCS 6-7. Hard-keepers, seniors, and horses in heavy work may struggle to maintain BCS 5; below BCS 4 warrants a vet check.',
  },
  {
    question: 'How often should I re-score?',
    answer:
      'Monthly during season transitions when forage quality changes, and any time the ration changes significantly. Use the same person scoring each time to reduce inter-rater variability. Photograph from a consistent angle (side and behind) so changes are visible across photos even when the scorer\'s eye drifts.',
  },
  {
    question: 'Is BCS the same as cresty neck score (CNS)?',
    answer:
      'No. Cresty Neck Score (Carter et al. 2009) is a separate 0-5 scale specifically for the crest, used as a metabolic-risk indicator. A horse can have a moderate overall BCS but a high CNS — a fat-storage pattern strongly associated with insulin dysregulation, EMS, and laminitis risk. If the BCS calculator returns a high score on the Neck area specifically, ask a vet to assess CNS and consider insulin / ACTH testing.',
  },
  {
    question: 'Why does coat length matter?',
    answer:
      'A long winter coat masks body shape. A horse that looks at BCS 6 with a heavy winter coat may actually be BCS 4 underneath. Palpate firmly through the coat (especially over ribs, withers, and spinous processes) rather than relying on visual assessment in winter. Photograph in good light after a thorough grooming.',
  },
  {
    question: 'What about miniature horses, ponies, and donkeys?',
    answer:
      'The Henneke scale was developed on light-breed horses (primarily Quarter Horses and Thoroughbred-type mares in the original 1983 paper). It applies reasonably well to most light breeds. For ponies, miniatures, donkeys, mules, and draft horses, breed-specific scoring scales exist (e.g. the Pearson scale for donkeys) and are more appropriate. Use the Henneke calculator as a starting reference for ponies; consult a vet for body-specific scoring on donkeys and drafts.',
  },
  {
    question: 'Is this a substitute for a vet exam?',
    answer:
      'No. BCS is a husbandry tool — useful for tracking trends, communicating with the vet, and noticing change before it becomes severe. Any horse outside the BCS 4-7 range, any horse whose BCS changes rapidly, and any horse with a high cresty neck score warrants veterinary assessment for underlying disease before changing the ration.',
  },
]

export default function BodyConditionScorePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
        { title: 'Horse Cost of Ownership Calculator', href: '/tools/horse-cost-calculator', category: 'Tools' },
        { title: 'Horse Height Converter', href: '/tools/horse-height-converter', category: 'Tools' },
        { title: 'Feeding the Easy Keeper', href: '/nutrition/feeding-the-easy-keeper' },
        { title: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
        { title: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency', category: 'Tools' },
        { title: 'Horse Age Calculator', href: '/tools/horse-age-calculator', category: 'Tools' },
        { title: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Body Condition Score Calculator',
        subtitle:
          'Score six body areas to compute the standard Henneke 1-9 BCS. Returns condition narrative and feeding guidance per range.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Body Condition Score' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Condition kit', href: '#condition-kit' },
              { label: 'BCS reference scale', href: '#scale' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse care"
            links={[
              { label: 'Weight Calculator', href: '/tools/horse-weight-calculator' },
              { label: 'Feed & Hay Calculator', href: '/tools/horse-feed-calculator' },
              { label: 'Cost of Ownership Calculator', href: '/tools/horse-cost-calculator' },
              { label: 'Feeding the Easy Keeper', href: '/nutrition/feeding-the-easy-keeper' },
              { label: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
              { label: 'Horse Age Calculator', href: '/tools/horse-age-calculator' },
              { label: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2025-05-01"
            updatedAt="2026-09-03"
            reviewedBy="Editorial team"
          />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the worksheet
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse BCS worksheet
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the Henneke worksheet — six area scores, the overall BCS, and the
            six-item condition kit — so you can re-score next month without re-reading
            the descriptors. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse BCS worksheet"
            subtitle="Email the Henneke worksheet — six area scores, overall BCS, and the condition kit. No spam."
            ctaText="Email my horse BCS worksheet"
            source="tools-body-condition-score-under-hero"
          />
        </div>

        <h2 id="calculator">The calculator</h2>
        <p>
          Score each of the six body areas using the published Henneke 1-9 descriptors. The calculator averages the six scores into an overall BCS, names the condition range, and returns feeding guidance plus underlying-condition flags for the extremes.
        </p>
        <BodyConditionScoreCalculator />

        <h2 id="condition-kit">Condition-tracking kit</h2>
        <p>
          Once you have a score, pack the kit that makes the next score repeatable:
          a weight tape, a curry and body brush so you can palpate through the coat,
          a measuring stick, a Henneke chart, a feed scoop or scale, and a slow-feeder
          hay net for the easy keeper drifting above BCS 6. The six-item list below
          is a husbandry starting point — not a ranked product list and not a
          substitute for the ration or exam your veterinarian specifies when BCS
          sits outside 4–7.
        </p>
        <ConditionKit />

        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop the condition kit
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            The six-item list above is a husbandry starting point — weight tape,
            curry and body brush, measuring stick, BCS chart, feed scoop, slow
            feeder — not a ranked product list. Same Amazon search hops as the
            checklist rows. Horses.com earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+weight+tape?s=tools-body-condition-score"
              amazonLabel="Browse horse weight tapes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+curry+comb+body+brush?s=tools-body-condition-score"
              amazonLabel="Browse horse curry combs and body brushes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+measuring+stick?s=tools-body-condition-score"
              amazonLabel="Browse horse measuring sticks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+body+condition+score+chart?s=tools-body-condition-score"
              amazonLabel="Browse horse BCS charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+feed+scoop+scale?s=tools-body-condition-score"
              amazonLabel="Browse feed scoops and scales on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/slow+feeder+hay+net+horse?s=tools-body-condition-score"
              amazonLabel="Browse slow-feeder hay nets on Amazon →"
            />
          </div>
        </div>

        <h2 id="scale">BCS reference scale (Henneke 1983)</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Score</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Label</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Quick read</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">Poor</td><td className="py-2">Emaciated; bony structure prominent throughout</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">Very thin</td><td className="py-2">Emaciated; slight fat covering</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">Thin</td><td className="py-2">Ribs easily discernible; thin</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">Moderately thin</td><td className="py-2">Faint outline of ribs; lean</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">5</td><td className="py-2 pr-4">Moderate</td><td className="py-2">Optimal — ribs cannot be seen but easily palpable</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">6</td><td className="py-2 pr-4">Moderately fleshy</td><td className="py-2">Acceptable for light work; fat starting to feel spongy</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">7</td><td className="py-2 pr-4">Fleshy</td><td className="py-2">Overweight; metabolic risk rising</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">8</td><td className="py-2 pr-4">Fat</td><td className="py-2">Significant metabolic / laminitis risk</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">9</td><td className="py-2 pr-4">Extremely fat</td><td className="py-2">High laminitis risk; vet management warranted</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The calculator uses the published Henneke descriptors for each of the six body areas. Each area gets a 1-9 score from its descriptor; the overall BCS is the simple average of the six.
        </p>
        <p>
          The model does <strong>not</strong>:
        </p>
        <ul>
          <li>Adjust for breed-specific conformation (drafts and ponies look different at the same Henneke score)</li>
          <li>Adjust for coat length (winter coats mask body shape — palpate firmly)</li>
          <li>Replace inter-rater calibration (two scorers can disagree by 0.5-1.0 BCS on the same horse)</li>
          <li>Score the cresty neck on the Carter 2009 0-5 scale — that is a separate companion assessment</li>
          <li>Diagnose underlying disease (rapid BCS changes, persistent BCS 1-2, or BCS 8-9 warrant a vet exam)</li>
        </ul>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Henneke, D. R., Potter, G. D., Kreider, J. L., &amp; Yeates, B. F. (1983). Relationship between condition score, physical measurements and body fat percentage in mares. <em>Equine Veterinary Journal</em>, 15(4), 371-372.</li>
          <li>Carter, R. A., Geor, R. J., Burton Staniar, W., Cubitt, T. A., &amp; Harris, P. A. (2009). Apparent adiposity assessed by standardised scoring systems and morphometric measurements in horses and ponies. <em>The Veterinary Journal</em>, 179(2), 204-210.</li>
          <li>National Research Council (NRC) (2007). <em>Nutrient Requirements of Horses, Sixth Revised Edition</em>. National Academies Press.</li>
          <li>Frank, N., Geor, R. J., Bailey, S. R., Durham, A. E., &amp; Johnson, P. J. (2010). Equine metabolic syndrome. <em>Journal of Veterinary Internal Medicine</em>, 24(3), 467-475.</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for the Henneke scale, cresty neck score, and feeding-guidance ranges referenced by the calculator. No veterinary examination or diagnosis is implied by the calculator output.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair regular BCS tracking with the <Link href="/tools/horse-weight-calculator">horse weight calculator</Link> and the <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link> to turn condition changes into ration adjustments. Fold the kit into the monthly budget with the <Link href="/tools/horse-cost-calculator">horse cost of ownership calculator</Link>. Match the score to a foal / young / adult / senior label on the <Link href="/tools/horse-age-calculator">horse age calculator</Link> — a planning reference, not a diagnosis. If a horse that was just scored suddenly looks painful or off, the <Link href="/tools/is-this-a-horse-emergency">horse emergency sign-list</Link> is a conservative triage aid — not a diagnosis. For a facial pain-watch, the <Link href="/tools/horse-grimace-scale">horse grimace scale</Link> is a planning reference, not a diagnosis. New owners can start with the <Link href="/first-horse-roadmap">First Horse Roadmap</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
