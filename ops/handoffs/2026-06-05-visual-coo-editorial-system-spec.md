---
from: visual+coo
to: csro
status: draft
created: 2026-06-05
next_action: "COO ratifies; then phased portfolio adoption starting with Dog.com as the reference implementation"
---

# Editorial System Formalization — Level 2 Spec

**Document class:** System design / ratification brief
**Scope:** Portfolio-wide editorial presentation layer — 10 production sites
**Phase context:** Polish mode (CLAUDE.md §8a). This spec governs how existing content is *presented and credentialed*, not how much content is built.

---

## 0. Component Inventory — What Exists vs What Needs Building

This spec is grounded in a read of every component in `packages/ui/src/components/`. Status is definitive as of 2026-06-05.

### Already ships in `@carloOS/ui`

| Component | File | What it does |
|---|---|---|
| `ArticleLayout` | `ArticleLayout.tsx` | Full article scaffold: hero (eyebrow + H1 + dek), breadcrumb, body+sidebar grid, related-links footer, CrossPortfolioCard opt-in |
| `ArticleByline` | `ArticleByline.tsx` | Published/Updated timestamps + `siteName` + optional `reviewedBy` role |
| `DropCap` | `DropCap.tsx` | Drop-cap first-letter of opening paragraph; skips non-alphabetic starts |
| `PullQuote` | `PullQuote.tsx` | Three variants: `lead` (large centered display), `inline` (brand-color left-rule), `sidebar` (compact boxed) |
| `CalloutBox` | `CalloutBox.tsx` | Five variants: `warning`, `note`, `tip`, `info`, `evidence` — with inline SVG icons |
| `SourceCitation` | `SourceCitation.tsx` | Two variants: `inline` (superscript) + `block` (end-of-section citation line) |
| `ImageCard` | `ImageCard.tsx` | `<figure>` + caption + photographer credit with attribution link; `inline`, `wide`, `full-bleed` aspect variants |
| `StockImage` | `StockImage.tsx` | Manifest-driven wrapper over `ImageCard`; handles Unsplash/Pexels attribution automatically |
| `FAQAccordion` | `FAQAccordion.tsx` | Accessible accordion + FAQPage JSON-LD schema |
| `Breadcrumb` | `Breadcrumb.tsx` | Breadcrumb nav + BreadcrumbList JSON-LD |
| `TableOfContents` | `SidebarCard.tsx` | Sidebar TOC widget |
| `RelatedLinks` | `SidebarCard.tsx` | Sidebar related-links widget |
| `Nav` | `Nav.tsx` | Site-aware top nav |
| `Footer` | `Footer.tsx` | Site-aware footer with Editorial Standards + Disclosure links |

### Does NOT exist — needs building

| Component | Why needed | Priority |
|---|---|---|
| `ArticleSourcesList` | Dedicated end-of-article sources block (numbered references with `SourceCitation block` inside, header, separator) | P1 — needed for citation system |
| `EditorialStandardsSignal` | Inline "living publication" trust strip (see §5 below) for article footer | P2 |
| `ImageCaption` (standalone) | `ImageCard` covers the inside-figure case; a standalone component is needed when the caption is separate from the image slot (e.g., after a `StockImage` with a custom caption replacement) | P3 — low urgency, workaround exists |

> Note: `TableOfContents` and `RelatedLinks` live inside `SidebarCard.tsx`, not their own files. They are real and exported. They are *sidebar-only* — the end-of-article related-reading block described in §4 below uses `ArticleLayout`'s own `relatedLinks` prop and is already implemented there.

---

## 1. Headline / Eyebrow / Dek Pattern (Above-the-Fold Article Header)

### What the current system has

`ArticleLayout`'s `hero` prop already supports three sub-fields that map to this pattern:

| Prop field | Maps to editorial role |
|---|---|
| `hero.category` | Eyebrow label |
| `hero.title` | H1 headline |
| `hero.subtitle` | Dek / standfirst |

The component renders them in that order. The `category` field links to `hero.categoryHref` if supplied.

### What is inconsistent today

Observed across `dog-com`, `vets-co`, `fish-com`, `petfood-com` article pages:

