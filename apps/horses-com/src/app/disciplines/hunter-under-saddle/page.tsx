import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Hunter Under Saddle and Hunters — The Flat and Over Fences",
  description:
    "Reference overview of hunters: hunter under saddle (flat) and over-fences hunters, the emphasis on style and smoothness, the ideal hunter, and judging.",
  path: '/disciplines/hunter-under-saddle',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Hunter Under Saddle and Hunters — The Flat and Over Fences",
  description:
    "Reference overview of hunters: hunter under saddle (flat) and over-fences hunters, the emphasis on style and smoothness, the ideal hunter, and judging.",
  url: 'https://horses.com/disciplines/hunter-under-saddle',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between hunters and jumpers?",
    answer:
      "Hunters are judged subjectively on style, manners, and a smooth, effortless way of going on the flat and over fences, descending from foxhunting ideals. Jumpers are scored objectively on jumping faults and time, where only clearing the fences cleanly and quickly matters and style is irrelevant. Hunters reward beauty and consistency; jumpers reward clear, fast rounds.",
    answerText:
      "Hunters are judged subjectively on style, manners, and smoothness; jumpers are scored objectively on faults and time. Hunters reward effortless beauty; jumpers reward clear, fast rounds.",
  },
  {
    question: "What is hunter under saddle?",
    answer:
      "Hunter under saddle is the flat hunter class, judged at walk, trot, and canter on both reins with no jumping. The judge rewards free, flowing, ground-covering gaits, a level topline, light willing responses, and excellent manners -- a horse that would be a pleasure to ride across country -- and penalizes rough transitions and a labored or artificial way of going.",
    answerText:
      "It is the flat hunter class at walk, trot, and canter with no jumping, rewarding free, ground-covering gaits, a level topline, and excellent manners, and penalizing rough or artificial movement.",
  },
  {
    question: "What makes a good show hunter?",
    answer:
      "The classic show hunter is an elegant, large-framed horse with sweeping, low, ground-covering movement, good jumping form, and above all a calm, consistent temperament. Thoroughbreds defined the type and warmbloods and crosses are now prominent. Because the class rewards the look of an ideal field hunter, a quiet, willing, comfortable ride matters more than raw athletic power.",
    answerText:
      "An elegant, large-framed horse with low, sweeping movement, good jumping form, and a calm, consistent temperament. Temperament and effortless style matter more than raw power.",
  },
]

export default function HunterUnderSaddlePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Equitation', href: '/disciplines/equitation' },
          { title: 'Show Jumping', href: '/disciplines/show-jumping' },
          { title: 'Eventing', href: '/disciplines/eventing' },
        ]}
        hero={{
          title: "Hunter Under Saddle and Hunters",
          subtitle:
            "The hunter disciplines descend from foxhunting and reward the horse that would carry a rider smoothly, safely, and stylishly across the hunt field. Unlike the jumper world, where only clear rounds and fast times count, hunters are judged subjectively on style, manners, and a beautiful, effortless way of going on the flat and over fences. This overview describes how the hunter disciplines are competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Hunter Under Saddle", href: '/disciplines/hunter-under-saddle' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Hunters Are", href: "#what" },
            { label: "Hunter Under Saddle (Flat)", href: "#flat" },
            { label: "Hunters Over Fences", href: "#fences" },
            { label: "The Ideal Hunter", href: "#horse" },
            { label: "Judging and Showing", href: "#judging" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Show Jumping", href: "/disciplines/show-jumping" },
              { label: "Equitation", href: "/disciplines/equitation" },
              { label: "Thoroughbred", href: "/breeds/thoroughbred" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-hunter"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What the Hunters Are</h2>
          <p>The hunters are a group of English show classes rooted in the traditions of foxhunting, where the prized horse was a calm, brave, comfortable mount with smooth gaits and good jumping form. In the show ring this translates into subjective judging of style and manners rather than the objective faults-and-time scoring of show jumping. There are flat classes (hunter under saddle) and over-fences classes, and the same qualities -- smoothness, consistency, and effortless style -- are sought in both.</p>

          <h2 id="flat">Hunter Under Saddle (Flat)</h2>
          <p>Hunter under saddle is the flat class judged at walk, trot, and canter on both reins, with no jumping. The judge looks for a horse with free, flowing, ground-covering gaits, a level topline, light and willing responses, and impeccable manners -- a horse that would be a pleasure to ride across country. Smoothness, rhythm, and an attractive, balanced way of going win, while rough transitions, resistance, and a labored or artificial way of going are penalized.</p>

          <h2 id="fences">Hunters Over Fences</h2>
          <p>Over-fences hunter classes ask the horse to jump a course of natural-looking fences with style, evenness, and good form. The ideal is a smooth, even pace held throughout, correct distances met out of stride, a round bascule (arc) over each fence with a tidy front-leg technique, and quiet, unobtrusive riding. Knockdowns, refusals, awkward distances, and an uneven or rushed pace hurt the score. The whole picture should look effortless, as though the horse is jumping out of a flowing, unhurried rhythm.</p>

          <h2 id="horse">The Ideal Hunter</h2>
          <p>The classic show hunter is an elegant, large-framed horse with sweeping, low, ground-covering movement, a calm temperament, and good jumping form. Thoroughbreds historically defined the type, with warmbloods and Thoroughbred crosses now prominent for their movement and rideability. Temperament is paramount: the hunter must be quiet, consistent, and a willing, comfortable ride, since the class rewards the appearance of an ideal field hunter rather than raw athletic power.</p>

          <h2 id="judging">Judging and Showing</h2>
          <p>Because hunters are judged subjectively, scores reflect a judge&apos;s assessment of the overall picture -- style, manners, movement, jumping form, and consistency -- typically on a numerical scale, with the most polished, effortless round winning. The discipline spans local shows to major rated competition under bodies such as the USEF and USHJA. Hunters, equitation, and jumpers together make up the hunter/jumper world; many riders move between hunters and the related equitation division. A local hunter/jumper barn is the route into the sport.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>United States Hunter Jumper Association (USHJA). Hunter rules and resources. ushja.org.</li>
            <li>United States Equestrian Federation (USEF). Hunter division rules. usef.org.</li>
            <li>British Show Horse and hunter society resources, current editions.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
