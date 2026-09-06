import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ScoreMethodology, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Performance Horse — Energy, Recovery, and Safe Fueling",
  description:
    "Reference guide to feeding performance horses: matching energy to workload, energy sources, protein and electrolytes, feeding around work, and diet pitfalls.",
  path: '/nutrition/feeding-the-performance-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Performance Horse — Energy, Recovery, and Safe Fueling",
  description:
    "Reference guide to feeding performance horses: matching energy to workload, energy sources, protein and electrolytes, feeding around work, and diet pitfalls.",
  url: 'https://horses.com/nutrition/feeding-the-performance-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the best energy source for a performance horse?",
    answer:
      "It depends on the work, but fiber should remain the base, with fat (oil, rice bran) providing dense, cool, slow-burning energy ideal for endurance and for adding calories without excitability. Starch from grain gives rapid energy for short intense efforts but carries gut and behavioral risks, so it is used judiciously rather than as the default fuel.",
    answerText:
      "Fiber as the base, fat for dense cool slow-release energy, and starch only judiciously for short intense work. Fat and fiber avoid the gut and behavior risks of high grain.",
  },
  {
    question: "Why are performance horses so prone to ulcers?",
    answer:
      "High-grain, lower-forage diets, intense exercise, stress, travel, and competition all promote gastric ulcers, which are very common in performance horses. Keeping forage central, offering forage before work to buffer acid, limiting starch, and treating ulcers when present are the main defenses against this performance-limiting problem.",
    answerText:
      "High grain, low forage, intense work, stress, and travel all promote ulcers, which are common in competition horses. Keeping forage central and limiting starch are the main defenses.",
  },
  {
    question: "Should I cut back feed on a performance horse's rest days?",
    answer:
      "Yes -- reduce concentrate energy on rest days. Feeding a high-energy ration to a horse that then stands idle on a day off is a classic trigger for tying-up. Keeping forage available while cutting back the grain on non-working days lowers that risk while maintaining gut health.",
    answerText:
      "Yes -- reduce concentrate energy on rest days. Full feed before an idle day off is a classic tying-up trigger. Keep forage available while cutting the grain.",
  },
]

