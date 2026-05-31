'use client';

/**
 * Racehorse ownership cost calculator (queue #3 — deepen ownership cluster).
 *
 * A trust-safe interactive tool: it does PLAIN ARITHMETIC on user-entered,
 * editable assumptions to estimate annual ownership cost by model. It makes NO
 * investment advice, NO return projection, and NO promise — the output is an
 * illustrative budgeting estimate the user controls. Defaults are mid-range
 * industry figures the user can override; every number is shown and editable.
 */

import { useMemo, useState } from 'react';

type Model = 'whole' | 'partnership' | 'fractional';

const MODELS: { key: Model; label: string; blurb: string }[] = [
  { key: 'whole', label: 'Whole horse', blurb: 'You own the horse outright and pay all costs.' },
  { key: 'partnership', label: 'Partnership', blurb: 'A small group splits costs by share.' },
  { key: 'fractional', label: 'Fractional micro-share', blurb: 'A one-time share price, costs usually bundled.' },
];

function dollars(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export function CostCalculator() {
  const [model, setModel] = useState<Model>('partnership');

  // Editable mid-range assumptions (USD). All user-overridable.
  const [trainingDay, setTrainingDay] = useState(85); // $/day day-rate
  const [vetFarrierMonth, setVetFarrierMonth] = useState(250); // $/mo
  const [insurancePct, setInsurancePct] = useState(4); // % of value/yr
  const [horseValue, setHorseValue] = useState(40000);
  const [sharePct, setSharePct] = useState(10); // your % in whole/partnership
  const [fractionalPrice, setFractionalPrice] = useState(300); // one-time micro-share

  const result = useMemo(() => {
    const annualTraining = trainingDay * 365;
    const annualVetFarrier = vetFarrierMonth * 12;
    const annualInsurance = (insurancePct / 100) * horseValue;
    const fullAnnual = annualTraining + annualVetFarrier + annualInsurance;

    if (model === 'fractional') {
      // Micro-share: a one-time price; ongoing usually bundled for the term.
      return {
        headline: fractionalPrice,
        headlineLabel: 'Your one-time share price',
        lines: [
          { label: 'One-time micro-share', value: fractionalPrice },
          { label: 'Typical ongoing cost to you', value: 0, note: 'usually bundled into the share price for the term — confirm in the offering docs' },
        ],
        footnote:
          'Fractional platforms generally bundle a season of costs into the share price, so your out-of-pocket is capped at what you paid. Always verify in the offering documents.',
      };
    }

    const share = model === 'whole' ? 1 : sharePct / 100;
    const yourAnnual = fullAnnual * share;
    return {
      headline: yourAnnual,
      headlineLabel: 'Your estimated annual cost',
      lines: [
        { label: 'Training (day-rate × 365)', value: annualTraining * share },
        { label: 'Vet & farrier', value: annualVetFarrier * share },
        { label: `Insurance (${insurancePct}% of value)`, value: annualInsurance * share },
      ],
      footnote:
        model === 'whole'
          ? 'Whole-horse ownership means you carry 100% of these costs — plus transport, registration, and the unexpected.'
          : `Based on your ${sharePct}% share. Partnerships split costs by share; a syndicate manager may add a management fee on top.`,
    };
  }, [model, trainingDay, vetFarrierMonth, insurancePct, horseValue, sharePct, fractionalPrice]);

  const Field = ({
    label,
    value,
    onChange,
    prefix,
    suffix,
  }: {
    label: string;
    value: number;
    onChange: (n: number) => void;
    prefix?: string;
    suffix?: string;
  }) => (
    <label className="block">
      <span className="text-sm font-medium text-brand-text-dark">{label}</span>
      <span className="mt-1 flex items-center rounded-lg border border-brand-border bg-white px-3 py-2">
        {prefix && <span className="mr-1 text-brand-text-light">{prefix}</span>}
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full bg-transparent text-brand-text-dark outline-none"
        />
        {suffix && <span className="ml-1 text-brand-text-light">{suffix}</span>}
      </span>
    </label>
  );

  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6">
      {/* Model selector */}
      <div className="flex flex-wrap gap-2">
        {MODELS.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => setModel(m.key)}
            className={[
              'rounded-lg border px-3 py-1.5 text-sm font-medium transition',
              model === m.key
                ? 'border-brand-primary bg-brand-primary text-white'
                : 'border-brand-border bg-white text-brand-text-dark hover:border-brand-primary',
            ].join(' ')}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-brand-text-light">
        {MODELS.find((m) => m.key === model)!.blurb}
      </p>

      {/* Inputs */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {model === 'fractional' ? (
          <Field label="Micro-share price (one-time)" value={fractionalPrice} onChange={setFractionalPrice} prefix="$" />
        ) : (
          <>
            <Field label="Training day-rate" value={trainingDay} onChange={setTrainingDay} prefix="$" suffix="/day" />
            <Field label="Vet & farrier" value={vetFarrierMonth} onChange={setVetFarrierMonth} prefix="$" suffix="/mo" />
            <Field label="Horse value (for insurance)" value={horseValue} onChange={setHorseValue} prefix="$" />
            <Field label="Insurance rate" value={insurancePct} onChange={setInsurancePct} suffix="%/yr" />
            {model === 'partnership' && (
              <Field label="Your share" value={sharePct} onChange={setSharePct} suffix="%" />
            )}
          </>
        )}
      </div>

      {/* Result */}
      <div className="mt-6 rounded-xl bg-brand-primary-pale/50 p-5">
        <p className="text-sm font-medium text-brand-text-mid">{result.headlineLabel}</p>
        <p className="font-display text-3xl font-bold text-brand-primary-dark">
          {dollars(result.headline)}
        </p>
        <ul className="mt-3 space-y-1 list-none p-0">
          {result.lines.map((l) => (
            <li key={l.label} className="flex justify-between text-sm text-brand-text-mid">
              <span>
                {l.label}
                {'note' in l && l.note ? <em className="text-brand-text-light"> — {l.note}</em> : null}
              </span>
              <span className="font-medium text-brand-text-dark">{dollars(l.value)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-brand-text-light">{result.footnote}</p>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-brand-text-light">
        This is an illustrative budgeting estimate based on figures you control — not financial
        advice, and not a projection of returns. Actual costs vary widely by trainer, location,
        discipline, and the individual horse. Treat racehorse ownership as a passion expense, not an
        investment.
      </p>
    </div>
  );
}
