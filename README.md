# Chengyan Bio — Astro bilingual B2B website

This is a static Astro website starter for a global B2B ingredient trading company. It is designed around ingredient sourcing and trade coordination, not claims of in-house manufacturing or unverified certifications.

## 1. Before publishing

Update these placeholders first:

- `src/data/site.ts`: brand name, navigation and all Chinese/English copy.
- `src/layouts/BaseLayout.astro`: replace `https://example.com` with your real domain in canonical and hreflang URLs.
- `src/pages/[lang]/contact.astro`: replace `sales@example.com` with your actual sales email.
- `astro.config.mjs`: set `site` to your real domain.
- `wrangler.jsonc`: set `name` to the exact Cloudflare Worker name shown in your dashboard.
- Remove or rewrite any product, application or legal text that does not match your actual supply capability.

The current company name “澄研生物 / Chengyan Bio”, email and domain are demonstration placeholders.

## 2. Install and run locally

Use PowerShell in the project folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:4321/`.

Build:

```powershell
npm.cmd run build
```

The static website is generated in `dist/`.

## 3. Inquiry form (Supabase)

The contact form is functional after Supabase is configured.

1. In Supabase SQL Editor, run `supabase/inquiries.sql`.
2. Copy your Supabase Project URL and anon/publishable key.
3. Create `.env` in the project root (do not commit it):

```env
PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_OR_PUBLISHABLE_KEY
```

4. Restart the dev server and submit a test inquiry.
5. In Supabase Table Editor, confirm that a row appears in `inquiries`.

Only the public anon/publishable key belongs in the browser. Never use a `service_role` or secret key in this website. Configure email notifications separately (for example, a Supabase Edge Function or an approved automation); inserting a row does not automatically send an email.

For Cloudflare Workers Builds, add `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` as build environment variables if the client code needs them at build time. These are public browser variables, not secrets. Do not put private keys in `PUBLIC_` variables.

## 4. Deploy to Cloudflare Workers

- Build command: `npm run build` (or `npx astro build`)
- Deploy command: `npx wrangler deploy`
- Root directory: `/` if the Astro project is at repository root
- Ensure `wrangler.jsonc` `name` exactly matches the Worker name in Cloudflare.
- The static assets directory is `./dist`.

No `@astrojs/cloudflare` adapter is required for this fully static site.

## 5. Pages included

- `/zh/` and `/en/` homepages
- Product overview and three product detail routes
- Custom sourcing, industries, quality, about, supply-chain coordination, certifications, cooperation examples, buyer resources, contact, privacy and terms pages
- Chinese and English navigation, language switching, canonical and hreflang tags, sitemap generation

## 6. Important content and compliance notes

This website intentionally avoids inventing factory capacity, certifications, customer case studies, product test results, stock availability or regulatory approvals. Add only statements you can document. For pharmaceutical, food, cosmetic or other regulated applications, verify product identity, supplier qualification, destination-market rules and intended use before making claims.
