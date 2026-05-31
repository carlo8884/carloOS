/**
 * Horse racing — enthusiast & heritage content module.
 *
 * Editorial scope (trust-safe per QC-STANDARDS §1 and the racing-bot brief):
 * heritage, history, ownership, bloodstock/breeding, and "how the sport works"
 * for newcomers. This is enthusiast/educational content — NOT betting, tipping,
 * handicapping advice, or gambling promotion. No fabricated authority; specific
 * claims are anchored to the `references` list (real governing/data bodies).
 */

export interface RacingReference {
  label: string;
  url: string;
}

/** Sub-theme used to group spokes on the hub for topical-authority structure. */
export type RacingCategory = 'The Big Races' | 'Understanding the Sport' | 'Ownership & Breeding';

export const RACING_CATEGORY_ORDER: RacingCategory[] = [
  'The Big Races',
  'Understanding the Sport',
  'Ownership & Breeding',
];

export interface RacingTopic {
  slug: string;
  name: string;
  category: RacingCategory;
  /** Short SERP-friendly meta title fragment (site name suffix added by buildMetadata). */
  metaTitle: string;
  tagline: string;
  /** One-paragraph summary used for meta description + page intro. */
  summary: string;
  sections: { heading: string; body: string[] }[];
  /** Quick-reference bullet facts shown in an "Essentials" panel. */
  essentials: string[];
  faq: { question: string; answer: string }[];
  /** Source-anchored authoritative references (QC §1.5 / §1.7). */
  references: RacingReference[];
  relatedBreeds?: string[];
  relatedTopics?: string[];
}

