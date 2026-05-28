# Aquarium Cycling — 8-week Email Course

This is the email content for the Fish.com Aquarium Cycling Survival Kit lead-magnet flow.

## How to use these files

1. Each file in this folder is one email in the sequence (00–07).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `cycling-guide`" (the `source=cycling-guide-landing-*` value passed by the cycling-guide landing page is what tags them).
4. Use the timing column below for the delay before each email.

## Sequence map

| # | File | Delay after signup | Subject line |
|---|---|---|---|
| 00 | `00-welcome-and-cycle-reset.md` | Immediate (0 min) | Your Aquarium Cycling Survival Kit is here |
| 01 | `01-test-kit-literacy.md` | 3 days | Your test kit is the whole game — pick the right one |
| 02 | `02-ammonia-source-choices.md` | 7 days | Where the ammonia comes from (and what to avoid) |
| 03 | `03-mid-cycle-troubleshooting.md` | 14 days | Stuck on a nitrite spike? Read this before you panic. |
| 04 | `04-cycle-completion-test.md` | 21 days | How to know the cycle is really done |
| 05 | `05-first-stocking-strategy.md` | 28 days | First fish — light load, hardy species, not goldfish |
| 06 | `06-maintenance-after-cycling.md` | 42 days | Weekly maintenance: smaller and steadier than you think |
| 07 | `07-final-and-resources.md` | 56 days | The library — where to go next |

## Rules baked into every email

- One short paragraph at the top — what this email gives.
- Body content grounded in a public source (cited inline).
- One single CTA per email — usually a link to a Fish.com reference page.
- Affiliate links allowed but disclosed in the email footer (FTC).
- Unsubscribe link in every email (Mailchimp default).
- No fake "Dr. X recommends" or "our biologists say" — same QC-STANDARDS.md §1 rules as the site.

## Frontmatter convention

Each email file uses simple frontmatter for Mailchimp paste:

```
---
subject: <subject line>
preheader: <preheader text shown in the inbox preview>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: cycling-guide
---
<email body in markdown>
```

Subject + preheader paste into Mailchimp's subject/preheader fields. Body pastes into the Mailchimp drag-and-drop editor.
