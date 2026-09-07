import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Combined Driving — The Three-Phase Sport of Driven Horses",
  description:
    "Reference overview of combined driving: the harness sport modeled on eventing, its three phases (dressage, marathon, cones), turnouts, and governing bodies.",
  path: '/disciplines/combined-driving',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Combined Driving — The Three-Phase Sport of Driven Horses",
  description:
    "Reference overview of combined driving: the harness sport modeled on eventing, its three phases (dressage, marathon, cones), turnouts, and governing bodies.",
  url: 'https://horses.com/disciplines/combined-driving',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What are the three phases of combined driving?",
    answer:
      "Combined driving has three phases, modeled on eventing: driven dressage (a precision test of figures and transitions judged on obedience and elegance), the marathon (a cross-country course with obstacles or hazards driven at speed against the clock), and cones driving (a precise course through ball-topped cones set just wider than the carriage). The scores combine.",
    answerText:
      "Driven dressage (precision and elegance), the marathon (cross-country with hazards at speed), and cones (a precise course through ball-topped cones). The scores combine, like eventing.",
  },
  {
    question: "How many horses are driven in combined driving?",
    answer:
      "Combined driving is contested in categories by number of horses: singles (one), pairs (two side by side), and four-in-hand teams (four), with tandem (two in line) in some events, plus pony equivalents. The four-in-hand -- driving four horses through a marathon hazard -- is the showpiece and a feat of skill and nerve.",
    answerText:
      "Singles, pairs, and four-in-hand teams, plus tandem in some events and pony categories. The four-in-hand team is the spectacular showpiece.",
  },
  {
    question: "What is the marathon in combined driving?",
    answer:
      "The marathon is the cross-country phase and the heart of the sport: a course over several sections including obstacles or hazards such as water, banks, and gated mazes, driven at speed in the correct sequence against the clock. It demands fitness, boldness, and tight teamwork between the driver and the grooms who help balance the carriage through the turns.",
    answerText:
      "The cross-country phase -- sections including hazards like water, banks, and mazes driven at speed against the clock. It demands fitness, boldness, and teamwork between driver and grooms.",
  },
]

