/**
 * Content data for the /moving cluster — relocating with a ferret. Distinct
 * long-form, informational guides. Defensible framing; "verify locally"; not
 * legal advice.
 */

import type { GuideSection, RelatedLink } from '@/components/GuideArticle'
import type { FAQItem } from '@carloOS/ui'

export interface MovingGuide {
  slug: string
  eyebrow: string
  title: string
  heading?: string
  dek: string
  tldr: string
  sections: GuideSection[]
  faqs: FAQItem[]
  related: RelatedLink[]
  source: string
}

export const MOVING_GUIDES: Record<string, MovingGuide> = {
  'to-a-ban-state': {
    slug: 'to-a-ban-state',
    eyebrow: 'Moving · Hard cases',
    title: 'Moving to a State Where Ferrets Are Banned: Your Options',
    heading: 'Moving to a ferret-ban state',
    dek: 'What to do when you must relocate to California, Hawaii, or New York City, where you cannot legally bring your ferret — and how to handle it responsibly.',
    tldr: 'If you are moving to California, Hawaii, or New York City, you cannot legally bring your ferret. The responsible options are rehoming the ferret to a vetted owner or rescue in a permissive area, or arranging for someone in a legal location to care for it. Never smuggle or abandon a ferret. Plan early — this is an emotional decision that deserves time. Informational, not legal advice.',
    sections: [
      {
        id: 'the-reality',
        heading: 'The hard reality',
        paragraphs: [
          'California and Hawaii ban ferret ownership, and New York City prohibits ferrets within the five boroughs. If your move takes you to one of these places, you cannot lawfully bring your ferret with you. Hawaii prohibits even transit, so the animal cannot pass through.',
          'This is one of the most painful situations a ferret owner faces. Acknowledging it early gives you the most time and the best options for the animal.',
        ],
      },
      {
        id: 'rehoming',
        heading: 'Responsible rehoming',
        paragraphs: [
          'The most common path is rehoming the ferret to a trusted person or a reputable rescue in a permissive location. Start with the American Ferret Association accredited-shelter directory and reach out early, since rescues are often near capacity.',
          'Vet any private adopter as a rescue would: confirm legality where they live, a veterinary plan, and a suitable, ferret-proofed home. Transfer complete medical records.',
        ],
      },
      {
        id: 'caretaker',
        heading: 'A caretaker in a legal location',
        paragraphs: [
          'Some owners arrange for a family member or friend in a ferret-legal area to care for the animal, especially if the move may be temporary. This keeps the ferret in a known environment while respecting the destination ban.',
          'Be realistic about the arrangement\'s durability and the caretaker\'s capacity for the ferret\'s full lifespan and veterinary needs.',
        ],
      },
      {
        id: 'never',
        heading: 'What never to do',
        paragraphs: [
          'Do not attempt to smuggle a ferret into a ban state. Beyond the legal risk, an undocumented ferret can be confiscated, and you would lose the animal anyway under worse circumstances.',
          'Never abandon or release a ferret. Domesticated ferrets cannot survive in the wild, and release may violate wildlife rules. If you are out of options, contact a rescue for help.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I bring my ferret if I move to California or Hawaii?',
        answer:
          'No. Both states ban ferret ownership, and Hawaii prohibits even transit. You cannot lawfully bring your ferret. The responsible options are rehoming to a permissive area or arranging a caretaker in a legal location.',
      },
      {
        question: 'What if I am moving to New York City with a ferret?',
        answer:
          'New York City bans ferrets within the five boroughs even though the rest of New York State allows them. You cannot keep the ferret in the city; consider a permissive part of the state or responsible rehoming.',
      },
      {
        question: 'Can I just bring the ferret quietly?',
        answer:
          'No. Smuggling a ferret into a ban state risks confiscation and loss of the animal under worse circumstances. Plan a responsible rehoming or caretaker arrangement instead.',
      },
    ],
    related: [
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'Surrendering or rehoming', href: '/adopt/surrender-rehome' },
      { label: 'Where are ferrets illegal?', href: '/legality/where-are-ferrets-illegal' },
    ],
    source: 'moving-to-ban-state',
  },

  'to-a-permit-state': {
    slug: 'to-a-permit-state',
    eyebrow: 'Moving · Permits',
    title: 'Moving to Florida or Pennsylvania With a Ferret: Permit Steps',
    heading: 'Moving to a permit state with a ferret',
    dek: 'How to relocate a ferret to Florida or Pennsylvania, where ownership is legal but requires a state permit you should arrange before you arrive.',
    tldr: 'Florida and Pennsylvania allow ferrets but require a permit. Florida needs a no-cost Class III wildlife permit from the FWC; Pennsylvania needs an Exotic Wildlife Possession Permit from the Game Commission. Arrange the permit as part of your move, carry rabies documentation, and verify the current process directly with the agency. This is informational, not legal advice.',
    sections: [
      {
        id: 'florida',
        heading: 'Moving to Florida',
        paragraphs: [
          'Florida classifies ferrets as Class III wildlife. Before bringing your ferret, apply for a personal-possession permit through the Florida Fish and Wildlife Conservation Commission. The permit is no-cost but requires an application, and caging standards apply.',
          'Confirm the current process on the Ferrets.com Florida page and directly with the FWC, since rules can change.',
        ],
      },
      {
        id: 'pennsylvania',
        heading: 'Moving to Pennsylvania',
        paragraphs: [
          'Pennsylvania requires an Exotic Wildlife Possession Permit administered through the Pennsylvania Game Commission. Arrange it as part of your relocation and confirm the current fee and process directly with the agency.',
          'See the Ferrets.com Pennsylvania page for the framing, then verify the details with the Game Commission before you move.',
        ],
      },
      {
        id: 'logistics',
        heading: 'Move-day logistics',
        paragraphs: [
          'Carry the rabies-vaccination certificate and any health certificate the move requires. Plan climate-controlled transport — ferrets are heat-sensitive, which matters especially for a move to Florida.',
          'For air travel, confirm the airline accepts ferrets; many do not. See the Ferrets.com interstate-transport guide for the full travel checklist.',
        ],
      },
      {
        id: 'after',
        heading: 'After you arrive',
        paragraphs: [
          'Make sure the permit is in order, update any local licensing, and locate an exotic-mammal veterinarian using the Ferrets.com per-state vet pages.',
          'Re-establish the cage and a ferret-proofed space promptly so the ferret can settle after the disruption of a move.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a permit to move a ferret to Florida?',
        answer:
          'Yes. Florida classifies ferrets as Class III wildlife and requires a no-cost personal-possession permit from the FWC. Apply before arriving and confirm the current process with the agency.',
      },
      {
        question: 'What permit does Pennsylvania require for a ferret?',
        answer:
          'Pennsylvania requires an Exotic Wildlife Possession Permit through the Game Commission. Arrange it as part of your move and verify the current fee and process directly with the agency.',
      },
      {
        question: 'Should I get the permit before or after moving?',
        answer:
          'Before. Arrange the permit as part of your relocation so the ferret is legal from the moment you arrive. Carry rabies documentation and confirm the current rule with the state agency.',
      },
    ],
    related: [
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'Permits & licensing', href: '/acquiring/permits-and-licensing' },
      { label: 'Florida legality', href: '/states/florida' },
    ],
    source: 'moving-to-permit-state',
  },

  'cross-country-move': {
    slug: 'cross-country-move',
    eyebrow: 'Moving · Logistics',
    title: 'A Cross-Country Move With a Ferret: The Full Checklist',
    heading: 'A cross-country move with a ferret',
    dek: 'A step-by-step plan for relocating a ferret a long distance — legality at the destination, documentation, transport, and settling in.',
    tldr: 'A long-distance ferret move comes down to four things: confirm the destination allows ferrets (and arrange any permit), prepare documentation, plan heat-safe transport, and set up the new home before arrival. Build the ferret into your moving timeline early. This is informational; verify destination rules with the state and your carrier.',
    sections: [
      {
        id: 'destination',
        heading: 'Step 1: Confirm destination legality',
        paragraphs: [
          'Before anything else, confirm ferrets are legal where you are moving. You cannot bring one into California or Hawaii, and Florida or Pennsylvania require a permit you should arrange in advance.',
          'Check the destination state page on Ferrets.com and verify with the state agency and destination municipality.',
        ],
      },
      {
        id: 'documents',
        heading: 'Step 2: Prepare documentation',
        paragraphs: [
          'Gather the rabies-vaccination certificate and any health certificate (Certificate of Veterinary Inspection) the move or carrier requires. Requirements vary by state and by air carrier.',
          'Keep both physical and digital copies accessible during transit.',
        ],
      },
      {
        id: 'transport',
        heading: 'Step 3: Plan heat-safe transport',
        paragraphs: [
          'Ferrets are heat-sensitive, so plan climate-controlled transport, travel during cooler hours where possible, and never leave the ferret in a parked vehicle. Use a secure, ventilated carrier with familiar bedding, and provide water.',
          'For air travel, confirm the airline accepts ferrets well in advance; many do not, and policies on cabin vs. cargo differ. Ground transport may be the better option.',
        ],
      },
      {
        id: 'settle',
        heading: 'Step 4: Set up and settle in',
        paragraphs: [
          'Re-establish the cage and a ferret-proofed space as soon as you arrive, before unpacking everything else, so the ferret has a secure base. Keep the diet and routine consistent to ease the transition.',
          'Locate an exotic-mammal veterinarian in the new area — ideally before the move — and update any local licensing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I move a ferret across the country?',
        answer:
          'Confirm the destination allows ferrets and arrange any permit, prepare rabies and health documentation, plan heat-safe climate-controlled transport, and set up the new home before arrival. Build the ferret into your timeline early.',
      },
      {
        question: 'Is it better to drive or fly a ferret long-distance?',
        answer:
          'Often driving, because many airlines refuse ferrets and air travel adds documentation and cabin-vs-cargo complexity. Whichever you choose, keep the ferret climate-controlled and never leave it in a parked vehicle.',
      },
      {
        question: 'What do I do first when I arrive?',
        answer:
          'Re-establish the cage and a ferret-proofed space before unpacking everything else, keep the diet and routine consistent, and locate an exotic-mammal vet — ideally identified before the move.',
      },
    ],
    related: [
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'Interstate transport', href: '/acquiring/interstate-transport' },
      { label: 'Traveling with a ferret', href: '/legality/traveling-with-a-ferret' },
    ],
    source: 'moving-cross-country',
  },

  'international-relocation': {
    slug: 'international-relocation',
    eyebrow: 'Moving · International',
    title: 'Relocating Internationally With a Ferret: What to Expect',
    heading: 'International relocation with a ferret',
    dek: 'A high-level overview of moving a ferret across international borders — why it is complex, what import rules typically involve, and where to get authoritative answers.',
    tldr: 'Moving a ferret internationally is far more complex than a domestic move. Destination countries set their own import rules, which can include rabies titer testing, microchipping, health certificates, and quarantine. Some places prohibit ferrets entirely. Start research many months ahead and rely on the destination country\'s official animal-import authority. This is a general overview, not country-specific legal advice.',
    sections: [
      {
        id: 'complexity',
        heading: 'Why international moves are different',
        paragraphs: [
          'Crossing an international border with a pet is governed by the destination country\'s animal-import rules, which are typically stricter and more variable than US interstate rules. Some countries welcome ferrets with documentation; others restrict or prohibit them.',
          'Because the rules are country-specific and change, this page is a high-level orientation, not a substitute for the destination authority\'s official guidance.',
        ],
      },
      {
        id: 'common-requirements',
        heading: 'Common import requirements',
        paragraphs: [
          'Depending on the destination, import requirements may include a microchip, current rabies vaccination, a rabies antibody (titer) test, an official health certificate, treatment for parasites, and in some cases a quarantine period.',
          'The exact combination and timing matter — a titer test, for example, often must be done a set number of months before travel, so starting late can delay the move.',
        ],
      },
      {
        id: 'timeline',
        heading: 'Start early',
        paragraphs: [
          'Begin research many months before the move. Some requirements have long lead times, and missing a window can mean postponing travel or facing extended quarantine.',
          'Build a checklist from the destination authority\'s guidance and work backward from your travel date.',
        ],
      },
      {
        id: 'authoritative',
        heading: 'Where to get authoritative answers',
        paragraphs: [
          'The authoritative source is the destination country\'s official animal-import or agriculture authority, often complemented by guidance from the origin country\'s export authority and your veterinarian.',
          'A veterinarian experienced in international pet relocation, or a reputable pet-relocation service, can help you navigate the paperwork. Ferrets.com focuses on US legality and cannot provide country-specific import rulings.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I move my ferret to another country?',
        answer:
          'Sometimes, depending on the destination country\'s import rules. Some countries allow ferrets with documentation like microchipping, rabies vaccination, titer testing, and health certificates; others restrict or prohibit them. Check the destination authority.',
      },
      {
        question: 'What do international ferret-import rules usually require?',
        answer:
          'Commonly a microchip, current rabies vaccination, a rabies titer test, an official health certificate, parasite treatment, and sometimes quarantine. The exact requirements and timing are country-specific.',
      },
      {
        question: 'How early should I start an international ferret move?',
        answer:
          'Many months ahead. Some requirements, like a rabies titer test, have long lead times, so starting late can delay travel or trigger extended quarantine. Work backward from your travel date using the destination authority\'s guidance.',
      },
    ],
    related: [
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'Interstate transport', href: '/acquiring/interstate-transport' },
      { label: 'Vaccination & records', href: '/acquiring/vaccination-records' },
    ],
    source: 'moving-international',
  },

  'finding-a-vet-after-moving': {
    slug: 'finding-a-vet-after-moving',
    eyebrow: 'Moving · Vet care',
    title: 'Finding a Ferret Vet After Moving: How to Re-Establish Care',
    heading: 'Finding a ferret vet after moving',
    dek: 'How to quickly re-establish exotic-mammal veterinary care in a new area after relocating with a ferret, before you actually need it.',
    tldr: 'After a move, finding a ferret-seeing vet should be near the top of your list — ideally lined up before you arrive. Use the AEMV find-a-vet directory and the Ferrets.com per-state vet pages, call ahead to confirm the clinic treats ferrets and is accepting patients, and transfer your ferret\'s records. Do this before an emergency forces the issue.',
    sections: [
      {
        id: 'why-early',
        heading: 'Why to do this early',
        paragraphs: [
          'Most general-practice clinics see few ferrets, so a new area may have only a handful of practices that genuinely treat them. The time to find one is before your ferret is sick, not during an emergency.',
          'Ideally, identify a clinic before the move so care is continuous from day one in the new location.',
        ],
      },
      {
        id: 'how-to-search',
        heading: 'How to search',
        paragraphs: [
          'Use the AEMV find-a-vet directory filtered to your new state, and the Ferrets.com per-state vet pages, which include the seven-question vetting checklist. University teaching hospitals are a strong referral option in many regions.',
          'Call each candidate and ask directly whether the practice sees ferrets regularly and offers the adrenal and insulinoma workups older ferrets commonly need.',
        ],
      },
      {
        id: 'transfer-records',
        heading: 'Transfer your records',
        paragraphs: [
          'Request your ferret\'s full medical history from the previous clinic and provide it to the new vet. Continuity of records matters for a species prone to chronic endocrine and neoplastic conditions.',
          'Schedule an establishing exam so the new vet has a baseline and a relationship in place before any urgent need.',
        ],
      },
      {
        id: 'emergency',
        heading: 'Know your emergency option',
        paragraphs: [
          'Identify the nearest emergency or after-hours clinic that will see a ferret, and keep the contact information accessible. Not every emergency hospital treats exotics, so confirm in advance.',
          'Knowing where to go before an emergency can make the difference for a heat-stressed or acutely ill ferret.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I find a ferret vet in a new city?',
        answer:
          'Use the AEMV find-a-vet directory filtered to your state and the Ferrets.com per-state vet pages. Call ahead to confirm the clinic treats ferrets regularly and is accepting patients, ideally before you move.',
      },
      {
        question: 'Should I transfer my ferret\'s records after moving?',
        answer:
          'Yes. Request the full medical history from your previous clinic and provide it to the new vet, then schedule an establishing exam. Continuity matters for a species prone to chronic endocrine and neoplastic conditions.',
      },
      {
        question: 'What about emergency vet care after a move?',
        answer:
          'Identify the nearest emergency or after-hours clinic that treats ferrets and keep its contact info handy. Not every emergency hospital sees exotics, so confirm in advance.',
      },
    ],
    related: [
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'Find an exotic-pet vet', href: '/find-a-vet' },
      { label: 'Cross-country move', href: '/moving/cross-country-move' },
    ],
    source: 'moving-find-vet',
  },
}

export const MOVING_SLUGS = Object.keys(MOVING_GUIDES)
