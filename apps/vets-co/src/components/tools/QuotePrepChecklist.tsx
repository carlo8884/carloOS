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
      <div className="space-y-6">
        {groups.map((group) => (
          <fieldset key={group.id} className="m-0 min-w-0 border-0 p-0">
            <legend className="mb-2 font-display text-lg font-bold text-brand-dark">{group.title}</legend>
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
        ))}
      </div>
    </div>
  )
}
