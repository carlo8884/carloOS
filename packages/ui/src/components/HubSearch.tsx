'use client'

import { useEffect, useId, useState } from 'react'
import { hubQueryMatches } from '../lib/hub-search'

/**
 * Filters hub cards already in the page. Cards stay in the HTML when
 * JavaScript is off. A card is a `[data-hub-item]` with `data-title` and
 * `data-topic`. `data-hub-count="off"` still filters a duplicate link but
 * leaves it out of the count. A `[data-hub-group]` hides when every card
 * inside it is hidden.
 */
export function HubSearch({
  listId,
  total,
  noun = 'guides',
}: {
  listId: string
  total: number
  noun?: string
}) {
  const reactId = useId()
  const inputId = `${reactId}-q`
  const statusId = `${reactId}-status`
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(total)

  useEffect(() => {
    const root = document.getElementById(listId)
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-hub-item]'))
    let shown = 0
    for (const el of items) {
      const match = hubQueryMatches(query, el.dataset.title ?? '', el.dataset.topic ?? '')
      setHubHidden(el, !match)
      if (match && el.dataset.hubCount !== 'off') shown += 1
    }
    for (const group of Array.from(root.querySelectorAll<HTMLElement>('[data-hub-group]'))) {
      const groupItems = Array.from(group.querySelectorAll<HTMLElement>('[data-hub-item]'))
      setHubHidden(group, groupItems.length > 0 && groupItems.every((el) => el.hidden))
    }
    setVisible(shown)
  }, [query, listId])

  const trimmed = query.trim()
  const status =
    trimmed === ''
      ? `${total} ${plural(total, noun)}`
      : visible === 0
        ? `No ${noun} match that search.`
        : `Showing ${visible} of ${total}`

  return (
    <form role="search" className="mb-6 max-w-md" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={inputId} className="block text-sm font-semibold text-brand-dark mb-2">
        Search by title or topic
      </label>
      <input
        id={inputId}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
        enterKeyHint="search"
        aria-controls={listId}
        aria-describedby={statusId}
        className="w-full border border-brand-border rounded-md px-3 py-2 text-base text-brand-dark bg-brand-white"
      />
      <p id={statusId} aria-live="polite" className="text-sm text-brand-text-mid mt-2 m-0">
        {status}
      </p>
    </form>
  )
}

function setHubHidden(el: HTMLElement, hide: boolean) {
  el.hidden = hide
  // `hidden` loses to utility classes such as `block` (display:block).
  if (hide) el.style.setProperty('display', 'none')
  else el.style.removeProperty('display')
}

function plural(count: number, noun: string): string {
  if (count === 1 && noun.endsWith('s')) return noun.slice(0, -1)
  return noun
}
