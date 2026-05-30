// Evergreen "how to" guides — long-tail SEO + GEO surface targeting high-volume
// beginner queries ("how to read a racecard", "how horse racing odds work").
// Structured, sourced, plain-English; no betting advice. Each guide is a
// durable indexable URL with HowTo/FAQ schema potential.

export interface GuideSection {
  heading: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  faq: { question: string; answer: string }[];
  related?: string[]; // glossary slugs
}

export const guides: Guide[] = [
  {
    slug: 'how-to-read-a-racecard',
    title: 'How to Read a Racecard',
    metaTitle: 'How to Read a Horse Racing Racecard — Beginner’s Guide',
    description:
      'A plain-English guide to reading a horse racing racecard: runner numbers, form figures, weights, jockey and trainer, odds, and how to spot what matters.',
    intro:
      'A racecard packs a huge amount of information into a small space. Once you know what each column means, you can size up a race in seconds. Here is every element explained.',
    sections: [
      {
        heading: 'The race header',
        body: [
          'At the top you’ll find the course, off-time, race name, distance (in furlongs or miles), the surface (turf, dirt or all-weather), the going, the class or grade, the prize money, and any age or rating restrictions. This sets the context: a Group 1 over a mile on good ground is a very different test from a low-grade sprint handicap on heavy.',
        ],
      },
      {
        heading: 'Runner number and draw',
        body: [
          'Each horse has a saddlecloth number. On flat races you’ll also see the draw — the starting stall — often in brackets. On some courses the draw materially affects a horse’s chance, which is why it is one of the five factors in our Intelligence Rating.',
        ],
      },
      {
        heading: 'Form figures',
        body: [
          'The string of numbers beside each horse is its recent form, read most-recent-last. A “1” is a win, higher numbers are finishing positions, “0” means it finished outside the top nine, and letters mark non-completions (F = fell, P = pulled up, U = unseated). A dash separates seasons; a slash marks a longer break.',
        ],
      },
      {
        heading: 'Weight, jockey and trainer',
        body: [
          'Weight is what the horse carries, set by the handicapper in handicaps to equalise chances. The jockey and trainer are listed too — their form and strike-rates can swing a marginal decision. Our trainer and jockey profiles track exactly this.',
        ],
      },
      {
        heading: 'Official rating and odds',
        body: [
          'The official rating (OR) is the handicapper’s number for the horse’s ability. The odds — shown as decimals or fractions — reflect the market’s view of each runner’s chance. Comparing the market’s implied probability with a model’s estimate is how value is found.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do you read form figures on a racecard?',
        answer:
          'Form figures are read most-recent-last. Numbers are finishing positions (1 = win), a 0 means the horse finished outside the top nine, and letters denote non-completions (F = fell, P = pulled up, U = unseated rider). A dash separates racing seasons and a slash marks a longer break.',
      },
      {
        question: 'What does the draw mean on a racecard?',
        answer:
          'The draw is the starting stall a horse is allocated in flat races. On certain courses a low or high draw can be an advantage or disadvantage depending on the track shape and going.',
      },
    ],
    related: ['form', 'draw', 'official-rating', 'going'],
  },
  {
    slug: 'how-horse-racing-odds-work',
    title: 'How Horse Racing Odds Work',
    metaTitle: 'How Horse Racing Odds Work — Decimal, Fractional & Implied Probability',
    description:
      'Understand horse racing odds: decimal vs fractional formats, how to convert odds to implied probability, the bookmaker’s margin, and what “value” really means.',
    intro:
      'Odds look intimidating but they’re just a way of expressing probability and payout. Once you can convert odds to a percentage chance, you can judge whether a price is generous or mean.',
    sections: [
      {
        heading: 'Decimal vs fractional odds',
        body: [
          'Decimal odds (e.g. 5.0) show your total return per unit staked, including your stake — a 1-unit bet at 5.0 returns 5. Fractional odds (e.g. 4/1) show profit only — a 1-unit bet at 4/1 returns 4 profit plus your 1 stake, the same as decimal 5.0. Decimal is easier for comparing value, which is why we use it.',
        ],
      },
      {
        heading: 'Converting odds to implied probability',
        body: [
          'Implied probability is simply 1 divided by the decimal odds. Odds of 4.0 imply a 25% chance (1 ÷ 4.0 = 0.25). Odds of 2.0 imply 50%. This is the market’s estimate of how likely the horse is to win — and the number you compare against your own or a model’s estimate.',
        ],
      },
      {
        heading: 'The bookmaker’s margin (overround)',
        body: [
          'If you add up the implied probabilities of every runner in a race, the total is more than 100% — often 110–120%. That extra is the bookmaker’s built-in margin, the “overround.” It’s why beating the market consistently is hard, and why finding genuine value matters.',
        ],
      },
      {
        heading: 'What “value” actually means',
        body: [
          'Value isn’t backing winners — it’s backing prices that are bigger than the true chance. If a horse’s real probability is 33% (fair odds 3.0) but it’s available at 5.0, that’s value, whether or not it wins this time. Our value engine estimates each runner’s fair odds and flags where the market is offering an overlay.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do you convert decimal odds to a probability?',
        answer:
          'Divide 1 by the decimal odds. For example, odds of 4.0 imply a probability of 1 ÷ 4.0 = 25%. Odds of 2.0 imply 50%.',
      },
      {
        question: 'What is the overround in horse racing odds?',
        answer:
          'The overround is the bookmaker’s margin. If you sum the implied probabilities of all runners in a race, the total exceeds 100% (often 110–120%); the surplus is the built-in margin that gives the bookmaker an edge.',
      },
      {
        question: 'What is value betting?',
        answer:
          'Value betting means backing a horse whose odds are bigger than its true probability of winning implies. It is about price efficiency over the long run, not predicting any single winner.',
      },
    ],
    related: ['value', 'fair-odds', 'official-rating'],
  },
];

export function getGuide(slug: string): Guide | null {
  return guides.find((g) => g.slug === slug) ?? null;
}

export function allGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
