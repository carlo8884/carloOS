import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
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
        </div>
      </ArticleLayout>
    </>
  )
}
