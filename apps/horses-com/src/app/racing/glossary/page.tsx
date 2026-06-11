/**
 * Horses.com -- Horse Racing Glossary
 * /racing/glossary
 *
 * Educational reference: plain-language definitions of common horse-racing
 * terms, grouped by category, with a DefinedTermSet JSON-LD payload for
 * AI/answer-surface citation (GEO). NOT a betting, odds, or handicapping
 * resource -- wagering-specific jargon is intentionally excluded.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
  CrossPortfolioCard,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Racing Glossary -- Terms & Definitions | Horses.com',
  description:
    'A plain-language horse racing glossary: furlong, maiden, claiming, allowance, stakes, going, colt, filly, sire, dam, and more racing terms defined.',
  path: '/racing/glossary',
})

interface Term {
  term: string
  def: string
}

interface Group {
  category: string
  terms: Term[]
}

const GLOSSARY: Group[] = [
  {
    category: 'Distance & Measurement',
    terms: [
      { term: 'Furlong', def: 'A unit of distance equal to one-eighth of a mile (220 yards). Race distances are commonly expressed in furlongs; six furlongs is three-quarters of a mile.' },
      { term: 'Length', def: 'The approximate length of a horse, used to describe winning margins and the distance between horses in a race -- for example, "won by two lengths."' },
      { term: 'Sprint', def: 'A short race, generally run at distances up to about seven furlongs, where early speed is at a premium.' },
      { term: 'Route', def: 'A longer race, generally a mile or more, demanding more sustained effort and stamina than a sprint.' },
      { term: 'Pole', def: 'Markers set around the track at measured intervals (for example, the quarter pole) that denote the distance remaining to the finish.' },
    ],
  },
  {
    category: 'Race Types',
    terms: [
      { term: 'Maiden', def: 'A horse that has not yet won a race, or a race restricted to such horses (a "maiden race"). Winning for the first time is referred to as "breaking the maiden."' },
      { term: 'Claiming race', def: 'A race in which every entered horse is available for purchase at a set price; the mechanism that sorts horses by ability at the lower levels of the sport.' },
      { term: 'Allowance race', def: 'A non-claiming race above maiden level in which horses are not for sale and weights are adjusted by conditions such as past earnings or wins.' },
      { term: 'Stakes race', def: 'A high-level race, often with owner-paid nomination and entry fees added to the purse, contested by accomplished horses.' },
      { term: 'Graded stakes', def: 'The top tier of stakes races, classified Grade I, II, or III (Group 1-3 internationally) by an independent committee based on the quality of the field a race attracts. Grade I is the highest.' },
      { term: 'Handicap', def: 'A race in which an official racing secretary (the handicapper) assigns each horse a weight intended to give every entrant a theoretically equal chance.' },
      { term: 'Weight-for-age', def: 'A scale that assigns weights to horses by age and sex so that younger or female horses carry less, reflecting maturity differences across the season.' },
      { term: 'Conditions', def: 'The eligibility rules and weight assignments that define a race -- age, sex, earnings, and number of prior wins -- printed in the "condition book."' },
    ],
  },
  {
    category: 'Horses by Age & Sex',
    terms: [
      { term: 'Foal', def: 'A horse in its first year of life. By convention, all Thoroughbreds share an official birthday of January 1 in the Northern Hemisphere.' },
      { term: 'Yearling', def: 'A horse in its second calendar year. Many future racehorses are bought and sold as yearlings at public auction.' },
      { term: 'Juvenile', def: 'A two-year-old racehorse. Two-year-old racing is often an early indicator of classic potential the following season.' },
      { term: 'Colt', def: 'An intact (non-castrated) male horse under five years of age.' },
      { term: 'Filly', def: 'A female horse under five years of age.' },
      { term: 'Mare', def: 'A female horse five years of age or older.' },
      { term: 'Gelding', def: 'A male horse that has been castrated. Geldings often race longer careers but are ineligible for breeding.' },
      { term: 'Stallion', def: 'An intact male horse used, or retired to be used, for breeding.' },
    ],
  },
  {
    category: 'Breeding & Pedigree',
    terms: [
      { term: 'Sire', def: 'The father of a horse. A stallion that has produced many runners is referred to as a sire.' },
      { term: 'Dam', def: "The mother of a horse. A female horse used for breeding is also called a broodmare." },
      { term: 'Broodmare', def: 'A mare retired from racing (or never raced) and kept for breeding.' },
      { term: 'Black type', def: "Bold type used in sales catalogs to denote stakes performers in a pedigree; \"black-type\" form is a marker of quality and breeding value." },
      { term: 'Closed studbook', def: 'A registry, such as the Thoroughbred American Stud Book, that admits no outside genetic material -- every registered horse traces to the established founding population.' },
    ],
  },
  {
    category: 'Track & Going',
    terms: [
      { term: 'Going / track condition', def: 'The state of the racing surface, which affects how a race is run and which horses are favored by it.' },
      { term: 'Fast / firm', def: 'A dry, hard, optimal surface -- "fast" describes a dirt track, "firm" a turf course.' },
      { term: 'Sloppy / muddy', def: 'A wet dirt surface: "sloppy" when water sits on top, "muddy" when the surface is soaked through. Some horses handle off going better than others.' },
      { term: 'Good / yielding / soft', def: 'Intermediate to wet turf conditions, ranging from slightly soft ("good") to heavily watered or rain-soaked ("yielding" and "soft").' },
      { term: 'Off the turf', def: 'A race scheduled for the turf course that is moved to the main dirt track, usually because rain has made the grass unsafe.' },
    ],
  },
  {
    category: 'People & Race Mechanics',
    terms: [
      { term: 'Jockey', def: 'The licensed rider who rides the horse in a race, carrying assigned weight and riding under the rules of racing.' },
      { term: 'Trainer', def: 'The licensed professional responsible for conditioning a horse, planning its campaign, and entering it in races.' },
      { term: 'Steward', def: 'A racing official who enforces the rules on race day, reviews incidents, and can sanction participants or alter the order of finish for interference.' },
      { term: 'Post position', def: 'The numbered starting-gate stall a horse is assigned for a race, determined by a draw.' },
      { term: 'Silks', def: "The colored jacket and cap a jockey wears, registered to the horse's owner and used to identify the runners." },
      { term: 'Stretch', def: 'The final straight section of the track leading to the finish line, where races are often decided.' },
      { term: 'Photo finish', def: 'A finish too close to call by eye, decided by a finish-line camera.' },
      { term: 'Dead heat', def: 'A finish in which two or more horses cannot be separated even on the photo and are declared to have tied.' },
      { term: 'Scratch', def: 'The withdrawal of a horse from a race after it has been entered, for reasons such as unsuitable going or veterinary advice.' },
    ],
  },
]

const ALL_TERMS = GLOSSARY.flatMap((g) => g.terms)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Racing', url: 'https://horses.com/racing' },
    { name: 'Glossary', url: 'https://horses.com/racing/glossary' },
  ],
})

// DefinedTermSet -- a citable, structured glossary for AI answer surfaces (GEO).
const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Horse Racing Glossary',
  description: 'Plain-language definitions of common horse-racing terms.',
  url: 'https://horses.com/racing/glossary',
  hasDefinedTerm: ALL_TERMS.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.def,
    inDefinedTermSet: 'https://horses.com/racing/glossary',
  })),
}

const schema = combineSchemas(breadcrumbSchema, definedTermSetSchema)

export default function RacingGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Racing Intelligence
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Horse Racing Glossary
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          A plain-language reference to the language of the racetrack -- distances, race
          types, the horses, breeding, track conditions, and the people who run the sport.
          An educational reference; wagering jargon is intentionally left out.
        </p>
      </div>

      {/* BREADCRUMB */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#8250;</span>
        <Link href="/racing" className="hover:text-brand-primary no-underline">Racing</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Glossary</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12 max-w-3xl">
        <p className="text-sm text-brand-text-light mb-10">
          {ALL_TERMS.length} common horse-racing terms, grouped by topic. For how the race
          classes fit together, see <Link href="/racing/understanding-race-types-and-classes" className="text-brand-primary hover:underline">Race Types &amp; Classes Explained</Link>;
          for the sport itself, see <Link href="/racing/thoroughbred-flat-racing" className="text-brand-primary hover:underline">Thoroughbred Flat Racing</Link>.
        </p>

        {GLOSSARY.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="font-display font-bold text-brand-dark text-xl mb-4 pb-2 border-b border-brand-border">
              {group.category}
            </h2>
            <dl className="space-y-4">
              {group.terms.map((t) => (
                <div key={t.term} className="border-l-2 border-brand-primary/30 pl-4">
                  <dt className="font-display font-bold text-brand-dark text-base">{t.term}</dt>
                  <dd className="text-sm text-brand-text-mid leading-relaxed mt-0.5 ml-0">{t.def}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="Equestrian Reference"
          subtitle="Citation-anchored equine reference articles, one email a week."
          source="racing-glossary"
          ctaText="Subscribe Free"
        />
      </div>
      <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="footer" />
    </>
  )
}