- **Dek is sometimes absent.** The `subtitle` prop is optional and is skipped on many petfood-com pages (large-breed puppy page is an exception — it has a strong dek).
- **Eyebrow is sometimes generic.** "Dog Health" or "Fish Health" is used on health pages, but many nutrition and guide pages either omit it or use the same term across all articles in a cluster (every article in `/feeding/` reads "Feeding Guide" — no specificity).
- **No visual hierarchy standard.** `ArticleLayout` already specifies `clamp(28px, 4vw, 52px)` for H1 and `text-lg font-light text-white/60` for the dek. This is correct. The inconsistency is *content* (absent deks, weak eyebrows), not the component.

### The canonical above-title pattern

Every long-form editorial article (any article > ~800 words using `ArticleLayout`) MUST supply all three fields:

```
[EYEBROW]           ← category/topic label, 1–4 words, Title Case
[H1 HEADLINE]       ← direct, specific, keyword-inclusive, ≤ 12 words ideally
[DEK / STANDFIRST]  ← 1–3 sentences; answers "what will I learn?"; 25–60 words
```

**Scale relationship (site-agnostic principle):**
Magazine-grade hierarchy means the display headline reads at roughly 2.5–4× the body text size at desktop. The dek reads at roughly 1.1–1.3× body (slightly larger than body, lower contrast). Body text is the baseline. `ArticleLayout` already hits this with `clamp(28px,4vw,52px)` for the H1, `text-lg` for the dek, and `text-base`/`prose` for the body — the implementation is correct; the usage is not.

**Eyebrow taxonomy (enforced per cluster):**

| Cluster type | Eyebrow convention | Example |
|---|---|---|
| Health condition | `[Species] Health` | "Dog Health", "Fish Health" |
| Nutrition / Feeding | `Nutrition` or `Feeding Guide` | "Feeding Guide", "Nutrition Reference" |
| Veterinary guide (Vets.co) | `Veterinary Guide` | "Veterinary Guide" |
| Breed / Species | `[Species] Profile` | "Breed Profile", "Species Guide" |
| How-to / Care | `Care Guide` | "Care Guide" |
| Review / Comparison | `Buyer's Guide` or `Product Review` | "Buyer's Guide" |
| Site-wide reference (Ferrets.com legality) | `State Guide` | "State Guide" |

No site may use a fabricated authority signal as an eyebrow (e.g., "Vet-Reviewed Guide", "Expert-Tested"). See QC-STANDARDS.md §1.1.a.

**Dek writing standard:**
- Leads with the user's central question or the content's key fact
- Does not repeat the H1 verbatim
- Does not begin with "In this article" — state the value directly
- If the article supports AI Overviews or Perplexity citation, the dek should be directly extractable as a one-paragraph answer

---

## 2. Article Craft Elements — When, Where, How

### 2.1 DropCap

**Use on:** The opening paragraph of any long-form article (> ~800 words) that begins with a full paragraph of editorial prose — not a callout box, not a list.

**Do not use on:** pages where the first content element is a `CalloutBox`, pages that open with a definition list, or very short articles.

**One per article.** Never on H2-level section openers. The `DropCap` component handles non-alphabetic starts gracefully (falls through to a plain paragraph).

**Observation:** Dog.com health pages (e.g., dog-arthritis) use `DropCap` on the opening paragraph of the first H2 section — this is incorrect positioning. The DropCap belongs on the article's true first body paragraph, which in `ArticleLayout` is the first child below `ArticleByline`. It should not reset at each H2.

**Standard position:**
```
<ArticleByline ... />
<DropCap>First body paragraph of the article...</DropCap>
<p>Second paragraph...</p>
```

### 2.2 PullQuote

`PullQuote` ships with three variants: `lead`, `inline`, `sidebar`.

**Usage rules:**

| Variant | When to use | Frequency |
|---|---|---|
| `inline` | To surface a key fact or striking statement mid-article; breaks visual rhythm without stopping it | 1–2 per long-form article (> 1,500 words); 0–1 for shorter pieces |
| `lead` | Chapter openers on very long reference articles or hub pages, or when a primary-source quote anchors the section | 0–1 per article |
| `sidebar` | Inside the `sidebar` slot when a key stat or summary quote belongs near the content | 0–1 per article |

**What to pull quote:** A surprising statistic, a central claim that's the article's main takeaway, or a well-sourced external statement (with `attribution` pointing at the source). Never pull-quote an unsourced superlative.

**Observation:** PullQuote is almost entirely absent from current article pages. It is built and exported but unused. This is the biggest gap between "component library exists" and "publication-quality presentation."

### 2.3 CalloutBox

`CalloutBox` ships with five variants: `warning`, `tip`, `info`, `note`, `evidence`.

