# Monday Launch Checklist — 2026-06-01

**Audience:** Carlo
**Owner:** COO (me)
**Last updated:** 2026-05-29 (evening)
**Launch date:** Monday 2026-06-01 (delayed from Friday per Carlo's call)

This is your end-to-end punch list to get all 10 sites live on Monday. It's ordered by **must-do** → **should-do** → **nice-to-have**. If you skip the nice-to-haves, nothing breaks; if you skip a must-do, the launch is broken.

---

## A. Must-do before Monday (BLOCKING)

### A1. DNS — point each domain at its Vercel project

For each of the 10 domains, log into your DNS provider (Cloudflare/GoDaddy/wherever) and set:

| Domain | Vercel project | DNS record |
|---|---|---|
| dog.com | `dog-com` | A → `76.76.21.21` (Vercel apex) + CNAME `www` → `cname.vercel-dns.com` |
| fish.com | `fish-com` | same pattern |
| lizard.com | `lizard-com` | same pattern |
| saddle.com | `saddle-com` | same pattern |
| vets.co | `vets-co` | same pattern |
| horses.com | `horses-com` | same pattern |
| petfood.com | `petfood-com` | same pattern |
| petfoods.com | `petfoods-com` | same pattern |
| ferret.com | `ferret-com` | same pattern |
| ferrets.com | `ferrets-com` | same pattern |

**Step-by-step (per domain):**
1. In Vercel dashboard → project → "Domains" → "Add" → enter `<domain>.com`
2. Vercel will tell you the exact A + CNAME records to set
3. Paste those records into your DNS provider
4. Wait for verification (5 minutes to 48 hours — usually under an hour)
5. Vercel auto-issues a Let's Encrypt SSL cert once DNS resolves

**Time:** ~30 minutes total. Plan to do this Sunday morning so DNS has time to propagate.

### A2. Mailchimp sender verification

Without this, every email capture fails silently.

1. Log into Mailchimp
2. Audience → Manage Audience → Settings → Required email footer content
3. Verify the sender email (likely `hello@dog.com` or similar)
4. Confirm the verification email Mailchimp sends
5. Repeat per domain if you're using separate Audiences per site (recommended)

**Time:** ~10 minutes.

### A3. GA4 property + 10 data streams

Without this, you have zero analytics visibility.

1. Go to **analytics.google.com**
2. Admin → Create Property → "carloOS Portfolio"
3. Add data streams (one per site):
   - Click "Add stream" → Web → Enter `https://dog.com`
   - Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)
   - Repeat for all 10 domains
4. Paste each Measurement ID into Vercel: Project Settings → Environment Variables → `NEXT_PUBLIC_GA_MEASUREMENT_ID` (for that project)
5. Redeploy the project (Vercel will auto-trigger on env var change)

**Time:** ~15 minutes.

### A4. Run image manifest sync

If the Unsplash + Pexels keys are still in your terminal env vars from before:

```bash
cd ~/carloOS
git pull origin main
node scripts/sync-images.mjs
git add packages/ui/src/data/image-manifest.json
git commit -m "chore(images): populate manifest"
git push origin main
```

This populates real photos for the 5 new sites' homepages. Without it, hero images show the "pending sync" placeholder.

**Time:** ~5 minutes.

---

## B. Should-do before Monday (degraded launch but not broken)

### B1. Submit each sitemap to Google Search Console

For each domain:

