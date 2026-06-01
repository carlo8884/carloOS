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
  title: 'Dog vs Cat Nutrition — Why They Differ | PetFood.com',
  description:
    'The core metabolic differences between dogs and cats — obligate carnivore vs facultative omnivore — and why a cat cannot live on dog food.',
  path: '/species/dog-vs-cat-nutrition-overview',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Dog vs Cat Nutrition — Why They Differ | PetFood.com',
  description:
    'The core metabolic differences between dogs and cats — obligate carnivore vs facultative omnivore — and why a cat cannot live on dog food.',
  url: 'https://petfood.com/species/dog-vs-cat-nutrition-overview',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function DogVsCatNutritionOverviewPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Dog vs Cat Nutrition',
        subtitle:
          'Dogs and cats are not small versions of the same animal nutritionally. The cat is an obligate carnivore with hard dietary requirements the dog can synthesize internally, and these differences are written into the separate AAFCO profiles. Understanding them explains why a cat cannot live on dog food and why species-appropriate feeding is a requirement, not a preference.',
        category: 'Species Nutrition',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Species' },
        { name: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Carnivore vs Omnivore', href: '#carnivoreomnivore' },
              { label: 'Protein and Amino Acids', href: '#protein' },
              { label: 'Taurine and Arginine', href: '#taurinearginine' },
              { label: 'Vitamin A and Niacin', href: '#vitaminaniacin' },
              { label: 'Fat — Arachidonic Acid', href: '#fat' },
              { label: 'Why Dog Food Fails Cats', href: '#whyfails' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
              { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="dog-vs-cat-nutrition-overview"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Dogs and cats diverged onto different nutritional paths through evolution. The cat is a strict (obligate) carnivore whose metabolism assumes a diet of animal tissue and which has lost the ability to make several nutrients from plant precursors. The dog is a facultative omnivore, more flexible, able to synthesize nutrients the cat must eat pre-formed. The AAFCO Dog and Cat Food Nutrient Profiles encode these differences, and they are the reason the two species need different food. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="carnivoreomnivore">Carnivore vs Omnivore</h2>
        <p>Cats evolved as desert-dwelling hunters eating whole small prey — high protein, high moisture, very low carbohydrate. Their physiology reflects this: a continuous high rate of protein use, limited carbohydrate-handling enzymes, a weak thirst drive, and obligate dietary requirements for nutrients found only in animal tissue. Dogs, sharing a long domestication history with humans, adapted to a broader diet, including expanded starch-digestion capacity, and can derive nutrition from a wider ingredient base. See <a href="/species/cats-are-obligate-carnivores">Cats Are Obligate Carnivores</a>.</p>
        <h2 id="protein">Protein and Amino Acids</h2>
        <p>Cats require more dietary protein than dogs as a fraction of energy and cannot downregulate protein catabolism when intake is low, which makes protein-restricted diets riskier for cats. The AAFCO cat profile sets higher protein minimums (30 percent dry-matter for adult maintenance) than the dog profile (18 percent). Cats also have higher requirements for several specific amino acids. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="taurinearginine">Taurine and Arginine</h2>
        <p>Taurine is an essential dietary nutrient for cats — they cannot synthesize enough and continuously lose it conjugating bile acids — and dietary deficiency causes blindness and heart disease. Dogs synthesize taurine and have no dietary requirement (with breed exceptions). Arginine is critically essential for cats: a single arginine-deficient meal can cause dangerous hyperammonemia, because the feline urea cycle cannot tolerate arginine shortage. Both requirements are met by animal tissue and supplementation. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="vitaminaniacin">Vitamin A and Niacin</h2>
        <p>Cats cannot convert beta-carotene (the plant form) to retinol-form vitamin A and so require pre-formed vitamin A from animal sources. They also cannot synthesize adequate niacin from tryptophan, so they require dietary niacin. Dogs can perform both conversions. These are clear biochemical reasons a cat needs an animal-based, feline-formulated diet. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="fat">Fat — Arachidonic Acid</h2>
        <p>Cats require pre-formed arachidonic acid, an omega-6 fatty acid found in animal fat, because they lack adequate enzyme activity to make it from plant-derived linoleic acid. Dogs can synthesize arachidonic acid and do not require it in the diet. This is another nutrient that a plant-only diet cannot supply to a cat and that the dog can make on its own. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="whyfails">Why Dog Food Fails Cats</h2>
        <p>Put together, the differences mean a dog food cannot meet a cat&apos;s needs: it is typically too low in protein, may lack adequate taurine, does not guarantee pre-formed vitamin A and arachidonic acid at feline levels, and may not supply enough niacin. A cat fed dog food long-term risks taurine-deficiency heart disease and blindness, vitamin A deficiency, and protein inadequacy. Feeding each species its own complete, species-formulated diet is a nutritional necessity. See <a href="/feeding/feeding-multiple-pets">Feeding Multiple Pets</a>.</p>

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