**Usage rules:**

| Variant | Use when | Example |
|---|---|---|
| `warning` | Safety-critical information that an owner must see before continuing — do not bury in prose | "Human NSAIDs are toxic to dogs" |
| `tip` | Practical actionable shortcut — owner can do this now | "Weigh your dog monthly on a bathroom scale" |
| `info` | Neutral important aside that doesn't fit the prose flow | "Arthritis affects ~1 in 5 dogs" |
| `note` | Editorial clarification or scope limitation | "This guide covers freshwater only" |
| `evidence` | WSAVA/AAHA/peer-reviewed finding that anchors a claim — highest-authority marker | "AAFCO 2025 calcium ceiling for large-size growth diets" |

**Frequency guideline:** 1–4 per long-form article. Overuse degrades the visual rhythm and trains readers to skip them.

**Observation:** `warning` boxes are used correctly on health pages (dog-arthritis: "Human NSAIDs are toxic"). The `evidence` variant is almost never used and is the highest-value unused tool in the portfolio — especially for petfood-com nutrition pages that cite AAFCO and NRC, and vets-co health pages that cite WSAVA.

### 2.4 Image Captions

**Standard:** Every inline article image rendered via `ImageCard` or `StockImage` MUST supply:
- `alt` — descriptive alt text (not the filename, not "dog image")
- `caption` — one sentence describing what the image shows and why it is in this article
- `credit` — photographer name + source (handled automatically by `StockImage`; must be manually set on `ImageCard`)

`caption` is optional in the component API but is mandatory under this spec for all article images. Uncaptioned images are a Low-severity defect under QC. Images missing `credit` (photographer attribution stripped) are a Blocker.

**Aspect ratio guidance:**
- Opening / hero image: `16:9`
- Diagnostic / clinical chart: `4:3`
- Portrait species photo: `3:4`
- Full-bleed section break: `full-bleed` variant

### 2.5 Footnote / Citation System — `SourceCitation`

The portfolio has two citation surfaces: inline (`variant="inline"`) and block (`variant="block"`).

**Standard for health and nutrition articles:**

Every statistical claim, clinical assertion, or policy reference MUST have an inline `SourceCitation` marker adjacent to the claim in the prose. The `label` prop should be a short source abbreviation or a numeral matching the end-of-article sources list.

At the end of the article body (before any FAQ or email capture), render an `ArticleSourcesList` block (see §0 — this component needs to be built) containing one `SourceCitation variant="block"` per unique source, in citation order.

**Until `ArticleSourcesList` is built:** Use a plain `<ul>` with `<li>` items containing `SourceCitation variant="block"` entries in a visually separated `<section>`. See `petfood-com` large-breed puppy page for an acceptable interim pattern using a `<ul>` with `<em>` for titles — this is acceptable but does not surface the "SOURCE" eyebrow badge that `SourceCitation block` provides.

**Observation:** `SourceCitation inline` is almost entirely absent from current article pages even when claims are sourced. The petfood-com large-breed puppy page is the only page that includes a proper sources section. Dog.com arthritis references "Roush et al., JAVMA 2010" inline as prose text — that claim should be a `SourceCitation` component, not a bare string.

---

## 3. Per-Article Minimum Craft Bar

This is the enforceable floor. An article that passes all points is "craft-compliant." One that fails any mandatory item is a Medium-severity defect under QC.

### Mandatory (every long-form article, defined as ≥ 600 words using `ArticleLayout`)

| Item | Requirement |
|---|---|
| **Eyebrow** | `hero.category` supplied, from the approved taxonomy in §1 |
| **H1** | `hero.title` supplied — direct, specific, ≤ ~15 words |
| **Dek** | `hero.subtitle` supplied — 25–60 words, value-forward |
| **Byline** | `<ArticleByline>` rendered immediately after `ArticleLayout` opens the body; `siteName` must be `"{SiteName} Editorial"` — never a fabricated personal name or credential |
| **Updated date** | `updatedAt` prop on `ArticleByline` — reflects the last substantive edit |
| **Breadcrumb** | `breadcrumbs` prop on `ArticleLayout` with at least 3 items (Home → Hub → Article) — all intermediate items have `href` |
| **Related links** | `relatedLinks` prop on `ArticleLayout` with ≥ 3 links pointing to hub + sibling pages within the same site |
| **Sources (health/nutrition/clinical)** | If the article makes a statistical, clinical, or policy claim, at least one `SourceCitation` in the article body |

