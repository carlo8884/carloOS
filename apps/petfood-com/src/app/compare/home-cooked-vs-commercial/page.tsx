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
  title: 'Home-Cooked vs Commercial Pet Diets | PetFood.com',
  description:
    'Why home-cooked diets so often end up unbalanced, the role of veterinary nutritionists, supplement needs, and when home cooking is justified.',
  path: '/compare/home-cooked-vs-commercial',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Home-Cooked vs Commercial Pet Diets | PetFood.com',
  description:
    'Why home-cooked diets so often end up unbalanced, the role of board-certified veterinary nutritionists, supplement requirements, and when home cooking is justified.',
  url: 'https://petfood.com/compare/home-cooked-vs-commercial',
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

export default function HomeCookedVsCommercialPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Home-Cooked vs Commercial Diets',
        subtitle:
          'Home-cooking for a pet is appealing and, done correctly, legitimate — but the evidence is unambiguous that most home-prepared recipes, including those from books and websites, are nutritionally incomplete. The gap between a balanced home diet and an unbalanced one is a board-certified veterinary nutritionist and a precise recipe. This page covers the risks, the right way to do it, and when it is justified.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Home-Cooked vs Commercial Diets', href: '/compare/home-cooked-vs-commercial' },
      ]}
      relatedLinks={[
        { title: 'Compare Hub', href: '/compare' },
        { title: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
        { title: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
        { title: 'Fresh vs Kibble', href: '/compare/fresh-vs-kibble' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Appeal', href: '#appeal' },
              { label: 'The Imbalance Problem', href: '#imbalance' },
              { label: 'Why Recipes Fail', href: '#recipesfail' },
              { label: 'Doing It Correctly', href: '#correctly' },
              { label: 'Supplements Are Required', href: '#supplements' },
              { label: 'When It Is Justified', href: '#justified' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
              { label: 'Raw vs Cooked Diets', href: '/compare/raw-vs-cooked-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="home-cooked-vs-commercial"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Home-cooking lets owners control ingredients, accommodate preferences and some medical needs, and avoid commercial processing. The problem is not the concept but the execution: balancing a complete diet by hand is genuinely difficult, and study after study finds that the large majority of home-prepared recipes — including many published in books and online and even some from veterinarians without nutrition training — fail to meet established nutrient requirements. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="appeal">The Appeal</h2>
        <p>Owners turn to home-cooking for control over ingredient quality, to manage picky eaters or food sensitivities, for animals with multiple conditions that no single commercial diet addresses, and out of distrust of commercial processing. These are understandable motivations, and a properly formulated home diet can be a fine choice — the issue is ensuring proper formulation.</p>
        <h2 id="imbalance">The Imbalance Problem</h2>
        <p>Analyses of home-prepared maintenance recipes consistently find a majority deficient in multiple essential nutrients, with calcium, several trace minerals, and certain vitamins most often inadequate, and calcium-to-phosphorus ratio frequently wrong. An all-meat homemade diet is calcium-deficient and phosphorus-rich, causing nutritional secondary hyperparathyroidism and skeletal disease. The imbalances are usually invisible for months before clinical signs appear. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="recipesfail">Why Recipes Fail</h2>
        <p>Recipes fail because balancing dozens of nutrients to meet minima without exceeding maxima requires nutritional software and expertise, because owners substitute ingredients (changing the nutrient profile), because supplements are omitted or dosed by guess, and because cooking and ingredient variation alter the numbers. A recipe that is balanced on paper is often not followed exactly, and small deviations compound. Popularity or a veterinarian byline does not guarantee a recipe is complete.</p>
        <h2 id="correctly">Doing It Correctly</h2>
        <p>A complete home-cooked diet should be formulated by a board-certified veterinary nutritionist (a Diplomate of the American College of Veterinary Nutrition or equivalent) or via a reputable formulation service, individualized to the animal, followed precisely without ingredient substitution, and rechecked if anything changes. The recipe will specify exact quantities, a specific supplement product, and the cooking method. This is the difference between a balanced and an unbalanced home diet.</p>
        <h2 id="supplements">Supplements Are Required</h2>
        <p>A balanced home-cooked diet essentially always requires a supplement to supply nutrients that whole-food ingredients cannot provide in the right amounts — calcium being the most critical, plus a vitamin-and-mineral source and often specific additions like taurine for cats. Generic human multivitamins are not adequate substitutes. The formulating nutritionist specifies the exact supplement and dose. See <a href="/supplements/multivitamins-for-pets">Multivitamins for Pets</a>.</p>
        <h2 id="justified">When It Is Justified</h2>
        <p>Home-cooking is justified when an animal will not eat or cannot tolerate suitable commercial diets, when a combination of medical conditions is not addressed by any commercial therapeutic diet, or when an owner is committed to it and willing to do it properly through a veterinary nutritionist. It is not justified as a casual swap from commercial food based on a recipe found online. Done right it is excellent; done casually it is a common cause of preventable nutritional disease. See <a href="/compare/fresh-vs-kibble">Fresh vs Kibble</a>.</p>

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
