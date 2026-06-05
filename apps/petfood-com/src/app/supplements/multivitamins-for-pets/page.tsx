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
  title: 'Do Pets Need Multivitamins? — The Evidence | PetFood.com',
  description:
    'Why pets on complete diets rarely need a multivitamin — the over-supplementation risk for fat-soluble vitamins, when it is justified, and quality.',
  path: '/supplements/multivitamins-for-pets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Do Pets Need Multivitamins? — The Evidence | PetFood.com',
  description:
    'Why animals on complete diets rarely need a multivitamin, the over-supplementation risk for fat-soluble vitamins, when supplementation is justified, and quality.',
  url: 'https://petfood.com/supplements/multivitamins-for-pets',
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

export default function MultivitaminsForPetsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Multivitamins for Pets',
        subtitle:
          'Multivitamins are among the most-purchased and least-necessary pet supplements. An animal eating a complete and balanced diet already receives every required vitamin and mineral in the right amount, and adding a multivitamin can push fat-soluble vitamins toward harm. This page explains when supplementation helps, when it hurts, and how to evaluate a product.',
        category: 'Supplement Reference',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Supplements', href: '/supplements' },
        { name: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
      ]}
      relatedLinks={[
        { title: 'Supplements Hub', href: '/supplements' },
        { title: 'Fish Oil and Omega-3', href: '/supplements/fish-oil-omega-3' },
        { title: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
        { title: 'Glucosamine and Joint Support', href: '/supplements/glucosamine-and-joint-support' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Complete Diets Already Cover It', href: '#complete' },
              { label: 'The Over-Supplementation Risk', href: '#oversupplementation' },
              { label: 'When Supplementation Helps', href: '#whenhelps' },
              { label: 'Home-Prepared Diets', href: '#homeprepared' },
              { label: 'Reading a Multivitamin', href: '#reading' },
              { label: 'The Bottom Line', href: '#bottomline' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Home-Cooked vs Commercial Diets', href: '/compare/home-cooked-vs-commercial' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="multivitamins-for-pets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>A complete and balanced commercial diet is formulated and supplemented to meet the AAFCO nutrient profiles, which means it already supplies all required vitamins and minerals in appropriate amounts and ratios. For a healthy animal on such a diet, a multivitamin is redundant at best and, because several nutrients are toxic in excess, potentially harmful. The supplement industry&apos;s framing of multivitamins as universal insurance is not supported. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="complete">Complete Diets Already Cover It</h2>
        <p>The vitamin and mineral premix added to commercial food is calculated to meet requirements after accounting for processing losses and shelf-life decay. Adding a multivitamin on top stacks a second full dose of fat-soluble vitamins and minerals onto a diet already meeting the targets, with no benefit since the requirement is already met. More of a nutrient that is already adequate does not improve health. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="oversupplementation">The Over-Supplementation Risk</h2>
        <p>The fat-soluble vitamins (A, D, E, K) accumulate in the body, so excess is a genuine toxicity risk, not merely waste. Excess vitamin D can be dangerous; excess vitamin A causes painful skeletal disease, classically in cats. Excess of some minerals interferes with absorption of others. Routinely adding a multivitamin to a complete diet is the most common way owners create this avoidable risk. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="whenhelps">When Supplementation Helps</h2>
        <p>Targeted supplementation has a real place under veterinary direction: documented deficiencies, specific malabsorption conditions (for example, cobalamin deficiency in some GI disease), certain life-stage or medical needs, and — importantly — home-prepared diets that require a balancing supplement to be complete. The key word is targeted: supplement a specific identified need, not a generic just-in-case.</p>
        <h2 id="homeprepared">Home-Prepared Diets</h2>
        <p>The one common scenario where a vitamin-and-mineral supplement is essential is a home-cooked or home-prepared diet, which whole-food ingredients alone cannot balance — particularly for calcium and several micronutrients. Such a diet should be formulated by a board-certified veterinary nutritionist who specifies the exact supplement and dose. This is supplementation to complete the diet, not to top up an already-complete one. See <a href="/compare/home-cooked-vs-commercial">Home-Cooked vs Commercial Diets</a>.</p>
        <h2 id="reading">Reading a Multivitamin</h2>
        <p>If supplementation is indicated, evaluate the product: confirm it provides the specific nutrient needed without megadoses of fat-soluble vitamins, prefer products with a NASC seal or third-party quality testing, check that it is formulated for the species (cat and dog needs differ), and confirm the dose with the veterinarian relative to what the diet already supplies. Avoid stacking multiple supplements that overlap.</p>
        <h2 id="bottomline">The Bottom Line</h2>
        <p>For a healthy animal on a complete and balanced diet, a multivitamin is unnecessary and carries a small but real over-supplementation risk. Supplement only a specific, identified need, under veterinary guidance, and reserve full vitamin-and-mineral supplementation for home-prepared diets formulated by a nutritionist. The default for a commercially fed pet is no multivitamin. See <a href="/myths">Pet Food Myths</a>.</p>

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