### Strongly recommended (any omission is Low-severity, noted in audit)

| Item | Recommendation |
|---|---|
| **DropCap** | On the true first body paragraph (post-Byline) |
| **PullQuote (inline)** | 1–2 per long-form article (> 1,200 words) |
| **At least one CalloutBox** | `warning` for safety-critical health content; `evidence` for WSAVA/AAHA/AAFCO-grounded claims |
| **At least one image** | Via `StockImage` or `ImageCard`, captioned and credited |
| **TableOfContents** | In the sidebar for articles with ≥ 4 H2 sections |
| **FAQAccordion** | For health and care articles — boosts AI Overview + Perplexity citation surface |

### Not allowed anywhere (Blocker-severity)

- `hero.authorName` containing a fabricated DVM, PhD, or any title implying a specific credentialed person
- `reviewedBy` on `ArticleByline` containing anything other than a role label ("Editorial team") or left blank
- `hero.category` eyebrow using "Vet-Reviewed", "Expert-Tested", "Trainer-Tested" or any variant
- Any first-person practitioner claim in the body prose ("In my practice", "we tested")
- Attribution stripped from images
- `SourceCitation` pointing at a broken or non-credible URL

---

## 4. Related-Reading / Internal-Link Footer

### What exists

`ArticleLayout` already renders a "Related Guides" section at the bottom of every article where `relatedLinks` is supplied. The block renders in a responsive grid of card links, each optionally categorized with an eyebrow label.

### What is inconsistent today

- Many articles pass `relatedLinks` with only 2–3 flat links, no category labels, and no hub link.
- The `sidebar` slot gets `RelatedLinks`, but the footer `relatedLinks` prop on `ArticleLayout` is often either absent or not coordinated with the sidebar version (both exist on the same page, pointing at different things).

### The standard

Every article's `relatedLinks` array MUST follow this structure:

```
[
  // 1. The cluster hub (always first)
  { title: '{Hub Name}', href: '/{cluster}', category: 'Hub' },

  // 2. Sibling pages in the same cluster (2–4 pages)
  { title: '{Sibling Article}', href: '/{cluster}/{sibling}', category: '{Cluster}' },
  ...

  // 3. One cross-cluster link (from a related cluster on the same site) — optional
  { title: '{Related Topic}', href: '/{other-cluster}/{page}', category: 'Related' },
]
```

Minimum: 3 links. Recommended: 4–6 links.

**Hub link is mandatory** — this is the single most important internal-link signal. An article that links to all its siblings but not to its hub breaks the hub→spoke graph that makes topical authority legible to Google.

**Coordination with sidebar `RelatedLinks`:**
The sidebar `RelatedLinks` should be a superset or same set as the footer links. They are not redundant — sidebar links are visible during reading; footer links are visible after. Include the hub in both.

**`contentType` prop for cross-portfolio card:**
Every article should pass `contentType` to `ArticleLayout` to activate the `CrossPortfolioCard` sister-site recommendation at the very bottom. This adds one cross-portfolio internal link per article at zero editorial cost.

---

## 5. Masthead Authority Signal

### What already ships

The `Footer` component already includes links to `/editorial-standards` and `/disclosure` in every site's footer bottom bar. QC-STANDARDS.md §1.6 requires an `/editorial-standards` page on every site, and all 10 sites have one.

The `Nav` component is site-aware and links to the main sections.

### What is missing

No site currently presents a visible, above-the-fold "who we are and how we work" signal at the masthead level. Acquirers, AI crawlers, and skeptical readers who land on a health or nutrition article see no publication identity until they scroll to the footer.

### The standard (within trust-bar limits)

#### Homepage masthead block

Every site homepage MUST include a short "About this publication" block (not a full `/about` page — a visible 2–4 sentence block on the homepage, above the fold or in the first scroll section) that states:

1. What the site covers
2. How content is produced (sourced from cited references / editorial research — never fabricated expertise)
3. A link to `/editorial-standards`

**Trust-bar compliant wording examples (use or adapt):**

> *"Dog.com covers canine health, nutrition, training, and care. Our articles are researched from peer-reviewed veterinary sources, AAFCO guidelines, and WSAVA recommendations. We are an editorially independent publication — no sponsored content in editorial sections. [Editorial standards →](/editorial-standards)"*

> *"Fish.com is an aquarium reference written from manufacturer datasheets, peer-reviewed fishkeeping research, and species literature. We cite all factual claims. [How we work →](/editorial-standards)"*

