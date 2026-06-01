/**
 * Content data for the /legality cluster — cross-cutting ferret-legality
 * topics that complement the per-state directory. Distinct long-form,
 * informational guides. Defensible framing; "verify locally"; not legal
 * advice.
 */

import type { GuideSection, RelatedLink } from '@/components/GuideArticle'
import type { FAQItem } from '@carloOS/ui'

export interface LegalityGuide {
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

export const LEGALITY_GUIDES: Record<string, LegalityGuide> = {
  'where-are-ferrets-illegal': {
    slug: 'where-are-ferrets-illegal',
    eyebrow: 'Legality · Overview',
    title: 'Where Are Ferrets Illegal in the US? The Complete Map',
    heading: 'Where are ferrets illegal in the US?',
    dek: 'A clear, current overview of the only US jurisdictions where pet ferrets are banned or restricted — and where the rules are merely permit-based rather than prohibitive.',
    tldr: 'Pet ferrets are illegal to own in just two states — California and Hawaii — plus New York City. Two states require a permit: Florida and Pennsylvania. Everywhere else, ferrets are legal with standard rabies vaccination, though individual cities can add ordinances. This is informational; always verify the current rule with your state and municipality.',
    sections: [
      {
        id: 'banned',
        heading: 'The two outright-ban states',
        paragraphs: [
          'California prohibits ferret ownership statewide. The state classifies the ferret as a restricted non-native species under its Fish & Game Code framework. Veterinary treatment is not prohibited, but ownership, sale, import, and transport are.',
          'Hawaii prohibits the possession, import, and transit of ferrets under its restricted-animals rule, enforced by the Department of Agriculture. There is no permit pathway — the ban is absolute, and it reflects Hawaii\'s broader policy of excluding non-native species to protect its island ecosystem.',
        ],
      },
      {
        id: 'nyc',
        heading: 'The New York City exception',
        paragraphs: [
          'Ferrets are legal throughout New York State except within the five boroughs of New York City, where the city health code prohibits them. This is the most prominent example of a city-level ban overriding state-level legality.',
          'If you live in or are moving to New York City, the state-level legality of ferrets does not help you — the city rule controls.',
        ],
      },
      {
        id: 'permit-states',
        heading: 'The two permit states',
        paragraphs: [
          'Florida and Pennsylvania allow ferrets but require a permit. Florida classifies them as Class III wildlife and requires a no-cost personal-possession permit from the FWC. Pennsylvania requires an Exotic Wildlife Possession Permit through the Game Commission.',
          'A permit requirement is not a ban — it is a process. Arrange the permit before acquiring a ferret in either state.',
        ],
      },
      {
        id: 'everywhere-else',
        heading: 'Everywhere else: legal',
        paragraphs: [
          'In the remaining states and the District of Columbia, ferrets are legal as companion animals, typically requiring only rabies vaccination and any local pet license. The Ferrets.com state directory carries a per-state page with the governing framework and the official department to verify with.',
          'Because city and county ordinances can layer on top of state law, always confirm your specific municipality before acquiring a ferret.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which states ban ferrets?',
        answer:
          'Only California and Hawaii ban ferret ownership outright. New York City prohibits them within the five boroughs. Florida and Pennsylvania require a permit. Everywhere else, ferrets are legal with standard rabies vaccination.',
      },
      {
        question: 'Why are ferrets illegal in California and Hawaii?',
        answer:
          'Both states classify the ferret as a restricted non-native species and cite ecological-protection rationales. California bans ownership under its Fish & Game Code framework; Hawaii bans possession, import, and transit with no permit pathway.',
      },
      {
        question: 'Are ferrets legal in New York?',
        answer:
          'Ferrets are legal throughout New York State except within the five boroughs of New York City, where the city health code prohibits them. The city rule overrides the state-level legality.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'State legality directory', href: '/states' },
      { label: 'California legality', href: '/states/california' },
      { label: 'Hawaii legality', href: '/states/hawaii' },
    ],
    source: 'legality-where-illegal',
  },

  'why-ferrets-are-banned': {
    slug: 'why-ferrets-are-banned',
    eyebrow: 'Legality · Background',
    title: 'Why Are Ferrets Banned in Some Places? The Reasons Explained',
    heading: 'Why are ferrets banned in some places?',
    dek: 'The rationales behind ferret bans and restrictions — ecological concerns, rabies-protocol history, and policy inertia — explained in plain language.',
    tldr: 'Ferret bans rest mainly on ecological arguments: regulators worry that escaped or released ferrets could establish feral populations and harm native wildlife, which drives Hawaii\'s island-protection policy and California\'s restricted-species classification. Rabies-vaccine history and simple policy inertia also play a role. Reform efforts recur but have not changed the core bans. This explains the reasoning; it is not a legal endorsement of any position.',
    sections: [
      {
        id: 'ecological',
        heading: 'The ecological rationale',
        paragraphs: [
          'The most-cited reason for ferret restrictions is ecological. Regulators worry that escaped or released domesticated ferrets could establish feral populations and prey on native birds and small wildlife.',
          'This concern is strongest in Hawaii, whose isolated island ecosystems are especially vulnerable to introduced predators, and it underpins the state\'s broad policy of excluding many non-native species. California cites similar restricted-species reasoning.',
        ],
      },
      {
        id: 'feral-question',
        heading: 'How well-founded is the feral concern?',
        paragraphs: [
          'Advocates for ferret legalization argue that the domesticated ferret, bred in captivity for thousands of years and typically spayed or neutered young, is poorly equipped to survive and reproduce in the wild on the mainland.',
          'Regulators in ban states maintain a precautionary stance. The disagreement is genuine and ongoing; this page describes both positions rather than adjudicating them.',
        ],
      },
      {
        id: 'rabies-history',
        heading: 'Rabies and vaccine history',
        paragraphs: [
          'Historically, ferret rules were also shaped by questions about rabies — including, at one time, the absence of an approved ferret rabies vaccine and uncertainty about quarantine protocols after a bite. An approved rabies vaccine for ferrets has since changed that landscape in most states.',
          'In states that permit ferrets, rabies vaccination is now a standard requirement, reflecting how the science and policy evolved.',
        ],
      },
      {
        id: 'inertia-reform',
        heading: 'Policy inertia and reform efforts',
        paragraphs: [
          'Once a ban is on the books, it tends to persist absent active reform. California in particular has seen repeated legalization efforts across multiple legislative sessions, none of which has changed the underlying prohibition to date.',
          'Because reform is a live issue, the citations on Ferrets.com state pages reflect current public-record law, and we advise verifying with the state agency before acquiring a ferret.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why are ferrets illegal in some states?',
        answer:
          'The main rationale is ecological: regulators worry escaped or released ferrets could establish feral populations and harm native wildlife. Rabies-vaccine history and policy inertia also contribute. The reasoning is genuinely debated.',
      },
      {
        question: 'Can a pet ferret survive in the wild?',
        answer:
          'Legalization advocates argue that domesticated ferrets, bred in captivity for millennia and usually altered young, are poorly equipped to survive and reproduce in the wild on the mainland. Regulators in ban states maintain a precautionary stance.',
      },
      {
        question: 'Will the ferret bans be lifted?',
        answer:
          'Reform efforts recur, especially in California, but none has changed the core bans to date. Because it is a live issue, verify the current law with the state agency before acquiring a ferret.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Where are ferrets illegal?', href: '/legality/where-are-ferrets-illegal' },
      { label: 'California legality', href: '/states/california' },
    ],
    source: 'legality-why-banned',
  },

  'city-vs-state-law': {
    slug: 'city-vs-state-law',
    eyebrow: 'Legality · How law works',
    title: 'City vs. State Ferret Laws: Why Local Rules Can Override State Legality',
    heading: 'City vs. state ferret laws',
    dek: 'How municipal ordinances can ban ferrets even where the state allows them, why this happens, and how to check both layers before you acquire one.',
    tldr: 'State legality is not the whole story: cities and counties can impose their own ferret ordinances, and a local ban overrides state-level legality at your address. New York City is the classic example. Always check both your state rule and your municipal animal-control rules. This is informational, not legal advice.',
    sections: [
      {
        id: 'two-layers',
        heading: 'Two layers of law',
        paragraphs: [
          'Ferret legality operates on at least two layers: the state framework (wildlife, agriculture, or health rules) and the local framework (city or county ordinances). Both must permit ferrets for ownership to be lawful at your specific address.',
          'A state can allow ferrets while a city within it bans them. The local rule controls where you live, so state legality alone is not a green light.',
        ],
      },
      {
        id: 'nyc-example',
        heading: 'The clearest example: New York City',
        paragraphs: [
          'New York State permits ferrets, but New York City bans them within the five boroughs under its health code. A resident of Buffalo or Albany can own a ferret; a resident of Brooklyn cannot.',
          'This is why the Ferrets.com New York page flags the NYC restriction prominently and why we advise checking the municipal rule everywhere.',
        ],
      },
      {
        id: 'why-cities',
        heading: 'Why cities add their own rules',
        paragraphs: [
          'Municipalities regulate animals for public-health, nuisance, and safety reasons, and some have historically swept ferrets into exotic-animal ordinances. Local rules also change more quietly than state law, with less public attention.',
          'The practical upshot: a city ordinance can appear or change without making headlines, so a direct check with local animal control is the only reliable confirmation.',
        ],
      },
      {
        id: 'how-to-check',
        heading: 'How to check both layers',
        paragraphs: [
          'Start with your state page in the Ferrets.com legality directory for the state framework and the official department link. Then contact your municipal or county animal-control office to confirm there is no local ban or special license.',
          'Do this before you acquire a ferret, not after. A short call can prevent a serious problem.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a city ban ferrets if the state allows them?',
        answer:
          'Yes. Municipal ordinances can ban ferrets even where the state permits them, and the local rule controls at your address. New York City bans ferrets despite New York State allowing them.',
      },
      {
        question: 'How do I check my city\'s ferret rules?',
        answer:
          'Contact your municipal or county animal-control office directly. Start with your state page on Ferrets.com for the state framework, then confirm the local rule, since city ordinances can change quietly.',
      },
      {
        question: 'Does state legality guarantee I can own a ferret?',
        answer:
          'No. Both the state and your municipality must permit ferrets for ownership to be lawful at your address. Always check the local ordinance in addition to the state rule.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'New York legality', href: '/states/new-york' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'legality-city-vs-state',
  },

  'rabies-vaccination-laws': {
    slug: 'rabies-vaccination-laws',
    eyebrow: 'Legality · Health law',
    title: 'Ferret Rabies Vaccination Laws: What Owners Need to Know',
    heading: 'Ferret rabies vaccination laws',
    dek: 'Why rabies vaccination is the near-universal legal requirement for pet ferrets, how it ties into bite-report protocols, and why documentation matters.',
    tldr: 'In most states, rabies vaccination is required or strongly recommended for ferrets, and several statutes name ferrets explicitly. An approved ferret rabies vaccine exists, which shaped modern policy. Vaccination matters legally for licensing, travel, and especially bite reports. Keep the certificate. This is general information; your veterinarian and state set the specifics.',
    sections: [
      {
        id: 'requirement',
        heading: 'A near-universal requirement',
        paragraphs: [
          'Across states that permit ferrets, rabies vaccination is typically required or strongly recommended, the same way it is for dogs and cats. Several states name ferrets explicitly in their rabies-vaccination statutes.',
          'The existence of an approved rabies vaccine for ferrets was a turning point in ferret policy — it resolved earlier uncertainty and is part of why most states treat vaccinated ferrets as ordinary companion animals.',
        ],
      },
      {
        id: 'bite-protocol',
        heading: 'Why it matters for bite reports',
        paragraphs: [
          'If a ferret bites a person, public-health authorities may follow a rabies protocol. A documented current rabies vaccination materially affects how that situation is handled and can spare the animal a far worse outcome.',
          'This is one of the most concrete reasons to keep vaccination current and documented, beyond routine health.',
        ],
      },
      {
        id: 'documentation',
        heading: 'Documentation and licensing',
        paragraphs: [
          'Many municipalities require proof of rabies vaccination for a pet license, and travel and boarding facilities commonly ask for it. Keep the original certificate and digital copies.',
          'When you acquire a ferret, get the vaccination history and bring it to the intake exam so your veterinarian can confirm status and schedule any needed boosters.',
        ],
      },
      {
        id: 'verify',
        heading: 'Verify your state\'s specifics',
        paragraphs: [
          'Exact requirements — timing, boosters, and which vaccine — are set by your state and your veterinarian. The Ferrets.com per-state pages note where rabies vaccination is a documented statutory requirement.',
          'When in doubt, your veterinarian and the state Department of Agriculture or public-health office are the authoritative sources.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do ferrets need a rabies vaccine?',
        answer:
          'In most states, yes — rabies vaccination is required or strongly recommended for ferrets, and several statutes name them explicitly. An approved ferret rabies vaccine exists. Your veterinarian and state set the specifics.',
      },
      {
        question: 'Why does rabies vaccination matter legally?',
        answer:
          'It is commonly required for pet licensing, travel, and boarding, and it materially affects how a bite report is handled under rabies protocols — potentially sparing the animal a worse outcome.',
      },
      {
        question: 'What if my ferret bites someone?',
        answer:
          'Public-health authorities may follow a rabies protocol. A documented current rabies vaccination affects how the situation is handled, which is a key reason to keep vaccination current and documented.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Vaccination & records', href: '/acquiring/vaccination-records' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'legality-rabies',
  },

  'traveling-with-a-ferret': {
    slug: 'traveling-with-a-ferret',
    eyebrow: 'Legality · Travel',
    title: 'Traveling With a Ferret: Legal and Logistical Rules',
    heading: 'Traveling with a ferret',
    dek: 'The legal and practical rules for taking a ferret on a trip — by car and by air — including destination legality, documentation, and the states you cannot enter.',
    tldr: 'Before traveling with a ferret, confirm the destination allows ferrets — you cannot enter California or Hawaii, and Florida and Pennsylvania need a permit. Carry rabies documentation and any required health certificate, plan for heat-sensitive climate control, and check airline policies, since many carriers refuse ferrets. This is informational; verify with the destination and carrier.',
    sections: [
      {
        id: 'destination',
        heading: 'Destination legality',
        paragraphs: [
          'The first travel question is whether ferrets are legal where you are going. You cannot lawfully bring a ferret into California or Hawaii, and entering Florida or Pennsylvania requires arranging a permit first.',
          'This applies to vacations and layovers as well as moves. Hawaii in particular prohibits even transit, so a connection there is not an option with a ferret.',
        ],
      },
      {
        id: 'documents',
        heading: 'Documents to carry',
        paragraphs: [
          'Carry the rabies-vaccination certificate. Interstate travel and especially air travel may require a recent health certificate (a Certificate of Veterinary Inspection); requirements vary by state and airline.',
          'Check the destination state\'s import rules and your carrier\'s live-animal policy well in advance.',
        ],
      },
      {
        id: 'car-travel',
        heading: 'Car travel and heat',
        paragraphs: [
          'Ferrets are heat-sensitive, so a hot car is dangerous. Keep the vehicle climate-controlled, travel during cooler hours when possible, never leave a ferret in a parked car, and provide water and a secure ventilated carrier.',
          'For longer drives, bring familiar bedding and keep the diet consistent to reduce stress.',
        ],
      },
      {
        id: 'air-travel',
        heading: 'Air travel realities',
        paragraphs: [
          'Many airlines do not accept ferrets at all, and those that do have specific carrier, documentation, and cabin-vs-cargo rules. Confirm the policy directly with the airline before booking.',
          'If air travel is not workable, ground transport or a ferret-experienced pet-transport service may be alternatives — again, only to destinations where ferrets are legal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I travel with my ferret to any state?',
        answer:
          'No. You cannot bring a ferret into California or Hawaii, and Florida and Pennsylvania require a permit. Hawaii prohibits even transit, so a layover there is not an option. Verify the destination before traveling.',
      },
      {
        question: 'Can I fly with a ferret?',
        answer:
          'Sometimes. Many airlines refuse ferrets entirely, and those that allow them have specific documentation and cabin-vs-cargo rules. Confirm the policy directly with the airline before booking.',
      },
      {
        question: 'What documents do I need to travel with a ferret?',
        answer:
          'Carry the rabies-vaccination certificate and check whether the destination state or airline requires a recent health certificate. Requirements vary by state and carrier, so verify in advance.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Interstate transport', href: '/acquiring/interstate-transport' },
      { label: 'Moving with a ferret', href: '/moving' },
    ],
    source: 'legality-travel',
  },

  'renting-with-a-ferret': {
    slug: 'renting-with-a-ferret',
    eyebrow: 'Legality · Housing',
    title: 'Renting With a Ferret: Landlords, Leases, and Pet Policies',
    heading: 'Renting with a ferret',
    dek: 'How ferrets fit into rental housing — lease pet clauses, landlord approval, deposits, and how state legality interacts with a private landlord\'s rules.',
    tldr: 'Even where ferrets are legal, a landlord can restrict or prohibit them through the lease, and many generic pet clauses do not mention ferrets specifically. Get written approval, clarify whether the ferret counts under any pet deposit or fee, and never hide a ferret from a landlord. State legality does not override a private lease. This is general information, not legal advice.',
    sections: [
      {
        id: 'lease-clauses',
        heading: 'Lease pet clauses and ferrets',
        paragraphs: [
          'A lease can permit, restrict, or prohibit pets independently of state law. Many pet clauses are written with cats and dogs in mind and are silent or ambiguous about ferrets, which leaves room for dispute.',
          'Read the lease carefully and, where it is unclear, get written clarification before bringing a ferret home.',
        ],
      },
      {
        id: 'written-approval',
        heading: 'Get written approval',
        paragraphs: [
          'Verbal permission is hard to enforce. Ask your landlord for written approval that specifically names the ferret, and keep a copy. This protects you if ownership or management changes.',
          'If the lease requires a pet addendum, complete it for the ferret rather than relying on a general clause.',
        ],
      },
      {
        id: 'deposits',
        heading: 'Deposits, fees, and damage',
        paragraphs: [
          'Clarify whether the ferret triggers a pet deposit, monthly pet fee, or additional liability under the lease. Ferrets can chew baseboards and burrow, so ferret-proofing protects both the animal and your deposit.',
          'Document the unit\'s condition at move-in, and maintain the ferret-proofed space well to avoid damage disputes.',
        ],
      },
      {
        id: 'dont-hide',
        heading: 'Do not hide a ferret',
        paragraphs: [
          'Hiding a ferret from a landlord risks eviction and forced rehoming — an outcome that fuels the surrender pipeline. State legality does not protect you from a private lease violation.',
          'If your current housing prohibits ferrets, the responsible path is to find ferret-friendly housing before acquiring one, not to conceal the animal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a landlord ban ferrets even if they are legal in my state?',
        answer:
          'Yes. A lease can restrict or prohibit ferrets independently of state law, and state legality does not override a private lease. Get written landlord approval before bringing a ferret home.',
      },
      {
        question: 'Do ferrets count under a pet deposit?',
        answer:
          'Often, but it depends on the lease. Many pet clauses are written for cats and dogs and are ambiguous about ferrets. Clarify with your landlord in writing whether the ferret triggers a deposit or fee.',
      },
      {
        question: 'What happens if I hide a ferret from my landlord?',
        answer:
          'You risk eviction and forced rehoming. The responsible path is to secure ferret-friendly housing and written approval before acquiring a ferret, not to conceal the animal.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'legality-renting',
  },

  'how-laws-change': {
    slug: 'how-laws-change',
    eyebrow: 'Legality · Civics',
    title: 'How Ferret Laws Change — and How to Track Them',
    heading: 'How ferret laws change',
    dek: 'How ferret-ownership rules get made and changed, why reform efforts recur in ban states, and how to stay current before you acquire or move a ferret.',
    tldr: 'Ferret laws live in statutes, agency regulations, and local ordinances, and any of those can change. Reform efforts recur — California has seen repeated legalization bills — but the core bans persist. Because rules shift, treat any legality information, including ours, as a starting point and verify with the state agency before acquiring or moving a ferret.',
    sections: [
      {
        id: 'where-laws-live',
        heading: 'Where ferret laws live',
        paragraphs: [
          'Ferret rules are not in one place. They may sit in a state statute, in administrative regulations written by a wildlife or agriculture agency, or in a city or county ordinance. A change in any layer can change your legal situation.',
          'This layering is why a single national answer is impossible and why the Ferrets.com directory is organized state by state with pointers to the official department.',
        ],
      },
      {
        id: 'reform',
        heading: 'Why reform efforts recur',
        paragraphs: [
          'In ban states, advocacy groups periodically push for legalization, arguing that domesticated ferrets pose minimal feral risk. California has seen such efforts across multiple legislative sessions.',
          'These efforts raise the visibility of the issue but have not, to date, changed the core prohibitions. The status quo can persist for a long time.',
        ],
      },
      {
        id: 'staying-current',
        heading: 'How to stay current',
        paragraphs: [
          'Before acquiring or moving a ferret, check the relevant state page on Ferrets.com for the framing and citation, then confirm directly with the state agency and your municipality. Sign up for the Ferrets.com update list to hear when our state guidance changes.',
          'Agency websites and legislative-tracking tools are the authoritative way to follow a specific bill or rule change.',
        ],
      },
      {
        id: 'our-standard',
        heading: 'Our editorial standard on legality',
        paragraphs: [
          'Ferrets.com cites public-record statutes and rules and frames legal status conservatively. Where we are not certain of a specific provision, we describe the governing framework and instruct you to verify locally rather than asserting a detail we cannot stand behind.',
          'Everything on the site is informational, not legal advice. The final authority is always your state agency and your municipality.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can ferret laws change?',
        answer:
          'Yes. Ferret rules live in statutes, agency regulations, and local ordinances, and any layer can change. Reform efforts recur, especially in California, though the core bans persist. Always verify the current rule before acquiring or moving a ferret.',
      },
      {
        question: 'How do I track ferret-law changes?',
        answer:
          'Check the state page on Ferrets.com, confirm with the state agency and your municipality, and follow agency websites or legislative-tracking tools for specific bills. You can also join the Ferrets.com update list.',
      },
      {
        question: 'Is Ferrets.com legality information legal advice?',
        answer:
          'No. It is informational reference content citing public-record law. The authoritative sources are your state agency and your municipality; verify with them before acting.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Why ferrets are banned', href: '/legality/why-ferrets-are-banned' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'legality-how-laws-change',
  },

  'service-and-emotional-support': {
    slug: 'service-and-emotional-support',
    eyebrow: 'Legality · Status',
    title: 'Can a Ferret Be a Service or Emotional-Support Animal?',
    heading: 'Ferrets as service or support animals',
    dek: 'A plain-language look at whether a ferret can qualify as a service animal or emotional-support animal, and how that interacts with ownership legality.',
    tldr: 'Under federal disability rules, service animals are defined narrowly and ferrets are not recognized as service animals. Emotional-support-animal status is a separate, housing-focused concept with its own evolving rules. Critically, support-animal status does not override a state or city ferret ban. This is general information, not legal advice — consult a qualified professional for your situation.',
    sections: [
      {
        id: 'service-animals',
        heading: 'Service animals are defined narrowly',
        paragraphs: [
          'Federal disability law defines service animals narrowly, centered on dogs trained to perform specific tasks for a person with a disability. Ferrets do not fall within that recognized service-animal definition.',
          'This means a ferret cannot claim the public-access rights that a trained service dog has under those rules.',
        ],
      },
      {
        id: 'esa',
        heading: 'Emotional-support animals are different',
        paragraphs: [
          'Emotional-support animals (ESAs) are a separate concept, historically tied to housing accommodations rather than public access, and the rules around them have shifted in recent years. ESA status is not the same as service-animal status.',
          'Even where an ESA accommodation might apply, it is a fact-specific area, and you should consult a qualified professional rather than relying on a general web page.',
        ],
      },
      {
        id: 'does-not-override',
        heading: 'Support status does not override a ban',
        paragraphs: [
          'This is the key point: claiming a ferret as a support animal does not make it legal where ferret ownership is banned. A California or Hawaii ban, or a New York City prohibition, is not waived by support-animal status.',
          'Likewise, a permit state still requires the permit. Animal-status questions and ownership-legality questions are separate, and the legality rule controls whether you can have the animal at all.',
        ],
      },
      {
        id: 'get-advice',
        heading: 'Get qualified advice',
        paragraphs: [
          'Service- and support-animal law is technical and evolving, and misinformation is common. If your situation depends on it, consult a qualified professional or your relevant agency rather than relying on general guidance.',
          'For the ownership-legality side, start with your state page on Ferrets.com and verify with your state and municipality.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a ferret be a service animal?',
        answer:
          'No. Federal disability rules define service animals narrowly, centered on trained dogs, and ferrets are not recognized as service animals, so they do not have service-animal public-access rights.',
      },
      {
        question: 'Can a ferret be an emotional-support animal?',
        answer:
          'Emotional-support-animal status is a separate, evolving, housing-focused concept. It is fact-specific, and you should consult a qualified professional. Importantly, it does not override a state or city ferret ban.',
      },
      {
        question: 'Does support-animal status override a ferret ban?',
        answer:
          'No. Claiming a ferret as a support animal does not make it legal where ownership is banned, and permit states still require the permit. Ownership legality is a separate question that controls whether you can have the animal.',
      },
    ],
    related: [
      { label: 'Legality topics hub', href: '/legality' },
      { label: 'Where are ferrets illegal?', href: '/legality/where-are-ferrets-illegal' },
      { label: 'Renting with a ferret', href: '/legality/renting-with-a-ferret' },
    ],
    source: 'legality-service-esa',
  },
}

export const LEGALITY_SLUGS = Object.keys(LEGALITY_GUIDES)
