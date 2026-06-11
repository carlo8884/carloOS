import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Reading Horse Body Language — Ears, Eyes, Tail, and Posture",
  description:
    "Reference guide to equine body language: how to read ears, eyes, muzzle, tail, and posture, signs of fear and pain, and why understanding it keeps you safe.",
  path: '/ownership/reading-body-language',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Reading Horse Body Language — Ears, Eyes, Tail, and Posture",
  description:
    "Reference guide to equine body language: how to read ears, eyes, muzzle, tail, and posture, signs of fear and pain, and why understanding it keeps you safe.",
  url: 'https://horses.com/ownership/reading-body-language',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What do a horse's ears tell you?",
    answer:
      "The ears are the most expressive signal: pricked sharply forward shows attention or interest ahead; flicking and swiveling shows the horse monitoring its surroundings or listening back to a rider; pinned flat against the neck signals anger, threat, or pain and warns of a possible bite or kick; and lolling loosely to the side usually means relaxation or dozing.",
    answerText:
      "Pricked forward shows interest; flicking and swiveling shows monitoring or listening; pinned flat warns of anger, threat, or pain and a possible bite or kick; lolling sideways means relaxation.",
  },
  {
    question: "How can I tell if a horse is afraid or tense?",
    answer:
      "A frightened or tense horse stands tall and rigid with a raised head, tight muscles, flared nostrils, and often a wide eye showing white, with a clamped tail and weight ready to move -- a horse coiled to flee. Reading the whole posture together with the ears, eyes, and tail is more reliable than any single signal.",
    answerText:
      "It stands tall and rigid, head up, muscles tight, nostrils flared, often showing the whites of the eyes with a clamped tail -- coiled to flee. Read the whole posture, not one signal.",
  },
  {
    question: "Can body language tell me if a horse is in pain?",
    answer:
      "Yes, and it is one of the most important uses, because horses hide pain. Pain shows in a tense, withdrawn expression with tight muzzle and eye lines (the grimace scale), reluctance to move or weight a limb, restlessness, lying down more, dullness, and pinned ears or aggression when a sore area is touched. Subtle, persistent changes from normal often signal pain before anything dramatic.",
    answerText:
      "Yes -- a tense, withdrawn expression with tight muzzle and eye lines, reluctance to move, restlessness, dullness, and pinned ears or aggression when touched. Subtle persistent changes often signal pain.",
  },
]

export default function BodyLanguagePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
          { title: 'Grooming a Horse', href: '/care/grooming' },
          { title: 'Equine First-Aid Kit', href: '/ownership/first-aid-kit' },
        ]}
        hero={{
          title: "Reading Horse Body Language",
          subtitle:
            "Horses communicate constantly through their bodies, and learning to read that language is one of the most valuable -- and safety-critical -- skills an owner can develop. A horse signals fear, relaxation, pain, and intention through its ears, eyes, muzzle, tail, and whole posture long before it acts. Understanding these signals lets you respond appropriately, build trust, and stay safe around a large prey animal. This is reference material to complement hands-on experience.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Reading Body Language", href: '/ownership/reading-body-language' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why It Matters", href: "#why" },
            { label: "The Ears", href: "#ears" },
            { label: "Eyes and Muzzle", href: "#face" },
            { label: "The Tail", href: "#tail" },
            { label: "Whole-Body Posture", href: "#posture" },
            { label: "Signs of Pain", href: "#pain" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Halters and Lead Ropes", href: "/tack/halters-and-lead-ropes" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-body-language"
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

          <h2 id="why">Why It Matters</h2>
          <p>The horse is a large, powerful prey animal whose first instinct in fear is to flee, and it broadcasts its emotional state through subtle and not-so-subtle body signals. Reading those signals lets a handler anticipate a spook, defuse tension before it becomes a kick or bite, recognize discomfort or pain, and build the trust that comes from responding to what the horse is saying. It is fundamental to both safety and good horsemanship -- the horse is always communicating, and the skill is learning to listen.</p>

          <h2 id="ears">The Ears</h2>
          <p>The ears are the most expressive part of the horse and the first thing to watch. Ears pricked sharply forward show attention or interest in something ahead; ears flicking and swiveling show the horse monitoring its surroundings (and often a relaxed, working attention, as in a ridden horse listening back to the rider); ears pinned flat back against the neck signal anger, threat, or pain and are a clear warning of a possible bite or kick; and ears lolling loosely to the side often indicate relaxation or dozing.</p>

          <h2 id="face">Eyes and Muzzle</h2>
          <p>The eyes and muzzle add detail. A soft, relaxed eye with a calm expression signals contentment, while a wide eye showing the white (when not normal for that horse) and a tense, worried expression signal fear or stress. The muzzle and mouth speak too: tight, pinched nostrils and a clamped mouth indicate tension or pain, a drooping lower lip and soft muzzle show relaxation or dozing, and tension lines around the eyes and muzzle are increasingly used in equine pain scoring (the horse grimace scale).</p>

          <h2 id="tail">The Tail</h2>
          <p>The tail reflects mood and can be a safety signal. A relaxed, gently swinging tail shows a calm horse; a clamped tail held tight to the buttocks indicates fear, tension, or cold; and a swishing or wringing tail signals irritation, annoyance, or discomfort -- a rapidly swishing tail under saddle can indicate the horse is unhappy or in pain. A high-carried tail shows excitement or alarm. Persistent tail swishing or clamping during handling or riding is worth investigating rather than ignoring.</p>

          <h2 id="posture">Whole-Body Posture</h2>
          <p>Step back and read the whole horse. A relaxed horse stands with a soft topline, a lowered or level neck, a resting hind leg, and a loose, settled outline. A tense or frightened horse stands tall and rigid, head up, muscles tight, weight ready to move, often with a raised head and flared nostrils -- a horse coiled to flee. A horse rapidly shifting weight, pawing, or unable to settle is signaling distress or discomfort. The whole picture is more reliable than any single signal read in isolation.</p>

          <h2 id="pain">Signs of Pain</h2>
          <p>Recognizing pain is one of the most important uses of body-language reading, because horses are stoic and often hide it. Pain shows in a tense, withdrawn expression with tight muzzle and eye lines (captured in equine grimace scales), reluctance to move or weight a limb, restlessness, lying down more than usual, dullness and disinterest, pinned ears or aggression when a sore area is touched, and changes in posture such as the colic or laminitis stances. Subtle, persistent changes in a horse&apos;s normal demeanor often signal pain before anything dramatic happens, and warrant a closer look or a veterinary call.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Dalla Costa E, et al. “Development of the Horse Grimace Scale (HGS) as a Pain Assessment Tool.” PLOS ONE, 2014.</li>
            <li>McGreevy P. Equine Behavior: A Guide for Veterinarians and Equine Scientists, Elsevier.</li>
            <li>International Society for Equitation Science. Equine welfare and behavior resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
