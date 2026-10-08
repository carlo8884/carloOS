import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, StockImage, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ShopCtas, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Diet Basics — Obligate Carnivore Feeding | Ferret.com',
  description:
    'Obligate-carnivore feeding, diet tiers, and raw context. Under 3% carbohydrate on this page is a planning figure.',
  path: '/care/diet-basics',
  type: 'article',
})

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

  citation: SOURCES,
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
      'Ferrets are strict obligate carnivores. A working window on this page is 32-40% animal-sourced protein and 18-22% animal-sourced fat on a dry-matter basis. The Merck Veterinary Manual states that ferrets require protein of 35%–40%, and that carbohydrate (under 25%) and fiber (under 2.5%) proportions of the diet should be relatively low (https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets). Under 3% carbohydrate, and fiber under 3%, are planning figures. Merck does not state those tighter cutoffs. The first 3-5 ingredients of any commercial diet should be named animal proteins or animal fats. Ferrets cannot derive useful energy from plants — their short gut (roughly 5x body length, with a 3-4 hour transit time) lacks the equipment to ferment plant material.',
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

export default function FerretDietBasicsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="care"
        heroHop={
          <>
            <HopDisclosure siteId="ferret-com" href="/go/amazon-brand/wysong+ferret+food?s=diet-basics" />
            <div className="mb-4" data-primary-hop="true">
              <a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" data-shop-placement="hero" href="/go/amazon-brand/wysong+ferret+food?s=diet-basics">Browse Wysong ferret food on Amazon →</a>
            </div>
          </>
        }
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
                { label: 'Label calculator', href: '/tools/label-calculator' },
                { label: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />

          </>
        }

        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Toxic Foods', href: '/care/toxic-foods' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
 priceAsOf="2026-05-31">
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
            <li><strong>Carbohydrate.</strong> The Merck Veterinary Manual states that ferrets require protein of 35%–40%, and that carbohydrate (under 25%) and fiber (under 2.5%) proportions of the diet should be relatively low (https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets). Under 3% (ideally under 2%) is a planning figure on this page. Merck does not state that cutoff. Most "ferret" kibbles on supermarket shelves contain 15–30% carbohydrate by difference.</li>
            <li><strong>Taurine:</strong> supplemented, like commercial cat food. Ferrets, like cats, do not synthesize adequate taurine and require it from the diet.</li>
            <li><strong>Fiber.</strong> Merck states fiber proportions should be relatively low (under 2.5%) (https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/management-of-ferrets). Under 3% is a planning figure on this page. Higher fiber slows transit beyond what the ferret tract is built for.</li>
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
            <strong>Premium tier — animal-first:</strong> Wysong Epigen 90 markets starch-free, and its printed ingredient list does not name wheat, corn, rice, or soy. Carbohydrate is not on that guaranteed analysis — check the label. Wysong Archetype and Orijen Cat &amp; Kitten are used off-label by many ferret keepers; check each label before treating them as the same panel.
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
            Practical consequence: a commercial kibble whose carbohydrate you have checked on the label, plus raw/whole-prey supplementation, is the diet pattern most consistent with reducing this risk. Sugary treats — including fruit, "ferret treats" sweetened with molasses or honey, and human snacks — are the highest-leverage items to eliminate. For a full clinical summary, see our companion page on <a href="/health/insulinoma">Insulinoma in Ferrets</a>. <a href="/diet/best-ferret-kibble">The ferret kibble guide</a> compares kibbles and says carbohydrate is not on the Wysong guaranteed analysis. Wysong Epigen 90 and Marshall Premium, the two bags named in the tiers above, are set side by side in the <a href="/reviews/wysong-vs-marshall-kibble-guide">Wysong versus Marshall guide</a>.
          </p>

          <h2 id="water">Water, Treats, and Feeding Mechanics</h2>
          <p>
            Fresh water at all times. Most ferrets drink more readily from a heavy ceramic bowl than from a sipper bottle; bottles are useful as a backup but should not be the only water source, because a clogged ball-valve in a hot room is a common cause of dehydration crises. Free-feeding is standard for adult ferrets — they self-regulate intake and graze 8–10 times a day. Restricted feeding can precipitate hypoglycemic episodes in ferrets with subclinical insulinoma.
          </p>
          <p>
            Acceptable treats: small pieces of cooked or freeze-dried meat, egg yolk in small amounts, commercial high-protein freeze-dried treats (Wysong, Bravo, Vital Essentials). Unacceptable: yogurt drops, raisin treats, fruit-and-vegetable medleys, and any treat whose first ingredient is sugar or grain. A useful rule: if you would feed it to a cat with diabetes, it is probably fine for a ferret.
          </p>


          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wysong+ferret+food?s=diet-basics"
                amazonLabel="Browse Wysong ferret food on Amazon →"
              />
          </div>
          </div>

          <h2 id="picks">Diet Picks</h2>
          <p>
            Three formulations with animal-first ingredient panels, widely available in US pet retail or direct from the manufacturer. Carbohydrate is not on the Wysong or Marshall guaranteed analysis — check the label. This is a documented-spec comparison, not a hands-on test: inclusion is based on published ingredient and macronutrient panels and on adoption patterns in keeper communities and at exotic-mammal shelters.
          </p>
          <ReviewCard quietUntilTag
            id="wysong-epigen-90"
            badge="Premium Tier"
            name="Wysong Epigen 90"
            subtitle="Animal-first. Marketed starch-free. The printed list does not name wheat, corn, rice, or soy."
            winner
            description={
              <p>The current Wysong Epigen 90 page lists crude protein minimum 63% and crude fat minimum 16%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. The page markets the food as starch-free. Carbohydrate is not on the guaranteed analysis — check the label.</p>
            }
            specs={[
              { label: 'Crude protein (as printed)', value: 'Min. 63%', highlight: 'good' },
              { label: 'Crude fat (as printed)', value: 'Min. 16%' },
              { label: 'Carbohydrate', value: 'Not on the guaranteed analysis. Check the label.' },
              { label: 'Starch-free', value: 'Marketed on the current page. Check the label.', highlight: 'good' },
              { label: 'Distribution', value: 'Direct + specialty pet retail' },
            ]}
            pros={['Carbohydrate is not on the guaranteed analysis. Check the label.', 'Animal-first throughout', 'Marketed as starch-free', 'The printed list does not name wheat, corn, rice, or soy']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="see current price / 5 lb"
            priceNote="dated 2026-05-31."
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=care-diet-basics"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />
          <ReviewCard quietUntilTag
            id="marshall-premium-diet"
            badge="Mid Tier"
            name="Marshall Premium Ferret Diet"
            subtitle="Ferret-specific formulation, widely stocked, ferret-targeted macros"
            description={
              <p>The current Marshall Premium Ferret Diet page lists crude protein minimum 38% and crude fat minimum 18%. Those are guaranteed-analysis figures as printed, not a dry-matter conversion. Carbohydrate is not on the guaranteed analysis — check the label.</p>
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
            price="see current price / 4 lb"
            priceNote="dated 2026-05-31."
            ctaText="Find Marshall Premium Ferret Diet"
            ctaHref="/go/marshall/premium-ferret-diet?s=care-diet-basics"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="premium-ferret-diet"
          />
          <ReviewCard quietUntilTag
            id="carniwhole"
            badge="Direct-to-Consumer"
            name="Carniwhole Ferret Food"
            subtitle="Direct-to-consumer ferret food, published macros, subscription-shipped"
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
