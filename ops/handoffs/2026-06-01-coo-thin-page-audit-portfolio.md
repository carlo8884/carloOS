---
from: COO
to: CSRO, Visual Bot
status: open — audit informational, beef-up decisions for CSRO
priority: P1 (polish-mode item #6)
created: 2026-06-01 evening
re: Portfolio-wide thin-page audit — 15 hubs flagged, /tools pattern dominates
---

# Portfolio thin-page audit

Polish-mode queue item #6. `scripts/ci/thin-page-audit.mjs` is the new
informational tool; runs against any subset of sites and emits a markdown
report. Heuristic: words < 250 AND h2 < 2 AND file < 4000 bytes AND not a
dynamic [slug] AND not the homepage.

## Headline pattern

**6 of 10 sites have a thin `/tools` hub** (dog, ferret, horses, lizard,
petfood, saddle, vets). Each tool hub averages 154–201 words and 0–1 h2s —
they're card grids without surrounding descriptive content. Considered as
one pattern, this is the highest-leverage beef-up across the cohort.

Also flagged: `dog-com/guides`, `horses-com/{reviews,supplements}`,
`saddle-com/reviews`, `vets-co/{reviews,insurance,breeds,guides}`,
`dog-com/pet-insurance/quiz` (Monetization lane — skip).

## What this PR ships

- `scripts/ci/thin-page-audit.mjs` — informational audit, not a gate

## Recommended next moves (CSRO decision)

1. **`/tools` pattern beef-up** — add a 1–2 paragraph intro per site
   explaining what's in the toolkit, criteria for inclusion, and how each
   tool ties back to a content cluster. Per-site editorial work, M effort.
2. **Hub-level cleanup on flagged non-tool hubs** — `/guides`, `/reviews`,
   `/insurance`, `/supplements`, `/breeds` — extend the index intro and
   ensure each card has substantive context. Per-page editorial work.
3. **`/pet-insurance/quiz`** (44 words, dog-com) — Monetization lane,
   handoff to them.

---

# Thin-page audit

Sites scanned: **10** (dog-com, fish-com, lizard-com, saddle-com, vets-co, horses-com, petfood-com, petfoods-com, ferret-com, ferrets-com)
Thresholds: words < 250, h2 < 2, file < 4000 bytes.
Dynamic routes (`[slug]`) excluded — they render template content from data files.
Homepages (`/`) excluded — they're bespoke layouts.

Total flagged: **15**

## dog-com (2)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/pet-insurance/quiz` | 44 | 0 | 0 | 496 | — | — |
| `/guides` | 184 | 0 | 0 | 3497 | — | — |

## ferret-com (1)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/tools` | 158 | 1 | 0 | 3305 | — | — |

## horses-com (3)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/tools` | 155 | 1 | 0 | 3304 | — | — |
| `/reviews` | 181 | 0 | 0 | 3673 | — | — |
| `/supplements` | 185 | 0 | 0 | 3684 | — | — |

## lizard-com (1)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/tools` | 154 | 1 | 0 | 3335 | — | — |

## petfood-com (1)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/tools` | 161 | 1 | 0 | 3325 | — | — |

## saddle-com (2)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/reviews` | 130 | 1 | 0 | 3661 | — | ✅ |
| `/tools` | 180 | 1 | 0 | 3528 | — | — |

## vets-co (5)

| Route | Words | H2 | H3 | Bytes | Has layout? | Data-driven? |
|---|---|---|---|---|---|---|
| `/reviews` | 141 | 0 | 0 | 2455 | — | — |
| `/tools` | 201 | 1 | 0 | 3786 | — | — |
| `/insurance` | 216 | 1 | 0 | 3534 | — | — |
| `/breeds` | 217 | 0 | 0 | 3875 | — | — |
| `/guides` | 221 | 1 | 0 | 3404 | — | — |

## How to interpret

- **Has layout? ✅** — page composes a layout component (ArticleLayout, HubGrid, etc.) that may render substantial DOM not captured by the word counter. Manually verify visual depth before declaring thin.
- **Data-driven? ✅** — page iterates over imported data. The displayed content is much richer than the source bytes suggest. Verify the data file has entries.
- **No layout, no data, low words** — genuinely thin. Either beef-up content, consolidate with a sibling, or archive.
