import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Are Limited-Ingredient Diets Hypoallergenic? | PetFood.com',
  description:
    'Why OTC limited-ingredient diets are not reliable allergy tools — cross-contamination, no hypoallergenic definition, and what works instead.',
  path: '/myths/limited-ingredient-diet-myth',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Are Limited-Ingredient Diets Hypoallergenic? | PetFood.com',
  description:
    'Why OTC limited-ingredient diets are not reliable allergy tools, the cross-contamination problem, the lack of a hypoallergenic definition, and what works instead.',
  url: 'https://petfood.com/myths/limited-ingredient-diet-myth',
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
]

export default function LimitedIngredientDietMythPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'The Limited-Ingredient Diet Myth',
        subtitle:
          'Limited-ingredient diets are marketed as a solution for food-sensitive pets, with the implication that fewer ingredients means hypoallergenic. The reality is that over-the-counter limited-ingredient foods are unreliable for diagnosing or managing true food allergy, largely because of undeclared cross-contamination. This page explains why, and what actually works.',
        category: 'Myth-Busting',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Myths', href: '/myths' },
        { name: 'The Limited-Ingredient Diet Myth', href: '/myths/limited-ingredient-diet-myth' },
      ]}
      relatedLinks={[
        { title: 'Myths Hub', href: '/myths' },
        { title: 'The By-Products Myth', href: '/myths/by-products-myth' },
        { title: 'The Fillers Myth', href: '/myths/fillers-myth' },
        { title: 'Marketing Terms Decoded', href: '/myths/marketing-terms-decoded' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Claim', href: '#claim' },
              { label: 'No Hypoallergenic Definition', href: '#nodefinition' },
              { label: 'The Cross-Contamination Problem', href: '#crosscontamination' },
              { label: 'Fewer Ingredients vs Novel Ingredients', href: '#fewervsnovel' },
              { label: 'What Actually Works', href: '#works' },
              { label: 'The Verdict', href: '#verdict' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
              { label: 'Hydrolyzed and Novel-Protein Diets', href: '/diets/hydrolyzed-protein-diets' },
              { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="limited-ingredient-diet-myth"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Limited-ingredient diets (LIDs) contain a short ingredient list, typically one protein and one carbohydrate, and are marketed for pets with food sensitivities. The implied promise is that they are hypoallergenic or suitable for an elimination trial. In practice, over-the-counter LIDs frequently fail at both, because the term hypoallergenic has no standard and because independent testing finds undeclared ingredients. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="claim">The Claim</h2>
        <p>The marketing suggests that a short ingredient list reduces allergy risk and that an LID can serve as a diagnostic or management diet for food-allergic pets. Owners often select an LID on their own to address itching or digestive upset, assuming fewer ingredients equals safer. The assumption does not survive scrutiny of how these products are made and labeled.</p>
        <h2 id="nodefinition">No Hypoallergenic Definition</h2>
        <p>There is no regulatory definition of hypoallergenic for pet food, and no requirement that an LID exclude any particular allergen. An LID is defined only by having a short ingredient list, not by being free of the proteins an individual animal reacts to. The term carries no enforceable promise about allergenicity. See <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a>.</p>
        <h2 id="crosscontamination">The Cross-Contamination Problem</h2>
        <p>The decisive issue is cross-contamination. Independent studies have repeatedly found over-the-counter limited-ingredient and novel-protein diets contaminated with proteins not on the label — commonly chicken, beef, or soy — because the same production lines run multiple formulas. For an animal allergic to the contaminating protein, the diet fails, and for a diagnostic elimination trial, undeclared protein invalidates the test. Veterinary therapeutic diets are manufactured to avoid this. See <a href="/diets/hydrolyzed-protein-diets">Hydrolyzed and Novel-Protein Diets</a>.</p>
        <h2 id="fewervsnovel">Fewer Ingredients vs Novel Ingredients</h2>
        <p>Reducing the number of ingredients does not help if the remaining ingredients are ones the animal has eaten (and could be sensitized to). What matters for allergy management is novelty — a protein the individual has never encountered — or hydrolysis, not merely a short list. An LID built on common proteins offers no allergy advantage; it is simply a simpler recipe. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="works">What Actually Works</h2>
        <p>Diagnosing and managing food allergy requires a strict elimination trial using a veterinary therapeutic novel-protein or hydrolyzed diet manufactured to avoid cross-contamination, fed exclusively for 8 to 12 weeks, followed by provocation. Over-the-counter LIDs are not equivalent and should not be relied on for diagnosis. The veterinarian directs the trial. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="verdict">The Verdict</h2>
        <p>Limited-ingredient is a marketing description, not a hypoallergenic guarantee. OTC LIDs are unreliable for food-allergy diagnosis and management due to the lack of a hypoallergenic standard and documented cross-contamination, and a short list of common proteins offers no allergy benefit. For genuine food allergy, use a veterinary elimination diet under veterinary direction. See <a href="/myths/by-products-myth">The By-Products Myth</a>.</p>

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
