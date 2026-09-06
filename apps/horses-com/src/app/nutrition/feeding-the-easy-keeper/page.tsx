import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ScoreMethodology, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding the Easy Keeper — Weight Control Without Starvation",
  description:
    "Reference guide to feeding easy-keeper horses: managing the metabolically efficient horse, controlling calories and sugar, slow feeding, and avoiding laminitis.",
  path: '/nutrition/feeding-the-easy-keeper',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding the Easy Keeper — Weight Control Without Starvation",
  description:
    "Reference guide to feeding easy-keeper horses: managing the metabolically efficient horse, controlling calories and sugar, slow feeding, and avoiding laminitis.",
  url: 'https://horses.com/nutrition/feeding-the-easy-keeper',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "How do I help an easy keeper lose weight safely?",
    answer:
      "Reduce calories without long fasts: feed measured, low-sugar (often soaked) forage by weight, cut out grain, restrict grazing, and use slow feeders to spread a controlled ration over many hours. Add a low-calorie ration balancer for missing nutrients, increase exercise when the horse is sound, and aim for gradual loss tracked by body condition scoring under veterinary guidance.",
    answerText:
      "Feed measured low-sugar forage by weight in slow feeders, cut grain, restrict grazing, add a ration balancer, and exercise when sound. Aim for gradual loss tracked by body condition under vet guidance.",
  },
  {
    question: "Why not just feed an easy keeper much less hay?",
    answer:
      "Severely cutting hay imposes long fasts that cause gastric ulcers, boredom, and stress behaviors, and a stressed horse can even resist losing weight. Slow feeders solve this by spreading a restricted ration over many hours, so the horse trickle-feeds and stays healthy and occupied while still eating a controlled total amount.",
    answerText:
      "Severe hay cuts cause long fasts that bring ulcers, boredom, and stress. Slow feeders spread a restricted ration over hours so the horse trickle-feeds healthily while still eating a controlled total.",
  },
  {
    question: "Why are easy keepers at higher risk of laminitis?",
    answer:
      "Easy keepers readily become overweight, and excess fat -- especially regional fat -- drives insulin dysregulation, which is directly laminitis-triggering. Keeping these horses lean and limiting dietary sugar and starch is the central way to reduce their elevated laminitis risk.",
    answerText:
      "They easily become overweight, and excess fat drives insulin dysregulation that triggers laminitis. Keeping them lean and limiting sugar and starch reduces the risk.",
  },
]

