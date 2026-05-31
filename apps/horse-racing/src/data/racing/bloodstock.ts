// Bloodstock & breeding explainer cluster (queue #4).
// Affluent, NON-gambling, citation-magnet content (pedigree/sales is primary-
// source material AI surfaces cite). No data feed, no gambling license. Targets
// the ownership-curious + sales-curious audience and the bloodstock-buyer end of
// the acquisition map. Monetizes indirectly (audience -> ownership -> referral)
// and supports the brand's "intelligence" positioning without live race data.
//
// Trust posture (QC §1): educational, source-anchored, no fabricated expertise,
// no individualized buying/investment advice, no return promises.

export interface BloodstockTopic {
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

export const bloodstockTopics: BloodstockTopic[] = [
  {
    slug: 'how-thoroughbred-sales-work',
    title: 'How Thoroughbred Sales Work',
    metaTitle: 'How Thoroughbred Sales Work — Yearlings, Breeze-Ups & the Ring',
    description:
      'A plain-English guide to how Thoroughbred auctions work: yearling sales, two-year-olds in training, breeding stock, the bidding process, and what the prices really mean.',
    kicker: 'The sales ring',
    intro:
      'Most racehorses are bought and sold at public auction, and the major sales are among the most fascinating markets in sport. Here is how the ring actually works — the different sale types, how bidding goes, and how to read what a price tag is really saying.',
    sections: [
      {
        heading: 'The main types of sale',
        body: [
          'Thoroughbreds are sold at distinct stages. Yearling sales (horses around 18 months old) are the biggest market, where buyers bet on pedigree and physical promise before the horse has ever raced. Two-year-olds in training sales add a breeze-up — a short, timed gallop — so buyers see athleticism before bidding. Breeding stock sales trade broodmares, weanlings, and stallion shares.',
          'Each sale type prices a different kind of risk: a yearling is pure potential, a breezing two-year-old has shown a little, and a proven broodmare is valued on her produce record and pedigree.',
        ],
      },
      {
        heading: 'How the bidding works',
        body: [
          'Horses sell one at a time through a fast live auction, often via a bid-spotter and auctioneer. A seller may set a reserve (a minimum price); if bidding doesn’t reach it, the horse is led out unsold (an "RNA" — reserve not attained). Clearance rate — the share of offered horses that actually sell — is a key gauge of market health.',
          'Major auction houses run both in-person ring sales and, increasingly, online digital sales for horses of all ages, widening access for buyers who can’t attend in person.',
        ],
      },
      {
        heading: 'What a price really means',
        body: [
          'A headline-grabbing sale topper reflects pedigree, physical conformation, the sire’s commercial heat, and competition between deep-pocketed buyers — not a guarantee of racetrack success. Many seven-figure yearlings never win a major race, while modestly priced horses sometimes become champions. Price signals market sentiment, not destiny.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where are most racehorses bought and sold?',
        answer:
          'At public auction through major sales companies, in person and increasingly online. Yearling sales are the largest market, alongside two-year-olds in training and breeding stock sales.',
      },
      {
        question: 'Does a high sale price mean a horse will be a good racehorse?',
        answer:
          'No. Price reflects pedigree, physique, sire commercial appeal, and bidding competition — not future results. Many expensive yearlings never win a big race, and some inexpensive ones become champions.',
      },
    ],
    related: ['reading-a-pedigree', 'what-is-bloodstock'],
  },
  {
    slug: 'reading-a-pedigree',
    title: 'How to Read a Pedigree',
    metaTitle: 'How to Read a Thoroughbred Pedigree — Sire, Dam & the Page',
    description:
      'Understand a Thoroughbred pedigree page: sire and dam lines, black type, the role of the broodmare, and what breeders mean by a "strong page".',
    kicker: 'Breeding basics',
    intro:
      'A pedigree "page" can look like an intimidating wall of names, but it follows a clear logic. Once you can read it, you understand a huge amount about why a horse was bred and what buyers see in it.',
    sections: [
      {
        heading: 'Sire, dam, and the shape of the page',
        body: [
          'Every Thoroughbred traces to a sire (father) and dam (mother). The pedigree page shows the sire’s line across the top and the dam’s family (the "distaff" side) below, going back several generations. Breeders pay enormous attention to the dam line — a strong female family is prized because it tends to produce quality generation after generation.',
          '"Black type" is the printing convention that bolds (and capitalises) horses that have won or placed in stakes races. The more black type close up on a page — especially on the dam side — the stronger the page is considered.',
        ],
      },
      {
        heading: 'Why breeders mix and match',
        body: [
          'Breeders aim to combine complementary traits — speed with stamina, a precocious sire with a staying family — and watch for "nicks", sire-and-dam-line combinations that have historically produced good runners. None of it is a formula; it’s an informed bet on inheritance, which is why even brilliant matings can disappoint and humble ones can shine.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is "black type" on a pedigree?',
        answer:
          'A printing convention that bolds and capitalises horses that have won or placed in stakes (the top class of races). More black type close up on the page — particularly on the dam’s side — signals a stronger family.',
      },
      {
        question: 'Why do breeders care so much about the dam line?',
        answer:
          'A strong female family tends to reproduce quality across generations, so a good dam line is highly prized and heavily weighted when valuing a pedigree.',
      },
    ],
    related: ['how-thoroughbred-sales-work', 'what-is-bloodstock'],
  },
  {
    slug: 'what-is-bloodstock',
    title: 'What Is Bloodstock?',
    metaTitle: 'What Is Bloodstock? The Business of Buying & Breeding Racehorses',
    description:
      'A clear introduction to bloodstock: what the term means, what bloodstock agents do, and how the breeding-and-trading side of racing actually works.',
    kicker: 'The business',
    intro:
      '"Bloodstock" is the word racing uses for Thoroughbreds considered as breeding and trading assets — the business side of the sport that runs alongside the racing itself. Here’s what it covers and who the players are.',
    sections: [
      {
        heading: 'The term and the trade',
        body: [
          'Bloodstock refers to Thoroughbred horses bought, sold, and bred for racing and reproduction. The bloodstock world spans breeders who produce foals, owners who race them, stallion farms that stand sires, and the auction houses where they all trade. It is a global market, with horses, shares, and breeding rights moving between major racing nations.',
        ],
      },
      {
        heading: 'What a bloodstock agent does',
        body: [
          'A bloodstock agent is a professional adviser who helps clients buy and sell horses — assessing conformation and pedigree, valuing lots, and bidding at sales on a buyer’s behalf, usually for a commission. For newcomers, a reputable agent is the usual way to navigate the sales ring without being out of your depth.',
          'As with any advisory market, agents vary; transparency on fees and a clear track record matter. This is guidance, not a recommendation of any specific agent.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does "bloodstock" mean?',
        answer:
          'It’s the term for Thoroughbred horses considered as breeding and trading assets — the buying, selling, and breeding side of racing, as distinct from the racing itself.',
      },
      {
        question: 'What does a bloodstock agent do?',
        answer:
          'A bloodstock agent advises clients on buying and selling horses — judging conformation and pedigree, valuing lots, and bidding at sales on a buyer’s behalf, typically for a commission.',
      },
    ],
    related: ['how-thoroughbred-sales-work', 'reading-a-pedigree'],
  },
];

export function allBloodstockSlugs(): string[] {
  return bloodstockTopics.map((t) => t.slug);
}

export function getBloodstockTopic(slug: string): BloodstockTopic | undefined {
  return bloodstockTopics.find((t) => t.slug === slug);
}