1. Go to **search.google.com/search-console**
2. Add property → URL prefix → `https://<domain>.com`
3. Verify ownership via DNS TXT record (Vercel provides one) OR via Google Analytics tag (easier if you've already done A3)
4. Once verified, submit `https://<domain>.com/sitemap.xml`

Without this, Google will find your sites eventually via natural crawling. WITH this, indexing starts within 24-48 hours. **Big SEO advantage to do this Sunday.**

**Time:** ~30 minutes for all 10.

### B2. Set Vercel spend cap

Per the cost discipline policy:

1. Vercel dashboard → Team Settings → Billing → Usage limits
2. Set spend cap at `$50/month`
3. Configure email alerts at `$10`, `$25`, `$40`

If you hit the cap, builds slow but nothing breaks. Better than waking up to a $400 bill.

**Time:** ~5 minutes.

### B3. Apply to affiliate networks

Without these, monetization is dark. Open these tabs in parallel and fill out the applications:

- **Amazon Associates** — affiliate-program.amazon.com (24-48hr approval)
- **Chewy Partners** — chewy.com/partners (24-48hr approval)
- **SmartPak Affiliate** — smartpakequine.com/about/affiliate (1 week approval)
- **Dover Saddlery Affiliate** — doversaddlery.com (via Awin, 1 week)
- **ImpactRadius** — impact.com (for pet insurance roster: Lemonade, Embrace, Pets Best, etc., 1 week)

The monetization bot will wire tracking IDs into `apps/<site>/src/data/affiliate-routes.ts` once you have them. Don't wait for all approvals — get the easy ones (Amazon, Chewy) in by Monday.

**Time:** ~30 minutes upfront, then waiting.

### B4. Pre-launch smoke test each site

For each of the 10 sites, after DNS resolves:

1. Open `https://<domain>.com` in an incognito tab
2. Verify: hero loads, no console errors, footer disclosure visible
3. Click 3 links — verify they don't 404
4. Submit a test email capture — verify it lands in Mailchimp
5. Hit `https://<domain>.com/sitemap.xml` — verify it returns XML

Catch problems before Google sees them.

**Time:** ~5 minutes per site = ~50 minutes total. Do this Sunday afternoon.

---

## C. Nice-to-have before Monday (post-launch is fine)

### C1. Custom 404 pages
Each site has Next.js default. Polish optional.

### C2. Open Graph image generation
Currently uses default site logo. Better OG images = more social shares.

### C3. Mailchimp welcome sequence wiring
7 lead magnets shipped, zero welcome sequences. Monetization bot is queued to write these. Lower priority than getting traffic.

### C4. AI assistant `/ask` MVP
Per the brief (PR #67), this is **7-14 days post-launch** anyway. Don't try to ship Monday.

### C5. Affiliate link wiring across pages
Once you have Amazon + Chewy IDs, the monetization bot wires them. Not blocking launch.

---

## D. Monday launch sequence (the day-of plan)

**Sunday evening:**
- ☐ All DNS records set (A1) — gives DNS overnight to propagate
- ☐ Image manifest synced (A4)
- ☐ GSC sitemaps submitted (B1) — gives Google overnight to start crawling
- ☐ All 10 sites smoke-tested (B4)

**Monday morning:**
- ☐ Verify all 10 sites resolve at their custom domains (not the `.vercel.app` URLs)
- ☐ Verify Vercel cert is issued (green padlock in browser)
- ☐ Check GA4 dashboards — should start seeing real-time visits
- ☐ Announce on social (Twitter, LinkedIn) — even if just 1 post per site over the week

**Monday evening:**
- ☐ Review first day's GSC + GA4 numbers
- ☐ Note any 404s or crawl errors GSC reports
- ☐ I (COO) will dispatch follow-up agents to fix anything that surfaced

---

## E. What happens AFTER Monday

Week 1 post-launch focus:
- Affiliate ID wiring (monetization bot does this once you provide IDs)
- Mailchimp welcome sequences (monetization bot)
- Fix any GSC crawl errors (COO)
- Continue programmatic content expansion on under-built sites (COO)
- Monitor Vercel spend, throttle agent dispatch if needed (COO)

Week 2-4:
- AI assistant `/ask` MVP on Dog.com (per brief PR #67)
- Apply for Mediavine/Raptive once any site clears their pageview threshold
- First weekly summary report

Month 2-3:
- Stripe membership wiring (per brief in `ops/handoffs/2026-05-29-stripe-membership-spec.md`)
- Photography commissions for top-10 highest-traffic pages
- Acquisition pitch deck refresh (per `ops/handoffs/2026-05-29-acquirer-pitch-framework.md`)

---

## F. Rollback plan (if something breaks Monday)

If a site is broken at launch:

1. **DNS issue:** In Vercel, click "Remove" on the custom domain → site falls back to `.vercel.app` URL → fix DNS → re-add custom domain
2. **Build failure on a PR:** Don't merge that PR. Previous deploy stays live.
3. **All sites down (Vercel issue):** Check status.vercel.com. Rare. Wait.
4. **Mailchimp captures failing:** Email captures fail silently. Won't break the site. Fix in dashboard.
5. **GA4 not tracking:** Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var. Re-deploy.

**Nothing in the launch is irreversible.** Worst case: you take a domain offline for a few hours while fixing.

---

## G. What I'll do without you needing to ask

Sunday + Monday + this whole week, I will:
- Drive the merge cycle for any PRs still open
- Dispatch content agents to fill remaining programmatic SEO gaps
- Watch for GSC errors after Monday and fix them
- Refresh STATUS.md / BACKLOG.md / DASHBOARD.md
- Brief the monetization bot on conversion data once GA4 starts streaming

You don't need to coordinate any of that. Just do A1-A4 + watch your phone.

---

🤖 Generated by COO orchestration run 2026-05-29.
