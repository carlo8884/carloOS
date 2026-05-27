# Puppy Onboarding — 8-week Email Course

This is the email content for the Dog.com puppy-schedule lead-magnet flow.

## How to use these files

1. Each file in this folder is one email in the sequence (00–07).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `puppy-schedule`" (the `source=puppy-schedule-landing-*` value passed by `EmailCapture` is what tags them).
4. Use the timing column below for the delay before each email.

## Sequence map

| # | File | Delay after signup | Subject line |
|---|---|---|---|
| 00 | `00-welcome-and-schedule.md` | Immediate (0 min) | The puppy schedule (Weeks 8–16) is attached |
| 01 | `01-week-8-9-settle-in.md` | 3 days | Week 8–9 focus: settle, name, first vet visit |
| 02 | `02-socialization-science.md` | 7 days | Why "the window closes at 16 weeks" is real |
| 03 | `03-common-mistakes.md` | 14 days | The 5 puppy-week mistakes that cause adult problems |
| 04 | `04-formal-training.md` | 21 days | When (and how) to start formal training |
| 05 | `05-feeding-transitions.md` | 28 days | Three-meals to two-meals: when and how |
| 06 | `06-adolescent-preview.md` | 42 days | Months 6–18: the adolescent regression nobody warned you about |
| 07 | `07-final-and-resources.md` | 56 days | The library: where to go next |

## Rules baked into every email

- One short paragraph at the top — what this email gives.
- Body content grounded in a public source (cited inline).
- One single CTA per email — usually a link to a Dog.com reference page.
- Affiliate links allowed but disclosed in the email footer (FTC).
- Unsubscribe link in every email (Mailchimp default).
- No fake "Dr. X recommends" or "our vets say" — same QC-STANDARDS.md §1 rules as the site.

## Frontmatter convention

Each email file uses simple frontmatter for Mailchimp paste:

```
---
subject: <subject line>
preheader: <preheader text shown in the inbox preview>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: puppy-schedule
---
<email body in markdown>
```

Subject + preheader paste into Mailchimp's subject/preheader fields. Body pastes into the Mailchimp drag-and-drop editor.
