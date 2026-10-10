'use client'

import { useState } from 'react'
import {
  CLAIM_HELPER_VERIFIED_ON,
  GENERIC_CLAIM_CHECKLIST,
  GENERIC_CLAIM_CHECKLIST_LABEL,
  getInsurerClaim,
  type ClaimDocStatus,
  type ClaimSubmitMethod,
  type InsurerClaim,
} from '../../data/claim-helper'

/**
 * Pet insurance claim helper form.
 * Everything stays in component state. Nothing is stored or sent, and no
 * insurer URL is rendered as a link here; sources live on the server page.
 */

const INSURER_OPTIONS: { value: string; label: string }[] = [
  { value: 'trupanion', label: 'Trupanion' },
  { value: 'healthy-paws', label: 'Healthy Paws' },
  { value: 'embrace', label: 'Embrace' },
  { value: 'pets-best', label: 'Pets Best' },
  { value: 'lemonade', label: 'Lemonade' },
  { value: 'figo', label: 'Figo' },
  { value: 'nationwide', label: 'Nationwide' },
  { value: 'aspca', label: 'ASPCA' },
  { value: 'spot', label: 'Spot' },
  { value: 'other', label: 'Other' },
]

const METHOD_LABEL: Record<ClaimSubmitMethod, string> = {
  app: 'App',
  portal: 'Online account',
  email: 'Email',
  fax: 'Fax',
  mail: 'Mail',
}

const STATUS_LABEL: Record<ClaimDocStatus, string> = {
  required: 'Required',
  conditional: 'Sometimes',
  'not-required': 'Not required',
  'not-stated': 'Not stated on the claims page',
}

interface LineItem {
  id: number
  description: string
  amount: string
}

const FIELD = 'block w-full min-h-11 rounded-md border border-brand-border bg-white px-3 py-2 text-sm text-brand-dark'
const LABEL = 'mb-1 block text-sm font-semibold text-brand-dark'
const BUTTON =
  'inline-flex min-h-11 items-center rounded-md border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-dark hover:border-brand-primary'

function formatDate(iso: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return ''
  const date = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' })
}

function addDays(iso: string, days: number): string {
  const date = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return ''
  date.setUTCDate(date.getUTCDate() + days)
  return date.toISOString().slice(0, 10)
}

function money(value: number): string {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function amountOf(item: LineItem): number {
  const value = Number.parseFloat(item.amount)
  return Number.isFinite(value) && value > 0 ? value : 0
}

function docLines(claim: InsurerClaim | undefined): string[] {
  if (claim?.verified) {
    return claim.docs
      .filter((doc) => doc.status === 'required' || doc.status === 'conditional')
      .map((doc) => `${doc.label} (${doc.status === 'required' ? 'required' : doc.note || 'sometimes'})`)
  }
  return GENERIC_CLAIM_CHECKLIST.slice(0, 3).map((item) => item.label)
}

async function copyText(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }
    throw new Error('clipboard unavailable')
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
      /* nothing else to try */
    }
    area.remove()
  }
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function printText(title: string, text: string) {
  const frame = document.createElement('iframe')
  frame.setAttribute('title', title)
  frame.style.position = 'fixed'
  frame.style.right = '0'
  frame.style.bottom = '0'
  frame.style.width = '0'
  frame.style.height = '0'
  frame.style.border = '0'
  document.body.appendChild(frame)
  const doc = frame.contentDocument
  if (doc) {
    doc.open()
    doc.write(
      `<!doctype html><html><head><title>${escapeHtml(title)}</title></head><body><pre style="font:14px/1.5 system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre></body></html>`,
    )
    doc.close()
    frame.contentWindow?.focus()
    frame.contentWindow?.print()
  }
  window.setTimeout(() => frame.remove(), 1000)
}

