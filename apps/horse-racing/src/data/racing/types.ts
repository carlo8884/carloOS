// Core domain model for the Horse Racing Intelligence platform.
//
// This schema is deliberately provider-agnostic. Phase 1 ships with the
// hand-curated seed data in `meetings.ts`; Phase 2+ swaps the data source for
// a live feed (e.g. The Racing API, Equibase, Timeform) by implementing the
// `RacingDataSource` interface below — no page or component changes required.

export type Going =
  | 'firm'
  | 'good-to-firm'
  | 'good'
  | 'good-to-soft'
  | 'soft'
  | 'heavy'
  | 'standard' // all-weather
  | 'sloppy'
  | 'fast';

export type Surface = 'turf' | 'all-weather' | 'dirt';

export type RaceClass =
  | 'Group 1'
  | 'Group 2'
  | 'Group 3'
  | 'Listed'
  | 'Handicap'
  | 'Maiden'
  | 'Novice'
  | 'Claiming'
  | 'Stakes';

/** A single past performance line for a runner. */
export interface FormRun {
  date: string; // ISO date
  course: string;
  /** Finishing position; 0 = did not finish / pulled up. */
  position: number;
  runners: number;
  distanceFurlongs: number;
  going: Going;
  raceClass: RaceClass;
  /** Beaten lengths (negative = winning distance). */
  beatenLengths: number;
}

export interface Runner {
  id: string;
  name: string;
  slug: string;
  /** Saddlecloth / program number. */
  number: number;
  draw?: number;
  age: number;
  /** Carried weight in lbs. */
  weightLbs: number;
  jockey: string;
  jockeySlug: string;
  trainer: string;
  trainerSlug: string;
  /** Most recent first, e.g. "1-321". Standard racing form string. */
  formString: string;
  recentRuns: FormRun[];
  /** Decimal odds at the time of capture. */
  oddsDecimal: number;
  /** Official handicap rating, if any. */
  officialRating?: number;
  goingPreference?: Going[];
  headgear?: string;
  daysSinceLastRun?: number;
}

export interface Race {
  id: string;
  name: string;
  course: string;
  courseSlug: string;
  /** ISO datetime of the off. */
  offTime: string;
  distanceFurlongs: number;
  surface: Surface;
  going: Going;
  raceClass: RaceClass;
  /** Total prize money in the race's local currency (USD here). */
  prizeMoney: number;
  ageRestriction?: string;
  runners: Runner[];
}

export interface Meeting {
  id: string;
  course: string;
  courseSlug: string;
  date: string; // ISO date
  surface: Surface;
  going: Going;
  country: string;
  races: Race[];
}

/**
 * Phase 2+ live-data contract. Implement against any provider and the Race
 * Center pages will render real cards/results unchanged.
 */
export interface RacingDataSource {
  getMeetings(date: string): Promise<Meeting[]>;
  getRace(raceId: string): Promise<Race | null>;
  getResults(date: string): Promise<Meeting[]>;
}
