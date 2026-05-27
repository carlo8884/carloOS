import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Enclosure Setup Guide | Lizard.com', description: 'Complete reptile enclosure setup guides — temperatures, UVB lighting, humidity, substrate, and enrichment for all major species.', path: '/setup' })

const GUIDES = [
  { title: 'UVB Lighting Guide', desc: 'Ferguson Zones, T5 HO selection, distance tables, replacement schedule', href: '/setup/uvb-lighting-guide', badge: '☀️ Essential' },
  { title: 'Temperature Setup Guide', desc: 'Gradient creation, thermostats, measuring correctly', href: '/setup/temperature-guide' },
  { title: 'Humidity Guide', desc: 'Species requirements, misting schedules, moist hides', href: '/setup/humidity-guide' },
  { title: 'Substrate Guide', desc: 'Bio-active, loose particle, tile — what works for each species', href: '/setup/substrate-guide' },
  { title: 'Best Reptile Terrariums 2025', desc: 'Zen Habitats, Animal Plastics, Exo Terra compared and ranked', href: '/reviews/best-reptile-terrariums', badge: '🏆 Compared' },
  { title: 'Best Thermometers 2025', desc: 'Govee, Inkbird, Zoo Med compared with published calibration data', href: '/reviews/best-thermometers-hygrometers', badge: '🏆 Compared' },
  { title: 'Best UVB Bulbs 2025', desc: 'Arcadia vs Zoo Med ranked on published Solarmeter 6.5 data', href: '/reviews/best-uvb-bulbs', badge: '🏆 Compared' },
]

export default function LizardSetupHubPage() {
  return (
    <>
      <div className="relative z-10 px-container sm:px-container-sm py-16" style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}>
        <div className="flex items-center gap-2.5 mb-5"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Enclosure Setup</span></div>
        <h1 className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>Reptile Enclosure Setup</h1>
        <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: 'rgba(238,240,228,0.55)' }}>Complete setup guides for temperatures, UVB, humidity, and substrate — plus tested equipment recommendations.</p>
      </div>
      <div className="relative z-10 px-container sm:px-container-sm py-14">
        <div className="grid sm:grid-cols-2 gap-4 max-w-content-wide mx-auto">
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} className="block rounded-lg p-5 no-underline hover:-translate-y-1 transition-all duration-200" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {g.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{g.badge}</div>}
              <div className="font-display font-bold text-brand-white text-base mb-1.5">{g.title}</div>
              <div className="text-xs" style={{ color: 'rgba(238,240,228,0.45)' }}>{g.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative z-10 px-container sm:px-container-sm py-12" style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}>
        <EmailCapture variant="inline" siteId="lizard-com" ctaText="Subscribe Free" source="setup-hub" />
      </div>
    </>
  )
}
