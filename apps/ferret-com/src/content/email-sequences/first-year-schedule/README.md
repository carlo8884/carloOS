# Ferret First-Year Schedule — 8-Email Course

Email content for the Ferret.com first-year-schedule lead-magnet flow.

## How to use these files

1. Each file in this folder is one email in the sequence (00–07).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `first-year-schedule`" (the `source=first-year-schedule` value passed by `EmailCapture` is what tags them).
4. Use the timing column below for the delay before each email.

## Sequence map

| # | File | Delay after signup | Subject line |
|---|---|---|---|
| 00 | `00-welcome-and-schedule.md` | Immediate (0 min) | Your Ferret First-Year Schedule is attached |
| 01 | `01-vaccine-schedule.md` | 3 days | Ferret vaccines — distemper, rabies, reactions |
| 02 | `02-finding-an-exotic-vet.md` | 7 days | Finding an exotic-pet vet (and why it matters) |
| 03 | `03-ferret-proofing.md` | 14 days | Ferret-proofing — what they actually get into |
| 04 | `04-diet-essentials.md` | 21 days | Diet do's and don'ts — the carnivore rules |
| 05 | `05-dental-care.md` | 35 days | Dental care — why ferrets need it from kithood |
| 06 | `06-insulinoma-watch.md` | 56 days | Insulinoma — what to watch for starting age 3 |
| 07 | `07-library-and-next-steps.md` | 90 days | The Ferret.com library — where to go next |

## Rules baked into every email

- One short paragraph at the top — what this email gives.
- Body content grounded in a public exotic-pet veterinary source (cited inline).
- One single CTA per email — usually a link to a Ferret.com reference page.
- Affiliate links allowed but disclosed in the email footer (FTC).
- Unsubscribe link in every email (Mailchimp default).
- No fake "Dr. X recommends" or "our vets say" — same QC-STANDARDS.md §1 rules as the site.

## Frontmatter convention

```
---
subject: <subject line, ≤55 chars>
preheader: <preheader text, ≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: first-year-schedule
---
<email body in markdown>
```
