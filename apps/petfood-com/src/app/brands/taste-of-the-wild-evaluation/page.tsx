import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildProductSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline,
  StockImage
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Taste of the Wild — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Taste of the Wild — Diamond Pet Foods context, grain-free positioning and the DCM question, manufacturing, AAFCO posture, recalls.',
  path: '/brands/taste-of-the-wild-evaluation',
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
      label: "FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy",
      url: "https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]
const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Taste of the Wild — Independent Evaluation | PetFood.com',
  description:
    'Five-dimension evaluation of Taste of the Wild — Diamond Pet Foods context, grain-free positioning and the DCM question, manufacturing, AAFCO posture, recalls.',
  url: 'https://petfood.com/brands/taste-of-the-wild-evaluation',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

// Editorial Product/Review schema for the single scored pick on this page
// (QC §1.4 — editorial Review only, never AggregateRating; the rating mirrors
// the disclosed on-page editorial score).
const productSchema = buildProductSchema({
  name: 'Taste of the Wild',
  description:
    'Mid-priced grain-free line using novel proteins (bison, venison, fish) with legume- and potato-based carbohydrate, manufactured by Diamond Pet Foods. The legume-inclusive grain-free pattern intersects the FDA diet-associated DCM question — an open question, not a proven cause.',
  reviewBody:
    'Popular mid-priced grain-free line with novel proteins; the legume-inclusive formulation is also the pattern at the center of the FDA diet-associated DCM investigation, which remains an open question. Made by Diamond Pet Foods, whose record includes the major 2012 Salmonella recall. Worth a veterinary conversation for at-risk dogs.',
  reviewAuthorName: 'PetFood.com Editorial',
  ratingValue: 7.0,
})
// Content-aware FAQ derived from the sections above — calibrated, sourced-tone
// answers only (QC §1: no clinical claims, no superlatives).
const FAQ = [
  {
    question: 'Is Taste of the Wild linked to DCM?',
    answer:
      'Taste of the Wild is built on the grain-free, legume-inclusive formulation pattern at the center of the FDA CVM diet-associated dilated cardiomyopathy investigation. The investigation identified an association, not proven causation, and the mechanism remains unresolved. For owners of DCM-predisposed breeds, a legume-heavy grain-free diet is worth discussing with a veterinarian.',
  },
  {
    question: 'Who makes Taste of the Wild?',
    answer:
      'Taste of the Wild is owned and manufactured by Diamond Pet Foods, a large privately held US manufacturer that produces many brands across its own facilities. The brand inherits the facilities’ quality-control track record, including the major 2012 Salmonella recall event at one Diamond facility.',
  },
  {
    question: 'Is grain-free food healthier for my pet?',
    answer:
      'Grain-free is a marketing position, not a quality tier. It does not reduce allergy risk for most animals — grains are an uncommon allergen — and it is not the same as low-carbohydrate, since grain starch is simply replaced by legume and potato starch. The legume-inclusive grain-free pattern is also the one at the center of the FDA DCM investigation.',
  },
  {
    question: 'Has Taste of the Wild been recalled?',
    answer:
      'The most significant event on the record is the 2012 Salmonella recall centered on its manufacturer, Diamond Pet Foods, which affected multiple brands made at one facility and sickened pets and people. Recalls should be judged by cause, severity, and corrective response; the FDA CVM Recalls and Withdrawals database holds the current record.',
  },
]

const pageSchema = combineSchemas(schema, productSchema, buildFAQSchema({ questions: FAQ }))


export default function TasteOfTheWildEvaluationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Taste of the Wild — An Independent Evaluation',
        subtitle:
          'Taste of the Wild built a large following on grain-free, novel-protein recipes at a mid-market price, but it also sits in the category most associated with the FDA dilated cardiomyopathy investigation and is made by Diamond Pet Foods, whose recall history is relevant. This independent evaluation runs the brand through the PetFood.com five-dimension rubric. Never paid placement.',
        category: 'Brand Evaluation',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Brands', href: '/brands' },
        { name: 'Taste of the Wild — An Independent Evaluation', href: '/brands/taste-of-the-wild-evaluation' },
      ]}
      relatedLinks={[
        { title: 'Brands Hub', href: '/brands' },
        { title: 'Hill\'s vs Royal Canin', href: '/brands/hills-vs-royal-canin' },
        { title: 'Purina Pro Plan Evaluation', href: '/brands/purina-pro-plan-evaluation' },
        { title: 'Orijen vs Acana Comparison', href: '/brands/orijen-vs-acana-comparison' },
      ]}
      schema={pageSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Corporate Context', href: '#corporate' },
              { label: 'Grain-Free Positioning', href: '#grainfree' },
              { label: 'The DCM Question', href: '#dcm' },
              { label: 'Research and Nutritionists', href: '#research' },
              { label: 'Manufacturing', href: '#manufacturing' },
              { label: 'Recall History', href: '#recall' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
              { label: 'How to Choose a Pet Food', href: '/guides/how-to-choose-a-pet-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="taste-of-the-wild-evaluation"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:brand-taste-of-the-wild" fallbackKey="petfood-com:category-brands" priority aspect="16:9" variant="wide" caption="Taste of the Wild — a grain-free line made by Diamond Pet Foods, evaluated on the DCM question and recall context." />
        <p>Taste of the Wild is a grain-free, ancestral-themed line made by Diamond Pet Foods, evaluated here against the PetFood.com five-dimension rubric. It is a popular mid-priced option whose grain-free, legume-inclusive positioning intersects with two important issues on our rubric: the FDA DCM investigation and the manufacturer&apos;s recall history. The evaluation is independent and never influenced by any commercial relationship. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a> and <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <div style={{ margin: '24px 0', padding: '18px 20px', borderRadius: '12px', border: '1px solid var(--brand-border)', borderLeft: '4px solid var(--brand-primary)', background: 'var(--brand-surface)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--brand-primary-dark)', marginBottom: '8px' }}>Bottom Line</div>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--brand-text-mid)' }}>
            Taste of the Wild is a popular mid-priced, grain-free line made by Diamond Pet Foods. Two rubric issues stand out: its legume-inclusive grain-free formulation is the pattern associated — not proven causally — with diet-associated DCM in the FDA investigation, and its contract manufacturer carries a significant recall history. Owners of DCM-predisposed breeds should discuss a legume-heavy grain-free diet with a veterinarian, and outside a confirmed grain allergy there is no general health advantage to grain-free.
          </p>
        </div>

        <h2 id="corporate">Corporate Context</h2>
        <p>Taste of the Wild is owned and manufactured by Diamond Pet Foods, a large privately held US manufacturer that produces many brands across its facilities. Diamond&apos;s scale gives manufacturing capacity, but its corporate history includes a significant recall event (discussed below) that bears on the manufacturing and recall dimensions of our rubric. Corporate context here is mixed: substantial scale, with a recall record that warrants attention.</p>
        <h2 id="grainfree">Grain-Free Positioning</h2>
        <p>Taste of the Wild is built on grain-free recipes using novel proteins (bison, venison, fish) and legume- and potato-based carbohydrate. Grain-free is a marketing position, not a quality tier, and as discussed across this site it does not reduce allergy risk for most animals and is not the same as low-carbohydrate. The legume-inclusive grain-free formulation is also the pattern at the center of the DCM investigation. See <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a> and <a href="/ingredients/legumes-peas-and-lentils">Legumes — Peas, Lentils, and Chickpeas</a>.</p>
        <h2 id="dcm">The DCM Question</h2>
        <p>Grain-free, legume-heavy diets are the formulation pattern associated — though not proven causally — with diet-associated dilated cardiomyopathy in the FDA CVM investigation, and several grain-free brands in this category were named in the FDA&apos;s case reporting. The mechanism remains unresolved. For owners of DCM-predisposed breeds, a legume-heavy grain-free diet is worth discussing with a veterinarian. This open question is a meaningful caution on our rubric for the grain-free category broadly. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="research">Research and Nutritionists</h2>
        <p>On the WSAVA criteria — qualified nutritionists on staff, feeding-trial substantiation, and published research — mid-market grain-free brands generally disclose less than the largest research-driven manufacturers. The relevant questions to ask are whether the company employs a board-certified veterinary nutritionist, whether diets are feeding-trial tested, and what research it conducts. Owners should seek these answers directly rather than relying on the brand&apos;s ancestral marketing narrative. See <a href="/guides/how-to-choose-a-pet-food">How to Choose a Pet Food</a>.</p>
        <h2 id="manufacturing">Manufacturing</h2>
        <p>Diamond Pet Foods manufactures Taste of the Wild in its own facilities, which supports control but also means the brand inherits the facilities&apos; quality-control track record. The manufacturing dimension is best evaluated on disclosed quality-control and audit practices and on the recall history below. Manufacturer transparency on sourcing and process is the signal to seek. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>
        <h2 id="recall">Recall History</h2>
        <p>Diamond Pet Foods was at the center of a major 2012 Salmonella recall affecting multiple brands made at one of its facilities, an event that sickened pets and people and remains the most significant mark on the manufacturer&apos;s record. This history is material under our recall dimension. Recalls should be judged by cause, severity, and the corrective response, and the FDA CVM database holds the current record. A serious past recall warrants attention to whether manufacturing controls have since been strengthened. See <a href="/guides/pet-food-recalls-and-fda">Pet Food Recalls and the FDA</a>.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Taste of the Wild is a grain-free, legume-inclusive line, and the most important thing to carry into a purchase decision is the unresolved diet-associated DCM question above — for owners of DCM-predisposed breeds, discuss a legume-heavy grain-free diet with a veterinarian first. With that caveat understood, the brand-search link below surfaces the current lineup. We earn an affiliate commission on purchases through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="taste-of-the-wild-retail"
          badge="Grain-Free Mid-Tier"
          badgeEmoji="🦬"
          name="Taste of the Wild"
          subtitle="Novel-protein, grain-free recipes — read with the DCM caution"
          score={7.0}
          description={
            <p>A popular mid-priced grain-free line using novel proteins (bison, venison, fish) and legume- and potato-based carbohydrate. The novel proteins and price are the draw; the legume-inclusive grain-free formulation is also the pattern at the center of the FDA diet-associated DCM investigation, which is an open question rather than a proven cause. Manufactured by Diamond Pet Foods, whose record includes the major 2012 Salmonella recall. Worth a veterinary conversation for at-risk dogs.</p>
          }
          specs={[
            { label: 'Positioning', value: 'Grain-free novel protein' },
            { label: 'DCM question', value: 'Legume-heavy pattern', highlight: 'warn' },
            { label: 'Manufacturer', value: 'Diamond Pet Foods' },
            { label: 'Price', value: 'Mid-tier' },
          ]}
          pros={['Novel proteins available', 'Mid-tier pricing', 'Widely stocked']}
          cons={['Legume-heavy grain-free — DCM investigation pattern', 'Thinner research disclosure than top brands', 'Manufacturer recall history']}
          price="$$ mid-tier"
          ctaText="Search Taste of the Wild on Chewy"
          ctaHref="/go/chewy-brand/Taste%20of%20the%20Wild?s=eval-taste-of-the-wild"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="Taste%20of%20the%20Wild"
        />

        <h2 id="faq">Common Questions</h2>
        {FAQ.map((f) => (
          <div key={f.question}>
            <p><strong>{f.question}</strong></p>
            <p>{f.answer}</p>
          </div>
        ))}

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
