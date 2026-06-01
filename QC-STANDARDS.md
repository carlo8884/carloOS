# QC-STANDARDS — Quality Control Constitution

These are the non-negotiable quality and integrity standards for CarloOS.
They apply to every site, every page, every PR, every agent.

If a rule here conflicts with an instruction from chat memory or a previous
agent, **this file wins**. If a rule needs to change, change it in a PR,
not in passing.

---

## 1. Trust & Authority Integrity

These rules are descended from Phase 2 (commits `6997d8d` → `b664eff`) and
the 2026-05-27 audit. They are permanent.

### 1.1 No fabricated authority

No content shall imply review or authorship by a credentialed expert who
has not actually authored or reviewed the content.

- No fake DVM / MD / PhD bylines.
- No "Reviewed by Dr. X" lines unless Dr. X actually reviewed it.
- No "Our veterinary team" / "Our editorial board of veterinarians" language unless that team exists and has been verified.
- No first-person practitioner voice ("In my clinic, I see…") unless the writer is the practitioner.

#### 1.1.a Eyebrow badges & testing claims (added 2026-05-27)

The same prohibition applies to *eyebrow badges* and *short trust signals*
that imply credentialed testing or expert review. Phase 2 missed this
pattern; the 2026-05-27 audit caught it.

Forbidden patterns include but are not limited to:
- `Tested · {Month YYYY}` — implies the editorial team performed a dated hands-on test
- `{Credential} Tested` (e.g. "CSF Tested", "Expert Tested", "Trainer Tested", "Keeper Tested", "PAR Tested") — implies a specific credential-holder performed the test
- `Expert Reviewed` / `CSF Reviewed` / `Vet Reviewed` / `Master {Profession} Reviewed` — implies credentialed review
- `Reviewer Notes · {Body} Reference` — implies authoritative reviewer footnotes

Allowed substitutes when a section needs a label:
- "Editorial Picks"
- "Buyer's Guide"
- "Our Top Picks" (when paired with `ScoreMethodology` disclosing the basis)
- No label at all

#### 1.1.b Homepage long-form copy (added 2026-05-27)

Section §1 applies to all surfaces, including homepage prose, hero copy,
stat blocks, and trust strips — not only article bylines and schema fields.

Forbidden examples:
- "Species profiles with vet-reviewed health sections" (when no vet has reviewed them)
- "Master Saddler Contributors" / "Certified Fitters" stat tiles (when no such personnel exist)
- "30+ Brands Reviewed" or similar in-house-test counts (when reviews draw on aggregated external sources, not in-house testing)

### 1.2 No fake testing or fake hands-on claims

- No "We tested 47 leashes over 6 months" unless that test actually happened with retained evidence.
- No "We surveyed N owners" without the survey.
- Editorial rankings must be honest about their basis (see `ScoreMethodology` component, Phase 2 batch 8).

### 1.3 No fake schema reviewers

- `MedicalWebPageSchema` and similar must not include a fabricated `reviewedBy`.
- If no real reviewer exists, omit the field entirely.
- When `MedicalWebPage` is added to additional pages (Phase 3c), `author` must be `Organization` (not `Person`).

### 1.4 No invented superlatives

Claims like "the most prescribed", "the #1 choice of vets", "more Olympic
medalists than any other", "Best-in-class {X}" must be either:
- Sourced inline with a credible reference, OR
- Removed/softened.

### 1.5 Source-anchored clinical claims

Statistical or clinical statements ("studies show", "strongest evidence",
percentage rates) must have an inline source pointer or be softened.

### 1.5.a No consumer-facing medication dose ranges (added 2026-06-01, Carlo policy)

**No consumer-facing CarloOS animal-health page may list specific medication
dose ranges** (e.g. `mg/kg`, `PO/IV q12h`, `mg/kg/day divided BID`) for
prescription drugs. Species-specific dosing creates avoidable liability and
can encourage unsafe self-dosing — citations + a disclaimer do not make it
safe.

**Keep:** drug names, mechanism/purpose, source citations, and clear wording
that these are veterinarian-prescribed treatments.
**Remove:** the actual numbers. Replace with language like *"Veterinarians may
prescribe medications such as X or Y depending on the animal's condition and
overall health. Dosing must be determined by a veterinarian."*

**Exemptions:** (1) nutritional/supplement intake guidance for non-prescription
items (e.g. omega-3 EPA/DHA, glucosamine) is not "medication dosing"; (2) AAFCO
feed-formulation specs (e.g. choline `1,200 mg/kg DM`) describe a formulation
requirement, not a dose to administer.

