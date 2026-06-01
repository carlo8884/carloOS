---
from: QA-subagent
to: CSRO
site: lizard-com
status: complete
created: 2026-06-01
---

# Lizard.com — Launch-Quality QA Audit

Read-only COO+QA audit. No files changed. All refs are exact paths/routes.

## Summary verdict

Content quality and trust posture are strong; the site reads as a genuine, source-first
dark-mode field guide. **The site is NOT launch-ready** because the signature product (the
calculators) is effectively unreachable, the enclosure-size calculator does not exist, and a
stale sitemap hides ~35 real pages. These are linking/SEO defects, not trust defects.

- CI: `link-check`, `metadata-policy`, `trust-guard` — **all three report `lizard-com: clean`**.
- Trust (QC §1): **clean.** No fabricated DVM bylines, no first-person hands-on claims, drug
  names framed as vet-administered reference content. No launch blocker here.
- Launch blockers are all P0 internal-linking / signature-tool / sitemap issues below.

---

## 1. CI gate results

Ran all three from repo root:
- `node scripts/ci/link-check.mjs` → `## lizard-com: clean`; global `PASS: 0 broken internal links`.
- `node scripts/ci/metadata-policy.mjs` → `## lizard-com: clean`.
- `node scripts/ci/trust-guard.mjs` → `## lizard-com: clean`.

Note: `/husbandry/uvb-lighting` is referenced from the UVB calculator page
(`src/app/tools/uvb-distance-calculator/page.tsx:146,229`). It is NOT a dead link —
it resolves via `src/app/husbandry/[slug]/page.tsx` (slug `uvb-lighting` exists in
`src/data/husbandry-topics.ts:80`). Confirmed; not an issue.

## 2. Trust / QC §1 — CLEAN (no launch blocker)

- **Bylines:** every `authorName` is `'Lizard.com Editorial'` (avatar `🦎` / `LZ`). No fabricated
  DVM/VMD credentials anywhere. Confirmed across species, health, husbandry, builds, states,
  reviews schemas.
