'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, ResultPanel } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

// Classic planted-tank formula: CO2 (ppm) = 12.839 × KH(dKH) × 10^(7 - pH)
// Caveat: assumes only carbonate buffer. Phosphate buffers and discus buffers throw this off.

function classifyCO2(ppm: number): { label: string; tone: 'low' | 'good' | 'high' | 'danger'; explainer: string } {
  if (ppm < 10) {
    return {
      label: 'Below planted-tank target',
      tone: 'low',
      explainer:
        'Most plants want 15–35 ppm CO2 for healthy growth. Below 10 ppm you\'ll see stunted, pale growth and aggressive algae. Increase your CO2 injection rate.',
    }
  }
  if (ppm <= 35) {
    return {
      label: 'Healthy planted-tank range',
      tone: 'good',
      explainer:
        'Target range for most planted tanks. Plants grow well, algae stays in check, and fish are unbothered. Maintain a drop checker showing lime green to confirm.',
    }
  }
  if (ppm <= 50) {
    return {
      label: 'High — watch fish behavior',
      tone: 'high',
      explainer:
        'High CO2. Plants love it but fish start gasping. Watch for fish at the surface or rapid gill movement. Add surface agitation (lily pipe, increase flow) before reducing CO2.',
    }
  }
  return {
    label: 'Dangerous — turn down now',
    tone: 'danger',
    explainer:
      'Above 50 ppm CO2 is acutely toxic to fish and invertebrates. Reduce injection rate immediately. If fish are gasping, agitate the surface aggressively and check for an off-gassing solution.',
  }
}

export default function CO2Calculator() {
  const [kh, setKh] = useState('4')
  const [ph, setPh] = useState('6.8')

  const result = useMemo(() => {
    const khN = parseFloat(kh) || 0
    const phN = parseFloat(ph) || 0
    if (khN <= 0 || phN <= 0) return null

    const ppm = 12.839 * khN * Math.pow(10, 7 - phN)
    const classification = classifyCO2(ppm)
    return { ppm, ...classification }
  }, [kh, ph])

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <FieldNumber
            label="Carbonate Hardness (KH)"
            value={kh}
            onChange={setKh}
            unit="dKH"
            min={0}
            step={0.1}
            hint="Measure with a liquid KH test kit. Typical planted-tank KH: 3–6 dKH."
          />
          <FieldNumber
            label="pH"
            value={ph}
            onChange={setPh}
            unit="pH"
            min={0}
            step={0.05}
            hint="Measure at the same time as KH. Use a pH pen or freshly calibrated liquid kit."
          />
        </div>
      </CalcCard>

      {result && result.ppm > 0 && (
        <ResultPanel
          primary={{
            label: 'Estimated dissolved CO2',
            value: `${result.ppm.toFixed(1)} ppm`,
            sub: result.label,
          }}
          secondary={[
            { label: 'Target range', value: '15–35 ppm' },
            { label: 'Fish stress', value: '> 35 ppm' },
            { label: 'Acute toxicity', value: '> 50 ppm' },
          ]}
          note={
            <>
              <strong className="text-white/90">{result.explainer}</strong>
              <br /><br />
              <em>Note:</em> The KH/pH formula assumes carbonate is the only buffer. Phosphate-based pH buffers, discus buffers,
              and some commercial water conditioners invalidate this calculation. A drop checker filled with 4dKH reference solution
              + bromothymol blue is the cross-check — lime green = ~30 ppm.
            </>
          }
        />
      )}

      {result && result.ppm > 0 && (
        result.tone === 'low' ? (
          <ResultCTA
            heading="Shop a pressurized CO2 system to reach the planted-tank range"
            blurb={
              <>
                To lift CO2 toward the 15&ndash;35 ppm target, a regulator, diffuser, and drop checker are the core components.
              </>
            }
            query="aquarium co2 system regulator diffuser"
            cta="Browse CO2 systems on Amazon"
            source="tools-co2"
          />
        ) : (
          <ResultCTA
            heading="Cross-check your CO2 with a drop checker"
            blurb={
              <>
                With CO2 this high, a drop checker with 4dKH reference solution is the safest way to confirm the real dissolved level before adjusting.
              </>
            }
            query="aquarium co2 drop checker"
            cta="Browse drop checkers on Amazon"
            source="tools-co2"
          />
        )
      )}
    </div>
  )
}
