/**
 * CarloOS BreedHealthCard — shared health condition display component.
 * Used on breed profile pages, species care guides, and health articles
 * across all 5 sites. Replaces the inline implementation scattered across pages.
 */

type RiskLevel = 'very-high' | 'high' | 'moderate' | 'low'

interface BreedHealthCardProps {
  name: string
  riskLevel: RiskLevel
  description: string
  /** Optional: signs to watch for */
  signs?: string[]
  /** Optional: management/prevention notes */
  management?: string
  /** Optional: link to deeper guide */
  guideHref?: string
  guideLabel?: string
}

const RISK_CONFIG: Record<RiskLevel, { label: string; bg: string; text: string; border: string }> = {
  'very-high': { label: 'Very High Risk', bg: 'rgba(200,74,42,0.06)', text: '#C84A2A', border: 'rgba(200,74,42,0.18)' },
  'high':      { label: 'High Risk',      bg: 'rgba(200,74,42,0.04)', text: '#C84A2A', border: 'rgba(200,74,42,0.12)' },
  'moderate':  { label: 'Moderate Risk',  bg: 'rgba(200,149,42,0.05)', text: '#C8952A', border: 'rgba(200,149,42,0.15)' },
  'low':       { label: 'Lower Risk',     bg: 'rgba(42,106,58,0.04)', text: '#2A6A3A', border: 'rgba(42,106,58,0.12)' },
}

export function BreedHealthCard({
  name,
  riskLevel,
  description,
  signs,
  management,
  guideHref,
  guideLabel,
}: BreedHealthCardProps) {
  const risk = RISK_CONFIG[riskLevel]

  return (
    <div
      className="rounded-xl p-6 mb-4"
      style={{ background: risk.bg, border: `1px solid ${risk.border}` }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display font-bold text-brand-dark text-lg m-0">{name}</h3>
        <span
          className="text-2xs font-bold tracking-wider uppercase px-3 py-1 rounded-pill flex-shrink-0"
          style={{ background: `${risk.bg}`, color: risk.text, border: `1px solid ${risk.border}` }}
        >
          {risk.label}
        </span>
      </div>

      <p className="text-sm text-brand-text-mid leading-relaxed mb-0">{description}</p>

      {signs && signs.length > 0 && (
        <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${risk.border}` }}>
          <div className="text-2xs font-bold tracking-eyebrow uppercase mb-2" style={{ color: risk.text }}>
            Signs to Watch For
          </div>
          <ul className="list-none m-0 p-0 flex flex-wrap gap-1.5">
            {signs.map((sign) => (
              <li
                key={sign}
                className="text-xs font-medium px-2.5 py-1 rounded-pill"
                style={{ background: 'rgba(255,255,255,0.7)', color: '#4A2E18', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                {sign}
              </li>
            ))}
          </ul>
        </div>
      )}

      {management && (
        <div className="mt-3 pt-3 text-sm text-brand-text-mid leading-relaxed"
          style={{ borderTop: `1px solid ${risk.border}` }}>
          <strong className="text-brand-dark">Management: </strong>{management}
        </div>
      )}

      {guideHref && (
        <div className="mt-3">
          <a
            href={guideHref}
            className="text-xs font-bold no-underline hover:underline"
            style={{ color: risk.text }}
          >
            {guideLabel ?? `Learn more →`}
          </a>
        </div>
      )}
    </div>
  )
}

// ─── Species variant for reptile/fish sites ───────────────────────────────────

interface SpeciesHealthCardProps {
  name: string
  prevalence: 'very-common' | 'common' | 'occasional'
  description: string
  prevention?: string
  emergency?: boolean
}

const PREV_CONFIG = {
  'very-common': { label: 'Very Common', color: '#C84A2A' },
  'common':      { label: 'Common',      color: '#C8952A' },
  'occasional':  { label: 'Occasional',  color: '#2A6A3A' },
}

export function SpeciesHealthCard({ name, prevalence, description, prevention, emergency }: SpeciesHealthCardProps) {
  const prev = PREV_CONFIG[prevalence]
  return (
    <div className="rounded-xl p-5 mb-4"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display font-bold text-brand-white text-base m-0 flex items-center gap-2">
          {emergency && <span>🚨</span>}{name}
        </h3>
        <span className="text-2xs font-bold px-2.5 py-0.5 rounded-pill flex-shrink-0"
          style={{ color: prev.color, background: `${prev.color}15`, border: `1px solid ${prev.color}30` }}>
          {prev.label}
        </span>
      </div>
      <p className="text-sm leading-relaxed mb-0" style={{ color: 'rgba(238,240,228,0.75)' }}>{description}</p>
      {prevention && (
        <p className="text-xs mt-2 mb-0" style={{ color: 'rgba(238,240,228,0.45)' }}>
          <strong style={{ color: 'rgba(238,240,228,0.65)' }}>Prevention: </strong>{prevention}
        </p>
      )}
    </div>
  )
}
