import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble — Reading the Panel | Ferret.com',
  description:
    'How to evaluate a ferret kibble: animal-first ingredient panels, the protein/fat/carbohydrate window, the three commercial tiers, and the red flags to avoid.',
  path: '/diet/best-ferret-kibble',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble',
  description:
    'A framework for evaluating commercial ferret kibble by ingredient panel and macronutrient profile, with the three quality tiers and the red flags to avoid.',
  url: 'https://ferret.com/diet/best-ferret-kibble',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'How to Choose a Ferret Kibble',
  description:
    'Guidance on selecting an appropriate commercial dry diet for domestic ferrets based on ingredient and macronutrient panels.',
  url: 'https://ferret.com/diet/best-ferret-kibble',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function BestFerretKibblePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'How to Choose a Ferret Kibble',
          subtitle:
            'Most of the work in feeding a ferret well is choosing the right dry food, then staying consistent. This page is a method, not a shopping list: how to read an ingredient panel, what macronutrient window to aim for, and the red flags that separate an appropriate formula from supermarket "ferret food" that exists only because owners keep buying it.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Read the Panel First', href: '#panel' },
                { label: 'The Macronutrient Window', href: '#macros' },
                { label: 'The Three Tiers', href: '#tiers' },
                { label: 'Red Flags', href: '#red-flags' },
                { label: 'Rotation & Food Fixation', href: '#rotation' },
                { label: 'Transitioning Brands', href: '#transition' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-best-ferret-kibble"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="panel">Read the Panel First</h2>
          <p>
            The single most useful skill in ferret nutrition is reading an ingredient panel. Ingredients are listed by weight, so the first three to five entries define the formula. For a ferret kibble, those entries should be <strong>named animal proteins and animal fats</strong> — chicken, chicken meal, turkey, lamb, fish meal, chicken fat. If the first ingredient is a grain ("ground corn," "brewers rice," "wheat") or a plant-protein concentrate ("corn gluten meal," "pea protein," "soybean meal"), the formula is built on plant carbohydrate that a ferret cannot use, regardless of the marketing on the front of the bag.
          </p>
          <p>
            "Meal" is not a dirty word. Chicken meal is rendered, water-removed chicken and is actually more protein-dense by weight than fresh chicken, which is roughly 70% water. A panel reading "chicken, chicken meal, turkey meal, chicken fat" is a good sign, not a bad one.
          </p>

          <h2 id="macros">The Macronutrient Window</h2>
          <p>
            The profile cited across exotic-pet veterinary references is roughly 32–40% protein, 18–22% fat, and under 3% carbohydrate, all on a dry-matter basis, with supplemental taurine and fiber under 3%. Guaranteed-analysis labels report "as fed" rather than dry-matter, and they rarely list carbohydrate at all. You estimate carbohydrate <em>by difference</em>: subtract the listed protein, fat, moisture, ash, and fiber percentages from 100. Many supermarket "ferret" kibbles land at 15–30% carbohydrate by difference — that is a defect, not a feature. The full target window and the reasoning behind it are covered in <a href="/diet/protein-and-fat-requirements">protein and fat requirements</a>.
          </p>

          <h2 id="tiers">The Three Tiers</h2>
          <p>
            Commercial options sort into three broad tiers. The goal is to land on a formulation whose panel matches the obligate-carnivore profile, then stay consistent.
          </p>
          <p>
            <strong>Premium — animal-first, low-carb, grain-free.</strong> Starch-free or near-starch-free formulas whose panels read as named meats and organ meats, with carbohydrate by difference in the low single digits. The default choice when insulinoma risk is a concern (see <a href="/health/insulinoma">insulinoma in ferrets</a>). Higher price point and not always stocked in chain pet aisles.
          </p>
          <p>
            <strong>Mid — ferret-specific, mostly acceptable.</strong> Diets formulated specifically for ferrets rather than adapted from cat food, with protein and fat in the working ferret range. Panels are imperfect — some plant protein, some grain — but acceptable for healthy adults, affordable, and widely stocked.
          </p>
          <p>
            <strong>Entry — avoid where possible.</strong> Generic supermarket "ferret food" with corn, rice, or beet pulp in the first three ingredients, often bundled with fruit-and-vegetable "treats." These reflect what sells, not what ferrets need.
          </p>

          <h2 id="red-flags">Red Flags on a Bag</h2>
          <ul>
            <li>A grain or plant-protein concentrate as the first ingredient.</li>
            <li>Added fruit, vegetables, or "garden medley" — ferrets do not digest plant matter and added sugars stress pancreatic beta cells.</li>
            <li>Sweeteners: molasses, honey, cane sugar, fructose.</li>
            <li>Marketing language ("holistic," "natural," "veterinarian formulated") in place of a clean panel. The panel is the only thing that matters.</li>
            <li>A "ferret and rabbit" or "small animal" combo food — rabbits are herbivores; a food formulated for both is wrong for at least one.</li>
          </ul>

          <h2 id="rotation">Rotation & Food Fixation</h2>
          <p>
            Ferrets imprint on the textures and smells of food during their first six months and become reluctant to accept anything unfamiliar afterward — a behavior known as food fixation. A ferret that has only ever eaten one kibble may flatly refuse a new one, which becomes a serious problem if that product is discontinued or recalled. The defense is to rotate among two or three acceptable brands from kithood so the ferret remains flexible. For older ferrets that are already fixated, transition slowly.
          </p>

          <h2 id="transition">Transitioning Brands</h2>
          <p>
            Change foods over 7–14 days, mixing an increasing proportion of the new kibble into the old. Abrupt changes can cause loose stool, and a fixated ferret may simply stop eating, which is dangerous given how quickly ferrets can become hypoglycemic. If a ferret refuses the new food entirely, slow down further and consider crushing a little new kibble into a meat-based gravy to introduce the smell. Never let a ferret go without eating for an extended period during a transition.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Ingredient and macronutrient guidance draws on Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. The carbohydrate–insulinoma association is discussed in the <em>Veterinary Clinics of North America: Exotic Animal Practice</em> literature on ferret endocrine disease. The American Ferret Association publishes an owner-facing nutrition statement consistent with this framework. Locate primary sources by title, as URLs change.
          </p>
          <p className="text-sm text-brand-text-light">
            This page describes how to evaluate a diet, not a prescription for an individual animal. A ferret with a diagnosed condition should have diet decisions supervised by a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
