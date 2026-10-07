import type { Metadata } from 'next'
import Link from 'next/link'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { TableShopLink, ComparisonFoot, EmailCapture, buildMetadata, ArticleLayout, ArticleByline, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, QuickPicks, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildItemListSchema, buildMedicalWebPageSchema, buildProductSchema, combineSchemas, SchemaScript, QuietPartnerLink} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble — Reading the Panel | Ferret.com',
  description:
    'How to evaluate a ferret kibble: animal-first ingredient panels, the protein/fat/carbohydrate window, the three commercial tiers, and the red flags to avoid.',
  path: '/diet/best-ferret-kibble',
  type: 'article',
})

const PAGE_URL = 'https://ferret.com/diet/best-ferret-kibble'

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'How to Choose a Ferret Kibble',
  description:
    'A framework for evaluating commercial ferret kibble by ingredient panel and macronutrient profile, with the three quality tiers and the red flags to avoid.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'How to Choose a Ferret Kibble',
  description:
    'Guidance on selecting an appropriate commercial dry diet for domestic ferrets based on ingredient and macronutrient panels.',
  url: PAGE_URL,
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

// GEO: ItemList of the three kibbles that fit the profile plus a product
// review per pick. The name and review body come only from this page's
// ReviewCard content. No aggregate rating and no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Ferret Kibbles That Fit the Profile',
  items: [
    { name: 'Wysong Epigen 90', url: 'https://ferret.com/go/wysong/epigen-90?s=diet-best-ferret-kibble' },
    { name: 'Marshall Premium Ferret Diet', url: 'https://ferret.com/go/marshall/premium-ferret-diet?s=diet-best-ferret-kibble' },
    { name: 'Carniwhole Ferret Food', url: `${PAGE_URL}#carniwhole` },
  ],
})

const products = [
  buildProductSchema({
    name: 'Wysong Epigen 90',
    description: 'Current page lists crude protein minimum 63% and crude fat minimum 16%, and markets the food as starch-free. Carbohydrate is not on the guaranteed analysis.',
    url: 'https://ferret.com/go/wysong/epigen-90?s=diet-best-ferret-kibble',
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'The current Wysong Epigen 90 page lists crude protein minimum 63% and crude fat minimum 16%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. The page markets the food as starch-free. Carbohydrate is not on the guaranteed analysis — check the label. Premium price and not always stocked in chain pet aisles.',
  }),
  buildProductSchema({
    name: 'Marshall Premium Ferret Diet',
    description: 'Ferret-specific formulation, widely stocked, in-range macros',
    url: 'https://ferret.com/go/marshall/premium-ferret-diet?s=diet-best-ferret-kibble',
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'The current Marshall Premium Ferret Diet page lists crude protein minimum 38% and crude fat minimum 18%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. Carbohydrate is not on the guaranteed analysis — check the label.',
  }),
  buildProductSchema({
    name: 'Carniwhole Ferret Food',
    description: 'Direct-to-consumer, published macros, subscription-shipped',
    url: `${PAGE_URL}#carniwhole`,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'A direct-to-consumer ferret food favoured by keepers who want ingredient transparency and a fresher product than long-shelf-stable kibble. It publishes its ingredient and macronutrient panel and ships on a subscription model; the trade-off is subscription logistics, no retail backup, and a shorter community track record.',
  }),
]

