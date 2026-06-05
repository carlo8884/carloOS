import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
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
  title: 'Dry-Matter Basis — Comparing Wet and Dry Pet Food | PetFood.com',
  description:
    'Why guaranteed-analysis percentages mislead across formats, how to convert as-fed to dry-matter, and worked examples comparing canned and kibble protein.',
  path: '/nutrition/dry-matter-basis-explained',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Dry-Matter Basis — Comparing Wet and Dry Pet Food | PetFood.com',
  description:
    'Why guaranteed-analysis percentages mislead across formats, how to convert as-fed to dry-matter, and worked examples comparing canned and kibble protein.',
  url: 'https://petfood.com/nutrition/dry-matter-basis-explained',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-31T00:00:00Z',
  modifiedAt: '2026-05-31T00:00:00Z',
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

export default function DryMatterBasisExplainedPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Dry-Matter Basis Explained',
        subtitle:
          'The single most useful piece of pet food math is the dry-matter conversion. Without it, the guaranteed analysis makes a 78-percent-water canned food look like it has a quarter the protein of a kibble, when in fact they may be nearly identical. This page shows the conversion, works two examples, and explains when it matters.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Dry-Matter Basis Explained', href: '/nutrition/dry-matter-basis-explained' },
      ]}
      relatedLinks={[
        { title: 'Nutrition Hub', href: '/nutrition' },
        { title: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
        { title: 'Dietary Fat and Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
        { title: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The As-Fed Problem', href: '#asfed' },
              { label: 'The Conversion', href: '#conversion' },
              { label: 'Worked Example — Protein', href: '#example' },
              { label: 'When It Matters', href: '#matters' },
              { label: 'Comparing Across Brands', href: '#brands' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="dry-matter-basis-explained"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-05-31T00:00:00Z" updatedAt="2026-05-31T00:00:00Z" reviewedBy="Editorial team" />
        <p>The guaranteed analysis on every pet food bag reports nutrients on an as-fed basis — that is, including the water in the food. Because canned food is mostly water and kibble is mostly dry, the as-fed percentages are not comparable between the two. Dry-matter basis removes water from both sides of the comparison so the nutrient content can be compared honestly. This is standard practice in animal nutrition and the only correct way to compare formats.</p>
        <h2 id="asfed">The As-Fed Problem</h2>
        <p>A typical canned cat food might guarantee 10 percent crude protein. A typical dry cat food might guarantee 34 percent. At first glance the kibble has more than three times the protein. But the canned food is about 78 percent water, so only 22 percent of it is actual food; the dry food is about 10 percent moisture, so 90 percent of it is food. Comparing the two as-fed is comparing a number that includes a lot of water against one that includes very little.</p>
        <h2 id="conversion">The Conversion</h2>
        <p>To convert any guaranteed-analysis percentage to a dry-matter basis, first find the dry-matter percentage: 100 minus the guaranteed moisture percentage. Then divide the nutrient percentage by the dry-matter percentage and multiply by 100. The formula is: dry-matter nutrient = (as-fed nutrient / (100 - moisture)) x 100. If moisture is not listed, the AAFCO default maximum is 78 percent for canned and 12 percent for dry, but use the actual guaranteed figure where available.</p>
        <h2 id="example">Worked Example — Protein</h2>
        <p>Canned food: 10 percent crude protein, 78 percent moisture. Dry matter = 100 - 78 = 22 percent. Dry-matter protein = (10 / 22) x 100 = 45.5 percent. Dry food: 34 percent crude protein, 10 percent moisture. Dry matter = 90 percent. Dry-matter protein = (34 / 90) x 100 = 37.8 percent. On a dry-matter basis the canned food actually carries more protein than the kibble — the opposite of the as-fed impression. The same conversion applies to fat, fiber, and any other guaranteed nutrient.</p>
        <h2 id="matters">When It Matters</h2>
        <p>Dry-matter conversion matters whenever you compare a wet food to a dry food, compare two foods of different moisture, or evaluate whether a diet meets a target nutrient level (AAFCO profiles are stated on a dry-matter basis). It matters less when comparing two dry foods of similar moisture, where the as-fed figures are close enough to rank directly. For carbohydrate, remember the figure is estimated by difference and is not on the label. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="brands">Comparing Across Brands</h2>
        <p>When evaluating brands and formulas on this site, nutrient comparisons are normalized to a dry-matter basis precisely so that wet and dry products are judged on equal footing. The AAFCO nutrient profiles that define complete-and-balanced are themselves expressed on a dry-matter basis, which is another reason the conversion is foundational. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a> and our <a href="/guides/methodology">Scoring Methodology</a>.</p>

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
