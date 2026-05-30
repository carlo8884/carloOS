# CSRO Domain Inventory

**Owner:** CSRO Bot
**Created:** 2026-05-30
**Status:** DRAFT — verified-domains pass complete; full-portfolio reconciliation BLOCKED (see §0)

---

## §0 Reconciliation flag — READ FIRST `[FACT]`

My CSRO kickoff brief asserts a **75-domain portfolio (68 portfolio + 7 identity)** and points to
`CSRO.md §16` for the authoritative list. As of this inventory:

- `ops/csro/CSRO.md` is a **0-byte empty stub** — §16 and the full domain list **do not exist** in the repo.
- `ops/policies/bot-fleet.md` (also referenced by the kickoff) is **absent**.
- The repo's own source-of-truth docs (`CLAUDE.md`, `STATUS.md`, `DASHBOARD.md`) describe a
  **15-app portfolio: 10 production sites + 5 scaffolds** — not 75 domains.
- `apps/` contains exactly **10 production directories**; the 5 scaffolds are documented but **not built**.

**Per `CLAUDE.md §3`, the repo is the source of truth.** I will not invent 59 phantom domains,
registrars, renewal dates, or valuations (research standard: *never invent; "unknown" is a valid finding*).

**This inventory therefore covers the 15 verifiable domains only.** The 75-domain claim is logged as an
open escalation to Carlo (see `daily/2026-05-30.md` and `open-directives.md` → `csro-dir-2026-W22-001`).
If the additional ~60 domains are real, Carlo must supply the list (or restore `CSRO.md §16`) before they
can be inventoried.

---

## §1 Schema

`Domain | Cluster | Registrar | Renewal | Production? | Current state | Recommended action | Rationale`

**Recommended-action vocabulary:** `build` · `hold` · `validate` · `promote` · `consolidate` · `lease` · `sell` · `sunset` · `acquire-adjacent`
(Source: CSRO decision-rights list in kickoff. Canonical vocabulary pending `CSRO.md §16`.)

**Confidence labels:** every cell is `[FACT]` (verified in repo / Carlo-confirmed), `[HYP]` (hypothesis), or `[UNK]` (unknown — needs research).

---

## §2 Tier 1 — inbound-offer validated (protect-the-asset)

| Domain | Cluster | Registrar | Renewal | Prod? | Current state | Rec. action | Rationale |
|---|---|---|---|---|---|---|---|
| Dog.com | companion-dog (flagship) `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (12 pp) `[FACT]` | live-ready, pre-DNS `[FACT]` | **hold / protect-asset** | $2.3M inbound offer; target $10M+ exit. Preserve diligence-readiness over aggressive monetization. `[FACT]` |
| Fish.com | aquarium-magazine `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (8 pp) `[FACT]` | live-ready, pre-DNS `[FACT]` | **hold / protect-asset** | $1.45M inbound offer; target $10M+ exit. Same protect-asset posture. `[FACT]` |

\* Registrar = Network Solutions is `[FACT]` at portfolio level (`CLAUDE.md §8`); per-domain confirmation `[UNK]`.

---

## §3 Tier 2 with Tier 1 promotion path (pending Carlo confirmation)

| Domain | Cluster | Registrar | Renewal | Prod? | Current state | Rec. action | Rationale |
|---|---|---|---|---|---|---|---|
| Vets.co | veterinary-authority `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (9 pp) `[FACT]` | live-ready `[FACT]` | **validate → promote** | Tier 1 promotion requires all 5 criteria (self-serve revenue path · realistic monetization per IR Bot · trust/compliance risk controlled · demand evidence · CSRO recommendation w/ evidence). `[FACT]` |
| Saddle.com | equestrian-luxury `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (7 pp) `[FACT]` | live-ready `[FACT]` | **build / validate** | High-AOV luxury vertical; promotion path pending. Affiliate fit: SmartPak/Dover (pending). `[FACT]` |
| Lizard.com | reptile field-guide `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (8 pp) `[FACT]` | live-ready `[FACT]` | **build / validate** | Defensible niche-authority play; programmatic care-sheet potential. Promotion path pending. `[FACT]` |

---

## §4 Tier 2

| Domain | Cluster | Registrar | Renewal | Prod? | Current state | Rec. action | Rationale |
|---|---|---|---|---|---|---|---|
| Horses.com | equestrian-editorial `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (7 pp) `[FACT]` | live-ready `[FACT]` | **hold (pending Racing Bot)** | Tier placement gated on Horses.com Racing Intelligence Bot findings (bloodstock/betting-adjacent strategy). `[FACT]` |
| Ferret.com | ferret-hobbyist magazine `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (6 pp) `[FACT]` | live-ready `[FACT]` | **build** | Indie-hobbyist authority; thin commercial intent — monetization fit needs IR Bot review. `[HYP]` |
| PetFood.com | pet-nutrition reference `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (6 pp) `[FACT]` | live-ready `[FACT]` | **build** | High-intent nutrition cluster; condition×ingredient matrix = strong GEO/affiliate fit. `[HYP]` |

