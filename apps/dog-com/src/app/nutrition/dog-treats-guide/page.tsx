import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Treats Guide — Caloric Budget, Dental, Jerky Safety | Dog.com',
  description:
    'The 10% caloric rule, training treats, VOHC-Seal dental treats, single-ingredient treats, and what the FDA CVM jerky investigation actually found.',
  path: '/nutrition/dog-treats-guide',
  category: 'Dog Nutrition Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Treats Guide — How to Treat Without Wrecking the Diet',
  description:
    'Caloric budgeting, treat categories, dental treats and the VOHC seal, jerky-treat safety, and label reading.',
  url: 'https://dog.com/nutrition/dog-treats-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Treats Guide',
  description:
    'Caloric, dental, and safety considerations for choosing and using dog treats.',
  url: 'https://dog.com/nutrition/dog-treats-guide',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'What percent of my dog’s diet should be treats?',
    answer:
      'WSAVA, AAHA, and most veterinary nutrition guidelines use the 10% rule: treats and chews should not exceed 10% of the dog’s total daily calorie intake. The other 90% should come from a complete and balanced diet so that the dog still receives the right ratios of protein, fat, vitamins, and minerals. Going above 10% routinely unbalances the diet even if the dog stays at a healthy weight.',
  },
  {
    question: 'Are dental treats actually effective?',
    answer:
      'Some are. The Veterinary Oral Health Council (VOHC) awards a Seal of Acceptance to dental products — chews, foods, water additives, and treats — that have submitted clinical-trial data demonstrating reduction of plaque or tartar accumulation. Look for the VOHC Seal on the package. Greenies Original, Virbac C.E.T. VeggieDent, and OraVet Dental Hygiene Chews are examples of products with the VOHC Seal at the time of writing. Daily tooth brushing is still more effective than any treat, but a VOHC-accepted chew is a meaningful supplement.',
  },
  {
    question: 'Are jerky treats safe? I keep hearing they are dangerous.',
    answer:
      'Between 2007 and 2017, the FDA Center for Veterinary Medicine investigated thousands of reports of pet illness linked to jerky treats, predominantly chicken, duck, or sweet potato jerky imported from China. The FDA CVM received more than 6,200 illness reports and over a thousand dog deaths during the investigation. Despite extensive testing the agency was never able to identify a single causative contaminant. Reports declined after several major brands changed sourcing. The FDA still advises owners to monitor dogs for vomiting, decreased appetite, lethargy, or increased water consumption within hours of giving jerky treats and to discontinue use and contact a veterinarian if any of those signs appear.',
  },
  {
    question: 'What about rawhide and bones?',
    answer:
      'Rawhide can soften, swell, and lodge in the esophagus, stomach, or intestine, causing choking or obstruction; the AVMA and the ASPCA both list rawhide as a swallowing and obstruction hazard. Cooked bones (including most smoked, baked, or boiled bones from any species) splinter and cause oropharyngeal punctures and gastrointestinal perforation. The FDA CVM has issued specific warnings against feeding cooked bones. Raw bones are safer mechanically than cooked bones but carry their own risks (Salmonella, fractured teeth, intestinal obstruction). Discuss any bone or chew with your veterinarian before adding it routinely.',
  },
  {
    question: 'Are homemade treats better than store-bought?',
    answer:
      'They are different, not strictly better. Homemade treats let you control ingredients and avoid recalls, but they are usually not complete and balanced — that is fine, because treats are not supposed to be a meal. The risks with homemade treats are using ingredients that are toxic to dogs (xylitol, grapes/raisins, onions, garlic, macadamia nuts, chocolate; see our toxic foods guide), exceeding the 10% caloric budget, and using treats that are too large or hard for the dog’s size. Simple single-ingredient treats — small cubes of cooked lean chicken or turkey, carrot pieces, blueberries — are an easy starting point.',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogTreatsGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        contentType="nutrition"
        hero={{
          title: 'Dog Treats Guide — Caloric Budget, Dental, Jerky Safety',
          subtitle:
            'Treats are how most dogs become overweight. The fix is not to stop using treats — it is to budget them. This guide covers the 10% caloric rule, the four treat categories worth knowing, what the FDA CVM jerky investigation actually said, and how to read a treat label the same way you read a food label.',
          category: 'Dog Nutrition Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Dog Nutrition', href: '/nutrition' },
          { name: 'Dog Treats Guide', href: '/nutrition/dog-treats-guide' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The 10% Caloric Rule', href: '#budget' },
                { label: 'Training Treats', href: '#training' },
                { label: 'Dental Treats (VOHC Seal)', href: '#dental' },
                { label: 'Single-Ingredient Treats', href: '#single' },
                { label: 'Chews — Long-Lasting Treats', href: '#chews' },
                { label: 'Jerky-Treat Safety (FDA CVM)', href: '#jerky' },
                { label: 'Bones and Rawhide', href: '#bones' },
                { label: 'Reading a Treat Label', href: '#label' },
                { label: 'Homemade Treats', href: '#homemade' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Reading Food Labels', href: '/nutrition/reading-food-labels' },
                { label: 'WSAVA Guidelines Explained', href: '/nutrition/wsava-explained' },
                { label: 'Toxic Foods', href: '/nutrition/toxic-foods' },
                { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' },
                { label: 'Body Condition Score', href: '/guides/dog-body-condition-score' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Nutrition Tips"
              subtitle="Evidence-based feeding guidance every Tuesday."
              source="nutrition-treats"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — How to treat without sabotaging the diet">
            <p>
              <strong>Keep treats to ≤10% of daily calories</strong> (WSAVA Global Nutrition Guidelines, AAHA Nutritional Assessment Guidelines).
            </p>
            <p>
              <strong>Use small, low-calorie treats for training</strong>, VOHC-Seal products for dental support, and single-ingredient options as a default. <strong>Subtract treat calories from the daily food ration</strong> when you cross 5–10%.
            </p>
            <p>
              <strong>Skip cooked bones</strong> (splinter risk, FDA CVM warning). <strong>Be cautious with jerky-treat products</strong> (FDA CVM 2007–2017 investigation, 6,200+ illness reports).
            </p>
          </CalloutBox>

          <h2 id="budget">The 10% Caloric Rule — The Number That Actually Matters</h2>
          <DropCap>
            Almost every veterinary nutrition guideline — including the WSAVA Global Nutrition Guidelines and the AAHA Nutritional Assessment Guidelines — uses the same upper limit for treats: no more than 10% of total daily calorie intake. The reason is not arbitrary. The other 90% has to come from a food labeled &ldquo;complete and balanced&rdquo; per the AAFCO nutrient profile so the dog still receives the right ratios of protein, fat, essential fatty acids, vitamins, and minerals. Push treats above 10% routinely and the diet starts to drift out of balance even if total calories are correct.
          </DropCap>
          <p>
            The 10% rule is easier to follow once you write the numbers down. A typical 20-lb adult dog needs roughly 400–500 kcal per day for maintenance. Ten percent of that is 40–50 kcal — about two small commercial dog treats or a few teaspoons of single-ingredient treat material. For a 60-lb dog the daily intake is roughly 1,000–1,200 kcal, so the treat budget is 100–120 kcal. For an 8-lb dog, the budget is 25–30 kcal — which is one regular-sized biscuit, total, all day.
          </p>
          <p>
            Treat calories are the most commonly underestimated calorie source in canine diets. Most owners can correctly state how much kibble they feed. Almost no one tracks treat calories. Two standard medium biscuits, one dental chew, and three training rewards over a day can be 150 kcal — meaningfully more than the entire daily treat budget for a small dog.
          </p>

          <CalloutBox variant="tip" title="Practical math: write the numbers on the bag">
            <p>
              Read the calorie content per treat from the package (it must be on the label per AAFCO Chapter 6 — see below). Decide your daily treat budget (10% of maintenance calories). Write the count on the treat bag with a marker: &ldquo;Max 4 per day.&rdquo; Everyone in the household sees the same number.
            </p>
          </CalloutBox>

          <h2 id="training">Training Treats — Small, Soft, Low-Calorie</h2>
          <p>
            Training reps require many reinforcements in quick succession. A 15-minute training session at one treat per rep can easily reach 30–60 rewards. The treat must therefore be small enough that 30–60 of them fit inside the daily 10% budget.
          </p>
          <ul>
            <li>
              <strong>Size:</strong> Pea-sized or smaller. Treats sold for cats often work for small and medium dogs in training.
            </li>
            <li>
              <strong>Texture:</strong> Soft and quick to chew. A dog that has to stop and crunch loses momentum between reps. Soft, meaty treats are the standard.
            </li>
            <li>
              <strong>Calories:</strong> Look for ≤3 kcal per treat for small dogs, ≤5 kcal for medium dogs. Many commercial training treats publish this on the front of the bag.
            </li>
            <li>
              <strong>Variety:</strong> Use a mix — bland kibble for easy reps, higher-value soft treats for harder behaviors or distracting environments. See our <a href="/training/positive-reinforcement" className="text-brand-primary hover:underline">positive reinforcement guide</a> for the underlying mechanism.
            </li>
          </ul>
          <p>
            <strong>Using kibble from the daily ration:</strong> the simplest way to stay under the calorie budget is to set aside a portion of the dog&rsquo;s normal kibble each morning and use it as training treats. This adds zero calories to the day.
          </p>

          <h2 id="dental">Dental Treats — Look for the VOHC Seal</h2>
          <p>
            Dental treats are the largest category of treats sold with a health claim, and most of those claims are not substantiated by clinical data. The exception is products that carry the <strong>Veterinary Oral Health Council (VOHC) Seal of Acceptance</strong>. The VOHC is an independent body that reviews submitted clinical-trial data and awards a Seal to products that meet predefined standards for plaque or tartar reduction. The Seal is renewed periodically, and the current list of accepted products is published on the VOHC website.
          </p>
          <p>
            Examples of products with VOHC acceptance at the time of writing include:
          </p>
          <ul>
            <li>
              <strong>Greenies Original Dental Chews</strong> — VOHC accepted for plaque and tartar.
            </li>
            <li>
              <strong>Virbac C.E.T. VeggieDent Fr3sh</strong> — VOHC accepted.
            </li>
            <li>
              <strong>OraVet Dental Hygiene Chews</strong> — VOHC accepted.
            </li>
            <li>
              <strong>Purina DentaLife</strong> — VOHC accepted.
            </li>
            <li>
              <strong>Whimzees</strong> — several shapes VOHC accepted.
            </li>
          </ul>
          <p>
            Always confirm acceptance against the current VOHC list (vohc.org) — accepted status can change.
          </p>

          <CalloutBox variant="warning" title="Dental treats supplement, not replace, brushing">
            <p>
              Daily tooth brushing with a soft toothbrush and a veterinary enzymatic toothpaste remains the most effective home dental intervention; AVMA and AAHA dental guidelines both make this point. Dental treats and chews reduce plaque and tartar incrementally, not absolutely. Periodontal disease still requires professional cleaning under anesthesia. See our <a href="/health/dog-dental-care" className="text-brand-primary hover:underline">dog dental care</a> guide.
            </p>
          </CalloutBox>

          <h2 id="single">Single-Ingredient Treats — The Default Choice</h2>
          <p>
            Single-ingredient treats are exactly what they sound like: one ingredient, usually dehydrated or freeze-dried. The advantages are transparency (no flavor enhancers, no preservatives beyond what nature provides, no fillers), low allergen risk (useful for dogs on elimination diets — see our <a href="/nutrition/elimination-diet" className="text-brand-primary hover:underline">elimination diet</a> guide), and high palatability for picky dogs.
          </p>
          <ul>
            <li>
              <strong>Freeze-dried liver, chicken, beef, salmon, lamb:</strong> high protein, high palatability, easy to break into small pieces. Good for training. Caloric density is high, so portion accordingly.
            </li>
            <li>
              <strong>Dehydrated jerky from a US-based, single-source supplier:</strong> a useful chew option, but read the section on jerky safety below.
            </li>
            <li>
              <strong>Vegetable and fruit options:</strong> carrot rounds, green beans, blueberries, small apple slices (no seeds or core), and small pieces of banana are low-calorie, dog-safe options for owners trying to stretch the treat count without stretching calories.
            </li>
          </ul>

          <h2 id="chews">Chews — Long-Lasting Treats</h2>
          <p>
            Chews serve a different purpose than training treats: they occupy the dog for 10–60 minutes, satisfy chewing drive, and contribute to dental cleaning by mechanical scraping. They also pack a lot of calories — a single large bully stick or pig ear can be 100–300 kcal, which is the entire treat budget for a medium dog. Use intentionally; do not stack on top of other treats.
          </p>
          <ul>
            <li>
              <strong>Bully sticks:</strong> single-ingredient, fully digestible. Watch the calorie count — a 6-inch standard bully stick is roughly 70–100 kcal.
            </li>
            <li>
              <strong>VOHC-accepted long chews</strong> (Whimzees, some Virbac products): dental benefit + chewing satisfaction.
            </li>
            <li>
              <strong>Yak/Himalayan chews:</strong> hard cheese chews; very long-lasting. Watch for tooth fractures in heavy chewers (very hard chews are a documented cause of slab fractures of the upper carnassial tooth).
            </li>
          </ul>

          <h2 id="jerky">Jerky-Treat Safety — The FDA CVM Investigation</h2>
          <p>
            Beginning in 2007 the US Food and Drug Administration Center for Veterinary Medicine (FDA CVM) opened an active investigation into a pattern of pet illnesses associated with jerky treats — predominantly chicken, duck, and sweet potato jerky products, most of which were imported from China. By the time the CVM issued its final public update in 2017, the agency had received more than <strong>6,200 reports of illness involving more than 5,800 dogs and over 1,000 deaths</strong>, plus smaller numbers of cats and humans.
          </p>
          <p>
            Reported clinical signs were typically gastrointestinal (vomiting, decreased appetite, diarrhea) appearing within hours of consumption. A subset developed Fanconi-like syndrome — renal tubular dysfunction with glucosuria — a pattern unusual enough that it became a reporting flag. Despite extensive analytical testing of treats by FDA labs, university partners, and multiple national reference labs, the agency was never able to identify a single causative contaminant. Reports declined after several large brands changed sourcing, but the FDA CVM has not closed the file.
          </p>

          <CalloutBox variant="warning" title="FDA CVM advice on jerky treats (current)">
            <p>
              The FDA CVM continues to advise pet owners to: (1) check the country of origin on jerky treat packaging, (2) monitor dogs for vomiting, decreased appetite, lethargy, or increased water consumption within hours of giving jerky treats, and (3) discontinue use and contact a veterinarian if any of those signs appear. If your dog becomes ill after eating a jerky treat, the FDA encourages a Safety Reporting Portal submission so the data continues to be tracked.
            </p>
          </CalloutBox>

          <p>
            Practical guidance: jerky treats are not off the table, but they are a category that warrants closer attention than most other treats. Prefer single-ingredient jerky from a US-based supplier with a clear sourcing statement; introduce new products one at a time so any reaction can be tracked; do not assume that absence of a recall means absence of a problem.
          </p>

          <h2 id="bones">Bones and Rawhide — What the Risks Are</h2>
          <p>
            <strong>Cooked bones (smoked, baked, boiled — any thermally treated bone).</strong> The FDA CVM has issued specific warnings against giving cooked bones to dogs. Cooking changes the protein matrix of bone so that it splinters into sharp fragments instead of crushing. Documented and common adverse events include broken teeth, oral cavity and tongue lacerations, esophageal obstruction, gastric or intestinal perforation, and rectal bleeding. The injuries are sometimes catastrophic and almost always avoidable; cooked bones are an unforced error.
          </p>
          <p>
            <strong>Raw bones.</strong> Raw bones do not splinter the same way, but they carry their own risks: Salmonella and Campylobacter contamination (a household hygiene issue as well as a dog hygiene issue), fractured carnassial teeth (very hard recreational bones are a documented cause of slab fractures), and obstruction risk for bones the dog can swallow whole. If raw bones are used, talk to your vet first; supervision and selecting an appropriately sized bone are required.
          </p>
          <p>
            <strong>Rawhide.</strong> The AVMA, ASPCA, and many veterinary organizations list rawhide as a swallowing and obstruction hazard. Rawhide softens, swells, and can lodge in the esophagus, stomach, or small intestine. Some rawhide products have also been the subject of voluntary recalls related to processing chemicals. Many veterinarians now recommend alternative long chews (Whimzees, VOHC-accepted dental chews, bully sticks) instead of rawhide.
          </p>

          <h2 id="label">Reading a Treat Label — Same Rules as Food</h2>
          <p>
            Treats sold in the US for dogs must follow the same labeling rules as dog food, governed by AAFCO model regulations (in particular AAFCO Model Regulations PF-1 through PF-10 and the AAFCO Pet Food and Specialty Pet Food Labeling Guide, often referenced as Chapter 6 of the AAFCO Official Publication). On a treat label, look for:
          </p>
          <ul>
            <li>
              <strong>Product identity</strong> — the species (&ldquo;dog treat&rdquo;) and a clear product name. Words like &ldquo;chicken,&rdquo; &ldquo;with chicken,&rdquo; &ldquo;chicken flavor,&rdquo; and &ldquo;chicken dinner&rdquo; have different defined meanings under AAFCO labeling rules. See our <a href="/nutrition/reading-food-labels" className="text-brand-primary hover:underline">reading food labels</a> guide for the full breakdown.
            </li>
            <li>
              <strong>Net quantity</strong> — total package weight.
            </li>
            <li>
              <strong>Manufacturer or distributor name and address</strong> — anyone can be contacted in the event of a problem. Single-source US suppliers will list a US address; some imports list only a distributor.
            </li>
            <li>
              <strong>Ingredient statement</strong> — in descending order by weight (pre-cooking).
            </li>
            <li>
              <strong>Guaranteed analysis</strong> — minimum crude protein and fat, maximum crude fiber and moisture.
            </li>
            <li>
              <strong>Calorie content statement</strong> — required by AAFCO. Should appear as &ldquo;ME (calculated) kcal/kg&rdquo; and frequently kcal per treat or per serving. If a treat package does not display a calorie content statement, that is a red flag.
            </li>
            <li>
              <strong>Feeding directions</strong> — &ldquo;intermittent or supplemental feeding only&rdquo; is the standard notation on treats; this is the AAFCO way of saying &ldquo;not a complete diet.&rdquo;
            </li>
          </ul>

          <h2 id="homemade">Homemade Treats — Useful, but Bounded</h2>
          <p>
            Homemade treats let you control the ingredient list and avoid recalls. They are a reasonable option for many households. The constraints to respect:
          </p>
          <ul>
            <li>
              <strong>Stay clear of toxic ingredients.</strong> Xylitol (a common sugar substitute, often in peanut butter), grapes and raisins, onions, garlic, leeks, macadamia nuts, chocolate, and yeast dough are all toxic to dogs. See our <a href="/nutrition/toxic-foods" className="text-brand-primary hover:underline">toxic foods</a> guide for the complete list.
            </li>
            <li>
              <strong>Keep it simple.</strong> Single-ingredient treats are the easiest to keep safe. A small cube of cooked plain chicken or turkey, a slice of carrot, or a blueberry is a complete treat — no recipe required.
            </li>
            <li>
              <strong>Count the calories.</strong> Homemade treats have the same 10% limit as commercial treats. Track approximate calorie content (USDA FoodData Central is a useful reference for whole-food ingredients).
            </li>
            <li>
              <strong>Do not try to make a complete diet</strong> in the form of treats. Complete and balanced canine diets require formulation work by a veterinary nutritionist; the failure mode of homemade complete diets is recurrent nutrient imbalance (calcium, taurine, copper, zinc, vitamin D, vitamin E). Use commercial complete diets as the 90%; use homemade or commercial treats for the 10%.
            </li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <CalloutBox variant="info" title="References">
            <p>
              FDA Center for Veterinary Medicine, &ldquo;Jerky Pet Treat Update&rdquo; final consumer communications, 2017 (with ongoing safety reporting guidance). • Veterinary Oral Health Council (VOHC) accepted products list, vohc.org. • AAFCO Official Publication, Chapter 6 — Model Regulations for Pet Food and Specialty Pet Food. • WSAVA Global Nutrition Committee — Global Nutrition Guidelines (treats 10% rule). • AAHA Nutritional Assessment Guidelines for Dogs and Cats. • FDA CVM — &ldquo;No Bones (or Bone Treats) About It: Reasons Not to Give Your Dog Bones.&rdquo;
            </p>
          </CalloutBox>
        </div>
      </ArticleLayout>
    </>
  )
}