export const racingTopics: RacingTopic[] = [
  {
    slug: 'triple-crown',
    name: 'The American Triple Crown',
    category: 'The Big Races',
    metaTitle: 'The American Triple Crown Explained',
    tagline: 'Three races, five weeks, one of the hardest feats in all of sport.',
    summary:
      'The American Triple Crown is a series of three Thoroughbred races for three-year-olds — the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes — run over roughly five weeks each spring. Winning all three is one of the rarest achievements in sport.',
    sections: [
      {
        heading: 'What the Triple Crown is',
        body: [
          'The Triple Crown is not a single race but a sequence of three: the Kentucky Derby at Churchill Downs in Louisville, the Preakness Stakes at Pimlico in Baltimore, and the Belmont Stakes at Belmont Park in New York. All three are open only to three-year-old Thoroughbreds, which means a horse gets exactly one chance in its life to win the series.',
          'The three races are run roughly two weeks apart across May and June. A single horse must win all three — at three different tracks, over three different distances, against fresh challengers each time — to be crowned a Triple Crown winner.',
        ],
      },
      {
        heading: 'The three races and their distances',
        body: [
          'The Kentucky Derby is run at one and a quarter miles (ten furlongs). The Preakness Stakes is slightly shorter at one and three-sixteenths miles. The Belmont Stakes is the longest and most demanding at one and a half miles — a distance most American horses never race again, earning it the nickname "the Test of the Champion."',
          'The escalating distances, the short recovery windows, and the wave of rested rivals who skip the earlier legs to target a tired favorite are what make the sweep so difficult. A horse must have speed, stamina, soundness, and luck all at once.',
        ],
      },
      {
        heading: 'Why it is so rare',
        body: [
          'Thirteen horses have won the American Triple Crown. Sir Barton was first to complete the sweep in 1919; Secretariat\'s 1973 campaign is among the most celebrated in the sport\'s history. After a drought of more than three decades, American Pharoah won in 2015 and Justify followed in 2018.',
          'The rarity comes from compounding difficulty: a three-year-old is still physically maturing, the campaign demands peak form sustained across five weeks, and the format deliberately rewards fresh horses in the later legs. Many great horses have won two of the three and fallen short in the last.',
        ],
      },
    ],
    essentials: [
      'Open only to three-year-old Thoroughbreds',
      'Kentucky Derby — 1¼ miles, Churchill Downs',
      'Preakness Stakes — 1³⁄₁₆ miles, Pimlico',
      'Belmont Stakes — 1½ miles, Belmont Park',
      'Run across roughly five weeks each spring',
      'Thirteen winners in the history of the series',
    ],
    faq: [
      {
        question: 'How many horses have won the Triple Crown?',
        answer:
          'Thirteen horses have completed the American Triple Crown, beginning with Sir Barton in 1919 and most recently Justify in 2018.',
      },
      {
        question: 'Why can a horse only win the Triple Crown once?',
        answer:
          'All three races are restricted to three-year-old horses. Because a horse is only three years old for one racing season, it gets a single opportunity to attempt the sweep.',
      },
      {
        question: 'Which Triple Crown race is the hardest?',
        answer:
          'The Belmont Stakes is widely considered the toughest. At one and a half miles it is the longest of the three, run at the end of a demanding five-week stretch, which is why it is nicknamed "the Test of the Champion."',
      },
    ],
    references: [
      { label: 'Triple Crown of Thoroughbred Racing (official)', url: 'https://www.triplecrownracing.com' },
      { label: 'National Thoroughbred Racing Association (NTRA)', url: 'https://www.ntra.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['how-horse-racing-works', 'bloodstock-and-breeding'],
  },
  {
    slug: 'how-horse-racing-works',
    name: 'How Thoroughbred Racing Works',
    category: 'Understanding the Sport',
    metaTitle: 'How Horse Racing Works — A Newcomer\'s Guide',
    tagline: 'A plain-language guide to the sport for first-time spectators.',
    summary:
      'Thoroughbred racing can look bewildering to a newcomer. This guide explains the basics — race types, distances and surfaces, the role of trainers and jockeys, and how a race day is organized — so you can follow the action as an enthusiast.',
    sections: [
      {
        heading: 'The shape of a race day',
        body: [
          'A day at the races is made up of a series of individual races called the "card." Each race is a separate event with its own field of horses, distance, and conditions. Races are spaced through the afternoon or evening so spectators can watch the paddock, the post parade, the race itself, and the result before the next begins.',
          'Horses are saddled in the paddock, walk the post parade in front of the grandstand, load into the starting gate, and run to the finish. An official result follows once the order of finish is confirmed and any inquiries are resolved.',
        ],
      },
      {
        heading: 'Race types and class',
        body: [
          'Races are organized by class, which loosely reflects the quality of the horses. Maiden races are for horses that have never won. Claiming races allow horses to be purchased for a set price. Allowance and stakes races sit higher up, with graded stakes — Grade 1, 2, and 3 — at the top of the pyramid.',
          'Conditions for each race specify eligibility: age, sex, distance, surface, and sometimes earnings or prior wins. These conditions are how racing secretaries assemble competitive, evenly matched fields.',
        ],
      },
      {
        heading: 'Distances and surfaces',
        body: [
          'Race distances in North America are measured in furlongs — one furlong is an eighth of a mile. Sprints are short, fast races (roughly five to seven furlongs); route races are longer (a mile and beyond) and reward stamina.',
          'Races are run on dirt, synthetic (all-weather) tracks, or turf (grass). Different horses are suited to different surfaces and distances, which is part of why pedigree and conformation matter so much in the sport.',
        ],
      },
      {
        heading: 'The people behind the horse',
        body: [
          'An owner (or ownership group) campaigns the horse. A trainer conditions it and chooses its races. A jockey rides it on race day. Grooms, exercise riders, farriers, and veterinarians round out the team. Understanding these roles makes the sport far easier to follow.',
        ],
      },
    ],
    essentials: [
      'A "card" is the full set of races on a given day',
      'Distances are measured in furlongs (1 furlong = ⅛ mile)',
      'Surfaces: dirt, synthetic, or turf',
      'Class ladder: maiden → claiming → allowance → stakes → graded stakes',
      'Key roles: owner, trainer, jockey, groom, farrier',
    ],
    faq: [
      {
        question: 'What is a furlong?',
        answer:
          'A furlong is a unit of distance equal to one-eighth of a mile (220 yards). Race distances in North America are commonly described in furlongs — for example, a six-furlong sprint is three-quarters of a mile.',
      },
      {
        question: 'What is the difference between a stakes race and a claiming race?',
        answer:
          'A claiming race allows any licensed owner to purchase a horse entered in it for a set price, which keeps fields competitive. A stakes race is a higher-class event, often with owners paying entry fees that build the purse, and graded stakes are the most prestigious.',
      },
      {
        question: 'Do I need to bet to enjoy the races?',
        answer:
          'Not at all. Many enthusiasts follow racing purely for the athleticism of the horses, the bloodlines, the strategy, and the spectacle of a race day. This guide is written for spectators and fans, not for wagering.',
      },
    ],
    references: [
      { label: 'Equibase — official racing data', url: 'https://www.equibase.com' },
      { label: 'The Jockey Club', url: 'https://www.jockeyclub.com' },
    ],
    relatedBreeds: ['thoroughbred', 'standardbred', 'quarter-horse'],
    relatedTopics: ['reading-the-form', 'triple-crown'],
  },
  {
    slug: 'bloodstock-and-breeding',
    name: 'Bloodstock & Breeding Basics',
    category: 'Ownership & Breeding',
    metaTitle: 'Bloodstock & Thoroughbred Breeding Basics',
    tagline: 'How pedigrees, sales, and breeding shape the racehorse.',
    summary:
      'Bloodstock is the world of breeding and trading racehorses. This primer explains pedigrees, the roles of sires and dams, how horses are bought and sold at auction, and why bloodlines matter so much in Thoroughbred racing.',
    sections: [
      {
        heading: 'What "bloodstock" means',
        body: [
          'Bloodstock refers to Thoroughbred horses considered as breeding and racing stock — and to the industry of buying, selling, and breeding them. A "bloodstock agent" advises buyers and sellers, much like a specialist broker.',
          'Because a Thoroughbred\'s ability is strongly influenced by its ancestry, the study of pedigrees — the recorded lineage of a horse — sits at the center of the bloodstock world.',
        ],
      },
      {
        heading: 'Sires, dams, and pedigrees',
        body: [
          'A horse\'s father is its sire; its mother is its dam. The dam\'s sire ("damsire" or "broodmare sire") is also tracked closely. A pedigree is typically read across several generations, with successful ancestors highlighted in bold in sales catalogues.',
          'Stallions that have retired from racing may "stand at stud," covering many mares per season for a fee. A mare\'s produce record — the racing results of her foals — strongly influences her value as a broodmare.',
        ],
      },
      {
        heading: 'How horses are bought and sold',
        body: [
          'Many Thoroughbreds change hands at public auction. Yearling sales (horses aged one) and two-year-olds-in-training sales are the most prominent, alongside breeding-stock sales for mares and weanlings. Catalogues list each horse\'s pedigree, and prices can range from modest sums to multiple millions for fashionably bred individuals.',
          'A registered pedigree and accurate identification are maintained through the breed registry. In North America, The Jockey Club maintains the American Stud Book, the official registry of Thoroughbreds.',
        ],
      },
    ],
    essentials: [
      'Bloodstock = Thoroughbreds as breeding/racing stock, and that industry',
      'Sire = father · Dam = mother · Damsire = dam\'s father',
      'Stallions "stand at stud" for a stud fee',
      'Most horses are traded at public auction (yearling, 2YO, breeding-stock sales)',
      'The Jockey Club maintains the American Stud Book',
    ],
    faq: [
      {
        question: 'What is a bloodstock agent?',
        answer:
          'A bloodstock agent is a specialist adviser who helps clients buy and sell racehorses and breeding stock, evaluating pedigrees, conformation, and value — similar to a broker in other markets.',
      },
      {
        question: 'Does pedigree guarantee a good racehorse?',
        answer:
          'No. Pedigree improves the odds that a horse has the aptitude to run well, but training, soundness, temperament, and luck all matter. Many well-bred horses never win, and modestly bred horses sometimes become champions.',
      },
      {
        question: 'What is a stud fee?',
        answer:
          'A stud fee is the price paid to breed a mare to a particular stallion. Fees vary enormously based on the stallion\'s racing record and the success of his offspring at the track and in the sales ring.',
      },
    ],
    references: [
      { label: 'The Jockey Club — American Stud Book', url: 'https://www.jockeyclub.com' },
      { label: 'Thoroughbred Owners and Breeders Association (TOBA)', url: 'https://www.toba.org' },
    ],
    relatedBreeds: ['thoroughbred', 'arabian'],
    relatedTopics: ['racehorse-ownership', 'triple-crown'],
  },
  {
    slug: 'racehorse-ownership',
    name: 'Owning a Racehorse',
    category: 'Ownership & Breeding',
    metaTitle: 'Owning a Racehorse — Syndicates & Partnerships',
    tagline: 'How ownership actually works — from sole ownership to syndicates.',
    summary:
      'Racehorse ownership ranges from a single owner campaigning one horse to syndicates and partnerships that split the costs and the experience among many people. This guide explains the common ownership structures and what owners can realistically expect.',
    sections: [
      {
        heading: 'Ways to own',
        body: [
          'Sole ownership means one person or entity owns the whole horse and pays all of its costs. Partnerships split ownership among a small group. Syndicates pool many small shares so that newcomers can experience ownership at a fraction of the cost. Racing clubs offer the lightest-touch version — a membership that confers the experience without direct ownership.',
          'Each structure trades off cost, control, and involvement. A sole owner makes every decision; a syndicate member enjoys the experience and updates but leaves day-to-day decisions to a managing partner and the trainer.',
        ],
      },
      {
        heading: 'What it costs to keep a horse in training',
        body: [
          'Beyond the purchase price, the main ongoing expense is the training day-rate — what a trainer charges to stable, feed, and condition the horse — plus veterinary care, farrier work, transport, and registration or licensing fees. These recur every month regardless of how the horse performs.',
          'This is why syndicates and partnerships are popular: they spread predictable monthly costs across many owners, lowering the barrier to entry and the individual risk.',
        ],
      },
      {
        heading: 'A passion, not an investment',
        body: [
          'Most owners are clear-eyed that racing is a sport and a passion first. Purses can offset costs and a successful horse can be valuable, but the majority of owners do not profit overall. Responsible syndicates are transparent about costs and set realistic expectations.',
          'The rewards owners describe are usually the experience: visiting the barn, watching a horse develop, race-day access, and a connection to the sport and its community.',
        ],
      },
    ],
    essentials: [
      'Structures: sole ownership, partnership, syndicate, racing club',
      'Syndicates split cost and risk into small affordable shares',
      'Main recurring cost is the trainer\'s daily rate, plus vet/farrier/transport',
      'Costs recur monthly regardless of results',
      'Best approached as a passion, not a financial investment',
    ],
    faq: [
      {
        question: 'What is a racehorse syndicate?',
        answer:
          'A syndicate divides ownership of one or more horses into small shares so that many people can own a fraction of a horse. It lowers the cost of entry and spreads the risk, while a managing partner handles decisions with the trainer.',
      },
      {
        question: 'Is owning a racehorse a good investment?',
        answer:
          'Ownership should be treated as a sport and a passion rather than an investment. While prize money and resale can offset costs, most owners do not profit overall. Reputable partnerships are transparent about this.',
      },
      {
        question: 'What are the ongoing costs of ownership?',
        answer:
          'The largest recurring cost is the trainer\'s daily rate to stable and condition the horse, plus veterinary care, farrier work, transport to races, and licensing or registration fees.',
      },
    ],
    references: [
      { label: 'Thoroughbred Owners and Breeders Association (TOBA) — ownership resources', url: 'https://www.toba.org' },
      { label: 'National Thoroughbred Racing Association (NTRA)', url: 'https://www.ntra.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['bloodstock-and-breeding', 'how-horse-racing-works'],
  },
  {
    slug: 'reading-the-form',
    name: 'How to Read a Racing Program',
    category: 'Understanding the Sport',
    metaTitle: 'How to Read a Racing Program & Past Performances',
    tagline: 'Make sense of the numbers — as a fan, not a tout.',
    summary:
      'A racing program is dense with data: distances, surfaces, class, and a horse\'s past performances. This guide explains what those figures mean so you can read a program and follow a race intelligently. It is a data-literacy guide for enthusiasts — not betting or handicapping advice.',
    sections: [
      {
        heading: 'What a program tells you',
        body: [
          'A printed or digital program lists every race on the card with its conditions — distance, surface, class, age and sex restrictions, and purse. For each horse it shows the connections (owner, trainer, jockey), the silks, and a block of past-performance lines summarizing recent starts.',
          'Reading the conditions first tells you what kind of race it is; reading the past performances tells you about each runner\'s recent form, preferred distance, and surface.',
        ],
      },
      {
        heading: 'Reading past performances',
        body: [
          'Each past-performance line typically records the date, track, distance, surface, the horse\'s finishing position, the margin, and often the class of that race. Read across several lines and patterns emerge: a horse that consistently runs well at today\'s distance and surface is showing relevant form.',
          'Speed and pace figures, where provided, are attempts to express how fast a horse ran on a comparable scale. They are analytical tools, not guarantees, and different data providers calculate them differently.',
        ],
      },
      {
        heading: 'A note on responsible enjoyment',
        body: [
          'This guide explains how to read the information in a program so you can appreciate the sport more deeply. It is not handicapping advice and not a betting system. Racing is best enjoyed responsibly; if you choose to wager, do so within your means and in line with the laws where you live.',
        ],
      },
    ],
    essentials: [
      'Conditions = distance, surface, class, age/sex, purse',
      'Connections = owner, trainer, jockey',
      'Past performances summarize each horse\'s recent starts',
      'Speed/pace figures are analytical tools, not guarantees',
      'This is data literacy for fans — not betting advice',
    ],
    faq: [
      {
        question: 'What are "past performances"?',
        answer:
          'Past performances are the lines of data summarizing a horse\'s recent races — date, track, distance, surface, finishing position, and margin — so you can see its recent form at a glance.',
      },
      {
        question: 'What is a speed figure?',
        answer:
          'A speed figure is a number that expresses how fast a horse ran in a race on a standardized scale, allowing rough comparison between performances. Different providers compute them differently, and they are analytical estimates rather than guarantees.',
      },
      {
        question: 'Is this betting advice?',
        answer:
          'No. This is a data-literacy guide that explains what the information in a racing program means. It does not recommend wagers or offer a handicapping system. If you choose to bet, do so responsibly and legally.',
      },
    ],
    references: [
      { label: 'Equibase — official racing data and past performances', url: 'https://www.equibase.com' },
      { label: 'National Thoroughbred Racing Association (NTRA)', url: 'https://www.ntra.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['how-horse-racing-works', 'triple-crown'],
  },
  {
    slug: 'kentucky-derby',
    name: 'The Kentucky Derby',
    category: 'The Big Races',
    metaTitle: 'The Kentucky Derby Explained — History & Format',
    tagline: '"The most exciting two minutes in sports" — the first jewel of the Triple Crown.',
    summary:
      'The Kentucky Derby is the most famous horse race in the United States — the opening leg of the Triple Crown, run on the first Saturday in May at Churchill Downs in Louisville, Kentucky. This guide explains its history, format, and traditions for newcomers and fans.',
    sections: [
      {
        heading: 'What the Kentucky Derby is',
        body: [
          'The Kentucky Derby is a Grade 1 stakes race for three-year-old Thoroughbreds, run at a distance of one and a quarter miles (ten furlongs) at Churchill Downs. First run in 1875, it is the longest-running continuously held major sporting event in the United States.',
          'It is the first leg of the American Triple Crown, followed by the Preakness Stakes and the Belmont Stakes. Because it is restricted to three-year-olds, every horse in the field is making its one and only Kentucky Derby start.',
        ],
      },
      {
        heading: 'How horses qualify',
        body: [
          'The field is capped at twenty starters — the largest of any major American race, which is part of what makes it so chaotic and unpredictable. Entry is decided by the "Road to the Kentucky Derby," a series of qualifying races at which horses earn points; the top points-earners make the field.',
          'This points system replaced the older graded-stakes-earnings method in 2013, and it rewards horses that perform in the prep races run through the winter and early spring of their three-year-old season.',
        ],
      },
      {
        heading: 'Traditions',
        body: [
          'The Derby is wrapped in tradition: the garland of more than 400 red roses draped over the winner (giving rise to the nickname "the Run for the Roses"), the crowd singing "My Old Kentucky Home" during the post parade, mint juleps, and elaborate hats in the grandstand.',
          'Run on the first Saturday in May, it draws a crowd of well over 150,000 to Churchill Downs and a large television audience, making it the most-watched horse race in North America each year.',
        ],
      },
    ],
    essentials: [
      'Grade 1 race for three-year-old Thoroughbreds',
      '1¼ miles at Churchill Downs, Louisville, Kentucky',
      'First Saturday in May; first run in 1875',
      'First leg of the Triple Crown',
      'Field capped at 20; entry via "Road to the Kentucky Derby" points',
      'Nicknamed "the Run for the Roses"',
    ],
    faq: [
      {
        question: 'How long is the Kentucky Derby?',
        answer:
          'The Kentucky Derby is run at one and a quarter miles (ten furlongs) at Churchill Downs. The race typically takes about two minutes to run, which is the source of its nickname "the most exciting two minutes in sports."',
      },
      {
        question: 'When is the Kentucky Derby held?',
        answer:
          'The Kentucky Derby is run on the first Saturday in May each year at Churchill Downs in Louisville, Kentucky.',
      },
      {
        question: 'Why is it called the Run for the Roses?',
        answer:
          'The winner of the Kentucky Derby is draped in a garland of more than 400 red roses, a tradition that gave the race its nickname "the Run for the Roses."',
      },
    ],
    references: [
      { label: 'Kentucky Derby (official)', url: 'https://www.kentuckyderby.com' },
      { label: 'Churchill Downs', url: 'https://www.churchilldowns.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['triple-crown', 'how-horse-racing-works'],
  },
  {
    slug: 'breeders-cup',
    name: "The Breeders' Cup",
    category: 'The Big Races',
    metaTitle: "The Breeders' Cup Explained — World Championships",
    tagline: 'Year-end championships that crown the best horses across every division.',
    summary:
      "The Breeders' Cup is a series of championship Thoroughbred races held over two days each autumn, bringing together the best horses in the world across age groups, sexes, distances, and surfaces. This guide explains what it is and why it matters.",
    sections: [
      {
        heading: "What the Breeders' Cup is",
        body: [
          "The Breeders' Cup World Championships is an end-of-season event made up of more than a dozen championship races, run over two days (typically the first weekend of November). Unlike the Triple Crown, it is open to horses of different ages and is held at a different host track most years.",
          'Each race is a championship for its division — for example, the Breeders’ Cup Classic is the marquee race for the best older dirt horses, while the Breeders’ Cup Turf, Sprint, Mile, Distaff, and Juvenile crown champions in their respective categories.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          "Because it gathers the best horses from North America, Europe, Japan, and beyond, the Breeders' Cup often decides year-end championship honors (such as American Horse of the Year) and is a major influence on a stallion or broodmare's future value at stud.",
          'For fans it is one of the few occasions where international stars meet on the same cards, making it a high point of the racing calendar alongside the spring classics.',
        ],
      },
    ],
    essentials: [
      'A series of championship races, not a single race',
      'Held over two days each autumn (usually early November)',
      'Open to different ages, sexes, distances, and surfaces',
      "The Breeders' Cup Classic is the marquee race",
      'Host track rotates most years',
      'Often decides year-end championship honors',
    ],
    faq: [
      {
        question: "What is the Breeders' Cup?",
        answer:
          "The Breeders' Cup is a two-day series of championship Thoroughbred races held each autumn that brings together the best horses in the world across multiple divisions, crowning champions by age, sex, distance, and surface.",
      },
      {
        question: "How is the Breeders' Cup different from the Triple Crown?",
        answer:
          "The Triple Crown is three races for three-year-olds in the spring. The Breeders' Cup is a year-end series of many championship races open to horses of all ages, run over two days in the autumn, usually at a different host track each year.",
      },
      {
        question: "What is the most important Breeders' Cup race?",
        answer:
          "The Breeders' Cup Classic is generally considered the marquee event — a championship for the best older horses on dirt, and frequently a deciding factor in American Horse of the Year voting.",
      },
    ],
    references: [
      { label: "Breeders' Cup (official)", url: 'https://www.breederscup.com' },
      { label: 'National Thoroughbred Racing Association (NTRA)', url: 'https://www.ntra.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['triple-crown', 'bloodstock-and-breeding'],
  },
  {
    slug: 'famous-racehorses',
    name: 'Famous Racehorses in History',
    category: 'Understanding the Sport',
    metaTitle: 'Famous Racehorses in History — Secretariat & More',
    tagline: 'The legends whose names outlived their racing days.',
    summary:
      'A handful of racehorses transcended the sport to become cultural icons. This guide profiles some of the most celebrated Thoroughbreds in history — Secretariat, Man o’ War, Seabiscuit, and recent Triple Crown winners — and explains why they are remembered.',
    sections: [
      {
        heading: 'Secretariat (1970–1989)',
        body: [
          'Secretariat won the 1973 Triple Crown and is often cited as the greatest racehorse in history. His thirty-one-length victory in the Belmont Stakes — still the record margin for the race — and his track records in all three Triple Crown races, several of which still stand, made him a national celebrity.',
          'Nicknamed "Big Red," he appeared on the covers of Time, Newsweek, and Sports Illustrated in the same week, a level of mainstream fame rare for any athlete, let alone a horse.',
        ],
      },
      {
        heading: 'Man o’ War (1917–1947)',
        body: [
          'Racing just after World War I, Man o’ War won twenty of his twenty-one starts and is frequently ranked alongside Secretariat among the greatest of all time. He became one of the most influential sires in the breed’s history, shaping pedigrees for generations.',
        ],
      },
      {
        heading: 'Seabiscuit (1933–1947)',
        body: [
          'Seabiscuit was an undersized, unlikely champion whose come-from-behind success during the Great Depression made him a symbol of hope, later popularized by a best-selling book and film. His 1938 match race against Triple Crown winner War Admiral was one of the most famous events in American sports of its era.',
        ],
      },
      {
        heading: 'Modern champions',
        body: [
          'After a thirty-seven-year drought, American Pharoah completed the Triple Crown in 2015, and Justify followed in 2018 — both reigniting mainstream interest in the sport. These recent champions, along with stars like Zenyatta and Cigar in earlier decades, show that the sport still produces horses capable of capturing a wide audience.',
        ],
      },
    ],
    essentials: [
      'Secretariat — 1973 Triple Crown; record-setting and still-standing times',
      'Man o’ War — 20 wins in 21 starts; foundational sire',
      'Seabiscuit — Depression-era underdog icon',
      'American Pharoah (2015) & Justify (2018) — modern Triple Crown winners',
      'Fame tied to performance, story, and cultural moment',
    ],
    faq: [
      {
        question: 'Who is the greatest racehorse of all time?',
        answer:
          'Secretariat is the most common answer, widely cited for his 1973 Triple Crown and his record times in all three races — including a thirty-one-length Belmont victory. Man o’ War is also frequently named among the greatest. Such rankings are matters of informed opinion, not settled fact.',
      },
      {
        question: 'Why is Secretariat so famous?',
        answer:
          'Secretariat won the 1973 Triple Crown after a 25-year drought, set track records that in several cases still stand, and won the Belmont Stakes by an astonishing thirty-one lengths — achievements that made him a mainstream celebrity beyond the sport.',
      },
      {
        question: 'Who were the most recent Triple Crown winners?',
        answer:
          'American Pharoah won the Triple Crown in 2015 and Justify won it in 2018. They were the first winners since Affirmed in 1978.',
      },
    ],
    references: [
      { label: 'National Museum of Racing and Hall of Fame', url: 'https://www.racingmuseum.org' },
      { label: 'Triple Crown of Thoroughbred Racing (official)', url: 'https://www.triplecrownracing.com' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['triple-crown', 'kentucky-derby'],
  },
  {
    slug: 'racehorse-aftercare',
    name: 'What Happens to Racehorses After Racing',
    category: 'Ownership & Breeding',
    metaTitle: 'Racehorse Aftercare & Retirement Explained',
    tagline: 'Second careers, retraining, and the aftercare movement.',
    summary:
      'Thoroughbreds typically race for only a few years, leaving most of their lives ahead of them. This guide explains what happens to racehorses after their racing careers — retraining for second careers, accredited aftercare, and how prospective owners can adopt an off-track Thoroughbred.',
    sections: [
      {
        heading: 'Why aftercare matters',
        body: [
          'A racehorse\'s competitive career is short — many retire from racing by age four to seven, yet a healthy horse can live into its late twenties or beyond. That leaves the majority of a horse\'s life to be lived after the track, which is why responsible aftercare has become a central focus of the modern industry.',
          'Over the past two decades the sport has built a formal aftercare infrastructure to ensure retiring racehorses transition to good homes and second careers rather than falling through the cracks.',
        ],
      },
      {
        heading: 'Second careers for off-track Thoroughbreds',
        body: [
          'Off-track Thoroughbreds (often abbreviated "OTTBs") are prized in many equestrian disciplines. With retraining, they commonly go on to eventing, show jumping, dressage, fox hunting, trail and pleasure riding, and therapeutic-riding programs. Their athleticism, work ethic, and trainability make them versatile sport and pleasure horses.',
          'Retraining typically involves letting the horse decompress from racing fitness, addressing any soundness issues, and slowly introducing the cues and gaits of its new discipline. Organizations such as the Retired Racehorse Project promote this transition, including through the Thoroughbred Makeover competition.',
        ],
      },
      {
        heading: 'Accredited aftercare',
        body: [
          'The Thoroughbred Aftercare Alliance (TAA) accredits and funds aftercare organizations across North America, setting standards for the care, rehabilitation, retraining, and rehoming of retired racehorses. Many racetracks, owners, and breeders now contribute to aftercare funding.',
          'Adopting through an accredited organization gives a prospective owner confidence that the horse has been evaluated and cared for to a recognized standard, with honest disclosure of soundness and temperament.',
        ],
      },
      {
        heading: 'Adopting an off-track Thoroughbred',
        body: [
          'Prospective owners can adopt an OTTB through accredited aftercare and adoption organizations. As with any horse purchase, a pre-adoption veterinary exam and an honest assessment of your own riding level and goals are essential — racing puts specific wear on a horse, and a good match depends on matching the horse\'s soundness and temperament to its new job.',
          'An OTTB can be an exceptional and affordable partner for the right owner, but it is best approached with a knowledgeable trainer, especially for a first-time owner unfamiliar with retraining.',
        ],
      },
    ],
    essentials: [
      'Racehorses often retire by age 4–7 but can live into their late twenties',
      'Off-track Thoroughbreds ("OTTBs") retrain for eventing, jumping, dressage, trail, and more',
      'The Retired Racehorse Project runs the Thoroughbred Makeover',
      'The Thoroughbred Aftercare Alliance (TAA) accredits & funds aftercare orgs',
      'Adopt through accredited organizations; always do a pre-adoption vet exam',
    ],
    faq: [
      {
        question: 'What happens to racehorses when they retire?',
        answer:
          'Most retired racehorses are retrained for second careers in disciplines such as eventing, show jumping, dressage, and pleasure riding, or are rehomed through accredited aftercare organizations. A healthy Thoroughbred can live for decades after its racing career ends.',
      },
      {
        question: 'What is an OTTB?',
        answer:
          'OTTB stands for "off-track Thoroughbred" — a Thoroughbred that has retired from racing and is being retrained for, or has transitioned to, a second career as a sport or pleasure horse.',
      },
      {
        question: 'Can you adopt a retired racehorse?',
        answer:
          'Yes. Prospective owners can adopt retired racehorses through accredited aftercare and adoption organizations. As with any horse, a pre-adoption veterinary exam and an honest match of the horse\'s soundness and temperament to your goals are essential.',
      },
    ],
    references: [
      { label: 'Thoroughbred Aftercare Alliance (TAA)', url: 'https://thoroughbredaftercare.org' },
      { label: 'Retired Racehorse Project', url: 'https://www.therrp.org' },
    ],
    relatedBreeds: ['thoroughbred'],
    relatedTopics: ['racehorse-ownership', 'how-horse-racing-works'],
  },
];

export function allRacingSlugs(): string[] {
  return racingTopics.map((t) => t.slug);
}

export function getRacingTopic(slug: string): RacingTopic | undefined {
  return racingTopics.find((t) => t.slug === slug);
}

/** Topics grouped by sub-theme, in canonical category order. */
export function racingTopicsByCategory(): Array<{ category: RacingCategory; topics: RacingTopic[] }> {
  return RACING_CATEGORY_ORDER.map((category) => ({
    category,
    topics: racingTopics.filter((t) => t.category === category),
  })).filter((g) => g.topics.length > 0);
}
