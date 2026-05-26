import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Water Chemistry — pH, Ammonia, Hardness Explained | Fish.com',
  description: 'Complete aquarium water chemistry guide. pH, ammonia, nitrite, nitrate, hardness, KH, GH — what each parameter means, ideal ranges by fish type, and how to adjust them.',
  path: '/water',
})

const PARAMETERS = [
  {
    name: 'Ammonia (NH₃/NH₄⁺)',
    idealRange: '0 ppm always',
    danger: '> 0.5 ppm',
    color: '#C84A2A',
    desc: 'Fish waste converted to ammonia. Any detectable ammonia in a cycled tank means something is wrong — overcrowding, dead fish, overfeeding, filter failure, or uncycled tank. Toxic at very low concentrations. Test immediately if fish show distress.',
    fix: 'Water change (25–50%), identify and remove source, check filter function.',
  },
  {
    name: 'Nitrite (NO₂⁻)',
    idealRange: '0 ppm always',
    danger: '> 0.5 ppm',
    color: '#C84A2A',
    desc: 'Intermediate compound in nitrogen cycle. "Brown blood disease" — binds hemoglobin, prevents oxygen transport. Fish suffocate despite adequate oxygen. Should read 0 in a fully cycled tank. Appears during cycling or when bacterial colonies are disrupted.',
    fix: 'Water change, salt addition (NaCl at 1 tbsp/5 gallons temporarily blocks nitrite uptake), identify disruption to nitrogen cycle.',
  },
  {
    name: 'Nitrate (NO₃⁻)',
    idealRange: '< 20–40 ppm',
    danger: '> 80 ppm chronic',
    color: '#C8952A',
    desc: 'End product of nitrogen cycle. Far less toxic than ammonia or nitrite but causes chronic stress and suppressed immune function at high levels. Controlled through regular water changes. Live plants consume nitrate.',
    fix: 'Regular water changes (25–30% weekly for most setups), reduce feeding, add live plants.',
  },
  {
    name: 'pH',
    idealRange: 'Varies by species (6.0–8.4)',
    danger: 'Outside species range by > 0.5',
    color: '#2A6A3A',
    desc: 'Logarithmic scale of acidity/alkalinity. Stability matters as much as value — a pH swing of 0.5 in 24 hours stresses fish more than a stable "wrong" pH. Most common aquarium fish tolerate 6.8–7.8 despite different "ideal" ranges.',
    fix: 'Identify cause of instability (low KH, CO2 fluctuation). Adjust gradually — never more than 0.2 per day.',
  },
  {
    name: 'KH (Carbonate Hardness)',
    idealRange: '3–8 dKH for stability',
    danger: '< 3 dKH (pH crash risk)',
    color: '#0E6B8A',
    desc: 'The buffer capacity of water — KH resists pH swings. Low KH allows sudden pH crashes that kill fish overnight. If your pH is unstable, test KH first. Low KH is corrected with sodium bicarbonate (baking soda) or crushed coral.',
    fix: 'Add crushed coral to filter, dose sodium bicarbonate (1 tsp per 50 gallons raises KH by ~1 dKH).',
  },
  {
    name: 'GH (General Hardness)',
    idealRange: 'Varies by species (4–20 dGH)',
    danger: 'Far outside species range',
    color: '#0E6B8A',
    desc: 'Total dissolved minerals (calcium and magnesium primarily). Relevant for: breeding (many soft-water species require low GH to trigger spawning), shrimp keeping (Caridina species require very low GH), and plant growth (minerals support plant health).',
    fix: 'Reduce: RO/DI water dilution, peat filtration. Raise: remineralization salts, crushed coral.',
  },
  {
    name: 'Temperature',
    idealRange: '72–82°F (tropical freshwater)',
    danger: 'Fluctuations > 2°F/day',
    color: '#C8952A',
    desc: 'Metabolic rate, immune function, and oxygen solubility all depend on temperature. Stability is critical — sudden swings suppress immunity and trigger disease. Verify heater accuracy with a calibrated thermometer. Room temperature may be adequate for some species (goldfish, white cloud minnows, some livebearers).',
    fix: 'Quality heater (Aqueon, Eheim Jager) + quality thermometer. Always verify separately.',
  },
]

export default function WaterChemistryPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-16">
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Water Chemistry</span>
        </div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(30px, 5vw, 54px)' }}>
          Aquarium Water Chemistry
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed mb-6">
          Every parameter explained — what it means, why it matters, what&apos;s dangerous, and how to fix it. The foundation of successful fishkeeping.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/health/nitrogen-cycle-explained"
            className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors">
            Nitrogen Cycle Guide →
          </Link>
          <Link href="/setup"
            className="inline-flex items-center border border-white/20 text-white/80 font-medium text-sm px-6 py-3 rounded no-underline hover:border-white/40 transition-colors">
            Tank Setup Guide
          </Link>
        </div>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Water Chemistry</span>
      </nav>

      {/* Quick reference */}
      <div className="bg-brand-surface border-b border-brand-border px-container sm:px-container-sm py-5">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference — Target Ranges</div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                {['Parameter', 'Target', 'Danger Zone', 'Test Frequency'].map(h => (
                  <th key={h} className="text-left px-4 py-2.5 font-bold tracking-wide text-2xs uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Ammonia', '0 ppm', '> 0.5 ppm', 'Weekly (daily if new tank)'],
                ['Nitrite', '0 ppm', '> 0.5 ppm', 'Weekly (daily if cycling)'],
                ['Nitrate', '< 20 ppm', '> 80 ppm', 'Weekly'],
                ['pH', '6.8–7.8 (most fish)', 'Swings > 0.5/day', 'Weekly'],
                ['KH', '3–8 dKH', '< 3 dKH', 'Monthly'],
                ['Temperature', '76–80°F (tropical)', 'Swings > 2°F/day', 'Daily check'],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2.5 text-brand-text-mid border-b border-brand-border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Parameter deep-dives */}
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid gap-6 max-w-content-wide mx-auto">
          {PARAMETERS.map((param) => (
            <div key={param.name} className="bg-brand-white border border-brand-border rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-display font-bold text-brand-dark text-xl m-0">{param.name}</h2>
                <div className="flex gap-2 flex-shrink-0 flex-wrap">
                  <span className="text-2xs font-bold px-2.5 py-1 rounded-pill" style={{ background: `${param.color}10`, color: param.color, border: `1px solid ${param.color}30` }}>
                    Target: {param.idealRange}
                  </span>
                </div>
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">{param.desc}</p>
              <div className="bg-brand-surface rounded-lg px-4 py-3">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">If out of range:</div>
                <p className="text-xs text-brand-text-mid leading-relaxed m-0">{param.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-content-wide mx-auto">
          {[
            { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', desc: 'Why your tank must be cycled before adding fish' },
            { title: 'Tank Setup Guide', href: '/setup', desc: 'Step-by-step first aquarium setup' },
            { title: 'Betta Fish Care', href: '/species/betta-fish', desc: 'Species-specific water requirements' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="font-display font-semibold text-brand-dark text-sm mb-1">{link.title}</div>
              <div className="text-xs text-brand-text-light">{link.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-12">
        <EmailCapture variant="section" siteId="fish-com"
          title="The Weekly Tank"
          subtitle="Water chemistry tips, species spotlights, and equipment picks every Thursday."
          source="water-chemistry" ctaText="Subscribe Free"
          perks={['🧪 Water chemistry', '🐠 Species guides', '⚙️ Equipment picks']} />
      </div>
    </>
  )
}
