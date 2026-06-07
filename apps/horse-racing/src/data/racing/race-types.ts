// Race Types cluster (Pillar B — non-wagering racing vertical).
// Pure educational content explaining how races are CLASSIFIED — the single
// cleanest trust-safe racing topic (zero wagering surface; squarely in Carlo's
// allowed list: "race types"). Each type is a substantive, sourced explainer in
// the definitional format AI surfaces cite. NO odds, picks, EV, or handicapping.
//
// Trust posture (QC §1): factual/structural explanation of the sport's
// conditions. No betting advice, no "best bet" framing, no fabricated authority.

export interface RaceType {
  slug: string;
  name: string;
  /** One-line definition (meta + list cards). */
  short: string;
  /** Where it sits in the class hierarchy, low→high. */
  tier: 'entry' | 'mid' | 'top';
  intro: string;
  sections: { heading: string; body: string[] }[];
  /** Quick-reference facts. */
  keyFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const raceTypes: RaceType[] = [
  {
    slug: 'maiden-races',
    name: 'Maiden Races',
    short:
      'Races restricted to horses that have never won a race — the starting point of almost every racing career.',
    tier: 'entry',
    intro:
      'A maiden race is for horses that have not yet won. The word “maiden” refers to the horse, not the race: a horse remains a “maiden” until it wins for the first time, an achievement known as “breaking its maiden.” Maidens are where nearly every champion begins, which makes them one of the most watched categories for spotting future talent.',
    sections: [
      {
        heading: 'Maiden special weight vs maiden claiming',
        body: [
          'In US racing, maidens split into two main kinds. A “maiden special weight” is the higher-quality version: horses carry weights set by the race conditions and are not for sale, so trainers run their better prospects here. A “maiden claiming” race is for maidens that can be purchased (“claimed”) out of the race, signalling connections think the horse is less promising or want to place it where it can win.',
          'The distinction matters for understanding a horse’s trajectory. A well-bred horse debuting in a maiden special weight is being given every chance; one dropped into a maiden claiming early often has a question mark over its ability or soundness.',
        ],
      },
      {
        heading: 'Why maidens are so closely watched',
        body: [
          'Because the field has no prior winners, maidens are full of unknowns — first-time starters, horses stepping up in trip, and late-developing types all mix together. For breeders, owners, and fans, a strong maiden win is the first real evidence that a young horse has ability, and the form of a top maiden can read like a who’s-who of the next season’s stars.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Open to', value: 'Horses that have never won a race' },
      { label: 'Two main types', value: 'Maiden special weight (higher quality) · maiden claiming (lower)' },
      { label: 'Winning a maiden', value: 'Called “breaking your maiden”' },
    ],
    faq: [
      {
        question: 'What is a maiden race in horse racing?',
        answer:
          'A race open only to horses that have never won. A horse stays a “maiden” until its first career win, which is called “breaking its maiden.”',
      },
      {
        question: 'What is the difference between maiden special weight and maiden claiming?',
        answer:
          'Maiden special weight is the higher-quality version where horses are not for sale and carry condition-set weights; maiden claiming is for maidens that can be bought out of the race, generally indicating lower expectations.',
      },
    ],
    related: ['claiming-races', 'allowance-races'],
  },
  {
    slug: 'claiming-races',
    name: 'Claiming Races',
    short:
      'Races in which every horse is for sale at a set price, forming the everyday backbone of the racing calendar.',
    tier: 'entry',
    intro:
      'Claiming races are the workhorse of the sport — the most common race type at most tracks. In a claiming race, every runner can be purchased (“claimed”) for a fixed price stated in the conditions, before the race is run. This self-regulating mechanism keeps fields competitive by discouraging owners from running a clearly superior horse against weaker, cheaper rivals.',
    sections: [
      {
        heading: 'How the claim works',
        body: [
          'A licensed owner (usually through a trainer) submits a claim before the race for the stated price. The moment the starting gate opens, ownership effectively transfers to the claimant — so if the horse wins, the prize money goes to the old owner, but the horse itself goes to the new one. The claimant takes on all the risk of the running, including injury.',
          'The claiming price is the lever that sorts horses by ability. A $5,000 claimer and a $50,000 claimer are very different classes of horse; the price tag is itself a rough rating of quality.',
        ],
      },
      {
        heading: 'Why claiming races exist',
        body: [
          'The system solves a basic problem: without it, an owner could enter a top horse in a weak race for an easy win. By making every runner buyable, claiming races ensure connections only drop a good horse in cheap company at the real risk of losing it. The result is closely matched fields and a continuous, transparent market in racehorses.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Defining feature', value: 'Every horse can be bought at a set price' },
      { label: 'Claim timing', value: 'Submitted before the race; transfers at the gate' },
      { label: 'Prize vs horse', value: 'Old owner keeps the purse; claimant gets the horse' },
    ],
    faq: [
      {
        question: 'What is a claiming race?',
        answer:
          'A race in which every horse is available for purchase at a fixed “claiming price” stated in the conditions. The mechanism keeps fields evenly matched.',
      },
      {
        question: 'If I claim a horse and it wins, do I get the prize money?',
        answer:
          'No. The previous owner keeps the purse for that race; the person who claimed the horse takes ownership of the horse itself, effective from the start of the race.',
      },
    ],
    related: ['maiden-races', 'allowance-races', 'optional-claiming-races'],
  },
  {
    slug: 'allowance-races',
    name: 'Allowance Races',
    short:
      'Mid-tier races above claiming level where horses are not for sale and weights are adjusted by conditions.',
    tier: 'mid',
    intro:
      'An allowance race sits above claiming races in class but below stakes. Horses are not for sale, and the race’s “conditions” grant weight allowances (reductions) based on what a horse has — or has not — achieved. They are the proving ground where a promising horse that has broken its maiden develops toward stakes company.',
    sections: [
      {
        heading: 'How the “allowances” work',
        body: [
          'The conditions specify weight reductions for horses that lack certain accomplishments — for example, “non-winners of two races other than maiden or claiming.” A horse that hasn’t met the stated condition is “allowed” to carry less weight, levelling the field between lightly and more accomplished runners. This is the origin of the name.',
          'You’ll often see “allowance optional claiming” races, a hybrid that lets some horses run for an allowance while others may also be claimed — giving racing secretaries flexibility to fill competitive fields.',
        ],
      },
      {
        heading: 'Where allowance races sit in a career',
        body: [
          'For a developing horse, the path typically runs maiden win → allowance company → stakes. Performing well through allowance “conditions” (each win removes an eligibility) is the sign of a horse on an upward curve. Many graded-stakes horses spent a season climbing the allowance ranks first.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Class', value: 'Above claiming, below stakes' },
      { label: 'For sale?', value: 'No (except in “allowance optional claiming” hybrids)' },
      { label: 'Weight basis', value: 'Allowances (reductions) set by conditions' },
    ],
    faq: [
      {
        question: 'What is an allowance race?',
        answer:
          'A mid-tier race where horses are not for sale and carry weights adjusted by “allowances” tied to their past accomplishments — a step up from claiming and a step toward stakes.',
      },
      {
        question: 'Why is it called an “allowance”?',
        answer:
          'Because the conditions allow weight reductions to horses that lack certain achievements, levelling the field between more and less accomplished runners.',
      },
    ],
    related: ['claiming-races', 'optional-claiming-races', 'stakes-races'],
  },
  {
    slug: 'optional-claiming-races',
    name: 'Optional Claiming Races',
    short:
      'A hybrid where some horses run for an allowance while others may also be claimed, used to fill competitive fields.',
    tier: 'mid',
    intro:
      'Optional claiming races are a flexible hybrid between allowance and claiming conditions. Each entrant’s connections choose whether to enter their horse “for the tag” (claimable) or under the allowance conditions (not for sale). This lets racing secretaries combine two pools of horses into one competitive field.',
    sections: [
      {
        heading: 'How the option works',
        body: [
          'When entering, connections elect whether the horse runs subject to being claimed or as a non-claiming allowance runner. Horses entered “for the tag” can be claimed; those entered under the allowance condition cannot. The two run together, so the field mixes claimable and protected horses.',
          'This solves a scheduling problem: at smaller meets there may not be enough horses to fill a pure allowance or a pure claiming race, so the optional-claiming format pools both into one viable race.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Class', value: 'Allowance-level, with a claiming option' },
      { label: 'Key choice', value: 'Each owner picks claimable or protected at entry' },
      { label: 'Purpose', value: 'Fills competitive fields where pure races can’t' },
    ],
    faq: [
      {
        question: 'What is an optional claiming race?',
        answer:
          'A hybrid race where each horse is entered either “for the tag” (claimable) or under allowance conditions (not for sale), combining both pools into one field.',
      },
    ],
    related: ['allowance-races', 'claiming-races'],
  },
  {
    slug: 'stakes-races',
    name: 'Stakes Races',
    short:
      'The top class of racing, with the biggest purses, where owners pay entry fees that are added to the prize money.',
    tier: 'top',
    intro:
      'Stakes races are the highest class of racing and carry the largest purses. The name comes from the entry fees (“stakes”) that owners pay — nomination, entry, and starting fees that are typically added to the prize fund. These are the races that make champions and define a season.',
    sections: [
      {
        heading: 'Why they’re called “stakes”',
        body: [
          'Owners must put up money at various stages — nominating early, then paying to enter and to start — and those fees are usually added to the purse. So the participants themselves have a financial stake in the pot, on top of any track or sponsor contribution. This is why the very biggest races can carry multi-million-dollar purses.',
          'Some prestigious races are “invitational,” waiving fees for invited horses, but the classic stakes structure is fee-based.',
        ],
      },
      {
        heading: 'Black type and breeding value',
        body: [
          'Stakes races confer “black type” — the bold print in sales catalogues marking a horse (and its relatives) as a stakes winner or placegetter. Black type dramatically raises a horse’s breeding value, which is why stakes performance echoes far beyond the racetrack into the bloodstock market.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Class', value: 'The top tier of racing' },
      { label: 'Named for', value: 'The entry fees (“stakes”) owners put up' },
      { label: 'Confers', value: '“Black type” — raises breeding value' },
    ],
    faq: [
      {
        question: 'What is a stakes race?',
        answer:
          'The highest class of race, with the largest purses, named for the entry fees (“stakes”) owners pay, which are typically added to the prize money. Stakes wins confer valuable “black type.”',
      },
      {
        question: 'Why are stakes races important for breeding?',
        answer:
          'They confer “black type” — the bold catalogue print marking stakes winners and placegetters — which significantly increases a horse’s value as a breeding prospect.',
      },
    ],
    related: ['graded-stakes-races', 'allowance-races', 'handicap-races'],
  },
  {
    slug: 'graded-stakes-races',
    name: 'Graded Stakes Races',
    short:
      'The elite subset of stakes races, ranked Grade 1, 2, or 3 by an independent committee on quality.',
    tier: 'top',
    intro:
      'Graded stakes are the cream of stakes racing. An independent committee grades the most important stakes races as Grade 1 (the very best), Grade 2, or Grade 3, based on the quality of the horses they attract over time. A Grade 1 win is the highest achievement in the sport short of a Classic.',
    sections: [
      {
        heading: 'How grading works',
        body: [
          'Grades are assigned by a committee (in the US, the American Graded Stakes Committee) that reviews the strength of each race’s recent fields. A race must demonstrate sustained quality to earn or keep a grade, and grades can be promoted or demoted year to year. This makes the grade a rolling, peer-reviewed measure of a race’s class rather than a permanent label.',
          'Internationally, the same idea appears as “Group” races (Group 1/2/3) in Europe and much of the world; “Graded” and “Group” are the regional names for the same elite tier.',
        ],
      },
      {
        heading: 'Why a Grade 1 matters',
        body: [
          'Grade 1 races are where championships are decided and where the breeding industry looks first. A Grade 1 winner commands the top of the stallion and broodmare market, and the “G1” label is the single most valuable line on a pedigree page. For owners, a Grade 1 is the pinnacle goal of most campaigns.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Ranks', value: 'Grade 1 (best), Grade 2, Grade 3' },
      { label: 'Assigned by', value: 'An independent graded-stakes committee' },
      { label: 'International equivalent', value: '“Group” races (G1/G2/G3)' },
    ],
    faq: [
      {
        question: 'What is a graded stakes race?',
        answer:
          'The elite subset of stakes races, ranked Grade 1, 2, or 3 by an independent committee based on the quality of horses each race attracts. Grade 1 is the highest.',
      },
      {
        question: 'What is the difference between “graded” and “group” races?',
        answer:
          'They are regional names for the same elite tier. North America uses “Graded” (G1–G3); Europe and much of the world use “Group” (G1–G3).',
      },
    ],
    related: ['stakes-races', 'handicap-races'],
  },
  {
    slug: 'handicap-races',
    name: 'Handicap Races',
    short:
      'Races where an official assigns each horse a weight intended to give every runner an equal chance.',
    tier: 'mid',
    intro:
      'In a handicap, an official called the racing secretary or handicapper assigns each horse a weight to carry, with better horses carrying more. The goal is a theoretical dead heat — to give every runner an equal winning chance on paper. Handicaps are a distinctive and strategically rich part of racing.',
    sections: [
      {
        heading: 'How weights are assigned',
        body: [
          'The handicapper rates each horse on its past form and assigns weight accordingly: the higher the rating, the more weight. Weight is carried via the saddle and lead pads. The idea is that a superior horse giving weight to an inferior one evens out their chances — so handicaps reward improving horses the handicapper hasn’t yet “caught up” with.',
          'Handicaps contrast with “weight-for-age” and condition races, where weights are set by age, sex, or accomplishment rather than by an individualised rating.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Weights set by', value: 'An official handicapper, per horse' },
      { label: 'Principle', value: 'Better horses carry more — aiming for an equal chance' },
      { label: 'Contrast', value: 'Weight-for-age / condition races set weight by rule, not rating' },
    ],
    faq: [
      {
        question: 'What is a handicap race?',
        answer:
          'A race in which an official assigns each horse a weight to carry — more for better horses — aiming to give every runner an equal chance of winning.',
      },
    ],
    related: ['stakes-races', 'allowance-races'],
  },
];

export function allRaceTypeSlugs(): string[] {
  return raceTypes.map((r) => r.slug);
}

export function getRaceType(slug: string): RaceType | undefined {
  return raceTypes.find((r) => r.slug === slug);
}

export const tierLabels: Record<RaceType['tier'], string> = {
  entry: 'Entry level',
  mid: 'Mid class',
  top: 'Top class',
};
