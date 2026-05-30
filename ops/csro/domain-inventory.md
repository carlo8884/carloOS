# CSRO Domain Inventory

**Owner:** CSRO Bot
**Created:** 2026-05-30
**Status:** DRAFT v2 — anchored to the repo's 64-domain matrix; ownership/registrar reconciliation still open (§0)

> **v2 correction (2026-05-30):** v1 of this file contained two factual errors caused by stale filesystem
> reads: it claimed the 5 scaffolds were "unbuilt/absent" (they ARE built — 15 app dirs + 15 entries in
> `packages/config/index.ts`) and that the large-portfolio claim had "zero backing" (the repo defines a
> **64-domain portfolio** in `MONETIZATION-ARCHITECT.md §9`). Both corrected below.

---

## §0 Reconciliation flag — READ FIRST

Three different portfolio sizes appear across the repo + my kickoff. They are reconcilable but not yet reconciled:

| Source | Claimed scale | Provenance |
|---|---|---|
| CSRO kickoff prompt | **75** (68 portfolio + 7 identity) | my brief; `CSRO.md §16` (was empty before today) |
| `MONETIZATION-ARCHITECT.md §9` | **64** ("domains Carlo owns") — 43 mapped, ~21 in research queue §11 | Monetization Bot strategy doc `[FACT: doc states this]` |
| Built in-repo (`apps/` + `packages/config/index.ts`) | **15** apps with full config | verified filesystem `[FACT]` |

**Working interpretation `[HYP]`:** 64 (ARCHITECT) + ~4 newer acquisitions + 7 identity/brand domains ≈ 75 (kickoff).
The 15 built sites are the production+scaffold front of a much larger held-domain portfolio.

**Still required from Carlo (`csro-dir-2026-W22-001`):** confirm the true owned-domain list (the ARCHITECT
matrix maps only 43 of 64; the other 21 and the 7 "identity" domains are unspecified). Per research standard
I list only what the repo evidences and label the rest `[UNK]` — I do not invent domains, registrars, or dates.

---

## §1 Schema + conventions

`Domain | Cluster | Built? | ARCHITECT tier | CSRO action | Note`

- **Built?** = has an `apps/<id>` dir + `packages/config` entry `[FACT]`. "Domain-only" = listed in ARCHITECT §9, not built.
- **ARCHITECT tier** = monetization tier from `MONETIZATION-ARCHITECT.md §9` (T1/T2/T3). This is a *monetization*
  tier, distinct from the CSRO *enterprise-value* tier in §4.
- **CSRO action** vocab: `hold/protect` · `build` · `validate` · `promote` · `consolidate` · `defer` · `sunset` · `acquire-adjacent`.
- Registrar = Network Solutions at portfolio level `[FACT: CLAUDE.md §8]`; per-domain renewal dates `[UNK]`.

---

## §2 The 64-domain matrix (source: `MONETIZATION-ARCHITECT.md §9`)

### Cluster 1 — Dogs (flagship)
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Dog.com | ✅ | T1 | **hold/protect** | $2.3M offer; flagship; protect-asset `[FACT: kickoff]` |
| Puppy.com | ❌ domain-only | T2 | defer | content+comparison play `[HYP]` |
| DogFood.com | ❌ | T2 | defer | food-finder; overlaps PetFood `[HYP]` |
| DogToys.com | ❌ | T3 | defer/lease | thin Amazon-comparison `[HYP]` |
| DogBeds.com | ❌ | T3 | defer/lease | thin Amazon-comparison `[HYP]` |
| DogCollars.com | ❌ | T3 | defer/lease | thin Amazon-comparison `[HYP]` |

### Cluster 2 — Cats
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| ~~Cat.com~~ | — | — | **DROP** | **NOT owned (Carlo 2026-05-30)** `[FACT]`. Remove from portfolio modeling. |
| Cats.com | ❌ | T2 | ownership `[UNK]` | content hub — only relevant if owned; verify in `csro-dir-001` |
| CatFood.com | ❌ | T2 | ownership `[UNK]` | food-finder `[HYP]` |
| Kitten.com | ❌ | T3 | ownership `[UNK]` | content `[HYP]` |
| CatLitter.com | ❌ | T3 | ownership `[UNK]` | thin comparison `[HYP]` |

> ⚠️ Cat.com being unowned confirms the cat-cluster rows below were **reconstruction `[HYP]`, not verified
> ownership.** Treat the entire unbuilt-domain matrix (§2) as candidate-not-confirmed until `csro-dir-001`
> returns the real owned list. Do not model any unbuilt domain as an asset on the strength of this table alone.

