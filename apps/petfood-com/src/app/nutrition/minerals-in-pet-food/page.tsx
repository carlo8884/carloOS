import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Minerals in Pet Food — Macro and Trace | PetFood.com',
  description:
    'Calcium, phosphorus, and the Ca:P ratio, the trace minerals (zinc, copper, iron, selenium), chelated vs inorganic forms, and large-breed-puppy calcium ceilings.',
  path: '/nutrition/minerals-in-pet-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Minerals in Pet Food — Macro and Trace | PetFood.com',
  description:
    'Calcium, phosphorus, and the Ca:P ratio, the trace minerals (zinc, copper, iron, selenium), chelated vs inorganic forms, and large-breed-puppy calcium ceilings.',
  url: 'https://petfood.com/nutrition/minerals-in-pet-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function MineralsInPetFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Minerals in Pet Food',
        subtitle:
          'Minerals are inorganic nutrients that must be supplied in correct amounts and correct ratios — get the calcium-to-phosphorus ratio wrong in a growing large-breed puppy and you risk lifelong skeletal disease. This page covers the macrominerals, the trace minerals, the chelated-vs-inorganic question, and the AAFCO maxima that exist specifically to prevent harm.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
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
              { label: 'Macro vs Trace', href: '#macrotrace' },
              { label: 'Calcium and Phosphorus', href: '#caphos' },
              { label: 'The Ca:P Ratio', href: '#ratio' },
              { label: 'Trace Minerals', href: '#trace' },
              { label: 'Chelated vs Inorganic', href: '#chelated' },
              { label: 'Large-Breed Puppy Ceilings', href: '#largebreed' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
              { label: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
              { label: 'Large-Breed Puppy Nutrition', href: '/feeding/large-breed-puppy-nutrition' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="minerals-in-pet-food"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Minerals are required in defined amounts, and several of them interact — an excess of one can induce deficiency of another. The AAFCO profiles set minima for the essential minerals and, importantly, maxima for several, because over-supply is as harmful as under-supply. A complete diet meets these targets through ingredients plus a mineral premix; the balance and ratio matter as much as the absolute amounts.</p>
        <h2 id="macrotrace">Macrominerals vs Trace Minerals</h2>
        <p>Macrominerals (calcium, phosphorus, magnesium, sodium, potassium, chloride) are needed in gram quantities and form the structural and electrolyte backbone of the body. Trace minerals (zinc, copper, iron, manganese, selenium, iodine) are needed in milligram or microgram quantities and act largely as enzyme cofactors. Both groups are essential; the difference is quantity, not importance.</p>
        <h2 id="caphos">Calcium and Phosphorus</h2>
        <p>Calcium and phosphorus together build bone and teeth and run countless cellular processes. Their dietary balance is one of the most carefully regulated aspects of pet nutrition. The AAFCO Dog Food Nutrient Profile sets calcium at a minimum of 0.5 percent dry-matter for adult maintenance (1.2 percent for growth) and phosphorus at a minimum of 0.4 percent (1.0 percent for growth), with maxima on both for growth diets. Excess phosphorus is a particular concern in chronic kidney disease, where phosphorus-restricted diets are a cornerstone of management. See <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>
        <h2 id="ratio">The Calcium-to-Phosphorus Ratio</h2>
        <p>Beyond absolute amounts, the calcium-to-phosphorus ratio matters. AAFCO targets a ratio between roughly 1:1 and 2:1 for dogs. A ratio skewed too far toward phosphorus — common in all-meat homemade diets, which are calcium-poor and phosphorus-rich — drives the body to pull calcium from bone, producing nutritional secondary hyperparathyroidism and pathological fractures. This is one of the classic harms of an unbalanced home-prepared diet. See <a href="/compare/home-cooked-vs-commercial">Home-Cooked Diets</a>.</p>
        <h2 id="trace">Trace Minerals</h2>
        <p>Zinc supports skin, coat, and immune function; deficiency produces a characteristic dermatosis, and certain northern-breed dogs have a genetic zinc-absorption defect. Copper and iron support blood and connective tissue, though excess copper is hepatotoxic and some breeds (notably Bedlington Terriers and Labrador Retrievers) are predisposed to copper-associated liver disease, prompting recent attention to dietary copper levels. Selenium and vitamin E work together as antioxidants. Iodine is required for thyroid hormone, and both deficiency and excess affect thyroid function — relevant in cats given the high rate of feline hyperthyroidism.</p>
        <h2 id="chelated">Chelated vs Inorganic Minerals</h2>
        <p>Minerals are added either as inorganic salts (oxides, sulfates, carbonates) or as organic chelates and proteinates, in which the mineral is bound to an amino acid or peptide. Chelated forms are generally more bioavailable, which means a lower inclusion rate achieves the same absorbed amount and reduces the unabsorbed mineral load reaching the colon. Many premium diets use chelated trace minerals, often listed as a proteinate or amino-acid complex on the panel. The benefit is real but incremental; a diet using inorganic minerals at adequate levels is still complete.</p>
        <h2 id="largebreed">Large-Breed Puppy Calcium Ceilings</h2>
        <p>Large- and giant-breed puppies are uniquely sensitive to excess calcium during growth, which is linked to developmental orthopedic diseases including osteochondrosis and hip dysplasia. For this reason AAFCO created a separate growth profile for large-size dogs (adult weight 70 pounds or more) with a tighter calcium maximum. An all-life-stages food not validated for large-size growth can legally exceed this ceiling, which is why owners of large-breed puppies must confirm the food is labeled for growth including large-size growth. See <a href="/feeding/large-breed-puppy-nutrition">Large-Breed Puppy Nutrition</a> and <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
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
