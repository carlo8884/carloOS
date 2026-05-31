// Newsletter — audience-capture glue for the racing brand (queue #5).
// Editorial newsletter landing + archive. NOT betting tips: the product is
// plain-English racing intelligence, ownership/experience guidance, and the
// week's racing explained. Validated model: In The Money ($20/mo, $199/yr),
// The Athletic (subscription-first, profitable). Free tier builds the list;
// a paid tier is a later, gated decision.
//
// Lane note: per-email DRIP SEQUENCES live in src/content/email-sequences/*
// (Monetization Bot's lane). This module is the editorial newsletter's public
// landing + sample-issue archive (COO/content lane) — no sequence wiring here.
// Trust posture (QC §1): no fabricated authorship; "Editorial team" only; no
// betting promises; sample issues are illustrative editorial, not tips.

export interface NewsletterEdition {
  slug: string;
  title: string;
  /** Display date label (illustrative cadence sample, not a live archive). */
  dateLabel: string;
  summary: string;
  /** Section teasers — the recurring shape of every issue. */
  sections: { heading: string; teaser: string }[];
}

export const newsletterMeta = {
  name: 'The Form',
  tagline: 'Racing intelligence, ownership, and the sport — explained.',
  pitch:
    'A free weekly read for people who love the sport: what happened, what it means, and how to think about racing more clearly. Plain-English, no hype, no tips — just the sport explained well.',
  cadence: 'Weekly, free.',
  // The recurring sections that define every issue (sets reader expectation).
  recurringSections: [
    {
      heading: 'The week in racing',
      teaser: 'The results and stories that actually mattered, explained in plain English.',
    },
    {
      heading: 'How to think about it',
      teaser: 'One concept — a rating factor, a form angle, a piece of breeding — unpacked so you understand the sport more deeply.',
    },
    {
      heading: 'Ownership & the business',
      teaser: 'A look inside how the sport actually works: ownership, the sales ring, the economics.',
    },
    {
      heading: 'Worth your time',
      teaser: 'A meeting to watch, a profile worth reading, a place worth travelling to.',
    },
  ],
};

export const sampleEditions: NewsletterEdition[] = [
  {
    slug: 'what-makes-a-great-stayer',
    title: 'What Makes a Great Stayer',
    dateLabel: 'Sample issue',
    summary:
      'Why some horses keep finding more in the final furlong while others empty out — stamina, breeding, and how to read it on the page.',
    sections: [
      {
        heading: 'The week in racing',
        teaser: 'The staying division’s big prep races and what the run styles told us.',
      },
      {
        heading: 'How to think about it',
        teaser: 'Stamina isn’t just distance — it’s how a horse rations energy. Here’s how to spot it in the form.',
      },
      {
        heading: 'Ownership & the business',
        teaser: 'Why stayers are often a more affordable, more patient ownership path than sprinters.',
      },
    ],
  },
  {
    slug: 'reading-the-sales-ring',
    title: 'Reading the Sales Ring',
    dateLabel: 'Sample issue',
    summary:
      'A yearling sale is a market like any other — pedigree, conformation, and sentiment all priced in. How to read what a sale topper actually tells you.',
    sections: [
      {
        heading: 'The week in racing',
        teaser: 'The headline lots and what the clearance rate said about the market’s health.',
      },
      {
        heading: 'How to think about it',
        teaser: 'What a six-figure yearling is really paying for — and why most of them never win a stakes race.',
      },
      {
        heading: 'Ownership & the business',
        teaser: 'How fractional platforms turn a sales-ring purchase into something you can own a slice of.',
      },
    ],
  },
];

export function allEditionSlugs(): string[] {
  return sampleEditions.map((e) => e.slug);
}

export function getEdition(slug: string): NewsletterEdition | undefined {
  return sampleEditions.find((e) => e.slug === slug);
}
