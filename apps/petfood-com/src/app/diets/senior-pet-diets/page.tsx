import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Senior Dog and Cat Diets — What Changes | PetFood.com',
  description:
    'What senior nutrition means without an AAFCO senior life stage — the energy and protein debate, muscle mass, and tailoring to age-related disease.',
  path: '/diets/senior-pet-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Senior Dog and Cat Diets — What Changes | PetFood.com',
  description:
    'What senior nutrition actually means without an AAFCO senior life stage, the energy and protein debate, supporting muscle mass, and tailoring to age-related disease.',
  url: 'https://petfood.com/diets/senior-pet-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
    {
      label: "AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management",
      url: "https://www.aaha.org/veterinary-resources/guidelines/",
      publisher: "American Animal Hospital Association / American College of Veterinary Internal Medicine",
    },
]

export default function SeniorPetDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Senior Pet Diets',
        subtitle:
          'Senior is the most-marketed and least-regulated label on a pet food bag. There is no AAFCO senior life stage, so a senior diet can legally be almost anything. The real nutritional questions of aging — preserving muscle, adjusting calories, and tailoring to emerging disease — are more nuanced than the bag suggests. This page separates the marketing from the physiology.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'There Is No AAFCO Senior Stage', href: '#noaafco' },
              { label: 'What Changes with Age', href: '#changes' },
              { label: 'The Protein Debate', href: '#protein' },
              { label: 'Energy and Body Condition', href: '#energy' },
              { label: 'Tailoring to Disease', href: '#disease' },
              { label: 'Choosing a Senior Food', href: '#choosing' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
              { label: 'Joint and Mobility Diets', href: '/diets/joint-and-mobility-diets' },
              { label: 'Pet Food by Life Stage', href: '/life-stage' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="senior-pet-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>Dogs and cats are generally considered senior in the last quarter to third of their expected lifespan — roughly 7 years and up for many dogs (earlier for giant breeds), and 10 to 11 years and up for cats, with cats over 15 sometimes termed geriatric. Aging brings real physiological changes, but the senior pet food category is unregulated, and a senior diet must be evaluated on its actual formulation, not its label claim.</p>
        <h2 id="noaafco">There Is No AAFCO Senior Stage</h2>
        <p>AAFCO recognizes growth, reproduction, adult maintenance, and all life stages — there is no senior or mature category. A food labeled senior is sold under the adult-maintenance designation, and its nutrient profile need only meet the adult-maintenance minimums. This means senior diets vary enormously: some are lower in calories, some higher in protein, some add joint or cognitive support, and some differ from the brand&apos;s adult food only in name. See <a href="/life-stage">Pet Food by Life Stage</a>.</p>
        <h2 id="changes">What Changes with Age</h2>
        <p>Aging animals tend to lose lean muscle mass (sarcopenia), may digest and absorb nutrients less efficiently, are more prone to dental disease affecting food choice, and have a rising prevalence of chronic conditions — kidney disease and hyperthyroidism in cats, osteoarthritis and cognitive decline in dogs. Nutritional needs in old age are therefore better individualized than generalized.</p>
        <h2 id="protein">The Protein Debate</h2>
        <p>Older thinking restricted protein in healthy seniors out of concern for the kidneys, but current evidence does not support protein restriction in healthy older animals — adequate high-quality protein helps counter age-related muscle loss. Protein restriction is appropriate for animals with diagnosed kidney disease, but that is a disease-specific decision, not a blanket senior recommendation. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a> and <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>
        <h2 id="energy">Energy and Body Condition</h2>
        <p>Many middle-aged and early-senior animals have lower energy needs and are prone to weight gain, favoring a lower-calorie diet. But the oldest animals often have the opposite problem — reduced appetite, weight loss, and muscle wasting — and need energy- and protein-dense, palatable food to maintain condition. Body condition and muscle assessment, not age alone, should drive the calorie decision. See <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="disease">Tailoring to Disease</h2>
        <p>The most valuable nutritional decisions in old age are condition-specific: a renal diet for diagnosed kidney disease, a joint diet with omega-3s and glucosamine for osteoarthritis, a diet supporting cognitive function (with antioxidants and medium-chain triglycerides) for canine cognitive dysfunction. These are targeted interventions tied to a diagnosis, far more useful than a generic senior label. See <a href="/diets/joint-and-mobility-diets">Joint and Mobility Diets</a>.</p>
        <h2 id="choosing">Choosing a Senior Food</h2>
        <p>Because senior is unregulated, evaluate the actual diet: confirm it is complete and balanced for adult maintenance, check the calorie density against your animal&apos;s body condition, confirm adequate high-quality protein, and look for evidence-supported additions (EPA/DHA, antioxidants) rather than marketing buzzwords. For an animal with a diagnosed condition, a targeted therapeutic diet usually beats a generic senior food.</p>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
