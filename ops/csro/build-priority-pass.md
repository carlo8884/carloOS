# CSRO Build-Priority Pass — the ~48 owned-but-unbuilt in-scope domains

**Owner:** CSRO Bot · **Created:** 2026-05-31 · **Status:** v1 (provisional — refine as traffic data lands)
**Inputs:** `domain-inventory.md` v5 (owned list), `thesis.md §0/§0b` (illiquid-market + hold-and-compound),
`strategic-acquirers.md` (buyer filter), `valuation-model.md`.

## Method — the filter (not name-value; that was the retracted error)

Each unbuilt domain scored on three yes/no signals, then assigned a disposition:

1. **Cluster fit** — does it support a *built hero* (Dog/Fish/Vets/Ferret/PetFood/Horses/Saddle/Lizard)?
2. **Standalone intent** — does the name itself carry commercial/search intent worth its own build?
3. **Buyer path** — is there a named or plausible strategic acquirer (per `strategic-acquirers.md`)?

**Disposition vocabulary** (per `strategy-disposition.md §1`, hold-and-compound default):
- **REDIRECT→hero** — fold into the built hero; pass link equity (most cluster-support names).
- **BUILD-LITE** — a thin but real monetizable surface (comparison/product) once its hero is live; low effort.
- **BUILD** — merits its own real build (rare in this tail; most are too thin).
- **HOLD** — park, no build, no redirect yet (renewal cost is the only carry; revisit on traffic).
- **SELL-DOMAIN (last resort)** — only true off-thesis dead weight with no hero + no buyer.

> **Governing default:** since the market is illiquid and we hold-and-compound, **REDIRECT > SELL** for anything
> with a hero. We almost never sell a name that can strengthen a built site — we point it at the hero instead.
> Selling is reserved for names that fit nothing.

---

## §1 Dog cluster → hero **Dog.com** (36K/mo, live)

| Domain | Fit | Intent | Buyer | Disposition |
|---|---|---|---|---|
| dog.net | hero | — | — | **REDIRECT→Dog.com** (.net of the flagship; pure equity pass) |
| idog.com | hero | low | — | **REDIRECT→Dog.com** (brandable, no standalone case) |
| doginfo.com | hero | low | — | **REDIRECT→Dog.com** |
| dog-videos.com | hero | media | — | **REDIRECT→Dog.com** (or a /videos section) |
| dogbed.com | hero | **product** | — | **BUILD-LITE** — single-product comparison ("best dog beds"), Amazon/Chewy buy-boxes; or 301 to a Dog.com reviews page |
| dogstore.com | hero | commerce | — | **REDIRECT→Dog.com** /reviews (avoid a thin store) |
| dogproduct.com | hero | low | — | **REDIRECT→Dog.com** |
| dogfoodsupplies.com | PetFood | product | — | **REDIRECT→PetFood.com** (nutrition cluster) |
| dogsaver.com / .org | weak | low | — | **HOLD** (unclear angle; cheap to hold; revisit) |
| dogscreen.com | hero | DNA/health? | Embark/Wisdom (DNA affiliates) | **BUILD-LITE** — DNA-testing intent fits the existing Dog.com `/dna-testing` funnel; 301 or feeder |
| dogstaff.com | weak (B2B) | pet-services | PSI/sitter SaaS | **HOLD** — off the consumer thesis; possible niche later |
| dogmail.com | none | — | — | **HOLD** (utility/email name; no content play) |
| rawhidedog.com | hero | **product** | — | **BUILD-LITE** or REDIRECT→Dog.com (rawhide-safety + buy-boxes) |
| puppysupply.com | hero | product | — | **REDIRECT→Dog.com** /breeds/puppy or BUILD-LITE |
| luxurydog.com | hero | **premium** | — | **BUILD-LITE** — premium-products angle (higher AOV) feeding Dog.com |
| luxurydogsupplies.com | hero | product | — | **REDIRECT→luxurydog or Dog.com** |
| luxurypuppy.com | hero | breeder-dir | — | **HOLD / BUILD-LITE** — breeder-directory angle if demand shows |

## §2 Fish cluster → hero **Fish.com** (7K/mo)

| Domain | Disposition |
|---|---|
| aquarium.net | **REDIRECT→Fish.com** (or a /aquarium hub; strong support term) |
| fishsupplies.com | **BUILD-LITE** or REDIRECT→Fish.com /reviews (equipment buy-boxes) |

## §3 Vets/health cluster → hero **Vets.co** + **SeniorPetPharmacy**

| Domain | Disposition |
|---|---|
| bestpetmedsites.com | **BUILD-LITE** — pet-pharmacy comparison (Chewy Pharmacy/Allivet/PetMeds affiliate); feeds Vets.co/SeniorPet |
| seniorcats.com | **BUILD-LITE** — senior-cat content; the ONLY cat-cluster surface we own → also a toehold in the (unowned) cat category |
| seniorpetmeds.com | **REDIRECT→SeniorPetPharmacy.com** (near-dupe) |
| seniorpetplace.com | **REDIRECT→SeniorPetPharmacy.com** |
| seniorpetproducts.com | **REDIRECT→SeniorPetPharmacy.com** |

## §4 Ferret cluster → hero **Ferret.com** (11K/mo, EARN-NOW)

