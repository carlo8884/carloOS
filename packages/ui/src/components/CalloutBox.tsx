/**
 * CarloOS CalloutBox — editorial callout box for notes / warnings / tips /
 * info / evidence-anchored claims.
 *
 * Five variants, each with its own color treatment and SVG icon. Used heavily
 * across the portfolio:
 *  - warning  : "Emergency — ER now" alerts (warm amber outline)
 *  - note     : neutral aside (subtle surface)
 *  - tip      : owner-tip / practical reminder (brand-pale background)
 *  - info     : informational aside (subtle border)
 *  - evidence : cite-anchored / WSAVA / AAHA / peer-reviewed callouts (green outline)
 *
 * Inline SVG icons — no emoji, no external icon font. Themes via CSS variables.
 */

import type { CSSProperties, ReactNode } from 'react'

export type CalloutVariant = 'note' | 'warning' | 'tip' | 'info' | 'evidence'

export interface CalloutBoxProps {
  variant: CalloutVariant
  title?: string
  children: ReactNode
  /** Override the default per-variant icon */
  icon?: ReactNode
}

interface VariantSpec {
  bg: string
  border: string
  accent: string
  textTitle: string
  role: 'note' | 'alert'
  ariaLabel: string
  defaultTitle: string
}

const VARIANTS: Record<CalloutVariant, VariantSpec> = {
  warning: {
    bg: 'rgba(200, 149, 42, 0.06)',
    border: '#C8952A',
    accent: '#C8952A',
    textTitle: '#7A5A18',
    role: 'alert',
    ariaLabel: 'Warning',
    defaultTitle: 'Warning',
  },
  note: {
    bg: 'var(--brand-surface)',
    border: 'var(--brand-border)',
    accent: 'var(--brand-text-light)',
    textTitle: 'var(--brand-text-dark)',
    role: 'note',
    ariaLabel: 'Note',
    defaultTitle: 'Note',
  },
  tip: {
    bg: 'var(--brand-primary-pale)',
    border: 'var(--brand-primary)',
    accent: 'var(--brand-primary)',
    textTitle: 'var(--brand-primary-dark, var(--brand-primary))',
    role: 'note',
    ariaLabel: 'Tip',
    defaultTitle: 'Tip',
  },
  info: {
    bg: 'var(--brand-white)',
    border: 'var(--brand-border)',
    accent: 'var(--brand-text-mid)',
    textTitle: 'var(--brand-text-dark)',
    role: 'note',
    ariaLabel: 'Information',
    defaultTitle: 'Info',
  },
  evidence: {
    bg: 'rgba(42, 106, 58, 0.04)',
    border: '#2A6A3A',
    accent: '#2A6A3A',
    textTitle: '#1E4A28',
    role: 'note',
    ariaLabel: 'Evidence',
    defaultTitle: 'Evidence-anchored',
  },
}

function DefaultIcon({ variant, color }: { variant: CalloutVariant; color: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (variant) {
    case 'warning':
      return (
        <svg {...common}>
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    case 'tip':
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
        </svg>
      )
    case 'evidence':
      return (
        <svg {...common}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    case 'info':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      )
    case 'note':
    default:
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
  }
}

export function CalloutBox({
  variant,
  title,
  children,
  icon,
}: CalloutBoxProps) {
  const spec = VARIANTS[variant]
  const heading = title ?? spec.defaultTitle

  const style: CSSProperties = {
    backgroundColor: spec.bg,
    borderLeft: `4px solid ${spec.border}`,
    borderTop: `1px solid ${spec.border}33`,
    borderRight: `1px solid ${spec.border}33`,
    borderBottom: `1px solid ${spec.border}33`,
  }

  return (
    <aside
      role={spec.role}
      aria-label={spec.ariaLabel}
      className="my-6 rounded-r-lg p-5"
      style={style}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex-shrink-0 mt-0.5"
          style={{ color: spec.accent }}
        >
          {icon ?? <DefaultIcon variant={variant} color={spec.accent} />}
        </span>
        <div className="min-w-0 flex-1">
          <div
            className="text-2xs font-bold tracking-eyebrow uppercase mb-2"
            style={{ color: spec.textTitle }}
          >
            {heading}
          </div>
          <div className="text-sm leading-relaxed text-brand-text-mid [&>p:last-child]:mb-0 [&>p]:mb-2">
            {children}
          </div>
        </div>
      </div>
    </aside>
  )
}
