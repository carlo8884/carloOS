// Racehorse ownership — the highest-value, license-free, data-free income
// surface for the racing brand. Targets an affluent, GROWING, NON-gambling
// audience (fractional ownership: MyRacehorse ~100k owners, $50M+ fractionalized;
// US horse industry $122B; avg owner spends ~$11k/yr). Monetizes via ownership/
// syndicate referral + (later) equine insurance affiliate + a paid playbook.
//
// Trust posture (QC §1 + racing-thesis brief): EDUCATION + referral framing only.
// No individualized investment advice; no promotion of a specific securities
// offering as "investment"; no guaranteed-return or guaranteed-winnings language.
// Fractional shares ARE securities (SEC-qualified, Reg A+) — we explain, we don't
// solicit. Every monetized link is disclosed.

export interface OwnershipTopic {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** Eyebrow label for the page. */
  kicker: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: { question: string; answer: string }[];
  /** Other ownership topic slugs to cross-link. */
  related?: string[];
}

export const ownershipTopics: OwnershipTopic[] = [
  {
    slug: 'should-you-own-a-racehorse',
    title: 'Should You Own a Racehorse?',
    metaTitle: 'Should You Own a Racehorse? An Honest Cost & Reality Guide',
    description:
      'A clear-eyed look at what racehorse ownership actually costs, what you can realistically expect to get back, and the honest reasons people do it anyway.',
    kicker: 'Start here',
    intro:
      'Racehorse ownership is one of the most exciting — and most misunderstood — ways to get involved in the sport. Before you buy a share or a horse, it helps to understand what you are really signing up for: the costs, the odds, and the genuine, non-financial reasons most owners say it was worth it.',
    sections: [
      {
        heading: 'The honest financial picture',
        body: [
          'Racehorse ownership is best approached as a passion expense, not an investment strategy. The majority of racehorses do not earn back their training and care costs, and even good horses carry real risk of injury and variable form. Anyone telling you ownership is a reliable way to make money is not being straight with you.',
          'That said, the costs are knowable and plannable. Whole-horse ownership carries training fees (often $50–120/day per horse in the US), plus vet, farrier, transport, insurance, and registration. Fractional and syndicate models exist precisely to make the experience accessible without those full monthly bills.',
        ],
      },
      {
        heading: 'Why people own anyway',
        body: [
          'Most owners are clear that the return is the experience, not the purse. Standing in the owners’ enclosure, getting the morning report from the trainer, watching a horse you have a stake in come down the stretch — that is the product. Treated that way, ownership delivers reliably; treated as a money-maker, it usually disappoints.',
          'The smartest first step for most people is a small, fixed-cost stake — a micro-share or a syndicate place — that caps your downside while giving you the full experience. You learn the realities before committing real money.',
        ],
      },
      {
        heading: 'A simple readiness check',
        body: [
          'Ask three questions. First: can you treat the money as spent the day you pay it, with no expectation of return? Second: do you want the experience (stable visits, race days, the community) or just the economics? Third: would a small share for a season teach you what you need before a bigger commitment? If you answered honestly, you already know whether ownership fits.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can you make money owning a racehorse?',
        answer:
          'It is possible but uncommon. Most horses do not cover their costs, and ownership should be treated as a passion expense rather than an investment. The reliable return is the experience, not profit.',
      },
      {
        question: 'What is the cheapest way to get involved?',
        answer:
          'A fractional micro-share or a syndicate place. These cap your cost (sometimes to a one-time payment of a few hundred dollars) while still giving you owner experiences and a share of any winnings.',
      },
    ],
    related: ['fractional-ownership-explained', 'racehorse-syndicates-explained'],
  },
  {
    slug: 'fractional-ownership-explained',
    title: 'Fractional Racehorse Ownership, Explained',
    metaTitle: 'Fractional Racehorse Ownership Explained (How Micro-Shares Work)',
    description:
      'How fractional racehorse ownership works: micro-shares, what you actually own, how winnings and sales are split, and the regulatory basics you should know.',
    kicker: 'Ownership models',
    intro:
      'Fractional ownership has opened racehorse ownership to people who could never buy a horse outright. Platforms divide a horse into thousands of shares, so a stake can cost as little as the price of a nice dinner. Here is how it actually works — and what you are really buying.',
    sections: [
      {
        heading: 'What a micro-share actually is',
        body: [
          'When you buy a fractional share, you typically own a security representing an economic interest in the horse (or in an entity that owns the horse) — not a hands-on share of the animal itself. You receive a proportional share of any purse winnings and of the proceeds if the horse is later sold, after fees.',
          'In the US, these offerings are generally registered with the SEC (often under Regulation A+), which is why platforms can sell them publicly in small amounts. That registration is a consumer protection, not a guarantee of returns.',
        ],
      },
      {
        heading: 'The economics, honestly',
        body: [
          'A micro-share gives you the experience and a real, if tiny, stake. Because shares are small and costs are shared, your downside is capped at what you paid. But the same math means winnings are split thousands of ways — a share of a stakes purse can be modest. Buy for the experience first.',
          'Read each offering’s documents for the fee structure: management fees, the markup over the horse’s cost, and how ongoing training is funded. These vary widely and determine your real economics.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are fractional racehorse shares a good investment?',
        answer:
          'Treat them as a passion purchase, not an investment. Shares are SEC-qualified securities, but most horses do not return a profit. The value is access to the ownership experience at a capped, known cost.',
      },
      {
        question: 'Do I have to pay ongoing training bills with a micro-share?',
        answer:
          'Usually no — most fractional models bundle a season of costs into the one-time share price, which is the main advantage over whole-horse or partnership ownership. Always confirm in the offering documents.',
      },
    ],
    related: ['should-you-own-a-racehorse', 'racehorse-syndicates-explained'],
  },
  {
    slug: 'racehorse-syndicates-explained',
    title: 'Racehorse Syndicates & Partnerships',
    metaTitle: 'Racehorse Syndicates & Partnerships — How They Work',
    description:
      'How racehorse syndicates and partnerships work, how they differ from fractional micro-shares, and what to look for in a syndicate manager before you join.',
    kicker: 'Ownership models',
    intro:
      'Syndicates and partnerships sit between a micro-share and owning a horse outright: a small group shares one or more horses, the costs, and the decisions. They offer a more hands-on experience than a micro-share — and more responsibility.',
    sections: [
      {
        heading: 'Syndicate vs partnership vs micro-share',
        body: [
          'A micro-share is a small, passive, fixed-cost stake bought from a platform. A syndicate is a managed group where members pay an upfront share plus ongoing monthly costs, run by a professional syndicate manager. A partnership is a smaller, often informal group of owners who jointly buy and manage a horse, splitting bills directly.',
          'The more hands-on the model, the more access and influence you get — and the more the ongoing costs land on you directly. Choose the level that matches how involved you actually want to be.',
        ],
      },
      {
        heading: 'How to vet a syndicate manager',
        body: [
          'Look for transparent fees, a clear record of communication with members, realistic talk about costs and odds (not hype), and how they handle a horse’s retirement and aftercare. A good manager sells you the experience honestly; a bad one sells you a dream. Ask current members about communication during a losing run — that is when the relationship is tested.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the difference between a syndicate and fractional ownership?',
        answer:
          'A fractional micro-share is a small, passive, usually fixed-cost stake bought from a platform. A syndicate is a managed group with an upfront share plus ongoing monthly training and care costs, and a more hands-on experience.',
      },
      {
        question: 'What should I ask before joining a syndicate?',
        answer:
          'Ask about the full fee structure, ongoing monthly costs, how decisions are made, how often members hear from the manager, and the plan for the horse’s aftercare when its racing career ends.',
      },
    ],
    related: ['fractional-ownership-explained', 'should-you-own-a-racehorse'],
  },
];

export function allOwnershipSlugs(): string[] {
  return ownershipTopics.map((t) => t.slug);
}

export function getOwnershipTopic(slug: string): OwnershipTopic | undefined {
  return ownershipTopics.find((t) => t.slug === slug);
}

// ── The paid digital product (validates willingness-to-pay; no license, no data feed) ──
// Rendered as a landing page; fulfillment (Gumroad/Shopify digital download or
// gated PDF) is wired when Carlo approves a checkout vendor. Until then the CTA
// is a waitlist (email capture), so the page earns an audience even pre-launch.

export interface PlaybookChapter {
  title: string;
  blurb: string;
}

export const playbook = {
  title: 'The First-Time Racehorse Owner’s Playbook',
  subtitle:
    'A plain-English, no-hype guide to getting into racehorse ownership the smart way — what it costs, how to choose a model, and how to avoid the expensive beginner mistakes.',
  priceNote: 'One-time digital download. No subscription.',
  chapters: [
    {
      title: '1. Is ownership right for you?',
      blurb:
        'The honest readiness check, the passion-vs-profit question, and how to set a budget you will not regret.',
    },
    {
      title: '2. Choosing your model',
      blurb:
        'Micro-share vs syndicate vs partnership vs whole-horse — a decision framework matched to your budget and how involved you want to be.',
    },
    {
      title: '3. Reading an offering or syndicate prospectus',
      blurb:
        'The fees that matter, the red flags that signal hype, and the questions that separate a good manager from a bad one.',
    },
    {
      title: '4. Your first season',
      blurb:
        'What actually happens after you buy in: stable visits, race-day access, communication, taxes, and managing expectations through a losing run.',
    },
    {
      title: '5. The exit and aftercare',
      blurb:
        'How sales and payouts work, what happens when a horse retires, and your responsibilities for aftercare done right.',
    },
  ] as PlaybookChapter[],
};
