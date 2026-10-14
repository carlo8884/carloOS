'use client'

/**
 * "On this page" jump list for long articles (Vets.co and Ferret.com only).
 * The closed <details> is server-rendered so nothing shifts when the list
 * fills in. The list is read from the article's own h2 headings after mount;
 * a heading without an id gets a slug id so its link works.
 */

import { useEffect, useRef, useState } from 'react'


interface Item {
  id: string
  label: string
}

function slug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'section'
}

export function ArticleJumpNav() {
  const ref = useRef<HTMLDetailsElement>(null)
  const [items, setItems] = useState<Item[] | null>(null)

  useEffect(() => {
    const article = ref.current?.closest('article')
    if (!article) return
    const used = new Set<string>()
    const found: Item[] = []
    for (const h of Array.from(article.querySelectorAll('h2'))) {
      if (h.closest('details, [data-jump-nav], aside, footer')) continue
      const label = (h.textContent || '').trim()
      if (!label) continue
      if (!h.id) {
        let id = slug(label)
        while (document.getElementById(id) || used.has(id)) id += '-x'
        h.id = id
      }
      used.add(h.id)
      found.push({ id: h.id, label })
    }
    setItems(found)
  }, [])

  return (
    <details
      ref={ref}
      data-jump-nav
      hidden={items !== null && items.length < 3}
      className="not-prose mb-6 rounded-lg border border-brand-border bg-brand-surface px-4"
    >
      <summary className="flex min-h-11 cursor-pointer items-center text-sm font-semibold text-brand-text-dark">
        On this page{items && items.length ? ` · ${items.length} sections` : ''}
      </summary>
      <nav aria-label="On this page" className="pb-3">
        <ol className="m-0 list-decimal space-y-1 pl-5 text-sm">
          {(items || []).map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="inline-flex min-h-6 items-center text-brand-primary underline-offset-2 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  )
}
