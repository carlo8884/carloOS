import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ScoreMethodology, ShopCtas, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Feeding Senior Horses — Diet for the Aging Horse",
  description:
    "Reference guide to feeding senior horses: dental decline, senior feeds and hay replacers, protein and condition, managing PPID, and keeping seniors thriving.",
  path: '/nutrition/feeding-senior-horses',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Feeding Senior Horses — Diet for the Aging Horse",
  description:
    "Reference guide to feeding senior horses: dental decline, senior feeds and hay replacers, protein and condition, managing PPID, and keeping seniors thriving.",
  url: 'https://horses.com/nutrition/feeding-senior-horses',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "When does a horse need senior feed?",
    answer:
      "There is no fixed age -- a horse needs a senior diet when its needs change, typically signaled by worn teeth and quidding, difficulty maintaining weight, or a diagnosis such as PPID. Some horses manage normal forage well into their twenties, while others need adapted feeding sooner. Watch the individual horse rather than the calendar.",
    answerText:
      "Not at a fixed age, but when its needs change -- worn teeth and quidding, weight loss, or PPID. Some manage normal forage into their twenties; others need senior feeding sooner.",
  },
  {
    question: "What do I feed a senior horse that can't chew hay?",
    answer:
      "Provide forage in a chewable form: soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds designed to replace forage, usually fed soaked into a mash and split into several small meals a day. The aim is to keep digestible fiber high without requiring the horse to chew long-stem hay.",
    answerText:
      "Forage in chewable form -- soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds, fed as a mash in several small meals. Keep digestible fiber high without long-stem hay.",
  },
  {
    question: "Should an old horse always be fed more?",
    answer:
      "No -- it depends on the individual. Many seniors become hard keepers needing more support, but others, especially those with PPID and insulin dysregulation or carrying regional fat, are overweight and need a restricted, low-sugar diet. A thin senior is fed up; an overweight or metabolic one is managed carefully and tested for PPID.",
    answerText:
      "No -- it depends. Some seniors need more support, but PPID or overweight seniors need restriction and a low-sugar diet. Tailor to the individual and test for PPID.",
  },
]

