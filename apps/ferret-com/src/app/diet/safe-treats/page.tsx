import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Safe Treats for Ferrets — What to Feed & What to Skip | Ferret.com',
  description:
    'A vetted list of safe ferret treats and the marketed "ferret treats" to avoid: meat-based options, eggs, the no-sugar rule, and dangerous foods.',
  path: '/diet/safe-treats',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Safe Treats for Ferrets',
  description:
    'What ferrets can safely have as treats and what to avoid, anchored in obligate-carnivore physiology and the no-sugar principle.',
  url: 'https://ferret.com/diet/safe-treats',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Safe Treats for Ferrets',
  description:
    'Reference on appropriate and inappropriate treats for domestic ferrets.',
  url: 'https://ferret.com/diet/safe-treats',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: 'What treats can ferrets have?',
    answer:
      'Almost every safe ferret treat is some form of plain animal protein: small pieces of cooked or freeze-dried meat (plain chicken, turkey, lamb, or beef — no seasoning, sauce, or salt), single-ingredient freeze-dried meat or organ treats, small amounts of cooked egg or a little raw yolk, and meat-based pastes or gravies in moderation. The reliable store rule: if it isn’t meat, it probably isn’t a ferret treat.',
  },
  {
    question: 'Can ferrets eat fruit?',
    answer:
      'No. Ferrets are obligate carnivores with no nutritional use for sugar, and chronic sugar exposure is implicated in pancreatic beta-cell stress and elevated insulinoma risk. Grapes and raisins should be avoided entirely — beyond the sugar, they carry the nephrotoxicity concern documented in dogs.',
  },
  {
    question: 'Are yogurt drops safe for ferrets?',
    answer:
      'No, despite being widely marketed as ferret treats. Adult ferrets are largely lactose-intolerant and yogurt drops are sugar-heavy. The same shelf-aisle caution applies to raisin treats, fruit-and-vegetable medleys, grain-based crunchy treats, and anything sweetened with molasses, honey, or cane sugar.',
  },
  {
    question: 'What foods are toxic to ferrets?',
    answer:
      'The core list: chocolate, xylitol, onion, garlic, caffeine, alcohol, and grapes/raisins — the standard small-mammal toxin set applies to ferrets. These are actively dangerous, not merely inappropriate. If a ferret ingests any of these, contact a veterinarian familiar with ferrets — ideally an exotic-animal practice — immediately.',
  },
  {
    question: 'How many treats can I give my ferret per day?',
    answer:
      'A few small pieces a day at most. Treats should be a small fraction of intake — the base diet supplies nearly all calories, and treats are for bonding and training, not nutrition. Never substitute treats for meals; ferrets can become hypoglycemic quickly, so treats sit on top of the base diet, not in place of it.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, faqSchema)

export default function SafeTreatsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Safe Treats for Ferrets',
          subtitle:
            'Treats are where well-meaning owners do the most accidental harm. A surprising number of products sold as "ferret treats" — yogurt drops, raisin treats, fruit-and-vegetable medleys — are quietly inappropriate for an obligate carnivore. This page sorts the safe from the unsafe and gives you one reliable rule to apply at the store.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Safe Treats', href: '/diet/safe-treats' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The One Rule', href: '#rule' },
                { label: 'Safe Treats', href: '#safe' },
                { label: 'Treats to Avoid', href: '#avoid' },
                { label: 'Dangerous Foods', href: '#dangerous' },
                { label: 'How Much, How Often', href: '#dosing' },
                { label: 'Treats as Training Tools', href: '#training' },
                { label: 'A Meat-Based Treat Pick', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Supplements & Vitamins', href: '/diet/supplements-and-vitamins' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Toxic Foods', href: '/care/toxic-foods' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-safe-treats"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Toxic Foods', href: '/care/toxic-foods' },
          { title: 'Diet Basics', href: '/care/diet-basics' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
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
              Keep the ferret safe-treats checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret safe-treats checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-safe-treat-chart,
              fridge-no-sugar-treat-card, and
              mustelid-treat-safety-reference-handbook notes
              that match the meat-only-rule-map,
              yogurt-drop-avoid-log, and
              quesenberry-treat-grounding copy on this page —
              a laminated ferret safe-treat chart so the
              if-it-isn&apos;t-meat / freeze-dried-single-protein /
              skip-yogurt-drops map is posted on the fridge
              (not a diet-hub feeding chart, not a
              kit-imprint chart, not a prey-vs-kibble
              chart), a ferret fridge no-sugar-treat card
              so raisin / fruit-medley / molasses notes are
              labeled on the fridge (not an imprint-window
              card, not a diet-model card, not a
              macro-window card), and a mustelid treat-safety
              reference handbook so the Quesenberry /
              VCNA toxin grounding is a physical kitchen
              book (not a diet handbook, not a kit-adult
              feeding handbook, not a diet-model handbook).
              Educational kitchen checklist, not a ranked
              treat list, not a sleep-sack hop, and not a
              substitute for an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Aging
              pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret safe-treats checklist"
              subtitle="Email the safe-treat-chart, fridge no-sugar-treat card, and treat-safety-handbook notes. No spam."
              ctaText="Email my ferret safe-treats checklist"
              source="diet-safe-treats-under-hero"
            />
          </div>

          <h2 id="rule">The One Rule</h2>
          <p>
            Here is a rule that resolves most treat questions: <strong>if it isn't meat, it probably isn't a ferret treat.</strong> Ferrets are obligate carnivores; they have no nutritional use for sugar, grain, fruit, or vegetables, and chronic sugar exposure is implicated in pancreatic beta-cell stress and elevated insulinoma risk. A useful corollary: if you wouldn't feed it to a cat with diabetes, it is probably wrong for a ferret. Almost every safe treat is some form of plain animal protein.
          </p>

          <h2 id="safe">Safe Treats</h2>
          <ul>
            <li><strong>Cooked or freeze-dried meat</strong> — plain chicken, turkey, lamb, or beef in small pieces. No seasoning, no sauce, no salt.</li>
            <li><strong>Freeze-dried single-ingredient treats</strong> — products whose only ingredient is meat or organ (for example freeze-dried chicken, liver, or whole-prey treats). Check the panel; "freeze-dried" on the front does not guarantee a clean ingredient list.</li>
            <li><strong>Egg</strong> — small amounts of cooked egg or a little raw yolk are well tolerated and popular. Limit quantity; egg is rich.</li>
            <li><strong>Meat-based pastes and gravies</strong> — useful for medication or transition, in moderation, provided they are not loaded with sugar or grain.</li>
          </ul>
          <p>
            Keep treats genuinely occasional. The base diet — kibble, raw, or whole prey — should supply nearly all calories; treats are for bonding and training, not nutrition.
          </p>

          <h2 id="avoid">Treats to Avoid (Marketed but Inappropriate)</h2>
          <ul>
            <li><strong>Yogurt / dairy drops</strong> — adult ferrets are largely lactose-intolerant and these are sugar-heavy.</li>
            <li><strong>Raisin and grape treats</strong> — sugar-heavy, plus the nephrotoxicity concern documented in dogs; raisins and grapes should be avoided entirely.</li>
            <li><strong>Fruit-and-vegetable medleys</strong> — ferrets cannot digest plant cell walls, and the sugar content works against beta-cell health.</li>
            <li><strong>Grain-based crunchy treats</strong> — biscuits, cereal-type treats, anything built on flour or starch.</li>
            <li><strong>Sugary "ferret treats"</strong> sweetened with molasses, honey, or cane sugar — common on shelves and best left there.</li>
          </ul>

          <h2 id="dangerous">Outright Dangerous Foods</h2>
          <p>
            Separate from "inappropriate" are foods that are actively toxic and must never be given. <strong>Chocolate, xylitol, onion, garlic, caffeine, alcohol, and grapes/raisins</strong> are the core list — the standard small-mammal toxin set applies to ferrets. The full reference, including amounts and symptoms to watch for, is on the <a href="/care/toxic-foods">toxic foods</a> page. If a ferret ingests any of these, contact a veterinarian familiar with ferrets immediately.
          </p>

          <h2 id="dosing">How Much, How Often</h2>
          <p>
            Treats should make up only a small fraction of daily intake — a few small pieces a day at most. Over-treating a free-feeding ferret can throw off body condition and, with sugary treats, contributes to the carbohydrate load you are otherwise trying to minimize. Because ferrets can become hypoglycemic quickly, never substitute treats for meals; they sit on top of the base diet, not in place of it.
          </p>

          <h2 id="training">Treats as Training Tools</h2>
          <p>
            A high-value meat treat is the most effective reward for litter and bite training and for building trust with a new ferret. A meat-based paste is especially useful because it is delivered slowly and holds a ferret's attention. Used this way — small, frequent, meat-based — treats earn their place. The temptation to reach for the convenient sugary products on the shelf is exactly what to resist.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret safe-treat chart /
              ferret fridge no-sugar-treat card /
              mustelid treat-safety reference handbook).
              Keep existing Wysong freeze-dried-treats hop.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs diet-hub /
              kit-adult / whole-prey kitchen kits.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret safe-treats kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page meat-only-rule-map,
              yogurt-drop-avoid-log, and
              quesenberry-treat-grounding copy — a laminated
              ferret safe-treat chart, a ferret fridge
              no-sugar-treat card, and a mustelid
              treat-safety reference handbook. Educational
              kitchen searches only. They are not a ranked
              treat list, they are not a diet-hub /
              kit-adult / whole-prey hop, they are not a
              child toothbrush hop, and they do not
              replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance.
              Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden. Existing Wysong
              freeze-dried-treats review hop stays in the
              pick below.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+safe+treat+chart?s=safe-treats"
                amazonLabel="Browse laminated ferret safe-treat charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+no+sugar+treat+card?s=safe-treats"
                amazonLabel="Browse ferret fridge no-sugar-treat cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+treat+safety+reference+handbook?s=safe-treats"
                amazonLabel="Browse mustelid treat-safety reference handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">A Meat-Based Treat Pick</h2>
          <p>
            A single-ingredient freeze-dried meat treat is the cleanest way to honour the one rule above — no sugar, no grain, just animal protein. This is a documented-spec selection based on published ingredient panels, not a hands-on test.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-freeze-dried-treats"
            badge="Meat-Based Treat"
            name="Wysong Single-Ingredient Freeze-Dried Treats"
            subtitle="Single-protein freeze-dried treat, no added sugar or grain"
            score={8.6}
            description={
              <p>A freeze-dried treat whose ingredient panel is a single named animal protein — the structure this page recommends. No molasses, honey, fruit, or grain fillers. High-value and palatable, which makes it useful for litter and recall training as well as bonding. Use sparingly: treats sit on top of the base diet, not in place of it.</p>
            }
            specs={[
              { label: 'Ingredient', value: 'Single named meat', highlight: 'good' },
              { label: 'Added sugar', value: 'None', highlight: 'good' },
              { label: 'Grain', value: 'None', highlight: 'good' },
              { label: 'Format', value: 'Freeze-dried' },
            ]}
            pros={['Single-ingredient animal protein', 'No added sugar or grain', 'High-value training reward', 'Long shelf life']}
            cons={['Pricier per ounce than bulk treats', 'Still calorie-dense — portion carefully']}
            price="$8–15 / pack"
            ctaText="Find Wysong Freeze-Dried Treats"
            ctaHref="/go/wysong/freeze-dried-treats?s=diet-safe-treats"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="freeze-dried-treats"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <p>
            Obligate-carnivore physiology and the carbohydrate–insulinoma association are drawn from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and the <em>Veterinary Clinics of North America: Exotic Animal Practice</em> literature on ferret endocrine disease. The toxin list reflects standard small-mammal and companion-animal poison-control references. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized veterinary advice. If your ferret has insulinoma or another endocrine condition, treat choices should be discussed with a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
