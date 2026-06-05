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
  title: 'Legumes in Pet Food — Peas, Lentils, Chickpeas | PetFood.com',
  description:
    'Why legumes rose with grain-free, their nutrient profile and protein contribution, the DCM investigation link, and how to read pulse-heavy ingredient panels.',
  path: '/ingredients/legumes-peas-and-lentils',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Legumes in Pet Food — Peas, Lentils, Chickpeas | PetFood.com',
  description:
    'Why legumes rose with grain-free, their nutrient profile and protein contribution, the DCM investigation link, and how to read pulse-heavy ingredient panels.',
  url: 'https://petfood.com/ingredients/legumes-peas-and-lentils',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function LegumesPeasAndLentilsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Legumes — Peas, Lentils, and Chickpeas',
        subtitle:
          'Legumes — peas, lentils, chickpeas, and their protein isolates — moved from minor ingredients to dominant ones when grain-free diets needed a starch and protein substitute for cereal grains. They carry real nutritional value and a real question mark: pulse-heavy diets feature in the FDA dilated cardiomyopathy investigation. This page covers what legumes contribute and what the open concern is.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Legumes — Peas, Lentils, and Chickpeas', href: '/ingredients/legumes-peas-and-lentils' },
      ]}
      relatedLinks={[
        { title: 'Ingredients Hub', href: '/ingredients' },
        { title: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
        { title: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
        { title: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Legumes Rose', href: '#rose' },
              { label: 'Nutrient Profile', href: '#nutrients' },
              { label: 'Protein Contribution and Isolates', href: '#isolates' },
              { label: 'The DCM Connection', href: '#dcm' },
              { label: 'Anti-Nutritional Factors', href: '#antinutritional' },
              { label: 'Reading a Pulse-Heavy Panel', href: '#panel' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Grain-Free vs Grain-Inclusive', href: '/compare/grain-free-vs-grain-inclusive' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="legumes-peas-and-lentils"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Legumes (pulses) include peas, lentils, chickpeas, and beans, along with concentrated derivatives like pea protein and pea starch. They became prominent in pet food as grain-free formulas needed a carbohydrate and binding source to replace cereal grains in extrusion. They are nutritious ingredients, but their heavy use is also at the center of the unresolved diet-associated dilated cardiomyopathy question. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="rose">Why Legumes Rose</h2>
        <p>Extruded kibble requires starch to form, so a grain-free recipe must replace cereal starch with something — and legumes (plus potato and tapioca) filled that role. Pulses offered the additional marketing advantage of boosting the crude-protein number on the guaranteed analysis, since they are higher in protein than grains. The result was a rapid rise in pulse-heavy formulas. See <a href="/compare/grain-free-vs-grain-inclusive">Grain-Free vs Grain-Inclusive</a>.</p>
        <h2 id="nutrients">Nutrient Profile</h2>
        <p>Whole pulses provide digestible carbohydrate, fiber, plant protein (roughly 20 to 25 percent crude protein on a dry-matter basis for whole pulses), and some minerals and B-vitamins. They are a legitimate ingredient with nutritional value. The fiber content supports digestion, and the carbohydrate supplies energy. As whole-food ingredients in moderate proportion, legumes are not a problem in themselves. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="isolates">Protein Contribution and Isolates</h2>
        <p>Concentrated pulse derivatives — pea protein at 75 to 85 percent crude protein — are used to raise the headline protein figure. This matters because adding plant-protein isolates can shift the amino-acid balance of the diet: the crude-protein number rises, but the contribution to a complete, animal-quality amino-acid profile is different from animal protein. A high crude-protein figure built partly on pea protein does not mean the same thing as one built on animal protein. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a> and <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="dcm">The DCM Connection</h2>
        <p>From 2018, the FDA investigated dilated cardiomyopathy in dogs eating grain-free diets, and the formulation pattern most associated with cases was high in pulses (peas, lentils) and legume protein. The investigation established an association, not proven causation, and the mechanism remains unresolved — taurine status, bioavailability, and other factors are under study. Because the signal centers on pulse-heavy diets specifically, legume proportion is a reasonable thing to consider in at-risk dogs. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="antinutritional">Anti-Nutritional Factors</h2>
        <p>Raw legumes contain anti-nutritional factors (such as lectins, phytates, and enzyme inhibitors) that can interfere with digestion and mineral absorption, but cooking — which all pet food pulses undergo — reduces these substantially. Phytate can still bind some minerals, a minor consideration in well-formulated diets that account for it. Properly processed legumes are digestible; the anti-nutritional concern applies mainly to raw pulses. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="panel">Reading a Pulse-Heavy Panel</h2>
        <p>When several pulses and pulse fractions appear high on the ingredient list (peas, pea protein, pea starch, lentils, chickpeas), the diet is pulse-heavy, and the practice of ingredient splitting can spread legumes across multiple entries to keep any single one lower on the list. For dogs in DCM-predisposed breeds or with cardiac concerns, a pulse-heavy formula is worth discussing with the veterinarian. For most animals, moderate legume inclusion is fine. See <a href="/guides/reading-pet-food-labels">Reading a Pet Food Label</a>.</p>

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
