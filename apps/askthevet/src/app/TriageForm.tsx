'use client'

/**
 * Hero triage form for AskTheVet.com.
 * Posts to /api/triage, then router.push(/result/[id]).
 * Used on both the homepage and on /symptom/[slug] (with a seeded question).
 */

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { SPECIES_OPTIONS, type Species } from '@/data/symptoms'

interface TriageFormProps {
  defaultQuestion?: string
  defaultSpecies?: Species
}

export function TriageForm({
  defaultQuestion = '',
  defaultSpecies = 'Dog',
}: TriageFormProps) {
  const router = useRouter()
  const [question, setQuestion] = useState(defaultQuestion)
  const [species, setSpecies] = useState<Species>(defaultSpecies)
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [advanced, setAdvanced] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!question.trim()) {
      setError('Describe what your pet is doing.')
      return
    }
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: question.trim(),
          species,
          breed: breed.trim() || undefined,
          age: age ? Number(age) : undefined,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error ?? 'Something went wrong')
      }

      const data = (await res.json()) as { id: string }
      router.push(`/result/${data.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto" noValidate>
      <label htmlFor="symptom" className="sr-only">
        Describe your pet&apos;s symptom
      </label>
      <textarea
        id="symptom"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="e.g. My dog has been vomiting yellow foam since this morning and won't eat..."
        rows={3}
        maxLength={1000}
        disabled={loading}
        className="w-full px-4 py-3 rounded-md border border-brand-border bg-brand-white text-brand-text-dark text-base outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none"
      />

      <div className="flex flex-wrap gap-3 mt-3">
        <select
          aria-label="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value as Species)}
          disabled={loading}
          className="px-4 py-3 rounded-md border border-brand-border bg-brand-white text-brand-text-dark text-sm outline-none focus:border-brand-primary min-w-[140px]"
        >
          {SPECIES_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => setAdvanced((v) => !v)}
          className="px-4 py-3 rounded-md border border-brand-border bg-brand-white text-brand-text-mid text-sm hover:border-brand-primary"
        >
          {advanced ? 'Hide details' : 'Add breed / age'}
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 min-w-[180px] px-6 py-3 rounded-md bg-brand-primary text-brand-white text-sm font-semibold hover:bg-brand-primary-dark transition-colors disabled:opacity-60"
        >
          {loading ? 'Assessing…' : 'Get triage assessment'}
        </button>
      </div>

      {advanced && (
        <div className="flex flex-wrap gap-3 mt-3">
          <input
            aria-label="Breed (optional)"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed (optional)"
            disabled={loading}
            className="flex-1 min-w-[180px] px-4 py-3 rounded-md border border-brand-border text-sm outline-none focus:border-brand-primary"
          />
          <input
            aria-label="Age in years (optional)"
            type="number"
            min={0}
            max={50}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age in years (optional)"
            disabled={loading}
            className="w-[180px] px-4 py-3 rounded-md border border-brand-border text-sm outline-none focus:border-brand-primary"
          />
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-brand-danger" role="alert">
          {error}
        </p>
      )}

      <p className="mt-3 text-xs text-brand-text-light">
        Not a substitute for veterinary care. If your pet may be in a life-threatening
        situation, call your nearest emergency vet now.
      </p>
    </form>
  )
}
