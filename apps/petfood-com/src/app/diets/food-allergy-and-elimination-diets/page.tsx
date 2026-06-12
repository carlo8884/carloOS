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
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Food Allergy and Elimination Diets for Pets | PetFood.com',
  description:
    'How food allergies are diagnosed, the elimination-diet trial, novel-protein vs hydrolyzed diets, and why OTC limited-ingredient foods often fail.',
  path: '/diets/food-allergy-and-elimination-diets',
  type: 'article',
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
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Food Allergy and Elimination Diets for Pets | PetFood.com',
  description:
    'How cutaneous adverse food reactions are diagnosed, the elimination-diet trial, novel-protein vs hydrolyzed diets, and why over-the-counter limited-ingredient foods often fail.',
  url: 'https://petfood.com/diets/food-allergy-and-elimination-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function FoodAllergyAndEliminationDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Food Allergy and Elimination Diets',
        subtitle:
          'Food allergy in dogs and cats is real but less common than the marketing suggests, and it cannot be diagnosed by a blood or saliva test. The only validated diagnostic is a strict elimination-diet trial, and the diets that work are specific — novel-protein or hydrolyzed — and easy to undermine. This page covers the diagnosis, the diet options, and the pitfalls.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '12 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Food Allergy Is', href: '#whatis' },
              { label: 'Diagnosis — The Elimination Trial', href: '#trial' },
              { label: 'Novel-Protein Diets', href: '#novel' },
              { label: 'Hydrolyzed Diets', href: '#hydrolyzed' },
              { label: 'Why OTC Limited-Ingredient Foods Fail', href: '#otc' },
              { label: 'The Provocation Step', href: '#provocation' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Hydrolyzed and Novel-Protein Diets', href: '/diets/hydrolyzed-protein-diets' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
              { label: 'Limited-Ingredient Diets Myth', href: '/myths/limited-ingredient-diet-myth' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="food-allergy-and-elimination-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:category-conditions"
          alt="A hypoallergenic elimination-diet pet-food bag in clinical light"
          eyebrow="Condition-Specific Diet"
          priority
        />
        <p>Cutaneous adverse food reaction (the precise term for what owners call food allergy) is an immune or non-immune reaction to a dietary protein that produces itching, recurrent skin and ear infections, and sometimes gastrointestinal signs. The most common culprit proteins in dogs are beef, dairy, chicken, and wheat; in cats, beef, dairy, and fish. Importantly, the allergen is almost always a protein the animal has eaten before — grain is a far less common trigger than the grain-free narrative implies.</p>
        <h2 id="whatis">What Food Allergy Is</h2>
        <p>Food allergy is one of several causes of itch in dogs and cats, alongside environmental allergy (atopic dermatitis), flea allergy, and parasites. It is frequently overdiagnosed by owners and overpromised by products. There is no validated blood, saliva, or hair test for food allergy; the serum and saliva tests marketed to owners have repeatedly failed validation studies, returning positives for water and for foods the animal has never eaten.</p>
        <h2 id="trial">Diagnosis — The Elimination Trial</h2>
        <p>The only reliable diagnostic is a strict elimination-diet trial: feed a diet containing a protein and carbohydrate source the animal has never encountered (or a hydrolyzed protein) and nothing else — no treats, flavored medications, table scraps, or flavored toothpaste — for a defined period, typically 8 to 12 weeks, then assess whether signs resolve. The strictness is the hard part and the most common reason trials fail.</p>
        <h2 id="novel">Novel-Protein Diets</h2>
        <p>A novel-protein diet uses a protein the individual animal has not previously eaten — venison, rabbit, kangaroo, duck, or insect protein, paired with an unusual carbohydrate. The logic is that the immune system has not been sensitized to a protein it has never seen. The challenge is finding a genuinely novel protein given how many proteins are now in mainstream foods and treats, and the risk of cross-contamination in non-veterinary novel-protein products. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="hydrolyzed">Hydrolyzed Diets</h2>
        <p>Hydrolyzed-protein diets break the protein into peptide fragments small enough that the immune system is less likely to recognize them as an allergen. These are veterinary therapeutic diets (such as those built on hydrolyzed soy or hydrolyzed chicken liver), and the degree of hydrolysis matters — lower-molecular-weight hydrolysates are used when standard ones fail. Hydrolyzed diets sidestep the difficulty of sourcing a truly novel protein. See <a href="/diets/hydrolyzed-protein-diets">Hydrolyzed and Novel-Protein Diets</a>.</p>
        <h2 id="otc">Why OTC Limited-Ingredient Foods Fail</h2>
        <p>Over-the-counter limited-ingredient diets are not equivalent to veterinary elimination diets. Independent testing has repeatedly found undeclared proteins (commonly chicken, beef, or soy) in OTC limited-ingredient foods, because the same production lines run multiple formulas and cross-contamination occurs. A diet that secretly contains the offending protein cannot serve as a diagnostic trial. Veterinary therapeutic elimination diets are manufactured to avoid this contamination.</p>
        <h2 id="provocation">The Provocation Step</h2>
        <p>A properly conducted trial does not end when signs resolve — it ends with provocation: reintroducing the original diet to confirm that signs return, which proves the response was diet-related rather than coincidental (or due to seasonal change in environmental allergy). Only after a positive provocation is food allergy confirmed; individual ingredients can then be reintroduced to identify the specific trigger. This entire process should be directed by a veterinarian.</p>

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
