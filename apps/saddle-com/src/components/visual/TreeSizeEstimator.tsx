'use client'

import { useMemo, useState } from 'react'

type HorseType = 'tb-arab' | 'sport-warmblood' | 'stock-qh' | 'cob-draft-cross' | 'pony'
type Withers = 'high-narrow' | 'medium' | 'flat-mutton'
type BackLength = 'short' | 'medium' | 'long'
type Style = 'english' | 'western'

interface HorseTypeOption {
  id: HorseType
  label: string
  description: string
}

const HORSE_TYPES: HorseTypeOption[] = [
  { id: 'tb-arab', label: 'Thoroughbred / Arab / fine-boned', description: 'Lighter frame, often higher and narrower withers.' },
  { id: 'sport-warmblood', label: 'Warmblood / sport horse', description: 'Broader through shoulder; variable wither profile.' },
  { id: 'stock-qh', label: 'Quarter Horse / stock type', description: 'Wider shoulder, often mutton or flat withers.' },
  { id: 'cob-draft-cross', label: 'Cob / draft cross / heavy build', description: 'Wide shoulder, often very wide barrel and flatter withers.' },
  { id: 'pony', label: 'Pony / mountain or native pony', description: 'Short, broad back; often wide-tree requirements at small overall height.' },
]

const WITHERS: Record<Withers, { label: string; note: string }> = {
  'high-narrow': { label: 'High / narrow', note: 'Visible bony prominence; saddle drops onto withers under load.' },
  medium: { label: 'Medium', note: 'Typical sport-horse profile; visible but not bony.' },
  'flat-mutton': { label: 'Flat / mutton', note: 'Little visible wither; saddle slides forward easily.' },
}

const BACK_LENGTH: Record<BackLength, { label: string; note: string }> = {
  short: { label: 'Short back', note: 'Less room for long-flap saddles or 17.5+ seats.' },
  medium: { label: 'Medium back', note: 'Most horses; most saddle lengths fit.' },
  long: { label: 'Long back', note: 'Watch for saddles sitting too far back over the loin.' },
}

interface Result {
  english: string
  western: string
  confidence: 'starting-point' | 'wider-fitter-window' | 'narrower-fitter-window'
  notes: string[]
}

function recommend(type: HorseType, withers: Withers, back: BackLength): Result {
  const notes: string[] = []

  let englishWidth = 'Medium (M / 31)'
  let westernBars = 'Semi-Quarter Horse bars (6.5" gullet)'
  let confidence: Result['confidence'] = 'starting-point'

  if (type === 'tb-arab') {
    englishWidth = withers === 'high-narrow' ? 'Narrow (N / 29)' : 'Medium-Narrow (MN / 30)'
    westernBars = 'Arab / Semi-Quarter Horse bars (6.25"-6.5" gullet)'
  } else if (type === 'sport-warmblood') {
    englishWidth = withers === 'high-narrow' ? 'Medium (M / 31)' : withers === 'medium' ? 'Medium-Wide (MW / 32)' : 'Wide (W / 33)'
    westernBars = withers === 'high-narrow' ? 'Semi-Quarter Horse bars' : 'Full Quarter Horse bars (6.75"-7" gullet)'
  } else if (type === 'stock-qh') {
    englishWidth = withers === 'flat-mutton' ? 'Wide (W / 33)' : 'Medium-Wide (MW / 32)'
    westernBars = 'Full Quarter Horse bars (6.75"-7" gullet)'
  } else if (type === 'cob-draft-cross') {
    englishWidth = 'Wide to Extra-Wide (W-XW / 33-34) — consider a hoop tree'
    westernBars = 'Wide / Draft bars (7"-7.5" gullet) — gaited or draft tree may be required'
  } else if (type === 'pony') {
    englishWidth = withers === 'flat-mutton' ? 'Wide (W) pony tree' : 'Medium (M) pony tree'
    westernBars = 'Pony / youth tree — verify bar spread matches barrel width'
  }

  if (withers === 'high-narrow') {
    notes.push('High narrow withers favor a narrower gullet with a generous gusset; budget extra time with a fitter to confirm clearance both static and at work.')
    confidence = 'narrower-fitter-window'
  }
  if (withers === 'flat-mutton') {
    notes.push('Flat / mutton withers struggle with most off-the-rack English trees and often need a wide or hoop tree; a fitter is strongly recommended.')
    confidence = 'wider-fitter-window'
  }
  if (back === 'short') {
    notes.push('Short backs limit seat size and flap length; verify the panel does not extend past the last weight-bearing rib (18th thoracic vertebra).')
  }
  if (back === 'long') {
    notes.push('Long backs need a saddle that sits well forward; watch for the panel ending over the loin, which is non-weight-bearing and is a leading cause of behavioural fit issues.')
  }
  if (type === 'cob-draft-cross' || (type === 'pony' && withers === 'flat-mutton')) {
    notes.push('Wide / mutton-withered horses are the single largest source of off-the-rack fit failures. A qualified fitter is strongly recommended before purchase.')
  }

  return {
    english: englishWidth,
    western: westernBars,
    confidence,
    notes,
  }
}

