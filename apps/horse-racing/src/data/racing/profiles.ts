// Profile aggregation — derives horse / trainer / jockey / track views from the
// same seed cards that power the Race Center. Built so that when a live feed
// lands (Phase 2), these programmatic-SEO templates auto-populate at scale with
// zero page changes — only the data source grows.

import { meetings } from './meetings';
import type { Meeting, Race, Runner, FormRun } from './types';

export interface RunnerContext {
  meeting: Meeting;
  race: Race;
  runner: Runner;
}

export function allRunners(): RunnerContext[] {
  const out: RunnerContext[] = [];
  for (const meeting of meetings) {
    for (const race of meeting.races) {
      for (const runner of race.runners) {
        out.push({ meeting, race, runner });
      }
    }
  }
  return out;
}

export interface FormStats {
  runs: number;
  wins: number;
  places: number;
  winPct: number;
  placePct: number;
}

export function formStats(runs: FormRun[]): FormStats {
  const total = runs.length;
  const wins = runs.filter((r) => r.position === 1).length;
  const places = runs.filter((r) => r.position >= 1 && r.position <= 3).length;
  return {
    runs: total,
    wins,
    places,
    winPct: total ? Math.round((wins / total) * 100) : 0,
    placePct: total ? Math.round((places / total) * 100) : 0,
  };
}

// ── Horses ────────────────────────────────────────────────────────────────

export function getHorse(slug: string): RunnerContext | null {
  return allRunners().find((c) => c.runner.slug === slug) ?? null;
}

export function allHorseSlugs(): string[] {
  return Array.from(new Set(allRunners().map((c) => c.runner.slug)));
}

// ── Trainers ────────────────────────────────────────────────────────────────

export interface PersonProfile {
  name: string;
  slug: string;
  entries: RunnerContext[];
  stats: FormStats;
}

function aggregateRuns(entries: RunnerContext[]): FormRun[] {
  return entries.flatMap((c) => c.runner.recentRuns);
}

export function getTrainer(slug: string): PersonProfile | null {
  const entries = allRunners().filter((c) => c.runner.trainerSlug === slug);
  if (entries.length === 0) return null;
  return {
    name: entries[0].runner.trainer,
    slug,
    entries,
    stats: formStats(aggregateRuns(entries)),
  };
}

export function allTrainerSlugs(): string[] {
  return Array.from(new Set(allRunners().map((c) => c.runner.trainerSlug)));
}

// ── Jockeys ─────────────────────────────────────────────────────────────────

export function getJockey(slug: string): PersonProfile | null {
  const entries = allRunners().filter((c) => c.runner.jockeySlug === slug);
  if (entries.length === 0) return null;
  return {
    name: entries[0].runner.jockey,
    slug,
    entries,
    stats: formStats(aggregateRuns(entries)),
  };
}

export function allJockeySlugs(): string[] {
  return Array.from(new Set(allRunners().map((c) => c.runner.jockeySlug)));
}

// ── Tracks ──────────────────────────────────────────────────────────────────

export function getTrack(courseSlug: string): Meeting | null {
  return meetings.find((m) => m.courseSlug === courseSlug) ?? null;
}

export function allTrackSlugs(): string[] {
  return meetings.map((m) => m.courseSlug);
}

// ── Directory helpers (for index pages) ─────────────────────────────────────

export function horseDirectory(): { slug: string; name: string }[] {
  const seen = new Map<string, string>();
  for (const c of allRunners()) seen.set(c.runner.slug, c.runner.name);
  return Array.from(seen, ([slug, name]) => ({ slug, name })).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export function trainerDirectory(): { slug: string; name: string }[] {
  const seen = new Map<string, string>();
  for (const c of allRunners()) seen.set(c.runner.trainerSlug, c.runner.trainer);
  return Array.from(seen, ([slug, name]) => ({ slug, name })).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export function jockeyDirectory(): { slug: string; name: string }[] {
  const seen = new Map<string, string>();
  for (const c of allRunners()) seen.set(c.runner.jockeySlug, c.runner.jockey);
  return Array.from(seen, ([slug, name]) => ({ slug, name })).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export function trackDirectory(): { slug: string; name: string; country: string }[] {
  return meetings
    .map((m) => ({ slug: m.courseSlug, name: m.course, country: m.country }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
