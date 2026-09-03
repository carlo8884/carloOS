# CarloOS — Domain Portfolio Monorepo

**Five premium domain properties. One codebase. Shared infrastructure.**

<!-- pagecount-intro:start -->
**1079 pages** across 10 sites: dog.com · fish.com · lizard.com · saddle.com · vets.co · horses.com · petfood.com · petfoods.com · ferret.com · ferrets.com
<!-- pagecount-intro:end -->

_Page counts auto-update via `scripts/dashboard.mjs`._

For live operating state see [STATUS.md](./STATUS.md). For the trust / SEO / legal contract see [QC-STANDARDS.md](./QC-STANDARDS.md).

---

## 🚀 Go Live in 4 Steps

### Step 1 — Push to GitHub

Create the repo at github.com/new: name `carloOS`, private, no README, no .gitignore.

Then push:
```bash
git clone https://github.com/carlo8884/carloOS.git
cd carloOS
npm install
```

### Step 2 — Supabase

1. Go to supabase.com → New project (create one, name it `carloOS`)
2. Wait for provisioning (~2 min)
3. SQL Editor → paste `packages/db/src/schema.sql` → Run
4. SQL Editor → paste `packages/db/src/indexes.sql` → Run
5. Settings → API → copy Project URL and anon key

### Step 3 — Deploy to Vercel

Import at vercel.com/new → GitHub → `carlo8884/carloOS`.

**Deploy Dog.com first:**
- Root Directory: `apps/dog-com`
- Framework Preset: Next.js (auto-detected)
- Environment Variables:
  ```
  NEXT_PUBLIC_SUPABASE_URL        = [from Supabase step 3]
  NEXT_PUBLIC_SUPABASE_ANON_KEY   = [from Supabase step 3]
  SUPABASE_SERVICE_ROLE_KEY       = [from Supabase Settings → API → service_role]
  NEXT_PUBLIC_SITE_ID             = dog-com
  NEXT_PUBLIC_GA_MEASUREMENT_ID   = G-XXXXXXXXXX  (set up GA4, add later)
  ```

Repeat for each remaining site, changing only root directory and `NEXT_PUBLIC_SITE_ID`:

| App | Root Directory | NEXT_PUBLIC_SITE_ID |
|-----|---------------|---------------------|
| vets.co | apps/vets-co | vets-co |
| fish.com | apps/fish-com | fish-com |
| saddle.com | apps/saddle-com | saddle-com |
| lizard.com | apps/lizard-com | lizard-com |

**Custom domains (after first deploy):**
Vercel → Domain → Add → point DNS at Vercel nameservers or add CNAME/A records.

### Step 4 — Seed Database

From the carloOS root directory (after setting env vars in `.env.local`):
```bash
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SITE_ID=dog-com

npx tsx scripts/seed.ts --all
npx tsx scripts/seed-fish.ts
```

---

## Sites

<!-- pagecount-table:start -->
| Site | Domain | Pages | Priority |
|------|--------|-------|----------|
| dog-com | dog.com | 212 | Flagship |
| fish-com | fish.com | 116 | Tier 1 |
| lizard-com | lizard.com | 114 | Tier 2 |
| saddle-com | saddle.com | 61 | Tier 2 |
| vets-co | vets.co | 124 | Tier 2 |
| horses-com | horses.com | 176 | Tier 2 |
| petfood-com | petfood.com | 116 | Tier 2 |
| petfoods-com | petfoods.com | 14 | Tier 3 |
| ferret-com | ferret.com | 126 | Tier 2 |
| ferrets-com | ferrets.com | 20 | Tier 3 |
<!-- pagecount-table:end -->

## Stack

- **Framework:** Next.js 14 (App Router) · React 18 · TypeScript
- **Styling:** Tailwind CSS + shared design token system
- **Database:** Supabase (PostgreSQL + Auth + Storage + Realtime)
- **Hosting:** Vercel (one project per site)
- **Monorepo:** Turborepo with proper caching pipeline
- **Payments:** Stripe (scaffolded for memberships — not yet live)
- **Email:** Mailchimp (one audience per site)
- **Analytics:** GA4 + internal Supabase event tracking

## Monorepo Structure

