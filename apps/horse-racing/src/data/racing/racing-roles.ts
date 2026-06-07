// Racing Roles cluster (Pillar B — non-wagering racing vertical).
// D12 Tier A enumerated surface ("jockey/trainer/owner role guides"). Explains
// WHO does what in racing — pure educational role guides. Zero wagering surface.
//
// Trust posture (QC §1): factual role descriptions; no betting framing, no
// fabricated authority, no individualized advice.

export interface RacingRole {
  slug: string;
  name: string;
  short: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  keyFacts: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
  related?: string[];
}

export const racingRoles: RacingRole[] = [
  {
    slug: 'jockey',
    name: 'The Jockey',
    short:
      'The licensed rider who partners the horse in a race — an elite athlete making fast tactical decisions at speed.',
    intro:
      'The jockey is the licensed professional who rides the horse in a race. Far more than a passenger, a top jockey is a finely conditioned athlete and a split-second tactician, judging pace, saving ground, and timing a run — often at 35+ mph in a tight pack. The partnership between horse and rider is one of the sport’s defining elements.',
    sections: [
      {
        heading: 'What a jockey actually does',
        body: [
          'During a race the jockey manages the horse’s energy: settling it early, finding a good position and a clear path, conserving ground on the rails or angling out for a run, and timing the final effort so the horse peaks at the wire. These decisions, made in seconds, frequently decide close races between evenly matched horses.',
          'Jockeys also ride in morning workouts and school young horses, building the feel and trust that pays off on race day.',
        ],
      },
      {
        heading: 'The demands of the job',
        body: [
          'Jockeys maintain very low riding weights through rigorous discipline, and the role carries real physical risk. They are typically self-employed, earning a riding fee plus a percentage of purse money when their mounts finish in the money, and they compete on different horses race to race.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Role', value: 'Licensed rider who partners the horse in races' },
      { label: 'Pay model', value: 'Riding fee + a percentage of earned purse money' },
      { label: 'Employment', value: 'Usually self-employed; rides for many stables' },
    ],
    faq: [
      {
        question: 'What does a jockey do besides ride?',
        answer:
          'Jockeys ride morning workouts, school young horses, and build a feel for their mounts — then in races they manage pace, position, ground-saving, and the timing of the final run.',
      },
      {
        question: 'How are jockeys paid?',
        answer:
          'Typically a set riding fee per mount plus a percentage of the purse when the horse finishes in the money. Most jockeys are self-employed and ride for many different stables.',
      },
    ],
    related: ['trainer', 'owner'],
  },
  {
    slug: 'trainer',
    name: 'The Trainer',
    short:
      'The licensed professional responsible for conditioning, entering, and managing the racehorse’s campaign.',
    intro:
      'The trainer is responsible for preparing a horse to race: designing its conditioning, managing its health and feeding in partnership with vets and farriers, choosing which races to enter, and engaging jockeys. The trainer is effectively the head coach and operations manager of the stable.',
    sections: [
      {
        heading: 'The trainer’s responsibilities',
        body: [
          'A trainer plans each horse’s campaign — what distance and class suit it, when it is fit to run, and which race gives it the best chance. Day to day, they oversee a team (assistant trainers, grooms, exercise riders), monitor each horse’s soundness and wellbeing, and coordinate the vet and farrier work that keeps a string healthy.',
          'Placing horses well — finding the right race for each animal’s ability and condition — is a core skill that separates leading trainers from the rest.',
        ],
      },
      {
        heading: 'How trainers operate',
        body: [
          'Trainers are licensed and usually charge owners a daily training fee per horse, plus a percentage of purses earned. They answer to owners on one side and to racing officials and integrity rules on the other, and their stable’s strike-rate is a public measure of their success.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Role', value: 'Conditions horses, plans campaigns, enters races, books jockeys' },
      { label: 'Pay model', value: 'Daily training fee per horse + a share of purses' },
      { label: 'Manages', value: 'Assistant trainers, grooms, exercise riders; vet & farrier work' },
    ],
    faq: [
      {
        question: 'What does a horse trainer do?',
        answer:
          'A trainer conditions the horse, manages its health and feeding with vets and farriers, decides which races to enter, engages jockeys, and runs the stable team.',
      },
      {
        question: 'How are trainers paid?',
        answer:
          'Usually a daily training fee per horse charged to the owner, plus a percentage of any purse money the horse earns.',
      },
    ],
    related: ['jockey', 'owner', 'racing-official'],
  },
  {
    slug: 'owner',
    name: 'The Owner',
    short:
      'The person or group that owns the racehorse, pays its costs, and earns its purses — from sole owners to large syndicates.',
    intro:
      'The owner holds the horse and carries its costs — purchase, training fees, vet and farrier bills, transport — in exchange for a share of any prize money and the experience of competing. Ownership ranges from a single individual to partnerships, syndicates, and fractional micro-shares with thousands of small stakeholders.',
    sections: [
      {
        heading: 'What ownership involves',
        body: [
          'Owners choose a trainer, make high-level campaign decisions in consultation with that trainer, and enjoy the access and experience of the sport — stable visits, the owners’ enclosure, and race days. They take the financial risk: most horses do not earn back their costs, so ownership is best treated as a passion expense rather than an investment.',
          'Ownership models scale to almost any budget, from whole-horse ownership to fractional shares costing a one-time sum, which is why ownership is more accessible today than ever.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Role', value: 'Owns the horse, funds its costs, earns its purses' },
      { label: 'Models', value: 'Sole owner · partnership · syndicate · fractional micro-share' },
      { label: 'Reality', value: 'A passion expense — most horses don’t cover their costs' },
    ],
    faq: [
      {
        question: 'What does a racehorse owner do?',
        answer:
          'Owners fund the horse and its training, select a trainer, make campaign decisions with that trainer, and share in any purses — while carrying the financial risk of ownership.',
      },
      {
        question: 'Do you have to be wealthy to own a racehorse?',
        answer:
          'No longer necessarily — fractional micro-shares and syndicates let people own a stake for a modest one-time sum, though whole-horse ownership remains expensive. Treat any ownership as a passion expense, not an investment.',
      },
    ],
    related: ['trainer', 'jockey'],
  },
  {
    slug: 'racing-official',
    name: 'Racing Officials & Stewards',
    short:
      'The licensed officials who enforce the rules, judge the running, and protect the integrity of each race.',
    intro:
      'A race is overseen by a team of officials. Stewards are the senior officials who enforce the rules of racing, review the running for interference or infractions, and can adjust the result through an inquiry or objection. Around them work the starter, the placing judges, the clerk of scales, and others who keep racing fair and orderly.',
    sections: [
      {
        heading: 'Who does what',
        body: [
          'The stewards monitor each race and may hold an “inquiry” if they see a possible rule breach, or hear an “objection” lodged by a rider; they can disqualify or reposition horses for interference. The starter is responsible for a fair start from the gate. Placing judges determine the order of finish (using the photo finish when needed), and the clerk of scales confirms riders carry the correct weight before and after the race.',
          'Together these officials uphold the integrity that the whole sport — and its breeding economy — depends on.',
        ],
      },
    ],
    keyFacts: [
      { label: 'Stewards', value: 'Enforce rules; run inquiries/objections; can amend results' },
      { label: 'Starter', value: 'Ensures a fair start from the gate' },
      { label: 'Placing judges', value: 'Determine the order of finish (photo finish)' },
      { label: 'Clerk of scales', value: 'Confirms correct riding weights' },
    ],
    faq: [
      {
        question: 'What do stewards do in horse racing?',
        answer:
          'Stewards enforce the rules, review the running for interference through inquiries and objections, and can disqualify or reposition horses to ensure a fair result.',
      },
      {
        question: 'What is a stewards’ inquiry?',
        answer:
          'A review the stewards open when they suspect a rule breach during the race — for example interference — which can lead to a change in the official result.',
      },
    ],
    related: ['jockey', 'trainer'],
  },
];

export function allRacingRoleSlugs(): string[] {
  return racingRoles.map((r) => r.slug);
}

export function getRacingRole(slug: string): RacingRole | undefined {
  return racingRoles.find((r) => r.slug === slug);
}
