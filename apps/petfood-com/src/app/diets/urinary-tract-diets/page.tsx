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
  title: 'Urinary Tract and Bladder Stone Diets for Pets | PetFood.com',
  description:
    'How urinary diets manage struvite and calcium-oxalate stones and FLUTD — urine pH, mineral targets, dilution, and why stone type determines the diet.',
  path: '/diets/urinary-tract-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Urinary Tract and Bladder Stone Diets for Pets | PetFood.com',
  description:
    'How urinary diets manage struvite and calcium-oxalate stones and FLUTD — urine pH, mineral targets, dilution, and why stone type determines the diet.',
  url: 'https://petfood.com/diets/urinary-tract-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function UrinaryTractDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Urinary and Bladder Stone Diets',
        subtitle:
          'Urinary therapeutic diets manage two of the most common lower-urinary-tract problems: mineral stones (uroliths) and feline idiopathic cystitis. The right diet depends entirely on the stone type, because the diet that dissolves one stone can promote another. This page covers struvite versus calcium oxalate, urine pH and dilution, and the central role of water.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets' },
        { name: 'Urinary and Bladder Stone Diets', href: '/diets/urinary-tract-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Lower Urinary Tract', href: '#lut' },
              { label: 'Struvite Stones', href: '#struvite' },
              { label: 'Calcium Oxalate Stones', href: '#oxalate' },
              { label: 'Urine pH and Minerals', href: '#ph' },
              { label: 'Dilution and Moisture', href: '#dilution' },
              { label: 'Feline Idiopathic Cystitis', href: '#fic' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Water and Hydration', href: '/nutrition/water-and-hydration' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="urinary-tract-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Lower urinary tract disease in dogs and cats includes uroliths (bladder stones), urethral plugs, infection, and — in cats especially — idiopathic cystitis. Diet is a cornerstone of both treating and preventing mineral stones, and stone composition determines everything: the dietary changes that dissolve a struvite stone can worsen a calcium-oxalate stone, so a diagnosis of stone type, ideally by analysis of a retrieved stone, must precede the diet decision.</p>
        <h2 id="lut">The Lower Urinary Tract</h2>
        <p>Uroliths form when urine becomes supersaturated with stone-forming minerals. The two most common types in dogs and cats are struvite (magnesium ammonium phosphate) and calcium oxalate. Their behavior is opposite in important ways: struvite can often be dissolved medically and is influenced by infection and pH, while calcium oxalate cannot be dissolved by diet and must be managed by prevention after surgical or other removal.</p>
        <h2 id="struvite">Struvite Stones</h2>
        <p>In cats, struvite stones are usually sterile and diet-responsive; therapeutic struvite-dissolution diets acidify the urine and restrict magnesium and phosphorus, dissolving existing stones over weeks and preventing recurrence. In dogs, struvite stones are most often associated with urinary tract infection, so treatment combines an appropriate diet with antibiotic therapy directed at the infection. Dissolution diets are used short-term and require veterinary monitoring.</p>
        <h2 id="oxalate">Calcium Oxalate Stones</h2>
        <p>Calcium oxalate stones cannot be dissolved by diet — they must be removed, then prevented. Prevention diets aim to reduce urinary calcium and oxalate saturation, avoid over-acidifying the urine (excessive acidification promotes oxalate), and most importantly maximize urine dilution. Calcium-oxalate prevalence has risen alongside the use of acidifying struvite diets, illustrating why matching the diet to the stone type matters.</p>
        <h2 id="ph">Urine pH and Minerals</h2>
        <p>Urine pH strongly influences which minerals precipitate: alkaline urine favors struvite, while excessively acidic urine favors calcium oxalate. Urinary diets manipulate pH through dietary cation-anion balance and restrict the relevant minerals (magnesium and phosphorus for struvite). Because the two stone types pull pH in opposite directions, a one-size urinary diet does not exist. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="dilution">Dilution and Moisture</h2>
        <p>Diluting the urine reduces mineral supersaturation regardless of stone type and is the single most broadly beneficial strategy. Urinary diets often include added sodium to stimulate drinking and increase urine volume, and a canned (high-moisture) format helps enormously, especially in cats with their weak thirst drive. Increasing water intake is first-line for prevention of both stone types and for cystitis. See <a href="/nutrition/water-and-hydration">Water and Hydration</a>.</p>
        <h2 id="fic">Feline Idiopathic Cystitis</h2>
        <p>Feline idiopathic cystitis (FIC) is bladder inflammation with no identifiable cause, strongly associated with stress, and the most common reason for lower-urinary signs in young to middle-aged cats. Management is multimodal: increasing water intake (often via canned food), environmental enrichment and stress reduction, and sometimes diets formulated to support urinary health and reduce recurrence. Diet alone does not treat FIC; it is part of a broader plan with the veterinarian.</p>

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
