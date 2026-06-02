# Premium First-Screen Standard (CSRO spec — Visual executes)

**Authority:** CSRO defines this bar + structure (Carlo decision D5-c, 2026-06-02). **Visual owns
visual execution.** This is the reference every priority-8 homepage must satisfy. It operationalizes
the 7 gates in `premium-domain-launch-bar.md` into a buildable spec.

> The test, unchanged: a stranger shown only the first screen can name the domain and believes this
> is the **category-owning product/platform** — not a content library — within 2 seconds.

---

## 1. The first-screen anatomy (every priority site)

Top-to-bottom, above and just below the fold:

1. **Identity lockup** — eyebrow that states the category role (e.g. "Tank control center", "The
   dog owner's operating system", "Clinical reference desk"), then a confident H1. Display type at
   `clamp(36px, 5.5vw, 64px)`, tight tracking, one site-distinct treatment (italic, weight, or case).
2. **Distinct hero medium** — a real, domain-specific image OR a deliberate, branded non-photo
   treatment that is unmistakably this domain. **No shared art between any two sites** (D4). No
   generic stock that could belong to any pet site.
3. **A working product, not a link to one** — an interactive tool / diagnostic / wizard / calculator
   embedded on the first or second screen. *This is now SHIPPED across the cohort* (see §3).
4. **Proof-as-features band** — scale / citations / methodology / primary-source data rendered as
   product features, not buried (a trust bar is the minimum; better is a live stat or data viz).
5. **Architecture as verbs** — the hub entry points read as "diagnose / compare / calculate /
   decide / plan", not a river of post titles.

A site PASSES the first-screen standard only when 1–5 are all true AND it clears the 7-gate bar.

---

## 2. Tokens & system (Visual owns specifics; CSRO constraints)

- **Grid:** shared container widths already exist (`max-w-container*`, `px-container*`). Keep a single
  consistent grid per site; no ad-hoc widths on the homepage.
- **Type:** each site already has a distinct `fontDisplay`/`fontBody` pair in `packages/config`
  (Playfair/DM Sans, Cormorant/Inter, Bodoni/Jost, Zilla Slab/Raleway, etc.). The homepage must
  *use the display face at hero scale* — distinctiveness comes free if we lean into it.
- **Color/motion:** per-site theme tokens exist. Motion: one restrained signature motion max
  (hover lift, reveal) — never templated carousel cruft.
- **Signature element (gate 6):** each site needs ONE memorable thing. Default = the embedded tool
  (§3). Visual may elevate it (a data viz, a striking hero motif) but every site must have exactly one.

---

## 3. Homepage product surface — STATUS: shipped (gate 3) ✅

CSRO implemented the "homepage is a tool you use" pattern in code across the cohort by embedding the
existing `/tools/*` components directly on each homepage:

| Site | Embedded homepage tool | PR |
|---|---|---|
| Fish | Aquarium volume calculator | #389 |
| PetFood | Food cost calculator | #390 |
| Horses | Henneke body-condition scorer | #390 |
| Lizard | UVB-distance calculator | #391 |
| Saddle | Saddle tree-size estimator | #391 |
| Ferret | Ferret food evaluator | #391 |
| Dog | Breed-match wizard | #392 |
| Vets | Insurance-reimbursement estimator | *(surface on homepage — Visual/COO follow-up)* |

**Remaining for Visual:** make the embedded tool *look* like the hero product (composition, framing,
not just a dropped-in widget), and confirm it renders premium in place. Vets: surface its estimator
on the first screen too.

---

## 4. Hero imagery plan (Carlo decision D3-c)

**Hybrid:** curated **real stock now** (Unsplash/Pexels via `scripts/sync-images.mjs`, run on Carlo's
Mac — sandbox can't fetch) to clear launch quality; **commission original photography later** for
differentiation. **No spend without Carlo approval.** Visual selects per-site stock that passes the
2-second identity test and the correct-subject rule (real ferret on Ferret, aquascape on Fish,
ingredient macro on PetFood, etc.).

- **Distinct hero per site (D4):** Horses and Saddle must NOT share art — each gets its own hero.
- 6/8 homepages currently render a CSS-only/gradient hero — these are the priority replacements.

---

## 5. Per-site identity direction (locked decisions)

| Site | First-screen identity | Hero | Signature product |
|---|---|---|---|
| **Dog** | The dog owner's operating system | Emotional real-dog / owner moment | Breed-match wizard (shipped) |
| **Fish** | Tank control center | Aquascape | Volume/stocking calculators (shipped) |
| **Horses** | **Hybrid (D1-c):** category-defining premium equine authority, with **Racing Intelligence as a prominent flagship `/racing` vertical** — not the homepage identity, not buried | Distinct equine hero (NOT shared w/ Saddle) | Body-condition scorer (shipped) + a visible Racing entry point |
| **Vets** | Clinical reference desk | Texture-led non-human clinical | Insurance estimator + condition lookup (surface on homepage) |
| **PetFood** | A food scoring product | Ingredient macro (no dog-with-bowl) | Compare-two-foods scorer (shipped) |
| **Saddle** | Premium tack buyer's guide (distinct from Horses) | Its OWN luxury tack/leather hero | Tree-size estimator (shipped) |
| **Lizard** | Dark-mode reptile field guide (theme already distinct) | Dark habitat/reptile | UVB-distance calculator (shipped) |
| **Ferret** | Warm niche owner hub | Real ferret (fix wrong-species defect) | Food evaluator (shipped) |

### Horses.com — locked (D1-c)
Homepage = **broad premium equine authority** (breadth is the moat for the bare domain). **Racing
Intelligence is a prominent flagship vertical** at `/racing` (or `racing.horses.com`) — surfaced
clearly from the homepage (a dedicated entry/section), not the homepage's whole identity, not buried.
Preserves the racing asset + Equine-Network-aligned value while keeping the flagship premium-general.

---

## 6. Process / sequence
1. Visual takes this spec → produces the reference hero treatment for ONE site (recommend Fish or
   PetFood — tools already embedded) → CSRO reviews against the 7 gates.
2. Apply to the priority 8 (Ferret wrong-species + Saddle distinct-hero fixes fold in).
3. Each redesigned site re-runs: launch-polish checklist → 7-gate bar → IR → advisor.
4. COO continues non-visual launch-quality (done for now); content expansion stays frozen.

CSRO owns this spec; Visual owns execution; advisor is final.