### Cluster 3 — Aquatic
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Fish.com | ✅ | T1 | **hold/protect** | $1.45M offer; protect-asset `[FACT: kickoff]` |
| Aquarium.com | ❌ | T2 | build | strong cluster support for Fish.com `[HYP]` |
| Aquariums.com | ❌ | T3 | consolidate | dup of Aquarium.com `[HYP]` |
| Goldfish.com | ❌ | T3 | defer | content `[HYP]` |

### Cluster 4 — Equestrian
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Horse.com | n/a | — | **OUT OF SCOPE** | Owned but **separate business** (with StateLineTack.com + related). Review-only, high-level. No CSRO directives. (Carlo 2026-05-30) `[FACT]` |
| Horses.com | ✅ | T1 | hold (pending Racing Bot) | tier gated on specialist `[FACT: kickoff]` |
| Saddle.com | ✅ | T2 | validate (T2→1 path) | luxury; CSRO promotion candidate `[FACT: kickoff]` |
| Equine.com | ❌ | T2 | ownership `[UNK]` | directory + insurance `[HYP]` |
| HorseTack.com | ❌ | T3 | ownership `[UNK]` | thin comparison `[HYP]` |

> **Separate-business boundary (Carlo 2026-05-30):** Horse.com, StateLineTack.com, and related equestrian-retail
> sites are a distinct business outside the CarloOS loop. CSRO may use them for high-level competitive
> read-through (esp. vs Saddle.com / Horses.com) but issues no directives, rankings, or build work against them.

### Cluster 5 — Reptiles & Exotics
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Lizard.com | ✅ | T2 | validate (T2→1 path) | CSRO promotion candidate `[FACT: kickoff]` |
| Reptile.com | ❌ | T2 | build | cluster support for Lizard.com `[HYP]` |
| Reptiles.com | ❌ | T3 | consolidate | directory dup `[HYP]` |
| Snake.com | ❌ | T3 | defer | content `[HYP]` |
| Turtle.com | ❌ | T3 | defer | content `[HYP]` |

### Cluster 6 — Small Mammals
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Ferret.com | ✅ | T2 | build | authority strong, intent thin `[FACT: kickoff T2]` |
| Ferrets.com | ✅ | T3 | consolidate | dup of Ferret.com `[FACT: kickoff T3]` |
| Rabbit.com | ❌ | T2 | build | insurance-eligible cluster `[HYP]` |
| GuineaPig.com | ❌ | T3 | defer | content `[HYP]` |
| Hamster.com | ❌ | T3 | defer | content `[HYP]` |

### Cluster 7 — Birds
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Bird.com | ❌ | T2 | build | content + insurance `[HYP]` |
| Birds.com | ❌ | T2 | build/consolidate | directory; pairs with Bird.com `[HYP]` |
| Parrot.com | ❌ | T3 | defer | content `[HYP]` |

### Cluster 8 — Pet services & health
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| Vets.co | ✅ | T1 | **validate → promote** | top Tier-1 promotion candidate (5 criteria, `CSRO.md §8`) `[FACT: kickoff]` |
| AskTheVet.com | ✅ (`askthevet`) | T1 | build (P2) | AI symptom checker; GEO magnet if trust-bar held `[FACT: built]` |
| ~~PetInsuranceReviews.com~~ | — | — | **DROP** | **NOT owned (Carlo 2026-05-30)** `[FACT]`. Pet-insurance affiliate (Architect S6) still runs on owned built sites (dog/vets/askthevet) — just not this domain. |
| PetMeds.com | ❌ | T2 | build | Rx + comparison `[HYP]` |
| SeniorPetPharmacy.com | ✅ (`seniorpets`) | T2 | defer (P3) | recurring-Rx LTV; needs demand validation `[FACT: built]` |
| PetFood.com | ✅ | T1 | build | nutrition cluster; food-finder `[FACT: built]` |
| PetFoods.com | ✅ | T3 | consolidate | dup of PetFood.com `[FACT: built]` |
| PetSupplies.com | ✅ (`petsupplies`) | T2 | build (P2) | comparison engine; high-intent affiliate `[FACT: built]` |

