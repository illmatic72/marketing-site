-- Run this in your Supabase SQL Editor (same project as the main app)
-- Stores email signups from the marketing landing page.

create table if not exists landing_signups (
  id          uuid primary key default uuid_generate_v4(),
  email       text not null unique,
  created_at  timestamptz not null default now()
);

alter table landing_signups enable row level security;

-- Anyone (anonymous visitors) can submit their email...
create policy "anyone can sign up"
  on landing_signups for insert
  to anon
  with check (true);

-- ...but nobody can read, update, or delete via the public API.
-- View signups from the Supabase Table Editor / SQL Editor instead.
