import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Blanketing Guide — When, How, and Weights",
  description:
    "Reference guide to horse blanketing: when a horse actually needs a rug, how to choose a weight, fit and safety, and the case for leaving horses unblanketed.",
  path: '/care/blanketing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Blanketing Guide — When, How, and Weights",
  description:
    "Reference guide to horse blanketing: when a horse actually needs a rug, how to choose a weight, fit and safety, and the case for leaving horses unblanketed.",
  url: 'https://horses.com/care/blanketing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',
})

const FAQS = [
  {
    question: "At what temperature does a horse need a blanket?",
    answer:
      "There is no single temperature, because it depends on the horse's coat, condition, age, whether it is clipped, and access to shelter. A healthy unclipped horse with shelter and forage often needs no blanket even well below freezing, whereas a clipped, old, or underweight horse may need one in milder cold. Wind and rain matter more than air temperature alone.",
    answerText:
      "There is no single number -- it depends on coat, condition, age, clipping, and shelter. Healthy unclipped horses often need none even below freezing; clipped or vulnerable horses need them sooner. Wind and rain matter most.",
  },
  {
    question: "Can blanketing a horse do harm?",
    answer:
      "Yes. Over-rugging can cause a horse to sweat and then chill, flatten the coat and reduce its natural insulation, and lead to overheating, rubs, and concealed weight loss. Blanketing should match a real need and the conditions, and rugs must be checked daily for fit and for the horse being too warm.",
    answerText:
      "Yes -- over-rugging causes sweating then chilling, flattens the coat, and hides weight loss. Blankets should match a real need and be checked daily.",
  },
  {
    question: "Does a horse need a blanket if it has a run-in shed?",
    answer:
      "Often not. Access to shelter from wind and rain, combined with a full winter coat and plenty of forage, lets most healthy horses stay comfortable unblanketed in cold weather. Blankets become more justified for clipped, old, sick, or underweight horses, or in prolonged cold wet conditions.",
    answerText:
      "Often not -- shelter plus a full coat and forage keeps most healthy horses comfortable unblanketed. Clipped, old, sick, or underweight horses are more likely to need one.",
  },
]

