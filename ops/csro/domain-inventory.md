# CSRO Domain Inventory

**Owner:** CSRO Bot
**Created:** 2026-05-30
**Status:** v3 — ARCHITECT §9 matrix INVALIDATED as an ownership source; only the 15 built sites are confirmed-owned. True owned list pending Monetization Bot + Carlo (`csro-dir-001`).

> **v3 correction (2026-05-30):** Carlo spot-checked the ARCHITECT §9 unbuilt-domain list against actual
> holdings. Result: **0 of 28 unbuilt domains are owned** (3 dropped earlier, 25 confirmed not-owned in this
> pass). He owns *similar* domains, not these. **Conclusion: `MONETIZATION-ARCHITECT.md §9` is an aspirational
> target list, not an ownership record — it does not describe the real portfolio.** Treat §2 below as historical
> only. The verified owned portfolio = the 15 built sites; the rest is `[UNK]` pending the Monetization Bot's
> actual owned-domain list. (v2 had wrongly anchored to the 64-domain matrix as if it were real holdings.)

---

## §0 Reconciliation flag — READ FIRST

**What is actually confirmed-owned as of 2026-05-30:** the **15 built sites** (§4). Nothing else is verified.

The three portfolio-size claims have now collapsed to one trustworthy number:

| Source | Claimed scale | Status after 2026-05-30 ownership check |
|---|---|---|
| CSRO kickoff prompt | 75 (68 + 7 identity) | **unverified** — no list ever supplied |
| `MONETIZATION-ARCHITECT.md §9` | 64 "domains Carlo owns" | **INVALIDATED** — Carlo checked the 28 unbuilt entries; **0 owned.** Aspirational list, not holdings. |
| Built in-repo (`apps/` + config) | 15 | **CONFIRMED OWNED** `[FACT]` |

**Why the matrix failed:** it reads like an ownership ledger ("domains Carlo owns") but is a strategy/wishlist.
Every unbuilt domain sampled (Cat.com, PetInsuranceReviews.com, then all 25 remaining) was **not owned** — Carlo
owns *similar* names, not those exact ones. So no unbuilt domain in §2 can be treated as an asset.

**Next step (`csro-dir-001`, re-pointed):** the real owned-domain list must come from the **Monetization Bot**
(it maintains the affiliate/holdings view) + Carlo's registrar account — **not** the ARCHITECT doc. Carlo is
checking with the Monetization Bot. Until that lands, the inventory = 15 built sites, everything else `[UNK]`.

---

## §1 Schema + conventions

`Domain | Cluster | Built? | ARCHITECT tier | CSRO action | Note`

- **Built?** = has an `apps/<id>` dir + `packages/config` entry `[FACT]`. "Domain-only" = listed in ARCHITECT §9, not built.
- **ARCHITECT tier** = monetization tier from `MONETIZATION-ARCHITECT.md §9` (T1/T2/T3). This is a *monetization*
  tier, distinct from the CSRO *enterprise-value* tier in §4.
- **CSRO action** vocab: `hold/protect` · `build` · `validate` · `promote` · `consolidate` · `defer` · `sunset` · `acquire-adjacent`.
- Registrar = Network Solutions at portfolio level `[FACT: CLAUDE.md §8]`; per-domain renewal dates `[UNK]`.

---

## §2 The ARCHITECT §9 matrix — ⚠️ INVALIDATED AS OWNERSHIP (historical reference only)

> **Do not use this section to decide what is owned or buildable.** Carlo confirmed 2026-05-30 that **none of
> the 28 unbuilt domains below are owned** — this is the Monetization Bot's aspirational *target* list, not a
> holdings record. The only rows here that are real owned assets are the ones marked ✅ Built (those 15 also
> appear in §4). Every ❌ row = aspiration, ownership = NO (confirmed) or N/A. Kept verbatim only so future
> sessions don't re-derive it from the same misleading doc and repeat the mistake.

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

## §3 Ownership overlay `[FACT as of 2026-05-30]`

| Confirmed OWNED (15 built) | Confirmed NOT owned (28 unbuilt ARCHITECT entries) | Real owned non-built domains |
|---|---|---|
| Dog, Fish, Vets.co, Saddle, Lizard, Horses, PetFood, PetFoods, Ferret, Ferrets, AskTheVet, SeniorPetPharmacy, DogPicture, PetSupplies, HardMoneyLoans | Cat, PetInsuranceReviews (earlier) + Puppy, DogFood, DogToys, DogBeds, DogCollars, Cats, CatFood, Kitten, CatLitter, Aquarium, Aquariums, Goldfish, Equine, HorseTack, Reptile, Reptiles, Snake, Turtle, Rabbit, GuineaPig, Hamster, Bird, Birds, Parrot, PetMeds (all confirmed NOT owned 2026-05-30) | **`[UNK]` — Carlo owns *similar* names; the real list must come from the Monetization Bot (`csro-dir-001`)** |

**Separate business (out of scope, owned):** Horse.com, StateLineTack.com + related.

> The entire middle column is now **confirmed not-owned** — the ARCHITECT §9 matrix is invalidated as an
> ownership source. The right column is the only thing still open and is the whole point of `csro-dir-001`.

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

## §5 Highest-value gaps

1. **`[UNK]` The real owned-domain list — now the #1 open item.** Confirmed 2026-05-30 that the ARCHITECT §9
   matrix is NOT it (0 of 28 unbuilt entries owned). Carlo owns *similar* domains; the authoritative list lives
   with the **Monetization Bot** + his registrar account. `csro-dir-001` re-pointed to that source.
2. `[FACT]` The verified owned portfolio today = **the 15 built sites.** Plan strategy on those until (1) lands.
3. `[UNK]` Per-domain registrar + renewal dates — renewal lapse on a T1 asset = catastrophic (`csro-dir-003`).

---

## §6 Known unknowns (→ `research-backlog.md`)

1. The real owned-domain list — source is the **Monetization Bot** (ARCHITECT §9 invalidated) — `csro-dir-001` / R-001.
2. ~~Ownership of the 28 ARCHITECT unbuilt domains~~ — RESOLVED (Carlo 2026-05-30): **0 of 28 owned.**
3. Registrar + renewal dates, all domains — `csro-dir-2026-W22-003` / R-002.
4. Vets.co — status of all 5 Tier-1 promotion criteria — R-004.
5. PetFood/PetFoods, Ferret/Ferrets, Aquarium/Aquariums, Reptile/Reptiles, Bird/Birds — consolidate vs distinct — R-005.
6. Empire Flippers / FE International comps for content + tool assets — R-003.

---

*Update in place as evidence accumulates. No calendar-driven rewrites.*
