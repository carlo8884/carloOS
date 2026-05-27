import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find the Right Vet. Get Trusted Answers.',
  description: 'Find veterinary specialists, understand your pet\'s health, compare pet insurance, and get expert guidance grounded in published veterinary sources.',
  path: '/',
})

const SPECIALIST_TYPES = [
  { icon: '🧠', title: 'Neurology', desc: 'Seizures, spinal disease, paralysis', href: '/specialists/neurology' },
  { icon: '🦴', title: 'Orthopedics', desc: 'Hip dysplasia, fractures, TPLO', href: '/specialists/orthopedics' },
  { icon: '❤️', title: 'Cardiology', desc: 'Heart disease, murmurs, arrhythmias', href: '/specialists/cardiology' },
  { icon: '🔬', title: 'Oncology', desc: 'Cancer diagnosis and treatment', href: '/specialists/oncology' },
  { icon: '👁️', title: 'Ophthalmology', desc: 'Eye disease, cataracts, PRA', href: '/specialists/ophthalmology' },
  { icon: '🦷', title: 'Dentistry', desc: 'Periodontal disease, oral surgery', href: '/specialists/dentistry' },
  { icon: '🩺', title: 'Internal Medicine', desc: 'Endocrine, GI, kidney disease', href: '/specialists/internal-medicine' },
  { icon: '🚨', title: 'Emergency & Critical Care', desc: 'Trauma, ICU, 24-hour care', href: '/specialists/emergency' },
]

const FEATURED_GUIDES = [
  { category: 'Emergency', title: '15 Signs Your Pet Needs Emergency Care Right Now', href: '/health/emergency-signs', image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80&auto=format&fit=crop' },
  { category: 'Insurance', title: 'Best Pet Insurance 2025 — Ranked by Real Payout Rates', href: '/reviews/best-pet-insurance', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80&auto=format&fit=crop' },
  { category: 'Breed Health', title: 'Golden Retriever Health — Cancer Risk, Hip Dysplasia & Prevention', href: '/breeds/golden-retriever-health', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80&auto=format&fit=crop' },
]

export default function VetsHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[88vh] grid lg:grid-cols-2 bg-brand-dark overflow-hidden">
        <div className="flex flex-col justify-center px-container sm:px-container-sm py-20 relative z-10">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(10,138,122,0.3) 0%, transparent 55%)' }}
            aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health, Sourced</span>
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}>
              Find the Right Vet.<br />
              <span className="text-brand-primary">Get Trusted Answers.</span>
            </h1>
            <p className="text-lg font-light text-white/55 leading-relaxed max-w-md mb-10">
              Veterinary specialists near you, research-based health guides for every breed, honest pet insurance comparisons, and telehealth options — all in one place.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/find-a-vet"
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
                Find a Specialist →
              </Link>
              <Link href="/health"
                className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-7 py-3.5 rounded no-underline hover:border-white/40 hover:text-white transition-colors">
                Pet Health Library
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              {[['100+', 'Sourced Articles'], ['8', 'Specialty Types'], ['All Breeds', 'Covered']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-xl font-bold text-white">{num}</div>
                  <div className="text-xs text-white/35 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=900&q=80&auto=format&fit=crop"
            alt="Veterinarian examining a dog"
            fill className="object-cover object-center" priority sizes="50vw"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0D2535 0%, transparent 15%), linear-gradient(to top, rgba(13,37,53,0.4) 0%, transparent 50%)' }}
            aria-hidden="true" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container sm:px-container-sm py-3.5 flex flex-wrap gap-x-6 gap-y-2">
        {['✓ All content research-based', '✓ Specialist-focused guides', '✓ Honest insurance comparisons', '✓ No paid referrals'].map(t => (
          <span key={t} className="text-xs font-semibold text-brand-primary">{t}</span>
        ))}
      </div>

      {/* FIND A SPECIALIST */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Specialty Care</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">Find a Specialist</h2>
          </div>
          <Link href="/find-a-vet" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
            Search all specialists →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SPECIALIST_TYPES.map((s) => (
            <Link key={s.href} href={s.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <span className="text-2xl mb-3 block">{s.icon}</span>
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{s.title}</div>
              <div className="text-xs text-brand-text-light leading-relaxed">{s.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED HEALTH GUIDES */}
      <section className="bg-brand-white px-container sm:px-container-sm py-section">
        <div className="flex items-end justify-between mb-9">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health Library</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">Expert Guides</h2>
          </div>
          <Link href="/health" className="text-sm font-semibold text-brand-primary no-underline hover:underline">All guides →</Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {FEATURED_GUIDES.map((g) => (
            <Link key={g.href} href={g.href}
              className="block border border-brand-border rounded-lg overflow-hidden no-underline hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200">
              <div className="relative h-48">
                <Image src={g.image} alt={g.title} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{g.category}</div>
                <h3 className="font-display font-bold text-brand-dark text-base leading-snug">{g.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TELEHEALTH CALLOUT */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-8"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(10,138,122,0.25) 0%, transparent 55%)' }}
          aria-hidden="true" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-4">Vet Telehealth</div>
            <h2 className="font-display font-bold text-white text-3xl leading-tight mb-4">
              Talk to a Vet Online<br />Tonight, If You Need To
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-7 max-w-lg">
              Vetster, AskVet, and Chewy Connect offer licensed veterinarian consultations within minutes. We compared all three on availability, credentials, and cost.
            </p>
            <Link href="/reviews/best-pet-telehealth"
              className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors">
              Compare Telehealth Options →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: 'Vetster', feature: 'Video + chat', score: '9.2' },
              { name: 'AskVet', feature: 'Unlimited monthly', score: '8.8' },
              { name: 'Chewy Connect', feature: 'Chewy integration', score: '8.5' },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="font-display font-bold text-white text-base mb-1">{t.name}</div>
                <div className="text-xs text-white/40 mb-3">{t.feature}</div>
                <div className="font-display text-2xl font-bold text-brand-primary">{t.score}</div>
                <div className="text-2xs text-white/30 mt-0.5">Editor Score</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="vets-co"
          title="Free Pet Health Newsletter"
          subtitle="research-based health alerts, breed spotlights, and veterinary news — every Tuesday."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['✓ Research-based', '📬 Weekly', '🐾 All species', '🚫 No spam']}
        />
      </section>
    </>
  )
}
