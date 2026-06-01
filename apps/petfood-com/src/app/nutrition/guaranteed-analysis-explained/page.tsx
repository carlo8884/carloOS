import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Guaranteed Analysis on Pet Food Labels Explained | PetFood.com',
  description:
    'What the guaranteed analysis discloses, the minimum-maximum framing, why it is not a typical analysis, and how to use it without being misled.',
  path: '/nutrition/guaranteed-analysis-explained',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Guaranteed Analysis on Pet Food Labels Explained | PetFood.com',
  description:
    'What the guaranteed analysis discloses, the minimum-maximum framing, why it is not a typical analysis, and how to use it without being misled.',
  url: 'https://petfood.com/nutrition/guaranteed-analysis-explained',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function GuaranteedAnalysisExplainedPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'The Guaranteed Analysis Explained',
        subtitle:
          'The guaranteed analysis is the small box of percentages on every pet food bag, and it is one of the most frequently misread label elements. It is a regulatory guarantee of minima and maxima, not a statement of what the food actually contains. This page explains what it discloses, what it hides, and how to extract real information from it.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'The Guaranteed Analysis Explained', href: '/nutrition/guaranteed-analysis-explained' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What It Is', href: '#whatis' },
              { label: 'Minimums and Maximums', href: '#minmax' },
              { label: 'The Required Four', href: '#requiredfour' },
              { label: 'Guaranteed vs Typical Analysis', href: '#typical' },
              { label: 'Voluntary Guarantees', href: '#voluntary' },
              { label: 'Using It Well', href: '#using' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Dry-Matter Basis Explained', href: '/nutrition/dry-matter-basis-explained' },
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="guaranteed-analysis-explained"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The guaranteed analysis is required on every pet food label under AAFCO model regulations. It states the manufacturer&apos;s guarantee for certain nutrients, expressed as minimum or maximum percentages on an as-fed basis. The word guarantee is the key: the food will contain at least the stated minimum of protein and fat, and no more than the stated maximum of fiber and moisture. The actual content is usually somewhat different from the guarantee.</p>
        <h2 id="whatis">What It Is</h2>
        <p>The guaranteed analysis exists for regulatory enforcement. A state feed-control official can pull a sample and test whether the food meets its own guarantees; a food that falls below its guaranteed protein minimum or above its guaranteed fiber maximum is misbranded. The guarantee is therefore a floor-and-ceiling commitment, not a description of the average batch.</p>
        <h2 id="minmax">Minimums and Maximums</h2>
        <p>Crude protein and crude fat are guaranteed as minima — the food contains at least that much. Crude fiber and moisture are guaranteed as maxima — the food contains no more than that. This framing means the real protein is usually a bit above the stated minimum and the real moisture usually a bit below the stated maximum. It also means two foods with the same guaranteed protein minimum can differ in actual protein, and that the guaranteed analysis is a coarse instrument for comparison.</p>
        <h2 id="requiredfour">The Required Four</h2>
        <p>Four guarantees are mandatory on every label: crude protein minimum, crude fat minimum, crude fiber maximum, and moisture maximum. The word crude refers to the analytical method (it estimates the nutrient rather than measuring it precisely), not to ingredient quality. Crude protein, as noted elsewhere, is nitrogen times 6.25 and says nothing about amino-acid quality. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="typical">Guaranteed vs Typical Analysis</h2>
        <p>The guaranteed analysis is not the typical analysis. The typical (or average) analysis is the manufacturer&apos;s measured average nutrient content across production, and it is the figure you actually want for comparison and for dry-matter math. Manufacturers will usually provide the typical analysis on request, often including amino acids, the full mineral panel, and a measured metabolizable-energy value. For careful comparison, request the typical analysis rather than relying on the guarantee. See <a href="/nutrition/dry-matter-basis-explained">Dry-Matter Basis Explained</a>.</p>
        <h2 id="voluntary">Voluntary Guarantees</h2>
        <p>Beyond the required four, manufacturers may add voluntary guarantees — taurine, omega-3 and omega-6 fatty acids, glucosamine, calcium, phosphorus, and others. Any voluntary guarantee, once printed, becomes enforceable. Voluntary guarantees are useful when they disclose a nutrient relevant to a buying decision (for example, taurine in a cat food, or EPA/DHA in a joint diet), but their absence does not mean the nutrient is absent — only that it is not guaranteed.</p>
        <h2 id="using">Using the Guaranteed Analysis Well</h2>
        <ol>
          <li>Read protein and fat as floors, fiber and moisture as ceilings — not as the actual content.</li>
          <li>Convert to a dry-matter basis before comparing wet and dry, or before checking against an AAFCO profile.</li>
          <li>Do not rank protein quality by the guaranteed minimum; use the ingredient panel for that.</li>
          <li>Request the typical analysis from the manufacturer when you need accurate numbers.</li>
          <li>Treat voluntary guarantees (taurine, omega-3) as a transparency signal, not a completeness check.</li>
        </ol>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
