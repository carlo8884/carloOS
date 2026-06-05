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
  title: 'Pet Food Fillers — Is the Term Even Real? | PetFood.com',
  description:
    'Why filler is a marketing word with no regulatory meaning, how fiber and carbohydrate ingredients are functional, and how to evaluate ingredients on their role.',
  path: '/myths/fillers-myth',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Food Fillers — Is the Term Even Real? | PetFood.com',
  description:
    'Why filler is a marketing word with no regulatory meaning, how fiber and carbohydrate ingredients are functional, and how to evaluate ingredients on their role.',
  url: 'https://petfood.com/myths/fillers-myth',
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

export default function FillersMythPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'The Pet Food Fillers Myth',
        subtitle:
          'Filler is one of the most-used words in pet food criticism and one of the least meaningful: it has no regulatory definition and is applied loosely to any ingredient a marketer wants to disparage. Many so-called fillers are functional fiber or carbohydrate sources. This page examines whether filler is a real category at all.',
        category: 'Myth-Busting',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Myths', href: '/myths' },
        { name: 'The Pet Food Fillers Myth', href: '/myths/fillers-myth' },
      ]}
      relatedLinks={[
        { title: 'Myths Hub', href: '/myths' },
        { title: 'The By-Products Myth', href: '/myths/by-products-myth' },
        { title: 'Marketing Terms Decoded', href: '/myths/marketing-terms-decoded' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Claim', href: '#claim' },
              { label: 'Filler Has No Definition', href: '#nodefinition' },
              { label: 'Functional Ingredients', href: '#functional' },
              { label: 'Beet Pulp and Bran', href: '#beetpulp' },
              { label: 'When an Ingredient Is Padding', href: '#padding' },
              { label: 'The Verdict', href: '#verdict' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
              { label: 'Pet Food Marketing Terms', href: '/myths/marketing-terms-decoded' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="fillers-myth"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The claim is that low-quality foods are bulked out with fillers — cheap ingredients with no nutritional value added only to pad the bag. The word implies waste and dilution. But filler has no regulatory or scientific definition; it is a rhetorical label applied selectively to grains, fiber sources, and carbohydrate ingredients that, in fact, serve real functions. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="claim">The Claim</h2>
        <p>Critics label ingredients such as corn, beet pulp, brewers rice, or bran as fillers, suggesting they are nutritionally empty and present only to cut cost. The term is rarely defined; it functions as a catch-all pejorative. Examined ingredient by ingredient, most so-called fillers have a nutritional or functional role.</p>
        <h2 id="nodefinition">Filler Has No Definition</h2>
        <p>Neither AAFCO nor the FDA defines filler, and no ingredient is approved or labeled as a filler. The word is not a regulatory category. This is the core problem with the claim: it is impossible to evaluate an ingredient against a standard that does not exist. Whether an ingredient is valuable depends on its actual function, not on whether a marketer chooses to call it a filler. See <a href="/guides/reading-pet-food-labels">Reading a Pet Food Label</a>.</p>
        <h2 id="functional">Functional Ingredients</h2>
        <p>Most ingredients tarred as fillers serve a function: carbohydrate sources provide digestible energy and the starch needed to form kibble; fiber sources support digestion, stool quality, and the gut microbiome; some provide vitamins, minerals, and antioxidants. A complete diet needs energy and fiber sources, and the ingredients supplying them are not waste. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="beetpulp">Beet Pulp and Bran</h2>
        <p>Beet pulp, a frequent target, is a moderately fermentable fiber that supports stool quality and feeds beneficial colonic bacteria — a functional ingredient, not padding. Bran and similar fiber sources likewise contribute fiber with digestive benefits. Labeling these as fillers ignores their role. The presence of a fiber source in a diet is generally a feature, not a flaw. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="padding">When an Ingredient Is Padding</h2>
        <p>There is a defensible version of the concern: an ingredient that displaces higher-quality components purely to cut cost, without contributing energy, fiber, or nutrients, would be padding. But identifying that requires evaluating the specific ingredient&apos;s role in the specific formula, not applying a blanket filler label. The judgment is ingredient- and context-specific, not a category.</p>
        <h2 id="verdict">The Verdict</h2>
        <p>Filler is a marketing word, not a real ingredient category, and most ingredients it is applied to are functional carbohydrate and fiber sources. Evaluate a diet on its overall formulation, nutrient adequacy, and the role each ingredient plays — not on whether a critic has labeled something a filler. See <a href="/guides/methodology">Scoring Methodology</a> and <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a>.</p>

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