const CONFIDENCE_COPY: Record<Result['confidence'], { tone: string; label: string }> = {
  'starting-point': { tone: 'border-brand-border bg-brand-surface text-brand-text', label: 'Starting estimate — verify with a qualified fitter.' },
  'wider-fitter-window': { tone: 'border-amber-700/50 bg-amber-950/30 text-amber-100', label: 'Higher fit risk — a fitter consultation is strongly recommended.' },
  'narrower-fitter-window': { tone: 'border-amber-700/50 bg-amber-950/30 text-amber-100', label: 'Conformation needs careful clearance — book a fitter before purchase.' },
}

export function TreeSizeEstimator() {
  const [style, setStyle] = useState<Style>('english')
  const [horseType, setHorseType] = useState<HorseType>('sport-warmblood')
  const [withers, setWithers] = useState<Withers>('medium')
  const [back, setBack] = useState<BackLength>('medium')

  const result = useMemo(() => recommend(horseType, withers, back), [horseType, withers, back])
  const banner = CONFIDENCE_COPY[result.confidence]

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-6 flex gap-2 rounded bg-brand-bg p-1" role="tablist" aria-label="Saddle style">
        {(['english', 'western'] as Style[]).map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={style === s}
            onClick={() => setStyle(s)}
            className={`flex-1 rounded px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              style === s ? 'bg-brand-primary text-white' : 'text-brand-text-muted hover:text-brand-text'
            }`}
          >
            {s === 'english' ? 'English' : 'Western'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="horse-type" className="mb-2 block text-sm font-medium text-brand-text-muted">
            Horse type / conformation
          </label>
          <select
            id="horse-type"
            value={horseType}
            onChange={(e) => setHorseType(e.target.value as HorseType)}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          >
            {HORSE_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-muted">{HORSE_TYPES.find((t) => t.id === horseType)?.description}</p>
        </div>

        <div>
          <label htmlFor="withers" className="mb-2 block text-sm font-medium text-brand-text-muted">
            Withers profile
          </label>
          <select
            id="withers"
            value={withers}
            onChange={(e) => setWithers(e.target.value as Withers)}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          >
            {(Object.entries(WITHERS) as Array<[Withers, (typeof WITHERS)[Withers]]>).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-muted">{WITHERS[withers].note}</p>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="back-length" className="mb-2 block text-sm font-medium text-brand-text-muted">
            Back length (length of thoracic span)
          </label>
          <select
            id="back-length"
            value={back}
            onChange={(e) => setBack(e.target.value as BackLength)}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          >
            {(Object.entries(BACK_LENGTH) as Array<[BackLength, (typeof BACK_LENGTH)[BackLength]]>).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-muted">{BACK_LENGTH[back].note}</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${banner.tone}`}>
        <p className="text-base font-semibold">{banner.label}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">{style === 'english' ? 'English starting tree:' : 'Western starting tree:'}</span>{' '}
          {style === 'english' ? result.english : result.western}
        </p>
        {result.notes.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {result.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-4 text-xs text-brand-text-muted">
        This is a starting reference. A qualified saddler (SMS / MSA / Master Saddlers Association) must verify fit on the horse, statically and under saddle. Saddle.com Editorial does not perform fittings.
      </p>
    </div>
  )
}
