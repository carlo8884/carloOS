import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Legumes in Pet Food — Peas, Lentils, Chickpeas | PetFood.com',
  description:
    'Why legumes rose with grain-free, their nutrient profile and protein contribution, the DCM investigation link, and how to read pulse-heavy ingredient panels.',
  path: '/ingredients/legumes-peas-and-lentils',
  type: 'article',
})

const FAQ = [
  {
    question: 'Are peas and lentils bad for dogs?',
    answer:
      'As whole-food ingredients in moderate proportion, legumes are not a problem in themselves — they provide digestible carbohydrate, fiber, plant protein, and some minerals and B-vitamins. The open question concerns pulse-heavy formulations specifically: the FDA dilated cardiomyopathy investigation found the formulation pattern most associated with cases was high in pulses and legume protein. For most animals, moderate legume inclusion is fine; for dogs in DCM-predisposed breeds, a pulse-heavy formula is worth discussing with the veterinarian.',
  },
  {
    question: 'Why are legumes in grain-free dog food?',
    answer:
      'Extruded kibble requires starch to form, so a grain-free recipe must replace cereal starch with something — and legumes (plus potato and tapioca) filled that role. Pulses offered the additional marketing advantage of boosting the crude-protein number on the guaranteed analysis, since they are higher in protein than grains. The result was a rapid rise in pulse-heavy formulas.',
  },
  {
    question: 'What is the link between legumes and DCM?',
    answer:
      'From 2018, the FDA investigated dilated cardiomyopathy in dogs eating grain-free diets, and the formulation pattern most associated with cases was high in pulses (peas, lentils) and legume protein. The investigation established an association, not proven causation, and the mechanism remains unresolved — taurine status, bioavailability, and other factors are under study. Because the signal centers on pulse-heavy diets specifically, legume proportion is a reasonable thing to consider in at-risk dogs.',
  },
  {
    question: 'What is pea protein and why does it matter on a label?',
    answer:
      'Pea protein is a concentrated pulse derivative at 75 to 85 percent crude protein, used to raise the headline protein figure on the guaranteed analysis. Adding plant-protein isolates can shift the amino-acid balance of the diet: the crude-protein number rises, but the contribution to a complete, animal-quality amino-acid profile is different from animal protein. A high crude-protein figure built partly on pea protein does not mean the same thing as one built on animal protein.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Legumes in Pet Food — Peas, Lentils, Chickpeas | PetFood.com',
    description:
      'Why legumes rose with grain-free, their nutrient profile and protein contribution, the DCM investigation link, and how to read pulse-heavy ingredient panels.',
    url: 'https://petfood.com/ingredients/legumes-peas-and-lentils',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-01T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  }),
  buildFAQSchema({ questions: FAQ }),
)

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
      label: "FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy",
      url: "https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function LegumesPeasAndLentilsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Legumes — Peas, Lentils, and Chickpeas',
        subtitle:
          'Legumes — peas, lentils, chickpeas, and their protein isolates — moved from minor ingredients to dominant ones when grain-free diets needed a starch and protein substitute for cereal grains. They carry real nutritional value and a real question mark: pulse-heavy diets feature in the FDA dilated cardiomyopathy investigation. This page covers what legumes contribute and what the open concern is.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
      ]}
      relatedLinks={[
        { title: 'Ingredients Hub', href: '/ingredients' },
        { title: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
        { title: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
        { title: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Legumes Rose', href: '#rose' },
              { label: 'Nutrient Profile', href: '#nutrients' },
              { label: 'Protein Contribution and Isolates', href: '#isolates' },
              { label: 'The DCM Connection', href: '#dcm' },
              { label: 'Anti-Nutritional Factors', href: '#antinutritional' },
              { label: 'Reading a Pulse-Heavy Panel', href: '#panel' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
            ]}
          />
          <RelatedLinks
            title="Compare &amp; Evaluate Brands"
            links={[
              { label: 'Brand Evaluations', href: '/brands' },
              { label: 'Taste of the Wild — Independent Evaluation', href: '/brands/taste-of-the-wild-evaluation' },
              { label: 'Orijen vs Acana — Grain-Free Lines', href: '/brands/orijen-vs-acana-comparison' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="legumes-peas-and-lentils"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <p>Legumes (pulses) include peas, lentils, chickpeas, and beans, along with concentrated derivatives like pea protein and pea starch. They became prominent in pet food as grain-free formulas needed a carbohydrate and binding source to replace cereal grains in extrusion. They are nutritious ingredients, but their heavy use is also at the center of the unresolved diet-associated dilated cardiomyopathy question. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="rose">Why Legumes Rose</h2>
        <p>Extruded kibble requires starch to form, so a grain-free recipe must replace cereal starch with something — and legumes (plus potato and tapioca) filled that role. Pulses offered the additional marketing advantage of boosting the crude-protein number on the guaranteed analysis, since they are higher in protein than grains. The result was a rapid rise in pulse-heavy formulas. See <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a>.</p>
        <h2 id="nutrients">Nutrient Profile</h2>
        <p>Whole pulses provide digestible carbohydrate, fiber, plant protein (roughly 20 to 25 percent crude protein on a dry-matter basis for whole pulses), and some minerals and B-vitamins. They are a legitimate ingredient with nutritional value. The fiber content supports digestion, and the carbohydrate supplies energy. As whole-food ingredients in moderate proportion, legumes are not a problem in themselves. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="isolates">Protein Contribution and Isolates</h2>
        <p>Concentrated pulse derivatives — pea protein at 75 to 85 percent crude protein — are used to raise the headline protein figure. This matters because adding plant-protein isolates can shift the amino-acid balance of the diet: the crude-protein number rises, but the contribution to a complete, animal-quality amino-acid profile is different from animal protein. A high crude-protein figure built partly on pea protein does not mean the same thing as one built on animal protein. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a> and <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="dcm">The DCM Connection</h2>
        <p>From 2018, the FDA investigated dilated cardiomyopathy in dogs eating grain-free diets, and the formulation pattern most associated with cases was high in pulses (peas, lentils) and legume protein. The investigation established an association, not proven causation, and the mechanism remains unresolved — taurine status, bioavailability, and other factors are under study. Because the signal centers on pulse-heavy diets specifically, legume proportion is a reasonable thing to consider in at-risk dogs. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="antinutritional">Anti-Nutritional Factors</h2>
        <p>Raw legumes contain anti-nutritional factors (such as lectins, phytates, and enzyme inhibitors) that can interfere with digestion and mineral absorption, but cooking — which all pet food pulses undergo — reduces these substantially. Phytate can still bind some minerals, a minor consideration in well-formulated diets that account for it. Properly processed legumes are digestible; the anti-nutritional concern applies mainly to raw pulses. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="panel">Reading a Pulse-Heavy Panel</h2>
        <p>When several pulses and pulse fractions appear high on the ingredient list (peas, pea protein, pea starch, lentils, chickpeas), the diet is pulse-heavy, and the practice of ingredient splitting can spread legumes across multiple entries to keep any single one lower on the list. For dogs in DCM-predisposed breeds or with cardiac concerns, a pulse-heavy formula is worth discussing with the veterinarian. For most animals, moderate legume inclusion is fine. See <a href="/guides/reading-pet-food-labels">Reading a Pet Food Label</a>.</p>

        <h2 id="faq">Common Questions</h2>
        <p><strong>Are peas and lentils bad for dogs?</strong></p>
        <p>
          As whole-food ingredients in moderate proportion, legumes are not a problem in
          themselves — they provide digestible carbohydrate, fiber, plant protein, and some
          minerals and B-vitamins. The open question concerns pulse-heavy formulations
          specifically: the FDA dilated cardiomyopathy investigation found the formulation
          pattern most associated with cases was high in pulses and legume protein. For most
          animals, moderate legume inclusion is fine; for dogs in DCM-predisposed breeds, a
          pulse-heavy formula is worth discussing with the veterinarian.
        </p>
        <p><strong>Why are legumes in grain-free dog food?</strong></p>
        <p>
          Extruded kibble requires starch to form, so a grain-free recipe must replace cereal
          starch with something — and legumes (plus potato and tapioca) filled that role. Pulses
          offered the additional marketing advantage of boosting the crude-protein number on the
          guaranteed analysis, since they are higher in protein than grains. The result was a
          rapid rise in pulse-heavy formulas.
        </p>
        <p><strong>What is the link between legumes and DCM?</strong></p>
        <p>
          From 2018, the FDA investigated dilated cardiomyopathy in dogs eating grain-free diets,
          and the formulation pattern most associated with cases was high in pulses (peas,
          lentils) and legume protein. The investigation established an association, not proven
          causation, and the mechanism remains unresolved — taurine status, bioavailability, and
          other factors are under study. Because the signal centers on pulse-heavy diets
          specifically, legume proportion is a reasonable thing to consider in at-risk dogs.
        </p>
        <p><strong>What is pea protein and why does it matter on a label?</strong></p>
        <p>
          Pea protein is a concentrated pulse derivative at 75 to 85 percent crude protein, used
          to raise the headline protein figure on the guaranteed analysis. Adding plant-protein
          isolates can shift the amino-acid balance of the diet: the crude-protein number rises,
          but the contribution to a complete, animal-quality amino-acid profile is different from
          animal protein. A high crude-protein figure built partly on pea protein does not mean
          the same thing as one built on animal protein.
        </p>

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
