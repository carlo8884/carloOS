'use client'

import { useState } from 'react'

export interface QuotePrepItem {
  id: string
  label: string
  detail: string
}

export interface QuotePrepGroup {
  id: string
  title: string
  items: QuotePrepItem[]
}

/**
 * Checkbox checklist for the insurance quote-prep tool.
 * Quote links stay on the server page so they are not gated on every box.
 */
export function QuotePrepChecklist({ groups }: { groups: QuotePrepGroup[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const total = groups.reduce((sum, group) => sum + group.items.length, 0)
  const done = Object.values(checked).filter(Boolean).length

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="not-prose my-6 rounded-xl border border-brand-border bg-brand-surface p-5">
      <p className="mb-4 text-sm font-semibold text-brand-dark" aria-live="polite">
        {done} of {total} checked. The quote links below stay available either way.
      </p>
      {/* Each group folds so the checklist fits in 1.5 mobile screens; tap a group to open it. */}
      <div className="space-y-3">
        {groups.map((group) => (
          <details key={group.id} className="group rounded-lg border border-brand-border bg-brand-white px-3">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 font-display text-lg font-bold text-brand-dark">
            <span>{group.title}</span>
            <span className="text-2xs font-semibold text-brand-text-light">
              {group.items.filter((item) => checked[item.id]).length}/{group.items.length}
            </span>
          </summary>
          <fieldset className="m-0 min-w-0 border-0 p-0 pb-3">
            <legend className="sr-only">{group.title}</legend>
            <ul className="m-0 list-none space-y-2 p-0">
              {group.items.map((item) => (
                <li key={item.id}>
                  <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md px-1 py-2">
                    <input
                      type="checkbox"
                      className="mt-1 h-6 w-6 shrink-0"
                      checked={Boolean(checked[item.id])}
                      onChange={() => toggle(item.id)}
                    />
                    <span>
                      <span className="block text-sm font-semibold text-brand-dark">{item.label}</span>
                      <span className="block text-sm leading-relaxed text-brand-text-mid">{item.detail}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
          </details>
        ))}
      </div>
    </div>
  )
}
