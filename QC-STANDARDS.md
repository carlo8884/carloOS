# QC-STANDARDS — Quality Control Constitution

These are the non-negotiable quality and integrity standards for CarloOS.
They apply to every site, every page, every PR, every agent.

If a rule here conflicts with an instruction from chat memory or a previous
agent, **this file wins**. If a rule needs to change, change it in a PR,
not in passing.

---

## 1. Trust & Authority Integrity

These rules are descended from PR #2 (commits `6997d8d` → `b664eff`) and are permanent.

1.1 **No fabricated authority.** No content shall imply review or authorship by a credentialed expert who has not actually authored or reviewed the content.
- No fake DVM / MD / PhD bylines.
- No "Reviewed by Dr. X" lines unless Dr. X actually reviewed it.
- No "Our veterinary team" / "Our editorial board of veterinarians" language unless that team exists and has been verified.
- No first-person practitioner voice ("In my clinic, I see…") unless the writer is the practitioner.

1.2 **No fake testing or fake hands-on claims.**
- No "We tested 47 leashes over 6 months" unless that test actually happened with retained evidence.
- No "We surveyed N owners" without the survey.
- Editorial rankings must be honest about their basis (see `ScoreMethodology` component, PR #2 Batch 8).

1.3 **No fake schema reviewers.**
- `MedicalWebPageSchema` and similar must not include a fabricated `reviewedBy`.
- If no real reviewer exists, omit the field entirely.

1.4 **No invented superlatives.** Claims like "the most prescribed", "the #1 choice of vets", "more Olympic medalists than any other" must be sourced or removed (PR #2 Batch 5).

1.5 **Source-anchored clinical claims.** Statistical or clinical statements ("studies show", "strongest evidence", percentage rates) must have an inline source pointer or be softened (PR #2 Batches 3 & 4).

1.6 **Editorial standards page must exist on every site** and accurately describe how content is produced and reviewed (PR #2 Batches 1, 2, 6).

---

## 2. SEO Standards

2.1 Every indexable page has a unique, non-empty `<title>` ≤ 60 chars (target).
2.2 Every indexable page has a unique, non-empty meta description ≤ 160 chars (target).
2.3 Every indexable page has a canonical URL pointing at the correct host for its site.
2.4 OpenGraph + Twitter card metadata is set via `SEOHead` / `buildMetadata()`.
2.5 JSON-LD schema validates and does not contain fabricated reviewers (see § 1.3).
2.6 `sitemap.xml` and `robots.txt` are generated per site and reflect actual indexable URLs.
2.7 Internal link graph has zero 404s (PR #2 Batch 7 baseline).
2.8 No duplicate titles across a single site.
2.9 Per-site `Breadcrumb` is rendered on every content page; intermediate crumbs may be link-less but must be present (PR #2 Batch 7).
2.10 Per-page schema must be present where appropriate: Article on articles, FAQ on FAQ pages, MedicalWebPage on health pages, Review on reviews.

---

## 3. Legal & Compliance Standards

3.1 Every site has parity legal pages: privacy policy, terms of service, editorial standards (PR #2 Batch 6). dog-com additionally carries an affiliate disclosure page.
3.2 **FTC affiliate disclosure must be visible on every page that contains affiliate links.** Removing or weakening disclosure is a blocker-severity defect.
3.3 Health / medical content must not give individualized medical advice. Generic information is fine; "do X for your specific pet" is not.
3.4 No PII or third-party content is included in the repo or pushed to git.

---

## 4. Brand & Voice Standards

4.1 Each site has a single coherent voice consistent with its theme (see `packages/config`).
4.2 No footer / config bleed across sites (e.g. dog-com footer text appearing on fish-com — fixed in PR #2 Batch 2; do not regress).
4.3 Trust bar parity: all 5 sites share the same trust-bar treatment established in PR #2 Batch 8.
4.4 Tone is informative and grounded. Marketing puffery is a defect.

---

## 5. Severity Levels

When Agent 2 (or any agent) records a finding, classify it using these levels:

| Level | Definition | Examples |
|---|---|---|
| **Blocker** | Ships nothing until fixed. Violates trust, legal, or build integrity. | Fake DVM byline restored; missing FTC disclosure on a review page; `turbo build` fails; broken canonical |
| **High** | Must fix before the current PR ships. | Missing meta description on indexable page; broken internal link; missing schema on health page |
| **Medium** | Should fix in the current PR if low-cost, otherwise file as follow-up. | Title > 60 chars; OG image not regenerating; minor copy puffery |
| **Low** | Nice-to-fix; file as backlog. | Stylistic inconsistencies; non-critical accessibility nits; minor breadcrumb label tweaks |
| **Info** | Observation only, no action required. | Page count milestones; cache hit-rate notes |

Severity is set by the auditor (Agent 2). Agent 1 may dispute, but must do so in the PR with evidence — not by silently downgrading.

---

## 6. Verified vs Unverified Findings

Every finding is one of:

- **Verified.** Has file path + line + observed value + expected value. Reproducible from the repo state.
- **Unverified.** A hypothesis. Must be labelled `UNVERIFIED:` (or equivalent) in the report. Cannot block a PR on its own.

An unverified finding does not justify a code change. Either verify it
(promote to Verified) or drop it. Speculative cleanup is not maintenance.

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

---

## 9. When Standards Change

This file is the constitution. To change it:
1. Open a PR that modifies this file with a clear rationale.
2. Reference the PR in `RELEASES.md` when it merges.
3. Update any dependent standards in `OPERATIONS.md` and `AGENTS.md`.

Do not change this file in passing.
