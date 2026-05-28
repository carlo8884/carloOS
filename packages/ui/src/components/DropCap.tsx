/**
 * CarloOS DropCap — editorial first-letter treatment for opening paragraphs.
 *
 * Renders the first letter of `children` as a large display-font cap,
 * floated left and sized to span roughly 3 lines. Pure CSS — no JS effects
 * that break SSR. Skips the treatment entirely when the leading character
 * is not an alphabetic letter (e.g. a number, quote, or punctuation), so
 * the caller can use this safely on arbitrary opening paragraphs.
 *
 * The `letter` prop lets the caller override the first character explicitly,
 * which is useful when the body starts with a stylistic ligature.
 */

import type { ReactNode } from 'react'
import { Children } from 'react'

export interface DropCapProps {
  /** Paragraph contents. Must be a string or contain a leading string child. */
  children: ReactNode
  /** Explicit override for the dropped letter (single character) */
  letter?: string
}

function firstStringFromChildren(children: ReactNode): string {
  if (typeof children === 'string') return children
  if (typeof children === 'number') return String(children)
  if (Array.isArray(children) || children) {
    const arr = Children.toArray(children)
    for (const c of arr) {
      if (typeof c === 'string') return c
      if (typeof c === 'number') return String(c)
    }
  }
  return ''
}

function splitFirstLetter(children: ReactNode): { letter: string; rest: ReactNode } | null {
  if (typeof children === 'string') {
    return { letter: children.charAt(0), rest: children.slice(1) }
  }
  if (Array.isArray(children) || children) {
    const arr = Children.toArray(children)
    if (arr.length === 0) return null
    const first = arr[0]
    if (typeof first === 'string' && first.length > 0) {
      return { letter: first.charAt(0), rest: [first.slice(1), ...arr.slice(1)] }
    }
  }
  return null
}

export function DropCap({ children, letter }: DropCapProps) {
  const leading = letter ?? firstStringFromChildren(children).charAt(0)

  // Only emit the drop-cap if the leading character is alphabetic.
  if (!leading || !/[A-Za-z]/.test(leading)) {
    return <p className="text-lg leading-relaxed text-brand-text-mid mb-6">{children}</p>
  }

  // If the caller explicitly passed `letter`, render children verbatim alongside
  // the drop-cap. Otherwise strip the first character from `children` so we
  // don't double-print it.
  let body: ReactNode = children
  if (!letter) {
    const split = splitFirstLetter(children)
    if (split) body = split.rest
  }

  return (
    <p
      className="text-lg leading-relaxed text-brand-text-mid mb-6"
      style={{ overflow: 'hidden' }}
    >
      <span
        aria-hidden="true"
        className="font-display font-bold text-brand-primary float-left mr-3 select-none"
        style={{
          fontSize: '4.5em',
          lineHeight: '0.85',
          marginTop: '0.1em',
          marginBottom: '-0.05em',
        }}
      >
        {leading}
      </span>
      {body}
    </p>
  )
}
