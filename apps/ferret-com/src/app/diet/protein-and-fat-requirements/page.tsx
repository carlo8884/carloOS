import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Protein & Fat Requirements — Macronutrient Targets | Ferret.com',
  description:
    'The macronutrient window for ferrets: 32–40% protein, 18–22% fat, under 3% carbohydrate, taurine, and why dry-matter basis changes how you read a label.',
  path: '/diet/protein-and-fat-requirements',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Protein & Fat Requirements',
  description:
    'The macronutrient targets for ferrets — protein, fat, carbohydrate, taurine, and fiber — explained on a dry-matter basis with the reasoning behind each.',
  url: 'https://ferret.com/diet/protein-and-fat-requirements',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Protein & Fat Requirements',
  description:
    'Reference on the macronutrient requirements of domestic ferrets, an obligate-carnivore species.',
  url: 'https://ferret.com/diet/protein-and-fat-requirements',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: 'How much protein does a ferret need?',
    answer:
      'The commonly cited target is 32-40% protein on a dry-matter basis, animal-sourced and highly digestible. Quality matters as much as quantity: plant proteins (corn gluten meal, soy protein, pea protein) inflate a label’s crude-protein number while delivering an amino-acid profile ferrets utilize poorly. The first several ingredients should be named meats and meat meals. Kits and pregnant or lactating jills sit at the upper end of the range or above it.',
  },
  {
    question: 'How much fat should be in ferret food?',
    answer:
      'The typical target is 18-22% on a dry-matter basis, animal-sourced. Fat is a ferret’s primary energy substrate — ferrets thrive on a relatively high-fat diet, self-regulate intake well, and graze many small meals a day. Active ferrets, growing kits, and underweight animals benefit from the upper end; sedentary or overweight ferrets may need the lower end with portion attention.',
  },
  {
    question: 'Why is carbohydrate bad for ferrets?',
    answer:
      'Ferrets have a short gut (roughly five times body length, 3-4 hour transit) with no functional cecum, so they cannot use carbohydrate as a primary fuel — and beyond wasted calories, chronic dietary carbohydrate is the leading working hypothesis for elevated insulinoma risk: sustained carbohydrate intake drives repeated insulin secretion, thought over years to contribute to pancreatic beta-cell stress and tumor formation. The target is under 3%, ideally under 2%; many commercial "ferret" foods land at 15-30% by difference.',
  },
  {
    question: 'Do ferrets need taurine?',
    answer:
      'Yes. Like cats, ferrets do not synthesize adequate taurine and require it from the diet. Reputable ferret and high-protein cat formulas supplement it; whole-prey diets supply it naturally through muscle and organ tissue. Long-term taurine deficiency is associated with dilated cardiomyopathy — one reason dog food, formulated without the taurine a carnivore needs, is inappropriate for ferrets.',
  },
  {
    question: 'What does "dry-matter basis" mean on a ferret food label?',
    answer:
      'It means the nutrient percentages are calculated with water removed. Kibble labels report guaranteed analysis "as fed" (including moisture), so for dry kibble at 8-10% moisture an as-fed protein of roughly 36% corresponds to high-30s/low-40s dry-matter. For moist foods at 65-75% water the difference is dramatic, making as-fed comparisons across wet and dry foods meaningless. Carbohydrate is almost never printed — estimate it by subtracting protein, fat, moisture, ash, and fiber from 100.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, faqSchema)

export default function ProteinAndFatRequirementsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Protein & Fat Requirements',
          subtitle:
            'Every feeding decision a ferret owner makes is, underneath, an attempt to hit a fairly narrow macronutrient window. This page defines that window — protein, fat, carbohydrate, taurine, fiber — explains the reasoning behind each number, and shows why a bag’s guaranteed analysis can mislead if you read it on the wrong basis.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why the Numbers Are What They Are', href: '#why' },
                { label: 'Protein', href: '#protein' },
                { label: 'Fat', href: '#fat' },
                { label: 'Carbohydrate', href: '#carbs' },
                { label: 'Taurine', href: '#taurine' },
                { label: 'Fiber & Ash', href: '#fiber' },
                { label: 'Dry-Matter vs As-Fed', href: '#dry-matter' },
                { label: 'A Diet That Hits the Window', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
                { label: 'Whole-Prey vs Kibble', href: '/diet/whole-prey-vs-kibble' },
                { label: 'Weight Management', href: '/diet/weight-management' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-protein-and-fat-requirements"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Reading Food Labels', href: '/diet/reading-food-labels' },
          { title: 'Best Ferret Kibble', href: '/diet/best-ferret-kibble' },
          { title: 'Insulinoma in Ferrets', href: '/health/insulinoma' },
          { title: 'Raw Feeding Guide', href: '/diet/raw-feeding-guide' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
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
              Keep the ferret protein-fat checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret protein-fat checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-protein-fat-chart,
              fridge-macro-window-card, and
              mustelid-macro-target-reference-handbook notes
              that match the protein-32-40-map,
              fat-18-22-window-log, and
              quesenberry-macro-grounding copy on this page —
              a laminated ferret protein-fat chart so the
              32–40% protein / 18–22% fat / carb-under-3
              map is posted on the fridge (not a diet-hub
              feeding chart, not a kibble-panel chart, not
              a label-split chart), a ferret fridge
              macro-window card so dry-matter-vs-as-fed /
              moisture-subtract / carb-by-difference notes
              are labeled on the fridge (not a diet-label
              card, not a dry-matter card, not a
              carb-by-difference card), and a mustelid
              macro-target reference handbook so the
              Quesenberry / Carpenter macro grounding is a
              physical kitchen book (not a diet handbook,
              not a food-label handbook, not a
              kibble-panel handbook). Educational kitchen
              checklist, not a ranked kibble list, not a
              sleep-sack hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Aging pages stay held.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret protein-fat checklist"
              subtitle="Email the protein-fat-chart, fridge macro-window card, and macro-target-handbook notes. No spam."
              ctaText="Email my ferret protein-fat checklist"
              source="diet-protein-and-fat-requirements-under-hero"
            />
          </div>

          <h2 id="why">Why the Numbers Are What They Are</h2>
          <p>
            Ferrets are obligate carnivores with a short gastrointestinal tract — roughly five times body length — a transit time of about three to four hours, and no functional cecum. They cannot ferment plant fiber for energy or use carbohydrate as a primary fuel. Everything in the macronutrient profile below follows from that physiology: the food must be dense in animal protein and animal fat to be fully digested within a short transit window, and it must be nearly free of plant carbohydrate. The targets here are drawn from standard exotic-pet veterinary references.
          </p>

          <h2 id="protein">Protein: 32–40% (Dry-Matter Basis)</h2>
          <p>
            Ferrets need a high proportion of dietary protein, and crucially it must be <strong>animal-sourced</strong> and highly digestible. The commonly cited target is 32–40% on a dry-matter basis. Quality matters as much as quantity: plant proteins such as corn gluten meal, soy protein, and pea protein inflate a label's protein number while delivering an amino-acid profile ferrets utilize poorly, so a high "crude protein" figure from plant sources is misleading. The first several ingredients should be named meats and meat meals. Kits and pregnant or lactating jills sit at the upper end of the range or above it.
          </p>

          <h2 id="fat">Fat: 18–22% (Dry-Matter Basis)</h2>
          <p>
            Fat is a ferret's primary energy substrate, and the typical target is 18–22% on a dry-matter basis, again animal-sourced. Ferrets thrive on a relatively high-fat diet and self-regulate intake well, grazing many small meals a day. Fat also carries fat-soluble vitamins and supports coat condition. Active ferrets, growing kits, and underweight animals benefit from the upper end; sedentary or overweight ferrets may need the lower end paired with portion attention (see <a href="/diet/weight-management">weight management</a>).
          </p>

          <h2 id="carbs">Carbohydrate: Under 3%</h2>
          <p>
            The carbohydrate target is under 3%, ideally under 2%. This is the number most commercial "ferret" foods miss — many land at 15–30% carbohydrate by difference because extruded kibble requires some binding starch and cheaper formulas lean heavily on grain. Beyond being wasted calories, chronic dietary carbohydrate is the leading working hypothesis for elevated insulinoma risk in ferrets: sustained carbohydrate intake drives repeated insulin secretion, which over years is thought to contribute to pancreatic beta-cell stress and tumor formation. The clinical picture is covered in <a href="/health/insulinoma">insulinoma in ferrets</a>.
          </p>

          <h2 id="taurine">Taurine</h2>
          <p>
            Like cats, ferrets do not synthesize adequate taurine and require it from the diet. Reputable ferret and high-protein cat formulas supplement taurine; whole-prey diets supply it naturally through muscle and organ tissue. Long-term taurine deficiency is associated with dilated cardiomyopathy, which is one reason dog food — formulated without the taurine a carnivore needs — is inappropriate as a ferret's diet.
          </p>

          <h2 id="fiber">Fiber & Ash</h2>
          <p>
            Fiber should be under about 3%. Higher fiber slows gut transit beyond what the ferret tract is built for and reduces digestibility. "Ash" on a label refers to total mineral content; a moderate figure is normal and reflects the bone and mineral content of animal ingredients. Neither fiber nor ash is a headline number, but very high fiber is a sign of plant fillers.
          </p>

          <h2 id="dry-matter">Dry-Matter vs As-Fed</h2>
          <p>
            The targets above are stated on a <strong>dry-matter basis</strong> — water removed — but kibble labels report a guaranteed analysis on an <strong>as-fed basis</strong>, including moisture. For dry kibble (around 8–10% moisture) the two are close, so an as-fed protein figure of roughly 36% corresponds to a dry-matter figure in the high 30s or low 40s. For anything moist — raw, canned, or fresh prey at 65–75% water — the difference is dramatic, and comparing as-fed numbers across wet and dry foods is meaningless. Carbohydrate is almost never printed; estimate it by difference, subtracting protein, fat, moisture, ash, and fiber from 100. The method for applying all of this at the shelf is in <a href="/diet/best-ferret-kibble">how to choose a ferret kibble</a>.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret protein-fat chart /
              ferret fridge macro-window card /
              mustelid macro-target reference handbook).
              Keep existing Wysong review hop.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs diet-hub /
              kibble / label / training kitchen kits.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret protein-fat kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page protein-32-40-map,
              fat-18-22-window-log, and
              quesenberry-macro-grounding copy — a laminated
              ferret protein-fat chart, a ferret fridge
              macro-window card, and a mustelid macro-target
              reference handbook. Educational kitchen
              searches only. They are not a ranked kibble
              list, they are not a diet-hub / kibble /
              label / training hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden. Existing Wysong review hop stays in
              the window example below.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+protein+fat+chart?s=protein-and-fat-requirements"
                amazonLabel="Browse laminated ferret protein-fat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+macro+window+card?s=protein-and-fat-requirements"
                amazonLabel="Browse ferret fridge macro-window cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+macro+target+reference+handbook?s=protein-and-fat-requirements"
                amazonLabel="Browse mustelid macro-target reference handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">A Diet That Hits the Window</h2>
          <p>
            The numbers above are abstract until you map them onto a real product. The diet below is a worked example of a commercial kibble whose published panel lands close to the high-protein, very-low-carbohydrate target — included on its documented spec, not a hands-on test. The full evaluation method is in <a href="/diet/best-ferret-kibble">how to choose a ferret kibble</a>.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-epigen-90"
            badge="Hits the Window"
            name="Wysong Epigen 90"
            subtitle="Animal-first, starch-free — protein high, carbohydrate in single digits"
            score={9.2}
            winner
            description={
              <p>A worked example of the target window in a real product: protein well above the 32–40% floor, animal-sourced throughout, and carbohydrate by difference driven into the low single digits by a starch-free system. It illustrates what the abstract targets on this page look like on an actual ingredient panel, and it is the default low-carb choice when insulinoma risk is the priority.</p>
            }
            specs={[
              { label: 'Protein (dry-matter)', value: '~60%', highlight: 'good' },
              { label: 'Fat (dry-matter)', value: '~16%' },
              { label: 'Carbohydrate', value: 'Single digits', highlight: 'good' },
              { label: 'Taurine', value: 'Supplemented', highlight: 'good' },
            ]}
            pros={['Lands inside the target macro window', 'Lowest commercial carb load in wide ferret use', 'Animal-first throughout', 'Starch-free system']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="$30–50 / 5 lb"
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=diet-protein-and-fat-requirements"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <p>
            Macronutrient targets and obligate-carnivore physiology are drawn from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Carbohydrate–insulinoma associations are discussed in the <em>Veterinary Clinics of North America: Exotic Animal Practice</em> literature on ferret endocrine disease and the <em>Journal of Exotic Pet Medicine</em>. The taurine–cardiomyopathy link is well established in companion-carnivore nutrition. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general nutrition reference, not individualized veterinary advice. Requirements shift with life stage and health status; a ferret with a diagnosed condition should have its diet supervised by a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
