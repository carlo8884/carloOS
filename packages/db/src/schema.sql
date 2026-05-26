-- ============================================================
-- CarloOS Database Schema — Supabase / PostgreSQL
-- Covers: users, memberships, content, products, analytics
-- Run via: supabase db push
-- ============================================================

-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";        -- fuzzy text search
create extension if not exists "unaccent";         -- search normalization

-- ─────────────────────────────────────────────────────────────
-- ENUMS
-- ─────────────────────────────────────────────────────────────

create type site_id as enum (
  'dog-com',
  'vets-co',
  'fish-com',
  'saddle-com',
  'lizard-com'
);

create type content_type as enum (
  'article',       -- editorial long-form
  'review',        -- product review / comparison
  'breed',         -- breed/species profile
  'guide',         -- how-to guide
  'location',      -- local/directory page
  'faq'            -- FAQ page
);

create type membership_tier as enum (
  'free',
  'premium'        -- $7-12/month via Stripe
);

create type subscription_status as enum (
  'active',
  'trialing',
  'past_due',
  'canceled',
  'incomplete'
);

-- ─────────────────────────────────────────────────────────────
-- USERS & AUTH
-- Extends Supabase auth.users
-- ─────────────────────────────────────────────────────────────

create table public.profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  email           text not null,
  display_name    text,
  avatar_url      text,

  -- Which sites they've interacted with
  primary_site    site_id,

  -- Newsletter subscriptions per site (array of site_ids)
  newsletter_subs site_id[] default '{}',

  -- AI personalization: interest tags per site (jsonb map of site_id -> string[])
  -- e.g. {"dog-com": ["golden-retriever", "pet-insurance", "puppy"]}
  interest_tags   jsonb default '{}',

  -- Onboarding
  onboarding_complete boolean default false,
  onboarding_data     jsonb default '{}',

  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─────────────────────────────────────────────────────────────
-- MEMBERSHIPS & STRIPE
-- ─────────────────────────────────────────────────────────────

create table public.memberships (
  id                  uuid primary key default uuid_generate_v4(),
  user_id             uuid not null references public.profiles(id) on delete cascade,
  site_id             site_id not null,

  tier                membership_tier not null default 'free',
  status              subscription_status not null default 'active',

  -- Stripe
  stripe_customer_id      text,
  stripe_subscription_id  text unique,
  stripe_price_id         text,

  -- Dates
  trial_ends_at       timestamptz,
  current_period_start timestamptz,
  current_period_end  timestamptz,
  canceled_at         timestamptz,

  created_at          timestamptz default now(),
  updated_at          timestamptz default now(),

  unique(user_id, site_id)
);

alter table public.memberships enable row level security;

create policy "Users can view own memberships"
  on public.memberships for select
  using (auth.uid() = user_id);

create index on public.memberships(stripe_subscription_id);
create index on public.memberships(user_id, site_id);

-- ─────────────────────────────────────────────────────────────
-- CONTENT
-- ─────────────────────────────────────────────────────────────

create table public.posts (
  id              uuid primary key default uuid_generate_v4(),
  site_id         site_id not null,
  content_type    content_type not null default 'article',

  -- URL
  slug            text not null,
  path            text not null,   -- full path, e.g. /breeds/golden-retriever

  -- Content
  title           text not null,
  subtitle        text,
  excerpt         text,
  body_mdx        text,            -- MDX source (future CMS)
  body_html       text,            -- rendered HTML (current migration path)

  -- SEO
  meta_title      text,
  meta_description text,
  og_image        text,

  -- Authorship
  author_name     text,
  author_credentials text,
  author_avatar   text,
  dvm_reviewed    boolean default false,

  -- Schema
  schema_type     text default 'Article',   -- 'Article', 'FAQPage', 'Product', etc.
  schema_data     jsonb default '{}',

  -- Taxonomy
  tags            text[] default '{}',
  species         text,            -- for breed/species pages
  breed           text,            -- for breed pages

  -- State
  published       boolean default false,
  featured        boolean default false,
  premium_only    boolean default false,   -- gated behind membership

  -- Timestamps
  published_at    timestamptz,
  updated_at      timestamptz default now(),
  created_at      timestamptz default now(),

  unique(site_id, slug)
);

