---
from: COO
to: CSRO / IR / Carlo
status: ready
created: 2026-06-09
next_action: Use as the diligence-readiness tracker for the first 2 exit candidates. Green the RED/AMBER rows before outreach.
lane: COO acquisition-readiness synthesis
---

# Acquirer-readiness checklist — Vets.co + Dog.com

The portfolio's north star is $10–20M-per-domain acquisition exits. This maps
the dimensions a buyer's diligence team scores, with **current, repo-grounded
status** for the two flagship exit candidates. Status reflects the feature
branch (not yet merged) + routed cross-lane items. RAG = Red / Amber / Green.

## 1. Revenue & monetization
| Item | Vets | Dog | Note |
|---|---|---|---|
| Affiliate infra built (every CTA via /go, env-var tag swap) | 🟢 | 🟢 | 0 leaks verified across 14 apps |
| Highest-value network ready to activate | 🟢 | 🟢 | Vets all-Impact (13 carriers); Dog Amazon+Impact+Chewy |
| Accounts activated + tags live | 🔴 | 🔴 | Gated on Carlo (Impact.com first — single account, biggest ROI) |
| High-intent funnel actually wired end-to-end | 🔴 | 🟠 | **Vets funnel carrier CTA 404s** (revenue-blocking — routed); Dog funnel has dead dog.com CTAs |
| FTC disclosure above every monetized surface | 🟢 | 🟢 | Verified in pixel-prep |
| Documented revenue/activation story | 🟢 | 🟢 | See revenue-architecture review (2026-06-09) |
| **Actuals (traffic→revenue history)** | 🔴 | 🔴 | Pre-launch — no live revenue yet. Biggest valuation lever still ahead. |

## 2. Traffic, SEO & GEO
| Item | Vets | Dog | Note |
|---|---|---|---|
| robots / sitemap / canonical / OG | 🟢 | 🟢 | Shared buildRobots + 14-AI-crawler allow-list; populated sitemaps |
| `llms.txt` AI-citation manifest | 🟢 | 🟢 | Added this cycle (both) |
| Homepage Org/WebSite + per-page Article/FAQ/Medical schema | 🟢 | 🟢 | Exactly 1 BreadcrumbList/page (dedup sweep done) |
| Internal-link graph (hub→spoke, reciprocity) | 🟠 | 🟢 | Vets `/guides` hub orphaned in nav (routed to Visual); else healthy |
| Topical authority depth | 🟢 | 🟢 | Insurance breed×state matrix (Vets); breed/health/nutrition clusters (Dog) |
| **Live organic traffic (GSC/GA4 data)** | 🔴 | 🔴 | Deferred per §8a; no GSC/GA4 yet — buyers will want ≥3–6 mo of trend |

## 3. Content, trust & editorial integrity
| Item | Vets | Dog | Note |
|---|---|---|---|
| trust-guard green (no fake credentials/first-person clinical) | 🟢 | 🟢 | Dog clinical claim fixed + guard hardened this cycle |
| No fake bylines / AI-human imagery / stripped attribution | 🟢 | 🟢 | QC §1 enforced in CI |
| Editorial standards page + citation discipline | 🟢 | 🟢 | /editorial-standards; primary-source citations |
| No thin/duplicate/placeholder indexable pages | 🟢 | 🟢 | Sample directories noindexed; redirect stubs correct |

## 4. Technical & infrastructure
| Item | Vets | Dog | Note |
|---|---|---|---|
| CI gates (trust/metadata/link-check) green | 🟢 | 🟢 | All green on feature branch |
| Build/deploy hygiene (turbo-ignore, monorepo) | 🟢 | 🟢 | Per CLAUDE §7 cost discipline |
| Mobile structure | 🟢 | 🟢 | Audited; table fixes shipped; (Lizard-only SVG issue, not these two) |
| Custom DNS live | 🔴 | 🔴 | Deferred — Carlo/Network Solutions; a switch, not a rebuild |
| Transferability (clean repo, documented, no secrets committed) | 🟢 | 🟢 | Tags in env vars only; ops/ docs thorough |

## 5. Legal & compliance
| Item | Vets | Dog | Note |
|---|---|---|---|
| FTC affiliate disclosure system | 🟢 | 🟢 | Above-fold, component-driven |
| No paid-favorable-review on editorial surfaces | 🟢 | 🟢 | QC §1 |
| Insurance content sourced to filings/DOI (no fabricated rates) | 🟢 | n/a | Vets policy enforced |
| Image attribution (Unsplash/Pexels TOS) | 🟢 | 🟢 | Manifest-backed credit; CI-guarded |

## 6. Brand & domain
| Item | Vets | Dog | Note |
|---|---|---|---|
| Premium exact-match .com/.co | 🟢 | 🟢 | Vets.co / Dog.com — category-defining |
| Differentiated visual identity | 🟠 | 🟠 | Visual polish in flight (Dog emoji→SVG, imagery) — their lane |
| Coherent IA / category authority positioning | 🟢 | 🟢 | Clear hub→spoke; single-vertical clarity (Vets) |

## 7. Operational / dependency
| Item | Status | Note |
|---|---|---|
| Low human-workload operation | 🟢 | Programmatic SEO + automation-first; no calls/sales |
| Documented playbooks & handoffs | 🟢 | ops/ is thorough; lane policy explicit |
| Single-operator transfer risk | 🟠 | Content/infra automated; a buyer inherits a system, not a team |

## The honest valuation gap (what moves Vets/Dog from "polished" to "fundable exit")
Everything **structural** is green or routed. The two **red columns that cap
valuation today are the same for both sites and are not COO-fixable**:
1. **No live revenue** — affiliate is a switch away (Impact-first), but a buyer
   prices proven traffic→revenue, not potential. This needs activation + time.
2. **No traffic history** — GSC/GA4 are deferred; a buyer wants ≥3–6 months of
   organic trend. This needs DNS + analytics + time.

**Path to fundable:** (a) fix the Vets funnel-404 (removes the one technical
doubt), (b) activate Impact.com + Amazon + Skimlinks, (c) DNS-flip Vets/Dog,
(d) stand up GSC/GA4, (e) accumulate 90+ days of traffic+revenue trend. Steps
(c)–(e) are the deferred launch phase — a Carlo/CSRO timing decision, not a COO
blocker. Until then, COO keeps both sites at structural-green so the moment the
switch flips, the trend starts from a clean base.

## Pre-outreach RED/AMBER to clear (COO-trackable)
- 🔴→🟢 Vets funnel-404 (Monetization, routed; revenue + diligence blocker)
- 🟠→🟢 Vets `/guides` hub in nav (Visual, routed)
- 🟠→🟢 Dog visual differentiation (Visual, routed)
- (Deferred, Carlo-timed): activation, DNS, analytics, traffic accrual

— COO
