import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Endurance Riding — Long-Distance Competition and the Vet Gate",
  description:
    "Reference overview of endurance riding: distances and rides, the central role of veterinary checks, the Arabian, conditioning and crewing, and governing bodies.",
  path: '/disciplines/endurance-riding',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Endurance Riding — Long-Distance Competition and the Vet Gate",
  description:
    "Reference overview of endurance riding: distances and rides, the central role of veterinary checks, the Arabian, conditioning and crewing, and governing bodies.",
  url: 'https://horses.com/disciplines/endurance-riding',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is a vet gate in endurance riding?",
    answer:
      "A vet gate is a mandatory veterinary checkpoint where the horse must pass inspection before continuing -- the veterinarian assesses heart-rate recovery to a set pulse within a time limit, hydration, gut sounds, gait soundness, and metabolic condition. Any horse that does not recover or shows lameness or metabolic trouble is eliminated. These checks are the welfare core of the sport.",
    answerText:
      "A mandatory veterinary checkpoint where the horse must pass -- heart-rate recovery, hydration, gut sounds, soundness, and metabolic condition -- before continuing. Failing horses are pulled.",
  },
  {
    question: "What breed is best for endurance riding?",
    answer:
      "The Arabian and Arabian crosses dominate endurance worldwide for their stamina, efficient cooling, dense bone, and metabolic toughness over long distances. Many other breeds and grade horses complete rides successfully, though, since soundness, efficient movement, fast recovery, and a willing temperament matter as much as breeding.",
    answerText:
      "The Arabian and its crosses dominate for stamina and metabolic toughness, but many breeds complete rides. Soundness, efficiency, recovery, and temperament matter as much as breeding.",
  },
  {
    question: "How far is an endurance ride?",
    answer:
      "Endurance rides range from limited-distance introductory rides of about 25 to 35 miles up to full endurance distances of 50 to 100 miles in a single day, such as the famous 100-mile Tevis Cup. Courses follow natural terrain in loops that return to base for the veterinary checks, with completion in a set time and a sound horse as the goal.",
    answerText:
      "From about 25 to 35 miles for limited-distance rides up to 50 to 100 miles in a day, like the 100-mile Tevis Cup. Completion in time with a sound horse passing the vets is the goal.",
  },
]
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function EnduranceRidingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        hero={{
          title: "Endurance Riding",
          subtitle:
            "Endurance riding is the marathon of equestrian sport -- long-distance races over natural terrain, up to 100 miles in a day, where the guiding principle is that to finish is to win and the horse's welfare is policed at every stage by veterinarians. It rewards fitness, pacing, horsemanship, and a deep partnership built over many miles. This overview covers the distances, the all-important vet gates, the horses, and how riders progress. It describes how the discipline is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Endurance Riding", href: '/disciplines/endurance-riding' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Endurance Riding Is", href: "#what" },
            { label: "Distances and Rides", href: "#distances" },
            { label: "The Vet Gate", href: "#vet" },
            { label: "The Endurance Horse", href: "#horse" },
            { label: "Conditioning and Crewing", href: "#conditioning" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Arabian", href: "/breeds/arabian" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Summer Heat Care", href: "/care/summer-heat-care" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-endurance"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Endurance Riding Is</h2>
          <p>Endurance riding tests a horse and rider over long distances of natural trail against the clock, but with a crucial twist: the horse must pass veterinary inspections throughout, and any horse judged unfit to continue is eliminated. The ethos -- captured in the motto to finish is to win -- places the horse&apos;s soundness and metabolic health above raw speed. It is one of the few equestrian sports where finishing a tough ride is itself a celebrated achievement.</p>

          <h2 id="distances">Distances and Rides</h2>
          <p>Rides are categorized by distance. Limited-distance rides (often around 25 to 35 miles) introduce newcomers. True endurance rides run from 50 miles up to the classic 100-mile, one-day rides such as the Tevis Cup in California. The course follows natural terrain -- mountains, deserts, forests -- and riders pace themselves over loops that return to a base for veterinary checks. Completion within the time limit, with a sound horse that passes the vets, is the core goal.</p>

          <h2 id="vet">The Vet Gate</h2>
          <p>The defining feature of endurance is the veterinary check, or vet gate. At intervals through the ride the horse is presented to a veterinarian who assesses heart rate recovery (the horse must drop to a set pulse within a time limit), hydration, gut sounds, gait soundness, and overall metabolic condition before being allowed to continue. A horse that does not recover or shows lameness or metabolic trouble is pulled. This continuous welfare oversight is central to the sport and shapes how riders pace and care for their horses.</p>

          <h2 id="horse">The Endurance Horse</h2>
          <p>The Arabian and Arabian crosses dominate endurance worldwide, thanks to the breed&apos;s renowned stamina, efficient cooling, dense bone, and metabolic toughness over long distances. That said, many breeds and grade horses complete endurance rides successfully; soundness, an efficient way of going, good recovery, and a willing temperament matter more than breeding alone. The ideal endurance horse is a fit, sound, metabolically efficient athlete that recovers quickly at the vet gates.</p>

          <h2 id="conditioning">Conditioning and Crewing</h2>
          <p>Endurance success is built on months and years of progressive conditioning -- long, slow distance work to build cardiovascular fitness, sound legs, and metabolic efficiency. Hydration and electrolyte management are critical given the distances and heat, so crewing (helpers who meet horse and rider to offer water, electrolytes, food, and cooling) is part of the sport, alongside careful feeding. See the electrolytes and hot-weather care guides. The sport is governed by bodies such as the AERC (American Endurance Ride Conference) and, internationally, the FEI; new riders start with limited-distance rides and an experienced mentor.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Endurance Ride Conference (AERC). Rules and rider resources. aerc.org.</li>
            <li>FEI. Endurance discipline rules. inside.fei.org.</li>
            <li>Nagy A, et al. Research on endurance horse elimination, metabolism, and recovery, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