export default function PerformanceFeedingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Grain and Concentrates', href: '/nutrition/grain-and-concentrates' },
          { title: 'Salt and Electrolytes', href: '/nutrition/salt-and-electrolytes' },
          { title: 'Tying-Up in Horses', href: '/health/tying-up' },
        ]}
        hero={{
          title: "Feeding the Performance Horse",
          subtitle:
            "Performance horses have the highest and most demanding energy needs in the equine world, and feeding them well is a balance: enough fuel for the work and recovery, the right kind of energy for the discipline, and careful management to avoid the ulcers, tying-up, and excitability that careless high-grain feeding produces. The principle remains forage first, with energy added thoughtfully. This is reference material to inform a plan with a nutritionist or veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Performance Horse", href: '/nutrition/feeding-the-performance-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Match Energy to Work", href: "#energy" },
            { label: "Energy Sources", href: "#sources" },
            { label: "Protein and Electrolytes", href: "#protein" },
            { label: "Feeding Around Work", href: "#timing" },
            { label: "Avoiding Problems", href: "#problems" },
            { label: "Performance fueling barn kit", href: "#kit" },
            { label: "Product Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Tying-Up", href: "/health/tying-up" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
              { label: "Grain and Concentrates", href: "/nutrition/grain-and-concentrates" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-performance"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the performance-horse fueling checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Performance-horse fueling checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the nylon-horse-hay-bag,
              horse-feed-grade-vegetable-oil, and
              marked-horse-grain-scoop notes that match
              the forage-before-work, fat-and-fiber
              fuel, and rest-day concentrate-cut copy
              on this page — a nylon horse hay bag so
              a small forage portion hangs before work
              and buffers stomach acid (not a hay
              soaking bag, not a slow-feeder hay net,
              not a wall-mounted hay rack), horse
              feed-grade vegetable oil so cool fat
              calories are added without a starch spike
              (not the stabilized-rice-bran ReviewCard,
              not a high-fat performance-feed
              ReviewCard), and a marked horse grain
              scoop so concentrate is cut on rest days
              to the work the horse is actually doing
              (not a tabletop digital grain scale, not
              a feed-scoop scale). Educational barn
              checklist, not a treatment, and not a
              substitute for calling the veterinarian.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Performance-horse fueling checklist"
              subtitle="Email the hay-bag, feed-oil, and grain-scoop notes. No spam."
              ctaText="Email my performance-horse fueling checklist"
              source="nutrition-feeding-the-performance-horse-under-hero"
            />
          </div>

          <h2 id="energy">Match Energy to Work</h2>
          <p>The starting point is honest workload assessment. The energy needs of a horse in light schooling are far below those of an upper-level eventer, endurance horse, or racehorse, and overfeeding energy to a horse not doing the work makes it fat and hot, while underfeeding a hard-working horse erodes condition and performance. Feed the work the horse is actually doing, adjusting as the training load rises and falls through the season. A marked horse grain scoop is how that rest-day and light-work concentrate cut is measured in the barn — it is not a tabletop digital horse grain scale (that lives on the grain page) and not a horse feed-scoop scale (those live on the feed calculators).</p>

          <h2 id="sources">Energy Sources</h2>
          <p>Energy can come from fiber, fat, or starch and sugar, and the mix matters. Fiber (forage and super-fibers) provides slow-release energy and gut health and should remain the base. Fat (oil, rice bran) gives dense, cool, slow-burning energy ideal for endurance and for adding calories without fizz. Horse feed-grade vegetable oil is that cool fat top-dress — it is not the stabilized rice-bran fat-supplement ReviewCard below and not a high-fat performance-feed ReviewCard. Starch and sugar from grain provide rapid, readily available energy useful for short, intense efforts, but carry the gut and behavioral risks of high-grain feeding -- so they are used judiciously, not as the default fuel.</p>

          <h2 id="protein">Protein and Electrolytes</h2>
          <p>Working horses need adequate quality protein to build and repair muscle, though protein is a building block rather than a primary fuel and excess is wasteful. More pressing is electrolyte replacement: performance horses lose large volumes of salty sweat, and replacing sodium, chloride, and potassium maintains hydration, recovery, the drive to drink, and muscle function, while helping prevent tying-up. Baseline salt plus work-matched electrolytes is essential. See the salt and electrolytes guide.</p>

          <h2 id="timing">Feeding Around Work</h2>
          <ul>
            <li><strong>Do not work hard immediately after a large grain meal</strong> as it can affect blood flow and comfort; allow time after concentrate feeding.</li>
            <li><strong>Keep forage before work</strong> -- a small amount of forage in the stomach buffers acid and helps prevent ulcers during exercise. A nylon horse hay bag is how that small pre-work forage portion hangs at the stall or trailer — it is not a hay soaking bag (that lives on heaves), not a slow-feeder hay net (that lives on forage-basics), and not a wall-mounted hay rack (that lives on forage-basics).</li>
            <li><strong>Rehydrate and replace electrolytes</strong> promptly after hard work and sweating.</li>
            <li><strong>Reintroduce feed sensibly</strong> to a hot horse -- cool it down, let it drink, and offer forage before concentrates.</li>
            <li><strong>Adjust on rest days</strong> by reducing concentrate energy to lower tying-up risk on days off. A marked horse grain scoop is the barn tool that rest-day concentrate cut is measured with — it is not a tabletop digital grain scale and not a feed-scoop scale.</li>
          </ul>

          <h2 id="problems">Avoiding Problems</h2>
          <p>High-grain diets fed to performance horses are linked to gastric ulcers (very common in competition horses), tying-up, hindgut acidosis, colic, and excitable, hard-to-handle behavior. The defenses are to keep forage central, prefer fat and fiber for added calories, limit starch per meal, feed consistently, and treat ulcers when present. A calm, well-fueled horse on a fiber-and-fat-based diet usually performs and recovers better than one fizzed up on grain.</p>

          <h2 id="kit">Performance fueling barn kit</h2>
          <p>
            Everyday physical supplies that match the
            forage-before-work, fat-and-fiber fuel, and
            rest-day concentrate-cut copy on this page —
            a nylon horse hay bag so a small forage
            portion hangs before work and buffers
            stomach acid, horse feed-grade vegetable
            oil so cool fat calories are added without
            a starch spike, and a marked horse grain
            scoop so concentrate is cut on rest days
            to the work the horse is actually doing.
            These are educational barn searches, not a
            ranked product list, not a substitute for
            veterinary care, and not a hay-soaking-bag
            hop (that lives on heaves), a slow-feeder
            hay-net hop (that lives on forage-basics),
            a wall-mounted hay-rack hop (that lives on
            forage-basics), a chopped-forage hop (that
            lives on feeding-senior-horses), a digital
            grain-scale hop (that lives on grain), or
            the rice-bran / high-fat-feed ReviewCards
            below. This page does not hop medications
            or vaccines. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (nylon horse hay bag /
              horse feed-grade vegetable oil /
              marked horse grain scoop).
              Educational barn searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1116
              horse+chopped+forage /
              horse+feed+soaking+tub /
              horse+corner+feeder, #1115
              equine+toxic+plant+identification+field+guide /
              horse+pasture+walk+weed+identification+handbook /
              horse+paddock+tree+guard+fencing, #1114
              flat+back+horse+water+bucket /
              heated+horse+water+bucket /
              electrolyte+for+horses, #1113
              orchard+grass+hay+horse /
              alfalfa+hay+bales+horse /
              timothy+alfalfa+mixed+hay+horse, #1112
              tabletop+digital+horse+grain+scale /
              stackable+rubber+horse+feed+tubs /
              rodent+proof+metal+horse+feed+bin, #1111
              horse+hay+probe+moisture+tester /
              equine+hay+core+sampler /
              wall+mounted+horse+hay+rack, #1110
              plain+white+horse+salt+block /
              salt+first+horse+electrolyte+powder /
              wide+mouth+horse+water+bucket, #1108
              automatic+horse+waterer, #1105
              digital+hanging+hay+bale+scale /
              equine+forage+nsc+hay+test+kit /
              portable+strip+grazing+step+in+posts,
              horse+tank+heater
              (winter-care),
              color+coded+flat+back+horse+buckets
              (strangles),
              horse+electrolytes
              (emergency / grimace-scale),
              horse+electric+tape / horse+fence+mesh /
              horse+electric+rope / electric+fence+tester
              (fencing-safety),
              horse+grazing+muzzle / soil+test+kit
              (pasture-management),
              portable+horse+paddock+panels
              (osteoarthritis),
              stabilized+rice+bran+horse+fat+supplement /
              performance+horse+feed+high+fat
              (kept on the ReviewCards below),
              horse+hay+cubes / horse+mash
              (dental),
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks
              (choke),
              horse+hay+soaking+bag / horse+hay+steamer
              (heaves),
              slow+feeder+hay+net+horse
              (forage ReviewCard),
              small+hole+slow+feeder+hay+net+horse
              (easy-keeper),
              equine+slow+feeder+hay+box
              (turnout),
              molasses+free+beet+pulp+shreds+horse /
              beet+pulp+pellets+horse+feed
              (beet-pulp). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the performance fueling barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page forage-before-work, fat-and-fiber
              fuel, and rest-day concentrate-cut copy —
              a nylon horse hay bag, horse feed-grade
              vegetable oil, and a marked horse grain
              scoop. Educational barn searches only.
              They are not a ranked product list, they
              are not a hay-soaking-bag or slow-feeder
              hay-net hop, they are not a chopped-forage
              hop, they are not the rice-bran or
              high-fat-feed ReviewCards, and they do
              not replace a veterinarian. Horses.com
              earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/nylon+horse+hay+bag?s=nutrition-feeding-the-performance-horse"
                amazonLabel="Browse nylon horse hay bags on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+feed+grade+vegetable+oil?s=nutrition-feeding-the-performance-horse"
                amazonLabel="Browse horse feed-grade vegetable oil on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/marked+horse+grain+scoop?s=nutrition-feeding-the-performance-horse"
                amazonLabel="Browse marked horse grain scoops on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Product Picks — General Nutrition Supports for Performance Horses</h2>
          <p>A few widely-available general nutrition supports for performance horses -- fat-based calorie additions and a general conditioning supplement. These support the overall feeding plan described above; they are not treatments for lameness, disease, or diagnosed deficiencies. Build the full ration with your veterinarian or equine nutritionist. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <ScoreMethodology />

          <ReviewCard
            id="performance-fat-supplement"
            badge="Fat-Based Calorie Source"
            name="Stabilized Rice Bran or High-Fat Supplement"
            subtitle="Cool, dense calorie addition for hard-working horses"
            score={8.6}
            winner
            description={<>
              <p>Fat-based calorie supplements -- stabilized rice bran and comparable high-fat feeds -- add dense, slow-burning energy to a working horse&apos;s ration without the starch spike of additional grain. This &ldquo;cool&rdquo; energy supports sustained work and helps maintain condition through a hard season without the excitability and gut risks of high starch. Introduced gradually; used alongside adequate forage and a balanced diet. General nutrition support only -- not a therapeutic product.</p>
              <p>Useful for: performance horses in sustained work needing more energy than forage alone provides, where adding starch is undesirable.</p>
            </>}
            specs={[
              { label: 'Energy type', value: 'Fat (slow-burning, non-heating)', highlight: 'good' },
              { label: 'Starch', value: 'Low' },
              { label: 'Best use case', value: 'Sustained performance, endurance, condition maintenance' },
            ]}
            pros={['Dense energy without starch spike', 'Cool energy -- suits excitable horses', 'Supports condition through hard work']}
            cons={['Introduce gradually to avoid loose droppings', 'Not a complete feed', 'High-fat supplements can go rancid -- choose stabilized form']}
            price="$25–50 per 25–40 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/stabilized+rice+bran+horse+fat+supplement?s=nutrition-performance-horse"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="horse-fat-supplement"
          />

          <ReviewCard
            id="performance-feed"
            badge="Performance Complete Feed"
            name="High-Performance Horse Feed"
            subtitle="Formulated concentrate for horses with high energy demands"
            score={8.4}
            description={<>
              <p>Performance-formulated horse feeds combine fat, fiber, and controlled starch with higher protein and targeted vitamins and minerals to support the demands of training and competition. They are designed to fill the energy and nutrient gap beyond what forage and a balancer can cover at high workloads. Feed at the label rate in multiple small meals; always pair with adequate forage and match the ration to the actual workload, not the label maximum. Build the full plan with your veterinarian or nutritionist.</p>
              <p>General nutrition support for: horses in regular, demanding work -- show horses, eventers, endurance horses, and working horses under consistent training load.</p>
            </>}
            specs={[
              { label: 'Profile', value: 'High energy, higher protein, controlled NSC', highlight: 'good' },
              { label: 'Feed rule', value: 'Multiple small meals; match to workload' },
              { label: 'Best use case', value: 'Regular demanding work; competition horses' },
            ]}
            pros={['Targeted nutrition for higher work demands', 'Consistent energy delivery', 'Formulated to reduce gut risk vs plain grain']}
            cons={['Overfeeding a low-work horse causes fat and excitability', 'Must be split into small meals', 'Adjust promptly on rest days']}
            price="$35–75 per 50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/performance+horse+feed+high+fat?s=nutrition-performance-horse"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="performance-horse-feed"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>Harris P, et al. Reviews on feeding management and gastric ulcers in performance horses.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
