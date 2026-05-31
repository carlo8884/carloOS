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
} from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../../../components/visual/BodyConditionScoreCalculator'

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
              { label: 'BCS reference scale', href: '#scale' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse care"
            links={[
              { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
              { label: 'First Horse Roadmap', href: '/first-horse-roadmap' },
              { label: 'Breed Library', href: '/breeds' },
              { label: 'Disciplines', href: '/disciplines' },
              { label: 'Equine Supplements', href: '/reviews/best-equine-supplements' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="bcs-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="calculator">The calculator</h2>
        <p>
          Score each of the six body areas using the published Henneke 1-9 descriptors. The calculator averages the six scores into an overall BCS, names the condition range, and returns feeding guidance plus underlying-condition flags for the extremes.
        </p>
        <BodyConditionScoreCalculator />

        <h2 id="scale">BCS reference scale (Henneke 1983)</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text">Score</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text">Label</th>
                <th className="text-left py-2 font-semibold text-brand-text">Quick read</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-muted">
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
        <p className="text-sm text-brand-text-muted">
          Horses.com Editorial cites these as the published basis for the Henneke scale, cresty neck score, and feeding-guidance ranges referenced by the calculator. No veterinary examination or diagnosis is implied by the calculator output.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair regular BCS tracking with the <Link href="/first-horse-roadmap">First Horse Roadmap</Link> for new owners and the <Link href="/supplements/joint-supplements">joint supplement reference</Link> for older horses.
        </p>
      </div>
    </ArticleLayout>
  )
}