---

## §5 Tier 3

| Domain | Cluster | Registrar | Renewal | Prod? | Current state | Rec. action | Rationale |
|---|---|---|---|---|---|---|---|
| PetFoods.com | pet-nutrition (ingredient/brand DB) `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (5 pp) `[FACT]` | live-ready `[FACT]` | **consolidate** | Overlaps PetFood.com — canonicalization/duplication risk. Evaluate merge vs distinct-cluster. `[HYP]` |
| Ferrets.com | ferret state-legality directory `[FACT]` | Network Solutions `[FACT]`* | `[UNK]` | Yes (5 pp) `[FACT]` | live-ready `[FACT]` | **consolidate** | Overlaps Ferret.com; legality-directory is narrow. Evaluate merge vs cross-link. `[HYP]` |
| askthevet | vet AI symptom-checker (tool) `[FACT]` | `[UNK]` | `[UNK]` | No (scaffold, unbuilt) `[FACT]` | no Vercel, no content `[FACT]` | **build (P2)** | High-intent diagnostic flow; strong GEO citation magnet IF trust-bar respected (no fabricated clinical authority). `[HYP]` |
| seniorpets | senior-pet Rx + content `[FACT]` | `[UNK]` | `[UNK]` | No (scaffold) `[FACT]` | no Vercel, no content `[FACT]` | **defer (P3)** | Recurring-Rx LTV potential; needs demand validation before build. `[HYP]` |
| dogpicture | AI pet portraits + POD `[FACT]` | `[UNK]` | `[UNK]` | No (scaffold) `[FACT]` | no Vercel, no content `[FACT]` | **defer (P3)** | POD = inventory-light, fits Carlo's no-marketplace preference; trend-dependent. `[HYP]` |
| petsupplies | comparison engine `[FACT]` | `[UNK]` | `[UNK]` | No (scaffold) `[FACT]` | no Vercel, no content `[FACT]` | **build (P2)** | Comparison engine = high-intent affiliate surface; matches Carlo's stated wants. `[HYP]` |

---

## §6 Sunset

| Domain | Cluster | Registrar | Renewal | Prod? | Current state | Rec. action | Rationale |
|---|---|---|---|---|---|---|---|
| hardmoneyloans | off-vertical finance lead-gen `[FACT]` | `[UNK]` | `[UNK]` | No (scaffold) `[FACT]` | no Vercel, no content `[FACT]` | **sunset** | Off-thesis (non-pet); Carlo-confirmed sunset. No portfolio-internal-linking value. `[FACT]` |

---

## §7 Coverage summary `[FACT]`

| Bucket | Count |
|---|---|
| Tier 1 (offer-validated) | 2 |
| Tier 2→1 path | 3 |
| Tier 2 | 3 |
| Tier 3 | 7 |
| Sunset | 1 |
| **Verified total** | **15 (10 production + 5 scaffolds)** |
| Kickoff-claimed total | 75 (68 + 7 identity) |
| **Unaccounted (BLOCKED on Carlo / `CSRO.md §16`)** | **~60** |

---

## §8 Known unknowns (research backlog seeds)

1. `[UNK]` Do the additional ~60 domains exist? — escalated `csro-dir-2026-W22-001`.
2. `[UNK]` Per-domain registrar + renewal dates (expiry risk = asset risk).
3. `[UNK]` Vets.co — status of all 5 Tier-1 promotion criteria.
4. `[UNK]` Horses.com — Racing Bot tier recommendation.
5. `[UNK]` PetFood.com / PetFoods.com and Ferret.com / Ferrets.com — consolidate vs keep-distinct (duplication risk).
6. `[UNK]` Empire Flippers / FE International comparable multiples for pet-content + tool assets (for exit-value modeling).

---

*Update this register in place as evidence accumulates. No calendar-driven rewrites.*
