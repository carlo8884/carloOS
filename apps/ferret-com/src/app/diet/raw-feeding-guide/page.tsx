import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

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
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Raw Feeding Guide for Ferrets',
  description:
    'Guidance on formulating and safely handling raw and whole-prey diets for domestic ferrets.',
  url: 'https://ferret.com/diet/raw-feeding-guide',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

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
          authorAvatar: '🦦',
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
          </>
        }
      >
        <div className="carloOS-article">
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
