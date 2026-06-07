// Major Races cluster (Pillar B — non-wagering racing vertical).
// Heritage/educational explainers for the marquee races that drive the sport's
// biggest seasonal audience (in Carlo's allowed list: "major races"). These are
// the casual->committed on-ramp. NO odds, picks, wagering, or trademark misuse:
// we describe public events factually, never imply official affiliation or use
// protected logos.
//
// Trust posture (QC §1): factual heritage/editorial. Records/superlatives are
// stated as widely-reported fact or framed as opinion where subjective. No
// betting framing.

export interface MajorRace {
  slug: string;
  name: string;
  short: string;
  /** Grouping for the hub. */
  group: 'Triple Crown' | 'Championship';
  intro: string;
  sections: { heading: string; body: string[] }[];
  keyFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const majorRaces: MajorRace[] = [
  {
    slug: 'triple-crown',
    name: 'The Triple Crown',
    short:
      'Racing’s most famous prize: winning the Kentucky Derby, Preakness Stakes, and Belmont Stakes in a single year.',
    group: 'Triple Crown',
    intro:
      'The Triple Crown is the defining achievement in American Thoroughbred racing: a single three-year-old winning the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes within about five weeks. It is extraordinarily rare — the combination of speed, stamina, soundness, and luck required across three demanding races at three tracks defeats almost every horse that tries.',
    sections: [
      {
        heading: 'The three races',
        body: [
          'The series runs in a fixed order each spring: the Kentucky Derby (1¼ miles at Churchill Downs) on the first Saturday in May, the Preakness Stakes (1 3/16 miles at Pimlico) two weeks later, and the Belmont Stakes (traditionally 1½ miles at Belmont Park) three weeks after that. The compressed schedule and increasing distance are what make the sweep so hard.',
          'The Belmont’s 1½-mile distance — longer than almost any race these horses will run again — is the classic stumbling block, which is why it’s nicknamed “the Test of the Champion.”',
        ],
      },
      {
        heading: 'Why it’s so rare',
        body: [
          'A Triple Crown winner must beat fresh challengers in each leg (rivals who skipped earlier legs arrive rested), handle three different tracks, and stay sound through an intense five-week stretch as a still-developing three-year-old. Long droughts between winners are common, which is part of what makes each one a national sports story.',
          'When a horse does complete the sweep, it enters the small pantheon of the sport’s immortals and its breeding value soars.',
        ],
      },
    ],
    keyFacts: [
      { label: 'The three legs', value: 'Kentucky Derby → Preakness Stakes → Belmont Stakes' },
      { label: 'Eligibility', value: 'Three-year-olds only; same horse must win all three in one year' },
      { label: 'Timeframe', value: 'About five weeks each spring' },
      { label: 'Belmont nickname', value: '“The Test of the Champion” (longest leg)' },
    ],
    faq: [
      {
        question: 'What is the Triple Crown in horse racing?',
        answer:
          'Winning all three of the Kentucky Derby, Preakness Stakes, and Belmont Stakes with the same three-year-old in a single year — the rarest and most prestigious achievement in American racing.',
      },
      {
        question: 'Why is the Triple Crown so hard to win?',
        answer:
          'A horse must win three demanding races at three tracks over increasing distances in about five weeks, beating fresh rivals each time while staying sound as a young, still-developing horse.',
      },
    ],
    related: ['kentucky-derby', 'preakness-stakes', 'belmont-stakes'],
  },
  {
    slug: 'kentucky-derby',
    name: 'The Kentucky Derby',
    short:
      'The first leg of the Triple Crown and America’s most famous race — “the most exciting two minutes in sports.”',
    group: 'Triple Crown',
    intro:
      'The Kentucky Derby is the first leg of the Triple Crown and the most famous horse race in the United States. Run on the first Saturday in May at Churchill Downs in Louisville, Kentucky, over 1¼ miles, it draws a vast audience — many of whom watch no other racing all year — and is wrapped in tradition, from the garland of roses to the singing of “My Old Kentucky Home.”',
    sections: [
      {
        heading: 'The race and the road to it',
        body: [
          'The Derby is for three-year-olds and limited to a large field (typically up to 20 runners), earned through a season of qualifying prep races. The 1¼-mile distance is longer than most of these horses have run, so it tests stamina as much as speed — and the huge field makes racing luck and post position genuinely important.',
          'Because it’s the first leg, the Derby sets the stage for the entire Triple Crown story each year.',
        ],
      },
      {
        heading: 'The traditions',
        body: [
          'The winner is draped in a garland of red roses (the source of the nickname “the Run for the Roses”), the crowd sings “My Old Kentucky Home” as the horses reach the post, and the infield and grandstand fashion — especially elaborate hats — are part of the spectacle. The official drink is the mint julep.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Leg', value: 'First leg of the Triple Crown' },
      { label: 'Where / when', value: 'Churchill Downs, Louisville · first Saturday in May' },
      { label: 'Distance', value: '1¼ miles, three-year-olds' },
      { label: 'Nickname', value: '“The Run for the Roses”' },
    ],
    faq: [
      {
        question: 'How long is the Kentucky Derby?',
        answer:
          'A mile and a quarter (1¼ miles) at Churchill Downs — a distance most of the three-year-old runners have never raced, which is why stamina and a good trip matter so much.',
      },
      {
        question: 'Why is it called the Run for the Roses?',
        answer:
          'The winner is draped in a garland of more than 400 red roses, a tradition that gave the race its enduring nickname.',
      },
    ],
    related: ['triple-crown', 'preakness-stakes', 'belmont-stakes'],
  },
  {
    slug: 'preakness-stakes',
    name: 'The Preakness Stakes',
    short:
      'The second leg of the Triple Crown, run two weeks after the Derby at Pimlico in Baltimore.',
    group: 'Triple Crown',
    intro:
      'The Preakness Stakes is the second leg of the Triple Crown, run two weeks after the Kentucky Derby at Pimlico Race Course in Baltimore, Maryland, over 1 3/16 miles. Shorter than the Derby and with a smaller field, it often sees the Derby winner face a mix of tired rivals and fresh challengers hoping to end a Triple Crown bid.',
    sections: [
      {
        heading: 'The middle jewel',
        body: [
          'At 1 3/16 miles, the Preakness is the shortest of the three legs, and the quick two-week turnaround from the Derby is a distinct test of recovery. Smaller fields make it a more tactical race than the chaotic 20-runner Derby.',
          'Its traditions include the “Woodlawn Vase” trophy and the painting of the winning stable’s silks on the weathervane atop the infield cupola after the race. The official drink is the Black-Eyed Susan.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Leg', value: 'Second leg of the Triple Crown' },
      { label: 'Where / when', value: 'Pimlico, Baltimore · two weeks after the Derby' },
      { label: 'Distance', value: '1 3/16 miles (shortest leg)' },
    ],
    faq: [
      {
        question: 'When is the Preakness run?',
        answer:
          'Two weeks after the Kentucky Derby, as the second leg of the Triple Crown, at Pimlico Race Course in Baltimore.',
      },
    ],
    related: ['triple-crown', 'kentucky-derby', 'belmont-stakes'],
  },
  {
    slug: 'belmont-stakes',
    name: 'The Belmont Stakes',
    short:
      'The final leg of the Triple Crown — “the Test of the Champion” — and the longest of the three.',
    group: 'Triple Crown',
    intro:
      'The Belmont Stakes is the third and final leg of the Triple Crown, run about three weeks after the Preakness. Traditionally contested at 1½ miles at Belmont Park in New York, it is the longest of the three legs and the graveyard of many Triple Crown bids — earning its nickname, “the Test of the Champion.”',
    sections: [
      {
        heading: 'The Test of the Champion',
        body: [
          'At a mile and a half, the Belmont asks for more stamina than these three-year-olds will likely ever be asked for again. A horse arriving with a chance at the sweep must overcome both the distance and the accumulated toll of three hard races in five weeks, often against rivals who skipped a leg to be fresh.',
          'Its traditions include the blanket of white carnations for the winner and the playing of “New York, New York.” (In years when Belmont Park is unavailable the race has been hosted elsewhere, sometimes at a shorter distance.)',
        ],
      },
    ],
    keyFacts: [
      { label: 'Leg', value: 'Third/final leg of the Triple Crown' },
      { label: 'Where / when', value: 'Belmont Park, New York · ~3 weeks after the Preakness' },
      { label: 'Distance', value: '1½ miles (longest leg)' },
      { label: 'Nickname', value: '“The Test of the Champion”' },
    ],
    faq: [
      {
        question: 'Why is the Belmont Stakes called the Test of the Champion?',
        answer:
          'Because its 1½-mile distance — the longest of the Triple Crown — combined with the toll of three races in five weeks, makes it the hardest leg to win and the one that ends most Triple Crown bids.',
      },
    ],
    related: ['triple-crown', 'kentucky-derby', 'preakness-stakes'],
  },
  {
    slug: 'breeders-cup',
    name: 'The Breeders’ Cup',
    short:
      'The year-end World Championships of racing — a two-day, multi-race series crowning divisional champions.',
    group: 'Championship',
    intro:
      'The Breeders’ Cup is the season-ending championship event of North American racing, a two-day series of high-value races held at a different host track each year (usually late October or early November). Unlike the spring Triple Crown, it is open to horses of all ages and both sexes across many divisions, making it the closest thing the sport has to a World Championships.',
    sections: [
      {
        heading: 'A championship for every division',
        body: [
          'The Breeders’ Cup is made up of more than a dozen separate championship races, each crowning the best in its category — sprinters, milers, distance horses, turf specialists, juveniles, and fillies and mares — culminating in the Breeders’ Cup Classic, the richest and most prestigious of them all.',
          'Because it gathers the best horses from around the world at the end of the season, Breeders’ Cup results heavily influence year-end championship honors and stallion values.',
        ],
      },
      {
        heading: 'How it differs from the Triple Crown',
        body: [
          'The Triple Crown is three specific spring races for three-year-olds only. The Breeders’ Cup is a year-end, all-ages, all-divisions championship at a rotating host track. One celebrates an emerging classic generation; the other crowns the proven champions of the whole season.',
        ],
      },
    ],
    keyFacts: [
      { label: 'What', value: 'Year-end World Championships, 2 days, 10+ championship races' },
      { label: 'Open to', value: 'All ages and sexes, many divisions' },
      { label: 'Marquee race', value: 'The Breeders’ Cup Classic' },
      { label: 'Venue', value: 'A different host track each year' },
    ],
    faq: [
      {
        question: 'What is the Breeders’ Cup?',
        answer:
          'A season-ending, two-day championship series of more than a dozen races crowning the best horses in each division of North American racing, headlined by the Breeders’ Cup Classic.',
      },
      {
        question: 'How is the Breeders’ Cup different from the Triple Crown?',
        answer:
          'The Triple Crown is three spring races for three-year-olds; the Breeders’ Cup is a year-end, all-ages, all-divisions championship held at a rotating host track.',
      },
    ],
    related: ['triple-crown', 'kentucky-derby'],
  },
];

export function allMajorRaceSlugs(): string[] {
  return majorRaces.map((r) => r.slug);
}

export function getMajorRace(slug: string): MajorRace | undefined {
  return majorRaces.find((r) => r.slug === slug);
}
