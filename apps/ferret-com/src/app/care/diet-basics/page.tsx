import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, StockImage, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Diet Basics — Obligate Carnivore Feeding | Ferret.com',
  description:
    'Ferrets are strict obligate carnivores: 32–40% protein, 18–22% fat, under 3% carbs. Diet tiers, raw/whole-prey context, and insulinoma risk.',
  path: '/care/diet-basics',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Diet Basics',
  description:
    'What ferrets need to eat — obligate-carnivore physiology, macronutrient targets, commercial diet ladder, raw-feeding context, and the carbohydrate–insulinoma link.',
  url: 'https://ferret.com/care/diet-basics',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Diet Basics',
  description:
    'Evidence-based feeding guidance for domestic ferrets, an obligate-carnivore species with distinct nutritional needs.',
  url: 'https://ferret.com/care/diet-basics',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'What do ferrets eat?',
    answer:
      'Ferrets are strict obligate carnivores. The macronutrient profile cited in exotic-pet veterinary references is 32-40% animal-sourced protein and 18-22% animal-sourced fat on a dry-matter basis, with carbohydrate under 3% and fiber under 3%. The first 3-5 ingredients of any commercial diet should be named animal proteins or animal fats. Ferrets cannot derive useful energy from plants — their short gut (roughly 5x body length, with a 3-4 hour transit time) lacks the equipment to ferment plant material.',
  },
  {
    question: 'Can ferrets eat cat food?',
    answer:
      'Mostly no. Many adult cat kibbles are too low in protein and too high in plant carbohydrate for a ferret. A high-protein, animal-first kitten formulation is a workable stop-gap, but it is not a long-term solution. Dog food is worse — its protein may be adequate but taurine is inadequate, and long-term feeding carries dilated-cardiomyopathy risk and other deficiencies.',
  },
  {
    question: 'What foods are dangerous for ferrets?',
    answer:
      'Fruit of any kind (sugars stress pancreatic beta cells; grapes and raisins also carry the nephrotoxicity concern documented in dogs), vegetables, grains, dairy (adult ferrets are largely lactose-intolerant), plant-based or "vegan" pet diets, and the standard small-mammal toxin list: chocolate, xylitol, onion, garlic, and caffeine. Sugary "ferret treats" sweetened with molasses or honey are the highest-leverage items to eliminate.',
  },
  {
    question: 'How often should a ferret eat?',
    answer:
      'Free-feeding is standard for adult ferrets — they self-regulate intake and graze 8-10 times a day. Restricted feeding schedules can precipitate hypoglycemic episodes in ferrets with subclinical insulinoma. Fresh water should be available at all times, ideally in a heavy ceramic bowl rather than relying solely on a sipper bottle.',
  },
  {
    question: 'Is raw feeding safe for ferrets?',
    answer:
      'It is genuinely contested. Raw and whole-prey diets are biologically the closest match to the ferret’s evolved diet — naturally correct macros, excellent dental abrasion. But the AVMA policy on raw animal-source protein documents real contamination rates for Salmonella, Listeria, and Campylobacter, and home-formulated raw diets are frequently unbalanced (calcium-to-phosphorus ratio is the most-cited failure). Keepers committed to raw feeding should source HPP-treated or batch-tested product, handle it like raw chicken, and confirm calcium and taurine adequacy with a veterinarian familiar with ferrets.',
  },
  {
    question: 'Why do ferrets get insulinoma from carbohydrates?',
    answer:
      'The leading working hypothesis in the exotic-pet literature is that chronic dietary carbohydrate load drives sustained insulin secretion, which over years contributes to beta-cell hyperplasia and eventually insulinoma — the most common neoplasm in middle-aged ferrets. The evidence is associational rather than experimentally established, but the recommendation is consistent across exotic-vet sources: minimize dietary carbohydrate from kithood onward.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed.",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Veterinary Clinics of North America: Exotic Animal Practice — ferret nutrition and endocrine disease",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — owner nutrition guidance and diet recommendations",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "AVMA — policy on raw or undercooked animal-source protein in pet food",
    url: "https://www.avma.org",
    publisher: "American Veterinary Medical Association",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical articles on ferret gastrointestinal and endocrine disease",
    publisher: "Elsevier",
  },
]