**Override:** only Carlo may approve dose ranges, and only on an explicitly
veterinary-professional-reviewed clinical-reference product.

### 1.5.b No affiliate buy-boxes on clinical/medicated products (added 2026-06-01, Carlo policy)

**Clinical, medicated, or prescription-adjacent animal-health products must NOT
be affiliate buy-boxes / ReviewCards with purchase CTAs.** If misuse of the
product could harm the animal, it does not get a monetized link.

**Not allowed in buy-boxes:** chlorhexidine and other antiseptics, medicated
rinses, antimicrobials, prescription or prescription-adjacent products, any
medication for a diagnosed condition.
**Allowed in buy-boxes:** physical, non-medical supplies — e.g. dental brushes,
scalers, grooming tools, equipment, supplements already cleared under §1.5.a
exemptions.

If a clinical product is mentioned, it must be **informational only**, framed as
veterinarian-directed care, with **no purchase CTA and no affiliate route**.

**Override:** only Carlo may approve a monetized clinical product, and only
under an explicitly vetted medical-commerce strategy.

### 1.6 Editorial standards page

Every site must carry an `/editorial-standards` page that accurately
describes how content is produced and reviewed. The page text is binding:
**any content that contradicts the editorial-standards page is a defect**
(this is how Finding #1 from the 2026-05-27 audit was identified — the
"Tested" badges contradicted every site's "We don't claim hands-on testing
we haven't done." statement).

---

## 2. SEO Standards

2.1 Every indexable page has a unique, non-empty `<title>`. Target ≤ 60 chars (Google SERP truncation).
2.2 Every indexable page has a unique, non-empty meta description. Target ≤ 160 chars.
2.3 Every indexable page has a canonical URL pointing at the correct host for its site.
2.4 OpenGraph + Twitter card metadata is set via `SEOHead` / `buildMetadata()`.
2.5 JSON-LD schema validates and does not contain fabricated reviewers (§ 1.3).
2.6 `sitemap.xml` and `robots.txt` are generated per site. **Every entry in `sitemap.xml` must resolve to an existing route** (sitemap entries pointing at 404s waste crawl budget and are a defect — see Finding #4 of the 2026-05-27 audit).
2.7 Internal link graph has zero 404s. Baseline established at Phase 2 batch 7.
2.8 No duplicate titles across a single site.
2.9 Per-site `<Breadcrumb>` (the shared component from `@carloOS/ui`) is rendered on every content page. Intermediate crumbs may be link-less but must be present. Inline `<nav>` breadcrumbs that do not emit `BreadcrumbList` JSON-LD are non-conforming (Finding #8 of the 2026-05-27 audit).
2.10 Per-page schema matrix:
- **Article** on articles
- **FAQPage** on FAQ pages (single page-level schema if multiple sections; not per-accordion)
- **MedicalWebPage** on health pages (in addition to or in place of Article, depending on template)
- **Review** on review pages
- **BreadcrumbList** emitted by `<Breadcrumb>` on every page that has breadcrumbs
2.11 `buildMetadata()` must produce a title with **exactly one** ` | {SiteName}` suffix. Doubled suffixes are a defect (Finding #5 of the 2026-05-27 audit).

---

## 3. Legal & Compliance Standards

3.1 Every site has parity legal pages: privacy policy, terms of service, editorial standards (Phase 2 Batch 6). dog-com additionally carries an affiliate disclosure page.
3.2 **FTC affiliate disclosure must be visible on every page that contains affiliate links.** Removing or weakening disclosure is a blocker-severity defect.
3.3 Health / medical content must not give individualized medical advice. Generic information is fine; "do X for your specific pet" is not.
3.4 No PII or third-party copyrighted content is included in the repo or pushed to git.
3.5 No live secrets (Supabase service role, Stripe secret/webhook, Mailchimp API key, admin password) committed. `.env.example` is the only source of truth for variable names.

---

## 4. Brand & Voice Standards

4.1 Each site has a single coherent voice consistent with its theme (see `packages/config`).
4.2 No footer / config bleed across sites (e.g. dog-com footer text appearing on fish-com — fixed in Phase 2 Batch 2; do not regress).
4.3 Trust bar parity: all 5 sites share the same trust-bar treatment established in Phase 2 Batch 8.
4.4 Tone is informative and grounded. Marketing puffery is a defect ("unmatched", "unparalleled", "industry-leading" in editorial prose).

---

## 5. Severity Levels

When Agent 2 (or any agent) records a finding, classify it using these levels:

| Level | Definition | Examples |
|---|---|---|
| **Blocker** | Ships nothing until fixed. Violates trust, legal, or build integrity. | Fake DVM byline restored; missing FTC disclosure on a review page; `turbo build` fails; broken canonical; "Tested · {Date}" badges (per §1.1.a); homepage "vet-reviewed" claim without reviewers (per §1.1.b) |
| **High** | Must fix before the current PR ships. | Missing meta description on indexable page; broken internal link; missing schema on health page; fake-personnel homepage stat block |
| **Medium** | Should fix in the current PR if low-cost, otherwise file as follow-up. | Sitemap entry pointing at 404; doubled `\| SiteName` suffix; non-canonicalized duplicate-slug pair; unsourced superlative; inline-nav breadcrumb without `BreadcrumbList` |
| **Low** | Nice-to-fix; file as backlog. | Title > 60 chars; minor accessibility nits; subtle puffery in breed cheerleading |
| **Info** | Observation only, no action required. | Page-count milestones; cache hit-rate notes |

Severity is set by the auditor (Agent 2). Agent 1 may dispute, but must do
so in the PR with evidence — not by silently downgrading.

---

## 6. Verified vs Unverified Findings

Every finding is one of:

- **Verified.** Has file path + line + observed value + expected value. Reproducible from a known commit.
- **Unverified.** A hypothesis. Must be labelled `UNVERIFIED:` (or equivalent) in the report. Cannot block a PR on its own.

An unverified finding does not justify a code change. Either verify it
(promote to Verified) or drop it. Speculative cleanup is not maintenance.

When an audit is run against a worktree, the audit report must state the
**base commit hash** of the worktree it was run against. A finding measured
against a different commit than the one it claims is a defect in the audit
itself (see Agent 2's "Self-Correction From Prior Session" in
`audits/2026-05-27-morning.md` — the lesson is: always pin the commit).

---

## 7. Go / No-Go Recommendation Rules

When Agent 2 issues a go/no-go on a PR:

- **No-Go** if **any** Blocker is open, or **any** High is open without a documented exemption from Carlo.
- **Conditional Go** if Mediums are open and have been triaged with explicit owners and follow-up PRs.
- **Go** if only Lows / Infos remain.

Agent 2 never merges. Agent 2 publishes the recommendation; Carlo decides.

---

## 8. Forbidden Practices

These are always defects regardless of intent:

- Fabricating credentials, reviewers, testing, or surveys (§ 1).
- Committing secrets to git (`.env.local` only; never push real keys).
- Suppressing or bypassing pre-commit hooks (`--no-verify`).
- Force-pushing to another agent's branch without coordination.
- Editing `RELEASES.md` history retroactively to hide a defect.
- Removing FTC disclosure to "clean up" a layout.
- Inflating severity to win an argument; deflating severity to ship faster.
- Treating an unmerged-draft policy as if it were merged-in-`main` law.
- Running an audit without recording the base commit hash.

---

## 9. When Standards Change

This file is the constitution. To change it:
1. Open a PR that modifies this file with a clear rationale.
2. Reference the PR in `RELEASES.md` when it merges.
3. Update any dependent standards in `OPERATIONS.md`, `AGENTS.md`, and `BACKLOG.md`.

Do not change this file in passing.

---

## Appendix — Verified-Passing Invariants on `main@4c27988`

Per `audits/2026-05-27-morning.md` (Agent 2), the following invariants are
verified-passing on `main` at the Phase 2 merge commit. Regressions on any
of these are defects:

- §1.3 No fake `reviewedBy` — 0 hits across `apps/` + `packages/`
- §1.6 Editorial-standards page on all 5 sites — 5/5
- §2.1 Every indexable page has a title — 0 missing
- §2.2 Every indexable page has a description — 0 missing
- §2.3 Every indexable page has a canonical — 0 missing
- §2.4 OG/Twitter via `buildMetadata` — verified at `packages/ui/src/components/SEOHead.tsx:74-92`
- §2.7 Internal link graph: 0 broken across all 5 sites
- §2.8 No duplicate titles across a single site
- §3.1 Legal-page parity (privacy/terms/affiliate-disclosure × 5): 15/15
- §3.2 FTC affiliate disclosure rendered by Footer at every site's `layout.tsx`
- §4.2 No footer/config bleed across sites
- §4.3 Trust-bar parity: 4-bullet strip on all 5 homepages
- Phase 2 batch 8 `ScoreMethodology` coverage: 40/40 review pages
- Build green: 5/5 sites successful (82.9s)
