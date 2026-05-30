// The Horses.com Intelligence Rating engine.
//
// This is real, deterministic, explainable logic — not a stub. It converts the
// structured runner data into a 0-100 composite rating plus human-readable
// reasoning, so every AI verdict on the site can show its work (critical for
// trust and GEO/AI-search citability). When live data arrives, the same engine
// runs unchanged on richer inputs.

import type { Race, Runner, Going } from './types';

export interface RatingFactor {
  label: string;
  /** Points contributed to the composite (can be negative). */
  points: number;
  detail: string;
}

export interface RunnerRating {
  runnerId: string;
  /** 0-100 composite. */
  score: number;
  factors: RatingFactor[];
  /** Model-implied win probability (normalised across the field). */
  winProbability: number;
  /** Decimal odds implied by the model. */
  fairOdds: number;
  /** Positive = model thinks the runner is over-priced (value). */
  valueEdge: number;
}

export interface RaceAnalysis {
  raceId: string;
  ratings: RunnerRating[];
  topPick: RunnerRating;
  /** Best value play: highest positive edge vs market. */
  valuePick: RunnerRating | null;
  /** One-paragraph plain-English summary. */
  verdict: string;
}

function goingMatches(pref: Going[] | undefined, going: Going): boolean {
  if (!pref || pref.length === 0) return false;
  return pref.includes(going);
}

/** Recent form: weight the last few runs, decaying with age and field size. */
function formScore(runner: Runner): RatingFactor {
  const runs = runner.recentRuns.slice(0, 4);
  if (runs.length === 0) {
    return { label: 'Recent form', points: 8, detail: 'No recent form — unexposed.' };
  }
  let total = 0;
  let weightSum = 0;
  runs.forEach((run, i) => {
    const recencyWeight = 1 / (i + 1); // most recent counts most
    // Win = 1.0, places scale down, DNF = 0.
    const placing = run.position === 0 ? 0 : Math.max(0, 1 - (run.position - 1) / run.runners);
    total += placing * recencyWeight;
    weightSum += recencyWeight;
  });
  const normalized = weightSum > 0 ? total / weightSum : 0;
  const points = Math.round(normalized * 32);
  const lastPos = runs[0].position === 0 ? 'unplaced' : `${runs[0].position}`;
  return {
    label: 'Recent form',
    points,
    detail: `Last out finished ${lastPos} of ${runs[0].runners} at ${runs[0].course}. Weighted recent placing index ${normalized.toFixed(2)}.`,
  };
}

function classScore(runner: Runner): RatingFactor {
  const or = runner.officialRating;
  if (!or) return { label: 'Class / rating', points: 6, detail: 'No official rating on file.' };
  // Map a typical 40-120 OR band onto 0-22 points.
  const points = Math.round(Math.min(22, Math.max(0, (or - 40) / 80 * 22)));
  return { label: 'Class / rating', points, detail: `Official rating ${or}.` };
}

function goingScore(runner: Runner, going: Going): RatingFactor {
  if (goingMatches(runner.goingPreference, going)) {
    return { label: 'Going suitability', points: 10, detail: `Proven on ${going.replace(/-/g, ' ')} ground.` };
  }
  if (runner.goingPreference && runner.goingPreference.length > 0) {
    return { label: 'Going suitability', points: 2, detail: `Today's ${going.replace(/-/g, ' ')} going is unproven for this runner.` };
  }
  return { label: 'Going suitability', points: 5, detail: 'Going preference unknown.' };
}

function fitnessScore(runner: Runner): RatingFactor {
  const days = runner.daysSinceLastRun;
  if (days == null) return { label: 'Fitness / freshness', points: 5, detail: 'Layoff unknown.' };
  if (days <= 21) return { label: 'Fitness / freshness', points: 9, detail: `Race-fit — ${days} days since last run.` };
  if (days <= 60) return { label: 'Fitness / freshness', points: 7, detail: `${days} days since last run.` };
  if (days <= 120) return { label: 'Fitness / freshness', points: 4, detail: `Returning from a ${days}-day break.` };
  return { label: 'Fitness / freshness', points: 2, detail: `Long ${days}-day absence — fitness a question.` };
}

function drawScore(runner: Runner, race: Race): RatingFactor {
  if (runner.draw == null || race.surface !== 'turf') {
    return { label: 'Draw', points: 3, detail: 'Draw not a significant factor.' };
  }
  const field = race.runners.length;
  // Slight low-draw bias on short/round courses — simple, transparent model.
  const lowBias = race.distanceFurlongs <= 8;
  const normalized = lowBias ? 1 - (runner.draw - 1) / field : 0.5;
  const points = Math.round(normalized * 6);
  return { label: 'Draw', points, detail: `Stall ${runner.draw} of ${field}.` };
}

export function rateRunner(runner: Runner, race: Race): RunnerRating {
  const factors = [
    formScore(runner),
    classScore(runner),
    goingScore(runner, race.going),
    fitnessScore(runner),
    drawScore(runner, race),
  ];
  const raw = factors.reduce((sum, f) => sum + f.points, 0);
  const score = Math.min(100, Math.max(0, raw));
  return {
    runnerId: runner.id,
    score,
    factors,
    winProbability: 0, // filled in during field normalisation
    fairOdds: 0,
    valueEdge: 0,
  };
}

export function analyzeRace(race: Race): RaceAnalysis {
  const ratings = race.runners.map((r) => rateRunner(r, race));

  // Convert composite scores into a probability distribution via softmax-style
  // exponential weighting, then derive fair odds and value edge vs the market.
  const temp = 12;
  const exps = ratings.map((r) => Math.exp(r.score / temp));
  const expSum = exps.reduce((a, b) => a + b, 0);
  ratings.forEach((r, i) => {
    r.winProbability = exps[i] / expSum;
    r.fairOdds = r.winProbability > 0 ? 1 / r.winProbability : 999;
    const runner = race.runners[i];
    const marketProb = runner.oddsDecimal > 0 ? 1 / runner.oddsDecimal : 0;
    r.valueEdge = r.winProbability - marketProb;
  });

  const sorted = [...ratings].sort((a, b) => b.score - a.score);
  const topPick = sorted[0];
  const valueCandidates = [...ratings]
    .filter((r) => r.valueEdge > 0.03)
    .sort((a, b) => b.valueEdge - a.valueEdge);
  const valuePick = valueCandidates[0] ?? null;

  const topRunner = race.runners.find((r) => r.id === topPick.runnerId)!;
  const valueRunner = valuePick ? race.runners.find((r) => r.id === valuePick.runnerId) : null;

  let verdict = `${topRunner.name} tops the Horses.com Intelligence Rating at ${topPick.score}/100 (${(topPick.winProbability * 100).toFixed(0)}% model win probability), driven by ${topPick.factors.sort((a, b) => b.points - a.points)[0].detail.toLowerCase()}`;
  if (valueRunner && valuePick && valueRunner.id !== topRunner.id) {
    verdict += ` The standout value play is ${valueRunner.name} at ${valueRunner.oddsDecimal.toFixed(1)} — the model makes it a ${valuePick.fairOdds.toFixed(1)} chance, a ${(valuePick.valueEdge * 100).toFixed(0)}-point edge over the market.`;
  } else {
    verdict += ` The market looks broadly efficient on this race, with no standout overlay.`;
  }

  return { raceId: race.id, ratings, topPick, valuePick, verdict };
}
