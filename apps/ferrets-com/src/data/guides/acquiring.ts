/**
 * Content data for the /acquiring cluster — the logistics of legally and
 * responsibly bringing home a ferret. Distinct long-form, informational
 * guides. No fabricated facts; defensible framing with "verify locally".
 */

import type { GuideSection, RelatedLink } from '@/components/GuideArticle'
import type { FAQItem } from '@carloOS/ui'

export interface AcquiringGuide {
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

export const ACQUIRING_GUIDES: Record<string, AcquiringGuide> = {
  'pre-purchase-checklist': {
    slug: 'pre-purchase-checklist',
    eyebrow: 'Acquiring · Checklist',
    title: 'Before You Get a Ferret: The Complete Pre-Acquisition Checklist',
    heading: 'Before you get a ferret: the checklist',
    dek: 'Everything to confirm before bringing home a ferret — legality, vet access, housing, budget, and time commitment — in one ordered checklist.',
    tldr: 'Work through five gates before you acquire a ferret: confirm it is legal where you live, identify an exotic-mammal vet who is accepting patients, set up appropriate housing and a ferret-proofed space, budget for setup plus a veterinary reserve, and honestly assess the daily time commitment. Skipping any one of these is the most common path to a surrendered ferret.',
    sections: [
      {
        id: 'legality',
        heading: 'Gate 1: Confirm legality',
        paragraphs: [
          'Start here, because nothing else matters if ferrets are not legal where you live. Ownership is prohibited in California and Hawaii and within New York City; Florida and Pennsylvania require a permit; some cities add ordinances.',
          'Read your state page in the Ferrets.com legality directory, then verify with your municipality. If a permit is required, secure it before you acquire the animal.',
        ],
      },
      {
        id: 'vet',
        heading: 'Gate 2: Line up a veterinarian',
        paragraphs: [
          'Most general-practice vets see few ferrets. Before acquiring, identify a clinic that actively treats ferrets and confirm it is accepting new patients. Use the AEMV find-a-vet directory and the Ferrets.com per-state vet pages.',
          'Knowing where you will go for routine care and for the endocrine and neoplastic conditions ferrets commonly develop is part of responsible ownership, not an afterthought.',
        ],
      },
      {
        id: 'housing',
        heading: 'Gate 3: Set up housing and ferret-proofing',
        paragraphs: [
          'Have the cage assembled and a ferret-proofed space ready before the ferret arrives. Ferrets squeeze through roughly inch-wide gaps, chew soft rubber and foam, and burrow into furniture, so proofing is non-trivial.',
          'For specific cage and gear guidance, see the sister site Ferret.com. Ferrets.com is the reference and directory, not a shop.',
        ],
      },
      {
        id: 'budget',
        heading: 'Gate 4: Budget realistically',
        paragraphs: [
          'Plan for the cage and setup, the intake vet exam and vaccinations, and an ongoing supply of an appropriate obligate-carnivore diet. Then add a veterinary reserve for the high baseline rate of adrenal disease, insulinoma, and lymphoma ferrets develop with age.',
          'A ferret you cannot afford to treat is the single most common reason ferrets are surrendered. Build the reserve before you acquire, not after.',
        ],
      },
      {
        id: 'time',
        heading: 'Gate 5: Assess the time commitment',
        paragraphs: [
          'Ferrets need several hours of supervised out-of-cage activity daily, regular cage cleaning, and social interaction. They are not low-maintenance pets, and a bored, under-exercised ferret becomes destructive.',
          'Be honest about your schedule. If you cannot commit the daily time for the ferret\'s 5-to-8-year typical lifespan, reconsider the timing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should I do first before getting a ferret?',
        answer:
          'Confirm ferrets are legal in your state and municipality. Ownership is banned in California, Hawaii, and New York City, and Florida and Pennsylvania require a permit. Read your state page and verify locally before anything else.',
      },
      {
        question: 'Do I need a vet lined up before getting a ferret?',
        answer:
          'Yes. Most general practices see few ferrets, so identify an exotic-mammal clinic that is accepting patients before you acquire one. Use the AEMV directory and the Ferrets.com per-state vet pages.',
      },
      {
        question: 'How much time does a ferret need each day?',
        answer:
          'Several hours of supervised out-of-cage activity plus social interaction and cage maintenance. Ferrets are not low-maintenance, and under-stimulated ferrets become destructive.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'State legality directory', href: '/states' },
      { label: 'Find an exotic-pet vet', href: '/find-a-vet' },
    ],
    source: 'acquiring-checklist',
  },

  'permits-and-licensing': {
    slug: 'permits-and-licensing',
    eyebrow: 'Acquiring · Legal',
    title: 'Ferret Permits & Licensing: Which States and Cities Require Them',
    heading: 'Ferret permits and licensing',
    dek: 'A plain-language overview of where a permit or license is required to own a ferret in the US, what those requirements involve, and how to verify the current rule.',
    tldr: 'Two states require a state-issued permit to own a ferret: Florida (a no-cost Class III wildlife permit) and Pennsylvania (an Exotic Wildlife Possession Permit). Many other states require only rabies vaccination, and some cities add a local pet license. Permit rules change, so always verify with the state agency before acquiring. This is informational, not legal advice.',
    sections: [
      {
        id: 'state-permits',
        heading: 'States that require a permit',
        paragraphs: [
          'Florida classifies ferrets as Class III wildlife. Owners must obtain a personal-possession permit from the Florida Fish and Wildlife Conservation Commission; the permit itself is no-cost but requires an application before you acquire the animal, and caging standards apply.',
          'Pennsylvania requires an Exotic Wildlife Possession Permit administered through the Pennsylvania Game Commission. Arrange it before bringing a ferret into the state, and confirm the current fee and process directly with the agency.',
        ],
      },
      {
        id: 'rabies',
        heading: 'Rabies vaccination as a near-universal requirement',
        paragraphs: [
          'Independent of any permit, most states require or strongly recommend rabies vaccination for ferrets, the same as for dogs and cats. Several states name ferrets explicitly in their rabies-vaccination statutes.',
          'Keep the vaccination certificate; you will need it for licensing, travel, boarding, and in the event of a bite report.',
        ],
      },
      {
        id: 'local-licensing',
        heading: 'Local licensing and ordinances',
        paragraphs: [
          'Even in permit-free states, your city or county may require a pet license or impose an exotic-animal ordinance. New York City\'s outright ferret ban is the best-known example of a local rule overriding state-level legality.',
          'Check with your municipal animal-control office. The Ferrets.com per-state pages flag the most common city-level restrictions, but local rules change, so verify directly.',
        ],
      },
      {
        id: 'verify',
        heading: 'How to verify the current rule',
        paragraphs: [
          'Permit and licensing rules are not static. Start with your state page on Ferrets.com for the framing and citation, then confirm with the named state agency — Fish & Wildlife, Department of Agriculture, or the equivalent — and your municipality.',
          'When in doubt, call the agency. A short phone call before you acquire a ferret is far cheaper than discovering a permit problem afterward.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which states require a permit to own a ferret?',
        answer:
          'Florida (a no-cost Class III wildlife permit from the FWC) and Pennsylvania (an Exotic Wildlife Possession Permit from the Game Commission) require state permits. Verify the current process directly with the agency before acquiring.',
      },
      {
        question: 'Do I need a rabies vaccination for my ferret?',
        answer:
          'In most states, yes — rabies vaccination is required or strongly recommended, and several statutes name ferrets explicitly. Keep the certificate for licensing, travel, boarding, and bite reports.',
      },
      {
        question: 'Can my city ban ferrets even if my state allows them?',
        answer:
          'Yes. New York City bans ferrets despite New York State allowing them. Always check your municipal animal-control office in addition to the state rule.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Florida legality (permit)', href: '/states/florida' },
      { label: 'Pennsylvania legality (permit)', href: '/states/pennsylvania' },
    ],
    source: 'acquiring-permits',
  },

  'vaccination-records': {
    slug: 'vaccination-records',
    eyebrow: 'Acquiring · Health',
    title: 'Ferret Vaccination & Records: What to Get and Why You Need Them',
    heading: 'Ferret vaccination and records',
    dek: 'The core ferret vaccinations, why documentation matters for legality and travel, and what records to demand from any source before you take a ferret home.',
    tldr: 'Ferrets are routinely vaccinated against rabies and canine distemper — distemper is almost always fatal in ferrets, so the vaccine is important, not optional. Keep certificates for licensing, travel, boarding, and bite reports. Always demand a ferret\'s vaccination and medical records before acquiring. This is general information; your veterinarian sets the actual schedule.',
    sections: [
      {
        id: 'core-vaccines',
        heading: 'The core ferret vaccinations',
        paragraphs: [
          'Two vaccinations are standard for pet ferrets in the US: rabies and canine distemper. Canine distemper is nearly always fatal in ferrets, which is why the vaccine matters even for an indoor animal that could be exposed indirectly.',
          'Your veterinarian determines the schedule based on the ferret\'s age and history. Some ferrets have vaccine reactions, so vets often advise monitoring after administration — another reason to have a ferret-experienced clinic.',
        ],
      },
      {
        id: 'why-records',
        heading: 'Why records matter beyond health',
        paragraphs: [
          'Vaccination records are not just medical history. They are commonly required for local pet licensing, for travel and airline transport, for boarding, and as documentation if a ferret is involved in a bite report.',
          'Keep the original certificates and digital copies. A ferret without a documented rabies vaccination can create real complications in any of those situations.',
        ],
      },
      {
        id: 'demand-records',
        heading: 'Demand records before you acquire',
        paragraphs: [
          'Whether you adopt, buy from a breeder, or get a ferret from a store, insist on the complete medical record: vaccination history, spay/neuter status, descenting status, and any treatment.',
          'A source that cannot or will not produce records is a source to walk away from. Take whatever paperwork you receive to the intake exam so your vet can build an accurate plan.',
        ],
      },
      {
        id: 'intake-exam',
        heading: 'The intake exam',
        paragraphs: [
          'Schedule an exotic-mammal veterinary exam within the first several days of bringing a ferret home. The vet will review the records, confirm vaccination status, check for parasites and common conditions, and establish a baseline.',
          'This first visit also begins the relationship you will rely on as the ferret ages into the years when adrenal disease, insulinoma, and lymphoma become more common.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What vaccinations does a ferret need?',
        answer:
          'Rabies and canine distemper are the core ferret vaccinations in the US. Canine distemper is nearly always fatal in ferrets, so the vaccine is important. Your veterinarian sets the actual schedule.',
      },
      {
        question: 'Why do I need to keep my ferret\'s vaccination records?',
        answer:
          'Records are commonly required for local licensing, travel and airline transport, boarding, and bite reports — not just for medical history. Keep the original certificates and digital copies.',
      },
      {
        question: 'What records should I get when acquiring a ferret?',
        answer:
          'Insist on the complete medical record: vaccination history, spay/neuter and descenting status, and any treatment. Walk away from any source that cannot provide documentation.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Pre-acquisition checklist', href: '/acquiring/pre-purchase-checklist' },
      { label: 'Find an exotic-pet vet', href: '/find-a-vet' },
    ],
    source: 'acquiring-vaccination',
  },

  'choosing-a-healthy-ferret': {
    slug: 'choosing-a-healthy-ferret',
    eyebrow: 'Acquiring · Selection',
    title: 'How to Choose a Healthy Ferret: Signs to Look For and Avoid',
    heading: 'Choosing a healthy ferret',
    dek: 'What a healthy ferret looks and behaves like, the warning signs that warrant caution, and the questions to ask before you commit — whether adopting or buying.',
    tldr: 'A healthy ferret is alert, curious, and active when awake, with a clean coat, clear eyes and nose, and good body condition. Watch for lethargy, hair loss, hind-end weakness, labored breathing, or a distended abdomen, and always ask about age, vaccination, and medical history. A pre-existing condition does not always rule out adoption, but you must know about it. This is general guidance, not a veterinary diagnosis.',
    sections: [
      {
        id: 'healthy-signs',
        heading: 'What a healthy ferret looks like',
        paragraphs: [
          'Awake ferrets are intensely curious and active; they investigate, play, and move with coordination. Look for a full, glossy coat, clear bright eyes, a clean nose, clean ears, and good body condition — neither bony nor obese.',
          'Ferrets sleep a great deal, so a sleeping ferret is not a red flag. But a ferret that is lethargic and unresponsive when roused, or that seems weak, deserves scrutiny.',
        ],
      },
      {
        id: 'warning-signs',
        heading: 'Warning signs to take seriously',
        paragraphs: [
          'Be cautious about hair loss or thinning (a common sign of adrenal disease), hind-end weakness or wobbliness (which can signal insulinoma or neurologic issues), labored breathing, a distended abdomen, persistent diarrhea, or significant weight loss.',
          'None of these automatically rules out a ferret — a rescue may knowingly place a ferret with a managed condition — but you must understand what you are taking on and budget for it.',
        ],
      },
      {
        id: 'questions',
        heading: 'Questions to ask before committing',
        paragraphs: [
          'Ask the ferret\'s approximate age, vaccination history, spay/neuter and descenting status, diet, and any known medical conditions or treatments. Ask why the ferret is available — surrender, breeder placement, or store stock.',
          'A reputable source answers these readily and provides records. Evasiveness or missing paperwork is itself a warning sign.',
        ],
      },
      {
        id: 'after',
        heading: 'After you choose',
        paragraphs: [
          'Schedule an intake exam with an exotic-mammal veterinarian regardless of how healthy the ferret appears. A baseline exam catches subtle issues and sets up the care relationship.',
          'If you have other ferrets, quarantine the newcomer for about two weeks before introductions to protect your existing animals.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can I tell if a ferret is healthy?',
        answer:
          'A healthy ferret is alert and curious when awake, with a glossy coat, clear eyes and nose, clean ears, and good body condition. Ferrets sleep a lot, so sleeping is normal; unresponsiveness or weakness when roused is not.',
      },
      {
        question: 'What are warning signs of illness in a ferret?',
        answer:
          'Hair loss, hind-end weakness, labored breathing, a distended abdomen, persistent diarrhea, and significant weight loss warrant caution. These do not always rule out adoption, but you must know about them and budget accordingly.',
      },
      {
        question: 'Should I still see a vet if the ferret looks healthy?',
        answer:
          'Yes. Schedule an intake exam with an exotic-mammal veterinarian regardless of appearance. A baseline exam catches subtle issues and establishes the care relationship you will rely on as the ferret ages.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Pre-acquisition checklist', href: '/acquiring/pre-purchase-checklist' },
      { label: 'Vaccination & records', href: '/acquiring/vaccination-records' },
    ],
    source: 'acquiring-choosing',
  },

  'interstate-transport': {
    slug: 'interstate-transport',
    eyebrow: 'Acquiring · Logistics',
    title: 'Transporting a Ferret Across State Lines: Rules and Practicalities',
    heading: 'Transporting a ferret across state lines',
    dek: 'What to know before moving or transporting a ferret between states — destination legality, health documentation, and the practical realities of travel.',
    tldr: 'Before transporting a ferret across state lines, confirm the ferret is legal at the destination — you cannot lawfully bring one into California or Hawaii, and you may need a permit in Florida or Pennsylvania. Carry rabies-vaccination documentation, plan for climate control in transit, and check airline and interstate-health rules. This is informational; verify with the destination state.',
    sections: [
      {
        id: 'destination-legality',
        heading: 'Destination legality comes first',
        paragraphs: [
          'The single most important step is confirming ferrets are legal where you are going. You cannot lawfully bring a ferret into California or Hawaii, and bringing one into Florida or Pennsylvania requires arranging a permit first.',
          'Read the destination state\'s page in the Ferrets.com legality directory, then verify with that state\'s agency and the destination municipality before you travel.',
        ],
      },
      {
        id: 'documentation',
        heading: 'Health documentation for travel',
        paragraphs: [
          'Carry the ferret\'s rabies-vaccination certificate. Some interstate moves and most air travel require a recent health certificate (a Certificate of Veterinary Inspection) from a veterinarian; requirements vary by state and carrier.',
          'Check the destination state\'s import rules and, for flights, the specific airline\'s live-animal policy well in advance — many airlines do not accept ferrets at all.',
        ],
      },
      {
        id: 'in-transit',
        heading: 'Climate and comfort in transit',
        paragraphs: [
          'Ferrets are heat-sensitive, so a hot vehicle is dangerous. Plan transport for cooler hours, keep the car climate-controlled, and never leave a ferret in a parked car. Provide water and a secure, ventilated carrier.',
          'For long moves, plan rest stops, keep the ferret\'s diet consistent, and bring familiar bedding to reduce stress.',
        ],
      },
      {
        id: 'after-arrival',
        heading: 'After you arrive',
        paragraphs: [
          'Re-establish the cage and a ferret-proofed space promptly, and locate an exotic-mammal veterinarian in the new area — ideally before the move, using the Ferrets.com per-state vet pages.',
          'Update any local licensing and, if the destination required a permit, ensure it is in order before settling in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I move my ferret to any state?',
        answer:
          'No. You cannot lawfully bring a ferret into California or Hawaii, and Florida and Pennsylvania require a permit. Confirm destination legality on the Ferrets.com state page and with the destination state before traveling.',
      },
      {
        question: 'What documents do I need to travel with a ferret?',
        answer:
          'Carry the rabies-vaccination certificate, and check whether the destination state or your airline requires a recent health certificate (Certificate of Veterinary Inspection). Requirements vary, so verify in advance.',
      },
      {
        question: 'Do airlines allow ferrets?',
        answer:
          'Many do not. Airline live-animal policies vary widely and some prohibit ferrets entirely. Check the specific carrier\'s policy well before booking.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Moving with a ferret', href: '/moving' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'acquiring-interstate',
  },

  'first-supplies': {
    slug: 'first-supplies',
    eyebrow: 'Acquiring · Setup',
    title: 'First Ferret Supplies: What You Need Ready Before Pickup',
    heading: 'First ferret supplies before pickup',
    dek: 'The essential setup to have in place before a ferret comes home — cage, bedding, litter, food and water, and a ferret-proofed space — without the product-shilling.',
    tldr: 'Have the core setup ready before pickup: an appropriately sized multi-level cage, hammocks or bedding, a corner litter setup, food and water systems, an appropriate obligate-carnivore diet, and a genuinely ferret-proofed room. Ferrets.com is the reference and directory; for specific product comparisons, see the sister site Ferret.com. This is a setup checklist, not a shopping endorsement.',
    sections: [
      {
        id: 'cage',
        heading: 'The cage and resting setup',
        paragraphs: [
          'A ferret needs a multi-level cage with appropriate bar spacing and enough room to move, sleep, and eliminate in separate areas. Ferrets love to sleep enclosed, so hammocks or sleep sacks are standard, along with washable bedding.',
          'Bar spacing matters: ferrets squeeze through surprisingly small gaps, so a cage designed for ferrets (not a generic small-animal cage) is the safe choice.',
        ],
      },
      {
        id: 'litter-food',
        heading: 'Litter, food, and water',
        paragraphs: [
          'Ferrets prefer corners, so corner litter boxes placed where the ferret naturally goes are most successful. Use a ferret-appropriate litter, not clumping clay, which can cause respiratory and ingestion issues.',
          'Provide an appropriate obligate-carnivore diet and fresh water (many owners use both a bowl and a bottle). Ferrets eat frequently due to a fast metabolism, so food should be reliably available.',
        ],
      },
      {
        id: 'ferret-proofing',
        heading: 'Ferret-proofing the space',
        paragraphs: [
          'This is the step new owners most often underestimate. Block gaps as small as an inch, secure or cover electrical cords, remove soft rubber and foam objects (ferrets chew and can swallow pieces, causing dangerous blockages), and secure cabinets and appliances.',
          'A ferret needs several hours of supervised out-of-cage time daily, so a properly proofed room is not optional — it is where the ferret actually lives much of its waking life.',
        ],
      },
      {
        id: 'where-to-buy',
        heading: 'Where to get specific product guidance',
        paragraphs: [
          'Ferrets.com is the directory and reference. For buyer guides, product comparisons, and the AI shopping assistant, the sister site Ferret.com covers cages, food, and supplies in detail.',
          'Whatever you buy, prioritize safety — appropriate bar spacing, non-toxic chewable-free toys, and a species-appropriate diet — over aesthetics.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What supplies do I need before getting a ferret?',
        answer:
          'A ferret-appropriate multi-level cage, hammocks or bedding, a corner litter setup with ferret-safe litter, food and water systems, an appropriate obligate-carnivore diet, and a genuinely ferret-proofed room ready before pickup.',
      },
      {
        question: 'Why is ferret-proofing so important?',
        answer:
          'Ferrets squeeze through inch-wide gaps and chew soft rubber and foam, which can cause fatal intestinal blockages. Because ferrets need hours of out-of-cage time daily, a properly proofed room is essential, not optional.',
      },
      {
        question: 'Where can I compare ferret products?',
        answer:
          'Ferrets.com is the reference and directory. For product comparisons and buyer guides on cages, food, and supplies, see the sister site Ferret.com.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Pre-acquisition checklist', href: '/acquiring/pre-purchase-checklist' },
      { label: 'First 30 days', href: '/adopt/first-30-days' },
    ],
    source: 'acquiring-supplies',
  },

  'questions-to-ask-source': {
    slug: 'questions-to-ask-source',
    eyebrow: 'Acquiring · Due diligence',
    title: 'Questions to Ask a Ferret Rescue, Breeder, or Seller',
    heading: 'Questions to ask the source',
    dek: 'The specific questions that separate a responsible ferret source from one to avoid — on health, history, and what happens if the placement does not work.',
    tldr: 'Before committing to any ferret, ask about age and history, vaccination and alteration status, diet, known medical conditions, and the source\'s return policy. A responsible rescue or breeder answers readily and provides records; evasiveness, no questions for you, and no paperwork are warning signs. These questions apply whether you are adopting or buying.',
    sections: [
      {
        id: 'health-history',
        heading: 'Health and history questions',
        paragraphs: [
          'Ask the ferret\'s approximate age and date of birth if known, its vaccination history (rabies and canine distemper), its spay/neuter and descenting status, its current diet, and any known medical conditions or past treatments.',
          'For rescues, ask why the ferret was surrendered and how it has behaved in foster care. For breeders, ask about the parents and any line health testing.',
        ],
      },
      {
        id: 'records',
        heading: 'Records and documentation',
        paragraphs: [
          'Ask to see the actual records, not just a verbal summary. A responsible source provides vaccination certificates and any veterinary paperwork. If records cannot be produced, treat that as a reason to walk away.',
          'Bring whatever documentation you receive to the intake exam so your veterinarian can build an accurate care plan.',
        ],
      },
      {
        id: 'return-policy',
        heading: 'What happens if it does not work out',
        paragraphs: [
          'Ask the source\'s policy if the placement fails. Reputable rescues and breeders will take an animal back rather than see it surrendered to an unknown situation, and many require it in the adoption contract.',
          'A source that has no interest in the ferret\'s long-term outcome is one to be wary of.',
        ],
      },
      {
        id: 'red-flags',
        heading: 'Warning signs in the answers',
        paragraphs: [
          'Be cautious if the source asks you no questions, has many young kits immediately available, cannot provide records, pressures you to decide quickly, or is evasive about health history.',
          'Responsible sources screen adopters and are transparent. The friction of a thorough process is a feature, not a problem.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should I ask a ferret breeder or rescue?',
        answer:
          'Ask about age and history, vaccination and alteration status, diet, known medical conditions, and the return policy. Ask to see actual records, and for rescues ask why the ferret was surrendered.',
      },
      {
        question: 'What are warning signs of a bad ferret source?',
        answer:
          'No questions for you, many kits immediately available, no records, pressure to decide quickly, and evasiveness about health history. Responsible sources screen adopters and are transparent.',
      },
      {
        question: 'Should a source take a ferret back if it does not work out?',
        answer:
          'Reputable rescues and breeders will, and many require it in the adoption contract. A source uninterested in the ferret\'s long-term outcome is one to be wary of.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'Choosing a healthy ferret', href: '/acquiring/choosing-a-healthy-ferret' },
      { label: 'Rescue vs. breeder vs. pet store', href: '/adopt/rescue-vs-breeder' },
    ],
    source: 'acquiring-questions',
  },

  'one-ferret-or-two': {
    slug: 'one-ferret-or-two',
    eyebrow: 'Acquiring · Decision',
    title: 'One Ferret or Two? How Many Ferrets to Get',
    heading: 'One ferret or two?',
    dek: 'Whether to start with a single ferret or a pair, what bonded pairs mean for adoption, and how the decision affects cost, time, and the animals\' well-being.',
    tldr: 'Ferrets are social and many do better in pairs or small groups, and rescues often have bonded pairs that must be adopted together. Two ferrets keep each other company and exercise each other, but double the cost and require proper introductions. A single ferret can thrive with enough human interaction. Match the decision to your time and budget, and never separate a bonded pair.',
    sections: [
      {
        id: 'social-nature',
        heading: 'Ferrets are social animals',
        paragraphs: [
          'Ferrets are naturally social and frequently do well living with other ferrets. A companion provides play, exercise, and stimulation that can be hard for a person to fully replicate, especially during a workday.',
          'This is why many rescues prefer to place ferrets in pairs or groups, and why bonded pairs are common in rescue.',
        ],
      },
      {
        id: 'bonded-pairs',
        heading: 'Bonded pairs must stay together',
        paragraphs: [
          'When a rescue describes a bonded pair, it means two ferrets that have a strong attachment and would be distressed if separated. Reputable rescues will not split a bonded pair, and you should not seek to.',
          'Adopting a bonded pair can be easier than introducing strangers, since the social work is already done — but it doubles ongoing cost and care.',
        ],
      },
      {
        id: 'practical',
        heading: 'The practical trade-offs',
        paragraphs: [
          'Two ferrets roughly double food, vet, and supply costs, and require a larger cage and more out-of-cage management. Introductions between unbonded ferrets take patience — quarantine, scent-swapping, and supervised meetings.',
          'A single ferret can be perfectly happy if you provide ample daily interaction and enrichment, but be honest about whether your schedule supports that.',
        ],
      },
      {
        id: 'decision',
        heading: 'Making the decision',
        paragraphs: [
          'If you have plenty of daily time and a modest budget, one ferret can work well. If your schedule is busier or you want the animals to have constant company, a pair or a bonded pair is often the kinder choice.',
          'Whatever you choose, never separate a bonded pair, and plan introductions carefully if you add a ferret later.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I get one ferret or two?',
        answer:
          'Ferrets are social and many do better in pairs, which provide company and exercise. But two roughly double cost and care. A single ferret can thrive with ample daily human interaction. Match the choice to your time and budget.',
      },
      {
        question: 'What is a bonded pair of ferrets?',
        answer:
          'Two ferrets with a strong attachment that would be distressed if separated. Reputable rescues will not split a bonded pair, and adopters should keep them together.',
      },
      {
        question: 'Can I add a second ferret later?',
        answer:
          'Yes, but introductions between unbonded ferrets take patience — quarantine the newcomer for about two weeks, then use scent-swapping and supervised meetings before housing them together.',
      },
    ],
    related: [
      { label: 'Acquiring a ferret hub', href: '/acquiring' },
      { label: 'First 30 days', href: '/adopt/first-30-days' },
      { label: 'Pre-acquisition checklist', href: '/acquiring/pre-purchase-checklist' },
    ],
    source: 'acquiring-one-or-two',
  },
}

export const ACQUIRING_SLUGS = Object.keys(ACQUIRING_GUIDES)
