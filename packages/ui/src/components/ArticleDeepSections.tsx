'use client'

/**
 * Collapses the deep sections of very long articles on phones (Vets.co and
 * Ferret.com only). Nothing is removed: each folded section keeps its text in
 * the page with hidden="until-found", so find-in-page, the jump list and
 * search engines still reach it, and a "Show section" button under its
 * heading opens it. Kept open: the first three sections, sources, FAQs, and
 * any section with a shop link or a disclosure.
 */

import { useEffect, useRef } from 'react'

const KEEP = /source|reference|faq|question|disclosure|how we/i
const SHOP = 'a[href*="/go/"], [data-shop-placement], [data-affiliate-disclosure]'

export function ArticleDeepSections({ keepOpen = 3, minScreens = 10 }: { keepOpen?: number; minScreens?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const article = ref.current?.closest('article')
    if (!article || window.innerWidth >= 1024) return
    if (article.getBoundingClientRect().height < minScreens * window.innerHeight) return
    const heads = Array.from(article.querySelectorAll('h2')).filter((h) => !h.closest('details, aside, [data-jump-nav]'))
    const cleanups: Array<() => void> = []
    heads.forEach((h, i) => {
      if (i < keepOpen || KEEP.test(h.textContent || '')) return
      const parent = h.parentElement
      if (!parent) return
      const nodes: HTMLElement[] = []
      for (let n = h.nextElementSibling; n && n.tagName !== 'H2'; n = n.nextElementSibling) {
        if (n instanceof HTMLElement) nodes.push(n)
      }
      if (!nodes.length || nodes.some((n) => n.matches(SHOP) || n.querySelector(SHOP) || n.querySelector('h2'))) return
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.dataset.deepSectionToggle = ''
      btn.className = 'not-prose mb-4 inline-flex min-h-11 items-center rounded-lg border border-brand-border bg-brand-surface px-4 text-sm font-semibold text-brand-primary'
      const set = (open: boolean) => {
        for (const n of nodes) {
          if (open) n.removeAttribute('hidden')
          else n.setAttribute('hidden', 'until-found')
        }
        btn.setAttribute('aria-expanded', String(open))
        btn.textContent = open ? 'Hide section' : 'Show section'
        btn.hidden = open
      }
      btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'))
      const onMatch = () => set(true)
      for (const n of nodes) n.addEventListener('beforematch', onMatch)
      h.insertAdjacentElement('afterend', btn)
      set(false)
      h.dataset.deepSection = 'collapsed'
      cleanups.push(() => {
        set(true)
        btn.remove()
        for (const n of nodes) n.removeEventListener('beforematch', onMatch)
      })
    })
    // A jump-list link (or any #hash) into a folded section opens it.
    const openForHash = () => {
      const id = decodeURIComponent(location.hash.slice(1))
      const target = id ? document.getElementById(id) : null
      const toggle = target?.nextElementSibling
      if (toggle instanceof HTMLButtonElement && toggle.dataset.deepSectionToggle !== undefined && toggle.getAttribute('aria-expanded') !== 'true') toggle.click()
    }
    window.addEventListener('hashchange', openForHash)
    openForHash()
    return () => {
      window.removeEventListener('hashchange', openForHash)
      cleanups.forEach((c) => c())
    }
  }, [keepOpen, minScreens])

  return <span ref={ref} hidden data-deep-sections />
}
