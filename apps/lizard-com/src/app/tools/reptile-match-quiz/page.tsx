import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  ArticleLayout,
  FAQAccordion,
  ArticleSourcesList,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  AffiliateDisclosure,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { ReptileMatchQuiz } from './Quiz'

const URL = 'https://lizard.com/tools/reptile-match-quiz'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Which Reptile Is Right For You? Beginner Quiz | Lizard.com',
  description:
    'Answer a few questions about space, handling, effort, and diet, and this beginner reptile matcher suggests 2–3 species that fit, with care-guide links.',
  path: '/tools/reptile-match-quiz',
})

const SOURCES = [
  {
    label:
      'Association of Reptilian and Amphibian Veterinarians (ARAV) — client husbandry and species-selection resources for new reptile keepers.',
    url: 'https://arav.org',
    publisher: 'ARAV',
  },
  {
    label:
      'Mader, D. R., & Divers, S. J. (eds.) (2014). Current Therapy in Reptile Medicine and Surgery (husbandry and species-care chapters).',
    publisher: 'Saunders / Elsevier',
  },
  {
    label:
      'de Vosjoli, P. The Herpetoculture Library care-series — long-standing keeper references on beginner-suitable species (leopard gecko, crested gecko, corn snake, ball python).',
    publisher: 'Advanced Vivarium Systems',
  },
  {
    label:
      'RSPCA and Reptile & Amphibian welfare guidance — provision of appropriate space, thermal gradient, and lighting as core selection criteria.',
    publisher: 'RSPCA / welfare guidance',
  },
]
const articleSchema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Which Reptile Is Right For You? A Beginner Matcher',
  description:
    'A guided quiz that matches first-time keepers to beginner-appropriate reptile species based on space, handling, setup effort, activity preference, and diet comfort.',
  url: URL,
  imageUrl: 'https://lizard.com/og/reptile-match-quiz.jpg',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2026-06-11',
  modifiedAt: '2026-06-11',

  citation: SOURCES,
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Which Reptile Is Right For You? Beginner Matcher',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'ReptileSpeciesMatcher',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free beginner reptile matcher quiz. Answer six questions about experience, available space, desire to handle, setup effort, day-vs-night activity preference, and comfort with the diet, and the tool recommends 2–3 beginner-appropriate species from a curated list with reasons each fits and links to full care guides.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Six-question guided quiz: experience, space, handling, effort, activity, diet',
    'Recommends 2–3 beginner-appropriate species with a reason each fits',
    'Conservative logic: advanced species are never suggested to first-time keepers',
    'Each result links to the full species care guide plus enclosure and feeding calculators',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Lizard.com Editorial',
    url: 'https://lizard.com',
  },
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://lizard.com/' },
  { name: 'Tools', url: 'https://lizard.com/tools' },
  { name: 'Reptile Match Quiz', url: URL },
])

