---
from: CSRO
to: COO, Monetization Bot
status: open
created: 2026-05-30
next_action: COO to scope build; Monetization Bot to confirm affiliate stack realism
---

> **⚠️ Re-prioritization (2026-05-30, after live traffic landed):** Vets.co is the #1 **long-term authority /
> exit-ceiling** build, but it is **NOT the #1 *near-term revenue* move** — it has ~0 measured traffic and is a
> 6–9-month SEO bet. The immediate-cash priority is **Ferret.com** (~11K/mo, zero monetization — see
> `2026-05-30-csro-to-monetization-ferret-petfood-revenue.md`). Proceed with Vets.co as a **parallel long-term
> track**, not ahead of monetizing existing traffic. Everything below still stands as the Vets.co plan.

# CSRO Directive — Vets.co is the #1 non-flagship build-to-earn priority (long-term/exit ceiling)

**Directive ID:** `csro-dir-2026-W22-007`
**Source:** Carlo's 2026-05-30 mandate ("maximize value → sell or earn") + `ops/csro/strategy-disposition.md §2`.
Carlo explicitly left the Vets.co prioritization call to CSRO. **Call made: prioritize it.**

---

## Why Vets.co, above the other non-flagship sites

- **Best revenue-per-visitor in the portfolio.** Pet-insurance is the highest-payout affiliate vertical we can
  touch (~$40–70 per policy/lead, per `MONETIZATION-ARCHITECT.md §5 watch-list). One converted visitor ≫ dozens
  of Amazon clicks.
- **Vets.co carries a clinical-authority brand** — the trust context that makes insurance + directory content
  credible and citable (GEO). That authority is also the moat that protects the affiliate revenue.
- **Two compounding surfaces, both low-ops:** (1) pet-insurance comparison hub, (2) programmatic vet directory
  (city × specialty) — already scaffolded per recent merges. No outbound sales, fits Carlo's no-calls preference.
- **Strongest flip/exit narrative** after Dog/Fish: a B2B/insurance authority with real lead revenue commands a
  premium multiple.

---

## The recommendation, in the required 5-field format (CLAUDE.md §6)

**Recommendation: make Vets.co a build-to-earn pet-insurance + vet-directory authority, monetized via insurance
affiliate/lead-gen, groomed toward a premium exit.**

| Field | Assessment |
|---|---|
| **SEO Impact** | High. "Pet insurance" + "[city] emergency vet" + "[specialty] vet near me" are high-volume, high-intent, recurring-demand queries. Directory = programmatic scale; insurance hub = authority cluster. Strong structured-data fit (LocalBusiness, FAQPage, Review). |
| **GEO Impact** | High. Insurance comparison + "when do I need a specialist / what does it cost" are exactly the extractable, primary-source-citable answers AI surfaces quote. Clinical-authority framing (sourced, calibrated, no fabricated credentials) is what gets cited. |
| **Monetization Impact** | Highest non-flagship. Pet-insurance affiliate/lead-gen (~$40–70/conversion) + directory premium listings (self-serve). Recurring, high-LTV, no inventory, no calls. |
| **Build Effort** | M–L. Directory scaffold exists (recent vets-co PRs). Net new: insurance comparison hub (9-carrier table + per-carrier pages), `/specialists/*` explainer pages, schema, FTC disclosure. Monetization Bot owns the affiliate-route wiring. |
| **Priority Level** | **P1 — this week.** Top non-flagship build target. |

---

## Lane-split (per bot-coordination.md)

- **COO (me-adjacent / build):** insurance comparison hub structure, `/specialists/[slug]` explainer pages,
  ArticleLayout + schema + Breadcrumb, internal-link graph hub→cluster, sitemap. Editorial content within trust-bar.
- **Monetization Bot:** `affiliate-routes.ts` for the insurance carriers (Lemonade/Embrace/Pets Best/Spot/
  Healthy Paws/Pumpkin/Trupanion/ManyPets/Fetch — the §5 vets-co allow-list is **pet-insurance only, no product
  affiliates**), `/go/[vendor]/[sku]` handlers, disclosure copy. Confirm the stack is REALISTIC (IR-Bot-checkable).
- **CSRO (me):** strategy, prioritization, and the go-live gate sign-off. I do not build.

## Trust-bar guardrails (non-negotiable — QC §1)

- No fabricated DVM/vet credentials or "our veterinary team" language. Byline = "Vets.co Editorial."
- No individualized medical advice (generic info only — QC §3.3).
- Insurance claims (coverage %, payout speed) must be sourced/dated, not invented.
- FTC affiliate disclosure surfaced above the fold on every page with insurance links.

## Go-live gate (CSRO holds sign-off)

Vets.co does not go to DNS until: trust-bar clean · insurance hub + ≥1 directory tier substantive (not thin) ·
schema + internal links + sitemap/robots · insurance affiliate live with disclosure · Visual Bot baseline.

## Open dependency

Vets.co's *exact* build order should be tuned to traffic data (`csro-dir-006`) — if Search Console shows it
already ranking for insurance or directory queries, that segment goes first. Proceed on hub structure now;
sequence the content push when traffic lands.

---

*CSRO owns the framework; COO + Monetization Bot own execution. Respond in PR or an `ops/handoffs/` reply.*