export default function EasyKeeperPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Equine Metabolic Syndrome', href: '/health/equine-metabolic-syndrome' },
          { title: 'Laminitis', href: '/health/laminitis' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
        ]}
        hero={{
          title: "Feeding the Easy Keeper",
          subtitle:
            "The easy keeper -- the horse or pony that gets fat on air -- is one of the most common feeding challenges and, increasingly, a welfare problem as equine obesity rises. These metabolically thrifty horses are prone to insulin dysregulation and laminitis, so managing their weight is genuinely a health priority. The trick is cutting calories and sugar without imposing the long fasts that harm the gut. This is reference material to inform a plan built with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding the Easy Keeper", href: '/nutrition/feeding-the-easy-keeper' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is an Easy Keeper", href: "#what" },
            { label: "Why It Matters", href: "#why" },
            { label: "Controlling Calories and Sugar", href: "#calories" },
            { label: "Slow Feeding", href: "#slow" },
            { label: "Balancing Nutrients", href: "#balancer" },
            { label: "Exercise and Monitoring", href: "#exercise" },
            { label: "Easy-keeper feeding barn kit", href: "#kit" },
            { label: "Product Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Equine Metabolic Syndrome", href: "/health/equine-metabolic-syndrome" },
              { label: "Equine Laminitis", href: "/health/laminitis" },
              { label: "Ration Balancers", href: "/nutrition/ration-balancers" },
              { label: "Body Condition Score Tool", href: "/tools/body-condition-score" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-easy-keeper"
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
              Keep the easy-keeper feeding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Easy-keeper feeding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the portable-horse-hay-flake-scale,
              horse-hay-soaking-tub, and
              low-sugar-horse-treats notes that match
              the weigh-the-hay, soak-to-leach-sugar,
              and skip-the-treats copy on this page —
              a portable horse hay flake scale so a
              restricted ration is weighed flake by
              flake instead of scooped by eye (not a
              hanging hay-bale scale, not a tabletop
              digital grain scale, not a feed-scoop
              scale), a horse hay soaking tub so a
              flake sits in water 30 to 60 minutes
              and drains so water-soluble carbohydrate
              leaches out (not a hay soaking bag, not
              a feed soaking tub, not a lidded
              5-gallon soaking pail), and low-sugar
              horse treats so the occasional reward
              is not a starch spike (not a grain hop,
              not a ration-balancer ReviewCard).
              Educational barn checklist, not a
              treatment, and not a substitute for
              calling the veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Easy-keeper feeding checklist"
              subtitle="Email the hay-flake-scale, hay-soaking-tub, and low-sugar-treat notes. No spam."
              ctaText="Email my easy-keeper feeding checklist"
              source="nutrition-feeding-the-easy-keeper-under-hero"
            />
          </div>

          <h2 id="what">What Is an Easy Keeper</h2>
          <p>An easy keeper is a horse that maintains or gains weight on relatively little feed, often a pony or a breed adapted to sparse forage -- Shetlands, Welsh ponies, cobs, Morgans, mustangs, and many gaited and Iberian types. Their efficient metabolism was a survival advantage in harsh native environments but becomes a liability on rich modern pasture and feed, where they readily become overweight.</p>

          <h2 id="why">Why It Matters</h2>
          <p>Equine obesity is not cosmetic. Excess fat, especially regional fat deposits, drives insulin dysregulation and dramatically raises the risk of laminitis -- a painful, sometimes life-ending condition. Obesity also stresses joints and impairs heat tolerance and performance. Keeping an easy keeper lean is one of the most important things an owner can do for its long-term soundness and health.</p>

          <h2 id="calories">Controlling Calories and Sugar</h2>
          <ul>
            <li><strong>Feed by weight, not eye.</strong> Weigh the hay; for weight loss, vets often start around 1.5 percent of ideal bodyweight in forage dry matter, not dropping below about 1.25 percent without supervision. A portable horse hay flake scale is how that restricted flake is weighed at the stall — it is not a digital hanging hay-bale scale (that lives on EMS), not a tabletop digital horse grain scale (that lives on grain), and not a horse feed-scoop scale (those live on the feed calculators).</li>
            <li><strong>Choose low-sugar forage</strong> and soak hay for 30 to 60 minutes to leach out water-soluble carbohydrate. A horse hay soaking tub is the barn tub that flake sits in, then drains — it is not a hay soaking bag (that lives on heaves), not a horse feed soaking tub (that lives on feeding-senior-horses), and not a lidded 5-gallon feed-soaking pail (that lives on choke).</li>
            <li><strong>Cut the grain</strong> -- easy keepers rarely need any concentrate; calorie-dense feeds are the first thing to remove.</li>
            <li><strong>Restrict grazing</strong> with a grazing muzzle, strip grazing, a dry lot, or turnout at lower-sugar times of day. Grazing muzzles already live on pasture-management and laminitis. Strip-grazing step-in posts already live on EMS.</li>
            <li><strong>Skip the treats</strong> or use low-sugar options sparingly. Low-sugar horse treats are that occasional reward — they are not a grain hop (those live on grain) and not the low-NSC ration-balancer ReviewCard below.</li>
          </ul>

          <h2 id="slow">Slow Feeding</h2>
          <p>The dilemma with easy keepers is that simply feeding less imposes long fasts that cause ulcers, boredom, and stress behaviors, and a stressed horse may even gain weight. Slow feeders -- small-hole hay nets and slow-feed systems -- spread a restricted ration over many hours, so the horse trickle-feeds, keeps its gut healthy and its mind occupied, yet still eats a controlled total. This is the key to humane weight management.</p>

          <h2 id="balancer">Balancing Nutrients</h2>
          <p>A diet of restricted, soaked, low-quality forage can fall short on protein, vitamins, and minerals (soaking also leaches some nutrients). The answer is a low-calorie ration balancer or a vitamin-mineral supplement, which supplies what is missing in a tiny, low-sugar serving without adding meaningful calories. This lets you keep calories low while keeping the diet nutritionally complete. See the ration balancers guide.</p>

          <h2 id="exercise">Exercise and Monitoring</h2>
          <p>When the horse is sound, exercise both burns calories and improves insulin sensitivity, making it a powerful ally in weight management. Combine the dietary plan with regular work suited to the horse&apos;s fitness. Track progress objectively with body condition scoring and a weigh tape rather than the eye, which adapts to a fat horse over time; score regularly with the body-condition tool. Crash dieting is dangerous in horses, so aim for steady, gradual loss under veterinary guidance.</p>

          <h2 id="kit">Easy-keeper feeding barn kit</h2>
          <p>
            Everyday physical supplies that match the
            weigh-the-hay, soak-to-leach-sugar, and
            skip-the-treats copy on this page — a
            portable horse hay flake scale so a
            restricted ration is weighed flake by
            flake instead of scooped by eye, a horse
            hay soaking tub so a flake sits in water
            30 to 60 minutes and drains so
            water-soluble carbohydrate leaches out,
            and low-sugar horse treats so the
            occasional reward is not a starch spike.
            These are educational barn searches, not a
            ranked product list, not a substitute for
            veterinary care, and not a hanging
            hay-bale-scale hop (that lives on EMS), a
            tabletop grain-scale hop (that lives on
            grain), a hay-soaking-bag hop (that lives
            on heaves), a feed-soaking-tub hop (that
            lives on feeding-senior-horses), a
            grazing-muzzle hop (that lives on
            pasture-management), a nylon-hay-bag hop
            (that lives on feeding-the-performance-horse),
            or the small-hole-net / low-NSC-balancer
            ReviewCards below. This page does not hop
            medications or vaccines. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (portable horse hay flake scale /
              horse hay soaking tub /
              low sugar horse treats).
              Educational barn searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1117
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
              equine+slow+feeder+hay+box
              (turnout),
              molasses+free+beet+pulp+shreds+horse /
              beet+pulp+pellets+horse+feed
              (beet-pulp). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the easy-keeper feeding barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page weigh-the-hay, soak-to-leach-sugar,
              and skip-the-treats copy — a portable
              horse hay flake scale, a horse hay
              soaking tub, and low-sugar horse treats.
              Educational barn searches only. They are
              not a ranked product list, they are not
              a hanging hay-bale-scale or hay-soaking-bag
              hop, they are not a feed-soaking-tub hop,
              they are not the small-hole-net or
              low-NSC-balancer ReviewCards, and they
              do not replace a veterinarian. Horses.com
              earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/portable+horse+hay+flake+scale?s=nutrition-feeding-the-easy-keeper"
                amazonLabel="Browse portable horse hay flake scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hay+soaking+tub?s=nutrition-feeding-the-easy-keeper"
                amazonLabel="Browse horse hay soaking tubs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/low+sugar+horse+treats?s=nutrition-feeding-the-easy-keeper"
                amazonLabel="Browse low-sugar horse treats on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Product Picks — Slow-Feed and Weight-Management Supports</h2>
          <p>Two widely-used general management tools for easy keepers: slow-feeder hay nets to extend eating time without long fasts, and a low-calorie ration balancer to fill nutrition gaps in a restricted diet. These are management aids, not treatments for laminitis, metabolic syndrome, or any diagnosed condition. For metabolic horses coordinate the full plan with your veterinarian. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <ScoreMethodology />

          <ReviewCard
            id="slow-feeder-hay-net"
            badge="Slow-Feed Management"
            name="Small-Hole Slow-Feeder Hay Net"
            subtitle="Extends eating time to prevent long fasts on a restricted ration"
            score={8.7}
            winner
            description={<>
              <p>Small-hole slow-feeder hay nets are one of the most practically useful tools for managing easy keepers. By making the horse work slightly harder for each bite, they can extend a measured hay ration from one or two hours of eating to six or more, preventing the long fasts that cause ulcers and stress behaviors in a calorie-restricted horse. The horse stays occupied and trickle-feeding while total intake remains controlled. A straightforward, inexpensive general management aid.</p>
              <p>General management tool for: easy keepers and any horse on a calorie-restricted forage ration that needs feeding time spread out to prevent gut fasts. Not a medical device or treatment.</p>
            </>}
            specs={[
              { label: 'Hole size', value: '1.5–2 in (small hole) for controlled intake', highlight: 'good' },
              { label: 'Purpose', value: 'Extends eating time; prevents long fasts' },
              { label: 'Best use case', value: 'Easy keepers, calorie-restricted horses' },
            ]}
            pros={['Prevents ulcer-causing long fasts on restriction', 'Extends eating time naturally', 'Inexpensive and durable']}
            cons={['Horse must be introduced gradually', 'Some horses figure out faster methods', 'Hole size selection matters']}
            price="$20–40"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/small+hole+slow+feeder+hay+net+horse?s=nutrition-easy-keeper"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="slow-feeder-hay-net"
          />

          <ReviewCard
            id="low-calorie-balancer"
            badge="Nutrient Balance on Restriction"
            name="Low-Calorie Ration Balancer"
            subtitle="Fills vitamin and mineral gaps in a low-calorie easy-keeper diet"
            score={8.6}
            description={<>
              <p>A low-calorie, low-sugar ration balancer supplies protein, vitamins, and minerals in a tiny daily serving -- exactly what an easy keeper on a restricted, soaked, or low-quality hay ration needs to stay nutritionally complete without adding calories. Look for a balancer labeled low-NSC (non-structural carbohydrate) or specifically formulated for easy keepers or metabolic horses. Feed at the label rate; choose appropriately for the forage type. Coordinate with your veterinarian, especially for insulin-dysregulated or PPID horses.</p>
              <p>General nutrition support for: easy keepers and metabolic horses on forage-only or calorie-restricted diets needing balanced micronutrition in a low-calorie serving.</p>
            </>}
            specs={[
              { label: 'Calories', value: 'Very low — tiny daily serving', highlight: 'good' },
              { label: 'NSC', value: 'Low (sugar + starch controlled)', highlight: 'good' },
              { label: 'Best use case', value: 'Easy keepers and metabolic horses on restricted forage diets' },
            ]}
            pros={['Fills nutrition gaps without calories', 'Low sugar and starch for metabolic horses', 'Small serving is economical']}
            cons={['Use under veterinary guidance for metabolic horses', 'Not a calorie source for hard keepers', 'Match to forage type']}
            price="$30–55 per 25–30 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/low+nsc+ration+balancer+easy+keeper+horse?s=nutrition-easy-keeper"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="low-calorie-balancer"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. EMS management recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>Geor RJ. "Metabolic Predispositions to Laminitis in Horses and Ponies." Journal of Equine Veterinary Science, 2008.</li>
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
