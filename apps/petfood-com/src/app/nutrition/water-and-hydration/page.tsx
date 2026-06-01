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
  title: 'Water and Hydration for Dogs and Cats | PetFood.com',
  description:
    'Why water is the most important nutrient, the feline thirst-drive problem, moisture content of wet vs dry diets, and hydration in urinary and kidney disease.',
  path: '/nutrition/water-and-hydration',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Water and Hydration for Dogs and Cats | PetFood.com',
  description:
    'Why water is the most important nutrient, the feline thirst-drive problem, moisture content of wet vs dry diets, and hydration in urinary and kidney disease.',
  url: 'https://petfood.com/nutrition/water-and-hydration',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function WaterAndHydrationPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Water and Hydration in Pet Nutrition',
        subtitle:
          'Water is the nutrient most easily overlooked and the one an animal can least afford to lack. For cats in particular, the way a diet delivers water has clinical consequences — the feline weak thirst drive, evolved for a desert carnivore eating moist prey, interacts badly with dry food and contributes to urinary disease. This page covers hydration physiology, dietary moisture, and the conditions where it matters most.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Water and Hydration in Pet Nutrition', href: '/nutrition/water-and-hydration' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Most Important Nutrient', href: '#important' },
              { label: 'The Feline Thirst Problem', href: '#feline' },
              { label: 'Dietary Moisture', href: '#moisture' },
              { label: 'Urinary Health', href: '#urinary' },
              { label: 'Kidney Disease', href: '#kidney' },
              { label: 'Practical Hydration', href: '#practical' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Wet vs Dry Food', href: '/compare/wet-vs-dry-food' },
              { label: 'Urinary and Bladder Stone Diets', href: '/diets/urinary-tract-diets' },
              { label: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="water-and-hydration"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Water makes up roughly 60 to 70 percent of an adult animal&apos;s body and is involved in every physiological process. An animal can lose nearly all its fat and half its protein and survive, but a loss of 10 to 15 percent of body water is life-threatening. Water is not on the AAFCO nutrient profile in the usual sense, but it is correctly described as the most important nutrient, and the way a diet supplies it has real clinical weight, especially for cats.</p>
        <h2 id="important">The Most Important Nutrient</h2>
        <p>Water sources are drinking water, the moisture in food, and metabolic water produced by oxidizing nutrients. A healthy animal self-regulates total intake well when fresh water is freely available and when no medical condition impairs thirst or increases losses. Requirements rise with heat, exercise, lactation, and any disease causing increased urination, vomiting, or diarrhea.</p>
        <h2 id="feline">The Feline Thirst Problem</h2>
        <p>Cats evolved from desert-dwelling ancestors that obtained most of their water from prey (which is roughly 70 percent water). As a result, cats have a comparatively weak thirst drive and do not voluntarily drink enough to fully compensate for a dry diet. A cat on dry food alone often runs at a lower total water intake and produces more concentrated urine than a cat eating canned food. This chronic mild under-hydration is one reason canned diets are frequently recommended for feline urinary and kidney patients.</p>
        <h2 id="moisture">Dietary Moisture</h2>
        <p>Canned and pouch foods are roughly 75 to 82 percent water; fresh and gently cooked diets are similar; dry kibble is about 6 to 12 percent. A cat eating canned food can obtain the majority of its water from the diet, while a cat on dry food must make up the deficit by drinking. This is the practical core of the wet-versus-dry hydration argument. See <a href="/compare/wet-vs-dry-food">Wet vs Dry Food</a>.</p>
        <h2 id="urinary">Urinary Health</h2>
        <p>Dilute urine reduces the concentration of the minerals that form struvite and calcium-oxalate crystals and uroliths, and increased urine volume flushes the lower urinary tract. Increasing water intake — most reliably through a canned or moisture-rich diet — is a first-line strategy for cats with feline lower urinary tract disease and for stone-forming cats and dogs. Therapeutic urinary diets combine increased moisture with mineral and pH targets. See <a href="/diets/urinary-tract-diets">Urinary and Bladder Stone Diets</a>.</p>
        <h2 id="kidney">Kidney Disease</h2>
        <p>Animals with chronic kidney disease lose the ability to concentrate urine and are prone to dehydration. Maintaining hydration is central to management, and a moisture-rich diet helps. This is one reason renal therapeutic diets are commonly offered in canned form and why owners are encouraged to maximize water intake. See <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>
        <h2 id="practical">Practical Hydration Strategies</h2>
        <ol>
          <li>Provide multiple clean, fresh water sources away from food and litter; many cats prefer water at a distance from the bowl.</li>
          <li>Consider a pet water fountain — moving water increases voluntary intake in many cats.</li>
          <li>Add water or low-sodium broth to meals, or feed a canned or rehydrated diet, to raise dietary moisture.</li>
          <li>Watch for clinical signs of inadequate intake: tacky gums, reduced skin elasticity, lethargy, concentrated urine.</li>
          <li>For any animal with urinary or kidney disease, treat hydration as a managed part of the diet plan with your veterinarian.</li>
        </ol>

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
