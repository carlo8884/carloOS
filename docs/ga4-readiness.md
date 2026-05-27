# GA4 Integration Readiness — Dog.com

> Operational doc. Used during launch prep alongside [`dog-com-soft-launch-checklist.md`](./dog-com-soft-launch-checklist.md).

## Why GA4 is launch-gating

The site reads `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `apps/dog-com/src/app/layout.tsx`. If unset or still `G-XXXXXXXXXX`, no analytics fire. Launching without GA4 means zero traffic data during the critical 30-day organic indexing window — there's no way to recover that data after the fact.

---

## Setup steps

### 1. Create the property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Create property
3. Name: `Dog.com`, timezone: your primary audience, currency: USD
4. Industry: Pets / Animals
5. Business size: smallest tier (irrelevant to functionality)

### 2. Create the web stream

1. Property → Data streams → Add stream → Web
2. URL: `https://dog.com` (no trailing slash, https)
3. Stream name: `Dog.com Web`
4. Enhanced measurement: leave defaults on (scroll, outbound clicks, site search, file downloads, video)

### 3. Wire the Measurement ID

- Copy the `G-XXXXXXXXXX` value from the stream
- Vercel → `dog-com` project → Settings → Environment Variables
- Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with **Production** scope (also Preview if you want preview-deploy tracking)
- Trigger a redeploy — env var changes don't take effect until the next build

### 4. Verify firing (both required)

1. **Realtime:** GA4 → Reports → Realtime. Open the production URL in another tab. You appear within 30 seconds.
2. **DebugView:** Install the GA Debugger Chrome extension, enable it, visit the site. GA4 → Admin → DebugView shows the event stream with parameter detail.

If nothing appears within 60 seconds:
- Verify env var is set in **Production** (not just Preview)
- Verify a deploy happened **after** the env var was set
- Disable ad blockers (uBlock Origin, AdGuard, Brave Shields all block GA4 by default)
- Open browser DevTools → Network → filter `gtag` → confirm requests are firing

---

## Custom dimensions wired in code

`layout.tsx` registers three custom dimensions in the GA4 config call:

| Code | Parameter |
|---|---|
| `dimension1` | `content_type` |
| `dimension2` | `site_section` |
| `dimension3` | `site_name` |

To use them in reports, register each one in GA4:

1. Admin → Custom definitions → Create custom dimension
2. Name: `Site name`, scope: `Event`, parameter: `site_name`
3. Repeat for `content_type` and `site_section`

Without registration the data still arrives, but GA4 won't expose it in reports.

---

## Conversions to mark

GA4 → Admin → Events → mark as conversion once they fire:

| Event | Source | Why |
|---|---|---|
| `email_signup` | Mailchimp success callback in `/api/subscribe` (once wired) | Lead capture |
| `affiliate_click` | ReviewCard CTA via `affiliateHref()` (once wired) | Revenue intent |
| `calculator_complete` | Food-cost calculator final result render | Engagement + SEO signal |

Events only appear in the events list after first occurrence. Mark them after the first real fire.

---

## Privacy and consent

- **Data retention:** default is 2 months. Change to **14 months** (max free tier): Admin → Data Settings → Data Retention
- **EU traffic:** GA4 requires Consent Mode v2. The site does not currently implement a consent banner — decision required from Carlo before EU launch
- **Privacy page parity:** `/privacy` must list Google Analytics as a data processor. Confirm before launch.

---

## Per-site adaptation

Each site needs its own GA4 property. Do not share Measurement IDs across sites.

| Site | Property name | Vercel project |
|---|---|---|
| Dog.com | `Dog.com` | dog-com |
| Vets.co | `Vets.co` | vets-co |
| Fish.com | `Fish.com` | fish-com |
| Saddle.com | `Saddle.com` | saddle-com |
| Lizard.com | `Lizard.com` | lizard-com |

One Google account can host all 5 properties. The custom-dimension registration and conversion-marking steps must be repeated per property.

---

## Common failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| No events in Realtime | Ad blocker, or env var unset in Production scope | Disable blocker; verify Vercel env + redeploy |
| Events fire but `site_name` shows `(not set)` | Custom dimension not registered in GA4 | Register the dimension under Admin → Custom definitions |
| Events from wrong domain | Stream URL mismatch | Edit stream URL to match production |
| Retention reverts to 2 months | Free-tier default — not auto-extended | Manually set to 14 months |
| Realtime works, reports stay empty | GA4 processes reports ~24h late | Wait — this is normal, not a bug |