alter table public.posts enable row level security;

-- Public can read published non-premium posts
create policy "Anyone can read published posts"
  on public.posts for select
  using (published = true and premium_only = false);

-- Premium members can read premium posts on their site
create policy "Premium members can read premium posts"
  on public.posts for select
  using (
    published = true
    and premium_only = true
    and exists (
      select 1 from public.memberships m
      where m.user_id = auth.uid()
        and m.site_id = posts.site_id
        and m.tier = 'premium'
        and m.status = 'active'
    )
  );

-- Full text search index
create index posts_fts_idx on public.posts
  using gin(to_tsvector('english', coalesce(title,'') || ' ' || coalesce(excerpt,'') || ' ' || coalesce(body_html,'')));

create index on public.posts(site_id, published, published_at desc);
create index on public.posts(site_id, content_type);
create index on public.posts(site_id, slug);
create index on public.posts using gin(tags);

-- ─────────────────────────────────────────────────────────────
-- PRODUCTS (affiliate / review items)
-- ─────────────────────────────────────────────────────────────

create table public.products (
  id              uuid primary key default uuid_generate_v4(),

  -- Identity
  name            text not null,
  brand           text,
  slug            text unique not null,
  asin            text,             -- Amazon ASIN for affiliate links
  external_url    text,

  -- Categorization (can apply across multiple sites)
  applicable_sites site_id[] default '{}',
  category        text,             -- 'pet-food', 'saddle', 'reptile-equipment', etc.
  subcategory     text,

  -- Content
  description     text,
  image_url       text,
  price_range     text,

  -- Review data
  expert_score    numeric(3,1),     -- out of 10
  review_count    integer default 0,
  affiliate_program text,           -- 'amazon', 'chewy', 'trupanion', etc.

  -- Specs (flexible per category)
  specs           jsonb default '{}',

  -- State
  active          boolean default true,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

alter table public.products enable row level security;

create policy "Anyone can read active products"
  on public.products for select
  using (active = true);

create index on public.products(category);
create index on public.products using gin(applicable_sites);
create index on public.products(asin);

-- ─────────────────────────────────────────────────────────────
-- ANALYTICS EVENTS (lightweight, privacy-respecting)
-- Supplements GA4 — captures product clicks, email signups,
-- scroll depth for our own analysis without PII.
-- ─────────────────────────────────────────────────────────────

create table public.events (
  id          uuid primary key default uuid_generate_v4(),
  site_id     site_id not null,

  -- Event identity
  event_type  text not null,  -- 'affiliate_click', 'email_signup', 'search', 'page_view'
  event_data  jsonb default '{}',

  -- Attribution (no PII — anonymous session only)
  session_id  text,
  post_id     uuid references public.posts(id) on delete set null,
  product_id  uuid references public.products(id) on delete set null,

  -- User (optional — logged-in users only)
  user_id     uuid references public.profiles(id) on delete set null,

  created_at  timestamptz default now()
);

-- Partition by month in production — for now just index
create index on public.events(site_id, event_type, created_at desc);
create index on public.events(product_id);
create index on public.events(post_id);

-- RLS: users can only see their own events; service role sees all
alter table public.events enable row level security;

create policy "Users can insert events"
  on public.events for insert
  with check (true);  -- anyone can log events (including anon)

create policy "Users can view own events"
  on public.events for select
  using (auth.uid() = user_id or user_id is null);

-- ─────────────────────────────────────────────────────────────
-- EMAIL SUBSCRIPTIONS
-- Supabase-side record; Mailchimp is the delivery system.
-- ─────────────────────────────────────────────────────────────

create table public.email_subscriptions (
  id              uuid primary key default uuid_generate_v4(),
  site_id         site_id not null,
  email           text not null,

  -- Status
  confirmed       boolean default false,
  unsubscribed    boolean default false,

  -- Attribution
  source          text,             -- 'homepage', 'article-golden-retriever', etc.
  interest_tags   text[] default '{}',

  -- Mailchimp
  mailchimp_id    text,

  -- User link (if they sign up / log in later)
  user_id         uuid references public.profiles(id) on delete set null,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now(),

  unique(site_id, email)
);

alter table public.email_subscriptions enable row level security;

create policy "Service role manages subscriptions"
  on public.email_subscriptions
  using (false);  -- only service role key can access

create index on public.email_subscriptions(site_id, email);
create index on public.email_subscriptions(mailchimp_id);

-- ─────────────────────────────────────────────────────────────
-- SPECIES / BREED DATA
-- Structured data for breed/species pages.
-- Powers AI personalization and recommendation engine.
-- ─────────────────────────────────────────────────────────────

create table public.species (
  id              uuid primary key default uuid_generate_v4(),
  site_id         site_id not null,

  -- Identity
  slug            text not null,
  common_name     text not null,
  scientific_name text,
  aliases         text[] default '{}',  -- alternative names for search

  -- Classification
  category        text,     -- 'dog-breed', 'reptile', 'fish', 'horse-breed', etc.
  subcategory     text,     -- 'sporting-group', 'lizard', 'tropical-fish', etc.

  -- Care data (structured, varies by site)
  care_data       jsonb default '{}',
  -- dog-com: { size, weight_range, lifespan, exercise_level, ... }
  -- lizard-com: { enclosure_min, temp_basking, temp_cool, humidity, uvb_required, ... }
  -- fish-com: { tank_size_min, ph_range, temperature_range, ... }

  -- Health conditions (array of condition names)
  health_conditions text[] default '{}',

  -- SEO
  post_id         uuid references public.posts(id) on delete set null,

  -- State
  active          boolean default true,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now(),

  unique(site_id, slug)
);

alter table public.species enable row level security;

create policy "Anyone can read active species"
  on public.species for select
  using (active = true);

create index on public.species(site_id, category);
create index on public.species using gin(to_tsvector('english', common_name || ' ' || coalesce(scientific_name,'')));
create index on public.species using gin(aliases);
create index on public.species using gin(health_conditions);

-- ─────────────────────────────────────────────────────────────
-- USER CONTENT INTERACTIONS
-- Powers AI personalization — "you recently read about Golden Retrievers"
-- No PII beyond user_id FK.
-- ─────────────────────────────────────────────────────────────

create table public.user_interactions (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid not null references public.profiles(id) on delete cascade,
  site_id         site_id not null,

  -- What they interacted with
  interaction_type text not null,  -- 'page_view', 'search', 'bookmark', 'share'
  post_id         uuid references public.posts(id) on delete cascade,
  species_id      uuid references public.species(id) on delete cascade,
  product_id      uuid references public.products(id) on delete cascade,

  -- Context
  search_query    text,
  session_duration_sec integer,

  created_at      timestamptz default now()
);

alter table public.user_interactions enable row level security;

create policy "Users can manage own interactions"
  on public.user_interactions for all
  using (auth.uid() = user_id);

create index on public.user_interactions(user_id, site_id, created_at desc);
create index on public.user_interactions(user_id, interaction_type);

-- ─────────────────────────────────────────────────────────────
-- UPDATED_AT TRIGGERS
-- ─────────────────────────────────────────────────────────────

create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.profiles
  for each row execute procedure update_updated_at();

create trigger set_updated_at before update on public.memberships
  for each row execute procedure update_updated_at();

create trigger set_updated_at before update on public.posts
  for each row execute procedure update_updated_at();

create trigger set_updated_at before update on public.products
  for each row execute procedure update_updated_at();

create trigger set_updated_at before update on public.email_subscriptions
  for each row execute procedure update_updated_at();

create trigger set_updated_at before update on public.species
  for each row execute procedure update_updated_at();

-- ─────────────────────────────────────────────────────────────
-- SEED: Site configs in DB (for server-side access without env)
-- ─────────────────────────────────────────────────────────────

create table public.site_configs_db (
  site_id     site_id primary key,
  config      jsonb not null,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.site_configs_db enable row level security;

create policy "Anyone can read site configs"
  on public.site_configs_db for select
  using (true);
