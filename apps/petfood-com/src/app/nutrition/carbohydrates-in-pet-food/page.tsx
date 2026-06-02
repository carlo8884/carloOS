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
  title: 'Carbohydrates in Pet Food — Are They Necessary? | PetFood.com',
  description:
    'Whether dogs and cats need dietary carbohydrate, how starch is used in extrusion, fiber types, and why "no carbohydrate minimum" is widely misread.',
  path: '/nutrition/carbohydrates-in-pet-food',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Carbohydrates in Pet Food — Are They Necessary? | PetFood.com',
  description:
    'Whether dogs and cats need dietary carbohydrate, how starch is used in extrusion, fiber types, glycemic considerations, and why "no carbohydrate minimum" is widely misread.',
  url: 'https://petfood.com/nutrition/carbohydrates-in-pet-food',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-30T00:00:00Z',
  modifiedAt: '2026-05-30T00:00:00Z',
})

export default function CarbohydratesInPetFoodPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Carbohydrates in Pet Food',
        subtitle:
          'Carbohydrate is the macronutrient with no AAFCO minimum, which marketing has converted into the claim that carbohydrate is unnecessary or harmful. The biochemistry is more nuanced: dogs and cats have no specific dietary carbohydrate requirement, but starch plays a real functional role in dry food, and fiber is genuinely beneficial. This page separates the formulation reality from the grain-free marketing narrative.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Is Carbohydrate Required?', href: '#required' },
              { label: 'Starch and Extrusion', href: '#starch' },
              { label: 'Fiber — Soluble and Insoluble', href: '#fiber' },
              { label: 'Glycemic Considerations', href: '#glycemic' },
              { label: 'Cats and Carbohydrate', href: '#cats' },
              { label: 'Reading Carbohydrate on a Label', href: '#label' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
              { label: 'Diabetic Diets for Dogs and Cats', href: '/diets/diabetic-diets' },
              { label: 'Fiber and Digestive Health Diets', href: '/diets/fiber-and-digestive-health' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="carbohydrates-in-pet-food"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Carbohydrate is the only macronutrient for which AAFCO sets no minimum, because dogs and cats can meet their glucose needs through gluconeogenesis from protein and glycerol. That fact is correct and is the kernel of truth inside grain-free marketing. It does not follow that dietary carbohydrate is harmful, nor that a low-carbohydrate diet is automatically superior. Carbohydrate is a digestible energy source, and starch is functionally necessary to manufacture extruded kibble.</p>
        <h2 id="required">Is Carbohydrate Required?</h2>
        <p>There is no established essential dietary carbohydrate requirement for healthy adult dogs or cats. The brain and certain tissues need glucose, but the body can supply it from non-carbohydrate precursors. The one well-documented exception is reproduction: pregnant and lactating dams (and to some extent kittens) appear to benefit from dietary carbohydrate or face metabolic stress on near-zero-carbohydrate diets. For the general adult population, carbohydrate is best understood as a usable, inexpensive energy source rather than a required nutrient.</p>
        <h2 id="starch">Starch and Extrusion</h2>
        <p>Dry kibble is manufactured by extrusion, a process that requires gelatinized starch to bind the kibble and create its texture. This is why even grain-free dry foods contain substantial carbohydrate — they substitute potato, pea, lentil, or tapioca starch for cereal grains, but the total starch load is often similar. Grain-free is not the same as low-carbohydrate. A genuinely low-carbohydrate diet is far easier to achieve in a canned format, which does not depend on starch for structure. See <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a>.</p>
        <h2 id="fiber">Fiber — Soluble and Insoluble</h2>
        <p>Fiber is a carbohydrate fraction the animal does not digest directly. Insoluble fiber (cellulose, many vegetable fibers) adds bulk and supports stool quality and intestinal transit. Soluble and fermentable fibers (beet pulp, inulin, psyllium, fructooligosaccharides) are fermented by colonic bacteria into short-chain fatty acids that nourish the colonic lining and support a favorable microbiome. Therapeutic gastrointestinal and weight-management diets manipulate fiber type and quantity deliberately. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="glycemic">Glycemic Considerations</h2>
        <p>Different carbohydrate sources produce different post-meal blood-glucose responses. This matters most for diabetic cats and dogs, where diets are formulated to blunt glycemic spikes — for cats, typically by lowering carbohydrate sharply, and for dogs, often by emphasizing complex carbohydrate and fiber. For healthy animals, the glycemic index of the carbohydrate source is a minor consideration relative to total energy balance and body condition. See <a href="/diets/diabetic-diets">Diabetic Diets for Dogs and Cats</a>.</p>
        <h2 id="cats">Cats and Carbohydrate</h2>
        <p>Cats, as obligate carnivores, have a metabolism oriented toward protein and fat and a limited capacity for certain carbohydrate-handling enzymes (notably low salivary amylase and reduced intestinal disaccharidase activity relative to dogs). They tolerate moderate dietary carbohydrate but do best on protein-forward diets, and high-carbohydrate diets are one factor implicated in feline obesity and diabetes risk. This is the strongest species-specific argument for limiting carbohydrate — and it applies to cats far more than to dogs.</p>
        <h2 id="label">Reading Carbohydrate on a Label</h2>
        <p>Carbohydrate is not listed on the guaranteed analysis. It is estimated by difference: subtract the guaranteed protein, fat, moisture, ash, and crude fiber percentages from 100. The remainder, called nitrogen-free extract, approximates the digestible carbohydrate. Because the guaranteed analysis lists minima and maxima rather than typical values, this estimate is rough; for a precise figure, request the typical (as-fed or dry-matter) analysis from the manufacturer. See <a href="/guides/reading-pet-food-labels">Reading a Pet Food Label</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>FDA Provides Update on Investigation into Potential Connection Between Certain Diets and Cases of Canine Heart Disease</em> (27 June 2019).</li>
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