### Cluster 9 — Off-vertical / misc
| Domain | Built? | ARCH tier | CSRO action | Note |
|---|---|---|---|---|
| HardMoneyLoans.com | ✅ (`hardmoneyloans`) | T2 | **sunset** | off-thesis; Carlo-confirmed sunset `[FACT: kickoff]` |
| DogPicture.com | ✅ (`dogpicture`) | T3 | defer (P3) | AI portraits + POD; trend-dependent `[FACT: built]` |

**Mapped count: 43 domains.** Remaining **~21** (to reach 64) are unassigned in ARCHITECT §11 research queue → `[UNK]`.

---

## §3 Build-status overlay `[FACT]`

15 domains are built (app dir + config entry); 28 mapped domains are held-but-unbuilt; ~21 unmapped.

| Built (15) | Domain-only, mapped — ownership unverified | Confirmed NOT owned / out of scope | Unmapped (~21) |
|---|---|---|---|
| Dog, Fish, Vets.co, Saddle, Lizard, Horses, PetFood, PetFoods, Ferret, Ferrets, AskTheVet, SeniorPetPharmacy, DogPicture, PetSupplies, HardMoneyLoans | Puppy, DogFood, DogToys, DogBeds, DogCollars, Cats, CatFood, Kitten, CatLitter, Aquarium, Aquariums, Goldfish, Equine, HorseTack, Reptile, Reptiles, Snake, Turtle, Rabbit, GuineaPig, Hamster, Bird, Birds, Parrot, PetMeds | Cat.com (not owned), PetInsuranceReviews.com (not owned), Horse.com (separate business) | `[UNK]` — needs Carlo list |

> The "domain-only, mapped" column is **unverified ownership** — it was reconstructed from the ARCHITECT matrix.
> Carlo's 2026-05-30 spot-check found 2 of 3 sampled were not owned. Do not treat this column as an asset list
> until `csro-dir-001` returns the real owned set.

---

## §4 CSRO enterprise-value tier (Carlo-confirmed 2026-05-30) — built domains

This is the **strategy** tier (distinct from ARCHITECT's monetization tier). Drives `portfolio-ranking.md`.

| CSRO tier | Domains | Posture |
|---|---|---|
| **T1 (offer-validated, protect-asset)** | Dog.com ($2.3M), Fish.com ($1.45M) | diligence-ready; asset > revenue |
| **T2 → T1 path (pending Carlo)** | Vets.co, Saddle.com, Lizard.com | validate 5 promotion criteria |
| **T2** | Horses.com (pending Racing Bot), Ferret.com, PetFood.com | build |
| **T3** | PetFoods.com, Ferrets.com, AskTheVet, SeniorPetPharmacy, PetSupplies, DogPicture | build/defer/consolidate |
| **Sunset** | HardMoneyLoans.com | sunset |

> Note: ARCHITECT tags AskTheVet + PetFood as monetization-T1; CSRO holds them lower on the *enterprise-value*
> tier because they are not offer-validated. Resolve the two frameworks in `thesis.md`.

---

## §5 Highest-value gaps (built ≠ owned)

1. ~~Cat.com / Horse.com / PetInsuranceReviews.com as unbuilt upside~~ — **RESOLVED, no upside here (Carlo 2026-05-30):**
   Cat.com + PetInsuranceReviews.com **not owned**; Horse.com **owned but separate business (out of scope).** `[FACT]`
   Lesson: the unbuilt-domain matrix was reconstruction — do not treat any unbuilt row as an asset until ownership is confirmed.
2. `[UNK]` The real owned-domain list (matrix maps 43 of 64; +7 identity) — the genuine open gap. `csro-dir-001`.
3. `[UNK]` Per-domain registrar + renewal dates — renewal lapse on a T1 asset = catastrophic (`csro-dir-003`).

---

## §6 Known unknowns (→ `research-backlog.md`)

1. The true 64/75 owned-domain list (only 43 mapped) — `csro-dir-2026-W22-001` / R-001.
2. ~~Ownership of Cat.com / Horse.com / PetInsuranceReviews.com~~ — RESOLVED (Carlo 2026-05-30): first two not owned, Horse.com separate-business/out-of-scope.
3. Registrar + renewal dates, all domains — `csro-dir-2026-W22-003` / R-002.
4. Vets.co — status of all 5 Tier-1 promotion criteria — R-004.
5. PetFood/PetFoods, Ferret/Ferrets, Aquarium/Aquariums, Reptile/Reptiles, Bird/Birds — consolidate vs distinct — R-005.
6. Empire Flippers / FE International comps for content + tool assets — R-003.

---

*Update in place as evidence accumulates. No calendar-driven rewrites.*
