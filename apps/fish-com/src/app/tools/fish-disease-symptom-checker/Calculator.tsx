'use client'

/**
 * Fish Disease Symptom Checker -- fish-com /tools/fish-disease-symptom-checker
 *
 * Educational symptom matcher, NOT a diagnosis. The keeper ticks the signs they
 * observe; the tool ranks the conditions from Fish.com's vetted disease guides
 * by how many signs match and links to each guide. Because poor water quality
 * causes or mimics most fish illness, the tool ALWAYS leads with "test your
 * water first". No fabricated certainty — it narrows possibilities, it does not
 * confirm a diagnosis.
 */

import { useMemo, useState } from 'react'
import Link from 'next/link'

interface Symptom {
  id: string
  label: string
}
const SYMPTOMS: Symptom[] = [
  { id: 'white-spots', label: 'White spots like grains of salt' },
  { id: 'gold-dust', label: 'Fine gold or rust-coloured dust on the skin' },
  { id: 'cotton-growth', label: 'Cotton-like or fuzzy white/grey patches' },
  { id: 'frayed-fins', label: 'Ragged, frayed, or receding fins' },
  { id: 'red-sores', label: 'Red streaks, sores, or ulcers on the body' },
  { id: 'pinecone', label: 'Swollen belly with raised (pinecone) scales' },
  { id: 'bulging-eye', label: 'Bulging or cloudy eye(s)' },
  { id: 'gasping', label: 'Gasping at the surface / rapid gill movement' },
  { id: 'flashing', label: 'Flashing — rubbing or scratching against objects' },
  { id: 'clamped-fins', label: 'Clamped fins held tight to the body' },
  { id: 'buoyancy', label: 'Trouble swimming — floating, sinking, or tilting' },
  { id: 'visible-parasites', label: 'Visible worms or lice attached to the body' },
  { id: 'lethargy', label: 'Lethargy, hiding, or loss of appetite' },
]

interface Condition {
  slug: string
  name: string
  signs: string[]
  note: string
}
const CONDITIONS: Condition[] = [
  { slug: 'ich-treatment', name: 'Ich (white spot)', signs: ['white-spots', 'flashing', 'clamped-fins', 'gasping'], note: 'The classic salt-grain spots; one of the most common and treatable fish diseases.' },
  { slug: 'velvet-disease', name: 'Velvet', signs: ['gold-dust', 'flashing', 'clamped-fins', 'lethargy', 'gasping'], note: 'A fine gold dusting, best seen by torchlight; acts fast, treat promptly.' },
  { slug: 'fin-rot', name: 'Fin rot', signs: ['frayed-fins', 'red-sores', 'clamped-fins'], note: 'Usually a bacterial follow-on from poor water quality or fin nipping.' },
  { slug: 'columnaris', name: 'Columnaris (mouth/body “fungus”)', signs: ['cotton-growth', 'frayed-fins', 'lethargy'], note: 'Cotton-like patches, often around the mouth; bacterial, not a true fungus, and can move quickly.' },
  { slug: 'dropsy-treatment', name: 'Dropsy', signs: ['pinecone', 'lethargy'], note: 'A symptom of internal (often organ) failure rather than one disease; the pinecone look is a late, serious sign.' },
  { slug: 'pop-eye', name: 'Pop-eye', signs: ['bulging-eye', 'red-sores'], note: 'One or both eyes bulging; can be injury, infection, or water quality.' },
  { slug: 'swim-bladder-disease', name: 'Swim bladder disorder', signs: ['buoyancy', 'pinecone'], note: 'Loss of buoyancy control; often diet/constipation in fancy goldfish and bettas.' },
  { slug: 'gill-flukes', name: 'Gill flukes', signs: ['gasping', 'flashing', 'clamped-fins'], note: 'Microscopic parasites on the gills; heavy surface-gasping with few skin signs is a clue.' },
  { slug: 'fish-lice-anchor-worm', name: 'Fish lice / anchor worm', signs: ['visible-parasites', 'flashing', 'red-sores'], note: 'Larger parasites you can actually see attached to the fish.' },
  { slug: 'bacterial-infections', name: 'Bacterial infection (general)', signs: ['red-sores', 'lethargy', 'bulging-eye'], note: 'Reddening, ulcers, and lethargy; almost always rooted in water quality or stress.' },
]

export default function FishDiseaseSymptomChecker() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const ranked = useMemo(() => {
    if (selected.size === 0) return []
    return CONDITIONS.map((c) => {
      const matches = c.signs.filter((s) => selected.has(s)).length
      return { ...c, matches, score: matches / c.signs.length }
    })
      .filter((c) => c.matches > 0)
      .sort((a, b) => b.matches - a.matches || b.score - a.score)
      .slice(0, 4)
  }, [selected])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-3 rounded-lg border border-brand-primary/30 bg-brand-primary/5 p-4">
        <p className="text-sm font-semibold text-brand-dark">Before anything else: test your water.</p>
        <p className="mt-1 text-2xs leading-snug text-brand-text-mid">
          Ammonia, nitrite, and nitrate problems cause or mimic most of the signs below — gasping, clamped fins,
          lethargy, and sudden deaths are often water quality, not infection. A{' '}
          <Link href="/reviews/best-water-test-kits" className="text-brand-primary hover:underline">liquid test kit</Link>{' '}
          rules that out first.
        </p>
      </div>

      <p className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-brand-text-light">Tick the signs you see</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {SYMPTOMS.map((s) => {
          const checked = selected.has(s.id)
          return (
            <label
              key={s.id}
              className={[
                'flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition-colors',
                checked ? 'border-brand-primary bg-brand-white' : 'border-brand-border bg-brand-white hover:border-brand-primary',
              ].join(' ')}
            >
              <input type="checkbox" checked={checked} onChange={() => toggle(s.id)} className="mt-0.5 shrink-0" />
              <span className="text-brand-text-dark leading-snug">{s.label}</span>
            </label>
          )
        })}
      </div>

      <div className="mt-6">
        {ranked.length > 0 ? (
          <div className="rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
            <h3 className="font-display text-lg font-bold text-brand-dark mb-1">Conditions that fit those signs</h3>
            <p className="text-2xs text-brand-text-light mb-4">
              Ranked by how many of your signs match — a starting point to investigate, not a diagnosis. Many signs
              overlap, so read the linked guide and confirm before treating.
            </p>
            <ul className="space-y-4">
              {ranked.map((c) => (
                <li key={c.slug} className="border-b border-brand-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-brand-dark text-sm">{c.name}</span>
                    <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                      {c.matches} sign{c.matches === 1 ? '' : 's'} match
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{c.note}</p>
                  <Link
                    href={`/health/${c.slug}`}
                    className="mt-1.5 inline-block text-xs font-semibold text-brand-primary underline-offset-2 hover:underline no-underline"
                  >
                    Read the {c.name} guide →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-brand-text-light">
            Tick the signs you can see on your fish to find the conditions that match.
          </p>
        )}
      </div>

      <p className="mt-4 text-2xs leading-snug text-brand-text-light">
        Educational only — this narrows the possibilities, it does not diagnose. Confirm against the linked guide,
        quarantine affected fish where you can, and see the{' '}
        <Link href="/health/medicating-aquarium-fish" className="text-brand-primary hover:underline">medicating guide</Link>{' '}
        before dosing any treatment.
      </p>
    </div>
  )
}