export default function SeniorFeedingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Beet Pulp for Horses', href: '/nutrition/beet-pulp' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
          { title: "Equine Cushing's (PPID)", href: '/health/cushings-ppid' },
        ]}
        hero={{
          title: "Feeding Senior Horses",
          subtitle:
            "Horses are living longer than ever, and many stay sound and useful well into their twenties and beyond -- but the aging horse's nutritional needs change, often quietly. Worn teeth, less efficient digestion, and conditions like PPID mean the diet that kept a horse well at ten may leave it thin and struggling at twenty-five. Feeding the senior horse well is about adapting before problems become obvious. This is reference material to inform a plan with your veterinarian.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Feeding Senior Horses", href: '/nutrition/feeding-senior-horses' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Aging Changes Needs", href: "#aging" },
            { label: "Dental Decline", href: "#teeth" },
            { label: "Senior Feeds and Hay Replacers", href: "#feeds" },
            { label: "Protein and Condition", href: "#protein" },
            { label: "PPID and Metabolic Issues", href: "#ppid" },
            { label: "Practical Feeding", href: "#practical" },
            { label: "Senior feeding barn kit", href: "#kit" },
            { label: "Product Picks", href: "#picks" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Cushing's / PPID", href: "/health/cushings-ppid" },
              { label: "Best Equine Supplements", href: "/reviews/best-equine-supplements" },
              { label: "Joint Supplements", href: "/supplements/joint-supplements" },
              { label: "Senior Horse Care", href: "/ownership/senior-horse-care" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-senior"
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
              Keep the senior-horse feeding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior-horse feeding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-chopped-forage,
              horse-feed-soaking-tub, and
              horse-corner-feeder notes that match
              the chewable-forage, soak-into-a-mash,
              and feed-separately copy on this page —
              horse chopped forage so a senior that
              cannot chew long-stem hay still gets
              digestible fiber (not a dental hay-cube
              hop, not a beet-pulp hop), a horse feed
              soaking tub so cubes and complete senior
              feed soak into a mash for poor teeth
              (not a lidded 5-gallon soaking pail, not
              stackable rubber feed tubs, not a hay
              soaking bag), and a horse corner feeder
              so a slow-eating senior is not bullied
              off its meal (not a wall-mounted hay
              rack, not a slow-feeder hay net).
              Educational barn checklist, not a
              treatment, and not a substitute for
              calling the veterinarian. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Senior-horse feeding checklist"
              subtitle="Email the chopped-forage, soaking-tub, and corner-feeder notes. No spam."
              ctaText="Email my senior-horse feeding checklist"
              source="nutrition-feeding-senior-horses-under-hero"
            />
          </div>

          <h2 id="aging">How Aging Changes Needs</h2>
          <p>As horses age, several things shift together: teeth wear down and chewing becomes less effective, digestion of fiber and protein becomes somewhat less efficient, the ability to maintain condition declines, and chronic conditions such as PPID become common. Some seniors become hard keepers needing more support, while others -- especially those with PPID and regional fat -- stay overweight and need restriction. The diet must be tailored to the individual aging horse, not a single senior template.</p>

          <h2 id="teeth">Dental Decline</h2>
          <p>Dental wear is the single biggest feeding change in old age. Worn, loose, or missing teeth make a horse unable to chew long-stem hay effectively, leading to quidding (dropping balls of half-chewed hay), weight loss, and choke risk from poorly chewed feed. Regular dental care helps, but eventually many seniors cannot manage hay and need forage in a form they can process. Watching for quidding and weight loss is the cue to adapt the forage.</p>

          <h2 id="feeds">Senior Feeds and Hay Replacers</h2>
          <p>Senior horses that cannot chew hay well can be maintained on soaked, easily chewed forage and complete senior feeds. Soaked hay cubes, chopped forage, soaked beet pulp, and complete senior feeds (designed to be the whole ration, including forage replacement) provide digestible fiber the horse can manage. These are usually fed soaked into a mash for horses with poor teeth, in several small meals a day. The goal is to keep fiber intake high in a chewable form. Horse chopped forage is that chewable hay-replacer fiber — it is not a dental-page hay-cube hop and not a beet-pulp shred or pellet hop (those live on the beet-pulp page). A horse feed soaking tub is how cubes and complete senior feed sit in water until they become a mash a poor-toothed horse can eat — it is not a lidded 5-gallon feed-soaking pail (that lives on the choke page), not stackable rubber feed tubs (those live on the grain page), and not a hay soaking bag (that lives on heaves).</p>

          <h2 id="protein">Protein and Condition</h2>
          <p>Older horses often need good-quality, digestible protein to maintain muscle and topline, which can decline with age, and the senior feeds designed for them reflect this. Loss of topline and a pot-bellied, sway-backed look can reflect age, reduced protein efficiency, or PPID. Maintaining condition in a thin senior means combining digestible fiber calories, adequate quality protein, and treatment of any underlying disease rather than simply adding starch.</p>

          <h2 id="ppid">PPID and Metabolic Issues</h2>
          <p>PPID is common in older horses and changes the feeding picture: many PPID horses have insulin dysregulation and need a low-sugar, low-starch diet despite being old, which rules out high-sugar senior feeds and lush grazing. A thin senior is fed up; an overweight or insulin-dysregulated senior is managed carefully and tested for PPID. This is why senior feeding must be individualized and coordinated with veterinary diagnosis. See the PPID guide.</p>

          <h2 id="practical">Practical Feeding</h2>
          <ul>
            <li><strong>Feed several small meals</strong> a day, soaked for horses with poor teeth. A horse feed soaking tub is the barn tub those soaked meals are prepared in — it is not a wide-mouth mixing bucket (that lives on the salt page).</li>
            <li><strong>Feed separately</strong> so a slow-eating senior is not bullied off its food by younger herdmates. A horse corner feeder is that separate stall station — it is not a wall-mounted hay rack (that lives on forage-basics), not a slow-feeder hay net (that lives on the forage ReviewCard), and not an equine slow-feeder hay box (that lives on turnout).</li>
            <li><strong>Keep dental care current</strong> and watch for quidding as a sign to change the forage.</li>
            <li><strong>Provide free-choice water and salt</strong> and ensure the senior is drinking, as dehydration risk rises with age.</li>
            <li><strong>Monitor condition closely</strong> with body condition scoring, since a thick or PPID coat hides weight change.</li>
          </ul>

          <h2 id="kit">Senior feeding barn kit</h2>
          <p>
            Everyday physical supplies that match the
            chewable-forage, soak-into-a-mash, and
            feed-separately copy on this page — horse
            chopped forage so a senior that cannot chew
            long-stem hay still gets digestible fiber,
            a horse feed soaking tub so cubes and
            complete senior feed soak into a mash for
            poor teeth, and a horse corner feeder so a
            slow-eating senior is not bullied off its
            meal. These are educational barn searches,
            not a ranked product list, not a substitute
            for veterinary care, and not a dental
            hay-cube / mash hop (those live on equine
            dental care), a beet-pulp hop (that lives
            on the beet-pulp page), a lidded 5-gallon
            soaking-pail hop (that lives on choke), a
            stackable feed-tub hop (that lives on
            grain), or a slow-feeder hay-net hop (that
            lives on forage-basics). This page does
            not hop medications or vaccines. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (horse chopped forage /
              horse feed soaking tub /
              horse corner feeder).
              Educational barn searches only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1115
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
              complete+senior+horse+feed+soakable /
              horse+topline+amino+acid+supplement+lysine
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
              Shop the senior feeding barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page chewable-forage, soak-into-a-mash,
              and feed-separately copy — horse chopped
              forage, a horse feed soaking tub, and a
              horse corner feeder. Educational barn
              searches only. They are not a ranked
              product list, they are not a dental
              hay-cube or mash hop, they are not a
              beet-pulp hop, they are not a grain
              feed-tub hop, they are not a slow-feeder
              hay-net hop, and they do not replace a
              veterinarian. Horses.com earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+chopped+forage?s=nutrition-feeding-senior-horses"
                amazonLabel="Browse horse chopped forage on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+feed+soaking+tub?s=nutrition-feeding-senior-horses"
                amazonLabel="Browse horse feed soaking tubs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+corner+feeder?s=nutrition-feeding-senior-horses"
                amazonLabel="Browse horse corner feeders on Amazon →"
              />
            </div>
          </div>

          <h2 id="picks">Product Picks — General Nutrition Supports for Senior Horses</h2>
          <p>A few widely-available general nutrition options for aging horses: a complete senior feed and a topline/condition supplement. These support the feeding approach described above and are not treatments for PPID, dental disease, or any diagnosed condition. For PPID horses, coordinate with your veterinarian before selecting a senior feed, as some are not low-NSC. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <ScoreMethodology />

          <ReviewCard
            id="senior-complete-feed"
            badge="Senior Complete Feed"
            name="Complete Senior Horse Feed"
            subtitle="Hay-replacer-level complete feed for horses with dental decline"
            score={8.7}
            winner
            description={<>
              <p>Complete senior horse feeds are formulated to replace hay as well as concentrate -- intended to supply all forage and nutrient requirements in a soft, easily soaked form that a horse with poor teeth can eat. Fed at the full label rate, they provide fiber, protein, vitamins, and minerals without requiring the horse to chew long-stem hay. They are widely used as the primary ration for seniors that can no longer manage hay. Note: some senior feeds are higher in sugar and starch than ideal for PPID or insulin-dysregulated horses -- read the guaranteed analysis and confirm with your veterinarian for those horses.</p>
              <p>General nutrition support for: senior horses with dental decline who can no longer effectively chew long-stem hay and need a chewable, soakable complete ration.</p>
            </>}
            specs={[
              { label: 'Type', value: 'Complete feed (can replace hay)', highlight: 'good' },
              { label: 'Form', value: 'Pellet — soaks into mash for poor-teeth horses' },
              { label: 'Best use case', value: 'Seniors unable to chew hay; hard keepers with dental decline' },
            ]}
            pros={['Replaces hay for horses with severe dental wear', 'Soaks easily into palatable mash', 'Complete nutrition at full feed rate']}
            cons={['Some brands higher in NSC — check for PPID horses', 'Expensive at full hay-replacement rate', 'Must be fed at label rate to deliver promised nutrition']}
            price="$30–60 per 50 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/complete+senior+horse+feed+soakable?s=nutrition-senior-horses"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="senior-complete-feed"
          />

          <ReviewCard
            id="senior-topline-supplement"
            badge="Topline and Condition"
            name="Amino Acid / Topline Support Supplement"
            subtitle="Quality protein support for aging horses losing topline on forage"
            score={8.4}
            description={<>
              <p>Topline and amino-acid supplements for horses supply quality protein building blocks -- typically lysine, methionine, and threonine -- to support muscle maintenance and topline condition in horses that may be getting adequate calories but still losing topline due to age-related protein efficiency decline. They work alongside adequate forage and calories, not as a substitute for them. General nutrition support only -- loss of topline in a senior horse with PPID or other diagnosed disease needs veterinary attention, not just a supplement.</p>
              <p>General nutrition support for: older horses losing topline despite adequate calorie intake, where protein quality in the forage is suspected to be a limiting factor.</p>
            </>}
            specs={[
              { label: 'Focus', value: 'Lysine, methionine, and key amino acids', highlight: 'good' },
              { label: 'Calories', value: 'Low — supplement serving' },
              { label: 'Best use case', value: 'Topline support on forage-based senior diets' },
            ]}
            pros={['Amino-acid-targeted for topline', 'Low calorie load', 'Easy to add to existing feed']}
            cons={['Not a substitute for calories if horse is genuinely underweight', 'Does not replace PPID diagnosis and treatment', 'Match to overall ration']}
            price="$30–55 per 5–10 lb"
            ctaText="Search on Amazon →"
            ctaHref="/go/amazon-brand/horse+topline+amino+acid+supplement+lysine?s=nutrition-senior-horses"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="senior-topline-supplement"
          />

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Ralston SL. "Feeding the Geriatric Horse." Veterinary Clinics of North America: Equine Practice and related reviews.</li>
            <li>Equine Endocrinology Group. PPID recommendations, current edition. sites.tufts.edu/equineendogroup.</li>
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
