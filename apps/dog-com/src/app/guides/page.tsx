import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Care Guides — Body Condition, Spay/Neuter Timing & More | Dog.com',
  description: 'In-depth dog care guides covering body condition scoring, spay/neuter timing, and other foundational health topics every dog owner should understand.',
  path: '/guides',
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

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section" siteId="dog-com"
          title="Free Dog Care Tips"
          subtitle="Practical, research-anchored dog care guidance every Tuesday."
          source="guides-hub" ctaText="Subscribe Free"
        />
      </div>
    </>
  )
}
