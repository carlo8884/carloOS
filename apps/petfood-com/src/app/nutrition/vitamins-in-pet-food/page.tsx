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
  title: 'Vitamins in Pet Food — Fat- and Water-Soluble | PetFood.com',
  description:
    'The fat-soluble (A, D, E, K) and water-soluble (B-complex, C) vitamins in pet diets, deficiency and toxicity signs, and why cats need pre-formed vitamin A.',
  path: '/nutrition/vitamins-in-pet-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Vitamins in Pet Food — Fat- and Water-Soluble | PetFood.com',
  description:
    'The fat-soluble (A, D, E, K) and water-soluble (B-complex, C) vitamins in dog and cat diets, deficiency and toxicity signs, and why cats need pre-formed vitamin A.',
  url: 'https://petfood.com/nutrition/vitamins-in-pet-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-31T00:00:00Z',
  modifiedAt: '2026-05-31T00:00:00Z',
})

export default function VitaminsInPetFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Vitamins in Pet Food',
        subtitle:
          'Vitamins are required in tiny quantities and supplied in a complete diet through ingredients plus a premix added at the mixer. They are also where some of the most important species differences live — cats cannot make vitamin A from beta-carotene, and both species are vulnerable to over-supplementation of the fat-soluble vitamins. This page covers each vitamin group, the AAFCO requirements, and the deficiency and toxicity picture.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'How Vitamins Are Supplied', href: '#supplied' },
              { label: 'Fat-Soluble — A, D, E, K', href: '#fatsoluble' },
              { label: 'Water-Soluble — B and C', href: '#watersoluble' },
              { label: 'Species Differences', href: '#species' },
              { label: 'Toxicity Risk', href: '#toxicity' },
              { label: 'Supplementing — When and When Not', href: '#supplement' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Multivitamins for Pets', href: '/supplements/multivitamins-for-pets' },
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="vitamins-in-pet-food"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Vitamins are organic micronutrients required for metabolism, growth, and maintenance. They divide into two groups by solubility: fat-soluble (A, D, E, K), which are stored in the body and can accumulate to toxic levels, and water-soluble (the B-complex and vitamin C), which are largely excreted in excess and must be supplied more regularly. A complete-and-balanced diet supplies all required vitamins; the AAFCO profiles set minima and, for the fat-soluble vitamins, maxima.</p>
        <h2 id="supplied">How Vitamins Are Supplied</h2>
        <p>Raw ingredients contribute some vitamins, but processing — particularly the heat of extrusion and retort canning — degrades several of them. To guarantee the finished food meets profile, manufacturers add a vitamin premix at the mixing stage, formulated to account for processing losses and shelf-life decay. This is why the ingredient panel lists a string of vitamin names near the end. Their presence is normal and necessary, not a red flag.</p>
        <h2 id="fatsoluble">Fat-Soluble Vitamins — A, D, E, K</h2>
        <p>Vitamin A supports vision, skin, and immune function; deficiency causes night blindness and skin disease, while excess causes skeletal abnormalities. Vitamin D regulates calcium and phosphorus; dogs and cats, unlike many species, cannot synthesize meaningful vitamin D in skin and depend entirely on dietary intake. Vitamin E is the principal lipid-phase antioxidant, protecting cell membranes and dietary fats from oxidation. Vitamin K supports blood clotting and is partly supplied by intestinal bacteria. Because these vitamins are stored, both deficiency and toxicity are clinically relevant.</p>
        <h2 id="watersoluble">Water-Soluble Vitamins — B and C</h2>
        <p>The B-complex vitamins (thiamine B1, riboflavin B2, niacin B3, pantothenic acid B5, pyridoxine B6, biotin B7, folate B9, cobalamin B12) function as coenzymes across energy and protein metabolism. Thiamine deserves special mention: it is heat-labile and is destroyed by thiaminases present in some raw fish, and thiamine-deficiency cases have been linked to certain canned cat foods and to all-fish diets. Vitamin C is synthesized by both dogs and cats, so it is not a required dietary nutrient, though it is sometimes added as an antioxidant.</p>
        <h2 id="species">Species Differences</h2>
        <p>The defining feline difference is vitamin A: cats cannot convert beta-carotene (the plant precursor) to retinol and therefore require pre-formed vitamin A from animal sources. They also require dietary niacin, because their conversion of tryptophan to niacin is inadequate. These requirements are met by animal tissue and by the vitamin premix; they are part of why a cat cannot thrive on a dog food or a plant-only diet. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="toxicity">Toxicity Risk</h2>
        <p>Fat-soluble vitamins accumulate, so over-supplementation is a real hazard. Excess vitamin D is among the more dangerous, and several pet food recalls have been driven by formulation errors that produced toxic vitamin D concentrations. Excess vitamin A, classically from feeding large amounts of liver, causes painful skeletal lesions in cats. Because a complete diet already meets requirements, adding a multivitamin on top can push fat-soluble vitamins toward the toxic range without benefit.</p>
        <h2 id="supplement">Supplementing — When and When Not</h2>
        <p>A healthy animal eating a complete-and-balanced diet does not need vitamin supplementation, and routine multivitamins carry a real over-supplementation risk for the fat-soluble vitamins. Supplementation has a defined place — under veterinary direction — for animals on home-prepared diets, with specific malabsorption conditions, or with documented deficiencies. Home-prepared diets in particular almost always require a balancing supplement to be complete. See <a href="/supplements/multivitamins-for-pets">Multivitamins for Pets</a> and <a href="/compare/home-cooked-vs-commercial">Home-Cooked Diets</a>.</p>

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
