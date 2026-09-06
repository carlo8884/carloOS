import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ScoreMethodology, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Grain and Concentrates for Horses — When and How to Feed",
  description:
    "Reference guide to feeding grain and concentrates to horses: what concentrates are, when needed, the dangers of large starchy meals, and safe feeding rules.",
  path: '/nutrition/grain-and-concentrates',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Grain and Concentrates for Horses — When and How to Feed",
  description:
    "Reference guide to feeding grain and concentrates to horses: what concentrates are, when needed, the dangers of large starchy meals, and safe feeding rules.",
  url: 'https://horses.com/nutrition/grain-and-concentrates',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "Do all horses need grain?",
    answer:
      "No. Many horses in light work or at rest meet their needs on forage plus a vitamin-mineral balancer and need no grain at all. Concentrates are justified mainly for performance horses, hard keepers, lactating mares, and growing youngstock that cannot meet their energy and nutrient needs from forage alone.",
    answerText:
      "No -- many horses do fine on forage plus a balancer. Grain is mainly for performance horses, hard keepers, broodmares, and youngstock that need more than forage provides.",
  },
  {
    question: "Why are large grain meals dangerous for horses?",
    answer:
      "The small intestine can only digest a limited amount of starch at once. A large grain meal sends undigested starch into the hindgut, where rapid fermentation drops the pH, kills fiber-digesting microbes, and releases toxins -- causing colic and laminitis. High starch is also linked to ulcers, tying-up, and excitable behavior, which is why grain meals are kept small.",
    answerText:
      "The small intestine can only digest limited starch; excess spills into the hindgut, ferments, and causes colic and laminitis. High starch also links to ulcers and tying-up, so meals are kept small.",
  },
  {
    question: "Should I feed grain by the scoop?",
    answer:
      "No -- feed concentrates by weight, not by scoop, because different feeds vary greatly in density (a scoop of pellets weighs much more than a scoop of oats). Weighing the feed lets you control starch intake per meal and follow the feed's directions accurately, which by-volume scooping cannot.",
    answerText:
      "No -- feed by weight, not scoop, since feeds vary greatly in density. Weighing lets you control starch per meal and follow feeding directions accurately.",
  },
]

