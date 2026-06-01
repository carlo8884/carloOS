import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Feeding Guides — How Much and How Often | PetFood.com',
  description:
    'Feeding guides and calculator companions — portion math, feeding frequency, life-stage feeding, transitions, body condition scoring, and treat budgeting.',
  path: '/feeding',
})

const FEEDING = [
  {
    slug: 'how-much-to-feed-a-dog',
    title: 'How Much to Feed a Dog',
    description:
      "The feeding chart on the bag is a starting point that overfeeds most dogs, because it is built around ranges and around the manufacturer's interest in selling food.",
  },
  {
    slug: 'how-much-to-feed-a-cat',
    title: 'How Much to Feed a Cat',
    description:
      'Cats are easy to overfeed: they are small, the calorie differences between foods are large in relative terms, and free-choice grazing on energy-dense kibble drives the high rate...',
  },
  {
    slug: 'body-condition-scoring',
    title: 'Body Condition Scoring',
    description:
      'Body condition score is the single most useful tool an owner has for feeding decisions, and it requires no equipment beyond your hands and eyes.',
  },
  {
    slug: 'how-to-transition-pet-food',
    title: 'How to Transition Pet Food',
    description:
      'Switching foods abruptly is one of the most common causes of avoidable vomiting and diarrhea, because the gut and its microbiome need time to adapt to a new ingredient and nutri...',
  },
  {
    slug: 'feeding-frequency-and-schedules',
    title: 'Feeding Frequency and Schedules',
    description:
      'How often to feed is a real nutritional decision, not just routine.',
  },
  {
    slug: 'treats-and-the-ten-percent-rule',
    title: 'Treats and the 10 Percent Rule',
    description:
      'Treats are where good feeding plans quietly fall apart.',
  },
  {
    slug: 'large-breed-puppy-nutrition',
    title: 'Large-Breed Puppy Nutrition',
    description:
      'Large- and giant-breed puppies are the one group where the wrong puppy food can cause lifelong skeletal disease.',
  },
  {
    slug: 'feeding-multiple-pets',
    title: 'Feeding Multiple Pets in One Household',
    description:
      'Multi-pet households turn feeding into a logistics problem: different animals need different amounts, different foods, and sometimes a therapeutic diet that must not be eaten by...',
  },
  {
    slug: 'food-storage-and-safety',
    title: 'Pet Food Storage and Safety',
    description:
      'Good food can be spoiled by poor storage.',
  },
  {
    slug: 'calorie-calculator-guide',
    title: 'Using a Pet Calorie Calculator',
    description:
      'A calorie calculator turns a few inputs — weight, body condition, life stage, activity — into an estimated daily energy requirement, and it is a useful starting point for portio...',
  },
]

export default function FeedingHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Feeding Guides
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Feeding Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The practical side of nutrition — how much to feed, how often, how to transition foods, and how to read body condition. Companions to the food-cost and portion calculators.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Feeding</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {FEEDING.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/feeding/${i.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="feeding-hub"
        />
      </section>
    </>
  )
}