**Forbidden wording (QC §1 violations):**
- "Written and reviewed by veterinarians" (unless true)
- "Expert contributors" (unless contributors exist and are disclosed)
- "30+ years of combined veterinary experience" (fabricated credential)
- "Our vet team" / "Our editorial board of veterinarians"

#### Article-level editorial signal (inline, end of article)

Every article should surface a brief one-liner + link above the footer related-links block, something like:

> *This article was researched from cited sources. [How we produce content →](/editorial-standards)*

Until the `EditorialStandardsSignal` component is built (§0), this can be added as a simple paragraph in the article body or as a `CalloutBox variant="note"` with the link. The component should wrap this into a consistent visual pattern.

#### `/editorial-standards` page content binding

Per QC §1.6: the `/editorial-standards` page is *binding*. If the page says "we source from peer-reviewed literature", every article must be sourced from peer-reviewed literature, or that claim is a Blocker. The spec team should review all 10 sites' `/editorial-standards` pages before launch to verify parity with actual content production.

---

## 6. Enforcement — Consistency Without Overhead

### Tier 1: Shared component (already done — maintain)

The craft components (`DropCap`, `PullQuote`, `CalloutBox`, `SourceCitation`, `ArticleByline`, `ImageCard`, `StockImage`) already exist and are exported from `@carloOS/ui`. The `ArticleLayout` already provides the structural slots. No new shared components are needed except `ArticleSourcesList` and `EditorialStandardsSignal` (see §0).

### Tier 2: Usage convention (requires documentation + adoption phase)

The gaps are *usage* conventions, not missing components. The `subtitle` (dek) prop is optional but this spec makes it mandatory. The `relatedLinks` array exists but its structure is inconsistent. These need a written convention that page authors follow — and an audit that catches deviations.

### Tier 3: Soft lint / audit script (propose only — do not build now)

Propose adding an `article-craft` audit to `scripts/ci/`:

**`scripts/ci/article-craft.mjs`** — a soft-check script (warnings, not errors — does not block CI) that:

1. Scans every `app/**/page.tsx` that imports `ArticleLayout`
2. Checks for presence of `hero.subtitle` (dek) — warns if absent
3. Checks for presence of `relatedLinks` prop — warns if absent or fewer than 3 items
4. Checks for `<ArticleByline>` in the file — warns if absent
5. Checks that `hero.category` is set — warns if absent
6. Checks that `hero.authorName`, if set, does not match a suspicious credential pattern (rudimentary: reject if it contains "DVM", "MD", "PhD", "Dr.") — this overlaps with `trust-guard.mjs` but earlier-stage

This script runs via `npm run audit:craft` — not in the required CI gate (to avoid blocking PRs on editorial quality gaps), but run as part of weekly COO quality sweeps and before any site is flagged launch-ready.

**Relationship to existing CI:**
- `trust-guard.mjs` — catches trust violations (Blocker severity)
- `metadata-policy.mjs` — catches SEO defects
- `link-check.mjs` — catches broken links
- `article-craft.mjs` (proposed) — catches craft gaps (Medium/Low severity, warning-only)

### Tier 4: PR review convention

Any PR that adds or significantly edits an article page should be checked against the Minimum Craft Bar table in §3 before merge. COO should add the craft bar as a checklist item in the PR description template.

---

## 7. Phased Adoption Plan

### Phase 1 — Dog.com Reference Implementation (this sprint; P0)

**Goal:** Make Dog.com the canonical example of the editorial system in action. Every article page on Dog.com must pass the Minimum Craft Bar in §3.

**Scope:**
- Audit all `apps/dog-com/src/app/health/`, `apps/dog-com/src/app/breeds/`, `apps/dog-com/src/app/guides/` pages
- Add missing deks (`hero.subtitle`) — every page
- Correct `DropCap` positioning to post-Byline first paragraph
- Add `PullQuote (inline)` to every article > 1,200 words — at least one
- Add `CalloutBox variant="evidence"` to every article with a peer-reviewed citation
- Add `SourceCitation inline` to statistical / clinical claims
- Add `<ul>` sources section (interim pattern) to health and nutrition articles
- Fix `relatedLinks` to include hub link first
- Add `contentType` prop to activate `CrossPortfolioCard`

**Deliverable:** Dog.com becomes the portfolio's reference implementation. All future articles on all sites are checked against it.

