import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Best English Saddles 2025 — By Discipline & Budget | Saddle.com',
  description: 'English saddles ranked by discipline: dressage, show jumping, eventing, all-purpose, and close contact.',
  path: '/english',
})

const DISCIPLINES = [
  {
    name: 'Dressage', icon: '🎖️',
    desc: 'Deep seat, straight-cut flap, close contact with horse\'s back. Designed for collection and lateral work.',
    brands: ['Stubben', 'Passier', 'Amerigo', 'County'],
    priceRange: '$800–5,000',
    topPick: 'Stubben Roxane',
    topPickScore: '9.5',
    href: '/reviews/best-english-saddles',
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Show Jumping', icon: '🏆',
    desc: 'Forward-cut flap, close contact, minimal bulk between rider and horse. Built for speed and precision.',
    brands: ['Pessoa', 'Devoucoux', 'Antares', 'CWD'],
    priceRange: '$1,000–5,000+',
    topPick: 'Pessoa Gen X Pro',
    topPickScore: '9.2',
    href: '/reviews/best-english-saddles',
    img: 'https://images.unsplash.com/photo-1474546652694-a33dd8161d66?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Eventing', icon: '⚡',
    desc: 'Hybrid design balancing dressage position with jumping security. Used across all three phases.',
    brands: ['Bates', 'Thorowgood', 'Wintec', 'County'],
    priceRange: '$600–3,500',
    topPick: 'County Perfection',
    topPickScore: '9.0',
    href: '/reviews/best-english-saddles',
    img: 'https://images.unsplash.com/photo-1469820838967-83c1450cf56a?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'All-Purpose', icon: '🐎',
    desc: 'Versatile design for flatwork, jumping, trail, and general use. Best for recreational riders.',
    brands: ['Collegiate', 'Bates', 'Wintec', 'Thorowgood'],
    priceRange: '$300–1,500',
    topPick: 'Bates Caprilli',
    topPickScore: '8.9',
    href: '/reviews/best-english-saddles',
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80&auto=format&fit=crop',
  },
]

const BRAND_GUIDE = [
  { name: 'Stubben', country: 'Germany', specialty: 'Dressage, all disciplines', priceRange: '$2,500–5,000+', verdict: 'Gold standard — 130 years of craftsmanship' },
  { name: 'Pessoa', country: 'Brazil', specialty: 'Show jumping', priceRange: '$1,500–3,500', verdict: 'Most Olympic medals of any jumping brand' },
  { name: 'Passier', country: 'Germany', specialty: 'Dressage', priceRange: '$2,000–4,500', verdict: 'Renowned for leather quality and longevity' },
  { name: 'Bates', country: 'Australia', specialty: 'Eventing, all-purpose', priceRange: '$800–2,000', verdict: 'CAIR panel system, adjustable gullet — practical value' },
  { name: 'Collegiate', country: 'UK', specialty: 'All-purpose, budget', priceRange: '$400–1,200', verdict: 'Best budget English option for recreational riders' },
  { name: 'Devoucoux', country: 'France', specialty: 'Show jumping, dressage', priceRange: '$3,000–6,000+', verdict: 'Artisan French craftsmanship — preferred by top professionals' },
  { name: 'County', country: 'UK/USA', specialty: 'Eventing, custom fit', priceRange: '$2,500–4,500', verdict: 'Custom-fit focus — best for hard-to-fit horses' },
  { name: 'CWD', country: 'France', specialty: 'Show jumping', priceRange: '$3,500–7,000+', verdict: 'Premium French jumping saddle — consistent at elite level' },
]

export default function EnglishSaddlesPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }}
          aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">English Saddles</span>
          </div>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 54px)' }}>
            Best English Saddles — By Discipline
          </h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
            A dressage saddle on a jumping horse is the wrong tool for the job. English discipline saddles are meaningfully different — here&apos;s how to navigate the market by what you actually do.
          </p>
        </div>
      </div>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="saddle-com:hub-english" aspect="16:9" variant="wide" priority />
      </div>

      {/* Discipline grid */}
      <div className="px-container-sm sm:px-container py-14">
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-8 pb-3 border-b border-brand-border">By Discipline</h2>
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {DISCIPLINES.map((disc) => (
            <div key={disc.name} className="bg-brand-white border border-brand-border rounded-xl overflow-hidden hover:border-brand-primary hover:shadow-card-hover transition-all duration-200">
              <div className="relative h-40 overflow-hidden">
                <Image src={disc.img} alt={disc.name} fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <span className="text-2xs font-bold tracking-eyebrow uppercase text-white/80">{disc.icon} {disc.name}</span>
                  <span className="text-sm font-bold text-brand-primary">{disc.priceRange}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-brand-text-mid leading-relaxed mb-4">{disc.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">Our Top Pick</div>
                    <div className="font-display font-bold text-brand-dark">{disc.topPick}</div>
                    <div className="text-2xs text-brand-primary font-bold mt-0.5">Score: {disc.topPickScore}/10</div>
                  </div>
                  <Link href={disc.href}
                    className="text-xs font-bold text-brand-primary no-underline hover:underline">
                    See full review →
                  </Link>
                </div>
                <div className="mt-3 pt-3 border-t border-brand-border">
                  <div className="text-2xs text-brand-text-light">Top brands: {disc.brands.join(', ')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand comparison */}
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-6 pb-3 border-b border-brand-border">English Saddle Brand Guide</h2>
        <div className="overflow-x-auto rounded-xl border border-brand-border mb-12">
          <table className="w-full text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                {['Brand', 'Origin', 'Specialty', 'Price Range', 'Verdict'].map(h => (
                  <th key={h} className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BRAND_GUIDE.map((brand, i) => (
                <tr key={brand.name} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                  <td className="px-4 py-3 font-display font-bold text-brand-dark border-b border-brand-border">{brand.name}</td>
                  <td className="px-4 py-3 text-brand-text-light border-b border-brand-border">{brand.country}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{brand.specialty}</td>
                  <td className="px-4 py-3 font-semibold text-brand-primary border-b border-brand-border">{brand.priceRange}</td>
                  <td className="px-4 py-3 text-brand-text-mid text-xs border-b border-brand-border">{brand.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Guide links */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Best English Saddles 2025', href: '/reviews/best-english-saddles', desc: 'Full reviews with scores' },
            { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', desc: '4-point horse & rider check' },
            { title: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide', desc: 'Complete inspection checklist' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors">
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{link.title}</div>
              <div className="text-xs text-brand-text-light">{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture variant="section" siteId="saddle-com"
          title="Free English Saddle Buying Guide"
          subtitle="Brand reviews, used market tips, and fitting guides."
          source="english-hub" ctaText="Get Free Guide"
          perks={['📋 CSF-informed content', '💰 Used market pricing', '🏇 Discipline-specific advice']} />
      </div>
    </>
  )
}