```
carloOS/
├── apps/
│   ├── dog-com/          # Dog.com — 50 pages
│   ├── fish-com/         # Fish.com — 16 pages
│   ├── lizard-com/       # Lizard.com — 15 pages
│   ├── saddle-com/       # Saddle.com — 13 pages
│   └── vets-co/          # Vets.co — 12 pages
│
├── packages/
│   ├── ui/               # 12 shared components
│   │   └── src/components/
│   │       ├── ArticleLayout.tsx   # Article + sidebar layout
│   │       ├── ReviewCard.tsx      # Product review cards
│   │       ├── FAQAccordion.tsx    # FAQ with schema markup
│   │       ├── EmailCapture.tsx    # Newsletter forms (sidebar/section/inline)
│   │       ├── BreedHealthCard.tsx # Dog breed health cards
│   │       ├── SearchBar.tsx       # Debounced search w/ keyboard nav
│   │       ├── AnalyticsDashboard.tsx  # Internal metrics dashboard
│   │       ├── SEOHead.tsx         # buildMetadata() + OG image generation
│   │       ├── Nav.tsx / Footer.tsx
│   │       ├── Breadcrumb.tsx
│   │       └── SidebarCard.tsx     # TableOfContents + RelatedLinks
│   │
│   ├── config/           # Site themes, colors, URLs, fonts per domain
│   │   └── index.ts      # getSiteConfig(siteId) → full theme object
│   │
│   └── db/               # Supabase client + all query functions
│       ├── schema.sql     # Run in Supabase SQL Editor first
│       ├── indexes.sql    # Run second — 15 performance indexes
│       ├── client.ts      # createServerClient, getPosts, searchPosts, etc.
│       └── types.ts       # TypeScript types for all tables
│
├── scripts/
│   ├── seed.ts            # Seeds species, products, posts for all sites
│   ├── seed-fish.ts       # Fish species data (15 species)
│   ├── migrate-html.ts    # Imports HTML prototype pages to Supabase
│   └── generate-site-files.ts  # Generates sitemap + robots.txt
│
├── turbo.json             # Build pipeline with env var declarations
├── tsconfig.json          # Path aliases: @carloOS/ui, @carloOS/db, @carloOS/config
└── .env.example           # Copy to each app's .env.local
```

## Development

```bash
# Install all dependencies (from root)
npm install

# Run all sites simultaneously
npx turbo dev

# Run a single site
cd apps/dog-com && npm run dev

# Build all sites
npx turbo build

# Type check all packages
npx turbo type-check
```

## API Routes (per site)

| Route | Purpose |
|-------|---------|
| `/api/analytics` | Internal page views, affiliate clicks, email signups |
| `/api/search` | Full-text search across posts + species |
| `/api/subscribe` | Mailchimp email subscription |
| `/api/og` | Dynamic OG image generation (edge runtime, Satori) |
| `/api/checkout` | Stripe checkout session (membership flow) |

## Content Architecture

### Dog.com (50 pages)
- **Breeds:** 4 breed profiles + dynamic `[slug]` template
- **Health:** 8 condition guides + emergency symptoms guide
- **Nutrition:** Hub + 11 articles (WSAVA, grain-free/DCM, toxic foods, supplements, weight management, prescription diets, safe foods, feeding frequency, how much to feed, reading labels, puppy nutrition)
- **Training:** Hub + 11 articles (positive reinforcement, marker training, basic commands, puppy schedule, crate training, house training, separation anxiety, leash reactivity, resource guarding, trainer credentials)
- **Reviews:** 5 reviews (pet insurance, dry food, flea prevention, beds, crates)
- **Legal:** Privacy policy, terms, editorial standards
- **Other:** FAQ, find-a-vet, editorial standards

### Fish.com (16 pages)
- **Species:** 6 profiles (betta, neon tetra, clownfish, angelfish, goldfish, oscar, discus)
- **Health:** Disease guide, nitrogen cycle
- **Reviews:** Filters, heaters, water test kits
- **Setup, Water Chemistry**

### Lizard.com (15 pages)
- **Setup:** Hub + UVB lighting, temperature, humidity, substrate guides
- **Health:** Feeding guide, sick reptile signs
- **Reviews:** UVB bulbs, terrariums, thermometers

### Saddle.com (13 pages)
- **Guides:** Saddle fit, seat size, leather care, used saddle buying
- **Reviews:** English saddles, Stubben, Pessoa, Collegiate
- **Hubs:** English, Western

### Vets.co (12 pages)
- **Breed Health:** Golden Retriever, Labrador, French Bulldog
- **Services:** Telehealth comparison, find-a-vet directory
- **Reviews:** Pet insurance

## Affiliate Programs

Affiliate links are managed in each ReviewCard component via `ctaAffiliateProgram` and `ctaAffiliateProduct` props. Active programs:
- Amazon Associates
- Chewy Affiliate
- Trupanion / Healthy Paws (pet insurance)
- Stubben / Pessoa (saddle brands via ShareASale)
- Vetster / AskVet (telehealth)

All pages with affiliate links include disclosure per FTC guidelines. Editorial rankings are independent of affiliate relationships — see `/editorial-standards`.

## Environment Variables

See `.env.example` for full documentation. Required for production:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only, analytics API)
- `NEXT_PUBLIC_SITE_ID` (different per deployment)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional but recommended)
- `MAILCHIMP_API_KEY` + `MAILCHIMP_AUDIENCE_ID` (for email capture)

## Adding a New Site

1. Copy `apps/dog-com` to `apps/new-site`
2. Update `packages/config/index.ts` with the new site's theme
3. Update `turbo.json` to include the new app
4. Replace content in `src/app/` with site-specific pages
5. Add to Vercel with correct `NEXT_PUBLIC_SITE_ID`

## Deployment Architecture

```
github.com/carlo8884/carloOS (private repo)
    ↓
Vercel (5 projects, one per domain)
    ↓
Supabase (single project, shared across all sites, scoped by site_id)
    ↓
Cloudflare (CDN + DNS for all 5 domains)
```