const FAQS = [
  {
    question: 'What is the best food for ferrets?',
    answer:
      'There is no single "best" brand — the best food is whichever formulation matches the obligate-carnivore profile: named animal proteins and animal fats in the first 3-5 ingredients, roughly 32-40% protein and 18-22% fat on a dry-matter basis, and carbohydrate by difference as low as possible (the published target is under 3%). The current Wysong page does not print carbohydrate, so check the label. Read the panel, not the marketing on the front of the bag.',
  },
  {
    question: 'How do I know how much carbohydrate is in ferret food?',
    answer:
      'Guaranteed-analysis labels rarely list carbohydrate, so you estimate it by difference: subtract the listed protein, fat, moisture, ash, and fiber percentages from 100. Many supermarket "ferret" kibbles land at 15-30% carbohydrate by difference — a defect, not a feature, given the carbohydrate-insulinoma association discussed in the exotic-pet veterinary literature.',
  },
  {
    question: 'Is "chicken meal" bad in ferret food?',
    answer:
      'No — "meal" is not a dirty word. Chicken meal is rendered, water-removed chicken and is actually more protein-dense by weight than fresh chicken, which is roughly 70% water. A panel reading "chicken, chicken meal, turkey meal, chicken fat" is a good sign. The red flags are grains or plant-protein concentrates (corn gluten meal, pea protein, soybean meal) at the top of the panel.',
  },
  {
    question: 'Why does my ferret refuse new food?',
    answer:
      'Food fixation. Ferrets imprint on the textures and smells of food during their first six months and become reluctant to accept anything unfamiliar afterward. The defense is rotating among two or three acceptable brands from kithood. For an already-fixated ferret, transition over 7-14 days, mixing in an increasing proportion of the new kibble — and never let a ferret go without eating for an extended period during a transition, given how quickly ferrets can become hypoglycemic.',
  },
  {
    question: 'Can ferrets eat "small animal" or "ferret and rabbit" food?',
    answer:
      'No. Rabbits are herbivores and ferrets are obligate carnivores — a food formulated for both is wrong for at least one of them. The same goes for formulas with added fruit, vegetables, or sweeteners (molasses, honey, cane sugar): ferrets do not digest plant matter, and added sugars stress pancreatic beta cells.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, itemList, faqSchema, ...products)

// Near-top jump links — fed by the SAME three picks as the ItemList schema
// above (same names, same anchors). Labels mirror each ReviewCard's badge.
const QUICK_PICKS = [
  { label: 'Premium Tier', name: 'Wysong Epigen 90', subtitle: 'Marketed starch-free. Carbohydrate: check the label', href: '#wysong-epigen-90', pickHop: '/go/wysong/epigen-90?s=diet-best-ferret-kibble' },
  { label: 'Mid Tier', name: 'Marshall Premium Ferret Diet', subtitle: 'Ferret-specific · Widely stocked', href: '#marshall-premium-diet' },
  { label: 'Direct-to-Consumer', name: 'Carniwhole Ferret Food', subtitle: 'Published macros · Subscription', href: '#carniwhole' },
]

export default function BestFerretKibblePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        heroExtra={
          <>
          <div className="[&_.text-brand-primary]:!text-brand-dark">
            <QuickPicks items={QUICK_PICKS} quietUntilTag embedded />
          </div>
          </>
        }
        heroHop={
          <>
            <HopDisclosure siteId="ferret-com" href="/go/amazon-brand/wysong+ferret+food?s=best-ferret-kibble" />
            <div className="mb-4" data-primary-hop="true">
              <a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" data-shop-placement="hero" href="/go/amazon-brand/wysong+ferret+food?s=best-ferret-kibble">Browse Wysong ferret food on Amazon →</a>
            </div>
            <QuietPartnerLink tone="dark" href="/go/wysong/epigen-90?s=diet-best-ferret-kibble" label="Check price of Wysong Epigen 90 at Wysong" />
          </>
        }
        hero={{
          title: 'How to Choose a Ferret Kibble',
          subtitle:
            'Most of the work in feeding a ferret well is choosing the right dry food, then staying consistent. This page is a method, not a shopping list: how to read an ingredient panel, what macronutrient window to aim for, and the red flags that separate an appropriate formula from supermarket "ferret food" that exists only because owners keep buying it.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
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
                { label: 'Kibbles That Fit the Profile', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'November and December gifts', href: '/reviews/november-december-gift-guide' },
                { label: 'Label calculator', href: '/tools/label-calculator' },
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />

            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }

        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Reading Food Labels', href: '/diet/reading-food-labels' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
          { title: 'Transitioning Foods', href: '/diet/transitioning-foods' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
 priceAsOf="2026-10-07">
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            addressOnly
            title="Shopping checklist"
            ctaText="Copy checklist"
            source="diet-best-ferret-kibble"
            checklist={[
              "Read the panel, not the marketing on the front of the bag.",
              "Chicken meal is rendered, water-removed chicken and is actually more protein-dense by weight than fresh chicken, which is roughly 70% water.",
              "A panel reading \"chicken, chicken meal, turkey meal, chicken fat\" is a good sign.",
              "The red flags are grains or plant-protein concentrates (corn gluten meal, pea protein, soybean meal) at the top of the panel.",
              "Ferrets imprint on the textures and smells of food during their first six months and become reluctant to accept anything unfamiliar afterward.",
              "The defense is rotating among two or three acceptable brands from kithood.",
            ]}
          />



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
            <strong>Premium — animal-first.</strong> The current Wysong page markets Epigen 90 as starch-free and prints crude protein minimum 63% and crude fat minimum 16%. Carbohydrate is not on that guaranteed analysis, so check the label. The default choice when insulinoma risk is a concern (see <a href="/health/insulinoma">insulinoma in ferrets</a>). Higher price point and not always stocked in chain pet aisles. How that low-carb kibble fits the rest of the diet is in the <a href="/care/diet-basics" className="text-brand-primary underline">diet basics guide</a>.
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


          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
            <p className="mb-4 text-sm font-semibold leading-snug">
              <Link href="/diet/reading-food-labels" className="inline-block max-w-full whitespace-normal text-brand-primary underline underline-offset-2">
                Read a ferret food label before you buy →
              </Link>
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wysong+ferret+food?s=best-ferret-kibble"
                amazonLabel="Browse Wysong ferret food on Amazon →"
              />
          </div>
          </div>

          <h2 id="picks">Kibbles That Fit the Profile</h2>
          <p>
            Three commercial dry diets whose published ingredient and macronutrient panels line up with the animal-first, low-carbohydrate window described above. This is a documented-spec comparison, not a hands-on test: inclusion reflects published panels and adoption patterns in keeper communities and at exotic-mammal shelters, not a lab evaluation.
          </p>
          <ReviewCard quietUntilTag
            id="wysong-epigen-90"
            badge="Premium Tier"
            name="Wysong Epigen 90"
            subtitle="Crude protein min. 63%, crude fat min. 16%, as printed. Carbohydrate is not on the analysis."
            winner
            description={
              <p>The current Wysong Epigen 90 page lists crude protein minimum 63% and crude fat minimum 16%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. The page markets the food as starch-free. Carbohydrate is not on the guaranteed analysis — check the label. Premium price per pound, and not always stocked in chain pet aisles.</p>
            }
            specs={[
              { label: 'Crude protein (as printed)', value: 'Min. 63%', highlight: 'good' },
              { label: 'Crude fat (as printed)', value: 'Min. 16%' },
              { label: 'Carbohydrate', value: 'Not on the guaranteed analysis. Check the label.' },
              { label: 'Starch-free', value: 'Marketed on the current page. Check the label.', highlight: 'good' },
              { label: 'Distribution', value: 'Direct + specialty pet retail' },
            ]}
            pros={['Current page lists crude protein minimum 63%', 'Marketed as starch-free', 'Check the label for carbohydrate']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="$30–50 / 5 lb"
            priceNote="dated 2026-10-04."
            ctaText="Check price of Wysong Epigen 90 at Wysong"
            ctaHref="/go/wysong/epigen-90?s=diet-best-ferret-kibble"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />
          <ReviewCard quietUntilTag
            id="marshall-premium-diet"
            badge="Mid Tier"
            name="Marshall Premium Ferret Diet"
            subtitle="Ferret-specific formulation, widely stocked, in-range macros"
            description={
              <p>The current Marshall Premium Ferret Diet page lists crude protein minimum 38% and crude fat minimum 18%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. Carbohydrate is not on the guaranteed analysis — check the label. It is the most likely of these two bags to find on a chain shelf at short notice.</p>
            }
            specs={[
              { label: 'Crude protein (as printed)', value: 'Min. 38%', highlight: 'good' },
              { label: 'Crude fat (as printed)', value: 'Min. 18%', highlight: 'good' },
              { label: 'Carbohydrate', value: 'Not on the guaranteed analysis. Check the label.' },
              { label: 'Ferret-specific', value: 'Yes', highlight: 'good' },
              { label: 'Distribution', value: 'National chain pet retail' },
            ]}
            pros={['Ferret-specific formulation', 'Widely available', 'Affordable per pound', 'Long manufacturer track record in ferret retail']}
            cons={['Carbohydrate is not on the guaranteed analysis. Check the label.', 'Check the ingredient list on the current bag']}
            price="$15–25 / 4 lb"
            priceNote="dated 2026-10-04."
            ctaText="Find Marshall Premium Ferret Diet"
            ctaHref="/go/marshall/premium-ferret-diet?s=diet-best-ferret-kibble"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="premium-ferret-diet"
          />
          <ReviewCard quietUntilTag
            id="carniwhole"
            badge="Direct-to-Consumer"
            name="Carniwhole Ferret Food"
            subtitle="Direct-to-consumer, published macros, subscription-shipped"
            description={
              <p>A direct-to-consumer ferret food favoured by keepers who want ingredient transparency and a fresher product than long-shelf-stable kibble. Carniwhole publishes its ingredient and macronutrient panel and ships on a subscription model. Appeal: transparency and freshness. Trade-off: subscription logistics, no retail backup, and a shorter community track record than Marshall or Wysong.</p>
            }
            specs={[
              { label: 'Protein source', value: 'Animal-first, named meats', highlight: 'good' },
              { label: 'Distribution', value: 'Direct only (no retail)' },
              { label: 'Subscription model', value: 'Yes' },
              { label: 'Smaller-batch sourcing', value: 'Yes', highlight: 'good' },
            ]}
            pros={['Ingredient transparency', 'Fresh product', 'Animal-first panel', 'Direct support from a smaller brand']}
            cons={['Subscription logistics', 'No retail backup', 'Shorter community track record than Marshall or Wysong']}
            price="Subscription pricing"
          />

          <h2 id="who">Who should buy which kibble</h2>
          <p>Protein, carb notes, price, and the stocking limit are already on the three cards. This table only lines those facts up.</p>
          <div className="overflow-x-auto my-6 max-w-full">
            <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th className="p-3 font-bold text-brand-dark">If you need</th>
                  <th className="p-3 font-bold text-brand-dark">Buy</th>
                  <th className="p-3 font-bold text-brand-dark">From the card</th>
                  <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">Crude protein min. 63% and crude fat min. 16%, as printed. Carbohydrate is not on the analysis</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#wysong-epigen-90" className="text-brand-primary">Wysong Epigen 90</a><TableShopLink quietUntilTag href={"/go/wysong/epigen-90?s=diet-best-ferret-kibble"} product={"Wysong Epigen 90"} /></td>
                  <td className="p-3 text-brand-text-mid">Wysong. Crude protein min. 63%, crude fat min. 16%, as printed. Carbohydrate is not on the guaranteed analysis. $30–50 / 5 lb</td>
                  <td className="p-3 text-brand-text-mid">You need a bag from a supermarket aisle tonight. The card says it is not always stocked there</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A ferret-specific bag you can find in chain retail</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#marshall-premium-diet" className="text-brand-primary">Marshall Premium</a><TableShopLink quietUntilTag href={"/go/marshall/premium-ferret-diet?s=diet-best-ferret-kibble"} product={"Marshall Premium"} /></td>
                  <td className="p-3 text-brand-text-mid">Mid Tier. Crude protein min. 38%, crude fat min. 18%, as printed. Carbohydrate is not on the guaranteed analysis. $15–25 / 4 lb</td>
                  <td className="p-3 text-brand-text-mid">Insulinoma risk is the priority. Neither guaranteed analysis prints carbohydrate. Check both labels</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 text-brand-text-mid">A direct subscription with a published animal-first panel</td>
                  <td className="p-3 font-bold text-brand-dark"><a href="#carniwhole" className="text-brand-primary">Carniwhole</a></td>
                  <td className="p-3 text-brand-text-mid">Direct-to-Consumer. Named meats. Subscription pricing. No retail backup</td>
                  <td className="p-3 text-brand-text-mid">You need a store backup. The card also notes a shorter track record than Marshall or Wysong</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-07" />

          <p>Wysong and Marshall, the two kibbles on this page, are compared in the <Link href="/reviews/wysong-vs-marshall-kibble-guide">Wysong versus Marshall guide</Link>.</p>
          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

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
