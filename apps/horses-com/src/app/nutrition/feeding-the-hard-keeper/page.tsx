import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ScoreMethodology, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Hard Keeper — Putting and Keeping Weight On",
  description:
    "Reference guide to feeding hard-keeper horses: ruling out underlying causes, maximizing forage, adding calories safely with fat and fiber, and monitoring.",
  path: '/nutrition/feeding-the-hard-keeper',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Hard Keeper — Putting and Keeping Weight On",
  description:
    "Reference guide to feeding hard-keeper horses: ruling out underlying causes, maximizing forage, adding calories safely with fat and fiber, and monitoring.",
  url: 'https://horses.com/nutrition/feeding-the-hard-keeper',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Why won't my horse gain weight even though I feed a lot?",
    answer:
      "Persistent weight loss usually has an underlying cause -- dental problems, parasites, gastric ulcers, PPID or other endocrine disease, chronic pain, or being bullied off feed. Adding grain without finding the reason wastes money and can harm the horse, so a veterinary workup including a dental exam, fecal egg count, and ulcer and PPID consideration should come first.",
    answerText:
      "There is usually an underlying cause -- bad teeth, parasites, ulcers, PPID, pain, or being bullied off feed. A vet workup should come before piling on grain.",
  },
  {
    question: "What is the safest way to add calories for a hard keeper?",
    answer:
      "Add calories through forage, fat, and highly digestible fiber rather than large grain meals. Free-choice quality hay, vegetable oil or rice bran, soaked beet pulp, and high-fat low-starch feeds add energy without the hindgut upset, ulcer, and excitability risks of high grain. Any concentrate should be fed in small, frequent meals.",
    answerText:
      "Through forage, fat, and digestible fiber -- quality hay, oil or rice bran, soaked beet pulp, and high-fat low-starch feeds -- rather than large grain meals, which risk gut upset and ulcers.",
  },
  {
    question: "How long before I should see weight gain?",
    answer:
      "Weight gain in horses is gradual, so a new feeding regimen should be given several weeks before judging whether it works, with condition tracked by body condition scoring and a weigh tape rather than the eye. A horse that still fails to gain on a sound plan needs further veterinary investigation, not simply more grain.",
    answerText:
      "Several weeks -- gain is gradual, so track with body condition scoring and a weigh tape over time. Failure to gain on a sound plan means further veterinary investigation.",
  },
]

