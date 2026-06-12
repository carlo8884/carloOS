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
  title: 'What Obligate Carnivore Means for Cat Nutrition | PetFood.com',
  description:
    'What obligate carnivore means in practice for feline diets — the metabolic adaptations, the vegan-cat problem, and the dietary requirements that follow.',
  path: '/species/cats-are-obligate-carnivores',
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
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'What Obligate Carnivore Means for Cat Nutrition | PetFood.com',
  description:
    'What obligate carnivore means in practice for feline diets — the metabolic adaptations, the vegan-cat problem, and the dietary requirements that follow.',
  url: 'https://petfood.com/species/cats-are-obligate-carnivores',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})


export default function CatsAreObligateCarnivoresPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Cats Are Obligate Carnivores',
        subtitle:
          "Obligate carnivore is a precise biological term, not a marketing slogan: the cat's metabolism is built around eating animal tissue and has lost the flexibility omnivores retain. This shapes everything about feline nutrition, from protein needs to the impossibility of a healthy plant-only cat diet without heavy synthetic supplementation. This page explains what the term actually means.",
        category: 'Species Nutrition',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Species', href: '/species' },
        { name: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
      ]}
      relatedLinks={[
        { title: 'Species Hub', href: '/species' },
        { title: 'Are Dogs Carnivores or Omnivores?', href: '/species/are-dogs-carnivores-or-omnivores' },
        { title: 'Dog vs Cat Nutrition Overview', href: '/species/dog-vs-cat-nutrition-overview' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Term Defined', href: '#defined' },
              { label: 'Metabolic Adaptations', href: '#adaptations' },
              { label: 'The Required Nutrients', href: '#nutrients' },
              { label: 'Carbohydrate Handling', href: '#carbohydrate' },
              { label: 'The Vegan-Cat Problem', href: '#vegan' },
              { label: 'Practical Implications', href: '#practical' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
              { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
              { label: 'Kibble vs Canned for Cats', href: '/compare/kibble-vs-canned-for-cats' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="cats-are-obligate-carnivores"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>An obligate carnivore is an animal that must consume animal tissue to obtain certain nutrients it cannot synthesize, because its metabolism has specialized for a meat diet and lost biochemical pathways that omnivores retain. The domestic cat is the textbook example. This is a statement about physiology, not philosophy, and it underlies the entire feline AAFCO nutrient profile. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="defined">The Term Defined</h2>
        <p>Obligate means required, and carnivore means meat-eater: the cat is obligated by its biology to eat animal tissue. Over evolution as a hunter of small prey, the cat lost or downregulated several enzymatic pathways that would let it make certain nutrients from plant precursors, because its diet always supplied them pre-formed. The lost flexibility is the defining feature.</p>
        <h2 id="adaptations">Metabolic Adaptations</h2>
        <p>Cats run a continuously high rate of protein metabolism and cannot fully downregulate it when protein is scarce, so they need a steady high-protein intake. They have a weak thirst drive adapted to obtaining water from prey, limited capacity to handle large carbohydrate loads, and an obligatory use of taurine to conjugate bile acids, continuously depleting it. Each adaptation reflects the prey-based ancestral diet. See <a href="/nutrition/water-and-hydration">Water and Hydration</a>.</p>
        <h2 id="nutrients">The Required Nutrients</h2>
        <p>The cat must obtain from the diet: taurine (cannot synthesize enough), arginine (urea cycle cannot tolerate shortage), pre-formed vitamin A (cannot convert beta-carotene), arachidonic acid (cannot make it from linoleic acid), and niacin (inadequate synthesis from tryptophan), among others. All of these are present in animal tissue and are why a feline diet is animal-based and feline-formulated. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a> and <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="carbohydrate">Carbohydrate Handling</h2>
        <p>Cats have low salivary amylase and reduced intestinal disaccharidase activity relative to omnivores, reflecting a diet historically low in carbohydrate. They can use moderate dietary carbohydrate but do best on protein-forward diets, and high-carbohydrate feeding is one factor in feline obesity and diabetes. This is the metabolic basis for favoring lower-carbohydrate diets in many cats. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="vegan">The Vegan-Cat Problem</h2>
        <p>Because cats require nutrients found naturally only in animal tissue, a plant-only cat diet is possible solely with heavy synthetic supplementation of taurine, arachidonic acid, pre-formed vitamin A, and others — and the long-term safety and nutritional adequacy of such diets remain debated and harder to guarantee. The obligate-carnivore biology is precisely why a vegan diet is far more problematic for a cat than for a dog. Any such diet should be undertaken only with veterinary and nutritionist oversight.</p>
        <h2 id="practical">Practical Implications</h2>
        <p>In practice, obligate-carnivore status means: feed a complete, animal-based, feline-formulated diet; never substitute dog food; favor adequate protein and consider lower-carbohydrate, higher-moisture options especially for at-risk cats; and treat the feline nutrient requirements as non-negotiable. The term is not marketing — it is the reason cat food and dog food are formulated differently. See <a href="/compare/kibble-vs-canned-for-cats">Kibble vs Canned for Cats</a>.</p>

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
