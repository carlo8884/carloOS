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
  title: 'Ingredient Splitting on Pet Food Labels Explained | PetFood.com',
  description:
    'How ingredient splitting manipulates the descending-weight ingredient order, worked examples, and how to read a label to see through the practice.',
  path: '/ingredients/ingredient-splitting',
  type: 'article',
})

const FAQ = [
  {
    question: 'What is ingredient splitting in pet food?',
    answer:
      'Ingredient splitting divides what is functionally one ingredient into several named entries — for example, listing peas, pea protein, pea fiber, and pea starch separately rather than as total pea content. Because the AAFCO-required ingredient list is ordered by weight, each fraction weighs less than the combined total and ranks lower on the list, so an animal protein can appear first even though the combined plant fractions outweigh it.',
  },
  {
    question: 'How can I tell if a pet food label uses ingredient splitting?',
    answer:
      'Mentally recombine related fractions: add up all the pea entries, all the corn entries, all the rice entries, and consider whether the combined plant content rivals or exceeds the animal protein. A long list of same-source fractions scattered through the panel is a flag for splitting. Also note where fresh (wet) versus meal (dry) proteins sit on the list.',
  },
  {
    question: 'Does chicken listed first mean the food is mostly chicken?',
    answer:
      'Not necessarily. Fresh meat is roughly 70 percent water at the ingoing step, so it ranks high by weight but contributes far less to the finished, dried kibble. A recipe leading with fresh chicken followed by split plant fractions can be plant-dominant in the finished product despite a meat-first appearance. Pairing fresh meat with a named meal lower in the list is a more honest way to deliver meat content.',
  },
  {
    question: 'What should I trust instead of the ingredient order?',
    answer:
      'Because the ingredient order is gameable, do not rely on it alone. Use the guaranteed analysis on a dry-matter basis, request the typical analysis and dry-matter nutrient breakdown from the manufacturer, check the AAFCO substantiation, and weigh manufacturer transparency. The ingredient list is one input among several, not the verdict.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Ingredient Splitting on Pet Food Labels Explained | PetFood.com',
    description:
      'How ingredient splitting manipulates the descending-weight ingredient order, worked examples, and how to read a label to see through the practice.',
    url: 'https://petfood.com/ingredients/ingredient-splitting',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-01T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  speakable: true,
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
]

export default function IngredientSplittingPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Ingredient Splitting on Pet Food Labels',
        subtitle:
          'The ingredient list is ordered by weight, which owners use to judge what a food is mostly made of — and manufacturers can game that order through ingredient splitting. By dividing one ingredient into several sub-types, a brand can push a less-desirable component down the list. This page explains the practice and how to read past it.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Ingredient Splitting on Pet Food Labels', href: '/ingredients/ingredient-splitting' },
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
              { label: 'The Descending-Order Rule', href: '#rule' },
              { label: 'How Splitting Works', href: '#howworks' },
              { label: 'A Worked Example', href: '#example' },
              { label: 'The Fresh-Meat First Trick', href: '#freshmeat' },
              { label: 'Seeing Through It', href: '#seeingthrough' },
              { label: 'What to Trust Instead', href: '#trust' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
            ]}
          />
          <RelatedLinks
            title="Compare &amp; Evaluate Brands"
            links={[
              { label: 'Compare Food Types', href: '/compare' },
              { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
              { label: 'Brand Evaluations', href: '/brands' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="ingredient-splitting"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <p>AAFCO requires the ingredient list to be ordered by ingoing weight before processing, descending. Owners reasonably read the first few ingredients as what the food is mostly made of. Ingredient splitting exploits this by dividing one component into multiple named fractions, each of which weighs less individually and so appears lower on the list — making a less-desirable ingredient look like a minor one. See <a href="/guides/reading-pet-food-labels">Reading a Pet Food Label</a>.</p>
        <h2 id="rule">The Descending-Order Rule</h2>
        <p>Each ingredient is listed by its weight as it goes into the batch, heaviest first. This single rule drives most label interpretation — and most label confusion. Because the order is by weight, not by nutritional contribution, and because water-heavy fresh ingredients rank higher than their dry contribution warrants, the order can mislead even without deliberate manipulation. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="howworks">How Splitting Works</h2>
        <p>Splitting divides what is functionally one ingredient into several named entries — for example, listing peas, pea protein, pea fiber, and pea starch separately rather than as total pea content. Each fraction weighs less than the combined total, so each ranks lower on the list, and an animal protein can appear first even though the combined plant fractions outweigh it. The same trick applies to splitting grains (ground corn, corn gluten meal, corn bran) or other components.</p>
        <h2 id="example">A Worked Example</h2>
        <p>Imagine a recipe with 30 units of chicken, and peas split into 12 units pea protein, 10 units pea starch, and 8 units pea fiber (30 units of pea components total). The label reads: chicken, pea protein, pea starch, pea fiber — chicken appears first and dominant. But the combined pea content (30 units) equals the chicken, and if the chicken is fresh (mostly water), its finished contribution is far smaller. The list implies a meat-first food; the formula is heavily plant-based. See <a href="/ingredients/legumes-peas-and-lentils">Legumes — Peas, Lentils, and Chickpeas</a>.</p>
        <h2 id="freshmeat">The Fresh-Meat First Trick</h2>
        <p>Compounding the issue, fresh meat is roughly 70 percent water at the ingoing step, so it ranks high by weight but contributes far less to the finished, dried kibble. A recipe leading with fresh chicken followed by split plant fractions can be plant-dominant in the finished product despite a meat-first appearance. Pairing fresh meat with a named meal lower in the list is a more honest way to deliver meat content. See <a href="/nutrition/dry-matter-basis-explained">Dry-Matter Basis Explained</a>.</p>
        <h2 id="seeingthrough">Seeing Through It</h2>
        <p>To see through splitting, mentally recombine related fractions: add up all the pea entries, all the corn entries, all the rice entries, and consider whether the combined plant content rivals or exceeds the animal protein. Note where fresh (wet) versus meal (dry) proteins sit. A long list of same-source fractions scattered through the panel is a flag for splitting.</p>
        <h2 id="trust">What to Trust Instead</h2>
        <p>Because the ingredient order is gameable, do not rely on it alone. Use the guaranteed analysis (on a dry-matter basis), request the typical analysis and the dry-matter nutrient breakdown from the manufacturer, check the AAFCO substantiation, and weigh manufacturer transparency. The ingredient list is one input among several, not the verdict. See <a href="/nutrition/guaranteed-analysis-explained">The Guaranteed Analysis Explained</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <h2 id="faq">Common Questions</h2>
        <p><strong>What is ingredient splitting in pet food?</strong></p>
        <p>
          Ingredient splitting divides what is functionally one ingredient into several named
          entries — for example, listing peas, pea protein, pea fiber, and pea starch separately
          rather than as total pea content. Because the AAFCO-required ingredient list is ordered
          by weight, each fraction weighs less than the combined total and ranks lower on the
          list, so an animal protein can appear first even though the combined plant fractions
          outweigh it.
        </p>
        <p><strong>How can I tell if a pet food label uses ingredient splitting?</strong></p>
        <p>
          Mentally recombine related fractions: add up all the pea entries, all the corn entries,
          all the rice entries, and consider whether the combined plant content rivals or exceeds
          the animal protein. A long list of same-source fractions scattered through the panel is
          a flag for splitting. Also note where fresh (wet) versus meal (dry) proteins sit on the
          list.
        </p>
        <p><strong>Does chicken listed first mean the food is mostly chicken?</strong></p>
        <p>
          Not necessarily. Fresh meat is roughly 70 percent water at the ingoing step, so it ranks
          high by weight but contributes far less to the finished, dried kibble. A recipe leading
          with fresh chicken followed by split plant fractions can be plant-dominant in the
          finished product despite a meat-first appearance. Pairing fresh meat with a named meal
          lower in the list is a more honest way to deliver meat content.
        </p>
        <p><strong>What should I trust instead of the ingredient order?</strong></p>
        <p>
          Because the ingredient order is gameable, do not rely on it alone. Use the guaranteed
          analysis on a dry-matter basis, request the typical analysis and dry-matter nutrient
          breakdown from the manufacturer, check the AAFCO substantiation, and weigh manufacturer
          transparency. The ingredient list is one input among several, not the verdict.
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
