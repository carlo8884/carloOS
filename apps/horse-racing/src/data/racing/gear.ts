// Equestrian gear & commerce — license-free, data-free income surface #4.
// The single biggest, most certain money pool adjacent to racing: the US horse
// industry is ~$122B and the average owner spends ~$11k/yr (affluent, impulse
// buyers, 92% female, repeat purchasers). Needs NO race data and NO gambling
// license. Monetizes via equestrian retail affiliate programs (StateLineTack,
// Breeches.com, Horse Saddle Shop, etc. — Carlo-gated vendors).
//
// Trust posture (QC §1): editorial buying guidance, NOT fabricated hands-on
// testing. We organise and explain categories and what to look for; we do not
// claim "we tested" any product. AffiliateDisclosure renders above any picks.
// No product ReviewCards are wired here — that is Monetization Bot's lane; this
// module ships the editorial buyer's-guide content + disclosed category links,
// and the route wiring is coordinated with Monetization.

export interface GearGuide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  /** "What to look for" buying checklist. */
  checklist: { point: string; detail: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const gearGuides: GearGuide[] = [
  {
    slug: 'new-owner-starter-kit',
    title: 'The New Owner’s Starter Kit',
    metaTitle: 'New Horse Owner Starter Kit — What You Actually Need First',
    description:
      'A practical checklist of the gear a first-time horse owner actually needs on day one — and what can wait — organised by category, with what to look for in each.',
    kicker: 'Buying guides',
    intro:
      'New owners are often sold a mountain of gear they don’t need yet. This guide separates the genuine day-one essentials from the nice-to-haves, and explains what to look for in each category so your first spend goes on the right things.',
    sections: [
      {
        heading: 'Day-one essentials',
        body: [
          'Before anything else you need the basics of daily care and safety: a well-fitted halter and lead rope, basic grooming tools, feed and water buckets, and a first-aid kit. These are the items you will use every single day, so prioritise fit and durability over brand.',
          'Tack (saddle, bridle, pads) matters enormously but is also the easiest place to overspend or buy the wrong thing. Until you know your horse and discipline, borrow or buy used where you can, and invest in a professional fitting before committing to an expensive saddle.',
        ],
      },
      {
        heading: 'What can wait',
        body: [
          'Specialist equipment — show gear, blankets for every season, training aids — can almost always wait until you have a clear, specific need. Buying ahead of need is the most common first-owner money mistake. Build the kit out as the horse and your routine tell you what’s actually required.',
        ],
      },
    ],
    checklist: [
      { point: 'Halter & lead rope', detail: 'Correct size for your horse; adjustable, well-stitched hardware.' },
      { point: 'Grooming kit', detail: 'Curry comb, body brush, hoof pick, mane comb — a basic boxed set is fine to start.' },
      { point: 'Feed & water buckets', detail: 'Durable, easy to clean, correctly sized for stall or paddock.' },
      { point: 'Equine first-aid kit', detail: 'Wound care, a thermometer, vet wrap; know your vet’s number before you need it.' },
      { point: 'Professional saddle fitting', detail: 'Book the fitting before buying — a poor-fitting saddle harms the horse and wastes money.' },
    ],
    faq: [
      {
        question: 'What does a first-time horse owner actually need to buy first?',
        answer:
          'Day-one essentials are a fitted halter and lead, basic grooming tools, feed and water buckets, and an equine first-aid kit. Tack matters but should follow a professional fitting; specialist gear can wait until you have a specific need.',
      },
      {
        question: 'Should I buy tack new or used?',
        answer:
          'Used is often smart while you’re learning your horse and discipline — especially before a professional saddle fitting. Invest in new, well-fitted tack once you know exactly what you need.',
      },
    ],
    related: ['choosing-tack-and-saddles', 'grooming-and-care-essentials'],
  },
  {
    slug: 'choosing-tack-and-saddles',
    title: 'Choosing Tack & Saddles',
    metaTitle: 'How to Choose Tack & a Saddle — A Buyer’s Guide',
    description:
      'What to look for when buying a saddle, bridle, and tack: fit, discipline, materials, and the costly mistakes to avoid — with a practical buying checklist.',
    kicker: 'Buying guides',
    intro:
      'Tack is the most consequential — and most expensive — gear a horse owner buys. Fit affects the horse’s comfort, soundness, and behaviour, so this is the one category where getting it right matters most. Here’s how to approach it.',
    sections: [
      {
        heading: 'Fit comes before everything',
        body: [
          'A saddle that doesn’t fit can cause pain, behavioural problems, and long-term soundness issues. Always involve a qualified saddle fitter who assesses both horse and rider; the right fit depends on the horse’s shape, your discipline, and your own build. No brand or price substitutes for a proper fitting.',
          'Bridles and bits should match your discipline and your horse’s needs. When in doubt, get guidance from your trainer or a knowledgeable retailer rather than buying on looks.',
        ],
      },
      {
        heading: 'Materials and budget',
        body: [
          'Leather lasts and ages well with care but costs more and needs maintenance; synthetic tack is lighter, cheaper, and lower-maintenance, and has improved greatly. Both are legitimate choices — match the material to your budget, climate, and how much upkeep you’ll realistically do.',
        ],
      },
    ],
    checklist: [
      { point: 'Professional fitting first', detail: 'Assess horse and rider together before you buy anything expensive.' },
      { point: 'Match to discipline', detail: 'Dressage, jumping, trail, and Western all use different tack — buy for what you actually do.' },
      { point: 'Leather vs synthetic', detail: 'Leather: durable, needs care. Synthetic: lighter, cheaper, low-maintenance.' },
      { point: 'Check the hardware & stitching', detail: 'Quality buckles, billets, and stitching are safety items, not just cosmetics.' },
    ],
    faq: [
      {
        question: 'How important is professional saddle fitting?',
        answer:
          'Critical. A poorly fitted saddle can cause pain, behavioural issues, and lasting soundness problems. Always have both horse and rider assessed by a qualified fitter before buying.',
      },
      {
        question: 'Is synthetic tack as good as leather?',
        answer:
          'For many riders, yes. Synthetic is lighter, cheaper, and lower-maintenance, while leather is more durable and ages well with care. Both are valid — choose based on budget, climate, and upkeep.',
      },
    ],
    related: ['new-owner-starter-kit', 'grooming-and-care-essentials'],
  },
  {
    slug: 'grooming-and-care-essentials',
    title: 'Grooming & Care Essentials',
    metaTitle: 'Horse Grooming & Care Essentials — What to Buy and Why',
    description:
      'The grooming and daily-care products every horse owner uses, what each tool does, and how to choose quality that lasts — without overspending.',
    kicker: 'Buying guides',
    intro:
      'Grooming gear is the kit you’ll reach for every day, so durability and comfort-in-hand matter more than brand names. This guide covers the core tools, what each is for, and where it’s worth spending a little more.',
    sections: [
      {
        heading: 'The core grooming tools',
        body: [
          'A complete basic kit is a curry comb (to lift dirt and loosen the coat), a stiff dandy brush and a soft body brush, a mane and tail comb, and a hoof pick. These cover daily grooming for most horses; specialty coat and skin products come later as needed.',
          'Buy tools that feel comfortable in your hand and are easy to clean. Cheap brushes shed bristles and wear out fast — mid-range tools usually offer the best value over time.',
        ],
      },
      {
        heading: 'Skin, coat and hoof care',
        body: [
          'Shampoos, conditioners, detanglers, and hoof products are a large category — buy for your horse’s specific needs (sensitive skin, white markings, dry hooves) rather than stocking everything. Ask your vet or farrier before using medicated or specialist products.',
        ],
      },
    ],
    checklist: [
      { point: 'Curry comb', detail: 'Loosens dirt and dead hair; the first tool in any grooming session.' },
      { point: 'Dandy & body brushes', detail: 'Stiff brush for mud, soft brush for finishing and sensitive areas.' },
      { point: 'Hoof pick', detail: 'Daily hoof cleaning is essential for soundness — never skip it.' },
      { point: 'Mane & tail comb', detail: 'A detangler helps avoid pulling and breaking hairs.' },
    ],
    faq: [
      {
        question: 'What grooming tools does every horse owner need?',
        answer:
          'A curry comb, stiff dandy brush, soft body brush, mane and tail comb, and a hoof pick cover daily grooming for most horses. Add specialist skin, coat, and hoof products only as your horse’s needs require.',
      },
    ],
    related: ['new-owner-starter-kit', 'choosing-tack-and-saddles'],
  },
];

export function allGearSlugs(): string[] {
  return gearGuides.map((g) => g.slug);
}

export function getGearGuide(slug: string): GearGuide | undefined {
  return gearGuides.find((g) => g.slug === slug);
}
