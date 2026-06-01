import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Care Guides — Body Condition, Spay/Neuter Timing & More | Dog.com',
  description: 'In-depth dog care guides covering body condition scoring, spay/neuter timing, and other foundational health topics every dog owner should understand.',
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
]

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
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

      <div className="px-container-sm sm:px-container py-14 max-w-container-wide mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">What a Dog.com guide is</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            A Dog.com guide is a long-form reference on a foundational decision in a dog&apos;s life — the kind of question where the answer materially affects health, longevity, or quality of life and where the published veterinary evidence has shifted meaningfully over the last decade. Body condition scoring (BCS) and spay/neuter timing are the first two because the evidence on both reframed in the 2010s: BCS replaced bathroom-scale weight as the standard clinical assessment, and large-breed spay/neuter timing recommendations now diverge from the historical &ldquo;six months for everyone&rdquo; default by breed and sex.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Each guide names its sources (peer-reviewed studies, AAHA / WSAVA / AVMA consensus, breed-club position statements) and is dated. Where the evidence is genuinely mixed we say so. We do not, in any guide, recommend a brand or product as an editorial position — those decisions live on the review pages under <Link href="/reviews" className="text-brand-primary no-underline hover:underline">/reviews</Link>.
          </p>
        </div>

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

      <div className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-14">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">How a guide is built</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Topic selection: a guide ships when (a) the evidence base is large enough to support a defensible recommendation, (b) the recommendation has changed in a material way since 2015 or the lay-press framing of the topic continues to be wrong, and (c) we can name the primary sources without paywall. We don&apos;t publish guides on topics where the evidence is still emerging — those are condition pages under <Link href="/health" className="text-brand-primary no-underline hover:underline">/health</Link> with the calibrated &ldquo;here&apos;s what we know, here&apos;s what we don&apos;t&rdquo; framing.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Sourcing: peer-reviewed veterinary journals first (JAVMA, JVIM, JSAP, AVMA proceedings). Consensus statements from AAHA, WSAVA, and the AVMA second. Breed-club health committees and the OFA / CHIC databases third. We name the citation rather than hyperlinking-and-hoping; if the citation is behind a paywall we say so, and where possible point to the abstract or to a guideline summary that synthesizes the underlying data.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Update cadence: every guide carries a &ldquo;last reviewed&rdquo; date and is re-examined when the underlying evidence changes. Body condition scoring is unlikely to be revised — the 1-9 scale is stable. Spay/neuter timing recommendations have shifted enough in the last decade that we expect that page to need real updates as breed-specific studies publish.
          </p>
        </div>
      </div>

      <div className="bg-brand-surface border-t border-brand-border px-container-sm sm:px-container py-14">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">More guides coming</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            On the roadmap: vaccination interval / titer testing (the post-2017 AAHA guidance shift away from annual core vaccines for most adult dogs), dental-disease prevention (VOHC seal vs. brushing protocol vs. anesthesia-free cleaning, which is a real consumer trap), preventive screening for senior dogs (when to start bloodwork, urinalysis, and abdominal imaging by breed and size), and weight loss for diagnosed-obese dogs (caloric restriction targets that actually move the needle, not the marketing &ldquo;weight management&rdquo; bag).
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Each lands when the evidence and the source-attribution clears the bar above. If you want notice when a specific topic publishes, subscribe below.
          </p>
        </div>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section" siteId="dog-com"
          title="Free Dog Care Tips"
          subtitle="Practical, research-anchored dog care guidance every Tuesday."
          source="guides-hub" ctaText="Subscribe Free"
        />
      </div>
    </>
  </>
  )
}
