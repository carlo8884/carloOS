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
} from '@carloOS/ui'
import { FerretFoodEvaluator } from '../../../components/visual/FerretFoodEvaluator'

const URL = 'https://ferret.com/tools/food-evaluator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Food Evaluator — Is This Kibble Right for Ferrets? | Ferret.com',
  description: 'Paste guaranteed analysis numbers from any kibble bag; the evaluator scores it against published ferret nutrient targets with per-nutrient notes.',
  path: '/tools/food-evaluator',
})

const schema = buildHowToSchema({
  name: 'How to evaluate a kibble for a ferret',
  description:
    'Score the first ingredient and the guaranteed-analysis crude protein, fat, fiber, and ash from the back of any kibble bag against published ferret-husbandry nutrient targets.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Find the guaranteed analysis panel',
      text: 'On the back of every pet food bag, the guaranteed analysis lists minimum crude protein, minimum crude fat, maximum crude fiber, maximum moisture, and (usually) maximum ash.',
    },
    {
      name: 'Find the first ingredient',
      text: 'The ingredient list is in descending order by pre-cooking weight. The first ingredient drives the food\'s biological character — whole meat, named meat meal, named by-product meal, grain, or corn.',
    },
    {
      name: 'Enter the values',
      text: 'Type the percentages into the evaluator and pick the first ingredient from the dropdown.',
    },
    {
      name: 'Read the verdict',
      text: 'The evaluator scores the food against published ferret targets and returns a clear verdict — appropriate, marginal, or avoid — plus per-nutrient notes.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Food Evaluator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'FerretHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive ferret kibble evaluator. Inputs: first ingredient (5 classes), crude protein %, crude fat %, crude fiber %, ash %, moisture %. Outputs: 0-18 score, "appropriate / marginal / avoid" verdict, per-nutrient notes against published ferret husbandry targets.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'First-ingredient analysis (whole meat vs. meat meal vs. by-product vs. grain vs. corn)',
    'Protein target: ≥38% (excellent), ≥35% (acceptable)',
    'Fat target: 18-25%',
    'Fiber ceiling: ≤3%',
    'Ash ceiling: ≤7%',
    'Routes to exotics-experienced vet at the extremes',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const FAQS = [
  {
    question: 'Why are ferret food targets so different from dog or cat food?',
    answer:
      'Ferrets are strict obligate carnivores with a very short gastrointestinal tract (about 5x body length vs. 8-12x in cats). They cannot efficiently digest plant carbohydrates and require higher protein and fat percentages than most kibble formulations provide. Most "ferret food" on the shelf is closer to cat food formulations; many keepers feed a premium grain-free kitten food or a raw / freeze-dried whole-prey diet instead.',
  },
  {
    question: 'What about the AAFCO ferret profile?',
    answer:
      'There is no AAFCO ferret nutrient profile. The AAFCO Cat Food Nutrient Profiles are used as the regulatory proxy in the US; the ferret community has developed higher-protein and higher-fat targets through Marshall Pet Products, Lewington\'s veterinary text, and decades of keeper consensus. The evaluator uses the keeper-consensus targets, not the cat-proxy minimums.',
  },
  {
    question: 'Is grain-free kitten food acceptable?',
    answer:
      'Often yes. A premium grain-free kitten food with named meat or meat meal as the first ingredient, ≥38% protein, ≥18% fat, and ≤3% fiber meets the evaluator\'s "appropriate for ferrets" threshold. Many ferret keepers feed premium kitten food (Wellness CORE, Orijen Cat & Kitten, etc.) instead of marketed-as-ferret kibble. Always verify the panel — not every bag labeled "premium" meets the targets.',
  },
  {
    question: 'Why is corn-first so bad?',
    answer:
      'Ferret pancreatic insulinoma — a tumor of the insulin-producing islet cells — is strongly associated with chronic high-carbohydrate intake in pet ferrets. Corn-first kibble drives blood glucose patterns the ferret pancreas was not evolved to handle. Insulinoma is the most common neoplasia in pet ferrets in the US and the dietary connection is well-documented in the veterinary literature.',
  },
  {
    question: 'What about raw or freeze-dried whole-prey diets?',
    answer:
      'Raw and freeze-dried whole-prey (whole frozen mice, day-old chicks, freeze-dried duck necks, etc.) most closely matches a ferret\'s evolutionary diet. The evaluator targets kibble specifically; raw / whole-prey diets are evaluated differently (food safety, nutrient completeness across the rotation, calcium-to-phosphorus ratio). The Holistic Ferret Forum and Lewington\'s text have detailed guidance.',
  },
  {
    question: 'Is this a substitute for a vet?',
    answer:
      'No. The evaluator is a husbandry tool that helps you read a bag\'s guaranteed analysis against published ferret targets. For a feeding plan — especially for ferrets with insulinoma, adrenal disease, IBD, or other diet-sensitive conditions — work with an exotics-experienced veterinarian.',
  },
]

export default function FerretFoodEvaluatorPage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      hero={{
        title: 'Ferret Food Evaluator',
        subtitle:
          'Paste the guaranteed analysis from any kibble bag. The evaluator scores it against published ferret nutrient targets and returns a clear verdict with per-nutrient notes.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Food Evaluator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The evaluator', href: '#evaluator' },
              { label: 'Ferret nutrient targets', href: '#targets' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Ferret care"
            links={[
              { label: 'First Year Schedule', href: '/first-year-schedule' },
              { label: 'Care Library', href: '/care' },
              { label: 'Behavior Library', href: '/behavior' },
              { label: 'Health Library', href: '/health' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="ferret-com"
            title="Ferret.com keeper letter"
            subtitle="Ferret care references and tool updates."
            source="food-evaluator"
          />
        </>
      }
    
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Reading Food Labels', href: '/diet/reading-food-labels' },
          { title: 'Best Ferret Kibble', href: '/diet/best-ferret-kibble' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
        ]}
>
      <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-01"
            updatedAt="2026-05-01"
            reviewedBy="Editorial team"
          />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="evaluator">The evaluator</h2>
        <p>
          Paste the guaranteed analysis from the back of any kibble bag and pick the first ingredient. The evaluator scores the food against published ferret-husbandry nutrient targets and returns "appropriate / marginal / avoid" with per-nutrient notes.
        </p>
        <FerretFoodEvaluator />

        <h2 id="targets">Ferret nutrient targets</h2>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Nutrient</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Target</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Rationale</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">First ingredient</td><td className="py-2 pr-4">Named meat or meat meal</td><td className="py-2">Obligate carnivore — animal protein must dominate</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Crude protein</td><td className="py-2 pr-4">38-45% (min 35%)</td><td className="py-2">Short GI tract; high amino-acid requirement</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Crude fat</td><td className="py-2 pr-4">18-25%</td><td className="py-2">Primary energy source; satiety</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Crude fiber</td><td className="py-2 pr-4">≤3%</td><td className="py-2">Cannot efficiently ferment plant fiber</td></tr>
              <tr className="border-b border-brand-border/50"><td className="py-2 pr-4">Ash</td><td className="py-2 pr-4">≤7%</td><td className="py-2">Associated with urinary issues at higher levels</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The evaluator scores the food on a 0-18 scale combining first-ingredient quality (0-5) + protein (0-5) + fat (0-4) + fiber (0-3) + ash (0-1). Verdict bands: 14+ "appropriate," 9-13 "marginal," &lt;9 "avoid."
        </p>
        <p>
          The evaluator does <strong>not</strong>:
        </p>
        <ul>
          <li>Account for ingredient source quality beyond the first ingredient — a food can have a meat first ingredient and a long list of low-quality fillers below</li>
          <li>Verify the manufacturer&apos;s guaranteed analysis claims (third-party testing exists but is rare)</li>
          <li>Evaluate raw, freeze-dried, or whole-prey diets (different framework)</li>
          <li>Account for a specific ferret&apos;s medical conditions (insulinoma, adrenal disease, IBD all need vet-supervised dietary management)</li>
          <li>Endorse any specific brand — for editorial reviews see <Link href="/care">care library</Link></li>
        </ul>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Lewington, J. H. (2007). <em>Ferret Husbandry, Medicine and Surgery</em>, 2nd Edition. Saunders.</li>
          <li>Marshall Pet Products published feeding guidance (Marshall Premium Ferret Diet panel + Marshall feeding philosophy documentation).</li>
          <li>AAFCO (Association of American Feed Control Officials) Cat Food Nutrient Profiles — used as the regulatory proxy in the absence of an AAFCO ferret profile.</li>
          <li>Schoemaker, N. J., et al. (multiple). Pancreatic insulinoma in ferrets — published case series and dietary association reviews.</li>
          <li>Holistic Ferret Forum community resources on raw and whole-prey feeding (informally referenced; verify with vet for any specific raw plan).</li>
        </ul>
        <p className="text-sm text-brand-text-mid">
          Ferret.com Editorial cites these as the published basis for the nutrient targets and verdict bands used by the evaluator. No third-party bench-testing of specific brands is performed by Ferret.com.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          For first-time keepers, pair the evaluator with the <Link href="/first-year-schedule">first-year care schedule</Link> and <Link href="/health">health library</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
