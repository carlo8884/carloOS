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
  title: 'Whole Grains in Pet Food — Rice, Oats, Barley | PetFood.com',
  description:
    'What grains contribute to pet diets, digestibility of rice vs corn vs wheat, the gluten question, and why grain-inclusive is a sound default for most pets.',
  path: '/ingredients/whole-grains-rice-oats-barley',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Whole Grains in Pet Food — Rice, Oats, Barley | PetFood.com',
  description:
    'What grains contribute to pet diets, digestibility of rice vs corn vs wheat, the gluten question, and why grain-inclusive is a sound default for most pets.',
  url: 'https://petfood.com/ingredients/whole-grains-rice-oats-barley',
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

export default function WholeGrainsRiceOatsBarleyPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Whole Grains — Rice, Oats, and Barley',
        subtitle:
          'Grains were the default carbohydrate in pet food until grain-free marketing recast them as villains. In fact, properly processed grains are digestible, contribute energy and nutrients, and are a sound choice for most animals. This page covers what rice, oats, barley, and other grains bring to a diet and the narrow cases where avoidance is warranted.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Whole Grains — Rice, Oats, and Barley', href: '/ingredients/whole-grains-rice-oats-barley' },
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
              { label: 'What Grains Contribute', href: '#contribute' },
              { label: 'Rice', href: '#rice' },
              { label: 'Oats and Barley', href: '#oatsbarley' },
              { label: 'The Gluten Question', href: '#gluten' },
              { label: 'Whole vs Refined', href: '#wholerefined' },
              { label: 'When to Avoid Grain', href: '#avoid' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="whole-grains-rice-oats-barley"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Grains — rice, oats, barley, corn, wheat, sorghum — provide digestible carbohydrate energy, fiber, some protein, and B-vitamins and minerals in pet diets. Cooked and ground for pet food, they are well utilized by dogs and cats. The grain-free narrative cast grains as fillers and allergens, but the evidence supports grains as functional, digestible ingredients suitable for most animals. See <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a>.</p>
        <h2 id="contribute">What Grains Contribute</h2>
        <p>Grains supply the starch that, gelatinized in extrusion, both provides energy and binds kibble together. They also contribute fiber for digestive health, plant protein, essential fatty acids in some cases, and B-vitamins and minerals. As a digestible energy source in a complete diet, grains do real work. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="rice">Rice</h2>
        <p>Rice is among the most digestible carbohydrate sources in pet food and is gentle on the gut, which is why it features in many gastrointestinal and sensitive-stomach diets (the classic bland diet pairs rice with a lean protein). Brown rice retains more fiber and nutrients than white rice. Rice is hypoallergenic in the practical sense that it rarely triggers food allergy, making it a common choice for sensitive animals. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="oatsbarley">Oats and Barley</h2>
        <p>Oats provide soluble fiber (beta-glucan) with digestive benefits and are well tolerated; barley contributes fiber and a moderate glycemic response. Both are whole grains offering fiber and nutrients beyond simple energy. They appear in many grain-inclusive diets as alternatives or complements to rice and corn, broadening the nutrient and fiber profile of the diet.</p>
        <h2 id="gluten">The Gluten Question</h2>
        <p>Gluten is a protein found in wheat, barley, and rye (not in rice, corn, or oats). Gluten sensitivity is genuinely documented in a specific line of Irish Setters with a gluten-sensitive enteropathy, but it is rare across the general dog population, and most dogs and cats tolerate gluten-containing grains without issue. The human gluten-free trend does not translate to a general pet need. For the rare diagnosed case, gluten avoidance is appropriate. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="wholerefined">Whole vs Refined</h2>
        <p>Whole grains retain the bran and germ, supplying more fiber, B-vitamins, and minerals than refined grains, which are stripped to the starchy endosperm. Whole grains (brown rice, whole oats, barley) generally offer a better nutrient and fiber profile, though refined grains like white rice have a place in highly digestible therapeutic diets where low residue is the goal. The choice depends on the diet&apos;s purpose. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="avoid">When to Avoid Grain</h2>
        <p>Grain avoidance is warranted in the uncommon case of a confirmed grain allergy or a specific diagnosed enteropathy, identified by elimination trial — not as a default. For most animals, a grain-inclusive diet from a reputable manufacturer is a sound, often preferable choice, particularly given the DCM signal associated with some legume-heavy grain-free formulas. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>

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
