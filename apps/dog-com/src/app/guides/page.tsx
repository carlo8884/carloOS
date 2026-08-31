import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage, CrossPortfolioCard } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Care Guides — Health, Vital Signs, First Aid & More | Dog.com',
  description: 'In-depth dog care reference guides: body condition scoring, spay/neuter timing, home vital signs, microchipping, wellness exams, and first aid preparedness.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Guides', url: 'https://dog.com/guides' },
  ],
})


const GUIDES = [
  {
    title: 'Dog Body Condition Score Explained',
    desc: 'How to assess your dog\'s weight using the 1-9 BCS scale, with breed adjustments and lifespan evidence.',
    href: '/guides/dog-body-condition-score',
    badge: 'Foundational',
  },
  {
    title: 'Spay & Neuter Timing — What the Evidence Says',
    desc: 'When to spay or neuter by breed, sex, and health risk profile. Updated recommendations from current research.',
    href: '/guides/dog-spay-neuter-timing',
    badge: 'Health Decision',
  },
  {
    title: "How to Take a Dog's Temperature & Vital Signs at Home",
    desc: 'Temperature, pulse, breathing rate, gum color and hydration — the normal reference ranges and the thresholds that mean call your vet.',
    href: '/guides/how-to-take-dogs-temperature',
    badge: 'Reference',
  },
  {
    title: 'Dog Microchipping Explained',
    desc: 'How microchips work, what they cost, ISO standards, the registration step most owners miss, and how chips differ from GPS trackers.',
    href: '/guides/dog-microchipping',
    badge: 'Foundational',
  },
  {
    title: 'The Dog Wellness Exam — What to Expect',
    desc: 'What happens at a wellness visit, how often to go by life stage, how to choose a veterinarian, and the questions to ask.',
    href: '/guides/dog-wellness-exam',
    badge: 'Reference',
  },
  {
    title: 'Dog First Aid Kit & Emergency Preparedness',
    desc: 'What to put in a canine first aid kit, the emergency numbers to save in advance, and how to be ready for a medical emergency.',
    href: '/guides/dog-first-aid-kit',
    badge: 'Reference',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog Care Guides',
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://dog.com${g.href}`,
  })),
}

const dogGuidesSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={dogGuidesSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Care Guides</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Dog Care Guides
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          In-depth, research-anchored guides on the foundational decisions every dog owner faces — body condition, weight management, spay/neuter timing, and more.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="dog-com:category-guides" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-12 max-w-container-wide mx-auto">
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 leading-tight">What these guides cover</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Most everyday dog questions have quick answers. The decisions on this page do not. They are the foundational, evidence-dependent choices that shape a dog&apos;s long-term health: how to read body condition correctly, how to time a spay or neuter against the latest research, and how to weigh trade-offs where the &ldquo;right&rdquo; answer changes by breed, sex, and life stage. Each guide here is built to be a reference you return to, not a listicle you skim once.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The guides are written to work together. <Link href="/guides/dog-body-condition-score" className="text-brand-primary font-medium hover:underline">Dog body condition scoring</Link> gives you the 1&ndash;9 framework vets use to judge whether a dog is underweight, ideal, or carrying risk &mdash; the single most useful skill for catching weight problems before they become disease. From there, the <Link href="/guides/dog-spay-neuter-timing" className="text-brand-primary font-medium hover:underline">spay and neuter timing guide</Link> walks through what current evidence says about when to schedule the procedure, because the calculus differs sharply between a small companion breed and a large, slow-maturing one.</p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Alongside those decisions are the hands-on skills every owner should have. Learn to <Link href="/guides/how-to-take-dogs-temperature" className="text-brand-primary font-medium hover:underline">take your dog&apos;s temperature and vital signs at home</Link> so you can tell your vet exactly what is happening, understand <Link href="/guides/dog-microchipping" className="text-brand-primary font-medium hover:underline">how microchipping works</Link> and why registration matters more than the implant, know <Link href="/guides/dog-wellness-exam" className="text-brand-primary font-medium hover:underline">what to expect at a wellness exam</Link> and how to choose a veterinarian, and build a <Link href="/guides/dog-first-aid-kit" className="text-brand-primary font-medium hover:underline">first aid kit and emergency plan</Link> before you ever need one.
          </p>
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 mt-8 leading-tight">Who this is for</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            This hub is for owners who want the reasoning, not just the recommendation &mdash; new puppy owners planning the first year, anyone managing a dog&apos;s weight, and people who want to walk into a vet appointment already understanding the choices on the table. Everything here is research-anchored and written in plain language, with the underlying evidence cited so you can check it yourself. Guides are added and updated as the foundational questions evolve; the topics below are the starting set, chosen because they affect nearly every dog and because getting them right early compounds across a whole lifespan.
          </p>
        </div>
      </div>

      <div className="px-container-sm sm:px-container pb-14 max-w-container-wide mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {GUIDES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              {item.badge && (
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{item.badge}</div>
              )}
              <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">{item.title}</div>
              <div className="text-sm text-brand-text-light leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="footer" />
    </>
  </>
  )
}
