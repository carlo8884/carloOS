-- DogPicture.com — orders + generations schema
-- Apply via `supabase db push` from the repo root after wiring the Supabase
-- project. Tables are namespaced with the `portrait_` prefix so they don't
-- collide with the shared `posts` / `memberships` tables used by the rest of
-- the CarloOS portfolio.

-- ─── portrait_generations ──────────────────────────────────────────────────
-- Each row is one AI-rendered portrait. A single user request can produce up
-- to three rows (multi-style bundles). The `id` doubles as the URL slug for
-- /preview/[id].
create table if not exists public.portrait_generations (
  id                text primary key,
  pet_name          text not null,
  style_id          text not null,
  source_photo_url  text,
  generated_url     text not null,
  prompt            text not null,
  model             text not null,
  created_at        timestamptz not null default now()
);

create index if not exists portrait_generations_created_at_idx
  on public.portrait_generations (created_at desc);

-- ─── portrait_orders ───────────────────────────────────────────────────────
-- One row per successful Stripe checkout session. Updated by the webhook
-- handler when Printify confirms fulfillment / shipping.
create table if not exists public.portrait_orders (
  id                  text primary key,
  stripe_session_id   text unique not null,
  customer_email      text not null,
  product_type        text not null,
  generation_id       text not null references public.portrait_generations(id),
  status              text not null default 'pending',
  printify_order_id   text,
  total_cents         integer not null default 0,
  image_url           text,
  pet_name            text,
  created_at          timestamptz not null default now()
);

create index if not exists portrait_orders_email_idx
  on public.portrait_orders (customer_email);

create index if not exists portrait_orders_created_at_idx
  on public.portrait_orders (created_at desc);

-- ─── RLS ─────────────────────────────────────────────────────────────────
-- These tables are only written by service-role (webhook + API routes) and
-- read by service-role on the order page. We keep RLS on with no public
-- policies — service role bypasses RLS, anon key gets nothing.
alter table public.portrait_generations enable row level security;
alter table public.portrait_orders enable row level security;