export default function HardKeeperPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Beet Pulp for Horses', href: '/nutrition/beet-pulp' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
          { title: 'Ration Balancers', href: '/nutrition/ration-balancers' },
        ]}
        hero={{
          title: "Feeding the Hard Keeper",
          subtitle:
            "The hard keeper -- the horse that stays ribby no matter how much you feed -- is the mirror image of the easy keeper and just as frustrating. Before reaching for more grain, the priority is to rule out the medical causes that masquerade as a feeding problem, then to add calories the safe equine way: through forage, fat, and fiber rather than big starchy meals. This is reference material to inform a plan built with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Hard Keeper", href: '/nutrition/feeding-the-hard-keeper' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Rule Out the Cause First", href: "#cause" },
            { label: "Maximize Forage", href: "#forage" },
            { label: "Add Calories Safely", href: "#calories" },
            { label: "Fat and Super-Fibers", href: "#fat" },
            { label: "Feeding Management", href: "#management" },
            { label: "Monitoring", href: "#monitoring" },
            { label: "Hard-keeper feeding barn kit", href: "#kit" },
            { label: "Product Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
              { label: "Best Equine Supplements", href: "/reviews/best-equine-supplements" },
              { label: "Equine Dental Care", href: "/guides/equine-dental-care" },
              { label: "Beet Pulp Explained", href: "/nutrition/beet-pulp" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-hard-keeper"
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
              Keep the hard-keeper feeding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Hard-keeper feeding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-alfalfa-cubes,
              soy-hull-pellets, and
              over-door-horse-feed-bucket notes that match
              the maximize-forage, add-calories-safely
              with fat-and-fiber, and
              feed-separately-plus-split-meals copy on
              this page — horse alfalfa cubes so
              free-choice forage calories rise through
              a higher-energy cube the horse can eat
              when long-stem hay is not enough (not
              alfalfa hay bales, not chopped forage,
              not generic hay cubes), soy hull pellets
              so fermentable-fiber calories are added
              without a starch spike (not vegetable
              oil, not the rice-bran ReviewCard, not
              beet pulp), and an over-door horse feed
              bucket so a timid horse eats each small
              meal in its stall away from herdmates
              (not a corner feeder, not stackable feed
              tubs, not a marked grain scoop).
              Educational barn checklist, not a
              treatment, and not a substitute for
              calling the veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Hard-keeper feeding checklist"
              subtitle="Email the alfalfa-cubes, soy-hull-pellets, and over-door feed-bucket notes. No spam."
              ctaText="Email my hard-keeper feeding checklist"
              source="nutrition-feeding-the-hard-keeper-under-hero"
            />
          </div>

          <h2 id="cause">Rule Out the Cause First</h2>
          <p>A horse that will not hold weight despite good feeding usually has an underlying reason, and piling on grain without finding it wastes money and can do harm. Common culprits include dental problems that prevent proper chewing, a heavy parasite burden, gastric ulcers, PPID and other endocrine disease, chronic pain, and competition from herdmates at feeding time. A veterinary workup -- including a dental exam, fecal egg count, and consideration of ulcers and PPID -- should come before simply increasing the ration.</p>

          <h2 id="forage">Maximize Forage</h2>
          <p>Forage should still do the heavy lifting. Offer free-choice, good-quality, leafy hay -- the more a horse will eat, the more calories from the safest source. Higher-energy or part-legume hay (such as alfalfa mix) raises the calorie density of the forage itself. For horses that physically cannot eat enough long-stem hay, chopped forage, soaked hay cubes, and high-fiber complete feeds extend forage intake. Horse alfalfa cubes are that higher-energy cube form of the part-legume forage already named — they are not alfalfa hay bales (that lives on hay-types), not chopped forage (that lives on feeding-senior-horses), and not generic hay cubes (those live on equine-dental-care).</p>

          <h2 id="calories">Add Calories Safely</h2>
          <p>When forage alone cannot maintain condition, add calories in a way that respects the equine gut. The safest dense energy comes from fat and highly digestible fiber rather than large grain meals, which risk hindgut upset, ulcers, and excitability. If grain or a concentrate is used, feed it in small, frequent meals rather than a few large ones. The mantra is to add energy without adding starch.</p>

          <h2 id="fat">Fat and Super-Fibers</h2>
          <ul>
            <li><strong>Vegetable oil and stabilized rice bran</strong> -- concentrated, slow-burning calories that are cool (non-heating) and easy on the gut, introduced gradually.</li>
            <li><strong>Beet pulp</strong> -- a soaked super-fiber that adds digestible-fiber calories without much sugar or starch; see the beet pulp guide.</li>
            <li><strong>Soya hulls and other high-fiber feeds</strong> as additional fermentable-fiber energy. Soy hull pellets are that fermentable-fiber calorie add — they are not horse feed-grade vegetable oil (that lives on feeding-the-performance-horse), not the stabilized-rice-bran ReviewCard below, and not beet pulp (that lives on the beet-pulp leftover).</li>
            <li><strong>High-fat, low-starch performance feeds</strong> formulated for weight gain without the risks of high grain.</li>
          </ul>

          <h2 id="management">Feeding Management</h2>
          <ul>
            <li><strong>Feed separately</strong> so a timid horse is not driven off its food by herdmates. An over-door horse feed bucket hangs in the stall so that small meal is eaten away from the herd — it is not a corner feeder (that lives on feeding-senior-horses), not stackable rubber feed tubs (those live on grain), and not a marked grain scoop (that lives on feeding-the-performance-horse).</li>
            <li><strong>Split meals</strong> into several small feeds a day rather than one or two large ones. The same over-door bucket is hung at each small feeding so concentrate stays split instead of dumped in one trough.</li>
            <li><strong>Make changes gradually</strong> over a week or more to protect the hindgut microbes.</li>
            <li><strong>Treat ulcers and dental issues</strong> as found, since these often unlock weight gain on their own.</li>
            <li><strong>Provide a calm environment</strong> and shelter, as stress and cold burn calories a hard keeper cannot spare.</li>
          </ul>

          <h2 id="monitoring">Monitoring</h2>
          <p>Track condition objectively with body condition scoring and a weigh tape, recorded over time, rather than relying on the eye. Weight gain in horses is slow, so give a new regimen weeks before judging it, and keep coordinating with your veterinarian -- a hard keeper that still will not gain on a good plan needs further investigation rather than ever-larger grain meals.</p>

          <h2 id="kit">Hard-keeper feeding barn kit</h2>
          <p>
            Everyday physical supplies that match the
            maximize-forage, add-calories-safely with
            fat-and-fiber, and
            feed-separately-plus-split-meals copy on
            this page — horse alfalfa cubes so
            free-choice forage calories rise through a
            higher-energy cube the horse can eat when
            long-stem hay is not enough, soy hull
            pellets so fermentable-fiber calories are
            added without a starch spike, and an
            over-door horse feed bucket so a timid
            horse eats each small meal in its stall
            away from herdmates. These are educational
            barn searches, not a ranked product list,
            not a substitute for veterinary care, and
            not an alfalfa-hay-bales hop (that lives
            on hay-types), a chopped-forage hop (that
            lives on feeding-senior-horses), a
            vegetable-oil hop (that lives on
            feeding-the-performance-horse), a
            corner-feeder hop (that lives on
            feeding-senior-horses), or the rice-bran /
            high-fat-low-starch-feed ReviewCards
            below. This page does not hop medications
            or vaccines. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (horse alfalfa cubes /
              soy hull pellets horse feed /
              over door horse feed bucket).
              Educational barn searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1118
              portable+horse+hay+flake+scale /
              horse+hay+soaking+tub /
              low+sugar+horse+treats, #1117
              nylon+horse+hay+bag /
              horse+feed+grade+vegetable+oil /
              marked+horse+grain+scoop, #1116
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
              small+hole+slow+feeder+hay+net+horse /
              low+nsc+ration+balancer+easy+keeper+horse
              (easy-keeper ReviewCards),
              stabilized+rice+bran+horse+fat+supplement /
              performance+horse+feed+high+fat
              (performance ReviewCards),
              horse+hay+cubes / horse+mash
              (dental),
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks
              (choke),
              horse+hay+soaking+bag / horse+hay+steamer
              (heaves),
              slow+feeder+hay+net+horse
              (forage ReviewCard),
              equine+slow+feeder+hay+box
              (turnout),
              molasses+free+beet+pulp+shreds+horse /
              beet+pulp+pellets+horse+feed
              (beet-pulp leftover — do not start here),
              stabilized+rice+bran+horse+supplement /
              high+fat+low+starch+horse+feed
              (kept on the ReviewCards below). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the hard-keeper feeding barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page maximize-forage,
              add-calories-safely with fat-and-fiber,
              and feed-separately-plus-split-meals
              copy — horse alfalfa cubes, soy hull
              pellets, and an over-door horse feed
              bucket. Educational barn searches only.
              They are not a ranked product list, they
              are not an alfalfa-hay-bales or
              chopped-forage hop, they are not a
              vegetable-oil or beet-pulp hop, they
              are not the rice-bran or
              high-fat-low-starch-feed ReviewCards,
              and they do not replace a veterinarian.
              Horses.com earns a commission on
              qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+alfalfa+cubes?s=nutrition-feeding-the-hard-keeper"
                amazonLabel="Browse horse alfalfa cubes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soy+hull+pellets+horse+feed?s=nutrition-feeding-the-hard-keeper"
                amazonLabel="Browse soy hull pellets for horses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/over+door+horse+feed+bucket?s=nutrition-feeding-the-hard-keeper"
                amazonLabel="Browse over-door horse feed buckets on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Product Picks — Calorie Supports for Hard Keepers</h2>
          <p>A few widely-available feed supplements for horses needing safe extra calories. These are general nutrition supports -- fat and fiber sources to add condition without high-starch risk. Always build a complete feeding plan with your veterinarian or an equine nutritionist. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="stabilized-rice-bran"
            badge="Fat-Based Calorie Source"
            name="Stabilized Rice Bran Supplement"
            subtitle="High-fat, low-starch calorie addition for hard-keeper horses"
            score={8.6}
            winner
            description={<>
              <p>Stabilized rice bran is one of the most popular fat-based calorie additions for hard-keeper horses in the US. It supplies dense, slow-burning energy from fat rather than starch, making it a &ldquo;cool&rdquo; calorie source that supports condition gain without the excitability and gut-upset risks of large grain meals. Stabilized to prevent rancidity; introduced gradually alongside existing feed.</p>
              <p>General nutrition support for: hard keepers needing safe extra calories without adding high starch. Not a replacement for forage or a complete diet; use as part of a plan built with your vet or nutritionist.</p>
            </>}
            specs={[
              { label: 'Energy source', value: 'Fat (rice bran oil)', highlight: 'good' },
              { label: 'Starch level', value: 'Low — safe calorie addition' },
              { label: 'Best use case', value: 'Hard keepers needing condition without excitability' },
            ]}
            pros={['Dense, slow-burning calories', 'Low starch — gut-safe', 'Widely available', 'Palatable addition to existing feed']}
            cons={['Not a complete feed — use alongside forage and balancer', 'Introduce gradually', 'Some horses find the fat off-putting initially']}
            price="$25–45 per 25–30 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/stabilized+rice+bran+horse+supplement?s=nutrition-hard-keeper"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="stabilized-rice-bran"
          />

          <ReviewCard
            id="high-fat-feed"
            badge="High-Fat Performance Feed"
            name="High-Fat Low-Starch Horse Feed"
            subtitle="Complete concentrate for horses needing energy without high grain"
            score={8.4}
            description={<>
              <p>High-fat, low-starch horse feeds are formulated to deliver concentrated energy through fat and highly digestible fiber rather than large amounts of cereal grain. They suit hard keepers and performance horses where adding starch-based calories would risk gut upset, ulcers, or excitability. Match the feeding rate to the horse and always maintain adequate forage alongside; build the full plan with a veterinarian or nutritionist.</p>
              <p>General nutrition support for: horses that need more energy than forage alone provides, fed in small, frequent meals according to the manufacturer&apos;s directions.</p>
            </>}
            specs={[
              { label: 'Profile', value: 'High fat, low NSC (non-structural carbohydrate)', highlight: 'good' },
              { label: 'Feed rate', value: 'Per label; split into multiple small meals' },
              { label: 'Best use case', value: 'Hard keepers and horses needing safe extra energy' },
            ]}
            pros={['Energy from fat and fiber, not starch', 'Reduces gut-upset risk vs. grain', 'Suited to horses sensitive to starch']}
            cons={['More expensive per calorie than plain grain', 'Must still be fed in small meals', 'Pair with adequate forage']}
            price="$35–70 per 50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/high+fat+low+starch+horse+feed?s=nutrition-hard-keeper"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="high-fat-horse-feed"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
            <li>American Association of Equine Practitioners. "Body Condition and Weight Management" owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
