// Racing glossary — programmatic-SEO + GEO surface. Each term is a durable,
// indexable URL answering a recurring "what is X in horse racing" query, in the
// clean, sourced, definitional format LLMs lift verbatim. Plain-English,
// fact-checked definitions; no betting advice.

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: 'Form & Ratings' | 'Going & Track' | 'Race Types' | 'Betting' | 'The Horse';
  short: string; // one-sentence definition (used in meta + lists)
  body: string[]; // 1-3 paragraphs
  related?: string[]; // slugs
}

export const glossary: GlossaryTerm[] = [
  {
    slug: 'going',
    term: 'Going',
    category: 'Going & Track',
    short:
      'The official description of the moisture content and firmness of a racecourse surface on race day.',
    body: [
      'The “going” is how a racecourse describes the condition of its turf or dirt surface, ranging from firm/fast (dry, hard ground) through good, soft and heavy (wet, holding ground). On all-weather tracks the going is usually reported as “standard.”',
      'Going matters because horses have surface preferences rooted in their action and physique. A horse with a high, round knee action often handles soft ground well, while a sharp, low-actioned sprinter typically wants fast ground. Assessing whether today’s going suits a runner is one of the five factors in our Intelligence Rating.',
    ],
    related: ['firm-going', 'heavy-going', 'all-weather'],
  },
  {
    slug: 'firm-going',
    term: 'Firm (going)',
    category: 'Going & Track',
    short: 'Dry, hard turf ground that produces fast times and suits sharp, low-actioned horses.',
    body: [
      'Firm going (or “fast” on dirt) describes dry, hard ground with little give. It produces quick race times and favours horses with a low, efficient stride. Some trainers avoid running their horses on firm ground because the concussion increases the risk of jarring and lower-limb injury.',
    ],
    related: ['going', 'heavy-going'],
  },
  {
    slug: 'heavy-going',
    term: 'Heavy (going)',
    category: 'Going & Track',
    short: 'Very wet, holding turf ground that demands stamina and a strong, round action.',
    body: [
      'Heavy going is the softest official turf description — saturated, energy-sapping ground that slows race times dramatically and turns races into tests of stamina and strength. “Mudlarks” or “soft-ground specialists” relish it, while many fast-ground horses are unsuited and may not be declared to run.',
    ],
    related: ['going', 'firm-going'],
  },
  {
    slug: 'all-weather',
    term: 'All-weather racing',
    category: 'Going & Track',
    short:
      'Racing on a synthetic surface (e.g. Tapeta, Polytrack) designed to be raceable in most conditions.',
    body: [
      'All-weather tracks use an engineered synthetic surface — sand mixed with materials such as wax-coated fibres (Polytrack) or rubber and sand (Tapeta). They drain well and stay consistent through frost and rain, so meetings are rarely abandoned. The going is typically described as “standard,” “standard to slow,” or “fast.”',
    ],
    related: ['going', 'dirt'],
  },
  {
    slug: 'dirt',
    term: 'Dirt track',
    category: 'Going & Track',
    short:
      'A natural sand-and-soil racing surface used widely in US racing, described as fast, good, muddy or sloppy.',
    body: [
      'Dirt is the dominant Thoroughbred surface in the United States. Its condition is graded from fast (dry) through good, muddy and sloppy (wet). Dirt racing rewards early speed and a good draw, and kickback (sand thrown up by leading horses) can disadvantage runners settled at the back of the field.',
    ],
    related: ['all-weather', 'draw'],
  },
  {
    slug: 'official-rating',
    term: 'Official rating (OR)',
    category: 'Form & Ratings',
    short:
      'A handicapper’s numerical assessment of a horse’s ability, used to assign weight in handicaps.',
    body: [
      'An official rating is a number assigned by the racing authority’s handicapper that expresses a horse’s assessed ability. The higher the rating, the more weight the horse carries in a handicap, the system designed to give every runner a theoretically equal chance.',
      'Ratings rise after good runs and fall after poor ones. Spotting a horse that is “well handicapped” — running off a mark below its true ability — is a classic edge, and official rating is one of the inputs to our Intelligence Rating.',
    ],
    related: ['handicap', 'form'],
  },
  {
    slug: 'form',
    term: 'Form',
    category: 'Form & Ratings',
    short:
      'A horse’s recent race results, shown as a string of finishing positions read most-recent-last.',
    body: [
      'A horse’s form figures summarise recent finishing positions, e.g. “1-213”. Numbers are positions; a “0” means it finished outside the top nine; “-” separates racing seasons and “/” a longer break. Letters denote non-completions (F = fell, P = pulled up, U = unseated rider).',
      'Form is the single most weighted factor in our Intelligence Rating, but it is read in context: a closing run in a strong race can be worth more than an easy win in a weak one.',
    ],
    related: ['official-rating', 'going'],
  },
  {
    slug: 'handicap',
    term: 'Handicap',
    category: 'Race Types',
    short:
      'A race in which horses carry different weights based on official ratings to equalise their chances.',
    body: [
      'In a handicap, the handicapper assigns each horse a weight according to its official rating — better horses carry more — with the aim of giving every runner an equal theoretical chance and producing a close finish. Handicaps make up a large share of the racing programme and are where “weight-finding” and value assessment matter most.',
    ],
    related: ['official-rating', 'maiden', 'stakes-race'],
  },
  {
    slug: 'maiden',
    term: 'Maiden',
    category: 'Race Types',
    short: 'A horse that has never won a race, or a race restricted to such horses.',
    body: [
      'A “maiden” is a horse yet to win; a “maiden race” is restricted to them and is often where promising young horses make their debut. Breaking the maiden — recording a first career win — is a notable milestone, and lightly raced maidens can be hard to assess because their ability is unexposed.',
    ],
    related: ['handicap', 'stakes-race'],
  },
  {
    slug: 'stakes-race',
    term: 'Stakes race',
    category: 'Race Types',
    short:
      'A higher-class race, often with conditions or black-type status, attracting the best horses for larger purses.',
    body: [
      'Stakes races sit above ordinary handicaps and maidens in class. The very best are “black-type” races — Listed and Group/Graded (Group 1 the highest) — that confer prestige and lift the value of a horse’s pedigree for breeding. They carry the largest purses and draw the strongest fields.',
    ],
    related: ['handicap', 'maiden', 'group-one'],
  },
  {
    slug: 'group-one',
    term: 'Group 1 / Grade 1',
    category: 'Race Types',
    short: 'The highest class of race, contested by champion horses for the biggest prizes.',
    body: [
      'Group 1 (Europe) or Grade 1 (North America) races are the pinnacle of the sport — championship events such as the Kentucky Derby, the Epsom Derby and the Prix de l’Arc de Triomphe. Winning one defines a horse’s career and dramatically increases its stud value.',
    ],
    related: ['stakes-race'],
  },
  {
    slug: 'draw',
    term: 'Draw (post position)',
    category: 'Going & Track',
    short: 'The starting stall or gate a horse is allocated, which can affect its chance.',
    body: [
      'The draw is the randomly allocated starting position. On some courses — particularly turf sprints with a bend, or dirt tracks — a low or high draw can be a genuine advantage or disadvantage depending on track shape and going. Draw bias is one of the five factors in our Intelligence Rating, weighted only where it is known to matter.',
    ],
    related: ['dirt', 'going'],
  },
  {
    slug: 'value',
    term: 'Value (overlay)',
    category: 'Betting',
    short:
      'When a horse’s true chance of winning is greater than the chance implied by its market odds.',
    body: [
      'Value, or an “overlay,” exists when a horse’s real probability of winning is higher than the probability implied by its price. It is the foundation of disciplined, long-term staking: backing horses whose odds are bigger than they should be, regardless of whether any single one wins.',
      'Our value engine estimates each runner’s fair odds from the model and compares them to the market, flagging positive-edge runners. This is an assessment of price efficiency — not a prediction that the horse will win.',
    ],
    related: ['fair-odds', 'official-rating'],
  },
  {
    slug: 'fair-odds',
    term: 'Fair odds',
    category: 'Betting',
    short: 'The price that exactly reflects a horse’s true probability of winning, with no margin.',
    body: [
      'Fair odds are the “true” price implied by a probability — the reciprocal of that probability (a 25% chance = fair odds of 4.0). Comparing fair odds to the actual market price is how value is identified: if the market price is bigger than the fair price, the horse is an overlay.',
    ],
    related: ['value'],
  },
  {
    slug: 'colt-filly-gelding',
    term: 'Colt, filly, gelding & mare',
    category: 'The Horse',
    short: 'The terms describing a racehorse’s sex and age category.',
    body: [
      'A colt is an entire (un-gelded) young male; a filly a young female; a gelding a castrated male; a mare an older female (and a horse an older male, or “entire”). Geldings are often calmer and more focused on racing but cannot be used for breeding, so they rarely contest the very top colt/entire championship races in some jurisdictions.',
    ],
    related: ['form'],
  },
];

export function getTerm(slug: string): GlossaryTerm | null {
  return glossary.find((t) => t.slug === slug) ?? null;
}

export function allTermSlugs(): string[] {
  return glossary.map((t) => t.slug);
}

export function glossaryByCategory(): Record<string, GlossaryTerm[]> {
  const out: Record<string, GlossaryTerm[]> = {};
  for (const t of glossary) {
    (out[t.category] ??= []).push(t);
  }
  return out;
}
