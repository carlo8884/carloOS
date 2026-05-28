# Saddle Fit — 8-email Lead-Magnet Course

This is the email content for the Saddle.com 12-Point Saddle Fit Checklist lead-magnet flow.

## How to use these files

1. Each file in this folder is one email in the sequence (00–07).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `saddle-fit`" (the `source=saddle-fit-checklist*` value passed by `EmailCapture` is what tags them).
4. Use the timing column below for the delay before each email.

## Sequence map

| # | File | Delay after signup | Subject line |
|---|---|---|---|
| 00 | `00-welcome-and-checklist.md` | Immediate (0 min) | The 12-point saddle fit checklist is attached |
| 01 | `01-the-research-behind-the-points.md` | 3 days | Why "it looks right" isn't enough — the research |
| 02 | `02-self-check-vs-fitter.md` | 7 days | What you can self-check — and what only a fitter can |
| 03 | `03-used-saddle-protocol.md` | 14 days | New vs used — the used-saddle inspection protocol |
| 04 | `04-brand-fit-personality.md` | 21 days | Brand-fit personality — where to start trying |
| 05 | `05-reflock-vs-replace.md` | 35 days | Re-flock or replace? The honest economics |
| 06 | `06-disciplines-and-fit.md` | 56 days | Discipline-specific fit — dressage, jump, AP, Western |
| 07 | `07-final-and-resources.md` | 90 days | The library — where to go next |

## Rules baked into every email

- One short paragraph at the top — what this email gives.
- Body content grounded in a public source (cited inline). SMS / MSA standards and peer-reviewed pressure-mapping research only.
- No first-person fitting claims. We do not personally fit saddles; we cite the people who do.
- One single CTA per email — usually a link to a Saddle.com reference page.
- Affiliate links allowed but disclosed in the email footer (FTC) — same QC-STANDARDS.md §3.2 rules as the site.
- Unsubscribe link in every email (Mailchimp default).

## Frontmatter convention

Each email file uses simple frontmatter for Mailchimp paste:

```
---
subject: <subject line, ≤55 chars>
preheader: <preheader text shown in the inbox preview, ≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: saddle-fit
---
<email body in markdown>
```

Subject + preheader paste into Mailchimp's subject/preheader fields. Body pastes into the Mailchimp drag-and-drop editor.
