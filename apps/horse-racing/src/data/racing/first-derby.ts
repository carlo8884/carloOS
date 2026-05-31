// "Your First Derby" — the casual->committed on-ramp centerpiece (queue #5).
// Captures the ~16M-viewer Derby spike (52% female) — racing's biggest, most
// winnable casual audience — with a genuinely useful beginner hub. Seasonal SEO
// + GEO citation magnet. NO data feed, NO gambling license needed.
//
// Trust posture (QC §1): factual/nominative reference to a public event; we do
// NOT use protected logos/marks, do NOT sell or imply official affiliation, and
// frame any wagering as optional entertainment with no betting promotion. The
// betting section EXPLAINS the simplest bets factually (win/place/show) — it
// does not promote a sportsbook or make any betting promise.

export interface DerbyBlock {
  heading: string;
  body: string[];
  /** Optional bullet list of quick facts. */
  bullets?: string[];
}

export const firstDerby = {
  title: 'Your First Derby',
  tagline: 'Everything a first-timer needs to enjoy the biggest day in racing.',
  intro:
    'Millions of people watch the big spring classic each year — many of them tuning into racing for the only time all year. If that’s you, welcome. This is a friendly, no-jargon guide to enjoying the day: what you’re watching, what to wear, what to drink, and how the simplest wagers work if you want to play along. No experience needed.',
  blocks: [
    {
      heading: 'What you’re actually watching',
      body: [
        'The headline race is a contest for elite three-year-old Thoroughbreds over a classic distance — the culmination of a long road of prep races. It lasts only about two minutes, but the build-up runs all afternoon, with undercard races, traditions, and pageantry leading up to the main event.',
        'You don’t need to know the horses to enjoy it. Pick one whose name or story you like, watch the parade to the post, and you’ll be surprised how invested you feel in two minutes.',
      ],
    },
    {
      heading: 'What to wear',
      body: [
        'Big race days have a dress-up tradition, and the spring classics lean into pastels and bold hats. You don’t need to attend in person to join in — themed dress is half the fun of a watch party.',
      ],
      bullets: [
        'Pastels over dark or neutral colors — powder blue, soft pink, mint, yellow.',
        'A statement hat or fascinator is the signature look (traditionally for women, but anyone can join in).',
        'Men often go bold: colorful blazers, ties, and loafers.',
        'Comfortable shoes if you’re on your feet all day.',
      ],
    },
    {
      heading: 'The drink & the food',
      body: [
        'The classic drink is the mint julep — bourbon, fresh mint, sugar, and crushed ice, traditionally in a frosted cup. It’s easy to make a pitcher for a watch party (and just as easy to make a no-alcohol version with mint and soda).',
        'For food, think Southern-leaning party spreads: hot browns, pimento cheese, benedictine, and bite-size desserts. A grazing table lets guests come and go between races.',
      ],
    },
    {
      heading: 'How to watch',
      body: [
        'Major networks carry the day live, with streaming options, and coverage usually starts hours before the feature race with build-up, fashion, and undercard racing. Tune in early — the atmosphere is a big part of the experience, not just the two-minute race.',
      ],
    },
    {
      heading: 'The simplest way to play along (optional)',
      body: [
        'If you want a little skin in the game, the three simplest wagers are Win, Place, and Show — and you only need to understand finishing position, not odds math.',
        'Treat any wager as entertainment spending with a fixed, small budget — money you’re happy to spend on the fun of the day, never money you can’t afford to lose. Most people enjoy the day perfectly well without betting a cent.',
      ],
      bullets: [
        'Win — your horse has to finish 1st.',
        'Place — your horse has to finish 1st or 2nd.',
        'Show — your horse has to finish 1st, 2nd, or 3rd (the most forgiving, smallest payouts).',
        'Odds simply reflect how much money is bet on each horse — shorter odds = more popular, bigger odds = longer shot.',
      ],
    },
    {
      heading: 'How to pick a horse (the fun way)',
      body: [
        'For a first-timer, picking is part of the fun and doesn’t need to be scientific. Plenty of casual fans pick by name, by the jockey’s silks colors, by post position, or just by which horse catches their eye in the parade.',
        'If you want a slightly more informed pick, our beginner guides explain how to read a racecard and what the model looks at — and you can test your eye on our just-for-fun prediction game.',
      ],
    },
  ] as DerbyBlock[],
  faq: [
    {
      question: 'Do I need to know anything about horse racing to enjoy the Derby?',
      answer:
        'Not at all. Pick a horse whose name or story you like, dress up if you want, and enjoy the build-up. The race itself lasts about two minutes — most of the day is atmosphere and tradition you can enjoy with zero prior knowledge.',
    },
    {
      question: 'What are the simplest bets for a first-timer?',
      answer:
        'Win (finish 1st), Place (finish 1st or 2nd), and Show (finish in the top 3). They take seconds to understand and give you a reason to watch. Treat any wager as a small, fixed entertainment budget — and remember most people enjoy the day without betting at all.',
    },
    {
      question: 'What should I wear to a Derby party?',
      answer:
        'Lean into pastels and a statement hat or fascinator. Avoid dark or all-neutral outfits unless you brighten them with a bold hat. Themed dress is half the fun, whether you’re at the track or a watch party.',
    },
  ],
};
