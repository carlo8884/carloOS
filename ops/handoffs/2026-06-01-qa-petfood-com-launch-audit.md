---
from: QA-subagent
to: CSRO
site: petfood-com
status: complete
created: 2026-06-01
next_action: triage P0 launch-blockers (metadata-policy red; empty Nav/Footer)
---

# PetFood.com — Launch-Quality Audit (COO+QA lane, read-only)

Audited `apps/petfood-com` only. Route tree: **102 page routes** across 13 hub
sections (brands, compare, conditions, diets, feeding, guides, ingredients,
life-stage, myths, nutrition, species, supplements, tools) + legal/disclosure +
1 tool + 1 redirect. Evidence cited inline; all findings come from files read,
not inference.

PetFood.com positions as an independent food **scoring/comparison product**
("Consumer Reports of pet food"), not a blog. Audited against that identity.

---

## 1. CI gates (§8a launch-quality bar)

| Gate | Result | Notes |
|---|---|---|
| `link-check.mjs` | **GREEN** | `## petfood-com: clean` — 0 broken internal links portfolio-wide |
| `trust-guard.mjs` | **GREEN** | No petfood-com findings |
| `metadata-policy.mjs` | **RED (exit 1)** | `[missing-title] /methodology` — petfood-com is `enforce: true` (scripts/ci/metadata-policy.mjs:37), so this single issue makes the whole gate FAIL |

**P0 — metadata-policy is RED.** `apps/petfood-com/src/app/methodology/page.tsx`
is a redirect-only page (`redirect('/guides/methodology')`, lines 6-8) with no
`buildMetadata` export. The metadata scanner (`scripts/ci/metadata-policy.mjs`)
has no exception for redirect-only pages — it only skips `[slug]` and `/admin`
(line ~119) — so it logs `missing-title` and `process.exit(1)`. The redirect
**works correctly at runtime** and the task's concern ("/methodology should
redirect to /guides/methodology") is satisfied; the sitemap correctly lists the
canonical `/guides/methodology` and NOT `/methodology` (sitemap.ts:19). This is a
**harness false-positive**, but it still leaves a §8a gate red, which blocks
launch. The same pattern exists at `apps/fish-com/src/app/calculators/page.tsx`
(the only other redirect-only page in the portfolio), so the fix belongs in the
harness, not the page.
- **Fix owner: COO (owns `scripts/ci/*`).** Make `metadata-policy.mjs` skip
  pages whose source matches `redirect(` (treat as intentional non-indexable),
  mirroring how it already skips `[slug]`/`/admin`. Do NOT add metadata to the
  redirect page (that would make Next emit a real titled document at a URL meant
  only to 308).
- File refs: `scripts/ci/metadata-policy.mjs:37` (enforce:true),
  `:119` (skip list), `:140` (missing-title push), `:229-232` (exit 1).

---

## 2. Trust-bar (QC §1) — CLEAN

No violations found. Scan covered scope-overclaims, first-person lab/feeding
claims, and fabricated credentials.

- **"score every" regression check: PASS.** Homepage now reads "we **score
  commercial pet foods** on AAFCO completeness…" (`src/app/page.tsx:183-184`).
  No "score every / all / complete database / the only" fabricated-scope claims
  anywhere. The recurring phrase "every brand and formula **reviewed on this
  site**" (page.tsx:246; guides/methodology/page.tsx:40; guides/page.tsx:26) is
  correctly scoped to on-site content — literally true, not an overclaim.
- **"the only" usages are factual, not scope-fabrication:** e.g.
  `diets/food-allergy-and-elimination-diets/page.tsx:87` ("the only reliable
  diagnostic is a strict elimination-diet trial"),
  `nutrition/dry-matter-basis-explained/page.tsx:82`. All are domain facts.
- **No first-person lab/feeding-trial claims.** Supplement pages proactively
  disclaim them ("The picks below reflect that filter, **not a hands-on
  trial**" — supplements/glucosamine…/page.tsx:101, probiotics…:101, skin-and-
  coat…:101). "hands-on assessment" at feeding/body-condition-scoring/page.tsx:83
  describes the vet BCS technique, not first-person work.
- **No fabricated DVM/nutritionist bylines.** "board-certified veterinary
  nutritionist" appears only as *advice to consult one* / WSAVA criteria (e.g.
  guides/how-to-choose-a-pet-food/page.tsx:87, conditions/page.tsx:296), never
  as an author credential. Bylines stay generic.
- Homepage editorial disclosure is present and above the email capture
  (page.tsx:345-376); Footer renders with `showAffiliateDisclosure`
  (layout.tsx:93).

---

## 3. The scoring engine / compare-foods tool — EXISTS, but BURIED (P1)

