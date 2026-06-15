import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Best Small Dog Breeds for Apartments (2026)',
  description: 'What makes a dog apartment-suited — size, energy, barking, exercise — plus profiles of small breeds that tend to thrive in smaller homes.',
  path: '/breeds/best-small-dogs-for-apartments',
  type: 'article',
})

const FAQS = [
  {
    question: 'What makes a dog breed good for apartments?',
    answer: 'Apartment suitability is less about size alone and more about the combination of four traits: a manageable physical size, a moderate-to-low energy level that does not demand acres of running room, a temperament that is not prone to nuisance barking (an important factor when you share walls), and exercise needs you can realistically meet with daily walks and play rather than a yard. A calm, quiet large dog can suit an apartment better than a high-strung small one — so judge the individual breed profile, and the individual dog, rather than weight on its own.',
  },
  {
    question: 'Do small dogs bark more than big dogs?',
    answer: 'Not inherently, but some small breeds are more vocal than others, and in an apartment barking matters more because neighbors are close. Certain toy and terrier-type breeds are alert, watchful, and quick to sound off, while others are notably quiet. Barking tendency is partly breed-typical and largely trainable — early socialization, mental enrichment, and consistent training reduce nuisance barking in most dogs. When choosing for an apartment, weigh a breed\'s typical alertness alongside your willingness to train.',
  },
  {
    question: 'Which small dogs need the least exercise?',
    answer: 'Several companion breeds are content with daily walks plus indoor play rather than intense exercise — brachycephalic (flat-faced) companions in particular should not be over-exerted, especially in heat, because their breathing is less efficient. That said, "low exercise" is never "no exercise": every dog needs daily movement and mental stimulation, and an under-exercised dog of any breed is more likely to bark, chew, and act out indoors. Match the breed\'s needs honestly to the time you can give.',
  },
  {
    question: 'Are small dogs easier to potty train in apartments?',
    answer: 'Not necessarily — and some small breeds have a reputation for being slower to house-train. Apartments add a wrinkle: getting downstairs and outside quickly is harder, so puppies and small-bladdered adults may need more frequent trips or a consistent indoor backup plan during the training phase. House-training success depends far more on routine, supervision, and patience than on breed. Plan for the logistics of your specific building, not just the dog.',
  },
  {
    question: 'Can a high-energy dog live in an apartment?',
    answer: 'Yes, if its exercise and mental-stimulation needs are genuinely met — but it is harder, and high-drive breeds are the ones most likely to develop problem behaviors when those needs go unmet. For most first-time or time-limited apartment owners, a moderate-to-low energy companion breed is a more forgiving choice. If you are set on an active dog in a small space, be honest about whether you can deliver vigorous daily exercise and enrichment, and consult our breed guide to match temperament to your routine.',
  },
]

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Best Small Dog Breeds for Apartments',
  description: 'What makes a breed apartment-suited and a calibrated look at small dog breeds that tend to do well in smaller homes — with links to full breed profiles.',
  url: 'https://dog.com/breeds/best-small-dogs-for-apartments',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
})
const faqSchema = buildFAQSchema({ questions: FAQS })
const schema = combineSchemas(articleSchema, faqSchema)

export default function BestSmallDogsForApartmentsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="breed"
      hero={{ title: 'Best Small Dog Breeds for Apartments', subtitle: 'Apartment living rewards the right temperament more than the smallest size. Here is what actually makes a breed apartment-suited — size, energy, barking, and exercise needs — followed by profiles of small breeds that tend to thrive in smaller homes, with links to full breed guides.', category: 'Breeds', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Best Small Dogs for Apartments', href: '/breeds/best-small-dogs-for-apartments' }]}
      relatedLinks={[{ title: 'Dog Breed Guide', href: '/breeds', category: 'Hub' }, { title: 'Breed-Match Wizard', href: '/breeds/match', category: 'Tool' }, { title: 'Compare Breeds', href: '/compare', category: 'Tool' }, { title: 'French Bulldog', href: '/breeds/french-bulldog', category: 'Breeds' }, { title: 'Cavalier King Charles', href: '/breeds/cavalier-king-charles', category: 'Breeds' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'The Short Answer', href: '#short' }, { label: 'What Makes a Breed Apartment-Suited', href: '#what' }, { label: 'The Breeds', href: '#breeds' }, { label: 'Before You Choose', href: '#before' }, { label: 'Next Steps', href: '#now' }]} />
        <RelatedLinks title="Related" links={[{ label: 'Breed-Match Wizard', href: '/breeds/match' }, { label: 'Compare Breeds', href: '/compare' }, { label: 'Dog Breed Guide', href: '/breeds' }, { label: 'Excessive Barking', href: '/training/excessive-barking' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="breeds-apartment-dogs" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="short">The Short Answer</h2>
        <p>The best apartment dogs are not simply the smallest — they are the ones whose <strong>energy, noise, and exercise needs fit a shared-wall, no-yard life.</strong> A calm, quiet companion breed in a one-bedroom is a better match than a vocal, high-drive dog of the same weight. Size helps, but temperament decides. Below are the four traits that actually matter, then a set of small breeds that tend to do well in apartments — each linked to its full profile where we have one.</p>
        <p>As always, individual dogs vary, and the right choice depends on your routine. The <a href="/breeds/match">breed-match wizard</a> can turn these trade-offs into a personalized shortlist.</p>

        <h2 id="what">What Makes a Breed Apartment-Suited</h2>
        <p>Weigh these four factors together — no single one is decisive:</p>
        <ul>
          <li><strong>Size, in context.</strong> A smaller dog is easier to maneuver in tight spaces and on stairs, but a mellow medium dog can suit an apartment better than a frantic toy. Use size as one input, not the whole answer.</li>
          <li><strong>Energy level.</strong> Moderate-to-low energy breeds settle indoors between walks; very high-energy herding and sporting breeds need a job and room to run, and tend to struggle without it.</li>
          <li><strong>Noise and barking tendency.</strong> This matters more in an apartment than anywhere else. Some breeds are alert and vocal; others are notably quiet. Barking is also trainable — see our <a href="/training/excessive-barking">excessive barking</a> guide.</li>
          <li><strong>Exercise needs you can actually meet.</strong> &ldquo;Apartment-friendly&rdquo; never means &ldquo;no exercise.&rdquo; It means the daily walks and play you can realistically provide are enough. An under-exercised dog of any breed becomes a problem dog indoors.</li>
        </ul>
        <p>You can compare these traits across our full library in the <a href="/breeds">breed guide&apos;s at-a-glance table</a>, or weigh two candidates head-to-head with the <a href="/compare">breed comparison tool</a>.</p>

        <h2 id="breeds">Small Breeds That Tend to Thrive in Apartments</h2>
        <p>The breeds below are commonly well-suited to apartment life for the reasons noted. Treat each as a starting point and read the full profile, where available, before deciding — temperament varies by individual dog and by breeding line.</p>
        <ul>
          <li><strong><a href="/breeds/cavalier-king-charles">Cavalier King Charles Spaniel</a>.</strong> A gentle, affectionate companion that bonds closely and is generally adaptable to smaller homes, with moderate exercise needs met by daily walks and play.</li>
          <li><strong><a href="/breeds/french-bulldog">French Bulldog</a>.</strong> Low-to-moderate energy and famously easygoing, the Frenchie is a popular apartment dog — but it is brachycephalic (flat-faced), so avoid over-exertion and heat, and review the breed&apos;s known health considerations before committing.</li>
          <li><strong><a href="/breeds/shih-tzu">Shih Tzu</a>.</strong> A small companion breed bred for indoor life, content with modest exercise; coat care is the main ongoing commitment. Also brachycephalic, so the same heat-and-exertion caution applies.</li>
          <li><strong><a href="/breeds/yorkshire-terrier">Yorkshire Terrier</a>.</strong> Tiny and portable with modest space needs, but terrier-alert — early training helps keep barking in check in a shared building.</li>
          <li><strong><a href="/breeds/dachshund">Dachshund</a>.</strong> Small and adaptable to apartment living, though watchful and prone to alert-barking; note the breed&apos;s back-health (IVDD) considerations and limit stair and jumping strain.</li>
          <li><strong><a href="/breeds/bulldog">Bulldog</a>.</strong> Famously low-energy and calm indoors, which suits small spaces — but, like other flat-faced breeds, it should not be over-exercised in heat and has notable breed health considerations.</li>
          <li><strong>Maltese.</strong> A small, affectionate toy companion with modest exercise needs that adapts well to apartments; like many toys, it benefits from training to manage alert-barking.</li>
          <li><strong>Bichon Frise.</strong> A cheerful, low-shedding companion breed of manageable size that generally does well in smaller homes with daily walks and play.</li>
          <li><strong>Havanese.</strong> A people-oriented toy breed that is adaptable and affectionate, with moderate exercise needs suited to apartment routines.</li>
          <li><strong>Boston Terrier.</strong> Compact, friendly, and moderate in energy; another flat-faced breed, so apply the usual heat-and-exertion caution.</li>
        </ul>
        <p>For the breeds above that link out, the full profile covers temperament, health predispositions, and exercise needs in depth. For the others, the <a href="/breeds">breed guide</a> and <a href="/breeds/match">match wizard</a> are the best next stop.</p>

        <h2 id="before">Before You Choose</h2>
        <p>A few honest checks that matter more in an apartment than a house:</p>
        <ul>
          <li><strong>Confirm your building&apos;s pet policy</strong> — breed, size, and number limits are common, and some buildings restrict specific breeds regardless of temperament.</li>
          <li><strong>Plan the potty logistics.</strong> Getting outside fast is harder from a third-floor unit; budget for frequent trips during house-training.</li>
          <li><strong>Account for flat-faced (brachycephalic) breeds&apos; health.</strong> Several popular apartment breeds are brachycephalic. They can be wonderful in small spaces but have real breathing-related health considerations — discuss them with your veterinarian before choosing.</li>
          <li><strong>Be realistic about barking and alone-time.</strong> Shared walls amplify both. Factor in training and, for anxious dogs, our <a href="/training/excessive-barking">barking</a> guidance.</li>
        </ul>

        <h2 id="now">Next Steps</h2>
        <ol>
          <li><strong>Shortlist by trait, not just cuteness.</strong> Use the <a href="/breeds">breed guide&apos;s at-a-glance table</a> to compare size, energy, and shedding across candidates.</li>
          <li><strong>Run the <a href="/breeds/match">breed-match wizard</a></strong> to turn your space, schedule, and tolerance for barking into a personalized top-three.</li>
          <li><strong>Compare your two finalists</strong> head-to-head with the <a href="/compare">breed comparison tool</a>.</li>
          <li><strong>Talk to your veterinarian</strong> about any breed-specific health considerations — especially for flat-faced breeds — before you commit.</li>
        </ol>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} />

        <p className="text-sm text-gray-500 mt-8"><em>This article is general editorial guidance from the Dog.com editorial team and is not veterinary advice. Breed suitability reflects breed-typical temperament, not a guarantee — every individual dog varies. Consult your veterinarian about breed-specific health considerations before choosing a dog.</em></p>
      </div>
    </ArticleLayout>
  )
}