### Phase 2 — Cohort 1: Vets.co + PetFood.com (following sprint; P1)

Vets.co and PetFood.com are the two sites where citation quality matters most (clinical authority + nutrition reference). Apply the same craft bar sweep with emphasis on:
- `evidence` callout boxes citing WSAVA, AAHA, AAFCO, NRC
- `SourceCitation` inline markers on every statistic
- Sources block at end of every health/nutrition article
- Masthead authority signal on homepages

### Phase 3 — Cohort 2: Fish.com + Ferret.com + Horses.com (P1-P2)

Apply full craft bar. Emphasis:
- Fish.com: `DropCap` on opening paragraphs (currently absent), `PullQuote` use (absent)
- Ferret.com: indie-magazine voice benefits most from pull quotes and drop caps
- Horses.com: equestrian editorial voice needs consistent eyebrow taxonomy

### Phase 4 — Remaining sites: Lizard.com, Saddle.com, Ferrets.com, PetFoods.com (P2)

Apply craft bar. Note:
- Lizard.com (dark-mode): `PullQuote` variant colors must be verified against dark palette — Visual Bot should test
- Saddle.com (luxury): `lead` PullQuote variant is particularly appropriate for the luxury editorial voice
- Ferrets.com (state-legality directory): more sparse, table-driven content — apply craft bar only to long-form articles, not to state-data pages
- PetFoods.com (ingredient/brand DB): mostly programmatic reference, lower craft bar applies — ensure `ArticleByline` + sources on all editorial (non-programmatic) pages

### Phase 5 — Component builds (P2, parallel with Phase 2-3)

Build the two missing components identified in §0:
- `ArticleSourcesList` — COO-lane build; straightforward wrapper
- `EditorialStandardsSignal` — COO-lane build; short inline editorial trust strip

Build `article-craft.mjs` audit script (COO-lane, §6 Tier 3).

---

## 8. Observation Summary — Current Gap vs Spec

| Craft element | Status today | Gap |
|---|---|---|
| Eyebrow + H1 | Present on all articles | Eyebrow taxonomy inconsistent; some omit H1 (uses `hero.title` but unspecific) |
| Dek / standfirst | Present on ~50% of articles | Missing on most fish-com, ferret-com, petfoods-com articles |
| ArticleByline | Present on health articles (dog, vets, ferret) | Missing on many fish-com + petfood-com articles |
| DropCap | Present on dog-com health pages (wrong position) | Wrong position; absent on all other sites |
| PullQuote | Not used on any article across the portfolio | Biggest visual gap; highest impact of any single fix |
| CalloutBox warning/tip | Used correctly on dog-com + vets-co | `evidence` variant almost never used; absent from fish-com + petfood-com |
| SourceCitation inline | Almost entirely absent | Only petfood-com has a sources section (as prose list, not component) |
| ImageCard / StockImage | Used on some pages | Caption prop often omitted; many articles have no images at all |
| RelatedLinks (sidebar) | Present on most articles | Hub link missing from most relatedLinks arrays |
| Footer relatedLinks | Inconsistent — present on ~60% of articles | Hub link missing; often 2 links instead of 3+ |
| TableOfContents | Present on long-form dog-com + petfood-com articles | Absent on most vets-co, fish-com, ferret-com long-form articles |
| FAQAccordion | Present on vets-co + some dog-com | Absent from fish-com, petfood-com, ferret-com |
| Masthead authority signal | Footer link to /editorial-standards only | No visible above-fold publication identity on any site |
| Editorial standards page | All 10 sites have /editorial-standards | Content not always in parity with actual production method |

---

## 9. Trust-Bar Reminders for Implementers

These apply to every piece of the editorial system and cannot be delegated away:

1. `ArticleByline.siteName` must be `"{SiteName} Editorial"` — not a personal name, not a credential
2. `ArticleByline.reviewedBy` if set must be a role label only — "Editorial team" is the only safe default
3. `hero.category` eyebrow may never include "Reviewed", "Tested", or any credential implication
4. `PullQuote.attribution` if set must attribute a real source — not a fabricated expert
5. `SourceCitation.url` must point at the actual primary source — not a press release or secondary summarizer
6. `ImageCard.credit` / `StockImage` credit must reflect the real photographer — never a placeholder name
7. The masthead "about" copy (§5) must describe actual production method — not aspirational copy

---

*This spec is ratification-ready. CSRO ratifies → COO begins Dog.com reference implementation → cohort rollout per §7.*