export default function BlanketingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Winter Care', href: '/care/winter-care' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
          { title: 'Turnout vs Stabling', href: '/care/turnout-vs-stabling' },
        ]}
        hero={{
          title: "Horse Blanketing Guide",
          subtitle:
            "Few topics divide horse owners like blanketing. Horses are far better adapted to cold than most people assume, yet there are real situations where a rug helps. The keys are understanding how a horse stays warm, deciding honestly whether yours needs a blanket, and -- if it does -- getting the weight and fit right. This is reference material to inform your own judgment for your horse and climate.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Blanketing Guide", href: '/care/blanketing' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Horses Stay Warm", href: "#warmth" },
            { label: "When a Horse Needs a Blanket", href: "#when" },
            { label: "Choosing a Weight", href: "#weight" },
            { label: "Fit and Safety", href: "#fit" },
            { label: "The Case for Leaving Them Bare", href: "#bare" },
            { label: "Blanketing Kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Blanket Weights Explained", href: "/tack/blanket-weights" },
              { label: "Winter Care", href: "/care/winter-care" },
              { label: "Best Winter Horse Blankets", href: "/reviews/best-winter-horse-blankets" },
              { label: "Body Clipping", href: "/care/body-clipping" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-blanketing"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-04"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the blanketing checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse blanketing checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the everyday kit — a turnout rug matched to fill weight, a
              light waterproof sheet for an unclipped horse that only needs to
              stay dry, plus lightweight, medium, and heavyweight options so
              you can adjust as the weather changes. Educational checklist,
              not a diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse blanketing checklist"
              subtitle="Email the turnout-rug, waterproof-sheet, and fill-weight order. No spam."
              ctaText="Email my blanketing checklist"
              source="care-blanketing-under-hero"
            />
          </div>

          <h2 id="warmth">How Horses Stay Warm</h2>
          <p>A healthy horse is remarkably cold-hardy. Its winter coat traps an insulating layer of air, and the hairs stand up (piloerection) to thicken that layer; fiber fermentation in the hindgut generates substantial internal heat, effectively an internal furnace fueled by hay. A horse with a full coat, shelter from wind and wet, and plenty of forage is comfortable at temperatures that feel bitter to us. Wind and rain, which flatten the coat and strip its insulation, matter more than cold air alone.</p>

          <h2 id="when">When a Horse Needs a Blanket</h2>
          <ul>
            <li><strong>Clipped horses</strong> that have lost their natural insulation for work need rugs in cold weather.</li>
            <li><strong>Horses without shelter</strong> facing cold combined with wind and persistent rain.</li>
            <li><strong>Old, sick, or underweight horses</strong> that struggle to maintain condition and body heat.</li>
            <li><strong>Horses not acclimatized</strong> to a sudden cold snap, or those recently moved to a colder climate.</li>
            <li><strong>Very fine-coated types</strong> in harsh conditions, used with judgment.</li>
          </ul>

          <h2 id="weight">Choosing a Weight</h2>
          <p>Turnout rugs are rated by fill weight: lightweight (little or no fill, mainly waterproofing), medium (around 150 to 250 grams of fill), and heavyweight (300 grams and up). Match the weight to the temperature, the horse&apos;s coat and condition, and whether it is clipped -- a clipped horse in hard winter weather may need a heavyweight, while a fluffy unclipped horse may need only a light waterproof sheet to stay dry. See the blanket weights guide for the temperature ranges. Over-rugging is as much a welfare issue as under-rugging, since a sweating horse under a heavy rug gets chilled.</p>

          <h2 id="fit">Fit and Safety</h2>
          <ul>
            <li><strong>Measure correctly</strong> from the center of the chest to the point of the buttock to size the rug.</li>
            <li><strong>Check for rubbing</strong> at the shoulders, withers, and chest; a poorly fitted rug causes sores.</li>
            <li><strong>Secure all straps</strong> -- chest, belly surcingles, and leg straps -- adjusted so the horse cannot tangle a leg.</li>
            <li><strong>Inspect daily</strong> for slipping, rubs, damp, and the horse being too hot or too cold underneath.</li>
            <li><strong>Keep rugs clean and waterproofed</strong> so they protect rather than trap moisture against the coat.</li>
          </ul>

          <h2 id="bare">The Case for Leaving Them Bare</h2>
          <p>For many healthy, unclipped horses with shelter and forage, no blanket is the better welfare choice: they regulate their own temperature, move freely, and keep their coats functioning. Blanketing an unclipped horse can flatten its coat and reduce its natural insulation, and a horse that overheats under a rug then chills. The honest question is whether the blanket serves the horse or the owner&apos;s worry.</p>

          <h2 id="kit">Blanketing Kit</h2>
          <p>Everyday physical supplies that match the weight, fit, and waterproof-sheet copy above — a turnout rug rated by fill, a light waterproof sheet when an unclipped horse only needs to stay dry, and lightweight, medium, and heavyweight options so the rug can be swapped as the temperature changes. These are not treatments for a sick, underweight, or shivering horse; a horse that cannot maintain condition or that is suddenly too cold or too hot belongs with your veterinarian, not a heavier rug. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (blanketing kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page turnout / sheet / fill-weight copy, not medical
              or diagnosis hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the blanketing kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page turnout, sheet,
              and fill-weight copy — a turnout blanket, a waterproof sheet, a
              lightweight rug, a medium-weight rug, and a heavyweight rug.
              Everyday physical supplies only. They are not a ranked product
              list, they are not treatments for illness or poor condition, and
              they do not replace a veterinarian. Horses.com earns a commission
              on qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+turnout+blanket?s=care-blanketing"
                amazonLabel="Browse horse turnout blankets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+waterproof+sheet?s=care-blanketing"
                amazonLabel="Browse horse waterproof sheets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+lightweight+blanket?s=care-blanketing"
                amazonLabel="Browse horse lightweight blankets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+medium+weight+blanket?s=care-blanketing"
                amazonLabel="Browse horse medium-weight blankets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+heavyweight+blanket?s=care-blanketing"
                amazonLabel="Browse horse heavyweight blankets on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Mejdell CM, et al. “Horses Can Learn to Use Symbols to Communicate Their Preferences for Blankets.” Applied Animal Behaviour Science, 2016; 184:66–73.</li>
            <li>Autio E, et al. Studies on equine thermoregulation and cold tolerance, various.</li>
            <li>American Association of Equine Practitioners. “Winter Care and Blanketing” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