- **The interactive tool exists and works.** `FoodCostCalculator`
  (`src/components/visual/FoodCostCalculator.tsx`, 183 lines) is a real client
  component: `useState` inputs (cups/day, bag lb, price), a `compute()` function
  (cost per cup/day/month/year, days-per-bag), and a working side-by-side
  `compareMode`. Surfaced at `/tools/food-cost-calculator` with HowTo +
  SoftwareApplication JSON-LD (tools/food-cost-calculator/page.tsx:23-70). NOTE:
  this file is **Visual-lane** — flagged for awareness only; not edited.
- **The "scoring engine" is editorial, not interactive.** The five-dimension
  rubric (AAFCO completeness, ingredient sourcing, manufacturing, recall history,
  feeding-outcome literature) is published at `/guides/methodology` and rendered
  as a static list on the homepage (page.tsx:57-92, 234-299). There is **no
  interactive "score/compare two foods" product** — `/compare/*` pages are
  editorial comparison articles (fresh-vs-kibble, etc.), and `/brands/*` are
  static evaluation write-ups. For a site whose identity is "scoring product,"
  the product is currently a *rubric you read*, not a *tool you use*. Acceptable
  for launch, but the gap between the positioning and the surface is real.
- **Homepage does NOT surface the tool or the scoring product on the first/
  second screen (P1).** Full homepage outbound links: methodology (x2),
  reading-labels (x2), `/brands/orijen-vs-acana-comparison`,
  `/ingredients/grain-free-dcm-risk`, `/guides/aafco-completeness-explained`,
  `/life-stage`. **The cost calculator (`/tools/food-cost-calculator`) and the
  `/compare` and `/brands` hubs appear nowhere on the homepage.** First screen is
  hero + trust bar + static rubric list — it reads as a *methodology manifesto*,
  not a *scoring/comparison product you can act on*. The signature interactive
  asset is three clicks deep.

---

## 4. Route tree, orphans, hubs, thin/duplicate pages

**Hub inbound-link counts (reachability from other pages):**

| Hub | Inbound pages | Status |
|---|---|---|
| /nutrition | 49 | strong |
| /guides | 35 | strong |
| /diets | 35 | strong |
| /feeding | 33 | strong |
| /ingredients | 28 | strong |
| /compare | 23 | strong |
| /myths | 14 | ok |
| /supplements | 13 | ok |
| /species | 11 | ok |
| /tools | 10 | ok |
| /life-stage | 9 | ok |
| **/conditions** | **3** | **weak — near-orphan (P1)** |
| **/brands** | **2** | **weak — near-orphan (P1)** |

- **P1 — `/brands` is near-orphaned (2 inbound).** For a "scoring product," the
  brand database should be a primary hub. It's reachable mainly from the
  cost-calculator sidebar `RelatedLinks` and one homepage card pointing at a
  *single* brand comparison, not the hub. The 7 brand pages
  (blue-buffalo, hills-vs-royal-canin, kirkland, orijen-vs-acana, purina,
  taste-of-the-wild, wellness-vs-merrick) lean on the weak hub.
- **P1 — `/conditions` is near-orphaned (3 inbound)** — only the cost-calculator
  sidebar and internal self-links. The conditions hub itself links *out* only to
  guides + life-stage (conditions/page.tsx), not to its sibling `/diets`.
- **P1 — duplicate/competing therapeutic-diet systems (`/conditions/[slug]` vs
  `/diets/*`).** Two parallel structures cover the same conditions with **no
  cross-linking**:
  - `/conditions/[slug]`: food-allergies, kidney-disease, weight-management,
    urinary-stones, gastrointestinal (conditions/[slug]/page.tsx `PER` map).
  - `/diets/*`: kidney-disease-diets, weight-management-diets, urinary-tract-
    diets, food-allergy-and-elimination-diets, fiber-and-digestive-health,
    pancreatitis-low-fat-diets, diabetic-diets, etc.
  - Near-duplicate titles, e.g. conditions slug "Kidney Disease Diets — CKD
    Renal Nutrition | PetFood.com" vs diets page "Kidney Disease (Renal) Diets
    for Dogs and Cats | PetFood.com." Not an *exact* dup-title (so
    metadata-policy doesn't flag it), but it's semantic cannibalization for the
    same queries. `conditions/[slug]` does NOT link to the matching `/diets/*`
    page and vice-versa (verified: 0 cross-links). Decide which is canonical and
    cross-link/consolidate before launch.
- No thin pages observed: spot-checked pages carry substantive editorial bodies
  (e.g. tools hub has 3 full explanatory sections, calculator page has FAQ +
  methodology + limits).
- Sitemap + robots present and generated (`sitemap.ts`, `robots.ts`); sitemap is
  canonical and excludes the `/methodology` redirect. Good.

---

## 5. Breadcrumbs + JSON-LD coverage — EXCELLENT

Audited all 102 page files for breadcrumbs (`breadcrumbs=` /
`buildBreadcrumbSchema` / `BreadcrumbList`) and structured data (`SchemaScript` /
`build*Schema` / `application/ld+json`):

