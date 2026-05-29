/**
 * /create — the portrait builder.
 *
 * Client component: collects photo, pet name, and up to three styles, then
 * POSTs to /api/generate (multipart). On success we redirect to /preview/[id].
 *
 * The deferred-server-component pattern (export a small server shell that
 * renders the client form) isn't needed here — the page is interactive end
 * to end, so we mark the whole module 'use client'.
 */
'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { STYLE_PRESETS } from '@/data/styles'

const MAX_STYLES = 3
const MAX_FILE_MB = 10

export default function CreatePage() {
  const router = useRouter()
  const params = useSearchParams()
  const initialStyle = params.get('style')

  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [petName, setPetName] = useState('')
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    initialStyle ? [initialStyle] : ['renaissance'],
  )
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleFile(f: File | null) {
    setError(null)
    if (!f) {
      setFile(null)
      setFilePreview(null)
      return
    }
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Image must be under ${MAX_FILE_MB}MB.`)
      return
    }
    setFile(f)
    setFilePreview(URL.createObjectURL(f))
  }

  function toggleStyle(id: string) {
    setSelectedStyles((curr) => {
      if (curr.includes(id)) return curr.filter((x) => x !== id)
      if (curr.length >= MAX_STYLES) return curr
      return [...curr, id]
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!petName.trim()) return setError('Please tell us your dog’s name.')
    if (selectedStyles.length === 0) return setError('Pick at least one style.')

    setSubmitting(true)
    setError(null)

    try {
      const fd = new FormData()
      fd.append('petName', petName.trim())
      fd.append('styles', selectedStyles.join(','))
      if (file) fd.append('photo', file)

      const res = await fetch('/api/generate', { method: 'POST', body: fd })
      const data = (await res.json()) as { id?: string; error?: string }
      if (!res.ok || !data.id) throw new Error(data.error ?? 'Generation failed')

      router.push(`/preview/${data.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-content-wide mx-auto px-container-sm sm:px-10 py-12 sm:py-16">
      <nav className="text-xs text-brand-text-light mb-6">
        <Link href="/" className="hover:text-brand-primary no-underline">
          ← Back to home
        </Link>
      </nav>

      <header className="mb-10">
        <h1 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight mb-2">
          Create a portrait
        </h1>
        <p className="text-base text-brand-text-mid max-w-xl">
          Three steps. About a minute. You&apos;ll see the result before you pay.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-10">
        <div className="space-y-8">
          {/* Step 1: upload */}
          <fieldset className="bg-brand-white rounded-xl border border-brand-border p-6">
            <legend className="px-2 text-xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Step 1 · Upload a photo
            </legend>
            <label
              htmlFor="photo"
              className="mt-3 block border-2 border-dashed border-brand-border rounded-lg p-6 text-center cursor-pointer hover:border-brand-primary transition-colors"
            >
              {filePreview ? (
                <div className="space-y-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={filePreview}
                    alt="Selected pet"
                    className="max-h-56 mx-auto rounded-lg"
                  />
                  <div className="text-sm text-brand-text-mid">
                    {file?.name} — <span className="text-brand-primary">change</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-4xl" aria-hidden="true">
                    📸
                  </div>
                  <div className="font-semibold text-sm text-brand-text-dark">
                    Click to upload a photo
                  </div>
                  <div className="text-xs text-brand-text-light">
                    JPG, PNG, or HEIC · up to {MAX_FILE_MB}MB
                  </div>
                </div>
              )}
              <input
                id="photo"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
              />
            </label>
          </fieldset>

          {/* Step 2: name */}
          <fieldset className="bg-brand-white rounded-xl border border-brand-border p-6">
            <legend className="px-2 text-xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Step 2 · Your dog
            </legend>
            <label htmlFor="petName" className="block mt-3 text-sm font-semibold text-brand-text-dark mb-2">
              What&apos;s their name?
            </label>
            <input
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Bailey"
              maxLength={40}
              className="w-full px-4 py-3 border border-brand-border rounded-md text-brand-text-dark text-base outline-none focus:border-brand-primary bg-brand-surface"
            />
          </fieldset>

          {/* Step 3: styles */}
          <fieldset className="bg-brand-white rounded-xl border border-brand-border p-6">
            <legend className="px-2 text-xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Step 3 · Pick up to {MAX_STYLES} styles
            </legend>
            <div className="text-sm text-brand-text-mid mt-3 mb-4">
              {selectedStyles.length} / {MAX_STYLES} selected
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {STYLE_PRESETS.map((s) => {
                const active = selectedStyles.includes(s.id)
                const disabled = !active && selectedStyles.length >= MAX_STYLES
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={active}
                    disabled={disabled}
                    onClick={() => toggleStyle(s.id)}
                    className={`rounded-lg overflow-hidden border-2 text-left transition-all ${
                      active
                        ? 'border-brand-primary shadow-card'
                        : disabled
                          ? 'border-brand-border opacity-40 cursor-not-allowed'
                          : 'border-brand-border hover:border-brand-primary'
                    }`}
                  >
                    <div className="aspect-square relative">
                      <Image src={s.sample} alt="" fill sizes="33vw" className="object-cover" />
                      {active && (
                        <span className="absolute top-2 right-2 bg-brand-primary text-white text-xs font-bold rounded-pill px-2 py-0.5">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="p-2.5">
                      <div className="text-xs font-bold text-brand-text-dark truncate">
                        {s.name}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </fieldset>

          {error && (
            <div role="alert" className="text-sm text-brand-danger bg-red-50 border border-red-100 rounded-md p-3">
              {error}
            </div>
          )}
        </div>

        {/* Summary / CTA — sticky on desktop */}
        <aside className="lg:sticky lg:top-24 self-start bg-brand-white rounded-xl border border-brand-border p-6">
          <div className="text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Your order
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex justify-between">
              <span className="text-brand-text-mid">Photo</span>
              <span className="font-semibold">{file ? '✓' : '—'}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-brand-text-mid">Name</span>
              <span className="font-semibold">{petName || '—'}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-brand-text-mid">Styles</span>
              <span className="font-semibold">{selectedStyles.length}</span>
            </li>
          </ul>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brand-primary text-white font-bold text-base py-4 rounded-pill cursor-pointer border-0 hover:bg-brand-primary-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? 'Generating your portrait…' : 'Generate preview (free)'}
          </button>
          <p className="text-xs text-brand-text-light text-center mt-3">
            You only pay after you see the result. Digital is $9, prints from $25.
          </p>
        </aside>
      </form>
    </div>
  )
}
