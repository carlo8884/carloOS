import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
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
  title: 'Freeze-Dried and Dehydrated Pet Food Explained | PetFood.com',
  description:
    'How freeze-dried and dehydrated diets are made, the raw-versus-cooked distinction, rehydration and pathogen considerations, and how to evaluate them.',
  path: '/compare/freeze-dried-and-dehydrated',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Freeze-Dried and Dehydrated Pet Food Explained | PetFood.com',
  description:
    'How freeze-dried and dehydrated diets are made, the raw-versus-cooked distinction, rehydration and pathogen considerations, and how to evaluate them.',
  url: 'https://petfood.com/compare/freeze-dried-and-dehydrated',
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
    {
      label: "Pet Food Labels — General; Animal Food Ingredients: Regulatory Framework; FDA CVM Recalls & Withdrawals",
      url: "https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function FreezeDriedAndDehydratedPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Freeze-Dried and Dehydrated Diets',
        subtitle:
          'Freeze-dried and dehydrated diets occupy a middle ground between kibble and fresh or raw food — shelf-stable like kibble, but often minimally cooked or raw. The key questions are whether the product is raw or cooked, whether it is complete and balanced, and how it is meant to be served. This page explains the processes and how to evaluate the category.',
        category: 'Food-Type Comparison',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compare', href: '/compare' },
        { name: 'Freeze-Dried and Dehydrated Diets', href: '/compare/freeze-dried-and-dehydrated' },
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
              { label: 'How They Are Made', href: '#howmade' },
              { label: 'Raw vs Cooked Base', href: '#rawcooked' },
              { label: 'Rehydration', href: '#rehydration' },
              { label: 'Pathogen Considerations', href: '#pathogen' },
              { label: 'Complete vs Topper', href: '#completetopper' },
              { label: 'Evaluating the Product', href: '#evaluating' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Raw vs Cooked Diets', href: '/compare/raw-vs-cooked-diets' },
              { label: 'Pet Food Storage and Safety', href: '/feeding/food-storage-and-safety' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="freeze-dried-and-dehydrated"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="petfood-com:compare-freeze-dried-and-dehydrated" priority aspect="16:9" variant="wide" caption="Freeze-dried versus dehydrated — two ways to remove water, and what each does to nutrients and safety." />
        <p>Freeze-drying and dehydration both remove water to make food shelf-stable, but by different methods and at different temperatures, and the starting material may be raw or cooked. The category includes complete diets meant to be the sole food and toppers meant only to enhance a complete diet. Because of this variety, the label and the AAFCO statement matter as much here as anywhere. See <a href="/compare/raw-vs-cooked-diets">Raw vs Cooked Diets</a>.</p>
        <h2 id="howmade">How They Are Made</h2>
        <p>Freeze-drying (lyophilization) freezes the food, then removes water by sublimation under vacuum at low temperature, preserving structure and most nutrients with minimal heat. Dehydration removes water using warm air, which is gentler than extrusion but applies more heat than freeze-drying. Both yield a lightweight, shelf-stable product that is usually rehydrated before feeding. Freeze-drying is more expensive and better at preserving heat-sensitive nutrients.</p>
        <h2 id="rawcooked">Raw vs Cooked Base</h2>
        <p>A crucial distinction: many freeze-dried diets are made from raw ingredients and are therefore raw diets in shelf-stable form, carrying the same pathogen considerations as other raw food. Dehydrated diets may be raw or gently cooked depending on the temperature used. The package usually states whether the product is raw; this determines the handling-safety profile. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="rehydration">Rehydration</h2>
        <p>Most freeze-dried and dehydrated complete diets are designed to be rehydrated with water before feeding, which restores moisture (a hydration benefit similar to wet food) and releases aroma for palatability. Feeding them dry is possible for some products but reduces the moisture benefit and, for a thirsty animal, may be less ideal. Follow the manufacturer&apos;s rehydration instructions, and use clean water.</p>
        <h2 id="pathogen">Pathogen Considerations</h2>
        <p>Freeze-drying and dehydration reduce but do not reliably eliminate pathogens, particularly in raw-based products — drying is not a kill step the way cooking is. Some manufacturers apply high-pressure processing or another validated kill step; others do not. Raw freeze-dried diets therefore carry handling-safety considerations like other raw food, and the same cautions apply for immunocompromised households. See <a href="/guides/raw-pet-food-evaluation">Raw Pet Food Evaluation</a>.</p>
        <h2 id="completetopper">Complete vs Topper</h2>
        <p>Some freeze-dried products are complete and balanced diets; many are toppers, mixers, or treats intended only to supplement a complete diet, and carry the intermittent-or-supplemental-feeding statement rather than a complete-and-balanced one. Feeding a topper as the sole diet causes nutritional imbalance. Always check the AAFCO statement to know which you have. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>
        <h2 id="evaluating">Evaluating the Product</h2>
        <p>Check whether the product is raw or cooked (for the safety profile), whether it carries a complete-and-balanced AAFCO statement for the life stage or is intended only as a topper, the calorie density (these diets are energy-dense by dry weight, so portions are small), and the manufacturer&apos;s transparency and kill-step practices. The convenience and palatability are real; the safety and completeness depend on the specific product.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Before buying, settle the two questions that define this category: is the product raw or cooked (which sets the handling-safety profile), and is it a complete-and-balanced diet or a topper meant only to supplement a complete food? The brand-search links below surface the category at the major retailers; check the AAFCO statement and the raw-vs-cooked label on the specific product. We earn an affiliate commission on purchases through these links at no extra cost to you, and we never rank by commission.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="freeze-dried-complete"
          badge="Complete Diet"
          badgeEmoji="❄️"
          name="Freeze-Dried Complete Diets"
          subtitle="Shelf-stable, minimally heated, rehydrate before feeding"
          score={8.0}
          winner
          description={
            <p>Freeze-dried complete diets preserve most heat-sensitive nutrients with minimal heat and are usually rehydrated before serving. Many are raw-based, so they carry raw-food handling considerations — prefer products with a validated kill step (such as high-pressure processing) and a complete-and-balanced AAFCO statement for the life stage. Energy-dense by dry weight, so portions are small.</p>
          }
          specs={[
            { label: 'Processing', value: 'Low-heat freeze-dry', highlight: 'good' },
            { label: 'Check', value: 'Raw vs cooked label', highlight: 'warn' },
            { label: 'AAFCO', value: 'Confirm complete-and-balanced' },
            { label: 'Serving', value: 'Usually rehydrated' },
          ]}
          pros={['Preserves heat-sensitive nutrients', 'Shelf-stable convenience', 'High palatability']}
          cons={['Often raw-based — handling caution', 'Premium price', 'Drying is not a reliable kill step']}
          price="Premium per calorie"
          ctaText="Search Freeze-Dried Diets on Chewy"
          ctaHref="/go/chewy-brand/freeze%20dried%20complete%20dog%20food?s=compare-freeze-dried-and-dehydrated"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="freeze%20dried%20complete%20dog%20food"
        />
        <ReviewCard
          id="dehydrated-complete"
          badge="Dehydrated"
          badgeEmoji="🌬️"
          name="Dehydrated Complete Diets"
          subtitle="Warm-air dried, gently cooked or raw, rehydrate to serve"
          score={7.8}
          description={
            <p>Dehydrated diets use warm air to remove moisture — gentler than extrusion but more heat than freeze-drying — and may be gently cooked or raw depending on temperature. Rehydrate per the manufacturer&apos;s instructions to restore moisture and aroma. Confirm whether the product is a complete diet or a topper, and check the calorie density.</p>
          }
          specs={[
            { label: 'Processing', value: 'Warm-air dehydration' },
            { label: 'Base', value: 'Cooked or raw — check label', highlight: 'warn' },
            { label: 'AAFCO', value: 'Confirm complete vs topper' },
          ]}
          pros={['Gentler than extrusion', 'Shelf-stable', 'Rehydrates for moisture benefit']}
          cons={['Some are toppers, not complete diets', 'Premium price', 'Check the kill-step practice']}
          price="Premium per calorie"
          ctaText="Search Dehydrated Diets on Amazon"
          ctaHref="/go/amazon-brand/dehydrated%20complete%20dog%20food?s=compare-freeze-dried-and-dehydrated"
          ctaAffiliateProgram="amazon-brand"
          ctaAffiliateProduct="dehydrated%20complete%20dog%20food"
        />

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
