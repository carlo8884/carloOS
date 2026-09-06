import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Raw Feeding Guide for Ferrets — Frankenprey & Whole Prey | Ferret.com',
  description:
    'A practical raw-feeding reference for ferrets: frankenprey ratios, whole-prey sourcing, freezing protocols, calcium balance, and pathogen harm-reduction.',
  path: '/diet/raw-feeding-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Raw Feeding Guide for Ferrets',
  description:
    'How to feed a ferret a raw or whole-prey diet safely: frankenprey ratios, sourcing, freezing protocols, calcium balance, and food-safety harm-reduction.',
  url: 'https://ferret.com/diet/raw-feeding-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Raw Feeding Guide for Ferrets',
  description:
    'Guidance on formulating and safely handling raw and whole-prey diets for domestic ferrets.',
  url: 'https://ferret.com/diet/raw-feeding-guide',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: 'Can ferrets eat raw meat?',
    answer:
      'Yes — a correctly formulated raw or whole-prey diet is the closest match to what a ferret evolved to eat, supplying animal protein and fat in the right proportions with essentially no plant carbohydrate. The qualifier matters: the benefits belong to a well-formulated raw diet, and a poorly assembled one (most commonly all muscle meat with no bone, which is calcium-deficient) can be worse than a good commercial kibble. Confirm calcium and taurine adequacy with a veterinarian familiar with ferrets before committing to raw as a sole diet.',
  },
  {
    question: 'What is the frankenprey ratio for ferrets?',
    answer:
      'Approximately 80% muscle meat, 10% raw edible bone, and 10% organ — with the organ portion split roughly half liver and half other secreting organ (kidney, spleen, pancreas). The two ratios that matter most: enough edible bone (the calcium source) and not over-feeding liver (excess vitamin A is a real risk). Variety across protein sources helps cover the micronutrient spread.',
  },
  {
    question: 'How long should I freeze raw meat before feeding it to a ferret?',
    answer:
      'Freeze whole prey and raw components for at least 30 days before feeding to reduce parasite risk. Thaw in the refrigerator — never on the counter at room temperature — and discard anything left uneaten for more than a short period. Keep dedicated containers and utensils for raw food and clean them as you would after handling raw chicken for yourself.',
  },
  {
    question: 'Is raw feeding safe for households with kids or elderly members?',
    answer:
      'It carries real risk that needs managing. Raw products carry documented contamination rates for Salmonella, Listeria, and Campylobacter, which can be shed in a ferret’s feces and saliva and reach immunocompromised, elderly, pregnant, or very young household members — the reason the AVMA maintains a cautionary policy on raw animal-source protein. Harm reduction: source from HPP or batch-tested suppliers, use a dedicated cutting board and utensils, wash hands thoroughly, and clean feeding areas promptly.',
  },
  {
    question: 'How do I switch a kibble-fed ferret to raw?',
    answer:
      'Gradually — ferrets imprint on food early, and a kibble-raised adult may not recognize raw meat as food at first. Warm the meat slightly to release aroma, offer small pieces alongside the familiar diet, and consider a meat-based gravy or a smear on the lips to trigger interest. Never let a ferret skip meals for long during a transition; ferrets can become hypoglycemic quickly.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, faqSchema)

export default function RawFeedingGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Raw Feeding Guide for Ferrets',
          subtitle:
            'A raw or whole-prey diet is the closest match to what a ferret evolved to eat — but only when it is correctly balanced and safely handled. This guide covers the ratios, the sourcing, the freezing protocols, and the food-safety discipline that separate a good raw diet from a deficient or hazardous one.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Raw Feeding Guide', href: '/diet/raw-feeding-guide' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Raw', href: '#why' },
                { label: 'Whole Prey vs Frankenprey', href: '#models' },
                { label: 'The Frankenprey Ratio', href: '#ratio' },
                { label: 'Sourcing', href: '#sourcing' },
                { label: 'Freezing & Thawing', href: '#freezing' },
                { label: 'Food-Safety Harm Reduction', href: '#safety' },
                { label: 'Transitioning a Ferret', href: '#transition' },
                { label: 'Sourcing Whole Prey', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Supplements & Vitamins', href: '/diet/supplements-and-vitamins' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-raw-feeding-guide"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Whole Prey vs. Kibble', href: '/diet/whole-prey-vs-kibble' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Transitioning Foods', href: '/diet/transitioning-foods' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret raw-feeding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret raw-feeding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-frankenprey-ratio-chart,
              fridge-freeze-thaw-card, and
              mustelid-raw-feeding-handbook notes
              that match the frankenprey-ratio-map,
              freeze-30-day-log, and
              avma-raw-safety-grounding copy on this page —
              a laminated ferret frankenprey-ratio chart so
              the 80% muscle / 10% edible-bone / 10% organ
              map is posted on the fridge (not a diet-hub
              feeding chart, not a food-transition chart,
              not a prey-vs-kibble chart), a ferret fridge
              freeze-thaw card so 30-day-freeze /
              fridge-thaw / dedicated-utensil notes are
              labeled on the fridge (not a mix-ratio card,
              not a diet-model card, not a no-sugar-treat
              card), and a mustelid raw-feeding handbook so
              the AVMA raw-caution / Quesenberry /
              calcium-balance grounding is a physical
              kitchen book (not a food-transition handbook,
              not a diet-model handbook, not a diet
              handbook). Educational kitchen checklist,
              not a ranked prey list, not a sleep-sack hop,
              and not a substitute for an exotic-mammal
              veterinarian. Ferret.com does not sell
              insurance. Aging pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret raw-feeding checklist"
              subtitle="Email the frankenprey-ratio-chart, fridge freeze-thaw card, and raw-feeding-handbook notes. No spam."
              ctaText="Email my ferret raw-feeding checklist"
              source="diet-raw-feeding-guide-under-hero"
            />
          </div>

          <h2 id="why">Why Raw</h2>
          <p>
            A correctly formulated raw diet supplies animal protein and fat in the proportions a ferret evolved to digest, with essentially no plant carbohydrate, plus dietary moisture, taurine, and — when bone is included — a natural calcium-to-phosphorus balance. Keepers who feed raw commonly report firmer, less odorous stool, cleaner teeth, and good coat condition. None of this is automatic, however. The benefits belong to a <em>well-formulated</em> raw diet; a poorly assembled one can be worse than a good commercial kibble. For the broader comparison, see <a href="/diet/whole-prey-vs-kibble">whole-prey vs kibble</a>.
          </p>

          <h2 id="models">Whole Prey vs Frankenprey</h2>
          <p>
            There are two raw approaches. <strong>Whole prey</strong> means feeding intact, appropriately sized animals — frozen-thawed mice, rats, day-old chicks, quail. Its advantage is that the prey arrives pre-balanced: muscle, organ, and bone are present in the proportions nature supplies, so you do not have to engineer the ratio yourself. <strong>Frankenprey</strong> means assembling a balanced diet from separately purchased parts — muscle meat, organ, and raw meaty bone — to approximate whole prey. Frankenprey offers more control and easier sourcing of familiar meats, at the cost of having to get the ratio right yourself.
          </p>

          <h2 id="ratio">The Frankenprey Ratio</h2>
          <p>
            The widely used frankenprey target, adapted from the framework popularized for carnivore raw feeding, is approximately <strong>80% muscle meat, 10% raw edible bone, and 10% organ</strong> — with the organ portion split so that roughly half is liver and half is other secreting organ (kidney, spleen, pancreas). The two ratios that matter most are getting enough edible bone (the calcium source) and not over-feeding liver (excess vitamin A is a real risk). A diet that is all muscle meat with no bone is calcium-deficient and, over time, harmful; this is the single most common raw-feeding failure mode cited in the exotic-pet literature. Variety across protein sources — poultry, rabbit, and others — helps cover the micronutrient spread.
          </p>

          <h2 id="sourcing">Sourcing</h2>
          <p>
            Whole frozen prey is sold by reptile-feeder suppliers; choose sizes appropriate to a ferret and confirm the supplier's handling standards. Frankenprey components can come from a butcher, an ethnic grocery (often the best source for organ meats), or a raw-pet-food supplier. Wherever possible, favor suppliers that high-pressure-process (HPP) their product or batch-test for pathogens. Avoid wild-caught prey of unknown provenance, which carries parasite and toxin risk.
          </p>

          <h2 id="freezing">Freezing & Thawing</h2>
          <p>
            Freeze whole prey and raw components for at least 30 days before feeding to reduce parasite risk. Thaw in the refrigerator, never on the counter at room temperature, and discard anything left uneaten for more than a short period — ferrets graze frequently, so portion to what will be consumed quickly. Keep a dedicated set of containers and utensils for raw food and clean them as you would after handling raw chicken for yourself.
          </p>

          <h2 id="safety">Food-Safety Harm Reduction</h2>
          <p>
            Raw products carry documented contamination rates for <em>Salmonella</em>, <em>Listeria</em>, and <em>Campylobacter</em>, which can be shed in a ferret's feces and saliva and reach immunocompromised, elderly, pregnant, or very young household members. The American Veterinary Medical Association maintains a cautionary policy on raw or undercooked animal-source protein for this reason. If you feed raw, treat it like the raw meat it is: dedicated cutting board and utensils, thorough hand-washing, prompt cleanup of feeding areas, and extra caution in households with vulnerable members. Source from HPP or batch-tested suppliers to lower the baseline risk.
          </p>

          <h2 id="transition">Transitioning a Ferret</h2>
          <p>
            Ferrets imprint on food early and resist change later (see <a href="/diet/kit-vs-adult-feeding">kit vs adult feeding</a>), so a kibble-raised adult may not recognize raw meat as food at first. Introduce it gradually: warm the meat slightly to release aroma, offer small pieces alongside the familiar diet, and consider a meat-based gravy or a smear on the lips to trigger interest. Patience matters — never let a ferret skip meals for long, as ferrets can become hypoglycemic quickly. Confirm calcium and taurine adequacy with a veterinarian familiar with ferrets before committing to raw as a sole diet.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret frankenprey-ratio chart /
              ferret fridge freeze-thaw card /
              mustelid raw-feeding handbook).
              Keep existing Chewy feeder-prey review hop.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs diet-hub /
              transitioning / whole-prey kitchen kits.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret raw-feeding kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page frankenprey-ratio-map,
              freeze-30-day-log, and
              avma-raw-safety-grounding copy — a laminated
              ferret frankenprey-ratio chart, a ferret
              fridge freeze-thaw card, and a mustelid
              raw-feeding handbook. Educational kitchen
              searches only. They are not a ranked prey
              list, they are not a diet-hub / transitioning
              / whole-prey hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden. Existing Chewy frozen-feeder-prey
              review hop stays in the sourcing pick below.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+frankenprey+ratio+chart?s=raw-feeding-guide"
                amazonLabel="Browse laminated ferret frankenprey-ratio charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+freeze+thaw+card?s=raw-feeding-guide"
                amazonLabel="Browse ferret fridge freeze-thaw cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+raw+feeding+handbook?s=raw-feeding-guide"
                amazonLabel="Browse mustelid raw-feeding handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Sourcing Whole Prey</h2>
          <p>
            For keepers who want the whole-prey route, frozen feeder prey from a reptile-feeder supplier is the usual starting point — it arrives pre-balanced and lets you skip engineering the frankenprey ratio yourself. Buy sizes appropriate to a ferret, confirm the supplier handling standards, and follow the freezing protocol above. These are buying-guidance options, not a hands-on test.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="frozen-feeder-prey"
            badge="Whole-Prey Source"
            name="Frozen Feeder Mice & Chicks (Reptile-Feeder Grade)"
            subtitle="Pre-balanced whole prey, frozen, sized for a ferret"
            score={8.4}
            description={
              <p>Frozen whole feeder prey — mice, rat pups, day-old chicks — sold for reptile and exotic feeding. The advantage for a ferret keeper is that intact prey supplies muscle, organ, and bone in natural proportions, so calcium-to-phosphorus balance is built in. Freeze for at least 30 days before feeding, thaw in the refrigerator, and choose a size appropriate to a ferret rather than a large reptile.</p>
            }
            specs={[
              { label: 'Calcium balance', value: 'Built-in (intact bone)', highlight: 'good' },
              { label: 'Format', value: 'Frozen, bulk' },
              { label: 'Sizing', value: 'Pinkie to small adult prey' },
              { label: 'Freezer space', value: 'Required', highlight: 'warn' },
            ]}
            pros={['Pre-balanced — no ratio engineering', 'Natural calcium-to-phosphorus ratio', 'Cost-effective in bulk', 'Excellent dental abrasion']}
            cons={['Requires freezer space', 'Not for squeamish households', 'Must verify supplier handling standards']}
            price="Varies by size and quantity"
            ctaText="Browse Frozen Feeder Prey"
            ctaHref="/go/chewy-brand/frozen+feeder+mice+reptile?s=diet-raw-feeding-guide"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="frozen-feeder-mice"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <p>
            The macronutrient framework draws on Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Food-safety guidance reflects the American Veterinary Medical Association policy on raw or undercooked animal-source protein in pet food. The frankenprey ratio reflects long-standing carnivore raw-feeding practice rather than a single primary source; calcium-to-phosphorus balance is the most consistently cited failure mode in the veterinary literature. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information. Raw feeding has genuine risks and is not appropriate for every household. Confirm any raw diet's nutritional adequacy and discuss food-safety risk with a veterinarian familiar with ferrets before adopting it as a sole diet.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
