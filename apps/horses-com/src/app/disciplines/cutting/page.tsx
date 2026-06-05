import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Cutting — Working a Cow From the Herd",
  description:
    "Reference overview of cutting: separating a cow from the herd, the loose rein and the horse working on its own, the cow horse, scoring, and governing bodies.",
  path: '/disciplines/cutting',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Cutting — Working a Cow From the Herd",
  description:
    "Reference overview of cutting: separating a cow from the herd, the loose rein and the horse working on its own, the cow horse, scoring, and governing bodies.",
  url: 'https://horses.com/disciplines/cutting',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Why do cutting riders drop the reins?",
    answer:
      "Once the rider has committed to a cow, they lower the rein hand to the horse's neck to signal that the horse is now working on its own, and from that point must not visibly guide it with the reins. The horse's bred-in cow sense lets it react to the cow faster than any rider could direct, so loosening the rein lets that instinct take over -- and reining the horse is penalized.",
    answerText:
      "After committing to a cow, the rider lowers the rein hand so the horse works on its own. The horse reacts to the cow faster than a rider could direct, and visibly reining is penalized.",
  },
  {
    question: "What is cow sense in a cutting horse?",
    answer:
      "Cow sense is the bred-in instinct to read and control cattle -- anticipating a cow's movements and blocking them with quick, low, athletic reactions. It is the defining trait of a cutting horse, developed over generations of selective breeding in cutting-bred Quarter Horse lines, and it lets the horse work a cow largely on its own once the rider loosens the rein.",
    answerText:
      "Cow sense is the bred-in instinct to read and control cattle, anticipating and blocking a cow's moves. It defines the cutting horse and lets it work largely on its own.",
  },
  {
    question: "What breed is used for cutting?",
    answer:
      "The American Quarter Horse dominates cutting, with specialized cutting bloodlines -- Doc Bar and his descendants are foundational -- bred over generations for cow instinct, quickness, and the crouching, reactive style of working a cow. These cutting-bred pedigrees are highly valued and also concentrate certain genetic conditions, making genetic testing important in the lines.",
    answerText:
      "The American Quarter Horse, especially specialized cutting bloodlines like Doc Bar's, bred for cow instinct and quickness. These valuable lines also concentrate genetic conditions, so testing matters.",
  },
]

export default function CuttingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Reining', href: '/disciplines/reining' },
          { title: 'Ranch Riding', href: '/disciplines/ranch-riding' },
          { title: 'Western Pleasure', href: '/disciplines/western-pleasure' },
        ]}
        hero={{
          title: "Cutting",
          subtitle:
            "Cutting is the western discipline that most vividly shows a horse thinking for itself. The rider quietly separates a single cow from the herd, then loosens the rein and lets the horse do the rest -- mirroring the cow's every dart and dodge to keep it from rejoining the herd, with the rider largely a passenger. It is a sport built on the deep cow instinct bred into stock horses for generations. This overview describes how cutting is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Cutting", href: '/disciplines/cutting' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Cutting Is", href: "#what" },
            { label: "The Run", href: "#run" },
            { label: "The Cutting Horse", href: "#horse" },
            { label: "Scoring", href: "#scoring" },
            { label: "The Sport and Bloodlines", href: "#sport" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
              { label: "Reining", href: "/disciplines/reining" },
              { label: "Ranch Riding", href: "/disciplines/ranch-riding" },
              { label: "Western Pleasure", href: "/disciplines/western-pleasure" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-cutting"
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

          <h2 id="what">What Cutting Is</h2>
          <p>Cutting grew directly out of ranch work, where a horse and rider would separate (cut) a specific animal from the herd for branding or doctoring. As a sport it preserves that work: the rider drives into a herd of cattle, isolates one cow, and then must keep it separated for a set time while the horse, working largely on its own, blocks the cow&apos;s attempts to return. The drama is in the horse&apos;s instinctive, athletic anticipation of the cow.</p>

          <h2 id="run">The Run</h2>
          <p>In competition a rider has two and a half minutes to work, usually cutting two or three cows, supported by helpers (turnback and herd holders) who keep the cattle positioned. After quietly walking into the herd and committing to a cow, the rider lowers the rein hand to the horse&apos;s neck -- the signal that the horse is now on its own -- and from that moment must not visibly guide the horse with the reins. The horse mirrors the cow&apos;s movements, dropping low and crouching to head it off, and the rider sits the ride.</p>

          <h2 id="horse">The Cutting Horse</h2>
          <p>The cutting horse is the supreme expression of cow sense -- the bred-in instinct to read and control cattle. The American Quarter Horse dominates, with specialized cutting bloodlines (Doc Bar and his descendants are foundational) selected over generations for cow instinct, quickness, and the low, crouching, lightning-reactive style of working a cow. The best cutting horses anticipate the cow and react with an intensity and balance that the rider could never direct in real time, which is precisely why the rein is loosened.</p>

          <h2 id="scoring">Scoring</h2>
          <p>A run is scored, commonly on a scale around 60 to 80 by one or more judges, on how well the horse controls the cow with style, courage, and difficulty. Credit is given for cutting cleanly from the herd, working a challenging cow, deep stops and quick reactions, and loose-rein control where the horse does the work. Penalties apply for losing a cow, reining or visibly guiding the horse once committed, and other faults. High marks reward a horse that takes control of a difficult cow on its own.</p>

          <h2 id="sport">The Sport and Bloodlines</h2>
          <p>Cutting is a major-money western sport: the National Cutting Horse Association (NCHA) sanctions events, and futurities for young horses award very large purses. The breeding industry around cutting is substantial, with cutting-bred Quarter Horse pedigrees commanding high prices -- which also concentrates certain genetic conditions, making genetic testing important in these lines (see the Quarter Horse breed guide). New riders typically learn on a trained cutting horse with a professional, since the timing and feel are difficult to develop without a horse that already knows the job.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Cutting Horse Association (NCHA). Rules and resources. nchacutting.com.</li>
            <li>American Quarter Horse Association. Cutting and cow-horse resources. aqha.com.</li>
            <li>AQHA / UC Davis VGL. Genetic-testing resources for cutting-bred lines (HERDA and others).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