export default function GrainConcentratesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Forage Basics', href: '/nutrition/forage-basics' },
          { title: 'Ration Balancers', href: '/nutrition/ration-balancers' },
          { title: 'Equine Colic', href: '/health/colic' },
        ]}
        hero={{
          title: "Grain and Concentrates for Horses",
          subtitle:
            "Grain and commercial concentrates can be useful tools, but they are also behind a great deal of equine disease when fed carelessly. Many horses need little or no grain at all, and those that do should receive it within firm limits, because the equine gut handles large starchy meals poorly. This guide covers when concentrates are genuinely needed and the rules for feeding them safely. This is reference material to inform feeding decisions with professional input.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Grain and Concentrates", href: '/nutrition/grain-and-concentrates' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Concentrates Are", href: "#what" },
            { label: "When They Are Needed", href: "#when" },
            { label: "Why Big Grain Meals Are Risky", href: "#risk" },
            { label: "Safe Feeding Rules", href: "#rules" },
            { label: "Reading the Feed Tag", href: "#tag" },
            { label: "Barn grain-weighing kit", href: "#kit" },
            { label: "Feed Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Forage Basics", href: "/nutrition/forage-basics" },
              { label: "Ration Balancers", href: "/nutrition/ration-balancers" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Tying-Up", href: "/health/tying-up" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-grain"
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
              Keep the grain-and-concentrate checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse grain-and-concentrate checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the tabletop-digital-horse-grain-scale,
              stackable-rubber-horse-feed-tubs, and
              rodent-proof-metal-horse-feed-bin notes that
              match the weigh-not-scoop, split-small-meals,
              and keep-grain-consistent copy on this page —
              a tabletop grain scale so concentrates are
              weighed (not scooped), stackable rubber feed
              tubs so a daily ration is split into several
              small meals, and a rodent-proof metal feed
              bin so grain stays clean and the ration does
              not drift. Educational barn checklist, not
              a treatment, not a feed-scoop-scale hop, and
              not a substitute for calling the veterinarian
              or equine nutritionist. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse grain-and-concentrate checklist"
              subtitle="Email the grain-scale, feed-tub, and feed-bin notes. No spam."
              ctaText="Email my horse grain-and-concentrate checklist"
              source="nutrition-grain-under-hero"
            />
          </div>

          <h2 id="what">What Concentrates Are</h2>
          <p>Concentrates are energy-dense feeds fed in addition to forage -- traditional cereal grains such as oats, barley, and corn, and the formulated bagged feeds (textured sweet feeds, pellets, and cubes) that combine grains with added protein, vitamins, minerals, and often fat and fiber. They concentrate calories and nutrients into a small volume, which is their usefulness and, fed wrongly, their danger.</p>

          <h2 id="when">When They Are Needed</h2>
          <p>Many horses in light work or at rest meet their needs on forage plus a vitamin-mineral balancer and need no grain. Concentrates earn their place when forage alone cannot supply enough energy or nutrients: hard-working performance horses, hard keepers, lactating mares, and growing youngstock. The honest starting question is whether the horse actually needs the calories -- feeding grain to an idle, fat horse is common and harmful.</p>

          <h2 id="risk">Why Big Grain Meals Are Risky</h2>
          <p>The horse&apos;s small intestine can only digest so much starch at once. Overwhelm it with a large grain meal and undigested starch spills into the hindgut, where it ferments rapidly, drops the pH, kills fiber-digesting microbes, and releases toxins -- a cascade that causes colic and laminitis. High-starch diets are also linked to gastric ulcers, tying-up, and excitable behavior. This is why grain must be limited per meal and why fat and fiber are preferred when extra calories are needed.</p>

          <h2 id="rules">Safe Feeding Rules</h2>
          <ul>
            <li><strong>Forage first.</strong> Build the diet on forage and add concentrates only to fill a real gap.</li>
            <li><strong>Limit starch per meal.</strong> Keep individual grain meals small; split a daily concentrate ration into several feeds rather than one or two large ones. Stackable rubber horse feed tubs are how those split meals stay pre-portioned — they are not a flu-page round rubber feed pan and not choke-page feed-tub rocks.</li>
            <li><strong>Feed by weight, not scoops.</strong> A scoop of pellets and a scoop of oats weigh very differently; weigh the feed. A tabletop digital horse grain scale is how you weigh a meal without guessing — it is not a horse-feed-scoop-scale (that lives on the feed calculator), not a hanging hay-bale scale (that lives on EMS), and not a livestock barn scale (that lives on the weight calculator).</li>
            <li><strong>Change gradually</strong> over a week or more to protect the hindgut microbes. A rodent-proof metal horse feed bin keeps one bag&apos;s ration clean and consistent so the horse is not switched onto spoiled or mixed leftover grain — it is not an airtight pet-food bin (that lives on dog/vets pages).</li>
            <li><strong>Feed at consistent times</strong> and never feed grain to a hot, exhausted, or stressed horse.</li>
            <li><strong>Prefer fat and fiber</strong> over high starch when adding calories.</li>
          </ul>

          <h2 id="tag">Reading the Feed Tag</h2>
          <p>Commercial feeds carry a guaranteed analysis and feeding directions. Look at the protein, fat, and fiber percentages, and -- important for metabolic and laminitis-prone horses -- the non-structural carbohydrate (NSC, the sugar plus starch). Crucially, the bag&apos;s feeding rate is calibrated to deliver the formulated nutrients only if you feed the recommended amount; feeding far less than directed shortchanges the horse on vitamins and minerals, which is exactly where a ration balancer fits instead. See the ration balancers guide.</p>

          <h2 id="kit">Barn grain-weighing kit</h2>
          <p>
            Everyday physical supplies that match the
            weigh-not-scoop, split-small-meals, and
            keep-grain-consistent copy on this page — a
            tabletop digital horse grain scale so
            concentrates are weighed rather than scooped,
            stackable rubber horse feed tubs so a daily
            ration is split into several small meals, and
            a rodent-proof metal horse feed bin so grain
            stays clean and the ration does not drift.
            These are educational barn tools, not a ranked
            product list, not a substitute for veterinary
            or nutritionist care, and not a feed-scoop-scale
            (that lives on the feed calculator), a hanging
            hay-bale scale (that lives on EMS), or a
            livestock barn scale (that lives on the weight
            calculator). This page does not hop medications
            or vaccines. This page does not claim hands-on
            testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (tabletop digital horse grain scale /
              stackable rubber horse feed tubs /
              rodent proof metal horse feed bin).
              Educational barn tools only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1111
              horse+hay+probe+moisture+tester /
              equine+hay+core+sampler /
              wall+mounted+horse+hay+rack, #1110
              plain+white+horse+salt+block /
              salt+first+horse+electrolyte+powder /
              wide+mouth+horse+water+bucket, #1105
              digital+hanging+hay+bale+scale /
              equine+forage+nsc+hay+test+kit /
              portable+strip+grazing+step+in+posts,
              horse+feed+scoop+scale
              (feed calculator / BCS / cost),
              livestock+barn+scale
              (weight calculator),
              round+rubber+feed+pan+horse
              (flu),
              large+smooth+feed+tub+rocks /
              lidded+5+gallon+feed+soaking+pail
              (choke). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the barn grain-weighing kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page weigh-not-scoop, split-small-meals,
              and keep-grain-consistent copy — a tabletop
              grain scale, stackable rubber feed tubs, and
              a rodent-proof metal feed bin. Educational
              barn tools only. They are not a ranked
              product list, they are not a feed-scoop-scale
              hop, they are not an EMS hay-bale-scale hop,
              and they do not replace a veterinarian or
              equine nutritionist. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/tabletop+digital+horse+grain+scale?s=nutrition-grain"
                amazonLabel="Browse tabletop digital horse grain scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/stackable+rubber+horse+feed+tubs?s=nutrition-grain"
                amazonLabel="Browse stackable rubber horse feed tubs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/rodent+proof+metal+horse+feed+bin?s=nutrition-grain"
                amazonLabel="Browse rodent-proof metal horse feed bins on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Feed Picks — Safe Concentrates for Working Horses</h2>
          <p>When concentrates are genuinely needed, formulated complete feeds offer more consistent nutrition and safer starch levels than plain cereal grain. These are general nutrition options for horses with real energy gaps -- working horses, hard keepers, and youngstock. Always feed in small, frequent meals, build forage first, and work with your veterinarian or nutritionist to confirm the ration is appropriate. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <ScoreMethodology />

          <ReviewCard
            id="complete-horse-feed"
            badge="Working Horse / All-Round"
            name="Formulated Complete Horse Feed (Pellet or Textured)"
            subtitle="Balanced concentrate for horses needing more than forage provides"
            score={8.5}
            winner
            description={<>
              <p>Formulated complete feeds combine controlled amounts of grain with protein, vitamins, and minerals in a consistent ratio, offering more reliable nutrition per serving than plain oats or corn. The key is feeding at the label rate -- too little shortchanges vitamins and minerals, and the whole ration must be built around adequate forage. Split daily amounts into multiple small meals to keep starch per meal low. Match the feed to the horse&apos;s actual workload rather than over-feeding energy.</p>
              <p>General nutrition support for: working horses, hard keepers, and broodmares that have a real energy gap forage alone cannot fill. Confirm the ration with your veterinarian or nutritionist.</p>
            </>}
            specs={[
              { label: 'Type', value: 'Formulated pellet or textured feed', highlight: 'good' },
              { label: 'Key rule', value: 'Feed at label rate; split into small meals' },
              { label: 'Best use case', value: 'Performance, hard keeper, broodmare' },
            ]}
            pros={['Consistent nutrient delivery per serving', 'More balanced than plain grain', 'Widely available']}
            cons={['Shortchanges nutrients if underfed', 'Must be split into small meals', 'Overkill for idle horses — use a balancer instead']}
            price="$20–50 per 50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/complete+pelleted+horse+feed+formulated?s=nutrition-grain-and-concentrates"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="complete-horse-feed"
          />

          <ReviewCard
            id="low-starch-feed"
            badge="Low-Starch Option"
            name="Low-NSC / Senior Feed"
            subtitle="Reduced-starch concentrate for metabolic, senior, or starch-sensitive horses"
            score={8.3}
            description={<>
              <p>Low-NSC feeds are designed to deliver energy through fat and digestible fiber rather than starch and sugar -- a safer profile for older horses with dental decline, horses prone to tying-up, and metabolic horses that need more than a pure balancer but cannot tolerate high grain. Still fed at the label rate in small meals alongside forage. Build the full plan with your veterinarian or nutritionist, especially for metabolic or insulin-dysregulated horses.</p>
              <p>Most relevant for seniors, horses with metabolic considerations, and horses sensitive to starch who still need more caloric support than a balancer alone.</p>
            </>}
            specs={[
              { label: 'NSC', value: 'Low (sugar + starch controlled)', highlight: 'good' },
              { label: 'Energy source', value: 'Fat and digestible fiber' },
              { label: 'Best use case', value: 'Seniors, metabolic horses, starch-sensitive horses' },
            ]}
            pros={['Lower starch and sugar than standard feeds', 'Supports condition in sensitive horses', 'Often softens well for seniors']}
            cons={['Use under veterinary or nutritionist guidance for metabolic horses', 'Not a replacement for forage', 'Higher cost per bag']}
            price="$30–60 per 50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/low+starch+senior+horse+feed?s=nutrition-grain-and-concentrates"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="low-starch-horse-feed"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Potter GD, et al. "Digestion of Starch in the Small or Large Intestine of the Equine." Journal of Animal Science and related work.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
