import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Buying Your First Horse — A Practical Buyer’s Guide",
  description:
    "Reference guide to buying a first horse: being honest about experience, choosing temperament over flash, where to look, and the pre-purchase exam.",
  path: '/ownership/buying-your-first-horse',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Buying Your First Horse — A Practical Buyer’s Guide",
  description:
    "Reference guide to buying a first horse: being honest about experience, choosing temperament over flash, where to look, and the pre-purchase exam.",
  url: 'https://horses.com/ownership/buying-your-first-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "Should a beginner buy a young horse?",
    answer:
      "Generally no. An inexperienced rider needs a calm, well-trained, forgiving horse that already knows its job, not a young or green horse that needs an experienced trainer. The saying green plus green equals black and blue captures the danger -- an inexperienced rider and inexperienced horse together are an unsafe combination. Buy for your current level, not your ambitions.",
    answerText:
      "No -- beginners need a calm, trained, forgiving horse, not a green one. Green rider plus green horse is unsafe (green plus green equals black and blue). Buy for your current level.",
  },
  {
    question: "What matters most when buying a first horse?",
    answer:
      "Temperament and training matter most -- far more than looks, breeding, or athletic potential. A sensible, quiet, honest older horse that loads, stands for the farrier, hacks out, and forgives mistakes is ideal for a new owner, while a flashy or bargain-priced young prospect is the classic trap. Prize been-there-done-that over talent.",
    answerText:
      "Temperament and training, far above looks or breeding. A sensible, forgiving, been-there-done-that horse beats a flashy or cheap young prospect for a first-time owner.",
  },
  {
    question: "Do I really need a pre-purchase vet exam?",
    answer:
      "Yes. An independent pre-purchase examination by a veterinarian surfaces soundness and health issues an inexperienced buyer would miss, informing your decision and the price. It does not guarantee a perfect horse, but skipping it risks discovering a serious, expensive problem after you buy. The exam costs far less than that mistake.",
    answerText:
      "Yes -- an independent vet exam surfaces soundness and health issues you would miss and informs your decision. Skipping it risks discovering an expensive problem after buying.",
  },
]

export default function BuyingFirstHorsePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Ownership Hub', href: '/ownership', category: 'Horse Ownership' },
          { title: 'The Pre-Purchase Exam', href: '/ownership/pre-purchase-exam' },
          { title: 'Leasing a Horse', href: '/ownership/leasing-a-horse' },
          { title: 'Cost of Owning a Horse', href: '/ownership/cost-of-owning-a-horse' },
        ]}
        hero={{
          title: "Buying Your First Horse",
          subtitle:
            "Buying a first horse is exciting and easy to get wrong. The classic first-timer mistakes -- buying on looks, buying young or green, buying too much horse, and skipping the vet check -- lead to mismatches that are unsafe and heartbreaking. The path to a good first horse runs through honesty about your own level, a priority on temperament, and bringing experienced help. This is reference material to inform the process alongside a trainer and veterinarian.",
          category: "Horse Ownership",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Ownership", href: "/ownership" },
          { name: "Buying Your First Horse", href: '/ownership/buying-your-first-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Be Honest About Your Level", href: "#honest" },
            { label: "Temperament Over Flash", href: "#temperament" },
            { label: "Where to Look", href: "#where" },
            { label: "Trying a Horse", href: "#trying" },
            { label: "The Pre-Purchase Exam", href: "#vetting" },
            { label: "Bring Experienced Help", href: "#help" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "The Pre-Purchase Exam", href: "/ownership/pre-purchase-exam" },
              { label: "Cost of Owning a Horse", href: "/ownership/cost-of-owning-a-horse" },
              { label: "Leasing a Horse", href: "/ownership/leasing-a-horse" },
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="ownership-buying"
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

          <h2 id="honest">Be Honest About Your Level</h2>
          <p>The single most important step is an honest assessment of your own experience and goals. A first-time or returning rider needs a calm, well-trained, forgiving horse that already knows its job -- the opposite of the young, green, or athletic prospect that appeals to ambition. The painful truth behind many failed first purchases is the saying that green plus green equals black and blue: an inexperienced rider and an inexperienced horse are a dangerous combination. Buy the horse for who you are now, not who you hope to become.</p>

          <h2 id="temperament">Temperament Over Flash</h2>
          <p>For a first horse, temperament and training trump looks, breeding, and athletic potential. A plain, older, been-there-done-that horse that loads, stands for the farrier, hacks out alone and in company, and forgives a beginner&apos;s mistakes is worth far more to a new owner than a beautiful, talented, complicated horse. Sensible, quiet, and honest are the qualities to prize. The flashy or bargain-priced young horse is the classic first-timer trap.</p>

          <h2 id="where">Where to Look</h2>
          <p>Good first horses are found through trainers and instructors who know their students and the local market, through reputable sellers and lesson barns, and by word of mouth in the riding community. Online classifieds are full of horses but also of misrepresentation, so they are best used with experienced help and healthy skepticism. Be wary of sellers who pressure for a quick sale, will not let you visit more than once, or are evasive about the horse&apos;s history.</p>

          <h2 id="trying">Trying a Horse</h2>
          <ul>
            <li><strong>Visit more than once</strong> and at different times, ideally seeing the horse caught, groomed, tacked up, and ridden.</li>
            <li><strong>See it ridden first</strong> by the seller before you get on, and ride it yourself in the way you actually intend to use it.</li>
            <li><strong>Handle it on the ground</strong> -- leading, tying, picking up feet, and loading -- since this is most of horse ownership.</li>
            <li><strong>Test the real-world tasks</strong> such as hacking out alone, standing still, and behaving in traffic or away from other horses if relevant.</li>
            <li><strong>Watch for evasion</strong> such as a horse that is always already tacked up, or that you are not allowed to try properly.</li>
          </ul>

          <h2 id="vetting">The Pre-Purchase Exam</h2>
          <p>Never skip the pre-purchase (vetting) examination. An independent veterinarian -- ideally not the seller&apos;s vet -- examines the horse for soundness and health, identifying problems that affect its suitability and value. The exam does not guarantee a perfect horse, but it surfaces issues an inexperienced buyer would miss and informs the decision. Spending on a vet check before buying is far cheaper than discovering a serious problem afterward. See the dedicated pre-purchase exam guide.</p>

          <h2 id="help">Bring Experienced Help</h2>
          <p>Take a knowledgeable, trusted, and ideally independent horseperson -- your instructor or an experienced friend with no stake in the sale -- to view and try any horse. They will see things a first-timer cannot, ask the right questions, ride the horse, and provide a sober second opinion against the emotional pull of falling for a horse. Combined with an honest self-assessment, a temperament-first priority, and a proper vetting, experienced help is the best protection against a costly first-horse mistake.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. “Buying a Horse and Pre-Purchase Exams” owner resources. aaep.org.</li>
            <li>British Horse Society. Guidance on buying a horse.</li>
            <li>Rural and agricultural extension services. First-horse buyer resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
