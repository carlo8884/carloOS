import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, ReviewCard, ScoreMethodology, AffiliateDisclosure, CrossPortfolioCard, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Transitioning a Ferret to New Food — A Safe Method | Ferret.com',
  description:
    'Why ferrets imprint on food and resist change, a gradual mixing schedule, the soup-and-scent tricks for stubborn ferrets, and the warning signs to stop.',
  path: '/diet/transitioning-foods',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Transitioning a Ferret to a New Food',
  description:
    'A gradual method for switching a ferret to a new diet, accounting for food imprinting, with techniques for stubborn eaters and warning signs to halt.',
  url: 'https://ferret.com/diet/transitioning-foods',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Transitioning a Ferret to a New Food',
  description:
    'Reference on safely changing a domestic ferret from one diet to another.',
  url: 'https://ferret.com/diet/transitioning-foods',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function TransitioningFoodsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Transitioning a Ferret to a New Food',
          subtitle:
            "Ferrets imprint on the texture and smell of what they ate as kits, which makes them famously stubborn about switching foods. A change done too fast triggers refusal or digestive upset; done slowly and with a few tricks, even a fixated ferret can be moved to a better diet. Here is the method and the timeline.",
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Transitioning Foods', href: '/diet/transitioning-foods' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferrets Resist Change', href: '#why' },
                { label: 'The Gradual Mixing Schedule', href: '#schedule' },
                { label: 'Tricks for Stubborn Ferrets', href: '#tricks' },
                { label: 'Switching Between Diet Types', href: '#types' },
                { label: 'Warning Signs to Stop', href: '#warnings' },
                { label: 'A Meat-Based Topper Pick', href: '#picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Reading Food Labels', href: '/diet/reading-food-labels' },
                { label: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-transitioning-foods"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Best Ferret Kibble', href: '/diet/best-ferret-kibble' },
          { title: 'Whole Prey vs. Kibble', href: '/diet/whole-prey-vs-kibble' },
          { title: 'Kit vs. Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret food-transition checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret food-transition checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-food-transition-chart,
              fridge-mix-ratio-card, and
              mustelid-food-transition-handbook notes
              that match the mixing-schedule-map,
              soup-and-scent-log, and
              quesenberry-transition-grounding copy on this
              page — a laminated ferret food-transition
              chart so the days-1-3 / half-and-half /
              days-8-11 mix map is posted on the fridge
              (not a diet-hub feeding chart, not a
              kit-imprint chart, not a safe-treat chart),
              a ferret fridge mix-ratio card so crush-and-dust /
              soup-mash / meat-topper notes are labeled on
              the fridge (not a no-sugar-treat card, not
              an imprint-window card, not a diet-model
              card), and a mustelid food-transition
              handbook so the Quesenberry / VCNA
              hypoglycemia-risk grounding is a physical
              kitchen book (not a treat-safety handbook,
              not a kit-adult feeding handbook, not a
              diet handbook). Educational kitchen
              checklist, not a ranked kibble list, not a
              sleep-sack hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Aging pages stay held.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret food-transition checklist"
              subtitle="Email the food-transition-chart, fridge mix-ratio card, and food-transition-handbook notes. No spam."
              ctaText="Email my ferret food-transition checklist"
              source="diet-transitioning-foods-under-hero"
            />
          </div>

          <h2 id="why">Why Ferrets Resist Change</h2>
          <p>
            Ferrets imprint on the smell, taste, and texture of the food they
            eat during their first several months, a phenomenon known as food
            fixation. A ferret raised exclusively on one kibble may simply refuse
            to recognize anything else as food, even when it is hungry. This is
            why our{' '}
            <a href="/diet/kit-vs-adult-feeding">kit versus adult feeding guide</a>{' '}
            stresses exposing kits to varied textures early — it makes every later
            transition easier. For an adult that was never exposed to variety, the
            switch takes patience.
          </p>
          <p>
            Beyond stubbornness, there is a physiological reason to go slow: a ferret&apos;s
            short gut and rapid transit mean an abrupt diet change readily triggers
            soft stool, diarrhea, or refusal. A gradual transition lets the gut
            adapt and lets the ferret accept the new smell over time.
          </p>

          <h2 id="schedule">The Gradual Mixing Schedule</h2>
          <p>
            The core method is to replace the old food with the new one in small,
            increasing increments over one to two weeks — slower for a fixated
            ferret. A workable starting schedule:
          </p>
          <ol>
            <li><strong>Days 1-3:</strong> roughly three parts old food to one part new, mixed together.</li>
            <li><strong>Days 4-7:</strong> about half old, half new.</li>
            <li><strong>Days 8-11:</strong> roughly one part old to three parts new.</li>
            <li><strong>Day 12 onward:</strong> fully on the new food, assuming stool and appetite have stayed normal.</li>
          </ol>
          <p>
            If at any stage the ferret picks out only the old food or develops
            loose stool, hold at the current ratio for a few extra days before
            advancing. There is no prize for finishing fast, and a stalled
            transition is far better than a ferret that stops eating.
          </p>
          <CalloutBox variant="warning" title="A ferret must not stop eating">
            <p>
              Ferrets have a fast metabolism and can become hypoglycemic quickly,
              so a ferret that refuses food for more than a short period is a
              genuine concern — especially an older ferret or one with insulinoma.
              If a ferret will not eat the mixed food at all, fall back to the old
              food to keep calories in, and slow the transition. Prolonged refusal
              warrants a call to an exotic-pet veterinarian.
            </p>
          </CalloutBox>

          <h2 id="tricks">Tricks for Stubborn Ferrets</h2>
          <ul>
            <li>
              <strong>Crush and dust.</strong> Grind a little of the new kibble
              into powder and dust it over the familiar food so the new smell
              becomes associated with eating.
            </li>
            <li>
              <strong>Make a soup.</strong> Soak both old and new kibble in warm
              water into a soft mash; the blended texture and aroma hide the
              transition, and many ferrets accept soup more readily than dry
              pieces.
            </li>
            <li>
              <strong>Use a meat-based topper.</strong> A small amount of
              meat-based paste or a meat broth over the new food can coax a
              hesitant ferret to start eating it. Keep toppers meat-based and
              sugar-free, per our{' '}
              <a href="/diet/safe-treats">safe treats guide</a>.
            </li>
            <li>
              <strong>Feed when genuinely hungry.</strong> Offering the mixed food
              at the start of a meal, before topping up with the old food, can tip
              a reluctant ferret into trying it. Never starve a ferret into
              switching — that is dangerous, not a technique.
            </li>
          </ul>

          <h2 id="types">Switching Between Diet Types</h2>
          <p>
            Moving between major diet models — kibble to raw, or raw to kibble —
            is a bigger change than swapping one kibble for another and deserves a
            longer, more careful transition. Read the destination diet&apos;s
            requirements first: our{' '}
            <a href="/diet/best-ferret-kibble">kibble guide</a> for commercial
            food and the broader{' '}
            <a href="/diet">diet hub</a> for the raw and whole-prey models. Use the
            label-reading skills in our{' '}
            <a href="/diet/reading-food-labels">food-label guide</a> to confirm the
            new food actually meets ferret macronutrient targets before you commit
            to switching to it.
          </p>

          <h2 id="warnings">Warning Signs to Stop</h2>
          <ul>
            <li><strong>Persistent diarrhea or soft stool</strong> beyond a day or two — hold or back off the ratio.</li>
            <li><strong>Vomiting</strong> — stop advancing and reassess.</li>
            <li><strong>Refusal to eat the mixed food</strong> — return to the old food to maintain calories, then slow down.</li>
            <li><strong>Lethargy, weakness, or weight loss</strong> — stop and contact an exotic-pet veterinarian; these can signal more than a fussy palate.</li>
          </ul>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret food-transition chart /
              ferret fridge mix-ratio card /
              mustelid food-transition handbook).
              Keep existing Chewy meat-topper review hop.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs diet-hub /
              safe-treats / kit-adult kitchen kits.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret food-transition kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page mixing-schedule-map,
              soup-and-scent-log, and
              quesenberry-transition-grounding copy — a
              laminated ferret food-transition chart, a
              ferret fridge mix-ratio card, and a mustelid
              food-transition handbook. Educational kitchen
              searches only. They are not a ranked kibble
              list, they are not a diet-hub / safe-treats /
              kit-adult hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden. Existing Chewy meat-topper review hop
              stays in the pick below.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+food+transition+chart?s=transitioning-foods"
                amazonLabel="Browse laminated ferret food-transition charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+mix+ratio+card?s=transitioning-foods"
                amazonLabel="Browse ferret fridge mix-ratio cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+food+transition+handbook?s=transitioning-foods"
                amazonLabel="Browse mustelid food-transition handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">A Meat-Based Topper Pick</h2>
          <p>
            A meat-based, sugar-free topper or broth over the new food is one of the most reliable tricks for coaxing a hesitant ferret to start eating it. The key is a clean panel — animal protein, no added sugar or grain. Documented-spec selection, not a hands-on test.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="meat-topper"
            badge="Transition Aid"
            name="Meat-Based Food Topper / Gravy (Sugar-Free)"
            subtitle="Animal-protein topper to coax a reluctant eater onto new food"
            score={8.1}
            description={
              <p>A meat-based topper or broth, drizzled over the new food, lends the familiar smell of meat to an unfamiliar kibble and can tip a hesitant ferret into trying it. Choose a single-protein, sugar-free formulation — skip anything sweetened with molasses, honey, or fruit, per our <a href="/diet/safe-treats">safe treats guide</a>. Use a small amount and count it against the day's intake; the topper is a bridge, not a meal.</p>
            }
            specs={[
              { label: 'Base', value: 'Animal protein', highlight: 'good' },
              { label: 'Added sugar', value: 'None (choose plain)', highlight: 'good' },
              { label: 'Use', value: 'Transition aid, sparingly' },
              { label: 'Texture', value: 'Pourable gravy / broth' },
            ]}
            pros={['Lends familiar meat aroma to new food', 'Sugar-free options widely available', 'Useful for medication and recovery feeding too']}
            cons={['Calorie-dense — portion carefully', 'Read the panel; many toppers are sweetened']}
            price="$5–12"
            ctaText="Find a Meat-Based Topper"
            ctaHref="/go/chewy-brand/meat+based+food+topper+sugar+free?s=diet-transitioning-foods"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="meat-based-food-topper"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Food imprinting, the rationale for gradual transition, and the
            hypoglycemia risk of feeding interruption are drawn from Quesenberry KE
            and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical
            Medicine and Surgery</em> (Saunders/Elsevier), and the{' '}
            <em>Veterinary Clinics of North America: Exotic Animal Practice</em>{' '}
            literature on ferret nutrition and gastrointestinal physiology. Locate
            primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general nutrition information, not individualized
            veterinary advice. A ferret that refuses food, loses weight, or has
            persistent digestive upset during a transition should be seen by a
            veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
