'use client'

import { useState } from 'react'
import { checklistCopyText } from '../lib/guide-checklist'
import { trackEvent } from '../lib/track-event'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Printable shopping list for a guide. Items are sentences already on the
 * page. Copy and print do not collect an address.
 */
export function GuideChecklist({
  siteId,
  items,
}: {
  siteId: string
  items: readonly string[]
}) {
  const [copied, setCopied] = useState(false)
  const text = checklistCopyText(items)

  async function copyChecklist() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        throw new Error('clipboard unavailable')
      }
    } catch {
      const area = document.createElement('textarea')
      area.value = text
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.left = '-9999px'
      document.body.appendChild(area)
      area.select()
      try {
        document.execCommand('copy')
      } catch {
        /* the click still counts */
      }
      area.remove()
    }
    trackEvent('guide_checklist_copy', {
      site: siteId,
      page: window.location.pathname,
    })
    setCopied(true)
  }

  function printChecklist() {
    const frame = document.createElement('iframe')
    frame.setAttribute('title', 'Shopping checklist')
    frame.style.position = 'fixed'
    frame.style.right = '0'
    frame.style.bottom = '0'
    frame.style.width = '0'
    frame.style.height = '0'
    frame.style.border = '0'
    document.body.appendChild(frame)
    const doc = frame.contentDocument
    if (doc) {
      const lines = items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')
      doc.open()
      doc.write(
        `<!doctype html><html><head><title>Shopping checklist</title></head><body><h1>Shopping checklist</h1><ul>${lines}</ul></body></html>`,
      )
      doc.close()
      frame.contentWindow?.focus()
      frame.contentWindow?.print()
    }
    trackEvent('guide_checklist_print', {
      site: siteId,
      page: window.location.pathname,
    })
    window.setTimeout(() => frame.remove(), 1000)
  }

  return (
    <section data-guide-checklist className="my-6 rounded-lg border border-brand-border bg-brand-surface p-4">
      <h2 className="font-display text-base font-semibold text-brand-dark mt-0 mb-3">Shopping checklist</h2>
      <ul className="m-0 pl-5 text-sm text-brand-text-mid leading-relaxed">
        {items.map((item) => (
          <li key={item} className="mb-1">{item}</li>
        ))}
      </ul>
      <div className="flex gap-3 flex-wrap mt-4">
        <button
          type="button"
          onClick={copyChecklist}
          className="px-5 py-3 bg-brand-primary text-brand-white text-sm font-bold rounded cursor-pointer border-0 hover:bg-brand-primary-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          Copy checklist
        </button>
        <button
          type="button"
          onClick={printChecklist}
          className="px-5 py-3 bg-brand-white text-brand-dark text-sm font-bold rounded cursor-pointer border border-brand-border hover:bg-brand-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          Print checklist
        </button>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-brand-text-mid mt-2 mb-0">
        {copied ? 'Checklist copied.' : ''}
      </p>
    </section>
  )
}