const FAQS = [
  {
    question: 'What is the best beginner reptile?',
    answer:
      'For most first-time keepers the leopard gecko and crested gecko are the two most widely recommended beginner reptiles: both stay small, need a modest enclosure, use simple low-complexity lighting, and are forgiving of small husbandry mistakes. If you specifically want a snake, the corn snake is the standard beginner pick — docile, reliably feeding, and very handleable. The bearded dragon and blue-tongued skink are excellent handleable beginner lizards but need a larger enclosure and full UVB, so they suit keepers with more space and budget.',
  },
  {
    question: 'Leopard gecko or bearded dragon for beginners?',
    answer:
      'Both are beginner-appropriate, but they suit different keepers. A leopard gecko is smaller, needs a modest enclosure and simpler lighting, and is the easier, cheaper first reptile — ideal if space or budget is limited. A bearded dragon is larger, diurnal, and very interactive and handleable, but it needs a big enclosure, high-output UVB, and a strong basking gradient. Choose the leopard gecko for a low-fuss starter; choose the bearded dragon if you want a hands-on, daytime-active lizard and can commit to the larger setup.',
  },
  {
    question: 'What is the best beginner pet snake?',
    answer:
      'The corn snake is the most widely recommended beginner snake: it is docile, hardy, reliably feeds on frozen-thawed rodents, and is very handleable. The ball python is also a common beginner snake and stays a manageable size, but it is prone to refusing food for stretches, which can worry a first-time keeper. The western hognose and Kenyan sand boa are charming and space-efficient but sit a step below the top picks, so they are better as a second snake or a well-researched first one.',
  },
  {
    question: 'Which reptile is best if I have very little space?',
    answer:
      'For a small footprint, a leopard gecko or crested gecko (lizards) or a Kenyan sand boa or western hognose (small snakes) are the most space-efficient options on this list. Crested geckos are a particularly good fit for small spaces because they can be kept largely on a prepared powdered diet, avoiding the need to keep live feeder insects on hand.',
  },
  {
    question: 'Which beginner reptile does not need live insects?',
    answer:
      'A crested gecko can be kept largely on a complete powdered diet mixed with water, with live insects optional rather than required, which makes it a strong choice if feeding live prey daily is unappealing. Beginner snakes such as corn snakes and ball pythons are fed frozen-thawed (not live) rodents, which avoids live feeding but does involve handling and thawing rodents.',
  },
  {
    question: 'How does this quiz decide which reptile to recommend?',
    answer:
      'The quiz scores each species on this curated list against your answers about experience, space, handling, setup effort, activity preference, and diet comfort. For self-described first-time keepers it favors top-tier forgiving starter species and avoids suggesting anything rated a step more advanced. It then returns the 2–3 best-matching species. The result is a starting point for research, not a verdict — every individual animal varies, so always read the full care guide before deciding.',
  },
]


const howToSchema = buildHowToSchema({
  name: 'How to find the right beginner reptile for your situation',
  description: 'Answer six questions about experience, space, handling preference, setup effort, activity preference, and diet comfort to get 2–3 recommended beginner-appropriate species.',
  url: URL,
  steps: [
    {
      name: 'Answer the experience and space questions',
      text: 'Indicate your reptile-keeping experience level and the size of the enclosure you can realistically fit. These two factors most strongly filter which species are appropriate.',
    },
    {
      name: 'Select your handling and activity preferences',
      text: 'Choose how much you want to handle your reptile and whether you prefer a diurnal (daytime-active) or nocturnal species. These preferences narrow the match to species that suit your daily routine.',
    },
    {
      name: 'Set your setup effort and diet comfort',
      text: 'Indicate how complex a setup you are willing to manage and your comfort with the feeding method (live insects, frozen-thawed rodents, or prepared diet). Some species need simpler husbandry than others.',
    },
    {
      name: 'Read your matched species and follow the care guides',
      text: 'The quiz returns 2–3 beginner-appropriate species that best fit your answers, each with a short reason it matches. Follow the care-guide link for each result before deciding — individual animals vary and full husbandry context matters.',
    },
  ],
})

const schema = combineSchemas(articleSchema, softwareApplicationSchema, breadcrumbSchema, howToSchema)

