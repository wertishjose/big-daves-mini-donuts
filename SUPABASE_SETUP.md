# Supabase Setup Guide

This project already includes the Supabase code wiring. Your job is mostly:

1. Create a Supabase project
2. Copy in the project keys
3. Create one admin user
4. Run the database setup SQL
5. Sign in at `/admin`

After that, dashboard updates will save to Supabase and the public site will load the same saved content.

## 1. Create a Supabase project

1. Go to the Supabase dashboard: [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click `New project`
3. Choose your organization
4. Enter a project name
   Example: `big-daves-mini-donuts`
5. Create a strong database password and save it somewhere safe
6. Choose a region close to Minnesota or your main customers
7. Click `Create new project`
8. Wait for the project to finish provisioning

Supabase’s getting started docs: [Getting Started](https://supabase.com/docs/guides/getting-started)

## 2. Find your project URL and key

After the project is ready:

1. Open your project in Supabase
2. Go to `Settings`
3. Open `API Keys` or `API`
   Supabase’s docs refer to a project URL and a publishable key. This project currently uses the env var name `VITE_SUPABASE_ANON_KEY`, so paste your public browser-safe key there.
4. Copy:
   `Project URL`
5. Copy:
   your public `anon` key or browser `publishable` key, depending on what your dashboard labels it as

Relevant docs:

- [API keys](https://supabase.com/docs/guides/getting-started/api-keys)
- [JavaScript client initialization](https://supabase.com/docs/reference/javascript/v1/initializing)

## 3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

This project already includes an example env file here:

[.env.example](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/.env.example:1)

Create a new file named `.env` in the project root and add:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-or-publishable-key
```

In this project:

- `VITE_SUPABASE_URL` is read in [src/lib/supabase.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/lib/supabase.js:1)
- `VITE_SUPABASE_ANON_KEY` is also read in [src/lib/supabase.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/lib/supabase.js:1)

Important:

- Do not put the secret/service-role key in `.env` for this frontend app
- Only use the public browser-safe key here

## 4. Create the database table used by the dashboard

This project already includes the SQL you need:

[supabase/schema.sql](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/supabase/schema.sql:1)

To run it:

1. In Supabase, open `SQL Editor`
2. Create a new query
3. Paste the contents of `supabase/schema.sql`
4. Run the query

This creates:

- the `public.site_content` table
- row-level security rules for authenticated users
- one starter row with slug `main`

## 5. Create one admin login user

This site’s admin login uses email + password through Supabase Auth.

The login form is already connected here:

[src/pages/AdminPage.jsx](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/pages/AdminPage.jsx:1)

To create Dave’s login:

1. In Supabase, go to `Authentication`
2. Open `Users`
3. Create one user for Dave
4. Use Dave’s email address
5. Set a password he can store safely

If Supabase asks whether the email should be confirmed, confirm it or use the dashboard option that creates the user as ready to log in.

Supabase Auth docs:

- [Auth overview](https://supabase.com/docs/guides/auth/)
- [Users](https://supabase.com/docs/guides/auth/users)
- [Password auth](https://supabase.com/docs/guides/auth/passwords)

## 6. How the admin dashboard authentication works

The dashboard page is `/admin`.

What happens:

1. Dave opens the admin page
2. He enters the email and password for the user you created
3. The project signs him in with `supabase.auth.signInWithPassword(...)`
4. If the login succeeds, the dashboard form appears

This logic is already in:

- [src/pages/AdminPage.jsx](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/pages/AdminPage.jsx:1)
- [src/lib/supabase.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/lib/supabase.js:1)

The form itself is here:

[src/components/admin/AdminDashboard.jsx](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/components/admin/AdminDashboard.jsx:1)

## 7. How dashboard updates persist to the public site

This is the key idea:

- the admin dashboard and the public website both use the same `site_content` record in Supabase

Here is the flow:

1. The public site loads content using [src/hooks/useSiteContent.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/hooks/useSiteContent.js:1)
2. That hook reads the row where `slug = 'main'` from the `site_content` table
3. Dave signs into `/admin`
4. Dave updates fields like location, address, hours, open status, and special
5. When he taps save, the same hook writes the updated JSON back to Supabase with an `upsert`
6. The public homepage reads that same saved content and shows it to customers

Public page entry point:

[src/pages/HomePage.jsx](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/pages/HomePage.jsx:1)

Shared data hook:

[src/hooks/useSiteContent.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/hooks/useSiteContent.js:1)

## 8. What to test after setup

After you add the env vars and create the admin user:

1. Open the site
2. Open `/admin`
3. Sign in with the admin email and password
4. Change:
   current location, hours, or featured special
5. Tap `Save Changes`
6. Refresh the public homepage
7. Confirm the updated business status appears there

## 9. Troubleshooting

If the admin login does not work:

- Make sure `.env` exists in the project root
- Make sure `VITE_SUPABASE_URL` is correct
- Make sure `VITE_SUPABASE_ANON_KEY` is the public browser-safe key, not the secret key
- Make sure the admin user exists in `Authentication > Users`

If saving does not work:

- Make sure you ran [supabase/schema.sql](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/supabase/schema.sql:1)
- Make sure the `site_content` table exists
- Make sure row-level security policies were created

## 10. One important note about naming

Supabase’s newer docs often say `publishable key`.

This project’s code currently uses:

`VITE_SUPABASE_ANON_KEY`

That is okay. For this project, put your public browser-safe project key into that variable so the existing code keeps working.
