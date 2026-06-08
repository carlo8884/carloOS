import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Dietary Fat and Fatty Acids in Pet Food | PetFood.com',
  description:
    'The role of fat in pet diets, essential fatty acids (linoleic, alpha-linolenic, arachidonic, EPA, DHA), the omega-6 to omega-3 ratio, and AAFCO fat minima.',
  path: '/nutrition/dietary-fat-and-fatty-acids',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Dietary Fat and Fatty Acids in Pet Food | PetFood.com',
  description:
    'The role of fat in pet diets, essential fatty acids (linoleic, alpha-linolenic, arachidonic, EPA, DHA), the omega-6 to omega-3 ratio, and AAFCO fat minima.',
  url: 'https://petfood.com/nutrition/dietary-fat-and-fatty-acids',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-05-30T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Dietary Fat and Fatty Acids in Pet Food | PetFood.com',
  description:
    'The role of fat in pet diets, essential fatty acids (linoleic, alpha-linolenic, arachidonic, EPA, DHA), the omega-6 to omega-3 ratio, and AAFCO fat minima.',
  url: 'https://petfood.com/nutrition/dietary-fat-and-fatty-acids',
  authorName: 'PetFood.com Editorial',
  lastReviewed: '2026-05-30',
  medicalAudience: 'Caregiver',
})

const schema = combineSchemas(articleSchema, medicalSchema)

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

export default function DietaryFatAndFattyAcidsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Dietary Fat and Essential Fatty Acids',
        subtitle:
          'Fat is the most energy-dense macronutrient, the carrier for fat-soluble vitamins, and the source of the essential fatty acids that drive skin, coat, and inflammatory-pathway health. It is also the macronutrient most often mismanaged, both by owners who fear it and by diets that supply the wrong fatty-acid balance. This page covers the essential fatty acids, the omega ratio, and what the guaranteed analysis fat figure means.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
      ]}
      relatedLinks={[
        { title: 'Nutrition Hub', href: '/nutrition' },
        { title: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
        { title: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Fat Matters', href: '#why' },
              { label: 'Essential Fatty Acids', href: '#efa' },
              { label: 'Omega-6 to Omega-3 Ratio', href: '#ratio' },
              { label: 'EPA and DHA', href: '#epadha' },
              { label: 'AAFCO Fat Minimums', href: '#aafco' },
              { label: 'Rancidity and Preservation', href: '#rancidity' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Pet Food Calories and Energy Density', href: '/nutrition/calories-and-energy-density' },
              { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
              { label: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
            ]}
          />
          <RelatedLinks
            title="Compare &amp; Evaluate Brands"
            links={[
              { label: 'Compare Food Types', href: '/compare' },
              { label: 'Brand Evaluations', href: '/brands' },
              { label: 'Orijen vs Acana — Fat & Protein Profiles', href: '/brands/orijen-vs-acana-comparison' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="dietary-fat-and-fatty-acids"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-05-30T00:00:00Z" updatedAt="2026-05-30T00:00:00Z" reviewedBy="Editorial team" />
        <p>Fat supplies roughly 8.5 kilocalories of metabolizable energy per gram — more than twice the energy density of protein or carbohydrate. Beyond energy, dietary fat carries the fat-soluble vitamins A, D, E, and K, improves diet palatability, and provides the essential fatty acids the body cannot synthesize. A diet too low in fat produces a dull, flaky coat and impaired fat-soluble vitamin status; a diet too high in fat, fed without matching energy expenditure, drives weight gain and, in predisposed dogs, can trigger pancreatitis.</p>
        <h2 id="why">Why Fat Matters</h2>
        <p>Because fat is so energy-dense, the fat content of a food largely determines its caloric density. Two foods of identical protein can differ substantially in calories per cup driven by fat. This is why feeding guidelines and the energy math on the bag matter: a higher-fat performance food fed at the same volume as a maintenance food delivers more calories. See <a href="/nutrition/calories-and-energy-density">Pet Food Calories and Energy Density</a>.</p>
        <h2 id="efa">Essential Fatty Acids</h2>
        <p>Dogs require linoleic acid (an omega-6) and benefit from alpha-linolenic acid (an omega-3). Cats, lacking adequate delta-6-desaturase activity, additionally require pre-formed arachidonic acid (an omega-6) in the diet — a requirement met by animal fat and not by plant oils. This is one of the clearest biochemical reasons a cat cannot be maintained on a plant-only diet without specific supplementation. The AAFCO Cat Food Nutrient Profile lists arachidonic acid as a required nutrient; the Dog Food Nutrient Profile does not.</p>
        <h2 id="ratio">The Omega-6 to Omega-3 Ratio</h2>
        <p>Omega-6 fatty acids tend to produce pro-inflammatory eicosanoids, while the long-chain omega-3s EPA and DHA produce less-inflammatory mediators. The dietary ratio of the two families influences the inflammatory tone of the body. Typical grain-and-poultry-fat kibble runs heavily omega-6. Many veterinary therapeutic skin and joint diets deliberately lower the ratio by adding fish oil. There is no single universally agreed optimal ratio, but most formulators and the NRC target a ratio well below the omega-6-dominant pattern of an unsupplemented commodity diet.</p>
        <h2 id="epadha">EPA and DHA</h2>
        <p>Eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) are the long-chain marine omega-3s with the strongest evidence base. DHA is important for neural and retinal development in puppies and kittens, which is why growth and reproduction diets are often DHA-supplemented. EPA and DHA together have evidence for supporting joint comfort in osteoarthritis and for skin and coat health. Dogs and cats convert alpha-linolenic acid to EPA and DHA inefficiently, so the marine-sourced pre-formed forms are more reliable than plant-oil precursors. See <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3 Supplements</a>.</p>
        <h2 id="aafco">AAFCO Fat Minimums</h2>
        <p>The AAFCO Dog Food Nutrient Profile sets a minimum crude fat of 5.5 percent dry-matter for adult maintenance and 8.5 percent for growth and reproduction, with a linoleic-acid minimum. The Cat Food Nutrient Profile sets 9 percent crude fat dry-matter for both adult maintenance and growth, with linoleic and arachidonic acid minima. These are floors; many complete diets carry considerably more fat, which is appropriate as long as total energy intake is managed.</p>
        <h2 id="rancidity">Rancidity and Preservation</h2>
        <p>Dietary fats oxidize over time, producing rancid off-flavors and destroying fat-soluble vitamins and essential fatty acids. This is why fat-containing foods require antioxidant preservation — either natural (mixed tocopherols, rosemary extract) or synthetic (BHA, BHT, ethoxyquin). Natural preservatives have a shorter effective window, which shortens shelf life. Storage matters: keep food sealed, cool, and used within the best-by window. See <a href="/ingredients/preservatives-pet-food">Preservatives in Pet Food</a>.</p>

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
