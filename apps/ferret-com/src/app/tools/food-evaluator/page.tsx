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
    'Shoppable food kit via Amazon category searches (high-protein ferret kibble, freeze-dried raw treats, salmon oil)',
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
              { label: 'Shop a bag', href: '#shop-the-bag' },
              { label: 'Ferret nutrient targets', href: '#targets' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Ferret care"
            links={[
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator' },
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score' },
              { label: 'First Year Schedule', href: '/first-year-schedule' },
              { label: 'Care Library', href: '/care' },
              { label: 'Behavior Library', href: '/behavior' },
              { label: 'Health Library', href: '/health' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="ferret-com"
            title="Ferret kibble panel checklist"
            subtitle="Email the protein / fat / fiber / ash targets so you can score a bag in the aisle."
            ctaText="Email my ferret food checklist"
            source="tools-food-evaluator-sidebar"
          />
          <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="sidebar" />
        </>
      }
    
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Reading Food Labels', href: '/diet/reading-food-labels' },
          { title: 'Best Ferret Kibble', href: '/diet/best-ferret-kibble' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator' },
          { title: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score' },
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

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <section className="not-prose mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the panel
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret kibble panel checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the protein / fat / fiber / ash targets and the first-ingredient
            rule so you can score a bag in the aisle without re-opening this page.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret kibble panel checklist"
            subtitle="Email the protein / fat / fiber / ash targets and the first-ingredient rule so you can score a bag in the aisle. No spam."
            ctaText="Email my ferret food checklist"
            source="tools-food-evaluator-under-hero"
          />
        </section>

        <h2 id="evaluator">The evaluator</h2>
        <p>
          Paste the guaranteed analysis from the back of any kibble bag and pick the first ingredient. The evaluator scores the food against published ferret-husbandry nutrient targets and returns "appropriate / marginal / avoid" with per-nutrient notes.
        </p>
        <FerretFoodEvaluator />

        {/* Money path — live amazon-brand search hops (kibble / freeze-dried treats / oil).
            Reuses the high-protein kibble query already shipped on cost + readiness.
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
        <section id="shop-the-bag" className="not-prose my-8">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a bag that fits the panel
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are a shopping starting point after
              you score a bag — high-protein ferret kibble, freeze-dried raw
              meat treats, and salmon oil as a topper / nail-trim aid. They are
              not a ranked product list and not invented inventory. Confirm the
              guaranteed analysis on the exact bag; the evaluator does not
              endorse a brand. Same kibble hop used on the{' '}
              <Link href="/diet/best-ferret-kibble" className="text-brand-primary underline-offset-2 hover:underline">
                kibble guide
              </Link>
              {' '}and the{' '}
              <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                cost calculator
              </Link>
              . Treats belong on top of a meat-first staple, not in place of
              it — see{' '}
              <Link href="/diet/safe-treats" className="text-brand-primary underline-offset-2 hover:underline">
                safe treats
              </Link>
              . Ferret.com earns a commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/high+protein+ferret+food+kibble?s=tools-food-evaluator"
                amazonLabel="Browse high-protein ferret kibble on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/freeze+dried+raw+ferret+treats?s=tools-food-evaluator"
                amazonLabel="Browse freeze-dried raw ferret treats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/salmon+oil+ferret?s=tools-food-evaluator"
                amazonLabel="Browse ferret salmon oil on Amazon →"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through an Amazon link — at no extra cost to you, and we never
            rank by commission. Empty Chewy buttons stay hidden.
          </p>
        </section>

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

        <div className="mt-8 rounded-lg border border-brand-border bg-brand-primary-pale/30 p-6 sm:p-7 not-prose">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Food sorted — what about the rest?</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-brand-text-dark">
            Get the day-one setup right
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">
            The evaluator settles the food question. Food is one line of a new ferret&apos;s setup,
            though — the ferret starter essentials list covers what else a ferret needs on day one:
            cage, bedding, litter, food and water bowls, and a carrier.
          </p>
          <p className="mt-3 text-2xs leading-relaxed text-brand-text-light">
            The essentials page includes affiliate links; we may earn a commission at no extra cost to
            you, and we never accept payment for favorable placement.{' '}
            <Link href="/disclosure" className="font-medium text-brand-primary underline-offset-2 hover:underline">
              Disclosure
            </Link>.
          </p>
          <Link
            href="/ferret-starter-kit"
            className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-brand-primary-dark"
          >
            See the ferret starter essentials
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p className="mt-8 text-sm">
          For first-time keepers, pair the evaluator with the <Link href="/first-year-schedule">first-year care schedule</Link>, the <Link href="/tools/ferret-age-calculator">ferret age calculator</Link> for a life-stage label, the <Link href="/tools/ferret-body-condition-score">ferret body condition score</Link> for a 1–9 planning read, and the <Link href="/health">health library</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