- **100 of 102 content pages have BOTH breadcrumb + JSON-LD.** No gaps.
- `/` (homepage) — no breadcrumb (correct; root) + has Organization + WebSite
  schema (page.tsx:39-42). Correct.
- `/methodology` — no breadcrumb/schema, because it's the redirect stub
  (expected; see §1). Not a content page.

No action needed on schema/breadcrumb coverage. This is launch-ready.

---

## 6. Internal nav (Nav / Footer) — BROKEN (P0)

**P0 — petfood-com Nav and Footer contain ONLY "Home".**
`packages/config/index.ts:897-907`:
```
nav: [ { label: 'Home', href: '/' } ],
footerLinks: [ { heading: 'PetFood.com', links: [ { label: 'Home', href: '/' } ] } ],
```
A 102-page site with 13 hubs ships with **zero global navigation to any hub.**
Compare ferret-com (same file, :924-948) which has a full nav (Health, Care,
Behavior, Colors, Diet, Ownership, Tools) + matching footer. petfood-com was
never populated.

- Consequence: every hub (brands, compare, conditions, diets, ingredients,
  nutrition, supplements, species, myths, life-stage, tools…) is unreachable
  from the global nav. The homepage body links to only ONE hub (`/life-stage`)
  plus a few deep articles. Users landing on any interior page have no top-level
  path to the rest of the site. This is the single largest "feels incoherent /
  feels like a pile of pages, not a product" defect.
- link-check stays GREEN because the one nav link (`/`) resolves — link-check
  validates link *targets*, not hub *coverage*, so it cannot catch this.
- **Fix owner: COO** (`packages/config/index.ts` is COO lane;
  Nav/Footer structural changes coordinate per CLAUDE.md §5). Populate `nav` +
  `footerLinks` with the real hubs. Suggested nav ordering reflecting the
  scoring-product identity: **Brands · Compare · Ingredients · Nutrition ·
  Diets · Feeding · Tools · Methodology(/guides/methodology)**. Footer can carry
  the long tail (myths, species, supplements, conditions, life-stage, guides,
  legal, disclosure, editorial-standards).

---

## 7. First-screen read — reads as a manifesto, not a product (P1)

Above the fold (`src/app/page.tsx`): eyebrow → "PetFood.com" wordmark → italic
tagline "The independent reference for pet food." → positioning paragraph → two
CTAs ("How we score" → /guides/methodology, "Read the label" →
/guides/reading-pet-food-labels). Second screen: ingredient hero image slot +
dark trust bar + static 5-dimension rubric list.

Verdict: it reads like an **independent-reference editorial manifesto**, which is
on-brand for the "Consumer Reports" voice, but it does **not** read like a
*scoring/comparison PRODUCT you can use*. There is no scorecard preview, no
"compare two foods" entry, no brand-database entry, and no calculator on the
first two screens. A first-time visitor cannot tell that an interactive tool or
a brand database exists. For the stated identity, the first screen should expose
the product surface (a scored example, a compare entry, or the calculator), not
only the rubric philosophy. P1 polish, not a launch-blocker on its own — but it
compounds with §6 (no nav) to make the product invisible.

---

# P0 LAUNCH-BLOCKERS

1. **metadata-policy.mjs is RED (exit 1)** — `[missing-title] /methodology`
   redirect stub trips the enforced gate. Fix in `scripts/ci/metadata-policy.mjs`
   by skipping redirect-only pages (COO lane). Redirect itself works; do not add
   metadata to the stub. (§1)
2. **Empty global navigation** — `packages/config/index.ts:897-907`: Nav and
   Footer have only "Home." 13 hubs unreachable from the chrome. Populate hubs
   (COO lane). (§6)

# P1 / P2 POLISH BACKLOG

- **P1** Surface the product on the homepage first/second screen: add the
  `/tools/food-cost-calculator`, `/brands`, and `/compare` entry points; consider
  a scored-example preview. (§3, §7)
- **P1** Resolve `/conditions/[slug]` vs `/diets/*` duplication: pick canonical,
  cross-link the two systems, de-cannibalize near-duplicate titles
  (kidney/weight/urinary/GI/allergy). (§4)
- **P1** Strengthen `/brands` (2 inbound) and `/conditions` (3 inbound) hub
  reachability — add inbound links from related nutrition/diet/compare pages and
  from the homepage. (§4)
- **P2** Consider whether the "scoring engine" should become an actual
  interactive scorer (vs published rubric only) to match the product positioning
  — strategic call for CSRO, not a launch gate. (§3)
- **P2** `/methodology` redirect: once metadata-policy is patched, confirm the
  308 still resolves in a built env (works in source today). (§1)

# Out-of-lane (flagged, NOT touched)
- `FoodCostCalculator.tsx` lives under `src/components/visual/` — Visual lane.
- `/go/[vendor]/[sku]/route.ts`, affiliate config in config block, email
  sequences — Monetization lane. No edits made; audit-only.