| Domain | Disposition |
|---|---|
| ferretsupplies.com | **REDIRECT→Ferret.com** (or BUILD-LITE supply page) |
| ferrettreats.com | **REDIRECT→Ferret.com** /diet |

## §5 PetFood cluster → hero **PetFood.com** (5K/mo)

| Domain | Disposition |
|---|---|
| petfoodsupplies.com | **REDIRECT→PetFood.com** |
| petstockroom.com | **HOLD / REDIRECT→PetFood.com** (generic; weak standalone) |

## §6 Horse/equine cluster → heroes **Horses.com + Saddle.com** (Equine Network buyer path) ⭐

Per `strategic-acquirers.md`: this cluster has a **named acquirer (Equine Network)**, so it gets more build
weight than its raw traffic implies — the buyer path de-risks it.

| Domain | Disposition |
|---|---|
| horsesupplies.com | **BUILD-LITE** — tack/supply commerce feeding Saddle/Horses (high-AOV affiliate) |
| horsesupply.com | **REDIRECT→horsesupplies.com** (singular/plural dupe — keep one) |
| saddleshop.com | **REDIRECT→Saddle.com** (commerce term → the hero) |
| equinetack.com | **REDIRECT→Saddle.com** (tack term) |
| barnsupplies.com | **BUILD-LITE** — barn/livestock products (distinct from tack; own niche) |
| safehorsefence.com | **BUILD-LITE** — single high-intent product niche (fencing); or HOLD |
| ridershealth.com | **HOLD / BUILD-LITE** — rider-health/insurance angle; possible Vets×Horses crossover |
| equine.net | **HOLD** — strong generic; the .net to a category, but Equine.com is owned by the *acquirer* (don't compete; potential lease/sale chip) |
| equineleader.com / equineleaders.com | **HOLD** (dupe pair; content/authority angle unproven) |
| equusure.com | **HOLD** — equine-insurance name; revisit if a Vets-style insurance play extends to equine |

## §7 General-pet trophies (no single hero)

| Domain | Disposition |
|---|---|
| allpets.com | **HOLD** — strong generic; portfolio-identity/hub candidate (Architect flagged "identity layer"). Don't burn it on thin content; possible cross-portfolio hub later. |
| ecopets.com | **HOLD / BUILD-LITE** — eco-pet is a real trend niche; build only if a clear affiliate angle |
| ipetsupplies.com | **REDIRECT** to nearest supply hero or HOLD (generic supply) |
| petcostumes.com | **BUILD-LITE (seasonal)** — Q4 Halloween affiliate spike; pure-passive, low effort, build before October |
| wormer.com | **BUILD-LITE** — dewormer is high-intent + **cross-applies pet AND horse**; Chewy/Amazon/equine affiliate. Decent standalone. |

---

## §8 Summary — disposition counts (provisional)

| Disposition | Count | Domains (abbrev) |
|---|---|---|
| **REDIRECT→hero** | ~17 | dog.net, idog, doginfo, dogproduct, dogstore, dogfoodsupplies, dog-videos, luxurydogsupplies, puppysupply, aquarium.net, seniorpet{meds,place,products}, ferretsupplies, ferrettreats, petfoodsupplies, horsesupply, saddleshop, equinetack |
| **BUILD-LITE** | ~13 | dogbed, dogscreen, rawhidedog, luxurydog, luxurypuppy, fishsupplies, bestpetmedsites, seniorcats, horsesupplies, barnsupplies, safehorsefence, petcostumes, wormer, ecopets |
| **HOLD** | ~10 | dogsaver.com/.org, dogstaff, dogmail, petstockroom, ridershealth, equine.net, equineleader(s), equusure, allpets, ipetsupplies |
| **SELL-DOMAIN** | **0** | *(none — every in-scope name fits a hero or holds; selling reserved for off-thesis dead weight, which lives in the set-aside bucket, not here)* |

## §9 Sequencing guidance (to COO/Monetization, not now)

- **Redirects are cheap + compounding** — do them in a batch *after* heroes are monetized (don't move URLs
  mid-monetization). Each redirect strengthens a hero's authority at ~zero cost. Highest ROI of this whole tail.
- **BUILD-LITE only behind the EARN-NOW + hero work** — these are second-wave. Prioritize the ones with a buyer
  path (horse cluster: horsesupplies, barnsupplies) and the cross-intent winners (wormer, bestpetmedsites).
- **HOLD = do nothing but track renewal** (`dir-003`). `allpets.com` + `equine.net` are the two "trophy holds"
  worth keeping pristine — allpets as a possible portfolio hub, equine.net as an Equine-Network negotiation chip.
- **petcostumes.com** has a calendar deadline — if built, build before **October** for the Q4 spike.

## §10 Open / refine-when

- Re-rank BUILD-LITE candidates once per-domain traffic is measured (most are `[UNK]` traffic — `dir-006`).
- Confirm singular/plural + .com/.net/.org dupes can 301 cleanly (COO).
- `dir-003` renewal dates → net carry cost against the HOLD bucket; if a HOLD name is expensive to renew and has
  no path, *then* it becomes a sell/sunset candidate.

*Provisional — this is the first structured pass over the tail; refine as traffic + renewal data land.*