export default function ReptileMatchQuizPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Which Reptile Is Right For You?',
        subtitle:
          'A short, honest matcher for first-time keepers. Answer six questions about space, handling, effort, and diet, and we suggest 2–3 beginner-appropriate species — each with the reasons it fits and a link to the full care guide.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Reptile Match Quiz' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
        { title: 'Beginner vs Advanced Reptiles', href: '/species/beginner-vs-advanced-reptiles', category: 'Species' },
        { title: 'Reptile Buying Checklist', href: '/species/reptile-buying-checklist', category: 'Species' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'Reptile Feeding Calculator', href: '/tools/reptile-feeding-calculator', category: 'Tools' },
        { title: 'Leopard Gecko Care', href: '/species/leopard-gecko', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'At a glance', href: '#at-a-glance' },
              { label: 'Take the quiz', href: '#quiz' },
              { label: 'How it judges fit', href: '#methodology' },
              { label: 'Compare the species', href: '#comparison' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Start Here"
            links={[
              { label: 'Best beginner reptiles', href: '/species/best-beginner-reptiles' },
              { label: 'Beginner vs advanced reptiles', href: '/species/beginner-vs-advanced-reptiles' },
              { label: 'Reptile buying checklist', href: '/species/reptile-buying-checklist' },
              { label: 'Enclosure size calculator', href: '/tools/enclosure-size-calculator' },
              { label: 'Species library', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="reptile-match-quiz"
          />
          <CrossPortfolioCard currentSite="lizard-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <SchemaScript schema={schema} />

        <h2 id="at-a-glance">Best beginner reptiles at a glance</h2>
        <p>
          If you are choosing a first reptile, a handful of species come up again and
          again in keeper literature and veterinary husbandry guidance as the most
          forgiving starters. In short:
        </p>
        <ul>
          <li>
            <strong>Top beginner lizards:</strong> the{' '}
            <Link href="/species/leopard-gecko" className="text-brand-primary hover:underline">leopard gecko</Link>{' '}
            and{' '}
            <Link href="/species/crested-gecko" className="text-brand-primary hover:underline">crested gecko</Link>{' '}
            — small, hardy, modest enclosure, simple low-complexity lighting.
          </li>
          <li>
            <strong>Top beginner snake:</strong> the{' '}
            <Link href="/species/corn-snake" className="text-brand-primary hover:underline">corn snake</Link>{' '}
            — docile, reliably feeding, very handleable.
          </li>
          <li>
            <strong>Best handleable lizards (bigger setup):</strong> the{' '}
            <Link href="/species/bearded-dragon" className="text-brand-primary hover:underline">bearded dragon</Link>{' '}
            and{' '}
            <Link href="/species/blue-tongued-skink" className="text-brand-primary hover:underline">blue-tongued skink</Link>{' '}
            — very interactive, but need a large enclosure and full UVB.
          </li>
          <li>
            <strong>Smallest-footprint options:</strong> the crested gecko, the{' '}
            <Link href="/species/kenyan-sand-boa" className="text-brand-primary hover:underline">Kenyan sand boa</Link>, and the{' '}
            <Link href="/species/western-hognose-snake" className="text-brand-primary hover:underline">western hognose snake</Link>.
          </li>
        </ul>
        <p>
          The right choice depends on how much space you have, whether you want to handle
          the animal, how much setup effort suits you, when you want it active, and how
          you feel about feeding insects or rodents. The quiz below weighs those factors
          and narrows the list to the 2–3 species that fit you best.
        </p>

        <h2 id="quiz">Take the quiz</h2>
        <p>
          Answer six quick questions. There are no wrong answers — the tool simply matches
          your situation to species this site covers in depth.
        </p>
        <ReptileMatchQuiz />

        <h2 id="methodology">How the matcher judges fit</h2>
        <p>
          The quiz scores every species on a curated, beginner-screened list against your
          answers. It is deliberately conservative: a self-described first-time keeper is
          never steered toward a species rated even a step more demanding. Each answer
          shifts the scores:
        </p>
        <ul>
          <li>
            <strong>Experience</strong> — first-time keepers get the top-tier starter
            species boosted and anything more advanced held back, so a forgiving animal
            always wins for a complete novice.
          </li>
          <li>
            <strong>Space</strong> — species whose adult footprint exceeds the room you
            indicated are penalized; large lizards like the bearded dragon and
            blue-tongued skink need a big enclosure to pass.
          </li>
          <li>
            <strong>Handling</strong> — if you want a hands-on pet, the most tolerant,
            handleable species rise; if you mainly want to observe, a display-first animal
            such as the Kenyan sand boa fits comfortably.
          </li>
          <li>
            <strong>Setup effort</strong> — if you prefer a minimal setup, low-complexity
            lighting species are favored and high-UVB, high-basking species fall back.
          </li>
          <li>
            <strong>Activity preference</strong> — day-active (diurnal) species are
            boosted if you want to watch the animal during the day; night-active species
            are favored if evenings suit you.
          </li>
          <li>
            <strong>Diet comfort</strong> — squeamishness about live insects or rodents
            steers the result; the crested gecko, which can run largely on a prepared
            powdered diet, scores well when live feeding is unappealing.
          </li>
        </ul>
        <p>
          The recommendations rest on well-established beginner-suitability guidance from
          veterinary and herpetocultural references, not on any first-person testing. They
          are a starting point for your own research, not a verdict — every individual
          animal varies in temperament and appetite.
        </p>

        <h2 id="comparison">Compare the beginner species</h2>
        <p>
          The table below summarizes the husbandry attributes the quiz weighs. Use it
          alongside the quiz result and each species&apos; full care guide.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Species</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Type</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Space</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Handling</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Setup</th>
                <th className="text-left py-2 pr-4 font-semibold text-brand-text-dark">Active</th>
                <th className="text-left py-2 font-semibold text-brand-text-dark">Diet</th>
              </tr>
            </thead>
            <tbody className="text-brand-text-mid">
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Leopard gecko</td>
                <td className="py-2 pr-4">Lizard</td>
                <td className="py-2 pr-4">Small</td>
                <td className="py-2 pr-4">Moderate</td>
                <td className="py-2 pr-4">Simple</td>
                <td className="py-2 pr-4">Dawn/dusk</td>
                <td className="py-2">Live insects</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Crested gecko</td>
                <td className="py-2 pr-4">Lizard</td>
                <td className="py-2 pr-4">Small</td>
                <td className="py-2 pr-4">Moderate</td>
                <td className="py-2 pr-4">Simple</td>
                <td className="py-2 pr-4">Night</td>
                <td className="py-2">Powdered diet (insects optional)</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Corn snake</td>
                <td className="py-2 pr-4">Snake</td>
                <td className="py-2 pr-4">Medium</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Simple</td>
                <td className="py-2 pr-4">Dawn/dusk</td>
                <td className="py-2">Frozen-thawed rodents</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Bearded dragon</td>
                <td className="py-2 pr-4">Lizard</td>
                <td className="py-2 pr-4">Large</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Demanding (UVB)</td>
                <td className="py-2 pr-4">Day</td>
                <td className="py-2">Insects + greens</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Ball python</td>
                <td className="py-2 pr-4">Snake</td>
                <td className="py-2 pr-4">Medium</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Moderate</td>
                <td className="py-2 pr-4">Night</td>
                <td className="py-2">Frozen-thawed rodents</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Blue-tongued skink</td>
                <td className="py-2 pr-4">Skink</td>
                <td className="py-2 pr-4">Large</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Demanding (UVB)</td>
                <td className="py-2 pr-4">Day</td>
                <td className="py-2">Omnivore (mixed)</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Western hognose</td>
                <td className="py-2 pr-4">Snake</td>
                <td className="py-2 pr-4">Small</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Simple</td>
                <td className="py-2 pr-4">Day</td>
                <td className="py-2">Frozen-thawed rodents</td>
              </tr>
              <tr className="border-b border-brand-border/50">
                <td className="py-2 pr-4">Kenyan sand boa</td>
                <td className="py-2 pr-4">Snake</td>
                <td className="py-2 pr-4">Small</td>
                <td className="py-2 pr-4">Low (display)</td>
                <td className="py-2 pr-4">Simple</td>
                <td className="py-2 pr-4">Night</td>
                <td className="py-2">Frozen-thawed rodents</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Once the quiz points you at a species, size its housing with the{' '}
          <Link href="/tools/enclosure-size-calculator" className="text-brand-primary hover:underline">enclosure size calculator</Link>{' '}
          and plan feeding with the{' '}
          <Link href="/tools/reptile-feeding-calculator" className="text-brand-primary hover:underline">reptile feeding calculator</Link>. For
          the bigger picture, the{' '}
          <Link href="/species/best-beginner-reptiles" className="text-brand-primary hover:underline">best beginner reptiles</Link>{' '}
          guide and the{' '}
          <Link href="/species/beginner-vs-advanced-reptiles" className="text-brand-primary hover:underline">beginner vs advanced</Link>{' '}
          breakdown go deeper on each pick.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <ArticleSourcesList sources={SOURCES} />

        <p className="mt-8 text-sm">
          This matcher is editorial husbandry guidance from the Lizard.com Editorial team,
          drawn from cited references. It is not a substitute for species-specific research
          or veterinary advice. Before bringing any animal home, read its full{' '}
          <Link href="/species" className="text-brand-primary hover:underline">care guide</Link>,
          budget for the complete setup, and consult a reptile veterinarian for health
          questions.
        </p>

        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
      </div>
    </ArticleLayout>
  )
}