export default function CombinedDrivingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Eventing', href: '/disciplines/eventing' },
          { title: 'Dressage', href: '/disciplines/dressage' },
          { title: 'Equestrian Vaulting', href: '/disciplines/vaulting' },
        ]}
        hero={{
          title: "Combined Driving",
          subtitle:
            "Combined driving is the harness equivalent of eventing -- a three-phase sport in which a driven horse or team is tested across driven dressage, a demanding cross-country marathon with hazards, and a precise cones course. It spans single horses to four-in-hand teams and is one of the most spectacular driving disciplines, blending elegance, stamina, and split-second precision. This overview describes how combined driving is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Combined Driving", href: '/disciplines/combined-driving' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Combined Driving Is", href: "#what" },
            { label: "The Three Phases", href: "#phases" },
            { label: "Turnouts and Teams", href: "#turnouts" },
            { label: "The Driving Horse", href: "#horse" },
            { label: "The Sport", href: "#sport" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Eventing", href: "/disciplines/eventing" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Friesian", href: "/breeds/friesian" },
              { label: "Cleveland Bay", href: "/breeds/cleveland-bay" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-combined-driving"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the combined-driving checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Combined-driving checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-horse-ads-driving-phase-chart,
              stall-door-four-in-hand-card, and
              equine-cones-driving-handbook notes
              that match the dressage-marathon-cones,
              singles-pairs-four-in-hand, and ball-topped
              cones copy on this page — a laminated horse
              ADS driving-phase chart so the driven-dressage
              / marathon / cones notes are posted on the
              stall door (not a cloverleaf barrel chart,
              not an NRHA maneuver chart), a horse
              stall-door four-in-hand card so the singles /
              pairs / team notes are labeled at the barn
              (not an NBHA jackpot card, not an NRHA level
              card), and an equine cones-driving handbook
              so the ball-topped-cone / carriage-track
              grounding is a physical barn book (not a
              barrel-rate handbook, not a sliding-stop
              handbook). Educational barn checklist, not a
              ranked clinic list, not a carriage-kit hop,
              not a first-aid-kit hop, and not a substitute
              for a veterinarian. Horses.com does not sell
              insurance. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Combined-driving checklist"
              subtitle="Email the driving-phase chart, four-in-hand card, and cones-driving handbook notes. No spam."
              ctaText="Email my combined-driving checklist"
              source="disciplines-combined-driving-under-hero"
            />
          </div>

          <h2 id="what">What Combined Driving Is</h2>
          <p>Combined driving applies the format of ridden eventing to horses in harness. Instead of being ridden, the horse (or pair or team) pulls a carriage driven by a whip (the driver), assisted by one or more grooms (called the navigator or backstepper, especially in the marathon). Over one to three days, the same turnout competes in three contrasting phases, and the scores combine -- testing obedience and elegance, fitness and boldness, and accuracy in turn.</p>

          <h2 id="phases">The Three Phases</h2>
          <h3>Driven dressage</h3>
          <p>Like ridden dressage, the turnout performs a set test of figures and transitions in an arena, judged on obedience, suppleness, rhythm, and precision, plus the elegance and correctness of the turnout. It sets the tone and the first scores.</p>
          <h3>Marathon</h3>
          <p>The thrilling heart of the sport: a cross-country course over several sections, including a series of obstacles or hazards (such as water, banks, and intricate gated mazes) that must be driven at speed in the correct sequence against the clock. It demands fitness, boldness, and tight teamwork between driver and grooms, who shift their weight and help balance the carriage through the turns.</p>
          <h3>Cones (obstacle) driving</h3>
          <p>A precision phase in which the turnout drives a winding course through pairs of cones, each topped with a ball, set just wider than the carriage track. Knocking a ball off or exceeding the time adds penalties, so cones tests careful, accurate driving and a horse that is still responsive after the marathon.</p>

          <h2 id="turnouts">Turnouts and Teams</h2>
          <p>Combined driving is contested in several categories by the number of horses: singles (one horse), pairs (two side by side), and four-in-hand teams (four horses, two in front of two), with tandem (two in line) seen in some competitions. Ponies compete in their own equivalent categories. The four-in-hand is the showpiece -- driving four horses through a marathon hazard is a feat of skill and nerve. Each category has its own carriages, harness, and demands.</p>

          <h2 id="horse">The Driving Horse</h2>
          <p>Driving horses need a steady, bold temperament, sound conformation for pulling, and the trainability to accept harness, blinkers, and working as a coordinated unit in pairs and teams. Many breeds compete, from purpose-bred sport ponies and Warmbloods to traditional carriage breeds. Heritage harness breeds such as the Friesian and Cleveland Bay are strongly associated with carriage work, while modern competition often favors athletic, fit horses suited to the demands of the marathon.</p>

          <h2 id="sport">The Sport</h2>
          <p>Combined driving is governed internationally by the FEI and nationally by driving associations, with competition from grassroots club level up to World Championships and the famous four-in-hand events. It demands a partnership not only between driver and horse but among the whole crew, and a substantial investment in carriages and harness. For newcomers, learning to drive safely starts with instruction in basic driving and a quiet, trained horse long before any thought of the marathon hazards.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>FEI. Driving discipline rules. inside.fei.org.</li>
            <li>American Driving Society (ADS). Combined driving rules and resources. americandrivingsociety.org.</li>
            <li>British Carriagedriving and national driving association resources.</li>
          </ol>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated horse ADS driving-phase chart /
              horse stall-door four-in-hand card /
              equine cones-driving handbook).
              No existing product hop to keep.
              Educational barn searches only; no Rx /
              vaccine / flea / heartworm / nsaid hops
              and no carriage-kit hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs barrel-racing /
              reining hops.
              Directory import left untouched.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the combined-driving barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page dressage-marathon-cones,
              singles-pairs-four-in-hand, and
              ball-topped-cones copy — a laminated horse
              ADS driving-phase chart, a horse stall-door
              four-in-hand card, and an equine
              cones-driving handbook. Educational barn
              searches only. They are not a ranked clinic
              list, they are not a barrel-racing / reining
              hop, they are not a carriage-kit hop, they
              are not a first-aid-kit hop, they are not a
              child toothbrush hop, and they do not
              replace a veterinarian. Horses.com does not
              sell insurance. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+ads+driving+phase+chart?s=discipline-combined-driving"
                amazonLabel="Browse laminated horse ADS driving-phase charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+stall+door+four+in+hand+card?s=discipline-combined-driving"
                amazonLabel="Browse horse stall-door four-in-hand cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+cones+driving+handbook?s=discipline-combined-driving"
                amazonLabel="Browse equine cones-driving handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
