/**
 * Content data for the /adopt adoption + rescue cluster.
 *
 * Each entry is a long-form, distinct guide consumed by a thin page.tsx via
 * the shared GuideArticle template. No fabricated rescue/shelter names — only
 * nationally-citable directories (AFA, Petfinder, AEMV). Informational only.
 */

import type { GuideSection, RelatedLink } from '@/components/GuideArticle'
import type { FAQItem } from '@carloOS/ui'

export interface AdoptGuide {
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

export const ADOPT_GUIDES: Record<string, AdoptGuide> = {
  northeast: {
    slug: 'northeast',
    eyebrow: 'Adoption · Region',
    title: 'Adopting a Ferret in the Northeast: Rescues, Rules & What to Expect',
    heading: 'Adopting a ferret in the Northeast',
    dek: 'How ferret adoption works across the Northeast — New England, New York, New Jersey, and Pennsylvania — including the one major regional restriction you must know before you start.',
    tldr: 'Ferrets are legal across most of the Northeast, with two important exceptions: New York City bans them under the city health code, and Pennsylvania requires a state permit. The region has a dense network of exotic-mammal vets and an active rescue community concentrated around the New York, Boston, and Philadelphia metros. Start with the American Ferret Association shelter directory and Petfinder filtered to your state.',
    sections: [
      {
        id: 'legal-landscape',
        heading: 'The Northeast legal landscape',
        paragraphs: [
          'The Northeast is mostly ferret-friendly. Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, Vermont, and most of New York and New Jersey permit ferrets as ordinary companion animals, typically requiring only rabies vaccination and any local licensing.',
          'There are two regional exceptions you must check before adopting. New York City prohibits ferret ownership within the five boroughs under the NYC Health Code, even though ferrets are legal in the rest of New York State. Pennsylvania requires a state Exotic Wildlife Possession Permit. Confirm the current rule on the relevant state page before you commit to an adoption.',
        ],
        bullets: [
          'NYC: prohibited inside the five boroughs (legal elsewhere in NY State).',
          'Pennsylvania: state permit required before acquiring.',
          'Rhode Island: legal, but verify the current DEM classification.',
          'All other Northeast states: legal with standard rabies vaccination.',
        ],
      },
      {
        id: 'where-to-look',
        heading: 'Where to look for an adoptable ferret',
        paragraphs: [
          'Begin with two national resources that aggregate legitimate regional rescues. The American Ferret Association maintains an accredited-shelter directory; AFA-affiliated shelters in the Northeast cluster around the New York, Boston, and Philadelphia metros. Petfinder lists adoptable ferrets from partner shelters and is filterable by state.',
          'Because the Northeast is densely populated, a rescue two states away may still be a reasonable drive. Many regional rescues coordinate transport for adopters who pass a home check, so do not rule out an organization solely on distance.',
        ],
      },
      {
        id: 'what-to-expect',
        heading: 'What the adoption process looks like',
        paragraphs: [
          'A reputable ferret rescue will ask you to complete an application, may conduct a phone or video interview, and will frequently require a home check or proof of a suitable cage and ferret-proofed space. Expect questions about your veterinary plan, since exotic-mammal care is specialized and not every clinic treats ferrets.',
          'Adoption fees in the region typically reflect the rescue\'s intake costs — vaccination, spay/neuter status confirmation, and any medical treatment the ferret received in care. Ask what veterinary work has been done and request the records.',
        ],
      },
      {
        id: 'vet-access',
        heading: 'Veterinary access in the region',
        paragraphs: [
          'The Northeast has one of the highest densities of board-certified exotic-mammal veterinarians in the country, concentrated in the New York, Boston, and Philadelphia metros. Before you adopt, identify a clinic that actively treats ferrets and confirm it is accepting new patients.',
          'Use the AEMV find-a-vet directory and the Ferrets.com per-state vet pages to build a shortlist, then call and ask whether the practice sees ferrets regularly and offers the adrenal and insulinoma workups that older ferrets commonly need.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I adopt a ferret if I live in New York City?',
        answer:
          'No. Ferret ownership is prohibited within the five boroughs of New York City under the NYC Health Code, so a reputable rescue will not place a ferret at a New York City address. Ferrets are legal in the rest of New York State.',
      },
      {
        question: 'Do I need a permit to adopt a ferret in Pennsylvania?',
        answer:
          'Pennsylvania requires a state Exotic Wildlife Possession Permit for ferret ownership. Arrange the permit before adopting and confirm the current requirement on the Ferrets.com Pennsylvania page and with the Pennsylvania Game Commission.',
      },
      {
        question: 'Where is the nearest ferret rescue in the Northeast?',
        answer:
          'Use the American Ferret Association accredited-shelter directory and Petfinder filtered to your state. Regional rescues cluster around the New York, Boston, and Philadelphia metros, and many coordinate transport for vetted adopters.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Ferret rescue & adoption guide', href: '/directory/rescues' },
      { label: 'New York legality', href: '/states/new-york' },
      { label: 'Pennsylvania legality', href: '/states/pennsylvania' },
    ],
    source: 'adopt-northeast',
  },

  midwest: {
    slug: 'midwest',
    eyebrow: 'Adoption · Region',
    title: 'Adopting a Ferret in the Midwest: Rescues, Rules & Vet Access',
    heading: 'Adopting a ferret in the Midwest',
    dek: 'Ferret adoption across the Midwest — the Great Lakes states, the Upper Midwest, and the Plains — where ferrets are legal statewide and several university teaching hospitals anchor specialty care.',
    tldr: 'Every Midwest state permits ferrets as pets with standard rabies vaccination and local licensing. The region\'s advantage is veterinary infrastructure: Purdue, Iowa State, Minnesota, Wisconsin–Madison, Kansas State, and Missouri all operate teaching hospitals that take ferret referrals. Rescues concentrate in the major metros; the Plains states have sparser coverage, so transport and vetted breeders are common there.',
    sections: [
      {
        id: 'legal-landscape',
        heading: 'The Midwest legal landscape',
        paragraphs: [
          'The Midwest is uniformly ferret-legal. Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, and Wisconsin all permit ferrets as companion animals. The practical requirements are rabies vaccination and any city licensing ordinance.',
          'A few metros straddle state lines — most notably Kansas City, which spans Missouri and Kansas. If you live in a border metro, confirm which state\'s rules and which city ordinance apply to your specific address.',
        ],
      },
      {
        id: 'where-to-look',
        heading: 'Where to look for an adoptable ferret',
        paragraphs: [
          'Use the American Ferret Association accredited-shelter directory and Petfinder filtered to your state. In the Midwest, rescues concentrate in the larger metros — Chicago, Detroit, the Twin Cities, Indianapolis, St. Louis, and Kansas City.',
          'Coverage thins across the Plains. Owners in the Dakotas, Nebraska, and rural Kansas frequently work with a vetted breeder or coordinate an out-of-state transfer through a regional rescue network rather than finding a local rescue.',
        ],
      },
      {
        id: 'vet-access',
        heading: 'Veterinary access is a regional strength',
        paragraphs: [
          'The Midwest is unusually well served by veterinary teaching hospitals that accept exotic and ferret referrals: Purdue (Indiana), Iowa State (Iowa), the University of Minnesota (Minnesota), UW–Madison (Wisconsin), Kansas State (Kansas), and the University of Missouri (Missouri). These anchor specialty care for adrenal disease, insulinoma, and lymphoma.',
          'Even so, day-to-day care depends on a general or exotic practice near you. Identify a ferret-seeing clinic before adopting, and reserve the teaching hospitals for referral-level workups.',
        ],
      },
      {
        id: 'what-to-expect',
        heading: 'What the adoption process looks like',
        paragraphs: [
          'Expect an application, a possible home check, and questions about your veterinary plan and ferret-proofing. Midwest winters make indoor housing and a heat-source safety check relevant — ask the rescue about the ferret\'s temperature tolerance and any seasonal husbandry notes.',
          'Request the ferret\'s medical records, including rabies and canine-distemper vaccination history, before you finalize the adoption.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are ferrets legal everywhere in the Midwest?',
        answer:
          'Yes. Every Midwest state permits ferrets as pets with standard rabies vaccination. Some cities add a licensing ordinance, so confirm your municipality\'s rule. There is no Midwest state-level ferret ban.',
      },
      {
        question: 'Which Midwest vet schools take ferret referrals?',
        answer:
          'Purdue, Iowa State, the University of Minnesota, UW–Madison, Kansas State, and the University of Missouri all operate teaching hospitals with exotic or special-species services that accept ferret referrals for endocrine and oncology cases.',
      },
      {
        question: 'I live in a rural Plains state — where do I find a ferret?',
        answer:
          'Rescue coverage is sparse across the Dakotas, Nebraska, and rural Kansas. Use the AFA directory and Petfinder, and expect to coordinate a transport from a regional rescue or work with a vetted breeder.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Ferret rescue & adoption guide', href: '/directory/rescues' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'adopt-midwest',
  },

  south: {
    slug: 'south',
    eyebrow: 'Adoption · Region',
    title: 'Adopting a Ferret in the South: Rescues, Heat Risk & Rules',
    heading: 'Adopting a ferret in the South',
    dek: 'Ferret adoption across the South — from the mid-Atlantic to the Gulf Coast — where ferrets are legal but heat and humidity make climate control the single most important husbandry commitment.',
    tldr: 'Ferrets are legal across the South, with two key caveats: Florida requires a no-cost Class III wildlife permit, and the whole region\'s heat makes air conditioning non-negotiable. Rescues concentrate in the Atlanta, DC–Baltimore, and Texas metros. Several university teaching hospitals (Auburn, LSU, Mississippi State, the University of Florida, the University of Georgia) anchor specialty ferret care.',
    sections: [
      {
        id: 'legal-landscape',
        heading: 'The Southern legal landscape',
        paragraphs: [
          'Most of the South permits ferrets as ordinary pets: Alabama, Arkansas, Delaware, Georgia, Kentucky, Louisiana, Maryland, Mississippi, North Carolina, Oklahoma, South Carolina, Tennessee, Texas, Virginia, West Virginia, and the District of Columbia.',
          'Florida is the regional exception: ferrets are legal but classified as Class III wildlife, requiring a no-cost personal-possession permit from the Florida Fish and Wildlife Conservation Commission before you acquire one. Confirm the current rule on the Ferrets.com Florida page.',
        ],
      },
      {
        id: 'heat-risk',
        heading: 'Heat is the defining husbandry issue',
        paragraphs: [
          'Ferrets do not tolerate sustained temperatures above roughly 80°F and can suffer fatal heat stress quickly. Across the Gulf states and the Lower South, this makes continuous indoor air conditioning a husbandry requirement, not a comfort. Never house a ferret in a garage, sunroom, or porch in this region.',
          'Hurricane-prone areas add a planning dimension: build the ferret into your evacuation plan, including a travel carrier, a battery or vehicle cooling option, and copies of vaccination records. A reputable rescue will expect you to have thought this through.',
        ],
      },
      {
        id: 'where-to-look',
        heading: 'Where to look for an adoptable ferret',
        paragraphs: [
          'Use the American Ferret Association accredited-shelter directory and Petfinder filtered to your state. Southern rescue activity concentrates around Atlanta, the DC–Baltimore corridor, and the major Texas metros.',
          'In states with sparser coverage — much of the Deep South and Appalachia — owners often coordinate a transport from a regional rescue or work with a vetted breeder. Ask any rescue about its heat-season transport practices.',
        ],
      },
      {
        id: 'vet-access',
        heading: 'Veterinary access in the South',
        paragraphs: [
          'Several public teaching hospitals anchor specialty ferret care in the region: Auburn (Alabama), LSU (Louisiana), Mississippi State (Mississippi), the University of Florida (Florida), and the University of Georgia (Georgia). Atlanta and the DC–Baltimore corridor hold the densest concentration of private exotic-mammal practices.',
          'Identify a ferret-seeing clinic before adopting. In rural areas, plan for referral travel toward the nearest major metro or teaching hospital.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a permit to adopt a ferret in Florida?',
        answer:
          'Yes. Florida classifies ferrets as Class III wildlife and requires a no-cost personal-possession permit from the FWC before you acquire one. Apply before adopting and confirm the current requirement on the Ferrets.com Florida page.',
      },
      {
        question: 'How serious is the heat risk for ferrets in the South?',
        answer:
          'Serious. Ferrets can suffer fatal heat stress above roughly 80°F. In the South, continuous indoor air conditioning is a husbandry requirement, and never house a ferret in a garage, sunroom, or porch.',
      },
      {
        question: 'Where are the ferret rescues in the South?',
        answer:
          'Use the AFA directory and Petfinder. Rescue activity concentrates around Atlanta, the DC–Baltimore corridor, and the major Texas metros; the Deep South and Appalachia rely more on regional transport and vetted breeders.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Florida legality (permit)', href: '/states/florida' },
      { label: 'Ferret rescue & adoption guide', href: '/directory/rescues' },
    ],
    source: 'adopt-south',
  },

  west: {
    slug: 'west',
    eyebrow: 'Adoption · Region',
    title: 'Adopting a Ferret in the West: Rules, the California Ban & Vet Access',
    heading: 'Adopting a ferret in the West',
    dek: 'Ferret adoption across the West — the Mountain West, Pacific Northwest, and Desert Southwest — where most states are ferret-friendly but California and Hawaii are not.',
    tldr: 'Most Western states permit ferrets, but two do not: California bans ownership outright and Hawaii prohibits possession, import, and even transit. Desert heat is the dominant husbandry concern in the Southwest. Rescues concentrate in the Pacific Northwest and the Denver and Phoenix metros; Colorado State and Oregon State anchor specialty care. Californians who want a ferret must relocate to a permissive state.',
    sections: [
      {
        id: 'legal-landscape',
        heading: 'The Western legal landscape',
        paragraphs: [
          'Most of the West permits ferrets: Alaska, Arizona, Colorado, Idaho, Montana, Nevada, New Mexico, Oregon, Utah, Washington, and Wyoming all allow them as companion animals.',
          'Two states are hard exceptions. California bans ferret ownership statewide under the Fish & Game Code restricted-species framework. Hawaii prohibits possession, import, and transit under its restricted-animals rule, with no permit pathway. A reputable rescue will not place a ferret in either state, and owners cannot relocate a ferret into them.',
        ],
        bullets: [
          'California: ownership prohibited statewide.',
          'Hawaii: possession, import, and transit prohibited; no permit pathway.',
          'All other Western states: legal as companion animals.',
        ],
      },
      {
        id: 'desert-heat',
        heading: 'Desert heat in the Southwest',
        paragraphs: [
          'In Arizona, Nevada, New Mexico, and the Utah valleys, summer heat is the defining husbandry risk. Ferrets must be kept in continuously cooled indoor space — never a garage or sunroom — and owners should monitor for heat stress during the hottest months.',
          'The dry desert air also makes hydration and ambient humidity worth tracking. A rescue in this region will expect adopters to have a reliable cooling plan.',
        ],
      },
      {
        id: 'where-to-look',
        heading: 'Where to look for an adoptable ferret',
        paragraphs: [
          'Use the American Ferret Association accredited-shelter directory and Petfinder filtered to your state. In the West, rescue activity concentrates in the Pacific Northwest (Portland and Seattle) and the Denver and Phoenix metros.',
          'Coverage is sparse across the Mountain West and the Northern Rockies; owners in Montana, Wyoming, Idaho, and the Dakotas-adjacent areas commonly work with a vetted breeder or coordinate a regional transport.',
        ],
      },
      {
        id: 'california-residents',
        heading: 'If you live in California',
        paragraphs: [
          'Ferret ownership is illegal in California. Adoption is not possible at a California address, and you cannot legally bring a ferret into the state. The only lawful path to ferret ownership for a Californian is relocating to a permissive state.',
          'California veterinarians will treat ferrets and are not required to verify legal ownership, so existing ferrets receive care — but that does not change the ownership prohibition. See the Ferrets.com California page for the full picture.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I adopt a ferret in California?',
        answer:
          'No. Ferret ownership is prohibited statewide in California under the Fish & Game Code restricted-species framework. A reputable rescue will not place a ferret at a California address, and you cannot legally import one.',
      },
      {
        question: 'Can I bring my ferret to Hawaii?',
        answer:
          'No. Hawaii prohibits the possession, import, and transit of ferrets under its restricted-animals rule, with no permit pathway. Owners relocating to Hawaii cannot bring a ferret.',
      },
      {
        question: 'Where are the ferret rescues in the West?',
        answer:
          'Use the AFA directory and Petfinder. Rescue activity concentrates in the Pacific Northwest and the Denver and Phoenix metros; the Mountain West relies more on regional transport and vetted breeders.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'California legality (banned)', href: '/states/california' },
      { label: 'Hawaii legality (banned)', href: '/states/hawaii' },
    ],
    source: 'adopt-west',
  },

  'rescue-vs-breeder': {
    slug: 'rescue-vs-breeder',
    eyebrow: 'Adoption · Decision',
    title: 'Rescue vs. Breeder vs. Pet Store: How to Acquire a Ferret Responsibly',
    heading: 'Rescue vs. breeder vs. pet store',
    dek: 'The three common paths to ferret ownership compared on cost, health transparency, age, and ethics — so you can choose the source that fits your situation.',
    tldr: 'Rescue is usually the best first option: lower cost, known temperament, and a ferret that needs a home. A reputable breeder offers known lineage and early socialization but at higher cost and with a waitlist. Large-scale pet-store ferrets are typically early-altered and descented young, which carries documented long-term health trade-offs. Whichever path you choose, demand medical records and avoid any source that cannot provide them.',
    sections: [
      {
        id: 'rescue',
        heading: 'Adopting from a rescue',
        paragraphs: [
          'Rescue is the path most ferret organizations recommend first. Rescues take in surrendered, abandoned, and confiscated ferrets, assess temperament and health in foster care, and place them with vetted adopters. You typically know the ferret\'s approximate age, personality, and any medical history.',
          'Adoption fees are modest and usually reflect the rescue\'s intake costs. The trade-offs: you may not get a kit (young ferrets are less common in rescue), and you should expect an application, an interview, and possibly a home check.',
        ],
      },
      {
        id: 'breeder',
        heading: 'Buying from a private breeder',
        paragraphs: [
          'A reputable small-scale breeder can offer known lineage, early socialization, and a kit raised in a home environment. Good breeders health-test their lines, are transparent about the parents, and will take an animal back if the placement fails.',
          'The trade-offs are cost and availability: expect a higher price than a rescue and often a waitlist. Be cautious of anyone selling kits with no health records, no questions for you, and immediate availability — those are warning signs.',
        ],
      },
      {
        id: 'pet-store',
        heading: 'Pet-store ferrets and early alteration',
        paragraphs: [
          'Many pet-store ferrets in the US come from large-scale producers and are spayed/neutered and descented at a very young age. Research and veterinary opinion link early neutering in ferrets to a higher lifetime rate of adrenal disease, and descenting is a non-therapeutic surgery many owners and vets consider unnecessary.',
          'This does not mean a pet-store ferret cannot be a wonderful pet — millions are. But understand the trade-offs, ask for the medical paperwork, and factor the elevated endocrine-disease risk into your long-term veterinary budget.',
        ],
      },
      {
        id: 'records',
        heading: 'The non-negotiable: medical records',
        paragraphs: [
          'Regardless of source, insist on documentation: rabies and canine-distemper vaccination history, spay/neuter status, and any treatment the ferret has received. A source that cannot or will not provide records is a source to walk away from.',
          'Before bringing any ferret home, line up an exotic-mammal veterinarian and schedule an intake exam. See the Ferrets.com acquiring checklist for the full pre-adoption preparation list.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is it cheaper to adopt or buy a ferret?',
        answer:
          'Adoption from a rescue is almost always less expensive than a breeder or pet store, and the fee typically covers vaccination and any medical care the ferret received in foster. Breeders cost more and often have a waitlist.',
      },
      {
        question: 'Why are pet-store ferrets neutered so young?',
        answer:
          'Large-scale US producers commonly spay/neuter and descent ferrets at a very young age. Early neutering is associated with a higher lifetime rate of adrenal disease, so factor that into your long-term veterinary planning.',
      },
      {
        question: 'How do I spot a bad breeder?',
        answer:
          'Warning signs include no health records, no questions for you, immediate availability of many kits, and no willingness to take an animal back. A reputable breeder is transparent about lineage and screens adopters.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Acquiring a ferret checklist', href: '/acquiring' },
      { label: 'Ferret rescue & adoption guide', href: '/directory/rescues' },
    ],
    source: 'adopt-rescue-vs-breeder',
  },

  'application-process': {
    slug: 'application-process',
    eyebrow: 'Adoption · How-to',
    title: 'The Ferret Adoption Application Process: What Rescues Ask & Why',
    heading: 'The ferret adoption application process',
    dek: 'A walk-through of what a reputable ferret rescue asks for — application, interview, home check, and fee — and how to prepare so your adoption goes smoothly.',
    tldr: 'A legitimate ferret rescue screens adopters with an application, often an interview, and sometimes a home check or proof of a suitable setup. They want to confirm ferrets are legal where you live, that you have a vet plan, and that your home is ferret-proofed. Prepare by reading your state legality page, lining up an exotic-mammal vet, and setting up the cage before you apply.',
    sections: [
      {
        id: 'why-screening',
        heading: 'Why rescues screen adopters',
        paragraphs: [
          'Ferret rescues exist because ferrets are frequently surrendered — often by owners who underestimated the time, cost, or specialized care involved. Screening is how a rescue reduces the chance a placement fails and the ferret ends up back in care.',
          'A thorough application is a good sign, not a hurdle. An organization that hands over a ferret with no questions is not protecting the animal and may not be a legitimate rescue.',
        ],
      },
      {
        id: 'the-application',
        heading: 'What the application typically asks',
        paragraphs: [
          'Expect questions about your housing situation (own vs. rent, landlord approval for pets), your household (other pets, children), your work schedule and the out-of-cache time you can offer, and your veterinary plan.',
          'You will almost always be asked to confirm that ferrets are legal in your state and municipality. This is where the Ferrets.com state legality directory helps — read your state page before applying so you can answer accurately.',
        ],
      },
      {
        id: 'interview-home-check',
        heading: 'The interview and home check',
        paragraphs: [
          'Many rescues conduct a phone or video interview to discuss your experience and expectations. Some require a home check — in person or via photos/video — to verify you have a suitable cage and a ferret-proofed space.',
          'Ferret-proofing is a common sticking point. Ferrets squeeze through gaps as small as an inch, chew soft rubber, and burrow into furniture. Having a genuinely ferret-proofed room ready signals to the rescue that you understand the species.',
        ],
      },
      {
        id: 'fees-records',
        heading: 'Fees, records, and bringing the ferret home',
        paragraphs: [
          'Adoption fees vary by rescue and typically reflect intake costs — vaccination, spay/neuter confirmation, and any medical care. Ask exactly what the fee covers and request the ferret\'s medical records.',
          'Before pickup, finish setting up the cage, secure your ferret-proofed space, and schedule an intake exam with an exotic-mammal vet. See the Ferrets.com acquiring checklist for the complete pre-arrival list.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does a ferret rescue need a home check?',
        answer:
          'A home check confirms you have a suitable cage and a ferret-proofed space. Ferrets escape through tiny gaps and chew hazardous materials, so the check protects the animal and reduces the chance the placement fails.',
      },
      {
        question: 'What disqualifies someone from adopting a ferret?',
        answer:
          'Common disqualifiers include living where ferrets are illegal, no realistic veterinary plan, an unsuitable or un-ferret-proofed home, or a household situation the rescue judges unsafe for the animal.',
      },
      {
        question: 'How long does ferret adoption take?',
        answer:
          'It varies by rescue — anywhere from a few days to a few weeks, depending on the application review, interview, and any home check. Preparing your setup and vet plan in advance speeds the process.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Acquiring a ferret checklist', href: '/acquiring' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'adopt-application-process',
  },

  'adopting-vs-buying-costs': {
    slug: 'adopting-vs-buying-costs',
    eyebrow: 'Adoption · Money',
    title: 'What Adopting a Ferret Actually Costs: Fees, Setup & First-Year Budget',
    heading: 'What adopting a ferret actually costs',
    dek: 'A realistic look at the up-front and first-year cost of bringing home a ferret — adoption fee, cage and gear, vaccination, and the veterinary reserve every owner should plan for.',
    tldr: 'The adoption fee is the smallest part of the cost. A proper cage, the initial vet exam, vaccinations, and ferret-proofing add up quickly, and ferrets have a high baseline rate of expensive endocrine and neoplastic disease as they age. Budget for a veterinary reserve, not just the purchase. This page is general budgeting guidance, not a price quote.',
    sections: [
      {
        id: 'adoption-fee',
        heading: 'The adoption fee',
        paragraphs: [
          'Rescue adoption fees are generally modest and reflect the organization\'s intake costs — vaccination, spay/neuter confirmation, and any medical care the ferret received. Breeder and pet-store prices are typically higher.',
          'Treat the fee as the entry cost, not the total cost. The recurring and contingency costs below matter far more to your budget over the ferret\'s life.',
        ],
      },
      {
        id: 'setup',
        heading: 'Cage and initial setup',
        paragraphs: [
          'A ferret needs a multi-level cage of appropriate size, hammocks or bedding, a litter setup, food and water systems, and a supply of an appropriate obligate-carnivore diet. Ferret-proofing a room — covering gaps, securing cords, and removing chewable hazards — may add cost too.',
          'For specific product guidance and buyer comparisons, see the sister site Ferret.com; Ferrets.com is the directory and reference, not a shop.',
        ],
      },
      {
        id: 'first-year-vet',
        heading: 'First-year veterinary cost',
        paragraphs: [
          'Plan for an intake exam with an exotic-mammal veterinarian, rabies and canine-distemper vaccinations, and a baseline health assessment. Exotic-mammal care often costs more than standard cat-and-dog care because fewer clinics offer it.',
          'Confirm vaccination status from your source and bring the records to the first appointment so the vet can build an accurate schedule.',
        ],
      },
      {
        id: 'reserve',
        heading: 'The veterinary reserve nobody mentions',
        paragraphs: [
          'Ferrets have a high baseline rate of adrenal disease, insulinoma, and lymphoma, often emerging after age four. Diagnostics and treatment for these conditions can be significant, and pet insurance for exotics is limited.',
          'The responsible approach is to set aside a veterinary reserve when you adopt. A ferret you cannot afford to treat is the most common reason ferrets end up surrendered — the very pipeline that fills the rescues.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is a ferret expensive to own?',
        answer:
          'The purchase or adoption fee is small relative to lifetime cost. Cage and setup, exotic-mammal veterinary care, and a reserve for the high baseline rate of endocrine and neoplastic disease are the real budget drivers.',
      },
      {
        question: 'Why does ferret vet care cost more?',
        answer:
          'Exotic-mammal medicine is specialized and offered by fewer clinics, which raises cost. Ferrets also commonly develop conditions like adrenal disease and insulinoma that require diagnostics and ongoing treatment.',
      },
      {
        question: 'Should I budget a veterinary reserve?',
        answer:
          'Yes. Because ferrets frequently develop expensive conditions after age four and exotic insurance is limited, setting aside a veterinary reserve at adoption is the most responsible approach.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Acquiring a ferret checklist', href: '/acquiring' },
      { label: 'Rescue vs. breeder vs. pet store', href: '/adopt/rescue-vs-breeder' },
    ],
    source: 'adopt-costs',
  },

  'first-30-days': {
    slug: 'first-30-days',
    eyebrow: 'Adoption · New owner',
    title: 'Your Ferret\'s First 30 Days: A New-Owner Settling-In Guide',
    heading: 'Your ferret\'s first 30 days',
    dek: 'What to expect and what to do in the first month after bringing home a ferret — from the intake vet visit and quarantine to bonding, litter training, and building a routine.',
    tldr: 'The first month sets the tone. Schedule an intake exam, quarantine a new ferret from any existing ferrets for about two weeks, give the animal time to acclimate before heavy handling, and build a consistent feeding, play, and litter routine. Watch for stress signs and call your vet early if anything seems off. This is general settling-in guidance, not veterinary advice.',
    sections: [
      {
        id: 'intake-exam',
        heading: 'Week 1: the intake exam and acclimation',
        paragraphs: [
          'Book an exotic-mammal veterinary exam within the first several days. The vet will confirm vaccination status, check for parasites and common conditions, and establish a baseline. Bring the medical records from your source.',
          'Give a new ferret time to settle. Let it explore its cage and a small ferret-proofed area, keep handling gentle and short at first, and avoid overwhelming it with too much activity or too many new people.',
        ],
      },
      {
        id: 'quarantine',
        heading: 'Quarantine if you have other ferrets',
        paragraphs: [
          'If you already have ferrets, quarantine the newcomer separately for roughly two weeks to reduce the risk of transmitting illness or parasites, and to give the vet time to clear the new animal.',
          'After quarantine, introduce ferrets gradually and supervised. Scent-swapping and short, monitored meetings reduce conflict. For detailed introduction protocols, see the care references on the sister site Ferret.com.',
        ],
      },
      {
        id: 'routine',
        heading: 'Building a routine',
        paragraphs: [
          'Ferrets thrive on routine. Establish consistent feeding (an appropriate obligate-carnivore diet, available frequently given their fast metabolism), several hours of supervised out-of-cage play, and a clean litter setup.',
          'Litter training takes patience: ferrets prefer corners, so place litter boxes where the ferret naturally eliminates and reward success. Expect some accidents during the adjustment period.',
        ],
      },
      {
        id: 'watch-signs',
        heading: 'What to watch for',
        paragraphs: [
          'Monitor appetite, energy, stool, and weight. Lethargy, refusal to eat, weakness in the hind end, hair loss, or persistent diarrhea warrant a prompt call to your vet — several common ferret conditions present subtly.',
          'A new ferret may be timid or nippy at first; gentle, consistent handling usually resolves this. If behavior seems driven by pain or illness rather than fear, involve your veterinarian.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to quarantine a new ferret?',
        answer:
          'If you already have ferrets, yes — quarantine the newcomer for about two weeks to reduce disease and parasite transmission and to allow a veterinary check before introductions.',
      },
      {
        question: 'How long until my new ferret settles in?',
        answer:
          'Most ferrets begin to acclimate within the first couple of weeks with gentle, consistent handling and a steady routine. Timid or nippy behavior usually eases as trust builds.',
      },
      {
        question: 'When should I call the vet in the first month?',
        answer:
          'Schedule an intake exam in the first several days, and call promptly for lethargy, loss of appetite, hind-end weakness, hair loss, or persistent diarrhea — several common ferret conditions present subtly.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Acquiring a ferret checklist', href: '/acquiring' },
      { label: 'Find an exotic-pet vet', href: '/find-a-vet' },
    ],
    source: 'adopt-first-30-days',
  },

  'surrender-rehome': {
    slug: 'surrender-rehome',
    eyebrow: 'Adoption · Rehoming',
    title: 'Surrendering or Rehoming a Ferret: How to Do It Responsibly',
    heading: 'Surrendering or rehoming a ferret',
    dek: 'If you can no longer keep your ferret, here is how to rehome it responsibly — through a rescue, a vetted private adopter, or a surrender — while protecting the animal.',
    tldr: 'Life changes, and sometimes a ferret needs a new home. The responsible options are surrendering to a reputable ferret rescue, transferring to a carefully vetted private adopter, or returning to the breeder or rescue you got the ferret from. Provide full medical records, never abandon or release a ferret, and start with the American Ferret Association shelter directory.',
    sections: [
      {
        id: 'first-steps',
        heading: 'Before you decide to rehome',
        paragraphs: [
          'Many surrenders stem from solvable problems — a behavior issue, a housing change, or an unexpected vet bill. Before rehoming, consider whether a behavior consult, a temporary boarding arrangement, or a payment plan with your vet could resolve the underlying issue.',
          'If rehoming is genuinely necessary, plan for a responsible transition rather than a rushed handoff. The animal\'s welfare and a smooth medical-record transfer should drive the timeline.',
        ],
      },
      {
        id: 'rescue-surrender',
        heading: 'Surrendering to a rescue',
        paragraphs: [
          'A reputable ferret rescue is the safest option for most owners. Rescues assess the ferret, address any health issues, and screen adopters. Start with the American Ferret Association accredited-shelter directory to find an organization serving your area.',
          'Rescues are often at capacity, so contact them early and be honest about the ferret\'s health and temperament. Bring complete medical records and any cage or supplies you can donate.',
        ],
      },
      {
        id: 'private-adopter',
        heading: 'Transferring to a private adopter',
        paragraphs: [
          'If you rehome privately, vet the new owner the way a rescue would: confirm ferrets are legal where they live, that they have a veterinary plan, and that their home is suitable and ferret-proofed.',
          'Transfer the full medical history and be transparent about any conditions. Avoid free-to-anyone giveaways, which can attract people who are not prepared to provide appropriate care.',
        ],
      },
      {
        id: 'never-do',
        heading: 'What never to do',
        paragraphs: [
          'Never release a ferret outdoors. Domesticated ferrets cannot survive in the wild, and in some states release is also a legal violation tied to wildlife-protection rules.',
          'Do not abandon a ferret at a shelter drop box or leave it with someone who cannot care for it. If you are out of options, contact a rescue or your veterinarian for guidance — they would rather help than see an animal harmed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I surrender a ferret?',
        answer:
          'Start with a reputable ferret rescue via the American Ferret Association accredited-shelter directory. Rescues assess and rehome surrendered ferrets and screen adopters. Contact them early, as they are often near capacity.',
      },
      {
        question: 'Can I rehome my ferret privately?',
        answer:
          'Yes, but vet the new owner as a rescue would: confirm ferrets are legal where they live, that they have a vet plan, and that their home is suitable. Transfer full medical records and avoid free giveaways.',
      },
      {
        question: 'Is it ever okay to release a ferret outdoors?',
        answer:
          'Never. Domesticated ferrets cannot survive in the wild, and release may also violate state wildlife rules. If you are out of options, contact a rescue or your veterinarian for help.',
      },
    ],
    related: [
      { label: 'Adoption & rescue hub', href: '/adopt' },
      { label: 'Ferret rescue & adoption guide', href: '/directory/rescues' },
      { label: 'State legality directory', href: '/states' },
    ],
    source: 'adopt-surrender-rehome',
  },
}

export const ADOPT_SLUGS = Object.keys(ADOPT_GUIDES)
