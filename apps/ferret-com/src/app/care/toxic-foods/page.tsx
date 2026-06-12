import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Toxic Foods for Ferrets — Chocolate, Onions, Sugar | Ferret.com',
  description:
    'Foods and substances toxic to ferrets: chocolate, onions/garlic, xylitol, grapes/raisins, sugar, dairy, and household toxins — plus what to do.',
  path: '/care/toxic-foods',
  type: 'article',
})

const SOURCES = [
  {
    label: "ASPCA Animal Poison Control Center — toxic substance database and species-specific guidance",
    url: "https://www.aspca.org/pet-care/animal-poison-control",
    publisher: "ASPCA",
  },
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — toxicology and GI foreign-body chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Veterinary Clinics of North America: Exotic Animal Practice — ferret toxicology and emergency medicine",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — toxic food and household-hazard owner resources",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — exotic-mammal toxicology continuing education",
    url: "https://www.aemv.org",
    publisher: "AEMV",
  },
]
const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Toxic Foods for Ferrets',
  description:
    "Reference list of foods, plants, and common household substances that are toxic or harmful to ferrets, with emergency response guidance and Pet Poison Helpline information.",
  url: 'https://ferret.com/care/toxic-foods',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',

  citation: SOURCES,
})


const FAQS = [
  {
    question: 'What is the most dangerous human food for a ferret?',
    answer:
      "Chocolate (especially dark and baking chocolate), xylitol-containing products (sugar-free gum, some peanut butters, some baked goods), onions and garlic in any form, and grapes/raisins are the top tier. Chocolate methylxanthines cause cardiac arrhythmias and seizures. Xylitol causes catastrophic insulin release and rapid hypoglycemia. Allium species cause hemolytic anemia. Grape/raisin toxicity in ferrets is less well-characterized than in dogs but documented as a renal toxicant in carnivore species generally.",
  },
  {
    question: 'My ferret ate something — what should I do?',
    answer:
      "Call your exotic-pet vet immediately. If they are unavailable, call the ASPCA Animal Poison Control Center (888-426-4435) or the Pet Poison Helpline (855-764-7661). Both charge a consultation fee but provide species-specific guidance and a case number that subsequent vets can reference. Do NOT induce vomiting at home unless instructed — wrong-substance vomiting can cause aspiration or additional damage on the way back up.",
  },
  {
    question: 'Can ferrets eat fruit or vegetables?',
    answer:
      "Not as a meaningful part of the diet. Ferrets are obligate carnivores; their gastrointestinal tract is short and adapted to digesting prey-source protein and fat. Vegetable matter is poorly digested and the carbohydrate load contributes to long-term insulinoma risk. Small accidental tastes of most fruits and non-onion vegetables are not acute emergencies, but offering them as treats is contraindicated. The American Ferret Association is consistent on this point.",
  },
  {
    question: 'Is sugar bad for ferrets even in small amounts?',
    answer:
      "Yes, in a meaningful sense. Sugar treats (raisins are a famous example) have historically been recommended in some older ferret-keeping circles. Current exotic-pet veterinary consensus is to avoid them entirely. The leading working hypothesis for the high prevalence of insulinoma in domestic ferrets is chronic dietary carbohydrate exposure driving sustained insulin demand. Sugary treats — including honey, syrup, and sweet fruit — are the worst-case version of this.",
  },
  {
    question: 'What about dairy?',
    answer:
      "Most adult ferrets are lactose-intolerant. Milk and many dairy products cause diarrhea. Small amounts of plain yogurt are sometimes tolerated but offer no nutritional benefit and are not recommended as a regular item. Cheese as an occasional tiny smear for medication-hiding is generally fine; cheese as a treat is not.",
  },
  {
    question: 'Are any houseplants dangerous?',
    answer:
      "Yes, many. Ferrets sometimes chew plants while exploring, and the ASPCA toxic plant database lists hundreds of species toxic to small mammals. Notable: lilies, philodendron, pothos, sago palm, oleander, azalea, and dieffenbachia. Even non-toxic plants can cause gastrointestinal upset. The simplest household policy is to keep all houseplants out of any room the ferret has access to, regardless of toxicity status.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)


export default function FerretToxicFoodsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="care"
        hero={{
          title: 'Toxic Foods and Household Hazards for Ferrets',
          subtitle:
            'Ferrets are obligate carnivores with a short gastrointestinal tract, a high metabolic rate, and a famously curious chewing habit. The combination means accidental ingestions are common and the toxicity profile for many household items is different from cats and dogs. A small chocolate dose that a 25 kg dog would shrug off can be a life-threatening exposure in a 1 kg ferret.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Toxic Foods', href: '/care/toxic-foods' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'The Top-Tier Toxic Foods', href: '#toptier' },
                { label: 'Foods to Avoid as Treats', href: '#avoid' },
                { label: 'Household Toxins', href: '#household' },
                { label: 'Plants', href: '#plants' },
                { label: 'Foreign Body Ingestion', href: '#foreign' },
                { label: 'Emergency Response', href: '#emergency' },
                { label: 'Poison Control Numbers', href: '#poison-control' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Diet Basics', href: '/care/diet-basics' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Insulinoma', href: '/health/insulinoma' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Practical ferret husbandry, monthly."
              source="care-toxic-foods"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Diet Basics', href: '/care/diet-basics' },
          { title: 'Gastrointestinal Blockage', href: '/health/gastrointestinal-blockage' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
            reviewedBy="Editorial team"
          />

          <DropCap>
            Most ferret toxic exposures are accidents — a dropped square
            of chocolate, a chewed houseplant leaf, a sip of antifreeze
            from a garage drip. Prevention is mostly environmental
            design: nothing toxic at floor level, nothing toxic in any
            room the ferret has unsupervised access to, and a poison
            control plan known in advance rather than improvised mid-
            crisis.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Top-tier toxic: chocolate, xylitol, onions/garlic,
            grapes/raisins. Common avoid-as-treats: sugary fruits,
            dairy, peanut butter (xylitol risk), bread and grain
            products, vegetable matter generally. Household toxins:
            antifreeze, rodenticides, ibuprofen and acetaminophen, tea
            tree oil, many cleaning products. Many houseplants are
            toxic. Foreign-body ingestion (rubber, foam, plastic) is
            the most common serious ferret emergency overall. For any
            ingestion: call your exotic-pet vet immediately; backup
            numbers are ASPCA APCC (888-426-4435) and Pet Poison
            Helpline (855-764-7661).
          </p>

          <h2 id="toptier">The Top-Tier Toxic Foods</h2>
          <h3>Chocolate</h3>
          <p>
            Methylxanthines (theobromine and caffeine) in chocolate are
            toxic to ferrets in small amounts. Dark and baking chocolate
            are more concentrated than milk chocolate; a single square
            of baking chocolate can be a life-threatening exposure to a
            1 kg ferret. Signs include vomiting, restlessness, elevated
            heart rate, cardiac arrhythmia, tremor, and seizure. The
            ASPCA APCC chocolate toxicity data, developed primarily for
            dogs, applies on a per-kg basis to ferrets.
          </p>
          <h3>Xylitol</h3>
          <p>
            Xylitol is a sugar alcohol used in sugar-free gum, some
            peanut butters, some baked goods, and some pet dental
            products. In ferrets, xylitol triggers massive insulin
            release and rapid, severe hypoglycemia within 30-60 minutes.
            High-dose exposures also cause hepatic necrosis. Signs:
            collapse, seizure, weakness, hypoglycemia. Xylitol exposure
            is a same-hour emergency.
          </p>
          <h3>Onions and Garlic (Allium species)</h3>
          <p>
            Allium species — onions, garlic, leeks, chives, shallots,
            in raw, cooked, dried, or powdered form — contain
            organosulfur compounds that cause oxidative damage to red
            blood cells. The resulting hemolytic anemia presents 2-5
            days after exposure with weakness, pale gums, dark urine,
            and lethargy. Onion powder in baby food and broth is a
            classic accidental exposure — always check the label of
            any savory baby food offered to a ferret.
          </p>
          <h3>Grapes and Raisins</h3>
          <p>
            Grape and raisin toxicity is best-characterized in dogs but
            documented as a renal toxicant across multiple carnivore
            species. The mechanism is not fully understood and the
            toxic dose is unpredictable. Even small ingestions warrant
            a call to poison control. Raisins are historically common
            ferret treats in some older recommendations; current
            exotic-pet consensus is to eliminate them entirely.
          </p>

          <CalloutBox variant="warning" title="If you suspect a top-tier toxic ingestion">
            <p>
              Do not wait for symptoms. Call your exotic-pet vet
              immediately. If they are unavailable, call ASPCA Animal
              Poison Control Center (888-426-4435) or Pet Poison
              Helpline (855-764-7661). Both lines are 24/7 and will
              give species-specific guidance. Treatment is most
              effective in the first 1-4 hours; waiting for clinical
              signs reduces the options available.
            </p>
          </CalloutBox>

          <h2 id="avoid">Foods to Avoid as Treats</h2>
          <p>
            Items that are not acutely toxic but are inappropriate as
            part of a ferret diet:
          </p>
          <ul>
            <li>
              <strong>Sugary fruits</strong> — bananas, apples, pears,
              berries, melon. The carbohydrate load is contraindicated
              given chronic insulinoma risk. Many ferrets like them;
              their preference is not a justification.
            </li>
            <li>
              <strong>Vegetables</strong> — including corn, peas,
              carrots. Poorly digested by the ferret GI tract; can
              cause gas, soft stool, or partial obstruction in larger
              pieces.
            </li>
            <li>
              <strong>Dairy</strong> — milk, ice cream, most cheese.
              Most adult ferrets are lactose-intolerant. Diarrhea is the
              common presentation.
            </li>
            <li>
              <strong>Bread, grain, cereal, pasta</strong> — high
              carbohydrate, no nutritional value to a ferret, and
              contributes to long-term insulinoma risk.
            </li>
            <li>
              <strong>Peanut butter and most nut butters</strong> —
              hard for ferrets to chew and swallow safely; some
              commercial peanut butters contain xylitol; high in
              vegetable carbohydrate. Not recommended even as
              medication-hiding.
            </li>
            <li>
              <strong>Cooked bones</strong> — splinter and can
              perforate the GI tract. Raw bones are sometimes part of
              raw-feeding diets under specific protocols but cooked
              bones are uniformly inappropriate.
            </li>
            <li>
              <strong>Avocado</strong> — persin is reported as a
              cardiotoxin in some species; safer to avoid entirely.
            </li>
            <li>
              <strong>Caffeine</strong> in any form — coffee, tea,
              energy drinks, caffeinated soda.
            </li>
            <li>
              <strong>Alcohol</strong> in any quantity.
            </li>
            <li>
              <strong>Macadamia nuts</strong> — documented toxicity in
              dogs; toxicity in ferrets is not well-characterized but
              the family of nut toxins is best avoided across all small
              carnivores.
            </li>
          </ul>

          <h2 id="household">Common Household Toxins</h2>
          <h3>Human medications</h3>
          <ul>
            <li>
              <strong>Ibuprofen, naproxen, acetaminophen.</strong> All
              are toxic to ferrets at small doses. Acetaminophen causes
              hepatic necrosis. Ibuprofen and naproxen cause
              gastrointestinal ulceration and renal failure. A single
              dropped tablet is a same-day vet emergency.
            </li>
            <li>
              <strong>Aspirin.</strong> Toxic in ferrets at standard
              human doses.
            </li>
            <li>
              <strong>Antidepressants, ADHD medications, sleep aids,
              cold medications.</strong> Many of these are highly toxic
              to small carnivores. Any accidental ingestion is an
              emergency.
            </li>
          </ul>
          <h3>Garage and yard</h3>
          <ul>
            <li>
              <strong>Antifreeze (ethylene glycol).</strong> Highly
              attractive (sweet taste), highly toxic, rapid renal
              damage. Small drips from a parked car can be a fatal
              exposure for a small mammal.
            </li>
            <li>
              <strong>Rodenticides.</strong> Anticoagulant rodenticides
              cause uncontrolled internal bleeding 3-7 days after
              exposure; bromethalin causes acute neurological signs.
              Any ferret in any home with rodenticide bait stations is
              at risk; the bait stations are designed to be attractive
              to small mammals.
            </li>
            <li>
              <strong>Insecticides.</strong> Pyrethrins, pyrethroids,
              and organophosphates are all toxic to ferrets. Flea and
              tick products labeled for dogs (especially permethrin-
              based) can be fatal to ferrets.
            </li>
            <li>
              <strong>Slug bait (metaldehyde).</strong> Rapid onset
              tremors and seizures.
            </li>
          </ul>
          <h3>Household chemicals</h3>
          <ul>
            <li>Bleach, ammonia, and most cleaning products at standard concentrations.</li>
            <li>Essential oils — tea tree, eucalyptus, citrus, peppermint, and pine oils are particularly toxic. Diffused oils are a meaningful inhalation hazard.</li>
            <li>Mothballs (naphthalene or paradichlorobenzene).</li>
            <li>Glow sticks and battery acid.</li>
          </ul>

          <h2 id="plants">Toxic Plants</h2>
          <p>
            The ASPCA APCC toxic plant database lists hundreds of
            species toxic to small mammals. Notable categories:
          </p>
          <ul>
            <li>
              <strong>Lilies</strong> (true lilies and daylilies) —
              renal toxicity.
            </li>
            <li>
              <strong>Sago palm</strong> — hepatic failure, often
              fatal even with treatment.
            </li>
            <li>
              <strong>Philodendron, pothos, dieffenbachia,
              monstera</strong> — calcium oxalate crystals causing
              severe oral and GI irritation.
            </li>
            <li>
              <strong>Oleander, azalea, rhododendron, foxglove,
              yew</strong> — cardiac glycosides and other
              cardiotoxins.
            </li>
            <li>
              <strong>Tulips, daffodils, hyacinths</strong> — bulbs
              are the most toxic part.
            </li>
            <li>
              <strong>Marijuana</strong> — neurological signs,
              hypothermia, ataxia. Increasingly common toxic exposure
              in pets as legalization expands.
            </li>
          </ul>
          <p>
            The simplest household policy is to keep all houseplants
            out of any room the ferret has free-roam access to. The
            time investment in checking every plant against the toxic
            list is greater than simply rehoming the plants to a closed
            room.
          </p>

          <h2 id="foreign">Foreign-Body Ingestion</h2>
          <p>
            Foreign-body ingestion is the most common serious ferret
            emergency in many exotic-pet practices — and the toxic-food
            category does not capture it. Ferrets chew rubber, soft
            plastic, foam, and fabric items reflexively. Common
            offenders: shoe insoles, rubber bands, foam earplugs,
            silicone phone cases, soft headphone tips, balloon
            fragments, soft chew toys not designed for ferrets.
          </p>
          <p>
            Signs of GI foreign body: vomiting, anorexia, lethargy,
            grinding teeth, hunched posture, decreased stool output.
            Surgical removal is the definitive treatment. The
            single most useful prevention measure is regular ferret-
            proofing of any room the ferret enters — get down on your
            hands and knees and remove every chewable item at floor
            level. The cost of one foreign-body surgery is roughly
            equal to the cost of a decade of careful ferret-proofing.
          </p>

          <CalloutBox variant="evidence" title="Why foreign body matters more than people expect">
            <p>
              Multiple exotic-pet veterinary case series report
              foreign-body ingestion as the leading or near-leading
              cause of ferret emergency surgery. The American Ferret
              Association and AEMV both flag aggressive ferret-
              proofing as the highest-impact household safety
              intervention an owner can make. Rubber and soft plastic
              are the most-cited offenders.
            </p>
          </CalloutBox>

          <h2 id="emergency">Emergency Response</h2>
          <p>
            For any suspected ingestion of a toxic substance or a
            foreign body:
          </p>
          <ol>
            <li>
              <strong>Identify the substance if possible.</strong>
              Save the packaging, label, or a sample. Note approximate
              quantity and approximate time of ingestion.
            </li>
            <li>
              <strong>Call your exotic-pet vet immediately.</strong>
              Even if it is after-hours and you expect to leave a
              message, call — many practices route emergency calls to
              an on-call clinician.
            </li>
            <li>
              <strong>If your vet is unavailable, call poison
              control.</strong> ASPCA APCC (888-426-4435) or Pet
              Poison Helpline (855-764-7661). Both are 24/7. Both
              charge a per-case consultation fee (roughly $75-90 as
              of 2026). They will give species-specific guidance,
              answer questions about decontamination, and provide a
              case number that downstream vets can reference.
            </li>
            <li>
              <strong>Transport to an exotic-pet capable emergency
              clinic.</strong> Many general emergency clinics can
              stabilize a ferret while waiting for transfer to a
              specialty center; not all are comfortable with ferret
              cases. Know your local options in advance.
            </li>
            <li>
              <strong>Do NOT induce vomiting at home unless instructed
              by poison control or your vet.</strong> Wrong-substance
              emesis can cause aspiration or further damage on the way
              back up. Several common household emetics (hydrogen
              peroxide) are not safe in ferrets.
            </li>
          </ol>

          <h2 id="poison-control">Poison Control Numbers</h2>
          <ul>
            <li>
              <strong>ASPCA Animal Poison Control Center:</strong>{' '}
              888-426-4435. 24/7. Consultation fee applies.
            </li>
            <li>
              <strong>Pet Poison Helpline:</strong> 855-764-7661.
              24/7. Consultation fee applies.
            </li>
            <li>
              <strong>Your local exotic-pet emergency hospital:</strong>{' '}
              know the number and address before you need it.
            </li>
          </ul>
          <p>
            Tape or magnet these numbers somewhere visible — on the
            refrigerator, on the inside of a kitchen cabinet door, or
            on the wall near the cage. The minute lost looking up
            numbers during an emergency is a meaningful minute.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general guidance on common toxic exposures in
            ferrets. Any actual ingestion is a clinical event that
            requires immediate consultation with poison control and an
            exotic-pet veterinarian. Do not rely on online lists in
            place of an emergency phone call.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
