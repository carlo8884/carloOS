'use client';

/**
 * Predict-the-Finish — a NO-PRIZE, pure-skill engagement toy (queue #2).
 *
 * The player picks a predicted win/place/show (top 3) from a curated race's
 * field. We score the pick against the Intelligence Rating model's ranking and
 * give a skill score + plain-English feedback. Bragging rights only — NO prize,
 * NO entry fee, NO wager. This deliberately avoids the 2025 sweepstakes/prize-
 * game legal minefield (see engagement-research handoff): skill ladder, not a
 * gambling or prize product. Local-only state; results feed an email-capture CTA.
 */

import { useMemo, useState } from 'react';

interface GameRunner {
  id: string;
  name: string;
  number: number;
  /** Model rank, 1 = top-rated. Drives scoring. */
  modelRank: number;
}

interface PredictGameProps {
  raceName: string;
  course: string;
  runners: GameRunner[];
}

type Slot = 'win' | 'place' | 'show';
const SLOTS: { key: Slot; label: string; points: number }[] = [
  { key: 'win', label: '1st', points: 5 },
  { key: 'place', label: '2nd', points: 3 },
  { key: 'show', label: '3rd', points: 2 },
];

export function PredictGame({ raceName, course, runners }: PredictGameProps) {
  const [picks, setPicks] = useState<Record<Slot, string>>({ win: '', place: '', show: '' });
  const [submitted, setSubmitted] = useState(false);

  const modelOrder = useMemo(
    () => [...runners].sort((a, b) => a.modelRank - b.modelRank),
    [runners],
  );
  const byId = useMemo(() => Object.fromEntries(runners.map((r) => [r.id, r])), [runners]);

  // Which runner the model ranks in each finishing slot.
  const modelPick: Record<Slot, GameRunner> = {
    win: modelOrder[0],
    place: modelOrder[1],
    show: modelOrder[2],
  };

  const usedIds = Object.values(picks).filter(Boolean);
  const allPicked = SLOTS.every((s) => picks[s.key]);

  function select(slot: Slot, id: string) {
    setPicks((prev) => {
      // Clear this runner from any other slot, then set it here.
      const next: Record<Slot, string> = { ...prev };
      (Object.keys(next) as Slot[]).forEach((k) => {
        if (next[k] === id) next[k] = '';
      });
      next[slot] = id;
      return next;
    });
  }

  // Score: exact slot match = full points; right runner wrong slot (in top 3) = half.
  const result = useMemo(() => {
    if (!submitted) return null;
    let score = 0;
    const maxScore = SLOTS.reduce((s, x) => s + x.points, 0);
    const notes: string[] = [];
    const modelTop3 = new Set([modelPick.win.id, modelPick.place.id, modelPick.show.id]);

    SLOTS.forEach((s) => {
      const pickedId = picks[s.key];
      if (pickedId === modelPick[s.key].id) {
        score += s.points;
        notes.push(`${s.label}: exact match with the model (+${s.points}).`);
      } else if (modelTop3.has(pickedId)) {
        score += s.points / 2;
        notes.push(`${s.label}: ${byId[pickedId].name} is in the model's top 3, wrong slot (+${s.points / 2}).`);
      } else {
        notes.push(`${s.label}: the model rated ${byId[pickedId].name} outside its top 3.`);
      }
    });

    const pct = Math.round((score / maxScore) * 100);
    let verdict =
      pct >= 80
        ? 'Sharp read — you’re thinking like the model.'
        : pct >= 50
          ? 'Solid instincts. A couple of the model’s factors caught what you didn’t.'
          : 'The model saw this one differently — see the breakdown below to learn why.';
    return { score, maxScore, pct, notes, verdict };
  }, [submitted, picks, modelPick, byId]);

  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6">
      <div className="mb-4">
        <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Predict the finish &middot; just for fun
        </p>
        <h2 className="mt-1 font-display text-2xl font-bold text-brand-text-dark">{raceName}</h2>
        <p className="text-sm text-brand-text-light">{course}</p>
      </div>

      {!submitted && (
        <>
          <p className="mb-4 text-sm text-brand-text-mid">
            Pick who you think finishes 1st, 2nd and 3rd. We’ll score your read against the
            Intelligence Rating model and show you where you agreed — and where it saw something you
            didn’t. No stakes, no prizes — just a way to sharpen your eye.
          </p>
          <div className="space-y-5">
            {SLOTS.map((slot) => (
              <div key={slot.key}>
                <p className="mb-2 text-sm font-semibold text-brand-text-dark">
                  {slot.label} place
                </p>
                <div className="flex flex-wrap gap-2">
                  {runners.map((r) => {
                    const selectedHere = picks[slot.key] === r.id;
                    const usedElsewhere = !selectedHere && usedIds.includes(r.id);
                    return (
                      <button
                        key={r.id}
                        type="button"
                        disabled={usedElsewhere}
                        onClick={() => select(slot.key, r.id)}
                        className={[
                          'rounded-lg border px-3 py-1.5 text-sm font-medium transition',
                          selectedHere
                            ? 'border-brand-primary bg-brand-primary text-white'
                            : usedElsewhere
                              ? 'cursor-not-allowed border-brand-border bg-brand-surface text-brand-text-light opacity-50'
                              : 'border-brand-border bg-white text-brand-text-dark hover:border-brand-primary',
                        ].join(' ')}
                      >
                        {r.number}. {r.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            disabled={!allPicked}
            onClick={() => setSubmitted(true)}
            className={[
              'mt-6 rounded-lg px-5 py-2.5 font-semibold text-white transition',
              allPicked
                ? 'bg-brand-primary hover:bg-brand-primary-dark'
                : 'cursor-not-allowed bg-brand-text-light opacity-60',
            ].join(' ')}
          >
            Score my read
          </button>
        </>
      )}

      {submitted && result && (
        <div>
          <div className="flex items-center gap-4 rounded-xl bg-brand-primary-pale/50 p-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-2xl font-bold text-white">
              {result.pct}
            </div>
            <div>
              <p className="font-semibold text-brand-text-dark">{result.verdict}</p>
              <p className="text-sm text-brand-text-light">
                You scored {result.score} of {result.maxScore} vs the model.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-display text-lg font-bold text-brand-text-dark">
              How the model ranked them
            </h3>
            <ol className="mt-2 space-y-1">
              {SLOTS.map((s) => (
                <li key={s.key} className="text-sm text-brand-text-mid">
                  <span className="font-semibold text-brand-text-dark">{s.label}:</span>{' '}
                  {modelPick[s.key].number}. {modelPick[s.key].name}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4">
            <h3 className="font-display text-lg font-bold text-brand-text-dark">Your read</h3>
            <ul className="mt-2 space-y-1 list-none p-0">
              {result.notes.map((n, i) => (
                <li key={i} className="text-sm text-brand-text-mid">
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => {
              setPicks({ win: '', place: '', show: '' });
              setSubmitted(false);
            }}
            className="mt-6 rounded-lg border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-primary"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
