'use client'

/**
 * CarloOS FAQAccordion — accessible FAQ component with schema support.
 * Renders FAQPage JSON-LD schema inline.
 * Full keyboard navigation (Enter/Space to toggle, Escape to close).
 */

import { useState, useCallback, useId } from 'react'
import { buildFAQSchema, SchemaScript } from './SEOHead'

export interface FAQItem {
  question: string
  answer: string | React.ReactNode
  /** Plain text version for schema (required if answer is ReactNode) */
  answerText?: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  /** Inject FAQPage schema — pass false only if already included elsewhere */
  includeSchema?: boolean
  /** Start with first item open */
  defaultOpenIndex?: number
  /** Allow multiple items open simultaneously */
  allowMultiple?: boolean
}

export function FAQAccordion({
  items,
  includeSchema = true,
  defaultOpenIndex,
  allowMultiple = false,
}: FAQAccordionProps) {
  const uid = useId()
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    defaultOpenIndex !== undefined ? new Set([defaultOpenIndex]) : new Set()
  )

  const toggle = useCallback((index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(allowMultiple ? prev : new Set<number>())
      if (prev.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }, [allowMultiple])

  const schema = includeSchema ? buildFAQSchema({
    questions: items.map((item) => ({
      question: item.question,
      answer: item.answerText ?? (typeof item.answer === 'string' ? item.answer : ''),
    })),
  }) : null

  return (
    <>
      {schema && <SchemaScript schema={schema} />}

      <div className="flex flex-col gap-2.5" role="list">
        {items.map((item, i) => {
          const isOpen = openIndices.has(i)
          const btnId = `${uid}-btn-${i}`
          const panelId = `${uid}-panel-${i}`

          return (
            <div
              key={i}
              className="border border-brand-border rounded-lg overflow-hidden bg-brand-white"
              role="listitem"
            >
              {/* Question button */}
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setOpenIndices(new Set())
                }}
                className={[
                  'w-full flex items-start justify-between gap-4 px-6 py-5 text-left',
                  'text-base font-semibold text-brand-dark',
                  'cursor-pointer border-0 bg-transparent',
                  'hover:bg-brand-surface transition-colors duration-200',
                  'focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2',
                ].join(' ')}
              >
                <span className="flex-1">{item.question}</span>
                {/* Animated chevron */}
                <span
                  className={[
                    'text-brand-primary text-xl flex-shrink-0 transition-transform duration-200 leading-none',
                    isOpen ? 'rotate-45' : '',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {/* Answer panel */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                hidden={!isOpen}
                className={[
                  'px-6 pb-5 border-t border-brand-border',
                  'text-base text-brand-text-mid leading-relaxed',
                  isOpen ? 'block' : 'hidden',
                ].join(' ')}
              >
                <div className="pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