export default function FerretDietBasicsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="care"
        hero={{
          title: 'Ferret Diet Basics',
          subtitle:
            'Ferrets (Mustela putorius furo) are obligate carnivores with a short intestinal tract and rapid gut transit. They cannot derive useful energy from plants. Diet is the single largest controllable input on a ferret’s lifespan, and the biggest single mistake new owners make is feeding cat food, dog food, or a "premium" kibble that is actually high in plant carbohydrate.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Diet Basics', href: '/care/diet-basics' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Obligate Carnivore Physiology', href: '#physiology' },
                { label: 'Macronutrient Targets', href: '#macros' },
                { label: 'What NOT to Feed', href: '#avoid' },
                { label: 'Commercial Diet Ladder', href: '#commercial' },
                { label: 'Raw & Whole-Prey', href: '#raw' },
                { label: 'Carbs and Insulinoma', href: '#insulinoma-link' },
                { label: 'Water and Treats', href: '#water' },
                { label: 'Diet Picks', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-diet-basics"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Toxic Foods', href: '/care/toxic-foods' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:care-diet-basics"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          <h2 id="physiology">Obligate Carnivore Physiology</h2>
          <p>
            Ferrets descend from the European polecat and retain a strictly carnivorous digestive system. The gastrointestinal tract is short (roughly 5× body length, compared to 8–9× in cats and 4–6× in dogs) and lacks the long fermenting colon that grain-eating mammals use to extract energy from plant cell walls. Transit time from ingestion to defecation is approximately 3–4 hours. The pancreas does not produce the carbohydrate-handling enzyme profile seen in omnivores, and there is no functional cecum.
          </p>
          <p>
            Practical implications: ferrets cannot use carbohydrate as a primary energy source, they do not tolerate plant fiber well, and any meal must be high in animal protein and animal fat to be digestible within their transit window. Feeding a high-carbohydrate diet does not just "waste" calories — it has documented downstream effects on pancreatic beta-cell stress and insulinoma risk (see <a href="/health/insulinoma">Insulinoma in Ferrets</a>).
          </p>

          <h2 id="macros">Macronutrient Targets</h2>
          <p>
            The macronutrient profile widely cited in exotic-pet veterinary references (Carpenter &amp; Marion, <em>Exotic Animal Formulary</em>; Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>) is:
          </p>
          <ul>
            <li><strong>Protein: 32–40% on a dry-matter basis,</strong> primarily animal-sourced (chicken, turkey, lamb, fish meal). Plant proteins (corn gluten meal, soy protein, pea protein) are poorly utilized and are a red flag on an ingredient panel.</li>
            <li><strong>Fat: 18–22% on a dry-matter basis,</strong> animal-sourced. Fat is a ferret’s primary energy substrate.</li>
            <li><strong>Carbohydrate: under 3% (ideally under 2%).</strong> Most "ferret" kibbles on supermarket shelves contain 15–30% carbohydrate by difference. That is a defect, not a feature.</li>
            <li><strong>Taurine:</strong> supplemented, like commercial cat food. Ferrets, like cats, do not synthesize adequate taurine and require it from the diet.</li>
            <li><strong>Fiber: under 3%.</strong> Higher fiber slows transit beyond what the ferret tract is built for.</li>
          </ul>
          <p>
            The first 3–5 ingredients of any commercial diet should be named animal proteins or animal fats. If the first ingredient is a grain ("ground corn", "brewers rice", "wheat") or a plant protein concentrate, the formula is not appropriate as a sole diet regardless of the marketing on the bag.
          </p>

          <h2 id="avoid">What NOT to Feed</h2>
          <p>The following are inappropriate for ferrets and several are actively dangerous:</p>
          <ul>
            <li><strong>Fruit of any kind</strong> — sugars trigger insulin release; chronic exposure stresses pancreatic beta cells. Raisins and grapes also carry the same theoretical nephrotoxicity concern documented in dogs.</li>
            <li><strong>Vegetables as a meal component</strong> — ferrets do not digest plant cell walls. Carrot, sweet potato, peas, and "veggie blend" treats are inappropriate.</li>
            <li><strong>Grains</strong> — corn, rice, wheat, oats, barley as primary ingredients.</li>
            <li><strong>Dog food</strong> — protein adequate but taurine inadequate; not formulated for ferret needs. Long-term feeding leads to dilated cardiomyopathy risk and other deficiencies.</li>
            <li><strong>Most cat food</strong> — many adult cat kibbles are too low in protein and too high in plant carbohydrate. Kitten food from a high-protein animal-first formulation is a stop-gap; it is not a long-term solution.</li>
            <li><strong>Plant-based or "vegan" pet diets</strong> — incompatible with obligate-carnivore physiology.</li>
            <li><strong>Dairy</strong> — adult ferrets are largely lactose-intolerant; expect loose stool.</li>
            <li><strong>Chocolate, xylitol, onion, garlic, caffeine</strong> — the standard small-mammal toxin list applies.</li>
          </ul>

          <h2 id="commercial">Commercial Diet Ladder</h2>
          <p>
            Three tiers, broadly. None are perfect; the goal is to land on a formulation whose ingredient panel matches the obligate-carnivore profile above, then stay consistent. Ferrets imprint on food in the first 6 months and become reluctant to switch later, so it is sensible to rotate among 2–3 acceptable brands from kithood to prevent food fixation.
          </p>
          <p>
            <strong>Premium tier — animal-first, low-carb, no grain:</strong> Wysong Epigen 90, Wysong Archetype, Orijen Cat &amp; Kitten (used off-label by many ferret keepers), and similar formulations. Ingredient panel reads as named meats and meat meals; carbohydrate by difference is typically under 10%. Higher price point, but materially closer to the published macronutrient targets.
          </p>
          <p>
            <strong>Mid tier — ferret-specific, mostly acceptable:</strong> Marshall Premium Ferret Diet, ZuPreem Premium Ferret Diet, 8in1 Ultimate Ferret Diet. These are the brands stocked at independent pet retailers and used widely by breeders and shelters. Ingredient panels are imperfect (some plant protein, some grain) but the profile is in range for healthy adults.
          </p>
          <p>
            <strong>Entry tier — avoid where possible:</strong> Generic supermarket "ferret food" with corn, rice, or beet pulp in the first three ingredients, plus "fruit and vegetable" mixed treats. These formulations exist because ferret owners buy them, not because they reflect ferret nutrition.
          </p>

          <h2 id="raw">Raw and Whole-Prey Feeding</h2>
          <p>
            Raw and whole-prey diets ("frankenprey", whole mice, day-old chicks) are biologically the closest match to the ferret’s evolved diet. They are also genuinely controversial in the exotic-pet veterinary literature. The case for: macronutrient profile is naturally correct, dental abrasion is excellent, and many keepers report cleaner stool and reduced odor.
          </p>
          <p>
            The case against, summarized from the American Veterinary Medical Association policy on raw or undercooked animal-source protein in pet food (AVMA, current policy): commercial and home-prepared raw products carry documented contamination rates for Salmonella, Listeria, and Campylobacter. These pathogens can be shed in feces and saliva and reach immunocompromised, elderly, pregnant, or pediatric household members. Home-formulated raw diets are also frequently nutritionally unbalanced — calcium-to-phosphorus ratio is the most commonly cited failure mode.
          </p>
          <p>
            Harm-reduction guidance for keepers committed to raw feeding: source from a supplier that does HPP (high-pressure processing) or batch-tests for pathogens; freeze whole prey for at least 30 days before feeding to reduce parasite risk; treat the food the way you would treat raw chicken in your own kitchen (separate cutting board, dedicated utensils, hand-washing); and consult a veterinarian familiar with ferrets, ideally one credentialed by the American College of Zoological Medicine or with active membership in the Association of Exotic Mammal Veterinarians, to confirm calcium and taurine adequacy.
          </p>

          <h2 id="insulinoma-link">Carbohydrate and Insulinoma Risk</h2>
          <p>
            Insulinoma — a functional tumor of the pancreatic beta cells that produces inappropriate insulin — is the single most common neoplasm reported in middle-aged and older domestic ferrets. The leading working hypothesis in the exotic-pet literature is that chronic dietary carbohydrate load drives sustained insulin secretion, which over years contributes to beta-cell hyperplasia and eventually insulinoma formation. The evidence is associational rather than experimentally established, but the recommendation is consistent across exotic-vet sources: minimize dietary carbohydrate from kithood onward.
          </p>
          <p>
            Practical consequence: low-carb commercial kibble plus raw/whole-prey supplementation is the diet pattern most consistent with reducing this risk. Sugary treats — including fruit, "ferret treats" sweetened with molasses or honey, and human snacks — are the highest-leverage items to eliminate. For a full clinical summary, see our companion page on <a href="/health/insulinoma">Insulinoma in Ferrets</a>.
          </p>

          <h2 id="water">Water, Treats, and Feeding Mechanics</h2>
          <p>
            Fresh water at all times. Most ferrets drink more readily from a heavy ceramic bowl than from a sipper bottle; bottles are useful as a backup but should not be the only water source, because a clogged ball-valve in a hot room is a common cause of dehydration crises. Free-feeding is standard for adult ferrets — they self-regulate intake and graze 8–10 times a day. Restricted feeding can precipitate hypoglycemic episodes in ferrets with subclinical insulinoma.
          </p>
          <p>
            Acceptable treats: small pieces of cooked or freeze-dried meat, egg yolk in small amounts, commercial high-protein freeze-dried treats (Wysong, Bravo, Vital Essentials). Unacceptable: yogurt drops, raisin treats, fruit-and-vegetable medleys, and any treat whose first ingredient is sugar or grain. A useful rule: if you would feed it to a cat with diabetes, it is probably fine for a ferret.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Diet Picks</h2>
          <p>
            Three formulations that line up with the obligate-carnivore macronutrient targets above — animal-first ingredient panels, low plant carbohydrate, widely available in US pet retail or direct from the manufacturer. This is a documented-spec comparison, not a hands-on test: inclusion is based on published ingredient and macronutrient panels and on adoption patterns in keeper communities and at exotic-mammal shelters.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-epigen-90"
            badge="Premium Tier"
            name="Wysong Epigen 90"
            subtitle="Animal-first, starch-free, grain-free"
            score={9.3}
            winner
            description={
              <p>The lowest-carbohydrate commercial kibble in wide ferret-keeping use. Ingredient panel reads as named meats and organ meats; the formula is built on a starch-free system that drives carbohydrate by difference into the low single digits. Suitable as a sole diet for healthy adult ferrets, and the default choice when insulinoma risk is a primary concern. Higher price per pound than the mid tier.</p>
            }
            specs={[
              { label: 'Protein (dry-matter)', value: '~60%', highlight: 'good' },
              { label: 'Fat (dry-matter)', value: '~16%' },
              { label: 'Carbohydrate', value: 'Single digits', highlight: 'good' },
              { label: 'Grain-free', value: 'Yes', highlight: 'good' },
              { label: 'Distribution', value: 'Direct + specialty pet retail' },
            ]}
            pros={['Lowest commercial carb load in wide ferret use', 'Animal-first throughout', 'Starch-free system', 'Suitable for insulinoma-prone adults']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="$30–50 / 5 lb"
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=care-diet-basics"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />
          <ReviewCard
            id="marshall-premium-diet"
            badge="Mid Tier"
            name="Marshall Premium Ferret Diet"
            subtitle="Ferret-specific formulation, widely stocked, ferret-targeted macros"
            score={8.0}
            description={
              <p>The reference mid-tier ferret kibble in US pet retail. Specifically formulated for ferrets — not adapted from cat food — with a protein and fat profile that lands in the working ferret range. Imperfect ingredient panel (contains some plant protein) but the macro profile is acceptable for healthy adults, and per-pound price is materially lower than the premium tier. The most likely brand to find on a chain pet retailer shelf at short notice.</p>
            }
            specs={[
              { label: 'Protein (dry-matter)', value: '~38%', highlight: 'good' },
              { label: 'Fat (dry-matter)', value: '~20%', highlight: 'good' },
              { label: 'Carbohydrate', value: 'Mid teens', highlight: 'warn' },
              { label: 'Ferret-specific', value: 'Yes', highlight: 'good' },
              { label: 'Distribution', value: 'National chain pet retail' },
            ]}
            pros={['Ferret-specific formulation', 'Widely available', 'Affordable per pound', 'Long manufacturer track record in ferret retail']}
            cons={['Higher carb than premium tier', 'Plant protein in ingredient list']}
            price="$15–25 / 4 lb"
            ctaText="Find Marshall Premium Ferret Diet"
            ctaHref="/go/marshall/premium-ferret-diet?s=care-diet-basics"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="premium-ferret-diet"
          />
          <ReviewCard
            id="carniwhole"
            badge="Direct-to-Consumer"
            name="Carniwhole Ferret Food"
            subtitle="Direct-to-consumer ferret food, published macros, subscription-shipped"
            score={8.2}
            description={
              <p>A direct-to-consumer ferret food brand favoured by keepers who want ingredient transparency and a fresher product than long-shelf-stable commercial kibble. Carniwhole publishes its ingredient and macronutrient panel and ships on a subscription model. Appeal: transparency and freshness. Trade-off: subscription logistics and a shorter community track record than Marshall or Wysong.</p>
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
            ctaText="Visit Carniwhole"
            ctaHref="/go/carniwhole/ferret-diet?s=care-diet-basics"
            ctaAffiliateProgram="carniwhole"
            ctaAffiliateProduct="ferret-diet"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general information about ferret nutrition. It is not a substitute for individualized veterinary advice. If your ferret has been diagnosed with insulinoma, adrenal disease, or any other endocrine or gastrointestinal condition, work with a veterinarian familiar with ferrets before changing the diet.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
