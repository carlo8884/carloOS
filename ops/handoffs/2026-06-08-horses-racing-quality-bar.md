---
from: csro
to: horses-bot
status: active
created: 2026-06-08
in_reply_to: ops/handoffs/2026-06-08-horses-phase2-roadmap.md
next_action: "Horses Bot: treat this as the standing acceptance gate for every future racing/equine page; no page ships unless it passes all sections."
---

# Horses.com — Racing Vertical Standing Quality Bar (Premium / Acquirer-Grade)

**Scope:** STANDING acceptance gate. Every future racing/equine page on horses-com must pass **all** sections before merge. This bar exists because the racing vertical is a valuation asset — thin or non-compliant pages dilute the whole domain's acquirer story. Supplements (does not replace) QC-STANDARDS.md and CLAUDE.md §6/§8a.

---

## 1. Required source types (primary / official only)

Every factual/historical claim must trace to a credible primary or official source. Acceptable:

- **Official racing bodies:** The Jockey Club, USTA (harness), AQHA (Quarter Horse), Breeders' Cup, NYRA / Churchill Downs / track authorities, Racing Hall of Fame.
- **Breed registries:** The Jockey Club registry, AQHA, breed-specific studbooks.
- **Aftercare/adoption authorities:** Thoroughbred Aftercare Alliance (TAA), Retired Racehorse Project (RRP).
- **Veterinary/biomechanics (for conformation/health bridges):** AAEP and equivalent.
- **Reputable historical references** for biographies/events (Hall of Fame records, official race records).

**Not acceptable as a primary source:** wagering/handicapping sites, tipster blogs, odds aggregators, unsourced fan wikis as sole support. Cite inline (QC §1.4/§1.5). No invented superlatives, no "fastest/greatest ever" without a sourced pointer.

---

## 2. Strict no-wagering language rules (QC §1)

The racing vertical is **NON-WAGERING, permanently.** Forbidden on every page:

- Odds, betting lines, payouts, "value", "best bet", picks, tips, selections, handicapping advice.
- Any framing of a race card / program as a betting aid (explain it as **information**, never as a way to wager).
- Links to or affiliates for sportsbooks, betting exchanges, tipping services, odds APIs.
- "How to bet / where to bet" content of any kind.

**Required framing:** spectator, historical, educational, ownership/care, and aftercare. When a topic is wagering-adjacent (Melbourne Cup, Grand National, claiming economics), keep it strictly informational and add no betting angle. A reviewer who finds wagering language treats it as a **Blocker** (QC §5).

---

## 3. Image requirements

- **No AI-generated humans** (no fake jockeys/trainers/crowds) and no fake clinical/credential imagery (QC §1 / CLAUDE.md §4).
- **Preserve Unsplash/Pexels photographer attribution** — never strip (TOS + QC §1).
- Imagery is requested **via a Visual Bot handoff**. Horses Bot does NOT edit `scripts/image-queries.json`, `scripts/sync-images.mjs`, or `image-manifest.json` (single-writer lane).
- Each premium page should have at least one relevant, attributed image; hubs should feel curated, not templated (CLAUDE.md §8a Visual bar).

---

## 4. Internal-linking rules (hub → spoke graph)

- **No orphan pages.** Every new page belongs to a hub and is reachable from it (QC §2.7, CLAUDE.md §6 "avoid isolated pages").
- Each cluster has a real hub that organizes its spokes; spokes link back to the hub and to ≥2 sibling/related pages.
- **Cross-cluster glue is required where natural:** great-racehorses ↔ triple-crown/breeders-cup/history; newcomers ↔ race-types/glossary; OTTB ↔ broad-equine care/health/disciplines + Saddle.com tack; venues ↔ great-racehorses + triple-crown.
- `<Breadcrumb>` from `@carloOS/ui` on every page, emitting `BreadcrumbList` JSON-LD (QC §2.9).
- Every sitemap entry resolves to a real route; zero internal 404s (QC §2.6/§2.7).

---

## 5. Premium-vs-thin checklist (every page must clear ALL)

- [ ] Unique, ≤60-char title; unique ≤160-char meta description; correct canonical (QC §2.1–2.3, §2.11 single ` | {SiteName}` suffix).
- [ ] Correct schema for type: `Article` (profiles/explainers), `FAQPage` (FAQ), `Event`/`Place` (venues/events), `MedicalWebPage` (health bridges) — no fabricated `reviewedBy` (QC §1.3, §2.10).
- [ ] Substantive depth — not a stub or thin template; covers the topic enough to be the page a reader/AI reaches first (CLAUDE.md §6 anti-thin-programmatic rule).
- [ ] No duplicate of an existing page/title; no near-duplicate-slug pair (QC §2.8; see directive §1 list).
- [ ] At least one attributed, relevant image (via Visual handoff).
- [ ] Hub membership + ≥2 internal links out + breadcrumb present.
- [ ] Inline citations to §1 source types for all factual claims; zero unsourced superlatives.
- [ ] Zero wagering language (§2); FTC disclosure above any monetized surface (QC §3.2); no clinical/medicated buy-box (QC §1.5.b).
- [ ] `trust-guard.mjs`, `metadata-policy.mjs`, `link-check.mjs` all green (strict, not warn-only) before push (CLAUDE.md §8a).

---

## 6. Buyer/acquirer-relevance test

Before a page is approved, it must pass: **"Does this page make the domain more valuable to a $10–20M acquirer?"** A page passes only if it is:

- **A compounding asset** — evergreen or durable, not a one-off campaign (CLAUDE.md §6).
- **Citation-worthy** — the kind of page AI Overviews/Perplexity/ChatGPT cite (primary-source-anchored, well-structured).
- **Brand-safe** — non-wagering, no trust-bar risk, defensible in due diligence.
- **Graph-connected** — strengthens topical authority, not an isolated page.
- **Differentiated** — adds to the hybrid "broad equine authority + non-wagering racing reference" moat that no wagering site and no generic pet site can replicate.

If a page is thin, one-off, wagering-adjacent, orphaned, or undifferentiated, it **fails** — soften, merge, or cut it rather than ship dilution.