- **Scope honesty:** `src/app/editorial-standards/page.tsx:34` explicitly disclaims in-house
  testing ("We don't claim hands-on testing we haven't done... rather than a controlled in-house
  test rig"). Reviews (`src/app/reviews/best-uvb-bulbs/page.tsx:51`) draw on *published* Solarmeter
  measurements "rather than manufacturer claims" — no first-person "we tested" claims.
- **Clinical/medicated content:** health pages name drugs (enrofloxacin/Baytril, fenbendazole/
  Panacur, metronidazole, azithromycin, calcium gluconate) but consistently in a descriptive,
  vet-administered frame — e.g. `src/app/health/stomatitis/page.tsx:35` ("a reptile veterinarian
  will... administer systemic antibiotics"), `src/app/health/hypocalcemia/page.tsx:51` ("Parenteral
  calcium administered by a veterinarian"). `src/app/health/[slug]/page.tsx:443` carries an explicit
  CalloutBox: "This is reference content, not a prescription... Confirm any drug or dose with a
  reptile veterinarian." No keeper-administered mg/kg dosing instructions. **No overreach. Passes.**
- **Photo attribution:** Unsplash credit strip present on homepage (`src/app/page.tsx:732-758`),
  TOS-compliant.

## 3. Global nav / footer (`packages/config/index.ts` lizard-com block, lines 790-841)

**Nav (lines 803-808) — 4 entries, no Tools:**
- Species Guides → `/species`
- Reptile Health → `/health/sick-reptile-signs` (points to a spoke article, not the `/health` hub)
- Enclosure Setup → `/setup`
- Reviews → `/reviews`

**Footer (lines 809-839) — 3 columns:**
- Species: Bearded Dragon, Leopard Gecko, Ball Python, Crested Gecko, All Species
- Setup: UVB Lighting, Temperature, Humidity, Substrate, Bioactive Setup
- Reviews: UVB Bulbs, Terrariums, Thermostats, All Reviews

**Gap:** Nav and footer contain **no link to `/tools`, `/states`, `/husbandry`, `/data`, or
`/first-year-care-schedule`.** The signature calculators and the entire state-legality directory
have no global entry point. (P0/P1 below.)

## 4. Signature product — calculators

- **UVB Distance Calculator: EXISTS and works.** Route `/tools/uvb-distance-calculator`
  (`src/app/tools/uvb-distance-calculator/page.tsx`); component
  `src/components/visual/UvbDistanceCalculator.tsx`. Sound inverse-square model
  (`baseUviAt12in * (12/d)^2 * screenFactor`), 19 species mapped to Ferguson Zones, 8 bulb
  classes, screen attenuation, glass→0 special case, sensible verdict bands. Carries `HowTo` +
  `SoftwareApplication` JSON-LD, breadcrumbs, FAQ schema, full sources (Ferguson 2010, Baines
  2016, Mader). High-quality, citation-worthy. **Functionally launch-grade.**
- **Enclosure-size calculator: DOES NOT EXIST.** The tools hub (`src/app/tools/page.tsx:12-19`)
  lists only one tool. No enclosure/vivarium-size calculator route exists. The brief names this as
  a co-signature tool; `vivarium-sizing` exists only as prose (`src/data/husbandry-topics.ts`),
  not as an interactive calculator. **P0 gap vs. stated site identity.**
- **First/second screen placement: FAILS.** `src/app/page.tsx` never links to `/tools` or either
  calculator anywhere on the homepage. The "UVB Reference" category card (line 149-153) points to
  the *article* `/setup/uvb-lighting-guide`, not the calculator. The signature interactive product
  is below zero screens — it is not on the homepage at all. **P0.**
- Note: `UvbDistanceCalculator.tsx` lives under `src/components/visual/` (Visual lane). Did not
  modify. Flagging only that the lane placement is unusual for a logic component; not a blocker.

## 5. Route tree, orphans, hubs, thin/dup

**Route tree (97 static `page.tsx` + dynamic):** hubs `/species` `/setup` `/health` `/reviews`
`/husbandry` `/states` `/tools` `/builds` `/data`; dynamic `/species/[slug]` `/health/[slug]`
`/husbandry/[slug]` `/builds/[slug]` `/states/[state]`; data-driven counts — conditions 18,
state laws 103, vivarium builds 8.

**Orphans (0 internal incoming links; reachable only via sitemap):**
- `/tools` and `/tools/uvb-distance-calculator` — **signature product, 0 incoming links. P0.**
- `/states` — state-legality directory (103 jurisdictions), **0 incoming links. P1.**
- `/data` — 0 incoming links. P2.
- `/first-year-care-schedule` — 0 incoming links (homepage "First-Year Care" card instead points
  to `/setup`, `src/app/page.tsx:164`). P1.
- `/husbandry` — only 2 incoming links; weak hub integration given 10 husbandry topics. P2.

**Hub-pointer issues:**
- Homepage "Health" card → `/health/metabolic-bone-disease` (a spoke), not the `/health` hub
  (`src/app/page.tsx:146`). Nav "Reptile Health" → `/health/sick-reptile-signs` (also a spoke).
  The `/health` hub itself has no nav/home entry point. P2.
- Homepage "First-Year Care" card → `/setup` instead of `/first-year-care-schedule`
  (`src/app/page.tsx:164`). Mis-targeted. P1.

**Thin/dup:** no obvious thin pages observed in spot checks; species/health pages are substantive.
Potential near-duplicate route pairs to review (not confirmed dup): `/health/parasites` vs
`/health/parasites-guide`; `/species/tegu` vs `/species/argentine-black-and-white-tegu`. Recommend
CSRO confirm these are differentiated, not split-intent duplicates. P2.

## 6. Breadcrumbs, JSON-LD, sitemap, robots

**Breadcrumbs (hub pages):** present on species, setup, health, reviews, states, data.
**Missing on `/tools`, `/husbandry`, `/builds`.** P1 (tools), P2 (others).

**JSON-LD ItemList/CollectionPage on hubs:** only `/states` carries an ItemList. The **`/tools`
hub has no `ItemList` of `SoftwareApplication` items**, and no other hub (species/health/setup/
reviews/husbandry) carries CollectionPage/ItemList. GEO/AI-citation opportunity left on table;
the tools-hub ItemList is the highest-value miss given the signature calculators. P1 (tools),
P2 (other hubs). The calculator detail page itself has correct `SoftwareApplication` + `HowTo`.

**Sitemap (`src/app/sitemap.ts`): STALE — ~35 real pages missing.** Sitemap has 62 URLs; 97
static page routes exist. Missing from sitemap include 14 health pages
(abscess-treatment, anorexia-in-reptiles, calcium-d3-supplementation, constipation-impaction,
dubia-roach-care, feeder-insects-compared, feeding-frozen-thawed-rodents, gout-prevention,
gut-loading-guide, herbivore-reptile-diet, prolapse-first-aid, reptile-obesity, retained-eye-caps,
snake-mite-eradication), 2 husbandry static (brumation-guide, shedding-guide), 4 setup
(cleanup-crew-isopods-springtails, drainage-layer-bioactive, screen-vs-pvc-enclosure,
terrarium-size-guide), and 15 species pages (african-fat-tailed-gecko,
argentine-black-and-white-tegu, beginner-vs-advanced-reptiles, best-beginner-reptiles,
chinese-water-dragon, fire-skink, green-anole, kenyan-sand-boa, leachianus-gecko,
low-maintenance-reptiles, mourning-gecko, nile-monitor, reptile-buying-checklist,
reptiles-that-dont-need-uvb, western-hognose-snake). Also missing the dynamic `/states/[state]`
and `/builds/[slug]` entries. Last regenerated pre-content-wave (`f06039a5`); needs
`node scripts/regenerate-sitemaps.mjs` rerun. **Indexing-efficiency blocker. P0.**

**Robots (`src/app/robots.ts`):** present, delegates to shared `buildRobots('https://lizard.com')`.
Fine. Sitemap priorities that ARE present are sane (home 1.0, hubs 0.9, tools 0.95, spokes 0.7).

## 7. Internal nav coherence + known open items

- No broken internal links (link-check green).
- Coherence weakness is structural: signature tools + states directory are orphaned (see §5).
- **Lizard logo/wordmark (Visual lane):** noted as a known open item in the brief; not inspected/
  fixed here (out of lane). Flagging as still-open for Visual Bot.

## 8. First-screen read

**Distinctive, not generic.** The homepage hero (`src/app/page.tsx:238-405`) is a genuine
dark-mode habitat treatment: near-black field, lime-accent radial washes, grain texture, hairline
horizon, atmospheric crested-gecko hero photo with moss edge-fade, Zilla Slab display + italic
tagline ("Built on published herpetology — not pet-store folklore"), Solarmeter/ARAV trust strip.
This reads as a category-distinct field guide, not a templated article list. **Strong.** The single
first-screen miss is the absence of any calculator entry point (§4).

---

## P0 — Launch blockers

1. **Signature calculators are orphaned** — `/tools` + `/tools/uvb-distance-calculator` have 0
   internal incoming links, are absent from global nav (`packages/config/index.ts:803-808`), and
   are not linked anywhere on the homepage. The defining product is unreachable. Fix: add Tools to
   nav + a homepage entry point.
2. **Enclosure-size calculator does not exist** — site identity names UVB *and* enclosure-size
   calculators as the signature pair; only UVB exists. Either build it or CSRO re-scopes the
   site's stated signature feature set.
3. **Stale sitemap** — `src/app/sitemap.ts` omits ~35 live pages (14 health, 15 species, 4 setup,
   2 husbandry) plus dynamic state/build routes. Rerun `scripts/regenerate-sitemaps.mjs`.

## P1 — Backlog

- Add `/tools` breadcrumbs + `ItemList` of `SoftwareApplication` JSON-LD on the tools hub.
- Surface `/states` (103-jurisdiction legality directory) in nav or footer — currently orphaned.
- Fix homepage "First-Year Care" card → point to `/first-year-care-schedule`, not `/setup`
  (`src/app/page.tsx:164`); link `/first-year-care-schedule` from somewhere.
- Add a `/health` hub entry point in nav (nav currently deep-links a spoke).

## P2 — Backlog

- Add breadcrumbs to `/husbandry` and `/builds` hubs.
- Add CollectionPage/ItemList JSON-LD to species/health/setup/reviews/husbandry hubs (GEO).
- Strengthen `/husbandry` internal linking (only 2 incoming) and `/data` (0 incoming).
- CSRO confirm `/health/parasites` vs `/health/parasites-guide` and `/species/tegu` vs
  `/species/argentine-black-and-white-tegu` are differentiated, not split-intent duplicates.
- Reconsider `UvbDistanceCalculator.tsx` placement under `src/components/visual/` (logic component
  in Visual lane) — coordinate with Visual Bot, not a blocker.

## Out of scope / unresolved (no action taken)
- Lizard logo/wordmark — Visual lane, still open.
