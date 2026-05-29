'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { STATES } from '@/data/states'

export function StateSelector() {
  const router = useRouter()
  const [code, setCode] = useState('TX')

  return (
    <div className="flex flex-wrap items-center gap-3">
      <label htmlFor="state-jump" className="text-sm text-white/80">
        Or browse by state:
      </label>
      <select
        id="state-jump"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="px-3 py-2 rounded bg-brand-white text-brand-text-dark text-sm"
      >
        {STATES.map((s) => (
          <option key={s.code} value={s.code.toLowerCase()}>
            {s.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => router.push(`/states/${code.toLowerCase()}`)}
        className="px-4 py-2 bg-brand-white text-brand-dark text-sm font-semibold rounded"
      >
        Go
      </button>
    </div>
  )
}
