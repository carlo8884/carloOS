import type { Metadata } from 'next'
import { AffiliateDisclosure, ArticleByline, ArticleLayout, buildMetadata, CrossPortfolioCard, EmailCapture, FAQAccordion, RelatedLinks, ReviewCard, ShopCtas, StockImage, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Forage Basics — Why Fiber Comes First",
  description:
    "Reference guide to equine forage: why fiber is the foundation of the horse diet, how the hindgut works, how much forage a horse needs, and forage-first feeding.",
  path: '/nutrition/forage-basics',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Forage Basics — Why Fiber Comes First",
  description:
    "Reference guide to equine forage: why fiber is the foundation of the horse diet, how the hindgut works, how much forage a horse needs, and forage-first feeding.",
  url: 'https://horses.com/nutrition/forage-basics',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const FAQS = [
  {
    question: "How much hay should a horse eat per day?",
    answer:
      "As a rule, a horse should eat at least 1.5 to 2 percent of its bodyweight per day in forage dry matter, which for a 500 kg horse is roughly 7.5 to 10 kg of hay or the grazing equivalent. Ideally forage is available most of the time. Dropping much below this risks gut and behavioral problems.",
    answerText:
      "At least 1.5 to 2 percent of bodyweight daily in forage dry matter -- about 7.5 to 10 kg of hay for a 500 kg horse -- ideally available most of the time.",
  },
  {
    question: "Why is forage more important than grain for horses?",
    answer:
      "The horse is a hindgut fermenter built to process a steady trickle of fiber, and forage buffers stomach acid, keeps the gut moving, generates heat, and occupies the horse. Grain in large meals disrupts the hindgut microbes and is linked to colic, ulcers, and laminitis, so forage is the foundation and grain only a marginal addition.",
    answerText:
      "Horses are hindgut fermenters built for constant fiber. Forage buffers acid, keeps the gut moving, and occupies the horse, while large grain meals disrupt the gut and cause disease.",
  },
  {
    question: "What happens if a horse goes too long without forage?",
    answer:
      "The horse's stomach secretes acid continuously, so long gaps without forage leave acid attacking an empty stomach, a direct cause of gastric ulcers, and also raise colic and stress-behavior risk. Trickle feeding -- free-choice forage or slow feeders -- prevents these long fasts and matches the horse's natural feeding pattern.",
    answerText:
      "Acid attacks the empty stomach, causing ulcers, and colic and stress-behavior risk rise. Trickle feeding with free-choice forage or slow feeders prevents the long fasts.",
  },
]

export default function ForageBasicsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="nutrition"
        relatedLinks={[
          { title: 'Nutrition Hub', href: '/nutrition', category: 'Nutrition' },
          { title: 'Hay Types', href: '/nutrition/hay-types' },
          { title: 'Equine Gastric Ulcers', href: '/health/equine-ulcers' },
          { title: 'Equine Colic', href: '/health/colic' },
        ]}
        hero={{
          title: "Equine Forage Basics",
          subtitle:
            "Almost everything about feeding horses well begins with one principle: forage first. The horse is a hindgut fermenter built to process a steady trickle of fibrous plant material around the clock, and a forage-based diet underpins gut health, behavior, and metabolic stability. Grain and supplements are adjustments at the margins; forage is the foundation. This is reference material to inform feeding decisions, not a substitute for a veterinarian or equine nutritionist.",
          category: "Equine Nutrition",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Nutrition", href: "/nutrition" },
          { name: "Forage Basics", href: '/nutrition/forage-basics' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Fiber First", href: "#fiber" },
            { label: "How the Hindgut Works", href: "#hindgut" },
            { label: "How Much Forage", href: "#howmuch" },
            { label: "Trickle Feeding", href: "#trickle" },
            { label: "Hay Nets", href: "#hay-nets" },
            { label: "Forage Quality", href: "#quality" },
            { label: "Barn forage-quality kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hay Types Compared", href: "/nutrition/hay-types" },
              { label: "Grain and Concentrates", href: "/nutrition/grain-and-concentrates" },
              { label: "Equine Colic", href: "/health/colic" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="nutrition-forage"
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
              Keep the forage-first checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse forage-first checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the horse-hay-probe-moisture-tester,
              equine-hay-core-sampler, and
              wall-mounted-horse-hay-rack notes that
              match the cleanliness, representative-
              sample, and keep-forage-off-the-ground
              copy on this page — a hay-probe moisture
              tester so moldy forage is not stored or
              fed, a hay-core sampler so a lab sample
              is representative (not an EMS NSC kit),
              and a wall-mounted hay rack so forage
              stays off dirty ground. Educational barn
              checklist, not a treatment, not a hay-net
              hop, and not a substitute for calling the
              veterinarian or equine nutritionist. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse forage-first checklist"
              subtitle="Email the moisture-tester, core-sampler, and hay-rack notes. No spam."
              ctaText="Email my horse forage-first checklist"
              source="nutrition-forage-under-hero"
            />
          </div>

          <h2 id="fiber">Why Fiber First</h2>
          <p>The horse evolved grazing fibrous grasses for 16 or more hours a day. Its teeth, its small stomach that secretes acid continuously, and its enormous fermenting hindgut are all built for a constant flow of fiber. Feeding a forage-based diet keeps that system working as designed: it buffers stomach acid, keeps the gut moving, generates body heat, and occupies the horse mentally. Diets short on forage and heavy in grain are behind much of the colic, ulceration, and behavioral trouble seen in domestic horses.</p>

          <StockImage manifestKey="horses-com:nutrition-forage" aspect="16:9" />

          <h2 id="hindgut">How the Hindgut Works</h2>
          <p>Behind the small intestine sit the cecum and large colon -- a vast fermentation vat where billions of microbes break down fiber (cellulose) that the horse itself cannot digest, releasing volatile fatty acids that supply much of the horse&apos;s energy. This microbial population is sensitive: it thrives on steady forage and is disrupted by sudden diet changes and large grain meals, which can spill undigested starch into the hindgut, sour the fermentation, and trigger colic and laminitis. Protecting the hindgut microbes is a central goal of good feeding.</p>

          <h2 id="howmuch">How Much Forage</h2>
          <p>The standard guideline is that a horse should eat at least 1.5 to 2 percent of its bodyweight per day in forage dry matter, and ideally have forage available most of the time. For a 500 kg horse that is roughly 7.5 to 10 kg of hay or its grazing equivalent daily. Going below about 1 to 1.5 percent of bodyweight in forage risks gut and behavioral problems, which is why severe forage restriction for weight loss must be done carefully and under guidance.</p>

          <h2 id="trickle">Trickle Feeding</h2>
          <p>Because the horse&apos;s stomach produces acid continuously whether or not it is eating, long gaps without forage leave acid splashing against an empty stomach -- a direct route to gastric ulcers. Trickle feeding (free-choice forage, or slow-feeder hay nets that extend a ration over many hours) keeps something in the stomach to buffer acid and matches the horse&apos;s natural feeding pattern. For easy keepers, slow feeders let you restrict calories without imposing long fasts.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ReviewCard
            id="hay-nets"
            badge="Trickle Feeding"
            name="Slow-Feeder Hay Net"
            subtitle="Extends a hay ration so the horse eats over many hours"
            score={8.5}
            description={<>
              <p>Slow-feeder hay nets stretch a measured forage ration across the day, which keeps something in the stomach to buffer acid and matches the horse&apos;s natural trickle-feeding pattern. For easy keepers they also let you restrict calories without imposing long fasts. This is a general management aid, not a treatment. Confirm the ration with your veterinarian or equine nutritionist.</p>
            </>}
            specs={[
              { label: 'Type', value: 'Slow-feeder hay net', highlight: 'good' },
              { label: 'Purpose', value: 'Extend eating time; prevent long fasts' },
              { label: 'Best use case', value: 'Trickle feeding and easy keepers' },
            ]}
            pros={['Keeps forage in front of the horse longer', 'Helps prevent ulcer-causing fasts', 'Useful on a measured ration']}
            cons={['Introduce gradually', 'Hole size matters for intake rate', 'Not a substitute for adequate forage']}
            price="$20–40"
            ctaText="Search hay nets on Amazon →"
            ctaHref="/go/amazon-brand/slow+feeder+hay+net+horse?s=nutrition-forage-basics"
            ctaAffiliateProgram="amazon"
            ctaAffiliateProduct="slow-feeder-hay-net"
          />

          <h2 id="quality">Forage Quality</h2>
          <ul>
            <li><strong>Cleanliness</strong> -- forage should be free of dust, mold, and weeds; moldy hay causes respiratory disease and colic. A horse hay-probe moisture tester is how you check a bale before it is stored or fed — it is not a hanging hay-bale scale (that lives on EMS) and not a hay steamer or soaking bag (those live on heaves).</li>
            <li><strong>Maturity at cutting</strong> -- earlier-cut forage is more digestible and higher in nutrients; very stemmy late-cut hay is largely filler.</li>
            <li><strong>Type</strong> -- grass versus legume (such as alfalfa) changes calories, protein, and calcium; match to the horse.</li>
            <li><strong>Sugar and starch content</strong> -- matters greatly for laminitis-prone and metabolic horses; testing or soaking controls it. An equine hay-core sampler is how you pull a representative sample for the lab — it is not an EMS forage-NSC hay-test kit and not a timothy-hay hop (that lives on the feed calculator).</li>
            <li><strong>Consistency</strong> -- change forage gradually, since the hindgut microbes need time to adapt.</li>
            <li><strong>Keep forage off the ground</strong> -- a wall-mounted horse hay rack keeps a flake out of dirt, urine, and trampling so the horse is not eating contaminated forage. It is not a slow-feeder hay net (that lives in the ReviewCard above), not a small-hole net (that lives on easy-keeper), and not an equine slow-feeder hay box (that lives on turnout).</li>
          </ul>

          <h2 id="kit">Barn forage-quality kit</h2>
          <p>
            Everyday physical supplies that match the
            cleanliness, representative-sample, and
            keep-forage-off-the-ground copy on this page — a
            horse hay-probe moisture tester so moldy forage
            is not stored or fed, an equine hay-core sampler
            so a lab sample is representative rather than a
            grab of the top flake, and a wall-mounted horse
            hay rack so forage stays off dirty ground. These
            are educational barn tools, not a ranked product
            list, not a substitute for veterinary or
            nutritionist care, and not a hanging hay-bale
            scale, an EMS forage-NSC hay-test kit, or
            strip-grazing posts (those live on EMS). This
            page does not hop medications or vaccines. This
            page does not claim hands-on testing.
          </p>

          {/* Money path — live amazon-brand search hops
              (horse hay probe moisture tester /
              equine hay core sampler /
              wall mounted horse hay rack).
              Educational barn tools only; no Rx /
              vaccine ASIN hops. ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Unused vs #1110
              plain+white+horse+salt+block /
              salt+first+horse+electrolyte+powder /
              wide+mouth+horse+water+bucket, #1105
              digital+hanging+hay+bale+scale /
              equine+forage+nsc+hay+test+kit /
              portable+strip+grazing+step+in+posts,
              horse+hay+steamer / horse+hay+soaking+bag
              (heaves),
              timothy+hay+horse
              (feed calculator),
              horse+hay+cubes
              (dental),
              slow+feeder+hay+net+horse
              (kept on the ReviewCard above),
              small+hole+slow+feeder+hay+net+horse
              (easy keeper),
              equine+slow+feeder+hay+box
              (turnout). */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the barn forage-quality kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page cleanliness, representative-sample,
              and keep-forage-off-the-ground copy — a hay-
              probe moisture tester, a hay-core sampler,
              and a wall-mounted hay rack. Educational
              barn tools only. They are not a ranked
              product list, they are not an EMS hay-test
              or bale-scale hop, they are not a hay-net
              hop, and they do not replace a veterinarian
              or equine nutritionist. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hay+probe+moisture+tester?s=nutrition-forage"
                amazonLabel="Browse horse hay-probe moisture testers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+hay+core+sampler?s=nutrition-forage"
                amazonLabel="Browse equine hay-core samplers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/wall+mounted+horse+hay+rack?s=nutrition-forage"
                amazonLabel="Browse wall-mounted horse hay racks on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Research Council. Nutrient Requirements of Horses, 6th ed., National Academies Press, 2007.</li>
            <li>Harris PA, et al. “Review: Feeding Conserved Forage to Horses.” Animal, 2017.</li>
            <li>Geor RJ, Harris PA, Coenen M (eds). Equine Applied and Clinical Nutrition, Elsevier, 2013.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
