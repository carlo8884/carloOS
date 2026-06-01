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
  title: 'Hyperthyroidism Diet for Cats — Iodine Restriction | PetFood.com',
  description:
    'How iodine-restricted diets manage feline hyperthyroidism, how the diet works, its strict requirements, and where it fits among the treatment options.',
  path: '/diets/hyperthyroid-cat-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Hyperthyroidism Diet for Cats — Iodine Restriction | PetFood.com',
  description:
    'How iodine-restricted diets manage feline hyperthyroidism, how the diet works, its strict requirements, and where it fits among the treatment options.',
  url: 'https://petfood.com/diets/hyperthyroid-cat-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HyperthyroidCatDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Hyperthyroid Cat Diets',
        subtitle:
          'Hyperthyroidism is one of the most common endocrine diseases of older cats, and dietary iodine restriction is one of several treatment options — a genuinely effective one, but with strict requirements that make it succeed or fail. This page explains how the iodine-restricted diet works, its demands, and where it fits alongside medication, radioiodine, and surgery.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets' },
        { name: 'Hyperthyroid Cat Diets', href: '/diets/hyperthyroid-cat-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Feline Hyperthyroidism', href: '#disease' },
              { label: 'How Iodine Restriction Works', href: '#iodine' },
              { label: 'The Strict Requirement', href: '#strict' },
              { label: 'Multi-Cat Households', href: '#multicat' },
              { label: 'Comparing Treatment Options', href: '#options' },
              { label: 'Monitoring', href: '#monitoring' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Feeding Multiple Pets', href: '/feeding/feeding-multiple-pets' },
              { label: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="hyperthyroid-cat-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Hyperthyroidism — overproduction of thyroid hormone, usually from a benign thyroid tumor — is common in cats over about 10 years and causes weight loss despite a ravenous appetite, hyperactivity, and secondary effects on the heart and kidneys. Among the treatment options, an iodine-restricted therapeutic diet can control the disease by limiting the iodine the thyroid needs to make hormone, but only if fed strictly and exclusively. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="disease">Feline Hyperthyroidism</h2>
        <p>The disease produces excess thyroid hormone, accelerating metabolism. Classic signs are weight loss with a strong appetite, increased thirst and urination, restlessness, and sometimes vomiting; untreated, it strains the heart and can mask or worsen kidney disease. Diagnosis is by blood thyroid-hormone testing. Treatment options include medication, radioiodine, surgery, and the iodine-restricted diet. See <a href="/diets/senior-pet-diets">Senior Pet Diets</a>.</p>
        <h2 id="iodine">How Iodine Restriction Works</h2>
        <p>Thyroid hormone is built from iodine, so a diet with iodine restricted to a very low level limits the raw material available, reducing hormone production and bringing thyroid levels toward normal in many cats. This is a targeted nutritional therapy that exploits a specific biochemical dependency. It works only because iodine is essential and rate-limiting for hormone synthesis.</p>
        <h2 id="strict">The Strict Requirement</h2>
        <p>The iodine-restricted diet works only if it is the cat&apos;s sole source of food. Any other food, treats, table scraps, or even iodine in drinking water or hunted prey can supply enough iodine to undermine the diet. This all-or-nothing requirement is the main limitation: a cat that goes outdoors and hunts, or a household that cannot prevent the cat eating other food, cannot reliably use the diet. See <a href="/feeding/feeding-multiple-pets">Feeding Multiple Pets</a>.</p>
        <h2 id="multicat">Multi-Cat Households</h2>
        <p>In multi-cat homes the diet is challenging because the hyperthyroid cat must eat only the restricted diet while the others should not (it is not appropriate for cats without the disease). Strict mealtime separation, no free-choice food, and sometimes microchip feeders are required. The difficulty of guaranteeing exclusivity often steers multi-cat households toward other treatment options. See <a href="/feeding/feeding-multiple-pets">Feeding Multiple Pets</a>.</p>
        <h2 id="options">Comparing Treatment Options</h2>
        <p>The diet is one of four main approaches. Anti-thyroid medication is effective and adjustable but lifelong and not curative. Radioiodine therapy is curative in most cats and considered the gold standard but requires a specialized facility. Surgery removes the affected tissue. The iodine-restricted diet is non-invasive and avoids medication but demands strict exclusive feeding and does not cure the underlying tumor. The choice depends on the cat, the household, concurrent disease, and cost, and is made with the veterinarian.</p>
        <h2 id="monitoring">Monitoring</h2>
        <p>Whichever treatment is used, hyperthyroid cats need monitoring of thyroid levels and kidney values, because controlling hyperthyroidism can unmask underlying kidney disease (the high thyroid state had been propping up apparent kidney function). Diet-managed cats need confirmation that thyroid levels have normalized and ongoing checks. This is a managed chronic disease, directed by the veterinarian. See <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>American Animal Hospital Association (AAHA) and American College of Veterinary Internal Medicine (ACVIM) consensus statements and nutrition guidelines, as applicable to the condition.</li>
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
