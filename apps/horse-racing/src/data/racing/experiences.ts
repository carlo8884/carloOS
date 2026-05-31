// Racing experiences & travel — license-free, data-free income surface #3.
// Targets the affluent racing-fan + bucket-list audience (Derby/Saratoga/Ascot
// hospitality runs $6.7k+; horse-riding-holiday affiliates pay $10-480/booking).
// Monetizes via experience/travel affiliate (Carlo-gated vendor). Trust posture
// (QC §1): editorial guidance + disclosed affiliate links; no fabricated
// first-person attendance ("we went"), no trademark misuse (we reference events
// factually as editorial, never sell or imply official affiliation).

export interface ExperienceTopic {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const experienceTopics: ExperienceTopic[] = [
  {
    slug: 'how-to-attend-a-big-race-day',
    title: 'How to Plan a Big Race Day',
    metaTitle: 'How to Plan a Day at the Races — Tickets, Dress Code & Tips',
    description:
      'A practical, no-hype guide to planning your first big race day: ticket tiers, what hospitality actually includes, dress codes, getting there, and how to make the most of it.',
    kicker: 'Plan the day',
    intro:
      'A flagship race day is one of sport’s great experiences — but the ticketing, dress codes, and hospitality tiers can be bewildering for a first-timer. This guide explains how the day is structured and how to plan one that fits your budget, whether that’s a grandstand seat or a full hospitality package.',
    sections: [
      {
        heading: 'Understanding ticket tiers',
        body: [
          'Most major meetings sell tickets in tiers: general admission (access to the grounds and public viewing), reserved grandstand seating, and premium hospitality (indoor dining, a reserved table, and often a private viewing area). Prices climb steeply between tiers, so decide early what matters most to you — the atmosphere of the rail, a guaranteed seat, or a full sit-down experience.',
          'Hospitality packages vary enormously. Read exactly what is included: some bundle a multi-course meal, drinks, and a racecard; others are seat-only with food sold separately. The headline price can hide big differences in value.',
        ],
      },
      {
        heading: 'Dress code, timing and logistics',
        body: [
          'Flagship meetings often have an enforced dress code, especially in premium enclosures — check the specific event’s published guidance before you buy an outfit. Plan to arrive well before the first race: parking and entry queues are long, and the build-up is part of the fun.',
          'Travel and accommodation near major tracks book out months ahead and prices surge on race weekends. If you are travelling, lock in lodging and transport early — the closer to the date, the more you pay.',
        ],
      },
      {
        heading: 'Making the most of it',
        body: [
          'Pace yourself across the card, study the runners between races, and treat any wagering as entertainment spending with a fixed budget — never money you cannot afford to lose. The best race days are about the spectacle, the crowd, and the horses; betting is optional seasoning, not the point.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far in advance should I book a big race day?',
        answer:
          'For flagship meetings, book tickets as soon as they go on sale and lock in nearby accommodation months ahead — both sell out and prices rise sharply close to the date.',
      },
      {
        question: 'Is hospitality worth it?',
        answer:
          'It depends what’s included. A good package bundles seating, a meal, and drinks in one price and removes the queues; a thin one is just a seat with food sold separately. Always read the inclusions before paying the premium.',
      },
    ],
    related: ['racing-travel-and-stays', 'racing-bucket-list-meetings'],
  },
  {
    slug: 'racing-bucket-list-meetings',
    title: 'The Racing Bucket List',
    metaTitle: 'The Horse Racing Bucket List — The Meetings Worth Travelling For',
    description:
      'The great race meetings around the world worth planning a trip around, what makes each one special, and what to know before you go.',
    kicker: 'Where to go',
    intro:
      'Some race meetings are about far more than the racing — they are cultural events with their own traditions, fashion, and atmosphere. If you want to build a trip around the sport, these are the meetings that reward the journey.',
    sections: [
      {
        heading: 'What makes a meeting bucket-list worthy',
        body: [
          'The meetings worth travelling for combine top-class racing with a sense of occasion: a historic venue, distinctive traditions, and an atmosphere you cannot get from a screen. Think of the great spring and summer festivals — each has a character that regulars plan their year around.',
          'When choosing, weigh the experience against the logistics: the most famous meetings are also the most expensive and crowded. A slightly lesser-known festival can deliver a richer day for far less money and hassle.',
        ],
      },
      {
        heading: 'Planning a trip around a meeting',
        body: [
          'Build the trip around the race date, then add the region: many great tracks sit near wine country, historic cities, or breeding regions where you can tour a stud farm. A race-day anchor plus a day or two exploring nearby turns a single event into a proper holiday.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which race meeting is the best for a first international trip?',
        answer:
          'Pick a flagship summer or spring festival with strong tourist infrastructure nearby, so you can pair the racing with other things to do. Prioritise meetings where travel and lodging are well-served over the most exclusive, hardest-to-reach options.',
      },
    ],
    related: ['how-to-attend-a-big-race-day', 'racing-travel-and-stays'],
  },
  {
    slug: 'racing-travel-and-stays',
    title: 'Racing Travel & Stays',
    metaTitle: 'Racing Travel & Stays — Trips, Tours & Where to Stay',
    description:
      'How to plan travel around racing: hospitality packages vs DIY, stud-farm and racecourse tours, riding holidays, and how to find the right trip for your budget.',
    kicker: 'Travel',
    intro:
      'Beyond a single race day, racing opens the door to a whole category of travel: hospitality packages, stud-farm tours, and equestrian holidays. Here is how to think about the options and find one that fits what you want from the trip.',
    sections: [
      {
        heading: 'Packages vs doing it yourself',
        body: [
          'Specialist operators sell all-inclusive race-day and festival packages bundling tickets, hospitality, hotels, and transfers. They cost more than a DIY trip but remove every logistical headache — useful for a flagship meeting where tickets and lodging are hard to secure independently.',
          'If you prefer flexibility and lower cost, you can assemble the same trip yourself: buy tickets direct, book your own hotel early, and arrange transport. The trade-off is time and the risk of components selling out.',
        ],
      },
      {
        heading: 'Beyond the racecourse',
        body: [
          'Many racing regions offer stud-farm tours, training-yard mornings, and racecourse behind-the-scenes experiences — often the most memorable part of a racing trip. For the hands-on, equestrian riding holidays and ranch stays are a growing category with hundreds of operators worldwide.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are racing travel packages worth the premium?',
        answer:
          'For flagship meetings where tickets and nearby hotels sell out, a package can be worth it for the guaranteed access and removed hassle. For smaller meetings, a DIY trip is usually cheaper and just as good.',
      },
      {
        question: 'What can I do at a racing destination besides the races?',
        answer:
          'Stud-farm and training-yard tours, racecourse behind-the-scenes experiences, and — for riders — equestrian holidays and ranch stays are all popular ways to extend a racing trip.',
      },
    ],
    related: ['how-to-attend-a-big-race-day', 'racing-bucket-list-meetings'],
  },
];

export function allExperienceSlugs(): string[] {
  return experienceTopics.map((t) => t.slug);
}

export function getExperienceTopic(slug: string): ExperienceTopic | undefined {
  return experienceTopics.find((t) => t.slug === slug);
}