export function ClaimHelper() {
  const [petName, setPetName] = useState('')
  const [species, setSpecies] = useState('')
  const [age, setAge] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const [clinic, setClinic] = useState('')
  const [reason, setReason] = useState('')
  const [policy, setPolicy] = useState('')
  const [insurer, setInsurer] = useState('')
  const [items, setItems] = useState<LineItem[]>([{ id: 1, description: '', amount: '' }])
  const [nextId, setNextId] = useState(2)
  const [copied, setCopied] = useState<'' | 'summary' | 'email'>('')

  const claim = insurer && insurer !== 'other' ? getInsurerClaim(insurer) : undefined
  const insurerName = claim?.name ?? (insurer === 'other' ? 'your insurer' : '')
  const total = items.reduce((sum, item) => sum + amountOf(item), 0)
  const visitLabel = formatDate(visitDate)
  const pet = petName.trim() || 'my pet'
  const ageText = age.trim() ? `${age.trim()} ${age.trim() === '1' ? 'year' : 'years'} old` : ''
  const petDetails = [species, ageText].filter(Boolean).join(', ')

  const deadlineDue =
    claim?.verified && claim.deadlineDays && visitDate ? formatDate(addDays(visitDate, claim.deadlineDays)) : ''

  function updateItem(id: number, patch: Partial<LineItem>) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)))
    setCopied('')
  }

  function addItem() {
    setItems((prev) => [...prev, { id: nextId, description: '', amount: '' }])
    setNextId((id) => id + 1)
  }

  function removeItem(id: number) {
    setItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev))
  }

  const lineText = items
    .filter((item) => item.description.trim() || amountOf(item) > 0)
    .map((item) => `- ${item.description.trim() || 'Line item'}: ${money(amountOf(item))}`)

  const summary = [
    'PET INSURANCE CLAIM SUMMARY',
    `Insurer: ${claim?.name ?? (insurer === 'other' ? 'Other' : '')}`,
    policy.trim() ? `Policy number: ${policy.trim()}` : null,
    `Pet: ${petName.trim() || '(name)'}${petDetails ? ` (${petDetails})` : ''}`,
    `Visit date: ${visitLabel || '(date)'}`,
    `Clinic: ${clinic.trim() || '(clinic)'}`,
    `Diagnosis / reason for visit: ${reason.trim() || '(reason)'}`,
    '',
    'Invoice line items:',
    ...(lineText.length ? lineText : ['- (none entered)']),
    `Total: ${money(total)}`,
    '',
    'Documents to attach:',
    ...docLines(claim).map((line) => `- ${line}`),
    claim?.verified && claim.deadline ? `\nFiling deadline (${claim.name}): ${claim.deadline}${deadlineDue ? `. Counted from the visit date: ${deadlineDue}` : ''}` : null,
    '',
    'This is a summary for your records. File the claim through your insurer.',
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  const emailTo = claim?.verified && claim.email ? claim.email : ''
  const subject = `Claim for ${pet}${visitLabel ? `, visit on ${visitLabel}` : ''}${policy.trim() ? ` (policy ${policy.trim()})` : ''}`
  const email = [
    emailTo ? `To: ${emailTo}` : null,
    `Subject: ${subject}`,
    '',
    'Hello,',
    '',
    `Please accept this claim for ${pet}${petDetails ? ` (${petDetails})` : ''}, seen at ${clinic.trim() || '(clinic)'}${visitLabel ? ` on ${visitLabel}` : ''} for ${reason.trim() || '(reason for visit)'}. The invoice total is ${money(total)}.`,
    policy.trim() ? `\nPolicy number: ${policy.trim()}` : null,
    '',
    'Attached:',
    ...docLines(claim).map((line) => `- ${line}`),
    '',
    'Please let me know if anything else is needed to process this claim.',
    '',
    'Thank you,',
    '(your name)',
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  async function copy(kind: 'summary' | 'email') {
    await copyText(kind === 'summary' ? summary : email)
    setCopied(kind)
  }

  return (
    <div className="not-prose my-6 space-y-6">
      <form
        className="rounded-xl border border-brand-border bg-brand-surface p-5"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Claim details"
      >
        <fieldset className="m-0 min-w-0 border-0 p-0">
          <legend className="mb-3 font-display text-lg font-bold text-brand-dark">Pet and visit</legend>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="ch-pet" className={LABEL}>Pet name</label>
              <input id="ch-pet" className={FIELD} value={petName} onChange={(e) => setPetName(e.target.value)} autoComplete="off" />
            </div>
            <div>
              <label htmlFor="ch-species" className={LABEL}>Species</label>
              <select id="ch-species" className={FIELD} value={species} onChange={(e) => setSpecies(e.target.value)}>
                <option value="">Choose</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="ch-age" className={LABEL}>Age (years)</label>
              <input
                id="ch-age"
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                className={FIELD}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="ch-date" className={LABEL}>Visit date</label>
              <input id="ch-date" type="date" className={FIELD} value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="ch-clinic" className={LABEL}>Clinic</label>
              <input id="ch-clinic" className={FIELD} value={clinic} onChange={(e) => setClinic(e.target.value)} autoComplete="off" />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="ch-reason" className={LABEL}>Diagnosis or reason for visit</label>
              <textarea
                id="ch-reason"
                rows={2}
                className={FIELD}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="m-0 mt-6 min-w-0 border-0 p-0">
          <legend className="mb-3 font-display text-lg font-bold text-brand-dark">Invoice line items</legend>
          <ul className="m-0 list-none space-y-3 p-0" aria-label="Line items">
            {items.map((item, index) => (
              <li key={item.id} className="grid grid-cols-[1fr_8rem_auto] items-end gap-2" data-line-item>
                <div>
                  <label htmlFor={`ch-desc-${item.id}`} className={LABEL}>Item {index + 1}</label>
                  <input
                    id={`ch-desc-${item.id}`}
                    className={FIELD}
                    placeholder="Exam, X-ray, medication"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, { description: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor={`ch-amt-${item.id}`} className={LABEL}>Amount ($)</label>
                  <input
                    id={`ch-amt-${item.id}`}
                    type="number"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                    className={FIELD}
                    value={item.amount}
                    onChange={(e) => updateItem(item.id, { amount: e.target.value })}
                  />
                </div>
                <button
                  type="button"
                  className={BUTTON}
                  onClick={() => removeItem(item.id)}
                  disabled={items.length === 1}
                  aria-label={`Remove item ${index + 1}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <button type="button" className={BUTTON} onClick={addItem}>
              Add line item
            </button>
            <p className="m-0 text-base font-bold text-brand-dark" aria-live="polite">
              Total: <span data-claim-total>{money(total)}</span>
            </p>
          </div>
        </fieldset>

        <fieldset className="m-0 mt-6 min-w-0 border-0 p-0">
          <legend className="mb-3 font-display text-lg font-bold text-brand-dark">Insurer</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="ch-insurer" className={LABEL}>Your insurer</label>
              <select
                id="ch-insurer"
                className={FIELD}
                value={insurer}
                onChange={(e) => {
                  setInsurer(e.target.value)
                  setCopied('')
                }}
              >
                <option value="">Choose your insurer</option>
                {INSURER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="ch-policy" className={LABEL}>Policy number (optional)</label>
              <input id="ch-policy" className={FIELD} value={policy} onChange={(e) => setPolicy(e.target.value)} autoComplete="off" />
            </div>
          </div>
        </fieldset>
      </form>

      {insurer ? (
        <div data-calculator-result className="space-y-6" aria-live="polite">
          <section className="rounded-xl border border-brand-border bg-white p-5" aria-labelledby="ch-checklist-title">
            <h3 id="ch-checklist-title" className="mt-0 font-display text-lg font-bold text-brand-dark">
              {claim?.verified ? `${claim.name} claim checklist` : 'General claim checklist'}
            </h3>
            {claim?.verified ? (
              <>
                <p className="text-sm text-brand-text-mid">
                  <strong>How to file:</strong>{' '}
                  {claim.submitMethods.length ? claim.submitMethods.map((m) => METHOD_LABEL[m]).join(', ') : 'Not listed'}.{' '}
                  {claim.submitNote}
                </p>
                {claim.email || claim.fax ? (
                  <p className="text-sm text-brand-text-mid">
                    {claim.email ? <>Claims email: <span className="font-semibold">{claim.email}</span>. </> : null}
                    {claim.fax ? <>Claims fax: <span className="font-semibold">{claim.fax}</span>.</> : null}
                  </p>
                ) : null}
                <ul className="my-3 space-y-2 pl-5 text-sm text-brand-text-mid">
                  {claim.docs.map((doc) => (
                    <li key={doc.label}>
                      <span className="font-semibold text-brand-dark">{doc.label}:</span> {STATUS_LABEL[doc.status]}
                      {doc.note ? `. ${doc.note}` : ''}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-brand-text-mid" data-claim-deadline>
                  <strong>Filing deadline:</strong>{' '}
                  {claim.deadline
                    ? `${claim.deadline}.`
                    : 'The claims page does not state one. Check your policy documents.'}
                  {claim.deadline && claim.deadlineDays
                    ? deadlineDue
                      ? ` Counted from the visit date you entered, that is ${deadlineDue}. If the invoice is dated later, count from the date the insurer names.`
                      : ' Enter the visit date to see the date.'
                    : ''}
                </p>
                <p className="mb-0 text-xs text-brand-text-light">
                  From {claim.sourceLabel}, read {formatDate(claim.verifiedOn)}. Listed under Sources below.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-brand-text-mid" data-generic-checklist>
                  {insurer === 'other'
                    ? 'For any insurer not listed: '
                    : `${claim?.name ?? 'This insurer'}'s claims page could not be opened on ${formatDate(CLAIM_HELPER_VERIFIED_ON)}, so this is not its own list. `}
                  {GENERIC_CLAIM_CHECKLIST_LABEL}
                </p>
                <ul className="my-3 space-y-2 pl-5 text-sm text-brand-text-mid">
                  {GENERIC_CLAIM_CHECKLIST.map((item) => (
                    <li key={item.label}>
                      <span className="font-semibold text-brand-dark">{item.label}:</span> {item.detail}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section className="rounded-xl border border-brand-border bg-white p-5" aria-labelledby="ch-summary-title">
            <h3 id="ch-summary-title" className="mt-0 font-display text-lg font-bold text-brand-dark">Claim summary</h3>
            <pre
              data-claim-summary
              className="max-h-96 overflow-auto whitespace-pre-wrap rounded-md bg-brand-surface p-4 text-sm leading-relaxed text-brand-dark"
            >
              {summary}
            </pre>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" className={BUTTON} onClick={() => copy('summary')}>
                {copied === 'summary' ? 'Copied' : 'Copy summary'}
              </button>
              <button type="button" className={BUTTON} onClick={() => printText(`Claim summary for ${pet}`, summary)}>
                Print summary
              </button>
            </div>
          </section>

          <section className="rounded-xl border border-brand-border bg-white p-5" aria-labelledby="ch-email-title">
            <h3 id="ch-email-title" className="mt-0 font-display text-lg font-bold text-brand-dark">Cover email draft</h3>
            <p className="text-sm text-brand-text-mid">
              {emailTo
                ? `${insurerName} lists a claims email on its claims page. Attach the documents before you send.`
                : 'Use this with the insurer’s app, online account, or the address in your policy documents.'}
            </p>
            <pre
              data-claim-email
              className="max-h-96 overflow-auto whitespace-pre-wrap rounded-md bg-brand-surface p-4 text-sm leading-relaxed text-brand-dark"
            >
              {email}
            </pre>
            <div className="mt-3">
              <button type="button" className={BUTTON} onClick={() => copy('email')}>
                {copied === 'email' ? 'Copied' : 'Copy email'}
              </button>
            </div>
          </section>
        </div>
      ) : (
        <p className="text-sm text-brand-text-mid">Choose an insurer to see its checklist, the claim summary, and a cover email.</p>
      )}
    </div>
  )
}
