# Marketing Landing Page

Single-page marketing site with an early-access email signup, built with Next.js + Tailwind.
Signups are stored in the `landing_signups` table in the same Supabase project as the main app.

## Setup

1. Run `supabase-landing-signups.sql` in the Supabase SQL Editor once.
2. `npm install`
3. `npm run dev`

## Deploy

Push to GitHub, then import the repo into a new Vercel project. Set the two env vars from
`.env.local` (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) in the Vercel project settings.

## Rebranding

The placeholder name "Ledgerly" appears in:
- app/layout.tsx (metadata title)
- app/page.tsx (nav logo + footer)

Swap those once a final name + domain are locked in.
